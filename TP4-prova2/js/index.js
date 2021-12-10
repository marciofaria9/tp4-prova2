function start() {

  const btn = document.getElementById('enter')
  btn.onclick = loginCheck
}

function loginCheck() {

  const user = pegaId('user')
  const password = pegaId('password')

  if (user.value == 'admin' && password.value == 'admin123') {
    window.location.href = "../home.html"

  }
  else if (user.value == '' && password.value == '') {
    document.getElementById('alert').innerHTML ='Digite o Usuário e Senha'
  }

  else {
    document.getElementById('alert').innerHTML ='Senha errada'
  }
}

function pegaId(id) {
  return document.getElementById(id)
}

start()



