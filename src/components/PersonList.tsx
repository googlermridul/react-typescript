type personProps = {
   users: {
      first: string,
      last: string,
      age: number
   }[]
}

const PersonList = (props:personProps) => {
   return (
      <div className="box">
         {
            props.users.map((user) => <h4 key={user.last}>name: {user.first}</h4> )
         }
      </div>
   );
};

export default PersonList;