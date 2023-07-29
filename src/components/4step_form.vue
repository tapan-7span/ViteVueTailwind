<template>
  <div class="max-w-md mx-auto mt-8 p-4">
    <div v-if="step === 1">
      <!-- Step 1: First Name and Last Name -->
      <div class="mb-4">
        <label for="first_name" class="block font-medium mb-1"
          >First Name:</label
        >
        <input
          v-model="formData.firstName"
          type="text"
          id="first_name"
          class="w-full px-4 py-2 border rounded"
        />
      </div>
      <div class="mb-4">
        <label for="last_name" class="block font-medium mb-1">Last Name:</label>
        <input
          v-model="formData.lastName"
          type="text"
          id="last_name"
          class="w-full px-4 py-2 border rounded"
        />
      </div>
      <button
        @click="nextStep"
        class="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
      >
        Next
      </button>
    </div>

    <div v-else-if="step === 2">
      <!-- Step 2: Email and Mobile Number -->
      <div class="mb-4">
        <label for="email" class="block font-medium mb-1">Email:</label>
        <input
          v-model="formData.email"
          type="email"
          id="email"
          class="w-full px-4 py-2 border rounded"
        />
      </div>
      <div class="mb-4">
        <label for="mobile" class="block font-medium mb-1"
          >Mobile Number:</label
        >
        <input
          v-model="formData.mobile"
          type="text"
          id="mobile"
          class="w-full px-4 py-2 border rounded"
        />
      </div>
      <button
        @click="prevStep"
        class="mr-2 bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded"
      >
        Previous
      </button>
      <button
        @click="nextStep"
        class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
      >
        Next
      </button>
    </div>

    <div v-else-if="step === 3">
      <!-- Step 3: Date of Birth and Image URL -->
      <div class="mb-4">
        <label for="dob" class="block font-medium mb-1">Date of Birth:</label>
        <input
          v-model="formData.dob"
          type="date"
          id="dob"
          class="w-full px-4 py-2 border rounded"
        />
      </div>
      <div class="mb-4">
        <label for="image_url" class="block font-medium mb-1">Image URL:</label>
        <input
          v-model="formData.imageUrl"
          type="text"
          id="image_url"
          class="w-full px-4 py-2 border rounded"
        />
      </div>
      <button
        @click="prevStep"
        class="mr-2 bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded"
      >
        Previous
      </button>
      <button
        @click="nextStep"
        class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
      >
        Next
      </button>
    </div>

    <div v-else-if="step === 4">
      <!-- Step 4: Address and Suggestions -->
      <div class="mb-4">
        <label for="address" class="block font-medium mb-1">Address:</label>
        <input
          v-model="formData.address"
          type="text"
          id="address"
          class="w-full px-4 py-2 border rounded"
        />
      </div>
      <div class="mb-4">
        <label for="suggestions" class="block font-medium mb-1"
          >Suggestions:</label
        >
        <textarea
          v-model="formData.suggestions"
          id="suggestions"
          rows="4"
          class="w-full px-4 py-2 border rounded"
        ></textarea>
      </div>
      <button
        @click="prevStep"
        class="mr-2 bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded"
      >
        Previous
      </button>
      <button
        @click="submitForm"
        class="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
      >
        Submit
      </button>
    </div>

    <!-- Show the submitted data after the form is submitted -->
    <div v-else>
      <p class="font-bold">Submitted Data:</p>
      <pre>{{ submittedData }}</pre>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      step: 1,
      formData: {
        firstName: "",
        lastName: "",
        email: "",
        mobile: "",
        dob: "",
        imageUrl: "",
        address: "",
        suggestions: "",
      },
      submittedData: null,
    };
  },
  methods: {
    nextStep() {
      this.step++;
    },
    prevStep() {
      this.step--;
    },
    submitForm() {
      this.submittedData = this.formData;
      // You can log the data or perform any other action with it here
    },
  },
};
</script>
