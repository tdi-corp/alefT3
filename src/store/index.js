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

    childsLength() {
        return this.childs.length
    },

    status: true,

    handleStatus(length) {
        if(!length) {
            length = this.childsLength()
        }
        if(length >= 5) {
            this.status = false
            return
        }

        this.status = true
    },

    addChildPerson: {
        name: '',
        age: '',        
    },

    addChild() {

        let lastItemId = 0;
        const length = this.childsLength()
   

        if(!this.status){
            return;
        }

        if(length > 0) {
            lastItemId = this.childs[length - 1]['id']
        }

        this.childs.push(new Person(lastItemId + 1, this.addChildPerson.name, this.addChildPerson.age))

        this.handleStatus()
    },

    removeItem(id){
        
        this.childs = this.childs.filter(item => item.id !== id)

        const length = this.childsLength()

        this.handleStatus(length)

    }

})