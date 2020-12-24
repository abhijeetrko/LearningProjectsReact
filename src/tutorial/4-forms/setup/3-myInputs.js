import React, { useState } from 'react'

const Details= () =>{
const [dayDetails,setdayDetails]=useState({day:'',income:0})

const [week,setWeek]=useState([{day:'Sunday',income:'190'}])

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setdayDetails({ ...dayDetails, [name]: value });
      };

const saveData = (e) =>{
e.preventDefault();
console.log("Data is getting Saved")

console.log("Day is :" + dayDetails.day)
console.log("Income is :" + dayDetails.income)
console.log(dayDetails)
console.log(week)
setWeek([...week,dayDetails])

console.log(week)

console.log(week)
console.log(week)
console.log(week)

//setdayDetails({day:'',income:0});


}
    return(
        <>
        <article>
            <form>
        <h1>Post Your Details : Day And Respective Income</h1>
        <div className='form-control'>
            <label htmlFor="day">Name of Day:</label>
        <input type="text" name="day" id="day" value={dayDetails.day} onChange={handleChange}></input>
      </div>
      <div className='form-control'>
          <label htmlFor="income">Daily Earnings:</label>
      <input type="number" name="income"id="income" value={dayDetails.income} onChange ={handleChange} ></input>
</div>
<button type='submit' className='btn' onClick={saveData} >
            Save the Data
          </button>
        </form> 
        <div>
        {week.map( (person) => {
           
            const{day , income}=person;
            return(
          <div className='item'>
              <h4>{day}</h4> 

              <h4>{income}₹</h4>
              
    </div>

            );


        }


        )


        }

        </div>
        </article>
        </>
        
    )
}

export default Details