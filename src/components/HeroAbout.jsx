const HeroAbout = () => {
  return (
   <section class="flex flex-col items-center justify-start text-center bg-bgLight px-8 py-10">
      <div class="w-full  flex flex-col justify-start mt-[100px]">
        <div class="w-full flex flex-col items-center justify-start">
          <div class="w-full flex flex-col justify-start">
            <h1 class="text-[48px] font-semibold text-gray-900 tracking-tight leading-none">Quem somos</h1>
            <p class="text-[20px] text-gray-900 font-normal leading-snug mt-[15px] self-center">
              Um projeto social e tecnológico comprometido com a prevenção de enchentes e a proteção de comunidades vulneráveis.
            </p>
          </div>
        </div>
      </div>
    </section>

  );
};

export default HeroAbout;
