const router = require("express").Router();
const bcrypt = require("bcrypt");
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

// Get a Post
router.get("/:id", async (req, res) => {
    try {
        const postId = req.params.id
        const post = await prisma.post.findFirst({
            where: {
                id: parseInt(postId),
            },
        })

        if (post) {
            res.status(200).json({
                post: post,
                error: false,
                errorMsg: ''
            })
        }
        else {
            res.status(404).json({
                post: {},
                error: true,
                errorMsg: "Post not found"
            })
        }
    } catch (error) {
        res.status(500).json({
            post: {},
            error: true,
            errorMsg: 'Something went wrong'
        })
    }
});

// Create new Post
router.post("/", async (req, res) => {
    try {
        const newPost = await prisma.post.create({
            data: req.body,
        })

        if (newPost) {
            res.status(200).json({
                post: newPost,
                error: false,
                errorMsg: ''
            })
        }
        else {
            res.status(200).json({
                post: {},
                error: true,
                errorMsg: 'Something went wrong'
            })
        }

    } catch (error) {
        console.log(error)
        res.status(500).json({
            post: {},
            error: true,
            errorMsg: error
        })
    }
});

// Update Post
router.put("/:id", async (req, res) => {
    try {
        const postId = req.params.id
        const post = await prisma.post.findFirst({
            where: {
                id: parseInt(postId),
            },
        })

        if (post?.userId === req.body.userId) {

            const updatedPost = await prisma.post.update({
                where: {
                    id: parseInt(postId)
                },
                data: req.body
            })

            if (updatedPost?.id) {
                res.status(200).json({
                    post: updatedPost,
                    error: false,
                    errorMsg: ''
                })
            }
            else {
                res.status(403).json({
                    post: {},
                    error: true,
                    errorMsg: 'Unable to update post'
                })
            }
        }
        else {
            res.status(403).json({
                post: {},
                error: true,
                errorMsg: "You can update only your post!"
            })
        }
    } catch (error) {
        console.log('skdkk', error);

        res.status(500).json({
            post: {},
            error: true,
            errorMsg: error
        })
    }
});

// Delete Post
router.delete("/:id", async (req, res) => {
    try {
        const postId = req.params.id
        const post = await prisma.post.findFirst({
            where: {
                id: parseInt(postId),
            },
        })

        if (post?.userId === req.body.userId) {

            const deletedPost = await prisma.post.delete({
                where: {
                    id: parseInt(postId)
                },
            })

            if (deletedPost?.id) {
                res.status(200).json({
                    post: deletedPost,
                    error: false,
                    errorMsg: ''
                })
            }
            else {
                res.status(403).json({
                    post: {},
                    error: true,
                    errorMsg: 'Unable to delete post'
                })
            }
        }
        else {
            res.status(403).json({
                post: {},
                error: true,
                errorMsg: "You can delete only your post!"
            })
        }
    } catch (error) {
        res.status(500).json({
            post: {},
            error: true,
            errorMsg: error
        })
    }
});

