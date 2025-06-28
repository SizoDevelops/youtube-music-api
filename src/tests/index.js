const YoutubeMusicApi = require('../index.js')

const api = new YoutubeMusicApi()
api.initalize() // Retrieves Innertube Config
.then(info => {
	api.search("Uvume Kanjani", "song").then(result => {
		console.log(result)
	}) // just search for songs
	
})