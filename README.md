# fastify-project-generator

Convenient way to scaffold  fastify project

## Installation

```sh
$ npm install -g am-create-fastify
```

## Quick Start

To use a PostgreSQL database, run the following command:
```bash
$ npx am-create-fastify "project name" --template pg 
```
By default, the database used is MongoDB.

The quickest way to get started is to use npx and pass in the name of the project you want to create. To create the app, run:
```bash
$ npx am-create-fastify "project name"
```

Then, start your Fastify app in development mode at `http://localhost:3000/`:

```bash
$ cd "project name" 

$ yarn install 

$ yarn dev
```
