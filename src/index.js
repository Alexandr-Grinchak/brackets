module.exports = function check(str, bracketsConfig) {
    let a = [];
    for(let i = 0; i < bracketsConfig.length; i++) {
         a.push(bracketsConfig[i].join(""));
    };
    for (let i = 0; i < 100; i++) {
        a.forEach(b => {
            if (str.includes(b)) {
                let strA = str.replace(b, "");
                str = strA;
            }
        })
    }
    return str.length === 0;
}
