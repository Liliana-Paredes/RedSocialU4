// class Stack{
//     constructor(){
//         this.stack=[];
//     }

//     push(elemento){
//         this.stack.push(elemento);
//         return this.stack; 
//     }

//     pop(){
//         return this.stack.pop();
//     }

//     peek(){
//         return this.stack[this.stack.length-1]
//     }

//     size(){
//         return this.stack.length;
//     }

//     print(){
//         console.log(this.stack);
//     }
// }

// INSTANCIAR EN UNA VARIABLE - Para usar funciones en cola.
// const datos = new Stack(); 
// console.log(datos.size());
// console.log(datos.push(2));
// console.log(datos.push(3))
// console.log(datos.push(4));
// console.log(datos.push(5));
// console.log(datos.size());
// console.log(datos.peek());
// console.log(datos.size());
// datos.print();

class Queue{
    constructor(){
        this.queue = [];
    }

    enqueue(elemento){
        this.queue.push(elemento);
        return this.queue;
    }

    dequeque(){
        return this.queue.shift();
    }

    peek(){
        return this.queue(0);
    }
    size(){
        return this.queue.length;
    }

    inEmpty(){
        return this.queue.length === 0;
    }

    print(){
        console.log(this.queue);
    }
}

const dato2 = newQueue();
console.log(dato2.size());
console.log(datos)
console.log(dato2.enqueue("koala","gato","tigre","cuy","perro"));




