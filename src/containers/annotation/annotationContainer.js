import VisualSimilarMomentPanel from "./visualSimilarMomentPanel";
import { Divider, Row, Col } from 'antd';
import GalleriaContainer from "./galleriaContainer";
import InformationPanel from "../../components/contentContainers/annotation/informationPanel";
import PhysiologicalInformationPanel from "../../components/contentContainers/annotation/physiologicalInformationPanel";
import AnnotationPanel from "../../components/contentContainers/annotation/annotationPanel";


function AnnotationContainer(props) {
    return (
        <>
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
            <Row>
                <Col span={8} offset={0} order={0}>
                    <InformationPanel />
                </Col>
                <Col span={6} offset={0} order={2}>
                    <PhysiologicalInformationPanel />
                </Col>
                <Col span={8} offset={0} order={1}>
                    <AnnotationPanel />
                </Col>
            </Row>
        </>
    )
}


export default AnnotationContainer;