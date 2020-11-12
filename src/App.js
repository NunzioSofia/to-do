import Form from './components/Form.js'
import Lista from './components/Lista.js'
import { useState, useEffect } from 'react';

function App() {
  useEffect(() => {
    localStorage.setItem('userList', JSON.stringify(testi))
  });

  let initialValue = JSON.parse(localStorage.getItem('userList')) || [];

  const [testi, setTesti] = useState(initialValue);
  //esportiamo progetto in gitHub

  function handleFormSubmit(event, testo) {
    event.preventDefault();
    setTesti([...testi, testo]);

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
