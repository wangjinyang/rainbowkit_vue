import { useConnectionStatus } from "@/composables/connection";
import { useAuthenticationConfigContext } from "@/composables/authentication";
import { useAccount, useAccountEffect, useConfig } from '@wagmi/vue'
import { ref, watch } from 'vue'
import { watchAccount } from "@wagmi/vue/actions";

export function useRainbowKitAccountContext(){  
  const { connector, isConnected, isConnecting, chainId, isDisconnected, isReconnecting, chain, address, addresses,status } = useAccount();
  const { status: authenticationStatus, adapter } = useAuthenticationConfigContext();
  const connectorUID = ref<string>()
  const connectionStatus = useConnectionStatus();

  useAccountEffect({
    onDisconnect(){
      connectorUID.value = undefined;
      adapter?.value?.signOut();
    }
  })

  watchAccount(useConfig(),{
    onChange(currentAcc, previousAcc) {
      ///if account changes , log the user out 
      if(authenticationStatus?.value !== 'authenticated') return;
      if(currentAcc.address === previousAcc.address) return;
      if(currentAcc.address === undefined) return;
      connectorUID.value = undefined;
      adapter?.value?.signOut();
    },
  })
  
  watch(()=>authenticationStatus?.value, (currentAuthStatus,_) => {
      if(!connector.value?.emitter) return;
      if (typeof connector.value?.emitter.on === 'function' && currentAuthStatus === 'authenticated') {
        if(!connectorUID.value){
          ///Set current connector uid when status is authenticated 
          connectorUID.value = connector.value.id;
          return;
        }
        // If the current connector is not equal to previous connector then logout
        if(connectorUID.value != connector.value.id){  
          connectorUID.value = undefined;
          adapter?.value?.signOut();
        }
      }
    }
  );

  return {
    connector,
    address,
    addresses,
    isConnected,
    isConnecting,
    chainId,
    isDisconnected,
    isReconnecting,
    chain,
    connectionStatus,
    status,
    connectorUID,
  }
}
