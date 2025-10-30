	import React, { useState } from 'react'

	const BmiCalculatorDemo = () => {
		const [weight,setWeight]=useState("");
		const [height,setHeight]=useState("");
		const [bmi,setBmi]=useState(null);
		const [bmiStatus,setBmiStatus]=useState("");
		const [error,setError]=useState("");

		function calculateBmi(){
			if(weight && height){
					let heightInMeter=height/100;
					const bmiValue=weight/(heightInMeter*heightInMeter);
					// console.log(bmiValue.toFixed(2))
					setBmi(bmiValue.toFixed(2))
					if(bmiValue < 18.5){
						setBmiStatus("Under Weight")
					}
					else if(bmiValue >=18.5 && bmiValue<=25){
						setBmiStatus("Normal Weight")
					}
					else if(bmiValue >25 && bmiValue<=30){
						setBmiStatus("Over Weight")
					}
					else{
						setBmiStatus("Obese")
					}
					setWeight("")
					setHeight("")
					setError("")
			}
			else{
				setBmi(null)
				setError("Please enter weight and height")
			}
		}
	  return (
		<div className='container'>
			<h1>BMI CALCULATOR</h1> 
			<div class="form-group">
		<label for="exampleInputEmail1">Weight in kg:</label>
		<input type="text" class="form-control" placeholder='Enter weight' onChange={(e)=>{setWeight(e.target.value)}} value={weight}/>
		
	  </div>
	  <div class="form-group">
		<label for="exampleInputPassword1">Height in Cm:</label>
		<input type="text" class="form-control" placeholder='Enter height' onChange={(e)=>{setHeight(e.target.value)}} value={height}/>
	  </div>
	  
	  <button type="submit" class="btn btn-primary" onClick={calculateBmi}>Calculate Bmi</button>
	  <p className='text-danger my-4'>{error}</p>
	  {bmi !=null && <div className='result'>
		<h3>Your Bmi Value {bmi} kg/m<sup>2</sup></h3>
		<h3>Your Bmi Status {bmiStatus} </h3>
	  </div>}
		</div>
	  )
	}

	export default BmiCalculatorDemo