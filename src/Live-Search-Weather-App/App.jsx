import React, { useEffect, useState } from "react";

import "./index.css";

const App = () => {


        const[tempdata,setTempdata] = useState(null);
        const[city,setCity] = useState("chandigarh");
        



        const getCityData = async() => {
  
                try{
                        const url= `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=e8dcc20a6d7e2febf39134eebedbf608`;    
               
                    const response =  await fetch(url);    

                    const ResponseJson = await response.json();    
                    
                
                        setTempdata(ResponseJson.main);   
                }
                    
        
                catch (err){
                        console.log(err);
                }

            }





       useEffect( () => {
            getCityData();    
        },[city]);         






        const InputEvent = (event) => {

                setCity(event.target.value);
        }

         



    return(
        
        <>
                <div className="box">

                        
                        <div className="inputData">
                                <input 
                                        type="search"
                                        className="inputField"

                                        onChange={InputEvent}                                        
                                />
                        </div>

             

              
             
        {
              !tempdata ? (

                      

                        <h2 className="errorMsg"> Oops !!  Enter a Valid City NAME </h2>

              )  

              :

              (
                        <div className="info">
                                
                                <h2 className="location">
                                        <i className="fa-solid fa-street-view"> {city} </i>
                                </h2>

                                <h2 className="temp"> 
                                       {tempdata.temp}° Cel
                                </h2>


                                <h3 className="tempmin_max">
                                

                                        Min : {tempdata.temp_min}° Cel | Max : {tempdata.temp_min}° Cel
                                </h3>


                         </div>
              )

        }
               





                        <div className="wave -one"></div>
                        <div className="wave -two"></div>
                        <div className="wave -three"></div>


                </div>  


                
        </>

    );

}

export default App;
