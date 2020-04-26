import React from 'react';
import './PaymentList.css'; 
import Payment from '../Payment/Payment.js';

class PaymentList extends React.Component {
    render(){
        return ( 
            <div className="PaymentList">
                <p className="late">Latest payments made:</p>
                <Payment />
                <Payment />
                <Payment />
                <Payment />
                <Payment />
                <Payment />
            </div>
        );
    }
}
export default PaymentList;