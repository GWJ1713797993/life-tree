<template>
  <div id="app">
   <v-audio :src="require('@/assets/audio/mp3.mp3')" autoplay preload loop></v-audio>
    <keep-alive>
      <router-view />
    </keep-alive>
  </div>
</template>

<script>
import vAudio from '@c/v-audio'
export default {
  components: {
    vAudio
  }
}
</script>
