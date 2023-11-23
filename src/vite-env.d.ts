/// <reference types="svelte" />
/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_CARBSTATUS_API_URL: string;
    readonly VITE_CARBSTATUS_URL: string
    readonly VITE_PROD: boolean
    readonly VITE_CARBSTATUS_SCHEDULE_URL: string
    
}
  
interface ImportMeta {
    readonly env: ImportMetaEnv
}