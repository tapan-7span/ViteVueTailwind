<template>
  <div>
    <form>
      Name: (required) <input v-model="name" required>
      <div class="g-recaptcha" data-sitekey="6Lf0iscnAAAAAPp6ZS__werzyBxCkFlLbvt_ZiiO" ref="recaptcha"></div>
      <button type="submit" @click.prevent="submitForm">submit</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: ''
    };
  },
  mounted() {
    const self = this;
    window.onloadCallback = function() {
      grecaptcha.render(self.$refs.recaptcha, {
        sitekey: '6Lf0iscnAAAAAPp6ZS__werzyBxCkFlLbvt_ZiiO',
        size: 'invisible',
        callback: self.onSubmit,
        'error-callback': self.onError
      });
    };
    const script = document.createElement('script');
    script.src = 'https://www.google.com/recaptcha/api.js?onload=onloadCallback&render=explicit';
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);
  },
  methods: {
    validateForm() {
      if (!this.name) {
        alert('You must add text to the required field');
        return false;
      } else {
        grecaptcha.execute();
        return true;
      }
    },
    onSubmit(token) {
      alert('thanks ' + this.name);
    },
    onError() {
      alert('reCAPTCHA encountered an error. Please try again later.');
    },
    submitForm() {
      if (this.validateForm()) {
        // submit the form data here
      }
    }
  }
};
