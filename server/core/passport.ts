import passport from "passport"
import { Strategy as GitHubStrategy } from "passport-github"
import { Strategy as JwtStrategy, ExtractJwt } from "passport-jwt";
import { Users } from "../models"

const opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.SECRET_KEY_JWT
}

passport.use("jwt", new JwtStrategy(opts, (jwt_payload, done) => {
    
}));


passport.use("github", new GitHubStrategy({
    clientID: process.env.GITHUB_CLIENT_ID,
    clientSecret: process.env.GITHUB_CLIENT_SECRET,
    callbackURL: "http://localhost:3001/auth/github/callback"
}, async (accessToken, refreshToken, profile, done) => {
    try {
        const findUser = await Users.findOne({
            where: {
                username: profile.username
            }
        })

        if (findUser) {
            done(null, findUser.toJSON())
        } else {
            const userData = {
                fullname: profile.displayName,
                avatarUrl: profile.photos[0].value,
                isActive: 0,
                username: profile.username,
                phone: ''
            }
            const user = await Users.create(userData)
            done(null, user.toJSON())
        }
    } catch (error) {
        done(error)
    }
}))

passport.serializeUser((user, done) => {
    done(null, user);
});
  
passport.deserializeUser((id, done) => {
    Users.findById(id, (error, user) => {
        error ? done(error) : done(null, user)
    })
});

export { passport }