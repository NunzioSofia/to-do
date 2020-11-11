import Form from './components/Form.js'
import Lista from './components/Lista.js'
import { useState } from 'react';

function App() {
  const [testi, setTesti] = useState([]);
  
  
  function handleFormSubmit(event, testo) {
    event.preventDefault();
    setTesti([...testi, testo])
  }
  return (
    <>
      <Form funzione={handleFormSubmit} />
      <Lista lista={testi} />
      {/* con 'lista' noi stiamo dando un props al component 'Lista.js' */}
    </>
  );
}

export default App;
