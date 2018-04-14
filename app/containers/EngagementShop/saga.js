import { take, call, put, select,takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import {
  FETCH_PRODUCTS
} from './constants';
// Individual exports for testing




function* fetchProducts(){
  try {
  const response = yield axios({method:'get',url:'localhost:5000/test'})
  console.log(response)
  console.log(' ok')

  }
  catch(error){
    console.log(error)
    console.log('not ok')

  }

// var product = fetch('/test').then(response => response.json()).then(data => console.log(data));

}

export default function* watchFetchProducts() {
  // See example in containers/HomePage/saga.js
  yield takeEvery(FETCH_PRODUCTS,fetchProducts)

}
