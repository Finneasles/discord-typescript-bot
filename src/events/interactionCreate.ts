import { Event } from "@/types";
import { logger } from "@/utils";

const event: Event = {
  name: "interactionCreate",
  execute: async (args) => {
    const interaction = args;
    logger({
      message: `Interaction received: [${interaction}].`,
      type: "info",
    });
  },
};

export default event;
