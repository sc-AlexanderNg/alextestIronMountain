function initContactForm(){
console.log("Init ContactForm running");
$('form.elq-form').validate();

$('form.elq-form').on('submit', function (e) {
  if ($(this).find('input[name="C_Company"]').length) {
    var companyName = $(this)
      .find('input[name="C_Company"]')
      .val()
      .toLowerCase()
      .trim();
    var contactEmail = $(this)
      .find('input[name="C_EmailAddress"]')
      .val()
      .toLowerCase()
      .substring(
        $(this).find('input[name="C_EmailAddress"]').val().lastIndexOf('@') + 1
      );
  }

  let isValid = $(this).valid();

  if (isValid) {
    e.preventDefault();

    if (
      ($('select[name="C_Area_of_Interest1"]').val() == 'Data Centers' &&
        $('input[name="hubspotForm"]').val() == 'yes') ||
      ($('#hdnDC').val() == 'Data Centers' &&
        $('input[name="hubspotForm"]').val() == 'yes')
    ) {
      submitHubspotForm();
      console.log('Hubspot Form Submitted');
    } else if (companyName == 'google') {
      if (contactEmail == 'google.com') {
        $(this).find('input[name="C_EmailAddress"]').removeClass('error');
        submitEloquaForm($(this));
      } else {
        $(this).find('input[name="C_EmailAddress"]').addClass('error');
      }
    } else {
      $(this).find('input[name="C_EmailAddress"]').removeClass('error');
      submitEloquaForm($(this));
    }
  }

  return false;
});

/* Eloqua spam filtering */
if ($('#elqFormSubmissionToken').length) {
  var ea = $('.elq-form').attr('action').split('.');
  var eb = ea[0].split('//');

  var elSiteId = eb[1].replace(/^\D+/g, '');
  var elFormId = $('.elq-form').attr('id');
  document.onload = handleDocumentLoad(elFormId, elSiteId);

  function handleDocumentLoad(b, a) {
    getElqFormSubmissionToken(b, a);
    processLastFormField(b);
  }

  function getElqFormSubmissionToken(g, c) {
    var e = new XMLHttpRequest();
    var b = document.getElementById(g);
    if (b && b.elements.namedItem('elqFormSubmissionToken')) {
      var f = b.action;
      var a = getHostName(f);
      a = 'https://' + a + '/e/formsubmittoken?elqSiteID=' + c;
      if (a) {
        e.onreadystatechange = function () {
          if (e.readyState === 4) {
            if (e.status === 200) {
              b.elements.namedItem('elqFormSubmissionToken').value =
                e.responseText;
            } else {
              b.elements.namedItem('elqFormSubmissionToken').value = '';
            }
          }
        };
        e.open('GET', a, true);
        e.send();
      } else {
        b.elements.namedItem('elqFormSubmissionToken').value = '';
        console.log("Empty elqFormSubmissionToken");
      }
    }
  }

  function getHostName(b) {
    if (typeof window.URL === 'function') {
      return new window.URL(b).hostname;
    } else {
      var a = b.match(/:\/\/(www[0-9]?\.)?(.[^\/:]+)/i);
      if (
        a !== null &&
        a.length > 2 &&
        typeof a[2] === 'string' &&
        a[2].length > 0
      ) {
        return a[2];
      } else {
        return null;
      }
    }
  }

  function processLastFormField(formID) {
    var form = document.getElementById(formID);
    var lastFormField = form.querySelector('#elq-FormLastRow');
    lastFormField.style.display = 'none';
  }
}
/* Eloqua spam filtering ends */

/* UTM Starts*/
function e(e) {
  let hu = window.location.search.substring(1);
  let gy = hu.split('&');

  for (i = 0; i < gy.length; i++) {
    ft = gy[i].split('=');

    if (ft[0] == e) {
      return ft[1];
    }
  }
}

if (
  e('utm_campaign') != null &&
  document.querySelector('input[name="gACampaignMostRecent1"]') != null
) {
  document.getElementsByName('gACampaignMostRecent1')[0].value =
    e('utm_campaign');
}

if (
  e('utm_medium') != null &&
  document.querySelector('input[name="gAMediumMostRecent1"]') != null
) {
  document.getElementsByName('gAMediumMostRecent1')[0].value = e('utm_medium');
}

if (
  e('utm_source') != null &&
  document.querySelector('input[name="gASourceMostRecent1"]') != null
) {
  document.getElementsByName('gASourceMostRecent1')[0].value = e('utm_source');
}

if (
  e('utm_term') != null &&
  document.querySelector('input[name="gASearchTermMostRecent1"]') != null
) {
  document.getElementsByName('gASearchTermMostRecent1')[0].value =
    e('utm_term');
}
/* UTM Ends*/

/* AU NZ scripts */
if (
  document.documentElement.lang === 'en-au' ||
  document.documentElement.lang === 'en-nz'
) {

  let siteElqFormName = document.querySelector(
    'input[name="elqFormName"]'
  ).value;
  let siteElqSiteID = document.querySelector('input[name="elqSiteID"]').value;
  let siteAction = document.querySelector('.elq-form').getAttribute('action');

  document
    .querySelector('select[name="C_Country"]')
    .addEventListener('change', function () {
      if (
        this.value.toLowerCase() !== 'australia' &&
        this.value.toLowerCase() !== 'new zealand'
      ) {
        document
          .querySelector('.elq-form')
          .setAttribute(
            'action',
            document.querySelector('[name=USelqFormAction]').value
          );

        document
          .querySelector('.elq-form')
          .setAttribute(
            'name',
            document.querySelector('[name=USelqFormName]').value
          );

        document.querySelector('input[name=elqFormName]').value =
          document.querySelector('[name=USelqFormName]').value;

        document
          .querySelector('input[name="elqSiteID"]')
          ?.setAttribute('name', 'elqSiteId');

        document.querySelector('input[name="elqSiteId"]').value =
          document.querySelector('[name=USelqSiteID]').value;

        let element1 = document.createElement('input');

        element1.type = 'hidden';
        element1.name = 'elqCampaignId';
        element1.value = document.querySelector('[name=USelqCampaignId]').value;
        document.querySelector('.elq-form').appendChild(element1);
        handleDocumentLoad(
          'form100',
          document.querySelector('input[name="elqSiteId"]').value
        );
      } else {
        document.querySelector('.elq-form').setAttribute('action', siteAction);
        document
          .querySelector('.elq-form')
          .setAttribute('name', siteElqFormName);
        document.querySelector('input[name="elqFormName"]').value =
          siteElqFormName;

        document
          .querySelector('input[name="elqSiteId"]')
          ?.setAttribute('name', 'elqSiteID');

        document.querySelector('input[name="elqSiteID"]').value = siteElqSiteID;
        document.querySelector("input[name='elqCampaignId']")?.remove();
        handleDocumentLoad(
          'form100',
          document.querySelector('input[name="elqSiteID"]').value
        );
      }
    });
}
}
/* Eloqua Form Submission */
function submitEloquaForm(form) {
  $('input[type=submit]').attr('disabled', 'disabled');

  let action = form.attr('action');
  let type = form.attr('method');
  let currentURL = window.location.host + window.location.pathname;

  $("input[name='redirect']").val(currentURL);
  $("input[name='url']").val(currentURL);

  let successUrl = $('#successPage').val();

  /*if (assetTitle) {
    $("input[name='C_Most_Recent_Asset_Downloaded1']").val(assetTitle);
  }

  if (eloquaCampaignOverride) {
    $("input[name='elqCampaignId']").val(eloquaCampaignOverride);
  }

  if (htmlFormNameOverride) {
    $("input[name='elqFormName']").val(htmlFormNameOverride);
  }*/

  let formData = form.serialize();

  /*if (areaOfInterest) {
    formData += `&C_Area_of_Interest1=${areaOfInterest}`;
  }

  if (salesForceId) {
    formData += `&sFDCLastCampaignID=${salesForceId}`;
  }

  if (keyValuePairOverrides) {
    for (let key in keyValuePairOverrides) {
      if (keyValuePairOverrides.hasOwnProperty(key)) {
        formData += `&${key}=${keyValuePairOverrides[key]}`;
      }
    }
  }*/

  $.ajax({
    type,
    url: action,
    data: formData,
    success(data) {
      if (data) {
        if (successUrl) {
          window.location.href = successUrl;
        } else {
          $('#success-wrapper').show();
          $('#form-wrapper').hide();
        }
        /*if (formUnlocksPremiumContent) {
          premiumContentManager.unlockPremiumContent();
          eventManager.trigger('showStandardContent');
          $('.score-right .score-style-box.vertical-quote-box').show();
          $('.score-right .resource-thumbnail').delay(500).fadeIn(500);
          $('.premium-link').delay(500).fadeIn(500);
          window.dataLayer = window.dataLayer || [];
          dataLayer.push({
            event: 'formSubmission',
            formType: 'gated_form_submission',
          });
        } else {
          window.dataLayer = window.dataLayer || [];
          dataLayer.push({
            event: 'formSubmission',
            formType: 'contact_form_submission',
          });
        }*/
        // Success Actions are set up as follows:
        // enum SuccessAction {
        //     Hide = 0,
        //     ShowMessage = 1,
        //     Redirect = 2
        // }
        /*if (successAction === 0) {
          // hide
          $(scope).fadeOut(500);
        } else if (successAction === 1) {
          // show success message
          $(scope).prepend(
            `<div class='alert alert-success' role='alert'>${successMessage}</div>`
          );
          $('form', scope).hide();
        } else if (successAction === 2) {
          if (data.indexOf('location.href') > -1) {
            let eloquaResponseUrl = data
              .replace("<script type='text/javascript'>", ' ')
              .replace('</script>', ' ');

            eval(eloquaResponseUrl);
          } else {
            window.location.href = successUrl;
          }
        }*/
        window.dataLayer = window.dataLayer || [];
        dataLayer.push({
          event: 'formSubmission',
          formType: 'contact_form_submission',
        });
        console.log('Eloqua form submitted');
      }
    },
    error(xhr, error) {
      console.log(error);
    },
  }).done(() => {
    $('input[type=submit]').removeAttr('disabled');
  });
}
/* Eloqua Form Submission */

