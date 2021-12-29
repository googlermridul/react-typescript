interface StatusProps {
   status: "loading" | "error" | "success"
}

const Status = (props: StatusProps) => {
   let message;

   if (props.status === "loading") {
      message = "Loading...";
   }
   else if (props.status === "success") {
      message = "data fetched successfully"
   }
   else if (props.status === "error") {
      message = "error fetching data"
   }

   return (
      <div className="box">
         <h4>{message}</h4>
      </div>
   );
};

export default Status;