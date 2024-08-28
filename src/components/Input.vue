<script setup>
    import { defineProps } from 'vue';

    const props = defineProps({
        lableField: String,
    })

    const valueFiled = defineModel()
</script>
<template>
    <div class="text-field">
        <label>{{ props.lableField }}</label>

        <input class="field-input" type="text" v-model="valueFiled"/>
    </div>

</template>

<style>
    .text-field {
        display: flex;
        flex-direction: column;
        border: 1px solid #F1F1F1;
        padding: 8px 16px;
    }
    .text-field input:focus, .text-field input:active {
        outline: none;
    }    

    .text-field label {
        margin-bottom: 2px;
        color: rgba(17, 17, 17, 0.48)
    }

    .field-input{
        border: none;
        padding: 0px;
        margin: 0px;
        
    }
    

</style>