<script setup lang="ts">
  import {ref} from 'vue'
  import {reactive} from 'vue'
  import { id } from 'vuetify/locale'
  
  const adicionar = ref('')
  const remover = ref('')
  const modificar = ref('')
  
  const state = reactive({
    abrirModalConfirmarDoAdicionar: true,

  })
  
  const items = [
    { id:1 , name:'João', image: '1' , value: 100 },
    { id:2 , name:'Joã', image: '2' , value: 200  },
    { id:3 , name:'Jo', image: '3' , value: 300  },
    { id:4 , name:'J', image: '4' , value: 400  },

  ];
  
  function abrirModalAdicionarItens(){
    state.abrirModalConfirmarDoAdicionar = true
    console.log('adicionar')

  }

  function abrirModalRemoverItens(){
    console.log('remover');
  }

  function abrirModalModificarItens(){
    console.log('modificar');
  }

</script>

<template>
  <v-toolbar class="bg-light-blue-darken-2" elevation="3">
    <section
      class="barra-superior-header d-flex align-center justify-space-between ma-4"
    >
      <div>
        <v-toolbar-title>
          <h4 class="texto-titulo ">Equipamentos de TI</h4>
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
      <p class="d-none d-sm-block"> Equipamentos </p>
      <v-text-field
        class="barra-de-pesquisa"
        density="compact"
        label="PESQUISA"
        prepend-inner-icon="mdi-magnify"
        variant="outlined"
        hide-details
      ></v-text-field>
    </v-card-title>

    <v-data-table
      :items="items"
      item-value="id" 
      items-per-page="5" 
      show-select
      class="elevation-3 ">
    </v-data-table>

    <div class="d-flex align-center justify-center justify-sm-end ma-4 ga-2 ga-md-6 ">
      
      <v-btn 
        class=" botao bg-green"
        v-model="adicionar"
        @click="abrirModalAdicionarItens"
        >Adicionar
      </v-btn>

      <v-btn 
        class=" botao bg-red"
        v-model="remover"
        @click="abrirModalRemoverItens"
        >Remover
      </v-btn>

      <v-btn 
        class=" botao bg-orange"
        v-model="modificar"
        @click="abrirModalModificarItens"
        >Modificar
      </v-btn>
    
    </div>
  </v-card>

  <v-dialog max-width="100px" v-model="state.abrirModalConfirmarDoAdicionar" >
    
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

.botao{
  max-width: 34%;
}

@media (max-width: 600px ) {
  .barra-de-pesquisa {
     max-width: 100%;
  }

  .texto-titulo{
    font-size: 1rem;
  }
}

</style>
