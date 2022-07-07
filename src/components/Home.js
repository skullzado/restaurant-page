import { Logo } from './Header';
import './Home.css';

const Home = () => {
  const home = document.createElement('div');
  const infoContainer = document.createElement('div');

  home.classList.add('home');
  infoContainer.classList.add('info-container');

  [
    {
      title: 'Open 24/7',
      description:
        "Midnight cravings? In the middle of buttermilk nebula? Say no more. Instant delivery's got you covered!",
    },
    {
      title: 'Foodie Friendly',
      description: 'Mars-raised chicken to Pluto-farmed vegetables? We got it!',
    },
    {
      title: 'Now Catering',
      description:
        'Having an Earth-themed party in your space yacht? Call us now at 1-900-OKFACE!',
    },
  ].forEach(({ title, description }) => {
    const card = document.createElement('div');
    const cardTitle = document.createElement('h3');
    const cardDesc = document.createElement('p');

    card.classList.add('card');
    cardTitle.classList.add('card__title');
    cardDesc.classList.add('card__desc');

    cardTitle.textContent = title;
    cardDesc.textContent = description;

    card.appendChild(cardTitle);
    card.appendChild(cardDesc);
    infoContainer.appendChild(card);
  });

  home.appendChild(Logo());
  home.appendChild(infoContainer);

  return home;
};

export default Home;
