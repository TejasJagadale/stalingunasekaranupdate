import React from "react";
import "../../styles/subhome.css";
import { Link } from "react-router-dom";

const Subhome = () => {
  return (
    <div>
      <header class="seminar-header">
        <div class="container mx-auto px-4">
          <h1>திரு.த.ஸ்டாலின் குணசேகரன்</h1>
          <p class="text-lg">மக்கள் சிந்தனை பேரவை</p>
          <p class="text-sm">தமிழ்நாடு</p>
        </div>
      </header>

      <nav class="bg-gray py-3 sticky top-0 z-10 shadow-md">
        <div class="container mx-auto">
          <div class="nav-tabs">
            <a href="#stalin-section" class="nav-link">
              கட்டுரைகள்
            </a>
            <a href="#seminar-section" class="nav-link active">
              காணொளிகள்
            </a>
            <Link to="/contact" class="nav-link">
              தொடர்புக்கு
            </Link>
          </div>
        </div>
      </nav>

      <main className="maincoversec">
        <div className="cover-section">
          <section class="py-10">
            <div class="container mx-auto">
              <h2 class="section-title">
                ஆய்வுக் கட்டுரைகளுக்கான அறிவிப்பும் அழைப்பும்
              </h2>

              <div class="bg-white p-6 rounded-lg shadow-md mb-8">
                <p class="mb-4">
                  'மக்கள் சிந்தனைப் பேரவை' -என்ற இவர் நிறுவிய பொது நல அமைப்பு
                  ஈரோட்டைத் தலைமையிடமாக கொண்டு மாநிலந் தழுவிய முறையில் மிகச்
                  சிறப்பாகச் செயல்பட்டு வருகிறது.
                </p>
                <p>
                  சமூகவியல் லட்சியங்களை அடிப்படையாகக் கொண்ட இவ்வியக்கம்
                  மாணவர்கள், இளைஞர்கள், ஆசிரியர்கள் மற்றும் பொதுமக்கள் மத்தியில்
                  எழுச்சியையும் விழிப்புணர்வையும் ஏற்படுத்தி வருகிறது.
                </p>
              </div>

              <h2 class="section-title">கருத்தரங்கத் தலைப்புகள்</h2>
              <p class="mb-4">
                Research papers are welcome on the following topics or on topics
                that appears to you as relevant to these themes.
              </p>

              <div class="topic-section">
                <h3 class="topic-title">Books of Th.Stalin Gunasekaran</h3>
                <ul class="topic-list">
                  <li>ஜீவா முழக்கம் – சிறப்புமலர் - 1997</li>
                  <li>தேச விடுேலையும் ேியாகச் சுடர்களும - 1998</li>
                  <li>தேச விடுேலையும் ேியாகச் சுடர்களும - 2001</li>
                  <li>வரலாற்றுப் பாதையில - 2007</li>
                  <li>மெய்வருத்தக் கூலி தரும - 2014</li>
                </ul>
                <div>
                  <Link to="/publication">See more</Link>
                </div>
              </div>

              <div class="topic-section">
                <h3 class="topic-title">விருதுகள்</h3>
                <ul class="topic-list">
                  <li>கல்லூரி முதல்வர் வழங்கிய சிறப்புச் சான்று - 1982</li>
                  <li>சாதனைச் செம்மல் - 2001</li>
                  <li>காவல்துறையின் சிறப்புச் சான்று - 2002</li>
                  <li>சாதனையாளர் விருது - 2003</li>
                  <li>சேவைச் செம்மல் - 2004</li>
                  <li>சிறந்த எழுத்தாளர் - 2004</li>
                  <li>இலக்கியச் சிந்தனைப் பரிசு - 2008</li>
                  <li>இளைஞர் எழுச்சி நாயகன் - 2010</li>
                </ul>
                <div>
                  <Link to="/publication">See more</Link>
                </div>
              </div>
            </div>
          </section>
          <section>
            <div>
              <h2 class="section-title">
                Instructions for presenting the article
              </h2>

              <div class="bg-gray-50 p-5 rounded-lg shadow-sm mb-6">
                <h3 class="font-bold text-xl mb-3">
                  Presentation of the summary of Article
                </h3>
                <hr class="mb-4" />
                <ul class="space-y-2">
                  <li>
                    <strong>Books:</strong> 6000+
                  </li>
                  <li>
                    <strong>Members:</strong> 2000+
                  </li>
                  <li>
                    <strong>Content:</strong>
                    <ul class="pl-5 mt-2 space-y-1 list-disc">
                      <li>Title of Article</li>
                      <li>Th.Stalin Gunasekaran</li>
                      <li>Lawyer</li>
                      <li>B.Sc., B.L.,</li>
                      <li>Multiple themes</li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div class="bg-gray-50 p-5 rounded-lg shadow-sm mb-6">
                <h3 class="font-bold text-xl mb-3">Distinguished Books</h3>
                <hr class="mb-4" />
                <div class="space-y-4">
                  <div class="date-box">
                    <h4>விடுதலைக்கு விதை தூவிய விவேகானந்தர்</h4>
                    <p>ஜனவரி 2019</p>
                  </div>
                  <div class="date-box">
                    <h4>மனிதனுக்கு மரணமில்லை </h4>
                    <p>ஜனவரி 2019</p>
                  </div>
                  <div class="date-box">
                    <h4>சுதந்திரச் சுடர்கள் </h4>
                    <p>ஜனவரி 2017</p>
                  </div>
                  <div class="date-box">
                    <h4>தலை நிமிர வைத்த தலைவர் </h4>
                    <p>2016</p>
                  </div>
                  <div class="date-box">
                    <h4>ஜெயகாந்தன் உரைகள் </h4>
                    <p>அக்டோபர் 2015</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        <section id="stalin-section" class="py-10 bg-gray-100">
          <div class="container mx-auto">
            <h2 class="section-title">Works of Th.Stalin Gunasekaran</h2>
            <div class="overflow-x-auto">
              <table class="works-table">
                <thead>
                  <tr>
                    <th>S. No.</th>
                    <th>Book</th>
                    <th>Year</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td colspan="3" class="font-semibold bg-gray-200">
                      கட்டுரைகள்
                    </td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>சிறைச்சாலையை நூலகமாக்கிய</td>
                    <td>March 23, 2019</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>தமிழ் மண்ணில் அறிவியல் விதைகள்</td>
                    <td>Feb 28, 2019</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>பாட்டுக்கொரு புலவன்</td>
                    <td>Dec 11, 2019</td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>உழைப்பின் மேன்மையை உணர்த்தியவர்</td>
                    <td>May 6, 2017</td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>வாசிக்கும் சமூகமே வளரும்</td>
                    <td>Apr 22, 2017</td>
                  </tr>
                  <tr>
                    <td>6</td>
                    <td>பகத்சிங்கின் பன்முக ஆளுமை!</td>
                    <td>Mar 23, 2017</td>
                  </tr>
                  <tr>
                    <td>7</td>
                    <td>எல்லாரும் நுகர்வோர்; எல்லாரும் மன்னர்</td>
                    <td>Mar 15, 2017</td>
                  </tr>
                  <tr>
                    <td>8</td>
                    <td>இந்தியாவுக்கு பெருமை சேர்த்த கண்டுபிடிப்பு</td>
                    <td>Feb 28, 2017</td>
                  </tr>
                  <tr>
                    <td>9</td>
                    <td>வாழும்போதே வரலாறானவர்</td>
                    <td>Oct 2, 2015</td>
                  </tr>
                  <tr>
                    <td>10</td>
                    <td>அருட்செல்வர் ஒரு புத்தக வித்தகர்</td>
                    <td>Nov, 2014</td>
                  </tr>
                  <tr>
                    <td>11</td>
                    <td>பாட்டாளிகளின் படைப்பாளி</td>
                    <td>Apr 23, 2013</td>
                  </tr>
                  <tr>
                    <td>12</td>
                    <td>எழுத்துப் புரட்சியாளர்கள்</td>
                    <td>Apr 23, 2013</td>
                  </tr>
                  <tr>
                    <td>13</td>
                    <td>
                      <Link to="/essay">See more...</Link>
                    </td>
                  </tr>
                  <tr>
                    <td colspan="3" class="font-semibold bg-gray-200">
                      உரைகள்
                    </td>
                  </tr>
                  <tr>
                    <td>13</td>
                    <td>
                      அறிவியலாளர்களின் தியாக வாழ்க்கையை முழுமையாக ஆவணப்படுத்த
                      வேண்டும்
                    </td>
                    <td>Sat 02, March 2019</td>
                  </tr>
                  <tr>
                    <td>14</td>
                    <td>
                      இறவாப் புகழுடைய நல்நூல்களை மக்களிடம் கொண்டு செல்வது
                      அவசியம்
                    </td>
                    <td>Sun 17 Feb 2019</td>
                  </tr>
                  <tr>
                    <td>15</td>
                    <td>
                      காந்தியடிகளை ‘மகாத்மா’ என அடையாளப்படுத்தியவர் தமிழர்
                    </td>
                    <td>Thu 16 Jan 2019</td>
                  </tr>
                  <tr>
                    <td>16</td>
                    <td>
                      கற்பித்தலுக்கு இணையாக ஆய்வுக்கும் முக்கியத்துவம் தேவை
                    </td>
                    <td>Tue 18 Sept 2018</td>
                  </tr>
                  <tr>
                    <td>17</td>
                    <td>
                      ஜாதி, மதத்துக்கு ஏற்றாற்போல் வரலாற்றை வளைப்பது பாவச்
                      செயல்!
                    </td>
                    <td>Sun 9 Sept 2018</td>
                  </tr>
                  <tr>
                    <td>18</td>
                    <td>புத்தக வாசிப்பை மையப்படுத்த வேண்டும்'</td>
                    <td>Mon 23 Apr 2018</td>
                  </tr>
                  <tr>
                    <td>19</td>
                    <td>
                      நாட்டு நலப்பணித் திட்ட மாணவர்கள் தலைமைத் தகுதி
                      மிக்கவர்களாக உருவெடுப்பர்
                    </td>
                    <td>Thur 5 Apr 2018</td>
                  </tr>
                  <tr>
                    <td>20</td>
                    <td>
                      சமூகப் பொறுப்புள்ள குடிமக்களை உருவாக்குவதே கல்வியின்
                      நோக்கமாக இருக்க வேண்டும்
                    </td>
                    <td>Sun 18 Mar 2018</td>
                  </tr>
                  <tr>
                    <td>21</td>
                    <td>எழுத்துதான் எழுச்சியைத் தரும் : ஸ்டாலின் குணசேகரன்</td>
                    <td>Thu 1 Feb 2018</td>
                  </tr>
                  <tr>
                    <td>22</td>
                    <td>
                      ஆளுமைகளின் வாழ்க்கை வரலாறு இளைஞர்களுக்கு நல்ல பாடமாக
                      அமையும்
                    </td>
                    <td>Fri 26 Jan 2018</td>
                  </tr>
                  <tr>
                    <td>23</td>
                    <td>
                      {" "}
                      <Link to="/urai">See more </Link>{" "}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <h2 class="section-title">திரு.த.ஸ்டாலின் குணசேகரன் பற்றி</h2>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
              <div class="md:col-span-1">
                <img
                  src="https://www.tstalingunasekaran.com/assets/img/stalin-gunasekaran.jpg"
                  alt="T. Stalin Gunasekaran"
                  class="profile-image mx-auto md:mx-0"
                />
              </div>
              <div class="md:col-span-2">
                <p class="mb-4">
                  ஈரோட்டைச் சேர்ந்த த.ஸ்டாலின் குணசேகரன் பள்ளிக் காலத்திலேயே
                  பொதுமேடைகளில் பேசத் தொடங்கியவர். கல்லூரி மாணவராக விளங்கிய போதே
                  பிற கல்லூரிகள் மற்றும் பொதுஅமைப்புகளின் அழைப்பின் பேரில்
                  முக்கிய நிகழ்வுகளில் சொற்பொழிவுகள் நிகழ்த்தி வந்தார்.
                </p>
                <p>
                  இளம் வயதிலேயே தனது பேச்சுப்பயணத்தைத் தொடங்கிய இவர் கல்வி,
                  வரலாறு, கலை, இலக்கியம், அறிவியல், அரசியல், சமூகவியல்,
                  வாழ்வியல், ஆளுமை மேம்பாடு உள்ளிட்ட பல்வகைத் தலைப்புகளில் கடந்த
                  40 ஆண்டுகளாகத் தொடர்ந்து உரை நிகழ்த்தி வருகிறார்.
                </p>
              </div>
            </div>

            <h3 class="text-2xl font-semibold mb-5">
              சந்திப்புகள்
            </h3>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
              <div class="meeting-card">
                <img
                  src="https://www.tstalingunasekaran.com/assets/img/meetings/meeting-1.jpg"
                  alt="Meeting with Ilayaraja"
                  class="meeting-image"
                />
                <div class="meeting-content">
                  <h3>இசைஞானி இளையராஜா - 2002</h3>
                  <p>
                    சென்னையில் பிரசாத் ஸ்டுடியோவிலுள்ள இசைஞானி அவர்களின் அறையில்
                    சந்தித்து உரையாடிய போது ....
                  </p>
                  <a
                    href="https://www.tstalingunasekaran.com/assets/pdf/meetings/ilayaraja.pdf"
                    class="read-more"
                    target="_blank"
                    rel="noreferrer"
                  >
                    மேலும் பார்க்க <i class="fas fa-arrow-right"></i>
                  </a>
                </div>
              </div>
              <div class="meeting-card">
                <img
                  src="https://www.tstalingunasekaran.com/assets/img/meetings/meeting-2.jpg"
                  alt="Meeting with Jeyakanthan"
                  class="meeting-image"
                />
                <div class="meeting-content">
                  <h3>எழுத்தாளர் ஜெயகாந்தன் - 2001</h3>
                  <p>
                    தமிழக முதல்வர் டாக்டர் கலைஞர் அவர்களை அவரது சென்னை –
                    கோபாலபுரம் இல்லத்தில் 28.02.2001 ஆம் தேதி சந்தித்து...
                  </p>
                  <a
                    href="https://www.tstalingunasekaran.com/assets/pdf/meetings/jeyakanthan.pdf"
                    class="read-more"
                    target="_blank"
                    rel="noreferrer"
                  >
                    மேலும் பார்க்க <i class="fas fa-arrow-right"></i>
                  </a>
                </div>
              </div>

              <div class="meeting-card">
                <img
                  src="https://www.tstalingunasekaran.com/assets/img/meetings/meeting-3.jpg"
                  alt="Meeting with Karunanidhi"
                  class="meeting-image"
                />
                <div class="meeting-content">
                  <h3>கலைஞர் மு. கருணாநிதி - 2001</h3>
                  <p>
                    சுமார் ஆறாண்டுகள் தனது வழக்குரைஞர் தொழிலையும்
                    பொருட்படுத்தாது த. ஸ்டாலின் குணசேகரன் மேற்கொண்ட ....
                  </p>
                  <a
                    href="https://www.tstalingunasekaran.com/assets/pdf/meetings/karunanithi.pdf"
                    class="read-more"
                    target="_blank"
                    rel="noreferrer"
                  >
                    மேலும் பார்க்க <i class="fas fa-arrow-right"></i>
                  </a>
                </div>
              </div>
              <div class="meeting-card">
                <img
                  src="https://www.tstalingunasekaran.com/assets/img/meetings/meeting-4.jpg"
                  alt="Meeting with Dr. Va.Se. Kulandaisamy"
                  class="meeting-image"
                />
                <div class="meeting-content">
                  <h3>டாக்டர் வா.செ. குழந்தைசாமி</h3>
                  <p>
                    அண்ணாபல்கலைக் கழகத்தின் முன்னாள் துணைவேந்தர் டாக்டர்
                    வா.செ.குழந்தைசாமி அவர்களை சென்னை – பெசன்ட் நகரிலுள்ள அவரது
                    இல்லத்தில் சந்தித்து....
                  </p>
                  <a
                    href="https://www.tstalingunasekaran.com/assets/pdf/meetings/kulanthai.pdf"
                    class="read-more"
                    target="_blank"
                    rel="noreferrer"
                  >
                    மேலும் பார்க்க <i class="fas fa-arrow-right"></i>
                  </a>
                </div>
              </div>

              <div class="meeting-card">
                <img
                  src="https://www.tstalingunasekaran.com/assets/img/meetings/meeting-5.jpg"
                  alt="Meeting with Thiyagi I. Mayandi Bharathi"
                  class="meeting-image"
                />
                <div class="meeting-content">
                  <h3>தியாகி ஐ. மாயண்டிபாரதி</h3>
                  <p>
                    மதுரை – வடக்குமாசி வீதியிலுள்ள அவரது இல்லத்திலும் மண்டையம்
                    ஆசாரி வீதியிலுள்ள அலுவலகத்திலும் பலமுறை சந்தித்து ....
                  </p>
                  <a
                    href="https://www.tstalingunasekaran.com/assets/pdf/meetings/mayandi.pdf"
                    class="read-more"
                    target="_blank"
                    rel="noreferrer"
                  >
                    மேலும் பார்க்க <i class="fas fa-arrow-right"></i>
                  </a>
                </div>
              </div>

              <div class="meeting-card">
                <img
                  src="https://www.tstalingunasekaran.com/assets/img/meetings/meeting-6.jpg"
                  alt="Gnanaalaya"
                  class="meeting-image"
                />
                <div class="meeting-content">
                  <h3>ஞானாலயா</h3>
                  <p>
                    கிருஷ்ணமூர்த்தி - டோரதி தம்பதியர் உருவாக்கியுள்ள 'ஞானாலயா'
                    என்ற நூலகத்தைப் பார்வையிடச் சென்றோம் ....
                  </p>
                  <a
                    href="https://www.tstalingunasekaran.com/assets/pdf/meetings/ggg.pdf"
                    class="read-more"
                    target="_blank"
                    rel="noreferrer"
                  >
                    மேலும் பார்க்க <i class="fas fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="subseemore">
              {" "}
              <Link to="/meeting">See more...</Link>{" "}
            </div>

            <h3 class="text-2xl font-semibold mb-5" id="seminar-section">காணொளிகள்</h3>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
              <div class="video-container">
                <iframe
                  src="https://www.youtube.com/embed/QGjB81xaxAo"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              </div>

              <div class="video-container">
                <iframe
                  src="https://www.youtube.com/embed/xueAiolkyl4"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              </div>

              <div class="video-container">
                <iframe
                  src="https://www.youtube.com/embed/kQDrsBArrHQ"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
            <div className="subseemore">
              {" "}
              <a
                href="http://www.youtube.com/@tstalingunasekaran"
                target="_blank"
                rel="noreferrer"
              >
                See more...
              </a>{" "}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Subhome;
