import React, { useState } from "react";
import "../../styles/essay.css";

const essaysData = [
  {
    id: 1,
    title: "சிறைச்சாலையை நூலகமாக்கிய... ",
    author: "John Doe",
    publication: "The Daily Times",
    date: "January 15, 2023",
    excerpt:
      "வாசிப்பு, எழுத்து, செயல், சுய சிந்தனை, சமூக உணர்வு, தியாக மனப்பான்மை ஆகிய அனைத்து அம்சங்களும் 23 வயது பகத் சிங்குக்கு ஒருங்கே அமையப் பெற்றது அரிதானதாகும்",
    content:
      "Full essay content would go here... This would be several paragraphs long. In a real implementation, this might be loaded from a CMS or API.",
    tags: ["Technology", "Society", "Future"],
    imageUrl: "/ktturaigal/img-1.jpg",
    imageCaption: "Illustration of future city with advanced technology"
  },
  {
    id: 2,
    title: "தமிழ் மண்ணில் அறிவியல் விதைகள்",
    author: "John Doe",
    publication: "Environmental Review",
    date: "March 22, 2022",
    excerpt:
      "தஞ்சாவூர், தாராசுரம், கங்கைகொண்ட சோழபுரம் கோயில்கள் அன்றைய ஆன்மிக நாட்டத்தை மட்டும் நிலைநாட்டுவதாக அமையவில்லை. ஆயிரம் ஆண்டுகளுக்கு முன்பே இந்த மண்ணின் மைந்தர்களிடத்தில் பொதிந்து கிடந்த அறிவியல் சிந்தனைகளையும் சேர்த்தே அவை பறைசாற்றுகின்றன. ",
    content: "Full essay content would go here...",
    tags: ["Environment", "Politics", "Science"],
    imageUrl: "/ktturaigal/img-2.jpg",
    imageCaption: "Illustration of f",
    imageCaption: "Protesters demanding climate action"
  },
  {
    id: 3,
    title: "பாட்டுக்கொரு புலவன்",
    author: "John Doe",
    publication: "Environmental Review",
    date: "March 22, 2022",
    excerpt:
      "பாட்டினைப்போல் ஆச்சரியம் பாரின்மிசை இல்லையடா' என்று பிரகடனம் செய்த மகாகவி பாரதி, சித்தர்களைப்போல, ஞானிகளைப்போல சிந்தித்தது மட்டுமல்லாமல் 'சிந்துக்குத் தந்தை என்ற பாவேந்தரின் கூற்றுக்கிணங்க பாடிப் பாடிப் பரவசப்பட்டவர்: பாட்டாலே பலரையும் பரவசப்படுத்தியவர். ",
    content: "Full essay content would go here...",
    tags: ["Environment", "Politics", "Science"],
    imageUrl: "/ktturaigal/img-3.jpg",
    imageCaption: "Illustration of f",
    imageCaption: "Protesters demanding climate action"
  },
  {
    id: 4,
    title: "உழைப்பின் மேன்மையை உணர்த்தியவர்",
    author: "John Doe",
    publication: "Environmental Review",
    date: "March 22, 2022",
    excerpt:
      "கம்யூனிஸ்ட் கட்சியின் அறிக்கை' என்ற இச்சிறுநூல்தான் இன்றளவும் உலக வரலாற்றில் ஒரு முக்கிய அரசியல் ஆவணமாகத் திகழ்கிறது. பலமொழிகளில் இந்நூல் மொழி பெயர்க்கப்பட்டிருப்பதோடு ஏராளமான திறனாய்வுநூல்கள் இந்நூலைப் பற்றியே வெளிவந்திருக்கின்றன. இதனை எழுதியபோது கார்ல் மார்க்ஸுக்கு வயது முப்பது",
    content: "Full essay content would go here...",
    tags: ["Environment", "Politics", "Science"],
    imageUrl: "/ktturaigal/img-4.jpg",
    imageCaption: "Illustration of f",
    imageCaption: "Protesters demanding climate action"
  },
  {
    id: 5,
    title: "வாசிக்கும் சமூகமே வளரும்",
    author: "John Doe",
    publication: "Environmental Review",
    date: "March 22, 2022",
    excerpt:
      "அலெக்சாண்டர் தன் நண்பர்களிடம் 'இவ்வளவு அழகான தங்கப் பேழையில் எந்தப் பொருளை வைத்தால் பொருத்தமாக இருக்கும்' என்று கேட்டார். நண்பர்கள் ஒவ்வொரு பொருளாகச் சொன்னார்கள். கடைசியில் அலெக்சாண்டர் 'இதில் வைப்பதற்குப் பொருத்தமானது ஹோமர் எழுதிய 'எலியட்' நூல்தான்' என்றார்",
    content: "Full essay content would go here...",
    tags: ["Environment", "Politics", "Science"],
    imageUrl: "/ktturaigal/img-5.jpg",
    imageCaption: "Illustration of f",
    imageCaption: "Protesters demanding climate action"
  },
  {
    id: 6,
    title: "பகத்சிங்கின் பன்முக ஆளுமை! ",
    author: "John Doe",
    publication: "Environmental Review",
    date: "March 22, 2022",
    excerpt:
      "ஜாலியன் வாலாபாக் படுகொலை நிகழ்ந்ததற்கு மறுநாள் பகத்சிங் அங்கு சென்று, மடிந்த சத்தியாகிரகிகளின் ரத்தம் தோய்ந்த மண்ணை ஒரு கண்ணாடி பாட்டிலில் எடுத்துக் கொண்டு தனது ஊருக்குத் திரும்பினார். அந்த பாட்டிலை வீட்டில் ஓர் இடத்தில் வைத்து தினமும் அதற்கு பூப்போட்டு வீர வணக்கம் செலுத்தியுள்ளார். ",
    content: "Full essay content would go here...",
    tags: ["Environment", "Politics", "Science"],
    imageUrl: "/ktturaigal/img-6.jpg",
    imageCaption: "Illustration of f",
    imageCaption: "Protesters demanding climate action"
  },
  {
    id: 7,
    title: "எல்லாரும் நுகர்வோர்; எல்லாரும் மன்னர்",
    author: "John Doe",
    publication: "Environmental Review",
    date: "March 22, 2022",
    excerpt:
      "தேசிய மனித உரிமை ஆணையம் வழங்கிய தீர்ப்பில் உயிருக்குப் போராடும் நோயாளிகளுக்கு உடனடியாக மனிதாபிமானத்தோடு சிகிச்சையளிக்க வேண்டியது மருத்துவமனைகளின் கடமை என்று அழுத்தமாக சொல்லப்பட்டுள்ளது. 'பணம் திரும்ப வரும். உயிர் வராது' என்ற வாசகம் அத்தீர்ப்பில் இடம் பெற்றுள்ளது",
    content: "Full essay content would go here...",
    tags: ["Environment", "Politics", "Science"],
    imageUrl: "/ktturaigal/img-7.jpg",
    imageCaption: "Illustration of f",
    imageCaption: "Protesters demanding climate action"
  },
  {
    id: 8,
    title: "இந்தியாவுக்கு பெருமை சேர்த்த கண்டுபிடிப்பு",
    author: "John Doe",
    publication: "Environmental Review",
    date: "March 22, 2022",
    excerpt:
      "மகேந்திரலால் ஆங்கிலேய மருத்துவமான அலோபதி மருத்துவத்தில் மேற்படிப்பு படித்து கல்கத்தாவில் வெற்றிகரமான மருத்துவராக வளர்ந்த நிலையில் ஹோமியோபதி மருத்துவமுறைக்கு மாறினார். சுவாமி விவேகானந்தரின் குருவான ஸ்ரீராமகிருஷ்ண பரமஹம்சருக்கு ஆஸ்தான மருத்துவராக விளங்கினார். ",
    content: "Full essay content would go here...",
    tags: ["Environment", "Politics", "Science"],
    imageUrl: "/ktturaigal/img-8 (1).jpg",
    imageCaption: "Illustration of f",
    imageCaption: "Protesters demanding climate action"
  },
  {
    id: 9,
    title: "இந்தியாவுக்கு பெருமை சேர்த்த கண்டுபிடிப்பு",
    author: "John Doe",
    publication: "Environmental Review",
    date: "March 22, 2022",
    excerpt:
      "மகேந்திரலால் ஆங்கிலேய மருத்துவமான அலோபதி மருத்துவத்தில் மேற்படிப்பு படித்து கல்கத்தாவில் வெற்றிகரமான மருத்துவராக வளர்ந்த நிலையில் ஹோமியோபதி மருத்துவமுறைக்கு மாறினார். சுவாமி விவேகானந்தரின் குருவான ஸ்ரீராமகிருஷ்ண பரமஹம்சருக்கு ஆஸ்தான மருத்துவராக விளங்கினார்",
    content: "Full essay content would go here...",
    tags: ["Environment", "Politics", "Science"],
    imageUrl: "/ktturaigal/img-8.jpg",
    imageCaption: "Illustration of f",
    imageCaption: "Protesters demanding climate action"
  },
  {
    id: 10,
    title: "வாழும்போதே வரலாறானவர் ",
    author: "John Doe",
    publication: "Environmental Review",
    date: "March 22, 2022",
    excerpt:
      "The scientific consensus on climate change is clear, yet political action lags behind...",
    content: "Full essay content would go here...",
    tags: ["Environment", "Politics", "Science"],
    imageUrl: "/ktturaigal/img-11.jpg",
    imageCaption: "Illustration of f",
    imageCaption: "Protesters demanding climate action"
  },
  {
    id: 11,
    title: "அருட்செல்வர் ஒரு புத்தக வித்தகர் ",
    author: "John Doe",
    publication: "Environmental Review",
    date: "March 22, 2022",
    excerpt:
      "தமிழக சட்டப் பேரவைத் தலைவரின் பாராட்டு ",
    content: "Full essay content would go here...",
    tags: ["Environment", "Politics", "Science"],
    imageUrl: "/ktturaigal/img-12.jpg",
    imageCaption: "Illustration of f",
    imageCaption: "Protesters demanding climate action"
  },
  {
    id: 12,
    title: "பாட்டாளிகளின் படைப்பாளி ",
    author: "John Doe",
    publication: "Environmental Review",
    date: "March 22, 2022",
    excerpt:
      "தமிழக சட்டப் பேரவைத் தலைவரின் பாராட்டு",
    content: "Full essay content would go here...",
    tags: ["Environment", "Politics", "Science"],
    imageUrl: "/ktturaigal/img-13.jpg",
    imageCaption: "Illustration of f",
    imageCaption: "Protesters demanding climate action"
  },
  {
    id: 13,
    title: "எழுத்துப் புரட்சியாளர்கள் ",
    author: "John Doe",
    publication: "Environmental Review",
    date: "March 22, 2022",
    excerpt:
      "“நம் கண்ணெதிரே வாழ்ந்த, வாழ்ந்து கொண்டுள்ள சிறந்த படைப்பாளிகளின் படைப்புப் பின்புலத்தை அவர்களிடமே கேட்டுத் தெரிந்துகொள்ளும் அனுபவம், வாசித்து அறிந்து கொள்வதைக் காட்டிலும் வலுவானது",
    content: "Full essay content would go here...",
    tags: ["Environment", "Politics", "Science"],
    imageUrl: "/ktturaigal/img-14.jpg",
    imageCaption: "Illustration of f",
    imageCaption: "Protesters demanding climate action"
  }
];
const Essay = () => {
  const [selectedEssay, setSelectedEssay] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterTag, setFilterTag] = useState(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const allTags = [...new Set(essaysData.flatMap((essay) => essay.tags))];
  const filteredEssays = essaysData.filter((essay) => {
    const matchesSearch =
      essay.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      essay.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTag = filterTag ? essay.tags.includes(filterTag) : true;
    return matchesSearch && matchesTag;
  });
  const handleEssayClick = (essay) => {
    setSelectedEssay(essay);
  };
  const handleBackToList = () => {
    setSelectedEssay(null);
  };
  const openLightbox = () => setLightboxOpen(true);
  const closeLightbox = () => setLightboxOpen(false);

  return (
    <div className="essay-container">
      {selectedEssay ? (
        <EssayDetail
          essay={selectedEssay}
          onBack={handleBackToList}
          onImageClick={openLightbox}
        />
      ) : (
        <>
          <div className="controls">
            <div className="search-box">
              <input
                type="text"
                placeholder="Search essays..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <i className="search-icon">🔍</i>
            </div>
          </div>
          <div className="essay-card-container">
            {filteredEssays.map((essay) => (
              <EssayCard
                key={essay.id}
                essay={essay}
                onClick={() => handleEssayClick(essay)}
              />
            ))}
          </div>
        </>
      )}
      {lightboxOpen && selectedEssay?.imageUrl && (
        <div className="lightbox" onClick={closeLightbox}>
          <div className="lightbox-content">
            <img
              src={selectedEssay.imageUrl}
              alt={selectedEssay.imageCaption || selectedEssay.title}
            />
            {selectedEssay.imageCaption && (
              <div className="lightbox-caption">
                {selectedEssay.imageCaption}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
const EssayCard = ({ essay, onClick }) => {
  return (
    <div className="essay-card" onClick={onClick}>
      {essay.imageUrl && (
        <img
          src={essay.imageUrl}
          alt={essay.imageCaption || essay.title}
          className="card-image"
        />
      )}
      {/* <div className="card__head">{essay.title}</div> */}
    </div>
  );
};
const EssayDetail = ({ essay, onBack, onImageClick }) => {
  return (
    <div className="essay-detail">
      <button className="back-button" onClick={onBack}>
        &larr; Back to all essays
      </button>

      <header>
        <h1>{essay.title}</h1>
      </header>

      {essay.imageUrl && (
        <figure className="essay-image" onClick={onImageClick}>
          <img src={essay.imageUrl} alt={essay.imageCaption || essay.title} />
          {essay.imageCaption && <figcaption>{essay.imageCaption}</figcaption>}
        </figure>
      )}
    </div>
  );
};

export default Essay;