const MyReact = (function () {
    let _val; // hold our state in module scope
    return {
        render(Component) {
            const Comp = Component();
            Comp.render();
            return Comp;
        },
        useState(initialValue) {
            _val = _val || initialValue; // assign anew every run
            function setState(newVal) {
                _val = newVal;
            }
            return [_val, setState];
        }
    }
})()

function Counter() {
    const [count, setCount] = MyReact.useState(0);

    return {
        click: () => setCount(count + 1),
        render: () => console.log('render:', { count })
    }
}

let App;
App = MyReact.render(Counter);
App.click();
App = MyReact.render(Counter);
