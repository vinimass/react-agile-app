import React, { Component } from 'react';
import './App.css';
import NavBar from './ui/NavBar';
import Home from './container/Home';

import {BaseService} from 'es6-base-servicos';

class TesteServico extends BaseService {

  getNoticias(){
    return this.conex.get('service/basico/administracao/ativaseconsolidadas');
  }

}

class App extends Component {

  componentDidMount() {
    let service = new TesteServico();
    service.getNoticias().then(retorno => {console.log(retorno)} ).catch(retorno => {console.log(retorno)});
  }

  render() {
    const logo = 'Portal da Transparência'
    return (
      <div className="container">
        <NavBar logo={logo}/>
        {this.props.children}
      </div>
    );
  }
}

export default App;
