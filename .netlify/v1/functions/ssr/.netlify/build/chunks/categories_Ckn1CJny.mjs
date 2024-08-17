const categories = [
	{
		id: 1,
		name: "PopRock",
		slug: "poprock",
		introSubline: "Lassen Sie die Energie fließen und rocken Sie mit!",
		categoryImage: "/category/poprock.png",
		categoryHeadline: "PopRock – 70er bis heute",
		categoryText: "Poprock vereint die eingängigen Melodien des Pop mit der Energie des Rock. Dieser Stil bringt emotionale Balladen und mitreißende Hits hervor, geprägt von vielseitigen Künstlern und Bands.",
		videoPage: "/videos/nilzvideo",
		rounds: [
			{
				id: 1,
				slug: "round-one",
				headline: "Runde 1 / 3",
				startOverlayText: "Erscheinungsjahr: vorne das neueste, hinten das älteste.",
				introSubline: "Sortieren Sie nach dem",
				sortToText: "Erscheinungsjahr!",
				upToLabel: "Älteste",
				downToLabel: "Neuste",
				coverData: [
					{
						band: "Snow Patrol",
						album: "Eyes Open",
						data: "2006",
						coverSrc: "/bandcover/snowPatrol.jpeg",
						audioSrc: "/mp3s/snowPatrol.mp3",
						jokerText: "Das Album Eyes Open von Snow Patrol enthält den Song Set the Fire to the Third Bar, ein Duett mit der kanadischen Sängerin Martha Wainwright. Dieser emotionale Track wurde später in verschiedenen Filmen und TV-Shows verwendet und zeigt die Fähigkeit der Band, kraftvolle und eindringliche Kollaborationen zu schaffen.",
						triviaQuestion: "Welches Album enthält den weltweiten Hit „Chasing Cars“?",
						triviaAnswer: "Das Album „Eyes Open“ von Snow Patrol, das den weltweiten Hit „Chasing Cars“ enthält, wurde 2006 veröffentlicht. Der Song erlangte besonders durch seine emotionale Präsenz und die prominente Verwendung in der TV-Serie „Grey’s Anatomy“ zusätzliche Bekanntheit."
					},
					{
						band: "Kelly Clarkson",
						album: "Breakaway",
						data: "2004",
						coverSrc: "/bandcover/kellyClarkson.jpeg",
						audioSrc: "/mp3s/kellyClarkson.mp3",
						jokerText: "Kelly Clarkson's Album Breakaway war ursprünglich als reiner Soundtrack-Beitrag für den Film The Princess Diaries 2 gedacht. Der Erfolg des Titelsongs Breakaway führte jedoch dazu, dass er der Namensgeber für ihr zweites Studioalbum wurde, das schließlich über 12 Millionen Mal weltweit verkauft wurde.",
						triviaQuestion: "Welches Album enthält den Hit „Since U Been Gone“ und markierte einen stilistischen Wandel für die Künstlerin, die es aufnahm?",
						triviaAnswer: "Das Album „Breakaway“ von Kelly Clarkson, das den Hit „Since U Been Gone“ enthält, wurde 2004 veröffentlicht. Es markierte einen bedeutenden stilistischen Wandel für Clarkson, indem es Elemente von Pop-Rock stärker betonte und ihr half, sich als Künstlerin jenseits ihrer Anfänge bei „American Idol“ zu etablieren. Das Album wurde weltweit gefeiert und brachte mehrere Hitsingles hervor."
					},
					{
						band: "No Doubt",
						album: "Tragic Kingdom",
						data: "1995",
						coverSrc: "/bandcover/noDoubt.jpg",
						audioSrc: "/mp3s/noDoubt.mp3",
						jokerText: "Die Fotos für das Album „Tragic Kingdom“ (1995) von No Doubt wurden in Orange County aufgenommen. Das rote Kleid, das Gwen Stefani auf dem Cover trägt, fand seinen Weg in eine Ausstellung im Fullerton Museum Center mit dem Thema „The Orange Groove: Orange County's Rock n' Roll History“. Leider wurde das Kleid im Januar 2005 aus der Ausstellung gestohlen.",
						triviaQuestion: "Welches Album, bekannt für die Hitsingle „Don’t Speak“, wurde während einer turbulenten Zeit für die Band aufgenommen und führte zu ihrem internationalen Durchbruch?",
						triviaAnswer: "Das Album „Tragic Kingdom“ von No Doubt, das die Hitsingle „Don’t Speak“ enthält, wurde 1995 veröffentlicht. Es wurde während einer turbulenten Zeit für die Band aufgenommen, in der Beziehungsdynamiken und Bandwechsel prägend waren. Dieses Album markierte den internationalen Durchbruch für No Doubt und zeigte ihre Vielseitigkeit in der Mischung von Ska, Punk und Popmusik."
					},
					{
						band: "FleetWood Mac",
						album: "Rumours",
						data: "1977",
						coverSrc: "/bandcover/fleetwoodMac.jpg",
						audioSrc: "/mp3s/fleetwoodMac.mp3",
						jokerText: "Während der Aufnahme des Albums Rumours von Fleetwood Mac waren fast alle Bandmitglieder inmitten von persönlichen Trennungen und Beziehungskrisen. Trotz (oder vielleicht wegen) dieser turbulenten Zeiten schufen sie eines der erfolgreichsten Alben aller Zeiten, das für seine emotionalen Texte und Harmonien bekannt ist.",
						triviaQuestion: "Welches Album wurde vom Rolling Stone zum siebtbesten Album aller Zeiten gekürt?",
						triviaAnswer: "Das Album „Rumours“ von Fleetwood Mac, das vom Rolling Stone als siebtbestes Album aller Zeiten ausgezeichnet wurde, erlebte ein Revival durch ein virales TikTok-Video. In dem Video fährt ein Mann entspannt auf einem Skateboard in den Sonnenuntergang, während er aus einer Saftpackung trinkt und der Song „Dreams“ im Hintergrund spielt."
					}
				],
				solutionsArray: [
					{
						band: "Snow Patrol"
					},
					{
						band: "Kelly Clarkson"
					},
					{
						band: "No Doubt"
					},
					{
						band: "FleetWood Mac"
					}
				]
			},
			{
				id: 2,
				slug: "round-two",
				headline: "Runde 2 / 3",
				startOverlayText: "Verkaufszahlen: vorne das meiste, hinten das wenigste.",
				introSubline: "Sortieren Sie nach",
				sortToText: "Verkaufszahlen!",
				upToLabel: "Wenigste",
				downToLabel: "Meiste",
				coverData: [
					{
						band: "Blondie",
						album: "Parallel Lines",
						data: "16 Mio.",
						coverSrc: "/bandcover/blondie.jpg",
						audioSrc: "/mp3s/blondie.mp3",
						type: "lost",
						jokerText: "Blondie's Album Parallel Lines enthält den ikonischen Song Heart of Glass, der ursprünglich als langsamer Blues-Song geschrieben wurde. Die Band verwandelte ihn jedoch in einen Disco-Hit, was einige ihrer Punk-Fans irritierte, aber das Lied machte Blondie zu internationalen Stars und trug wesentlich zum kommerziellen Erfolg des Albums bei.",
						triviaQuestion: "Welches Album enthält den wegweisenden Hit „Heart of Glass“ und wurde als eines der einflussreichsten Alben in der Musikgeschichte anerkannt?",
						triviaAnswer: "Das Album „Parallel Lines“ von Blondie, das den wegweisenden Hit „Heart of Glass“ enthält, wurde 1978 veröffentlicht. Es spielte eine entscheidende Rolle in der Evolution der Musikszene, indem es Elemente von Punk, Disco, Pop und New Wave kombinierte. Dieses vielfältige Album half Blondie, internationalen Ruhm zu erlangen und bleibt bis heute einflussreich in der Musikgeschichte."
					},
					{
						band: "The B-52s",
						album: "Cosmic Thing",
						data: "5 Mio.",
						coverSrc: "/bandcover/b52.jpg",
						audioSrc: "/mp3s/b52.mp3",
						type: "won",
						jokerText: "Das Album Cosmic Thing von The B-52's markierte das Comeback der Band nach einer mehrjährigen Pause. Der Song Love Shack aus diesem Album wurde zu einem ihrer größten Hits und brachte der Band ihren ersten Top-10-Erfolg in den USA, was Cosmic Thing zu ihrem erfolgreichsten Album machte.",
						triviaQuestion: "Das Design Studio welchen Plattencovers hat außerdem auch das Logo des Musiksenders MTV gestaltet?",
						triviaAnswer: "Das Album „Cosmic Thing“ von The B-52s markierte ihr Comeback nach dem Tod von Ricky Wilson an HIV und bot der Band eine therapeutische Erfahrung. Das fröhliche Cover, das diese positive Stimmung widerspiegelt, wurde von „Manhattan Design“ gestaltet, dem Studio, das auch das MTV-Logo entworfen hat."
					},
					{
						band: "Coldplay",
						album: "Ghost Stories",
						data: "4 Mio.",
						coverSrc: "/bandcover/coldplay.jpg",
						audioSrc: "/mp3s/colplay.mp3",
						type: "lost",
						jokerText: "Coldplay's Album Ghost Stories (2014) ist stark von der Trennung von Chris Martin und Gwyneth Paltrow inspiriert. Das Album hat eine deutlich melancholische und introspektive Atmosphäre, die die emotionalen Höhen und Tiefen dieser Phase widerspiegelt, was es zu einem der persönlichsten Werke der Band macht.",
						triviaQuestion: "Welches Album, das in seiner Thematik Trennung und Verlust verarbeitet, enthält den Song „A Sky Full of Stars“?",
						triviaAnswer: "Das Album „Ghost Stories“ von Coldplay, das den Song „A Sky Full of Stars“ enthält, wurde 2014 veröffentlicht. Es erkundet Themen wie Trennung und Verlust, inspiriert von persönlichen Erfahrungen der Bandmitglieder. Dieses emotional geladene Album zeigt eine ruhigere, introspektivere Seite von Coldplay, kombiniert mit elektronischen Einflüssen und minimalistischen Texturen."
					},
					{
						band: "Kim Carnes",
						album: "Mistaken Identity",
						data: "1,5 Mio.",
						coverSrc: "/bandcover/kimCarnes.jpg",
						audioSrc: "/mp3s/kimCarnes.mp3",
						type: "lost",
						jokerText: "Kim Carnes Album Mistaken Identity enthält den Mega-Hit Bette Davis Eyes, der acht Wochen lang die Nummer 1 der US-Charts belegte. Interessanterweise war der Song ursprünglich ein langsamerer, jazzigerer Track, aber Carnes und ihr Produzent machten ihn zu einem Synth-Pop-Klassiker, der zu ihrem Markenzeichen wurde und ihr zwei Grammy Awards einbrachte.",
						triviaQuestion: "Welches Album enthält den Grammy-ausgezeichneten Hit „Bette Davis Eyes“, der mehrere Wochen die US-Charts dominierte?",
						triviaAnswer: "Das Album „Mistaken Identity“ von Kim Carnes, bekannt für den Hit „Bette Davis Eyes“, wurde 1981 veröffentlicht. Dieser Song, der Kim Carnes einen Grammy Award einbrachte, stand für mehrere Wochen an der Spitze der US-Charts und wurde zu einem der größten Hits des Jahres. Das Album selbst vereint Einflüsse aus Rock und Pop und spiegelt die markante raue Stimme von Carnes wider."
					}
				],
				solutionsArray: [
					{
						band: "Blondie"
					},
					{
						band: "The B-52s"
					},
					{
						band: "Coldplay"
					},
					{
						band: "Kim Carnes"
					}
				]
			},
			{
				id: 3,
				slug: "round-three",
				headline: "Runde 3 / 3",
				startOverlayText: "Gesamtlänge: vorne das längste, hinten das kürzeste.",
				introSubline: "Sortieren Sie nach",
				sortToText: "Gesamtlänge!",
				upToLabel: "Kürzeste",
				downToLabel: "Längste",
				coverData: [
					{
						band: "Red Hot Chilli Peppers",
						album: "Stadium Arcadium",
						data: "2:02:21",
						coverSrc: "/bandcover/redHotChiliPeppers.jpg",
						audioSrc: "/mp3s/redHotChiliPeppers.mp3",
						type: "lost",
						jokerText: "Stadium Arcadium von den Red Hot Chili Peppers war ursprünglich als Trilogie von drei Alben geplant, wurde aber schließlich als Doppelalbum mit 28 Tracks veröffentlicht. Es ist das letzte Album, an dem Gitarrist John Frusciante vor seinem Ausstieg im Jahr 2009 mitarbeitete, und es brachte der Band sieben Grammy-Nominierungen ein, von denen sie fünf gewann.",
						triviaQuestion: "Welches Doppelalbum umfasst 28 Tracks und wurde sowohl für seine musikalische Vielfalt als auch für seine technische Kompetenz bei den Grammy Awards ausgezeichnet?",
						triviaAnswer: "Das Album „Stadium Arcadium“ von den Red Hot Chili Peppers, ein ambitioniertes Doppelalbum mit 28 Tracks, wurde 2006 veröffentlicht. Es zeigt eine beeindruckende Bandbreite musikalischer Stile und technischer Fähigkeiten, was es zu einem der herausragendsten Werke der Band macht. Das Album erhielt mehrere Grammy Awards, darunter für das beste Rock-Album, und beinhaltet Hits wie „Dani California“, „Snow (Hey Oh)“ und „Tell Me Baby“."
					},
					{
						band: "Avril Lavigne",
						album: "Let Go",
						data: "48:37",
						coverSrc: "/bandcover/avrilLavigne.jpeg",
						audioSrc: "/mp3s/avrilLavigne_cutted.mp3",
						type: "lost",
						jokerText: "Die 48 Minuten und 37 Sekunden von Avril Lavignes Album Let Go hoben nicht nur ihre musikalische Karriere auf ein ganz neues Level, das Album revolutionierte auch den Pop-Punk und ebnete den Weg für viele weitere Pop-Punk-Front-Frauen. Das Cover, das die Musikerin an der Kreuzung von Broadway und Canal Street in NYC zeigt, behält bis heute Kult-Status.",
						triviaQuestion: "Welches Debütalbum, das die Jugendkultur der frühen 2000er Jahre maßgeblich prägte, enthält die Hits „Complicated“ und „Sk8er Boi“?",
						triviaAnswer: "Das Album „Let Go“ von Avril Lavigne, ihr Debütalbum, wurde 2002 veröffentlicht und enthält Hits wie „Complicated“ und „Sk8er Boi“. Es prägte die Jugendkultur der frühen 2000er Jahre mit seinem frischen Mix aus Pop-Punk und Rock. Dieses Album brachte Lavigne internationale Anerkennung und half, ihr Image als Pop-Punk-Prinzessin zu festigen."
					},
					{
						band: "David Bowie",
						album: "Hunky Dory",
						data: "41:37",
						coverSrc: "/bandcover/davidBowie.jpg",
						audioSrc: "/mp3s/davidBowie.mp3",
						type: "won",
						jokerText: "David Bowies Album Hunky Dory enthält den Song Life on Mars?, den Bowie als a cross between a Broadway musical and a Salvador Dalí painting beschrieb. Das Album markierte einen Wendepunkt in Bowies Karriere und wird oft als der Beginn seiner legendären Ziggy Stardust-Phase betrachtet, obwohl diese erst mit seinem nächsten Album voll zur Geltung kam.",
						triviaQuestion: "Welches Album wurde dem Sohn eines/einer der Musiker:innen gewidmet?",
						triviaAnswer: "David Bowie nannte seinen Sohn, den Regisseur Duncan Jones, „Zowie“, weshalb dieser auch als Zowie Bowie bekannt ist. Duncan kam 1971, im Erscheinsungsjahr des Albums „Hunky Dory“, auf die Welt – Deshalb steht auf dem Rücken der Platte die Widmung „for small Z.“."
					},
					{
						band: "Blink-182",
						album: "Enema of the State",
						data: "35:18",
						coverSrc: "/bandcover/blink182.jpeg",
						audioSrc: "/mp3s/blink182_cutted.mp3",
						type: "lost",
						jokerText: "Das Album Enema of the State von Blink-182 war ihr großer Durchbruch und verhalf der Band zu weltweiter Bekanntheit. Das ikonische Albumcover zeigt die Pornodarstellerin Janine Lindemulder als Krankenschwester, was für einige Kontroversen sorgte, aber gleichzeitig zum pop-punkigen Image der Band beitrug und das Album visuell unvergesslich machte.",
						triviaQuestion: "Welches Album, das als Wendepunkt im Pop-Punk-Genre gilt und mehrere charttoppende Singles hervorbrachte, enthält die Hits „All the Small Things“ und „What’s My Age Again?“",
						triviaAnswer: "Das Album „Enema of the State“ von Blink-182, bekannt für die Hits „All the Small Things“ und „What’s My Age Again?“, wurde 1999 veröffentlicht. Es gilt als eines der einflussreichsten Alben im Pop-Punk-Genre und brachte der Band massiven kommerziellen Erfolg. Mit seinem humorvollen und jugendlichen Stil hatte es großen Einfluss auf die Musikszene und Kultur der späten 1990er und frühen 2000er Jahre."
					}
				],
				solutionsArray: [
					{
						band: "Red Hot Chilli Peppers"
					},
					{
						band: "Avril Lavigne"
					},
					{
						band: "David Bowie"
					},
					{
						band: "Blink-182"
					}
				]
			}
		]
	}
];

export { categories as c };
