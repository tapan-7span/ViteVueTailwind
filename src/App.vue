<template>
  <div>
    <form>
      Name: (required) <input v-model="name" />
      <div
        id="recaptcha"
        class="g-recaptcha"
        :data-sitekey="siteKey"
        :data-callback="onSubmit"
        data-size="invisible"
      ></div>
      <button @click.prevent="validate">submit</button>
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
      console.log("token", token);
    },
    validate() {
      if (!this.name) {
        alert("You must add text to the required field");
      } else {
        grecaptcha.execute();
      }
    },
    onload() {
      var element = document.getElementById("submit");
      element.onclick = this.validate;
    },
  },
  mounted() {
    this.onload();
  },
};
</script>
