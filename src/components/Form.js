import {useState} from 'react';

function Form(props){
    const [testo, setTesto] = useState('');
    return(
        //chiamo HandleformSubmit da app.js
        <form onSubmit={(e)=>{
            props.funzione(e,testo);
            setTesto('')
        }}>
        <input type='text' onChange={(e) => setTesto(e.target.value)} value={testo} />
        <button type='submit' >+</button>
    </form>
    )
}
export default Form;