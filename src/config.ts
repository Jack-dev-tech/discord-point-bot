import { IChannel, ITask } from "my-module";

export const CONFIG = {
    BOT: {
        TOKEN: "MTExMjkzMTIwMTUyMzY0NjU3NA.GzGVeV.WnD0SOg8iLynpSzM0pFYOK-h7dYhuvVHbaser0",
        PREFIX: "*",
        STATUS: "Online",
        DEVELOPERS: [] as string[],
        MONGO_URL: "",
    },
    SYSTEM: {
        GUILD_ID: "",
        MIN_STAFF_ROLE: "",
        INVITE_XP: 0,
        CHANNELS: [] as IChannel[],
        TASKS: [] as ITask[],
    },
    EMOJIS: {
        FILL_START: "",
        FILL_CENTER: "",
        FILL_END: "",
        EMPTY_START: "",
        EMPTY_CENTER: "",
        EMPTY_END: "",
    },
};
