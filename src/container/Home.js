import React, { Component} from 'react';
import HomeCard from '../ui/HomeCard';
import licitacao from '../download.jpeg';
import salarios from  '../salarios.jpeg';
import empenho from  '../empenho.jpeg';
import {hashHistory} from 'react-router';

export default class Home extends Component {

    homeCardLicitacao = {
        title: 'Licitações',
        text: 'Verificar licitações',
        action: () => hashHistory.push('/licitacoes'),
        imagem: licitacao
    }

    homeCardEmpenho = {
        title: 'Empenhos',
        text: 'Verificar empenhos',
        action: () => hashHistory.push('/empenhos'),
        imagem: empenho
    }

    homeCardSalarios = {
        title: 'Salários',
        text: 'Verificar salários',
        action: () => hashHistory.push('/salarios'),
        imagem: salarios
    }

    render(){
        return(
            <div className="container text-center">
                <div className="row">
                    <HomeCard {...this.homeCardLicitacao}/>
                    <HomeCard {...this.homeCardEmpenho}/>
                    <HomeCard {...this.homeCardSalarios}/>
                </div>
            </div>
        );
    }
}