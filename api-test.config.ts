
const processENV = process.env.TEST_ENV
const env = processENV || 'dev'
console.log('Test environment is: ' +env)


 export const config ={

    apiUrl: 'https://conduit-api.bondaracademy.com/api',
    userEmail : 'revasingh9@yahoo.in',
     userPassword :" Mall##ika30"
}

if(env ==='qa'){
    config.userEmail = 'testuser@test.com',
    config.userPassword = 'Welcome'
}

if(env ==='prod'){
    config.userEmail = 'testuser@test.com',
    config.userPassword = 'Welcome'
}