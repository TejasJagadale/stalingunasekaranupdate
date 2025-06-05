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
        text: "அறிவியலாளர்களின் தியாக வாழ்க்கையை முழுமையாக ஆவணப்படுத்த வேண்டும் ",
        source: "Dhinamani",
        image: "/uraigal/img-1 (1).jpg",
        date: "Sat 02, March 2019",
        location: "Erode, TamilNadu"
      },
      {
        text: "இறவாப் புகழுடைய நல்நூல்களை மக்களிடம் கொண்டு செல்வது அவசியம்",
        source: "Dhinamani",
        image: "/uraigal/img-2.jpg",
        date: "Sun 17 Feb 2019",
        location: "Pudhukottai, TamilNadu"
      },
      {
        text: "காந்தியடிகளை ‘மகாத்மா’ என அடையாளப்படுத்தியவர் தமிழர்",
        source: "Dhinamani",
        image: "/uraigal/img-3.jpg",
        date: "Thu 16 Jan 2019",
        location: "Namakkal, TamilNadu"
      },
      {
        text: "கற்பித்தலுக்கு இணையாக ஆய்வுக்கும் முக்கியத்துவம் தேவை",
        source: "Dhinamani",
        image: "/uraigal/img-4.jpg",
        date: "Tue 18 Sept 2018",
        location: "Tanjavur, TamilNadu"
      },
      {
        text: "ஜாதி, மதத்துக்கு ஏற்றாற்போல் வரலாற்றை வளைப்பது பாவச் செயல்!",
        source: "Dhinamani",
        image: "/uraigal/img-5.jpg",
        date: "Sun 9 Sept 2018",
        location: "New Delhi, India"
      },
      {
        text: "'புத்தக வாசிப்பை மையப்படுத்த வேண்டும்'",
        source: "Dhinamani",
        image: "/uraigal/img-6.jpg",
        date: "Mon 23 Apr 2018",
        location: "Coimbatore, TamilNadu"
      },
      {
        text: "நாட்டு நலப்பணித் திட்ட மாணவர்கள் தலைமைத் தகுதி மிக்கவர்களாக உருவெடுப்பர்",
        source: "Dhinamani",
        image: "/uraigal/img-6.jpg",
        date: "Thur 5 Apr 2018",
        location: "Coimbatore, TamilNadu"
      },
      {
        text: "சமூகப் பொறுப்புள்ள குடிமக்களை உருவாக்குவதே கல்வியின் நோக்கமாக இருக்க வேண்டும்",
        source: "Dhinamani",
        image: "/uraigal/img-7.jpg",
        date: "Sun 18 Mar 2018",
        location: "Namakkal, TamilNadu"
      },
      {
        text: "எழுத்துதான் எழுச்சியைத் தரும் : ஸ்டாலின் குணசேகரன்",
        source: "Dhinamani",
        image: "/uraigal/img-11.jpg",
        date: "Thu 1 Feb 2018",
        location: "Trichy, TamilNadu"
      },
      {
        text: "ஆளுமைகளின் வாழ்க்கை வரலாறு இளைஞர்களுக்கு நல்ல பாடமாக அமையும்",
        source: "Dhinamani",
        image: "/uraigal/img-12.jpg",
        date: "Fri 26 Jan 2018",
        location: "Erode, TamilNadu"
      },
      {
        text: "சமூகத்துக்காகப் பயன்படும் தனித் திறமைகள்தான் முழுமை பெறும்",
        source: "Dhinamani",
        image: "/uraigal/img-13.jpg",
        date: "Sun 28 Jan 2018",
        location: "Erode, TamilNadu"
      },
      {
        text: "வாழ்க்கைக்கு வழிகாட்டும் வல்லமை மிக்கது வரலாறு",
        source: "Dhinamani",
        image: "/uraigal/img-14.jpg",
        date: "Sat 30 Dec 2017",
        location: "Erode, TamilNadu"
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
        {/* <button
          className={activeTab === "timeline" ? "active" : ""}
          onClick={() => setActiveTab("timeline")}
        >
          Timeline
        </button> */}
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
                />
                {/* <div className="gallery-caption">{item.caption}</div> */}
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

      {/* <footer className="app-footer">
        <div className="footer-content">
          <div className="footer-about">
            <h3>About This Collection</h3>
            <p>
              This digital archive presents historical documents, photographs,
              and speeches from {famousPerson.name}'s life and work.
            </p>
          </div>
          <div className="footer-credits">
            <h3>Credits</h3>
            <p>
              All materials are sourced from verified historical archives and
              newspaper publications.
            </p>
          </div>
        </div>
        <div className="footer-copyright">
          © {new Date().getFullYear()} {famousPerson.name} Memorial Archive
        </div>
      </footer> */}
    </div>
  );
};

export default Urai;
