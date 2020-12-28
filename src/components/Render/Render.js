<<<<<<< HEAD
import React, { Component } from 'react';

class Render extends Component {
state = {
    buy: [] , 
    sell: []
}
    componentDidMount() {
        console.log('------------------');
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
                <p class="pname">beiramii</p>
                {this.props.currency.map((currency) => {
                    return (
                        <div  key={currency.id} style = {{border : '1px solid black'}}>
                            <p class="info-style">{currency.slug}</p>
                            <p>{currency.p}</p>
                        </div>
                    )
                })}
                <p>-----------------------------</p>
                 {this.state.buy.map((buy) => {
                    return (
                        <div key={buy.id} style = {{border : '1px solid black'}}>
                            <p>{buy.slug}</p>
                            <p>{buy.p}</p>
                        </div>
                    )
                })}
                 <p>-----------------------------</p>
                 {this.state.sell.map((sell) => {
                    return (
                        <div key={sell.id}  style = {{border : '1px solid black'}}>
                            <p>{sell.slug}</p>
                            <p>{sell.p}</p>
                        </div>
                    )
                })}
            </div>
        )
    }
}


=======
import React, { Component } from 'react';

class Render extends Component {
state = {
    buy: [] , 
    sell: []
}
    componentDidMount() {
        console.log('------------------');
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
                <p class="pname">beiramii</p>
                {this.props.currency.map((currency) => {
                    return (
                        <div  key={currency.id} style = {{border : '1px solid black'}}>
                            <p class="info-style">{currency.slug}</p>
                            <p>{currency.p}</p>
                        </div>
                    )
                })}
                <p>-----------------------------</p>
                 {this.state.buy.map((buy) => {
                    return (
                        <div key={buy.id} style = {{border : '1px solid black'}}>
                            <p>{buy.slug}</p>
                            <p>{buy.p}</p>
                        </div>
                    )
                })}
                 <p>-----------------------------</p>
                 {this.state.sell.map((sell) => {
                    return (
                        <div key={sell.id}  style = {{border : '1px solid black'}}>
                            <p>{sell.slug}</p>
                            <p>{sell.p}</p>
                        </div>
                    )
                })}
            </div>
        )
    }
}


>>>>>>> e5e7bbff359a9bda3fc4efcd6ae979e62dccab2d
export default Render; 