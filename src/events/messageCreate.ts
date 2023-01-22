import { Action } from "@/types";
import { logger } from "@/utils";

const event: Action = {
  name: "messageCreate",
  execute: async (args) => {
    const message = args;
    if (message.author.bot) return;
    logger({
      message: `Message received: [${message}].`,
      type: "info",
    });


  },
};

export default event;
