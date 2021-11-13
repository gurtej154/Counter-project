// set initial value to 0
let count = 0;

// set value to buttons
const value = document.querySelector('#value');
const btns = document.querySelector('btn');

btns.forEach(function (btn) {
    btn.addEventListner('click', function (e){
        const styles =e.currentTarget.classList;
        if (styles.contains("decreases")) {
            count--;
        }
        else if (styles.contains("increase")) {
            count++;
        } else {
            count = 0;
        }

        if (count > 0){
            value.style.color = "green";
        }
        if (count < 0) {
            value.style.color = "red";
        }
        if (count === 0) {
            value.style.color = "#222";
        }
        value.textContent = count;
    })
})