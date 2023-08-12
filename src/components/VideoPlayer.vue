<template>
  <div class="w-full h-screen flex justify-center items-center overflow-hidden">
    <div
      class="relative w-[1200px] h-auto flex items-center justify-center shadow-2xl shadow-black"
    >
      <video
        ref="videoElement"
        class=""
        autoplay
        muted
        disablepictureinpicture
        :controls="!showOverlay"
        controlslist="nodownload noplaybackrate"
        @click="handleVideoClick"
      >
        <source :src="videoSource" type="video/mp4" />
      </video>
      <div
        class="absolute bg-black bg-opacity-50 flex justify-center items-center rounded-full"
        v-if="showOverlay"
      >
        <button
          class="text-white text-3xl focus:outline-none"
          @click="playVideo"
        >
          <svg class="w-28 h-28" fill="currentColor" viewBox="0 0 20 20">
            <path d="M6 4l10 6-10 6V4z"></path>
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      videoSource: "https://dev-voliz.b-cdn.net/7Span-Intro.mp4",
      showOverlay: true,
    };
  },
  methods: {
    handleVideoClick() {
      if (this.showOverlay) {
        this.playVideo();
      } else {
        this.$refs.videoElement.paused
          ? this.$refs.videoElement.play()
          : this.$refs.videoElement.pause();
      }
    },
    playVideo() {
      this.$refs.videoElement.currentTime = 0;
      this.$refs.videoElement.play();
      this.$refs.videoElement.muted = false;
      this.showOverlay = false;
    },
  },
};
</script>
