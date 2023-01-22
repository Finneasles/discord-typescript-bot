import { PermissionFlagsBits } from "discord.js";
import { Action } from "@/types";

const action : Action = {
    parameter: "hello",
    execute: (message, args) => {
        let toGreet = message.mentions.members?.first()
        message.channel.send(`Hello there ${toGreet ? toGreet.user.username : message.member?.user.username}!`)
    },
    cooldown: 10,
    aliases: ["sayHello"],
    permissions: ["Administrator", PermissionFlagsBits.ManageEmojisAndStickers] // to test
}

export default action