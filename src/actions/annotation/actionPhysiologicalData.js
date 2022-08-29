export const setPhysiologicalData = (heartRate, bvp, eda, temp) => ({
    type: "SET_PHYSIO_DATA",
    heartRate,
    bvp,
    eda,
    temp,
})