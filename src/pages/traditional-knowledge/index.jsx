import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '../../components/AppIcon';
import Image from '../../components/AppImage';
import Button from '../../components/ui/Button';
import Header from '../../components/ui/Header';
import VoiceNavigationButton from '../../components/ui/VoiceNavigationButton';
import OfflineStatusIndicator from '../../components/ui/OfflineStatusIndicator';
import NotificationAlertBanner from '../../components/ui/NotificationAlertBanner';

// Import page components
import KnowledgeCard from './components/KnowledgeCard';
import AudioPlayer from './components/AudioPlayer';
import ContributionModal from './components/ContributionModal';
import CategoryFilter from './components/CategoryFilter';
import SearchBar from './components/SearchBar';
import CommunityContributions from './components/CommunityContributions';

const TraditionalKnowledge = () => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentAudio, setCurrentAudio] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showContributionModal, setShowContributionModal] = useState(false);
  const [contributionType, setContributionType] = useState('');
  const [showCommunityContributions, setShowCommunityContributions] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState('english');

  // Mock data for traditional knowledge
  const knowledgeItems = [
    {
      id: 1,
      type: 'story',
      title: 'The Legend of Sammakka and Sarakka',
      titleTelugu: 'సమ్మక్క సారక్క కథలు',
      description: `The Legend of Sammakka and Sarakka tells the story of a brave mother and daughter from a tribal village. They fought against a powerful king to protect their people and their land. Even after they disappeared, the tribal people believe their spirits still bless and protect them. Every two years, people celebrate the Sammakka Saralamma Jatara festival to remember their courage, unity, and love for their community./సమ్మక్క సారక్క గాథ ఒక గిరిజన గ్రామానికి చెందిన ధైర్యవంతమైన తల్లి, కుమార్తెల కథ. వారు తమ ప్రజలను మరియు భూమిని రక్షించడానికి ఒక శక్తివంతమైన రాజుతో పోరాడారు. వారు కనబడకపోయినా, వారి ఆత్మలు ఇప్పటికీ ప్రజలను కాపాడుతున్నాయని గిరిజనులు నమ్ముతారు. ప్రతి రెండేళ్లకోసారి సమ్మక్క సారలమ్మ జాతరను వారి ధైర్యం, ఐక్యత, మరియు సమాజంపై ప్రేమను గుర్తుచేసుకోవడానికి జరుపుకుంటారు.`,
      culturalContext: 'సమ్మక్క మరియు సారక్క ధైర్యవంతమైన అడివీ మహిళలు. వారు తమ గ్రామాన్ని అన్యాయ పాలకుల నుండి రక్షించారు. వారి వీరత, త్యాగం కారణంగా దేవతలుగా పూజించబడతారు. ప్రతి రెండేళ్లకోసారి జరుగే మెదారం జాతర వారిని గౌరవించే ఉత్సవం. ఈ కథలో సమాజ ఐక్యత, మహిళా శక్తి, ప్రకృతితో సంబంధంలు చూపబడతాయి.',
      image: '/assets/images/sam and sar.jpg',
      hasAudio: true,
      audioUrl: '/assets/audio/sam.mp3',
      transcription: 'సమ్మక్క సారలమ్మల కథ చాలా పురాతनమైनది. వారు తమ ప్రజల కోసం పోरాडిन వీरాంగनలు...',
      contributor: {
        name: 'Bujji Bai',
        avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150'
      },
      dateAdded: '2025-09-15',
      region: 'Warangal District',
      rating: 4.8
    },
    {
      id: 2,
      type: 'song',
      title: 'Harvest Festival Song',
      titleTelugu: 'పంట పండుగ పాట',
      description: `Harvest Festival Song is a joyful tribal song sung during the harvest season to thank nature for giving good crops. People sing and dance together to celebrate their hard work and the blessings of the earth. It shows their happiness, unity, and respect for nature and traditions./పంట పండుగ పాట అనేది పంట కాలంలో ప్రకృతికి కృతజ్ఞతలు చెప్పడానికి గిరిజనులు పాడే ఆనందమైన పాట. ప్రజలు కలిసి పాడుతూ, నృత్యం చేస్తూ తమ కష్టానికి మరియు భూమి ఆశీర్వాదాలకు ఆనందంగా ఉత్సవం జరుపుకుంటారు. ఇది వారి ఆనందం, ఐక్యత మరియు ప్రకృతి, సంప్రదాయాలపై గౌరవాన్ని చూపిస్తుంది.`,
      culturalContext: 'హార్వెస్ట్ ఫెస్టివల్ సాంగ్ అనేది పొలాల్లో పంట విత్తన, కోతల సందర్భంగా అడివీ ప్రజలు జరుపుకునే ఉత్సవ పాట. ఇది కృషి, ధన్యవాదం, ప్రకృతి ప్రేమను చూపిస్తుంది. పాట ద్వారా గ్రామంలో సమాజ ఐక్యత, ఆనందం, సంస్కృతిను పెంపొందిస్తారు.',
      image: '/assets/images/harvestfestival.jpg',
      hasAudio: true,
      audioUrl: '/assets/audio/harvest.mp3',
      transcription: 'పంట పండిందిరా, పండుగ చేసుకుందాం, ధాन్యం పంडింदిరా...',
      contributor: {
        name: 'Lakshmi Devi',
        avatar: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=150'
      },
      dateAdded: '2025-09-20',
      region: 'Adilabad Tribal Area',
      rating: 4.6
    },
    {
      id: 3,
      type: 'craft',
      title: 'Bamboo Basket Weaving Technique',
      titleTelugu: 'వెదురు బుట్ట నేత సాంకేతికత',
      description: `Bamboo Basket Weaving Technique is a traditional tribal skill where people make beautiful and useful baskets using thin bamboo strips. It requires patience and creativity, as each basket is carefully woven by hand. These baskets are used for carrying grains, fruits, and other daily items, showing the close connection between tribal life and nature./బాంబూ బుట్టల నేయడం పద్ధతి అనేది గిరిజనుల సంప్రదాయ కళ. వారు పలుచని వెదురు చీరలతో అందమైన మరియు ఉపయోగకరమైన బుట్టలను చేతితో నేస్తారు. ఇది సహనం మరియు సృజనాత్మకత అవసరమైన పని. ఈ బుట్టలను ధాన్యం, పండ్లు మరియు రోజువారీ వస్తువులను మోసేందుకు ఉపయోగిస్తారు. ఇది గిరిజన జీవితం మరియు ప్రకృతి మధ్య ఉన్న బలమైన బంధాన్ని చూపిస్తుంది.`,
      culturalContext: 'కొమ్మ బుట్టలు (బాంబూ బుట్టలు) తయారీ పద్ధతి అనేది అడివీ సంప్రదాయ కళ. బాంబూని నిదానంగా గుజ్జు చేసి, దానిని తాడు లేదా చిన్న ముక్కలుగా మార్చి కట్టు, నుట్టు, మడతలు వేసి బుట్టలు తయారు చేస్తారు. ఈ పద్ధతిలో సృష్టి, నైపుణ్యం, మరియు ప్రకృతితో సాన్నిహిత్యం కనిపిస్తుంది. బుట్టలు సంకలనం, ఆహారం నిల్వ, వాడుక సామాగ్రి కోసం ఉపయోగిస్తారు.',
      image: '/assets/images/basket.png',
      hasAudio: false,
      contributor: {
        name: 'Ravi Kumar',
        avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150'
      },
      dateAdded: '2025-09-25',
      region: 'Khammam District',
      rating: 4.7
    },
    {
      id: 4,
      type: 'custom',
      title: 'Marriage Ceremony Rituals',
      titleTelugu: 'వివాహ వేడుక ఆచారాలు',
      description: `Marriage Ceremony Rituals in tribal communities are simple, joyful, and filled with traditional songs and dances. The bride and groom are blessed by elders, and the marriage is celebrated with the whole village. These rituals show the importance of love, unity, and togetherness in tribal culture./వివాహ వేడుక ఆచారాలు గిరిజన సమాజాలలో సాధారణంగా ఆనందభరితంగా, పాటలతో, నృత్యాలతో జరుగుతాయి. వధూవరులను పెద్దలు ఆశీర్వదిస్తారు, గ్రామమంతా కలిసి వివాహాన్ని జరుపుకుంటారు. ఈ ఆచారాలు ప్రేమ, ఐక్యత, మరియు కలసికట్టుగా జీవించే గిరిజన సంస్కృతిని ప్రతిబింబిస్తాయి.`,
      culturalContext: 'అడివీ వివాహ సంస్కారాలు అనేది సంప్రదాయపూర్ణ ఉత్సవం. పెళ్లి పండుగలో పరంపరా పాటలు, నృత్యాలు, భోజనం, ఆతిథ్య పరంపరలు ఉంటాయి. వరుడు-కన్య కూటమి, కుటుంబ ఐక్యత, మత, సాంస్కృతిక ఆచారాలు ఈ కార్యక్రమంలో ప్రతిబింబిస్తాయి. వివాహం సమాజ ఐక్యత, కుటుంబ గౌరవం, సంప్రదాయ విలువలును బలపరుస్తుంది.',
      image: '/assets/images/marriage.jpeg',
      hasAudio: true,
      audioUrl: '/assets/audio/wedding.mp3',
      transcription: 'वిवాహ వేडుకలో మొदట పెद్దల ఆశీర్వాदం తీసుకుంటారు...',
      contributor: {
        name: 'Yellamma',
        avatar: 'https://images.pexels.com/photos/1181684/pexels-photo-1181684.jpeg?auto=compress&cs=tinysrgb&w=150'
      },
      dateAdded: '2025-09-30',
      region: 'Mahbubnagar District',
      rating: 4.9
    },
    {
      id: 5,
      type: 'story',
      title: 'The Thirsy Crow Story',
      titleTelugu: 'దాహం వేసే కాకి కథ',
      description: `The Thirsty Crow Story is a well-known moral story about a clever crow. On a hot day, the crow felt very thirsty and found a pot with little water at the bottom. It dropped small stones into the pot, and slowly the water rose up. The crow drank the water happily. The story teaches us that intelligence and effort can solve any problem./దప్పికతో ఉన్న కాకి కథ ఒక ప్రసిద్ధ నీతి కథ. ఒక వేడికాలంలో, ఒక కాకికి చాలా దప్పిక వేసింది. అది ఒక పాత్రలో కొద్దిగా నీరు చూసింది. అది చిన్న చిన్న రాళ్లు వేసింది, నీరు పైకి వచ్చింది. అప్పుడు కాకి నీరు తాగింది. ఈ కథ మనకు తెలివితేటలు మరియు కృషి ఉంటే ఏ సమస్యనైనా పరిష్కరించవచ్చని చెబుతుంది.`,
      culturalContext: 'తిరసి కాకి కథ అనేది సమస్యను బుద్ధిమత్తగా పరిష్కరించే కథ. ఒక తిరసి కాకి తాగడానికి నీళ్లు కావాలి, కానీ గిన్నె లో నీరు తక్కువగా ఉంటుంది. అది చిన్న చిన్న కళ్లెత్తులు వేసి నీరు పెంచి తాగుతుంది. ఈ కథలో బుద్ధి, సహనం, మరియు సమస్య పరిష్కారం యొక్క పాఠం కనిపిస్తుంది.',
      image: '/assets/images/crow.jpeg',
      hasAudio: true,
      audioUrl: '/assets/audio/crow.mp3',
      transcription: 'ఒకప్పుడు ఒక గిरిజन గ్రామంలో చాలా తెలిवైन కాకి ఉంडేది...',
      contributor: {
        name: 'Ramesh Goud',
        avatar: 'https://images.pexels.com/photos/1043472/pexels-photo-1043472.jpeg?auto=compress&cs=tinysrgb&w=150'
      },
      dateAdded: '2025-10-01',
      region: 'Nizamabad District',
      rating: 4.5
    },
    {
      id: 6,
      type: 'song',
      title: 'Rain Calling Song',
      titleTelugu: 'వర్షాన్ని పిలిచే పాట',
      description: `Rain Calling Song is a traditional tribal song sung to pray for rain during dry seasons. People gather together, sing, and dance to ask nature for rainfall to grow their crops. The song shows their deep connection with nature and their hope for a good harvest./వాన పిలిచే పాట అనేది ఎండాకాలంలో వర్షం కోసం ప్రార్థించడానికి గిరిజనులు పాడే సంప్రదాయ పాట. ప్రజలు కలిసి పాడుతూ, నృత్యం చేస్తూ, పంటలు పండేందుకు వర్షం రావాలని ప్రకృతిని కోరుకుంటారు. ఈ పాట వారి ప్రకృతిపట్ల ప్రేమను మరియు మంచి పంటపై ఆశను వ్యక్తం చేస్తుంది.`,
      culturalContext: 'వర్షాన్ని పిలిచే పాట అనేది అడివీ సంప్రదాయ ఉత్సవ గీతం. పొలాల్లో పంట పెరుగుదలకు, ప్రకృతికి ధన్యవాదంగా పల్లెలో జమకూ జమగా పాడతారు. ఈ పాటలో ప్రకృతి ప్రేమ, సమాజ ఐక్యత, ఆనందం, మరియు సంస్కృతీ విలువలు వ్యక్తమవుతాయి.',
      image: '/assets/images/rain.jpg',
      hasAudio: true,
      audioUrl: '/assets/audio/rain.mp3',
      transcription: 'వर్షం రా వर్షం రా, మా పంటలకు నీरు రా...',
      contributor: {
        name: 'Sita Devi',
        avatar: 'https://images.pexels.com/photos/1181687/pexels-photo-1181687.jpeg?auto=compress&cs=tinysrgb&w=150'
      },
      dateAdded: '2025-10-02',
      region: 'Karimnagar District',
      rating: 4.4
    }
  ];

  const categories = ['all', 'story', 'song', 'craft', 'custom'];

  // Check for saved language preference
  useEffect(() => {
    const savedLanguage = localStorage.getItem('preferredLanguage');
    if (savedLanguage) {
      setCurrentLanguage(savedLanguage);
    }
  }, []);

  // Filter knowledge items based on category and search
  const filteredItems = knowledgeItems.filter(item => {
    const categoryMatch = activeCategory === 'all' || item.type === activeCategory;
    const searchMatch = searchQuery === '' ||
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (item.titleTelugu && item.titleTelugu.toLowerCase().includes(searchQuery.toLowerCase()));
    return categoryMatch && searchMatch;
  });

  const handlePlayAudio = (item) => {
    if (currentAudio?.id === item.id) {
      // If the same audio is clicked, toggle play/pause
      setIsPlaying(!isPlaying);
    } else {
      // If a new audio is clicked, play it
      setCurrentAudio(item);
      setIsPlaying(true);
    }
  };

  const handleNextTrack = () => {
    const currentIndex = knowledgeItems?.findIndex(item => item?.id === currentAudio?.id);
    const nextIndex = (currentIndex + 1) % knowledgeItems?.length;
    const nextTrack = knowledgeItems?.[nextIndex];
    if (nextTrack?.hasAudio) {
      setCurrentAudio(nextTrack);
    }
  };

  const handlePreviousTrack = () => {
    const currentIndex = knowledgeItems?.findIndex(item => item?.id === currentAudio?.id);
    const prevIndex = currentIndex === 0 ? knowledgeItems?.length - 1 : currentIndex - 1;
    const prevTrack = knowledgeItems?.[prevIndex];
    if (prevTrack?.hasAudio) {
      setCurrentAudio(prevTrack);
    }
  };

  const handleContribute = (type) => {
    setContributionType(type);
    setShowContributionModal(true);
  };

  const handleSubmitContribution = async (contributionData) => {
    // Mock submission - in real app, this would send to backend
    console.log('Submitting contribution:', contributionData);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    alert('Thank you for your contribution! It will be reviewed by our community elders.');
  };

  const handleApproveContribution = (id) => {
    console.log('Approving contribution:', id);
    alert('Contribution approved and added to the knowledge base!');
  };

  const handleRejectContribution = (id) => {
    console.log('Rejecting contribution:', id);
    alert('Contribution has been rejected. Feedback sent to contributor.');
  };

  const handleVoiceSearch = (transcript) => {
    console.log('Voice search:', transcript);
    setSearchQuery(transcript);
  };
