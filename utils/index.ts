import Money from "./money";

function debounce(func: Function, delay: number) {
    let timerId: ReturnType<typeof setTimeout>;

    return function (...args: any[]) {
        clearTimeout(timerId);

        timerId = setTimeout(() => {
            func.apply(null, args);
        }, delay);
    };
}

export {
    debounce,
    Money
}