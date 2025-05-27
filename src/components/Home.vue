<script setup lang="ts"></script>

<template>
    <v-toolbar elevation="3">
        <section class=" barra d-flex align-center justify-space-between ma-4">

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

    <v-container class="d-flex align-center flex-column">

        <div>
            <h2 class="text-h6">ITENS</h2>
        </div>

        <div class="barra-de-pesquisa">
            <v-text-field label="Pesquisar itens:" variant="outlined">
            </v-text-field>    
        </div>
    </v-container>
</template>

<style scoped>
    .barra-de-pesquisa{
        max-width: 100%;
        width: 100%;
    }

    .barra{
        width: 100%;
        max-width: 100%;
    }

</style>
