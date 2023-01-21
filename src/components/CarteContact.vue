<template>
    <div>
        <h2 class="font-bold text-2xl">{{contact.nom}}</h2>
        <h3 class="font-bold ">{{contact.numero}}</h3>
    </div>
</template>

<script>
export default {
    name: "CarteContact",

    props: [
        'contact'
    ]
    
}
</script>

<style>
    
</style>