// let exec = require('child_process').exec;
// let process = require('child_process');
const util = require('util');
const exec = util.promisify(require('child_process').exec);

async function screencap() {
  await exec(`adb shell mkdir -p /sdcard/wscats`)
  await exec(`adb shell screencap -p /sdcard/wscats/screen.png`)
  await exec(`adb pull /sdcard/wscats/screen.png .`)
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function click(x, y) {
  await exec(`adb shell input tap ${x} ${y}`)
}
async function main() {
  // screencap()
  for (let i = 1; i < 50; i++) {
    await click(461, 2445)
    await click(461, 2445)
    await click(461, 2445)
    await click(461, 2445)
    // await sleep(2000);
  }
}

main()