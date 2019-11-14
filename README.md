# rs-talk-network

## Prerequisites

Install Node.js (LTS) directly from https://nodejs.org/en/ or via your favorite tool (nvm, homebrew, etc.)

## Quick start

1. Install dependencies

```bash
  npm install
```

2. Run frontend app

```bash
  npm run dev:client
```

3. Run backend app (in a separate terminal tab/window)

```
  npm run dev:server
```

4. Go to [http://localhost:1234](http://localhost:1234)

## CORS headers

```javascript
res.setHeader('Access-Control-Allow-Origin', '*');
res.setHeader('Access-Control-Allow-Headers', 'Origin, Content-Type, Accept');
```

## HTTPS

In order to create a HTTPS server with self-signed certificate you need to:

1. Generate key and certificate pair locally (note that output path for both of them is set here):

```bash
  sudo openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout ./selfsigned.key -out selfsigned.crt
```

2. Put `key` and `crt` files into [./ssl](./ssl) folder

3. Set up a HTTPS server:

See [server-https.js](./src/server-https.js)

```bash
node src/server-https.js
```

4. Ensure you chose to allow self-signed certificated on localhost in Chrome:

```
chrome://flags/#allow-insecure-localhost
```

5. Go to [https://localhost:8001](https://localhost:8001)
