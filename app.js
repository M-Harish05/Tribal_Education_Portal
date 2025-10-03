// Tribal Education Portal - Complete JavaScript Application

// Global variables
let currentLanguage = 'te';
let currentModule = 'dashboard';
let isVoiceEnabled = false;
let isOnline = navigator.onLine;

// User progress data
let userProgress = {
    points: 850,
    level: 1,
    levelName: 'అభ్యాసి',
    lessonsCompleted: 15,
    timeSpent: 45,
    achievementsEarned: 8,
    streak: 7,
    unlockedAchievements: ['literacy_starter'],
    completedLessons: ['tel_01', 'num_01']
};

// Educational content database
const educationalContent = {
    basic_literacy: {
        telugu_alphabets: {
            lessons: [
                {
                    id: "tel_01",
                    title: "అచ్చులు (Vowels)",
                    telugu_title: "అచ్చులు",
                    letters: ["అ", "ఆ", "ఇ", "ఈ", "ఉ", "ఊ", "ఋ", "ౠ", "ఎ", "ఏ", "ఐ", "ఒ", "ఓ", "ఔ"],
                    pronunciation: ["a", "aa", "i", "ii", "u", "uu", "ru", "ruu", "e", "ee", "ai", "o", "oo", "au"],
                    difficulty: "beginner",
                    estimated_time: "30 minutes"
                },
                {
                    id: "tel_02", 
                    title: "హల్లులు (Consonants)",
                    telugu_title: "హల్లులు",
                    letters: ["క", "ఖ", "గ", "ఘ", "ఙ", "చ", "ఛ", "జ", "ఝ", "ఞ", "ట", "ఠ", "డ", "ఢ", "ణ", "త", "థ", "ద", "ధ", "న", "ప", "ఫ", "బ", "భ", "మ", "య", "ర", "ల", "వ", "శ", "ష", "స", "హ"],
                    pronunciation: ["ka", "kha", "ga", "gha", "nga", "cha", "chha", "ja", "jha", "nya", "ta", "tha", "da", "dha", "na", "ta", "tha", "da", "dha", "na", "pa", "pha", "ba", "bha", "ma", "ya", "ra", "la", "va", "sha", "sha", "sa", "ha"],
                    difficulty: "beginner",
                    estimated_time: "45 minutes"
                }
            ]
        },
        numbers: {
            lessons: [
                {
                    id: "num_01",
                    title: "సంఖ్యలు 1-10 (Numbers 1-10)",
                    telugu_numbers: ["ఒకటి", "రెండు", "మూడు", "నాలుగు", "అయిదు", "ఆరు", "ఏడు", "ఎనిమిది", "తొమ్మిది", "పది"],
                    arabic_numbers: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
                    pronunciation: ["okati", "rendu", "moodu", "naalugu", "ayidu", "aaru", "yedu", "enimidi", "tommidi", "padi"],
                    practical_examples: ["ఒక పువ్వు", "రెండు కళ్ళు", "మూడు రంగులు"],
                    games: ["number_matching", "counting_objects", "voice_recognition"]
                }
            ]
        }
    },
    traditional_knowledge: {
        stories: [
            {
                id: "story_01",
                title: "అల్లూరి సీతారామ రాజు",
                english_title: "Alluri Sitarama Raju",
                category: "historical_heroes",
                content_telugu: "అల్లూరి సీతారామ రాజు మన ఆంధ్ర ప్రదేశ్‌లోని మన్యం ప్రాంతంలో జన్మించిన వీర యోధుడు. అతను గిరిజనుల హక్కుల కోసం పోరాడాడు. విద్య ద్వారా సమాజాన్ని అభివృద్ధి చేయాలని అతను నమ్మేవాడు. అతను గిరిజన ప్రజలకు వారి సంప్రదాయాలను కాపాడుకోవాలని మరియు ఆధునిక విద్యను స్వీకరించాలని చెప్పేవాడు.",
                content_english: "Alluri Sitarama Raju was a brave warrior born in the Manyam region of Andhra Pradesh. He fought for tribal rights and believed in developing society through education. He encouraged tribal people to preserve their traditions while embracing modern education.",
                moral_lesson: "విద్య మరియు ఐక్యత ఏ సవాలునైనా అధిగమించగలవు",
                audio_file: "alluri_story_telugu.mp3",
                images: ["alluri_portrait.jpg", "manyam_region.jpg"],
                discussion_points: [
                    "అల్లూరి గిరిజనుల విద్య గురించి ఎలా అనుకున్నాడు?",
                    "మనం అతని నుండి ఏమి నేర్చుకోవాలి?"
                ]
            },
            {
                id: "story_02",
                title: "జ్ఞానకుమార్తె",
                english_title: "The Wise Daughter", 
                category: "wisdom_tales",
                content_telugu: "ఒక గిరిజన గ్రామంలో చాలా తెలివైన అమ్మాయి ఉండేది. ఆమె తన తెలివితేటలతో గ్రామంలోని అనేక సమస్యలను పరిష్కరించేది. విద్య ఎంత ముఖ్యమో ఆమె అందరికి చూపించింది.",
                moral_lesson: "తెలివితేటలు మరియు విద్య మహిళలను బలపరుస్తాయి",
                audio_file: "wise_daughter_telugu.mp3"
            }
        ],
        traditional_medicine: [
            {
                id: "med_01",
                plant_name: "వేప (Neem)",
                english_name: "Neem",
                uses: [
                    "చర్మ వ్యాధుల కోసం",
                    "జ్వరం తగ్గించడానికి", 
                    "దంతాల ఆరోగ్యం కోసం"
                ],
                preparation: "వేప ఆకులను నీటిలో ఉడికించి కషాయం చేసి తాగవచ్చు",
                precautions: "గర్భిణీ స్త్రీలు వాడకూడదు"
            },
            {
                id: "med_02",
                plant_name: "తులసి (Tulasi)",
                english_name: "Holy Basil", 
                uses: [
                    "దగ్గు మరియు చలి కోసం",
                    "జ్వరం తగ్గించడానికి",
                    "ఊపిరితిత్తుల ఆరోగ్యం"
                ],
                preparation: "తులసి ఆకుల రసం తేనెతో కలిపి తీసుకోవాలి"
            }
        ]
    },
    government_schemes: [
        {
            id: "scheme_01",
            name: "అనుకూల స్కాలర్‌షిప్ (Pre-Matric Scholarship)",
            english_name: "Pre-Matric Scholarship for ST Students",
            target_group: "9వ మరియు 10వ తరగతి విద్యార్థులు",
            eligibility: [
                "ST కాస్ట్ సర్టిఫికేట్ ఉండాలి",
                "కుటుంబ ఆదాయం సంవత్సరానికి రూ.2.5 లక్షలకు మించకూడదు",
                "సక్రమంగా పాఠశాలకు వెళ్లాలి"
            ],
            benefits: "మెయింటెనెన్స్ అలౌన్స్ మరియు అధిక అలౌన్స్",
            application_process: [
                "NSP పోర్టల్‌లో రిజిస్టర్ చేసుకోవాలి",
                "అవసరమైన డాక్యుమెంట్లు అప్‌లోడ్ చేయాలి",
                "పాఠశాల నుండి వెరిఫికేషన్",
                "ఆమోదం కోసం వేచి ఉండాలి"
            ],
            documents_required: [
                "ST సర్టిఫికేట్",
                "ఆదాయ సర్టిఫికేట్", 
                "బ్యాంక్ పాస్‌బుక్",
                "మార్క్‌షీట్",
                "ఆధార్ కార్డ్"
            ],
            last_date: "సాధారణంగా డిసెంబర్ 31"
        },
        {
            id: "scheme_02",
            name: "పోస్ట్ మాట్రిక్ స్కాలర్‌షిప్",
            english_name: "Post-Matric Scholarship for ST Students", 
            target_group: "11వ తరగతి నుండి PG వరకు",
            benefits: "ట్యూషన్ ఫీస్ + మెయింటెనెన్స్ అలౌన్స్"
        }
    ]
};

