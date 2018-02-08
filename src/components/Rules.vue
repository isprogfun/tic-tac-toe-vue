<template>
  <main>
    <header_ />
    Игра в крестики-нолики на поле 15х15, где ваша цель поставить пять крестиков
    или ноликов рядом друг с другом по вертикали, горизонтали или диагонали
  </main>
</template>

<script>
import Header from '@/components/Header'

export default {
  name: 'Rules',
  components: {
    header_: Header
  }
}
</script>

<style scoped>
</style>
