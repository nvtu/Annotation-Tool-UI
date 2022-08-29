import { PLACEHOLDER_IMAGE } from '../../../constants/dummies';
import { Row, Col, Typography, Space } from 'antd';
import { connect } from 'react-redux'


const { Title, Text } = Typography;


function InformationPanel(props) {
    const { date, localTime, utcTime, currentOtherImageUrl } = props.data

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
                src={currentOtherImageUrl} />
            <Col>
                <Row justify='space-between'>
                    <Title level={5}>User:&nbsp;</Title>
                    <Text> {props.user.username}</Text>
                </Row>
                <Row justify='space-between'>
                    <Title level={5}>Date:&nbsp;</Title>
                    <Text>{date}</Text>
                </Row>
                <Row justify='space-between'>
                    <Title level={5}>Local Time:&nbsp;</Title>
                    <Text>{localTime}</Text>
                </Row>
                <Row justify='space-between'>
                    <Title level={5}>UTC Time:&nbsp;</Title>
                    <Text>{utcTime}</Text>
                </Row>
            </Col>
        </Space>
    )
}


const mapStatesToProps = (state) => ({
    data: state.annotationMetadata,
    user: state.user,
})


export default connect(mapStatesToProps)(InformationPanel);