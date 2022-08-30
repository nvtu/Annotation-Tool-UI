import AnnotationTitle from "../../components/contentContainers/annotation/annotationTitle";
import { PLACEHOLDER_IMAGE } from '../../constants/dummies';
import { Galleria } from "primereact/galleria";
import { connect } from 'react-redux';
import { setGalleriaCurrentIndex } from '../../actions/annotation/actionGalleria';
import { useEffect } from 'react'
import { GET_MOMENT_DETAIL_API } from '../../constants/servers';
import { fetchData } from '../../actions/fetchData'
import { notification } from "antd";
import moment from 'moment'
import { setMetadataInfo } from '../../actions/annotation/actionMetadataInfo'
import { setAnnotationData } from '../../actions/annotation/actionAnnotation'
import { setPhysiologicalData } from "../../actions/annotation/actionPhysiologicalData";
import { getMetadataInfoFromMomentDetail, getAnnotationInfoFromMomentDetail, getPhysiologicalDataFromMomentDetail } from '../../handlers/responseHandlers';


function GalleriaContainer(props) {
    const { date, localTime } = props.metadata
    const { currentIndex, galleriaImages } = props.galleriaImages


    useEffect(() => {
        if (props.user.username !== '' && date !== '') {
            if (galleriaImages.length > 0 && currentIndex >= 0) {
                const currentImageId = galleriaImages[currentIndex]
                const imageName = currentImageId.split('/').pop()
                const dateTimeInfo = imageName.split('_').slice(-2)
                // const dateInfo = moment(dateTimeInfo[0], 'YYYYMMDD').format('YYYY-MM-DD')
                const timeInfo = moment(dateTimeInfo[1].slice(0, 6), 'HHmmss').format('HH:mm:ss')

                const params = {
                    accessToken: props.user.accessToken,
                    moment_date: date,
                    moment_time: timeInfo,
                }

                props.dispatch(fetchData(GET_MOMENT_DETAIL_API, 'GET', params)).then(response => {
                    if (response === undefined) {
                        notification.error({
                            placement: 'bottomRight',
                            message: 'Error occurred when fetching moment detail',
                        })
                        return
                    }
                    // Set metadata info
                    const { date, localTime, utcTime, currentImageUrl, currentOtherImageUrl } = getMetadataInfoFromMomentDetail(response)
                    props.dispatch(setMetadataInfo(date, localTime, utcTime, currentImageUrl, currentOtherImageUrl))

                    // Set annotation info
                    const { location, stressLevel, activity } = getAnnotationInfoFromMomentDetail(response)
                    props.dispatch(setAnnotationData(location, stressLevel, activity))

                    // Set physiological data
                    const { heartRate, bvp, eda, temp } = getPhysiologicalDataFromMomentDetail(response)
                    props.dispatch(setPhysiologicalData(heartRate, bvp, eda, temp))
                })
            }
        }
    }, [currentIndex, galleriaImages, date])

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


    const onItemChange = (event) => {
        props.dispatch(setGalleriaCurrentIndex(event.index))
    }


    return (
        <div>
            <AnnotationTitle title={`User: ${props.user.username} - Date: ${date} - Local Time: ${localTime} - Item: ${currentIndex + 1} / ${galleriaImages.length}`} />
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
                    style={{ width: "35vw", marginTop: 22 }}
                    activeIndex={props.galleriaImages.currentIndex}
                    value={props.galleriaImages.galleriaImages}
                    responsiveOptions={responsiveOptions}
                    numVisible={5}
                    item={itemTemplate}
                    thumbnail={thumbnailTemplate}
                    onItemChange={onItemChange}
                />
            </div>
        </div>
    )
}


const mapStatesToProps = (state) => ({
    galleriaImages: state.annotationGalleriaImages,
    metadata: state.annotationMetadata,
    user: state.user,
})

export default connect(mapStatesToProps)(GalleriaContainer);