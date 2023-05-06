import { Container, Button, Form } from 'react-bootstrap';
import './style.css';

function App() {
  return (
    <div className="App">
      
        
          <div className="context">
            <div className="logo">
              <img src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg" alt="Facebook Logo" />
            </div>
            <div className="container flex">
              <span>Entrar no Facebook</span>
              <Form className="form flex">
                <Form.Group controlId="formBasicEmail" className="formgroup">
                  <Form.Control type="email" placeholder="Email ou telefone" />
                </Form.Group>

                <Form.Group controlId="formBasicPassword" className="formgroup">
                  <Form.Control type="password" placeholder="Senha" />
                </Form.Group>

                <Button variant="primary" type="submit">
                  Entrar
                </Button>
              </Form>
              <a href="#">Esqueceu a conta?</a>

              <Form method="post" action="#" className="form">
                    <legend><span></span>ou<span></span></legend>
              </Form>
            <button type="submit" class="nc" > Criar Conta</button>
            </div>

          </div>
        
      
    </div>
  );
}

export default App;