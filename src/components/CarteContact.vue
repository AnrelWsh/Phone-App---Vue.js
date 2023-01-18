<template>
    <div>
        <h2>{{contact.nom}}</h2>
        <h3>{{contact.numero}}</h3>
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