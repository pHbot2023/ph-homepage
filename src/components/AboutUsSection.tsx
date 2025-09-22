const AboutUs = () => {
  return (
    <section
      id="quemsomos"
      className="flex flex-col lg:grid lg:grid-cols-2 gap-8 justify-self-center items-center max-w-[1500px] px-6 py-16"
    >
      {/* Texto */}
      <div className="flex flex-col justify-start gap-4 w-full max-w-3xl">
        <p className="text-4xl font-bold">Quem Somos:</p>
        <p className="text-justify text-base md:text-xl leading-relaxed">
          O pHBot nasceu como resposta ao desafio “Ações que transformam o
          mundo”, proposto pelo projeto Agrinho do Sistema FAEP. Criado por
          quatro estudantes motivados pela preservação ambiental, o projeto foi
          inspirado no cuidado com os recursos hídricos locais — uma preocupação
          que virou ação por meio da criação de um dispositivo para
          monitoramento de pH em rios e nascentes.
        </p>
      </div>

      {/* Imagem */}
      <div className="flex justify-center items-center w-full max-w-3xl">
        <img
          src="./pH-unidos.jpg"
          alt="Foto do grupo"
          className="w-full max-w-lg rounded-2xl border-2 border-[#8FD8FF] object-cover"
        />
      </div>
    </section>
  );
};

export default AboutUs;
