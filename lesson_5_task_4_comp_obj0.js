// Задание №4:
//SERHII TARABANCHUK
class Stack {

    constructor(initialStackCapacity) {
        if (typeof(initialStackCapacity) !== 'number' || !Number.isInteger(initialStackCapacity) || initialStackCapacity <= 0) throw new Error('Ошибка!');
        if (initialStackCapacity == undefined) this.maxStackCapacity = 10;
        this.maxStackCapacity = initialStackCapacity;
        this.countOfElementsOnStack = 0
    }

    push(elem) {
        if (this.countOfElementsOnStack + 1 > this.maxStackCapacity) throw new Error('Ошибка! Стек будет переполнен!');
        ++this.countOfElementsOnStack
        if (this.countOfElementsOnStack == 1) {
            this.stackObject = {
                'head': elem
            };
        } else {
            this.stackObject = {
                'head': elem,
                'tail': this.stackObject
            };
        }
        // console.log(JSON.stringify(this.stackObject))
        // return 'ok'
    }
    pop() {
        if (this.countOfElementsOnStack == 0) throw new Error('Ошибка! Стек пуст!');
        let cutHead = this.stackObject['head']
        delete this.stackObject['head']
        this.stackObject = this.stackObject['tail']
        this.countOfElementsOnStack--
        return cutHead
    }
    peek() {
        if (this.countOfElementsOnStack == 0) return null
        return this.stackObject['head']
    }
    isEmpty() {
        return this.countOfElementsOnStack == 0 ? true : false
    }
    toArray() {
        var stackToArray = []
        var counter = this.countOfElementsOnStack

        function seekAndPushHeadToArray(someStack) {
            stackToArray.push(someStack['head']);
            --counter;
            if (counter > 0) seekAndPushHeadToArray(someStack['tail']);
        }
        seekAndPushHeadToArray(this.stackObject)
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
// console.log('push:', i.push(1));
// console.log('push:', i.push(2));
// console.log('push:', i.push(3));
// console.log('push:', i.push(10));
// console.log('push:', i.push(20));
// console.log('push:', i.push(30));
// console.log('peek:', i.peek());
//
//
// console.log('pop:', i.pop());
// console.log('i is:', JSON.stringify(i), '; type:', typeof(i));
//
// console.log('toArray:', i.toArray([]));

var myIterable = {}
myIterable[Symbol.iterator] = function*() {
    yield 1;
    yield 2;
    yield 3;
};

var asd = Stack.fromIterable(myIterable)
console.log('stack from iterable: ', JSON.stringify(asd));
 console.log('pop from new stack:', asd.pop());
console.log('push to new stack:', asd.push('1000000000000'));

console.log('peek of stack:', asd.peek());
console.log('test isEmpty of stack:', asd.isEmpty());

// В репозитории от вас жду один
//     файл названный stack.js,
//         в котором лежит только реализация вашего класса.
//             Класс, повторюсь, называем Stack.
