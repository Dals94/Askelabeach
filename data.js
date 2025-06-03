// Data for ASKELABEACH™ Static App

// Quiz Data
const quizData = {
    questions: [
        {
            id: "q1",
            text: "¿Cómo te sientes cuando alguien menciona 'actividades acuáticas'?",
            options: [
                { text: "¡Emocionada! 🏊‍♀️", value: 3 },
                { text: "Meh, depende del mood 🤷‍♀️", value: 2 },
                { text: "Prefiero mi cama, gracias 😴", value: 1 }
            ]
        },
        {
            id: "q2",
            text: "Tu outfit ideal para la playa es:",
            options: [
                { text: "Bikini lista para la acción 👙", value: 3 },
                { text: "Vestido cute pero cómodo 👗", value: 2 },
                { text: "Pijama porque #NoMeVoy 👘", value: 1 }
            ]
        },
        {
            id: "q3",
            text: "¿Qué tan dispuesta estás a lidiar con turistas?",
            options: [
                { text: "Los esquivo como ninja 🥷", value: 3 },
                { text: "Los tolero con sonrisa falsa 😬", value: 2 },
                { text: "Ni loca, me da cringe 😵", value: 1 }
            ]
        },
        {
            id: "q4",
            text: "Tu relación con los tours es:",
            options: [
                { text: "Los amo, soy turista profesional 📸", value: 3 },
                { text: "Van y vienen, como el amor 💔", value: 2 },
                { text: "Tours = tortura social 😩", value: 1 }
            ]
        },
        {
            id: "q5",
            text: "Si fueras un animal marino serías:",
            options: [
                { text: "Delfín sociable y aventurero 🐬", value: 3 },
                { text: "Pez tropical medio fancy 🐠", value: 2 },
                { text: "Estrella de mar pegada a su roca ⭐", value: 1 }
            ]
        }
    ],
    results: [
        {
            min: 5, max: 8,
            title: "Quédate a mimir, reyna 👑",
            description: "Tu energía dice 'no today Satan'. Mejor pide un smoothie, ponte tu playlist sad y disfruta el wifi. El tiburón vagina puede esperar hasta que tu alma esté lista. 🌊💤"
        },
        {
            min: 9, max: 12,
            title: "Haz el tour, pero quejarte es parte del viaje 🙄",
            description: "Vas a ir porque FOMO is real, pero tu derecho a quejarte está sagrado. Lleva snacks, audífonos y actitud de 'esto mejor esté bueno'. El drama es opcional pero recomendado. ✨🎭"
        },
        {
            min: 13, max: 15,
            title: "¡Dale que eres toda una aventurera! 🚀",
            description: "Tu vibra dice 'I'm ready'. Ve, disfruta, saca fotos para el Insta y vive tu mejor vida acuática. El tiburón vagina te está esperando con los brazos (¿aletas?) abiertos. 🦈💅"
        }
    ]
};

// Prophecies Data
const prophecies = [
    "Del rancho al primer mundo con una green card emocional 🌟",
    "La pereza es un acto de autocuidado superior 🧘‍♀️",
    "Tu ex va a stalkear tu story justo cuando subas algo cute 👀",
    "Hoy vas a encontrar dinero que no sabías que tenías 💰",
    "El universo conspira para que tu crush te mande mensaje... en 3 días ⏰",
    "Tu café de mañana va a estar perfectamente preparado ☕",
    "Alguien va a cancelar planes y vas a fingir que te molesta pero secretamente celebrar 🎉",
    "Tu skincare routine finalmente va a dar resultados visibles ✨",
    "Vas a encontrar el outfit perfecto en tu clóset... otra vez 👗",
    "Tu mamá va a llamarte justo cuando estés haciendo algo importante 📞",
    "Hoy es día de manifestar abundancia desde la cama 🛏",
    "El algoritmo va a bendecirte con el TikTok perfecto 📱",
    "Tu mascota va a hacer algo súper cute que vas a grabar 🐕",
    "Vas a recordar una conversación cringe de hace 5 años... a las 3am 😅",
    "El delivery va a llegar antes de lo esperado 🚚"
];

