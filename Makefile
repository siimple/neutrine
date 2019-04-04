.PHONY: build test serve-test

# Global variables
NODE_BIN=./node_modules/.bin

# Build neutrine source
build:
	${NODE_BIN}/webpack --config conf/webpack.build.js

# Build tests
test:
	${NODE_BIN}/webpack --config conf/webpack.test.js

# Run test service
serve-test: 
	@## Run test script for creating the testing server using express
	node test/server.js

