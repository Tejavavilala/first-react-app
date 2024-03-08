/* type PersonProps={
  name:{
    first:string,
    last:string
  }
} */
import{PersonProps} from './Types'

export const Person=(props:PersonProps)=>
{
  return(
    <div>
      {props.name.first}{props.name.last}
    </div>
  )
}