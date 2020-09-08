<template>
  <div>
    <form @submit.prevent="clickHandler">
      <input type="text" v-model="email">
      <button>次へ</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'AccountForm',
  data() {
    return {
      email: null
    }
  },
  props: {
    nextStep: {
      type: Function
    }
  },
  methods: {
    clickHandler() {
      this.$emit("next-step", { email: this.email, currentComponent: 'SelectItem' })
    }
  }
}
</script>