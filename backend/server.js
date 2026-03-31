const express = require('express')
const { getUser } = require('./callApi')
const app = express()
const port = 3000
app.use(express.json())

app.get('/user/:login', async (req, res) => { // exemple /user/csalamit
  try { 
    const data = await getUser(req.params.login) 
    res.json(data) // format json as node.js work like that
  } catch (err) {
    res.status(err.response?.status || 500).json(err.response?.data || err.message)
  }
})


//################################TEST#################################################
app.get('/test', (req, res) => {
	res.send('hello world')
  })

app.listen(port, () => console.log(`Server running on port ${port} `))
//################################END OF TEST#################################################