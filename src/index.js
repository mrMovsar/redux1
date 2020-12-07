
import ReactDOM from 'react-dom'
import App from './App'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

const f = (state, action) =>{
  switch (action.type){
    case "odin":
    return "Один";
    
    case "dva":
    return "Два";
    
    case "tri":
    return "Три";
    
    case "reset":
    return "Ноllль";
    
    default:
    return "Ноль";
  }
}

const store = createStore(f);

ReactDOM.render(
  <Provider store = {store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);
