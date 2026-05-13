const User =
  require("../models/User")

const bcrypt =
  require("bcryptjs")

const jwt =
  require("jsonwebtoken")

const sendEmail =
  require("../config/sendEmail")

// REGISTER

const registerUser =
  async (req, res) => {

    try {

      const {
        name,
        email,
        password,
        role,
      } = req.body

      // CHECK EXISTING USER

      const existingUser =
        await User.findOne({
          email,
        })

      if (existingUser) {

        return res.status(400)
          .json({

            message:
              "User already exists",
          })
      }

      // HASH PASSWORD

      const hashedPassword =
        await bcrypt.hash(
          password,
          10
        )

      // CREATE USER

      const user =
        await User.create({

          name,

          email,

          password:
            hashedPassword,

          role,
        })

      // JWT TOKEN

      const token =
        jwt.sign(

          {
            id: user._id,
          },

          process.env.JWT_SECRET,

          {
            expiresIn: "7d",
          }
        )

      // SEND EMAIL

      await sendEmail(

        email,

        "Welcome to SmartEstate",

        `Hello ${name},

You have successfully registered as a ${role} on SmartEstate.

Thank you for joining SmartEstate!`
      )

      res.status(201).json({

        token,

        user: {

          id: user._id,

          name: user.name,

          email: user.email,

          role: user.role,
        },
      })

    } catch (error) {

      console.log(error)

      res.status(500).json({

        message:
          "Server Error",
      })
    }
  }

// LOGIN

const loginUser =
  async (req, res) => {

    try {

      const {
        email,
        password,
      } = req.body

      const user =
        await User.findOne({
          email,
        })

      if (!user) {

        return res.status(400)
          .json({

            message:
              "Invalid Credentials",
          })
      }

      const isMatch =
        await bcrypt.compare(

          password,

          user.password
        )

      if (!isMatch) {

        return res.status(400)
          .json({

            message:
              "Invalid Credentials",
          })
      }

      const token =
        jwt.sign(

          {
            id: user._id,
          },

          process.env.JWT_SECRET,

          {
            expiresIn: "7d",
          }
        )

      res.status(200).json({

        token,

        user: {

          id: user._id,

          name: user.name,

          email: user.email,

          role: user.role,
        },
      })

    } catch (error) {

      console.log(error)

      res.status(500).json({

        message:
          "Server Error",
      })
    }
  }

module.exports = {

  registerUser,

  loginUser,
}