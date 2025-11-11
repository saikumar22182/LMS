import React from "react";

export default function ForBusiness() {
  return (
    <div style={styles.page}>    

      <section className="hero" style={styles.hero}>
        <div style={styles.heroText}>
          <h2>Transform Your Team with Future-Ready Skills.</h2>
          <p>We deliver engaging corporate training in AI, Data, Cloud, Cybersecurity, and more.</p>
          <button className="button" style={styles.button}>Speak to a Solution Expert</button>
        </div>
        <img src="https://img.freepik.com/free-vector/team-training-office_74855-1992.jpg" alt="Corporate Training" style={styles.heroImage}/>
      </section>

      <section style={styles.features}>
        <h2>Designed for Learner Engagement</h2>
        <div className="feature-grid" style={styles.featureGrid}>
          {[
            {img:"https://img.freepik.com/free-vector/online-class-illustration_23-2148893039.jpg",title:"Live Virtual Corporate Training",desc:"Delivered by real industry experts."},
            {img:"https://img.freepik.com/free-vector/programming-concept-illustration_114360-1670.jpg",title:"Hands-on Learning",desc:"Projects and labs based on real-world scenarios."},
            {img:"https://img.freepik.com/free-vector/customer-support-illustration_23-2148892789.jpg",title:"End-to-End Support",desc:"Dedicated learning manager for your team."},
            {img:"https://img.freepik.com/free-vector/data-analysis-illustration_114360-920.jpg",title:"Rich Skills Catalog",desc:"Access 500+ courses and 40+ learning paths."}
          ].map((f,i)=>
            <div key={i} className="card" style={styles.card}>
              <img src={f.img} alt={f.title} style={styles.cardImg}/>
              <h3>{f.title}</h3><p>{f.desc}</p>
            </div>
          )}
        </div>
      </section>

      <section style={styles.partners}>
        <h2>Trusted by Leading Organizations</h2>
        <div className="logo-row" style={styles.logoRow}>
          {["Microsoft_logo.svg","Amazon_Web_Services_Logo.svg","Indian_Institute_of_Technology_Kanpur_Logo.svg","Purdue_University_wordmark.svg","Project_Management_Institute_logo.svg"]
            .map((file,i)=>
              <img key={i} src={`https://upload.wikimedia.org/wikipedia/commons/${file}`} alt="Partner" style={styles.brandLogo}/>
          )}
        </div>
      </section>

      <section style={styles.contact}>
        <h2>Ready to Upskill Your Employees?</h2>
        <p>Let’s connect to explore the right learning solutions.</p>
        <form>
          {["Your Name","Your Email","Your Phone","Company Name"].map((p,i)=>
            <input key={i} type="text" placeholder={p} style={styles.input}/>
          )}
          <button type="submit" className="button" style={styles.submitButton}>Submit Details</button>
        </form>
      </section>

      <footer style={styles.footer}><p>© 2025 TalentMinds. All Rights Reserved.</p></footer>

      {/* ---------- RESPONSIVE ---------- */}
      <style>{`
        @media (max-width:1024px){
          .feature-grid,.logo-row{gap:20px;}
          section{padding:40px 30px;}
        }
        @media (max-width:768px){
          .hero{flex-direction:column;padding:30px 20px;text-align:center;}
          .hero img{width:90%;margin-top:20px;}
          .feature-grid{flex-direction:column;align-items:center;}
          .card{width:90%;}
          .logo-row{flex-wrap:wrap;justify-content:center;}
          input{width:90%;}
        }
        @media (max-width:480px){
          header h1{font-size:22px;}header p{font-size:14px;}
          .button{width:100%;font-size:15px;}
          .card{width:95%;}
          input{width:100%;}
        }
      `}</style>
    </div>
  );
}

const styles = {
  page:{fontFamily:"Arial,sans-serif",background:"#f8fafc",color:"#0f172a"},
  header:{textAlign:"center",padding:"40px 20px",background:"#0f172a",color:"#fff"},
  logo:{width:"120px",marginBottom:"10px"},
  title:{fontSize:"28px"},
  subtitle:{fontSize:"18px",color:"#94a3b8"},
  hero:{display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",padding:"40px 80px",background:"#e0f2fe"},
  heroText:{flex:"1 1 400px",paddingRight:"40px"},
  heroImage:{flex:"1 1 300px",width:"400px",borderRadius:"12px"},
  button:{background:"#0284c7",color:"#fff",border:"none",padding:"12px 24px",borderRadius:"8px",cursor:"pointer",fontSize:"16px",marginTop:"15px"},
  features:{padding:"50px 80px",textAlign:"center"},
  featureGrid:{display:"flex",flexWrap:"wrap",justifyContent:"center",gap:"30px"},
  card:{background:"#fff",borderRadius:"10px",boxShadow:"0 4px 10px rgba(0,0,0,0.1)",padding:"20px",width:"260px",textAlign:"center"},
  cardImg:{width:"100%",height:"160px",objectFit:"cover",borderRadius:"8px"},
  partners:{padding:"50px 80px",background:"#f1f5f9",textAlign:"center"},
  logoRow:{display:"flex",justifyContent:"center",flexWrap:"wrap",gap:"40px",marginTop:"20px"},
  brandLogo:{width:"100px",filter:"grayscale(100%)"},
  contact:{padding:"50px 80px",textAlign:"center",background:"#e0f2fe"},
  input:{padding:"10px",width:"280px",borderRadius:"6px",border:"1px solid #cbd5e1",margin:"10px"},
  submitButton:{background:"#0284c7",color:"#fff",border:"none",padding:"12px 24px",borderRadius:"8px",cursor:"pointer"},
  footer:{background:"#0f172a",color:"#fff",textAlign:"center",padding:"20px"},
};
