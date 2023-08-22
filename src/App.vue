<template>
  <div>
    <form @submit.prevent="submitForm">
      <button
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
      grecaptcha.execute();
    },
    submitForm() {
      // Your form submission logic goes here
      // You can also include the reCAPTCHA token in your payload if needed
    },
  },
  mounted() {
    const script = document.createElement("script");
    script.src = "https://www.google.com/recaptcha/api.js";
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);

    grecaptcha.ready(() => {
      grecaptcha.render("submit-button", {
        sitekey: "6Lf0iscnAAAAAPp6ZS__werzyBxCkFlLbvt_ZiiO",
        size: "invisible",
      });
    });
  },
};
</script>
