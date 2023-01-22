import { Action } from "@/types";
import { logger } from "@/utils";

const event: Action = {
  name: "interactionCreate",
  execute: async (args) => {
    const interaction = args;
    logger({
      message: `Interaction received: [${interaction}].`,
      type: "info",
    });
    interaction.reply("ok");
  },
};

export default event;
