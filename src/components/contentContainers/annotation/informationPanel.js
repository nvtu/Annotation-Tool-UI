import { PLACEHOLDER_IMAGE } from '../../../constants/dummies';
import { Row, Col, Typography, Space } from 'antd';


const { Title, Text } = Typography;


function InformationPanel(props) {
    return (
        <Space
            style={{
                height: "25vh",
                borderRight: "1px solid #ccc",
                paddingRight: 70,
            }}
            size={50}
        >
            <img
                style={{ width: "100%", height: "20vh" }}
                src={PLACEHOLDER_IMAGE} />
            <Col>
                <Row justify='space-between'>
                    <Title level={5}>User:&nbsp;</Title>
                    <Text> nvtu</Text>
                </Row>
                <Row justify='space-between'>
                    <Title level={5}>Date:&nbsp;</Title>
                    <Text>2022-08-15</Text>
                </Row>
                <Row justify='space-between'>
                    <Title level={5}>Local Time:&nbsp;</Title>
                    <Text>11:48:00</Text>
                </Row>
                <Row justify='space-between'>
                    <Title level={5}>UTC Time:&nbsp;</Title>
                    <Text>10:48:00</Text>
                </Row>
            </Col>
        </Space>
    )
}


export default InformationPanel;