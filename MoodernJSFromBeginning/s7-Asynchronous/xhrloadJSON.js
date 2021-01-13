document.getElementById('button1').addEventListener('click', showCustomer);
document.getElementById('button2').addEventListener('click', showCustomers);

function showCustomer() {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'customer.json', true);
  xhr.onload = function () {
    if (this.status === 200) {
      const cus = JSON.parse(this.responseText); // ***
      createUL(cus, document.getElementById('customer'));
    }
  };
  xhr.send();
}

function showCustomers() {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'customers.json', true);
  xhr.onload = function () {
    if (this.status === 200) {
      const cus = JSON.parse(this.responseText); // ***
      cus.forEach((element) => {
        createUL(element, document.getElementById('customers'));
      });
    }
  };
  xhr.send();
}

function createUL(cus, parent) {
  const ul = document.createElement('ul');
  ul.innerHTML = `<li>${cus.name}</li><li>${cus.age}</li>`;
  parent.appendChild(ul);
}
