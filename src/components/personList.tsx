
import{Name} from './Types'


/* type PersonListProps= {
  names: { first: string
     last: string
     }[];
}; */
type PersonListProps= {
  names: Name[];
}
export const PersonList  = (props: PersonListProps) => {
  return (
    <div>
      {props.names.map((name) => {
        return (
          <h2 key={name.first}>
            {name.first}
            {name.last}
          </h2>
        );
      })}
    </div>
  );
};
