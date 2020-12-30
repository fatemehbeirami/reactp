import React, { Component } from 'react';
import Render from '../Render/Render';
import Axios from 'axios';


class Layout extends Component {
    state = {
        currency: [],
        sell: [],
        Buy: []
    }
    componentDidMount() {
        const fetchCurrency = [];
        Axios.get('https://gist.githubusercontent.com/ahmadpanah/e6225b11235a04397b813d0de6e6f5ad/raw/ab559a1146b5e6f2d57bd546c20c090842d5fcc6/sana.json')
            .then(res => {
                console.log(res);
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
                <div>ّ
                    <p className='pname'>راهنما ی تشخیص</p>
                    <p>sell>>فروش ... Buy>>خرید</p>
                    <p className='pstyle'>chf:فرانک سویس ------ krw:وون کره جنوبی ------dny: یوان چین ------ rub: روبل روسیه ------ try:لیر ترکیه ------ inr:روپیه هند ------ aed:درهم امارت ------ eur:یورو ------ usd: دلار امریکایی  </p>
                    <p className='pstylee'> aud:دلار استرالیا ------ iqd:دینار عراق ------ nok:کرون نروژ ------ sek:کرون سوئد ------ gbp:پوند استرلینگ ------ cad:دلار کانادا ------ jpy: ین ژاپن  </p>
                    </div>
                <Render
                    currency={this.state.currency} 
                />
            </>
        )
    }
}



export default Layout; 