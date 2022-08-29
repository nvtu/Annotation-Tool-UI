export const setMetadataInfo = (date, localTime, utcTime, currentImageUrl, currentOtherImageUrl) => ({
    type: 'SET_METADATA_INFO',
    date,
    localTime,
    utcTime,
    currentImageUrl,
    currentOtherImageUrl,
})


export const setDateMetaDataInfo = (date) => ({
    type: 'SET_DATE_METADATA_INFO',
    date,
})