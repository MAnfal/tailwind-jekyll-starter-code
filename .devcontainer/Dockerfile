# [Choice] Node.js version: 14, 12, 10
ARG VARIANT=14
FROM mcr.microsoft.com/vscode/devcontainers/typescript-node:${VARIANT}

# [Optional] Uncomment this section to install additional OS packages.
RUN apt-get update && export DEBIAN_FRONTEND=noninteractive \
    && apt-get -y install --no-install-recommends ruby-full build-essential zlib1g-dev

RUN echo '# Install Ruby Gems to ~/gems' >> ~/.bashrc

RUN echo 'export GEM_HOME="$HOME/gems"' >> ~/.bashrc

RUN echo 'export PATH="$HOME/gems/bin:$PATH"' >> ~/.bashrc

CMD "source ~/.bashrc"

RUN gem install jekyll bundler

# [Optional] Uncomment if you want to install an additional version of node using nvm
# ARG EXTRA_NODE_VERSION=10
# RUN su node -c "source /usr/local/share/nvm/nvm.sh && nvm install ${EXTRA_NODE_VERSION}"

# [Optional] Uncomment if you want to install more global node packages
# RUN su node -c "npm install -g <your-package-list -here>"