const buttonActions = {
    _1
};
Object.entries(buttonActions).forEach(([id, handler]) => {
    const btn = document.getElementById(id);
    if (btn) {
        btn.addEventListener("click", handler);
    }
});

function _1() {
    function calculateChange(payment, cost) {
        let change = payment - cost;

        function billCounting(amount) {
            const count = Math.floor(change/amount);
            change -=amount*count;
            return count;
        }

        console.log(`50000원 지폐: ${billCounting(50000)}장`);
        console.log(`10000원 지폐: ${billCounting(10000)}장`);
        console.log(`5000원 지폐: ${billCounting(5000)}장`);
        console.log(`1000원 지폐: ${billCounting(1000)}장`);
    }

    calculateChange(100000, 33000);
    console.log('');
    calculateChange(500000, 378000);
}