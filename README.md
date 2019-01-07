# Developer blog
Purpose with this project was to learn to work with Gatsby.js and report the experience to my collegues.


## Setup

1. Open your terminal.

2. Locate into the root directory

3. Inside the app run the server with following command:
```
npm install
```
then run
```
gatsby develop
```

4. Go to:
```
http://localhost:8000
```

5. Create .env file and the line
```
DATOCMS_TOKEN = 43dfd260341ed054856963707977a1
```


# Development
This Application has been built with Gatsby.js and datocms as headless backend


## Testing

Testing in this application has been done through jest alone or in combination with react test renderer. In order to test the application through jest run the following command 

```
npm run test
```



### Storybook

Visual testing with storybook a way of documenting your components. This project is using storybook-library in order to set up development environment. 

```
npm run storybook
```
