export const config = {
/**
* Carbstatus api Endpoint
*/
    carbstatusApiUrl: import.meta.env.VITE_CARBSTATUS_API_URL ?? "https://api.carbstatus.info/v1",
/**
* Carbstatus web Endpoint
*/
    carbstatusUrl: import.meta.env.VITE_CARBSTATUS_URL ?? "https://carbstatus.info",
/**
 * Interval period for fetching new carbstatus data. Default 30s
 */
    refreshRate: 30 * 1000, 
    isProd: import.meta.env.PROD,
    colors:{
        '1': '234,2,2',
        '2': '252,158,0',
        '3': '86,149,251'
    },

/**
 * Carbstatus schedule Endpoint
 *  
 */
    carbstatusScheduleUrl: import.meta.env.VITE_CARBSTATUS_SCHEDULE_URL ?? "https://schedule.carbstatus.workers.dev"
}

