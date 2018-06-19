<!-- 
ツイッターやフェースブックのリンクをはるのだ！
このパーツはSSRのときには動いてほしくないので、no-ssrタグで囲うのだ！ 
-->
<template>
  <no-ssr>
    <div>
      <div id="fb-root"></div>
      <script>
      (function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s);
        js.id = id;
        js.src = "//connect.facebook.net/ja_JP/sdk.js#xfbml=1&version=v2.8";
        fjs.parentNode.insertBefore(js, fjs);
      }(document, 'script', 'facebook-jssdk'));
      </script>

      <div style="position: absolute; bottom: 0; left: 0; right: 0;">
        <div style="text-align: center;padding-bottom: 5px; z-index: 1000;">
          <a href="https://twitter.com/share" class="twitter-share-button" data-size="large" data-hashtags="フレンズしょうぎ">Tweet</a>
          <script>
          ! function(d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0],
              p = /^http:/.test(d.location) ? 'http' : 'https';
            if (!d.getElementById(id)) {
              js = d.createElement(s);
              js.id = id;
              js.src = p + '://platform.twitter.com/widgets.js';
              fjs.parentNode.insertBefore(js, fjs);
            }
          }(document, 'script', 'twitter-wjs');
          </script>
          <div style="vertical-align: top" class="fb-like" data-href="http://friends-shogi.com/" data-layout="button_count" data-action="like" data-size="large" data-show-faces="true" data-share="true"></div>

          <a href="http://b.hatena.ne.jp/entry/friends-shogi.com/" class="hatena-bookmark-button" data-hatena-bookmark-layout="basic-label-counter" data-hatena-bookmark-lang="ja" data-hatena-bookmark-height="28" title="このエントリーをはてなブックマークに追加"><img src="https://b.st-hatena.com/images/entry-button/button-only@2x.png" alt="このエントリーをはてなブックマークに追加" width="20" height="20" style="border: none;" /></a>
          <script type="text/javascript" src="https://b.st-hatena.com/js/bookmark_button.js" charset="utf-8" async="async"></script>
        </div>
      </div>
    </div>
  </no-ssr>
</template>

<script>
export default {};
</script>

<style>
</style>
