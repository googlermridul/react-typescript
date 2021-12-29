interface InputProps {
   value: string
   handleChange: (event: React.ChangeEvent) => void;
}

const Input = (props: InputProps) => {
   return (
      <input type="text" value={props.value} onChange={props.handleChange} />
   );
};

export default Input;