<script setup lang="ts">
  import { ref } from "vue";
  import { defineProps } from "vue";
  import { reactive } from "vue";

  import Home from "@/components/Home.vue";
  import Swal from "sweetalert2";

  const entradaDeNome = ref();
  const entradaDeArquivos = ref();
  const entradaDeValores = ref();

  const props = defineProps();
  const emit = defineEmits(["cancelar"]);

  function adicionarDados() {
    const nomeAdicionar: String = entradaDeNome.value;
    const arquivoAdicionar: any = entradaDeArquivos.value;
    const valoresAdicionar: number = parseInt(entradaDeValores.value);

    if (typeof nomeAdicionar !== "string") {
      Swal.fire({
        title: "Error!",
        text: "Preencha o campo nome.",
        icon: "error",
        confirmButtonText: "Voltar",
      });
    }

    if(arquivoAdicionar === undefined){
      Swal.fire({
        title: "Error!",
        text: "Faça update de uma imagem.",
        icon: "error",
        confirmButtonText: "Voltar",
      });
    }

    if ( isNaN(valoresAdicionar)) {
      Swal.fire({
        title: "Error!",
        text: "Preencha com um número.",
        icon: "error",
        confirmButtonText: "Voltar",
      });
    } 

    console.log(nomeAdicionar, valoresAdicionar, arquivoAdicionar)

  }

  // serve para ver se o front-end esta sendo conectado com o back-end
  fetch('http://localhost:3001/')
  .then(response => response.text())
  .then (data => console.log ('responsta do back',data))
  .catch(err => console.log('erro',err))


  // serve para enviar os dados do front-end para o back-end
  async function envioAcessoriosDeTi () { 
    const envioNome = entradaDeNome.value;
    const envioArquivo = entradaDeArquivos.value;
    const envioPreco = entradaDeValores.value;

    const dados = {
      envioNome: envioNome,
      envioArquivo: envioArquivo,
      envioPreco: envioPreco,
    };

    try {
      const resposta = await fetch('http://localhost:3001', {
        method:'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dados),
    });
  

  if (resposta.ok){
    alert('dados registrados')
  } else {
    alert("dados não registrados")
  }} catch (erro){
    alert('erro na rede')
  }}





</script>

<template>
  <v-container>
    <v-form @submit.prevent="envioAcessoriosDeTi" >
      <v-text-field density="compact" label="Nome:" v-model="entradaDeNome">
      </v-text-field>

      <v-file-input
        label="File input"
        density="compact"
        prepend-icon=""
        variant="filled"
        accept="image/png, image/jpeg, image/jpg"
        v-model="entradaDeArquivos"
      ></v-file-input>

      <v-text-field density="compact" label="Valor:" v-model="entradaDeValores">
      </v-text-field>

      <div class="d-flex align-center justify-end ga-5">
        <v-btn class="bg-green" type="submit" @click="adicionarDados()"> confirmar </v-btn>
        <v-btn type="submit" @click="emit('cancelar')" class="bg-red"> cancelar </v-btn>
      </div>
    </v-form>
  </v-container>
</template>

<style scoped></style>
