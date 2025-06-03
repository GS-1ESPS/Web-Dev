import styles from "../style";
import { LearningSection, Clients, CTA, Footer, Navbar, BigNumbers, Hero } from "../components";

const Home = () => (
  <div className="w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-textDark ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>
    
    <div className={` ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <BigNumbers />
        <LearningSection />
        <Clients />
        <CTA />
        <Footer />
      </div>
    </div>
  </div>
);

export default Home;

