<template>

  <div class="flex flex-col items-center">

    <div>
      <h1>Contacts</h1>
    </div>

    <div class="flex ">

      <div class="flex flex-col items-center">
        <h2 class="font-bold text-[#64676a] text-2xl m-8">Mes contacts</h2>
        <div class=" flex flex-col">
          <div class="contacts m-4" v-for="contact in contacts" :key="contact.id">
            <div class="flex gap-8">
                <CarteContact :contact="contact"/>
                <img src="@/assets/appel.svg" alt="Appel" @click="nouvelAppel(contact)">
            </div>
          </div>
        </div>
      </div>

      
        <div class=" flex flex-col">
          <h2 class="font-bold text-[#64676a] text-2xl m-8">Mes contacts</h2>
          <FormContact/>
        </div>

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
