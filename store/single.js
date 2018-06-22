const computers = [
  { name: "アライグマ", id: 22, diffculity: 1 },
  { name: "コツメカワウソ", id: 10, diffculity: 2 },
  { name: "アルパカ・スリ", id: 11, diffculity: 3 }
];
const player = { name: "かばん", id: 1 };

export const state = () => ({
  computers,
  computer: computers[0],
  player
});

export const mutations = {};
