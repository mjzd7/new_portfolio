import Link from "next/link";

const CustomText = () => {
  return (
    <div className="section custom-text" id="section-custom-text">
      <div className="content">
        {/* title */}
        <div className="title">
          <div className="title_inner">A bit more about me:</div>
        </div>
        {/* clients items */}
        <div className="content-box">
          <div className="single-post-text">
            <p>
              I&apos;m an aspiring software developer with a passion for learning and creating visually appealing and functional web applications. I&apos;m currently working on my skills and learning new technologies to become a full-stack developer. I&apos;m also a self-taught anroid and linux enthusiast. I&apos;m a quick learner and a team player. I&apos;m always looking for opportunities to learn and grow.
              
            </p>
            <p>
              I like participating in sports and have represented my school, college and university at various levels and various events in college voluntarity undertaking responsibilities and leadership roles in clubs including Placement cell, Organsing committee, Rotaract clubs which have helped me hone my communication skills.

            </p>
          </div>
          <br></br>
            <div className="bts">
            <Link rel="noopener noreferrer" href="/works_creative" className="btn hover-animated aligncenter"><a>
              <span className="circle" />
              <span className="lnk"></span>
            </a></Link>
          </div>
          <div className="bts">
            <Link rel="noopener noreferrer" href="/contacts_map" className="btn hover-animated aligncenter"><a>
              <span className="circle" />
              <span className="lnk">GET IN TOUCH WITH ME</span>
            </a></Link>
          </div>
        </div>
        
        <div className="clear" />
      </div>
    </div>
  );
};
export default CustomText;