// Language translations
const translations = {
    te: {
        'మౌలిక అక్షరాస్యత': 'మౌలిక అక్షరాస్యత',
        'సంప్రదాయ జ్ఞానం': 'సంప్రదాయ జ్ఞానం',
        'నైపుణ్య అభివృద్ధి': 'నైపుణ్య అభివృద్ధి',
        'ప్రభుత్వ పథకాలు': 'ప్రభుత్వ పథకాలు',
        'సమాజ అధ్యయనం': 'సమాజ అధ్యయనం',
        'పురోగతి ట్రాకింగ్': 'పురోగతి ట్రాకింగ్',
        'గృహం': 'గృహం',
        'నేర్చుకోవడం': 'నేర్చుကోవడం',
        'కథలు': 'కథలు',
        'సమాజం': 'సమాజం'
    },
    en: {
        'మౌలిక అక్షరాస్యత': 'Basic Literacy',
        'సంప్రదాయ జ్ఞానం': 'Traditional Knowledge',
        'నైపుణ్య అభివృద్ధి': 'Skill Development',
        'ప్రభుత్వ పథకాలు': 'Government Schemes',
        'సమాజ అధ్యయనం': 'Community Learning',
        'పురోగతి ట్రాకింగ్': 'Progress Tracking',
        'గృహం': 'Home',
        'నేర్చుకోవడం': 'Learn',
        'కథలు': 'Stories', 
        'సమాజం': 'Community'
    }
};

