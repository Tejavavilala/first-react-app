import React from "react"; // Import React if not already imported

type InputProps = {
  value: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void; // Function doesn't return anything
};

export const Input = (props: InputProps) => {
  const handleInputChange=(event:React.ChangeEvent<HTMLInputElement>)=>{
    console.log(event)
  }
  return <input type="text" value={props.value} onChange={handleInputChange} />;
};
