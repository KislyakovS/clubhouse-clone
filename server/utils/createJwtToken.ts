import jwt from "jsonwebtoken"

export const createJwtToken = (user): string => {
    const token = jwt.sign({
        data: user
    },process.env.SECRET_KEY_JWT || "", {
        expiresIn: process.env.JWT_MAX_AGE,
        algorithm: "HS256"
    })

    return token
}