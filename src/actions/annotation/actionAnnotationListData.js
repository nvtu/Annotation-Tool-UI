export const setAnnotationListData = (locationList, stressLevelList, activityList) => ({
    type: "SET_ANNOTATION_LIST_DATA",
    locationList,
    stressLevelList,
    activityList,
})


export const updateNewAnnotationList = (listType, dataList) => ({
    type: "UPDATE_NEW_ANNOTATION_LIST",
    listType,
    dataList,
})