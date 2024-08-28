<script setup>
    import store from '@/store';
</script>

<template>
    <div class="container">
        <div class="block">
            <div class="h1">
                <h1>
                    Персональные Данные
                </h1>
            </div>

            <div style="font-weight: 700;">{{ store.person.name }}<span v-if="store.person.age">, {{ store.person.age }}</span>
            </div>
        </div>

        <div class="block">
            <div class="h1">
                <h1>
                    Дети
                </h1>
            </div>

            <div v-for="item in store.childs">
                <div :key="item.id" class="customChip" style="margin-bottom: 10px; display: inline-block">
                    <div style="font-weight: 700;">{{ item.name }}<span v-if="item.age">, {{ item.age }}</span>
                    </div>                    
                </div>
            </div>
        </div>        
    </div>
</template>