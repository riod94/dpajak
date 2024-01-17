
const convertToString = (value: number, symbol?: string): string => {
    if (!value) {
        return symbol ? symbol + value.toString() : value.toString();
    }
    let rupiah = '';
    let minus = false;
    if (value < 0) {
        value = value * -1;
        minus = true;
    }
    let rev = value.toString().split('').reverse().join('');
    for (let i = 0; i < rev.length; i++) {
        if (i % 3 === 0) {
            rupiah += rev.substring(i, i + 3) + '.';
        }
    }
    if (symbol && !minus) {
        return symbol + rupiah.split('').reverse().join('').slice(1);
    } else if (symbol && minus) {
        return '- ' + symbol + rupiah.split('').reverse().join('').slice(1);
    }
    return rupiah.split('').reverse().join('').slice(1);
};

const convertToNumeric = (value: string | undefined): number => {
    if (!value) return 0;
    if (typeof value === 'number') return value;
    return parseInt(value.replace(/,.*|[^0-9]/g, ''), 10);
};

const Money = {
    toString(value: number, symbol?: string): string { return convertToString(value, symbol) },
    toNumeric(value: string | undefined): number { return convertToNumeric(value) }
}

export default Money;