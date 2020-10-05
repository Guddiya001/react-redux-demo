import React, {useState,useEffect} from 'react'
import { connect } from 'react-redux'
import { addItem,removeItem, addItem2,removeItem2 } from '../redux'

function IceCreamContainer (props) {  
  
  const [delhi, setDelhi] = useState(false)
  const [mumbai, setMumbai] = useState(false)
  const [chennai, setChennai] = useState(false)
  const [kolkata, setKolkata] = useState(false)
  const [chicago, setChicago] = useState(false)
  const [newYork, setNewYork] = useState(false)


  const submit = (e)=>{

    console.log(e.target.checked)
   console.log(e.target.value)
     console.log("ADDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD")

    if(e.target.checked){
     
      if(e.target.value =="Delhi"){
        setDelhi(true)
        props.addItem(e.target.value)
      }
      else  if(e.target.value =="Mumbai"){
        setMumbai(true)
        props.addItem(e.target.value)
      }
      if(e.target.value =="Chennai"){
        setChennai(true)
        props.addItem(e.target.value)
      }
      else  if(e.target.value =="Kolkata"){
        setKolkata(true)
        props.addItem(e.target.value)
      }
      else  if(e.target.value =="Chicago"){
        setChicago(true)
        props.addItem2(e.target.value)
      }
      else  if(e.target.value =="New York"){
        setNewYork(true)
        props.addItem2(e.target.value)
      }
    }
    else{
      
     
     if(e.target.value =="Delhi"){
      setDelhi(false)
      props.removeItem(e.target.value)
    }
    else  if(e.target.value =="Mumbai"){
      setMumbai(false)
      props.removeItem(e.target.value)
     
    }
   else if(e.target.value =="Chennai"){
      setChennai(false)
      props.removeItem(e.target.value)
    }
    else  if(e.target.value =="Kolkata"){
      setKolkata(false)
      props.removeItem(e.target.value)
    }

    else  if(e.target.value =="Chicago"){
      setChicago(false)
      props.removeItem2(e.target.value)
    }
    else  if(e.target.value =="New York"){
      setNewYork(false)
      props.removeItem2(e.target.value)
    }
          
    }
  }


useEffect(() => {
  //  setDelhi(false)
  if(props.country){
    //    const val = props.country[data]
    const valDelhi = props.country.indexOf("Delhi")
    const valMumbai = props.country.indexOf("Mumbai")
    const valChennai = props.country.indexOf("Chennai")
    const valKolkata = props.country.indexOf("Kolkata")
    const valChicago = props.country.indexOf("Chicago")
    const valNewYork = props.country.indexOf("New York")

         
    if(valDelhi!== -1){
      setDelhi(true)
    }else{
      setDelhi(false)
    }
    if(valMumbai!== -1){
      setMumbai(true)
    }else{
      setMumbai(false)
    } 
    
    if(valChennai!== -1){
      setChennai(true)
    }else{
      setChennai(false)
    } if(valKolkata!== -1){
      setKolkata(true)
    }else{
      setKolkata(false)
    }
    if(valChicago!== -1){
      setChicago(true)
    }else{
      setChicago(false)
    }
    if(valNewYork!== -1){
      setNewYork(true)
    }else{
      setNewYork(false)
    }


    
    ////////////////////
 }
  
}, [props.country])




//test("Delhi")
 


  return (
  

<div className="col-md-6 float-left">


    <div className="card">
        <div className="card-body ">
            <div className="custom-control  custom-checkbox">  
              <h4>INDIA</h4>
              
           
          
                <p className="pl-4 p-2" ><input type="checkbox" className="custom-control-input" id="customCheck1"
                value="Delhi" checked={delhi} onClick={(e)=> submit(e)}
                           
                />  
                <label className="custom-control-label" for="customCheck1">Delhi</label>  </p>

             
                <p className="pl-4 p-2" ><input type="checkbox" className="custom-control-input" id="customCheck2"
                  value="Mumbai" checked ={mumbai} onClick={(e)=> submit(e)}
                />  
                    <label className="custom-control-label" for="customCheck2">Mumbai</label>  </p>

                    <p className="pl-4 p-2" ><input type="checkbox" className="custom-control-input" id="customCheck3"
                         checked ={chennai} value="Chennai" onClick={(e)=> submit(e)}
                    />  
                    <label className="custom-control-label" for="customCheck3">Chennai</label>  </p>


                    <p className="pl-4 p-2" ><input type="checkbox" className="custom-control-input" id="customCheck4"
                     checked ={kolkata} value="Kolkata" onClick={(e)=> submit(e)}
                />  
                    <label className="custom-control-label" for="customCheck4">Kolkata</label>  </p>


                    
    
                    <h4>USA</h4>
                    <p className="pl-4 p-2" ><input type="checkbox" className="custom-control-input" id="customCheck5"
                     checked ={newYork} value="New York" onClick={(e)=> submit(e)}
                    
                         />  
                    <label className="custom-control-label" for="customCheck5">New York</label>  </p>


                    <p className="pl-4 p-2" ><input type="checkbox" className="custom-control-input" id="customCheck6"
                     checked ={chicago} value="Chicago" onClick={(e)=> submit(e)}
                    
                         />  
                    <label className="custom-control-label" for="customCheck6">Chicago</label>  </p>
                      
            </div>         
        </div>
      </div>
  
 </div> 



  )
}

const mapStateToProps = state => {
  return {
    country: state.iceCream.country,
    country2: state.iceCream.country2,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addItem: (care) => dispatch(addItem(care)),
   removeItem:(care) => dispatch(removeItem(care)),
   addItem2: (care) => dispatch(addItem2(care)),
   removeItem2:(care) => dispatch(removeItem2(care))

  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(IceCreamContainer)