// Planner Data
const plannerData = {
    mimir: [
        "10:00 a.m. – Despertar... o intentarlo 😴",
        "11:30 a.m. – Check Instagram en la cama por 'solo 5 minutos' 📱",
        "1:00 p.m. – Brunch tardío porque madrugamos 🥞",
        "3:00 p.m. – Siesta estratégica en la hamaca 🏖",
        "5:00 p.m. – Contemplar el atardecer con drink en mano 🌅",
        "7:00 p.m. – Cenar algo que no requiera cocinar 🍕",
        "9:00 p.m. – Netflix y chill... literal 📺"
    ],
    vagancia: [
        "9:00 a.m. – Yoga en la playa (5 minutos cuenta) 🧘‍♀️",
        "10:30 a.m. – Desayuno consciente viendo el mar 🥝",
        "12:00 p.m. – Caminar por la playa 'ejercitándose' 🚶‍♀️",
        "2:00 p.m. – Leer dos páginas de un libro motivacional 📚",
        "4:00 p.m. – Meditar o pretender que lo haces 🧘",
        "6:00 p.m. – Journaling con frases profundas ✍️",
        "8:00 p.m. – Cena orgánica (o lo que encuentres) 🥗"
    ],
    aventura: [
        "7:00 a.m. – Levantarse temprano como una warrior 💪",
        "8:00 a.m. – Desayuno power antes de la aventura 🥣",
        "9:30 a.m. – Tour en kayak o algo acuático 🚣‍♀️",
        "12:00 p.m. – Almorzar con vista al mar 🌊",
        "2:00 p.m. – Snorkel o actividad marina 🤿",
        "4:00 p.m. – Explorar el pueblo como turista pro 📸",
        "6:00 p.m. – Happy hour merecido 🍹",
        "8:00 p.m. – Cenar mariscos frescos 🦐"
    ]
};

// Merch Data
const merchProducts = [
    {
        id: "playera-profecias",
        name: "Playera \"Cambia la Profecía\"",
        description: "Para cuando necesitas que el universo sepa que mandas tú ✨",
        price: "$420 MX",
        emoji: "👕",
        gradient: "linear-gradient(135deg, rgba(233, 30, 99, 0.2), rgba(0, 229, 255, 0.2))"
    },
    {
        id: "stickers-tiburon",
        name: "Sticker Pack \"Ali Tiburón Vagina\"",
        description: "5 stickers holográficos para decorar tu laptop con poder místico 🦈",
        price: "$150 MX",
        emoji: "🏷",
        gradient: "linear-gradient(135deg, rgba(0, 229, 255, 0.2), rgba(255, 215, 0, 0.2))"
    },
    {
        id: "curso-hamaca",
        name: "Curso \"De Alto Valor sin Moverte\"",
        description: "Aprende a ser productiva desde la hamaca. 12 módulos de pura sabiduría 🏖",
        price: "$2,500 MX",
        emoji: "🎓",
        gradient: "linear-gradient(135deg, rgba(255, 215, 0, 0.2), rgba(255, 127, 127, 0.2))"
    },
    {
        id: "amuleto-nft",
        name: "Amuleto Digital NFT",
        description: "Protección cósmica para tu wallet. Edición limitada ✨",
        price: "0.1 ETH",
        emoji: "🧿",
        gradient: "linear-gradient(135deg, rgba(255, 127, 127, 0.2), rgba(230, 230, 250, 0.2))"
    },
    {
        id: "funda-mystic",
        name: "Funda \"Místic Bitch\"",
        description: "Para iPhone y Android. Con cristales de cuarzo fake incluidos 💎",
        price: "$350 MX",
        emoji: "📱",
        gradient: "linear-gradient(135deg, rgba(230, 230, 250, 0.2), rgba(152, 251, 152, 0.2))"
    },
    {
        id: "hamaca-portatil",
        name: "Hamaca Portátil \"Mimir Profesional\"",
        description: "Para practicar vagancia con propósito en cualquier lugar 🌴",
        price: "$890 MX",
        emoji: "🏖",
        gradient: "linear-gradient(135deg, rgba(152, 251, 152, 0.2), rgba(233, 30, 99, 0.2))"
    }
];