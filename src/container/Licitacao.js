import React, { Component } from 'react';
import LicitacaoForm from '../ui/LicitacaoForm';

export default class Licitacao extends Component {

    constructor() {
        super();
        this.handlerSubmit = this.handlerSubmit.bind(this);
        this.state = {
            licitacoes: [
                {
                    id: 1,
                    nome: 'Licitação de contratos',
                    data: '24/01/2019'
                },
                {
                    id: 2,
                    nome: 'Licitação de construções',
                    data: '14/04/2008'
                },
                {
                    id: 3,
                    nome: 'Licitação de serviços',
                    data: '10/10/1999'
                },
                {
                    id: 4,
                    nome: 'Licitação de pedidos',
                    data: '15/08/2020'
                }
            ]
        }
    }

    handlerSubmit(e, {nome, data}){
        e.preventDefault();
        var state = this.state;
        var novaLicitacao = {
            id: state.licitacoes.length + 1,
            nome: nome,
            data: data
        }
        this.setState({licitacoes: state.licitacoes.concat(novaLicitacao)})
    }

    apagarLicitacao = (event) => {
        var array = [...this.state.licitacoes];
        array.splice(event.target.value, 1);
        this.setState({licitacoes: array});
    }

    render() {
        return (
            <div className="container" style={{paddingTop: '25px'}}>
                <LicitacaoForm submitHandler={this.handlerSubmit} />
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Identificação</th>
                            <th>Data</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.licitacoes.map((licitacao, index) => {
                            return (
                                <tr key={licitacao.index}>
                                    <th scope="row">{licitacao.id}</th>
                                    <td>{licitacao.nome}</td>
                                    <td>{licitacao.data}</td>
                                    <td><button type="button" onClick={this.apagarLicitacao} value={index} className="btn btn-danger btn-sm">Remover</button></td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        );
    }
}