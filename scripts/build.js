const path = require('path');
const pAll = require('p-all');
const chalk = require('chalk');
const shell = require('shelljs');

const cwd = process.cwd;
const distPath = path.join(cwd(), 'dist');
const pkg = path.join(cwd(), 'package.json');
const uglifyjsPath = path.join(cwd(), 'node_modules/.bin/uglifyjs');
const fileName = 'stenax';
const uglifyBuildCmd = `${uglifyjsPath} ${path.join(distPath, `${fileName}.js`)}  --compress --mangle --output ${path.join(distPath, `${fileName}.min.js`)}`;

async function main() {
  shell.echo(`${chalk.blue('Minification started')} \n`);

  const actions = [
    () => shell.rm('-rf', distPath),
    () => shell.exec(`stencil build`),
    () => shell.exec(uglifyBuildCmd),
  ];

  const {
    stdout,
    stderr
  } = await pAll(actions, {
    concurrency: 2
  });

  if (stderr) {
    shell.echo(`${chalk.red('Minification faild')} \n`);
    shell.exit(1);
  } else {
    shell.echo(`${chalk.green('Minification completed')} \n`);
  }
}

main();
