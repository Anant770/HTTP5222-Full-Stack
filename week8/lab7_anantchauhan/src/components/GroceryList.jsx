import Grocery from "./Grocery"
import {useState} from "react"
import "./GroceryList.css"

let GrocerysArray = [
  {
    name: "Banana",
    dept: "Produce"
  },
  {
    name: "Frozen paratha",
    dept: "Frozen Food"
  }
]

export default function GroceryList() {
  const [GrocerysList, setGrocerysList] = useState(GrocerysArray);

  function handleForm(e) {
    e.preventDefault(); //prevent actual page refresh on submission
    console.log(e.target.name.value);
    let newGrocery = {
      name: e.target.name.value,
      dept: e.target.dept.value
    };
    //Because we do not want to directly modify the GrocerysList array (a state variable), we need to use the array spread syntax.
    //Below, we are creating an entirely new array using the square brackets. Within the array, we use the spread syntax (...) to "print" out all of the values of the GrocerysList array then append newGrocery after that.
    setGrocerysList(
      [
        ...GrocerysList,
        newGrocery
      ]
    );
  }
  return (
    <section className="Grocerys">
      <h2>Grocery</h2>
      <form onSubmit={handleForm}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" placeholder="e.g. Apple" />
        <label htmlFor="dept">Dept:</label>
        <input type="text" id="dept" name="dept" placeholder="e.g. Produce" />
        <button type="submit">Add Grocery</button>
      </form>
      {
        GrocerysList.map((m) => (
          <Grocery 
            name={m.name} 
            dept={m.dept} 
            key={m.name + m.dept} 
          />
        ))
      }
    </section>
  )
}