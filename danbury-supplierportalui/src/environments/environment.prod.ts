// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

/** @ignore */
export const environment = {
  production: true,
  localhost: false,
  AES_SECRET_KEY: 'secret key',
  loggerURL: 'http://ec2-52-87-247-160.compute-1.amazonaws.com:8080',
  oktaClientId: '0oaerwak9R22WiFfl4x5',
  oktaUrl: 'https://cartus.okta.com',
  oktaRedirectUri: 'https://d1sxk6rpivoc0u.cloudfront.net/',
  // oktaRedirectUri: 'https://d507372lcqyz0.cloudfront.net/',
  // oktaRedirectUri: 'http://localhost:4203/',
  oktaClientSecretId: 'UxuI3v1LBBMz4SVh5zqiAe7sNx98wnTYdpxhoAlp',
  URL_LOGSTASH: 'https://car-alpha-logstash-dev01-982921113.us-west-2.elb.amazonaws.com/'
};
/*
* In development mode, to ignore zone related error stack frames such as
* `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
* import the following file, but please comment it out in production mode
* because it will have performance impact when throw error
*/
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
