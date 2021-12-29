interface HeadingProps {
   children: string
}

const Heading = (props: HeadingProps) => {
   return (
      <div className="box">
         <h4>{props.children}</h4>
      </div>
   );
};

export default Heading;