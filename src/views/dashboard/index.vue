<template>
  <div class="dashboard-container">
    <h2>角色：超级管理员</h2>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Dashboard',
  computed: {
    ...mapGetters([
      'name'
    ])
  }
}
</script>

<style lang="scss" scoped>
.dashboard {
  &-container {
    padding: 20px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>
