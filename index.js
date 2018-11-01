import express from 'express'
import yaml from 'js-yaml'
import fs from 'fs'

const app = express()

const server = app.listen(3000, () => {
  console.log("Node.js is listening to PORT:" + server.address().port)
})

const doc = yaml.safeLoad(fs.readFileSync('./routes.yml', 'utf8'))

doc.routes.api.forEach(route => {
  app.get('/api' + route.path, (req, res, next) => {
    res.json(JSON.parse(fs.readFileSync(route.resource, 'utf8')))
  })
})

