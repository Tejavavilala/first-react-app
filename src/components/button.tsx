import React from "react"; // Import React if not already imported

type ButtonProps = {
  handleClick: (event:React.MouseEvent<HTMLButtonElement>,id :number) => void; // Function doesn't return anything
};

export const Button = (props: ButtonProps) => {
  return <button onClick={(event)=>props.handleClick(event,1)}>Click</button>;
};
