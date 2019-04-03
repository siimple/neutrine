.PHONY: build test serve-test

# Global variables
NODE_BIN=./node_modules/.bin

# Build neutrine
build:
	${NODE_BIN}/webpack --config webpack.config.js

# Build test modules
test:
	${NODE_BIN}/webpack --config conf/webpack.test.js

# Run test service
serve-test: 
	@## Run test script for creating the testing server using express
	node scripts/test-server.js

