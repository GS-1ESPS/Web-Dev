import {apisgraficos, iot, iapreditiva} from "../assets";
const TechSection = () => (
    <>
    <div className="d-flex align-items-center flex-col md:flex-row gap-8 mt-20 ">
      <div class="container">
        <div class="row g-4">
          <div class="col-md-4">
            <div class="card h-100">
              <img src={iapreditiva} class="card-img-top" alt="Imagem do gráfico gerado pela inspiraçãod de IA preditiva"/>
              <div class="card-body">
                <h5 class="card-title">IA Preditiva</h5>
                <p class="card-text">Utilizamos a inspiração de uma IA preditiva treinada com dados históricos para prever enchentes com até 2 horas de antecedência.</p>
              </div>
            </div>
          </div>
          
          <div class="col-md-4">
            <div class="card h-100">
              <img src={iot} class="card-img-top" alt="Imagem da simulação do sensor ESP32"/>
              <div class="card-body">
                <h5 class="card-title">IoT</h5>
                <p class="card-text">Sensores físicos instalados em áreas críticas coletam dados como nível da água e volume de chuva.</p>
              </div>
            </div>
          </div>

          <div class="col-md-4">
            <div class="card h-100">
              <img src={apisgraficos} class="card-img-top" alt="Imagem do gráfico da API"/>
              <div class="card-body">
                <h5 class="card-title">APIs e Gráficos</h5>
                <p class="card-text">Integramos APIs meteorológicas ao dashboard e solução Back-End, gerando gráficos dinâmicos e acessíveis para análise preditiva de riscos.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
);
export default TechSection;