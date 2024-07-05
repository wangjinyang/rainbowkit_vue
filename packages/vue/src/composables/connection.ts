import type { ConnectionStatus } from "@/types";
import { useAuthenticationConfigContext } from "@/composables/authentication";
import { computed, ComputedRef, Ref } from "vue";
import { useAccount } from "@wagmi/vue";

export function useConnectionStatus(): ComputedRef<ConnectionStatus> {
    const { status } = useAuthenticationConfigContext();
    const { isConnected, address, status: connection } = useAccount();
    return computed(()=>{

        if(!address.value){
            return 'disconnected';
        }

        if(connection.value === 'connecting' || connection.value === 'reconnecting'){
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