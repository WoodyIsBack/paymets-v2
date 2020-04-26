import React from 'react';
import mysql from 'mysql';
import './InputBar.css';
import { submitPaymentToDb } from '../../server/api.js'

export class InputBar extends React.Component {
    constructor(props) {
        super(props);
        this.submitPaymentToDb = this.submitPaymentToDb.bind(this);
    }

    submitPaymentToDb(ev) {
        var config =  {
            host: "localhost",
            port: "3306",
            user: "itai",
            password: "Payments1!",
            database: "payments"
        };
        ev.preventDefault(); //stops browser submmiting form
        let payment = {
            user: document.getElementById('user').value,
            paymentDate: document.getElementById('date').value,
            from: document.getElementById('from').value,
            to: document.getElementById('to').value,
            amount: document.getElementById('amount').value,
            notes: 'none'
        }
        document.getElementById('payment-form').reset(); // Clears the form
    
        var xmlhttp = new XMLHttpRequest;
        xmlhttp.open("POST", "", true);
        xmlhttp.send();
    }

    render() {
        return (
            <div className="InputBar">
                <p className="input-instructions">
                    Please select bill type, Fill info and hit Let's go to submit!
                </p>
                <div className="InputBar-sort-options">
                    <ul>
                        <li>Electricity</li>
                        <li>Tax</li>
                        <li>Water</li>
                        <li>Internet&TV</li>
                    </ul>
                </div>

                <form id="payment-form">
                    <div className="InputBar-fields">
                        <input id="user" type="text" placeholder="Who are you?" />
                        <input id="date" type="date" placeholder="Payment Date" />
                        <input id="from" type="date"placeholder="From" />
                        <input id="to" type="date"placeholder="To" />
                        <input id="amount" type="number" placeholder="Enter Amount" />
                    </div>

                    <div className="InputBar-submit">
                        <a onClick={this.submitPaymentToDb} id="Submit">Let's Go</a>
                    </div>
                </form>

            </div>
        );
            
        
    }
}

export default InputBar; 