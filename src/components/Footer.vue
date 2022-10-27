<template>
    <footer class="footer">
  <div class="content center">
    <p>
      <strong>Kaosn't</strong> by <a href="https://github.com/bleidbleid">Maria Bladé</a>. The source code is licensed
      <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. 
    </p>
  </div>
</footer>
</template>
<script setup>
import { ref } from 'vue';
</script>
<style scoped>
p {
  font-size: 14px;
}
footer{
  background-image: linear-gradient(var(--whiteish), var(--grey));
}
</style>