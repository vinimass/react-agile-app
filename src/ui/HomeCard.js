import React from 'react';

const HomeCard = (props) => (
    <div className="col-12 col-sm-4" style={{paddingTop: '7px'}}>
        <div className="card" style={{width: '20rem'}}>
            <img className="card-img-top rounded mx-auto d-block" style={{paddingTop: '3px', width: '100px', height: '100px'}} src={props.imagem} alt="Cartão" />
            <div className="card-block">
                <h4 className="card-title">{props.title}</h4>
                <p className="card-text">{props.text}</p>
                <button className="btn btn-primary" onClick={props.action}>Acessar</button>
            </div>
        </div>
    </div>
);

export default HomeCard;