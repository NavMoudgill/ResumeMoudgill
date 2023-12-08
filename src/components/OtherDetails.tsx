import Button from "./sharedComponents/Button";

const OtherDetails = ({
  val,
}: {
  val: (node?: Element | null | undefined) => void;
}) => {
  return (
    <>
      <div
        id="other"
        className=" justify-center flex flex-col items-start px-10 bg-gray-200 "
      >
        <div className="my-10 lg:mx-5">
          <h1 className="text-3xl mb-6 text-black card" ref={val}>
            Altro
          </h1>
          <div className="border-s-2  border-gray-800 p-5  text-xl font-serif text-gray-700">
            <h1>COMPETENZE LINGUISTICHE:</h1>
            <br />
            <ul className="list-disc ml-5">
              <li className="hover:translate-x-5 duration-500 ease-in-out transition-all">
                Lingua madre: Punjabi
              </li>
              <li className="hover:translate-x-5 duration-500 ease-in-out transition-all">
                Hindi
              </li>
              <li className="hover:translate-x-5 duration-500 ease-in-out transition-all">
                Inglese
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default OtherDetails;
