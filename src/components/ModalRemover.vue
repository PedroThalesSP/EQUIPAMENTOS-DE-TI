<script setup lang="ts">
    import Home from './Home.vue';
    import { computed, defineProps } from 'vue';
    import { ref } from 'vue';


    const props = defineProps({
        dadosDaHome: Array
    })

    const nomeItensDeletar = computed(()=>{ 
        return  props.dadosDaHome?.map(item => item.name ).join(',' ) 
    }) 

    console.log(props.dadosDaHome)

</script>

<template>
    <v-container class="bg-white">
        <v-form @submit.prevent="" >
            
            <div class="d-flex align-center flex-column ga-10 ">
            <p> Você deseja deletar {{nomeItensDeletar}} do banco de dados? </p>
            <div class=" d-flex ga-10">
                <v-btn class="bg-red" > excluir </v-btn>
                <v-btn class="bg-green"> voltar </v-btn>
            </div>
            </div>

        </v-form>
  </v-container>
</template>

<style scoped>

</style>