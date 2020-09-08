<template>
  <div>
    <form @submit.prevent="clickHandler">
      <select v-model="selectItem">
        <option disabled value="">Please select one</option>
        <option v-for="item in items" :key="item.id">
          {{ item.name }}
        </option>
      </select>
      <button>次へ</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'SelectItem',
  data() {
    return {
      items: [
        {
          id: 1,
          name: 'cheeze pizza'
        },
        {
          id: 2,
          name: 'mazui pizza'
        }
      ],
      selectItem: null
    }
  },
  props: {
    nextStep: {
      type: Function
    }
  },
  methods: {
    clickHandler() {
      this.$emit("next-step", {
        item: this.selectItem,
        currentComponent: 'OrderConfirm'
        }
      )
    }
  }
}
</script>