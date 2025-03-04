#!/usr/bin/env node
const fse = require("fs-extra");
const { program } = require("commander");
const chalk = require("chalk");
const path = require("path");
const pkg = require("../package.json");

const PROJECT_FOLDER_PATH_PG = "./fastify-pg";
const PROJECT_FOLDER_PATH_MONGO = "./fastify-mongo";
const { log } = console;

program
  .version(pkg.version)
  .name(`npx ${pkg.name}`)
  .usage(`${chalk.green("package-name")}`)
  .argument("[package-name]", "package name")
  .option("-t,--template <template>", "template name")
  .action(async (name, options) => {
    const folder = options.template === "pg" ? PROJECT_FOLDER_PATH_PG : PROJECT_FOLDER_PATH_MONGO
    const source = path.join(__dirname, folder);
    const destination = name;
    if (!destination) process.exit(1);
    await fse.copy(source, destination);
    await fse.rename(`${destination}/gitignore`, `${destination}/.gitignore`);
    await fse.rename(`${destination}/yarnrc.yml`, `${destination}/.yarnrc.yml`);
    const pkgObj = await fse.readJson(`${destination}/package.json`);
    pkgObj.name = name;
    await fse.writeJson(`${destination}/package.json`, pkgObj);
    log(chalk.green("\n\nYour project is ready!\n\n"));
    log(chalk.white(`cd ${name}\n`));
    log(chalk.white("yarn install\n"));
    log(chalk.white("yarn dev\n"));
  })
  .parse(process.argv);
