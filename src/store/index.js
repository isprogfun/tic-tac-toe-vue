import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const mutations = {
  turn: (state, payload) => {
    const field = state.field.map(i => i.slice())

    field[payload.i][payload.j] = payload.type

    if (payload.type === 'x') {
      // First item for setting a field state
      state.undoHistory.push(state.field.map(i => i.slice()))
      // Second item for redo functionality
      state.undoHistory.push(field.map(i => i.slice()))
      state.redoHistory = []
    }

    state.field = field
  },
  restart: (state) => {
    state.field = state.field.map(row => row.map(cell => ''))
    state.undoHistory = []
    state.redoHistory = []
  },
  undo: (state) => {
    if (state.undoHistory.length) {
      const itemAfter = state.undoHistory.pop()
      const itemBefore = state.undoHistory.pop()

      // First item for setting a field state
      state.field = itemBefore.map(i => i.slice())
      // Then put both arrays to redo
      state.redoHistory.push(itemBefore.map(i => i.slice()))
      state.redoHistory.push(itemAfter.map(i => i.slice()))
    }
  },
  redo: (state) => {
    if (state.redoHistory.length) {
      const itemAfter = state.redoHistory.pop()
      const itemBefore = state.redoHistory.pop()

      // The main difference — we are putting here a state after x was placed
      state.field = itemAfter.map(i => i.slice())
      state.undoHistory.push(itemBefore.map(i => i.slice()))
      state.undoHistory.push(itemAfter.map(i => i.slice()))
    }
  }
}

export const actions = {
  computerTurn (context) {
    return new Promise((resolve, reject) => {
      const emptyCells = []

      // find all empty emptyCells, put their indexes to the new array
      context.state.field.forEach((row, i) => {
        row.forEach((cell, j) => {
          if (!cell) {
            emptyCells.push([i, j])
          }
        })
      })

      // choose cell randomly
      const emptyCell = emptyCells[Math.floor(Math.random() * emptyCells.length)]
      context.commit('turn', {
        i: emptyCell[0],
        j: emptyCell[1],
        type: 'o'
      })
      resolve()
    })
  },
  checkWin (context, {type}) {
    return new Promise((resolve, reject) => {
      const field = context.state.field
      let hasWinner = false

      // eslint-disable-next-line no-labels
      mainloop: for (let i = 0; i <= 14; i++) {
        for (let j = 0; j <= 14; j++) {
          if (field[i][j] === type) {
            if (j <= 10) {
              // Check possible win to the right
              for (let _j = j + 1; _j <= j + 4; _j++) {
                if (field[i][_j] !== type) {
                  break
                }
                if (_j === j + 4) {
                  hasWinner = true
                  // eslint-disable-next-line no-labels
                  break mainloop
                }
              }
            }

            if (i <= 10 && j <= 10) {
              // Check possible win to the down right diagonal
              for (let _i = i + 1, _j = j + 1; _i <= i + 4; _i++, _j++) {
                if (field[_i][_j] !== type) {
                  break
                }
                if (_i === i + 4) {
                  hasWinner = true
                  // eslint-disable-next-line no-labels
                  break mainloop
                }
              }
            }

            if (i <= 10) {
              // Check possible win to the bottom
              for (let _i = i + 1; _i <= i + 4; _i++) {
                if (field[_i][j] !== type) {
                  break
                }
                if (_i === i + 4) {
                  hasWinner = true
                  // eslint-disable-next-line no-labels
                  break mainloop
                }
              }
            }

            if (j >= 4 && i <= 10) {
              // Check possible win to the down left diagonal
              for (let _i = i + 1, _j = j - 1; _i <= i + 4; _i++, _j--) {
                if (field[_i][_j] !== type) {
                  break
                }
                if (_i === i + 4) {
                  hasWinner = true
                  // eslint-disable-next-line no-labels
                  break mainloop
                }
              }
            }
          }
        }
      }

      if (hasWinner) {
        alert(type === 'x' ? 'YOU are the winner!' : 'Computer is the winner!')
        context.commit('restart')
        resolve(true)
      } else {
        resolve(false)
      }
    })
  }
}

export default new Vuex.Store({
  state: {
    field: (() => {
      const field = []

      for (let i = 0; i < 15; i++) {
        field[i] = []

        for (let j = 0; j < 15; j++) {
          field[i][j] = ''
        }
      }

      return field
    })(),
    undoHistory: [],
    redoHistory: []
  },
  mutations,
  actions
})
