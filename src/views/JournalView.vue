<template>
  
  <div class="flex flex-col items-center m-auto">
    <div>
      <h1>Journal</h1>
    </div>

    <div v-for="contact in journal" :key="contact.numero" class="journal ">
      <CarteContact :contact="contact"/>
      <div>{{contact.date}}</div>
      <hr>
    </div>

    
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
