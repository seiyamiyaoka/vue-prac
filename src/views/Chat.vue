<template>
  <div class="chat">
    <div class="chat-member">
      <ChatMember @search-member="filterMembers" :members="chatMembers" />
    </div>
    <div class="chat-thread">
      <ChatThread :messages="selectedMessages" />
      <input type="text">
    </div>
  </div>
</template>

<script>
import ChatMember from '../components/ChatMember'
import ChatThread from '../components/ChatThread'
export default {
  name: 'Chat',
  data() {
    return {
      selectId: 1,
      chatMembers: [
        {
          id: 1,
          name: 'taro'
        },
        {
          id: 2,
          name: 'jiro'
        },
        {
          id: 3,
          name: 'saburo'
        }
      ],
      originMember: [
        {
          id: 1,
          name: 'taro'
        },
        {
          id: 2,
          name: 'jiro'
        },
        {
          id: 3,
          name: 'saburo'
        }
      ],
      messages: [
        {
          id: 1,
          thread: [
            {
              authorName: 'taro',
              content: 'こんにちは',
              createdAt: '2020/08/09'
            },
            {
              authorName: 'taro',
              content: 'げんき',
              createdAt: '2020/08/09'
            },
            {
              authorName: 'taro',
              content: 'こんにちは',
              createdAt: '2020/08/09'
            },
            {
              authorName: 'jiro',
              content: 'やっはろ',
              createdAt: '2020/08/09'
            },
            {
              authorName: 'taro',
              content: 'こんにちは',
              createdAt: '2020/08/09'
            },
            {
              authorName: 'jiro',
              content: 'crazy',
              createdAt: '2020/08/09'
            },
          ]
        },
        {
          id: 2,
          thread: [
            {
              authorName: 'ももたろ',
              content: 'こんにちは',
              createdAt: '2020/08/09'
            },
            {
              authorName: 'taro',
              content: 'げんき',
              createdAt: '2020/08/09'
            },
            {
              authorName: 'ももたろ',
              content: 'こんにちは',
              createdAt: '2020/08/09'
            },
            {
              authorName: 'jiro',
              content: 'やっはろ',
              createdAt: '2020/08/09'
            },
            {
              authorName: 'taro',
              content: 'こんにちは',
              createdAt: '2020/08/09'
            },
            {
              authorName: 'jiro',
              content: 'crazy',
              createdAt: '2020/08/09'
            },
          ]
        },
        {
          id: 3,
          thread: [
            {
              authorName: 'きんたろ',
              content: 'こんにちは',
              createdAt: '2020/08/09'
            },
            {
              authorName: 'あめ',
              content: 'げんき',
              createdAt: '2020/08/09'
            },
            {
              authorName: 'きんたろ',
              content: 'こんにちは',
              createdAt: '2020/08/09'
            },
            {
              authorName: 'あめ',
              content: 'やっはろ',
              createdAt: '2020/08/09'
            },
            {
              authorName: 'taro',
              content: 'こんにちは',
              createdAt: '2020/08/09'
            },
            {
              authorName: 'jiおおro',
              content: 'crazy',
              createdAt: '2020/08/09'
            },
          ]
        }
      ]
    }
  },
  computed: {
    selectedMessages() {
      console.log(this.messages)
      return this.messages.find((message) => message.id === this.selectId)
    }
  },
  components: {
    ChatMember,
    ChatThread
  },
  methods: {
    filterMembers(userName) {
      this.chatMembers = this.originMember.filter((member) => member.name.indexOf(userName) > -1)
      this.selectId = this.chatMembers[0].id
    }
  }
}
</script>

<style scoped>

  .chat {
    display: flex;
    height: 800px;
  }
  .chat-member {
    background-color: aqua;
    flex-grow: 1;
  }
  .chat-thread {
    background-color: blueviolet;
    flex-grow: 3
  }

</style>
