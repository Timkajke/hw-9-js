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

/*
function Fraction(numerator, denominator) {
    this.numerator = numerator;
    this.denominator = denominator;
}

const firstFraction = new Fraction(15, 21);
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

DivisionFractions = function (fr1, fr2) {
    let resultNumerator = fr1.numerator * fr2.denominator;
    let resultDenominator = fr1.denominator * fr2.numerator;
    console.log(`${resultNumerator} / ${resultDenominator}`);
}

ReductionFraction = function (fr1) {
    if (fr1.numerator <= fr1.denominator) {
        let divider = 0;
        for (let i = 1; i <= fr1.numerator; i++) {
            if (fr1.numerator % i === 0 && fr1.denominator % i === 0)
                divider = i;
        }
        let resultNumerator = fr1.numerator / divider;
        let resultDenominator = fr1.denominator / divider;
        console.log(`${resultNumerator} / ${resultDenominator}`);
    }
    if (fr1.numerator > fr1.denominator) {
        let divider = 0;
        for (let i = 1; i <= fr1.denominator; i++) {
            if (fr1.denominator % i === 0 && fr1.numerator % i === 0)
                divider = i;
        }
        let resultNumerator = fr1.numerator / divider;
        let resultDenominator = fr1.denominator / divider;
        console.log(`${resultNumerator} / ${resultDenominator}`);
    }
}

AdditionFractions(firstFraction, secondFraction);
SubtractionFractions(firstFraction, secondFraction);
MultiplicationFractions(firstFraction, secondFraction);
DivisionFractions(firstFraction, secondFraction);
ReductionFraction(firstFraction);
*/

// Задание 3
// Создать объект, описывающий время (часы, минуты, секун-
// ды), и следующие функции для работы с этим объектом.
// 1. Функция вывода времени на экран.
// 2. Функция изменения времени на переданное количество
// секунд.
// 3. Функция изменения времени на переданное количество
// минут.
// 4. Функция изменения времени на переданное количество
// часов.
// Учтите, что в последних 3-х функциях, при изменении одной
// части времени, может измениться и другая. Например: если ко
// времени «20:30:45» добавить 30 секунд, то должно получиться
// «20:31:15», а не «20:30:75».

/*
function Clock(hours, minutes, seconds) {
    this.hours = hours;
    this.minutes = minutes;
    this.seconds = seconds;
}

ShowTime = function (myClock) {
    console.log(`${myClock.hours}:${myClock.minutes}:${myClock.seconds}`);
}

ChangeSeconds = function (myClock, mySeconds) {
    let resultSeconds = myClock.seconds + mySeconds;
    if (resultSeconds > 60) {
        let tempSeconds = resultSeconds - 60;
        myClock.minutes++;
        if (myClock.minutes > 60) {
            myClock.hours++;
        }
        console.log(`${myClock.hours}:${myClock.minutes}:${tempSeconds}`);
    }
    else if (resultSeconds === 60) {
        myClock.seconds = 0;
        myClock.minutes++;
        console.log(`${myClock.hours}:${myClock.minutes}:${myClock.seconds}`);
    }
    else {
        console.log(`${myClock.hours}:${myClock.minutes}:${resultSeconds}`);
    }
}

ChangeMinutes = function (myClock, myMinutes) {
    let resultMinutes = myClock.minutes + myMinutes;
    if (resultMinutes > 60) {
        let tempMinutes = resultMinutes - 60;
        myClock.hours++;
        console.log(`${myClock.hours}:${tempMinutes}:${myClock.seconds}`);
    }
    else if (resultMinutes === 60) {
        myClock.minutes = 0;
        myClock.hours++;
        console.log(`${myClock.hours}:${myClock.minutes}:${myClock.seconds}`);
    }
    else {
        console.log(`${myClock.hours}:${resultMinutes}:${myClock.seconds}`);
    }
}

ChangeHours = function (myClock, myHours) {
    let resultHours = myClock.hours + myHours;
    if (resultHours > 24) {
        let tempHours = resultHours - 24;
        console.log(`${tempHours}:${myClock.minutes}:${myClock.seconds}`);
    }
    else if (resultHours === 24) {
        myClock.hours = 0;
        console.log(`${myClock.hours}:${myClock.minutes}:${myClock.seconds}`);
    }
    else {
        console.log(`${resultHours}:${myClock.minutes}:${myClock.seconds}`);
    }
}

const myClock = new Clock(21, 22, 22);

ShowTime(myClock);
ChangeHours(myClock, 4);
ChangeMinutes(myClock, 2);
ChangeSeconds(myClock, 5);
*/