#!/usr/bin/bash

eval "$(~/.local/share/fnm/fnm env --use-on-cd --shell bash)"
fnm use

npm run start
