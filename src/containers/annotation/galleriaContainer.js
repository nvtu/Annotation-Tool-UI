import AnnotationTitle from "../../components/contentContainers/annotation/annotationTitle";
import { PLACEHOLDER_IMAGE } from '../../constants/dummies';
import { Galleria } from "primereact/galleria";
import { connect } from 'react-redux';


function GalleriaContainer(props) {
    const { user, date, localTime } = props.metadata

    const responsiveOptions = [
        {
            breakpoint: '1024px',
            numVisible: 5
        },
        {
            breakpoint: '768px',
            numVisible: 3
        },
        {
            breakpoint: '560px',
            numVisible: 1
        }
    ];


    const itemTemplate = (item) => {
        return <img src={item} style={{ width: "100%", height: 340, display: 'block' }} />
    }

    const thumbnailTemplate = (item) => {
        return <img src={item} style={{ width: "100%", height: 60, display: 'block' }} />
    }


    return (
        <div>
            <AnnotationTitle title={`User: ${user} - Date: ${date} - Local Time: ${localTime}`} />
            <div
                style={{
                    position: "absolute",
                    left: "50%",
                    top: "50%",
                    WebkitTransform: "translate(-50%, -50%)",
                    transform: "translate(-50%, -50%)",
                }}
            >
                <Galleria
                    style={{ width: "28vw", marginTop: 22 }}
                    value={props.galleriaImages.galleriaImages}
                    responsiveOptions={responsiveOptions}
                    numVisible={5}
                    item={itemTemplate}
                    thumbnail={thumbnailTemplate}
                />
            </div>
        </div>
    )
}


const mapStatesToProps = (state) => ({
    galleriaImages: state.annotationGalleriaImages,
    metadata: state.annotationMetadata,
})

export default connect(mapStatesToProps)(GalleriaContainer);