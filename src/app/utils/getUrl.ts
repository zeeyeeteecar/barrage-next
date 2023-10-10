const IS_SERVER = typeof window === "undefined";

// export default function getUrl() {
//   let hostName = "";
//   let port = "";
//   let href = "";

//   const baseUrl = IS_SERVER
//     ? "http://localhost:3000"
//     : window.location.hostname + ":" + window.location.port;
//   // remaining code of the component
//   console.log("baseUrl",baseUrl)

//   return baseUrl.toString();
// }

export const getLink = () => {
  const baseUrl = IS_SERVER
    ? "http://localhost:3000"
    : window.location.hostname + ":" + window.location.port;
  // remaining code of the component
  console.log("baseUrl", baseUrl);

  //const url = "http://localhost:3000";
  return baseUrl;
};
