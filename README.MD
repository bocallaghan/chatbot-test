# Brent's sample chatbot

A simple chatbot based on the Microsoft chatbot system

### Prerequisites

Naturally you'll need NodeJS and npm

You'll also need to create a folder in the root of the project called config. Within there you will need two files "certs.json" which holds the OS location of your public and private keys for your webservers TLS connections and appInfo.json which holds your Microsoft chatbot appID and secret token.

#### certs.json

This is a simple json file as follows:

```
{
    "privateKeyLocation":"/path/to/private/key.pem", 
    "publicKeyLocation":"/path/to/public/key.pem"
}
```

#### appInfo.json

This is a simple json file as follows:

```
{
    "appId": "bf01d111-876e-1234-b3ca-bee9fgnrwjgkn",
    "appPassword": "zC7oM9ugnrwhjkgehrjeklrerklg"
}
```
