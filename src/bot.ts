import {
  Client,
  Collection,
  GatewayIntentBits,
  REST,
  SlashCommandBuilder,
} from "discord.js";
import {
  logger,
  nodejsErrorListener,
  registerCommands,
  validateInstance,
} from "@/utils";

import "dotenv/config";
import fs from "fs";
import { Action } from "@/types";

const rest = new REST({ version: "9" }).setToken(
  process.env.DISCORD_TOKEN || ""
);

const { Guilds, MessageContent, GuildMessages, GuildMembers } =
  GatewayIntentBits;

const client: Client<boolean> = new Client({
  intents: [Guilds, MessageContent, GuildMessages, GuildMembers],
});

const Instance = { token: process.env.DISCORD_TOKEN || "" };
validateInstance(Instance);

let commands = new Collection<string, Action>();
let slashCommands = new Collection<string, Action>();

let defaultPrefix = "!>";
let eventCounter = 0;
let actionCounter = 0;
let parsedSlashCommands: any[] = [];

const actionsDir = "/actions/";
const eventsDir = "/events/";

const actionFiles = fs.readdirSync(__dirname + actionsDir);
const eventsFiles = fs.readdirSync(__dirname + eventsDir);

eventsFiles.forEach((file) => {
  import(`@/${eventsDir}` + file).then((module) => {
    eventCounter++;
    client.on(module.default.name, module.default.execute);
    logger({
      message: `${
        eventCounter +
        actionCounter +
        "/" +
        (actionFiles.length + eventsFiles.length)
      } - Event  : [${module.default.name}] event successfully loaded.`,
      type: "load",
    });
  });
});

actionFiles.forEach((file) => {
  import(`@/${actionsDir}` + file).then((module) => {
    actionCounter++;
    if (module.default.slash == true) {
      slashCommands.set(module.default.parameter, module.default);
      parsedSlashCommands.push(
        new SlashCommandBuilder()
          .setName(module.default.parameter)
          .setDescription(module.default.description)
          .toJSON()
      );
    } else {
      commands.set(module.default.parameter, module.default);
    }
    logger({
      message: `${
        eventCounter +
        actionCounter +
        "/" +
        (actionFiles.length + eventsFiles.length)
      } - Action : [${module.default.slash ? "/" : defaultPrefix}${
        module.default.parameter
      }] ${
        module.default.slash ? "slash" : "prefixed"
      } command successfully loaded.`,
      type: "load",
    });

    if (actionCounter === actionFiles.length) {
      registerCommands({
        clientId: process.env.DISCORD_CLIENT_ID,
        commands: parsedSlashCommands,
        rest,
      });
    }
  });
});

nodejsErrorListener();

client.login(Instance.token);
