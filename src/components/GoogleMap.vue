<template>
  <div>
    <GmapMap
      :center="{ lat:35.4122, lng:139.4130 }"
      :zoom="7"
      :options="{streetViewControl: false}"
      map-type-id="terrain"
      style="width: 500px; height: 300px"
    >
      <GmapMarker
        :key="index"
        v-for="(m, index) in markers"
        :position="m.position"
        :clickable="true"
        @click="center=m.position"
      />
    </GmapMap>
  </div>
</template>

<script>
export default {
  data() {
    return {
      markers: [{ position: { lat:35.4122, lng:139.4130 } }]
    };
  },
};
</script>
