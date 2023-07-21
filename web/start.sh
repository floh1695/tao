#!/usr/bin/sh

eval "$(~/.local/share/fnm/fnm env --use-on-cd)"
fnm use

npm run start
