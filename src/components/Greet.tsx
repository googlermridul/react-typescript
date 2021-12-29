interface greetProps {
   name: string,
   messageCount?: number,
   isLoggedIn: boolean
}

const Greet = (props : greetProps) => {
   const {messageCount = 0} = props; 
   return (
      <div className="box">
         {
            props.isLoggedIn ? 
            <h3>Hello {props.name}! You have {messageCount} unread messages.</h3> :
            <h3>Welcome guest!</h3>
         }
      </div>
   );
};

export default Greet;