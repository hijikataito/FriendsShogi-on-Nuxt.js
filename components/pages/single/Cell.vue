<template>
  <div :id="`cell-${index}`" class="cell">
    <div class="cell-inner">
      {{ index }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    index: {
      type: Number,
      required: true
    }
  }
};
</script>

<style>
/* .cell {
  padding: 1px;
  display: inline-block;
  width: 30%;
  height: 25%;
  position: relative;
}
.cell-inner {
  display: inline-block;
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(255, 255, 255, 0.6);
}
.cell-inner:before {
  display: inline-block;
  position: absolute;
  content: "";
  top: 0;
  width: 100%;
  padding-bottom: 100%;
} */
</style>
