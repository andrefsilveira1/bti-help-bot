module.exports = async (msg) => {
  if (!global.appContext.ruCardapio) {
    await msg.reply(
      `Não foi possível buscar o cardápio do RU. Tente novamente mais tarde.\n`
    );
    return;
  }

  const ruCardapio = JSON.parse(global.appContext.ruCardapio);

  if (!ruCardapio || (!ruCardapio.almoco && !ruCardapio.jantar)) {
    await msg.reply(
      `Não foi possível buscar o cardápio do RU. Tente novamente mais tarde.\n`
    );
    return;
  }

  let message = `*Cardápio do RU*\n\n`;

  Object.entries(ruCardapio).forEach(([meal, types]) => {
    if (meal === "cafe") return;
    message += `*${meal.toUpperCase()}*\n`;
    Object.entries(types).forEach(([type, items]) => {
      message += `_${type}_: ${items}\n`;
    });
    message += "\n\n";
  });

  await msg.reply(message);
};
