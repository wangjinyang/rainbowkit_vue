import { CreateSiweMessageReturnType, type SiweMessage, createSiweMessage, generateSiweNonce, parseSiweMessage } from "viem/siwe";
import { AuthenticationAdapter } from "use-rainbowkit-vue";
import { useAuth, Options, createAuth, Auth } from "vue-auth3";
import { Address } from "viem";
import { App } from "vue";
import driverHttpAxios from 'vue-auth3/dist/drivers/http/axios';
import driverHttpAuthBasic from "vue-auth3/dist/drivers/auth/basic";

export const RainbowKitVueSiweAuthAdapterPlugin = () => {

    type GetCsrfToken = () => Promise<string>;
    type AuthAdapterProviderOption = Partial<Options & Omit<SiweMessage, 'chainId' | 'address' | 'nonce'> & { getCsrfToken?: GetCsrfToken }>;
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
            getCsrfToken,
            ...authOptions
        } = options;

        const defaultAuthOptions: Options = {
            drivers: {
                http: driverHttpAxios,
                auth: driverHttpAuthBasic
            },
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
                let nonce = "";
                if(getCsrfToken){
                    nonce = await getCsrfToken();
                    auth.token("X-CSRF-Token",nonce,false);
                }
                return nonce;
            },
            signOut: async () => {
                await auth.logout({ redirect: 'follow' });
            },
            async verify({ message, signature }) {
                const response = await auth.login({
                    redirect: 'follow',
                    method: "POST",
                    data: {
                        message: JSON.stringify(parseSiweMessage(message)),
                        signature
                    },
                });
                return response.status > 200;
            },
        };
    }
    return { create };
}

