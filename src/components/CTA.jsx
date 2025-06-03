import { useState } from "react";

const CTA = () => {
  const [showDonationModal, setShowDonationModal] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Doação enviada com sucesso!");
    setShowDonationModal(false);
  };

  return (
    <section className="cta-section">
      <div className="cta-text">
        <h2 className="cta-heading">Ajude Já!</h2>
        <p className="cta-paragraph">
          Sua doação leva esperança para famílias atingidas pelas enchentes!
        </p>
      </div>

      <div className="cta-button-wrapper">
        <button
          className="bg-textDark hover:bg-blue-800 text-white px-6 py-2 rounded-md transition"
          onClick={() => setShowDonationModal(true)}
        >
          Fazer Doação
        </button>
      </div>

      {showDonationModal && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex justify-center items-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-xl relative">
            <button
              onClick={() => setShowDonationModal(false)}
              className="absolute top-3 right-4 text-2xl text-gray-500"
            >
              &times;
            </button>

            <h3 className="text-xl font-bold text-textDark mb-4">Formulário de Doação</h3>
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block mb-1">Nome Completo</label>
                <input type="text" className="w-full border rounded px-3 py-2" required />
              </div>
              <div>
                <label className="block mb-1">CPF</label>
                <input type="text" className="w-full border rounded px-3 py-2" required />
              </div>
              <div>
                <label className="block mb-1">Email</label>
                <div className="flex">
                  <span className="inline-flex items-center px-3 bg-gray-200 border border-r-0 rounded-l">@</span>
                  <input type="email" className="w-full border rounded-r px-3 py-2" required />
                </div>
              </div>
              <div>
                <label className="block mb-1">Valor</label>
                <input type="text" className="w-full border rounded px-3 py-2" required />
              </div>
              <div className="md:col-span-2">
                <label className="block mb-1">Causa</label>
                <select className="w-full border rounded px-3 py-2" required>
                  <option value="">Escolha a causa...</option>
                  <option>Porto Alegre (RS) – Abril/Maio de 2024</option>
                  <option>Petrópolis (RJ) – Fevereiro de 2022</option>
                  <option>Recife (PE) – Maio de 2022</option>
                  <option>São Paulo (SP) – Fevereiro de 2023</option>
                </select>
              </div>
              <div className="md:col-span-2">
                <label className="inline-flex items-center gap-2">
                  <input type="checkbox" required />
                  <span>Aceito os termos e condições</span>
                </label>
              </div>
              <div className="md:col-span-2">
                <button
                  type="submit"
                  className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded"
                >
                  Enviar Doação
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default CTA;
