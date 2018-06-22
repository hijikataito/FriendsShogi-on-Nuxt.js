<template>
  <div>
    <div class="modal" v-bind:class="{'is-active': showModal}">
      <div class="modal-background" @click="showModal = false"></div>

      <div class="modal-wrapper">
        <div class="modal-card">
          <header class="modal-card-head">
            <p class="modal-card-title">コンピューターとあそぶ</p>
            <button class="delete" @click="showModal = false"></button>
          </header>

          <section class="modal-card-body">
            <h1 class="title">つよさ</h1>
            <form ref="form">
              <div class="field">
                <label @click="select">
                  <img src="/images/avators/22.png" class="hvr-wobble-vertical"><br>
                  <input type="radio" v-model="difficulty" value="1" checked> やさしい
                </label>
              </div>

              <div class="field">
                <label @click="select">
                  <img src="/images/avators/10.png" class="hvr-buzz-out"><br>
                  <input type="radio" v-model="difficulty" value="2"> たのしい
                </label>
              </div>

              <div class="field">
                <label @click="select">
                  <img src="/images/avators/11.png" class="hvr-grow-rotate"><br>
                  <input type="radio" v-model="difficulty" value="3"> うれしい
                </label>
              </div>
            </form>
          </section>

          <footer class="modal-card-foot">
            <a class="start box" @click="start">
              <img src="/images/start.png">
            </a>
          </footer>
        </div>
      </div>
    </div>

    <a href="#" class="ready box" @click="showModal = true">
      <img src="/images/start_with_com.png">
    </a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showModal: false,
      difficulty: 1
    };
  },
  methods: {
    select() {
      // 音を鳴らす
    },
    start() {
      this.showModal = false;
      // ゲームスタート
    }
  }
};
</script>

<style>
.field {
  margin: 10px;
  text-align: center;
  display: inline-block;
}
.field label {
  cursor: pointer;
}
.modal-card {
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  -o-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}
.modal-card-body,
.modal-card-foot {
  text-align: center;
}
.modal-background {
  background: rgba(0, 0, 0, 0.3);
}
.ready.box {
  text-align: center;
  background-color: #23d160;
}
.start.box {
  text-align: center;
  margin: auto auto;
  background-color: #23d160;
}
.start.button {
  margin: 0 auto;
}

@media screen and (max-width: 768px) {
  .modal-card {
    margin: 0;
  }
}
</style>
