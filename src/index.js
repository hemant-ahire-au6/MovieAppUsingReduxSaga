import React from 'react'
import ReactDom from 'react-dom'
import App from './App'
import "./style.css"
import store from './redux/store/store'
import {Provider} from "react-redux"
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter} from "react-router-dom"




ReactDom.render(
   <Provider store={store}>
      <BrowserRouter>
      <App/>
      </BrowserRouter>
   </Provider>
   ,
    document.getElementById("root")
    )