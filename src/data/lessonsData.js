// Comprehensive Learning Data for Tribal Education App
// This file contains extensive lesson content for all learning categories

export const comprehensiveLessonsData = {
  letters: [
    // English Alphabet A-Z
    {
      id: 'letter-1',
      title: 'Letter 1 - అ',
      titleTelugu: 'అక్షరం 1 - అ',
      description: 'Learn the first letter of both alphabets with pronunciation',
      descriptionTelugu: 'రెండు వర్ణమాలల యొక్క మొదటి అక్షరాన్ని ఉచ్చారణతో నేర్చుకోండి',
      image: '/assets/images/a.png',
      duration: '5 min',
      difficulty: 'Beginner',
      progress: 0,
      isCompleted: false,
        steps: [
          {
            type: 'letter',
          content: '1',
          contentTelugu: 'అ',
          instruction: 'This is the letter 1. Listen to its sound and repeat.',
          instructionTelugu: 'ఇది A అక్షరం. దీని ధ్వనిని వినండి మరియు పునరావృతం చేయండి.',
            expectedAnswer: '1',
          expectedAnswerTelugu: 'ఆ',
          interactive: true,
          audioUrl: null,
          pronunciation: 'ah'
        },
        {
          type: 'word',
          content: 'Apple',
          contentTelugu: 'ఆపిల్',
          instruction: 'A is for Apple. Say "Apple"',
          instructionTelugu: 'A అనేది Apple కోసం. "Apple" అని చెప్పండి',
          expectedAnswer: 'apple',
          expectedAnswerTelugu: 'ఆపిల్',
            interactive: true,
          image: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=400'
        }
      ]
    },
    {
      id: 'letter-2',
      title: 'Letter 2 - ఆ',
      titleTelugu: 'అక్షరం 2 - ఆ',
      description: 'Learn the second letter with examples',
      descriptionTelugu: 'ఉదాహరణలతో రెండవ అక్షరాన్ని నేర్చుకోండి',
      image: '/assets/images/aa.png',
      duration: '5 min',
      difficulty: 'Beginner',
      progress: 0,
      isCompleted: false,
      steps: [
          {
            type: 'letter',
          content: 'ఆ',
          contentTelugu: 'ఆ',
          instruction: 'This is the letter 2. It makes the "aah" sound.',
          instructionTelugu: 'ఇది "ఆ" ధ్వని చేస్తుంది.',
          expectedAnswer: 'ఆ',
          expectedAnswerTelugu: 'ఆ',
            interactive: true,
          pronunciation: 'aaah'
        },
        {
          type: 'word',
          content: 'Ball',
          contentTelugu: 'బంతి',
          instruction: 'B is for Ball. Say "Ball"',
          instructionTelugu: 'B అనేది Ball కోసం. "Ball" అని చెప్పండి',
          expectedAnswer: 'ball',
          expectedAnswerTelugu: 'బంతి',
          interactive: true,
          image: '/assets/images/ball.png'
        }
      ]
    },
    {
      id: 'letter-3',
      title: 'Letter 3 - ఇ',
      titleTelugu: 'అక్షరం 3 - ఇ',
      description: 'Learn the third letter with examples',
      descriptionTelugu: 'ఉదాహరణలతో మూడవ అక్షరాన్ని నేర్చుకోండి',
      image: '/assets/images/e.png',
      duration: '5 min',
      difficulty: 'Beginner',
      progress: 0,
      isCompleted: false,
      steps: [
          {
            type: 'letter',
          content: '3',
          contentTelugu: 'ఇ',
          instruction: 'This is the letter 3. It makes the "e" sound.',
          instructionTelugu: 'ఇది 3 అక్షరం. ఇది "ఇ" ధ్వని చేస్తుంది.',
          expectedAnswer: '4',
          expectedAnswerTelugu: 'ఇ',
            interactive: true,
          pronunciation: 'e'
        },
        {
          type: 'word',
          content: 'Cat',
          contentTelugu: 'పిల్లి',
          instruction: 'C is for Cat. Say "Cat"',
          instructionTelugu: 'C అనేది Cat కోసం. "Cat" అని చెప్పండి',
          expectedAnswer: 'cat',
          expectedAnswerTelugu: 'పిల్లి',
          interactive: true,
          image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=400'
        }
      ]
    },
    {
      id: 'letter-5',
      title: 'Letter 5 - ఈ',
      titleTelugu: 'అక్షరం 5 - ఈ',
      description: 'Learn the fourth letter with examples',
      descriptionTelugu: 'ఉదాహరణలతో నాల్గవ అక్షరాన్ని నేర్చుకోండి',
      image: '/assets/images/ee.png',
      duration: '5 min',
      difficulty: 'Beginner',
      progress: 0,
      isCompleted: false,
      steps: [
          {
            type: 'letter',
          content: '5',
          contentTelugu: 'ఈ',
          instruction: 'This is the letter 5. It makes the "eee" sound.',
          instructionTelugu: 'ఇది 5 అక్షరం. ఇది "ఈ" ధ్వని చేస్తుంది.',
          expectedAnswer: '5',
          expectedAnswerTelugu: 'ఈ',
            interactive: true,
          pronunciation: 'eee'
        },
        {
          type: 'word',
          content: 'Dog',
          contentTelugu: 'కుక్క',
          instruction: 'D is for Dog. Say "Dog"',
          instructionTelugu: 'D అనేది Dog కోసం. "Dog" అని చెప్పండి',
          expectedAnswer: 'dog',
          expectedAnswerTelugu: 'కుక్క',
          interactive: true,
          image: 'https://images.unsplash.com/photo-1552053831-71594a27632d?w=400'
        }
      ]
    },
    {
      id: 'letter-e',
      title: 'Letter 6 - ఉ',
      titleTelugu: 'అక్షరం 6 - ఉ',
      description: 'Learn the sixth letter with examples',
      descriptionTelugu: 'ఉదాహరణలతో ఐదవ అక్షరాన్ని నేర్చుకోండి',
      image: '/assets/images/uh.png',
      duration: '5 min',
      difficulty: 'Beginner',
      progress: 0,
      isCompleted: false,
      steps: [
          {
            type: 'letter',
          content: 'E6',
          contentTelugu: 'ఉ',
          instruction: 'This is the letter 6. It makes the "uh" sound.',
          instructionTelugu: 'ఇది E అక్షరం. ఇది "ఉ" ధ్వని చేస్తుంది.',
          expectedAnswer: '6',
          expectedAnswerTelugu: 'ఉ',
            interactive: true,
          pronunciation: 'uh'
        },
        {
          type: 'word',
          content: 'Elephant',
          contentTelugu: 'ఏనుగు',
          instruction: 'E is for Elephant. Say "Elephant"',
          instructionTelugu: 'E అనేది Elephant కోసం. "Elephant" అని చెప్పండి',
          expectedAnswer: 'elephant',
          expectedAnswerTelugu: 'ఏనుగు',
          interactive: true,
          image: 'https://images.unsplash.com/photo-1564760055775-d63b17a55c44?w=400'
        }
      ]
    },
    {
      id: 'letter-7',
      title: 'Letter 7 - ఊ',
      titleTelugu: 'అక్షరం 7 - ఊ',
      description: 'Learn the seventh letter with examples',
      descriptionTelugu: 'ఉదాహరణలతో ఆరవ అక్షరాన్ని నేర్చుకోండి',
      image: '/assets/images/oooh.png',
      duration: '5 min',
      difficulty: 'Beginner',
      progress: 0,
      isCompleted: false,
        steps: [
          {
            type: 'letter',
          content: '7',
          contentTelugu: 'ఊ',
          instruction: 'This is the letter 7. It makes the "vooo" sound.',
          instructionTelugu: 'ఇది 7 అక్షరం. ఇది "ఊ" ధ్వని చేస్తుంది.',
          expectedAnswer: '7',
          expectedAnswerTelugu: 'ఊ',
            interactive: true,
          pronunciation: 'vooo'
        },
        {
          type: 'word',
          content: 'Fish',
          contentTelugu: 'చేప',
          instruction: 'F is for Fish. Say "Fish"',
          instructionTelugu: 'F అనేది Fish కోసం. "Fish" అని చెప్పండి',
          expectedAnswer: 'fish',
          expectedAnswerTelugu: 'చేప',
          interactive: true,
          image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400'
        }
      ]
    },
    {
      id: 'letter-g',
      title: 'Letter 8 - గ',
      titleTelugu: 'అక్షరం 8 - గ',
      description: 'Learn the eighth letter with examples',
      descriptionTelugu: 'ఉదాహరణలతో ఎనిమిది అక్షరాన్ని నేర్చుకోండి',
      image: '/assets/images/ga.jpg',
      duration: '5 min',
      difficulty: 'Beginner',
      progress: 0,
      isCompleted: false,
      steps: [
          {
            type: 'letter',
          content: 'Ga',
          contentTelugu: 'గ',
          instruction: 'This is the letter G. It makes the "guh" sound.',
          instructionTelugu: 'ఇది గ అక్షరం. ఇది "గ" ధ్వని చేస్తుంది.',
          expectedAnswer: 'గ',
          expectedAnswerTelugu: 'గ',
            interactive: true,
          pronunciation: 'jee'
        },
        {
          type: 'word',
          content: 'గాడిద',
          contentTelugu: 'గాడిద',
          instruction: 'Say "గాడిద"',
          instructionTelugu: '"గాడిద" అని చెప్పండి',
          expectedAnswer: 'గాడిద',
          expectedAnswerTelugu: 'గాడిద',
          interactive: true,
          image: '/assets/images/donkey.jpg'
        }
      ]
    },
    {
      id: 'letter-ha',
      title: 'Letter 9 - హ',
      titleTelugu: 'అక్షరం 8 - హ',
      description: 'Learn the ninth letter with examples',
      descriptionTelugu: 'ఉదాహరణలతో తొమ్మిది అక్షరాన్ని నేర్చుకోండి',
      image: '/assets/images/ha.png',
      duration: '5 min',
      difficulty: 'Beginner',
      progress: 0,
      isCompleted: false,
      steps: [
          {
            type: 'letter',
          content: 'Ha',
          contentTelugu: 'హ',
          instruction: 'This is the letter H. It makes the "huh" sound.',
          instructionTelugu: 'ఇది హ అక్షరం. ఇది "హ" ధ్వని చేస్తుంది.',
          expectedAnswer: 'హ',
          expectedAnswerTelugu: 'హ',
            interactive: true,
          pronunciation: 'haaa'
        },
        {
          type: 'word',
          content: 'Hamsa',
          contentTelugu: 'హంస',
          instruction: 'హ is for హంస. Say "హంస"',
          instructionTelugu: '"హంస" అని చెప్పండి',
          expectedAnswer: 'హంస',
          expectedAnswerTelugu: 'హంస',
          interactive: true,
          image: '/assets/images/hamsa.jpg'
        }
      ]
    },
    {
      id: 'letter-ఐ',
      title: 'Letter 10 - ఐ',
      titleTelugu: 'అక్షరం 10 - ఐ',
      description: 'Learn the tenth letter with examples',
      descriptionTelugu: 'ఉదాహరణలతో పది అక్షరాన్ని నేర్చుకోండి',
      image: '/assets/images/ay.jpg',
      duration: '5 min',
      difficulty: 'Beginner',
      progress: 0,
      isCompleted: false,
      steps: [
          {
            type: 'letter',
          content: 'ఐ',
          contentTelugu: 'ఐ',
          instruction: 'This is the letter ఐ. It makes the "i" sound.',
          instructionTelugu: 'ఇది ఐ అక్షరం. ',
          expectedAnswer: 'ఐ',
          expectedAnswerTelugu: 'ఐ',
            interactive: true,
          pronunciation: 'i'
        },
        {
          type: 'word',
          content: 'Ice Cream',
          contentTelugu: 'ఐస్ క్రీమ్',
          instruction: 'ఐ is for ఐస్ క్రీమ్. Say "ఐస్ క్రీమ్"',
          instructionTelugu: '"ఐస్ క్రీమ్" అని చెప్పండి',
          expectedAnswer: 'ఐస్ క్రీమ్',
          expectedAnswerTelugu: 'ఐస్ క్రీమ్',
          interactive: true,
          image: '/assets/images/icecream.jpg'
        }
      ]
    },
    {
      id: 'letter-జ',
      title: 'Letter 11 - జ',
      titleTelugu: 'అక్షరం 11 - జ',
      description: 'Learn the eleventh letter with examples',
      descriptionTelugu: 'ఉదాహరణలతో పదకొండు అక్షరాన్ని నేర్చుకోండి',
      image: '/assets/images/ja.png',
      duration: '5 min',
      difficulty: 'Beginner',
      progress: 0,
      isCompleted: false,
      steps: [
          {
            type: 'letter',
          content: 'Ja',
          contentTelugu: 'జ',
          instruction: 'This is the letter జ. It makes the "juh" sound.',
          instructionTelugu: 'ఇది జ అక్షరం. ఇది "జ" ధ్వని చేస్తుంది.',
          expectedAnswer: 'జ',
          expectedAnswerTelugu: 'జ',
            interactive: true,
          pronunciation: 'jaa'
        },
        {
          type: 'word',
          content: 'జలపాతం',
          contentTelugu: 'జలపాతం',
          instruction: 'జ is for జలపాతం. Say "జలపాతం"',
          instructionTelugu: '"జలపాతం" అని చెప్పండి',
          expectedAnswer: 'జలపాతం',
          expectedAnswerTelugu: 'జలపాతం',
          interactive: true,
          image: '/assets/images/jalapatham.jpg'
        }
      ]
    }
  ],

  numbers: [
    {
      id: 'number-1-5',
      title: 'Numbers 1-5 - సంఖ్యలు 1-5',
        titleTelugu: 'సంఖ్యలు 1-5',
      description: 'Learn to count from 1 to 5 in both languages',
      descriptionTelugu: 'రెండు భాషలలో 1 నుండి 5 వరకు లెక్కించడం నేర్చుకోండి',
      image: '/assets/images/1to5.jpg',
      duration: '8 min',
      difficulty: 'Beginner',
      progress: 0,
      isCompleted: false,
        steps: [
          {
          type: 'number',
          content: '1',
            contentTelugu: 'ఒకటి',
          instruction: 'This is number one. Count with me.',
          instructionTelugu: 'ఇది సంఖ్య ఒకటి. నాతో లెక్కించండి.',
          expectedAnswer: 'one',
          expectedAnswerTelugu: 'ఒకటి',
            interactive: true,
          image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400'
          },
          {
          type: 'number',
          content: '2',
            contentTelugu: 'రెండు',
          instruction: 'This is number two. Say "two".',
          instructionTelugu: 'ఇది సంఖ్య రెండు. "రెండు" అని చెప్పండి.',
          expectedAnswer: 'two',
          expectedAnswerTelugu: 'రెండు',
            interactive: true,
          image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400'
          },
          {
          type: 'number',
          content: '3',
            contentTelugu: 'మూడు',
          instruction: 'This is number three. Say "three".',
          instructionTelugu: 'ఇది సంఖ్య మూడు. "మూడు" అని చెప్పండి.',
          expectedAnswer: 'three',
          expectedAnswerTelugu: 'మూడు',
            interactive: true,
          image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400'
          },
          {
          type: 'number',
          content: '4',
            contentTelugu: 'నాలుగు',
          instruction: 'This is number four. Say "four".',
          instructionTelugu: 'ఇది సంఖ్య నాలుగు. "నాలుగు" అని చెప్పండి.',
          expectedAnswer: 'four',
          expectedAnswerTelugu: 'నాలుగు',
            interactive: true,
          image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400'
        },
        {
          type: 'number',
          content: '5',
          contentTelugu: 'అయిదు',
          instruction: 'This is number five. Say "five".',
          instructionTelugu: 'ఇది సంఖ్య అయిదు. "అయిదు" అని చెప్పండి.',
          expectedAnswer: 'five',
          expectedAnswerTelugu: 'అయిదు',
            interactive: true,
          image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400'
        }
      ]
    },
    {
      id: 'number-6-10',
      title: 'Numbers 6-10 - సంఖ్యలు 6-10',
      titleTelugu: 'సంఖ్యలు 6-10',
      description: 'Learn to count from 6 to 10 in both languages',
      descriptionTelugu: 'రెండు భాషలలో 6 నుండి 10 వరకు లెక్కించడం నేర్చుకోండి',
      image: '/assets/images/6to10.png',
      duration: '8 min',
      difficulty: 'Beginner',
      progress: 0,
      isCompleted: false,
      steps: [
        {
          type: 'number',
          content: '6',
          contentTelugu: 'ఆరు',
          instruction: 'This is number six. Say "six".',
          instructionTelugu: 'ఇది సంఖ్య ఆరు. "ఆరు" అని చెప్పండి.',
          expectedAnswer: 'six',
          expectedAnswerTelugu: 'ఆరు',
          interactive: true
        },
        {
          type: 'number',
          content: '7',
          contentTelugu: 'ఏడు',
          instruction: 'This is number seven. Say "seven".',
          instructionTelugu: 'ఇది సంఖ్య ఏడు. "ఏడు" అని చెప్పండి.',
          expectedAnswer: 'seven',
          expectedAnswerTelugu: 'ఏడు',
          interactive: true
        },
        {
          type: 'number',
          content: '8',
          contentTelugu: 'ఎనిమిది',
          instruction: 'This is number eight. Say "eight".',
          instructionTelugu: 'ఇది సంఖ్య ఎనిమిది. "ఎనిమిది" అని చెప్పండి.',
          expectedAnswer: 'eight',
          expectedAnswerTelugu: 'ఎనిమిది',
          interactive: true
        },
        {
          type: 'number',
          content: '9',
          contentTelugu: 'తొమ్మిది',
          instruction: 'This is number nine. Say "nine".',
          instructionTelugu: 'ఇది సంఖ్య తొమ్మిది. "తొమ్మిది" అని చెప్పండి.',
          expectedAnswer: 'nine',
          expectedAnswerTelugu: 'తొమ్మిది',
          interactive: true
        },
        {
          type: 'number',
          content: '10',
          contentTelugu: 'పది',
          instruction: 'This is number ten. Say "ten".',
          instructionTelugu: 'ఇది సంఖ్య పది. "పది" అని చెప్పండి.',
          expectedAnswer: 'ten',
          expectedAnswerTelugu: 'పది',
          interactive: true
        }
      ]
    },
    {
      id: 'number-11-15',
      title: 'Numbers 11-15 - సంఖ్యలు 11-15',
      titleTelugu: 'సంఖ్యలు 11-15',
      description: 'Learn to count from 11 to 15 in both languages',
      descriptionTelugu: 'రెండు భాషలలో 11 నుండి 15 వరకు లెక్కించడం నేర్చుకోండి',
      image: 'https://images.pexels.com/photos/5212352/pexels-photo-5212352.jpeg',
      duration: '10 min',
      difficulty: 'Intermediate',
      progress: 0,
      isCompleted: false,
      steps: [
        {
          type: 'number',
          content: '11',
          contentTelugu: 'పదకొండు',
          instruction: 'This is number eleven. Say "eleven".',
          instructionTelugu: 'ఇది సంఖ్య పదకొండు. "పదకొండు" అని చెప్పండి.',
          expectedAnswer: 'eleven',
          expectedAnswerTelugu: 'పదకొండు',
          interactive: true
        },
        {
          type: 'number',
          content: '12',
          contentTelugu: 'పన్నెండు',
          instruction: 'This is number twelve. Say "twelve".',
          instructionTelugu: 'ఇది సంఖ్య పన్నెండు. "పన్నెండు" అని చెప్పండి.',
          expectedAnswer: 'twelve',
          expectedAnswerTelugu: 'పన్నెండు',
          interactive: true
        },
        {
          type: 'number',
          content: '13',
          contentTelugu: 'పదమూడు',
          instruction: 'This is number thirteen. Say "thirteen".',
          instructionTelugu: 'ఇది సంఖ్య పదమూడు. "పదమూడు" అని చెప్పండి.',
          expectedAnswer: 'thirteen',
          expectedAnswerTelugu: 'పదమూడు',
          interactive: true
        },
        {
          type: 'number',
          content: '14',
          contentTelugu: 'పద్నాలుగు',
          instruction: 'This is number fourteen. Say "fourteen".',
          instructionTelugu: 'ఇది సంఖ్య పద్నాలుగు. "పద్నాలుగు" అని చెప్పండి.',
          expectedAnswer: 'fourteen',
          expectedAnswerTelugu: 'పద్నాలుగు',
          interactive: true
        },
        {
          type: 'number',
          content: '15',
          contentTelugu: 'పదిహేను',
          instruction: 'This is number fifteen. Say "fifteen".',
          instructionTelugu: 'ఇది సంఖ్య పదిహేను. "పదిహేను" అని చెప్పండి.',
          expectedAnswer: 'fifteen',
          expectedAnswerTelugu: 'పదిహేను',
          interactive: true
        }
      ]
    },
    {
      id: 'number-16-20',
      title: 'Numbers 16-20 - సంఖ్యలు 16-20',
      titleTelugu: 'సంఖ్యలు 16-20',
      description: 'Learn to count from 16 to 20 in both languages',
      descriptionTelugu: 'రెండు భాషలలో 16 నుండి 20 వరకు లెక్కించడం నేర్చుకోండి',
      image: 'https://images.pexels.com/photos/5212353/pexels-photo-5212353.jpeg',
      duration: '10 min',
      difficulty: 'Intermediate',
      progress: 0,
      isCompleted: false,
      steps: [
        {
          type: 'number',
          content: '16',
          contentTelugu: 'పదహారు',
          instruction: 'This is number sixteen. Say "sixteen".',
          instructionTelugu: 'ఇది సంఖ్య పదహారు. "పదహారు" అని చెప్పండి.',
          expectedAnswer: 'sixteen',
          expectedAnswerTelugu: 'పదహారు',
          interactive: true
        },
        {
          type: 'number',
          content: '17',
          contentTelugu: 'పదిహేడు',
          instruction: 'This is number seventeen. Say "seventeen".',
          instructionTelugu: 'ఇది సంఖ్య పదిహేడు. "పదిహేడు" అని చెప్పండి.',
          expectedAnswer: 'seventeen',
          expectedAnswerTelugu: 'పదిహేడు',
          interactive: true
        },
        {
          type: 'number',
          content: '18',
          contentTelugu: 'పద్దెనిమిది',
          instruction: 'This is number eighteen. Say "eighteen".',
          instructionTelugu: 'ఇది సంఖ్య పద్దెనిమిది. "పద్దెనిమిది" అని చెప్పండి.',
          expectedAnswer: 'eighteen',
          expectedAnswerTelugu: 'పద్దెనిమిది',
          interactive: true
        },
        {
          type: 'number',
          content: '19',
          contentTelugu: 'పందొమ్మిది',
          instruction: 'This is number nineteen. Say "nineteen".',
          instructionTelugu: 'ఇది సంఖ్య పందొమ్మిది. "పందొమ్మిది" అని చెప్పండి.',
          expectedAnswer: 'nineteen',
          expectedAnswerTelugu: 'పందొమ్మిది',
          interactive: true
        },
        {
          type: 'number',
          content: '20',
          contentTelugu: 'ఇరవై',
          instruction: 'This is number twenty. Say "twenty".',
          instructionTelugu: 'ఇది సంఖ్య ఇరవై. "ఇరవై" అని చెప్పండి.',
          expectedAnswer: 'twenty',
          expectedAnswerTelugu: 'ఇరవై',
          interactive: true
        }
      ]
    },
    {
      id: 'counting-objects',
      title: 'Counting Objects - వస్తువులను లెక్కించడం',
      titleTelugu: 'వస్తువులను లెక్కించడం',
      description: 'Practice counting real objects',
      descriptionTelugu: 'నిజమైన వస్తువులను లెక్కించడం అభ్యసించండి',
      image: '/assets/images/counting.jpg',
      duration: '10 min',
      difficulty: 'Intermediate',
      progress: 0,
      isCompleted: false,
      steps: [
        {
          type: 'counting',
          content: 'Count the apples',
          contentTelugu: 'ఆపిల్లను లెక్కించండి',
          instruction: 'How many apples do you see? Count them.',
          instructionTelugu: 'మీరు ఎన్ని ఆపిల్లు చూస్తున్నారు? వాటిని లెక్కించండి.',
          expectedAnswer: 'three',
          expectedAnswerTelugu: 'మూడు',
          interactive: true,
          image: '/assets/images/apple.jpg',
          correctCount: 3
        }
      ]
    },
    {
      id: 'counting-animals',
      title: 'Counting Animals - జంతువులను లెక్కించడం',
      titleTelugu: 'జంతువులను లెక్కించడం',
      description: 'Practice counting animals',
      descriptionTelugu: 'జంతువులను లెక్కించడం అభ్యసించండి',
      image: '/assets/images/animal.jpg',
      duration: '12 min',
      difficulty: 'Intermediate',
      progress: 0,
      isCompleted: false,
      steps: [
        {
          type: 'counting',
          content: 'Count the dogs',
          contentTelugu: 'కుక్కలను లెక్కించండి',
          instruction: 'How many dogs do you see? Count them.',
          instructionTelugu: 'మీరు ఎన్ని కుక్కలు చూస్తున్నారు? వాటిని లెక్కించండి.',
          expectedAnswer: 'one',
          expectedAnswerTelugu: 'ఒకటి',
          interactive: true,
          image: 'https://images.unsplash.com/photo-1552053831-71594a27632d?w=400',
          correctCount: 1
        }
      ]
    },
    {
      id: 'addition-basics',
      title: 'Basic Addition - ప్రాథమిక కూడిక',
      titleTelugu: 'ప్రాథమిక కూడిక',
      description: 'Learn basic addition with numbers 1-10',
      descriptionTelugu: '1-10 సంఖ్యలతో ప్రాథమిక కూడిక నేర్చుకోండి',
      image: '/assets/images/add.jpeg',
      duration: '15 min',
      difficulty: 'Intermediate',
      progress: 0,
      isCompleted: false,
      steps: [
        {
          type: 'addition',
          content: '2 + 3 = ?',
          contentTelugu: '2 + 3 = ?',
          instruction: 'What is 2 plus 3? Say the answer.',
          instructionTelugu: '2 కు 3 ఎంత? జవాబు చెప్పండి.',
          expectedAnswer: 'five',
          expectedAnswerTelugu: 'అయిదు',
          interactive: true
        }
      ]
    },
    {
      id: 'subtraction-basics',
      title: 'Basic Subtraction - ప్రాథమిక తీసివేత',
      titleTelugu: 'ప్రాథమిక తీసివేత',
      description: 'Learn basic subtraction with numbers 1-10',
      descriptionTelugu: '1-10 సంఖ్యలతో ప్రాథమిక తీసివేత నేర్చుకోండి',
      image: '/assets/images/sub.jpg',
      duration: '15 min',
      difficulty: 'Intermediate',
      progress: 0,
      isCompleted: false,
      steps: [
        {
          type: 'subtraction',
          content: '5 - 2 = ?',
          contentTelugu: '5 - 2 = ?',
          instruction: 'What is 5 minus 2? Say the answer.',
          instructionTelugu: '5 నుండి 2 ఎంత? జవాబు చెప్పండి.',
          expectedAnswer: 'three',
          expectedAnswerTelugu: 'మూడు',
          interactive: true
        }
      ]
    }
  ],

  words: [
    {
      id: 'family-words',
      title: 'Family Words - కుటుంబ పదాలు',
      titleTelugu: 'కుటుంబ పదాలు',
      description: 'Learn family member names in both languages',
      descriptionTelugu: 'రెండు భాషలలో కుటుంబ సభ్యుల పేర్లు నేర్చుకోండి',
      image: '/assets/images/fam1.jpg',
      duration: '12 min',
      difficulty: 'Beginner',
      progress: 0,
      isCompleted: false,
      steps: [
        {
          type: 'word',
          content: 'Mother',
          contentTelugu: 'అమ్మ',
          instruction: 'This is Mother. Say "Mother".',
          instructionTelugu: 'ఇది అమ్మ. "అమ్మ" అని చెప్పండి.',
          expectedAnswer: 'mother',
          expectedAnswerTelugu: 'అమ్మ',
          interactive: true,
          image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400'
        },
        {
          type: 'word',
          content: 'Father',
          contentTelugu: 'నాన్న',
          instruction: 'This is Father. Say "Father".',
          instructionTelugu: 'ఇది నాన్న. "నాన్న" అని చెప్పండి.',
          expectedAnswer: 'father',
          expectedAnswerTelugu: 'నాన్న',
          interactive: true,
          image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400'
        },
        {
          type: 'word',
          content: 'Brother',
          contentTelugu: 'సోదరుడు',
          instruction: 'This is Brother. Say "Brother".',
          instructionTelugu: 'ఇది సోదరుడు. "సోదరుడు" అని చెప్పండి.',
          expectedAnswer: 'brother',
          expectedAnswerTelugu: 'సోదరుడు',
          interactive: true,
          image: '/assets/images/friend.jpg'
        },
        {
          type: 'word',
          content: 'Sister',
          contentTelugu: 'సోదరి',
          instruction: 'This is Sister. Say "Sister".',
          instructionTelugu: 'ఇది సోదరి. "సోదరి" అని చెప్పండి.',
          expectedAnswer: 'sister',
          expectedAnswerTelugu: 'సోదరి',
          interactive: true,
          image: '/assets/images/sister.jpg'
        }
      ]
    },
    {
      id: 'extended-family-words',
      title: 'Extended Family - విస్తృత కుటుంబం',
      titleTelugu: 'విస్తృత కుటుంబం',
      description: 'Learn extended family member names',
      descriptionTelugu: 'విస్తృత కుటుంబ సభ్యుల పేర్లు నేర్చుకోండి',
      image: '/assets/images/fam2.jpg',
      duration: '15 min',
      difficulty: 'Beginner',
      progress: 0,
      isCompleted: false,
        steps: [
          {
            type: 'word',
          content: 'Grandmother',
          contentTelugu: 'అమ్మమ్మ',
          instruction: 'This is Grandmother. Say "Grandmother".',
          instructionTelugu: 'ఇది అమ్మమ్మ. "అమ్మమ్మ" అని చెప్పండి.',
          expectedAnswer: 'grandmother',
          expectedAnswerTelugu: 'అమ్మమ్మ',
            interactive: true,
          image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400'
          },
          {
            type: 'word',
          content: 'Grandfather',
          contentTelugu: 'తాత',
          instruction: 'This is Grandfather. Say "Grandfather".',
          instructionTelugu: 'ఇది తాత. "తాత" అని చెప్పండి.',
          expectedAnswer: 'grandfather',
          expectedAnswerTelugu: 'తాత',
            interactive: true,
          image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400'
          },
          {
            type: 'word',
          content: 'Uncle',
          contentTelugu: 'మామ',
          instruction: 'This is Uncle. Say "Uncle".',
          instructionTelugu: 'ఇది మామ. "మామ" అని చెప్పండి.',
          expectedAnswer: 'uncle',
          expectedAnswerTelugu: 'మామ',
            interactive: true,
          image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400'
          },
          {
            type: 'word',
          content: 'Aunt',
          contentTelugu: 'అత్త',
          instruction: 'This is Aunt. Say "Aunt".',
          instructionTelugu: 'ఇది అత్త. "అత్త" అని చెప్పండి.',
          expectedAnswer: 'aunt',
          expectedAnswerTelugu: 'అత్త',
            interactive: true,
          image: '/assets/images/aunt.png'
        }
      ]
    },
    {
      id: 'animal-words',
      title: 'Animal Words - జంతు పదాలు',
      titleTelugu: 'జంతు పదాలు',
      description: 'Learn animal names in both languages',
      descriptionTelugu: 'రెండు భాషలలో జంతువుల పేర్లు నేర్చుకోండి',
      image: '/assets/images/ani1.jpg',
      duration: '15 min',
      difficulty: 'Beginner',
      progress: 0,
      isCompleted: false,
      steps: [
          {
            type: 'word',
          content: 'Dog',
          contentTelugu: 'కుక్క',
          instruction: 'This is a Dog. Say "Dog".',
          instructionTelugu: 'ఇది కుక్క. "కుక్క" అని చెప్పండి.',
          expectedAnswer: 'dog',
          expectedAnswerTelugu: 'కుక్క',
            interactive: true,
          image: 'https://images.unsplash.com/photo-1552053831-71594a27632d?w=400'
        },
        {
          type: 'word',
          content: 'Cat',
          contentTelugu: 'పిల్లి',
          instruction: 'This is a Cat. Say "Cat".',
          instructionTelugu: 'ఇది పిల్లి. "పిల్లి" అని చెప్పండి.',
          expectedAnswer: 'cat',
          expectedAnswerTelugu: 'పిల్లి',
          interactive: true,
          image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=400'
        },
        {
          type: 'word',
          content: 'Cow',
          contentTelugu: 'ఆవు',
          instruction: 'This is a Cow. Say "Cow".',
          instructionTelugu: 'ఇది ఆవు. "ఆవు" అని చెప్పండి.',
          expectedAnswer: 'cow',
          expectedAnswerTelugu: 'ఆవు',
          interactive: true,
          image: 'https://images.unsplash.com/photo-1560114928-40f1f1eb26a0?w=400'
        },
        {
          type: 'word',
          content: 'Bird',
          contentTelugu: 'పక్షి',
          instruction: 'This is a Bird. Say "Bird".',
          instructionTelugu: 'ఇది పక్షి. "పక్షి" అని చెప్పండి.',
          expectedAnswer: 'bird',
          expectedAnswerTelugu: 'పక్షి',
          interactive: true,
          image: 'https://images.unsplash.com/photo-1444464666168-49d633b86797?w=400'
        }
      ]
    },
    {
      id: 'wild-animals',
      title: 'Wild Animals - అడవి జంతువులు',
      titleTelugu: 'అడవి జంతువులు',
      description: 'Learn wild animal names',
      descriptionTelugu: 'అడవి జంతువుల పేర్లు నేర్చుకోండి',
      image: '/assets/images/ani2.jpg',
      duration: '15 min',
      difficulty: 'Intermediate',
      progress: 0,
      isCompleted: false,
        steps: [
          {
            type: 'word',
          content: 'Lion',
          contentTelugu: 'సింహం',
          instruction: 'This is a Lion. Say "Lion".',
          instructionTelugu: 'ఇది సింహం. "సింహం" అని చెప్పండి.',
          expectedAnswer: 'lion',
          expectedAnswerTelugu: 'సింహం',
            interactive: true,
          image: 'https://images.unsplash.com/photo-1546182990-dffeafbe841d?w=400'
          },
          {
            type: 'word',
          content: 'Tiger',
          contentTelugu: 'పులి',
          instruction: 'This is a Tiger. Say "Tiger".',
          instructionTelugu: 'ఇది పులి. "పులి" అని చెప్పండి.',
          expectedAnswer: 'tiger',
          expectedAnswerTelugu: 'పులి',
            interactive: true,
          image: 'https://images.unsplash.com/photo-1561731216-c3a4d99437d5?w=400'
          },
          {
            type: 'word',
          content: 'Elephant',
          contentTelugu: 'ఏనుగు',
          instruction: 'This is an Elephant. Say "Elephant".',
          instructionTelugu: 'ఇది ఏనుగు. "ఏనుగు" అని చెప్పండి.',
          expectedAnswer: 'elephant',
          expectedAnswerTelugu: 'ఏనుగు',
            interactive: true,
          image: 'https://images.unsplash.com/photo-1564760055775-d63b17a55c44?w=400'
          },
          {
            type: 'word',
          content: 'Monkey',
          contentTelugu: 'కోతి',
          instruction: 'This is a Monkey. Say "Monkey".',
          instructionTelugu: 'ఇది కోతి. "కోతి" అని చెప్పండి.',
          expectedAnswer: 'monkey',
          expectedAnswerTelugu: 'కోతి',
            interactive: true,
          image: 'https://images.unsplash.com/photo-1540573133985-87b6da6d54a9?w=400'
        }
      ]
    },
    {
      id: 'food-words',
      title: 'Food Words - ఆహార పదాలు',
      titleTelugu: 'ఆహార పదాలు',
      description: 'Learn food names in both languages',
      descriptionTelugu: 'రెండు భాషలలో ఆహార పదాలను నేర్చుకోండి',
      image: '/assets/images/food.jpg',
      duration: '12 min',
      difficulty: 'Beginner',
      progress: 0,
      isCompleted: false,
      steps: [
          {
            type: 'word',
          content: 'Rice',
          contentTelugu: 'బియ్యం',
          instruction: 'This is Rice. Say "Rice".',
          instructionTelugu: 'ఇది బియ్యం. "బియ్యం" అని చెప్పండి.',
          expectedAnswer: 'rice',
          expectedAnswerTelugu: 'బియ్యం',
            interactive: true,
          image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400'
        },
        {
          type: 'word',
          content: 'Water',
          contentTelugu: 'నీరు',
          instruction: 'This is Water. Say "Water".',
          instructionTelugu: 'ఇది నీరు. "నీరు" అని చెప్పండి.',
          expectedAnswer: 'water',
          expectedAnswerTelugu: 'నీరు',
          interactive: true,
          image: 'https://images.unsplash.com/photo-1548839140-5b7c6b1c0b0a?w=400'
        },
        {
          type: 'word',
          content: 'Milk',
          contentTelugu: 'పాలు',
          instruction: 'This is Milk. Say "Milk".',
          instructionTelugu: 'ఇది పాలు. "పాలు" అని చెప్పండి.',
          expectedAnswer: 'milk',
          expectedAnswerTelugu: 'పాలు',
          interactive: true,
          image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?w=400'
        }
      ]
    },
    {
      id: 'fruits-words',
      title: 'Fruits - పండ్లు',
      titleTelugu: 'పండ్లు',
      description: 'Learn fruit names in both languages',
      descriptionTelugu: 'రెండు భాషలలో పండ్ల పేర్లు నేర్చుకోండి',
      image: '/assets/images/fruit.jpg',
      duration: '15 min',
      difficulty: 'Beginner',
      progress: 0,
      isCompleted: false,
      steps: [
        {
          type: 'word',
          content: 'Apple',
          contentTelugu: 'ఆపిల్',
          instruction: 'This is an Apple. Say "Apple".',
          instructionTelugu: 'ఇది ఆపిల్. "ఆపిల్" అని చెప్పండి.',
          expectedAnswer: 'apple',
          expectedAnswerTelugu: 'ఆపిల్',
          interactive: true,
          image: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=400'
        },
        {
          type: 'word',
          content: 'Banana',
          contentTelugu: 'అరటి',
          instruction: 'This is a Banana. Say "Banana".',
          instructionTelugu: 'ఇది అరటి. "అరటి" అని చెప్పండి.',
          expectedAnswer: 'banana',
          expectedAnswerTelugu: 'అరటి',
          interactive: true,
          image: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=400'
        },
        {
          type: 'word',
          content: 'Orange',
          contentTelugu: 'నారింజ',
          instruction: 'This is an Orange. Say "Orange".',
          instructionTelugu: 'ఇది నారింజ. "నారింజ" అని చెప్పండి.',
          expectedAnswer: 'orange',
          expectedAnswerTelugu: 'నారింజ',
          interactive: true,
          image: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=400'
        },
        {
          type: 'word',
          content: 'Mango',
          contentTelugu: 'మామిడి',
          instruction: 'This is a Mango. Say "Mango".',
          instructionTelugu: 'ఇది మామిడి. "మామిడి" అని చెప్పండి.',
          expectedAnswer: 'mango',
          expectedAnswerTelugu: 'మామిడి',
          interactive: true,
          image: 'https://images.unsplash.com/photo-1605027990121-4754801905e5?w=400'
        }
      ]
    },
    {
      id: 'vegetables-words',
      title: 'Vegetables - కూరగాయలు',
      titleTelugu: 'కూరగాయలు',
      description: 'Learn vegetable names in both languages',
      descriptionTelugu: 'రెండు భాషలలో కూరగాయల పేర్లు నేర్చుకోండి',
      image: '/assets/images/veg.jpg',
      duration: '15 min',
      difficulty: 'Beginner',
      progress: 0,
      isCompleted: false,
        steps: [
          {
          type: 'word',
          content: 'Carrot',
          contentTelugu: 'క్యారెట్',
          instruction: 'This is a Carrot. Say "Carrot".',
          instructionTelugu: 'ఇది క్యారెట్. "క్యారెట్" అని చెప్పండి.',
          expectedAnswer: 'carrot',
          expectedAnswerTelugu: 'క్యారెట్',
            interactive: true,
          image: 'https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=400'
        },
        {
          type: 'word',
          content: 'Tomato',
          contentTelugu: 'టమాట',
          instruction: 'This is a Tomato. Say "Tomato".',
          instructionTelugu: 'ఇది టమాట. "టమాట" అని చెప్పండి.',
          expectedAnswer: 'tomato',
          expectedAnswerTelugu: 'టమాట',
            interactive: true,
          image: 'https://images.unsplash.com/photo-1592924357228-91b4fc2f8f3a?w=400'
        },
        {
          type: 'word',
          content: 'Onion',
          contentTelugu: 'ఉల్లి',
          instruction: 'This is an Onion. Say "Onion".',
          instructionTelugu: 'ఇది ఉల్లి. "ఉల్లి" అని చెప్పండి.',
          expectedAnswer: 'onion',
          expectedAnswerTelugu: 'ఉల్లి',
            interactive: true,
          image: 'https://images.unsplash.com/photo-1518977956812-cd3dbadaaf31?w=400'
        },
        {
          type: 'word',
          content: 'Potato',
          contentTelugu: 'బంగాళదుంప',
          instruction: 'This is a Potato. Say "Potato".',
          instructionTelugu: 'ఇది బంగాళదుంప. "బంగాళదుంప" అని చెప్పండి.',
          expectedAnswer: 'potato',
          expectedAnswerTelugu: 'బంగాళదుంప',
          interactive: true,
          image: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=400'
        }
      ]
    },
    {
      id: 'body-parts',
      title: 'Body Parts - శరీర భాగాలు',
      titleTelugu: 'శరీర భాగాలు',
      description: 'Learn body part names in both languages',
      descriptionTelugu: 'రెండు భాషలలో శరీర భాగాల పేర్లు నేర్చుకోండి',
      image: '/assets/images/body.jpeg',
      duration: '15 min',
      difficulty: 'Beginner',
      progress: 0,
      isCompleted: false,
      steps: [
        {
          type: 'word',
          content: 'Head',
          contentTelugu: 'తల',
          instruction: 'This is Head. Say "Head".',
          instructionTelugu: 'ఇది తల. "తల" అని చెప్పండి.',
          expectedAnswer: 'head',
          expectedAnswerTelugu: 'తల',
          interactive: true,
          image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400'
        },
        {
          type: 'word',
          content: 'Hand',
          contentTelugu: 'చేయి',
          instruction: 'This is Hand. Say "Hand".',
          instructionTelugu: 'ఇది చేయి. "చేయి" అని చెప్పండి.',
          expectedAnswer: 'hand',
          expectedAnswerTelugu: 'చేయి',
          interactive: true,
          image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400'
        },
        {
          type: 'word',
          content: 'Eye',
          contentTelugu: 'కన్ను',
          instruction: 'This is Eye. Say "Eye".',
          instructionTelugu: 'ఇది కన్ను. "కన్ను" అని చెప్పండి.',
          expectedAnswer: 'eye',
          expectedAnswerTelugu: 'కన్ను',
          interactive: true,
          image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400'
        },
        {
          type: 'word',
          content: 'Leg',
          contentTelugu: 'కాలు',
          instruction: 'This is Leg. Say "Leg".',
          instructionTelugu: 'ఇది కాలు. "కాలు" అని చెప్పండి.',
          expectedAnswer: 'leg',
          expectedAnswerTelugu: 'కాలు',
          interactive: true,
          image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400'
        }
      ]
    }
  ],

  sentences: [
    {
      id: 'greeting-sentences',
      title: 'Greeting Sentences - స్వాగత వాక్యాలు',
      titleTelugu: 'స్వాగత వాక్యాలు',
      description: 'Learn common greeting sentences',
      descriptionTelugu: 'సాధారణ స్వాగత వాక్యాలను నేర్చుకోండి',
      image: '/assets/images/greet.jpeg',
      duration: '15 min',
      difficulty: 'Intermediate',
      progress: 0,
      isCompleted: false,
      steps: [
        {
          type: 'sentence',
          content: 'Hello, how are you?',
          contentTelugu: 'హలో, మీరు ఎలా ఉన్నారు?',
          instruction: 'Say this greeting sentence.',
          instructionTelugu: 'ఈ స్వాగత వాక్యాన్ని చెప్పండి.',
          expectedAnswer: 'hello how are you',
          expectedAnswerTelugu: 'హలో మీరు ఎలా ఉన్నారు',
          interactive: true
        },
        {
          type: 'sentence',
          content: 'Good morning',
          contentTelugu: 'శుభోదయం',
          instruction: 'Say "Good morning".',
          instructionTelugu: '"శుభోదయం" అని చెప్పండి.',
          expectedAnswer: 'good morning',
          expectedAnswerTelugu: 'శుభోదయం',
          interactive: true
        },
        {
          type: 'sentence',
          content: 'Thank you very much',
          contentTelugu: 'చాలా ధన్యవాదాలు',
          instruction: 'Say "Thank you very much".',
          instructionTelugu: '"చాలా ధన్యవాదాలు" అని చెప్పండి.',
          expectedAnswer: 'thank you very much',
          expectedAnswerTelugu: 'చాలా ధన్యవాదాలు',
          interactive: true
        }
      ]
    },
    {
      id: 'daily-sentences',
      title: 'Daily Use Sentences - రోజువారీ వాక్యాలు',
      titleTelugu: 'రోజువారీ వాక్యాలు',
      description: 'Learn sentences for daily use',
      descriptionTelugu: 'రోజువారీ ఉపయోగం కోసం వాక్యాలను నేర్చుకోండి',
      image: '/assets/images/daily.jpg',
      duration: '18 min',
      difficulty: 'Intermediate',
      progress: 0,
      isCompleted: false,
      steps: [
        {
          type: 'sentence',
          content: 'I am hungry',
          contentTelugu: 'నాకు ఆకలి వేస్తోంది',
          instruction: 'Say "I am hungry".',
          instructionTelugu: '"నాకు ఆకలి వేస్తోంది" అని చెప్పండి.',
          expectedAnswer: 'i am hungry',
          expectedAnswerTelugu: 'నాకు ఆకలి వేస్తోంది',
          interactive: true
        },
        {
          type: 'sentence',
          content: 'Where is the school?',
          contentTelugu: 'పాఠశాల ఎక్కడ ఉంది?',
          instruction: 'Say "Where is the school?".',
          instructionTelugu: '"పాఠశాల ఎక్కడ ఉంది?" అని చెప్పండి.',
          expectedAnswer: 'where is the school',
          expectedAnswerTelugu: 'పాఠశాల ఎక్కడ ఉంది',
          interactive: true
        },
        {
          type: 'sentence',
          content: 'I want to learn',
          contentTelugu: 'నేను నేర్చుకోవాలి అనుకుంటున్నాను',
          instruction: 'Say "I want to learn".',
          instructionTelugu: '"నేను నేర్చుకోవాలి అనుకుంటున్నాను" అని చెప్పండి.',
          expectedAnswer: 'i want to learn',
          expectedAnswerTelugu: 'నేను నేర్చుకోవాలి అనుకుంటున్నాను',
          interactive: true
        }
      ]
    },
    {
      id: 'question-sentences',
      title: 'Question Sentences - ప్రశ్న వాక్యాలు',
      titleTelugu: 'ప్రశ్న వాక్యాలు',
      description: 'Learn how to ask questions',
      descriptionTelugu: 'ప్రశ్నలు ఎలా అడగాలో నేర్చుకోండి',
      image: '/assets/images/quest.jpeg',
      duration: '20 min',
      difficulty: 'Intermediate',
      progress: 0,
      isCompleted: false,
      steps: [
        {
          type: 'sentence',
          content: 'What is your name?',
          contentTelugu: 'మీ పేరు ఏమిటి?',
          instruction: 'Ask "What is your name?".',
          instructionTelugu: '"మీ పేరు ఏమిటి?" అని అడగండి.',
          expectedAnswer: 'what is your name',
          expectedAnswerTelugu: 'మీ పేరు ఏమిటి',
          interactive: true
        },
        {
          type: 'sentence',
          content: 'How old are you?',
          contentTelugu: 'మీ వయస్సు ఎంత?',
          instruction: 'Ask "How old are you?".',
          instructionTelugu: '"మీ వయస్సు ఎంత?" అని అడగండి.',
          expectedAnswer: 'how old are you',
          expectedAnswerTelugu: 'మీ వయస్సు ఎంత',
          interactive: true
        },
        {
          type: 'sentence',
          content: 'Where do you live?',
          contentTelugu: 'మీరు ఎక్కడ నివసిస్తున్నారు?',
          instruction: 'Ask "Where do you live?".',
          instructionTelugu: '"మీరు ఎక్కడ నివసిస్తున్నారు?" అని అడగండి.',
          expectedAnswer: 'where do you live',
          expectedAnswerTelugu: 'మీరు ఎక్కడ నివసిస్తున్నారు',
          interactive: true
        }
      ]
    },
    {
      id: 'family-sentences',
      title: 'Family Sentences - కుటుంబ వాక్యాలు',
      titleTelugu: 'కుటుంబ వాక్యాలు',
      description: 'Learn sentences about family',
      descriptionTelugu: 'కుటుంబం గురించి వాక్యాలను నేర్చుకోండి',
      image: '/assets/images/family.png',
      duration: '18 min',
      difficulty: 'Intermediate',
      progress: 0,
      isCompleted: false,
      steps: [
        {
          type: 'sentence',
          content: 'This is my mother',
          contentTelugu: 'ఇది నా అమ్మ',
          instruction: 'Say "This is my mother".',
          instructionTelugu: '"ఇది నా అమ్మ" అని చెప్పండి.',
          expectedAnswer: 'this is my mother',
          expectedAnswerTelugu: 'ఇది నా అమ్మ',
          interactive: true
        },
        {
          type: 'sentence',
          content: 'I have a brother',
          contentTelugu: 'నాకు ఒక సోదరుడు ఉన్నాడు',
          instruction: 'Say "I have a brother".',
          instructionTelugu: '"నాకు ఒక సోదరుడు ఉన్నాడు" అని చెప్పండి.',
          expectedAnswer: 'i have a brother',
          expectedAnswerTelugu: 'నాకు ఒక సోదరుడు ఉన్నాడు',
          interactive: true
        },
        {
          type: 'sentence',
          content: 'We are a happy family',
          contentTelugu: 'మేము ఒక సంతోషకరమైన కుటుంబం',
          instruction: 'Say "We are a happy family".',
          instructionTelugu: '"మేము ఒక సంతోషకరమైన కుటుంబం" అని చెప్పండి.',
          expectedAnswer: 'we are a happy family',
          expectedAnswerTelugu: 'మేము ఒక సంతోషకరమైన కుటుంబం',
          interactive: true
        }
      ]
    },
    {
      id: 'action-sentences',
      title: 'Action Sentences - చర్య వాక్యాలు',
      titleTelugu: 'చర్య వాక్యాలు',
      description: 'Learn sentences about actions',
      descriptionTelugu: 'చర్యల గురించి వాక్యాలను నేర్చుకోండి',
      image: '/assets/images/action.jpg',
      duration: '20 min',
      difficulty: 'Advanced',
      progress: 0,
      isCompleted: false,
      steps: [
        {
          type: 'sentence',
          content: 'I am reading a book',
          contentTelugu: 'నేను ఒక పుస్తకం చదువుతున్నాను',
          instruction: 'Say "I am reading a book".',
          instructionTelugu: '"నేను ఒక పుస్తకం చదువుతున్నాను" అని చెప్పండి.',
          expectedAnswer: 'i am reading a book',
          expectedAnswerTelugu: 'నేను ఒక పుస్తకం చదువుతున్నాను',
          interactive: true
        },
        {
          type: 'sentence',
          content: 'She is cooking food',
          contentTelugu: 'ఆమె ఆహారం వండుతున్నది',
          instruction: 'Say "She is cooking food".',
          instructionTelugu: '"ఆమె ఆహారం వండుతున్నది" అని చెప్పండి.',
          expectedAnswer: 'she is cooking food',
          expectedAnswerTelugu: 'ఆమె ఆహారం వండుతున్నది',
          interactive: true
        },
        {
          type: 'sentence',
          content: 'They are playing games',
          contentTelugu: 'వారు ఆటలు ఆడుతున్నారు',
          instruction: 'Say "They are playing games".',
          instructionTelugu: '"వారు ఆటలు ఆడుతున్నారు" అని చెప్పండి.',
          expectedAnswer: 'they are playing games',
          expectedAnswerTelugu: 'వారు ఆటలు ఆడుతున్నారు',
          interactive: true
        }
      ]
    }
  ],

  colors: [
    {
      id: 'basic-colors',
      title: 'Basic Colors - ప్రాథమిక రంగులు',
        titleTelugu: 'ప్రాథమిక రంగులు',
      description: 'Learn basic colors in both languages',
      descriptionTelugu: 'రెండు భాషలలో ప్రాథమిక రంగులను నేర్చుకోండి',
      image: '/assets/images/color1.jpg',
      duration: '10 min',
      difficulty: 'Beginner',
      progress: 0,
      isCompleted: false,
        steps: [
          {
            type: 'color',
          content: 'Red',
            contentTelugu: 'ఎరుపు',
          instruction: 'This is Red color. Say "Red".',
          instructionTelugu: 'ఇది ఎరుపు రంగు. "ఎరుపు" అని చెప్పండి.',
          expectedAnswer: 'red',
          expectedAnswerTelugu: 'ఎరుపు',
            interactive: true,
          colorCode: '#FF0000',
          image: 'https://images.unsplash.com/photo-1541976076758-347942db1970?w=400'
          },
          {
            type: 'color',
          content: 'Blue',
          contentTelugu: 'నీలం',
          instruction: 'This is Blue color. Say "Blue".',
          instructionTelugu: 'ఇది నీలం రంగు. "నీలం" అని చెప్పండి.',
          expectedAnswer: 'blue',
          expectedAnswerTelugu: 'నీలం',
            interactive: true,
          colorCode: '#0000FF',
          image: 'https://images.unsplash.com/photo-1508264165352-258a6bf17598?w=400'
          },
          {
            type: 'color',
          content: 'Green',
          contentTelugu: 'ఆకుపచ్చ',
          instruction: 'This is Green color. Say "Green".',
          instructionTelugu: 'ఇది ఆకుపచ్చ రంగు. "ఆకుపచ్చ" అని చెప్పండి.',
          expectedAnswer: 'green',
          expectedAnswerTelugu: 'ఆకుపచ్చ',
            interactive: true,
          colorCode: '#00FF00',
          image: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=400'
          },
          {
            type: 'color',
          content: 'Yellow',
            contentTelugu: 'పసుపు',
          instruction: 'This is Yellow color. Say "Yellow".',
          instructionTelugu: 'ఇది పసుపు రంగు. "పసుపు" అని చెప్పండి.',
          expectedAnswer: 'yellow',
          expectedAnswerTelugu: 'పసుపు',
            interactive: true,
          colorCode: '#FFFF00',
          image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400'
          },
          {
            type: 'color',
          content: 'Orange',
          contentTelugu: 'నారింజ',
          instruction: 'This is Orange color. Say "Orange".',
          instructionTelugu: 'ఇది నారింజ రంగు. "నారింజ" అని చెప్పండి.',
          expectedAnswer: 'orange',
          expectedAnswerTelugu: 'నారింజ',
          interactive: true,
            colorCode: '#FFA500',
          image: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=400'
        }
      ]
    },
    {
      id: 'color-mixing',
      title: 'Color Mixing - రంగుల మిశ్రమం',
      titleTelugu: 'రంగుల మిశ్రమం',
      description: 'Learn about color mixing and combinations',
      descriptionTelugu: 'రంగుల మిశ్రమం మరియు కలయికల గురించి నేర్చుకోండి',
      image: '/assets/images/color2.jpg',
      duration: '12 min',
      difficulty: 'Intermediate',
      progress: 0,
      isCompleted: false,
      steps: [
        {
          type: 'color-mixing',
          content: 'Red + Blue = Purple',
          contentTelugu: 'ఎరుపు + నీలం = ఊదా',
          instruction: 'Red and Blue make Purple. Say "Purple".',
          instructionTelugu: 'ఎరుపు మరియు నీలం ఊదా చేస్తాయి. "ఊదా" అని చెప్పండి.',
          expectedAnswer: 'purple',
          expectedAnswerTelugu: 'ఊదా',
            interactive: true,
          colorCode: '#800080'
        },
        {
          type: 'color-mixing',
          content: 'Red + Yellow = Orange',
          contentTelugu: 'ఎరుపు + పసుపు = నారింజ',
          instruction: 'Red and Yellow make Orange. Say "Orange".',
          instructionTelugu: 'ఎరుపు మరియు పసుపు నారింజ చేస్తాయి. "నారింజ" అని చెప్పండి.',
          expectedAnswer: 'orange',
          expectedAnswerTelugu: 'నారింజ',
          interactive: true,
          colorCode: '#FFA500'
        }
      ]
    }
  ]
};

// Export individual category data for easy access
export const lettersData = comprehensiveLessonsData.letters;
export const numbersData = comprehensiveLessonsData.numbers;
export const wordsData = comprehensiveLessonsData.words;
export const sentencesData = comprehensiveLessonsData.sentences;
export const colorsData = comprehensiveLessonsData.colors;

// Export all data
export default comprehensiveLessonsData;