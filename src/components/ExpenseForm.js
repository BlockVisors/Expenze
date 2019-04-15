import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

//use oent
const now = moment();
console.log(now);

export default class ExpenseForm extends React.Component {
    state = {
        description: ''
    };

    render() {
        return (
            <div>
                <form>
                    <input 
                        type="text"
                        placeholder="Description"
                        autoFocus
                        value={this.state.description}
                        onChange={this.onDescriptionChange}
                        />
                    <input
                        type="number"
                        placeholder="Amount"
                        value={this.state.amount}
                        onChange={this.onAmountChange}
                        />
                        <SingleDatePicker />
                        <textarea


                        />
                </form>
                ExpenseForm
            </div>
        )
    }
}