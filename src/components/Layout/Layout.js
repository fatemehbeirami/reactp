import React, { Component } from 'react';
import Render from '../Render/Render';
import Axios from 'axios';


class Layout extends Component {
    state = {
        currency: [],
        sell: [],
        Buy: [],
        update: ''
    }
    componentDidMount() {
        const fetchCurrency = [];
        Axios.get('https://gist.githubusercontent.com/ahmadpanah/e6225b11235a04397b813d0de6e6f5ad/raw/ab559a1146b5e6f2d57bd546c20c090842d5fcc6/sana.json')
            .then(res => {
                console.log(res);
                this.setState({ update: res.data.sana.data[1].t });
                for (let key in res.data.sana.data) {
                    fetchCurrency.push({
                        ...res.data.sana.data[key],
                        id: key
                    });
                }
                this.setState({ currency: fetchCurrency });

            })
    }
    render() {
        return (
            <>
                <p
                    style={{color : 'white' ,padding : '10px 15px', position: 'fixed', bottom: '0', backgroundColor: '#04496E', width: '100%', height: '30px', margin: 'auto' }} >
                    آخرین به روزرسانی: {this.state.update}
                </p>
                <Render
                    currency={this.state.currency}
                />
            </>
        )
    }
}



export default Layout; 