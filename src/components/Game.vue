<template>
  <main>
    <header_ />
    <div class="field-wrapper">
      <field />
    </div>
    <div class="actions">
      <ui-button class="actions-new" v-on:click="clear" :disabled="isFieldClear">Restart game</ui-button>
      <ui-button class="actions-prev" v-on:click="undo" :disabled="!hasUndoHistory">←</ui-button>
      <ui-button class="actions-next" v-on:click="redo" :disabled="!hasRedoHistory">→</ui-button>
    </div>
  </main>
</template>

<script>
import Header_ from '@/components/Header'
import Field from '@/components/Field'
import UiButton from 'keen-ui/lib/UiButton'

export default {
  name: 'Game',
  components: {
    Header_,
    Field,
    UiButton
  },
  computed: {
    isFieldClear () {
      return this.$store.state.field.every(row => row.every(cell => !cell))
    },
    hasUndoHistory () {
      return Boolean(this.$store.state.undoHistory.length)
    },
    hasRedoHistory () {
      return Boolean(this.$store.state.redoHistory.length)
    }
  },
  methods: {
    clear () {
      this.$store.commit('restart')
    },
    undo () {
      this.$store.commit('undo')
    },
    redo () {
      this.$store.commit('redo')
    }
  }
}
</script>

<style scoped>
.field-wrapper,
.actions {
  display: flex;
  justify-content: center;
  align-items: center;
}

.field-wrapper {
  margin-bottom: 10px;
}

.actions button {
  font-size: 14px;
}

.actions-new {
  margin-right: 10px;
}

.actions-prev {
  margin-right: 5px;
}

.actions-prev,
.actions-next {
  min-width: auto;
}

</style>
