import { useState } from "react"


const Crud1 = () => {

   const [items, setItems] = useState([]);
   const [inputValue, SetInputValue] = useState('');
   const [editIndex, setEditIndex] = useState(null);

   const handleInput=(e)=>{
      SetInputValue(e.target.value);
   };

   const handleSubmit=()=>{
    
    if(editIndex !== null){
        const updatedItems = items.map((item, index)=>
          index === editIndex ? inputValue : item
        );
        setItems(updatedItems);
        setEditIndex(null)
    }else{
        setItems([...items, inputValue])
    }
    SetInputValue('')

   }


  return (
    <div>
     <h2>CRUD APP</h2>
     <input type="text" placeholder="Enter Item"
      onChange={handleInput} />
     <button onClick={handleSubmit}></button>
    </div>
  )
}

export default Crud1
