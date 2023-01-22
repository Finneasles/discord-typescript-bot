import { setGuildOption } from "@/utils";
import { Action } from "@/types";

const action: Action = {
    parameter: "setPrefix",
  execute: (message, args) => {
    let prefix = args[1];
    if (!prefix) return message.channel.send("No prefix provided");
    if (!message.guild) return;
    setGuildOption({ guild: message.guild, option: { key : "prefix", value: prefix } });
    message.channel.send("Prefix successfully changed!");
  },
  permissions: ["Administrator"],
  aliases: [],
};

export default action;
