//FUNZIONAAAAA

import {useState} from 'react';

function Lista(props){
  const [filtro,setFiltro] = useState('');
    return (
      <>
        <input type='text' placeholder='filtra' onChange={(e) => setFiltro(e.target.value)}  />
        <ul>
        {props.lista.filter((item)=>{
          if(filtro!==''){
            return item.includes(filtro)
          }else{
          return true;
          }
        }).map((item, index) => {
          return <li key={index}>{item}</li>
          // la key DEVE stare dentro un ciclo
        })}
      </ul>
    </>
    )
}
export default Lista;