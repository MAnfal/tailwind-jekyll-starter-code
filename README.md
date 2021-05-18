# Demo

[Link](https://frosty-heisenberg-9848fa.netlify.app/)

# Description

Starter code to create a static site using Tailwind CSS and Jekyll. It is made to serve as a one click install development environment. Please follow the following instructions to setup your VSCode for development.

Since VSCode provides nice functionality to create one click install environments, I mostly talk about it but in case you want to run this independently, you can. You'll just have to install `Ruby`, `Node` and the modules by yourself.

# Setup Instruction

Please install the following items in order to prepare the environment for development.

1. [Docker](https://docs.docker.com/get-docker/) (Docker CE + Docker Compose)
2. [VSCode](https://code.visualstudio.com/)
3. [VSCode Docker Extension](https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-docker)
4. [VSCode Remote - Containers Extension](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers)

Once everything is installed, you should be able to simply launch the container and start development right away.

## Special Instructions

Since Jekyll leverage Ruby while Tailwind CSS leverages Node, you will have to compile your CSS first using the following steps before you can run jekyll to observe them. After you have compiled your CSS, you will also need to commit them so that when Github Pages are compiling the jekyll site, they can pick your compiled CSS and add them to the site's deployment directory.

1. Run `npm run dev` to build the CSS for development and `npm run prod` to build for production. **Please make sure to always build for production before committing your code for live deployment**.
2. Run `bundler exec jekyll serve` locally to view your site on the development machine.

## Notes

This environment was created using the following items. Please feel free to read their relevant documentation for further assistance.

1. [VSCode typescript-node devcontainer](https://github.com/microsoft/vscode-dev-containers/tree/master/containers/typescript-node)
2. [Laravel Mix](https://laravel-mix.com/docs/6.0/installation)

## My Environment

At the time of the creation of this repository, the software version installed on my system looks like the following.

1. Docker version 20.10.4, build d3cb89e
2. VSCode version 1.53.2
3. VSCode Docker Extension version 1.10.0
4. VSCode Remote - Containers Extension version v0.158.0
5. Ubunutu 20.04 LTS
