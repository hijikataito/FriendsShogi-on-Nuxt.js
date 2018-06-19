<template lang="pug">
  .root.page
    #header
      .cover
        .shadow-top
        img.logo(src="~assets/images/logo.png")
        app-logo
        .shadow-bottom

        share-links

    #wrapper
      .container
        .enter-button-area
          enter-button
          p.caution 🐱🐱🐱 音がでるよ 🐱🐱🐱

        .row
          .columns
            .column.is-6
              .box
                h1.title フレンズしょうぎとは？
                p
                  a(href="http://kemono-friends.jp/") けものフレンズ
                  | の愉快な仲間たちが駒になった
                  a(href="https://ja.wikipedia.org/wiki/E381A9E38186E381B6E381A4E38197E38287E38186E3818E") どうぶつしょうぎ
                  | の二次創作物だよ！
                  br
                  br
                  | Google Chrome推奨だよ！
                  br
                  | スマホは
                  strong 一切テストしてない
                  | から、バグってたら作者
                  a(href="https://twitter.com/nyallpo") (@nyallpo)
                  | に教えてあげよう！
                  br
                  strike
                    | コンピューターは３にんいるけど
                    strong 全部アライさん
                    | だよ！（今後にきたいしよう）
                  | ちょっと個性がでたよ！
                  
                no-ssr
                  <blockquote class="twitter-tweet" data-lang="ja"><p lang="ja" dir="ltr">まんまどうぶつしょうぎだけど <a href="https://t.co/d4LTo1cRpF">pic.twitter.com/d4LTo1cRpF</a></p>&mdash; 音@日曜西ゆ-17a (@ononon) <a href="https://twitter.com/ononon/status/840791955885899782?ref_src=twsrc%5Etfw">2017年3月12日</a></blockquote>
                no-ssr
                  <blockquote class="twitter-tweet" data-lang="ja"><p lang="ja" dir="ltr">友人の吉田音さん(<a href="https://twitter.com/ononon">@ononon</a>)と一緒にこんなん作りました　よかったら遊んでください <a href="https://t.co/k2NGvfIRky">https://t.co/k2NGvfIRky</a></p>&mdash; ysk (@nyallpo) <a href="https://twitter.com/nyallpo/status/850689103976841216">2017年4月8日</a></blockquote>

            .column.is-6
              .box
                h1.title お知らせ
                news
</template>

<script>
import AppLogo from "~/components/AppLogo.vue";
import EnterButton from "~/components/EnterButton.vue";
import News from "~/components/News.vue";
import ShareLinks from "~/components/ShareLinks.vue";

export default {
  components: {
    AppLogo,
    EnterButton,
    News,
    ShareLinks
  }
};
</script>

<style>
.title {
  /* Nuxtのロゴよりタイトルが上に来るようにしたのだ！！ */
  z-index: 999;
}
</style>
