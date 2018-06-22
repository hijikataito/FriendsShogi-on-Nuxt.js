<template lang="pug">
  .tutorials
    .box
      h2.title きほんルール
      ul
        li
          strong あいての王さまをとれば勝ち！
          br
          img.w250(src="~assets/images/tutorial/t1.jpg")
        li
          strong あなたの王さまがあいての陣地マス（１段目）に入れば勝ち！
          br
          img.w250(src="~assets/images/tutorial/t2.jpg")
        li あとは体で覚えよう！

    .box
      h2.title こまのうごきかた
      ul
        li
          img.w150(src='~assets/images/tutorial/tuto_ou.png')
          p ライオン・ヘラジカ：8マスぜんぶにうごけるよ
          img.w150(src='~assets/images/tutorial/tuto_hi.png')
          p オーロックス・シロサイ：じょうげ4マスにうごけるよ
          img.w150(src='~assets/images/tutorial/tuto_kaku.png')
          p アラビアオリックス・サーバル：ななめ4マスにうごけるよ
          img.w150(src='~assets/images/tutorial/tuto_fu.png')
          p ニホンツキノワグマ・かばん：まえ1マスにうごけるよ

        li(style="margin-top: 1rem")
          strong(style="font-size: 1.3rem") 🐱とくべつルール🐱
          br
          | ニホンツキノワグマ・かばんは、あいての陣地マス（１段目）に入ると、強くなるよ！
          br
          img.w150(src='~assets/images/tutorial/tuto_nari.png')
          br
          | 👇👇👇
          br
          img.w150(src='~assets/images/tutorial/tuto_to.png')

    .box
      h2.title もちごまルール
      ul
        li
          | あいてのこまを取ると、あなたのものにできるよ！
          br
          | あなたのものにしたこまは、つぎから好きなところにおけるよ！
          br
          img.w150(src='~assets/images/tutorial/tuto_tegoma.png')
</template>

<script>
export default {};
</script>

<style>
.w250 {
  max-width: 250px;
}
.w150 {
  max-width: 150px;
}
</style>
