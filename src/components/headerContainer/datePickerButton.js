import { DatePicker, notification } from 'antd'
import { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { GET_DATES_FROM_USER_API, GET_MOMENTS_BY_DATE_API } from '../../constants/servers'
import { fetchData } from '../../actions/fetchData'
import moment from 'moment'
import { handleGetMomentsByDateResponse } from '../../handlers/responseHandlers'
import { setGalleriaCurrentIndex, setGalleriaImages } from '../../actions/annotation/actionGalleria'
import { DEFAULT_GALLERIA_CURRENT_INDEX } from '../../constants/default'
import { setDateMetaDataInfo } from '../../actions/annotation/actionMetadataInfo'


function DatePickerButton(props) {
    const [dates, setDates] = useState([])
    const [defaultDate, setDefaultDate] = useState(null)

    const onChange = (date, dateString) => {
        if (dateString !== '') {
            const params = {
                accessToken: props.user.accessToken,
                moment_date: dateString,
            }
            props.dispatch(fetchData(GET_MOMENTS_BY_DATE_API, 'GET', params)).then(response => {
                if (response === undefined) {
                    notification.error({
                        placement: 'bottomRight',
                        message: 'Error occurred when fetching moments by date',
                    })
                    return
                }
                const momentList = handleGetMomentsByDateResponse(response.moment_list, props.user.username)
                props.dispatch(setGalleriaCurrentIndex(DEFAULT_GALLERIA_CURRENT_INDEX))
                props.dispatch(setGalleriaImages(momentList))
                props.dispatch(setDateMetaDataInfo(dateString))
            })
        }
    }


    const disableUnusedDates = (moment) => {
        const date = moment.format('YYYY-MM-DD')
        return !moment || !dates.includes(date)
    }

    useEffect(() => {
        if (props.user.username !== '') {
            const params = {
                accessToken: props.user.accessToken,
            }
            props.dispatch(fetchData(GET_DATES_FROM_USER_API, 'GET', params)).then(response => {
                if (response === undefined) {
                    notification.error({
                        placement: 'bottomRight',
                        message: 'Error occurred when fetching dates',
                    })
                    return
                }
                setDates(response.dates)
                if (response.dates.length > 0) {
                    setDefaultDate(response.dates.at(-1)) // Get newest date as default picker date
                }
            })
        }
    }, [props.user.username])


    return (
        <div>
            <DatePicker
                style={{
                    marginTop: 15,
                    marginRight: 15,
                }}
                allowClear
                defaultPickerValue={defaultDate === null ? moment() : moment(defaultDate)}
                disabledDate={moment => disableUnusedDates(moment)}
                onChange={onChange}
            />
        </div>
    )
}



const mapStatesToProps = (state) => ({
    user: state.user,
})

export default connect(mapStatesToProps)(DatePickerButton);