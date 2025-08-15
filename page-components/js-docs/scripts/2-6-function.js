const buttonActions = {
    checkAge_origin,
    checkAge_Q,
    checkAge_OR,
    _min,
    _pow
};
Object.entries(buttonActions).forEach(([id, handler]) => {
    const btn = document.getElementById(id);
    if (btn) {
        btn.addEventListener("click", handler);
    }
});


// '?'나 '||'를 사용하여 함수 다시 작성하기
function checkAge_origin() {
    let age = prompt('몇살이세요?: ');
    if(age > 18) {
        return true;
    } else {
        return confirm('보호자의 동의를 받으셨나요?');
    }
}

function checkAge_Q() {
    let age = prompt('몇살이세요?: ');
    return (age > 18) ? true : confirm('보호자의 동의를 받으셨나요?');
}
function checkAge_OR() {
    let age = prompt('몇살이세요?: ');
    return (age > 18) || confirm('보호자의 동의를 받으셨나요?');
}

// min(a, b) 함수 만들기
function _min() {
    let a = prompt("a: ", '');
    let b = prompt("b: ", '');
    function min(a, b) {
        return (a<b) ? a : b;
    }
    alert('더 작은 숫자: '+ min(a, b));
}

// pow(x, n) 함수 만들기
function _pow() {
    let x = prompt("숫자 x?: ", '');
    let n = prompt("제곱수 n?: ", '');

    function pow(x, n) {
        let result = x;

        for(let i=1; i<n; i++) {
            result *= x;
        }
        return result;
    }

    if(n<1){
        alert(`${n}은 양의 정수여야 합니다.`);
    } else {
        alert(pow(x, n));
    }
}