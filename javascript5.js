function getBrowserInfo() {
    const browserName = navigator.userAgent;
    const browserVersion = navigator.appVersion;
    return { name: browserName, version: browserVersion };
  }
  
  const browserInfo = getBrowserInfo();
  console.log(browserInfo.name);     
  console.log(browserInfo.version);  
  