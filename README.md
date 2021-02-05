# README 

# Image processing API

An api which allows you to resize the images by providing the image name and size via the url params and then it rezie the specifeid image using the provided dimentions. Subsequent reqest to get this image with thesame dimentions will just serve the already created image and not recreate it. The response to this is the path to the resized image.
The possible images which can be resized via this api are 
            
```
    'encenadaport',
    'fjord',
    'icelandwaterfall',
    'palmtunnel',
    'santamonica',
```

## Getting Started

Instructions for how to get a copy of the project running on your local machine.
To successfully deploy this project, You need to start by cloning it from github with the command

`git clone https://github.com/fanyui/image-scaling-api.git`
`cd image-scaling-api`

`npm install` or `yarn install`

Now you can  start the app with `npm run start` 
### Dependencies

```
Examples here
```

### Installation

`git clone https://github.com/fanyui/image-scaling-api.git`
`cd image-scaling-api`

`npm install` or `yarn install`

- For production build, You need to do 
`yarn run build`
This create the build files in the folder called server

- For building and running the production code you should run `yarn run start:prod` this will compile the the code, and start listening on port 3000 or if you set a PORT on your environment variable it will listen on that port.
- For test build you just need to run `yarn jest` and this will run all the two tests that are inside the __test__ folder.
- For running in developement mode. You need to simply run the code with `yarn start` 


## Testing
Make sure that the server is not running as the test uses thesame port as the server which is 300 so if the server is running you might have a test failing.
For running the tests there is a script written to take care of that by jest frame work. To do this you need to on thesame root level as the package.json file execute `yarn jest` This will run all the tests located in the __test__ folder

### Break Down Tests

1. The first tests tries to resize an image and stores in in the file system then verifies if it was successful and if the path returned is correct after the resizing.
2. The second test tests if the endpoint which was created can accept traffic and whether it will return a status code of 200


```
yarn jest
```

## Project Instructions

This section should contain all the student deliverables for this project.

## Built With

* [Prettier](https://prettier.io/) - Automated code formater tool
* [Jest](https://jestjs.io/docs/en/getting-started) - Javascript testing framework
* [Sharp](https://sharp.pixelplumbing.com/) - High performance Node.js image processing
* [ts-node-dev](https://www.npmjs.com/package/ts-node-dev) - Description of item
* [ESlint](https://eslint.org/) - ESLint syntatically analyzes your code to quickly find problems
* [Supertest](https://www.npmjs.com/package/supertest) - NodeJS tool for performing endpoint testing.

## License

[License](LICENSE.txt)
