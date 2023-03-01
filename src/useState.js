//
// Example 0

function useStateWannabe(initiaValue) {
    var _val = initiaValue;

    function state() {
        return _val;
    }

    function setState(newVal) {
        _val = newVal;
    }

    return [state, setState];
}

var [foo, setFoo] = useStateWannabe(0);
console.log(foo());
setFoo(1);
console.log(foo());

//
// Example 1

function Counter() {
    const [count, setCount] = useStateWannabe(0);
    return {
        click: () => setCount(count() + 1),
        render: () => console.log('render:', { count: count() })
    }

}

const c = Counter();
c.render();
c.click();
c.render();
