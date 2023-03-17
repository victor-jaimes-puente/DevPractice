const { exec } = require("child_process");

function runNetstat() {
  exec("netstat -an", (error, stdout, stderr) => {
    if (error) {
      console.log(`error: ${error.message}`);
      return;
    }
    if (stderr) {
      console.log(`stderr: ${stderr}`);
      return;
    }
    const lines = stdout.split("\n");
    const facebookIps = lines
      .filter((line) => line.includes("facebook"))
      .map((line) => line.split(" ")[2].split(":")[0]);
    console.log("Facebook IPs:");
    console.log(facebookIps);
  });
}

setInterval(runNetstat, 1000);