// Achievements system
const achievements = {
    literacy_starter: {
        id: "literacy_starter",
        name: "అక్షర విద్యార్థి",
        english_name: "Alphabet Scholar", 
        description: "మొదటి 10 అక్షరాలు నేర్చుకున్నందుకు",
        icon: "🎓",
        points: 100
    },
    story_keeper: {
        id: "story_keeper", 
        name: "కథా రక్షకుడు",
        english_name: "Story Keeper",
        description: "5 సంప్రదాయ కథలు విన్నందుకు",
        icon: "📚",
        points: 200
    },
    skill_master: {
        id: "skill_master",
        name: "నైపుణ్య నిపుణుడు", 
        english_name: "Skill Master",
        description: "ఒక నైపుణ్య కోర్సు పూర్తి చేసినందుకు",
        icon: "🏆",
        points: 500
    }
};

// Initialize application
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
    setupEventListeners();
    loadUserProgress();
    checkOnlineStatus();
});

function initializeApp() {
    console.log('Initializing Tribal Education Portal...');

    // Show loading screen
    setTimeout(() => {
        document.getElementById('loading-screen').style.display = 'none';
        document.getElementById('language-selection').classList.remove('hidden');
    }, 2000);

    // Initialize speech synthesis if available
    if ('speechSynthesis' in window) {
        console.log('Speech synthesis available');
    }

    // Initialize speech recognition if available  
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
        console.log('Speech recognition available');
    }
}

function setupEventListeners() {
    // Online/offline status
    window.addEventListener('online', () => {
        isOnline = true;
        updateOnlineStatus();
    });

    window.addEventListener('offline', () => {
        isOnline = false;
        updateOnlineStatus();
    });

    // Keyboard navigation
    document.addEventListener('keydown', handleKeyboardNavigation);

    // Voice commands
    document.addEventListener('keydown', (e) => {
        if (e.key === 'v' && e.altKey) {
            toggleVoiceRecognition();
        }
    });
}

function selectLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('preferred_language', lang);

    // Hide language selection and show main app
    document.getElementById('language-selection').classList.add('hidden');
    document.getElementById('main-app').classList.remove('hidden');

    // Update UI language
    updateLanguage();

    // Initialize main app components
    initializeDashboard();
    populateLearningContent();

    // Play welcome message
    if (lang === 'te') {
        speak('గిరిజన విద్యా పోర్టల్‌కు స్వాగతం. మీ అభ్యాస ప్రయాణం ఇక్కడ ప్రారంభమవుతుంది।', 'te');
    } else {
        speak('Welcome to Tribal Education Portal. Your learning journey begins here.', 'en');
    }
}

function updateLanguage() {
    const elements = document.querySelectorAll('[data-te][data-en]');
    elements.forEach(element => {
        if (currentLanguage === 'te' && element.dataset.te) {
            element.textContent = element.dataset.te;
        } else if (currentLanguage === 'en' && element.dataset.en) {
            element.textContent = element.dataset.en;
        }
    });
}

function initializeDashboard() {
    // Update user stats
    document.getElementById('user-points').textContent = userProgress.points;
    document.getElementById('user-level').textContent = userProgress.level;
    document.getElementById('lessons-completed').textContent = userProgress.lessonsCompleted;
    document.getElementById('learning-streak').textContent = userProgress.streak;
}

function populateLearningContent() {
    // Populate vowels
    const vowelsGrid = document.getElementById('vowels-grid');
    if (vowelsGrid) {
        const vowels = educationalContent.basic_literacy.telugu_alphabets.lessons[0];
        vowels.letters.forEach((letter, index) => {
            const letterCard = createLetterCard(letter, vowels.pronunciation[index]);
            vowelsGrid.appendChild(letterCard);
        });
    }

    // Populate consonants  
    const consonantsGrid = document.getElementById('consonants-grid');
    if (consonantsGrid) {
        const consonants = educationalContent.basic_literacy.telugu_alphabets.lessons[1];
        consonants.letters.forEach((letter, index) => {
            const letterCard = createLetterCard(letter, consonants.pronunciation[index]);
            consonantsGrid.appendChild(letterCard);
        });
    }

    // Populate numbers
    const numbersGrid = document.getElementById('numbers-grid');
    if (numbersGrid) {
        const numbers = educationalContent.basic_literacy.numbers.lessons[0];
        numbers.telugu_numbers.forEach((number, index) => {
            const numberCard = createNumberCard(
                number, 
                numbers.arabic_numbers[index], 
                numbers.pronunciation[index]
            );
            numbersGrid.appendChild(numberCard);
        });
    }

    // Populate stories
    populateStories();
}

function createLetterCard(letter, pronunciation) {
    const card = document.createElement('div');
    card.className = 'letter-card';
    card.innerHTML = `
        <div class="letter-text">${letter}</div>
        <div class="letter-pronunciation">${pronunciation}</div>
    `;

    card.addEventListener('click', () => {
        card.classList.toggle('active');
        speak(letter, currentLanguage);
        // Award points for interaction
        awardPoints(5);
    });

    return card;
}

function createNumberCard(teluguNumber, arabicNumber, pronunciation) {
    const card = document.createElement('div');
    card.className = 'number-card';
    card.innerHTML = `
        <div class="number-telugu">${teluguNumber}</div>
        <div class="number-arabic">${arabicNumber}</div>
        <div class="number-pronunciation">${pronunciation}</div>
    `;

    card.addEventListener('click', () => {
        speak(teluguNumber, currentLanguage);
        awardPoints(3);
    });

    return card;
}

