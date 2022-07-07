import './About.css';

const About = () => {
  const about = document.createElement('div');
  const restaurantInfo = document.createElement('div');

  about.classList.add('about');
  restaurantInfo.classList.add('about__info');

  [
    'Rockeats/ is the first fast food restaurant built on the moon.',
    'For 75 years, we have dedicated ourselves in improving our well-known "low-gravity" menu best suited for space-farers on the go.',
    "We're always open so come and visit us on our one and only location - the Moon - and enjoy the view of space and Earth.",
  ].forEach((text) => {
    const para = document.createElement('p');

    para.classList.add('about__text');
    para.textContent = text;
    restaurantInfo.appendChild(para);
  });

  about.appendChild(restaurantInfo);

  return about;
};

export default About;
