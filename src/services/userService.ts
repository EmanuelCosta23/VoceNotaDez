import { User, UserCreationAttributes } from "src/models/User.js"

export const userService = {
    findByEmail: async (email: string) => {
        const user = await User.findOne({
            where: {
                email
            }
        })
        return user
    },
    create: async (attributes: UserCreationAttributes) => {
        const user = await User.create(attributes)
        return user
    }
}