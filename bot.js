const mineflayer = require('mineflayer');

const bot = mineflayer.createBot({
  host: 'MYBROTHERS.aternos.me',
  port: 44884,
  username: 'MY_BROTHERS_TM',
});

bot.on('spawn', () => {
  console.log('Start');

  // تحريك الرأس باتجاه أقرب لاعب
  setInterval(() => {
    const player = Object.values(bot.players).find(p => p.entity);
    if (player) {
      bot.lookAt(player.entity.position.offset(0, 1.6, 0));
    }
  }, 50);
});

bot.on('end', () => {
  console.log('Disconnected. Reconnecting...');
  setTimeout(() => process.exit(1), 5000);
});
