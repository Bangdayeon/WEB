const buttonActions = {
    expectResult,
    over100,
    primeNumber
};
Object.entries(buttonActions).forEach(([id, handler]) => {
    const btn = document.getElementById(id);
    if (btn) {
        btn.addEventListener("click", handler);
    }
});

function expectResult() {
    let w_plusi = 0;
    let w_iplus = 0;
    let f_plusi = 0;
    let f_iplus = 0;
    
    while(++w_plusi < 5){alert(w_plusi);}
    while(w_iplus++ < 5) {}
    for(let i=0; i<5; ++i){f_plusi = i;}
    for(let i=0; i<5; i++){f_iplus = i;}
    
    alert(`while(++i < 5): ${w_plusi-1}\nwhile(i++ < 5): ${w_iplus-1}\nfor(let i=0; i<5; ++i): ${f_iplus}\nfor(let i=0; i<5; i++): ${f_iplus}\n`);
}

function over100() {
    let num;
    while(true){
        num = prompt("100 초과 숫자를 입력해주세요: ", 0);
        if(num>100||num===''||num===null) break;
    }
}

function primeNumber() {
    let num = Number(prompt("숫자를 입력해주세요: ", 0));
    let primes = [];
    for(let i=2;i<=num;i++){    // 2부터 n까지
        let isPrime = true;
        for(let j=2;j<i;j++){   // i(2, 3, 4, 5, ... ,n)가 소수인지 확인
            if(i%j===0) {
                isPrime = false;
                break;
            }
        }
        if(isPrime) primes.push(i);
    }
    alert(primes.join(", "));
}