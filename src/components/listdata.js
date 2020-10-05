import React, {useEffect} from 'react'
import { connect } from 'react-redux'
import { removeItem,removeItem2 } from '../redux'

function Listdata (props) {   

console.log(props)

  return (
  

    <div className="col-md-6 float-left">
         <div className="card" >
          <div className="card-body"  >
           
            {props.country ?       <h4>INDIA</h4> : null}
            {props.country ? 
        props.country.map( (data,k)=>

         <p className="bg2color p-2" key={k}>{data}<span className="float-right" style={{cursor: 'default'}} onClick={()=> props.removeItem(data)}>X</span></p>
       
        )
        : null
      }
            
            {props.country2 ?      <h4>USA</h4> : null}

            {props.country2 ? 
        props.country2.map( (datas,ks)=>

         <p className="bg2color p-2" key={ks}>{datas}<span className="float-right" style={{cursor: 'default'}} onClick={()=> props.removeItem2(datas)}>X</span></p>
       
        )
        : null
      }
          </div>
        </div>
    </div>


  )
}

const mapStateToProps = state => {
  return {
    country: state.iceCream.country,
    country2: state.iceCream.country2
  }
}

const mapDispatchToProps = dispatch => {
  return {
  //  addItem: (care) => dispatch(addItem(care)),
  removeItem:(care) => dispatch(removeItem(care)),
  removeItem2:(care) => dispatch(removeItem2(care))

  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Listdata)
