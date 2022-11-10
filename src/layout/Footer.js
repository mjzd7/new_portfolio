import Link from "next/link";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="copy">
       {/* <Link target="_blank" href="mailto:27dagar@gmail.com" rel="noopener noreferrer"> <p>E: 27dagar@gmail.com</p></a> */}
      
        <p>With ♡ from India</p>
          <p>© <Link href="https://www.mohitdagar.tech">MJZD7</Link>, All Rights Reserved </p>
      </div>
      <div className="soc-box">
        <div className="follow-label">Lets Connect</div>
        <div className="soc">
          <Link target="_blank" rel="noreferrer" href="https:/www.linkedin.com/in/mohit-dagar/"><a>
            <span className="icon fab fa-linkedin" />
          </a></Link>
           <Link target="_blank" rel="noreferrer" href="https:/wa.me/9953953168"><a>
            <span className="icon fab fa-whatsapp" />
          </a></Link>
           <Link target="_blank" rel="noreferrer" href="https://github.com/mjzd7"><a>
            <span className="icon fab fa-github" />
          </a></Link>
          <Link target="_blank" rel="noreferrer" href="https://www.instagram.com/_mohit_dagar"><a>
            <span className="icon fab fa-instagram" />
          </a></Link>
           <Link target="_blank" rel="noreferrer" href="https://twitter.com/mjzd7"><a>
            <span className="icon fab fa-twitter" />
          </a></Link>
          <Link target="_blank" rel="noreferrer" href="https://t.me/mohitdagar1"><a>
            <span className="icon fab fa-telegram" />
          </a></Link>
        </div>
      </div>
      <div className="clear" />
    </footer>
  );
};
export default Footer;
