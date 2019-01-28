import React, { Component } from 'react';
import { BaseService } from 'es6-base-servicos';

class TesteServico extends BaseService {

    getNoticias() {
        return this.conex.get('service/basico/administracao/ativaseconsolidadas');
    }

}

export default class Empenho extends Component {

    constructor() {
        super();
        this.state = {
            administracoes: [],
            administracaoSelecionada: 0
        }
        console.log('PASSEI NO CONSTRUTOR')
    }


    componentDidMount() {
        let service = new TesteServico();
        service.getNoticias().then(
            retorno => { this.setState({ administracoes: retorno.data }) }
        );
    }

    changeAdministracao = (event) => {
        this.setState(
            {administracaoSelecionada: event.target.value}
        )
        alert('Você selecionou a administração: ' + event.target.value);
    }

    render() {
        {/*
        let output = this.state.administracoes.map( item => <li>[{item.codigo}] {item.nome}</li> );
        */}

        if (this.state.administracoes.length > 0) {
            return (
                <div className="container-fluid" style={{ paddingTop: '25px' }}>
                    {/*
                    <ul>
                        {output}
                    </ul> */}

                    {/*
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Nome</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.administracoes.map((administracao, index) => {
                                return (
                                    <tr key={administracao.codigo}>
                                        <th scope="row">{administracao.codigo}</th>
                                        <td>{administracao.nome}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                        </table> */}

                    <select onChange={this.changeAdministracao} className="btn btn-secondary dropdown-toggle"  >
                        {this.state.administracoes.map((administracao, i) =>
                            <option key={i} value={administracao.codigo}>{administracao.nome} [{administracao.codigo}]</option>
                        )}
                    </select>
                    <br/>
                    Administração selecionada: {this.state.administracaoSelecionada}
                </div>
            )
        } else {
            return <p className="text-center">Carregando administrações...</p>
        }
    }
}