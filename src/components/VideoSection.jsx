
const VideoSection = () => (
<section class="bg-bgLight p-0 w-full justify-center items-center flex flex-col">
  <div class="w-full grid grid-cols-1  gap-8 max-w-none">
    <div class="my-14 flex flex-col justify-center items-start p-0 mx-0 w-full"> 
      <div class="flex flex-column justify-between gap-5 mt-24 p-0 mx-0 w-full">
        <h2 class="text-[36px] font-medium text-textDark">Assista ao vídeo</h2>
        <p class="text-[18px] font-normal text-grey w-full">
          Basicamente, essa é a explicação da nossa solução em formato de pitch. Descubra como nosso projeto pode transformar ideias em soluções inovadoras, mostrando nossa visão, proposta de valor e os benefícios que ele pode oferecer!"
        </p>
      </div>

      <div class="w-full mt-14 aspect-[1.84] rounded-[14px]">
        <iframe class="w-full h-full rounded-[14px]" src="https://www.youtube.com/embed/QHpom7P2mfE?si=w5-3IcHvZ70fz3NE" title="YouTube video player" allowfullscreen></iframe>
      </div>
    </div>
  </div>
</section>

);

export default VideoSection;