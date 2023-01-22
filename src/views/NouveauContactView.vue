<template>
    <div class="flex flex-col items-center m-auto">
        <h1>Ajouter un contact</h1>

        <div class="flex items-center gap-[20vw]">
            <div class=" flex flex-col items-center">
                <h2 class="font-bold text-[#64676a] text-2xl m-8">Nouveau contact</h2>
                <FormContact/>
            </div>
    
            <div>
                <router-link class="navBtn" to="/contact">Mes Contacts</router-link>
            </div>
        </div>
        
    </div>
</template>
<script>

import FormContact from "@/components/FormContact.vue"

export default {
    name: "NouveauContactView",

    components:{
        FormContact
    }
    
}
</script>
<style>
    
</style>