function populateStories() {
    const storiesGrid = document.querySelector('.stories-grid');
    if (!storiesGrid) return;

    educationalContent.traditional_knowledge.stories.forEach(story => {
        const storyCard = document.createElement('div');
        storyCard.className = 'story-card';
        storyCard.innerHTML = `
            <div class="story-header">
                <h3 class="story-title">${story.title}</h3>
                <p class="story-subtitle">${story.english_title}</p>
            </div>
            <div class="story-content">
                <p class="story-excerpt">${story.content_telugu.substring(0, 150)}...</p>
                <div class="story-meta">
                    <span class="story-category">${story.category}</span>
                    <button class="btn btn--primary" onclick="readStory('${story.id}')">
                        <span class="btn-icon">▶️</span>
                        <span>వినండి</span>
                    </button>
                </div>
            </div>
        `;

        storiesGrid.appendChild(storyCard);
    });
}

function switchModule(moduleName) {
    // Update navigation
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`[data-module="${moduleName}"]`).classList.add('active');

    // Hide all modules
    document.querySelectorAll('.module').forEach(module => {
        module.classList.remove('active');
    });

    // Show selected module
    const moduleId = moduleName === 'dashboard' ? 'dashboard-module' : `${moduleName}-module`;
    const targetModule = document.getElementById(moduleId);
    if (targetModule) {
        targetModule.classList.add('active');
    }

    currentModule = moduleName;

    // Announce module change
    const moduleNames = {
        'te': {
            'dashboard': 'డాష్‌బోర్డ్',
            'learn': 'అభ్యాస కేంద్రం', 
            'stories': 'కథల కేంద్రం',
            'community': 'సమాజ కేంద్రం'
        },
        'en': {
            'dashboard': 'Dashboard',
            'learn': 'Learning Center',
            'stories': 'Stories Center', 
            'community': 'Community Center'
        }
    };

    const moduleName_localized = moduleNames[currentLanguage][moduleName];
    speak(`${moduleName_localized}కు వెళ్లారు`, currentLanguage);
}

function openModule(moduleId) {
    console.log(`Opening module: ${moduleId}`);

    // Award points for accessing a module
    awardPoints(10);

    // Speak module name
    const moduleNames = {
        'basic-literacy': 'మౌలిక అక్షరాస్యత',
        'traditional-knowledge': 'సంప్రదాయ జ్ఞానం',
        'skill-development': 'నైపుణ్య అభివృద్ధి',
        'government-schemes': 'ప్రభుత్వ పథకాలు',
        'community-learning': 'సమాజ అధ్యయనం',
        'progress-tracking': 'పురోగతి ట్రాకింగ్'
    };

    const moduleName = moduleNames[moduleId];
    if (moduleName) {
        speak(`${moduleName} మాడ్యూల్ తెరవబడుతోంది`, currentLanguage);
    }

    // Switch to appropriate view based on module
    if (moduleId === 'basic-literacy') {
        switchModule('learn');
    } else if (moduleId === 'traditional-knowledge') {
        switchModule('stories');
    } else if (moduleId === 'community-learning') {
        switchModule('community');
    }
}

function startLearning() {
    switchModule('learn');
    speak('అభ్యాసం ప్రారంభిస్తున్నాము. మొదట తెలుగు అక్షరాలు నేర్చుకుందాం', currentLanguage);
}

function startChallenge() {
    speak('నేటి సవాలు ప్రారంభమవుతోంది. కొత్త పదాలు నేర్చుకోడానికి సిద్ధంగా ఉండండి', currentLanguage);
    awardPoints(50);

    // Show achievement notification
    showAchievement('Daily Challenge Started', '🚀');
}

function readStory(storyId) {
    const story = educationalContent.traditional_knowledge.stories.find(s => s.id === storyId);
    if (story) {
        speak(story.content_telugu, currentLanguage);
        awardPoints(20);
    }
}

function toggleLanguage() {
    currentLanguage = currentLanguage === 'te' ? 'en' : 'te';
    updateLanguage();
    localStorage.setItem('preferred_language', currentLanguage);

    const message = currentLanguage === 'te' ? 
        'భాష తెలుగులోకి మార్చబడింది' : 
        'Language switched to English';
    speak(message, currentLanguage);
}

