const router = require("express").Router();
const bcrypt = require("bcrypt");
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

// Get Single User
router.get("/:id", async (req, res) => {
    try {
        const userId = req.params.id

        const user = await prisma.user.findFirst({
            where: {
                id: parseInt(userId),
            },
            include: {
                following: true,
                likes: true
            }
        })

        if (user) {
            const { password, ...rest } = user

            res.status(200).json({
                userData: rest,
                error: false,
                errorMsg: ''
            })
        }
        else {
            res.status(200).json({
                userData: {},
                error: true,
                errorMsg: 'Unable to find the user with id: ' + userId
            })
        }
    } catch (error) {
        res.status(500).json({
            userData: {},
            error: true,
            errorMsg: error
        })
    }
});


// Update a User
router.put("/:id", async (req, res) => {
    if (req.body.userId == req.params.id) {
        if (req.body.password) {
            try {
                const salt = await bcrypt.genSalt(10);
                req.body.password = await bcrypt.hash(req.body.password, salt);
            } catch (err) {
                return res.status(500).json(err);
            }
        }
        try {
            const { username, profilePicture, coverPicture, city, description } = req.body;

            const user = await prisma.user.update({
                where: { id: req.body.userId },
                data: {
                    username,
                    profilePicture,
                    coverPicture,
                    city,
                    description
                }
            })

            const { password, ...rest } = user


            if (user?.id) {
                res.status(200).json({
                    userData: rest,
                    error: false,
                    errorMsg: ''
                })
            }
            else {
                res.status(200).json({
                    userData: {},
                    error: true,
                    errorMsg: 'Unable to update user'
                })
            }

        } catch (error) {
            res.status(500).json({
                userData: {},
                error: true,
                errorMsg: 'Something went wrong'
            })
        }

        res.status(200).json({
            userData: {},
            error: false,
            errorMsg: ''
        })
    }
    else {
        res.status(403).json({
            userData: {},
            error: true,
            errorMsg: "You can update only your account!"
        })
    }
});

// Delete User
router.delete("/:id", async (req, res) => {
    if (req.body.userId == req.params.id) {
        try {
            const deleteUser = await prisma.user.delete({
                where: {
                    id: req.body.userId,
                },
            })

            const { password, ...rest } = deleteUser

            if (deleteUser?.id) {
                res.status(200).json({
                    userData: rest,
                    error: false,
                    errorMsg: ''
                })
            }
            else {
                res.status(200).json({
                    userData: {},
                    error: true,
                    errorMsg: 'Unable to delete user'
                })
            }

        } catch (error) {
            res.status(500).json({
                userData: {},
                error: true,
                errorMsg: 'Something went wrong'
            })
        }

        res.status(200).json({
            userData: {},
            error: false,
            errorMsg: ''
        })
    }
    else {
        res.status(403).json({
            userData: {},
            error: true,
            errorMsg: "You can delete only your account!"
        })
    }
});

// Follow a User

router.put("/:id/follow", async (req, res) => {
    let followUserId = req.body.userId
    let loggedInUserId = req.params.id

    if (followUserId != loggedInUserId) {
        try {

            const loggedInUser = await prisma.user.findUnique({
                where: {
                    id: parseInt(loggedInUserId),
                },
                include: {
                    following: true,
                    followers: true
                }
            })

            if (loggedInUser) {
                let friendIndex = loggedInUser?.following.findIndex(u => u.id === parseInt(followUserId))

                if (friendIndex < 0) {
                    const updatedUser = await prisma.user.update({
                        where: {
                            id: parseInt(loggedInUserId),
                        },
                        data: {
                            following: {
                                connect: {   // change to disconnect for removing a follower. 
                                    id: parseInt(followUserId),
                                },
                            },
                        },
                    });

                    if (updatedUser) {
                        res.status(200).json({
                            userData: updatedUser,
                            error: false,
                            errorMsg: ''
                        })
                    }
                    else {
                        res.status(200).json({
                            userData: {},
                            error: true,
                            errorMsg: 'Unable to follow'
                        })
                    }
                }
                else {
                    res.status(200).json({
                        userData: {},
                        error: true,
                        errorMsg: "You are already following this user or user does not exist"
                    })
                }
            }
            else {
                res.status(200).json({
                    userData: {},
                    error: true,
                    errorMsg: "User not found"
                })
            }
        } catch (error) {
            res.status(500).json({
                userData: {},
                error: true,
                errorMsg: error
            })
        }
    }
    else {
        res.status(403).json({
            userData: {},
            error: true,
            errorMsg: "You can't follow yourself"
        })
    }
});

// Unfollow a User

router.put("/:id/unfollow", async (req, res) => {
    let userToUnfollowId = req.body.userId
    let loggedInUserId = req.params.id

    if (userToUnfollowId != loggedInUserId) {
        try {

            const loggedInUser = await prisma.user.findUnique({
                where: {
                    id: parseInt(loggedInUserId),
                },
                include: {
                    following: true,
                    followers: true
                }
            })

            if (loggedInUser) {
                let frienIndex = loggedInUser?.following.findIndex(u => u.id === parseInt(userToUnfollowId))

                if (frienIndex >= 0) {
                    const updatedUser = await prisma.user.update({
                        where: {
                            id: parseInt(loggedInUserId),
                        },
                        data: {
                            following: {
                                disconnect: [{
                                    id: parseInt(userToUnfollowId),
                                }],
                            },
                        },
                    });

                    if (updatedUser) {
                        res.status(200).json({
                            userData: updatedUser,
                            error: false,
                            errorMsg: ''
                        })
                    }
                    else {
                        res.status(200).json({
                            userData: {},
                            error: true,
                            errorMsg: 'Unable to follow'
                        })
                    }
                }
                else {
                    res.status(200).json({
                        userData: {},
                        error: true,
                        errorMsg: "Error unfollowing user"
                    })
                }
            }
            else {
                res.status(200).json({
                    userData: {},
                    error: true,
                    errorMsg: "User not found"
                })
            }
        } catch (error) {
            res.status(500).json({
                userData: {},
                error: true,
                errorMsg: error
            })
        }
    }
    else {
        res.status(403).json({
            userData: {},
            error: true,
            errorMsg: "You can't unfollow yourself"
        })
    }
});

// Get All Users Except friend
router.get("/", async (req, res) => {

    // TODO: remove passwords
    console.log('error')

    try {
        const userId = req.params.id

        const users = await prisma.user.findMany({
            include: {
                following: true,
                likes: true
            }
        })

        if (users) {

            res.status(200).json({
                userData: users,
                error: false,
                errorMsg: ''
            })
        }
        else {
            res.status(200).json({
                userData: {},
                error: true,
                errorMsg: 'Unable to find the user with id: ' + userId
            })
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({
            userData: {},
            error: true,
            errorMsg: error
        })
    }
});

module.exports = router;