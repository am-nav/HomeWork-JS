class Queue{
    static merge(queue1, queue2){
        const mergedQueue = [queue1,queue2];
        return mergedQueue;
    };

    constructor(){
        this.items = [];
    };

    enqueue(item){
        this.items.push(item);
        return item;
    };

    dequeue(){
        return this.isEmpty() ? undefined : this.items.shift();
    };

    peek(){
        return this.isEmpty() ? undefined : this.items[0];
    };

    isEmpty(){
        return this.items.length === 0 ? true : false;
    };

    size(){
        return this.items.length;
    };

    clear(){
        return this.items = [];
    }
};

const queue1 = new Queue();
const queue2 = new Queue();
console.log(queue1.enqueue(1));
console.log(queue1.enqueue(2));
console.log(queue2.enqueue(3));
console.log(queue2.enqueue(4));

const mergedQueue = Queue.merge(queue1, queue2);
console.log("Merged Queues:", mergedQueue);

const todayQueue = new Queue();
console.log(todayQueue.enqueue("problem 1"));
console.log(todayQueue.enqueue("problem 2"));
console.log(todayQueue.enqueue("problem 3"));

console.log(todayQueue.peek()); 
console.log(todayQueue.size());
console.log(todayQueue.dequeue());
console.log(todayQueue.isEmpty());

todayQueue.clear();
console.log(todayQueue.isEmpty());