import React from 'react';
import './InputBar.css';

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
                        <input type="text" placeholder="Who are you?" />
                        <input type="date" placeholder="When?" />
                        <input type="date"placeholder="From" />
                        <input type="date"placeholder="To" />
                        <input type="number" placeholder="Enter Amount" />
                    </div>

                    <div className="InputBar-submit">
                        <input type="submit" />
                    </div>
                </form>

            </div>
        );
            
        
    }
}
export default InputBar; 