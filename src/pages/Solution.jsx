import styles from "../style";
import {  VideoSection, CTA, Footer, Navbar, TechSection} from "../components";

const Solution = () => (
  <div className="w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>
     <div className={`bg-bgLight ${styles.paddingX} ${styles.flexStart}`}>
           <div className={`${styles.boxWidth}`}>
             <VideoSection />
           </div>
         </div>
    <div className={` ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <TechSection/>
        <CTA />
        <Footer />
      </div>
    </div>
  </div>
);

export default Solution;
