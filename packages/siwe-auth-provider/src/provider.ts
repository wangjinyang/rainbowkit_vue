import { CreateSiweMessageReturnType, type SiweMessage, createSiweMessage, generateSiweNonce, parseSiweMessage } from "viem/siwe";
import { AuthenticationAdapter } from "use-rainbowkit-vue";
import { HttpDriver, Options, createAuth } from "vue-auth3";
import { Address } from "viem";
import { App } from "vue";
import driverHttpAxios from 'vue-auth3/dist/drivers/http/axios';

///removing vue-auth and write my own using axios 
type GetCrsfTokenData = Partial<Parameters<HttpDriver["request"]>[0]>;
export const RainbowKitVueSiweAuthAdapterPlugin = () => {
    type AuthAdapterProviderOption = Partial<Options & Omit<SiweMessage, 'chainId' | 'address' | 'nonce'> & { getCrsfTokenData?: GetCrsfTokenData }>;
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
                const url = "/get-crsf-token";
                var result = await auth.http({
                    url: mergeAuthOptions.getCrsfTokenData?.url ?? url,
                    ...mergeAuthOptions.getCrsfTokenData
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

