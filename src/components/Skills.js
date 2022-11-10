import { useEffect } from "react";
import { createSkillsDot, dotResize } from "../utils";

export const DesignSkills = () => {
  return (
    <div className="section skills" id="section-skills">
      <div className="content">
        {/* title */}
        <div className="title">
          <div className="title_inner">Design Skills</div>
        </div>
        {/* skills items */}
        <div className="skills percent content-box">
          <ul>
            <li>
              <div className="name">Web Design</div>
              <div className="progress ">
                <div className="percentage" style={{ width: "80%" }}>
                  <span className="percent">80%</span>
                </div>
              </div>
            </li>
              <li>
              <div className="name">Search Engine Optimisation</div>
              <div className="progress ">
                <div className="percentage" style={{ width: "70%" }}>
                  <span className="percent">70%</span>
                </div>
              </div>
            </li>
              <li>
              <div className="name">Android Applications</div>
              <div className="progress ">
                <div className="percentage" style={{ width: "75%" }}>
                  <span className="percent">75%</span>
                </div>
              </div>
            </li>
              <li>
              <div className="name">Hosting</div>
              <div className="progress ">
                <div className="percentage" style={{ width: "70%" }}>
                  <span className="percent">70%</span>
                </div>
              </div>
            </li>
            
          </ul>
        </div>
      </div>
    </div>
  );
};
export const LanguagesSkills = () => {
  useEffect(() => {
    dotResize();
    setTimeout(createSkillsDot, 1000);
  }, []);

  return (
    <div className="section skills" id="section-skills-lang">
      <div className="content">
        {/* title */}
        <div className="title">
          <div className="title_inner">Languages Skills</div>
        </div>
        {/* skills items */}
        <div className="skills percent content-box">
          <ul>
            <li>
              <div className="name">English</div>
              <div className="progress">
                <div className="percentage" style={{ width: "95%" }}>
                  <span className="percent">95%</span>
                </div>
              </div>
            </li>
            <li>
              <div className="name">Hindi</div>
              <div className="progress">
                <div className="percentage" style={{ width: "97%" }}>
                  <span className="percent">97%</span>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export const CodingSkills = () => {
  return (
    <div className="section skills" id="section-skills-code">
      <div className="content">
        {/* title */}
        <div className="title">
          <div className="title_inner">Coding Skills</div>
        </div>
        {/* skills items */}
        <div className="skills circles content-box">
          <ul>
            <li>
              <div className="name">HTML / CSS</div>
              <div className="progress p75">
                {" "}
                {/* p95 = 95% circle fill color */}
                <div className="percentage">
                  <span className="percent">75%</span>
                </div>
                <span>95%</span>
                <div className="slice">
                  <div className="bar"></div>
                  <div className="fill"></div>
                </div>
              </div>
            </li>

            <li>
              <div className="name">JavaScript</div>
              <div className="progress p80">
                {" "}
                {/* p90 = 90% circle fill color */}
                <div className="percentage">
                  <span className="percent">80%</span>
                </div>
                <span>90%</span>
                <div className="slice">
                  <div className="bar"></div>
                  <div className="fill"></div>
                </div>
              </div>
            </li>
            <li>
              <div className="name">React</div>
              <div className="progress p75">
                {" "}
                {/* p75 = 75% circle fill color */}
                <div className="percentage">
                  <span className="percent">75%</span>
                </div>
                <span>75%</span>
                <div className="slice">
                  <div className="bar"></div>
                  <div className="fill"></div>
                </div>
              </div>
            </li>
            <li>
              <div className="name">Bootstrap 5</div>
              <div className="progress p85">
                {" "}
                {/* p85 = 85% circle fill color */}
                <div className="percentage">
                  <span className="percent">85%</span>
                </div>
                <span>85%</span>
                <div className="slice">
                  <div className="bar"></div>
                  <div className="fill"></div>
                </div>
              </div>
            </li>
            
          </ul>
        </div>
      </div>
    </div>
  );
};
export const KnowledgeSkills = () => {
  return (
    <div className="section skills" id="section-skills-know">
      <div className="content">
        {/* title */}
        <div className="title">
          <div className="title_inner">Knowledge and Soft Skills</div>
        </div>
        {/* skills */}
        <div className="skills list content-box">
          <ul>
            <li>
              <div className="name">Website hosting</div>
            </li>
            <li>
              <div className="name">Website hosting</div>
            </li>
            <li>
              <div className="name">Logo design</div>
            </li>
            <li>
              <div className="name">Github</div>
            </li>
            <li>
              <div className="name">Responsive and mobile-ready websites</div>
            </li>
            <li>
              <div className="name">Search Engine Optimisation</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
