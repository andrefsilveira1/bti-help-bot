module.exports = async (msg) => {
const turns = {
  matutino: {
   letter: "M",
   schedules: [
    '07h00 às 07h50',
    '07h50 às 08h40',
    '08h50 às 09h40',
    '09h40 às 10h30',
    '10h40 às 11h30',
    '11h30 às 12h20'
]
  },
  vespertino: {
   letter: "V",
   schedules: [
    '13h00 às 13h50',
    '13h50 às 14h40',
    '14h50 às 15h40',
    '15h40 às 16h30',
    '16h40 às 17h30',
    '17h30 às 18h20'
]
  },
  noturno: {
   letter: "N",
   schedules: [
    '18h40 às 19h30',
    '19h30 às 20h20',
    '20h30 às 21h20',
    '21h20 às 22h10',
   ],
  }
 }

 const type = msg.body.split(" ")[1]?.toString().toLowerCase();

 if(msg.body === "!horarios" || !turns[type]) {
  return await msg.reply(`Tente: !horarios <nome-do-turno>\nDisponíveis:\n${Object.keys(turns).join("\n")}`);
 }

 const {schedules, letter} = turns[type];

 const message = schedules.reduce((acc, curr, index) => {
     return acc + `(${letter}${index + 1}) ${curr}\n`
 }, `*${type}*\n`);

 await msg.reply(message);
}
