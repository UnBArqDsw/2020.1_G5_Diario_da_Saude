#!/bin/bash
echo "REACT_NATIVE_PACKAGER_HOSTNAME="`hostname -I | cut -d" " -f1` > .env
