import { Container, Button, Form} from 'react-bootstrap';
import './style.css';

function App() {
  return (
    <div className="App">
      <div className="context">
        <header>  
          <div className="facebook">
            <img src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg" alt="" />  
          </div>
        </header>
        <div className="container flex">
          <span>Entrar no Facebook</span>
          <Form className="form flex">
            <Form.Group controlId="formBasicEmail" className="formgroup">
              <Form.Control type="email" placeholder="Email ou telefone" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword" className="formgroup">
              <Form.Control type="password" placeholder="Senha" />
            </Form.Group>

            <Button variant="primary" type="submit" className='login'>
              Entrar
            </Button>
          </Form>
          <a href="#">Esqueceu a conta?</a>

          <Form method="post" action="#" className="form">
            <fieldset>
              <legend>ou</legend>
            </fieldset>
          </Form>
        <Button type="submit" className='nc'> Criar Conta</Button>
        </div>

      </div>
    </div>
  );
}

export default App;