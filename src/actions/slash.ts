import { PermissionFlagsBits, SlashCommandBuilder } from 'discord.js';
import { Action } from "@/types";

const action: Action = {
  name: "Slash",
  description: "A slash command",
  parameter: "slash",
  slash: true,
  execute: (args) => {},
  cooldown: 10,
  aliases: ["sayHello"],
  permissions: ["Administrator", PermissionFlagsBits.ManageEmojisAndStickers], // to test
};

export default action