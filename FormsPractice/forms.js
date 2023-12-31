const reset = document.querySelector('#resetBtn')
const submit = document.querySelector('#submitBtn')
const form = document.querySelector('#form')
reset.addEventListener('click', () => {
	form.reset()
})
submit.addEventListener('click', () => {
	form.submit()
})