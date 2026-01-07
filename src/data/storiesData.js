// Stories and games data for the tribal education portal

export const stories = [
  {
    id: 1,
    title: 'The Wise Old Tree',
    titleTelugu: 'ముదురు చెట్టు',
    category: 'nature',
    categoryTelugu: 'ప్రకృతి',
    difficulty: 'beginner',
    duration: '5-7 minutes',
    durationTelugu: '5-7 నిమిషాలు',
    description: 'A story about an ancient tree that teaches children about nature and conservation.',
    descriptionTelugu: 'ప్రకృతి మరియు సంరక్షణ గురించి పిల్లలకు నేర్పించే పురాతన చెట్టు గురించి కథ.',
    content: {
      english: `Once upon a time, in a small tribal village, there stood a magnificent banyan tree. This tree was so old that even the village elders couldn't remember when it was planted. The children of the village loved to play under its shade.

One day, a young boy named Raju noticed that the tree was looking sad. "Why are you sad, dear tree?" he asked.

The tree replied, "I am sad because people are cutting down my friends in the forest. Without trees, there will be no clean air, no shade, and no fruits for the animals."

Raju decided to help. He gathered all the children in the village and together they planted many new trees. They also made a promise to protect all trees in their village.

From that day on, the village became greener and more beautiful. The wise old tree was happy again, and all the children learned the importance of protecting nature.`,
      telugu: `ఒకప్పుడు, ఒక చిన్న గిరిజన గ్రామంలో, ఒక అద్భుతమైన మర్రిచెట్టు ఉండేది. ఈ చెట్టు చాలా పురాతనమైనది, గ్రామంలోని పెద్దలు కూడా దానిని ఎప్పుడు నాటారో గుర్తుపెట్టలేరు. గ్రామంలోని పిల్లలు దాని నీడలో ఆడుకోవడం ఇష్టపడేవారు.

ఒక రోజు, రాజు అనే చిన్న అబ్బాయి చెట్టు విచారంగా కనిపిస్తున్నట్లు గమనించాడు. "అమ్మా చెట్టూ, మీరు ఎందుకు విచారంగా ఉన్నారు?" అని అడిగాడు.

చెట్టు జవాబిచ్చింది: "అడవిలోని నా స్నేహితులను కోస్తున్నందుకు నేను విచారంగా ఉన్నాను. చెట్లు లేకపోతే, శుభ్రమైన గాలి, నీడ, మరియు జంతువులకు పండ్లు ఉండవు."

రాజు సహాయం చేయాలని నిర్ణయించుకున్నాడు. అతను గ్రామంలోని అన్ని పిల్లలను సేకరించి, కలిసి చాలా కొత్త చెట్లను నాటారు. వారు తమ గ్రామంలోని అన్ని చెట్లను రక్షించుకోవడానికి వాగ్దానం చేశారు.

ఆ రోజు నుండి, గ్రామం మరింత ఆకుపచ్చగా మరియు అందంగా మారింది. ముదురు చెట్టు మళ్లీ సంతోషంగా ఉంది, మరియు అన్ని పిల్లలు ప్రకృతిని రక్షించడం యొక్క ప్రాముఖ్యతను నేర్చుకున్నారు.`
    },
    audioUrl: '/audio/stories/wise-old-tree.mp3',
    imageUrl: '/images/stories/wise-old-tree.jpg',
    questions: [
      {
        question: 'Why was the tree sad?',
        questionTelugu: 'చెట్టు ఎందుకు విచారంగా ఉంది?',
        options: [
          { text: 'Because it was old', textTelugu: 'ఎందుకంటే అది పురాతనమైనది' },
          { text: 'Because people were cutting trees', textTelugu: 'ఎందుకంటే ప్రజలు చెట్లను కోస్తున్నారు' },
          { text: 'Because it had no fruits', textTelugu: 'ఎందుకంటే దానికి పండ్లు లేవు' }
        ],
        correctAnswer: 1
      }
    ],
    xpReward: 50,
    tags: ['nature', 'conservation', 'community', 'children']
  },
  {
    id: 2,
    title: 'The Magic Seeds',
    titleTelugu: 'మాయా విత్తనాలు',
    category: 'agriculture',
    categoryTelugu: 'వ్యవసాయం',
    difficulty: 'intermediate',
    duration: '8-10 minutes',
    durationTelugu: '8-10 నిమిషాలు',
    description: 'A tale about a farmer who discovers magical seeds that teach about sustainable farming.',
    descriptionTelugu: 'స్థిరమైన వ్యవసాయం గురించి నేర్పించే మాయా విత్తనాలను కనుగొన్న రైతు గురించి కథ.',
    content: {
      english: `In a remote tribal village, there lived a farmer named Lakshmi. She was known for her wisdom and kindness. One day, while working in her field, she found a small bag of seeds that seemed to glow with a mysterious light.

Curious, she planted one seed in her garden. To her amazement, the plant grew overnight and produced the most delicious fruits she had ever tasted. But more importantly, the plant taught her about the importance of caring for the soil and using natural methods.

Lakshmi shared her discovery with the entire village. She taught everyone how to make compost, use natural pesticides, and rotate crops. The village became a model of sustainable farming, and everyone's harvests improved.

The magic wasn't in the seeds themselves, but in the knowledge of how to work with nature rather than against it.`,
      telugu: `ఒక దూరమైన గిరిజన గ్రామంలో, లక్ష్మి అనే రైతు ఉండేది. ఆమె తన జ్ఞానం మరియు దయ కోసం ప్రసిద్ధి చెందింది. ఒక రోజు, తన పొలంలో పని చేస్తున్నప్పుడు, ఆమె రహస్యమైన కాంతితో మెరుస్తున్నట్లు కనిపించే విత్తనాల చిన్న సంచిని కనుగొన్నది.

ఆసక్తితో, ఆమె తన తోటలో ఒక విత్తనాన్ని నాటింది. ఆమె ఆశ్చర్యానికి, మొక్క రాత్రిపూట పెరిగింది మరియు ఆమె ఎప్పుడూ రుచిచూసిన అత్యంత రుచికరమైన పండ్లను ఉత్పత్తి చేసింది. కానీ మరింత ముఖ్యమైనది, మొక్క ఆమెకు నేలను సంరక్షించడం మరియు సహజ పద్ధతులను ఉపయోగించడం యొక్క ప్రాముఖ్యతను నేర్పించింది.

లక్ష్మి తన కనుగొన్నదాన్ని మొత్తం గ్రామంతో పంచుకుంది. ఆమె అందరికీ కంపోస్ట్ తయారు చేయడం, సహజ కీటకనాశకాలను ఉపయోగించడం, మరియు పంటలను తిరగించడం ఎలా నేర్పించింది. గ్రామం స్థిరమైన వ్యవసాయం యొక్క నమూనా అయింది, మరియు అందరి పంటలు మెరుగుపడ్డాయి.

మాయా విత్తనాలలో కాదు, కానీ ప్రకృతికి వ్యతిరేకంగా కాకుండా దానితో పని చేయడం యొక్క జ్ఞానంలో ఉంది.`
    },
    audioUrl: '/audio/stories/magic-seeds.mp3',
    imageUrl: '/images/stories/magic-seeds.jpg',
    questions: [
      {
        question: 'What did Lakshmi teach the village?',
        questionTelugu: 'లక్ష్మి గ్రామానికి ఏమి నేర్పించింది?',
        options: [
          { text: 'How to make money', textTelugu: 'ఎలా డబ్బు సంపాదించాలి' },
          { text: 'Sustainable farming methods', textTelugu: 'స్థిరమైన వ్యవసాయ పద్ధతులు' },
          { text: 'How to build houses', textTelugu: 'ఎలా ఇళ్లు నిర్మించాలి' }
        ],
        correctAnswer: 1
      }
    ],
    xpReward: 75,
    tags: ['agriculture', 'sustainability', 'nature', 'community']
  },
  {
    id: 3,
    title: 'The Brave Little Girl',
    titleTelugu: 'ధైర్యవంతురాలైన చిన్న అమ్మాయి',
    category: 'literacy',
    categoryTelugu: 'అక్షరాస్యత',
    difficulty: 'beginner',
    duration: '6-8 minutes',
    durationTelugu: '6-8 నిమిషాలు',
    description: 'A story about a girl who learns to read and write and inspires her entire village.',
    descriptionTelugu: 'చదవడం మరియు వ్రాయడం నేర్చుకుని తన గ్రామం మొత్తానికి స్ఫూర్తినిచ్చిన అమ్మాయి గురించి కథ.',
    content: {
      english: `In a small tribal village, there lived a curious girl named Meera. While other children played, Meera loved to draw pictures in the sand and make up stories.

One day, a teacher came to the village and started a small school under a big tree. Meera was the first one to join. She learned the alphabet, numbers, and how to write her name.

At first, some villagers said education wasn't important for girls. But Meera proved them wrong. She read books to her younger siblings, helped her mother keep accounts of their crops, and taught other children what she learned.

Soon, more and more girls joined the school. Meera's determination showed everyone that education is a right for all children, regardless of gender.

Years later, Meera became a teacher herself, returning to her village to educate the next generation.`,
      telugu: `ఒక చిన్న గిరిజన గ్రామంలో, మీరా అనే ఆసక్తిగల అమ్మాయి ఉండేది. ఇతర పిల్లలు ఆడుకునేప్పుడు, మీరా ఇసుకలో చిత్రాలు గీయడం మరియు కథలు చెప్పడం ఇష్టపడేది.

ఒక రోజు, ఒక ఉపాధ్యాయురాలు గ్రామానికి వచ్చి ఒక పెద్ద చెట్టు కింద ఒక చిన్న పాఠశాలను ప్రారంభించింది. మీరా చేరిన మొదటి వ్యక్తి. ఆమె వర్ణమాల, సంఖ్యలు, మరియు తన పేరు ఎలా వ్రాయాలో నేర్చుకుంది.

మొదట్లో, కొంతమంది గ్రామస్థులు అమ్మాయిలకు విద్య ముఖ్యం కాదని చెప్పారు. కానీ మీరా వారు తప్పు అని నిరూపించింది. ఆమె తన చిన్న తోబుట్టువులకు పుస్తకాలు చదివింది, తన తల్లికి వారి పంటల లెక్కలు ఉంచడంలో సహాయం చేసింది, మరియు తను నేర్చుకున్నదాన్ని ఇతర పిల్లలకు నేర్పింది.

త్వరలోనే, మరింత మంది అమ్మాయిలు పాఠశాలలో చేరారు. మీరా యొక్క నిశ్చయత విద్య లింగంతో సంబంధం లేకుండా అన్ని పిల్లలకు హక్కు అని అందరికీ చూపించింది.

సంవత్సరాల తరువాత, మీరా స్వయంగా ఒక ఉపాధ్యాయురాలు అయింది, తరువాతి తరానికి విద్య ఇవ్వడానికి తన గ్రామానికి తిరిగి వచ్చింది.`
    },
    audioUrl: '/audio/stories/brave-little-girl.mp3',
    imageUrl: '/images/stories/brave-little-girl.jpg',
    questions: [
      {
        question: 'What did Meera love to do?',
        questionTelugu: 'మీరా ఏం చేయడం ఇష్టపడేది?',
        options: [
          { text: 'Play games', textTelugu: 'ఆటలు ఆడటం' },
          { text: 'Draw and make stories', textTelugu: 'గీయడం మరియు కథలు చెప్పడం' },
          { text: 'Cook food', textTelugu: 'వంట చేయడం' }
        ],
        correctAnswer: 1
      }
    ],
    xpReward: 60,
    tags: ['literacy', 'education', 'empowerment', 'gender-equality']
  },
  {
    id: 4,
    title: 'The River of Numbers',
    titleTelugu: 'సంఖ్యల నది',
    category: 'mathematics',
    categoryTelugu: 'గణితం',
    difficulty: 'beginner',
    duration: '5-7 minutes',
    durationTelugu: '5-7 నిమిషాలు',
    description: 'A magical journey that teaches children about numbers and basic mathematics.',
    descriptionTelugu: 'పిల్లలకు సంఖ్యలు మరియు ప్రాథమిక గణితం గురించి నేర్పించే మాయా ప్రయాణం.',
    content: {
      english: `In a village near a flowing river, there lived a boy named Arjun who was afraid of numbers. One night, he had a magical dream.

In his dream, he met a wise fish who said, "Come with me on a journey through the River of Numbers!" They swam together, and the fish showed him islands.

On the first island, there was one mango tree. On the second island, there were two buffalo. On the third island, there were three baskets of grain. Arjun realized counting was fun!

The fish then taught him addition. "If you have two fish and I give you three more, how many do you have?" Arjun counted: "Five fish!"

When Arjun woke up, he wasn't afraid of numbers anymore. He realized that math is everywhere - in nature, in daily life, and even in his dreams.

From that day, Arjun became the best math student in his village, helping others who were once afraid like him.`,
      telugu: `ప్రవహించే నది దగ్గర ఉన్న గ్రామంలో, సంఖ్యలకు భయపడే అర్జున్ అనే అబ్బాయి ఉండేవాడు. ఒక రాత్రి, అతను ఒక మాయా కలని చూశాడు.

తన కలలో, అతను ఒక తెలివైన చేపను కలుసుకున్నాడు, అది "సంఖ్యల నది గుండా ప్రయాణంలో నాతో రా!" అన్నది. వారు కలిసి ఈదారు, మరియు చేప అతనికి ద్వీపాలను చూపించింది.

మొదటి ద్వీపంలో, ఒక మామిడి చెట్టు ఉంది. రెండవ ద్వీపంలో, రెండు గేదెలు ఉన్నాయి. మూడవ ద్వీపంలో, మూడు ధాన్యపు బుట్టలు ఉన్నాయి. అర్జున్ లెక్కించడం సరదాగా ఉందని గ్రహించాడు!

చేప అతనికి కూడిక నేర్పించింది. "నీకు రెండు చేపలు ఉంటే మరియు నేను మరో మూడు ఇస్తే, నీకు ఎన్ని ఉంటాయి?" అర్జున్ లెక్కించాడు: "ఐదు చేపలు!"

అర్జున్ మేల్కొన్నప్పుడు, అతను ఇకపై సంఖ్యలకు భయపడలేదు. గణితం ప్రతిచోట ఉందని - ప్రకృతిలో, రోజువారీ జీవితంలో, మరియు అతని కలలలో కూడా ఉందని అతను గ్రహించాడు.

ఆ రోజు నుండి, అర్జున్ తన గ్రామంలో అత్యుత్తమ గణిత విద్యార్థి అయ్యాడు, ఒకప్పుడు తనలాగే భయపడిన ఇతరులకు సహాయం చేస్తున్నాడు.`
    },
    audioUrl: '/audio/stories/river-of-numbers.mp3',
    imageUrl: '/images/stories/river-of-numbers.jpg',
    questions: [
      {
        question: 'What did the wise fish teach Arjun?',
        questionTelugu: 'తెలివైన చేప అర్జున్‌కి ఏమి నేర్పించింది?',
        options: [
          { text: 'Swimming', textTelugu: 'ఈత' },
          { text: 'Counting and addition', textTelugu: 'లెక్కించడం మరియు కూడిక' },
          { text: 'Fishing', textTelugu: 'చేపలు పట్టడం' }
        ],
        correctAnswer: 1
      }
    ],
    xpReward: 55,
    tags: ['mathematics', 'numbers', 'counting', 'education']
  },
  {
    id: 5,
    title: 'The Festival of Colors',
    titleTelugu: 'రంగుల పండుగ',
    category: 'culture',
    categoryTelugu: 'సంస్కృతి',
    difficulty: 'intermediate',
    duration: '7-9 minutes',
    durationTelugu: '7-9 నిమిషాలు',
    description: 'A vibrant story about tribal traditions, festivals, and the importance of cultural heritage.',
    descriptionTelugu: 'గిరిజన సంప్రదాయాలు, పండుగలు మరియు సాంస్కృతిక వారసత్వం యొక్క ప్రాముఖ్యత గురించి రంగురంగుల కథ.',
    content: {
      english: `Every year, the tribal villages gathered for a grand festival celebrating the harvest season. This year, young Kavya was chosen to lead the traditional dance.

Her grandmother taught her the ancient steps, each movement telling a story of their ancestors' connection with the land. "These dances are not just movements," grandmother said, "they are our history, our prayers, and our identity."

As Kavya practiced, she learned about the natural dyes her people used to color their clothes - turmeric for yellow, indigo for blue, and beetroot for red. She learned the songs that thanked the earth for its bounty and the rain for its blessing.

On the festival day, Kavya danced beautifully. Young children watched in awe, and elders nodded with pride. After the dance, she taught the steps to younger children, ensuring the tradition would continue.

Kavya realized that preserving culture doesn't mean staying in the past - it means carrying forward the wisdom and beauty of traditions while embracing the present.`,
      telugu: `ప్రతి సంవత్సరం, గిరిజన గ్రామాలు పంట సీజన్‌ను జరుపుకుంటూ గొప్ప పండుగ కోసం సమావేశమయ్యేవి. ఈ సంవత్సరం, యువ కావ్య సాంప్రదాయ నృత్యానికి నాయకత్వం వహించడానికి ఎంపికైంది.

ఆమె అమ్మమ్మ ఆమెకు పురాతన అడుగులు నేర్పించింది, ప్రతి కదలిక వారి పూర్వీకుల భూమితో సంబంధం యొక్క కథను చెబుతోంది. "ఈ నృత్యాలు కేవలం కదలికలు కావు," అమ్మమ్మ చెప్పింది, "అవి మన చరిత్ర, మన ప్రార్థనలు, మరియు మన గుర్తింపు."

కావ్య సాధన చేస్తుండగా, ఆమె ప్రజలు తమ బట్టలకు రంగు వేయడానికి ఉపయోగించే సహజ రంగుల గురించి నేర్చుకుంది - పసుపు పసుపు కోసం, నీలం నీలం కోసం, మరియు దుంపల ఎరుపు కోసం. ఆమె భూమికి దాని సమృద్ధికి మరియు వర్షానికి దాని ఆశీర్వాదానికి కృతజ్ఞతలు తెలిపే పాటలను నేర్చుకుంది.

పండుగ రోజున, కావ్య అందంగా నృత్యం చేసింది. చిన్న పిల్లలు విస్మయంతో చూశారు, మరియు పెద్దలు గర్వంతో తలలూపారు. నృత్యం తరువాత, ఆమె చిన్న పిల్లలకు అడుగులు నేర్పించింది, సంప్రదాయం కొనసాగుతుందని నిర్ధారించింది.

సంస్కృతిని సంరక్షించడం అంటే గతంలో ఉండటం కాదు - వర్తమానాన్ని స్వీకరిస్తూ సంప్రదాయాల జ్ఞానం మరియు అందాన్ని ముందుకు తీసుకెళ్లడం అని కావ్య గ్రహించింది.`
    },
    audioUrl: '/audio/stories/festival-of-colors.mp3',
    imageUrl: '/images/stories/festival-of-colors.jpg',
    questions: [
      {
        question: 'What did Kavya learn from her grandmother?',
        questionTelugu: 'కావ్య తన అమ్మమ్మ నుండి ఏమి నేర్చుకుంది?',
        options: [
          { text: 'Cooking recipes', textTelugu: 'వంట వంటకాలు' },
          { text: 'Traditional dance and cultural heritage', textTelugu: 'సాంప్రదాయ నృత్యం మరియు సాంస్కృతిక వారసత్వం' },
          { text: 'Farming techniques', textTelugu: 'వ్యవసాయ పద్ధతులు' }
        ],
        correctAnswer: 1
      }
    ],
    xpReward: 70,
    tags: ['culture', 'traditions', 'heritage', 'festivals', 'dance']
  },
  {
    id: 6,
    title: 'The Healing Garden',
    titleTelugu: 'వైద్య తోట',
    category: 'nature',
    categoryTelugu: 'ప్రకృతి',
    difficulty: 'intermediate',
    duration: '8-10 minutes',
    durationTelugu: '8-10 నిమిషాలు',
    description: 'A story about traditional medicine and the healing power of plants known to tribal communities.',
    descriptionTelugu: 'గిరిజన సమాజాలకు తెలిసిన సాంప్రదాయ వైద్యం మరియు మొక్కల వైద్య శక్తి గురించి కథ.',
    content: {
      english: `In a village nestled in the hills, there lived an elderly woman named Savitri who knew the secrets of every plant, tree, and herb. Her garden was known as the "Healing Garden" because she grew medicinal plants that could cure many ailments.

When young Kiran fell ill with a fever, the village doctor was far away. Savitri went to her garden and prepared a special tea using tulsi leaves, ginger, and turmeric. Within hours, Kiran's fever broke.

Impressed by this, Kiran began spending time with Savitri, learning about different plants. She learned that neem leaves could purify blood, aloe vera could heal wounds, and that ashwagandha could give strength.

Savitri taught Kiran that this knowledge was passed down through generations. "Our ancestors lived in harmony with nature," she said. "These plants are gifts that we must preserve and respect."

Kiran promised to protect this traditional knowledge. She started documenting all the plants and their uses, creating a book so that future generations would not lose this precious wisdom.

The healing garden became a place where modern medicine and traditional knowledge worked together, showing that both have important roles in keeping people healthy.`,
      telugu: `కొండల మధ్య ఉన్న గ్రామంలో, ప్రతి మొక్క, చెట్టు మరియు మూలికల రహస్యాలు తెలిసిన సావిత్రి అనే వృద్ధ మహిళ ఉండేది. ఆమె తోట "వైద్య తోట" అని పిలువబడింది ఎందుకంటే ఆమె అనేక వ్యాధులను నయం చేయగల ఔషధ మొక్కలను పెంచేది.

యువ కిరణ్ జ్వరంతో అనారోగ్యానికి గురైనప్పుడు, గ్రామ వైద్యుడు చాలా దూరంలో ఉన్నాడు. సావిత్రి తన తోటకు వెళ్లి తులసి ఆకులు, అల్లం మరియు పసుపు ఉపయోగించి ఒక ప్రత్యేక టీ తయారు చేసింది. గంటల్లో, కిరణ్ జ్వరం తగ్గింది.

దీనితో ఆకట్టుకున్న కిరణ్ సావిత్రితో సమయం గడపడం ప్రారంభించింది, వివిధ మొక్కల గురించి నేర్చుకుంటూ. ఆమె వేప ఆకులు రక్తాన్ని శుద్ధి చేయగలవని, అలోవెరా గాయాలను నయం చేయగలదని, మరియు అశ్వగంధ బలాన్ని ఇవ్వగలదని నేర్చుకుంది.

ఈ జ్ఞానం తరతరాలుగా అందించబడిందని సావిత్రి కిరణ్‌కు నేర్పించింది. "మన పూర్వీకులు ప్రకృతితో సామరస్యంగా జీవించారు," ఆమె చెప్పింది. "ఈ మొక్కలు మనం సంరక్షించాలి మరియు గౌరవించాలి అనే బహుమతులు."

ఈ సాంప్రదాయ జ్ఞానాన్ని రక్షించాలని కిరణ్ వాగ్దానం చేసింది. ఆమె అన్ని మొక్కలను మరియు వాటి ఉపయోగాలను డాక్యుమెంట్ చేయడం ప్రారంభించింది, భవిష్యత్ తరాలు ఈ విలువైన జ్ఞానాన్ని కోల్పోకుండా ఒక పుస్తకాన్ని సృష్టించింది.

వైద్య తోట ఆధునిక వైద్యం మరియు సాంప్రదాయ జ్ఞానం కలిసి పని చేసే ప్రదేశంగా మారింది, ప్రజలను ఆరోగ్యంగా ఉంచడంలో రెండూ ముఖ్యమైన పాత్రలు కలిగి ఉన్నాయని చూపిస్తూ.`
    },
    audioUrl: '/audio/stories/healing-garden.mp3',
    imageUrl: '/images/stories/healing-garden.jpg',
    questions: [
      {
        question: 'What did Savitri use to cure Kiran\'s fever?',
        questionTelugu: 'కిరణ్ జ్వరాన్ని నయం చేయడానికి సావిత్రి ఏమి ఉపయోగించింది?',
        options: [
          { text: 'Modern medicine', textTelugu: 'ఆధునిక ఔషధం' },
          { text: 'Tulsi, ginger, and turmeric tea', textTelugu: 'తులసి, అల్లం మరియు పసుపు టీ' },
          { text: 'Cold water', textTelugu: 'చల్లని నీరు' }
        ],
        correctAnswer: 1
      }
    ],
    xpReward: 80,
    tags: ['nature', 'traditional-medicine', 'health', 'plants', 'heritage']
  }
];

