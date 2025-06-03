import Button from "./Button";
import learning from "../assets/learning-img.png"
const LearningSection = () => (

<section id="learning" className="learning-section">
  <div className="learning-image-wrapper">
    <img src={learning} alt="learning screenshoot" className="learning-image" />
  </div>

  <div className="learning-text">
    <h2 className="learning-title">
      Aprender para Proteger!
    </h2>
    <p className="learning-description">
      Quando conhecemos melhor os riscos ao nosso redor, conseguimos agir com mais segurança e consciência.
    </p>
    <p className="learning-description">
      Neste espaço, reunimos conteúdos que ajudam você a entender melhor o que está por trás das enchentes, como agir em situações de emergência e como contribuir com sua comunidade.
    </p>

    <div className="store-buttons">
      <a href="/solution"><Button/></a>
    </div>
  </div>
</section>

);

export default LearningSection;
