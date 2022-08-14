import AnnotationTitle from "../../components/contentContainers/annotation/annotationTitle";
import { PLACEHOLDER_IMAGE } from '../../constants/dummies';
import { Galleria } from "primereact/galleria";


function GalleriaContainer(props) {
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
    ]

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
        return <img src={item} style={{ width: '100%', display: 'block' }} />
    }

    const thumbnailTemplate = (item) => {
        return <img src={item} style={{ width: '100%', display: 'block' }} />
    }


    return (
        <div>
            <AnnotationTitle title={"User: nvtu - Date: 2022-08-14"} />
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
                    style={{ width: "28vw", height: "25vw" }}
                    value={images}
                    responsiveOptions={responsiveOptions}
                    numVisible={5}
                    item={itemTemplate}
                    thumbnail={thumbnailTemplate}
                />
            </div>
        </div>
    )
}


export default GalleriaContainer;