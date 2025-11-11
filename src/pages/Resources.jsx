import React from "react";

export default function Resources() {
  return (
    <div style={styles.page}>
      

      <section className="hero" style={styles.hero}>
        <div style={styles.heroText}>
          <h2>Unlock Knowledge. Inspire Growth.</h2>
          <p>Free courses, whitepapers, and insights to help your career grow.</p>
          <button style={styles.button}>Explore Free Courses</button>
        </div>
        <img src="https://img.freepik.com/free-vector/knowledge-concept-illustration_114360-7543.jpg" alt="Resources Banner" style={styles.heroImage}/>
      </section>

      {/* Free Courses */}
      <section style={styles.freeCourses}>
        <h2>Level Up with Free Courses</h2>
        <div className="course-grid" style={styles.courseGrid}>
          {[
            {title:"Python for Beginners",img:"https://img.freepik.com/free-vector/python-programming-language-computer-program-code-coding-screen_90220-1763.jpg"},
            {title:"Intro to AI & Machine Learning",img:"https://img.freepik.com/free-vector/ai-brain-illustration_1284-69455.jpg"},
            {title:"Cloud Computing Essentials",img:"https://img.freepik.com/free-vector/cloud-storage-concept-illustration_114360-893.jpg"},
            {title:"Digital Marketing Basics",img:"https://img.freepik.com/free-vector/marketing-strategy-concept-illustration_114360-675.jpg"}
          ].map((c,i)=>
            <div key={i} className="course-card" style={styles.courseCard}>
              <img src={c.img} alt={c.title} style={styles.courseImg}/>
              <h3>{c.title}</h3>
              <button style={styles.viewButton}>Explore Course</button>
            </div>
          )}
        </div>
      </section>

      {/* Partners */}
      <section style={styles.partners}>
        <h2>Our Learning Partners</h2>
        <div className="logo-row" style={styles.logoRow}>
          {["Amazon_Web_Services_Logo.svg","Microsoft_logo.svg","Project_Management_Institute_logo.svg","Cisco_logo.svg","Indian_Institute_of_Technology_Kanpur_Logo.svg"]
            .map((file,i)=>
              <img key={i} src={`https://upload.wikimedia.org/wikipedia/commons/${file}`} alt="Partner" style={styles.brandLogo}/>
          )}
        </div>
      </section>

      {/* Reports */}
      <section style={styles.reports}>
        <h2>Featured Industry Reports</h2>
        <div className="report-grid" style={styles.reportGrid}>
          {[
            {title:"GenAI in the Fast Lane",img:"https://img.freepik.com/free-vector/business-report-concept-illustration_114360-8286.jpg"},
            {title:"Effective Live Training",img:"https://img.freepik.com/free-vector/data-analysis-concept_114360-8072.jpg"},
            {title:"Changing Tuition Benefits",img:"https://img.freepik.com/free-vector/financial-growth-concept-illustration_114360-8255.jpg"}
          ].map((r,i)=>
            <div key={i} className="report-card" style={styles.reportCard}>
              <img src={r.img} alt={r.title} style={styles.reportImg}/>
              <h3>{r.title}</h3>
              <button style={styles.viewButton}>Read Report</button>
            </div>
          )}
        </div>
      </section>

      <footer style={styles.footer}><p>© 2025 TalentMinds. All Rights Reserved.</p></footer>

      {/* ---------- RESPONSIVE ---------- */}
      <style>{`
        @media (max-width:1024px){
          section{padding:40px 30px;}
          .course-grid,.report-grid{gap:20px;}
        }
        @media (max-width:768px){
          .hero{flex-direction:column;padding:30px 20px;text-align:center;}
          .hero img{width:90%;margin-top:20px;}
          .course-grid,.report-grid{flex-direction:column;align-items:center;}
          .course-card,.report-card{width:90%;}
          .logo-row{flex-wrap:wrap;justify-content:center;}
        }
        @media (max-width:480px){
          header h1{font-size:22px;}header p{font-size:14px;}
          h2{font-size:18px;}
          .course-card p,.report-card p{font-size:13px;}
          button{width:100%;font-size:14px;}
        }
      `}</style>
    </div>
  );
}

const styles = {
  page:{fontFamily:"Arial,sans-serif",background:"#f8fafc",color:"#0f172a"},
  header:{textAlign:"center",padding:"50px 20px",background:"#0f172a",color:"#fff"},
  logo:{width:"120px",marginBottom:"10px"},
  subtitle:{color:"#94a3b8"},
  hero:{display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",padding:"40px 80px",background:"#e0f2fe"},
  heroText:{flex:"1 1 400px",paddingRight:"40px"},
  heroImage:{flex:"1 1 300px",width:"400px",borderRadius:"12px"},
  button:{background:"#0284c7",color:"#fff",border:"none",padding:"12px 24px",borderRadius:"8px",cursor:"pointer"},
  freeCourses:{padding:"50px 80px",textAlign:"center"},
  courseGrid:{display:"flex",flexWrap:"wrap",justifyContent:"center",gap:"30px"},
  courseCard:{background:"#fff",borderRadius:"10px",boxShadow:"0 4px 10px rgba(0,0,0,0.1)",padding:"20px",width:"260px",textAlign:"center"},
  courseImg:{width:"100%",height:"150px",objectFit:"cover",borderRadius:"8px"},
  viewButton:{background:"#0284c7",color:"#fff",border:"none",padding:"8px 18px",borderRadius:"6px",cursor:"pointer"},
  partners:{padding:"50px 80px",background:"#f1f5f9",textAlign:"center"},
  logoRow:{display:"flex",justifyContent:"center",flexWrap:"wrap",gap:"40px"},
  brandLogo:{width:"100px",filter:"grayscale(100%)"},
  reports:{padding:"50px 80px",textAlign:"center"},
  reportGrid:{display:"flex",flexWrap:"wrap",justifyContent:"center",gap:"30px"},
  reportCard:{background:"#fff",borderRadius:"10px",boxShadow:"0 4px 10px rgba(0,0,0,0.1)",padding:"20px",width:"280px",textAlign:"center"},
  reportImg:{width:"100%",height:"150px",objectFit:"cover",borderRadius:"8px"},
  footer:{background:"#0f172a",color:"#fff",textAlign:"center",padding:"20px",marginTop:"40px"},
};
