import React, { useState } from "react";
import "../../styles/urai.css";

const Urai = () => {
  const [activeTab, setActiveTab] = useState("quotes");
  const [expandedImage, setExpandedImage] = useState(null);

  const famousPerson = {
    name: "Nelson Mandela",
    title: "அறிவியலாளர்களின் தியாக வாழ்க்கையை முழுமையாக ஆவணப்படுத்த வேண்டும் ",
    bio: "Nelson Rolihlahla Mandela (1918-2013) was a South African anti-apartheid revolutionary, political leader, and philanthropist who served as President of South Africa from 1994 to 1999. He was the country's first black head of state and the first elected in a fully representative democratic election.",
    quotes: [
      {
        text: "எழுத்துதான் எழுச்சியை தரும்",
        source: "Dhinamani",
        image: "/uraigal/img1.jpg",
        date: "Thu 01, Feb 2018",
        location: "Tiruchirapalli, TamilNadu"
      },
      {
        text: "அறிவியலாளர்களின் தியாக வாழ்க்கையை முழுமையாக ஆவணப்படுத்த வேண்டும்",
        source: "Dhinamani",
        image: "/uraigal/img2.jpg",
        date: "Sat 02, Mar 2019",
        location: "Pudhukottai, TamilNadu"
      },
      {
        text: "விடுதலை போரில் இந்துக்களுக்கும் இஸ்லாமியருக்கும் இணைந்தே களம் கண்டனர்",
        source: "Dhinamani",
        image: "/uraigal/img3.jpg",
        date: "Tue 04 Mar 2014",
        location: "Namakkal, TamilNadu"
      },
      {
        text: "தன்னம்பிக்கையை ஏற்படுத்தும் ம.பொ.சி-யின் வரலாறு",
        source: "Dhinamani",
        image: "/uraigal/img4.jpg",
        date: "Wed 04 Oct 2017",
        location: "Tanjavur, TamilNadu"
      },
      {
        text: "ஊழலற்ற இந்தியாவே இளைஞர்களின் கனவாக வேண்டும்",
        source: "Dhinamani",
        image: "/uraigal/img5.jpg",
        date: "Sat 04 Nov 2017",
        location: "Erode, India"
      },
      {
        text: "ஓலைச்சுவடிகள் செல்லரித்து அழியும் அபாயம் ",
        source: "Dhinamani",
        image: "/uraigal/img6.jpg",
        date: "Tue 05 Mar 2013",
        location: "Rajapalayam, TamilNadu"
      },
      {
        text: "ஓலைச்சுவடிகள் செல்லரித்து அழியும் அபாயம் ",
        source: "Dhinamani",
        image: "/uraigal/img6.jpg",
        date: "Tue 05 Mar 2013",
        location: "Rajapalayam, TamilNadu"
      },
      {
        text: "ஆசிரியர்களே சமூதாயத்தின் சிற்பிகள்",
        source: "Dhinamani",
        image: "/uraigal/img7.jpg",
        date: "Wed 30 Apr 2014",
        location: "Erode, TamilNadu"
      },
      {
        text: "ஆசிரியர்களே சமூதாயத்தின் சிற்பிகள்",
        source: "Dhinamani",
        image: "/uraigal/img7.jpg",
        date: "Wed 30 Apr 2014",
        location: "Erode, TamilNadu"
      },
      {
        text: "சமூக பொறுப்புள்ள குடிமக்களை கல்வி நிலையங்கள் உருவாக்க வேண்டும்",
        source: "Dhinamani",
        image: "/uraigal/img9.jpg",
        date: "Fri 08 Apr 2016",
        location: "Erode, TamilNadu"
      },
      {
        text: "ஜாதி, மதத்துக்கு ஏற்றாற்போல் வரலாற்றை வளைப்பது பாவச் செயல்!",
        source: "Dhinamani",
        image: "/uraigal/img10.jpg",
        date: "Sun 09 Sept 2018",
        location: "New Delhi, TamilNadu"
      },
      {
        text: "அடுத்த தலைமுறையை சமூக பொறுப்பாளர்களாக மாற்றவேண்டும்",
        source: "Dhinamani",
        image: "/uraigal/img11.jpg",
        date: "Sun 08 Oct 2017",
        location: "Thoothukudi, TamilNadu"
      }
      ,
      {
        text: "அரசியல் அமைப்பு சட்டம் குறித்து விழிப்புணர்வு அவசியம்",
        source: "Dhinamani",
        image: "/uraigal/img12.jpg",
        date: "Sat 30 Jan 2010",
        location: "Erode, TamilNadu"
      }
      ,
      {
        text: "‘கற்ற கல்வியை சமூகத்துக்குப் பயன்படுத்துவது மாணவர்களின் கடமை’",
        source: "Dhinamani",
        image: "/uraigal/img13.jpg",
        date: "Fri 16 Feb 2018",
        location: "Erode, TamilNadu"
      }
      ,
      {
        text: "காந்தியடிகளை 'மகாத்மா' என அடையாளப்படுத்தியவர் தமிழர்",
        source: "Dhinamani",
        image: "/uraigal/img14.jpg",
        date: "Thur 17 Jan 2019",
        location: "Namakkal, TamilNadu"
      }
      ,
      {
        text: "கற்பித்தலுக்கு இணையாக ஆய்வுக்கும் முக்கியத்துவம் தேவை",
        source: "Dhinamani",
        image: "/uraigal/img15.jpg",
        date: "Tue 18 Sept 2018",
        location: "Thanjavur, TamilNadu"
      }
      ,
      {
        text: "தாழ்வு மனப்பான்மைதான் வாழ்வின் வெற்றிக்குத் தடைக்கல்",
        source: "Dhinamani",
        image: "/uraigal/img16.jpg",
        date: "Sun 18 Feb 2018",
        location: "Erode, TamilNadu"
      }

      ,
      {
        text: "சமூகப் பொறுப்புள்ள குடிமக்களை உருவாக்குவதே கல்வியின் நோக்கமாக இருக்க வேண்டும்",
        source: "Dhinamani",
        image: "/uraigal/img17.jpg",
        date: "Sun 18 Mar 2018",
        location: "Namakkal, TamilNadu"
      }
      ,
      {
        text: "தமிழகத்தில் 2000 இடங்களில் அகழாய்வுக்கான வாய்ப்பு",
        source: "Dhinamani",
        image: "/uraigal/img18.jpg",
        date: "Mar 19 2017",
        location: "Erode, TamilNadu"
      }
      ,
      {
        text: "இந்திய மக்களின் மனதில் நீங்கா இடம்பெற்றவர் ஆர்தர் காட்டன்",
        source: "Dhinamani",
        image: "/uraigal/img19.jpg",
        date: "Sat 20 May 2017",
        location: "Erode, TamilNadu"
      }
      ,
      {
        text: "இந்தியாவை படிப்போம்! இந்தியாவை மாற்றுவோம்!",
        source: "Dhinamani",
        image: "/uraigal/img20.jpg",
        date: "Tue 20 May 2014",
        location: "Erode, TamilNadu"
      }
      ,
      {
        text: "உயர்கல்வியே ஒருநாட்டின் வளர்ச்சிக்கு உயிர்நாடி",
        source: "Dhinamani",
        image: "/uraigal/img21.jpg",
        date: "21 Mar 2016",
        location: "Namakkal, TamilNadu"
      }
      ,
      {
        text: "கம்பனும் பாரதியும் ஜீவாவுக்கு இரு கண்கள்: ஸ்டாலின் குணசேகரன்",
        source: "Dhinamani",
        image: "/uraigal/img22.jpg",
        date: "24 Dec 2007",
        location: "Erode, TamilNadu"
      }
      ,
      {
        text: "புத்தக வாசிப்பும் இளைய தலைமுறையும்",
        source: "Dhinamani",
        image: "/uraigal/img23.jpg",
        date: "23 Aug 2016",
        location: "Manapaarai, TamilNadu"
      }
      ,
      {
        text: "மாணவர்கள் விழிப்புணர்வை ஏற்படுத்த வேண்டும்",
        source: "Dhinamani",
        image: "/uraigal/img24.jpg",
        date: "Fri 3 Jan 2014",
        location: "Erode, TamilNadu"
      }
      ,
      {
        text: "சமுதாய கண்ணோட்டம் உள்ள பேச்சாளர்கள் உருவாக வேண்டும்",
        source: "Dhinamani",
        image: "/uraigal/img25.jpg",
        date: "Sun 26 Nov 2017",
        location: "Erode, TamilNadu"
      }
      ,
      {
        text: "ஆளுமைகளின் வாழ்க்கை வரலாறு இளைஞர்களுக்கு நல்ல பாடமாக அமையும்",
        source: "Dhinamani",
        image: "/uraigal/img26.jpg",
        date: "Sat 27 Jan 2018",
        location: "Erode, TamilNadu"
      }
      ,
      {
        text: "தமிழ் மொழியின் அடையாளம் திருக்குறள்",
        source: "Dhinamani",
        image: "/uraigal/img27.jpg",
        date: "Thur 27 Oct 2018",
        location: "Erode, TamilNadu"
      }
      ,
      {
        text: "இன்றைய கல்விமுறை நாட்டுப்பற்றை வளர்க்கவில்லை: ஸ்டாலின் குணசேகரன்",
        source: "Dhinamani",
        image: "/uraigal/img28.jpg",
        date: "Fri 27 Oct 2017",
        location: "Erode, TamilNadu"
      }
      ,
      {
        text: "இளைஞர்கள் சமூகப்பற்றை வளர்த்துக் கொள்ள வேண்டும்",
        source: "Dhinamani",
        image: "/uraigal/img29.jpg",
        date: "27 Nov 2016",
        location: "P.N.Paalayam, TamilNadu"
      }
      ,
      {
        text: "சமூகத்துக்காகப் பயன்படும் தனித் திறமைகள்தான் முழுமை பெறும்",
        source: "Dhinamani",
        image: "/uraigal/img30.jpg",
        date: "Mon 29 Jan 2018",
        location: "Erode, TamilNadu"
      }
      ,
      {
        text: "மாணவர்களின் தனித்திறன்கள் சமூகநோக்கத்துடன் வளர வேண்டும்",
        source: "Dhinamani",
        image: "/uraigal/img31.jpg",
        date: "Mon 04 Apr 2016",
        location: "Erode, TamilNadu"
      }
      ,
      {
        text: "மனிதநேயத்தை உருவாக்கும் இலக்கியத்தை படைக்க வேண்டும்",
        source: "Dhinamani",
        image: "/uraigal/img32.jpg",
        date: "05 Jan 2010",
        location: "Erode, TamilNadu"
      }
      ,
      {
        text: "மனித உரிமைச் சட்டங்கள் குறித்த விழிப்புணர்வை ஏற்படுத்த வேண்டும்",
        source: "Dhinamani",
        image: "/uraigal/img33.jpg",
        date: "Thur 10 Mar 2016",
        location: "Erode, TamilNadu"
      }
      ,
      {
        text: "மனிதனை பண்படுத்தும் இலக்கியங்கள்",
        source: "Dhinamani",
        image: "/uraigal/img34.jpg",
        date: "01 Jan 2012",
        location: "Erode, TamilNadu"
      }
      ,
      {
        text: "மனிதர்களுக்கான சேவையே கடவுளுக்கானது என்றவர் விவேகானந்தர்",
        source: "Dhinamani",
        image: "/uraigal/img35.jpg",
        date: "Wed 19 Feb 2014",
        location: "Namakkal, TamilNadu"
      }
      ,
      {
        text: "மது இல்லா தமிழகத்தை உருவாக்க வேண்டும்",
        source: "Dhinamani",
        image: "/uraigal/img36.jpg",
        date: "Wed 30 Dec 2015",
        location: "Erode, TamilNadu"
      }
      ,
      {
        text: "மூத்த குடிமக்களின் அறிவும், அனுபவமும் சமூகத்திற்கு முழுமையாக பயன்பட வேண்டும்",
        source: "Dhinamani",
        image: "/uraigal/img37.jpg",
        date: "22 Dec 2011",
        location: "Erode, TamilNadu"
      }
      ,
      {
        text: "முழுமையான மனிதனாக புத்தகங்களே துணை நிற்கும்",
        source: "Dhinamani",
        image: "/uraigal/img38.jpg",
        date: "Mon 03 Feb 2014",
        location: "Perambalur, TamilNadu"
      }
      ,
      {
        text: "திருமணத்திற்குச் சட்ட அங்கீகாரம் கொடுத்தவர் அண்ணா",
        source: "Dhinamani",
        image: "/uraigal/img39.jpg",
        date: "27 Sept 2009",
        location: "Erode, TamilNadu"
      }
      ,
      {
        text: "பாரம்பரியக் கலைகளை மீட்டுருவாக்கம் செய்வது அவசியம்",
        source: "Dhinamani",
        image: "/uraigal/img40.jpg",
        date: "Mon 19 May 2014",
        location: "Erode, TamilNadu"
      }
      ,
      {
        text: "பாரம்பரிய தொடர்ச்சிபற்றி மாணவர்கள் அறியவேண்டும்",
        source: "Dhinamani",
        image: "/uraigal/img41.jpg",
        date: "09 Mar 2012",
        location: "Erode, TamilNadu"
      }
      ,
      {
        text: "பன்முக ஆளுமை மிக்கவராக விளங்கியவர் நாமக்கல் கவிஞர்",
        source: "Dhinamani",
        image: "/uraigal/img42.jpg",
        date: "Thur 20 Oct 2015",
        location: "Erode, TamilNadu"
      }
      ,
      {
        text: "பொதுத்துறை வங்கிகளே மக்கள் வங்கிகள்",
        source: "Dhinamani",
        image: "/uraigal/img43.jpg",
        date: "Sat 30 Dec 2017",
        location: "Erode, TamilNadu"
      }
      ,
      {
        text: "பொதுத்துறையைப் பாதுகாப்பதே இன்றைய உடனடிக் கடமை",
        source: "Dhinamani",
        image: "/uraigal/img44.jpg",
        date: "Sat 30 Dec 2017",
        location: "Erode, TamilNadu"
      }
      ,
      {
        text: "‘புதிய இந்தியாவை உருவாக்க மாணவர்கள் முயற்சி மேற்கொள்ள வேண்டும்’",
        source: "Dhinamani",
        image: "/uraigal/img45.jpg",
        date: "Sun 22 Nov 2015",
        location: "Erode, TamilNadu"
      }
      ,
      {
        text: "இறவாப் புகழுடைய நல்நூல்களை மக்களிடம் கொண்டு செல்வது அவசியம்",
        source: "Dhinamani",
        image: "/uraigal/img46.jpg",
        date: "Sun 17 Feb 2019",
        location: "Erode, TamilNadu"
      }
      ,
      {
        text: "சமுதாய மாற்றத்திற்கு அடித்தளமிடுபவை புத்தகங்களே",
        source: "Dhinamani",
        image: "/uraigal/img47.jpg",
        date: "",
        location: "Chennai, TamilNadu"
      }
      ,
      {
        text: "நதிகள் இணைப்பின் முன்னோடி காலிங்கராயன்",
        source: "Dhinamani",
        image: "/uraigal/img48.jpg",
        date: "21 Sept 2016",
        location: "Erode, TamilNadu"
      }
      ,
      {
        text: "சிரமம் இல்லாமல் சிகரம் இல்லை ",
        source: "Dhinamani",
        image: "/uraigal/img49.jpg",
        date: "23 Feb 2012",
        location: "Erode, TamilNadu"
      }
      ,
      {
        text: "ஆசிரியர்கள் மாணவர்களை நல்வழிப்படுத்தவேண்டும் ",
        source: "Dhinamani",
        image: "/uraigal/img50.jpg",
        date: "Sun 2 Oct 2016",
        location: "Erode, TamilNadu"
      }
      ,
      {
        text: "தகவல்பெறும் உரிமைச் சட்டத்தால் ஊழல் குறையும்",
        source: "Dhinamani",
        image: "/uraigal/img51.jpg",
        date: "Fri 28 Jan 2011",
        location: "Erode, TamilNadu"
      }
      ,
      {
        text: "'தலைசிறந்த குடிமக்களை உருவாக்கிக்கொடுப்பது கல்வி நிறுவனங்களின் கடமை'",
        source: "Dhinamani",
        image: "/uraigal/img52.jpg",
        date: "Thur 03 Feb 2011",
        location: "Erode, TamilNadu"
      }
      ,
      {
        text: "தமிழ் மொழியை அறிவியல் பூர்வமாக பரப்ப வேண்டும் ",
        source: "Dhinamani",
        image: "/uraigal/img53.jpg",
        date: "Sat 30 Dec 2017",
        location: "Tirukovilur, TamilNadu"
      }
      ,
      {
        text: "தேசத் தலைவர்களை சாதிச் சிறைகளிலிருந்து மீட்க வேண்டும்",
        source: "Dhinamani",
        image: "/uraigal/img54.jpg",
        date: "31 Jan 2013",
        location: "Erode, TamilNadu"
      }
      ,
      {
        text: "உயர்கல்வியே ஒரு நாட்டிற்கு உயிர்நாடி",
        source: "Dhinamani",
        image: "/uraigal/img55.jpg",
        date: "21 Mar 2016",
        location: "Namakkal, TamilNadu"
      }
      ,
      {
        text: "ஊழலற்ற சமுதாயத்தை உருவாக்கும் பொறுப்பு இளைஞர்களிடமே உள்ளது",
        source: "Dhinamani",
        image: "/uraigal/img56.jpg",
        date: "13 Mar",
        location: "Kumarapalayam, TamilNadu"
      }
    ],
    timeline: [
      {
        year: "1918",
        event: "Born in Mvezo, South Africa"
      },
      {
        year: "1944",
        event: "Joined the African National Congress"
      },
      {
        year: "1964",
        event: "Sentenced to life imprisonment"
      },
      {
        year: "1990",
        event: "Released from prison"
      },
      {
        year: "1993",
        event: "Awarded Nobel Peace Prize"
      },
      {
        year: "1994",
        event: "Elected President of South Africa"
      }
    ],
    gallery: [
      {
        image: "/photos/img-1.jpg",
        caption:
          "Mandela voting in South Africa's first democratic election, 1994"
      },
      {
        image: "/photos/img-2.jpg",
        caption: "With F.W. de Klerk after receiving Nobel Peace Prize"
      },
      {
        image: "/photos/img-3.jpg",
        caption: "Speaking at the United Nations, 1994"
      },
      {
        image: "/photos/img-4.jpg",
        caption:
          "Mandela voting in South Africa's first democratic election, 1994"
      },
      {
        image: "/photos/img-5.jpg",
        caption: "With F.W. de Klerk after receiving Nobel Peace Prize"
      },
      {
        image: "/photos/img-6.jpg",
        caption: "Speaking at the United Nations, 1994"
      },
      {
        image: "/photos/img-7.jpg",
        caption:
          "Mandela voting in South Africa's first democratic election, 1994"
      },
      {
        image: "/photos/img-8.jpg",
        caption: "With F.W. de Klerk after receiving Nobel Peace Prize"
      },
      {
        image: "/photos/img-11.jpg",
        caption: "Speaking at the United Nations, 1994"
      },
      {
        image: "/photos/img-12.jpg",
        caption:
          "Mandela voting in South Africa's first democratic election, 1994"
      },
      {
        image: "/photos/img-13.jpg",
        caption: "With F.W. de Klerk after receiving Nobel Peace Prize"
      },
      {
        image: "/photos/img-14.jpg",
        caption: "Speaking at the United Nations, 1994"
      },
      {
        image: "/photos/img-15.jpg",
        caption:
          "Mandela voting in South Africa's first democratic election, 1994"
      },
      {
        image: "/photos/img-16.jpg",
        caption: "With F.W. de Klerk after receiving Nobel Peace Prize"
      },
      {
        image: "/photos/img-17.jpg",
        caption: "Speaking at the United Nations, 1994"
      },
      {
        image: "/photos/img-18.jpg",
        caption:
          "Mandela voting in South Africa's first democratic election, 1994"
      },
      {
        image: "/photos/img-19.jpg",
        caption: "With F.W. de Klerk after receiving Nobel Peace Prize"
      },
      {
        image: "/photos/img-20.jpg",
        caption: "Speaking at the United Nations, 1994"
      },
      {
        image: "/photos/img-21.jpg",
        caption:
          "Mandela voting in South Africa's first democratic election, 1994"
      },
      {
        image: "/photos/img-22.jpg",
        caption: "With F.W. de Klerk after receiving Nobel Peace Prize"
      },
      {
        image: "/photos/img-23.jpg",
        caption: "Speaking at the United Nations, 1994"
      }
    ]
  };

  const openImageModal = (image) => {
    setExpandedImage(image);
  };

  const closeImageModal = () => {
    setExpandedImage(null);
  };

  return (
    <div className="famous-person-app">
      <nav className="content-tabs">
        <button
          className={activeTab === "quotes" ? "active" : ""}
          onClick={() => setActiveTab("quotes")}
        >
          Famous Quotes
        </button>
        <button
          className={activeTab === "gallery" ? "active" : ""}
          onClick={() => setActiveTab("gallery")}
        >
          Photo Gallery
        </button>
      </nav>

      <main className="content-container">
        <h1 className="publication-title">உரைகள்</h1>
        {activeTab === "quotes" && (
          <div className="quotes-section">
            {famousPerson.quotes.map((quote, index) => (
              <div key={index} className="quote-card">
                <div
                  className="quote-image-container"
                  onClick={() => openImageModal(quote.image)}
                >
                  <img
                    src={quote.image}
                    alt={`${famousPerson.name} - ${quote.source}`}
                    className="quote-image"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src =
                        "https://via.placeholder.com/600x400?text=Image+Not+Available";
                    }}
                  />
                  <div className="image-hover-effect">
                    <span className="zoom-icon">🔍</span>
                  </div>
                </div>
                <div className="quote-content">
                  <blockquote className="quote-text">"{quote.text}"</blockquote>
                  <div className="quote-meta">
                    <cite className="quote-source">{quote.source}</cite>
                    <div className="quote-details">
                      <span className="quote-date">{quote.date}</span>
                      <span className="quote-location">{quote.location}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === "timeline" && (
          <div className="timeline-section">
            <div className="timeline-line"></div>
            {famousPerson.timeline.map((item, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-year">{item.year}</div>
                <div className="timeline-event">{item.event}</div>
              </div>
            ))}
          </div>
        )}

        {activeTab === "gallery" && (
          <div className="gallery-section">
            {famousPerson.gallery.map((item, index) => (
              <div
                key={index}
                className="gallery-item"
                onClick={() => openImageModal(item.image)}
              >
                <img
                  src={item.image}
                  alt={item.caption}
                  className="gallery-image"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src =
                      "https://via.placeholder.com/600x400?text=Image+Not+Available";
                  }}
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        )}
      </main>

      {expandedImage && (
        <div className="image-modal1" onClick={closeImageModal}>
          <div className="modal-content1">
            <button className="close-modal" onClick={closeImageModal}>
              ×
            </button>
            <img
              src={expandedImage}
              alt="Expanded view"
              className="expanded-image"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Urai;
