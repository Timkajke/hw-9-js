//     Задание 1
//     Создать объект, описывающий автомобиль(производитель,
//     модель, год выпуска, средняя скорость), и следующие функции
//     для работы с этим объектом.
//     1. Функция для вывода на экран информации об автомобиле.
//     2. Функция для подсчета необходимого времени для преодоления переданного расстояния со средней скоростью.
//     Учтите, что через каждые 4 часа дороги водителю необходимо делать перерыв на 1 час.

/*
function Car(factory, model, yearOfRelease, averageSpeed) {
    this.factory = factory,
        this.model = model,
        this.yearOfRelease = yearOfRelease,
        this.averageSpeed = averageSpeed
}

Car.prototype.ShowInfo = function () {
    console.log(`${this.factory} ${this.model} ${this.yearOfRelease} ${this.averageSpeed}`);
}

Car.prototype.CalculateTime = function (distance) {
    rest = Math.floor((distance / this.averageSpeed) / 4);
    myTime = distance / this.averageSpeed;
    if (rest >= 1) {
        for (let i = 1; i <= rest; i++) {
            myTime = myTime + 1;
        }
        return myTime;
    }
    else {
        return myTime = (distance / this.averageSpeed);
    }
}

const myCar = new Car("Nissan", "Tiida", "2007", 100);
myCar.ShowInfo();
console.log(myCar.CalculateTime(1200).toString());
*/

// Задание 2
// Создать объект, хранящий в себе отдельно числитель и знаменатель дроби, и следующие функции для работы с этим объектом.
// 1. Функция сложения 2-х объектов-дробей.
// 2. Функция вычитания 2-х объектов-дробей.
// 3. Функция умножения 2-х объектов-дробей.
// 4. Функция деления 2-х объектов-дробей.
// 5. Функция сокращения объекта-дроби.

function Fraction(numerator, denominator) {
    this.numerator = numerator;
    this.denominator = denominator;
}

const firstFraction = new Fraction(2, 4);
const secondFraction = new Fraction(1, 3);

AdditionFractions = function (fr1, fr2) {
    let resultNumerator = fr1.numerator * fr2.denominator + fr2.numerator * fr1.denominator;
    let resultDenominator = fr1.denominator * fr2.denominator;
    console.log(`${resultNumerator} / ${resultDenominator}`);
}

SubtractionFractions = function (fr1, fr2) {
    let resultNumerator = (fr1.numerator * fr2.denominator) - (fr2.numerator * fr1.denominator);
    let resultDenominator = fr1.denominator * fr2.denominator;
    console.log(`${resultNumerator} / ${resultDenominator}`);
}

MultiplicationFractions = function (fr1, fr2) {
    let resultNumerator = fr1.numerator * fr2.numerator;
    let resultDenominator = fr1.denominator * fr2.denominator;
    console.log(`${resultNumerator} / ${resultDenominator}`);
}

DivisionFractions = function(fr1, fr2) {
    let resultNumerator = fr1.numerator * fr2.denominator;
    let resultDenominator = fr2.numerator * fr1.denominator;
    console.log(`${resultNumerator} / ${resultDenominator}`);
}

AdditionFractions(firstFraction, secondFraction);
SubtractionFractions(firstFraction, secondFraction);
MultiplicationFractions(firstFraction, secondFraction);
DivisionFractions(firstFraction, secondFraction);
