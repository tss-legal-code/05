// Задание №4:

class Stack {

    constructor(initialStackCapacity) {
        if (typeof(initialStackCapacity) !== 'number' || !Number.isInteger(initialStackCapacity) || initialStackCapacity <= 0) throw new Error('Ошибка!');
        if (initialStackCapacity == undefined) this.maxStackCapacity = 10;
        this.maxStackCapacity = initialStackCapacity;
        this.countOfElementsOnStack = 0
        this.stackObject = {}
    }

    push(elem) {
        if (this.countOfElementsOnStack + 1 > this.maxStackCapacity) throw new Error('Ошибка! Стек будет переполнен!');
        this.countOfElementsOnStack++
        this.stackObject[this.countOfElementsOnStack] = elem
    }
    pop() {
        if (this.countOfElementsOnStack == 0) throw new Error('Ошибка! Стек пуст!');
        let result = this.stackObject[this.countOfElementsOnStack]
        delete this.stackObject[this.countOfElementsOnStack]
        this.countOfElementsOnStack--
        return result
    }
    peek() {
        if (this.countOfElementsOnStack == 0) return null
        return this.stackObject[this.countOfElementsOnStack]
    }
    isEmpty() {
        return this.countOfElementsOnStack == 0 ? true : false
    }
    toArray() {
        var stackToArray = []
        for (let key = this.countOfElementsOnStack; key >= 1; key--) {
            stackToArray.push(this.stackObject[key])
        }
        return stackToArray
    }

    static fromIterable(iterable) {
        if (iterable[Symbol.iterator] == "undefined") {
            throw new Error('Ошибка! Объект не итерируемый!')
        } else {
            console.log('object is iterable: ', iterable);
        }

        var iterableLength = 0;
        var tempArray = []
        for (let countEachElement of iterable) {
            ++iterableLength;
            tempArray.push(countEachElement)
        }
        console.log('stack length is: ', iterableLength);
        var fromIterableStack = new this(iterableLength)
        for (let pushedElementIndex = iterableLength; pushedElementIndex > 0; pushedElementIndex--) {
            fromIterableStack.push(tempArray[pushedElementIndex - 1]);
        }
        return fromIterableStack

    }
}


var i = new Stack(10);

// console.log('i isEmpty:', i.isEmpty());
console.log('push:', i.push(1));
console.log('push:', i.push([7, 8]));
console.log('push:', i.push('sdf'));
console.log('push:', i.push({
    1: 2
}));

console.log('pop:', i.pop());
console.log('toArray:', i.toArray());
console.log('i is:', i, '; type:', typeof(i));
console.log('title', );
var myIterable = {}
myIterable[Symbol.iterator] = function*() {
    yield 1;
    yield 2;
    yield 3;
};

var asd = Stack.fromIterable(myIterable)
console.log('stack from iterable: ', asd);
console.log('pop from new stack:', asd.pop());
console.log('push to new stack:', asd.push('1000000000000'));

console.log('peek of stack:', asd.peek());
console.log('test isEmpty of stack:', asd.isEmpty());

// В репозитории от вас жду один
//     файл названный stack.js,
//         в котором лежит только реализация вашего класса.
//             Класс, повторюсь, называем Stack.
