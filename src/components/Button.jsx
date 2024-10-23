import "./button.css";

const Button = ({ onClick }) => {
  return (
    <button className="random" onClick={onClick}>
      RANDOM
    </button>
  );
};

export default Button;
