<script setup lang="ts">
  import { ref } from "vue";
  import { defineProps } from "vue";
  import { reactive } from "vue";
  import { onMounted } from "vue";
  import { defineEmits } from "vue";

  import Home from "@/components/Home.vue";
  import Swal from "sweetalert2";

  const entradaDeNome = ref();
  const entradaDeArquivos = ref();
  const entradaDeValores = ref();
  const entradaDeId = ref();
  const dadosBanco = ref([])

  const emits = defineEmits(['dadosBanco'])

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

  //Testando envio de dados por meio do fetch
  async function envioAcessoriosDeTi(){
    try{

      const envioDeId = entradaDeId.value;
      const envioNome = entradaDeNome.value;
      const envioUrl = entradaDeArquivos.value;
      const envioPreco = entradaDeValores.value;
      
      const dadosDoFormulario = {
        envioDeId: envioDeId,
        envioNome: envioNome,
        envioUrl: envioUrl,
        envioPreco: envioPreco,
      }
       
      const urlServidor = await fetch('http://localhost:3003/api/submit',{
        method: 'POST',
        headers:{
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dadosDoFormulario),
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

  // testando o recebimentos dos dados
  onMounted(async ()=>{
    try{
      const respostaDados = await fetch ('http://localhost:3003/api/dados');
      
      if(!respostaDados.ok){
        throw new Error ('erro ao buscar dados')
      }
     dadosBanco.value = await respostaDados.json()

     emits('dadosBanco',dadosBanco.value)

    } catch (erro){
      console.log('erro na requisição',erro)
    }

  })



</script>

<template>
  <v-container>
    <v-form @submit.prevent="envioAcessoriosDeTi" >

      <!-- <v-card v-for="item in dadosBanco"> 
        <v-text-field>
          {{ item }}
        </v-text-field>
      </v-card> -->

      <v-text-field density="compact"
      label="ID:"
      v-model="entradaDeId"
      >

      </v-text-field>

      <v-text-field density="compact" label="Nome:" v-model="entradaDeNome">
      </v-text-field>

      <v-text-field density="compact"
        label="Imagem"
        prepend-icon=""
        v-model="entradaDeArquivos"
      ></v-text-field>

      <v-text-field density="compact" label="Valor:" v-model="entradaDeValores">
      </v-text-field>

      <div class="d-flex align-center justify-end ga-5">
        <v-btn class="bg-green" type="submit" @click="adicionarDados()"> confirmar </v-btn>
        <!-- <v-btn type="" @click="emit('cancelar')" class="bg-red"> cancelar </v-btn> -->
      </div>
    </v-form>
  </v-container>
</template>

<style scoped></style>
