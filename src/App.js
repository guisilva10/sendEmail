import './App.css';
import { useState } from 'react';
import emailjs from '@emailjs/browser'

function App() {
  const [name, Setname] = useState('')
  const [email, Setemail] = useState('')
  const [message, Setmessage] = useState('')


  function sendEmail(e){
    e.preventDefault();

    if(name === '' || email === '' || message === ''){
      alert("Preencha todos os campos");
      return;
    }

    const templateParams = {
      from_name : name,
      message : message,
      email: email
    }

    emailjs.send("service_9746pmh", "template_tg1we1e", templateParams, "JbwzkJeaee4aM1vNU" )
    .then((response) => {
      console.log("EMAIL ENVIADO", response.status, response.text)
      Setname('')
      Setemail('')
      Setmessage('')


    }, (err) => {
      console.log("erro:" , err)
    })
  }


  return (
    <div className="container">
      <h1>Entre em Contato</h1>
     <form onSubmit={sendEmail} className='form'>
      <input 
      type="text"
      className="input"
      placeholder="Digite seu nome"
      onChange={(e) => Setname(e.target.value)}
      value={name}
      />

      <input 
      type="email"
      className="input"
      placeholder='Digite seu email'
      onChange={(e) => Setemail(e.target.value)}
      value={email}
      />

      <textarea 
      className="textarea"
      placeholder="Digite sua mensagem"
      onChange={(e) => Setmessage(e.target.value)}
      value={message}
      />

      <input type="submit" value="Enviar" className="button" />
     </form>
    </div>
  );
}

export default App;
