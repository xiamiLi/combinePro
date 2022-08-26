const u = navigator.userAgent
const host = window.location.host?.match(/^gxd-(dev|int|fat)-web.tsc-np.signintra.com$/)

export const ENV_NAME = (host && host[1]) || 'dev'

const env: { [key: string]: any } = {
  OAUTH2_CLIENT_ID: '',
  //OAUTH2_CLIENT_ID: 'tsc-pkce-client',
  dev: {
    OAUTH2_USER_AUTHORIZATION_URI: 'http://localhost:8080/v1/oauth/start',
    OAUTH2_USER_INFO_URI: 'https://auth-int.dbfwefscheasanker.com/idp/userinfo.openid',
    OAUTH2_LOGOUT_URI: 'https://auth-int.dbfwefscheasanker.com/ext/logout'
  },
  int: {
    OAUTH2_USER_AUTHORIZATION_URI: 'https://auth-int.dbfwefscheasanker.com/v1/oauth/start',
    OAUTH2_ACCESS_TOKEN_URI: 'https://auth-int.dbfwefscheasanker.com/as/token.oauth2',
    OAUTH2_USER_INFO_URI: 'https://auth-int.dbfwefscheasanker.com/idp/userinfo.openid',
    OAUTH2_LOGOUT_URI: 'https://auth-int.dbfwefscheasanker.com/ext/logout'
  },
  fat: {
    OAUTH2_USER_AUTHORIZATION_URI: 'https://auth-int.dbfwefscheasanker.com/v1/oauth/start',
    OAUTH2_ACCESS_TOKEN_URI: 'https://auth-fat.dbschenker.com/as/token.oauth2',
    OAUTH2_USER_INFO_URI: 'https://auth-fat.dbschenker.com/idp/userinfo.openid',
    OAUTH2_LOGOUT_URI: 'https://auth-fat.dbschenker.com/ext/logout'
  },
  SIGN_OUT_SCOPE: 'global',
  TOKEN_REFRESH_CYCLE: '50',
  ENV: 'local',
  REDIRECT_URL: `${window.location.origin}/login`
}
export default env
