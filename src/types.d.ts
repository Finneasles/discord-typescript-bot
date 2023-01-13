import { AutocompleteInteraction,CommandInteraction, Message, PermissionResolvable, SlashCommandBuilder } from "discord.js";

export interface SlashCommand {
    command: SlashCommandBuilder | any,
    execute: (interaction : CommandInteraction) => void,
    autocomplete?: (interaction: AutocompleteInteraction) => void,
    cooldown?: number
}

export interface Command {
    parameter: string,
    execute: (message: Message, args: Array<string>) => void,
    permissions: Array<PermissionResolvable>,
    aliases: Array<string>,
    cooldown?: number,
}

export interface GuildOption {
    [key: string]: any,
}