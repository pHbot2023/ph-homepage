import Carousel from "@/components/Carousel"; // ajuste o caminho se necessário

const SolutionsSection = () => {
  return (
    <section id="solucoes" className="flex-col bg-[#015486] min-h-32 h-fit flex items-center justify-center px-4">
      <p className="text-white text-3xl w-full max-w-[1500px] gap-8 px-6 text-start font-bold pt-4">Nossas Soluções: </p>
      <Carousel />
    </section>
  );
}


export default SolutionsSection