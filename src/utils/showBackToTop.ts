const showBackToTop = () => {
  const button = document?.querySelector('.to-top-btn');

  if (button) button?.classList?.add('active');
};

export default showBackToTop;
