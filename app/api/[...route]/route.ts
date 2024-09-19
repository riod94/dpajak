import { Hono } from 'hono'
import { showRoutes } from 'hono/dev'
import { handle } from 'hono/vercel'
import type { PageConfig } from 'next'

export const config: PageConfig = {
  api: {
    bodyParser: false,
  },
}

const app = new Hono({ strict: false }).basePath('api')

app.get('/hello', (c) => {
  return c.json({
    message: 'Hello from Hono!',
  })
})

app.notFound((c) => {
  return c.json({
    message: 'Not Found',
  }, 404)
})

showRoutes(app, {
  verbose: true
})

export const GET = handle(app)