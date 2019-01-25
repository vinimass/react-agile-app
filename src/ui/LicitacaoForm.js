import React from 'react';

const LicitacaoForm = ({submitHandler}) => {
    let _licitacaoNome, _licitacaoData;
    const handleSubmit = (e) => {
        console.log('ReleaseForm -> handleSubmit');
        submitHandler(e, {nome: _licitacaoNome.value, data: _licitacaoData.value});
        clearForm();
    }

    const clearForm = () =>{
        _licitacaoData.value = '';
        _licitacaoNome.value = '';
    }

    return (
        <form onSubmit={handleSubmit} className="form-inline">
            <label className="sr-only" for="inlineFormInput">Identificação</label>
            <input type="text" ref={input => _licitacaoNome = input} className="form-control mb-2 mr-sm-2 mb-sm-0" id="inlineFormInput" placeholder="Identificação" />

            <label className="sr-only" for="inlineFormInputGroup">Data</label>
            <div className="input-group mb-2 mr-sm-2 mb-sm-0">
                <input type="text" ref={input => _licitacaoData = input}  className="form-control" id="inlineFormInputGroup" placeholder="Data" />
            </div>

            <button type="submit" className="btn btn-primary">Adicionar</button>
        </form>
    )
};

export default LicitacaoForm;