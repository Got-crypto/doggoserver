import { GrantType, KindeClient } from "@kinde-oss/kinde-nodejs-sdk"
import dotenv from 'dotenv'

dotenv.config()

const options = {
    domain: process.env.KINDE_DOMAIN,
    clientId: process.env.KINDE_CLIENT_ID,
    clientSecret: process.env.KINDE_CLIENT_SECRET,
    redirectUri: process.env.KINDE_REDIRECT_URI,
    logoutRedirectUri: process.env.KINDE_LOGOUT_REDIRECT_URI,
    grantType: GrantType.PKCE
}

const kindeClient = new KindeClient(options)

export default kindeClient