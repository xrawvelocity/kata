const sumStrings = (a, b) => {
    if(a.length < 20 && b.length < 20) {
       return String((Number(a) + Number(b)).toLocaleString('fullwide', {useGrouping:false}));
    }
    let first = Number(a.slice(0, -15)) + Number(b.slice( 0, -15));
    let last  = Number(a.slice( -15)) + Number(b.slice( -15));
    return String(first) + String(last);
}