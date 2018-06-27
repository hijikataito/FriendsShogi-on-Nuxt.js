const computers = [
  { name: "アライグマ", id: 22, diffculity: 1 },
  { name: "コツメカワウソ", id: 10, diffculity: 2 },
  { name: "アルパカ・スリ", id: 11, diffculity: 3 }
];
const player = { name: "かばん", id: 1 };
const cells = [
  {
    index: 1,
    type: "minus-base",
    piece: { id: 1, name: "Hi", type: "hi", team: "minus", image: "hm.png" }
  },
  {
    index: 2,
    type: "minus-base",
    piece: { id: 2, name: "Ou", type: "ou", team: "minus", image: "om.png" }
  },
  {
    index: 3,
    type: "minus-base",
    piece: { id: 3, name: "Ka", type: "ka", team: "minus", image: "km.png" }
  },
  { index: 4, type: "normal", piece: null },
  { index: 5, type: "normal", piece: null },
  { index: 6, type: "normal", piece: null },
  { index: 7, type: "normal", piece: null },
  { index: 8, type: "normal", piece: null },
  { index: 9, type: "normal", piece: null },
  {
    index: 10,
    type: "plus-base",
    piece: { id: 6, name: "Ka", type: "ka", team: "plus", image: "kp.png" }
  },
  {
    index: 11,
    type: "plus-base",
    piece: { id: 7, name: "Ou", type: "ou", team: "plus", image: "op.png" }
  },
  {
    index: 12,
    type: "plus-base",
    piece: { id: 8, name: "Hi", type: "hi", team: "plus", image: "hp.png" }
  }
];

export const state = () => ({
  computers,
  computer: computers[0],
  computerAnim: "",
  player,
  playerAnim: "",
  cells
});
export const actions = {
  /**
   * 任意のアニメーションを行う
   * @param {*} context
   * @param {Object} target:string, key:string, time:float
   */
  anim(context, { target, key, time }) {
    context.commit("anim", { target, key: `animated ${key}` });
    // 一定時間が経ったらアニメーションを止める
    if (time && time > 0) {
      setTimeout(function() {
        // ここはkeyを強制的に空にするのではなく、元から要素に存在するclassを
        // 復元したほうがよいが、必要なときになったら実装する
        context.commit("anim", { target, key: "" });
      }, time);
    }
  }
};
export const mutations = {
  /**
   * アニメーションクラスを要素に付加する
   * @param {*} state
   * @param {Object} target:string key:string
   */
  anim(state, { target, key }) {
    if (target === "player") {
      state.playerAnim = key;
    } else if (target === "computer") {
      state.computerAnim = key;
    } else {
      // targetをIDとする要素がHTML上で発見できるときは、
      // その要素のクラスを変更する（元あったクラスは消えるので注意）
      const element = document.getElementById(target);
      if (element) {
        element.className = key;
      }
    }
  }
};
