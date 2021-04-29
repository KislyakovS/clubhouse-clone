import express from "express"
import dotenv from "dotenv"
import multer from "multer"
import cors from "cors"

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
app.use(passport.initialize() )

app.get('/auth/github',
  passport.authenticate('github'));

app.get('/auth/github/callback', 
  passport.authenticate('github', { failureRedirect: '/login' }),
  (req, res) => {
    res.send(`<script>window.opener.postMessage(${JSON.stringify(req.user), '*'}) window.close()</script>`)
});

app.post("/upload", upload.single('avatar'), (req, res) => {
  res.json({
    url: `/avatars/${req.file.filename}`
  })
})

app.listen(3001, () => console.log("Server started!"))