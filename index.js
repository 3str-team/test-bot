const TelegramAPI = require("node-telegram-bot-api");
const stickers = require("./modules/stickers");
const btnOptions = require('./options');

const token = "5352266963:AAEvifiBEornXHrZE33avH6vZLexHOOszBc";

const bot = new TelegramAPI(token, { polling: true });

const start = () => {
  bot.setMyCommands([
    { command: "/start", description: "Приветствие" },
    { command: "/info", description: "Члены команды 3str.team" },
  ]);

  bot.on("message", async (msg) => {
    const text = msg.text;
    const chatId = msg.chat.id;
    const user = {
      name: msg.from.first_name,
      id: msg.from.id,
      Uname: msg.from.username,
    };
    console.log(stickers.what);
    if (text == "/start") {
      await bot.sendSticker(chatId, stickers.hi);
      return bot.sendMessage(
        chatId,
        `${user.name}, добро пожаловать к тестовому боту [3str.team.bot]\nМяу`
      );
    }
    await bot.sendSticker(chatId, stickers.what);
    return bot.sendMessage(chatId, "Я не знаю такой команды");
  });
};

start();
