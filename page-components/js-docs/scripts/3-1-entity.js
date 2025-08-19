const buttonActions = {
    _1,
    _2,
    _3,
    _4,
    _5,
    _6,
    _7,
    _8
};
Object.entries(buttonActions).forEach(([id, handler]) => {
    const btn = document.getElementById(id);
    if (btn) {
        btn.addEventListener("click", handler);
    }
});

function _1() {
    user = {};      // 1. 빈 객체 user 생성
    user.name = "John";     // 2. name: John 추가
    user.surname = "Smith"; // 3. surname: Smith 추가
    user.name = "Pete";     // 4. name을 Pete로 수정
    delete user.name;       // 5. name 삭제

    for(let key in user) {
        if( user.name == undefined && user.surname == "Smith")
            alert("good");
    }
}

function _2() {
    let pizza = {};
    let hamburger = {name: "mom's touch"};
    
    function isEmpty(obj) {
        for(let key in obj) {
            return false;
        }
        return true;
    }

    alert(`Is pizza empty?: ${isEmpty(pizza)} \n Is hamburger empty?: ${isEmpty(hamburger)}`);
}

function _3() {
    const user = {
        name: "John"
    };
    let x = user.name = "Pete"; // const는 '객체'에 대해 상수를 선언했으므로 값은 변할 수 있다
    // let y = user = "Pete";

    alert(`user.name=Pete: ${x}\n user="Pete: undefined`);
}

function _4() {
    let salaries = {
        John: 100,
        Ann: 160,
        Pete: 130
    }

    let sum = 0;
    for(let key in salaries) {
        sum += salaries[key];
    }

    alert(`salaries's sum = ${sum}`);
}

function _5() {
    let menu = {
        width: 200,
        height: 300,
        title: "My menu"
    };
    let origin_menu = {...menu};

    function multiplyNumeric(obj) {
        for(key in obj) {
            if(typeof obj[key] == "number")
                obj[key] *= 2;
        }
    }
    multiplyNumeric(menu);

    alert(`origin menu: ${JSON.stringify(origin_menu)}\nmutiplyNumeric menu: ${JSON.stringify(menu)}`);
}

function _6() {
    // function makeUser() {
    //     return {
    //         name: "John",
    //         ref: this
    //     };
    // };

    function makeUser() {
        return {
            name: "John",
            ref() {
                return this;    // 이것이 옮은 형태. user.ref()가 메서드가 되고, this는 . 앞의 객체가 됨
            }
        }
    }

    let user = makeUser();
    // alert(user.ref.name);
    alert(user.ref().name);
    // makeUser() 내 this는 undefined가 된다.
    // 메서드로써 호출된 게 아니라 '함수'로써 호출되었기 때문에 "함수의 현재 this값을 가져와, undefined가 됨"
}

function _7() {
    let calculator = {
        read: function() {
            this.x = Number(prompt("x값: ",0));
            this.y = Number(prompt("y값: ", 0));
        },
        sum: function() {
            return (this.x + this.y);
        },
        mul: function() {
            return (this.x*this.y);
        }
    };

    calculator.read();
    alert(`sum: ${calculator.sum()}\nmul:${calculator.mul()}`);
}

function _8() {
    let ladder = {
        step: 0,
        up() {
            this.step++;
            return this
        },
        down() {
            this.step--;
            return this
        },
        showStep: function() { // 사다리에서 몇 번째 단에 올라와 있는지 보여줌
            alert( this.step );
            return this;
        }
    };

    ladder.up().up().down().showStep();
}