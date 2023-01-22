import {
  AutocompleteInteraction,
  CommandInteraction,
  Message,
  PermissionResolvable,
  SlashCommandBuilder,
} from "discord.js";

// export interface SlashCommand {
//     command: SlashCommandBuilder | any,
//     execute: (interaction : CommandInteraction) => void,
//     autocomplete?: (interaction: AutocompleteInteraction) => void,
//     cooldown?: number
// }

export interface Action {
  name?: string;
  description?: string;
  parameter?: string;
  execute: (message: Message, args: Array<string>) => void;
  permissions?: Array<PermissionResolvable>;
  aliases?: Array<string>;
  cooldown?: number;
  slash?: boolean;
  autocomplete?: (interaction: AutocompleteInteraction) => void;
}

export interface GuildOption {
  [key: string]: any;
}
