import { IMAGE_SERVER } from "../constants/servers"


export const handleGetMomentsByDateResponse = (momentList, username) => {
    return momentList.map(moment => `${IMAGE_SERVER}/${username}/${moment}`)
}


export const getMetadataInfoFromMomentDetail = (momentDetail) => {
    return {
        date: momentDetail._id.date,
        localTime: momentDetail._id.local_time,
        utcTime: momentDetail.utc_time,
        currentImageUrl: `${IMAGE_SERVER}/${momentDetail._id.user_id}/${momentDetail.image_path}`,
        currentOtherImageUrl: `${IMAGE_SERVER}/${momentDetail._id.user_id}/${momentDetail.other_image_path}`,
    }
}


export const getAnnotationInfoFromMomentDetail = (momentDetail) => {
    return {
        location: momentDetail.location,
        stressLevel: momentDetail.stress_level,
        activity: momentDetail.activity,
    }
}


export const getPhysiologicalDataFromMomentDetail = (momentDetail) => {
    return {
        heartRate: {
            min: momentDetail.heart_rate.min_value,
            max: momentDetail.heart_rate.max_value,
            mean: momentDetail.heart_rate.mean_value,
            std: momentDetail.heart_rate.std_value,
        },
        bvp: {
            min: momentDetail.bvp.min_value,
            max: momentDetail.bvp.max_value,
            mean: momentDetail.bvp.mean_value,
            std: momentDetail.bvp.std_value,
        },
        eda: {
            min: momentDetail.eda.min_value,
            max: momentDetail.eda.max_value,
            mean: momentDetail.eda.mean_value,
            std: momentDetail.eda.std_value,
        },
        temp: {
            min: momentDetail.temp.min_value,
            max: momentDetail.temp.max_value,
            mean: momentDetail.temp.mean_value,
            std: momentDetail.temp.std_value,
        },
    }
}