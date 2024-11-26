class Stack{
    static isStackFull(stackInstance, maxSize) {
        return stackInstance.items.length >= maxSize;
    };

    constructor(maxSize){
        this.maxSize = maxSize;
        this.items = [];
    };

    push(item){
        if(this.items.length >= this.maxSize){
            return `Stack is full`
        }
        this.items.push(item);
        return item;
    };

    pop(){
        if(this.isEmpty()){
            return undefined
        }else{
            return this.items.pop();
        }
    };

    isEmpty(){
       return this.items.length === 0;
    };

    length(){
        return this.items.length;
    };

    peek() {
        if (this.isEmpty()) {
            return undefined; 
        }else{
            return this.items[this.items.length - 1]; 
        }
    };

    clear(){
        return this.items = [];
    };
}

const myStack = new Stack(3);

console.log(myStack.push(1)); 
console.log(myStack.push(2));  
console.log(myStack.push(3));  
console.log(myStack.push(4)); 
console.log(Stack.isStackFull(myStack, 3));

console.log(myStack.pop());  
console.log(myStack.peek());   
console.log(myStack.length()); 
console.log(myStack.isEmpty()); 

myStack.clear();
console.log(myStack.isEmpty()); 
console.log(Stack.isStackFull(myStack, 3));