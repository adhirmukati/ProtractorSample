const fs = require('fs');
const path = require('path');

const envName = process.argv[2];
const buildNumber = process.env.BITBUCKET_BUILD_NUMBER;

const BASE_PATH = path.join(__dirname);
const CONTENT_FOLDER = path.join(BASE_PATH, 'dist', 'supplierportal-' + envName);

if (envName && buildNumber) {
  const indexFilePath = path.join(CONTENT_FOLDER, 'index.html');
  console.log(`${indexFilePath}`);
  if (fs.existsSync(indexFilePath)) {
    const indexFileStr = fs.readFileSync(indexFilePath).toString();
    const newIndexFileStr = indexFileStr.replace('content="---BUILD-NUMBER---"', 'content="' + buildNumber + '"');
    fs.writeFileSync(indexFilePath, newIndexFileStr);
  } else {
    console.log('The index file was missing for env: ' + envName);
  }
} else {
  console.log('Either missing envName and/or buildNumber');
  console.log('Build Number = ' + buildNumber);
  console.log('Env Name = ' + envName);
}
