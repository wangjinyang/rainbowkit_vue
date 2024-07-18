import { CreateSiweMessageReturnType, type SiweMessage, createSiweMessage, generateSiweNonce, parseSiweMessage } from "viem/siwe";
import { AuthenticationAdapter } from "use-rainbowkit-vue";
import { HttpDriver, Options, createAuth } from "vue-auth3";
import { Address } from "viem";
import { App } from "vue";
import driverHttpAxios from 'vue-auth3/dist/drivers/http/axios';
import axios from "axios";

type GetNonceData = Partial<Parameters<HttpDriver["request"]>[0]> & { nonceKey?: string }; 
export const RainbowKitVueSiweAuthAdapterPlugin = () => {
    type AuthAdapterProviderOption = Partial<Options & Omit<SiweMessage, 'chainId' | 'address' | 'nonce'> & { nonceData?: GetNonceData }>;
    function create(app: App, options: AuthAdapterProviderOption = {}): AuthenticationAdapter<CreateSiweMessageReturnType> {
        const {
            scheme,
            domain,
            statement,
            uri,
            version,
            requestId,
            resources,
            notBefore,
            issuedAt,
            expirationTime,
            ...authOptions
        } = options;

        axios.defaults.withCredentials = true;
        const defaultAuthOptions: Options & { nonceData?: GetNonceData } = {
            initSync: true,
            nonceData:{
                responseType: "json",
                headers: {
                    "ngrok-skip-browser-warning": "69420",
                    "Access-Control-Allow-Credentials": "true",
                    ...authOptions.nonceData?.headers     
                },
                nonceKey: 'nonce'
            },
            loginData: {
                responseType: "json",
                cacheUser: true,
                fetchUser: true,
                staySignedIn: true,
                keyUser: 'nonce',
                headers: {
                    "ngrok-skip-browser-warning": "69420",
                    "Access-Control-Allow-Credentials": "true",
                    ...authOptions.loginData?.headers 
                },
            },
            logoutData: {
                headers: {
                    "ngrok-skip-browser-warning": "69420",
                    "Access-Control-Allow-Credentials": "true",
                    ...authOptions.logoutData?.headers 

                },
            },
            fetchData: {
                enabled: true,
                cache: true,
                waitRefresh: true,
                enabledInBackground: false,
                keyUser: "user",
                headers: {
                    "ngrok-skip-browser-warning": "69420",
                    "Access-Control-Allow-Credentials": "true"
                },
            },
            stores: [
                'storage',
                'cookie'
            ],
            drivers: {
                http: driverHttpAxios,
                auth: ({
                    request(_,options,token){
                        options.headers['x-csrf-token'] = token;
                        return options;
                    },
                    response(_,{ data }){
                        return data[authOptions.loginData?.keyUser?? authOptions.userKey ?? "nonce"];
                    }
                })
            }
        };
        const mergeAuthOptions = { ...defaultAuthOptions, ...authOptions };
        const auth = createAuth(mergeAuthOptions);
        app.use(auth);

        return {
            createMessage: ({ address, chainId, nonce }) => {
                return createSiweMessage({
                    scheme: scheme ?? window.location.protocol.slice(0, -1),
                    domain: domain ?? window.location.host,
                    statement: statement ?? 'Sign in with Ethereum to the app.',
                    uri: uri ?? window.location.origin,
                    nonce: nonce === '' || nonce === undefined || nonce === null ? generateSiweNonce() : nonce,
                    version: version ?? '1',
                    address: address as Address,
                    chainId
                })
            },
            getMessageBody: ({ message }) => message,
            getNonce: async () => {
                const result = await auth.http({
                    url: mergeAuthOptions.nonceData?.url ?? "/get-nonce",
                    ...mergeAuthOptions.nonceData
                });
                const nonce = result.data[mergeAuthOptions.nonceData?.nonceKey ?? "nonce"];
                return nonce;
            },
            signOut: async () => {
                await auth.logout();
            },
            async verify({ message, signature }) {
                const parsedMessage = parseSiweMessage(message);
                const response = await auth.login({
                    data: {
                        message:parsedMessage,
                        signature,
                    },
                });
                return response.status >= 200 && response.status <= 299;
            },
        };
    }
    return { create };
}

