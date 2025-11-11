import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaYoutube,
  FaLinkedin,
  FaTelegram,
  FaInstagram,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer style={styles.footer}>
      <div className="footer-container" style={styles.container}>
        {/* ---------- FOLLOW US ---------- */}
        <div className="footer-section" style={styles.section}>
          <h3 style={styles.heading}>Follow us!</h3>
          <div className="footer-social" style={styles.socialIcons}>
            <a href="https://facebook.com" style={styles.icon}><FaFacebook /></a>
            <a href="https://twitter.com" style={styles.icon}><FaTwitter /></a>
            <a href="https://youtube.com" style={styles.icon}><FaYoutube /></a>
            <a href="https://linkedin.com" style={styles.icon}><FaLinkedin /></a>
            <a href="https://t.me" style={styles.icon}><FaTelegram /></a>
            <a href="https://instagram.com" style={styles.icon}><FaInstagram /></a>
          </div>
        </div>

        {/* ---------- COMPANY ---------- */}
        <div className="footer-section" style={styles.section}>
          <h3 style={styles.heading}>Company</h3>
          <ul style={styles.list}>
            {["About us","Careers","Newsroom","Alumni speak","Grievance redressal","Contact us","Work with us"]
              .map((item) => (
                <li key={item}><a href="#" style={styles.link}>{item}</a></li>
            ))}
          </ul>
        </div>

        {/* ---------- DISCOVER ---------- */}
        <div className="footer-section" style={styles.section}>
          <h3 style={styles.heading}>Discover</h3>
          <ul style={styles.list}>
            {["Free Courses","Skillup Sitemap","Resources","RSS feed","SimpliMentor GPT"]
              .map((item) => (
                <li key={item}><a href="#" style={styles.link}>{item}</a></li>
            ))}
          </ul>
        </div>

        {/* ---------- FOR BUSINESS ---------- */}
        <div className="footer-section" style={styles.section}>
          <h3 style={styles.heading}>For Businesses</h3>
          <ul style={styles.list}>
            {["Corporate Training","TalentMinds Learning Hub+","Guaranteed-to-run Classes","Corporate Resources","Partners"]
              .map((item) => (
                <li key={item}><a href="#" style={styles.link}>{item}</a></li>
            ))}
          </ul>
        </div>
      </div>

      {/* ---------- COPYRIGHT ---------- */}
      <div style={styles.bottomBar}>
        <p style={styles.copyText}>
          © 2025 TalentMinds. All Rights Reserved. |
          <a href="#" style={styles.bottomLink}> Privacy Policy </a>|
          <a href="#" style={styles.bottomLink}> Terms & Conditions </a>|
          <a href="#" style={styles.bottomLink}> Refund Policy</a>
        </p>
        <p style={styles.address}>
          Address: NALANDA 53/1 C, Manoj Arcade, 24th Main Rd, Sector 2, HSR Layout, Bengaluru - 560102, Karnataka, India.
          <br />Phone: 1800-212-7688
        </p>
      </div>

      {/* ---------- ACKNOWLEDGEMENT ---------- */}
      <div style={styles.acknowledgement}>
        <h3 style={styles.heading}>Acknowledgement</h3>
        <p className="ack-text" style={styles.ackText}>
          All product names, logos, brands, and trademarks used on this website are the property of their respective owners.
          TalentMinds LMS provides independent online learning programs designed to help users acquire new skills and certifications.
          TalentMinds is not affiliated or associated with any certification bodies, software vendors, or universities unless specifically mentioned.
          The names such as AWS®, Microsoft®, Google Cloud™, Java™, and others are trademarks of their respective owners.
          © 2025 TalentMinds. All Rights Reserved.
        </p>
      </div>

      {/* ---------- RESPONSIVE ---------- */}
      <style>{`
        @media (max-width: 1024px) {
          footer { padding: 40px 20px; }
          .footer-container { flex-wrap: wrap; justify-content: space-around; }
        }
        @media (max-width: 768px) {
          footer { text-align: left; }
          .footer-container { flex-direction: column; align-items: flex-start; gap: 30px; }
          .footer-section { width: 100%; }
          .footer-social { justify-content: flex-start; margin-bottom: 10px; }
          .footer-section h3 { font-size: 16px; }
          .footer-section a { font-size: 14px; }
        }
        @media (max-width: 480px) {
          footer { padding: 30px 15px; }
          .footer-section h3 { font-size: 15px; }
          .footer-section a { font-size: 13px; }
          .footer-social a { font-size: 18px; }
          .ack-text { font-size: 12px; }
        }
      `}</style>
    </footer>
  );
}

const styles = {
  footer: { background: "#0f172a", color: "#f8fafc", padding: "50px 20px" },
  container: { display: "flex", justifyContent: "space-between", flexWrap: "wrap", maxWidth: "1200px", margin: "0 auto" },
  section: { flex: "1 1 250px", marginBottom: "30px" },
  heading: { fontSize: "18px", fontWeight: "bold", marginBottom: "15px", color: "#38bdf8" },
  list: { listStyle: "none", padding: 0, lineHeight: "2" },
  link: { color: "#cbd5e1", textDecoration: "none" },
  icon: { color: "#f1f5f9", fontSize: "22px", marginRight: "15px" },
  socialIcons: { display: "flex", gap: "10px" },
  bottomBar: { borderTop: "1px solid #334155", marginTop: "30px", paddingTop: "20px", textAlign: "center" },
  copyText: { fontSize: "14px", color: "#94a3b8" },
  bottomLink: { color: "#38bdf8", textDecoration: "none", margin: "0 5px" },
  address: { fontSize: "13px", color: "#94a3b8", marginTop: "10px" },
  acknowledgement: { marginTop: "40px", paddingTop: "20px", borderTop: "1px solid #334155", textAlign: "center" },
  ackText: { fontSize: "13px", color: "#cbd5e1", lineHeight: "1.8" },
};
