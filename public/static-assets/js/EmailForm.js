function initEmailForm(){
    if (
      $('#EmailUsForm').closest('*[data-ux-args]') != null &&
      $('#EmailUsForm').closest('*[data-ux-args]').attr('data-ux-args') != null
    ) {
      var jsonObject = $.parseJSON(
        $('#EmailUsForm').closest('*[data-ux-args]').attr('data-ux-args')
      );
  
      setCookie(
        'SuccessActionCookie',
        $('#EmailUsForm').closest('*[data-ux-args]').attr('data-ux-args'),
        1
      );
    } else if (
      getCookie('SuccessActionCookie') != null &&
      getCookie('SuccessActionCookie') != ''
    ) {
      var jsonObject = $.parseJSON(getCookie('SuccessActionCookie'));
    }
  
    $('.submit-emailform').on('click', function () {
      $('input[name=Page_URL]').remove();
      $('<input>')
        .attr('type', 'hidden')
        .attr('name', 'Page_URL')
        .attr('value', window.location.href)
        .appendTo('form');
      let customValidator = $('#EmailUsForm').validate();
  
      if ($('#EmailUsForm').valid()) {
        $(this).attr('disabled', 'disabled');
  
        let fields = $(
          '#EmailUsForm input:not([type=submit], [type=radio], [type=checkbox], [name^=db_], [name^=zip]), #EmailUsForm textarea, #EmailUsForm select, #EmailUsForm input:radio:checked, #EmailUsForm input:checkbox:checked'
        ).serializeArray();
  
        let jsonString = JSON.stringify(fields);
  
        /*let successAction = 1;
        let successMessage = '';
        let successUrl = window.location.href;
  
        if (jsonObject != null) {
          successAction = jsonObject.SuccessAction;
          successMessage = jsonObject.SuccessMessage;
          successUrl = jsonObject.SuccessUrl;
        }
  
        if (
          $('[name=hdnSuccessPage]') != null &&
          $('[name=hdnSuccessPage]').val() != null &&
          $('[name=hdnSuccessPage]').val() != ''
        ) {
          successAction = 2;
          successUrl = $('[name=hdnSuccessPage]').val();
        } else if (
          $('[name=hdnSuccessMessage]') != null &&
          $('[name=hdnSuccessMessage]').val() != null &&
          $('[name=hdnSuccessMessage]').val() != ''
        ) {
          successAction = 1;
          successMessage = $('[name=hdnSuccessMessage]').val();
        }*/
  
        $.ajax({
          type: 'POST',
          url: 'https://www.prism.com.my/admin/redesignemailservice.aspx',
          contentType: 'application/json; charset=utf-8',
          datatype: 'json',
          data: jsonString,
          complete(response) {
          $('#success-wrapper').show();
          $('#form-wrapper').hide();
            console.log('Email Form submitted successfully');
          },
        });
      } else {
        customValidator.focusInvalid();
  
        return false;
      }
    });
}

function setCookie(cname, cvalue, exdays) {
  let d = new Date();

  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  let expires = `expires=${d.toGMTString()}`;

  document.cookie = `${cname}=${cvalue};`;
}

function getCookie(cname) {
  let name = `${cname}=`;
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');

  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];

    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }

    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }

  return '';
}
