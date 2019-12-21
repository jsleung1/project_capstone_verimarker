// TODO: Once your application is deployed, copy an API id here so that the frontend could interact with it
// const apiId = '2xedbri4g3';
// const env = 'v1';

const apiId = '2pkept7lx0';
const env = 'v2';

export const apiEndpoint = `https://${apiId}.execute-api.us-east-1.amazonaws.com/${env}`

export const authConfig1 = {
  domain: 'dev-clq116aa.auth0.com',
  clientId: 'QLaMP23u6l9whbZWmXf6PTF9eKxMSVU8',
  callbackUrl: 'https://verimarker.com/school/auth0'
}

export const authConfig = {
  domain: 'dev-clq116aa.auth0.com',
  clientId: 'Z52r8N5nV8h3XvWr3jqZJm9wE3JWi6yq',
  callbackUrl: 'http://localhost:4200/school/auth0'
}

