<script setup lang="ts">

    interface headers{
        title: string;
        key: number;
        itemKey: number;
    }


    const header: Headers[] = [

    ]

</script>

<template>
    <v-toolbar class="bg-light-blue-darken-2" elevation="3">
        <section class=" barra-superior-header d-flex align-center justify-space-between ma-4">

            <div>
                <v-toolbar-title  >
                    <h4> Equipamentos de TI </h4>
                </v-toolbar-title>
            </div>
            
            <div>
                <v-toolbar-title>
                    <div class="d-flex ga-5" >
                        <h1 class="text-subtitle-1 cursor-pointer"> inicio </h1>
                        <h1 class="text-subtitle-1 cursor-pointer "> opções </h1>
                    </div>
                </v-toolbar-title>
            </div>
                
        </section>
    </v-toolbar>

    <v-card  class=" barra-superior-card " flat>
        <v-card-title class="d-flex flex-row justify-space-between" >Equipamentos
            <v-text-field 
            class="barra-de-pesquisa"
            density="compact"
            label="PESQUISA"
            prepend-inner-icon="mdi-magnify"
            variant="outlined"
            hide-details
        
            ></v-text-field>
        </v-card-title>

        <div class="d-flex align-center justify-end ma-4">
            <v-btn 
            class="bg-orange" 
            
            >Adicionar</v-btn>
        </div>

        

    </v-card>
</template>

<style scoped>

    .barra-superior-header{
        width: 100%;
        max-width: 100%;
    }

    .barra-superior-card{
        width: 100%;
        max-width: 100%;
    }

    .barra-de-pesquisa{
        max-width: 35%;
    }

</style>
