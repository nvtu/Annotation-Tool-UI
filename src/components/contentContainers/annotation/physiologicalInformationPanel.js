import { Typography, Row, Col, Space } from 'antd'
import { connect } from 'react-redux'


const { Title, Text } = Typography;

function PhysiologicalInformationPanel(props) {
    const { heartRate, bvp, eda, temp } = props.data

    return (
        <Space direction="vertical"
            style={{
                height: '25vh',
                display: "flex",
                justifyContent: "center",
                paddingLeft: 80,
            }}
        >
            <Col offset={0}>
                <Row justify='space-between'>
                    <Title level={5}>Heart Rate:&nbsp;</Title>
                    <Text>{heartRate.min} - {heartRate.max} ({heartRate.mean}, {heartRate.std})</Text>
                </Row>
                <Row justify='space-between'>
                    <Title level={5}>Blood Volume Pulse:&nbsp;</Title>
                    <Text>{bvp.min} - {bvp.max} ({bvp.mean}, {bvp.std})</Text>
                </Row>
                <Row justify='space-between'>
                    <Title level={5}>Galvanic Skin Response:&nbsp;</Title>
                    <Text>{eda.min} - {eda.max} ({eda.mean}, {eda.std})</Text>
                </Row>
                <Row justify='space-between'>
                    <Title level={5}>Skin Temperature:&nbsp;</Title>
                    <Text>{temp.min} - {temp.max} ({temp.mean}, {temp.std})</Text>
                </Row>
            </Col>
        </Space>
    )
}

const mapStatesToProps = (state) => ({
    data: state.annotationPhysiologicalData,
})


export default connect(mapStatesToProps)(PhysiologicalInformationPanel)