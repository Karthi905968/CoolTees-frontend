import React,{useState,useEffect} from 'react';

const Footer = () => {

  const [showFooter, setShowFooter] = useState(true);
  const pageUrl = window.location.href;
  useEffect(() => {
    if (pageUrl.includes('shipping') || pageUrl.includes('thankyou')) {
      setShowFooter(false);
    } else {
      setShowFooter(true);
    }
  },[pageUrl]);

  return (
    <>
       {
        showFooter && (
          <footer>
          <img
            src="https://res.cloudinary.com/denmnkoks/image/upload/v1711443436/cooltees-logo_aschuy.png"
            alt=""
            className="footer-logo"
          />
          <p className="f-para">
            Premium Quality t-shirts, polo shirts, shirts & clothes at the best and
            most affordable price. <br />
            We have a new offer every day for 365 days.
          </p>
          <p className="f-C-info">
            Contact <br />
            E-cooltees@ct.io | Hotline: +1 131 138 138
          </p>
          <div className="f-rights">
            DESIGN BY COOLTEES - © 2022. ALL RIGHTS RESERVED.
          </div>
        </footer>
        )
       }

    </>
  );
};

export default Footer;
