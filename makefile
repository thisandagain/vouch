test:
	tap test/governance/*.js
	tap test/functional/*.js
	tap test/integration/*.js

.PHONY: test