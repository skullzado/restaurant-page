import './Menu.css';

const Menu = () => {
  const menu = document.createElement('div');

  menu.classList.add('menu');

  [
    {
      name: 'Food 1',
      ingredients: 'Ingredient 1, Ingredient 2, Ingredient 3',
      price: '16 units',
    },
    {
      name: 'Food 2',
      ingredients: 'Ingredient 1, Ingredient 2, Ingredient 3, Ingredient 4',
      price: '2 units',
    },
    {
      name: 'Food 3',
      ingredients: 'Ingredient 1',
      price: '12 units',
    },
    {
      name: 'Food 4',
      ingredients:
        'Ingredient 1, Ingredient 2, Ingredient 3, Ingredient 4, Ingredient 5',
      price: '12 units',
    },
    {
      name: 'Food 5',
      ingredients: 'Ingredient 1, Ingredient 2, Ingredient 3,',
      price: '5 units',
    },
    {
      name: 'Food 6',
      ingredients:
        'Ingredient 1, Ingredient 2, Ingredient 3, Ingredient 4, Ingredient 5, Ingredient 6, Ingredient 7, Ingredient 8',
      price: '25 units',
    },
    {
      name: 'Food 7',
      ingredients: 'Ingredient 1',
      price: '12 units',
    },
    {
      name: 'Food 8',
      ingredients: 'Ingredient 1, Ingredient 2, Ingredient 3, Ingredient 4',
      price: '15 units',
    },
    {
      name: 'Food 9',
      ingredients:
        'Ingredient 1, Ingredient 2, Ingredient 3, Ingredient 4, Ingredient 5',
      price: '15 units',
    },
    {
      name: 'Food 10',
      ingredients:
        'Ingredient 1, Ingredient 2, Ingredient 3, Ingredient 4, Ingredient 5, Ingredient 6, Ingredient 7',
      price: '20 units',
    },
    {
      name: 'Food 11',
      ingredients: 'Ingredient 1, Ingredient 2, Ingredient 3, Ingredient 4',
      price: '10 units',
    },
    {
      name: 'Food 12',
      ingredients: 'Ingredient 1, Ingredient 2',
      price: '3 units',
    },
  ].forEach(({ name, ingredients, price }) => {
    const food = document.createElement('div');
    const foodName = document.createElement('h3');
    const foodIngredients = document.createElement('p');
    const foodPrice = document.createElement('p');

    food.classList.add('food');
    foodName.classList.add('food__name');
    foodIngredients.classList.add('food__ingredients');
    foodPrice.classList.add('food__price');

    foodName.textContent = name;
    foodIngredients.textContent = ingredients;
    foodPrice.textContent = price;

    food.appendChild(foodName);
    food.appendChild(foodIngredients);
    food.appendChild(foodPrice);
    menu.appendChild(food);
  });

  return menu;
};

export default Menu;
