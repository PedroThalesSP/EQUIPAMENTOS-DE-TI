<script setup lang='ts'>
import {ref} from 'vue'
import {reactive} from 'vue'

console.log('algo')

</script>

<template>
    <v-container>
        <v-form >
            <v-text-field
            density='compact'
            label= 'Nome:'
            >
            </v-text-field>

            <v-file-input
                label="File input"
                density='compact'
                prepend-icon=""
                variant="filled"
             ></v-file-input>

             <v-text-field
                density='compact'
                label= 'Valor:'
                >
            </v-text-field>

            <div class='d-flex align-center justify-end ga-5 ' >

                <v-btn class='bg-green'>
                    confirmar                    
                </v-btn>
                
                <v-btn class='bg-red'>
                    cancelar
                </v-btn>
                
            </div>

        </v-form>
    </v-container>
</template>


<style scoped>


</style>
