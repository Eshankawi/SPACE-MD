require('dotenv').config();

module.exports = {
  //Enter your session id here (optional)
  SESSION_ID: process.env.SESSION_ID || 'CYPHER-X:~UEsDBBQAAAgIADuI+VpDfKHCWQQAAHwHAAAKAAAAY3JlZHMuanNvbpVU25KiSBD9l3rVGO4oxnbEAtqCNooXsHVjHkooseReVaAw4b9vYHdPz8PubC9PRV0yT55zMn+ALMcUzVEDRj9AQXANGeqWrCkQGAGjOp0QAX0QQgbBCGwMb2Cmmhs9K+VZ4kJum4rZZr9fx3Q6kEt*PxscOWrk1N8*gXsfFNUxwcFvAo6rNTQGM6Rwe*fFd3d1*XyRb9yzYi6iW7KPeqkWzZrsuDT4J3DvIkJMcBZNijNKEYHJHDUuxORr8B273V5d2djDahWd3aTlo6kb38Scc4q5I2lVtJuxgye3vvc1+DMl4XannWq2zmDu0WgQ+yfLTOcyQhYf2lODNLGnW8+V8A6f4ihDoR2ijGHWfJl30bo5F0n1NrHhCPZWdRNNXS5D7OVWT+*5pMdfbqwOpTj5Iu89dSPba4YJPsg9P*I1m*dKy*KPtZEeAmuyzIqqLXb83Bz+CtwlH16J*w*v5dKRDtjlC2hlWMnzy2w4d8Qsanr5ETcS4lQflYY7DOPga*DTcuvOfKVOYu94OkSrbaY5z+eFSzxHK+cZv+a515DCYzaNPuFDVpHfocS9YGisWtruCGZbcf0s9fD4uK45s5Swuxfhi5cfYcBPh*Nmn9iyaosvlbmOT6WFjnA+ne1UPpyX*NzKtml+rS*rk62vnh4VxaixQzAS7n1AUIQpI5DhPHvsSWofwLDeoIAg9qAXDMJiOhnwpaNVMBiEl2iM9YQiuio9LYfmvJJaS701FW+snkAfFCQPEKUotDBlOWkcRCmMEAWjv773QYZu7E24Lp0k9MEJE8q8rCqSHIYfqn4cwiDIq4xtmiwwuwUiYMR*biPGcBbRjscqgyQ44xqZZ8goGJ1gQtHPChFBIRgxUqGfXWvmYUf8wh+*rsWhD*ogfQiCQzACmjwYaoKgaYI6Gqh*0m*XLiosim8ZYqAPMthdBpPNH5K+AH2QPF6JijaQJV4QVVGVNal72R3cfwLu4oeIQZxQMAKmW4+vbj6duNL1QlfTqe5Euhnp4LPAD6e8KRGSG5kgTsemuBgOzMnhoGvL4zhoXQetzrqtus3AcP3Ndho**UMQMAJukWWRnJUTEvp0c90VSiOex6ukOYmhqNNNYpcGbwj+C0cWxDSUsa5uqZNwE1eouJl+FNKloiM*cxSqbOPFvjhq7bizVR+EqMYB+jUZPPdeVGN8MRJBUHQYL89xuuV2U+VFaK5xS1*383F0FoUi1y7jcOhFO2rKL7XTypNdgrQ64HuW1HtFSxa1vte7lM7qYL57+NFDyfvswg93ddJ1vyeMHqPgXaP*kvINd2c4*t7*JcT7bPmX*jRe4RDerPpqR+xyWl7P093K3aZXyWlbK7ZX5vIyrK5bwYtvBbjfv*dBkUB2ykkKRoCmRwj6gORVZ187O+W*yWQatj1+rzqBlOmfLbHFKaIMpgUYCQNFklVRE6S3Wy7JCwvSc6f5LlaMzt6NXhQbBtlHgwG9+57tHrj*DVBLAQIUAxQAAAgIADuI+VpDfKHCWQQAAHwHAAAKAAAAAAAAAAAAAACAgQAAAABjcmVkcy5qc29uUEsFBgAAAAABAAEAOAAAAIEEAAAAAA==',
  
  //Enter your number here for administrative access to the bot
  BOT_ADMIN: process.env.BOT_ADMIN || '94789119916',
  
  //Bot web server port
  PORT: parseInt(process.env.PORT) || 2605,
  
  //Enter your Github username here (Compulsory unless you have a valid premium key)
  GITHUB_USERNAME: process.env.GITHUB_USERNAME || '',
  
  //Enter your desired bot password here. Users will be asked for this password when they try to connect to your bot via telegram or web
  //Must be numbers only and a total of 8 digits
  BOT_PASSWORD: parseInt(process.env.BOT_PASSWORD) || 12345678,
  
  //Enter the desired password for accessing administrative access to the bot 
  //⚠️ Do not share with anyone as they can use it to control your bot
   //Must be numbers only and a total of 8 digits
  ADMIN_PASSWORD: parseInt(process.env.BOT_PASSWORD) || 11223344,
  
  //Enter telegram bot token for interaction with this bot via telegram (optional)
  TELEGRAM_BOT_TOKEN: process.env.TELEGRAM_BOT_TOKEN || '',
  
   //Antidelete and Antiedit functionality, set true to enable and false to disable. (⚠️ This function consumes a lot of memory + storage, only enable if you have enough resources ⚠️)
   ANTI_DELETE: process.env.ANTI_DELETE || 'false',
  
  
  //⚠️ Premium users settings ⚠️
   PREMIUM_KEY: process.env.PREMIUM_KEY || '',
   MAX_SESSIONS: parseInt(process.env.MAX_SESSIONS) || 3,
   EXPIRY: process.env.EXPIRY || ''
};

// You must set GITHUB_USERNAME to use the bot unless you are a premium user
// You must fork SPACE-MD repo in order to use the bot unless you're a premium user
