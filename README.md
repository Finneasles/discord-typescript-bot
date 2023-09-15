# Typescript Discord Bot
This is a Discord bot using Discord.js and Typescript. It handles setting up the bot's connection to the Discord API, importing and executing event and action files, and registering slash commands and other discord functions.

## Dependencies:

- discord.js
- mongoose

##  devDependencies :

- dotenv
- ts-node-dev
- tsconfig-paths
- typescript

Usage:

1 - Clone the repository
2 - Install dependencies 
```bash
npm install
```
3 - Create a .env file and set environment variables.

4 - Run the script in development mode
```bash
npm run dev
```
Environment Variables:

```bash
NODE_ENV=
DISCORD_CLIENT_ID=
DISCORD_TOKEN=
```

Utilities:

validateInstance: Checks if a token is provided.
registerCommands: Registers commands with the Discord API.
logger: Logs messages with timestamps and icons.
getRandomNumber: Generates a random number.
setGuildOption: Not implemented.
nodejsErrorListener: Listens to and logs Node.js errors.

Types:

- Action: Defines the structure of an action (command or event).
- GuildOption: Defines the structure of guild options.
