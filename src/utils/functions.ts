import { GuildOption } from "@/types";
import { Guild } from "discord.js";

export const validateInstance = (instance: { token: string }) => {
  if (!instance.token) {
    throw new Error("No token provided.");
  }
};

export const logger = ({
  message,
  type,
}: {
  message: string;
  type: string | null;
}) => {
  const log = console.log;
  const date = new Date();
  const formattedDate = `[${date.toLocaleTimeString()}]`;
  const icon = type
    ? { error: "❌", warn: "🚩", success: "🚀", info: "💬", connected: "🔗", load: "✅" }[
        type
      ]
    : "";
  const color = type
    ? {
        error: "\x1b[31m",
        warn: "\x1b[33m",
        success: "\x1b[32m",
        info: "\x1b[36m",
        connected: "\x1b[37m",
        load: "\x1b[37m",
      }[type]
    : "";
  const bracketColor = type === "error" ? "\x1b[33m" : "\x1b[36m";
  const substrings = message.split(/(\[.*?\])/);
  const processedSubstrings = substrings.map((substring) => {
    if (substring.startsWith("[") && substring.endsWith("]")) {
      const content = substring.slice(1, -1);
      return `[${bracketColor}${content}\x1b[0m]`;
    }
    return `${color}${substring}\x1b[0m`;
  });
  log(`${formattedDate} ${icon} ${processedSubstrings.join("")}`);
};

export const setGuildOption = ({
  guild,
  option,
}: {
  guild: Guild;
  option: GuildOption;
}) => {};

export const nodejsErrorListener = () => {
  process.on("unhandledRejection", (e) => {
    console.log(e);
  });
  process.on("uncaughtException", (e) => {
    console.log(e);
  });
  process.on("uncaughtExceptionMonitor", (e) => {
    console.log(e);
  });
};
