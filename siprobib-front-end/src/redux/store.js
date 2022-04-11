import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counterSlide'

/*
  Sirve como almacenamiento para Redux, además incluye y configura automáticamente el Redux Devkit.
  Para más información, consultar: https://react-redux.js.org/tutorials/quick-start.
*/
export default configureStore({
  reducer: {
    counter: counterReducer,
  },
})