export const miniGames = [
  {
    id: 1,
    title: 'Telugu Alphabet Match',
    titleTelugu: 'తెలుగు అక్షరాల మ్యాచ్',
    category: 'literacy',
    categoryTelugu: 'అక్షరాస్యత',
    difficulty: 'beginner',
    duration: '3-5 minutes',
    durationTelugu: '3-5 నిమిషాలు',
    description: 'Match Telugu letters with their English equivalents and sounds.',
    descriptionTelugu: 'తెలుగు అక్షరాలను వాటి ఆంగ్ల సమానాలతో మరియు ధ్వనులతో జతపరచండి.',
    instructions: {
      english: 'Drag the Telugu letters to match with their English equivalents. Listen to the pronunciation and try to remember the sounds.',
      telugu: 'తెలుగు అక్షరాలను వాటి ఆంగ్ల సమానాలతో జతపరచడానికి లాగండి. ఉచ్చారణను వినండి మరియు ధ్వనులను గుర్తుంచుకోవడానికి ప్రయత్నించండి.'
    },
    gameData: {
      pairs: [
        { telugu: 'అ', english: 'A', sound: '/audio/letters/a.mp3' },
        { telugu: 'ఆ', english: 'AA', sound: '/audio/letters/aa.mp3' },
        { telugu: 'ఇ', english: 'I', sound: '/audio/letters/i.mp3' },
        { telugu: 'ఈ', english: 'II', sound: '/audio/letters/ii.mp3' },
        { telugu: 'ఉ', english: 'U', sound: '/audio/letters/u.mp3' },
        { telugu: 'ఊ', english: 'UU', sound: '/audio/letters/uu.mp3' }
      ]
    },
    xpReward: 30,
    tags: ['alphabet', 'pronunciation', 'matching']
  },
  {
    id: 2,
    title: 'Number Counting Game',
    titleTelugu: 'సంఖ్యల లెక్కింపు ఆట',
    category: 'mathematics',
    categoryTelugu: 'గణితం',
    difficulty: 'beginner',
    duration: '5-7 minutes',
    durationTelugu: '5-7 నిమిషాలు',
    description: 'Learn to count from 1 to 20 in both Telugu and English.',
    descriptionTelugu: 'తెలుగు మరియు ఆంగ్లంలో 1 నుండి 20 వరకు లెక్కించడం నేర్చుకోండి.',
    instructions: {
      english: 'Count the objects and select the correct number. Practice counting in both languages.',
      telugu: 'వస్తువులను లెక్కించండి మరియు సరైన సంఖ్యను ఎంచుకోండి. రెండు భాషలలో లెక్కించడం అభ్యసించండి.'
    },
    gameData: {
      numbers: [
        { number: 1, telugu: 'ఒకటి', english: 'One', objects: ['🍎'] },
        { number: 2, telugu: 'రెండు', english: 'Two', objects: ['🍎', '🍌'] },
        { number: 3, telugu: 'మూడు', english: 'Three', objects: ['🍎', '🍌', '🍊'] },
        { number: 4, telugu: 'నాలుగు', english: 'Four', objects: ['🍎', '🍌', '🍊', '🍇'] },
        { number: 5, telugu: 'అయిదు', english: 'Five', objects: ['🍎', '🍌', '🍊', '🍇', '🥭'] }
      ]
    },
    xpReward: 40,
    tags: ['numbers', 'counting', 'bilingual']
  },
  {
    id: 3,
    title: 'Word Building Challenge',
    titleTelugu: 'పద నిర్మాణ సవాలు',
    category: 'literacy',
    categoryTelugu: 'అక్షరాస్యత',
    difficulty: 'intermediate',
    duration: '7-10 minutes',
    durationTelugu: '7-10 నిమిషాలు',
    description: 'Build words using Telugu letters and learn their meanings.',
    descriptionTelugu: 'తెలుగు అక్షరాలను ఉపయోగించి పదాలను నిర్మించండి మరియు వాటి అర్థాలను నేర్చుకోండి.',
    instructions: {
      english: 'Arrange the letters to form meaningful words. Each word has a picture clue to help you.',
      telugu: 'అర్థవంతమైన పదాలను ఏర్పరచడానికి అక్షరాలను అమర్చండి. ప్రతి పదానికి మీకు సహాయం చేయడానికి చిత్ర సూచన ఉంది.'
    },
    gameData: {
      words: [
        {
          word: 'అమ్మ',
          meaning: 'Mother',
          meaningTelugu: 'తల్లి',
          letters: ['అ', 'మ', 'మ'],
          image: '/images/words/mother.jpg',
          audio: '/audio/words/amma.mp3'
        },
        {
          word: 'నాన్న',
          meaning: 'Father',
          meaningTelugu: 'తండ్రి',
          letters: ['న', 'న', 'న'],
          image: '/images/words/father.jpg',
          audio: '/audio/words/nanna.mp3'
        },
        {
          word: 'ఇల్లు',
          meaning: 'House',
          meaningTelugu: 'గృహం',
          letters: ['ఇ', 'ల', 'ల', 'ు'],
          image: '/images/words/house.jpg',
          audio: '/audio/words/illu.mp3'
        }
      ]
    },
    xpReward: 60,
    tags: ['words', 'spelling', 'vocabulary']
  }
];

