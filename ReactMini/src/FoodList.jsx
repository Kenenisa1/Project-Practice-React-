import React, {useState} from 'react'

const FoodList = () => {
    const [food, setFd] = useState(["Apple", "Honey", "Mushabek"]);

    function handleAdFood(){
        const newFood= document.getElementById("foodInput").value;
        document.getElementById("foodInput").value="";
        setFd( f=> [...f,newFood]);

    }

    function handleRemoveFood(index){
        setFd(food.filter((_, i) => i!== index));
    }


  return (
    <div>
        <h1>Welcome to Halal Restorant</h1>
        <h2>Choose your delicous</h2>
        <ul>
            {
                food.map((fd,index) => 
                <li key={index} onClick={ () => handleRemoveFood(index)} >{fd}</li> )
            }
        </ul>
        <input type="text" id='foodInput' placeholder='enter food name' />
        <button onClick={handleAdFood}>Order food</button>

    </div>
  )
}

export default FoodList