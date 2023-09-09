<template>
  <div>
    <form @submit.prevent="validateForm">
      Name: (required) <input v-model="name" required />

      <button type="submit">submit</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      siteKey: "6Lf0iscnAAAAAPp6ZS__werzyBxCkFlLbvt_ZiiO",
    };
  },
  methods: {
    onSubmit(token) {
      alert("thanks " + this.name);
      console.log(token);
    },
    validateForm() {
      if (!this.name) {
        alert("You must add text to the required field");
      } else {
        grecaptcha.execute();
      }
    },
  },
  mounted() {
    window.onload = () => {
      const recaptchaContainer = this.$refs.recaptcha;
      const widgetId = grecaptcha.render(recaptchaContainer, {
        sitekey: this.siteKey,
        size: "invisible",
        callback: this.onSubmit,
      });
      this.$data.widgetId = widgetId;
    };
  },
};
</script>

<style>
/* Add your CSS styles here */
</style>
