import { Space, Button, Popover, Row, Col } from 'antd'
import { QuestionCircleOutlined } from '@ant-design/icons';


function PopoverHelper(props) {

    const popoverComponent = () => {
        return (
            <Space>
                <Col>
                    <Row
                        justify='space-between'>
                        <b>X + Hover</b> &emsp; Zoom
                    </Row>
                    <Row
                        justify='space-between'>
                        <b>S + Left Click</b> &emsp; Submit
                    </Row>
                    <Row
                        justify='space-between'>
                        <b>W + Left Click</b> &emsp; Choose Negative
                    </Row>
                    <Row
                        justify='space-between'>
                        <b>R + Left Click</b> &emsp; Choose Positive
                    </Row>
                    <Row
                        justify='space-between'>
                        <b>T + Left Click</b> &emsp; Show Timeline
                    </Row>

                </Col>
            </Space>
        )
    }
    

    return (
        <Popover
            title={'User Interaction Information'}
            content={popoverComponent}
            placement="bottomRight"
        >
            <Button
                type="ghost"
                icon={<QuestionCircleOutlined />}
                style={{
                    height: 30,
                    color: "white",
                    border: "none",
                }}
            >
            </Button>
        </Popover>
    )
}



export default PopoverHelper;
