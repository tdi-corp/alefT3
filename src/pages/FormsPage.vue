<script setup>
    import { defineModel, ref } from 'vue';
    import store from '@/store';
    import Input from '@/components/Input.vue';

    const name = ref('name')
    const age = ref('age')

    function addChild(name, age) {
        store.updateChild(name, age)
    }
 
    const txt = {
        name: 'Имя',
        age: 'Возраст'
    }
</script>

<template>

    <div class="container">
        <div class="block">
            <div class="h1">
                <h1>
                    Персональные Данные
                </h1>
            </div>

            <Input :lableField="txt.name" v-model="store.person.name"/>
        
            <Input :lableField="txt.age" v-model="store.person.age"/>
        </div>
    
        <div class="block">
            <div style="display: flex; justify-content: space-between; align-items: center;">
                <div class="h1">
                    <h1>
                        Дети (макс. 5)
                    </h1>
                </div>            
                <div>
                    <button class="customBtn outline" @click="addChild(name, age)">
                        Добавить ребенка
                    </button>
                </div>

            </div>

            <div v-for="item in store.childs">
                <div :key="item.id" style="display: flex;">
                    <div>
                        <Input :lableField="txt.name" v-model="item.name"/>
                    </div>
                    <div>
                        <Input :lableField="txt.age" v-model="item.age"/>
                    </div>
                    <div>
                        <button @click="store.removeItem(item.id)">Удалить</button>
                        
                    </div>
                </div>
            </div>

        </div>
    
        


        <div>
            <div>
                <input type="text" v-model="store.addChildPerson.name"/>
                <input type="text" v-model="store.addChildPerson.age"/>
            </div>
    
            <button class="customBtn flat" @click="store.addChild">Сохранить</button>
        </div>

       
    </div>

</template>

<style>

</style>