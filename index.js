const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 5000

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.send('hello rony server is running')
})

const users = [
  { id: 1, name: 'Rabbi', email: 'rabbi@gmail.com', phone: '013243657544' },
  { id: 2, name: 'kabbi', email: 'rabbi@gmail.com', phone: '013243657544' },
  { id: 3, name: 'samad', email: 'samad@gmail.com', phone: '013243657544' },
  { id: 4, name: 'kamal', email: 'kamal@gmail.com', phone: '013243657544' },
  { id: 5, name: 'jamal', email: 'jamal@gmail.com', phone: '013243657544' },
  { id: 6, name: 'jami', email: 'jami@gmail.com', phone: '013243657544' }
]

app.get('/users', (req, res) => {
  if (req.query.name) {
    const search = req.query.name.toLowerCase()
    const found = users.filter(user => user.name.toLowerCase().includes(search))
    res.send(found)
  } else {
    res.send(users)
  }
})
app.get('/user/:id', (req, res) => {
  const id = parseInt(req.params.id)
  const user = users.find(u => u.id === id)
  res.send(user)
})
app.post('/user', (req, res) => {
  const user = req.body
  user.id = users.length + 1
  users.push(user)
  res.send(user)
})
app.listen(port, () => {
  console.log('Server is running at ', port)
})
