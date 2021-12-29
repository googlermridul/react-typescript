interface OscarProps {
   children: React.ReactNode
}

const Oscar = (props:OscarProps) => {
   return (
      <div className="box">
         <h3>{props.children}</h3>
      </div>
   );
};

export default Oscar;