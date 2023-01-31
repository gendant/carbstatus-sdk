export const config = {
/**
* Carbstatus api Endpoint
*/
    carbstatusApiUrl: import.meta.env.VITE_CARBSTATUS_API_URL,
/**
* Carbstatus web Endpoint
*/
    carbstatusUrl: import.meta.env.VITE_CARBSTATUS_URL,
    refreshRate: 30 * 1000,
    isProd: import.meta.env.PROD
}