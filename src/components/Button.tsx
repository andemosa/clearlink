interface IProps {
  text: string;
  className: string;
}
const Button = ({ text, className }: IProps) => {
  return (
    <button
      className={`${className} rounded-full text-center py-3 font-semibold px-6 w-max`}
    >
      {text}
    </button>
  );
};

export default Button;
