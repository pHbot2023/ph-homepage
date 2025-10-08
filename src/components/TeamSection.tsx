import teamName from "../../public/data/teamName.json";

const TeamSection = () => {
  return (
    <section
      id="nossaequipe"
      className="h-fit bg-white max-w-[1500px] justify-self-center"
    >
      <p className="p-4 font-bold text-3xl">Nossa Equipe:</p>
      <div className="grid grid-cols-2 sm:grid-cols-3 text-white font-medium lg:grid-cols-5 gap-4 w-full h-fit p-4 pt-8">
        {Object.values(teamName).map((item, id) => (
          <div
            key={id}
            className="rounded-xl text-center justify-self-center relative overflow-hidden z-0 bg-[#1f2f4f] h-fit w-fit p-2"
          >
            <img
              className="rounded-xl w-56 h-44 object-cover"
              src={item.image}
              alt=""
            />
            <p className="text-lg md:text-xl">{item.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;
