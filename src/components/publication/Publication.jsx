import React, { useState } from 'react';
import "../../styles/publication.css";

const Publication = () => {
  const [activePdf, setActivePdf] = useState("./padaipugal/jeeva-mulakkam.pdf");

  const books = [
    {
      id: "tab1",
      title: "ஜீவா - முழக்கம்  (1997)",
      image: "./images/booksimage/img1.png",
      description: "இந்திய சுதந்திர தினம் ஐம்பதாண்டுப் பொன் விழாவை முன்னிட்டு 'ஜீவா முழக்கம்' ....",
      pdfLink: "./padaipugal/jeeva-mulakkam.pdf",
      flipContent: [
        "Click to Read More...",
        "Click to Read More...",
        "Click to Read More..."
      ]
    },
    {
      id: "tab2",
      title: "தேசவிடுதலையும் தியாகச் சுடர்களும் (1999)",
      image: "./images/booksimage/img2.png",
      description: "இந்நூல் 'ஜீவா முழக்கம்' -இதழின் சுதந்திர தினப் பொன்விழா மலரில்...",
      pdfLink: "./padaipugal/தேசவிடுதலையும் தியாகச் சுடர்களும்.pdf",
      flipContent: [
        "Click to Read More...",
        "Click to Read More...",
        "Click to Read More..."
      ]
    },
        {
      id: "tab3",
      title: "விடுதலை வேள்வியில் தமிழகம் (2001)",
      image: "./images/booksimage/img3.png",
      description: "சுமார் ஆறாண்டுகள் தனது வழக்குரைஞர் தொழிலையும் பொருட்படுத்தாது...",
      pdfLink: "./padaipugal/விடுதலை வேள்வியல் தமிழகம்.pdf",
      flipContent: [
        "Click to Read More...",
        "Click to Read More...",
        "Click to Read More..."
      ]
    },
    {
      id: "tab4",
      title: "வரலாற்றுப் பாதையில் (2007)",
      image: "./images/booksimage/img4.png",
      description: "த. ஸ்டாலின் குணசேகரன் அவர்களால் 'ஜனசக்தி'-நாளிதழில் நாளுக்கு ஒரு கட்டுரைவிதம் நூறு இதழ்களில் ....",
      pdfLink: "./padaipugal/வரலாற்றுப் பாதையில்.pdf",
      flipContent: [
        "Click to Read More...",
        "Click to Read More...",
        "Click to Read More..."
      ]
    },
        {
      id: "tab5",
      title: "மெய் வருத்தக் கூலிதரும் (ஜூலை 2014)",
      image: "./images/booksimage/img5.png",
      description: "கோவை அகில இந்திய வானொலியில் 31 நாட்கள், சென்னை அகில இந்திய வானொலியில் 30 நாட்கள் ....",
      pdfLink: "./padaipugal/மெய் வருத்தக் கூலிதரும்.pdf",
      flipContent: [
        "Click to Read More...",
        "Click to Read More...",
        "Click to Read More..."
      ]
    },
    {
      id: "tab6",
      title: "கந்தகக் காவியங்கள் (ஜூலை 2015)",
      image: "./images/booksimage/img6.png",
      description: "த. ஸ்டாலின் குணசேகரன் எழுதி தினமணி, ஜனசக்தி மற்றும் சில இதழ்களின் நடுப்பக்கங்களிலும்...",
      pdfLink: "./padaipugal/கந்தகக் காவியங்கள்.pdf",
      flipContent: [
        "Click to Read More...",
        "Click to Read More...",
        "Click to Read More..."
      ]
    },
        {
      id: "tab7",
      title: "அன்பார்ந்த மாணவர்களே (ஆகஸ்டு 2015)",
      image: "./images/booksimage/img7.png",
      description: "த. ஸ்டாலின் குணசேகரன் கல்வி நிலையங்களில் ஆற்றிய ஏராளமான உரைகள் அப்போதைக்கப்போதோ தனித்தலைப்பிட்டு .....",
      pdfLink: "./padaipugal/அன்பார்ந்த மாணவர்களே.pdf",
      flipContent: [
        "Click to Read More...",
        "Click to Read More...",
        "Click to Read More..."
      ]
    },
    {
      id: "tab8",
      title: "வரலாறாகிவிட்ட வருகை (அக்டோபர் 2015)",
      image: "./images/booksimage/img8.png",
      description: "முன்னாள் குடியரசுத் தலைவர் மேதகு ஏ.பி.ஜெ. அப்துல்கலாம் அவர்கள் 2009 மற்றும் 2014 ஆம் ஆண்டுகளில் நடைபெற்ற ....",
      pdfLink: "./padaipugal/வரலாறாகிவிட்ட வருகை.pdf",
      flipContent: [
        "Click to Read More...",
        "Click to Read More...",
        "Click to Read More..."
      ]
    },
        {
      id: "tab9",
      title: "அப்துல்கலாம் உரைகள் (அக்டோபர் 2015)",
      image: "./images/booksimage/img9.png",
      description: "முன்னாள் குடியரசுத் தலைவர் மேதகு ஏ.பி.ஜெ. அப்துல்கலாம் அவர்கள் ஈரோடு புத்தகத்திரு விழாவிற்கு ....",
      pdfLink: "./padaipugal/அப்துல்கலாம் உரைகள்.pdf",
      flipContent: [
        "Click to Read More...",
        "Click to Read More...",
        "Click to Read More..."
      ]
    },
    {
      id: "tab10",
      title: "ஜெயகாந்தன் உரைகள் (அக்டோபர் 2015)",
      image: "./images/booksimage/img10.png",
      description: "மக்கள் சிந்தனைப் பேரவையின் சார்பில் நடைபெற்ற 2002 ஆம் ஆண்டின் பாரதிவிழாவில் எழுத்தாளர்...",
      pdfLink: "./padaipugal/ஜெயகாந்தன் உரைகள்.pdf",
      flipContent: [
        "Click to Read More...",
        "Click to Read More...",
        "Click to Read More..."
      ]
    },
        {
      id: "tab11",
      title: "தலை நிமிர வைத்த தலைவர் (2016)",
      image: "./images/booksimage/img11.png",
      description: "த. ஸ்டாலின் குணசேகரன் இலக்கியச் சொற்பொழிவிற்காக சிங்கப்பூர் சென்றிருந்தபோது சிங்கப்பூர் ....",
      pdfLink: "./padaipugal/தலை நிமிர வைத்த தலைவர்.pdf",
      flipContent: [
        "Click to Read More...",
        "Click to Read More...",
        "Click to Read More..."
      ]
    },
    {
      id: "tab12",
      title: "நேர்காணல் (ஜனவரி 2017)",
      image: "./images/booksimage/img12.png",
      description: "ஈரோடு புத்தகத் திருவிழா 2005 ஆம் ஆண்டு தொடங்கப்பட்டது. முதல் ஆண்டே திருவிழா பெரும்...",
      pdfLink: "./padaipugal/நேர்காணல்.pdf",
      flipContent: [
        "Click to Read More...",
        "Click to Read More...",
        "Click to Read More..."
      ]
    },
        {
      id: "tab13",
      title: "சுதந்திரச் சுடர்கள் (ஜனவரி 2017)",
      image: "./images/booksimage/img13.png",
      description: "ஈரோடு புத்தகத் திருவிழா 2005 ஆம் ஆண்டு தொடங்கப்பட்டது. முதல் ஆண்டே...",
      pdfLink: "./padaipugal/சுதந்திரச் சுடர்கள்.pdf",
      flipContent: [
        "Click to Read More...",
        "Click to Read More...",
        "Click to Read More..."
      ]
    },
    {
      id: "tab14",
      title: "மனிதனுக்கு மரணமில்லை (ஜனவரி 2019)",
      image: "./images/booksimage/img14.png",
      description: "பொதிகைத் தொலைக்காட்சியில் தினசரி காலை ஒளிபரப்பாகும் ' தமிழ் விருந்து' ...",
      pdfLink: "./padaipugal/பொதிகைத் தொலைக்காட்சி.pdf",
      flipContent: [
        "Click to Read More...",
        "Click to Read More...",
        "Click to Read More..."
      ]
    },
        {
      id: "tab15",
      title: "விடுதலைக்கு விதை தூவிய விவேகானந்தர் (ஜனவரி 2019)",
      image: "./images/booksimage/img15.png",
      description: "தினமணி ' நாளிதழின் ' இளைஞர் மணி ' பகுதியில் ' இளைய பாரதமே எழுக ! ' என்ற...",
      pdfLink: "./padaipugal/தினமணி நாளிதழின்.pdf",
      flipContent: [
        "Click to Read More...",
        "Click to Read More...",
        "Click to Read More..."
      ]
    }
  ];

  const handleBookClick = (pdfLink) => {
    setActivePdf(pdfLink);
  };

  return (
    <section className="publication-container">
      {/* <h1 className="publication-title">படைப்புகள்</h1> */}
      <div className="publication-layout">
        <div className="book-list">
          {books.map((book) => (
            <div 
              className={`book-item ${activePdf === book.pdfLink ? 'active' : ''}`} 
              key={book.id}
              onClick={() => handleBookClick(book.pdfLink)}
            >
              <div className="flip-book-container">
                <div className="flip-book">
                  <div className="page front">
                    <img src={book.image} alt={book.title} className="book-image" />
                  </div>
                  <div className="page middle">
                    <div className="page-content">
                      <p>{book.flipContent[0]}</p>
                    </div>
                  </div>
                  <div className="page back">
                    <div className="page-content">
                      <p>{book.flipContent[1]}</p>
                    </div>
                  </div>
                  <div className="page last">
                    <div className="page-content">
                      <p>{book.flipContent[2]}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="book-info">
                <h3 className="book-title">{book.title}</h3>
                <p className="book-description">{book.description}</p>
                <p className='readpub'> <a href={book.pdfLink} target='_blank' rel='noopener noreferrer' className="readpub1">Read more</a></p>
              </div>
            </div>
          ))}
        </div>
        <div className="pdf-viewer1">
          {activePdf ? (
            <iframe 
              src={activePdf} 
              title="PDF Viewer" 
              className="pdf-iframe"
              width="100%" 
              height="100%"
            ></iframe>
          ) : (
            <div className="pdf-placeholder">
              <p>Click on a book to view its PDF</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Publication;