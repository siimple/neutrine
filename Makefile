.PHONY: build

# Global variables
NODE_BIN=./node_modules/.bin

# Build neutrine
build:
	${NODE_BIN}/webpack --config webpack.config.js

