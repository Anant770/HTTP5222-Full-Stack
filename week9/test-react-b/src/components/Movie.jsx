export default function Movie(props) {
  //For props, I'm expecting
  //- title
  //- year
  return (
    <p>{props.title} ({props.year})</p>
  );
}