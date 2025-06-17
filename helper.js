// helper.js - Run any JavaScript file and show output

const { exec } = require("child_process");
const path = require("path");
const fs = require("fs");

const targetPath = process.argv[2];

if (!targetPath) {
    console.log("❗ Usage: node helper.js path/to/practice.js");
    process.exit(1);
}

const absolutePath = path.resolve(targetPath);

if (!fs.existsSync(absolutePath)) {
    console.log(`❗ File not found: ${absolutePath}`);
    process.exit(1);
}

console.log(`🚀 Running: ${absolutePath}\n`);

exec(`node "${absolutePath}"`, (err, stdout, stderr) => {
    if (err) {
        console.error(`❌ Error:\n${stderr}`);
    } else {
        console.log(`✅ Output:\n${stdout}`);
    }
});
