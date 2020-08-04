const fs = require('fs');
const path = require('path');

if (process.argv.length !== 3) {
  console.error('Need to know the target environment');
  process.exit(1);
}

const targetEnv = process.argv[2];
const baseConfig = JSON.parse(fs.readFileSync(path.normalize(__dirname + '/src/environment-config.json')).toString());

const changeConf = __dirname + '/src/environments/environment-config.' + targetEnv + '.json';
const changes = JSON.parse(fs.readFileSync(path.normalize(changeConf)).toString());

const generateConf = JSON.stringify(Object.assign(baseConfig, changes), null, 2);

const generateFileName = path.normalize(__dirname + '/src/environment-config.generated.json');
fs.writeFileSync(generateFileName, generateConf);
