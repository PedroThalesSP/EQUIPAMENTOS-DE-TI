<script setup lang="ts">
import Home from './Home.vue';
import { computed, defineProps } from 'vue';
import { ref } from 'vue';

const props = defineProps({
    dadosDaHome: Array
})

const nomeItensDeletar = computed(() => {
    return props.dadosDaHome?.map(item => item.name).join(',')
})

async function enviandoDadosRemoviveis() {
    try {

        const dadosDeExclusaoBackend = props.dadosDaHome;
        const dadosDeExclusaoIdBackend = dadosDeExclusaoBackend?.map(item => item .id)
        
        const urlDeleteServer = await fetch ("http://localhost:3003/api/delete", {
            method: 'POST',
            headers:{
                'Content-Type' : 'application/json',
            }, body: JSON.stringify( dadosDeExclusaoIdBackend)
        })
         if (urlDeleteServer.ok){
            console.log('deu certo')
        } else console.log('erro')

    } catch(error) {
        console.log('erro durante a requisição')
    }
}

</script>

<template>
    <v-container class="bg-white">
        <v-form @submit.prevent="">

            <div class="d-flex align-center flex-column ga-10 ">
                <p> Você deseja deletar {{ nomeItensDeletar }} do banco de dados? </p>
                <div class=" d-flex ga-10">
                    <v-btn class="bg-red" @click="enviandoDadosRemoviveis"> excluir </v-btn>
                    <v-btn class="bg-green"> voltar </v-btn>
                </div>
            </div>

        </v-form>
    </v-container>
</template>

<style scoped></style>