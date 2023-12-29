# setup ssh if needed

sudo apt install net-tools
sudo apt install zsh

# shell
git clone --depth=1 https://github.com/romkatv/powerlevel10k.git ~/powerlevel10k
echo 'source ~/powerlevel10k/powerlevel10k.zsh-theme' >>~/.zshrc

# git
git config --global credential.helper store

# load cheatsheet

# brew (optional)
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
test -d ~/.linuxbrew && eval "$(~/.linuxbrew/bin/brew shellenv)"
test -d /home/linuxbrew/.linuxbrew && eval "$(/home/linuxbrew/.linuxbrew/bin/brew shellenv)"
echo "eval \"\$($(brew --prefix)/bin/brew shellenv)\"" >> ~/.zshrc

# use zsh for default ssh
echo $(which zsh) >> ~/.profile

# nvm
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
nvm install 18.16.1
nvm alias default 18.16.1

# fixed IP

# privilege port
https://www.cyberciti.biz/faq/howto-set-sysctl-variables/

`/etc/sysctl.d/99-sysctl.conf`
`net.ipv4.ip_unprivileged_port_start=80`