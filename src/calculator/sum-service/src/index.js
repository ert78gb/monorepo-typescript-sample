const { createServer } = require('http')
const { URL } = require('url')
const { sum } = require('ts-sum')

const handler = (req, res) => {
  const url = new URL(req.url, 'http://localhost/')
  const a = Number.parseFloat(url.searchParams.get('a'))
  const b = Number.parseFloat(url.searchParams.get('b'))
  const json = {
    sum: sum(a, b),
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
const service = server.listen(PORT, err => {
  if (err) {
    console.error(err)
    process.exit(-1)
  }

  const address = service.address()
  const host = address.address;
  const port = address.port;

  console.info(`sum service listening at http://${host}:${port}`)
})
