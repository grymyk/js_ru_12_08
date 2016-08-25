import React, {Component, PropTypes} from 'react';
import moment from 'moment'
import DayPicker, {DateUtils} from 'react-day-picker';
import 'react-day-picker/lib/style.css';

class MyDayPicker extends Component {
    state = {
        from: null,
        to: null
    };

    handleDayClick = (event, day) => {
        const range = DateUtils.addDayToRange(day, this.state);

        this.setState(range);
    };

    handleResetClick = (event) => {
        event.preventDefault();

        this.setState({
            from: null,
            to: null
        });
    };

    handleSelectedDays = (day) => {
        return DateUtils.isDayInRange(day, this.state);
    };

    getDayPicker = (ref) => {
        this.dpRef = ref;

        console.log('--- dp ---', ref)
    };

    render() {
        const {from, to} = this.state;

        return(
            <div className="RangeExample">
                { !from && !to && <p>Please select the <strong>first day</strong>.</p> }
                { from && !to && <p>Please select the <strong>last day</strong>.</p> }
                { from && to &&
                <p>
                    You chose from { moment(from).format('L') } to { moment(to).format('L') }.
                    { ' ' }<a href="#" onClick={ this.handleResetClick }>Reset</a>
                </p>
                }
                <DayPicker
                    ref={this.getDayPicker}
                    numberOfMonths = { 2 }
                    selectedDays = { this.handleSelectedDays }
                    onDayClick = { this.handleDayClick }
                />
            </div>
        );
    }
}

export default MyDayPicker;
