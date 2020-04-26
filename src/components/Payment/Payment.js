import React from 'react';
import './Payment.css';


var payment = {
    imgSrc: './electric.jpg', 
    type: 'Electricity',
    period: '21/3/20 -> 22/3/20',
    paymentDate: '23/02/20',
    user: 'Itai Tal',
    amount: '999'
}
export default class Payment extends React.Component {
    render() {
        return (
            <div className="Payment">

                <div className="image-container">
                    
                </div>
                
                <h2 className="Payment-type">{payment.type}</h2>

                <div className="Payment-information">

                    <div className="Payment-address">
                        <p>Amuont:</p>
                        <p>Period:</p>
                        <p>Made by {payment.user} on:</p>
                    </div>

                    <div className="Payment-reviews">
                        <h3>${payment.amount}</h3>
                        <h3 className="rating">{payment.period}</h3>
                        <p>{payment.paymentDate}</p>
                    </div>

                </div>
            </div>
        )
    }
}

