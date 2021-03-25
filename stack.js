// Задание №4:
//SERHII TARABANCHUK
class Stack {

    constructor(initialStackCapacity) {
        if (initialStackCapacity == undefined) {
            this.maxStackCapacity = 10
        } else if (typeof(initialStackCapacity) != 'number' || !Number.isInteger(initialStackCapacity) || initialStackCapacity < 1) {
                 throw new Error('Ошибка!')
        } else {
            this.maxStackCapacity = +initialStackCapacity;
        }
        this.countOfElementsOnStack = 0;
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
    }
    pop() {
        if (this.countOfElementsOnStack == 0) throw new Error('Ошибка! Стек пуст!');
        let cutHead = this.stackObject['head'];
        delete this.stackObject['head'];
        this.stackObject = this.stackObject['tail'];
        this.countOfElementsOnStack--;
        return cutHead;
    }
    peek() {
        if (this.countOfElementsOnStack == 0) return null;
        return this.stackObject['head'];
    }
    isEmpty() {
        return this.countOfElementsOnStack == 0 ? true : false;
    }
    toArray() {
        var stackToArray = [];
        var counter = this.countOfElementsOnStack;

        function seekAndPushHeadToArray(someStack) {
            stackToArray.push(someStack['head']);
            --counter;
            if (counter > 0) seekAndPushHeadToArray(someStack['tail']);
        };
        seekAndPushHeadToArray(this.stackObject);
        return stackToArray
    }

    static fromIterable(iterable) {
        if (iterable[Symbol.iterator] == "undefined") throw new Error('Ошибка! Объект не итерируемый!')

        var iterableLength = 0;
        var tempArray = []

        for (let countEachElement of iterable) {
            ++iterableLength;
            tempArray.push(countEachElement)
        }

        var fromIterableStack = new this(iterableLength)

        for (let pushedElementIndex = iterableLength; pushedElementIndex > 0; pushedElementIndex--) {
            fromIterableStack.push(tempArray[pushedElementIndex - 1]);
        }
        return fromIterableStack

    }
}

let a = new Stack('1')
console.log('a: ', a );
