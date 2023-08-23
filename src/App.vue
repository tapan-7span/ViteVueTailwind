<template>
  <div>
    <form @submit.prevent="validate">
      Name: (required) <input v-model="name" />
      <div
        id="recaptcha"
        class="g-recaptcha"
        :data-sitekey="recaptchaSiteKey"
        :data-callback="onSubmit"
        data-size="invisible"
      ></div>
      <button id="submit">submit</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      recaptchaSiteKey: "6Lf0iscnAAAAAPp6ZS__werzyBxCkFlLbvt_ZiiO", // Replace with your actual site key
    };
  },
  methods: {
    onSubmit(token) {
      alert("thanks " + this.name);
      console.log("token", token);
    },
    validate() {
      if (!this.name) {
        alert("You must add text to the required field");
      } else {
        grecaptcha.execute();
      }
    },
  },
  mounted() {
    const element = document.getElementById("submit");
    element.addEventListener("click", this.validate);
    this.$nextTick(() => {
      const script = document.createElement("script");
      script.src = "https://www.google.com/recaptcha/api.js";
      script.async = true;
      script.defer = true;
      document.head.appendChild(script);
      script.onload = () => {
        grecaptcha.render("recaptcha", {
          sitekey: this.recaptchaSiteKey,
          callback: this.onSubmit,
          size: "invisible",
        });
      };
    });
  },
};
</script>
