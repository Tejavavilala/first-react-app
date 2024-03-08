export const Status = (props:StatusProps) => {
  let message
  if(props.status==='loading')
  {
    message='Loading...'
  }
  else if(props.status==='success')
  {
    message='Data fetched successfully'
  } else if(props.status==='error')
  {
    message='error fetching data'
  }
  return (
    <div>
      {/* <h2>Loading...</h2>
      <h2>Data fetched successfully</h2>
      <h2>Error data loading</h2> */}
      <h2>Status-{message}</h2>
    </div>
  );
};

type StatusProps={
  status:'loading'|'success'|'error'
}