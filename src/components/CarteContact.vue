<template>
    <div class="flex items-center">
        <div>
            <h2 class="font-bold text-2xl">{{contact.nom}}</h2>
            <h3 class="font-bold ">{{contact.numero}}</h3>
        </div>
        <img class="cursor-pointer" src="@/assets/appel.svg" alt="Appel" @click="nouvelAppel(contact)">
        <audio id="audioAppel">
            <source src="@/assets/appel.mp3" type="audio/mpeg">
        </audio>
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
            let audioAppel = document.getElementById("audioAppel")
            audioAppel.play()
            this.$store.commit('nouvelAppel', contact.nom, contact.numero)
        }
    },
    
}
</script>

<style>
img{
    width: 50px;
  }
</style>