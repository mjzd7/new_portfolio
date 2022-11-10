import Link from "next/link";

const About = () => {
  return (
    <div className="section about" id="next_section">
      <div className="content content-box">
        {/* image */}
        <div className="image">
          <img src="images/man_r.jpg" alt="" />
        </div>
        {/* desc */}
        <div className="desc">
          <p>
            Hello! I&apos;m Mohit Dagar. Front End Developer from Gurugram, Haryana, India. I have keen interest in web site design and building, Search Engine Optimisation, Hosting and Deployment. I love to talk with you about our
            unique.
          </p>
          <div className="info-list">
            <ul>
              <li>
                <strong>Age:</strong> 23
              </li>
              <li>
                <strong>Full Time/Freelance:</strong> Available
              </li>
              <li>
                <strong>Phone:</strong> +91 9953 953 168
              </li>
              <li>
                <strong>E-mail:</strong> 27dagar@gmail.com
              </li>
                <li>
                {/* <strong>Residence:</strong> Gurugram, Haryana, India */}
                        <strong>Address:</strong> Sector 110, Gurugram, Haryana, India
              </li>
            </ul>
          </div>
          <div className="bts">
            <Link target="_blank" rel="noopener noreferrer" href="https://drive.google.com/file/d/1tftYdtuv1uO2DcLhNGXAl4br7SZpDOZs/view?usp=share_link" className="btn hover-animated"><a>
              <span className="circle" />
              <span className="lnk">Download CV</span>
            </a>
            </Link>
          </div>
        </div>
        <div className="clear" />
      </div>
    </div>
  );
};
export default About;
