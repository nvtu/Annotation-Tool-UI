import VisualSimilarMomentPanel from "./visualSimilarMomentPanel";
import { Divider, Row, Col } from 'antd';
import GalleriaContainer from "./galleriaContainer";


function AnnotationContainer(props) {
    return (
        <Row style={{
            paddingTop: 64,
            height: "75vh",
            borderBottom: "1px solid #ccc",
        }}>
            <Col flex="auto" wrap={true} justify="center">
                <GalleriaContainer />
            </Col>
            <Col flex="550px"
                style={{
                    borderLeft: "1px solid #ccc",
                }}
            >
                <VisualSimilarMomentPanel />
            </Col>
        </Row>
    )
}


export default AnnotationContainer;