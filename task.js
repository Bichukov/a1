function myFunction() {
  let x, text;

  x = document.getElementById("numb").value;

  if (x === "") {
    text = "Введите число";
  }
  if (x > 7) {
    text = "Привет!";
  }
  if (x < 7 && x != "") {
    text = "Введенное число меньше 7";
  }
  if (x == 7 && x != "") {
    text = "Введенное число равно 7";
  }
  if (isNaN(x)) {
    text = "Введите только целое число. Пример: 11 или -5 или 0 и тд";
  }

  document.getElementById("demo").innerHTML = text;
}
function clearBox(demo2) {
  document.getElementById(demo2).innerHTML = "";
}

function myFunction2() {
  let x, text;

  x = document.getElementById("numb2").value;

  if (x === "") {
    text = "Введите имя";
  }
  if (x === "Вячеслав" || x === "вячеслав") {
    text = "Привет, Вячеслав!";
  }
  if (x != "Вячеслав" && x != "вячеслав" && x != "") {
    text = "Нет такого имени";
  }
  document.getElementById("demo2").innerHTML = text;
}
function clearBox(demo2) {
  document.getElementById(demo2).innerHTML = "";
}

function myFunction3() {
  let text = "Ответ выведен консоль";
  let a = new Array();
  let count = document.getElementById("numb3").value;
  for (let i = 0; i < count; i++)
    a[i] = parseInt(prompt("Введите целое число:", ""));
  document.getElementById("n4").value = a;
  a.forEach(function (i) {
    if (i % 3 === 0) console.log(i + "  ");
    document.getElementById("demo3").innerHTML = text;
  });
}
