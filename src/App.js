import React from 'react'
import { Provider } from 'react-redux'
import './App.css'
import store from './redux/store'

import IceCreamContainer from './components/IceCreamContainer'
import Listdata from './components/listdata'

function App () {
  return (
    <Provider store={store}>
      <div className="container m-5 p-5 bgcolor ">
        <div className="row">
            <div className="col-md-12">
       
              <IceCreamContainer /> 
               <Listdata/>
            </div>
         </div>
      </div>
    </Provider>
  )
}

export default App
