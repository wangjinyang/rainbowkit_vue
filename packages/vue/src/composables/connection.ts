import type { ConnectionStatus } from "@/types";
import { useAuthenticationConfigContext } from "@/composables/authentication";
import { computed, ComputedRef, Ref } from "vue";

export function useConnectionStatus(isConnected:Ref<boolean>, isConnecting: Ref<boolean>, address?: Ref<undefined> | Ref<`0x${string}`> | Ref<`0x${string}` | undefined>): ComputedRef<ConnectionStatus> {
    const { status } = useAuthenticationConfigContext();
    
    return computed(()=>{
        
        if(isConnecting.value && address?.value){
            return 'connecting';
        }

        if(!isConnected?.value){
            return 'disconnected';
        }
    
        if(!status?.value){
            return 'connected';
        }
    
        if(
            status.value === 'loading' || 
            status.value === 'unauthenticated'
        ){
            return status.value;
        }

        return 'connected';
    });
    
}