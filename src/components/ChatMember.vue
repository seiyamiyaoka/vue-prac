<template>
  <div class="chat-member">
    <div class="searchForm">
      <input type="text" v-model="memberName" @change="changeHandler">
    </div>
    <div class="members-container">
      <ul class="member" v-for="member in members" :key="member.id">
        <li>{{ member.name }}</li>
      </ul>
    </div>
  </div>
</template>

<script>

export default {
  name: 'ChatMember',
  data() {
    return {
      memberName: ""
    }
  },
  props: {
    members: {
      type: Array
    }
  },
  components: {
    
  },
  methods: {
    changeHandler() {
      this.$emit("search-member", this.memberName)
    }
  }
}
</script>
