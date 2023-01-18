import { PermissionFlagsBits } from "discord.js";
import { Command } from "@/types";

const command : Command = {
    parameter: "hello",
    execute: (message, args) => {
        let toGreet = message.mentions.members?.first()
        message.channel.send(`Hello there ${toGreet ? toGreet.user.username : message.member?.user.username}!`)
    },
    cooldown: 10,
    aliases: ["sayHello"],
    permissions: ["Administrator", PermissionFlagsBits.ManageEmojisAndStickers] // to test
}

export default command