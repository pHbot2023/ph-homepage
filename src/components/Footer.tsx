const Footer = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 bg-[#1f2f4f] h-fit text-white p-6 justify-between">
      <div className="w-fit p-4">
        <img src="./pHbot-logo.png" alt="" />
      </div>
      <div className="w-fit p-4">
        <p className="font-bold text-2xl">Informações de contato</p>
        <p>phbotpbpr@gmail.com</p>
        <p>(46)  9106-9195</p>
        <p>Parque Tecnologico de Pato Branco</p>
        <p>R. Lídio Oltramari, 1628 - Fraron, Pato Branco - PR, 85503-381</p>
      </div>
      <div className="w-fit p-4">
        <p className="font-bold text-2xl">Redes sociais</p>
        <a href="https://www.instagram.com/phbot__" target="_blank"><p>@pHbot__</p></a>
        <a href="https://www.linkedin.com/company/phbot/posts/?feedView=all" target="_blank"><p>linkedin</p></a>
      </div>
      <div className="w-fit p-4">
        <p className="font-bold text-2xl">Informações Gerais</p>
        <p>Sobre a pHBot</p>
        <p>Politica de privacidade</p>
        <p>Soluções</p>
        </div>
    </section>
  )
}

export default Footer