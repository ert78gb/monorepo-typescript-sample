import * as express from 'express';
import { json, Request, Response } from 'express';
import { log } from 'stupid-logger'

export const server = express()
server.use(json())

server.post('/', (req: Request, res: Response) => {
  log('requested data:', {body: req.body})

  res
    .status(200)
    .json({
      body: req.body,
    })
})
