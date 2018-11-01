# Stubacks
Stubacks is very simple stub server for REST API App.

# Getting Started
```
$ npm install
$ npm start

$ curl http://localhost:3000/api/users
{"data":[{"id":1,"name":"user01"},{"id":2,"name":"user02"}]}
```

### Congratulations!!

# Creating Endpoint
1. Create JSON file for response into `resources` directory
2. Append `path` and `resource` to `routes.yml`
   - `path`: endpoint path
   - `resource`: file path of JSON response
