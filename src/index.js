import Header from './components/Header';
import Container from './components/Container';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Menu from './components/Menu';
import './style.css';

const routes = [{ Home: Home() }, { Menu: Menu() }, { About: About() }];

const content = document.getElementById('content');

const clickHandler = (event) => {
  const key = event.target.dataset['key'];
  const index = Number(event.target.dataset['index']);
  const container = document.querySelector('.container');
  const buttons = document.querySelectorAll('.navigation__btn');

  if (container.firstChild === routes[index][key]) {
    return;
  }

  buttons.forEach((btn) => {
    btn.classList.remove('active');
  });

  event.target.classList.add('active');
  container.removeChild(container.firstChild);
  container.appendChild(routes[index][key]);
};

content.appendChild(Header());
content.appendChild(Container(Home()));
content.appendChild(Footer());

export { clickHandler };
