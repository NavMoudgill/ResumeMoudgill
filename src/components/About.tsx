const About = ({
  val,
}: {
  val: (node?: Element | null | undefined) => void;
}) => {
  return (
    <div
      id="about"
      className="bg-gray-200   justify-center flex flex-col items-start px-10 py-2"
    >
      <div className="my-10 lg:mx-5">
        <div ref={val} className={`text-3xl mb-5 text-black card`}>
          About
        </div>
        <div className="border-s-2  border-gray-800 p-5  text-xl font-serif text-gray-700">
          Sono una persona socievole, allegra, puntuale e ben ordinata. Sono
          curiosa di scoprire le diverse culture e di lavorare con persone in
          stato di vulnerabilità sociale. Estremamente motivata ad arricchire le
          mie competenze per una crescita personale e formativa. Amo unire le
          creatività e competenze agli obiettivi dell'azienda.
          <br />
        </div>
      </div>
    </div>
  );
};

export default About;
