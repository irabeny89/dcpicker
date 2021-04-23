const localData = {
	appName: "DC",
	game: {
		name: "DC Lucky Picker",
		instruction: {
			title: "Instructions",
			inGameTitle: "Pick a card",
			p1:
				"Hi, play the game below and try to get at least 6 points out of 10 chances.",
			p2:
				"Pick a card and you score 1 point when you find the DC character hidden behind one of the cards only.",
		},
		chanceLimit: 10,
		passLimit: 6,
		optionLimit: 4,
		themes: [
			{
				character: "Superman",
				images: [
					{
						src: "/supman-logo-color.jpg",
						width: "150",
						height: "150",
						alt: "superman logo color",
					},
					{
						src: "/supman.png",
						width: "150",
						height: "150",
						alt: "superman",
					},
				],
			},
			{
				character: "Batman",
				images: [
					{
						src: "/batman-logo.png",
						width: "150",
						height: "150",
						alt: "batman logo",
					},
					{
						src: "/batman.jpg",
						width: "150",
						height: "150",
						alt: "batman",
					},
				],
			},
			{
				character: "Flash",
				images: [
					{
						src: "/flash-logo.png",
						width: "150",
						height: "150",
						alt: "flash logo",
					},
					{
						src: "/flash.jpg",
						width: "150",
						height: "150",
						alt: "flash",
					},
				],
			},
		],
	},
}

export default localData
