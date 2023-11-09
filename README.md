# @rosmarinus/babel-plugin-tree-cutting

<a href="https://github.com/rosmarinus-project/babel-plugin-tree-cutting/actions/workflows/publish.yml"><img src="https://github.com/rosmarinus-project/babel-plugin-tree-cutting/actions/workflows/publish.yml/badge.svg" alt="build status"></a> <a href="https://pr.new/rosmarinus-project/babel-plugin-tree-cutting"><img src="https://developer.stackblitz.com/img/start_pr_dark_small.svg" alt="Start new PR in StackBlitz Codeflow"></a>

This npm package contains some function encapsulation commonly used in development, which is more engineering-oriented.

# How to Install

```bash
npm i @rosmarinus/babel-plugin-tree-cutting
```

# Functions introduction

1. logger

This module encapsulates chalk as output, and the input parameters are the same as the console module.

2. sleep

This module encapsulates several common delay methods into promise output

3. uuid

This module is a wrapper for the uuid npm library

4. AsyncTask

AsyncTask is an encapsulation of promise and is used in scenarios where calls and callbacks are separated.

4. FileLogger

FileLogger is a file logger that can be used in nodejs and environments to output log to a local file.

5. json

This module is a wrapper for the JSON.stringify and JSON.parse methods to make them more secure.