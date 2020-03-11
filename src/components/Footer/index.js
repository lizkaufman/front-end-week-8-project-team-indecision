import React from 'react';
import css from './Footer.module.css';

function Footer() {
  return (
    <footer>
      <div className={css.firstFourLinks}>
        <a href="https://www.wmca.org.uk/careers?_ga=2.233332958.1505638702.1583852010-1790124967.1583750647">
          Jobs
        </a>
        <a href="https://www.wmca.org.uk/policies?_ga=2.261120205.1505638702.1583852010-1790124967.1583750647">
          Policies
        </a>
        <a href="https://www.wmca.org.uk/documents?_ga=2.261120205.1505638702.1583852010-1790124967.1583750647">
          Documents
        </a>
        <a href="https://governance.wmca.org.uk/?_ga=2.261120205.1505638702.1583852010-1790124967.1583750647">
          Committee meetings
        </a>
      </div>

      <div className={css.socials}>
        <span className={css.socialsLabel}>Follow us on:</span>
        <a href="https://www.facebook.com/westmidlandsca/">
          <img className={css.footerImg} src={require('./facebook.png')} />
        </a>
        <a href="https://twitter.com/WestMids_CA">
          <img className={css.footerImg} src={require('./twitter.png')} />
        </a>
      </div>

      <div className={css.secondFourLinks}>
        <a href="https://www.wmca.org.uk/contact-us?_ga=2.261120205.1505638702.1583852010-1790124967.1583750647">
          Contact us
        </a>
        <a href="https://www.wmca.org.uk/freedom-of-information?_ga=2.266470478.1505638702.1583852010-1790124967.1583750647">
          Freedom of information
        </a>
        <a href="https://www.wmca.org.uk/procurement?_ga=2.266470478.1505638702.1583852010-1790124967.1583750647">
          Procurement
        </a>
        <a href="https://www.wmca.org.uk/media-assets?_ga=2.266470478.1505638702.1583852010-1790124967.1583750647">
          Media assets
        </a>
      </div>

      <div className={css.copyright}>
        <p>© 2020 West Midlands Combined Authority and School of Code</p>
      </div>
    </footer>
  );
}

export default Footer;
