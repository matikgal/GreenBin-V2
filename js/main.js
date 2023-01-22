const swapInfo1 = document.getElementById('model-card-img-info-1')
const swapInfo2 = document.getElementById('model-card-img-info-2')
const swapInfo3 = document.getElementById('model-card-img-info-3')

const swapImg1 = document.getElementById('left-1')
const swapImg2 = document.getElementById('left-2')
const swapImg3 = document.getElementById('left-3')

const menu = document.getElementById('menu')

function changeInfo1() {
	document.getElementById('all-info-1').style.zIndex = '2'
	document.getElementById('all-info-1').style.listStyleType = 'circle'
	document.getElementById('all-info-1').style.scale = '1.2'
}

function changeInfo2() {
	document.getElementById('all-info-2').style.zIndex = '2'
	document.getElementById('all-info-2').style.listStyleType = 'circle'
	document.getElementById('all-info-2').style.scale = '1.2'
}

function changeInfo3() {
	document.getElementById('all-info-3').style.zIndex = '2'
	document.getElementById('all-info-3').style.listStyleType = 'circle'
	document.getElementById('all-info-3').style.scale = '1.2'
}

swapInfo1.addEventListener('click', changeInfo1)
swapInfo2.addEventListener('click', changeInfo2)
swapInfo3.addEventListener('click', changeInfo3)

function changeImg1() {
	document.getElementById('all-info-1').style.zIndex = '-3'
	document.getElementById('all-info-1').style.listStyleType = 'none'
	document.getElementById('all-info-1').style.scale = '1'
}

function changeImg2() {
	document.getElementById('all-info-2').style.zIndex = '-3'
	document.getElementById('all-info-2').style.listStyleType = 'none'
	document.getElementById('all-info-2').style.scale = '1'
}

function changeImg3() {
	document.getElementById('all-info-3').style.zIndex = '-3'
	document.getElementById('all-info-3').style.listStyleType = 'none'
	document.getElementById('all-info-3').style.scale = '1'
}

swapImg1.addEventListener('click', changeImg1)
swapImg2.addEventListener('click', changeImg2)
swapImg3.addEventListener('click', changeImg3)

function menu1() {
	if (document.getElementById('ham').style.zIndex === '-2') {
		document.getElementById('ham').style.zIndex = '10'
	} else {
		document.getElementById('ham').style.zIndex = '-2'
	}
}

menu.addEventListener('click', menu1)
