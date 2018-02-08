<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
/* CSS reset */
*,
*::before,
*::after {
    box-sizing: border-box;
}

html {
    font-size: 100%;
}
/* !CSS reset */

body {
  max-width: 1024px;
  margin: 10px auto 0;
}

#app {
  font-family:
    -apple-system,
    BlinkMacSystemFont,
    "Segoe UI",
    Roboto,
    Oxygen-Sans,
    Ubuntu,
    Cantarell,
    "Helvetica Neue",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

a,
a:visited {
  text-decoration: none;
  color: #364149;
}

a:hover {
  text-decoration: underline;
}

a.active {
  color: #008cff;
}

h1 {
  margin: 0 0 20px 0;
}

ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
</style>
