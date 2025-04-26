const input1 = document.querySelector('#input1')
const input2 = document.querySelector('#input2')
const plus = document.querySelector('#plus')
const minus = document.querySelector('#minus')
const kopaytirish = document.querySelector('#kopaytirish')
const bolish = document.querySelector('#bolish')
const natija = document.querySelector('#result')

input1.addEventListener('click', () => {
	if (input1.value === '') {
		natija.textContent = "Result: 0"
	}
})
plus.addEventListener('click', () => {
	natija.textContent ='Result: ' + calculator(
		Number(input1.value),
		Number(input2.value),
		'+'

	)
	input1.value = '';
	input2.value = '';
})
minus.addEventListener('click', () => {
	natija.textContent ='Result: ' + calculator(
		Number(input1.value),
		Number(input2.value),
		'-'

	)
	input1.value = '';
	input2.value = '';
})
kopaytirish.addEventListener('click', () => {
	natija.textContent ='Result: ' + calculator(
		Number(input1.value),
		Number(input2.value),
		'*'

	)
	input1.value = '';
	input2.value = '';
})
bolish.addEventListener('click', () => {
	natija.textContent ='Result: ' + calculator(
		Number(input1.value),
		Number(input2.value),
		'/'

	)
	input1.value = '';
	input2.value = '';
})

function calculator(num1, num2, operator) {
	let result = 0
	num1 = parseFloat(num1)
	if (operator === '+') {
		result = num1 + num2
	} else if (operator === '-') {
		result = num1 - num2
	} else if (operator === '*') {
		result = num1 * num2
	} else {
		result = num1 / num2
	}

	return result
}
