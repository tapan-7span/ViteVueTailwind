<template>
  <div class="flex justify-center items-center h-screen">
    <div class="relative">
      <video
        ref="video"
        class="w-full h-2/3"
        loop
        autoplay
        disablePictureInPicture
        controls
        controlslist="nodownload noplaybackrate"
      >
        <source :src="videoSource" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <button
        @click="playVideo"
        class="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 text-white w-full h-full transition-opacity duration-300"
        v-if="!isPlaying"
      >
        <div
          class="rounded-full bg-gray-100 bg-opacity-20 hover:bg-opacity-50 flex items-center justify-center"
        >
          <div>
            <svg class="w-28 h-28" fill="currentColor" viewBox="0 0 20 20">
              <path d="M6 4l10 6-10 6V4z"></path>
            </svg>
          </div>
        </div>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isPlaying: false,
      videoSource: "https://dev-voliz.b-cdn.net/7Span-Intro.mp4",
    };
  },
  created() {
    console.log("created");
    setTimeout(() => {
      this.playback();
    }, 3000);
  },
  methods: {
    playVideo() {
      console.log("Play Called");
      this.isPlaying = true;
      this.$refs.video.currentTime = 0; // Restart video from the beginning
      this.$refs.video.play();
    },
    playback() {
      this.$refs.video.play();
    },
  },
};
</script>

<style scoped>
/* Add your Tailwind CSS classes or custom styles here */
</style>
