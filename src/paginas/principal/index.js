import React, { Component } from 'react';
import "./style.css"
import aplic from '../../axios/aplic';
import FormAddItem from '../../componentes/formAddItem.js'

export default class Main extends Component {
    state = {
        produtos: [],
        mesagem:[]
    }
    componentDidMount() {
        this.loadProducts();
    }
    loadProducts = async () => {
       
        var response = await aplic.get('/');

        this.setState({ produtos: response.data[0] });
    }
    render() {
        return (
            <div className='product-list'>
                <div className="row">
                    {this.state.produtos.map(produto => (
                        <div className="col-sm-6 col-md-4" key={produto._id}>
                            <div className="thumbnail" >
                                <img src={produto.imagePath} alt='' />
                                <div className="caption">
                                    <h3>{produto.title}</h3>
                                    <p>{produto.description}</p>
                                    <p>R${produto.price},00</p>
                                </div>
                            </div>
                        </div>
                    ))}
                    <FormAddItem/>
                </div>
            </div>        
        )
    }
    
}