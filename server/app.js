const express = require("express")
const app = express();
const puerto = parseInt(process.env.PORT, 10) || 3000
const Cors = require("cors")
const dotenv = require('dotenv').config();
const { Telegraf } = require('telegraf')
const bot = new Telegraf(process.env.TELEGRAM_API_KEY)

// Middlewares
app.use(Cors());

// Listener
app.listen(puerto, () => console.log("Listening on port " + puerto))



// ++++++++++++++++ HTTP METHODS +++++++++++++++++++ //

app.get("/", (req, res) => {
	res.send("Bot server is up and running!!")
})


// ++++++++++++++++ TELEGRAM METHODS +++++++++++++++++++ //
bot.start((ctx) =>  ctx.reply('Welcome'))

bot.launch()