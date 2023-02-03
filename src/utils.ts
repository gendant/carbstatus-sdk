import { onDestroy } from "svelte";
import { config } from "./config";

  /**
   * Interval period for fetching new carbstatus data. Default 5min
   */
  export const REFRESH_RATE_MS: number =config.refreshRate
  export const CS_ENDPOINT: string = `${config.carbstatusApiUrl}/index`


export function onInterval(callback:any) {
	const interval = setInterval(callback, REFRESH_RATE_MS);

	onDestroy(() => {
		clearInterval(interval);
	});
}

export async function getData(domain): Promise<IIndexData>{

    if(config.isProd){
        const loc = window.location.hostname

        if(loc !== domain){
            throw new Error(`Domain mismatch: ${loc}`)
        }

        const res = await fetch(`${CS_ENDPOINT}?l=https://${domain}`)

        if (!(res && res.ok)){
            if(res.status === 400){
                const msg = await res.json()
                throw new Error(`BadRequest: ${msg}`)
            }
            throw new Error(`Unknown error`)
        }
        const msg:IIndexData = await res.json()

        return msg
    }

    return new Promise((resolve)=>setTimeout(()=>resolve(mockData()), 3000))
}


export function info(msg:string){
    console.log(`[CarbStatus]: ${msg}`)
}

export function panic(msg:string){
    console.error(`[CarbStatus]: ${msg}`)
}


export interface IIndexData{
    time: number,
    nvalue: number
    value: number
}

const mockData =():IIndexData=>({"time":(Date.now() + 4 * 1000 * 60) / 1000,"nvalue":Math.floor(Math.random()*100),"value":440.19831885344405})


