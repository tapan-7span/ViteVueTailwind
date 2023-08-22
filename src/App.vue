<template>
  <div>
    <form>
      <button
        class="g-recaptcha"
        data-sitekey="6Lf0iscnAAAAAPp6ZS__werzyBxCkFlLbvt_ZiiO"
        @click="triggerRecaptcha"
      >
        Submit
      </button>
      <br />
    </form>
  </div>
</template>

<script>
export default {
  methods: {
    triggerRecaptcha() {
      grecaptcha.ready(() => {
        grecaptcha
          .execute("6Lf0iscnAAAAAPp6ZS__werzyBxCkFlLbvt_ZiiO", {
            action: "submit",
          })
          .then((token) => {
            this.onSubmit(token);
          });
      });
    },
    onSubmit(token) {
      console.log("reCAPTCHA challenge completed successfully!");
      // Perform additional actions here
    },
  },
  mounted() {
    // Load the reCAPTCHA script asynchronously
    const script = document.createElement("script");
    script.src =
      "https://www.google.com/recaptcha/api.js?onload=onRecaptchaLoad&render=explicit";
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);

    // Define the global function for reCAPTCHA to use
    window.onRecaptchaLoad = this.onRecaptchaLoad;
  },
  methods: {
    onRecaptchaLoad() {
      grecaptcha.render("g-recaptcha", {
        sitekey: "6Lf0iscnAAAAAPp6ZS__werzyBxCkFlLbvt_ZiiO",
        callback: this.onSubmit,
      });
    },
  },
};
</script>
