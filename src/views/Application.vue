<template>
  <div class="application">
    <form
      id="app"
      @submit="checkForm"
    >
      <p v-if="errors.length">
        <b>Please correct the following error(s):</b>
        <ul>
          <li v-for="(key, error) in errors" :key='key'>{{ error }}</li>
        </ul>
      </p>

      <p>
        <label for="name">Name</label>
        <input
          id="name"
          v-model="name"
          type="text"
          name="name"
        >
      </p>

      <p>
        <span class="email_support">{{ emailSupportMessage }}</span>
        <label for="email">email</label>
        <input
          id="email"
          v-model="email"
          type="text"
          name="email"
        >
      </p>

      <p>
        <input
          type="submit"
          value="Submit"
        >
      </p>

    </form>
  </div>
</template>

<script>
  export default {
    name: 'Application',
    data: function() {
      return {
          errors: [],
          name: null,
          email: null,
       };
    },
    computed: {
      emailSupportMessage() {
        // 有効な時は緑文字で問題ないことを示す
        if(!this.email) return null
        const emailPattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
          return emailPattern.test(this.email)
            ? null
            : 'メールアドレスに『@』を挿入してください。';
      }
    },
    methods:{
      checkForm: function (e) {
        // api実行
        // frontでemailのチェックはしているがサーバでもちゃんとする
        // jsonのエラーメッセージを受け取ってerrorsに正しく挿入する
        // うまく処理できたらthanks画面またはこのページをかきかえる
        if (this.name && this.age) {
          return true;
        }

        this.errors = [];

        if (!this.name) {
          this.errors.push('Name required.');
        }
        if (!this.age) {
          this.errors.push('Age required.');
        }

        e.preventDefault();
      }
    }
  }
</script>

<style scoped>
  .email_support {
    color: red;
    display: block;
  }
</style>