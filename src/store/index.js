import { reactive } from "vue";


function Person(id, name, age) {
    this.id = id
    this.name = name
    this.age = age
}


export default reactive({

    person: {
        name: '',
        age: '',
    },

    childs: [],
    addChildPerson: {
        name: '',
        age: '',        
    },

    addChild() {

        let lastItemId = 0;
        const length = this.childs.length

        if(length > 0) {
            lastItemId = this.childs[length - 1]['id']
        }

        this.childs.push(new Person(lastItemId + 1, this.addChildPerson.name, this.addChildPerson.age))
    },

    removeItem(id){

        this.childs = this.childs.filter(item => item.id !== id)

    }

})