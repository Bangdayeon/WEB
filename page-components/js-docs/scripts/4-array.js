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
    let dataType = ['number', 'string', 'boolean', 'null', 'undefined', 'object'];
    
    let return_text = '';
    for (let i=0;i<dataType.length;i++)
        return_text += `${dataType[i]}\n`;
    alert(return_text);
};

function _2() {
    let celsiusTemps = [27, 25, 26, 22, 28, 27, 21];
    let fahrenheit = [];

    for(let i=0;i<celsiusTemps.length;i++){
        fahrenheit[i] = (celsiusTemps[i]*9/5)+32;
    }

    alert(fahrenheit);
};

function _3() {
    let text = [];
    let fruits = ['레몬', '토마토', '딸기', '바나나'];
    let ages = [20, 24, 25, 29, 30, 33];
    let numbers = [];
    let last_text = `fruits = ${fruits}\nages = ${ages}\nnumbers = ${numbers}\n`;

    fruits.splice(1,1,'사과', '청포도');
    text[0] = [...fruits];

    fruits.splice(0, 1);
    text[1] = [...fruits];

    ages.splice(ages.length-1);
    text[2] = [...ages];

    ages.splice(2, 2, 26, 28);
    text[3] = [...ages];

    numbers.splice(0, 0, 1,2,3,5,8,9);
    text[4] = [...numbers];

    for(let i=0;i<numbers.length;i++){
        if(numbers[i]%2 !== 0) {
            numbers.splice(i,1);
            i--;
        }
            
    } text[5] = [...numbers];

    for(let i=0;i<6;i++) {
        last_text += `미션 ${i+1}:\n${text[i]}\n\n`
    }

    alert(last_text);
}

function _4() {
    // 저장되어 있던 학생회 투표 결과
    let votes = [
        '이재식', '이재식', '이규하', '이규하', '이규하',
        '이재식', '이재식', '이규하', '이규하', '이재식',
        '이규하', '이규하', '이규하', '이규하', '이재식',
        '이재식', '이규하', '이재식', '이재식', '이재식',
        '이재식', '이재식', '이규하', '이규하', '이규하',
        '이규하', '이규하', '이재식', '이규하', '이규하',
        '이규하', '이규하', '이재식', '이규하', '이규하',
        '이규하', '이재식', '이재식', '이재식', '이규하',
    ];
    let voteCounter = {};

    for(let name of votes) {
        if(voteCounter[name] === undefined) {
            voteCounter[name] = 1;
        } else {
            voteCounter[name] += 1;
        }
    }

    alert(JSON.stringify(voteCounter));
}

function _5() {
    // 가위바위보로 나뉜 사람들 배열
    let groups = [
        ['영준', '캡틴'], 
        ['태순', '우재'],
        ['재훈', '지웅'],
        ['윤형', '동욱'],
        ['규식', '소원'],
    ];
    // 여기서 이긴 사람은 0번, 진 사람은 1번으로
    let teams = [
        [],
        [],
    ];

    for(let i = 0; i < groups.length; i++) {
        for(let j = 0; j< groups[i].length; j++) {
            teams[j][i] = groups[i][j];
        }
    }

    alert(`[0]팀: ${teams[0].join(', ')}\n[1]팀: ${teams[1].join(', ')}`)
}

function _6() {
    let current = 1;
    let prev = 0;

    for(let i=1;i<=50;i++) {
        console.log(current);
        let temp = prev;
        prev = current;
        current = current + temp;
    }
}

function _7() {
    function factorial(n) {
        let result = 1;
        for(let i=1;i<=n;i++) {
            result *= i;
        }

        return result;
    }
    let num = prompt("팩토리얼 계산할 숫자를 입력해주세요: ", "");
    alert(factorial(num));
}

function _8() {
    function isPalindrome(word) {
        for(let i=0;i<Math.floor(word.length/2);i++) {
            let left = word[i];
            let right = word[word.length - 1 - i];
            if(left !== right)
                return false;
        }
        return true;
    }
    // 내가 짠 코드
    // function isPalindrome(word) {
    //     let origin = [];
    //     let reverse =[];

    //     for(let i=0;i<word.length;i++) {
    //         origin.push(word[i]);
    //         reverse.unshift(word[i]);
    //     }

    //     let check = true;
    //     for(let i=0;i<word.length;i++) {
    //         check = check && (origin[i]===reverse[i]);
    //     }
    //     console.log(origin);
    //     console.log(reverse);
    //     return check;
    // }
    let word = prompt("거꾸로 읽어도 똑같은지 확인하고 싶은 문자열 입력: ", "");
    alert(isPalindrome(word));
}