<template>
  <div class="search-bar-wrap">
    <div class="search-bar-empty"></div>
    <div class="search-bar">
      <a
        style="
          background: url('https://s10.mogucdn.com/mlcdn/c45406/180926_3lac93lkglfd5gd4fiahedg5aad79_40x37.png')
            no-repeat center;
          background-size: 0.44rem auto;
        "
        class="im-talk"
        href="https://qmall.mogu.com/category?ismobile=1&_wv=1&mlf=qmall&mt=12.12775.r122745.15918"
      ></a>

      <form class="search-form" action="//m.mogu.com/wall/s">
        <input
          id="search-form-input"
          class="search"
          type="text"
          name="q"
          placeholder="搜索"
          data-query-word=""
        />
      </form>

      <a
        class="cart"
        style="
          background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAoCAMAAACyy+glAAAAeFBMVEUAAACgoKCenp6ZmZmampqZmZmampqampqampqampqampqampqbm5udnZ2ZmZmampqZmZmfn5+mpqabm5uampqZmZmbm5ubm5uampqcnJybm5ubm5uenp6ampqampqcnJyampqbm5uZmZmZmZmampqampqZmZmZmZmiW8fRAAAAJ3RSTlMADwr6wdi7sPSV5MlQHO+achgGTN5/VTGCODUtILVnQOolpY5KXVpm2RVpAAABpElEQVQ4y41V2YKCMAwM5SqXUG45dXWX///DTcSKVUudF2gbpsnkAF5g1YEflZyXkR/UFuxAtNGiIGqFxvSc2ssb7PQM72DpeuhURTcwNnRF5awfp+zVtnNp34mVAxY7tOt2qm1GJP4R3nD06bpMscWdQw0fUR/w8Ml6Ig8S0CAhXya5KnDh5aBF7qFBcc9DiLwMdsCQO1wzFMg3PYgvoJcG74jBgBiNGnymqBkY4d+oc1TmqDMZJkvqjdrmdIGri6u1tzMXnaXwqoeiHvc2uWuMajOuyI9RSojwSHC5mG81en5Kxkj0vdzgeMzl4pcKbvOpp1swPusj85WY/eQhNUZIbOyzzxknPxRjjGLQdRmmoFTcwK6bQYemSpQAUboWTJDS/ZFfJsikWJxKxACZbvhZlp/vCuleovO3JUrU5bfFD8mJWtDcVltifXPDbhoujjCNAokWl2FsGjLq+OoN40tixigxTgHGwUiwUtlEeS9y3ciVGE7r/LBG8zAX5bJcyB/X/JtoQgxQ9JODZOXJ3v0BZVySHS4JGCCyseR2GF2ue+P0HxSnOm44Q1j5AAAAAElFTkSuQmCC')
            no-repeat center;
          background-size: 0.44rem auto;
        "
        href="https://webim.mogu.com/h5"
      ></a>
    </div>
  </div>
  <div id="app">
    <TabBar />
  </div>
</template>

<script setup>
import TabBar from "./components/navbar/TabBar.vue";
</script>

<style lang="stylus" scoped>
.search-bar-wrap
        width 100%
        display flex
        position absolute
        top 0
        z-index 100
        overflow hidden
</style>
