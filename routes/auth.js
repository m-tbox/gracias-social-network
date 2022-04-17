const router = require("express").Router();
const bcrypt = require("bcrypt");
const { PrismaClient, Prisma } = require('@prisma/client');

const prisma = new PrismaClient();

router.post("/signup", async (req, res) => {
  try {
    console.log(req.body, 'kkkk')
    const { username, email, password, profilePicture, coverPicture } = req.body;

    const salt = await bcrypt.genSalt(10);
    const encyptedPassword = await bcrypt.hash(password, salt);

    const newUser = await prisma.user.create({
      data: {
        username,
        email,
        password: encyptedPassword,
        profilePicture,
        coverPicture
      },
    })

    let userData = Object.assign({}, { ...newUser }, { password: null });

    if (newUser?.id) {
      res.status(200).json({
        userData: userData,
        error: false,
        errorMsg: ''
      })
    }
    else {
      res.status(200).json({
        userData: {},
        error: true,
        errorMsg: 'Something went wrong'
      })
    }

  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      // The .code property can be accessed in a type-safe manner
      if (error.code === 'P2002') {
        res.status(200).json({
          userData: {},
          error: true,
          errorMsg: 'This email already exist'
        })
      }
      else {
        res.status(500).json({
          userData: {},
          error: true,
          errorMsg: 'Something went wrong'
        })
      }
    }

    console.log(error);
  }
});

router.post("/login", async (req, res) => {
  try {

    const user = await prisma.user.findFirst({
      where: {
        email: req.body.email,
      },
    })

    if (user) {
      const validPassword = await bcrypt.compare(`` + req.body.password, user.password)

      const { password, ...rest } = user

      if (validPassword) {
        res.status(200).json({
          userData: rest,
          error: false,
          errorMsg: ''
        })
      } else {
        res.status(400).json({
          userData: {},
          error: true,
          errorMsg: "Invalid Password"
        });
      }

    }
    else {
      res.status(401).json({
        userData: {},
        error: true,
        errorMsg: "User does not exist"
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

module.exports = router;