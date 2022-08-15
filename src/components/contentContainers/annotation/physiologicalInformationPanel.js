import { Typography, Row, Col, Space } from 'antd'


const { Title, Text } = Typography;

function PhysiologicalInformationPanel(props) {

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
                    <Text>70 - 100 (80, 1.25)</Text>
                </Row>
                <Row justify='space-between'>
                    <Title level={5}>Blood Volume Pulse:&nbsp;</Title>
                    <Text>0.04 - 0.8 (0.4, 4.5)</Text>
                </Row>
                <Row justify='space-between'>
                    <Title level={5}>Galvanic Skin Response:&nbsp;</Title>
                    <Text>0.04 - 0.8 (0.4, 4.5)</Text>
                </Row>
                <Row justify='space-between'>
                    <Title level={5}>Skin Temperature:&nbsp;</Title>
                    <Text>0.04 - 0.8 (0.4, 4.5)</Text>
                </Row>
            </Col>
        </Space>
    )
}


export default PhysiologicalInformationPanel