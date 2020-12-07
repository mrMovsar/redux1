import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
function App(props) {
  const st = useSelector((state)=>{
    return state;
  });
  const dispatch = useDispatch();

  const handleOdin = () =>{
    dispatch({type: 'odin'})
  }
  return (
    <div>
      <div>
     Слово из стейта: {st}  
    </div>
    <div>
      <button onClick={handleOdin}>
        Один
      </button>
      <button onClick={()=>dispatch({type: 'dva'})}>
        Два
      </button>
      <button onClick={()=>dispatch({type: 'tri'})}>
        Три
      </button>
    </div>
    <div><button onClick={()=>dispatch({type: 'reset'})}> reset </button> </div>
    </div>
    
  );
}

export default App;
