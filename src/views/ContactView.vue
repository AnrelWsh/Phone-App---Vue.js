<template>

  <div>
      <h1>Contacts</h1>
  </div>

  <FormContact/>
  

  <div class="contacts" v-for="contact in contacts" :key="contact.id">
    <div >
        <CarteContact :contact="contact"/>
        <img src="@/assets/appel.svg" alt="Appel" @click="nouvelAppel(contact)">
    </div>
  </div>
</template>

<script>
  import CarteContact from "@/components/CarteContact.vue"
  import FormContact from "@/components/FormContact.vue"

  export default {
    name: 'ContactView',

    components: {
            CarteContact,
            FormContact
        },

    computed:{
        contacts(){
            return this.$store.state.contacts
        },

        journal() {
          return this.$store.state.journal
        }
    },

    methods: {
			nouvelAppel(contact) {
				this.$store.commit('nouvelAppel', contact)
			}
		},
  }
</script>

<style scoped>
  img{
    width: 50px;
  }
</style>
