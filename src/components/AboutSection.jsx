import mockup from "../assets/mockup.png";

const AboutSection = () => (
  <section id="features" className="about-section">
    <div className="about-text">
      <h2 className="about-heading">
        O que é o "ChuvaSegura"?
      </h2>
      <p className="about-paragraph">
        É uma iniciativa que une inovação tecnológica, ação social e consciência climática para enfrentar um dos maiores desafios do Brasil: as enchentes. Nosso sistema atua em várias frentes, combinando sensores físicos instalados em áreas de risco, inteligência artificial e participação comunitária.
      </p>
    </div>

    <div className="about-features">
      <img src={mockup} alt="" className="rounded-xl max-w-[70%]" />
    </div>
  </section>
);

export default AboutSection;