function toggleVoice() {
    isVoiceEnabled = !isVoiceEnabled;
    const button = document.querySelector('.voice-toggle');

    if (isVoiceEnabled) {
        button.classList.add('active');
        speak('వాయిస్ ఆదేశాలు ప్రారంభించబడ్డాయి', currentLanguage);
        startVoiceRecognition();
    } else {
        button.classList.remove('active');
        speak('వాయిస్ ఆదేశాలు ఆపబడ్డాయి', currentLanguage);
        stopVoiceRecognition();
    }
}

function toggleVoiceRecognition() {
    if (isVoiceEnabled) {
        stopVoiceRecognition();
    } else {
        startVoiceRecognition();
    }
}

function startVoiceRecognition() {
    if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
        console.log('Speech recognition not supported');
        return;
    }

    const SpeechRecognition = window.webkitSpeechRecognition || window.SpeechRecognition;
    const recognition = new SpeechRecognition();

    recognition.lang = currentLanguage === 'te' ? 'te-IN' : 'en-US';
    recognition.interimResults = false;
    recognition.continuous = false;

    // Show voice overlay
    document.getElementById('voice-overlay').classList.remove('hidden');

    recognition.onresult = function(event) {
        const transcript = event.results[0][0].transcript.toLowerCase();
        console.log('Voice command:', transcript);
        processVoiceCommand(transcript);
    };

    recognition.onerror = function(event) {
        console.error('Speech recognition error:', event.error);
        stopVoiceRecognition();
    };

    recognition.onend = function() {
        stopVoiceRecognition();
    };

    recognition.start();
    isVoiceEnabled = true;
}

function stopVoiceRecognition() {
    document.getElementById('voice-overlay').classList.add('hidden');
    isVoiceEnabled = false;
}

function processVoiceCommand(command) {
    const commands = {
        'te': {
            'గృహం': 'dashboard',
            'హోమ్': 'dashboard',
            'నేర్చుకోవడం': 'learn',
            'లెర్న్': 'learn',
            'కథలు': 'stories',
            'స్టోరీస్': 'stories',
            'సమాజం': 'community',
            'కమ్యూనిటీ': 'community'
        },
        'en': {
            'home': 'dashboard',
            'dashboard': 'dashboard',
            'learn': 'learn',
            'learning': 'learn',
            'stories': 'stories',
            'story': 'stories',
            'community': 'community'
        }
    };

    const langCommands = commands[currentLanguage];
    const moduleCommand = Object.keys(langCommands).find(cmd => 
        command.includes(cmd)
    );

    if (moduleCommand) {
        switchModule(langCommands[moduleCommand]);
        stopVoiceRecognition();
    }
}

function speak(text, language = 'te') {
    if ('speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = language === 'te' ? 'te-IN' : 'en-US';
        utterance.rate = 0.8;
        utterance.pitch = 1;
        speechSynthesis.speak(utterance);
    }
}

function playWelcomeMessage() {
    const message = currentLanguage === 'te' ? 
        'గిరిజన విద్యా పోర్టల్‌కు స్వాగతం. ఇది మన సమాజానికి ప్రత్యేకంగా రూపొందించబడిన విద్యా వేదిక. ఇక్కడ మీరు తెలుగు అక్షరాలు, సంప్రదాయ కథలు, నైపుణ్యాలు మరియు ప్రభుత్వ పథకాల గురించి తెలుసుకోవచ్చు.' :
        'Welcome to Tribal Education Portal. This is an educational platform specially designed for our community. Here you can learn Telugu alphabets, traditional stories, skills and government schemes.';

    speak(message, currentLanguage);
}

