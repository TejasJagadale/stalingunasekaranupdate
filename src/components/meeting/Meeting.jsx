import React, { useState, useEffect, useRef } from "react";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";
import "../../styles/meeting.css"; // We'll create this CSS file

const Meeting = () => {
  const [activeTab, setActiveTab] = useState("tab1");
  const [activeAccordion, setActiveAccordion] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const overlayRef = useRef(null);

  useEffect(() => {
    if (selectedImage) {
      // Scroll to the overlay when an image is selected
      overlayRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "center"
      });
      // Prevent background scrolling
      document.body.style.overflow = "hidden";
    } else {
      // Re-enable background scrolling
      document.body.style.overflow = "auto";
    }
  }, [selectedImage]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Close modal when clicking outside image
  const handleOverlayClick = (e) => {
    if (e.target.classList.contains("image-overlay")) {
      setSelectedImage(null);
    }
  };

  const images = [
    { src: "/meetimgs/img-1.jpg", caption: "Interview 1" },
    { src: "/meetimgs/img-2.jpg", caption: "Interview 2" },
    { src: "/meetimgs/img-3.jpg", caption: "Interview 3" },
    { src: "/meetimgs/img-4.jpg", caption: "Interview 4" },
    { src: "/meetimgs/img-5.jpg", caption: "Interview 5" },
    { src: "/meetimgs/img-6.jpg", caption: "Interview 6" },
    { src: "/meetimgs/img-7.jpg", caption: "Interview 7" },
    { src: "/meetimgs/img-8.jpg", caption: "Interview 8" },
    { src: "/meetimgs/img-9.jpg", caption: "Interview 9" },
    { src: "/meetimgs/img-10.jpg", caption: "Interview 10" },
    { src: "/meetimgs/img-11.jpg", caption: "Interview 11" },
    { src: "/meetimgs/img-12.jpg", caption: "Interview 12" },
    { src: "/meetimgs/img-13.jpg", caption: "Interview 13" },
    { src: "/meetimgs/img-14.jpg", caption: "Interview 14" },
    { src: "/meetimgs/img-15.jpg", caption: "Interview 15" },
    { src: "/meetimgs/img-16.jpg", caption: "Interview 16" },
    { src: "/meetimgs/img-17.jpg", caption: "Interview 17" },
    { src: "/meetimgs/img-18.jpg", caption: "Interview 1" },
    { src: "/meetimgs/img-19.jpg", caption: "Interview 2" },
    { src: "/meetimgs/img-20.jpg", caption: "Interview 3" },
    { src: "/meetimgs/img-21.jpg", caption: "Interview 4" },
    { src: "/meetimgs/img-22.jpg", caption: "Interview 5" },
    { src: "/meetimgs/img-23.jpg", caption: "Interview 6" },
    { src: "/meetimgs/img-24.jpg", caption: "Interview 7" },
    { src: "/meetimgs/img-25.jpg", caption: "Interview 8" },
    { src: "/meetimgs/img-26.jpg", caption: "Interview 9" },
    { src: "/meetimgs/img-27.jpg", caption: "Interview 10" },
    { src: "/meetimgs/img-28.jpg", caption: "Interview 11" },
    { src: "/meetimgs/img-29.jpg", caption: "Interview 12" },
    { src: "/meetimgs/img-30.jpg", caption: "Interview 13" },
    { src: "/meetimgs/img-31.jpg", caption: "Interview 14" },
    { src: "/meetimgs/img-32.jpg", caption: "Interview 15" },
    { src: "/meetimgs/img-33.jpg", caption: "Interview 16" },
    { src: "/meetimgs/img-34.jpg", caption: "Interview 17" },
    { src: "/meetimgs/img-35.jpg", caption: "Interview 1" },
    { src: "/meetimgs/img-36.jpg", caption: "Interview 2" },
    { src: "/meetimgs/img-37.jpg", caption: "Interview 3" },
    { src: "/meetimgs/img-38.jpg", caption: "Interview 4" },
    { src: "/meetimgs/img-39.jpg", caption: "Interview 5" },
    { src: "/meetimgs/img-40.jpg", caption: "Interview 6" },
    { src: "/meetimgs/img-41.jpg", caption: "Interview 7" },
    { src: "/meetimgs/img-42.jpg", caption: "Interview 8" },
    { src: "/meetimgs/img-43.jpg", caption: "Interview 9" },
    { src: "/meetimgs/img-44.jpg", caption: "Interview 10" },
    { src: "/meetimgs/img-45.jpg", caption: "Interview 11" },
    { src: "/meetimgs/img-46.jpg", caption: "Interview 12" },
    { src: "/meetimgs/img-47.jpg", caption: "Interview 13" },
    { src: "/meetimgs/img-48.jpg", caption: "Interview 14" },
    { src: "/meetimgs/img-49.jpg", caption: "Interview 15" },
    { src: "/meetimgs/img-50.jpg", caption: "Interview 16" },
    { src: "/meetimgs/img-51.jpg", caption: "Interview 17" },
    { src: "/meetimgs/img-52.jpg", caption: "Interview 13" },
    { src: "/meetimgs/img-53.jpg", caption: "Interview 14" },
    { src: "/meetimgs/img-54.jpg", caption: "Interview 15" },
    { src: "/meetimgs/img-55.jpg", caption: "Interview 16" },
    { src: "/meetimgs/img-56.jpg", caption: "Interview 17" }
  ];

  const tabs = [
    { id: "tab1", label: "All Meetings" },
    { id: "tab2", label: "இசைஞானி இளையராஜா" },
    { id: "tab3", label: "எழுத்தாளர் ஜெயகாந்தன்" },
    { id: "tab4", label: "கலைஞர் மு. கருணாநிதி" },
    { id: "tab5", label: "டாக்டர் வா.செ. குழந்தைசாமி" },
    { id: "tab6", label: "தியாகி ஐ. மாயண்டிபாரதி" },
    { id: "tab7", label: "ஞானாலயா" },
    { id: "tab8", label: "டி.எம் காளியண்ணன்" },
    { id: "tab9", label: "சந்திப்பு புகைப்படங்கள்" }
  ];

  const mobtabs = [
    { id: "tab1", label: "All Meetings" },
    { id: "tab9", label: "சந்திப்பு புகைப்படங்கள்" }
  ];

  const meetings = [
    {
      id: 0,
      title: "இசைஞானி இளையராஜா",
      tag: "Musical Maestro",
      highlight:
        "#சென்னையில் பிரசாத் ஸ்டுடியோவிலுள்ள இசைஞானி அவர்களின் அறையில் சந்தித்து உரையாடிய போது ....",
      image: "./meetings/meeting-1.jpg",
      imageAlt: "Meeting with இசைஞானி இளையராஜா",
      imageCaption: "இசைஞானி இளையராஜா",
      content: [
        "சென்னையில் பிரசாத் ஸ்டுடியோவிலுள்ள இசைஞானி அவர்களின் அறையில் சந்தித்து உரையாடிய போது எடுத்தபடம் எம்முடன் வந்திருந்த அமெரிக்க நண்பர் விஸ்வநாதன் சங்கர், மக்கள் சிந்தனைப் பேரவையின் செயலாளர் ந. அன்பரசு ஆகியோர் உடனிருந்தனர்.",
        "2016 ஆம் ஆண்டு ஈரோடு புத்தகத் திருவிழாவின் தொடக்க நிகழ்வுக்கான சிறப்பு விருந்தினராக இசைஞானி இளையராஜா அவர்களை அழைத்திருந்தோம். அவரை நேரில் அழைக்கும் பொருட்டு சென்னை பிரசாத் ஸ்டுடியோவில் முதல் முறையாகச் சந்தித்துப் பேசும் வாய்ப்புக் கிடைத்தது.",
        {
          quote:
            '"திருவண்ணாமலைக் கோயில் வளாகத்தில் நடைபெற்ற அவரது நூல் திறனாய்வுக் கூட்டத்தில் பேசுவதற்கு எம்மை அழைத்திருந்தார்."'
        },
        "அழைப்பை ஏற்று இசைஞானி அவர்கள் ஈரோடு புத்தகத் திருவிழாவின் தொடக்க நிகழ்வுக்கு வருகைபுரிந்தார். விழா வரலாற்றுச் சிறப்பு மிக்கதாக அமைந்தது. இதன் பிறகு நாம் செயலாளராகப் பொறுப்பேற்றிருக்கும் ஈரோடு தமிழ் இலக்கியப் பேரவை நிகழ்வுக்கு அழைக்க ஒருமுறை அதே பிரசாத் ஸ்டுடியோவில் சந்தித்துப் பேசினோம்.",
        "கோவையிலிருந்து சென்னை செல்கிறபோது குமாரபாளையத்தில், சென்னையில் வேறொரு நிகழ்வில் கடலூர் மாவட்ட வெள்ள நிவாரணப் பணி தொடர்பாக சிதம்பரத்தில் என்று தொடர்ந்து சந்தித்து உரையாடுவதற்கான சூழல் ஏற்பட்டது."
      ],
      pdf: "/meetinpdf/ilayaraja.pdf"
    },
    {
      id: 1,
      title: "எழுத்தாளர் ஜெயகாந்தன்",
      tag: "Musical Maestro",
      highlight:
        "#விடுதலை வேள்வியில் தமிழகம் நூல் வெளியிடப்பட்ட பிறகு 2002 ஆம் ஆண்டுத் தொடக்கத்தில் எழுத்தாளர்....",
      image: "./meetings/meeting-2.jpg",
      imageAlt: "Meeting with எழுத்தாளர் ஜெயகாந்தன்",
      imageCaption: "எழுத்தாளர் ஜெயகாந்தன்",
      content: [
        "விடுதலை வேள்வியில் தமிழகம் நூல் வெளியிடப்பட்ட பிறகு 2002 ஆம் ஆண்டுத் தொடக்கத்தில் எழுத்தாளர் ஜெயகாந்தன் அவர்களை சென்னையிலுள்ள அவரது இல்லத்தில் சந்தித்து அந்நூல் பிரதியை அளித்து உரையாடியபோது எடுத்தபடம். இச்சந்திப்பின் போது எம்முடன் வந்திருந்த மார்க்சீயஅறிஞர் எல்.ஜி. கீதான்ந்தன் அவர்கள் உடனிருந்தார். பள்ளி மாணவனாக இருந்த காலத்திலிருந்தே எழுத்தாளர் ஜெயகாந்தன் அவர்களின் படைப்புகளில் பரிச்சயம் இருந்ததோடு. அவரைப் பார்த்த அனுபவமும் அவரின் சில உரைகளைக் கேட்கிற வாய்ப்பும் கிடைக்கப்பெற்றோம். கல்லூரி மாணவனாக விளங்கிய போது நண்பர்களைச் சந்திப்பதற்கென்றே ஜெயகாந்தன் வைத்திருந்த அறையொன்றில்",
        {
          quote:
            '"திருவண்ணாமலைக் கோயில் வளாகத்தில் நடைபெற்ற அவரது நூல் திறனாய்வுக் கூட்டத்தில் பேசுவதற்கு எம்மை அழைத்திருந்தார்."'
        },
        "முதல் முறையாக அவரைச் சந்தித்தோம். பின்பு பலமுறை சந்தித்துப் பேசுகிற வாய்ப்புக் கிடைத்தது. எம்முடைய வரலாற்றுப் பாதையில் நூலுக்கு முன்னுரை எழுதிக்கொடுத்தார். மிகவும் இளம் வயதிலேயே அவரின் நூலொன்றைத் திறனாய்வு செய்து அவர் முன்னிலையிலேயே பேசும் சந்தர்ப்பமும் அமைந்தது. ஈரோட்டில் நடைபெற்ற பல முக்கிய நிகழ்வுகளுக்கு சிறப்பு விருந்தினராகப் பங்கேற்று உரை நிகழ்த்த ஜேகே அவர்களை அழைத்துள்ளோம். 2002ஆம் ஆண்டிற்கான மக்கள் சிந்தனைப் பேரவையின் பாரதி விருது ஜேகே அவர்களுக்கு ஈரோட்டில் வழங்கப்பட்டது. அவ்விழாவில் ஜேகே முத்திரை பதிக்கதக்க உரை நிகழ்த்தினார். 2006 ஆம் ஆண்டு ஈரோடு புத்தகத் திருவிழாவில் தலைப்பில் சொற்பொழிவாற்றினார் ஜேகே, புத்தகம் என்ற எமது இல்லத்திற்கு வருகை புரிந்துள்ளார் ஜேகே. மற்றொருமுறை எமது குடியிருப்புப் பகுதியிலுள்ள ஊர்ப்புற நூலகத்தின் வாசகர் வட்ட நிகழ்விலும் உரையாற்றியுள்ளார். ஆம் தேதி சென்னையில் நடைபெற்ற எமது வரலாற்றுப் பாதையில் நூல் வெளியீட்டு விழாவிற்கு ஆட்டோவில் வந்து இறங்கி பார்வையளர் வரிசையில் கம்பீரமாக அமர்ந்திருந்த ஜேகேவின் பண்பு வணங்கத்தக்கதாகும். ஈரோடு வந்தால் நிகழ்ச்சி முடிந்த பிறகு சிலசமயம் ஒருநாள் சேர்த்து எங்களோடு இருந்து உரையாடி மகிழ்ந்து அடுத்தநாள் விடைபெறுவார் ஜேகே. ஒருஞானி கரடுமுரடானவரைப் போன்ற தோற்றத்திற்கும் குழந்தையைப் போன்ற உள்ளத்திற்கும் உரியவராக ஏககாலத்தில் திகழமுடியும் என்பதற்கு ஜேகே. மிகப் பொருத்தமான உதாரணம்."
      ],
      pdf: "/meetinpdf/jeyakanthan.pdf"
    },
    {
      id: 2,
      title: "கலைஞர் மு. கருணாநிதி",
      tag: "Musical Maestro",
      highlight:
        "#இரண்டு பாகங்களடங்கிய விடுதலை வேள்வியில் தமிழகம் என்ற நூல் 1 அச்சானவுடன் அதற்கு அணிந்துரை 'எழுதியவர் என்ற முறையில் ....",
      image: "./meetings/meeting-3.jpg",
      imageAlt: "Meeting with கலைஞர் மு. கருணாநிதி",
      imageCaption: "கலைஞர் மு. கருணாநிதி",
      content: [
        "இரண்டு பாகங்களடங்கிய விடுதலை வேள்வியில் தமிழகம் என்ற நூல் 1 அச்சானவுடன் அதற்கு அணிந்துரை 'எழுதியவர் என்ற முறையில் அதன் முதல்பிரதியை அன்றைய தமிழக முதல்வர் டாக்டர் கலைஞர் அவர்களை அவரது சென்னை - கோபாலபுரம் இல்லத்தில் 28.02.2001 ஆம் தேதி சந்தித்து வழங்கியபோது எடுத்த படம். அருகில் தமிழக சட்டப் பேரவை உறுப்பினர் திருப்பூர் கே.சுப்பராயன் உள்ளார். கலைஞர் அவர்களை அவரது கோபாலபுரம் இல்லத்தில் ஐந்து முறை சந்தித்து பேசும் வாய்ப்புக் கிடைக்கப்பெற்றது. விடுதலை வேள்வியில் தமிழகம் நூலிற்கு அணிந்துரை கேட்பதற்காகச் சந்தித்தபோது அவருடன் 1 மட்டும் தனியாக நீண்ட நேரம் உரையாடுகிற வாய்ப்பும் கிடைத்தது. அவர் பேசிய நான்கு கூட்டங்களில் பேசியுள்ளோம்."
      ],
      pdf: "/meetinpdf/karunanithi.pdf"
    },
    {
      id: 3,
      title: "டாக்டர் வா.செ. குழந்தைசாமி",
      tag: "Musical Maestro",
      highlight:
        "#கல்வியாளர், அறிவியலாளர், தமிழறிஞர், கவிஞர், நூலாசிரியர் என்ற பன்முக ஆளுமையுடன் விளங்கிய ....",
      image: "./meetings/meeting-4.jpg",
      imageAlt: "Meeting with டாக்டர் வா.செ. குழந்தைசாமி",
      imageCaption: "டாக்டர் வா.செ. குழந்தைசாமி",
      content: [
        "கல்வியாளர், அறிவியலாளர், தமிழறிஞர், கவிஞர், நூலாசிரியர் என்ற பன்முக ஆளுமையுடன் விளங்கிய அண்ணாபல்கலைக் கழகத்தின் முன்னாள் துணைவேந்தர் டாக்டர் வா.செ.குழந்தைசாமி அவர்களை சென்னை பெசன்ட் நகரிலுள்ள அவரது இல்லத்தில் சந்தித்து உரையாடிய போது எடுத்த படம். வா.செ.குழந்தைசாமி அவர்களிடம் அவர் இறப்பதற்கு 20ஆண்டுகளுக்கு முன்பிருந்து அணுக்கமாகப் பழகும் வாய்ப்பும் அவரைச் சந்திக்கும் போதெல்லாம் ஒரு மணி நேரம், இரண்டு மணி நேரம் என்று சமூகம், மொழி, வரலாறு, அறிவியல் சார்ந்த பல்வேறு அம்சங்கள் குறித்து உரையாடும் வாய்ப்பும் கிடைத்தது.",
        "ஈரோடு புத்தகத் திருவிழா, ஆசிரியர் பாராட்டு விழா, பாரதி விழா என்று நாம் நடத்திய பல நிகழ்வுகளில் வா.செ.கு பங்கு கொண்டுள்ளார். அவரின் நூல்கள் சிலவற்றைத் திறனாய்வு செய்து உரையாற்றுவதற்கு நாமும் சென்னை நிகழ்வுகளுக்கு அவரால் அழைக்கப்பட்டோம். மக்கள் சிந்தனைப் பேரவையின் ஆம் ஆண்டு 'பாரதி விருது' வா.செ.கு அவர்களுக்கு வழங்கப்பட்டது. வா.செ.கு அவர்களிடமான தொடர்புபடுத்தும் பல சம்பவங்களை உள்ளடக்கி அவரின் நினைவு மலரில் விரிவான கட்டுரை எழுதியுள்ளோம்."
      ],
      pdf: "/meetinpdf/kulanthai.pdf"
    },
    {
      id: 4,
      title: "தியாகி ஐ. மாயண்டிபாரதி",
      tag: "Musical Maestro",
      highlight:
        "#தியாகி ஐ.மாயாண்டிபாரதி அவர்களை அவர் இறப்பதற்கு 25ஆண்டுகளுக்கு முன்பிருந்தே நல்ல பழக்கம்....",
      image: "./meetings/meeting-5.jpg",
      imageAlt: "Meeting with தியாகி ஐ. மாயண்டிபாரதி",
      imageCaption: "தியாகி ஐ. மாயண்டிபாரதி",
      content: [
        "தியாகி ஐ.மாயாண்டிபாரதி அவர்களை அவர் இறப்பதற்கு 25ஆண்டுகளுக்கு முன்பிருந்தே நல்ல பழக்கம். மதுரை - வடக்குமாசி வீதியிலுள்ள அவரது இல்லத்திலும் மண்டையம் ஆசாரி வீதியிலுள்ள அலுவலகத்திலும் பலமுறை சந்தித்து நீண்ட நேரம் உரையாடியுள்ளோம். 'விடுதலை வேள்வியில் தமிழகம் நூல் தயாரிப்பின் போது அவரை குறைந்தபட்சம் பத்து முறையாவது அதற்கென சந்தித்திருப்போம். வேறு வேலையாக மதுரை செல்கிற போதும், மதுரை வழியாக வேறு ஊர்களுக்குச் செல்கிற போதும் பெரும்பாலும் ஐ.மாயாண்டிபாரதி யைச் சந்தித்துப் பேசியுள்ளோம். 1 அவரின் விடுதலை போராட்ட வரலாறு, இதழியல் பணிகளில் கிடைத்த அனுபவங்கள், ஜீவா உள்ளிட்ட பிற தலைவர்களுடன் அவருக்கிருந்த நெருக்கமான நேரடித் தொடர்பு, பட்டுக்கோட்டையாருடனனான தோழமை, காந்தியடிகள் உள்ளிட்ட",
        "தேசத் தலைவர்களைப் பார்த்த பரவச நிகழ்வுகள், பாவலர் வரதராசன் நினைவுகள், அவரின் எழுத்துலக அனுபவங்கள் என்று இது போன்ற தலைப்புகளைச் சுற்றிச் சுற்றியே எமது கேள்விகளும் இவருடான உரையாடலும் அமைந்திருக்கும். நேதாஜி விழா, பகத்சிங் விழா, பாரதி விழா என்று பல விழாக்களுக்கு ஐ.மா.பா வை அழைத்துள்ளோம். ஆம் ஆண்டு ஈரோடு புத்தகத் திருவிழாவை ஐ.மா.பா திறந்து வைத்தார். மூன்று சக்கர சைக்களில் வைத்து இவரை திறக்கும் இடத்திற்கும் மேடைக்கும் அழைத்து வந்ததும், அந்த தள்ளாத வயதில் அவர் உணர்வுபூர்வமாக உரை நிகழ்த்தியதும் மறக்க முடியாத நிகழ்வுகளாகும். அவருக்குக் குழந்தை இல்லை. அவரது மனைவி பல முறை வீட்டுக்குச் சென்ற பழக்கத்தில் 'ஈரோட்டுத் தம்பி' என்று அன்போடு அழைத்து மகிழ்வோடு உபசரிப்பார்."
      ],
      pdf: "/meetinpdf/mayandi.pdf"
    },
    {
      id: 5,
      title: "ஞானாலயா",
      tag: "Musical Maestro",
      highlight:
        "#புதுக்கோட்டை நகரில் நடைபெற்ற ரசியப் புரட்சியின் நூற்றாண்டு விழா நிகழ்வில் பங்கேற்று ....",
      image: "./meetings/meeting-6.jpg",
      imageAlt: "Meeting with ஞானாலயா",
      imageCaption: "ஞானாலயா",
      content: [
        "புதுக்கோட்டை நகரில் நடைபெற்ற ரசியப் புரட்சியின் நூற்றாண்டு விழா நிகழ்வில் பங்கேற்று உரை நிகழ்த்திய பின்னர் இரவு 8.30 மணி சுமாருக்கு அந்நகரில் கிருஷ்ணமூர்த்தி டோரதி தம்பதியர் உருவாக்கியுள்ள ஞானாலயா என்ற நூலகத்தைப் பார்வையிடச் சென்றோம். இதன் நிறுவனர் ஞானாலயா கிருஷ்ணமூர்த்தி என்றே அனைவராலும் அன்புடன் அழைக்கப்படுகிறார். சில ஆண்டுகளாகவே இந்நூலகத்திற்குச் சென்று வரவேண்டும் என்ற எண்ணம் எமக்குள் இருந்து கொண்டிருந்தது. எத்தனையோ முறை புதுக்கோட்டைக்கு நிகழ்ச்சிகளுக்குச் சென்ற போது கூட, இந்நூலகத்திற்குச் செல்லும் வாய்ப்பு கிட்டாமலேயே போய்க்கொண்டிருந்தது. 8.30 மணிக்கு நூலகத்திற்குள் நுழைந்த நான் அதிகபட்சம் 9.30 மணி வரை அங்கிருந்து விட்டு இரவோடு இரவாக காரில் ஈரோடு புறப்படுவதாக திட்டம். ஆனால் திரு கிருஷ்ணமூர்த்தியும் அவரது மனைவியும் வெளிப்படுத்திய ஆர்வமும் ஈடுபாடும் ஒருலட்சம் புத்தகங்களை ஒரே இடத்தில் பார்த்த காட்சியும் எம்மை நெகிழ வைத்து விட்டன. நூலகத்தின் ஒவ்வொரு பகுதியாகச் சென்று ஆங்காங்கு அரிய நூல்கள் பலவற்றை எடுத்து அவை தொடர்பான விளக்கங்கள் பேசுவது விவாதிப்பது கருத்துக்கள் கேட்பது என பொழுது போனதே உணராமல் இரவு 12.30 மணி ஆயிற்று.. 4மணி நேரத்திற்கு மேல் தம்பதி சகிதமாக உற்சாகத்துடன் எமது கேள்விகளுக்கெல்லாம் பதில் அளித்துக் கொண்டு வந்தார்.",
        "நள்ளிரவைத் தாண்டி விட்டதால் அவர்கள் வீட்டிலேயே தங்கி விட்டு அதிகாலைப் புறப்படுவதாகப் பயணத் திட்டம் மாற்றப்பட்டது. காலை 6 மணிக்கு புறப்படும் நேரத்தில் காபி குடித்து விட்டுப் பேச தொடங்கினால், காலை 9.30 மணியாகிவிட்டது. காலையில் ஏ.கே.செட்டியார், ரோஜாமுத்தையா செட்டியார், கரிச்சான் குஞ்சு, தஞ்சைரமேஷ். கே.பாலதண்டயுதம் போன்ற பல ஆளுமைகளுடனான தனது அணுக்கமான உறவை உருக்கமாக கூறினார். ஞானாலயா கிருஷ்ணமூர்த்தி. இரவு, பகல் என்று ஏழு மணி நேரத்தைத் தாண்டியும் விடைப் பெற மனமில்லாமல் விடைபெற்ற அனுபவம் சற்று வித்தியாசமானது தான். இந்நூலகம் ஒரு கருவூலம் ஆய்வுக்கான நூல்களின் அணிவகுப்பு. நூற்றுக்கணக்கான பழந்தமிழ் நூல்கள், ஆயிரக்கணக்கான பழைய சிற்றிதழ்கள்... வெளிநாட்டினர் கூட இங்கு வந்து தங்கியிருந்து ஆய்வுகள் மேற்கொள்கின்றனர் தனது வீட்டின் அருகிலேயே தனது சுய ஆர்வத்தில் சொந்த செலவில் இந்நூலகத்திற்கென ஒரு தனிக்கட்டிடத்தைக் கட்டி புத்தகங்களைத் தேடித் தேடி வாங்கி வைத்ததோடு அவற்றை அழகாகவும் சுத்தமாகவும் அடுத்த தமிழ்த் தலைமுறைக்குச் சொத்தாகப் பராமரிக்கும் 'ஞானாலயா' கிருஷ்ணமூர்த்தி தம்பதியரை மக்கள் சிந்தனைப் பேரவை மனப்பூர்வமாக வாழ்த்துகிறது ! பாராட்டுகிறது !"
      ],
      pdf: "/meetinpdf/ggg.pdf"
    },
    {
      id: 5,
      title: "டி.எம் காளியண்ணன் ",
      tag: "Musical Maestro",
      highlight:
        "#நீர்ப்பாசனத் திட்டங்கள் பலவற்றை நிறைவேற்றியதோடு பல கால்வாய்களை ஏற்படுத்தி....",
      image: "./meetings/meeting-7.jpg",
      imageAlt: "Meeting with டி.எம் காளியண்ணன் ",
      imageCaption: "டி.எம் காளியண்ணன் ",
      content: [
        "நீர்ப்பாசனத் திட்டங்கள் பலவற்றை நிறைவேற்றியதோடு பல கால்வாய்களை ஏற்படுத்தி பல்லாயிரக்கணக்கான ஏக்கர் நிலங்களை விளைநிலங்களாக மாற்றியுள்ளார். விவசாய வளர்ச்சியும் கூட்டுறவு அமைப்புகளின் உருவாக்கமும் இவரின் உயிர்த் திட்டங்களாக விளங்கியுள்ளன. வரலாற்றுச் சிறப்புமிக்க பள்ளிபாளையம் காவிரி பாலம், சங்ககிரி சிமெண்ட் ஆலை. சேசசாயி பேப்பர் மில் போன்ற மிகப்பெரிய நிரந்தரத் திட்டங்கள் இவரின் சீரிய முயற்சியால் கிடைத்தவை. கொல்லிமலைக்குப் பாதை அமைத்ததும் இவரே. இவரின் சொந்த நிலங்களில் பெரும்பகுதியை கல்வி நிலையங்கள், கோவில்கள் மற்றும் பொது நிறுவனங்களுக்கு இலவசமாகவும், குறைந்த விலையிலும் மிகநீண்டகால குத்தகைக்கும் கொடுத்து மகிழ்ந்துள்ளார். இத்தகைய வரலாற்று நாயகரைச் சந்தித்து நீண்ட நேரம் உரையாடியது நமக்குப் புத்துணர்வையும் மன நிறைவையும் அளித்தது.",
        "குடியரசுத் தலைவராகப் பொறுப்பேற்றது. டாக்டர் பி.ஆர். அம்பேத்கரின் உரை போன்ற பல வரலாற்றுச் செய்திகளை இவரிடம் நேரடியாகக் கேட்டறிந்தோம். 97 ஆவது வயதில் அடியெடுத்து வைத்துள்ள இவரின் நினைவாற்றலும் ஆங்கிலப் புலமையும், சரளமான தமிழும் நம்மை ஆச்சரியப்பட வைக்கிறது. அரசியல் நிர்ணயசபை உறுப்பினர்களெல்லோரும் அப்படியே இடைக்கால அரசின் நாடாளுமன்ற உறுப்பினர்களாக விளங்கினார்கள். இந்த அடிப்படையில் முதல் நாடாளுமன்ற உறுப்பினர்களில் ஒருவர் திரு டி.எம். காளியண்ணன் அவர்கள். டெல்லி, பஞ்சாப். கல்கத்தா என்று எங்கோ தொலைதூரத்தில் இருந்தாலே சென்று பார்க்க வேண்டிய அளவுக்கு வரலாற்று முக்கியத்துவம் வாய்ந்த இவர் அருகிலுள்ள நாமக்கல் மாவட்டம் திருச்செங்கோட்டில் வாழும் போது அவரை நம்மைப் போன்றவர்கள் சென்று சந்தித்து உரையாடவில்லையெனில் அது வரலாற்றுப் பிழையாகிவிடுமல்லவா ? அந்தக் காலத்திலேயே இண்டர்மீடியட். எஃப்.ஏ. பி.காம். எம்.ஏ ( பொருளாதாரம் ) போன்ற அனைத்து உயர்படிப்புகளையும் சென்னை- லயோலா கல்லூரியிலும் பச்சையப்பன் கல்லூரியிலும் படித்தவர். 1952 ஆம் ஆண்டு நடைபெற்ற முதல் பொதுத் தேர்தலில் ராசிபுரம் சட்டமன்ற உறுப்பினராகத் தேர்வு செய்யப்பட்டார். பின்னர் 1957 மற்றும் 1962 இல் திருச்செங்கோடு சட்டமன்ற உறுப்பினராக இரண்டு முறை தேர்வு செய்யப்பட்டார். 1967 இல் சட்டமன்ற மேலவை உறுப்பினர் பதவிக்கு போட்டியிட்டு வெற்றிபெற்றார். மேலவையில் சட்டமன்ற எதிர்கட்சித் துணைத் தலைவராகவும் விளங்கினார். அக்காலத்திலேயே ஜில்லா போர்டு தலைவர் பதவிக்கு நின்று வெற்றி பெற்றார். அப்போது சேலம், தர்மபுரி, கிருஷ்ணகிரி, நாமக்கல் ஆகிய மாவட்டங்கள் ஒன்றாக இருந்தது. ஆகவே இப்பதவி அமைச்சர் பதவியைவிட செல்வாக்குமிக்கதாக மதிக்கப்பட்டது. கல்லூரி மாணவராக இருந்தபோதே அரசியல் ஈடுபாட்டின் காரணமாக இவரின் நண்பர்களுடன் வடக்கே வார்தாலிலுள்ள காந்தி ஆசிரமத்திற்குச் சென்று காந்தியடிகளுடன் 12 நாட்கள் தங்கியிருந்து பணி செய்தார். காந்தியடிகளிடம் பயிற்சியும் பெற்றார். ராஜாஜியால் தொடங்கப்பட்ட திருச்செங்கோடு காந்தி ஆசிரமத்தின் வளர்ச்சியில் தொடக்கத்திலிருந்தே மிகுந்த ஈடுபாடு காட்டியதோடு ஆசிரம வளர்ச்சிப் பணிகள் அத்தனையிலும் தனது வலுவான பங்களிப்பைச் செலுத்தியுள்ளார். பிற்காலத்தில் தமிழ்நாடு காங்கிரஸ் கமிட்டியின் துணைத் தலைவராகவும் பொருளாளராகவும் பொறுப்பு வகித்துச் செயல்பட்டுள்ளார். இவரின் முன்முயற்சியால் மட்டும் சுமார் 1,000 அரசுப்பள்ளிகள் இவர் பொறுப்பிலிருந்த காலகட்டத்தில் தொடங்கபட்டுள்ளது. கல்வி வளர்ச்சியில் இவரது பணி என்றென்றும் நினைத்துப் போற்றத்தக்கதாகும். இவரின் ஏற்பாட்டின் மூலம் சேலம் மாவட்டத்தில் சுமார் 200 நூலகங்கள் திறக்கப்பட்டன. மாவட்ட நூலகக் குழுவின் தலைவராகவும் திகழ்ந்தார். கடந்த 60 ஆண்டுகளுக்கும் மேலாக கண்ணகி விழாவை திருச்செங்கோடு பகுதியில் தொடர்ந்து நடத்தி வந்தார்.",
        "அன்றைய ஆங்கிலேய அரசு இந்தியாவுக்கு விடுதலை கொடுக்கும் அதிகாரப்பூர்வமான செய்தியை அந்நாட்டின் அமைச்சரவையில் அங்கம் வகித்த 3 ஆங்கிலேய அமைச்சர்கள் கொண்ட குழுவை இந்தியாவிற்கு அனுப்பித் தெரிவித்தனர். 1946 ஆம் ஆண்டு மார்ச் மாதம் இக்குழு இந்தியாவிற்கு வந்தது. அந்தக் குழுவின் பணி இந்தியாவில் அரசியல் அமைப்புச் சட்டத்தை உருவாக்குவதற்கு அரசியல் நிர்ணயசபை ஒன்றை ஏற்படுத்துவது. இங்குள்ள அரசியல் கட்சிகளின் பிரதிநிதிகளைக் கொண்டு இடைக்கால அரசை மத்தியில் உருவாக்குவது என்ற இரண்டு அம்சங்களைக் கொண்டதாகும். அதன் அடிப்படையில் 1946 ஜூலையில் இந்திய அரசியல் நிர்ணயசபைக்கான தேர்தல் நடைபெற்றது. இந்தியா முழுவதும் 202 பேர் தேர்வு செய்யப்பட்டனர். அதில் ஒருவர் தமிழகத்தைச் சேர்ந்த டாக்டர் சுப்பராயன் அவர்கள். டாக்டர் சுப்பராயன் பின்னர் இந்தோனேசிய நாட்டிற்குத் தூதராக நியமிக்கப்பட்டார். அவருக்குப் பதிலாக அந்த இடத்திற்கு அரசியல் நிர்ணயசபையின் உறுப்பினராகத் தேர்வு செய்யப்பட்டவர் அப்போது 28 வயதேயான டி.எம். காளியண்ணன் அவர்கள். இந்தியாவிலேயே அரசியல் நிர்ணயசபை உறுப்பினர்களில் இன்று நம்முடன் வாழும் ஒரே உறுப்பினர் இவர்தான். இந்த ஆண்டு குடியரசு தினத்தை முன்னிட்டு இவரைச் சந்தித்து அரசியல் நிர்ணயசபை. அன்றைய இடைக்கால அரசு. சுதந்திர தினத்தன்று நடைபெற்ற டெல்லி நிகழ்ச்சி, ஜவகர்லால் நேரு முதல் பிரதமராகப் பொறுப்பேற்றது. டாக்டர் ராஜேந்திர பிரசாத் முதல்"
      ],
      pdf: "/meetinpdf/tmkali.pdf"
    }
  ];

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };
  return (
    <div className="meeting-page">
      {/* Mobile Tabs - Horizontal Scrollable */}
      {isMobile && (
        <div className="mobile-tabs-container">
          <div className="mobile-tabs-scroll">
            {mobtabs.map((tab) => (
              <button
                key={tab.id}
                className={`mobile-tab ${activeTab === tab.id ? "active" : ""}`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      )}

      <div className="meeting-container">
        {/* Desktop Sidebar */}
        {!isMobile && (
          <div className="sidebarmeeting">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`sidebar-tab ${
                  activeTab === tab.id ? "active" : ""
                }`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>
        )}

        <div className="content-area1">
          {activeTab === "tab1" && (
            <div className="tab-content active">
              <section>
                <div className="accordion-container">
                  {meetings.map((meeting, index) => (
                    <div
                      key={meeting.id}
                      className={`accordion-item ${
                        activeAccordion === index ? "active" : ""
                      }`}
                    >
                      <div
                        className="accordion-header"
                        onClick={() => toggleAccordion(index)}
                      >
                        <div className="header-content">
                          <div className="person-info">
                            <h3>{meeting.title}</h3>
                            {/* <div className="person-tag">{meeting.tag}</div> */}
                          </div>
                          <ul className="meeting-highlights">
                            <li>{meeting.highlight}</li>
                          </ul>
                          <div>
                            <a
                              href={meeting.pdf}
                              target="_blank"
                              rel="noreferrer"
                            >
                              Read more
                            </a>
                          </div>
                        </div>
                        <div className="accordion-icons">
                          {activeAccordion === index ? (
                            <FaChevronDown className="icon" />
                          ) : (
                            <FaChevronRight className="icon" />
                          )}
                        </div>
                      </div>
                      <div
                        className={`accordion-content ${
                          activeAccordion === index ? "open" : ""
                        }`}
                        style={{
                          maxHeight: activeAccordion === index ? `1000px` : "0"
                        }}
                      >
                        <div className="content-wrapper">
                          <div className="image-container">
                            <img
                              src={meeting.image}
                              alt={meeting.imageAlt}
                              className="meeting-image"
                              loading="lazy"
                            />
                            <div className="image-caption">
                              {meeting.imageCaption}
                            </div>
                          </div>
                          <div className="text-content">
                            {meeting.content.map((item, i) => {
                              if (typeof item === "string") {
                                return <p key={i}>{item}</p>;
                              } else if (item.quote) {
                                return (
                                  <div key={i} className="quote-box">
                                    <blockquote>{item.quote}</blockquote>
                                  </div>
                                );
                              }
                              return null;
                            })}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          )}

          {activeTab === "tab2" && (
            <div className="tab-content active">
              <div className="pdf-container">
                <iframe
                  src="./meetinpdf/ilayaraja.pdf"
                  title="இசைஞானி இளையராஜா PDF"
                  className="pdf-viewer"
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          )}

          {activeTab === "tab3" && (
            <div className="tab-content active">
              <div className="pdf-container">
                <iframe
                  src="./meetinpdf/jeyakanthan.pdf"
                  title="இசைஞானி இளையராஜா PDF"
                  className="pdf-viewer"
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          )}

          {activeTab === "tab4" && (
            <div className="tab-content active">
              <div className="pdf-container">
                <iframe
                  src="./meetinpdf/karunanithi.pdf"
                  title="இசைஞானி இளையராஜா PDF"
                  className="pdf-viewer"
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          )}

          {activeTab === "tab5" && (
            <div className="tab-content active">
              <div className="pdf-container">
                <iframe
                  src="./meetinpdf/kulanthai.pdf"
                  title="இசைஞானி இளையராஜா PDF"
                  className="pdf-viewer"
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          )}

          {activeTab === "tab6" && (
            <div className="tab-content active">
              <div className="pdf-container">
                <iframe
                  src="./meetinpdf/mayandi.pdf"
                  title="இசைஞானி இளையராஜா PDF"
                  className="pdf-viewer"
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          )}

          {activeTab === "tab7" && (
            <div className="tab-content active">
              <div className="pdf-container">
                <iframe
                  src="./meetinpdf/ggg.pdf"
                  title="இசைஞானி இளையராஜா PDF"
                  className="pdf-viewer"
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          )}

          {activeTab === "tab8" && (
            <div className="tab-content active">
              <div className="pdf-container">
                <iframe
                  src="./meetinpdf/tmkali.pdf"
                  title="இசைஞானி இளையராஜா PDF"
                  className="pdf-viewer"
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          )}

          {activeTab === "tab9" && (
            <div className="gallery">
              {images.map((img, idx) => (
                <div
                  key={idx}
                  className="gallery-item"
                  onClick={() => setSelectedImage(img)}
                  style={{ transitionDelay: `${idx * 0.05}s` }}
                >
                  <div className="image-wrapper">
                    <img src={img.src} alt={img.caption} loading="lazy" />
                    <div className="overlay"></div>
                    <div className="caption">
                      <button className="view-btn">View</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
          {selectedImage && (
            <div
              className="image-overlay"
              onClick={handleOverlayClick}
              ref={overlayRef}
            >
              <div className="image-modal">
                <button
                  className="close-btn"
                  onClick={() => setSelectedImage(null)}
                >
                  &times;
                </button>
                <div className="image-content">
                  <img src={selectedImage.src} alt={selectedImage.caption} />
                  <p className="image-caption">{selectedImage.caption}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Meeting;
