export const setAnnotationData = (location, stressLevel, activity) => ({
    type: "SET_ANNOTATION_DATA",
    location,
    stressLevel,
    activity,
})


export const setAnnotationFieldData = (field, value) => ({
    type: "SET_ANNOTATION_FIELD_DATA",
    field,
    value,
})