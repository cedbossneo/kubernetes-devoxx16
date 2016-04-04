#!/usr/bin/env bash
sudo apt-get install -y unzip
install nodejs npm
curl -sL https://deb.nodesource.com/setup_4.x | sudo -E bash -
sudo apt-get install -y nodejs
cd ~/todomvc-springboot/static
npm install
# install spring cli
sudo apt-get install -y openjdk-8-jdk
curl -s http://get.sdkman.io | bash
source "$HOME/.sdkman/bin/sdkman-init.sh"
sdk install springboot
