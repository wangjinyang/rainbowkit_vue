import { CreateSiweMessageReturnType, type SiweMessage, createSiweMessage, generateSiweNonce, parseSiweMessage } from "viem/siwe";
import { AuthenticationAdapter } from "use-rainbowkit-vue";
import { Options, createAuth } from "vue-auth3";
import { Address } from "viem";
import { App } from "vue";
import driverHttpAxios from 'vue-auth3/dist/drivers/http/axios';

export const RainbowKitVueSiweAuthAdapterPlugin = () => {
    type AuthAdapterProviderOption = Partial<Options & Omit<SiweMessage, 'chainId' | 'address' | 'nonce'>>;
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

        const defaultAuthOptions: Options = {
            drivers: {
                http: driverHttpAxios,
                auth: ({
                    request(_,options,token){
                        options.headers['x-csrf-token'] = token;
                        return options;
                    },
                    response(_,{ headers }){
                        return headers['x-csrf-token'];
                    }
                })
            },
            stores: [ 'storage' ]
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
                    version: '1',
                    address: address as Address,
                    chainId
                })
            },
            getMessageBody: ({ message }) => message,
            getNonce: async () => {
                let url = "http://localhost:3001/get-crsf-token";
                var result = await auth.http({
                    url,
                    method: 'get',
                    headers: {
                        "Access-Control-Allow-Origin": "*",
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Methods': '*',
                        'Access-Control-Allow-Headers': '*',
                        'Access-Control-Allow-Credentials': 'true',
                    },
                });
                const nonce = result.data["token"];
                auth.token(null,nonce,false);
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

