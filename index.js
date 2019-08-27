export const isWeex =
  typeof callNative === "function" ||
  (typeof WXEnvironment === "object" && WXEnvironment.platform !== "Web");
export const isReactNative = typeof navigator != "undefined" && navigator.product == "ReactNative";

export const isMiniApp =
  typeof wx === "object" && typeof wx.getSystemInfo !== "undefined";
export const isTTMiniApp =
  typeof tt === "object" && typeof tt.getSystemInfo !== "undefined";
const isWebPure =
  typeof navigator === "object" &&
  (navigator.appCodeName === "Mozilla" || navigator.product === "Gecko");
export const isWeb = isWebPure && !isMiniApp && !isTTMiniApp;
//  export const
var miniAppSystemInfo = {};
var ttMiniAppSystemInfo = {};

if (isMiniApp) {
  miniAppSystemInfo = wx.getSystemInfoSync();
}
if (isTTMiniApp) {
  ttMiniAppSystemInfo = tt.getSystemInfoSync();
}
export const isAndroid = (() => {
    
  if (isMiniApp) {
    return ["Android", "android"].includes(miniAppSystemInfo.platform);
  } else if (isTTMiniApp) {
    return ["Android", "android"].includes(ttMiniAppSystemInfo.platform);
  } else if (isWeex) {
    return navigator.platform.toLowerCase() === "android";
  } else if (isWeb) {
    return Boolean(navigator.userAgent.match(/android/i));
  }

  return false;
})();
export const isIOS = (() => {
  if (isMiniApp) {
    return ["iPhone OS", "iOS", "ios"].includes(miniAppSystemInfo.platform);
  } else if (isTTMiniApp) {
    return ["iPhone OS", "iOS", "ios"].includes(ttMiniAppSystemInfo.platform);
  } else if (isWeex) {
    return navigator.platform.toLowerCase() === "ios";
  } else if (isWeb) {
    return Boolean(navigator.userAgent.match(/(iphone|ipod|ipad)/i));
  }

  return false;
})();
