



import React, { Component } from 'react';
import './Render.css' ; 

class Render extends Component {
state = {
    buy: [] , 
    sell: []
}
    componentDidMount() {
        console.log(this.props.currency);
        let fetchBuy = [] ; 
        for(let i = 0 ; i < 15 ; i++){
            fetchBuy.push({
                ...this.props.currency[i] , 
                id : i
            });
        }
        let fetchSell = [] ; 
        for(let j = 16 ; j < 30 ; j++){
            fetchSell.push({
                ...this.props.currency[j] , 
                id : j
            });
        }
        this.setState({
            buy : fetchBuy , 
            sell : fetchSell
        });
    }
    render() {
        return (
            <div>
               
                {this.props.currency.map((currency) => {
                    return (
                        <div className = "currency-Style"  key={currency.id}>
                            <p class="info-style">{currency.title}</p>
                            <p className = "price-style">{currency.p} :قیمت</p>
                        </div>
                    )
                })}
               
            </div>
        )
    }
}


export default Render; 