const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  console.log(`Olá ${order.order.delivery.deliveryPerson}, entrega para: ${order.name}, Telefone: ${order.phoneNumber}, ${order.address.street}, Nº: ${order.address.number}, AP: ${order.address.apartment}`);
}
console.log(order.order.delivery.deliveryPerson);

customerInfo(order);

const orderModifier = (order) => {
  order.name = 'Luiz Silva'
  order.order.delivery.price = '50'
  const listaPizzas = Object.keys(order.order.pizza)
  const listaDrinks = Object.keys(order.order.drinks)
  console.log(`Olá ${order.name}, o total do seu pedido de ${listaPizzas[0]}, ${listaPizzas[1]} e ${listaDrinks[0]}, é R$${order.order.pizza.marguerita.price + order.order.pizza.pepperoni.price + order.order.drinks.coke.price - 5},00.`);
}

orderModifier(order);