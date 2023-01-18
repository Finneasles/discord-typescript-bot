import { Event } from "@/types";
import { logger } from "@/utils";

const event: Event = {
  name: "ready",
  execute: async (args: any) => {
    const client = args;
    if (!client.user || !client.application) {
      return;
    }
    logger({
      message: `[@${client.user.tag}] bot client is running...`,
      type: "success",
    });
  },
};

export default event;
