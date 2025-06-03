

import styles from "../style";
import { AboutSection, FAQ, CTA, Footer, Navbar, HeroAbout } from "../components";

const Home = () => (
  <div className=" w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-bgLight ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <HeroAbout />
      </div>
    </div>
    
    <div className={` ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <AboutSection />
        <FAQ/>
        <CTA />
        <Footer />
      </div>
    </div>
  </div>
);

export default Home;

