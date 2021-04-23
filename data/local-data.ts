const localData = {
	appName: "DC",
	game: {
		name: "DC Lucky Picker",
		instruction: {
			title: "Instructions",
			inGameTitle: "Pick a card",
			p1:
				"Hi, a DC character is hidden behind the cards below. Can you find it?",
			p2:
				"Out of 10 chances; 6 or more correct picks wins. 1 point for every correct pick. Good luck!",
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
