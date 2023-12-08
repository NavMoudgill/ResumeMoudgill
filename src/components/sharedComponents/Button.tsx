interface ButtonProps {
  title: String;
  link?: String;
}
const Button = ({ title, link }: ButtonProps): React.ReactElement => {
  return (
    <button className="bg-blue-500 hover:bg-blue-600 flex justify-center items-center text-white p-3 my-3 px-6 rounded-sm">
      <a href={`${link}`} target="_blank">
        {title}
        <span className="text-xl ml-2">&#10095;</span>
      </a>
    </button>
  );
};

export default Button;
