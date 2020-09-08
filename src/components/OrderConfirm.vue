<template>
  <div>
    <ul>
      <li>Email: {{ currentProperties.email }}</li>
      <li>注文商品: {{ currentProperties.item }}</li>
    </ul>
    <form @submit.prevent="clickHandler">
      <select v-model="selected">
        <option disabled value="">Please select one</option>
        <option v-for="(index, n) in chooseSize" :key="index">
          {{ n }}
        </option>
      </select>
      <button>注文を確定する</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'OrderConfirm',
  data() {
    return {
      chooseSize: [
        1,2,3,4,5
      ],
      selected: 1
    }
  },
  props: {
    nextStep: {
      type: Function
    },
    currentProperties: {
      type: Object
    }
  },
  methods: {
    clickHandler() {
      const data = {
        ...this.currentProperties,
        itemSize: this.selected
      }
      console.log(data)
      this.$emit("next-step", { currentComponent: 'Complete' })
    }
  }
}
</script>