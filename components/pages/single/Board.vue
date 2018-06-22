<template>
  <div class="board-wrapper">
    <div class="board">

    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.board-wrapper {
  display: block;
  position: relative;
  width: 100%;
  max-width: 640px;
  height: auto;
}
.board-wrapper:before {
  content: "";
  display: block;
  padding-top: 80%;
}
.board {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
}
.board {
  background: url("/images/board.png");
  background-size: cover;
  text-align: center;
  border: 1px solid #999;
}
</style>
