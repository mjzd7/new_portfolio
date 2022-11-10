import { Fragment, useEffect, useRef } from "react";
import Typed from "typed.js";

const AnimationText = ({ typingData, extraClass }) => {
  // Create Ref element.
  const el = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      const typed = new Typed(el.current, {
        strings: typingData
          ? typingData
          : [
           "I make <strong>awesome Websites</strong>",
            "I develop <strong>Mobile apps</strong>",
            "I optimise  <strong> Websites</strong>",
            "And I love <strong>Basketball <3</strong>",
            ], // Strings to display
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 100,
        smartBackspace: true,
        loop: false,
        showCursor: true,
      });

      // Destropying
      return () => {
        typed.destroy();
      };
    }, 2000);
  }, []);
  return (
    <div className="h-subtitles ready">
      <span className={extraClass} ref={el}></span>
    </div>
  );
};

const BannerContent = ({ pageName, pageTitle, typingData, extraClass }) => {
  return (
    <Fragment>
      <div className="centrize full-width">
        <div className="vertical-center">
          <div className="started-content">
            <h1 className="h-title">{pageTitle ? pageTitle : pageName}</h1>
            <AnimationText typingData={typingData} extraClass={extraClass} />
          </div>
        </div>
      </div>
      {/* mosue button */}
      <a href="#next_section" className="mouse_btn">
        <span className="icon fas fa-chevron-down" />
      </a>
    </Fragment>
  );
};

export const DefaultPageBanner = ({
  pageName,
  pageTitle,
  typingData,
  extraClass,
}) => (
  <div className="section started section-title" id="section-started">
    {/* background */}
    <div className="video-bg">
      <div className="video-bg-mask" />
      <div className="video-bg-texture" id="grained_container" />
    </div>
    {/* started content */}
    <BannerContent
      typingData={typingData}
      pageName={pageName}
      pageTitle={pageTitle}
    />
  </div>
);
export const ImagePageBanner = ({
  pageName,
  pageTitle,
  typingData,
  extraClass,
  bannerImg,
}) => {
  useEffect(() => {
    let { jarallax, jarallaxVideo } = require("jarallax");
    jarallaxVideo();
    jarallax(document.querySelectorAll(".jarallax"), {
      speed: 0.5,
      keepImg: true,
      automaticResize: true,
      videoVolume: 0,
    });
  }, []);

  return (
    <div className="section started section-title" id="section-started">
      {/* background */}
      <div
        className="video-bg jarallax"
        style={{
          backgroundImage: `url(${
            bannerImg ? bannerImg : "images/resume_bg.jpg"
          })`,
        }}
      >
        <div className="video-bg-mask" />
        <div className="video-bg-texture" id="grained_container" />
      </div>
      {/* started content */}

      <BannerContent
        typingData={typingData}
        pageName={pageName}
        pageTitle={pageTitle}
        extraClass={extraClass}
      />
    </div>
  );
};

export const CreativePageBanner = ({
  pageName,
  pageTitle,
  typingData,
  extraClass,
}) => {
  return (
    <div className="section started layout-creative" id="section-started">
      {/* background */}
      <div className="video-bg">
        <div className="video-bg-mask" />
        <div className="video-bg-texture" id="grained_container" />
      </div>
      {/* started content */}
      <BannerContent
        typingData={typingData}
        pageName={pageName}
        pageTitle={pageTitle}
        extraClass={extraClass}
      />
    </div>
  );
};

export const MapBanner = ({ typingData, extraClass }) => {
  return (
    <div className="section started section-title" id="section-started">
      {/* background */}
      <div className="video-bg">
        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.049195031462!2d77.02429111507978!3d28.508167582467024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d190ef45e213d%3A0x128a03a1a71da013!2sDagar%20Sanitary%20Sales!5e0!3m2!1sen!2sin!4v1667928498833!5m2!1sen!2sin"
            style={{ border: 0, width: "100%", height: "100%" }}
            allowFullScreen=""
            loading="lazy"
          />
        </div>
        <div className="video-bg-mask" />
        <div className="video-bg-texture" id="grained_container" />
      </div>
      {/* started content */}
      <div className="centrize full-width">
        <div className="vertical-center">
          <div className="started-content">
            <h1 className="h-title">Contact Me</h1>
            <AnimationText typingData={typingData} extraClass={extraClass} />
          </div>
        </div>
      </div>
      {/* mouse button */}
      <a href="#next_section" className="mouse_btn">
        <span className="icon fas fa-chevron-down" />
      </a>
    </div>
  );
};
