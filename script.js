function isPrime(num) {
    if (num <= 1) return false;
    if (num === 2) return true;
    if (num % 2 === 0) return false;

    let i = 3;
    while (i * i <= num) {
        if (num % i === 0) return false;
        i += 2;
    }
    return true;
}

function task1() {
    let result = 'Прості числа від 0 до 100:\n\n';
    let primes = [];
    let num = 0;

    while (num <= 100) {
        if (isPrime(num)) {
            primes.push(num);
        }
        num++;
    }

    result += primes.join(', ');
    result += `\n\nЗагалом знайдено ${primes.length} простих чисел.`;

    displayResult('result1', result);
}

function task2() {
    let result = 'Числа від 0 до 10:\n\n';
    let num = 0;

    do {
        if (num === 0) {
            result += `${num} – це нуль\n`;
        } else if (num % 2 === 0) {
            result += `${num} – парне число\n`;
        } else {
            result += `${num} – непарне число\n`;
        }
        num++;
    } while (num <= 10);

    displayResult('result2', result);
}

function task3() {
    let numb = 10000;
    let counter = 0;
    let result = `Початкове значення: ${numb}\n\n`;

    while (numb > 50) {
        numb = numb / 2;
        counter++;
        result += `Ітерація ${counter}: ${numb}\n`;
    }

    result += `\nРезультат: ${numb}`;
    result += `\nКількість ітерацій: ${counter}`;

    displayResult('result3', result);
}

function task4() {
    const monthInput = document.getElementById('monthInput');
    const month = parseInt(monthInput.value);

    if (!month || month < 1 || month > 12) {
        alert('Будь ласка, введіть число від 1 до 12');
        return;
    }

    let season;
    let monthName;

    switch (month) {
        case 12:
        case 1:
        case 2:
            season = 'зима';
            break;
        case 3:
        case 4:
        case 5:
            season = 'весна';
            break;
        case 6:
        case 7:
        case 8:
            season = 'літо';
            break;
        case 9:
        case 10:
        case 11:
            season = 'осінь';
            break;
    }

    const monthNames = [
        'січень', 'лютий', 'березень', 'квітень', 'травень', 'червень',
        'липень', 'серпень', 'вересень', 'жовтень', 'листопад', 'грудень'
    ];

    monthName = monthNames[month - 1];

    const result = `Місяць ${month} (${monthName}) – це ${season}`;

    alert(result);
    displayResult('result4', result);
}

function task5() {
    const celsiusInput = document.getElementById('celsiusInput');
    const celsius = parseFloat(celsiusInput.value);

    if (isNaN(celsius)) {
        alert('Будь ласка, введіть температуру в градусах Цельсія');
        return;
    }

    const fahrenheit = (9/5) * celsius + 32;

    const result = `${celsius}°C = ${fahrenheit.toFixed(2)}°F`;

    alert(result);
    displayResult('result5', result);
}

function task6() {
    const dayInput = document.getElementById('dayInput');
    const day = parseInt(dayInput.value);

    if (!day || day < 1 || day > 7) {
        alert('Будь ласка, введіть число від 1 до 7');
        return;
    }

    const days = [
        'понеділок',
        'вівторок',
        'середа',
        'четвер',
        'п\'ятниця',
        'субота',
        'неділя'
    ];

    const result = `День ${day} – це ${days[day - 1]}`;

    alert(result);
    displayResult('result6', result);
}

function displayResult(elementId, text) {
    const resultElement = document.getElementById(elementId);
    resultElement.textContent = text;
    resultElement.classList.remove('empty');
}