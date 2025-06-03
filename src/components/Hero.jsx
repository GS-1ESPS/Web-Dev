import { useState } from "react";

const Hero = () => {
  const [openModal2, setOpenModal2] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
      setOpenModal2(false);
    }, 3000);
  };

  return (
    <>
      <section className="flex flex-col justify-center items-center text-white mb-4 pt-12 bg-textDark">
        <div className="relative flex flex-col items-center justify-center h-full w-full mt-14 py-8 z-10">
          <div className="flex items-end justify-start max-w-[1280px] w-full">
            <div className="flex flex-col w-[75%] items-start m-0 transform-none px-0 sm:px-5 md:px-10">
              <h1 className="text-[25px] sm:text-[30px] md:text-[38px] font-semibold leading-[1.2]">
                Antecipe, Proteja e Conecte
              </h1>
              <p className="text-[18px] sm:text-[25px] md:text-[20px] font-normal leading-[32px] mt-2">
                Viu um ponto de alagamento na sua região? Você pode nos ajudar a agir mais rápido e evitar acidentes. Basta enviar um alerta e contribuir com a segurança de todos.
              </p>
              <button
                onClick={() => setOpenModal2(true)}                
                className="mt-4 bg-[#003B5C] text-white py-2 px-4 rounded-md font-semibold">
                Reportar Alagamento
              </button>
            </div>
          </div>
        </div>
      </section>

      {openModal2 && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-[999]">
          <div className="bg-white text-black rounded-lg shadow-lg p-8 w-[90%] max-w-xl relative">
            <button
               onClick={() => {
                setOpenModal2(false);
                setSuccessMessage(false);
              }}
              className="absolute top-2 right-4 text-xl font-bold"
            >
              &times;
            </button>
            <h3 className="text-xl font-bold mb-2">Reportar Alagamento</h3>
            <p className="mb-4">Nos conte sobre o local afetado:</p>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input type="text" placeholder="Nome completo" required className="border p-2 rounded" />
              <input type="email" placeholder="Email" required className="border p-2 rounded" />
              <input type="text" placeholder="CEP" pattern="\d{8}" maxlength="8" required className="border p-2 rounded"/>
              <textarea placeholder="Observações" className="border p-2 rounded" rows="3"></textarea>
              <button type="submit" className="bg-[#003B5C] text-white px-4 py-2 rounded">
                Enviar
              </button>
              {showSuccess && (
                <p className="text-green-600 mt-2">Situação enviada por e-mail.</p>
              )}
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Hero;
