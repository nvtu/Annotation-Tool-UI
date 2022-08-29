import { Typography, Space, Row, Col } from 'antd';
import AdditionSelect from './AdditionSelect';
import { connect } from 'react-redux'

const { Title, Text } = Typography;


function AnnotationPanel(props) {

    const { locationList, stressLevelList, activityList } = props.annotationListData

    return (
        <Space direction="vertical"
            style={{
                height: "25vh",
                display: "flex",
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
                        value={0}
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
                        items={stressLevelList}
                        placeholder="Please select stress level"
                    />
                </Row>
                <Row justify='space-between'>
                    <Title level={5}>Activity:&nbsp;</Title>
                    <AdditionSelect 
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
})

export default connect(mapStatesToProps)(AnnotationPanel);
