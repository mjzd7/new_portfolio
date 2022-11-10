import Link from "next/link";
import { Fragment, useState } from "react";
// menu-item-has-children to add dropdown sub menu

const Menu = () => (
  <Fragment>
    <div className="logo hover-masks-logo">
      <Link target="_blank" href="https://drive.google.com/file/d/1tftYdtuv1uO2DcLhNGXAl4br7SZpDOZs/view?usp=share_link" rel="noopener noreferrer"><a>
        
        <span className="mask-lnk">
          <img src="/images/mdlogo-nobg.png" alt="logo" />
          {/* Mohit <strong>Dagar</strong> */}
        </span>
        <span className="mask-lnk mask-lnk-hover">
          <br></br>
          <br></br>
           Download <strong> Resume</strong>
        </span>
      </a></Link>
    </div>
    {/* top menu */}
  
    <div className="top-menu hover-masks">
      <div className="top-menu-nav">
        <div className="menu-topmenu-container">
        
          <ul className="menu">
            <li className="menu-item">
              <Link href="/">
                <a>
                  <span className="mask-lnk">HOME</span>
                  <span className="mask-lnk mask-lnk-hover">HOME</span>
                </a>
              </Link>
              {/* <ul className="sub-menu">
                <li className="menu-item">
                  <Link href="/">
                    <a>
                      <span className="mask-lnk">Home Default</span>
                      <span className="mask-lnk mask-lnk-hover">
                        Home Default
                      </span>
                    </a>
                  </Link>
                </li> */}
                {/* <li className="menu-item">
                  <Link href="/index_personal">
                    <a>
                      <span className="mask-lnk">Know Me</span>
                      <span className="mask-lnk mask-lnk-hover"> Know Me
                      </span>
                    </a>
                  </Link>
                </li> */}
                {/* <li className="menu-item">
                  <Link href="/index_slider">
                    <a>
                      <span className="mask-lnk">Home Slider</span>
                      <span className="mask-lnk mask-lnk-hover">
                        Home Slider
                      </span>
                    </a>
                  </Link>
                </li> */}
                {/* <li className="menu-item">
                  <Link href="/index_personal">
                    <a>
                      <span className="mask-lnk">Home Personal</span>
                      <span className="mask-lnk mask-lnk-hover">
                        Home Personal
                      </span>
                    </a>
                  </Link>
                </li> */}
                {/*<li className="menu-item">
                  <Link href="/index_onepage">
                    <a target="blank">
                      <span className="mask-lnk">Home OnePage</span>
                      <span className="mask-lnk mask-lnk-hover">
                        Home OnePage
                      </span>
                    </a>
                  </Link>
                </li> */}
                {/* <li className="menu-item">
                  <Link href="/index_image">
                    <a>
                      <span className="mask-lnk">Home Image</span>
                      <span className="mask-lnk mask-lnk-hover">
                        Home Image
                      </span>
                    </a>
                  </Link>
                </li> */}
                {/* <li className="menu-item">
                  <Link href="/index_video">
                    <a>
                      <span className="mask-lnk">Home Video</span>
                      <span className="mask-lnk mask-lnk-hover">
                        Home Video
                      </span>
                    </a>
                  </Link>
                </li> 
              </ul>*/}
            </li>
            <li className="menu-item">
              <Link href="/resume_image">
                <a>
                  <span className="mask-lnk">RESUME</span>
                  <span className="mask-lnk mask-lnk-hover">RESUME</span>
                </a>
              </Link>
              {/* <ul className="sub-menu">
                <li className="menu-item">
                  <Link href="/resume">
                    <a>
                      <span className="mask-lnk">Resume Default</span>
                      <span className="mask-lnk mask-lnk-hover">
                        Resume Default
                      </span>
                    </a>
                  </Link>
                </li>
                <li className="menu-item">
                  <Link href="/resume_image">
                    <a>
                      <span className="mask-lnk">Resume Image</span>
                      <span className="mask-lnk mask-lnk-hover">
                        Resume Image
                      </span>
                    </a>
                  </Link>
                </li>
                <li className="menu-item">
                  <Link href="/resume_creative">
                    <a>
                      <span className="mask-lnk">Resume Creative</span>
                      <span className="mask-lnk mask-lnk-hover">
                        Resume Creative
                      </span>
                    </a>
                  </Link>
                </li>
              </ul> */}
            </li>
            <li className="menu-item menu-item-has-children">
              {/* <Link href="/works_creative"> */}
                <a>
                  <span className="mask-lnk">MY PROJECTS</span>
                  <span className="mask-lnk mask-lnk-hover">MY PROJECTS</span>
                </a>
              {/* </Link> */}
              {/* <ul className="sub-menu">
                <li className="menu-item">
                  <Link href="/works">
                    <a>
                      <span className="mask-lnk">Works Default</span>
                      <span className="mask-lnk mask-lnk-hover">
                        Works Default
                      </span>
                    </a>
                  </Link>
                </li>
                <li className="menu-item">
                  <Link href="/works_creative">
                    <a>
                      <span className="mask-lnk">Works Creative</span>
                      <span className="mask-lnk mask-lnk-hover">
                        Works Creative
                      </span>
                    </a>
                  </Link>
                </li>
                <li className="menu-item">
                  <Link href="/work_single">
                    <a>
                      <span className="mask-lnk">Work Single</span>
                      <span className="mask-lnk mask-lnk-hover">
                        Work Single
                      </span>
                    </a>
                  </Link>
                </li>
                <li className="menu-item">
                  <Link href="/work_single_image">
                    <a>
                      <span className="mask-lnk">Work Single Image</span>
                      <span className="mask-lnk mask-lnk-hover">
                        Work Single Image
                      </span>
                    </a>
                  </Link>
                </li>
                <li className="menu-item">
                  <Link href="/work_single_creative">
                    <a>
                      <span className="mask-lnk">Work Single Creative</span>
                      <span className="mask-lnk mask-lnk-hover">
                        Work Single Creative
                      </span>
                    </a>
                  </Link>
                </li>
              </ul> */}
            </li>
            <li className="menu-item">
              <Link href="/blog_post">
                <a>
                  <span className="mask-lnk">PHOTO GALLERY</span>
                  <span className="mask-lnk mask-lnk-hover">PHOTO GALLERY</span>
                </a>
              </Link>
              {/* <ul className="sub-menu">
                <li className="menu-item">
                  <Link href="/blog">
                    <a>
                      <span className="mask-lnk">Blog Posts</span>
                      <span className="mask-lnk mask-lnk-hover">
                        Blog Posts
                      </span>
                    </a>
                  </Link>
                </li>
                <li className="menu-item">
                  <Link href="/blog_post">
                    <a>
                      <span className="mask-lnk">Single Post</span>
                      <span className="mask-lnk mask-lnk-hover">
                        Single Post
                      </span>
                    </a>
                  </Link>
                </li>
              </ul> */}
            </li>
            <li className="menu-item">
              <Link href="/contacts_map">
                <a>
                  <span className="mask-lnk">CONTACT ME</span>
                  <span className="mask-lnk mask-lnk-hover">GET IN TOUCH</span>
                </a>
              </Link>
              {/* <ul className="sub-menu">
                <li className="menu-item">
                  <Link href="/contacts">
                    <a>
                      <span className="mask-lnk">Contact Default</span>
                      <span className="mask-lnk mask-lnk-hover">
                        Contact Default
                      </span>
                    </a>
                  </Link>
                </li>
                <li className="menu-item">
                  <Link href="/contacts_map">
                    <a>
                      <span className="mask-lnk">Contact Map</span>
                      <span className="mask-lnk mask-lnk-hover">
                        Contact Map
                      </span>
                    </a>
                  </Link>
                </li>
                <li className="menu-item">
                  <Link href="/contacts_image">
                    <a>
                      <span className="mask-lnk">Contact Image</span>
                      <span className="mask-lnk mask-lnk-hover">
                        Contact Image
                      </span>
                    </a>
                  </Link>
                </li>
                <li className="menu-item">
                  <Link href="/contacts_creative">
                    <a>
                      <span className="mask-lnk">Contact Creative</span>
                      <span className="mask-lnk mask-lnk-hover">
                        Contact Creative
                      </span>
                    </a>
                  </Link>
                </li>
              </ul> */}
            </li>
            <li>
             
            </li>
            
          </ul>
          <br></br>
          <Link rel="noopener noreferrer" href="/index_personal" className="btn hover-animated"><a>
           <div className="btn">
              <span className="circle" />
              <span className="lnk">KNOW ME</span>
            
            
          </div></a></Link>
        </div>
      </div>
    </div>
  </Fragment>
);

const Header = () => {
  return (
    <Fragment>
      <MobileHeader />
      <DeskTopHeader />
    </Fragment>
  );
};
export default Header;

const DeskTopHeader = () => (
  <header className={`header desktopHeader`}>
    <div className="head-top">
      <Menu />
    </div>
  </header>
);

const MobileHeader = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <header className={`header mobileHeader ${toggle ? "active" : ""}`}>
      <div className="head-top">
        {/* menu button */}
        <a href="#" className="menu-btn" onClick={() => setToggle(!toggle)}>
          <span />
        </a>
        {/* logo */}
        <Menu />
      </div>
    </header>
  );
};
