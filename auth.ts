import NextAuth from "next-auth"
import Auth0 from "next-auth/providers/auth0"
import Auth0Provider from "@auth/core/providers/auth0"

export const {
  handlers: { GET, POST },
  auth,
  signIn,
} = NextAuth({
  providers: [
    Auth0Provider({
      clientId: process.env.AUTH_AUTH0_ID,
      clientSecret: process.env.AUTH_AUTH0_SECRET,
      issuer: process.env.AUTH_AUTH0_ISSUER,
      // authorization: { params: { scope: "openid your_custom_scope" } },
    })
  ],
})
