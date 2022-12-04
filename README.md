# Rentals United

![RENTALS UNITED](https://new.rentalsunited.com/images/logo_new.svg)

Package for Rentals United SOAP API

# Examples

_Basic usage:_

```
// Import to your project
const { RUClient } = require('rentals-united-client');

// create client
const client = new RUClient(RUUsername, RUPassword);

// Basic call to Rentals united
client.listLanguages().then(res => console.log(res))
                 .catch(err => console.log(err))

```

**Rentals United documentation**

https://developer.rentalsunited.com/#api-reference

**Author: Ivan Vasiljevic**