function playVoiceHelp(module) {
    const helpMessages = {
        'te': {
            'learn': 'ఈ పేజీలో మీరు తెలుగు అక్షరాలు మరియు సంఖ్యలు నేర్చుకోవచ్చు. ప్రతి అక్షరం మీద క్లిక్ చేస్తే దాని ఉచ్చారణ వినిపిస్తుంది.'
        },
        'en': {
            'learn': 'On this page you can learn Telugu alphabets and numbers. Click on each letter to hear its pronunciation.'
        }
    };

    const message = helpMessages[currentLanguage][module];
    if (message) {
        speak(message, currentLanguage);
    }
}

function awardPoints(points) {
    userProgress.points += points;
    document.getElementById('user-points').textContent = userProgress.points;

    // Check for level up
    checkLevelUp();

    // Save progress
    saveUserProgress();

    // Show points animation
    showPointsAnimation(points);
}

function checkLevelUp() {
    const levelThresholds = [0, 500, 1500, 3000, 5000];
    const currentLevelIndex = levelThresholds.findIndex(threshold => 
        userProgress.points < threshold
    ) - 1;

    if (currentLevelIndex !== -1 && currentLevelIndex !== userProgress.level - 1) {
        userProgress.level = currentLevelIndex + 1;
        const levelNames = ['అనుభవకుడు', 'అభ్యాసి', 'నిపుణుడు', 'గురువు', 'పండితుడు'];
        userProgress.levelName = levelNames[currentLevelIndex];

        document.getElementById('user-level').textContent = userProgress.level;

        showAchievement(`స్థాయి ${userProgress.level} చేరుకున్నారు!`, '🎉');
        speak(`అభినందనలు! మీరు ${userProgress.levelName} స్థాయికి చేరుకున్నారు`, currentLanguage);
    }
}

function showAchievement(title, icon) {
    // Create achievement notification
    const notification = document.createElement('div');
    notification.className = 'achievement-notification';
    notification.innerHTML = `
        <div class="achievement-icon">${icon}</div>
        <div class="achievement-text">${title}</div>
    `;

    document.body.appendChild(notification);

    // Animate and remove
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

function showPointsAnimation(points) {
    // Create points animation
    const animation = document.createElement('div');
    animation.className = 'points-animation';
    animation.textContent = `+${points}`;

    document.body.appendChild(animation);

    setTimeout(() => {
        animation.remove();
    }, 2000);
}

function loadUserProgress() {
    const saved = localStorage.getItem('tribal_edu_progress');
    if (saved) {
        userProgress = { ...userProgress, ...JSON.parse(saved) };
    }

    const savedLanguage = localStorage.getItem('preferred_language');
    if (savedLanguage) {
        currentLanguage = savedLanguage;
    }
}

function saveUserProgress() {
    localStorage.setItem('tribal_edu_progress', JSON.stringify(userProgress));
}

function updateOnlineStatus() {
    const statusElement = document.getElementById('online-status');
    const statusDot = statusElement.querySelector('.status-dot');
    const statusText = statusElement.querySelector('.status-text');

    if (isOnline) {
        statusDot.className = 'status-dot online';
        statusText.textContent = currentLanguage === 'te' ? 'ఆన్‌లైన్' : 'Online';
    } else {
        statusDot.className = 'status-dot offline';
        statusText.textContent = currentLanguage === 'te' ? 'ఆఫ్‌లైన్' : 'Offline';
    }
}

function checkOnlineStatus() {
    isOnline = navigator.onLine;
    updateOnlineStatus();
}

function handleKeyboardNavigation(event) {
    // Handle keyboard navigation for accessibility
    if (event.altKey) {
        switch(event.key) {
            case '1':
                switchModule('dashboard');
                break;
            case '2': 
                switchModule('learn');
                break;
            case '3':
                switchModule('stories');
                break;
            case '4':
                switchModule('community');
                break;
            case 'l':
                toggleLanguage();
                break;
            case 'v':
                toggleVoiceRecognition();
                break;
        }
    }
}

// Export functions for testing
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        selectLanguage,
        switchModule,
        awardPoints,
        speak
    };
}