<template>
  
  <div>
      <h1>Journal</h1>
  </div>

  <div v-for="contact in journal" :key="contact.nom" class="journal">
    <CarteContact :contact="contact"/>
	</div>

  
</template>

<script>

import CarteContact from "@/components/CarteContact.vue"

export default {
  name: 'JournalView',
  components: {
    CarteContact
  },

  computed:{
        journal() {
          return this.$store.state.journal
        }
    },
}
</script>
