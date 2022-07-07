import Icon from './icon.png';
import { clickHandler } from '../index.js';
import './Header.css';

const Header = () => {
  const header = document.createElement('header');

  header.classList.add('header');

  header.appendChild(Logo());
  header.appendChild(Navigation());
  header.appendChild(User());

  return header;
};

export const Logo = () => {
  const logoContainer = document.createElement('div');
  const title = document.createElement('h1');
  const icon = new Image();

  logoContainer.classList.add('logo');
  icon.classList.add('logo__icon');
  title.classList.add('logo__title');

  icon.src = Icon;
  title.textContent = 'Rockeats/';

  logoContainer.appendChild(icon);
  logoContainer.appendChild(title);

  return logoContainer;
};

const Navigation = () => {
  const navigation = document.createElement('nav');
  const navigationList = document.createElement('ul');

  navigation.classList.add('navigation');
  navigationList.classList.add('navigation__list');

  [{ text: 'Home' }, { text: 'Menu' }, { text: 'About' }].forEach(
    ({ text }, index) => {
      navigationList.appendChild(NavigationItem({ text, index }));
    }
  );

  navigation.appendChild(navigationList);

  return navigation;
};

const NavigationItem = (props) => {
  const navigationItem = document.createElement('li');
  const navigationBtn = document.createElement('button');

  navigationItem.classList.add('navigation__list-item');
  navigationBtn.classList.add('navigation__btn');

  navigationBtn.textContent = props.text;
  navigationBtn.dataset.key = props.text;
  navigationBtn.dataset.index = props.index;

  if (props.text === 'Home') {
    navigationBtn.classList.add('active');
  }

  navigationBtn.addEventListener('click', clickHandler);

  navigationItem.appendChild(navigationBtn);

  return navigationItem;
};

const User = () => {
  const user = document.createElement('div');
  const greeting = document.createElement('p');

  user.classList.add('user');
  greeting.classList.add('greeting');

  greeting.textContent = 'Welcome, guest!';

  user.appendChild(greeting);

  return user;
};

export default Header;
