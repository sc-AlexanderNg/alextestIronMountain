$('[data-gated="true"] #gated-component-button').click(function () {
  const gatedComponent = document.querySelector('[data-gated="true"]');

  gatedComponent.hidden = true;

  $('#popup-form-overlay').show().attr('hidden', false);
});
