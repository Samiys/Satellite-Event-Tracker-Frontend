<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
#app {
  font-family: 'Roboto', sans-serif;
  color: #333;
  background: linear-gradient(to right, #9263ab, #ffffff); /* Light grey gradient */
  min-height: 100vh;
  padding: 20px;
  box-sizing: border-box;
}
</style>
