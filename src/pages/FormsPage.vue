<script setup>
    import { defineModel, ref } from 'vue';
    import store from '@/store';
    import Input from '@/components/Input.vue';

    const togg = ref(false)
    const name = ref('name')
    const age = ref('age')

    function toggle() {        
        togg.value = !togg.value
    }

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

            <Input :lableField="txt.name" v-model="store.person.name" style="margin-bottom: 10px"/>
        
            <Input :lableField="txt.age" v-model="store.person.age"/>
        </div>
    
        <div class="block">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px">
                <div class="h1">
                    <h1>
                        Дети (макс. 5)
                    </h1>
                </div>            
                <div>
                    <button class="customBtn outline" @click="toggle()">
                        <div style="display: flex;">
                            <img src="@/assets/plus.svg">
                            <div style="margin-left: 5px; line-height: 25px;">
                                Добавить ребенка
                            </div>
                        </div>
                    </button>
                </div>

            </div>

            <div v-for="item in store.childs">
                <div :key="item.id" style="display: flex; justify-content: space-between; margin-bottom: 10px">
                    <div style="display: flex">
                        <div>
                            <Input :lableField="txt.name" v-model="item.name"/>
                        </div>
                        <div style="margin-left: 18px;">
                            <Input :lableField="txt.age" v-model="item.age"/>
                        </div>
                    </div>
                    <div style="display: flex; justify-content: end; align-items: center;">
                        <button class="customBtn text" @click="store.removeItem(item.id)">
                            Удалить
                        </button>                        
                    </div>
                </div>
            </div>

        </div>
        <div v-if="togg && store.status">
            <div style="display: flex; justify-content: space-between; margin-bottom: 10px">
                <div style="display: flex">
                    <div>
                        <Input :lableField="txt.name" v-model="store.addChildPerson.name"/>
                    </div>
                    <div style="margin-left: 18px;">
                        <Input :lableField="txt.age" v-model="store.addChildPerson.age"/>
                    </div>
                </div>
                <div style="display: flex; justify-content: end; align-items: center;">
                
                </div>
            </div>
    
            <button class="customBtn flat" @click="store.addChild">Сохранить</button>
        </div>

       
    </div>

</template>

<style>

</style>