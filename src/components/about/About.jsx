import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../styles/about.css";
import { useEffect } from "react";
import { faDownLong } from "@fortawesome/free-solid-svg-icons";
import { useLocation } from "react-router-dom";

const About = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);
  useEffect(() => {
    const handleTabClick = (e) => {
      e.preventDefault();
      const targetId = e.target.getAttribute("href").substring(1);

      // Hide all tab contents
      document.querySelectorAll(".tab-content").forEach((tab) => {
        tab.style.display = "none";
      });

      // Remove active class from all sidebar links
      document.querySelectorAll(".sidebar-link").forEach((link) => {
        link.classList.remove("active");
      });

      // Add active class to clicked link
      e.target.classList.add("active");

      // Show the selected tab content
      const targetTab = document.getElementById(targetId);
      if (targetTab) {
        targetTab.style.display = "block";
      }
    };

    const sidebarLinks = document.querySelectorAll(".sidebar-link");
    sidebarLinks.forEach((link) => {
      link.addEventListener("click", handleTabClick);
    });

    // Show the first tab and highlight the first link by default
    const firstTab = document.querySelector(".tab-content");
    const firstLink = document.querySelector(".sidebar-link");
    if (firstTab && firstLink) {
      firstTab.style.display = "block";
      firstLink.classList.add("active");
    }

    return () => {
      sidebarLinks.forEach((link) => {
        link.removeEventListener("click", handleTabClick);
      });
    };
  }, []);

  return (
    <div class="contentabt">
      <div class="sidebar" id="sidebar">
        <a href="#tab1" class="sidebar-link">
          வாழ்க்கைக் குறிப்பு
        </a>
        <a href="#tab3" class="sidebar-link">
          விருதுகள் மற்றும் அங்கீகாரங்கள்
        </a>
        <a href="#tab4" class="sidebar-link">
          சிறப்புகள்
        </a>
        {/* <a href="#tab5" class="sidebar-link">
          சான்றோர் கூற்று
        </a>
        <a href="#tab6" class="sidebar-link">
          கருத்தரங்குகள்
        </a>
        <a href="#tab7" class="sidebar-link">
          பயணங்கள்
        </a>
        <a href="#tab8" class="sidebar-link">
          சமூகப் பணி
        </a> */}
        <a href="#year1" class="sidebar-link">
          1980-2006
        </a>
        <a href="#year2" class="sidebar-link">
          2007-2013
        </a>
        <a href="#year3" class="sidebar-link">
          2014-2019
        </a>
      </div>

      <div class="content-area">
        <div id="tab1" class="tab-content">
          <h1>வாழ்க்கைக் குறிப்பு</h1>
          <p class="tab-content1">
            {" "}
            <span class="heading">
              இளைஞர் இயக்கங்களின் பிம்பம்:- &nbsp;
            </span>{" "}
            தனது 10ஆவது வயதில்
            <span class="heading1"> 'மாணவர் முன்னேற்ற சங்கம்'</span> என்ற
            அமைப்பைத் தொடங்கினார். பின்னர்
            <span class="heading1"> 'பாரதி இளைஞர் மன்றம்'</span> என்ற இளைஞர்
            அமைப்பைத் தோற்றுவித்து தொடர்ந்து சிறப்புடன் நடத்தி வந்தார். இந்த
            அமைப்பு வெள்ளி விழாக் கண்ட பெருமை கொண்டது. அத்தோடு{" "}
            <span class="heading1">
              'பகத்சிங் இளைஞர் மன்றம்', 'இளைஞர் எழுச்சி இயக்கம்'
            </span>{" "}
            ஆகிய அமைப்புக்களைத் தோற்றுவித்து நடத்திவந்தார். ஒரு கட்டத்தில்
            இத்தனை அமைப்புக்களையும் ஒன்றிணைத்து
            <span class="heading1">'மக்கள் சிந்தனைப் பேரவை'</span> என்ற கட்சி
            சார்பற்ற பொது நல அமைப்பினை கடந்த இருபது ஆண்டுகளுக்கு முன்பு
            நிறுவினார்.
          </p>
          <p class="tab-content1">
            {" "}
            <span class="heading">மாநிலம் தழுவிய சமூக இயக்கம்:-&nbsp;</span>
            <span class="heading1">'மக்கள் சிந்தனைப் பேரவை'</span> - என்ற இவர்
            உருவாக்கிய பொது நல அமைப்பு ஈரோட்டைத் தலைமையிடமாக கொண்டு மாநிலந்
            தழுவிய முறையில் மிகச் சிறப்பாகச் செயல்பட்டு வருகிறது. சமூகவியல்
            லட்சியங்களை அடிப்படையாகக் கொண்ட இவ்வியக்கம் மாணவர்கள், இளைஞர்கள்,
            ஆசிரியர்கள் மற்றும் பொதுமக்கள் மத்தியில் எழுச்சியையும்
            விழிப்புணர்வையும் ஏற்படுத்தி வருகிறது.
          </p>
          <p class="tab-content1">
            {" "}
            <span class="heading">பொது அமைப்புகளில் பங்கு:-&nbsp;</span>{" "}
            ஐம்பதாண்டு காலப் பாரம்பரியம்மிக்க 'ஈரோடு தமிழ் இலக்கியப்
            பேரவை'(சாகித்ய அகாடமியுடன் இணைக்கப்பட்டது)யின் செயலாளர், ஈரோடு
            மாவட்ட ரயில் பயணிகள் நலச் சங்கத் தலைவர் உள்ளிட்ட வேறு பல பொது
            அமைப்புகளிலும் முக்கியப் பொறுப்புகள் வகித்துச் செயல்பட்டு வருகிறார்.
          </p>
          <p class="tab-content1">
            <span class="heading">
              சமூக விழிப்புணர்வு சொற்பொழிவுகள்:-&nbsp;
            </span>
            கலை, இலக்கியம், மொழி,வரலாறு, பொருளாதாரம், அரசியல், அறிவியல்,
            சமூகவியல், தன்னம்பிக்கை, நாட்டுப்பற்று போன்ற சமூக
            முன்னேற்றத்திற்கும் மாற்றத்திற்குமான தலைப்புக்களில் மாநிலத்தின
            பல்வேறு பகுதிகளிலும் வேறு மாநிலங்களிலும் கடந்த 40 ஆண்டுகளாக
            சொற்பொழிவுகளை தொடர்ந்து நிகழ்த்தியுள்ளார்.
          </p>
          <p class="tab-content1">
            <span class="heading">
              <span class="heading1">'ஜீவா முழக்கம்'</span> மலர்
              தொகுப்பு:-&nbsp;
            </span>
            <span class="heading1">'ஜீவா முழக்கம்'</span> - வார இதழின் சார்பில்
            சுதந்திரப் பொன் விழா மலர் ஒன்றினைத் தொகுக்கும் முழுப் பொறுப்பும்
            இவரிடத்தில் ஒப்படைக்கப்பட்டது. இவர் வட மாநிலங்களுக்கெல்லாம்
            நேரடியாகச் சென்று பல பயனுள்ள புதிய விபரங்களைத் திரட்டித் தொகுத்தார்.
            அம் மலர் தமிழகத்தில் வெளியான விடுதலைப் பொன் விழா மலர்களிலேயே மிகச்
            சிறந்த மலராகப் பெரிதும் பாராட்டப்பட்டது.
          </p>
          <p class="tab-content1">
            <span class="heading">பிரசித்தி பெற்ற நூல்கள்:-&nbsp;</span>
            <span class="heading">
              'தேச விடுதலையும் தியாகச் சுடர்களும்'
            </span>{" "}
            என்ற இவரது தொகுப்புநூல் பிரசித்தி பெற்றதாகும். அத்தோடு
            <span class="heading">'வரலாற்றுப் பாதையில்...'</span> என்ற இரண்டு
            பாகங்களைக் கொண்ட இவர் எழுதிய நூல் 2007ஆம் ஆண்டு வெளியான தமிழ்
            நூல்களிலேயே சிறந்த நூல் என சென்னை இலக்கியச் சிந்தனை அமைப்பினரால்
            தேர்வு செய்யப்பட்டு அந்த ஆண்டிற்கான
            <span class="heading">'இலக்கியச் சிந்தனை'ப்</span> பரிசும்
            இந்நூலுக்கு வழங்கப்பட்டது. இவரது வானொலி உரைகள்{" "}
            <span class="heading">'மெய் வருத்தக் கூலிதரும்'</span> என்ற
            தலைப்பில் நூலாக வெளிவந்துள்ளது.
          </p>
          <p class="tab-content1">
            <span class="heading">பல்கலைக் கழகங்களிலும் கல்லூரி:-&nbsp;</span>
            பள்ளிகளிலும் மாணவர்களிடையே இடையறாது சொற்பொழிவாற்றி வரும் இவர் தனது
            வித்தியாசமான உரைவீச்சு மூலமாகவும் மக்கள் சிந்தனைப் பேரவையின் இதர
            மாணவர் நலன் சார்ந்த செயல்திட்டங்கள் மூலமாகவும் மாணவர்கள் மத்தியில்
            ஒரு ஆரோக்கியமான தாக்கத்தை உருவாக்கியுள்ளார்.
          </p>
        </div>
        <div id="tab2" class="tab-content">
          <h1>படைப்புகள்</h1>
          <p class="tab-content1">This is the content for tab 2.</p>
        </div>
        <div id="tab3" class="tab-content">
          <h1>விருதுகள்</h1>
          <table>
            <thead>
              <tr>
                <th>Title of Award</th>
                <th>Year</th>
                <th>View PDF</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>கல்லூரி முதல்வர் வழங்கிய சிறப்புச் சான்று</td>
                <td>1982</td>
                <td>
                  <a href="/virudhugal/1.pdf" class="btn-view" target="_blank">
                    View PDF
                  </a>
                  <a href="/virudhugal/1.pdf" target="_blank">
                    <FontAwesomeIcon
                      icon={faDownLong}
                      size="2x"
                      className="iconss"
                    />
                  </a>
                </td>
              </tr>
              <tr>
                <td>OUTSTANDING YOUNG PERSON</td>
                <td>1990</td>
                <td>
                  <a href="/virudhugal/2.pdf" class="btn-view" target="_blank">
                    View PDF
                  </a>
                  <a href="/virudhugal/1.pdf" target="_blank">
                    <FontAwesomeIcon
                      icon={faDownLong}
                      size="2x"
                      className="iconss"
                    />
                  </a>
                </td>
              </tr>
              <tr>
                <td>சாதனைச் செம்மல்</td>
                <td>2001</td>
                <td>
                  <a
                    href="/virudhugal/3.pdf3.pdf"
                    class="btn-view"
                    target="_blank"
                  >
                    View PDF
                  </a>
                  <a href="/virudhugal/1.pdf" target="_blank">
                    <FontAwesomeIcon
                      icon={faDownLong}
                      size="2x"
                      className="iconss"
                    />
                  </a>
                </td>
              </tr>
              <tr>
                <td>காவல்துறையின் சிறப்புச் சான்று</td>
                <td>2002</td>
                <td>
                  <a href="/virudhugal/4.pdf" class="btn-view" target="_blank">
                    View PDF
                  </a>
                  <a href="/virudhugal/1.pdf" target="_blank">
                    <FontAwesomeIcon
                      icon={faDownLong}
                      size="2x"
                      className="iconss"
                    />
                  </a>
                </td>
              </tr>
              <tr>
                <td>TOP LINE AWARD</td>
                <td>2002</td>
                <td>
                  <a href="/virudhugal/5.pdf" class="btn-view" target="_blank">
                    View PDF
                  </a>
                  <a href="/virudhugal/1.pdf" target="_blank">
                    <FontAwesomeIcon
                      icon={faDownLong}
                      size="2x"
                      className="iconss"
                    />
                  </a>
                </td>
              </tr>
              <tr>
                <td>FOR THE SAKE OF HONOUR</td>
                <td>2002</td>
                <td>
                  <a href="/virudhugal/6.pdf" class="btn-view" target="_blank">
                    View PDF
                  </a>
                  <a href="/virudhugal/1.pdf" target="_blank">
                    <FontAwesomeIcon
                      icon={faDownLong}
                      size="2x"
                      className="iconss"
                    />
                  </a>
                </td>
              </tr>
              <tr>
                <td>சாதனையாளர் விருது</td>
                <td>2003</td>
                <td>
                  <a href="/virudhugal/7.pdf" class="btn-view" target="_blank">
                    View PDF
                  </a>
                  <a href="/virudhugal/1.pdf" target="_blank">
                    <FontAwesomeIcon
                      icon={faDownLong}
                      size="2x"
                      className="iconss"
                    />
                  </a>
                </td>
              </tr>
              <tr>
                <td>OUTSTANDING CITIZEN</td>
                <td>2003</td>
                <td>
                  <a href="/virudhugal/8.pdf" class="btn-view" target="_blank">
                    View PDF
                  </a>
                  <a href="/virudhugal/1.pdf" target="_blank">
                    <FontAwesomeIcon
                      icon={faDownLong}
                      size="2x"
                      className="iconss"
                    />
                  </a>
                </td>
              </tr>
              <tr>
                <td>VOCATIONAL EXCELLENCE AWARD</td>
                <td>2004</td>
                <td>
                  <a href="/virudhugal/9.pdf" class="btn-view" target="_blank">
                    View PDF
                  </a>
                  <a href="/virudhugal/1.pdf" target="_blank">
                    <FontAwesomeIcon
                      icon={faDownLong}
                      size="2x"
                      className="iconss"
                    />
                  </a>
                </td>
              </tr>
              <tr>
                <td>சேவைச் செம்மல்</td>
                <td>2004</td>
                <td>
                  <a href="/virudhugal/10.pdf" class="btn-view" target="_blank">
                    View PDF
                  </a>
                  <a href="/virudhugal/1.pdf" target="_blank">
                    <FontAwesomeIcon
                      icon={faDownLong}
                      size="2x"
                      className="iconss"
                    />
                  </a>
                </td>
              </tr>
              <tr>
                <td>சிறந்த எழுத்தாளர்</td>
                <td>2004</td>
                <td>
                  <a href="/virudhugal/11.pdf" class="btn-view" target="_blank">
                    View PDF
                  </a>
                  <a href="/virudhugal/1.pdf" target="_blank">
                    <FontAwesomeIcon
                      icon={faDownLong}
                      size="2x"
                      className="iconss"
                    />
                  </a>
                </td>
              </tr>
              <tr>
                <td>சிகரம்</td>
                <td>2005</td>
                <td>
                  <a href="/virudhugal/12.pdf" class="btn-view" target="_blank">
                    View PDF
                  </a>
                  <a href="/virudhugal/1.pdf" target="_blank">
                    <FontAwesomeIcon
                      icon={faDownLong}
                      size="2x"
                      className="iconss"
                    />
                  </a>
                </td>
              </tr>
              <tr>
                <td>SERVICE AWARD</td>
                <td>2006</td>
                <td>
                  <a href="/virudhugal/13.pdf" class="btn-view" target="_blank">
                    View PDF
                  </a>
                  <a href="/virudhugal/1.pdf" target="_blank">
                    <FontAwesomeIcon
                      icon={faDownLong}
                      size="2x"
                      className="iconss"
                    />
                  </a>
                </td>
              </tr>
              <tr>
                <td>சாதனையாளர் விருது</td>
                <td>2006</td>
                <td>
                  <a href="/virudhugal/14.pdf" class="btn-view" target="_blank">
                    View PDF
                  </a>
                  <a href="/virudhugal/1.pdf" target="_blank">
                    <FontAwesomeIcon
                      icon={faDownLong}
                      size="2x"
                      className="iconss"
                    />
                  </a>
                </td>
              </tr>
              <tr>
                <td>பாரதி இலக்கியச் செல்வர்</td>
                <td>2007</td>
                <td>
                  <a href="/virudhugal/15.pdf" class="btn-view" target="_blank">
                    View PDF
                  </a>
                  <a href="/virudhugal/1.pdf" target="_blank">
                    <FontAwesomeIcon
                      icon={faDownLong}
                      size="2x"
                      className="iconss"
                    />
                  </a>
                </td>
              </tr>
              <tr>
                <td>PERSONALITY OF THE WEEK</td>
                <td>2007</td>
                <td>
                  <a href="/virudhugal/16.pdf" class="btn-view" target="_blank">
                    View PDF
                  </a>
                  <a href="/virudhugal/1.pdf" target="_blank">
                    <FontAwesomeIcon
                      icon={faDownLong}
                      size="2x"
                      className="iconss"
                    />
                  </a>
                </td>
              </tr>
              <tr>
                <td>சாதனையாளர் விருது</td>
                <td>2007</td>
                <td>
                  <a href="/virudhugal/17.pdf" class="btn-view" target="_blank">
                    View PDF
                  </a>
                  <a href="/virudhugal/1.pdf" target="_blank">
                    <FontAwesomeIcon
                      icon={faDownLong}
                      size="2x"
                      className="iconss"
                    />
                  </a>
                </td>
              </tr>
              <tr>
                <td>இலக்கியச் சிந்தனைப் பரிசு</td>
                <td>2008</td>
                <td>
                  <a href="/virudhugal/18.pdf" class="btn-view" target="_blank">
                    View PDF
                  </a>
                  <a href="/virudhugal/1.pdf" target="_blank">
                    <FontAwesomeIcon
                      icon={faDownLong}
                      size="2x"
                      className="iconss"
                    />
                  </a>
                </td>
              </tr>
              <tr>
                <td>மனிதநேயச் செம்மல்</td>
                <td>2008</td>
                <td>
                  <a href="/virudhugal/19.pdf" class="btn-view" target="_blank">
                    View PDF
                  </a>
                  <a href="/virudhugal/1.pdf" target="_blank">
                    <FontAwesomeIcon
                      icon={faDownLong}
                      size="2x"
                      className="iconss"
                    />
                  </a>
                </td>
              </tr>
              <tr>
                <td>பன்னூல் பரப்பும் பைந்தமிழ்ச் செல்வர்</td>
                <td>2009</td>
                <td>
                  <a href="/virudhugal/20.pdf" class="btn-view" target="_blank">
                    View PDF
                  </a>
                  <a href="/virudhugal/1.pdf" target="_blank">
                    <FontAwesomeIcon
                      icon={faDownLong}
                      size="2x"
                      className="iconss"
                    />
                  </a>
                </td>
              </tr>
              <tr>
                <td>பாரதி விருது</td>
                <td>2010</td>
                <td>
                  <a href="/virudhugal/21.pdf" class="btn-view" target="_blank">
                    View PDF
                  </a>
                  <a href="/virudhugal/1.pdf" target="_blank">
                    <FontAwesomeIcon
                      icon={faDownLong}
                      size="2x"
                      className="iconss"
                    />
                  </a>
                </td>
              </tr>
              <tr>
                <td>MALCOM CENTENARY EDUCATION AWARD</td>
                <td>2010</td>
                <td>
                  <a href="/virudhugal/22.pdf" class="btn-view" target="_blank">
                    View PDF
                  </a>
                  <a href="/virudhugal/1.pdf" target="_blank">
                    <FontAwesomeIcon
                      icon={faDownLong}
                      size="2x"
                      className="iconss"
                    />
                  </a>
                </td>
              </tr>
              <tr>
                <td>இளைஞர் எழுச்சி நாயகன்</td>
                <td>2010</td>
                <td>
                  <a href="/virudhugal/23.pdf" class="btn-view" target="_blank">
                    View PDF
                  </a>
                  <a href="/virudhugal/1.pdf" target="_blank">
                    <FontAwesomeIcon
                      icon={faDownLong}
                      size="2x"
                      className="iconss"
                    />
                  </a>
                </td>
              </tr>
              <tr>
                <td>சிந்தனைச் சிற்பி</td>
                <td>2011</td>
                <td>
                  <a href="/virudhugal/24.pdf" class="btn-view" target="_blank">
                    View PDF
                  </a>
                  <a href="/virudhugal/1.pdf" target="_blank">
                    <FontAwesomeIcon
                      icon={faDownLong}
                      size="2x"
                      className="iconss"
                    />
                  </a>
                </td>
              </tr>
              <tr>
                <td>KNOWLEDGE CONNECTIVITY AWARD</td>
                <td>2011</td>
                <td>
                  <a href="/virudhugal/25.pdf" class="btn-view" target="_blank">
                    View PDF
                  </a>
                  <a href="/virudhugal/1.pdf" target="_blank">
                    <FontAwesomeIcon
                      icon={faDownLong}
                      size="2x"
                      className="iconss"
                    />
                  </a>
                </td>
              </tr>
              <tr>
                <td>செம்மொழிச் செம்மல்</td>
                <td>2011</td>
                <td>
                  <a href="/virudhugal/26.pdf" class="btn-view" target="_blank">
                    View PDF
                  </a>
                  <a href="/virudhugal/1.pdf" target="_blank">
                    <FontAwesomeIcon
                      icon={faDownLong}
                      size="2x"
                      className="iconss"
                    />
                  </a>
                </td>
              </tr>
              <tr>
                <td>ஈரோட்டின் நாயகர் விருது</td>
                <td>2012</td>
                <td>
                  <a href="/virudhugal/27.pdf" class="btn-view" target="_blank">
                    View PDF
                  </a>
                  <a href="/virudhugal/1.pdf" target="_blank">
                    <FontAwesomeIcon
                      icon={faDownLong}
                      size="2x"
                      className="iconss"
                    />
                  </a>
                </td>
              </tr>
              <tr>
                <td>மொழிக் காவலர்</td>
                <td>2012</td>
                <td>
                  <a href="/virudhugal/28.pdf" class="btn-view" target="_blank">
                    View PDF
                  </a>
                  <a href="/virudhugal/1.pdf" target="_blank">
                    <FontAwesomeIcon
                      icon={faDownLong}
                      size="2x"
                      className="iconss"
                    />
                  </a>
                </td>
              </tr>
              <tr>
                <td>சாதனையாளர் விருது</td>
                <td>2012</td>
                <td>
                  <a href="/virudhugal/29.pdf" class="btn-view" target="_blank">
                    View PDF
                  </a>
                  <a href="/virudhugal/1.pdf" target="_blank">
                    <FontAwesomeIcon
                      icon={faDownLong}
                      size="2x"
                      className="iconss"
                    />
                  </a>
                </td>
              </tr>
              <tr>
                <td>நூல்நேசச் செல்வர்</td>
                <td>2013</td>
                <td>
                  <a href="/virudhugal/30.pdf" class="btn-view" target="_blank">
                    View PDF
                  </a>
                  <a href="/virudhugal/1.pdf" target="_blank">
                    <FontAwesomeIcon
                      icon={faDownLong}
                      size="2x"
                      className="iconss"
                    />
                  </a>
                </td>
              </tr>
              <tr>
                <td>அறவாணர் சாதனை விருது</td>
                <td>2013</td>
                <td>
                  <a href="/virudhugal/31.pdf" class="btn-view" target="_blank">
                    View PDF
                  </a>
                  <a href="/virudhugal/1.pdf" target="_blank">
                    <FontAwesomeIcon
                      icon={faDownLong}
                      size="2x"
                      className="iconss"
                    />
                  </a>
                </td>
              </tr>
              <tr>
                <td>சமூக நோக்கு விருது</td>
                <td>2013</td>
                <td>
                  <a href="/virudhugal/32.pdf" class="btn-view" target="_blank">
                    View PDF
                  </a>
                  <a href="/virudhugal/1.pdf" target="_blank">
                    <FontAwesomeIcon
                      icon={faDownLong}
                      size="2x"
                      className="iconss"
                    />
                  </a>
                </td>
              </tr>
              <tr>
                <td>SERVICE EXCELLENCE AWARD</td>
                <td>2013</td>
                <td>
                  <a href="/virudhugal/33.pdf" class="btn-view" target="_blank">
                    View PDF
                  </a>
                  <a href="/virudhugal/1.pdf" target="_blank">
                    <FontAwesomeIcon
                      icon={faDownLong}
                      size="2x"
                      className="iconss"
                    />
                  </a>
                </td>
              </tr>
              <tr>
                <td>சாதனைச் செம்மல் விருது</td>
                <td>2014</td>
                <td>
                  <a href="/virudhugal/34.pdf" class="btn-view" target="_blank">
                    View PDF
                  </a>
                  <a href="/virudhugal/1.pdf" target="_blank">
                    <FontAwesomeIcon
                      icon={faDownLong}
                      size="2x"
                      className="iconss"
                    />
                  </a>
                </td>
              </tr>
              <tr>
                <td>பாரதி விருது</td>
                <td>2014</td>
                <td>
                  <a href="/virudhugal/35.pdf" class="btn-view" target="_blank">
                    View PDF
                  </a>
                  <a href="/virudhugal/1.pdf" target="_blank">
                    <FontAwesomeIcon
                      icon={faDownLong}
                      size="2x"
                      className="iconss"
                    />
                  </a>
                </td>
              </tr>
              <tr>
                <td>கெளரவ டாக்டர் பட்டம்</td>
                <td>2014</td>
                <td>
                  <a href="/virudhugal/36.pdf" class="btn-view" target="_blank">
                    View PDF
                  </a>
                  <a href="/virudhugal/1.pdf" target="_blank">
                    <FontAwesomeIcon
                      icon={faDownLong}
                      size="2x"
                      className="iconss"
                    />
                  </a>
                </td>
              </tr>
              <tr>
                <td>புத்தகர் விருது</td>
                <td>2015</td>
                <td>
                  <a href="/virudhugal/37.pdf" class="btn-view" target="_blank">
                    View PDF
                  </a>
                  <a href="/virudhugal/1.pdf" target="_blank">
                    <FontAwesomeIcon
                      icon={faDownLong}
                      size="2x"
                      className="iconss"
                    />
                  </a>
                </td>
              </tr>
              <tr>
                <td>கனடா அரசின் பாராட்டு மடல்கள்</td>
                <td>2015</td>
                <td>
                  <a href="/virudhugal/38.pdf" class="btn-view" target="_blank">
                    View PDF
                  </a>
                  <a href="/virudhugal/1.pdf" target="_blank">
                    <FontAwesomeIcon
                      icon={faDownLong}
                      size="2x"
                      className="iconss"
                    />
                  </a>
                </td>
              </tr>
              <tr>
                <td>நியூஜெர்சி தமிழ்ச்சங்க விருது</td>
                <td>2015</td>
                <td>
                  <a href="/virudhugal/39.pdf" class="btn-view" target="_blank">
                    View PDF
                  </a>
                  <a href="/virudhugal/1.pdf" target="_blank">
                    <FontAwesomeIcon
                      icon={faDownLong}
                      size="2x"
                      className="iconss"
                    />
                  </a>
                </td>
              </tr>
              <tr>
                <td>வாசிங்டன் தமிழ்ச்சங்க விருது</td>
                <td>2015</td>
                <td>
                  <a href="/virudhugal/40.pdf" class="btn-view" target="_blank">
                    View PDF
                  </a>
                  <a href="/virudhugal/1.pdf" target="_blank">
                    <FontAwesomeIcon
                      icon={faDownLong}
                      size="2x"
                      className="iconss"
                    />
                  </a>
                </td>
              </tr>
              <tr>
                <td>SERVICE AWARD</td>
                <td>2015</td>
                <td>
                  <a href="/virudhugal/41.pdf" class="btn-view" target="_blank">
                    View PDF
                  </a>
                  <a href="/virudhugal/1.pdf" target="_blank">
                    <FontAwesomeIcon
                      icon={faDownLong}
                      size="2x"
                      className="iconss"
                    />
                  </a>
                </td>
              </tr>
              <tr>
                <td>கலாம் கல்வி விருது</td>
                <td>2015</td>
                <td>
                  <a href="/virudhugal/42.pdf" class="btn-view" target="_blank">
                    View PDF
                  </a>
                  <a href="/virudhugal/1.pdf" target="_blank">
                    <FontAwesomeIcon
                      icon={faDownLong}
                      size="2x"
                      className="iconss"
                    />
                  </a>
                </td>
              </tr>
              <tr>
                <td>நாமக்கல் கவிஞர் நற்றமிழ் விருது</td>
                <td>2015</td>
                <td>
                  <a href="/virudhugal/43.pdf" class="btn-view" target="_blank">
                    View PDF
                  </a>
                  <a href="/virudhugal/1.pdf" target="_blank">
                    <FontAwesomeIcon
                      icon={faDownLong}
                      size="2x"
                      className="iconss"
                    />
                  </a>
                </td>
              </tr>
              <tr>
                <td>சமூகசேவைச் செம்மல்</td>
                <td>2015</td>
                <td>
                  <a href="/virudhugal/44.pdf" class="btn-view" target="_blank">
                    View PDF
                  </a>
                  <a href="/virudhugal/1.pdf" target="_blank">
                    <FontAwesomeIcon
                      icon={faDownLong}
                      size="2x"
                      className="iconss"
                    />
                  </a>
                </td>
              </tr>
              <tr>
                <td>ஔவை விருது</td>
                <td>2016</td>
                <td>
                  <a href="/virudhugal/45.pdf" class="btn-view" target="_blank">
                    View PDF
                  </a>
                  <a href="/virudhugal/1.pdf" target="_blank">
                    <FontAwesomeIcon
                      icon={faDownLong}
                      size="2x"
                      className="iconss"
                    />
                  </a>
                </td>
              </tr>
              <tr>
                <td>நூல்களின் காவலர் விருது</td>
                <td>2016</td>
                <td>
                  <a href="/virudhugal/46.pdf" class="btn-view" target="_blank">
                    View PDF
                  </a>
                  <a href="/virudhugal/1.pdf" target="_blank">
                    <FontAwesomeIcon
                      icon={faDownLong}
                      size="2x"
                      className="iconss"
                    />
                  </a>
                </td>
              </tr>
              <tr>
                <td>திருவள்ளுவர் விருது</td>
                <td>2017</td>
                <td>
                  <a href="/virudhugal/47.pdf" class="btn-view" target="_blank">
                    View PDF
                  </a>
                  <a href="/virudhugal/1.pdf" target="_blank">
                    <FontAwesomeIcon
                      icon={faDownLong}
                      size="2x"
                      className="iconss"
                    />
                  </a>
                </td>
              </tr>
              <tr>
                <td>காவல் கண்காணிப்பாளரின் பாராட்டுமடல்</td>
                <td>2017</td>
                <td>
                  <a href="/virudhugal/48.pdf" class="btn-view" target="_blank">
                    View PDF
                  </a>
                  <a href="/virudhugal/1.pdf" target="_blank">
                    <FontAwesomeIcon
                      icon={faDownLong}
                      size="2x"
                      className="iconss"
                    />
                  </a>
                </td>
              </tr>
              <tr>
                <td>சொற்கோ பட்டம்</td>
                <td>2018</td>
                <td>
                  <a href="/virudhugal/49.pdf" class="btn-view" target="_blank">
                    View PDF
                  </a>
                  <a href="/virudhugal/1.pdf" target="_blank">
                    <FontAwesomeIcon
                      icon={faDownLong}
                      size="2x"
                      className="iconss"
                    />
                  </a>
                </td>
              </tr>
              <tr>
                <td>சிந்தனைச் செல்வர்</td>
                <td>2018</td>
                <td>
                  <a href="/virudhugal/50.pdf" class="btn-view" target="_blank">
                    View PDF
                  </a>
                  <a href="/virudhugal/1.pdf" target="_blank">
                    <FontAwesomeIcon
                      icon={faDownLong}
                      size="2x"
                      className="iconss"
                    />
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div id="tab4" class="tab-content">
          <h1>சிறப்புகள்</h1>
          <p class="tab-content1">
            <span class="heading1">'ஜீவா முழக்கம்' </span>- வார இதழின் சார்பில்
            சுதந்திரப் பொன் விழா மலர் ஒன்றினைத் தொகுக்கும் முழுப் பொறுப்பும்
            இவரிடத்தில் ஒப்படைக்கப்பட்டது. இவர் வட மாநிலங்களுக்கெல்லாம்
            நேரடியாகச் சென்று பல பயனுள்ள புதிய விபரங்களைத் திரட்டித் தொகுத்தார்.
            அம் மலர் தமிழகத்தில் வெளியான விடுதலைப் பொன் விழா மலர்களிலேயே மிகச்
            சிறந்த மலராகப் பெரிதும் பாராட்டப்பட்டது.
          </p>
          <p class="tab-content1">
            <span class="heading1">'தேச விடுதலையும் தியாகச் சுடர்களும்'</span>{" "}
            என்ற இவரது தொகுப்புநூல் பிரசித்தி பெற்றதாகும். அத்தோடு
            <span class="heading1">'வரலாற்றுப் பாதையில்...'</span> என்ற இரண்டு
            பாகங்களைக் கொண்ட இவர் எழுதிய நூல் 2007ஆம் ஆண்டு வெளியான தமிழ்
            நூல்களிலேயே சிறந்த நூல் என சென்னை இலக்கியச் சிந்தனை அமைப்பினரால்
            தேர்வு செய்யப்பட்டு அந்த ஆண்டிற்கான
            <span class="heading1">'இலக்கியச் சிந்தனை'ப் </span>பரிசும்
            இந்நூலுக்கு வழங்கப்பட்டது. இவரது வானொலி உரைகள்
            <span class="heading1">'மெய் வருத்தக் கூலிதரும்'</span> என்ற
            தலைப்பில் நூலாக வெளிவந்துள்ளது.
          </p>
          <p class="tab-content1">
            விடுதலைப் போராட்டத்தில் தமிழகத்தின் பங்கை முழுமையாகத் திரட்டி
            <span class="heading1">'விடுதலை வேள்வியில் தமிழகம்'</span> என்ற
            மிகப்பெரிய நூலைத் தொகுத்துள்ளார். 1200 பக்கங்களையும் இரண்டு
            பாகங்களையும் கொண்ட இந்நூல் 2001 ஆம் ஆண்டு வெளியிடப்பட்டது.
            இந்நூலினைத் தயாரிக்க இவர் ஆறாண்டுகள் முழுக்க முழுக்க செலவிட்டதும்
            இவரே இந்நூலைப் பதிப்பித்ததும் குறிப்பிடத்தக்கதாகும். இந்நூலைத்
            தொகுக்க நாட்டின் பல பகுதிகளுக்கும் சென்று பல அரிய செய்திகளைச்
            சேகரித்துள்ளார். இதுவரை வெளிவராத அரிய புகைப்படங்கள் நூற்றுக்
            கணக்கில் திரட்டியுள்ளார். இந்நூலின் மூன்றாவது பாகத்தை இப்போது
            தயாரித்து வருகிறார்.இந்நூலின் மூன்று பாகங்களும் இந்தியிலும்
            ஆங்கிலத்திலும் கொண்டு வரும் தீவிர முயற்சியில் உள்ளார்.
            <span class="heading1">
              'தேசவிடுதலையும் தியாகச்சுடர்களும்', 'வரலாற்றுப் பாதையில்' (இரண்டு
              பாகங்கள்) ,'அன்பார்ந்த மாணவர்களே', 'கந்தகக் காவியங்கள்',
              'மெய்வருத்தக் கூலிதரும', 'தமிழர்க்குப் பெருமை சேர்த்த தமிழர் எஸ்.
              ஆர். நாதன்', 'சுதந்திரச் சுடர்கள்', 'த.ஸ்டாலின் குணசேகரன்
              நேர்காணல்கள் ' ,'விடுதலைக்கு விதை தூவிய விவேகானந்தர்', 'மனிதனுக்கு
              மரணமில்லை ',
            </span>{" "}
            ஆகியவை இவரது பிற நூல்களாகும்.
          </p>
          <p class="tab-content1">
            <span class="heading1">'இல்லந்தோறும் நூலகம்'</span>, நூலகமில்லா
            ஊரில் குடியிருக்க வேண்டாம்,
            <span class="heading1"> 'நல்ல நூல்களே நல்ல நண்பர்கள்'</span> என்ற
            முப்பெரும் முழக்கத்தை முன்வைத்து மாநிலந்தழுவிய முறையில்
            பொதுமக்களிடமும் மாணவர்களிடமும் வாசிக்கும் பழக்கத்தை மேம்படுத்த பல
            செயல்திட்டங்களைத் தீட்டி அவற்றை உயிரோட்டமாக நிறைவேற்றி வருகிறார்.
          </p>
          <p class="tab-content1">
            இதன் தொடக்கமாக இவரது சொந்த ஊரான ஈரோட்டிற்கருகிலுள்ள
            மாணிக்கம்பாளையத்தில் இவரின் முயற்சியால் மக்கள் சிந்தனைப் பேரவையின்
            சார்பில் சுமார் <span className="heading1"> 4 லட்ச ரூபாய் </span>
            செலவில் புதிதாக நூலகக் கட்டிடம் கட்டியதோடு{" "}
            <span className="heading1"> 6,000 க்கும் </span>மேற்பட்ட நல்ல
            நூல்களையும் அன்பளிப்பாக அந்நூலகத்திற்கு வழங்கியுள்ளார். இந்நூலகத்தை
            அரசிற்கு ஒப்படைக்கும் விழாவை மாவட்ட ஆட்சித் தலைவரின் தலைமையில்
            நடத்தி ஒப்படைத்ததோடு தற்போது அதனை பல்லாயிரம் அரிய நூல்களடங்கிய அரசு
            நூலகமாகச் செயல்பட வழிவகைசெய்தார்.
            <span className="heading1"> 2,000 க்கும் </span> மேற்பட்ட
            உறுப்பினர்களைச் சேர்த்து தற்போது மாவட்டத்தில் செயல்பட்டு வரும்
            சிறந்த நூலகங்களில் ஒன்றாக செயல்பட்டு வருகிறது. மாவட்டத்தின் வேறு பல
            பகுதிகளிலும் தனியார் நூலகங்களை உருவாக்கியுள்ளார்.
          </p>
          <p class="tab-content1">
            இளைஞர்களுக்கு சுயதொழில் தொடங்கவும் சுய வேலைவாய்ப்பை உருவாக்கிக்
            கொள்ளவும் தனியாக பயிற்சி முகாம்கள் பல நடத்தியுள்ளார். மாணவர்களுக்கு
            எதிர்காலத்தில்{" "}
            <span className="heading1">
              {" "}
              'என்ன படிக்கலாம் - எப்படிப் படிக்கலாம்'{" "}
            </span>
            என்பதற்கான மாணவர் விழிப்புணர்வு கருத்தரங்கங்கள் பலவற்றை நடத்தி
            மாணவர்களுக்கு வழிகாட்டி வருகிறார்.
          </p>
          <p class="tab-content1">
            அரசுப்பொதுத்தேர்வில் தங்களது மாணவர்களை நூறு சதவிகிதம் தேர்ச்சி பெற
            வைக்கும் ஈரோடு மாவட்டம் முழுக்கப் பணியாற்றும் அரசுப்பள்ளி ஆசிரியப்
            பெருமக்களுக்குப் பாராட்டு விழாவை எழுச்சி மிக்க முறையில் ஆண்டுதோறும்
            ஈரோடு நகரில் கடந்த <span className="heading1"> 20 ஆண்டுகளாக </span>{" "}
            நடத்தி வந்தார். இவ்விழாவில் நுட்ருகனக்கான ஆசிரியப்பெருமக்கள்
            பாராட்டுமடல் பெற்று உற்சாகமடைந்தனர்.
          </p>
          <p class="tab-content1">
            2005 முதல் கடந்த 14 ஆண்டுகளாக <span className="heading1"> 'ஈரோடு புத்தகத்திருவிழா' </span> என்ற பெயரில்
            தேசியத் தரத்துடன் கூடிய மாநில அளவிலான மிகப்பெரும்
            புத்தகக்கண்காட்சியை ஈரோடு நகரில் நடத்திவருகிறார். ஆண்டுதோறும் ஆகஸ்ட்
            மாதத்தில் 12 நாட்கள் நடைபெறும் இப்புத்தகத்திருவிழாவில் கடந்த ஆண்டு
            (2018) மட்டும் 12 நாட்களில் சுமார் <span className="heading1"> 7 கோடி </span> ரூபாய்க்கும் மேல்
            புத்தகங்கள் விற்பனையாகியுள்ளன. சுமார் <span className="heading1"> 7 லட்சத்திற்கும் </span> மேல் மக்கள்
            இப்புத்தகத்திருவிழாவிற்கு வந்து சென்றுள்ளனர். இப்புத்தகத் திருவிழா
            சிறிதளவும் வணிகத்தன்மையற்று நுழைவுக்கட்டணம் கூட இல்லாமல் முழுக்க
            சமூகமுன்னேற்றத்தை அடிப்படையாகக்கொண்டு நடத்தப்படுவதாகும்.
          </p>
        </div>
        <div id="tab5" class="tab-content">
          <h1>சான்றோர் கூற்று</h1>
          <p class="tab-content1">This is the content for tab 2.</p>
        </div>
        <div id="tab6" class="tab-content">
          <h1>கருத்தரங்குகள்</h1>
          <p class="tab-content1">This is the content for tab 3.</p>
        </div>
        <div id="tab7" class="tab-content">
          <h1>பயணங்கள்</h1>
          <p class="tab-content1">
            1986 ஆம் ஆண்டு பாட்னா சென்று விடுதலைப் போராட்ட வீராங்கனை கல்பனா
            அவர்களை நேரில் சந்தித்து அவருடன் ஒரு வாரம் உடனிருந்து அவரின் வீர
            வரலாற்றை அவர் மூலமாகவே நேரடியாகக் கேட்டறிந்தவர். நேதாஜியின் இந்திய
            தேசிய இராணுவத்தின் பெண்கள் படைத் தளபதியாக இருந்த கேப்டன் லட்சுமியை
            1996 ஆம் ஆண்டு அவர் வசிக்கும் கான்பூர் நகரத்திற்குச் சென்று
            சந்தித்து அவருடன் சில நாட்கள் தங்கி அவரின் வரலாற்றை நேரடியாகக்
            கேட்டறிந்தவர். நூற்றுக்கணக்கான தியாகிகளை நேரில் சந்தித்து அவர்களின்
            வரலாற்றுக் குறிப்புகளைச் சேகரித்தவர்.
          </p>
        </div>
        <div id="tab8" class="tab-content">
          <h1>சமூகப் பணி</h1>
          <p class="tab-content1">This is the content for tab 3.</p>
        </div>
        <div id="year1" class="tab-content">
          <h1 class="section-title">1980 - 2006</h1>

          <div class="event">
            <h2>1980 – சிக்கய்ய நாயக்கர் மாணவர் தலைவர் பயணம்</h2>
            <p>
              சிக்கய்ய நாயக்கர் கல்லுரி மாணவர் பேரவைத் தலைவராக மாணவர்களால்
              தேர்ந்தெடுக்கபட்டுப் பணியாற்றினார். அதே ஆண்டு பெரியார் மாவட்ட
              அனைத்து கல்லுரி மாணவர் பேரவைத் தலைவராகவும் தேர்வு செய்யப்பட்டார்.
              அனைத்திந்திய மாணவர் பெருமன்றத்தின் மாநிலத் தலைவராக பொறுப்பேற்று
              செயல்பட்டார்.
            </p>
          </div>

          <div class="event">
            <h2>1985 – தலை சிறந்த இளம் பேச்சாளர்</h2>
            <p>
              மாஸ்கோவில் நடைபெற்ற அகில உலக மாணவர் இளைஞர் மாநாட்டில் இந்திய
              பிரதிநிதியாக கலந்து கொண்டார். ஜேசீஸ் 'தலை சிறந்த இளம் பேச்சாளர்'
              விருது பெற்றார்.
            </p>
          </div>

          <div class="event">
            <h2>1989 – தலை சிறந்த இளம் பேச்சாளர்</h2>
            <p>'தலை சிறந்த இளைஞர்' என்ற ஜேசீஸ் விருது வழங்கப்பட்டது.</p>
          </div>

          <div class="event">
            <h2>2001 – சாதனைச் செம்மல் விருது</h2>
            <p>ஈரோடு தமிழ்ச் சங்கப் பேரவை சார்பில் வழங்கப்பட்டது.</p>
          </div>

          <div class="event">
            <h2>2002 – For the sake of honour</h2>
            <p>
              ரோட்டரி சங்கத்தின் 'For the sake of honour' விருது வழங்கப்பட்டது.
              கிரீன் சிட்டி ஜூனியர் சேம்பரின் 'Top Line Award' மற்றும் மாவட்ட
              மருத்துவர் சங்கத்தின் 'சிறந்த சேவையாளர் விருது' பெற்றார்.
            </p>
          </div>

          <div class="event">
            <h2>2003 – தலை சிறந்த குடிமகன்</h2>
            <p>
              ஈரோடு ஜேசீஸ் அமைப்பும், இந்தியக் கலாச்சார நட்புறவுக் கழகமும்
              'சாதனையாளர்' விருதுகளை வழங்கின.
            </p>
          </div>

          <div class="event">
            <h2>2004 – எழுத்தாளர் விருதுகள்</h2>
            <p>
              நெய்வேலி லிக்னைட் கார்ப்பரேஷன், ஈரோடு வடக்கு ரோட்டரி சங்கம்
              மற்றும் மத்திய அரிமா சங்கம் பல விருதுகளை வழங்கின.
            </p>
          </div>

          <div class="event">
            <h2>2005 – சிகரம் 2005</h2>
            <p>ஈரோடு சுப்ரீம் அரிமா சங்கம் 'சிகரம் 2005' விருது வழங்கியது.</p>
          </div>

          <div class="event">
            <h2>2006 – சாதனையாளர் விருது</h2>
            <p>
              சக்திமசாலா நிறுவனத்தின் சக்திதேவி அறக்கட்டளை சார்பில்
              வழங்கப்பட்டது.
            </p>
          </div>
        </div>
        <div id="year2" class="tab-content">
          <h1 class="section-title">2007 - 2013</h1>

          <div class="event">
            <h1>2007</h1>
            <h2>சாதனையாளர் விருது</h2>
            <p>
              ஈரோடு சிட்டி அரிமா சங்கத்தின் சார்பில் 'சாதனையாளர் விருது'
              வழங்கப்பட்டது. சென்னை-ஸ்ரீ ராம் பாரதி கலை இலக்கியக் கழகத்தின்
              சார்பில் 'பாரதி இலக்கியச் செல்வர்' என்ற விருது வழங்கப்பட்டது.
            </p>
          </div>

          <div class="event">
            <h1>2008</h1>
            <h2>சாதனையாளர் விருது</h2>
            <p>
              திருப்பூரில் அகில இந்திய வஉசி பேரவை சார்பில் 'மனித நேயச் செம்மல்
              விருது' வழங்கப்பட்டது.
            </p>
          </div>

          <div class="event">
            <h1>2010</h1>
            <h2>பன்னூல் பரப்பும் பைந்தமிழ்ச் செல்வர்</h2>
            <p>
              திருச்சி தென்மண்டல தொடர்கல்வி வாரியம் 'Knowledge Connectivity
              Award'என்ற விருதை வழங்கியது . திருவாடுதுறை ஆதினம் சார்பில் ஆதின
              சபையில் ஆதினம் அவர்களால் 'பன்னூல் பரப்பும் பைந்தமிழ்ச் செல்வர் '
              என்ற விருது வழங்கப்பட்டது. திருச்சி மாவட்ட எழுத்தாளர் சங்கத்தின்
              சார்பில் 'பாரதி விருது' வழங்கப்பட்டது.
            </p>
          </div>

          <div class="event">
            <h1>2011</h1>
            <h2>மால்கம் நூற்றாண்டு கல்வி விருது</h2>
            <p>
              பெரம்பலூர் மாவட்டம் செந்துறை செம்மொழி தமிழ்ச்சங்கம்
              'செம்மொழிச்செம்மல்' என்ற விருதை வழங்கியது. திருச்சி தென்மண்டல
              தொடர் கல்வி வாரியம் சார்பில் 'மால்கம் நூற்றாண்டு கல்வி விருது'
              வழங்கப்பட்டது. பவானி திருமுறைக்கழகம் 'சிந்தனைச் சிற்பி' என்ற
              விருதை வழங்கியது.
            </p>
          </div>

          <div class="event">
            <h1>2012</h1>
            <h2>ஈரோட்டின் நாயகன்</h2>
            <p>
              இந்தியன் ஓவர்சீஸ் வங்கி 'ஈரோட்டின் நாயகன்' விருதை வழங்கியது. கரூர்
              சென்ட்ரல் ரோட்டரி சங்கம் சார்பில் 'மொழிக்காவலர்' என்ற விருது
              வழங்கப்பட்டது. இந்திய கலாச்சார நட்புறவுக் கழகத்தின் (ISCUF)
              சார்பில் சேலத்தில் 'வாழ்நாள் சாதனையாளர் விருது' வழங்கப்பட்டது.
              ஈரோடு-காசிபாளையம் அரசு நூலக வாசகர் வட்டத்தின் சார்பில் 'சாதனையாளர்
              விருது' வழங்கப்பட்டது. மேட்டூர் தந்தை அறக்கட்டளை சார்பில் 'நூல்
              நேசச்செல்வர்' என்ற விருது' வழங்கப்பட்டது.
            </p>
          </div>

          <div class="event">
            <h1>2013</h1>
            <h2>சமூக நோக்கு</h2>
            <p>
              சென்னை அறவாணன் ஆராய்ச்சி அறக்கட்டளை சார்பில் 'அறவாணர் சாதனை'
              விருது வழங்கப்பட்டது. திருச்சி எஸ்.ஆர். வி. பள்ளியின் சார்பில்
              'சமூக நோக்கு' என்ற விருதும் ரூ.20,000 பொற்கிழியும் வழங்கப்பட்டது.
              ஈரோடு காவேரி JCI(Junior Chamber International) சார்பில் 'Service
              Excellence award' வழங்கப்பட்டது.
            </p>
          </div>
        </div>
        <div id="year3" class="tab-content">
          <h1 class="section-title">2014 - 2019</h1>

          <div class="event">
            <h1>2014</h1>
            <h2>சாதனையாளர் விருது</h2>
            <p class="tab-content1">
              சென்னை - கிருஷ்ணா ஸ்வீட்ஸ் நிறுவனம் மற்றும் தமிழ் சேம்பர் ஆப்
              காமர்ஸ் இணைந்து 'சாதனையாளர் விருது' வழங்கினர். கோவை - கற்பகம்
              பல்கலைக் கழகம் இவரது தொடர்ந்த சமூக சேவையைப் பாராட்டி 'கௌரவ டாக்டர்
              பட்டம்' வழங்கியது. கோவை -பாரதி பாசறை என்ற சமூகநல அமைப்பு சார்பில்
              ரூ.50,000 பொற்கிழியுடன் கூடிய 'பாரதி விருது' வழங்கப்பட்டது.
            </p>
          </div>

          <div class="event">
            <h1>2015</h1>
            <h2>பாராட்டுப் பட்டயம்</h2>
            <p class="tab-content1">
              பெரியார் சுயமரியாதைப் பிரச்சார நிறுவனத்தின் சார்பில் 'புத்தகர்
              விருது' வழங்கப்பட்டது. கனடா நாட்டின் அரசு சார்பில் இவரின் சமூக
              சேவையை அங்கீகரித்து சிறந்த சேவையாளருக்கான 'பாராட்டுப் பட்டயம்'
              வழங்கப்பட்டது. அமெரிக்க நாட்டிலுள்ள நியூஜெர்சி சிதமிழ்ச்சங்கம்,
              வாஷிங்டன் தமிழ்ச்சங்கம்,சிகாகோ தமிழ் இலக்கிய வட்டம் ஆகிய
              அமைப்புகளின் சார்பில் தனித்தனியாக 'சிறந்த சேவையாளர் விருது
              'வழங்கப்பட்டது. திருச்சி - தென்னகத் தொடர்கல்வி குழுமம் சார்பில்
              'கலாம் கல்வி விருது' வழங்கப்பட்டது. நாமக்கல் - நாமக்கல் கவிஞர்
              சிந்தனைப் பேரவையின் சார்பில் 'நாமக்கல் கவிஞர் நற்றமிழ் விருது'
              வழங்கப்பட்டது. வேலூர் - உலகத்தமிழ் வளர்ச்சி மன்றத்தின் சார்பில்
              'சமூகச்சேவைச் செம்மல்' என்ற விருது வழங்கப்பட்டது.
            </p>
          </div>

          <div class="event">
            <h1>2016</h1>
            <p class="tab-content1">
              தஞ்சாவூர் -ம ாவட்டம் திருவையாறு, 'ஒளவைக் கோட்டம்' சார்பில் இவரது
              தமிழ்ப் பணியைப் பாராட்டி 'ஒளவை விருது' வழங்கப்பட்டது.
            </p>
          </div>

          <div class="event">
            <h1>2017</h1>
            <p class="tab-content1">
              தூத்துக்குடி மாவட்டம் கோவில்பட்டி திருவள்ளுவர் மன்றத்தின் சார்பில்
              'திருவள்ளுவர் விருது' வழங்கப்பட்டது.
            </p>
          </div>

          <div class="event">
            <h1>2018</h1>
            <h2>சிந்தனைச் செல்வர்</h2>
            <p class="tab-content1">
              சத்தியமங்கலம் ஸ்ரீ பண்ணாரி அம்மன் கல்வி அறக்கட்டளை சார்பில்
              'சொற்கோ' என்ற பட்டம் வழங்கப்பட்டது. சென்னை - பம்மல் இலக்கிய
              மன்றத்தின் சார்பில் 'சிந்தனைச் செல்வர்' என்ற விருது'
              வழங்கப்பட்டது. சென்னை பாரதியார் சங்கத்தின் சார்பில் 'பாரதியார்
              விருது' வழங்கப்பட்டது.
            </p>
          </div>

          <div class="event">
            <h1>2019</h1>
            <p class="tab-content1">
              சென்னை-சங்கர தாஸ் சுவாமிகள் நினைவு மன்றத்தின் சார்பில் இவருக்கு
              'நாடக நால்வர்' விருதும் 'சாதனைச் செம்மல்' என்ற பட்டமும்
              வழங்கப்பட்டது.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