/* Hubspot Form Submission */
function submitHubspotForm() {
  //page name
  $('input[name="submitted_form_on_page"]').val(
    document.getElementsByTagName('title')[0].innerHTML
  );

  let successUrl = $('#successPage').val();

  // Create the new request
  let xhr = new XMLHttpRequest();
  let portalId = $('input[name="portalId"]').val();
  let formGuid = $('input[name="formGuid"]').val();
  let url = `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formGuid}`;

  let arr = $('[data-hs-name]')
    .map(function () {
      return {
        name: $(this).data('hs-name'),
        value: $(this).val(),
      };
    })
    .get();

  let data = {
    fields: arr,
    context: {
      hutk: document.cookie.replace(
        /(?:^|.*;\s*)hubspotutk\s*=\s*([^;]*).*$|^.*$/,
        '$1'
      ),
      pageUri: $(location).attr('href'),
      pageName: document.getElementsByTagName('title')[0].innerHTML,
    },
    skipValidation: true,
  };

  let final_data = JSON.stringify(data);

  console.log(final_data);

  xhr.open('POST', url);
  // Sets the value of the 'Content-Type' HTTP request headers to 'application/json'
  xhr.setRequestHeader('Content-Type', 'application/json');

  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      window.dataLayer = window.dataLayer || [];
      dataLayer.push({
        event: 'formSubmission',
        formType: 'contact_form_submission_imdc',
      });

      if (successUrl) {
        window.location.href = successUrl;
      } else {
        $('#success-wrapper').show();
        $('#form-wrapper').hide();
      }
    } else if (xhr.readyState == 4 && xhr.status == 400) {
      console.log(xhr.responseText); // Returns a 400 error the submission is rejected.
    } else if (xhr.readyState == 4 && xhr.status == 403) {
      console.log(xhr.responseText); // Returns a 403 error if the portal isn't allowed to post submissions.
    } else if (xhr.readyState == 4 && xhr.status == 404) {
      console.log(xhr.responseText); //Returns a 404 error if the formGuid isn't found
    }
  };
  // Sends the request

  xhr.send(final_data);
  console.log('Final submission');
}
/* Hubspot Form Submission */
