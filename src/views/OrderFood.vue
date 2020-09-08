<template>
  <div class="order">
    <component
      :is="currentStep"
      @next-step="nextStep"
      :currentProperties="currentProperties"
    />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import AccountForm from '@/components/AccountForm.vue'
import SelectItem from '@/components/SelectItem.vue'
import OrderConfirm from '@/components/OrderConfirm.vue'

export default {
  name: 'Home',
  data() {
    return {
      email: null,
      item: null,
      currentComponent: 'AccountForm'
    }
  },
  components: {
    HelloWorld,
    AccountForm,
    SelectItem,
    OrderConfirm
  },
  computed: {
    currentStep() {
      return this.currentComponent
    },
    currentProperties() {
      if (this.currentComponent === 'OrderConfirm') {
        return { email: this.email, item: this.item }
      } else {
        return {}
      }
    }
  },
  methods: {
    nextStep(attribute) {
      Object.keys(attribute).map((key) => this[key] = attribute[key])
      console.log(this.currentComponent)
    }
  }
}
</script>
