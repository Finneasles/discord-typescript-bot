import { Client, GatewayIntentBits } from "discord.js";
import { validateInstance } from "@/utils";

import "dotenv/config";
import fs from "fs";

const { Guilds, MessageContent, GuildMessages, GuildMembers } =
  GatewayIntentBits;

const client: Client<boolean> = new Client({
  intents: [Guilds, MessageContent, GuildMessages, GuildMembers],
});

const Instance = { token: process.env.DISCORD_TOKEN || "" };

validateInstance(Instance);

// let slashCommands = new Collection<string, SlashCommand>();
// let commands = new Collection<string, Command>();
const commandsDir = "/events/commands/";

const commandFiles = fs.readdirSync(__dirname + commandsDir);

commandFiles.forEach((file) => {
  import(`@/${commandsDir}` + file).then((module) => {
    console.log(module.default.parameter, { aliases: module.default.aliases });
  });
});

console.log("\nCommand List:");
client.login(Instance.token);

client.on("ready", () => {
  console.log("Bot is running.");
});
