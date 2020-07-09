<template>
  <div>
    <h1>这是home页面</h1>
    <div class="out-text">样式来自全局的描述</div>
    <div class="text">样式来自scoped，这是一些描述</div>
  </div>
</template>

<script>
let a = "df";
let b = "cd";
console.log(a, b);
export default {
  data() {
    return {};
  },
};
</script>

<style lang="less" scoped>
.text {
  color: #999;
}
</style>
