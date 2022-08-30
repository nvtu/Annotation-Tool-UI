import { Typography, Space, Row, Col, notification } from 'antd';
import AdditionSelect from './AdditionSelect';
import { connect } from 'react-redux'
import { useEffect } from 'react'
import { GET_ALL_ANNOTATION_LIST_API } from '../../../constants/servers'
import { fetchData } from '../../../actions/fetchData'
import { setAnnotationListData } from '../../../actions/annotation/actionAnnotationListData';

const { Title, Text } = Typography;


function AnnotationPanel(props) {

    const { locationList, stressLevelList, activityList } = props.annotationListData

    useEffect(() => {
        if (props.user.username !== '') {
            const params = {
                accessToken: props.user.accessToken,
            }
            props.dispatch(fetchData(GET_ALL_ANNOTATION_LIST_API, 'GET', params)).then(response => {
                if (response === undefined) {
                    notification.error({
                        placement: 'bottomRight',
                        message: 'Error occurred when fetching annotation list',
                    })
                    return
                }
                props.dispatch(setAnnotationListData(response.location_list, response.stress_level_list, response.activity_list))
            })
        }
    }, [props.user.username])

    return (
        <Space direction="vertical"
            style={{
                height: "100%",
                display: "relative",
                justifyContent: "center",
                borderRight: "1px solid #ccc",
                paddingRight: 70,
            }}
            align="center"
            size="large"
            >
            <Col>
                <Row justify='space-between'
                    style={{
                        marginBottom: 10,
                    }}
                >
                    <Title level={5}>Location:&nbsp;</Title>
                    <AdditionSelect 
                        type='location'
                        value={props.annotation.location}
                        items={locationList}
                        placeholder="Please select location"
                    />
                </Row>
                <Row justify='space-between'
                    style={{
                        marginBottom: 10,
                    }}
                >
                    <Title level={5}>Stress:&nbsp;</Title>
                    <AdditionSelect 
                        type='stress_level'
                        value={props.annotation.stressLevel}
                        items={stressLevelList}
                        placeholder="Please select stress level"
                    />
                </Row>
                <Row justify='space-between'>
                    <Title level={5}>Activity:&nbsp;</Title>
                    <AdditionSelect 
                        type='activity'
                        value={props.annotation.activity}
                        items={activityList}
                        placeholder="Please select activity"
                    />
                </Row>
            </Col>
        </Space>
    )
}

const mapStatesToProps = (state) => ({
    annotationListData: state.annotationListData,
    user: state.user,
    annotation: state.annotationData,
})

export default connect(mapStatesToProps)(AnnotationPanel);
