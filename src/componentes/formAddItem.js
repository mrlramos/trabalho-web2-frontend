import "./formAddItem.css"
import React, { Component } from 'react';
import aplic from '../axios/aplic.js';

class FormAddItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            price: '',
            description: '',
            imageProduct: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.saveProduct = this.saveProduct.bind(this);
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    saveProduct = async e => {
        e.preventDefault();

        const response = await aplic.post('registered-product',
            {
                title: this.state.title,
                description: this.state.description,
                imagePath: this.state.imageProduct,
                price: this.state.price
            },
            { headers: {'Content-Type': 'application/json'}});

        alert('Requisicao enviada! - ' + response);
    }

    render() {
        return (
            <form onSubmit={this.saveProduct}>
                <div>
                    <label>
                        Titulo:
              <input type="text" value={this.state.title} name="title" onChange={this.handleChange} />
                    </label>
                </div>
                <div>
                    <label>
                        Descricao:
              <input type="text" value={this.state.description} name="description" onChange={this.handleChange} />
                    </label></div><div>
                    <label>
                        Caminho Imagem:
              <input type="text" value={this.state.imageProduct} name="imageProduct" onChange={this.handleChange} />
                    </label>
                </div><div><label>
                    Valor:
              <input type="number" value={this.state.price} name="price" onChange={this.handleChange} />
                </label>   </div>
                <input type="submit" value="Salvar" />
            </form>
        );
    }
}

export default FormAddItem;
