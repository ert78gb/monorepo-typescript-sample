import { AddressInfo } from 'net'

import { server } from './server'

const PORT = process.env.PORT || 8080
const service = server.listen(PORT, (err: Error) => {
  if (err) {
    console.error(err)
    process.exit(-1)
  }

  const address = service.address() as AddressInfo
  const host = address.address;
  const port = address.port;

  console.info(`post handler listening at http://${host}:${port}`)
})
