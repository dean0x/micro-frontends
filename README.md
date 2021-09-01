# Micro Frontends Application

This repo is a suggested micro-frontends architecture for modern web development.

Uses `node v15.0.1`

# Getting started

1. `git clone https://github.com/dean0x/micro-frontends.git`
2. `cd micro-frontends`
3. Open 2 terminals for this folder.
4. In terminal 1 run `yarn start-list` to start the application container at http://localhost:3001/.
5. In terminal 2 run `yarn start-conatiner` to start the list micro frontend at http://localhost:3000/.

You can run the container on its own, but for it to actually do anything you'll
also need to be running:

- the [`container`](https://github.com/dean0x/micro-frontends/tree/main/container) application container
- the [`list`](https://github.com/dean0x/micro-frontends/tree/main/list) micro frontend