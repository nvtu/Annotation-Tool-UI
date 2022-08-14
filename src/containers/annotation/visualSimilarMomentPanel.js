import AnnotationTitle from '../../components/contentContainers/annotation/annotationTitle';
import { PLACEHOLDER_IMAGE } from '../../constants/dummies';
import ImageList from '@mui/material/ImageList'
import ImageListItem from '@mui/material/ImageListItem'


function VisualSimilarMomentPanel(props) {
    const images = [
        PLACEHOLDER_IMAGE,
        PLACEHOLDER_IMAGE,
        PLACEHOLDER_IMAGE,
        PLACEHOLDER_IMAGE,
        PLACEHOLDER_IMAGE,
        PLACEHOLDER_IMAGE,
        PLACEHOLDER_IMAGE,
        PLACEHOLDER_IMAGE,
        PLACEHOLDER_IMAGE,
        PLACEHOLDER_IMAGE,
        PLACEHOLDER_IMAGE,
        PLACEHOLDER_IMAGE,
    ]


    return (
        <div>
            <AnnotationTitle title={"Visual Similar Moments"} />
            <div style={{
                display: "flex",
                justifyContent: "center",
                verticalAlign: "center",
                paddingLeft: 5,
            }}>
                <ImageList sx={{ width: 400, height: "50vh", position: 'absolute', top: "13%", margin: 0 }} cols={3} rowHeight={120}>
                    {
                        images.map((image, index) => (
                            <ImageListItem key={index}>
                                <img 
                                    src={`${image}`}
                                    loading="lazy" />
                            </ImageListItem>
                        ))
                    }
                </ImageList>
            </div>
        </div>
    )
}

export default VisualSimilarMomentPanel;