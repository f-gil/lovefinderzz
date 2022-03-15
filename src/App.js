import './css/style.css'
import { useState } from 'react';
import './App.css';
import axios from 'axios';


function App() {

  const [formValues, setFormValues] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    const url = 'https://is53kkmcqe.execute-api.us-east-1.amazonaws.com/prod';
    axios.post(url, data)
    .then(res =>{
      console.log(res);
      console.log(res.data);
    })
  };
  
  return (
    <div className="App">
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" 
    rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" 
    crossOrigin="anonymous"></link>
           
    <div className="App-header" >
      
      <section>
                <div className="card" id="tela-email">
                    <div className="card-body ">
                    <h1 className="card-title text-light">Lovefinderzz</h1>
                    <p className="card-text text-light">Escreva uma mensagem para seu crush</p>

                    
                <form onSubmit={handleSubmit}>
                    <label className="form-label text-light">Insira o email</label>
                    <input name="email" value={formValues.email || ''} onChange={handleInputChange} id="destinatario" type="email" className="form-control mb-3" placeholder="name@example.com"></input>

                    <label className="form-label text-light">Insira o assunto</label>
                    <input name="assunto" value={formValues.assunto || ''} onChange={handleInputChange} id="destinatario" type="text" className="form-control mb-3" ></input>
                    
                    <label className="form-label text-light">Corpo da mensagem</label>
                    <textarea name="corpo_msg" value={formValues.corpo_msg || ''} onChange={handleInputChange} id="corpoEmail" className="form-control mb-3" rows="3"></textarea>
                    
                    <div className="d-grid gap-2">
                        <button  id="btn_click" type="submit" className="btn btn-primary ">Enviar</button>
                    </div>
                  </form>
                    
                    </div>
            </div>
        </section>

      </div>
      <link rel="stylesheet" href="css/style.css"></link>
    </div>
  );
}

export default App;
