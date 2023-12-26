<template>
  <div class="container">
    <!-- <h1>Контакты</h1> -->

    <div class="contact">
      <div class="contact__form">
        <h2>Обратная связь</h2>
        <form @submit.prevent="submitForm">
          <div class="form-group">
            <label for="name">Имя:</label>
            <input type="text" class="form-control" id="name" v-model="formData.name" required>
          </div>
          <div class="form-group">
            <label for="email">Email:</label>
            <input type="email" class="form-control" id="email" v-model="formData.email" required>
          </div>
          <div class="form-group">
            <label for="message">Сообщение:</label>
            <textarea class="form-control" id="message" v-model="formData.message" required></textarea>
          </div>
          <button type="submit" class="btn btn-primary">Отправить</button>
        </form>
      </div>

      <div class="contact_info">
        <h2>Контактная информация</h2>
        <ul>
          <li><strong>Email:</strong> ruzyzakov@gmail.com</li>
          <li><strong>Телефон:</strong> +7 (987) 252-5226</li>
          <li><strong>Адрес:</strong> ДУ 18</li>
        </ul>
      </div>
    </div>
  </div>
</template>
  
<script>
export default {
  data() {
    return {
      formData: {
        name: '',
        email: '',
        message: '',
      },
    };
  },
  methods: {
    submitForm() {
      alert("Отправитель: " + this.formData.name + " (" 
      + this.formData.email + ")\n" 
      + "Сообщение: " + this.formData.message);

      this.formData.name = '';
      this.formData.email = '';
      this.formData.message = '';
    },
  },
};
</script>
  
<style scoped lang="css" src="./styles.css"></style>