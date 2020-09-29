import React, { Component } from 'react';

export class Imc extends Component {

    constructor(props) {
        super(props);
        this.state = {peso: '', altura: '', imc: 0};

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange() {
        this.setState({
            peso: document.getElementById('peso').value, 
            altura: document.getElementById('altura').value 
        });

        if (this.state.peso > 0 && this.state.altura > 1.00) {
            this.setState({ imc: (this.state.peso / (this.state.altura * this.state.altura)).toFixed(2) });
        }else{
            this.setState({ imc: 0 + " (valores incorretos, digite apenas números)" });
        }
    }

    render() {
        return(
            <div className="corpo">

                <h1 className="mb-4">Cadastro de IMC</h1>

                <div className="row">

                    <div className="col-2">
                        <div className="form-group">
                            <label>Peso(kg)</label>
                            <input id="peso" type="text" className="form-control" onChange={this.handleChange} placeholder="Digite seu peso" />
                        </div>
                    </div>

                    <div className="col-2">
                        <div className="form-group">
                            <label>Altura(ex: 1.67)</label>
                            <input id="altura" type="text" className="form-control" onChange={this.handleChange} placeholder="Digite sua altura" />
                        </div>
                    </div>

                    <div className="col-5">
                        <p>Seu IMC é: {this.state.imc}</p>
                    </div>

                </div>

            </div>
        )
    }
}