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
          .execute("6Lf0iscnAAAAAPp6ZS__werzyBxCkFlLbvt_ZiiO", { action: "submit" })
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
};
</script>
