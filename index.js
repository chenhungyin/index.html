

//使用let優於var
let ch = 60;
let eng = 0;
let math = 60;
// || ->or $$-> and
if ((ch >= 60 || eng >= 60) && math >= 60) {
    console.log("pass!!");
} else {
    console.log("fail~~");
}






let x = 10;
console.log(++x);
// 常數宣告
const PI = 3.1415926;
// 轉換型態 Number,String,Boolean
console.log(10 == Number("10"));




let email = "mary@gmail.com";
console.log(email);
console.log(email.length);
console.log(email[email.length - 1])

for (let i = 0; i < email.length; i++) {
    console.log(i, email[i]);
}

let z = null;
console.log(z + 10);

console.log(Math.PI);

//1~10之間亂數 (0,10)
for (let i = 0; i < 10; i++) {
    let r = getRandomInt(1, 49);
    console.log(r);

}

while (true) {
    let r = getRandomInt(1, 49);
    console.log(r);
    if (r == 49) {
        break;
    }
}

// function == def(涵式宣告)
function getRandomInt(str, end) {
    let x = Math.floor(Math.random() * end) + str;
    return x

}

function getNumbers(num) {
    let rows = []
    //let num = prompt("請輸入幾組號碼:")

    for (let j = 0; j < num; j++) {
        let numbers = [];
        // 內迴圈輸出六個號碼到網路上
        while (true) {
            let x = getRandomInt(1, 49);
            if (!numbers.includes(x)) {
                numbers.push(x);

            }
            if (numbers.length == 6) {
                break;
            }
            // 使用反引號+${}
            //document.write(`<h3>第 ${i + 1} 個號碼: ${x} </h3>`);

        }

        numbers.sort()
        rows.push(numbers);
    }
    return rows;
}


function getLottroy() {
    // alert("click!!")
    const lottroyE1 = document.querySelector("#lottroy");
    let num = prompt("請輸入幾組號碼:")
    rows = getNumbers(num);
    lottroyE1.innerHTML = " ";
    for (let i = 0; i < rows.length; i++) {
        result = rows[i].join(" , ")
        //console.log(result);
        lottroyE1.innerHTML += `<h3>第 ${i + 1} 組號碼: ${result} </h3><hr></hr>`
        //document.write(`<h3>第 ${i + 1} 組號碼: ${result} </h3><hr>`)
    }

}


const dateE1 = document.querySelector(".date");
dateE1.innerText = Date();



// 陣列(串列)
//外迴圈(控制組數) =>> 產生五組號碼


function compare(a, b) {
    return a - b;
}

console.log(rows);



x = "3.5"
document.write(parseInt(x));
document.write(parseFloat(x));

let user = {
    name: "momo",
    height: 155.5,
    weight: 46,
}

console.log(user, typeof (user));
console.log(user.name, user["name"]);


//計算bmi涵式
function getbmi(height, weight) {
    let bmi = weight / (height / 100) ** 2;
    if (isNaN(bmi)) {
        return "數值錯誤!!";
    }
    return bmi.toFixed(2);
}
console.log(getbmi("155.5", "46"));

const h1 = document.querySelector("h1");

console.log(lottroyE1);
console.log(h1);
h1.innerHTML = "<u>大樂透</u>";
h1.style.color = "red"





