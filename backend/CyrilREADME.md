## backend with node.js using express as a framework
 _npm install express --save_

 tested with localhost , route : exemple,  http://localhost:3000/test
 console.log is hello world
 the function use get , return res.json so the data are parsed in Json 
 here we do not need req but we have to write it 
 there is two args, the first is the route : '/test'
 the second is (req and res) , res is to return the result and req can be for exemple to be abble to find a user via params.id
 

 app.get('/test', (req, res) => {
	res.send('hello world')
  })

## dependencies
_npm install express axios body-parser dotenv_ for API42  

## schema 

Client HTTP  --->  server.js (route /user/:login)
                        |
                        v
                 callApi.js (getUser)
                        |
                        v
                   auth.js (getToken)
                        |
                        v
                  API 42 (HTTP request)
                        |
                        v
                 	Return Data
                        |
                        v
                  server.js -> res.json()
                        |
                        v
                     Client