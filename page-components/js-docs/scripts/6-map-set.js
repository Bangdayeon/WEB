const buttonActions = {
    _1,
    _2,
    _3,
    _4,
    _5,
    _6
};
Object.entries(buttonActions).forEach(([id, handler]) => {
    const btn = document.getElementById(id);
    if (btn) {
        btn.addEventListener("click", handler);
    }
});

function _1() {
    let recipeMap = new Map([
        ['cucumber', 500],
        ['tomatoes', 350],
        ['onion', 50]
    ]);

    // map.keys()
    console.log('=== map.keys() ===');
    for(let vege of recipeMap.keys()) {
        console.log(vege);	// cucumber, tomatoes, onion
    }

    // map.values()
    console.log('=== map.values() ===');
    for(let amount of recipeMap.values()) {
        console.log(amount);	// 500, 350, 50
    }

    // map.entries()
    console.log('=== map.entries() ===');
    for(let entry of recipeMap) {
        console.log(entry);	// cucumber,500 ...
    }

    // forEach()
    console.log('=== forEach() ===');
    recipeMap.forEach((value, key, recipeMap) => {
        console.log(`${key}: ${value}`);
    });
}

function _2() {
    function unique(arr) {
        return Array.from(new Set(arr));    // arr을 통째로 Set으로 만들면 됨
    }

    let values = ["Hare", "Krishna", "Hare", "Krishna","Krishna", "Krishna", "Hare", "Hare", ":-O"];

    alert(unique(values));
}

function _3() {
    function aclean(arr){
        let map = new Map();

        for(let word of arr) {
            let sorted = word.toLowerCase().split('').sort().join('');
            //1. 모두 소문자로 만들고, 2. 글자단위로 쪼래고, 3. 정렬하고, 4. 합치기
            // nap) 1. nap 2. n,a,p 3. a,n,p 4. anp
            // PAN) 1. pan 2. p,a,n 3. a,n,p 4. anp
            map.set(sorted, word);  // key(sorted): value(word)로 값을 저장
            // anp로 동일한 키를 만날 경우, 값이 덮어씌워진다.
            // PAN만 저장됨
        }

        return Array.from(map.values());
    }
    
    let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
    alert( aclean(arr) ); // "nap,teachers,ear"나 "PAN,cheaters,era"이 출력되어야 합니다.
}

function _4() {
    // let map = new Map();
    // map.set("name", "John");

    // let keys = map.keys();
    // keys.push("more");
    // 위 코드가 작동하지 않는 이유는 map.keys()가 배열이 아니라 이터러블을 반환하기 때문이다.
    let map = new Map();
    map.set("name", "John");

    let keys = Array.from(map.keys());  // Array.from으로 맵을 배열로 변환해준다.
    keys.push("more");

    alert(keys);
}

function _5() {
    let messages = [
        {text: "Hello", from: "John"},
        {text: "How goes?", from: "John"},
        {text: "See you soon", from: "Alice"}
    ];

    let checkedMessages = new WeakSet();    // 읽은 메세지를 저장하는 WeekSet

    checkedMessages.add(messages[0]);   // 메세지 읽음
    checkedMessages.add(messages[1]);   // 메세지 읽음
    checkedMessages.add(messages[0]);   // 중복 저장 안됨(set의 특징)

    alert(checkedMessages.has(messages[0]));

    messages.shift();
    // messages[0]이 삭제되었으므로 나중에 가비지 컬렉터에 의해 
    // checkedMessages에 추가된 messages[0]도 삭제될 예정
}

function _6() {
    let messages = [
        {text: "Hello", from: "John"},
        {text: "How goes?", from: "John"},
        {text: "See you soon", from: "Alice"}
    ];

    let readMessages = new WeakMap();   // 읽은 메세지의 날짜 정보까지 저장

    readMessages.set(messages[0], new Date());

    alert(readMessages.get(messages[0]));
}