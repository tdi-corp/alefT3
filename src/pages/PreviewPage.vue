<script setup>
    import store from '@/store';
</script>

<template>
    <h1>
        Персональные Данные
    </h1>
    <h1>test - > {{ store.person.name }} {{ store.person.age }}</h1>

    <div>{{ store.childs }}</div>
</template>