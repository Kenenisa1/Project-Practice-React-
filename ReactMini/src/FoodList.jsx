import React, {useState} from 'react'

const FoodList = () => {
    const [food, setFd] = (["Apple", "Honey", "Mushabek"]);

    function handleAdFood(){
        const newFood= document.getElementById("foodInput");
        
    }

    function handleRemoveFood(){

    }


  return (
    <div>
        <h2>FoodList</h2>
        <ul>
            {
                food.map((fd,index) => 
                <li key={index}>{fd}</li> )
            }
        </ul>
        <input type="text" id='foodInput' placeholder='enter food name' />

    </div>
  )
}

export default FoodList