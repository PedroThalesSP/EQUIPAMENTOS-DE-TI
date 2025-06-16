<script setup lang="ts">
import { ref } from 'vue';
import { reactive } from 'vue';
import { defineProps } from 'vue';
import ModalAdicionar from './ModalAdicionar.vue';


const adicionar = ref('')
const remover = ref('')
const modificar = ref('')
const idRawValueProduto = ref('')
const boxSelecionada = ref<Array<any>>([])
const itens = ref<any[]>([])

const state = reactive({
  abrirModalConfirmarDoAdicionar: false,
})

function fecharModalAdicionarItens() {
  state.abrirModalConfirmarDoAdicionar = false;
}

function abrirModalAdicionarItens() {
  state.abrirModalConfirmarDoAdicionar = true
}
  
  function abrirModalModificarItens() {
    console.log('modificar');
  }
  
  function exibirDados(dados: any[]) {
    const dadosDaModalAdicionar = dados;
    
    itens.value = dadosDaModalAdicionar.map(obj => ({
      id: obj.id,
      name: obj.name,
      image: obj.image,
      value: obj.value
    }))
  }
  
  // teste
  function abrirModalRemoverItens() {
    const envioDeleteBackend = boxSelecionada.value.map(item => item.id);
    console.log(idRawValueProduto)
  }

  async function envioAcessoriosDeTi(){
    try{

      const envioDeleteBackend = idRawValueProduto;
      
      const dadosDeleteBackend = {
       envioDeleteBackend :envioDeleteBackend ,

      }
       
      const urlServidor = await fetch('http://localhost:3003/api/delete',{
        method: 'POST',
        headers:{
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dadosDeleteBackend),
      })
      
      if(urlServidor.ok){
        const respostaDoServidor = urlServidor.json()
        alert("Dados registrados com sucesso")
      } else{
        alert(" Erro ao registrar os dados",)
      }
    } catch(erro){
      console.error("erro durante a requisição:",erro)
    }
  }

//fim teste

</script>

<template>
  <v-toolbar class="bg-light-blue-darken-2" elevation="3">
    <section class="barra-superior-header d-flex align-center justify-space-between ma-4">
      <div>
        <v-toolbar-title>
          <h4 class=" texto-titulo ">Equipamentos de TI</h4>
        </v-toolbar-title>
      </div>

      <div>
        <v-toolbar-title>
          <div class="d-flex ga-5">
            <h1 class="text-subtitle-1 cursor-pointer">inicio</h1>
            <h1 class="text-subtitle-1 cursor-pointer">opções</h1>
          </div>
        </v-toolbar-title>
      </div>
    </section>
  </v-toolbar>

  <v-card class="barra-superior-card" flat>
    <v-card-title class="d-flex flex-row justify-space-between">
      <p class="d-none d-sm-block"> Lista de Equipamentos </p>
      <v-text-field class="barra-de-pesquisa" density="compact" label="PESQUISA" prepend-inner-icon="mdi-magnify"
        variant="outlined" hide-details></v-text-field>
    </v-card-title>

    <v-data-table :items="itens" item-value="id" items-per-page="5" show-select return-object v-model="boxSelecionada"
      class="elevation-3 ">

    </v-data-table>

    <div class="d-flex align-center justify-center justify-sm-end ma-4 ga-2 ga-md-6 ">

      <v-btn class=" botao bg-green" v-model="adicionar" @click="abrirModalAdicionarItens()">Adicionar
      </v-btn>

      <v-btn class=" botao bg-red" v-model="remover" @click="abrirModalRemoverItens()">Remover
      </v-btn>

      <v-btn class=" botao bg-orange" v-model="modificar" @click="abrirModalModificarItens">Modificar
      </v-btn>

    </div>
  </v-card>

  <v-dialog max-width="500" v-model="state.abrirModalConfirmarDoAdicionar" z-index="1000">
    <ModalAdicionar @cancelar="fecharModalAdicionarItens" @dadosBanco="exibirDados" class="bg-white">
    </ModalAdicionar> <!-- teste -->
  </v-dialog>

</template>

<style scoped>
.barra-superior-header {
  width: 100%;
  max-width: 100%;
}

.barra-superior-card {
  width: 100%;
  max-width: 100%;
}

.barra-de-pesquisa {
  max-width: 35%;
}

.botao {
  max-width: 34%;
}

@media (max-width: 600px) {
  .barra-de-pesquisa {
    max-width: 100%;
  }

  .texto-titulo {
    font-size: 1rem;
  }
}
</style>