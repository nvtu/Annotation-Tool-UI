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
                height: "65vh",
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
            <Row
                style={{
                    display: "flex",
                    height: "100%",
                }}
            >
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