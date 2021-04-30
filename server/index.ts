import express from "express"
import dotenv from "dotenv"
import multer from "multer"
import cors from "cors"
import { Code } from "./models"
import Axios from "axios"

declare global {
  namespace Express {
    interface User {
      id: number
    }
  }
}

dotenv.config()

import { passport } from "./core/passport"

const app = express()
const upload = multer({
  storage:  multer.diskStorage({
    destination: (_, __, next) => {
      next(null, `${__dirname}/uploads`)
    },
    filename: (_, file, next) => {
      next(null, file.fieldname + '-' + Date.now() + "." + file.mimetype.split("/").pop())
    }
  })
})

app.use(cors())
app.use(express.json())
app.use(passport.initialize() )

app.get('/auth/github',
  passport.authenticate('github'));

app.get('/auth/github/callback', 
  passport.authenticate('github', { failureRedirect: '/login' }),
  (req, res) => {
    res.send(`<script>window.opener.postMessage(${JSON.stringify(req.user), '*'}) window.close()</script>`)
});

const randomCode = (max: number, min: number): number => Math.floor(Math.random() * (max - min + 1) + min);

app.get("/auth/sms", async (req, res) => {
  const phone = req.query.phone;
  const userId = req.user.id;

  if (phone) {
    return res.status(404)
  }

  try {
    const codeData = randomCode(9999, 1000)

    const data = await Axios.get(`http://localhost:3000/sms?code=${code}`)

    await Code.create({
      code: codeData,
      user_id: userId
    })
  } catch(error) {
    res.status(500).json({
      message: error.message
    })
  }

});

app.post("/upload", upload.single('avatar'), (req, res) => {
  res.json({
    url: `/avatars/${req.file.filename}`
  })
})

app.listen(3001, () => console.log("Server started!"))