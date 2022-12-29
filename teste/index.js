const wdio = require("webdriverio");

const opts = {
    path: '/wd/hub',
    port: 4723,
    capabilities: {
      platformName: "Android",
      platformVersion: "10",
      deviceName: "Android Emulator",
      app: "C:/Users/arthu/Desktop/Sprint 5 22.4/resources/TerraMapper.apk",

      automationName: "UiAutomator2"
    }
  };
  
  async function main () {
    const client = await wdio.remote(opts);

    //await client.deleteSession();
  }
  
  main();
  