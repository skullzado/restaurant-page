import './Footer.css';

const Footer = () => {
  const footer = document.createElement('footer');
  const copy = document.createElement('p');

  footer.classList.add('footer');
  copy.classList.add('footer__copy');

  copy.textContent = '© Paul Calzado';

  footer.appendChild(copy);

  return footer;
};

export default Footer;
