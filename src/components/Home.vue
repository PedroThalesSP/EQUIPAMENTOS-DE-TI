<script setup lang="ts">
import { ref } from 'vue';
import { reactive } from 'vue';
import { computed } from 'vue';

const adicionar = ref('')
const remover = ref('')
const modificar = ref('')
const itens = ref<any[]>([])
const boxSelecionada = ref<Array<any>>([])
const envioDeleteBackend = ref <any[]>([])
const envioModificacaoBackend = ref <any[]>([])
const produtoDigitado = ref('')

const state = reactive({
  abrirModalConfirmarDoAdicionar: false,
  abrirModalConfirmarDelete: false,
  abrirModalModificarItens: false,
})

function abrirModalAdicionarItens() {
  state.abrirModalConfirmarDoAdicionar = true
}

function abrirModalRemover(){
  state.abrirModalConfirmarDelete = true

  envioDeleteBackend.value = boxSelecionada.value.map(item => ({
    id:item.id,
    name:item.name
  }));
}

function abrirModalModificar() {
  state.abrirModalModificarItens = true
  envioModificacaoBackend.value = boxSelecionada.value.map(item => ({
    id:item.id,
    name:item.name,
  }))
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

// function pesquisaItens(){
//   const produtoDigitadoValor = produtoDigitado.value;
//   const itemFiltrado = itens.value.map(item => item.name)

//   for(let i=0; i < produtoDigitadoValor.length; i++){
//     if(itemFiltrado[i] === produtoDigitadoValor){
//       alert("valor encontrado")
//       break
//     } 
//   }
// }

const itensFiltrados = computed(()=>{
 if(!produtoDigitado.value){
   return itens.value
 }
 const termo = produtoDigitado.value.toUpperCase()
 return itens.value.filter(item => item.name.toUpperCase().includes(termo))
 
})

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
            <h1 class="text-subtitle-1 cursor-pointer">atualizar</h1>
            <h1 class="text-subtitle-1 cursor-pointer">opções</h1>
          </div>
        </v-toolbar-title>
      </div>
    </section>
  </v-toolbar>

  <v-card class="barra-superior-card" flat>
    <v-card-title class="d-flex flex-row justify-space-between">
      <p class="d-none d-sm-block"> Lista de Equipamentos </p>
      <v-text-field class="barra-de-pesquisa" v-model=produtoDigitado density="compact" label="PESQUISA" prepend-inner-icon="mdi-magnify"
        variant="outlined" hide-details></v-text-field>
    </v-card-title>

    <v-data-table :items="itensFiltrados" item-value="id" items-per-page="5" show-select return-object v-model="boxSelecionada"
      class="elevation-3 ">

    </v-data-table>

    <div class="d-flex align-center justify-center justify-sm-end ma-4 ga-2 ga-md-6 ">

      <v-btn class=" botao bg-green" v-model="adicionar" @click="abrirModalAdicionarItens()"> Adicionar
      </v-btn>

      <v-btn class=" botao bg-red" v-model="remover" @click="abrirModalRemover()"> Remover
      </v-btn>

      <v-btn class=" botao bg-orange" v-model="modificar" @click="abrirModalModificar()  "> Modificar
      </v-btn>

    </div>
  </v-card>

  <v-dialog max-width="500" v-model="state.abrirModalConfirmarDoAdicionar" z-index="1000">
    <ModalAdicionar @dadosBanco="exibirDados" class="bg-white">
    </ModalAdicionar>
  </v-dialog>
  
  <v-dialog max-width="500" v-model="state.abrirModalConfirmarDelete" z-index="1000">
    <ModalRemover :dadosDaHome="envioDeleteBackend" >
    </ModalRemover>
  </v-dialog>

  <v-dialog max-width="500" v-model="state.abrirModalModificarItens"  z-index="1000">
    <ModalModificar :dadosModificacao="envioModificacaoBackend" class="bg-white" > 
    </ModalModificar>
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