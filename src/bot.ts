import { Client, Collection, GatewayIntentBits } from "discord.js";
import {  logger, nodejsErrorListener, validateInstance } from "@/utils";

import "dotenv/config";
import fs from "fs";
import { Command } from "@/types";

const { Guilds, MessageContent, GuildMessages, GuildMembers } =
  GatewayIntentBits;

const client: Client<boolean> = new Client({
  intents: [Guilds, MessageContent, GuildMessages, GuildMembers],
});

const Instance = { token: process.env.DISCORD_TOKEN || "" };
validateInstance(Instance);

let commands = new Collection<string, Command>();

const commandsDir = "/commands/";
const eventsDir = "/events/";

const commandFiles = fs.readdirSync(__dirname + commandsDir);
const eventsFiles = fs.readdirSync(__dirname + eventsDir);


eventsFiles.forEach((file) => {
  import(`@/${eventsDir}` + file).then((module) => {
    client.on(module.default.name, module.default.execute);
    logger({
      message: `[${module.default.name}] event loaded successfully.`,
      type: "load",
    });
  });
});

commandFiles.forEach((file) => {
  import(`@/${commandsDir}` + file).then((module) => {
    commands.set(module.default.parameter, module.default);
    logger({
      message: `[${module.default.parameter}] command loaded successfully.`,
      type: "load",
    });
  });
});

nodejsErrorListener();

client.login(Instance.token);
