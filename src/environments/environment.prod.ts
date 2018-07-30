export const environment = {
  production: true
};

export let baseURL = "";

switch (window.location.hostname) {
  case "hundyp-edr-client.herokuapp.com":
    baseURL = "https://hundyp-edr-server.herokuapp.com"
    break;

  default:
    baseURL = "http://localhost:3000"
}
