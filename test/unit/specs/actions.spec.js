import {actions} from '@/store/index'

global.alert = () => {}

const field = (() => {
  const field = []

  for (let i = 0; i < 15; i++) {
    field[i] = []

    for (let j = 0; j < 15; j++) {
      field[i][j] = ''
    }
  }

  return field
})()

const checkWinHelper = (updatedField, done) => {
  actions.checkWin({
    state: {field: updatedField},
    commit: () => {}
  }, {type: 'x'})
    .then(hasWinner => {
      expect(hasWinner).toBe(true)
      done()
    })
    .catch(error => {
      done.fail(error)
    })
}

describe('Check Win', () => {
  it('should not win on empty field', (done) => {
    actions.checkWin({state: {field}}, {type: 'x'})
      .then(hasWinner => {
        expect(hasWinner).toBe(false)
        done()
      })
      .catch(error => {
        done.fail(error)
      })
  })

  // from top left
  it('should win on [0][0] to [4][0]', (done) => {
    const updatedField = field.map(row => row.slice())

    for (let i = 0; i <= 4; i++) {
      updatedField[i][0] = 'x'
    }

    checkWinHelper(updatedField, done)
  })

  it('should win on [0][0] to [4][4]', (done) => {
    const updatedField = field.map(row => row.slice())

    for (let i = 0; i <= 4; i++) {
      updatedField[i][i] = 'x'
    }

    checkWinHelper(updatedField, done)
  })

  it('should win on [0][0] to [0][4]', (done) => {
    const updatedField = field.map(row => row.slice())

    for (let i = 0; i <= 4; i++) {
      updatedField[0][i] = 'x'
    }

    checkWinHelper(updatedField, done)
  })

  // from bottom right
  it('should win on [14][10] to [14][14]', (done) => {
    const updatedField = field.map(row => row.slice())

    for (let i = 10; i <= 14; i++) {
      updatedField[14][i] = 'x'
    }

    checkWinHelper(updatedField, done)
  })

  it('should win on [10][14] to [14][14]', (done) => {
    const updatedField = field.map(row => row.slice())

    for (let i = 10; i <= 14; i++) {
      updatedField[i][14] = 'x'
    }

    checkWinHelper(updatedField, done)
  })

  it('should win on [10][10] to [14][14]', (done) => {
    const updatedField = field.map(row => row.slice())

    for (let i = 10; i <= 14; i++) {
      updatedField[i][i] = 'x'
    }

    checkWinHelper(updatedField, done)
  })

  // from bottom left
  it('should win on [10][0] to [14][0]', (done) => {
    const updatedField = field.map(row => row.slice())

    for (let i = 10; i <= 14; i++) {
      updatedField[i][0] = 'x'
    }

    checkWinHelper(updatedField, done)
  })

  it('should win on [14][0] to [14][4]', (done) => {
    const updatedField = field.map(row => row.slice())

    for (let i = 0; i <= 4; i++) {
      updatedField[14][i] = 'x'
    }

    checkWinHelper(updatedField, done)
  })

  it('should win on [0][14] to [4][10]', (done) => {
    const updatedField = field.map(row => row.slice())

    for (let i = 0; i <= 4; i++) {
      updatedField[i][14 - i] = 'x'
    }

    checkWinHelper(updatedField, done)
  })

  // from top right
  it('should win on [0][10] to [0][14]', (done) => {
    const updatedField = field.map(row => row.slice())

    for (let i = 10; i <= 14; i++) {
      updatedField[0][i] = 'x'
    }

    checkWinHelper(updatedField, done)
  })

  it('should win on [0][14] to [4][14]', (done) => {
    const updatedField = field.map(row => row.slice())

    for (let i = 10; i <= 14; i++) {
      updatedField[i][0] = 'x'
    }

    checkWinHelper(updatedField, done)
  })

  it('should win on [0][14] to [4][10]', (done) => {
    const updatedField = field.map(row => row.slice())

    for (let i = 0; i <= 4; i++) {
      updatedField[i][14 - i] = 'x'
    }

    checkWinHelper(updatedField, done)
  })

  // middle
  it('should win on [7][5] to [7][9]', (done) => {
    const updatedField = field.map(row => row.slice())

    for (let i = 5; i <= 9; i++) {
      updatedField[7][i] = 'x'
    }

    checkWinHelper(updatedField, done)
  })
})
