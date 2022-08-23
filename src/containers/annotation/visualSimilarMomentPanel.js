import AnnotationTitle from '../../components/contentContainers/annotation/annotationTitle';
import { PLACEHOLDER_IMAGE } from '../../constants/dummies';
import ImageList from '@mui/material/ImageList'
import ImageListItem from '@mui/material/ImageListItem'
import { connect } from 'react-redux';


function VisualSimilarMomentPanel(props) {

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
                        props.visualSimilarMoments.similarImages.map((image, index) => (
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


const mapStatesToProps = (state) => ({
    visualSimilarMoments: state.annotationVisualSimilarMoments,
})

export default connect(mapStatesToProps)(VisualSimilarMomentPanel);