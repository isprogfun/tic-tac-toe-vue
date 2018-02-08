<template>
  <div class="field">
    <div v-for="(row, i) in field" :key="`row-${i}`" class="row">
      <div
        v-for="(cell, j) in row"
        v-on:click="turn(i, j)"
        :key="`row-${i}-cell-${j}`"
        :class="['cell', cell, {empty: !cell}]"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Field',
  computed: {
    field () {
      return this.$store.state.field
    }
  },
  methods: {
    turn (i, j) {
      if (this.$store.state.field[i][j]) {
        return
      }

      this.$store.commit('turn', {i, j, type: 'x'})
      this.$store.dispatch('checkWin', {type: 'x'}).then((hasWinner) => {
        if (!hasWinner) {
          this.$store.dispatch('computerTurn').then(() => {
            this.$store.dispatch('checkWin', {type: 'o'})
          })
        }
      })
    }
  }
}
</script>

<style scoped>
.field {
  border-right: solid 1px #ccc;
  border-bottom: solid 1px #ccc;
}

.field:hover {
    cursor: pointer;
}

.row {
  display: flex;
}

.cell {
  width: 6vw;
  height: 6vw;
  max-width: 30px;
  max-height: 30px;
  border: solid 1px #ccc;
  border-right: none;
  border-bottom: none;
  text-align: center;
  background-size: contain;
}

.cell.x {
  background-image: url('../assets/x.png');
}

.cell.o {
  background-image: url('../assets/o.png');
}

.cell.empty:hover {
  background: #efefef;
}
</style>
