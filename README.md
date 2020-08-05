
## Usage

### Prerequisites

- Install wrangler.
- Install Node 14

### Develop

- `wrangler dev`
- `open http://localhost:8787`

### Deploy

- `CF_ACCOUNT_ID={your account id here} CF_ZONE_ID={your cf zone id here} wrangler publish`
  - See [https://developers.cloudflare.com/workers/quickstart#account-id-and-zone-id](https://developers.cloudflare.com/workers/quickstart#account-id-and-zone-id) for more details on how to get these
