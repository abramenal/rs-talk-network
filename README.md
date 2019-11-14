# rs-talk-network

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
res.setHeader('Access-Control-Allow-Headers', 'Origin Content-Type, Accept');
```
