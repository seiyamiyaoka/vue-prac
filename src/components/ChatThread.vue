<template>
  <div class="chat-thread">
    <div class="thread">
      <ul class="member" v-for="message in messages.thread" :key="message.id">
        <li>{{ message.authorName }}</li>
        <li>{{ message.content }}</li>
        <li>{{ message.createdAt }}</li>
      </ul>
    </div>
  </div>
</template>

<script>

export default {
  name: 'ChatThread',
  props: {
    messages: {
      type: Array
    }
  },
  components: {
    
  },
}
</script>
