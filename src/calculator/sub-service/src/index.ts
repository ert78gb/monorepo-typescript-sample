import { createServer, IncomingMessage, ServerResponse } from 'http'
import { sub } from 'js-sub'
import { AddressInfo } from 'net'
import { URL } from 'url'

const handler = (req: IncomingMessage, res: ServerResponse) => {
  const url = new URL(req.url, 'http://localhost/')
  const a = Number.parseFloat(url.searchParams.get('a'))
  const b = Number.parseFloat(url.searchParams.get('b'))
  const json = {
    sub: sub(a, b),
  }

  const response = JSON.stringify(json)
  res.writeHead(200, {
    'Content-Length': response.length,
    'Content-Type': 'application/json',
  })

  res.write(response)
  res.end()
}

const server = createServer(handler)

const PORT = process.env.PORT || 8080
const service = server.listen(PORT, (err: Error) => {
  if (err) {
    console.error(err)
    process.exit(-1)
  }

  const address = service.address() as AddressInfo
  const host = address.address;
  const port = address.port;

  console.info(`sub service listening at http://${host}:${port}`)
})
