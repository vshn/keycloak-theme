# Set Shell to bash, otherwise some targets fail with dash/zsh etc.
SHELL := /bin/bash

# Disable built-in rules
MAKEFLAGS += --no-builtin-rules
MAKEFLAGS += --no-builtin-variables
.SUFFIXES:
.SECONDARY:
.DEFAULT_TARGET: help


IMG_TAG ?= latest
QUAY_IMG ?= quay.io/vshn/keycloak-theme:$(IMG_TAG)


.PHONY: help
help: ## Show this help
	@grep -E -h '\s##\s' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = "(: ).*?## "}; {gsub(/\\:/,":", $$1)}; {printf "\033[36m%-20s\033[0m %s\n", $$1, $$2}'

.PHONY: lint
lint: ## Checks for uncommitted changes
	@echo 'Check for uncommitted changes ...'
	git diff --exit-code

.PHONY: build
build: build.docker ## All-in-one build target

.PHONY: build.docker
build.docker: ## Build the docker image
	docker build -t $(QUAY_IMG) .
