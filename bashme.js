const util = require("util");
const fs = require("fs");

const exec = util.promisify(require("child_process").exec);

async function bashCommand(command) {
  try {
    console.log(command);
    const { stdout, stderr } = await exec(command);
    console.log("output:\n", stdout);
  } catch (err) {
    console.error("error:" + err);
  }
}

runAll = async () => {
  let rawdata = fs.readFileSync("command.json");
  let task = JSON.parse(rawdata);
  for (let i = 0; i < task.command.length; i++) {
    await bashCommand(task.command[i]);
  }
};

runAll();
