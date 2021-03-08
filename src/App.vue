<template>
  <div id="app">
    <DummyText>Good</DummyText>
  </div>
</template>

<script>
import DummyText from './components/DummyText'

export default {
  name: 'App',
  components: {
    DummyText
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
