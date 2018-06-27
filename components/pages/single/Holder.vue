<template>
  <div class="holder">
  </div>
</template>

<script>
export default {};
</script>

<style>
.holder ul {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.holder li {
  list-style: none;
  border: 0;
  margin: 0 0 -40px 0;
  z-index: 1;
}
.holder li:first-child {
  margin-top: 0;
}
.holder {
  flex: none;
  width: 18%;
  height: 100%;
  background: rgba(255, 255, 255, 0.4);
}

.holder.plus {
  float: right;
}
.holder.plus.reverse {
  float: left;
}
.holder.minus {
  background: rgba(255, 255, 255, 0.4);
  float: left;
}
.holder.minus.reverse {
  float: right;
}
</style>
