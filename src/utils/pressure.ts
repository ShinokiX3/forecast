export const PRESSURE_UNITS = 0.750062

export default (hpa: number) => Math.round(hpa * PRESSURE_UNITS)
