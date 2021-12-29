interface ButtonProps {
   handleClick: (event: React.MouseEvent) => void;
}
const Button = (props: ButtonProps) => {
   return (
      <button onClick={props.handleClick}>Click</button>
   );
};

export default Button;