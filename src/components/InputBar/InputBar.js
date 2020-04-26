import React from 'react';
import ReactDOM from 'react-dom';
import './InputBar.css';
import { submitPaymentToDb } from '../../server/api.js'

export class InputBar extends React.Component {
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

                <form>
                    <div className="InputBar-fields">
                        <input id="user" type="text" placeholder="Who are you?" />
                        <input id="date" type="date" placeholder="Payment Date" />
                        <input id="from" type="date"placeholder="From" />
                        <input id="to" type="date"placeholder="To" />
                        <input id="amount" type="number" placeholder="Enter Amount" />
                    </div>

                    <div className="InputBar-submit">
                        <a onClick={submitPaymentToDb} id="Submit">Let's Go</a>
                    </div>
                </form>

            </div>
        );
            
        
    }
}

export default InputBar; 