import { Event } from "@/types";
import { logger } from "@/utils";

const event: Event = {
  name: "messageCreate",
  execute: async (args) => {
    const message = args;
    logger({
      message: `Message received: [${message}].`,
      type: "info",
    });
  },
};

export default event;
