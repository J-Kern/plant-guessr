const _plants = [
    {
        id: 1,
        germanName: 'Feldahorn',
        latinName: 'acer compestre',
        images: [
            'feldahorn1.jpeg'
        ]
    },
    {
        id: 2,
        germanName: 'Spitzahorn',
        latinName: 'acer platanoides',
        images: []
    },
    {
        id: 3,
        germanName: 'Bergahorn',
        latinName: 'acer pseudoplatanus',
        images: []
    },
    {
        id: 4,
        optionalGermanPrefix: 'gew. ',
        germanName: 'Giersch',
        latinName: 'aegopodium podagraria',
        images: []
    },
    {
        id: 5,
        germanName: 'Kriechender Günsel',
        latinName: 'ajuga reptans',
        images: []
    },
    {
        id: 6,
        germanName: 'Knoblauchsrauke',
        latinName: 'alliara petiolata',
        images: []
    },
    {
        id: 7,
        germanName: 'Bärlauch',
        latinName: 'allium ursinum',
        images: []
    },
    {
        id: 8,
        germanName: 'Schwarz-Erle',
        latinName: 'alnus glutinosa',
        images: []
    },
    {
        id: 9,
        germanName: 'Buschwindröschen',
        latinName: 'anemone nemorosa',
        images: []
    },
    {
        id: 10,
        germanName: 'Wiesenkerbel',
        latinName: 'anthriscus sylvestris',
        images: []
    },
    {
        id: 11,
        germanName: 'Ackerschmalwand',
        latinName: 'arabidopsis thaliana',
        images: []
    },
    {
        id: 12,
        optionalGermanPrefix: 'gew. ',
        germanName: 'Glatthafer',
        latinName: 'arrhenatherum elatius',
        images: []
    },
    {
        id: 13,
        germanName: 'Gänseblümchen',
        latinName: 'bellis perennis',
        images: []
    },
    {
        id: 14,
        germanName: 'Hänge-Birke',
        latinName: 'berula pendula',
        images: []
    },
    {
        id: 15,
        germanName: 'Schlangenknöterich',
        latinName: 'bistorta officinalis',
        images: []
    },
    {
        id: 16,
        germanName: 'Raps',
        latinName: 'brassica napus',
        images: []
    },
    {
        id: 17,
        germanName: 'Weiche Trespe',
        latinName: 'bromus hordeaceus',
        images: []
    },
    {
        id: 18,
        germanName: 'Weiche Trespe',
        latinName: 'bromus sterilis',
        images: []
    },
    {
        id: 19,
        germanName: 'Sumpfdotterblume',
        latinName: 'caltha palustris',
        images: []
    },
    {
        id: 20,
        optionalGermanPrefix: 'gew. ',
        germanName: 'Hirtentäschel',
        latinName: 'capsella bursa-pastoris',
        images: []
    },
    {
        id: 21,
        germanName: 'Wiesenschaumkraut',
        latinName: 'cardamine pratensis',
        images: []
    },
    {
        id: 22,
        germanName: 'Seggen',
        latinName: 'carex',
        optionalLatinSuffix: ' sp.',
        images: []
    },
    {
        id: 23,
        germanName: 'Hainbuche',
        latinName: 'carpinus betulus',
        images: []
    },
    {
        id: 24,
        germanName: 'Schöllkraut',
        latinName: 'chelidonium majus',
        images: []
    },
    {
        id: 25,
        germanName: 'weißer Gänsefuß',
        latinName: 'chenopodium album',
        images: []
    },
    {
        id: 26,
        germanName: 'Acker-Kratzdistel',
        latinName: 'cirsium arvense',
        images: []
    },
    {
        id: 27,
        optionalGermanPrefix: 'gew. ',
        germanName: 'Waldrebe',
        latinName: 'clematis vitalba',
        images: []
    },
    {
        id: 28,
        germanName: 'gemeine Hasel',
        latinName: 'corylus avellana',
        images: []
    },
    {
        id: 29,
        optionalGermanPrefix: 'gew. ',
        germanName: 'Knäuelgras',
        latinName: 'dactylis glomerata',
        images: []
    },
    {
        id: 30,
        germanName: 'wilde Möhre',
        latinName: 'daucus carola',
        images: []
    },
    {
        id: 31,
        germanName: 'roter Fingerhut',
        latinName: 'digitalis purpurea',
        images: []
    },
    {
        id: 32,
        optionalGermanPrefix: 'gew. ',
        germanName: 'Natternkopf',
        latinName: 'echium vulgare',
        images: []
    },
    {
        id: 33,
        germanName: 'Acker-Schachtelhalm',
        latinName: 'equisetum arvense',
        images: []
    },
    {
        id: 34,
        germanName: 'Zypressen-Wolfsmilch',
        latinName: 'euphorbia cyparissias',
        images: []
    },
    {
        id: 35,
        germanName: 'Rotbuche',
        latinName: 'fagus sylvatica',
        images: []
    },
    {
        id: 36,
        germanName: 'Scharbockskraut',
        latinName: 'ficaria verna',
        images: []
    },
    {
        id: 37,
        germanName: 'Walderdbeere',
        latinName: 'fragaria vesca',
        images: []
    },
    {
        id: 38,
        optionalGermanPrefix: 'gew. ',
        germanName: 'Goldnessel',
        latinName: 'galeobdolon luteum',
        images: []
    },
    {
        id: 39,
        germanName: 'Klettenlabkraut',
        latinName: 'galium aparine',
        images: []
    },
    {
        id: 40,
        germanName: 'Wiesenlabkraut',
        latinName: 'galium mollugo',
        images: []
    },
    {
        id: 41,
        germanName: 'Wiesen-Storchschnabel',
        latinName: 'geranium pratense',
        images: []
    },
    {
        id: 42,
        germanName: 'Ruprechtskraut',
        latinName: 'geranium robertianum',
        images: []
    },
    {
        id: 43,
        germanName: 'Echte Nelkenwurz',
        latinName: 'geum urbanum',
        images: []
    },
    {
        id: 44,
        germanName: 'Gundermann',
        latinName: 'glechoma hereacea',
        images: []
    },
    {
        id: 45,
        germanName: 'gemeiner Efeu',
        latinName: 'hedera helix',
        images: []
    },
    {
        id: 46,
        germanName: 'Wolliges Honiggras',
        latinName: 'holeus lanatus',
        images: []
    },
    {
        id: 47,
        germanName: 'Mäuse-Gerste',
        latinName: 'hordeum murinum',
        images: []
    },
    {
        id: 48,
        germanName: 'echtes Johanniskraut',
        latinName: 'hypericum perforatum',
        images: []
    },
    {
        id: 49,
        germanName: 'Färberwaid',
        latinName: 'juncus effusus',
        images: []
    },
    {
        id: 50,
        germanName: 'weiße Taubennessel',
        latinName: 'lamium album',
        images: []
    },
    {
        id: 51,
        germanName: 'purpurrote Taubennessel',
        latinName: 'lamium purpureum',
        images: []
    },
    {
        id: 52,
        germanName: 'Wiesen-Platterbse',
        latinName: 'lathyrus pratensis',
        images: []
    },
    {
        id: 53,
        germanName: 'Magerwiesen-Margerite',
        latinName: 'leucanthemum vulgare',
        images: []
    },
    {
        id: 54,
        germanName: 'Deutsches Weidelgras',
        latinName: 'lolium perenne',
        images: []
    },
    {
        id: 55,
        optionalGermanPrefix: 'gew. ',
        germanName: 'Hornklee',
        latinName: 'lotus corniculatus',
        images: []
    },
    {
        id: 56,
        germanName: 'KulturApfel',
        latinName: 'malus domestica',
        images: []
    },
    {
        id: 57,
        germanName: 'echte Kamille',
        latinName: 'matricaria chamomilla',
        images: []
    },
    {
        id: 58,
        germanName: 'Hopfenklee',
        latinName: 'medicago lupulina',
        images: []
    },
    {
        id: 59,
        germanName: 'gelber Steinklee',
        latinName: 'melilotus officinalis',
        images: []
    },
    {
        id: 60,
        germanName: 'Acker-Vergissmeinnicht',
        latinName: 'myosotis arvensis',
        images: []
    },
    {
        id: 61,
        germanName: 'Spitzwegerich',
        latinName: 'plantago lanceolata',
        images: []
    },
    {
        id: 62,
        germanName: 'Breitwegerich',
        latinName: 'plantago major',
        images: []
    },
    {
        id: 63,
        germanName: '1-jähriges Rispengras',
        latinName: 'poa annua',
        images: []
    },
    {
        id: 64,
        germanName: 'Hain-Rispengras',
        latinName: 'poa nemoralis',
        images: []
    },
    {
        id: 65,
        germanName: 'Wiesen-Rispengras',
        latinName: 'poa pratensis',
        images: []
    },
    {
        id: 66,
        germanName: 'Kriechendes Fingerkraut',
        latinName: 'potentilla reptans',
        images: []
    },
    {
        id: 67,
        germanName: 'kleine Braunelle',
        latinName: 'prunella vulgaris',
        images: []
    },
    {
        id: 68,
        germanName: 'Vogelkirsche',
        latinName: 'prunus avium',
        images: []
    },
    {
        id: 69,
        germanName: 'Schwarzdorn',
        latinName: 'prunus spinosa',
        images: []
    },
    {
        id: 70,
        germanName: 'KulturBirne',
        latinName: 'pyrus domestica',
        images: []
    },
    {
        id: 71,
        germanName: 'Traubeneiche',
        latinName: 'quercus petraea',
        images: []
    },
    {
        id: 72,
        germanName: 'Stieleiche',
        latinName: 'quercus robur',
        images: []
    },
    {
        id: 73,
        germanName: 'scharfer Hahnenfuß',
        latinName: 'ranunculus acris',
        images: []
    },
    {
        id: 74,
        germanName: 'kriechender Hahnenfuß',
        latinName: 'ranunculus repens',
        images: []
    },
    {
        id: 75,
        optionalGermanPrefix: 'gew. ',
        germanName: 'Robinie',
        latinName: 'robinia pseudacacia',
        images: []
    },
    {
        id: 76,
        germanName: 'kleiner Sauerampfer',
        latinName: 'rumex acetosella',
        images: []
    },
    {
        id: 77,
        germanName: 'Wiesensalbei',
        latinName: 'salvia pratensis',
        images: []
    },
    {
        id: 78,
        germanName: 'Sal-Weide',
        latinName: 'salix caprea',
        images: []
    },
    {
        id: 79,
        germanName: 'Holunder',
        latinName: 'sambucus nigra',
        images: []
    },
    {
        id: 80,
        optionalGermanPrefix: 'gew. ',
        germanName: 'Greiskraut',
        latinName: 'senecio vulgaris',
        images: []
    },
    {
        id: 81,
        germanName: 'rote Lichtnelke',
        latinName: 'silene dioica',
        images: []
    },
    {
        id: 82,
        germanName: 'weiße Lichtnelke',
        latinName: 'silene latifolia',
        images: []
    },
    {
        id: 83,
        germanName: 'Weg-Rauke',
        latinName: 'sisymbrium officinale',
        images: []
    },
    {
        id: 84,
        germanName: 'Vogelbeere',
        latinName: 'Sorbus aucuparia',
        images: []
    },
    {
        id: 85,
        germanName: 'Wald-Ziest',
        latinName: 'stachys sylvatica',
        images: []
    },
    {
        id: 86,
        germanName: 'Große Sternmiere',
        latinName: 'stellaria holostea',
        images: []
    },
    {
        id: 87,
        optionalGermanPrefix: 'gew. ',
        germanName: 'Sternmiere',
        latinName: 'stellaria media',
        images: []
    },
    {
        id: 88,
        germanName: 'echter Beinwell',
        latinName: 'symphytum officinale',
        images: []
    },
    {
        id: 89,
        optionalGermanPrefix: 'gew. ',
        germanName: 'Löwenzahn',
        latinName: 'taraxacum officinale',
        images: []
    },
    {
        id: 90,
        germanName: 'Acker-Hellerkraut',
        latinName: 'thlaspi arvense',
        images: []
    },
    {
        id: 91,
        germanName: 'Sommerlinde',
        latinName: 'tilia platyphyllos',
        images: []
    },
    {
        id: 92,
        germanName: 'Wiesenklee',
        latinName: 'trifolium pratense',
        images: []
    },
    {
        id: 93,
        germanName: 'Weißklee',
        latinName: 'trifolium repens',
        images: []
    },
    {
        id: 94,
        germanName: 'geruchlose Kamille',
        latinName: 'tripleurospermum perforatum',
        images: []
    },
    {
        id: 95,
        germanName: 'große Brennessel',
        latinName: 'urtica dioica',
        images: []
    },
    {
        id: 96,
        germanName: 'Gamander-Ehrenpreis',
        latinName: 'veronica chamaedrys',
        images: []
    },
    {
        id: 97,
        germanName: 'Persischer Ehrenpreis',
        latinName: 'veronica persica',
        images: []
    },
    {
        id: 98,
        germanName: 'Vogelwicke',
        latinName: 'vicia cracca',
        images: []
    },
    {
        id: 99,
        germanName: 'Zaunwicke',
        latinName: 'vicia sepium',
        images: []
    }
]

export default {
    getAllPlants () {
        return _plants
    },
    getRandomPlant () {
        return _plants[Math.floor(Math.random()*_plants.length)]
    },
    getPlant(_index){
        return _plants[_index] || {
            error: "Plant not found!",
            message: "Error: Plant has not been found, please try again!"
        }
    }
}