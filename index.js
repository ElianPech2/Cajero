// Definir usuarios con contraseñas y saldos
const users = {
  "Jos": {
    "password": "123",
    "balance": 500
  },
  "Elian": {
    "password": "1234",
    "balance": 750
  },
  "Alejandro": {
    "password": "12345",
    "balance": 250
  }
};

// Función para verificar la autenticidad del usuario y mostrar las opciones disponibles
function login() {
  // Obtener los valores ingresados en el formulario
  const username = document.getElementsByName("username")[0].value;
  const password = document.getElementsByName("password")[0].value;

  // Verificar si el usuario existe y si la contraseña es correcta
  if (users[username] && users[username]["password"] == password) {
    // Ocultar el formulario de inicio de sesión
    document.getElementsByTagName("form")[0].style.display = "none";

    // Mostrar las opciones disponibles
    const options = document.createElement("div");
    options.innerHTML = `
      <h2>Bienvenido, ${username}!</h2>
      <button onclick="showBalance()">Consultar Saldo</button>
      <button onclick="deposit()">Ingresar Monto</button>
      <button onclick="withdraw()">Retirar Monto</button>
    `;
    document.body.appendChild(options);
  } else {
    // Mostrar mensaje de error si el usuario o la contraseña son incorrectos
    alert("Usuario o contraseña incorrectos.");
  }
}

// Función para mostrar el saldo actual del usuario
function showBalance() {
  // Obtener el saldo del usuario actual
  const username = document.getElementsByName("username")[0].value;
  const balance = users[username]["balance"];

  // Mostrar el saldo en una ventana emergente
  alert(`Su saldo actual es: $${balance}.`);
}

// Función para ingresar un monto en la cuenta del usuario actual
function deposit() {
  // Obtener el monto a ingresar
  const deposit = prompt("Ingrese el monto que desea ingresar:");

  // Verificar si el monto ingresado es válido
  if (isNaN(deposit) || deposit < 0) {
    alert("Monto inválido.");
    return;
  }

  // Obtener el saldo del usuario actual
  const username = document.getElementsByName("username")[0].value;
  let balance = users[username]["balance"];

  // Actualizar el saldo del usuario y verificar si se excede el límite
  balance += Number(deposit);
  if (balance > 990) {
    alert("No se puede superar el límite de $990.");
    balance -= Number(deposit);
    return;
  }

  // Actualizar el saldo del usuario en el objeto users y mostrar el saldo actualizado
  users[username]["balance"] = balance;
  showBalance();
}

// Función para retirar un monto de la cuenta del usuario actual
function withdraw() {
  // Obtener el monto a retirar
  const withdraw = prompt("Ingrese el monto que desea retirar:");

  // Verificar si el monto ingresado es válido
  if (isNaN(withdraw) || withdraw < 0) {
    alert("Monto inválido.");
    return;
  }

  // Obtener el saldo del usuario actual
  const username = document.getElementsByName("username")[0].value;
  let balance = users[username]["balance"];

  // Verificar si el monto a retirar es mayor que el saldo disponible
  if (withdraw > balance) {
    alert("No tiene suficiente saldo.");
    return;
  }

  // Actualizar el saldo del usuario y verificar si es menor que el límite
  balance -= Number(withdraw);
  if (balance < 10) {
    alert("El saldo mínimo es de $10.");
    balance += Number(withdraw);
    return;
  }

  // Actualizar el saldo del usuario en el objeto users y mostrar el saldo actualizado
  users[username]["balance"] = balance;
  showBalance();
}


  
  
  
  
  
  