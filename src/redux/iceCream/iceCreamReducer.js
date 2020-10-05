import { ADD_ITEM, REMOVE_ITEM, ADD_ITEM2, REMOVE_ITEM2 } from './iceCreamTypes'

const initialState = {
  arrData : [],
  arrData2 : [],
  
}

Array.prototype.remove = function() {
  var what, a = arguments, L = a.length, ax;
  while (L && this.length) {
      what = a[--L];
      while ((ax = this.indexOf(what)) !== -1) {
          this.splice(ax, 1);
      }
  }
  return this;
};

function onlyUnique(value, index, self) {
  return self.indexOf(value) === index;
}



const iceCreamReducer = (state = initialState, action) => {
console.log(action.payload)

  switch (action.type) {
    case ADD_ITEM: 
  state.arrData.push(action.payload)
    return {
      ...state,
            country: [...state.arrData.filter(onlyUnique)]
    }

    case REMOVE_ITEM: 
    state.arrData.remove(action.payload)
       return {
      ...state,
      country: [...state.arrData.filter(remaining => remaining !==action.payload)]
    }


    case ADD_ITEM2: 
    state.arrData2.push(action.payload)
      return {
        ...state,
              country2: [...state.arrData2.filter(onlyUnique)]
      }
  
      case REMOVE_ITEM2: 
      state.arrData2.remove(action.payload)
         return {
        ...state,
        country2: [...state.arrData2.filter(remaining => remaining !==action.payload)]
      }

    default: return state
  }
}

export default iceCreamReducer
