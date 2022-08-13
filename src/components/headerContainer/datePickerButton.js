import { DatePicker } from 'antd'


function DatePickerButton(props) {

    const onChange = (date, dateString) => {
        console.log(date, dateString)
    }

    return (
        <div>
            <DatePicker  
                style={{
                    marginTop: 15,
                    marginRight: 15,
                }}
                onChange={onChange}
            />
        </div>
    )
}


export default DatePickerButton;