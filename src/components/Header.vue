<template>
  <header>
    <h1><a href="/">Tic Tac Toe Vue</a></h1>
    <span>Place 5 "x" in a row vertically, horizontally or diagonally</span>
    <!-- <nav>
      <a
        v-for="link in links"
        :href="`/${link.url}`"
        v-bind:class="{ active: path === link.url }"
      >
        {{ link.name }}
      </a>
    </nav> -->
  </header>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      path: window.location.pathname.replace('/', ''),
      links: [
        {
          name: 'Игра',
          url: ''
        },
        {
          name: 'Правила',
          url: 'rules'
        }
      ]
    }
  }
}
</script>

<style scoped>
header {
  margin-bottom: 20px;
  text-align: center;
}

h1 {
  font-size: 32px;
}

nav {
  font-size: 18px;
}

nav a {
  margin: 0 10px;
}
</style>
