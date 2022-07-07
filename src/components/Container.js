import './Container.css';

const Container = (children) => {
  const container = document.createElement('main');

  container.classList.add('container');

  container.appendChild(children);

  return container;
};

export default Container;
