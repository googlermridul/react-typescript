type PersonProps = {
   user: {
      first: string,
      last: string,
      age: number
   }
}

const Person = (props : PersonProps) => {
   const { first, last, age } = props.user;
   return (
      <div className="box">
         <h3>name: {first} {last}, age: {age}</h3>
      </div>
   );
};

export default Person;