export default function Grocery(props) {
  //For props, I'm expecting
  //- name
  //- dept
  return (
    <p>{props.name} ({props.dept})</p>
  );
}