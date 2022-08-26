import env, { ENV_NAME } from '@/config/env'

class AuthService {
  authorizeUser(): void {
    const authUrl = env[ENV_NAME]?.OAUTH2_USER_AUTHORIZATION_URI
    if (!authUrl) return
    window.location.href = `${authUrl}?redirect_uri=${encodeURIComponent(env.REDIRECT_URL)}`
  }
  start(): void {
    this.authorizeUser()
  }
}
export default AuthService
