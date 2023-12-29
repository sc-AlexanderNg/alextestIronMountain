const hideBackToTop = () => {
  const button = document?.querySelector('.to-top-btn');

  if (button) button?.classList?.remove('active');
};

export default hideBackToTop;
