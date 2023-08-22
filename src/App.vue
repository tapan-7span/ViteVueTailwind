<template>
  <div>
    <form @submit.prevent="submitForm">
      <button
        ref="recaptchaButton"
        class="g-recaptcha"
        data-sitekey="6Lf0iscnAAAAAPp6ZS__werzyBxCkFlLbvt_ZiiO"
        data-callback="onSubmit"
        data-size="invisible"
      >
        Submit
      </button>
    </form>
  </div>
</template>

<script>
export default {
  methods: {
    onSubmit() {
      // Trigger the reCAPTCHA challenge programmatically
      this.executeRecaptcha();
    },
    executeRecaptcha() {
      grecaptcha.ready(() => {
        grecaptcha
          .execute("6Lf0iscnAAAAAPp6ZS__werzyBxCkFlLbvt_ZiiO", {
            action: "submit",
          })
          .then((token) => {
            this.submitForm(token);
          });
      });
    },
    submitForm(token) {
      // Your form submission logic goes here
      // Include the reCAPTCHA token in your payload if needed
      console.log("reCAPTCHA challenge completed successfully!");
    },
  },
  mounted() {
    const script = document.createElement("script");
    script.src = "https://www.google.com/recaptcha/api.js?render=explicit";
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);
  },
};
</script>
