import { configureStore } from "@reduxjs/toolkit";
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import { metadataInfoReducer } from "./annotation/metadataInfo";
import { annotationReducer } from "./annotation/annotation";
import { galleriaImagesReducer } from "./annotation/galleriaImages";
import { visualSimilarMomentsReducer } from "./annotation/visualSimilarMoments";
import { physiologicalDataReducer } from "./annotation/physiologicalData";
import { annotationListDataReducer } from "./annotation/annotationListData";
import { userReducer } from "./user";


export default configureStore({
    reducer: {
        // ANNOTATION REDUCERS
        annotationMetadata: metadataInfoReducer,
        annotationData: annotationReducer,
        annotationGalleriaImages: galleriaImagesReducer,
        annotationVisualSimilarMoments: visualSimilarMomentsReducer,
        annotationPhysiologicalData: physiologicalDataReducer,
        annotationListData: annotationListDataReducer, // Reducer to store the list of annotation choices
        
        // OTHER REDUCERS
        user: userReducer,
    },
    middleware: [
        thunk,
        logger,
    ]
})