## File Creator through CLI
With this project will be able to create an empty file by entering the name and the extensio

### Instructions for Use
For a correct use, we must follow the below instructions
```shell script

```

#### Installation

* GLOBAL
```shell script
    npm install -g gtinoco-project-1d-cli-file-creator
```

* LOCAL
```shell script
    npm install gtinoco-project-1d-cli-file-creator
```


#### To use it
* GLOBAL

We must to execute this on the terminal
```shell script
    gtinoco-project-1d-cli-file-creator
```

* LOCAL

First to all,  we must to add the following command on script section of package.json
```
  "scripts": {
      "cli-file-creator": "./node_modules/.bin/gtinoco-project-1d-cli-file-creator"
  }
```
Once added the command, let's to execute
```shell script
    npm run cli-file-creator
```
