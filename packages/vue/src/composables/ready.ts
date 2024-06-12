import { watch,ref } from "vue";
import { useRainbowKitAccountContext } from "./account";

export function useReady(){
    const { connectionStatus } = useRainbowKitAccountContext();
    const ready = ref<boolean>(false);
    watch(connectionStatus,(newConnectionStatus)=>{
        ready.value = true;
    });
    return ready;
}