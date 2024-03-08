type greetprops = {
  name: string;
  messagecount?: number;
  isLoggedIn: boolean;
};

export const Greeting = (props: greetprops) => {
  const {messagecount=10}=props    //default value 
  return (
    <div>
      <h1>
        {props.isLoggedIn
          ? `Hello ${props.name}! you have ${messagecount} messages`
          : "Welcome Guest"}
      </h1>
    </div>
  );
};
