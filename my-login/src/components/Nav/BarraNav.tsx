import "../Nav/barraNav.css"
// import { render } from "react-dom";
import Select from "react-select";



export function Nav(){

const handleChange:any = (selected: string[]) => {

    console.log(selected);
  };


const options: any= [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];
  return (
    <div>
    
      <Select
        isMulti={true}
        options={options}
        onChange={handleChange}
      />
    </div>
  );
}