export const getStoriesByCategory = (category) => {
  return stories.filter(story => story.category === category);
};

export const getGamesByCategory = (category) => {
  return miniGames.filter(game => game.category === category);
};

export const getStoriesByDifficulty = (difficulty) => {
  return stories.filter(story => story.difficulty === difficulty);
};

export const getGamesByDifficulty = (difficulty) => {
  return miniGames.filter(game => game.difficulty === difficulty);
};

export const searchStories = (query) => {
  const lowercaseQuery = query.toLowerCase();
  return stories.filter(story => 
    story.title.toLowerCase().includes(lowercaseQuery) ||
    story.titleTelugu.includes(query) ||
    story.description.toLowerCase().includes(lowercaseQuery) ||
    story.descriptionTelugu.includes(query) ||
    story.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery))
  );
};

export const searchGames = (query) => {
  const lowercaseQuery = query.toLowerCase();
  return miniGames.filter(game => 
    game.title.toLowerCase().includes(lowercaseQuery) ||
    game.titleTelugu.includes(query) ||
    game.description.toLowerCase().includes(lowercaseQuery) ||
    game.descriptionTelugu.includes(query) ||
    game.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery))
  );
};

export default {
  stories,
  miniGames,
  getStoriesByCategory,
  getGamesByCategory,
  getStoriesByDifficulty,
  getGamesByDifficulty,
  searchStories,
  searchGames
};
