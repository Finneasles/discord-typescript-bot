import { GuildOption } from "@/types";
import { Guild } from "discord.js";

export const validateInstance = (instance: { token: string }) => {
  if (!instance.token) {
    throw new Error("No token provided.");
  }
};

export const setGuildOption = ({
  guild,
  option,
}: {
  guild: Guild;
  option: GuildOption;
}) => {};
