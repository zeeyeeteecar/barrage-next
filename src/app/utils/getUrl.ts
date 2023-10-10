
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
  let baseUrl = "http://localhost:3000";
  // const baseUrl = IS_SERVER
  //   ? "http://localhost:3000"
  //   : window.location.hostname + ":" + window.location.port;
  // remaining code of the component

  //const url = "http://localhost:3000";

  //if (typeof window !== "undefined") {
    baseUrl = window.location.hostname + ":" + window.location.port;
  //}

  return baseUrl;
};
