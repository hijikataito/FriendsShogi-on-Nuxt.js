<template>
  <div class="board-wrapper">
    <div class="board">
      <holder class="" />

      <div class="cells">
        <cell v-for="cell in cells" :key="cell.index" :index="cell.index" />
      </div>

      <holder class="" />
    </div>
  </div>
</template>

<script>
import components from "./index";
export default {
  data() {
    return {
      cells: this.$store.state.single.cells
    };
  },
  components
};
</script>

<style>
.board-wrapper {
  display: block;
  position: relative;
  width: 100%;
  max-width: 640px;
  height: auto;
}
.board {
  display: flex;
  background: url("/images/board.png");
  background-size: cover;
  border: 1px solid #999;
}

.cells {
  width: 100%;
  display: flex;
}
.cell {
  /* padding: 5px; */
  width: 33%;
  width: calc(100% / 3);
  background: rgba(255, 255, 255, 0.6);
  box-sizing: border-box;
  /* background: #fff;*/
  /* position: absolute;
  top: 0;
  left: 0; */
  /* height: 100%;
  width: 100%; */
}

.normal {
  background: rgba(255, 255, 255, 0.6);
}

.minus-base {
  background: rgba(255, 255, 255, 0.6);
}

.plus-base {
  background: rgba(255, 255, 255, 0.6);
}

.highlight {
  background: rgba(174, 253, 121, 0.8);
}

.dragging {
  z-index: 100;
}
.drop-target img {
  opacity: 0.5;
}
.drop-target.drop-active {
  background: rgba(174, 253, 121, 0.8) !important;
}
.drop-active {
  background: rgba(255, 255, 0, 0.6) !important;
}
</style>
