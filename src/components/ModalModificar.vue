<script setup>
    import { defineProps } from 'vue';
    import { computed } from 'vue';

    const props = defineProps({
        dadosModificacao: Array
    })

    const descricaoProduto = computed( ()=>{
       return props.dadosModificacao?.map(item => item.name).join(' e ')
    }) 

</script>

<template>
    <v-form class="formulario">
        <div class="d-flex aling-center flex-column justify-center ma-3 ">
            <div>
                <p class="paragrafo d-flex aling-center justify-center text-h6" > Dados que serão modificados: {{ descricaoProduto }}</p>
            </div>
            <section class="d-flex aling-center justify-center flex-column">
                <v-text-field
                density="compact"
                label="Novo nome:"
                ></v-text-field>
                
                <v-text-field
                density="compact"
                label="Nova url:"
                ></v-text-field>
                
                <v-text-field
                density="compact"
                label="Novo valor:"
                ></v-text-field>
            </section>
        </div>
    </v-form>
</template>

<style scoped >

 .paragrafo{
    width: 100%;
}

.formulario{
    width: 40rem;
    max-width: 100%;
}


</style>