<!-- このページの記事をJSONにまとめて非同期で取得して表示させるか検討しているのだ！うん！めんどくさいのだ！ -->
<template lang="pug">
  .news
    p
      | 4/23
      b アライさんが楽しく動くようになったよ！
      br
      | ゲームスタートボタンがずれなくなったりゲーム画面が画面サイズに合わせて縮小したり勝利画面がゴージャスになったりと雑多なアップデートをしたよ！
      br
      br
    p
      | 4/14 モバイル対応（Androidではうまく動きませんでした！ごめんなさい！）
      br
      | ・盤面が画面サイズに合わせて縮小するようになったよ！
      br
      | ・スマホとかで駒が動かしづらい問題を修正したよ！
      br
      | ・スマホとかでBGMが鳴らなかったり効果音が遅れるのはスマホの仕様（パケットを節約する機能）でどうにもできないよ！ごめん！
      br
      | ・右上のボリュームに謎のツマミが追加されたよ！
    no-ssr
      <blockquote class="twitter-tweet" data-lang="ja"><p lang="ja" dir="ltr">モバイル端末で駒のドラッグと画面スクロールが同時に起きて困る現象を修正しました。iPhone5sのSafariでのみ動作確認したので、よかったら他の端末で動いているか教えてください。</p>&mdash; ysk (@nyallpo) <a href="https://twitter.com/nyallpo/status/852635684816990208">2017年4月13日</a></blockquote>
      
    p
      | 4/13 盤面の修正
      br
      strong ・かばん、ニホンツキノワグマは最初から持ち駒になったよ！
      br
      br
    p
      | 4/10 AI修正
      br
      | ・コツメカワウソの性格が突撃志向になったよ！
      br
      | ・アルパカが持ち駒大好きっ子になったよ！
      br
      | ・アライグマは何も変わっていないよ！
      br
      br
    p
      | 4/10 いくつか修正
      br
      | ・先手と後手の表記が逆になる問題を修正したよ！
      br
      | ・対局開始の演出がずれる問題を修正したよ！
    br
    span.hvr-wobble-vertical ・CPUアライさん選択時の動きがよりアライさんっぽくなったよ！
    br
    br
    | 4/9 バグとかのお問い合わせ先について
    no-ssr
      <blockquote class="twitter-tweet" data-lang="ja"><p lang="ja" dir="ltr">不審な挙動があったら吉田さんとこじゃなくてこちらまで教えてくださいな！ <a href="https://twitter.com/hashtag/%E3%83%95%E3%83%AC%E3%83%B3%E3%82%BA%E3%81%97%E3%82%87%E3%81%86%E3%81%8E?src=hash">#フレンズしょうぎ</a></p>&mdash; ysk (@nyallpo) <a href="https://twitter.com/nyallpo/status/850715953461579776">2017年4月8日</a></blockquote>
    | 4/9 実装予定について
    no-ssr
      <blockquote class="twitter-tweet" data-lang="ja"><p lang="ja" dir="ltr">通信対戦は近日実装します　しばし待ってくれな</p>&mdash; ysk (@nyallpo) <a href="https://twitter.com/nyallpo/status/850689465081225216">2017年4月8日</a></blockquote>

    | 4/9 サイトを公開しました
    //= render 'shared/tweet3'
</template>

<script>
export default {};
</script>

<style>
</style>
