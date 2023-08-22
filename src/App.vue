<template>
  <div>
    <form @submit.prevent="submitForm">
      <label for="name">Name:</label>
      <input type="text" id="name" v-model="name" />

      <div
        class="g-recaptcha"
        data-sitekey="6Lf0iscnAAAAAPp6ZS__werzyBxCkFlLbvt_ZiiO"
        data-callback="onReCaptchaSuccess"
      ></div>

      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
    };
  },

  methods: {
    submitForm() {
      grecaptcha.execute();
    },

    onReCaptchaSuccess(response) {
      console.log("Name:", this.name);
      console.log("reCAPTCHA Response:", response);
    },
  },
};
</script>
