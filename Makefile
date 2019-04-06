.PHONY: build test serve-test

# Global variables
NODE_BIN=./node_modules/.bin

# Build neutrine source
build:
	${NODE_BIN}/webpack --config webpack.config.js

# Run test service
test:
	@## Run test script for creating the testing server using express
	node test/server.js

