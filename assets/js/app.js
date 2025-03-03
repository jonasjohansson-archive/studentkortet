flip = () => {
	document.querySelector('#card').classList.toggle('flipped')
}

var url = window.location.href
var who = url ? url.split('?')[1] : window.location.search.slice(1)

if (who !== undefined) who = who[0]

const date = {
	year: new Date().getFullYear(),
	yr: Number(new Date().getFullYear().toString().substr(-2)),
	month: new Date().getMonth(),
}

const category = 'stuk'
const period = date.month < 8 ? `vt${date.yr}` : `ht${date.yr}`

const backgroundImage = `url(./assets/img/${category}/${who}.png), url(./assets/img/${category}/${period}.png), url(./assets/img/${category}/front.png)`

const $front = document.querySelector('#front')

$front.style.backgroundImage = backgroundImage

switch (category) {
	case 'stuk':
		const wrap = document.createElement('div')
		wrap.id = 'logos'
		document.querySelector('#container').appendChild(wrap)
		for (let i = 0; i < 4; i++) {
			const img = document.createElement('img')
			const ani = 'ani' + Number(i + 1)
			img.src = './assets/img/stuk/logo.svg'
			img.className = ani
			img.style.animationName = ani
			img.style.animationDelay = -i * 1000 + 'ms'
			wrap.appendChild(img)
		}
		break
}
