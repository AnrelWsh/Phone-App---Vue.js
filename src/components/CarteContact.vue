<template>
    <div class="flex">
        <div>
            <h2 class="font-bold text-2xl">{{contact.nom}}</h2>
            <h3 class="font-bold ">{{contact.numero}}</h3>
        </div>
        <img class="cursor-pointer" src="@/assets/appel.svg" alt="Appel" @click="nouvelAppel(contact)">
    </div>
</template>

<script>
export default {
    name: "CarteContact",

    props: [
        'contact'
    ],
    
    methods: {
        nouvelAppel(contact) {
            this.$store.commit('nouvelAppel', contact.nom, contact.numero)
            console.log(contact)
        }
    },
    
}
</script>

<style>
img{
    width: 50px;
  }
</style>