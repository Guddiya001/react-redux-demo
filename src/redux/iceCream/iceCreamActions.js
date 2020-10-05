import { ADD_ITEM, REMOVE_ITEM, ADD_ITEM2, REMOVE_ITEM2 } from './iceCreamTypes'

export const addItem = (payload) => {
  return {
    type: ADD_ITEM,
    payload: payload
  }
}


export const removeItem = (payload) => {
  return {
    type: REMOVE_ITEM,
    payload: payload
  }
}

export const addItem2 = (payload) => {
  return {
    type: ADD_ITEM2,
    payload: payload
  }
}


export const removeItem2 = (payload) => {
  return {
    type: REMOVE_ITEM2,
    payload: payload
  }
}