// Like Post
router.put("/:id/like", async (req, res) => {
    try {
        const postId = req.params.id
        const post = await prisma.post.findFirst({
            where: {
                id: parseInt(postId),
            },
            include: {
                likedBy: true,
            }
        })

        if (post) {
            let alreadyLiked = post?.likedBy.findIndex(p => p.id === parseInt(req.body.userId))

            if (alreadyLiked) {
                const likedPost = await prisma.post.update({
                    where: {
                        id: parseInt(postId),
                    },
                    data: {
                        likedBy: {
                            connect: {
                                id: parseInt(req.body.userId),
                            },
                        },
                    },
                });

                if (likedPost) {
                    res.status(200).json({
                        post: likedPost,
                        error: false,
                        errorMsg: ''
                    })
                }
                else {
                    res.status(200).json({
                        post: {},
                        error: true,
                        errorMsg: 'Unable to like the post'
                    })
                }
            }
            else {
                const disLikedPost = await prisma.post.update({
                    where: {
                        id: parseInt(postId),
                    },
                    data: {
                        likedBy: {
                            disconnect: {
                                id: parseInt(req.body.userId),
                            },
                        },
                    },
                });

                if (disLikedPost) {
                    res.status(200).json({
                        post: disLikedPost,
                        error: false,
                        errorMsg: ''
                    })
                }
                else {
                    res.status(200).json({
                        post: {},
                        error: true,
                        errorMsg: 'Unable to dislike the post'
                    })
                }
            }

        }
        else {
            res.status(404).json({
                post: {},
                error: true,
                errorMsg: 'Post not found'
            })
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({
            post: {},
            error: true,
            errorMsg: error
        })
    }
});
// Like Post
router.put("/:id/like", async (req, res) => {
    try {
        const postId = req.params.id
        const post = await prisma.post.findFirst({
            where: {
                id: parseInt(postId),
            },
            include: {
                likedBy: true,
            }
        })

        if (post) {
            let alreadyLiked = post?.likedBy.findIndex(p => p.id === parseInt(req.body.userId))

            if (alreadyLiked) {
                const likedPost = await prisma.post.update({
                    where: {
                        id: parseInt(postId),
                    },
                    data: {
                        likedBy: {
                            connect: {
                                id: parseInt(req.body.userId),
                            },
                        },
                    },
                });

                if (likedPost) {
                    res.status(200).json({
                        post: likedPost,
                        error: false,
                        errorMsg: ''
                    })
                }
                else {
                    res.status(200).json({
                        post: {},
                        error: true,
                        errorMsg: 'Unable to like the post'
                    })
                }
            }
            else {
                const disLikedPost = await prisma.post.update({
                    where: {
                        id: parseInt(postId),
                    },
                    data: {
                        likedBy: {
                            disconnect: {
                                id: parseInt(req.body.userId),
                            },
                        },
                    },
                });

                if (disLikedPost) {
                    res.status(200).json({
                        post: disLikedPost,
                        error: false,
                        errorMsg: ''
                    })
                }
                else {
                    res.status(200).json({
                        post: {},
                        error: true,
                        errorMsg: 'Unable to dislike the post'
                    })
                }
            }

        }
        else {
            res.status(404).json({
                post: {},
                error: true,
                errorMsg: 'Post not found'
            })
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({
            post: {},
            error: true,
            errorMsg: error
        })
    }
});

// Get User's Timeline
router.get("/timeline/:id", async (req, res) => {
    try {
        const loggedInUser = await prisma.user.findUnique({
            where: {
                id: parseInt(req.params.id),
            },
            include: {
                following: true,
            }
        })

        const userPosts = await prisma.post.findMany({
            where: {
                userId: loggedInUser?.id,
            },
        })

        if (loggedInUser && userPosts) {
            const friendsPost = await Promise.all(
                loggedInUser.following.map(async function (friend) {
                    return await prisma.post.findFirst({
                        where: {
                            userId: friend.id,
                        },
                    })
                })
            )

            res.status(200).json({
                post: [...userPosts, ...friendsPost],
                error: false,
                errorMsg: ''
            })
        }
        else {
            res.status(403).json({
                post: {},
                error: true,
                errorMsg: "Something went wrong"
            })
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({
            post: {},
            error: true,
            errorMsg: error
        })
    }
});

// Get User's Posts
router.get("/profile/:id", async (req, res) => {
    try {
        const loggedInUser = await prisma.user.findUnique({
            where: {
                id: parseInt(req.params.id),
            },
            include: {
                following: true,
            }
        })

        if (loggedInUser) {
            let loggedInUserPosts = await prisma.post.findFirst({
                where: {
                    userId: loggedInUser.id,
                },
            });


            res.status(200).json({
                post: loggedInUserPosts,
                error: false,
                errorMsg: ''
            })
        }
        else {
            res.status(403).json({
                post: {},
                error: true,
                errorMsg: "Something went wrong"
            })
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({
            post: {},
            error: true,
            errorMsg: error
        })
    }
});



module.exports = router;