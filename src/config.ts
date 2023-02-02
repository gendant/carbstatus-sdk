export const config = {
/**
* Carbstatus api Endpoint
*/
    carbstatusApiUrl: import.meta.env.VITE_CARBSTATUS_API_URL ?? "https://api.carbstatus.info/v1",
/**
* Carbstatus web Endpoint
*/
    carbstatusUrl: import.meta.env.VITE_CARBSTATUS_URL ?? "https://carbstatus.info",
    refreshRate: 30 * 1000,
    isProd: import.meta.env.PROD
}