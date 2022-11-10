import Link from "next/link";
const Interests = () => {
  return (
    <div className="section service" id="section-interests">
      <div className="content">
        {/* title */}
        <div className="title">
          <div className="title_inner">Interests</div>
        </div>
        {/* interests items */}
        <div className="service-items">
          
          <div className="service-col">
            <div className="service-item content-box">
              <div className="icon">
                <span className="fa-brands fa-android" />
              </div>
              <div className="name">Android and Linux Customisation</div>
              <div className="text">
                I love to customise my Android phone and Linux OS. I have been using Linux since 2015. I have been using Android since 2010.
              </div>
            </div>
          </div>
          <div className="service-col">
            <div className="service-item content-box">
              <div className="icon">
                <span className="fas fa-basketball-ball" />
              </div>
                <a href="https://drive.google.com/file/d/1RddIkULdcgUyq9f8w9bBOusmNS77s2Sy/view?usp=share_link">
                
                  <span className="mask-lnk name"> <div className="name">Basketball</div></span>
                </a>
                I love to play basketball regularly. I have been playing basketball since 2017 and represented at various.
            </div>
          </div>
          <div className="service-col">
            <div className="service-item content-box">
              <div className="icon">
                <span className="fas fa-brush" />
              </div>
                <Link target="_blank" href="https://drive.google.com/file/d/1DxZ-JaWgKiRDYvSMnmyr-9AeaSm4ri5J/view?usp=share_link" rel=" noopener noreferrer"><a>
                
                  <span className="mask-lnk name"> <div className="name">Calligraphy</div></span>
              </a>
              </Link>
                Starting to learn calligraphy in childhood from my sister, I have developed keen interest in calligraphy now the skill to a experiment on <Link target="_blank" href="https://photos.app.goo.gl/eUdu7NsKjjvuKCA39" rel="noopener noreferrer" ><a>bigger canvases.</a></Link>
            </div>
          </div>
          </div>
        </div>
        <div className="clear" />
      </div>
    
  );
};
export default Interests;