return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <NotificationAlertBanner />
        <OfflineStatusIndicator />

        <div className="flex flex-col md:flex-row items-center justify-between mb-8 space-y-4 md:space-y-0">
          <div className="text-center md:text-left">
            <h1 className="text-3xl font-bold text-primary">
              {currentLanguage === 'english' ? 'Traditional Knowledge Hub' : 'సాంప్రదాయ విజ్ఞాన కేంద్రం'}
            </h1>
            <p className="text-muted-foreground mt-2">
              {currentLanguage === 'english' ? 'Explore stories, songs, and crafts from tribal communities.' : 'గిరిజన సంఘాల నుండి కథలు, పాటలు మరియు చేతిపనులను అన్వేషించండి.'}
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <Button onClick={() => setShowContributionModal(true)}>
              <Icon name="Plus" className="mr-2 h-4 w-4" />
              {currentLanguage === 'english' ? 'Contribute' : 'సహకరించండి'}
            </Button>
            <Button variant="outline" onClick={() => setShowCommunityContributions(true)}>
              <Icon name="Users" className="mr-2 h-4 w-4" />
              {currentLanguage === 'english' ? 'Community' : 'సంఘం'}
            </Button>
          </div>
        </div>

        <div className="mb-8 space-y-4">
          <SearchBar
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            currentLanguage={currentLanguage}
          />
          <CategoryFilter
            categories={categories}
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
            currentLanguage={currentLanguage}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map(item => (
            <KnowledgeCard
              key={item.id}
              item={item}
              onPlay={handlePlayAudio}
              onContribute={handleContribute}
              isPlaying={isPlaying && currentAudio?.id === item.id}
              currentLanguage={currentLanguage}
            />
          ))}
        </div>
      </main>

      {currentAudio && (
        <AudioPlayer
          currentTrack={currentAudio}
          isPlaying={isPlaying}
          onPlayPause={setIsPlaying}
          onClose={() => {
            setCurrentAudio(null);
            setIsPlaying(false);
          }}
          onNext={handleNextTrack}
          onPrevious={handlePreviousTrack}
        />
      )}

      <ContributionModal
        isOpen={showContributionModal}
        onClose={() => setShowContributionModal(false)}
        contributionType={contributionType}
        onSubmit={handleSubmitContribution}
      />

      {showCommunityContributions && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-card border border-border rounded-tribal shadow-tribal-lg w-full max-w-6xl max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between p-6 border-b border-border">
              <h2 className="text-xl font-heading font-semibold text-foreground">
                Community Contributions
              </h2>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setShowCommunityContributions(false)}
                className="h-8 w-8"
              >
                <Icon name="X" size={16} />
              </Button>
            </div>
            <div className="p-6">
              <CommunityContributions
                onApprove={handleApproveContribution}
                onReject={handleRejectContribution}
              />
            </div>
          </div>
        </div>
      )}

      <VoiceNavigationButton />
    </div>
  );
};

export default TraditionalKnowledge;