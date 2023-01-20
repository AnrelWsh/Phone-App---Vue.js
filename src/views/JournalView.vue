<template>
  
  <div>
      <h1>Journal</h1>
  </div>

  <div v-for="contact in journal" :key="contact.nom" class="journal">
    <CarteContact :contact="contact"/>
    <p class="list-group-item" v-show="date"><strong>Date:</strong> {{ date }}</p>
    <p class="list-group-item" v-show="time"><strong>Time:</strong> {{ time }}</p>
	</div>

  
</template>

<script>

import CarteContact from "@/components/CarteContact.vue"

export default {
  name: 'JournalView',
  components: {
    CarteContact
  },

  data: () => ({
          time: '',
          year: '',
        }),

  computed:{
        journal() {
          return this.$store.state.journal
        }
    },

    methods:{
      printDate: function () {
        return new Date().toLocaleDateString();
      },
      printTime: function () {
        return new Date().toLocaleTimeString();
      },
    },

    mounted: function () {
      this.date = this.printDate();
      this.time = this.printTime();
    },
}
</script>
