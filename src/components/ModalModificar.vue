<script setup>
import { defineProps } from 'vue';
import { computed } from 'vue';
import { ref } from 'vue';

const nomeModificado = ref();
const urlModificado = ref();
const valueModificado = ref();

const props = defineProps({
    dadosModificacao: Array
})

const descricaoProduto = computed(() => {
    return props.dadosModificacao?.map(item => item.name).join(' e ')
})



async function envioModificacoes() {
    try{
        const id = props.dadosModificacao.map(item => item.id)
        const name = nomeModificado.value;
        const image = image.value;
        const value = value.value;
        
        const dadosDoFormularioModificado = {
            id:id,
            name: name,
            image: image,
            value: value,
        }

        const modificaSql = await fetch ('http://localhost:3003/api/modifica',{
            method: 'POST',
            headers: {
                'Content-type' : 'application/json',
            }, 
            body: JSON.stringify(dadosDoFormularioModificado)
        }) 

        if(modificaSql.ok){
            console.log('Dados modificados com sucesso')
        } else {
            console.log('Erro ao registar os dados')
        }
    }  catch (erro) {
        console.error('erro durante a requisição',erro)

    }
}

</script>

<template>
    <v-form class="formulario">
        <div class="d-flex aling-center flex-column justify-center ma-3 ">
            <div>
                <p class="paragrafo d-flex aling-center justify-center "> Dados que serão modificados: {{
                    descricaoProduto }}</p>
            </div>
            <section class="d-flex aling-center justify-center flex-column">
                <v-text-field density="compact" label="Novo nome:" v-model="nomeModificado"></v-text-field>

                <v-text-field density="compact" v-model="urlModificado" label="Nova url:"></v-text-field>

                <v-text-field density="compact" v-model="valueModificado" label="Novo valor:"></v-text-field>

                <v-btn class="bg-green" @click="envioModificacoes">
                    enviar
                </v-btn>
            </section>
        </div>
    </v-form>
</template>

<style scoped>
.paragrafo {
    width: 100%;
}

.formulario {
    width: 40rem;
    max-width: 100%;
}
</style>