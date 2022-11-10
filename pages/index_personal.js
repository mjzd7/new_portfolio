import TypingAnimation from "../src/components/TypingAnimation";
import Layout from "../src/layout/Layout";
import Link from "next/link";
const IndexPersonal = () => {
  return (
    <Layout>
      <div className="section started personal" id="section-started">
        {/* background */}
        <div className="video-bg">
          <div className="video-bg-mask" />
          <div className="video-bg-texture" id="grained_container" />
        </div>
        {/* started content */}
        <div className="centrize full-width">
          <div className="vertical-center">
            <div className="started-content">
              <div
                className="logo"
                style={{ backgroundImage: "url(images/img_main.png)" }}
              />
              
              <h1 className="h-title">
                Hello, I&apos;m <strong>Mohit Dagar</strong>, UX/UI Designer and{" "}
                <br />
                Front-end Developer Based in Gurugram.
                <h2>   <div className="bts">
            <Link rel="noopener noreferrer" href="/resume_image" className="btn hover-animated">
              <span className="circle" />
              <span className="lnk">My Portfolio</span>
            </Link>
            
          </div></h2>
              </h1>
           
            
              <TypingAnimation extraClassName={"typed-subtitle"} />
              <span className="typed-subtitle" />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default IndexPersonal;
