import React, { useState, useRef, useEffect } from 'react'
import {about} from './about'
const Details = () => {
   
    const [dayDetails, setdayDetails] = useState({ day: String, income: Number })
    const [loading, setLoading] = useState(false)
    const refContainer = useRef(null)
    var [week, setWeek] = useState([])


    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setdayDetails({ ...dayDetails, [name]: value });
    };

    useEffect(() => {
        
        refContainer.current.focus();
    },[]);

    const saveData = (e) => {
        e.preventDefault();
        setLoading(true)
        console.log("Data is getting Saved")

        console.log("Day is :" + dayDetails.day)
        console.log("Income is :" + dayDetails.income)
        console.log(dayDetails)
        console.log(week)
        setWeek([...week, dayDetails])

     
        /* console.log(week)
        setTimeout(function () { console.log("Printing For Week from +" + week) }, 3000);
        console.log(week)
        console.log(week)
        console.log(week)
 */
        //setdayDetails({day:'',income:0});
        



    }

    const removeData= (e) =>{
        e.preventDefault();
        console.log(e.target.value);
        let temp=e.target.value
 
         week=week.filter( (person) => 
            person.day !== temp

        )

        console.log(week)
        setWeek([...week])

    }

    return (
        <>

            <article>
                <h1>Welcome to Marathe ICE Cream Corner</h1>
                <form>

                    <h3>Post Your Details : Day And Respective Income</h3>
                    <div className='form-control'>
                        <label htmlFor="day">Name of Day:</label>
                        <input type="text" ref={refContainer} name="day" id="day" value={dayDetails.day} onChange={handleChange}></input>
                    </div>
                    <div className='form-control'>
                        <label htmlFor="income">Daily Earnings:</label>
                        <input type="number" name="income" id="income" value={dayDetails.income} onChange={handleChange} ></input>
                    </div>
                    <button type='submit' className='btn' onClick={saveData} >
                        Save the Data
      </button>

      <about/>
                </form>
                
                <div>
                    {week.map((person) => {

                        const { day, income } = person;


                        if (!loading) {
                            return (
                                <div>

                                </div>
                            );
                        }

                        return (
                            <div className='item'>
                                <h4>{day}</h4>

                                <h4>{income}₹</h4>
                                <button type='submit' className='btn' value={day} onClick={removeData} >
                                   Remove All Entries for This day
                             </button>

                            </div>
                        )





                    }


                    )


                    }

                </div>
            </article>
        </>

    )
}

export default Details