const FAQ = () => (
<div class="accordion accordion-flush" id="accordionFlushExample">
  <div class="accordion-item">
        <h2 class="accordion-header">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
            Quem desenvolveu este projeto?
          </button>
        </h2>
        <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
          <div class="accordion-body">O projeto foi desenvolvido por uma dupla de estudantes da FIAP, Gabrielly Candido e Luiza Ribeiro, como parte do desafio Global Solution 2025.1, que propôs o uso da tecnologia para mitigar os impactos das enchentes no Brasil.
        </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
            Qual é o principal objetivo da solução?
          </button>
        </h2>
        <div id="flush-collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
          <div class="accordion-body">Nosso objetivo é criar uma plataforma digital que permita o monitoramento preventivo de áreas de risco, o envio de alertas personalizados e a mobilização da população em situações de emergência, utilizando sensores IoT, mapeamento por CEP e sistemas inteligentes de notificação.</div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
            Como a população pode se beneficiar com essa ideia?
          </button>
        </h2>
        <div id="flush-collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
          <div class="accordion-body">A população terá acesso a informações em tempo real sobre riscos de enchentes em seus bairros, poderá reportar ocorrências diretamente pelo site e receber orientações específicas por e-mail ou notificação, contribuindo com a segurança coletiva e a resposta rápida das autoridades.</div>
        </div>
      </div>
</div>
);
export default FAQ;