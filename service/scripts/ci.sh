#!/usr/bin/env bash

set -e

npm ci
npm run validate
npm test
