<template>
  <div class="mx-3 sm:-mx-8 sm:px-8 overflow-y-auto overflow-x-hidden">
    <div class="inline-block min-w-full shadow rounded-lg">
      <vueper-slides
        fade
        :touchable="false"
        @slide="updateIndex($event.currentSlide.index)"
      >
        <vueper-slide
          v-for="(slide, i) in rivers"
          :key="i"
          :image="slide.image"
        />
      </vueper-slides>

      <div class="px-6 py-4 pb-1">
        <div id="titleDiv" class="font-bold text-2xl mb-2 underline">
          {{ title }}
        </div>
        <div
          id="descriptionDiv"
          class="text-md mb-2 text-justify"
          style="text-indent: 1.5em"
        >
          {{ description }}
        </div>
      </div>
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2 italic">Stats</div>
        <div class="flex items-stretch">
          <p class="font-bold">Length:</p>
          <p id="lengthPar" class="geostats">{{ length }}</p>
        </div>
        <div class="flex items-stretch">
          <p id="countriesPar" class="font-bold">Countries:</p>
          <p class="geostats">{{ countries }}</p>
        </div>
        <div class="flex items-stretch">
          <p id="continentPar" class="font-bold">Continent:</p>
          <p class="geostats">{{ continent }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { VueperSlides, VueperSlide } from 'vueperslides'
import { mapState } from 'vuex'

export default {
  components: { VueperSlides, VueperSlide },

  data() {
    return {
      title: '',
      description: '',
      length: '',
      countries: '',
      continent: '',
    }
  },
  computed: mapState(['rivers']),
  watch: {
    rivers(newValue, oldValue) {
      if (newValue) this.updateIndex(0)
    },
  },
  mounted() {
    this.$store.dispatch('apiGetRivers')
  },
  methods: {
    updateIndex(i) {
      this.title = this.rivers[i].title
      this.description = this.rivers[i].description
      this.length = this.rivers[i].length
      this.countries = this.rivers[i].countries.join(', ')
      this.continent = this.rivers[i].continent
    },
  },
}
</script>
<style>
.geostats {
  text-indent: 0.7em;
}
</style>
