import partnerLogos from "../../public/data/partnerLogos.json"

const PartnerSection = () => {
  return (
    <div>
        <div className="bg-[#015486] h-[1px] w-[95%] m-12 justify-self-center max-w-[1800px]">
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-5 h-fit w-full max-w-[1600px] justify-self-center justify-items-center m-6 gap-4">
            {Object.values(partnerLogos).map((item, id) =>
                <img className="h-16" key={id} src={item.image} alt={item.name} />
            )}
        </div>
    </div>
  )
}

export default PartnerSection