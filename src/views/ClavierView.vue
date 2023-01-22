<template>
    <div>
        <div>
            <h1>Clavier</h1>
        </div>

        <ClavierNum/>
    </div>
    

</template>
<script>

import ClavierNum from "@/components/ClavierNum.vue"

export default {
    name: 'ClavierView',

    components:{
        ClavierNum
    }
}
</script>
<style>
    
</style>