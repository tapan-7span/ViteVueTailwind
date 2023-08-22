<template>
  <div>
    <form>
      <button
        class="g-recaptcha"
        data-sitekey="6Lf0iscnAAAAAPp6ZS__werzyBxCkFlLbvt_ZiiO"
        data-callback="onSubmit"
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
    onSubmit(token) {
      console.log("reCAPTCHA challenge completed successfully!");
    },
  },
  mounted() {
    // Load the reCAPTCHA script asynchronously
    const script = document.createElement("script");
    script.src = "https://www.google.com/recaptcha/api.js";
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);
  },
};
</script>
