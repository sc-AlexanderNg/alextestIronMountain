import type { Meta, StoryObj } from '@storybook/react';
import HubspotForm from 'components/HubspotForm/HubspotForm';

const meta: Meta<typeof HubspotForm> = {
  title: 'Components/HubspotForm',
  component: HubspotForm,
  argTypes: {},
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/rOV6xOuNIa5Jd0RR06Sz8N/Iron-Mountain-Component-Library?type=design&node-id=437-190&t=ITAQpsrHUxw3ptrG-0',
    },
  },
};

export default meta;
type Story = StoryObj<typeof HubspotForm>;

const eloquaMarkup = `
<!-- begin form -->
<div class="contact-us-form" id="contact-us-form">
<form method="post" name="IMContactUsFormUK" action="https://s63835396.t.eloqua.com/e/f2" id="form100" class="elq-form" novalidate="novalidate">
    <div class="form-element select-wrapper">
    <select id="AreaOfInterest" name="C_Area_of_Interest1" data-rule-required="true" aria-required="true" data-msg-required="Please enter your Service of Interest">
    <option value="Area of Interest" selected="selected" disabled="disabled">Service of Interest</option>
    <option value="Data Centers" data-hs-value="Data Centers" data-referrers="/data-centers">Data Centers</option>
    <option value="Data Management" data-referrers="/services/iron-cloud-data-management">Data Management</option>
    <option value="Data Management" data-referrers="/services/iron-cloud-data-management/migration-and-restoration">Data Restoration and Migration</option>
    <option value="Document Imaging" data-referrers="/services/document-scanning-and-digital-storage">Document Imaging</option>
    <option value="Entertainment Services" data-referrers="/services/document-scanning-and-digital-storage">Entertainment Services</option>
    <option value="AI/ML Insights" data-referrers="/services/content-service-platform">Machine Learning Analytics Platform</option>
    <option value="Records Storage" data-referrers="/secure-storage/records-and-media">Records Storage</option>
    <option value="IT Asset Destruction" data-referrers="/services/secure-it-asset-disposition">IT Asset Destruction</option>
    <option value="Secure Shredding" data-referrers="/services/secure-shredding">Secure Shredding</option>
    </select>
    </div>
    <div class="form-element">
    <input id="firstname" placeholder="First Name" name="C_FirstName" data-hs-name="firstname" data-rule-required="true" aria-required="true" data-msg-required="Please enter your First Name" maxlength="100" type="text" />
    </div>
    <div class="form-element">
    <input id="lastname" placeholder="Last Name" name="C_LastName" data-hs-name="lastname" data-rule-required="true" aria-required="true" data-msg-required="Please enter your Last Name" maxlength="100" type="text" />
    </div>
    <div class="form-element">
    <input id="jobtitle" placeholder="Job Title" name="C_Title" data-hs-name="jobtitle" data-rule-required="true" aria-required="true" data-msg-required="Please enter your Job Title" maxlength="100" type="text" />
    </div>
    <div class="form-element">
    <input id="email" placeholder="Business Email" name="C_EmailAddress" data-hs-name="email" data-rule-required="true" data-rule-email="true" aria-required="true" data-msg-required="Please enter your Email Address" data-msg-email="A valid email address is required" maxlength="100" type="text" />
    </div>
    <div class="form-element">
    <input id="phone" placeholder="Business Phone Number" name="C_BusPhone" data-hs-name="phone" data-rule-required="true" aria-required="true" data-msg-required="Please enter your Phone Number" maxlength="100" type="text" />
    </div>
    <div class="form-element">
    <input id="company" placeholder="Company" name="C_Company" data-hs-name="company" data-rule-required="true" aria-required="true" data-msg-required="Please enter your Company" maxlength="100" type="text" />
    </div>
    <div class="form-element">
    <input id="zip" placeholder="Business Postcode" name="C_Zip_Postal" data-hs-name="zip" data-rule-required="true" aria-required="true" data-msg-required="Please enter your Postal Code" maxlength="100" type="text" />
    </div>
    <div class="form-element select-wrapper">
    <select id="country" name="C_Country" data-hs-name="country" data-rule-required="true" aria-required="true" data-msg-required="Please enter your Country">
    <option selected="selected" disabled="disabled">Country</option>
    <option value="United States">United States</option>
    <option value="United Kingdom">United Kingdom</option>
    <option value="Afghanistan">Afghanistan</option>
    <option value="Albania">Albania</option>
    <option value="Algeria">Algeria</option>
    <option value="American Samoa">American Samoa</option>
    <option value="Andorra">Andorra</option>
    <option value="Angola">Angola</option>
    <option value="Argentina">Argentina</option>
    <option value="Australia">Australia</option>
    <option value="Austria">Austria</option>
    <option value="Azerbaijan">Azerbaijan</option>
    <option value="Bahamas">Bahamas</option>
    <option value="Bahrain">Bahrain</option>
    <option value="Bangladesh">Bangladesh</option>
    <option value="Belgium">Belgium</option>
    <option value="Belize">Belize</option>
    <option value="Benin">Benin</option>
    <option value="Bhutan">Bhutan</option>
    <option value="Bolivia">Bolivia</option>
    <option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option>
    <option value="Botswana">Botswana</option>
    <option value="Brazil">Brazil</option>
    <option value="Brunei">Brunei</option>
    <option value="Bulgaria">Bulgaria</option>
    <option value="Burkina Faso">Burkina Faso</option>
    <option value="Burundi">Burundi</option>
    <option value="Cambodia">Cambodia</option>
    <option value="Cameroon">Cameroon</option>
    <option value="Canada">Canada</option>
    <option value="Cayman Islands">Cayman Islands</option>
    <option value="Central African Republic">Central African Republic</option>
    <option value="Chad">Chad</option>
    <option value="Chile">Chile</option>
    <option value="China">China Mainland</option>
    <option value="Macau">China - Macau SAR</option>
    <option value="Hong Kong">China - Hong Kong SAR</option>
    <option value="Colombia">Colombia</option>
    <option value="Costa Rica">Costa Rica</option>
    <option value="Croatia">Croatia</option>
    <option value="Cyprus">Cyprus</option>
    <option value="Czech Republic">Czech Republic</option>
    <option value="Democratic Republic of the Congo">Democratic Republic of the Congo</option>
    <option value="Denmark">Denmark</option>
    <option value="Djibouti">Djibouti</option>
    <option value="Dominica">Dominica</option>
    <option value="Dominican Republic">Dominican Republic</option>
    <option value="East Timor">East Timor</option>
    <option value="Ecuador">Ecuador</option>
    <option value="Egypt">Egypt</option>
    <option value="El Salvador">El Salvador</option>
    <option value="Equatorial Guinea">Equatorial Guinea</option>
    <option value="Eritrea">Eritrea</option>
    <option value="Estonia">Estonia</option>
    <option value="Eswatini">Eswatini</option>
    <option value="Ethiopia">Ethiopia</option>
    <option value="Fiji">Fiji</option>
    <option value="Finland">Finland</option>
    <option value="France">France</option>
    <option value="Gabon">Gabon</option>
    <option value="Gambia">Gambia</option>
    <option value="Georgia">Georgia</option>
    <option value="Germany">Germany</option>
    <option value="Ghana">Ghana</option>
    <option value="Gibraltar">Gibraltar</option>
    <option value="Greece">Greece</option>
    <option value="Greenland">Greenland</option>
    <option value="Guatemala">Guatemala</option>
    <option value="Guinea">Guinea</option>
    <option value="Guinea Bissau">Guinea Bissau</option>
    <option value="Guyana">Guyana</option>
    <option value="Guyana (Fr.)">Guyana (Fr.)</option>
    <option value="Haiti">Haiti</option>
    <option value="Honduras">Honduras</option>
    <option value="Hungary">Hungary</option>
    <option value="Iceland">Iceland</option>
    <option value="India">India</option>
    <option value="Indonesia">Indonesia</option>
    <option value="Iraq">Iraq</option>
    <option value="Ireland">Ireland</option>
    <option value="Israel">Israel</option>
    <option value="Italy">Italy</option>
    <option value="Ivory Coast">Ivory Coast</option>
    <option value="Jamaica">Jamaica</option>
    <option value="Japan">Japan</option>
    <option value="Jordan">Jordan</option>
    <option value="Kenya">Kenya</option>
    <option value="Kuwait">Kuwait</option>
    <option value="Kyrgyz Republic">Kyrgyz Republic</option>
    <option value="Laos">Laos</option>
    <option value="Latvia">Latvia</option>
    <option value="Lebanon">Lebanon</option>
    <option value="Lesotho">Lesotho</option>
    <option value="Liberia">Liberia</option>
    <option value="Libya">Libya</option>
    <option value="Liechtenstein">Liechtenstein</option>
    <option value="Lithuania">Lithuania</option>
    <option value="Luxembourg">Luxembourg</option>
    <option value="Madagascar">Madagascar</option>
    <option value="Malawi">Malawi</option>
    <option value="Malaysia">Malaysia</option>
    <option value="Mali">Mali</option>
    <option value="Malta">Malta</option>
    <option value="Mauritania">Mauritania</option>
    <option value="Mauritius">Mauritius</option>
    <option value="Mexico">Mexico</option>
    <option value="Moldova">Moldova</option>
    <option value="Monaco">Monaco</option>
    <option value="Mongolia">Mongolia</option>
    <option value="Montenegro">Montenegro</option>
    <option value="Morocco">Morocco</option>
    <option value="Mozambique">Mozambique</option>
    <option value="Myanmar">Myanmar</option>
    <option value="Namibia">Namibia</option>
    <option value="Nepal">Nepal</option>
    <option value="Netherland Antilles">Netherland Antilles</option>
    <option value="Netherlands">Netherlands</option>
    <option value="New Caledonia Fr.">New Caledonia Fr.</option>
    <option value="New Zealand">New Zealand</option>
    <option value="Nicaragua">Nicaragua</option>
    <option value="Niger">Niger</option>
    <option value="Nigeria">Nigeria</option>
    <option value="North Macedonia">North Macedonia</option>
    <option value="Norway">Norway</option>
    <option value="Oman">Oman</option>
    <option value="Pakistan">Pakistan</option>
    <option value="Panama">Panama</option>
    <option value="Papua New Guinea">Papua New Guinea</option>
    <option value="Paraguay">Paraguay</option>
    <option value="Peru">Peru</option>
    <option value="Philippines">Philippines</option>
    <option value="Poland">Poland</option>
    <option value="Portugal">Portugal</option>
    <option value="Puerto Rico">Puerto Rico</option>
    <option value="Qatar">Qatar</option>
    <option value="Republic of Korea">Republic of Korea</option>
    <option value="Republic of the Congo">Republic of the Congo</option>
    <option value="Romania">Romania</option>
    <option value="Rwanda">Rwanda</option>
    <option value="San Marino">San Marino</option>
    <option value="Saudi Arabia">Saudi Arabia</option>
    <option value="Senegal">Senegal</option>
    <option value="Serbia">Serbia</option>
    <option value="Sierra Leone">Sierra Leone</option>
    <option value="Singapore">Singapore</option>
    <option value="Slovakia (Slovak Republic)">Slovakia (Slovak Republic)</option>
    <option value="Slovenia">Slovenia</option>
    <option value="Somalia">Somalia</option>
    <option value="South Africa">South Africa</option>
    <option value="South Sudan">South Sudan</option>
    <option value="Spain">Spain</option>
    <option value="Sri Lanka">Sri Lanka</option>
    <option value="St. Kitts Nevis Anguilla">St. Kitts Nevis Anguilla</option>
    <option value="Sudan">Sudan</option>
    <option value="Suriname">Suriname</option>
    <option value="Sweden">Sweden</option>
    <option value="Switzerland">Switzerland</option>
    <option value="Tadjikistan">Tadjikistan</option>
    <option value="Taiwan">Taiwan</option>
    <option value="Tanzania">Tanzania</option>
    <option value="Thailand">Thailand</option>
    <option value="Togo">Togo</option>
    <option value="Trinidad and Tobago">Trinidad and Tobago</option>
    <option value="Tunisia">Tunisia</option>
    <option value="Turkey">Turkey</option>
    <option value="Turkmenistan">Turkmenistan</option>
    <option value="Uganda">Uganda</option>
    <option value="Ukraine">Ukraine</option>
    <option value="United Arab Emirates">United Arab Emirates</option>
    <option value="Uruguay">Uruguay</option>
    <option value="US Minor Outlying Islands">US Minor Outlying Islands</option>
    <option value="Uzbekistan">Uzbekistan</option>
    <option value="Vatican City State">Vatican City State</option>
    <option value="Vietnam">Vietnam</option>
    <option value="Yemen">Yemen</option>
    <option value="Zambia">Zambia</option>
    <option value="Zimbabwe">Zimbabwe</option>
    </select>
    </div>
    <div class="form-element">
    <!-- &#10 work for most browsers as a newline inside placeholder, but not all -->
    <textarea id="message" placeholder="Comments" name="Comments" data-hs-name="message" type="text" class="valid full-width" aria-invalid="false" maxlength="500"></textarea>
    </div>
    <div class="form-element">
    <fieldset class="checkbox full-width">
    <input name="sales" id="sales" value="1" type="checkbox">
    <label for="sales">Please have a sales associate contact me.</label>
    </fieldset>
    </div>
    <div style="display: none;">
    <input value="IMContactUsFormUK" name="elqFormName" type="hidden" />
    <input value="63835396" name="elqSiteId" type="hidden" />
    <input value="54" name="elqCampaignId" type="hidden" />
    <input name="formvalidation" type="hidden" />
    <input data-hs-name="utm_campaign_mr" name="gACampaignMostRecent1"  type="hidden"/>
    <input data-hs-name="utm_medium_mr" name="gAMediumMostRecent1" type="hidden"/>
    <input data-hs-name="utm_source_mr" name="gASourceMostRecent1" type="hidden"/>
    <input data-hs-name="utm_term_mr" name="gASearchTermMostRecent1" type="hidden"/>
    <input data-hs-name="utm_campaign" name="gACampaignOriginal" id="gACampaignOriginal" type="hidden" />
    <input data-hs-name="utm_medium" name="gAMediumOriginal" id="gAMediumOriginal" type="hidden" />
    <input data-hs-name="utm_source" name="gASourceOriginal" id="gASourceOriginal" type="hidden" />
    <input name="hubspotForm" type="hidden" value="yes" />
    <input name="portalId" type="hidden" value="8430964" />
    <input name="formGuid" type="hidden" value="a41817ee-d5ff-4fad-a75b-7fcb0c259fd7" />
    <input value="" type="hidden" id="elqFormSubmissionToken" name="elqFormSubmissionToken">
    </div>
    <div class="form-element select-wrapper">
    <select name="C_Contact_via_Email1" data-hs-name="linkedin_consent_checkbox_i_consent_to_receive_email_offers_of_products_and_services_from_iron_moun" class="required full-width" id="C_Contact_via_Email1" aria-required="true">
    <option disabled="disabled" selected="selected" value="Consent to Email">Do we have your consent to email you?</option>
    <option value="Yes" title="Yes">Yes, I consent to receive email offers of products and services from Iron Mountain</option>
    <option value="No" title="No">No, you may not email me</option>
    </select>
    </div>
    <div class="form-element">
    <p class="full-width">By submitting this form I agree that Iron Mountain may process my data in the manner described in Iron Mountain's <a href="~/link.aspx?_id=CFCCC98F834F4832BF19E619CF42C1DF&amp;_z=z">Privacy Notice</a>.  If you agreed to receive marketing emails but subsequently change your mind, you may <a rel="noopener noreferrer" href="http://www.ironmountain.com/Utility/Forms/Opt-Out-Form.aspx" target="_blank">opt out</a> at any time here.</p>
    </div>
    <div class="form-element submit">
    <input value="Contact Us" class="submit-button btn score-button" type="submit" />
    </div>
  </form>
</div>

<script>
window.onload=function(){function e(e){hu=window.location.search.substring(1);gy=hu.split("&amp;");for(i=0;i&lt;gy.length;i++){ft=gy[i].split("=");if(ft[0]==e){return ft[1]}}}
if(e("utm_campaign")!=null){document.getElementsByName("gACampaignMostRecent1")[0].value =e("utm_campaign")}
if(e("utm_medium")!=null){document.getElementsByName("gAMediumMostRecent1")[0].value=e("utm_medium")}
if(e("utm_source")!=null){document.getElementsByName("gASourceMostRecent1")[0].value=e("utm_source")}
if(e("utm_term")!=null){document.getElementsByName("gASearchTermMostRecent1")[0].value=e("utm_term")}
}
</script>

<!-- end form -->
`;

const successMarkup = `
<h2>Thank you for reaching out</h2>
<p> You should get a response within one business day</p>
`;

export const WithMountainsBackground: Story = {
  args: {
    rendering: {
      componentName: 'HubspotForm',
      dataSource: 'HubspotForm',
    },
    params: {
      Theme: '{"Value":{"value":"background-image-overlay"}}',
      DynamicPlaceholderId: '3',
    },
    fields: {
      BackgroundImage: {
        value: {
          src: 'https://picsum.photos/1440/528',
          alt: 'Mountains Background',
        },
      },
      Title: {
        value: 'We make it easy to get started',
      },
      Region: {
        value: 'na1',
      },
      PortalId: {
        value: '8430964',
      },
      FormId: {
        value: 'ddd37d0c-8c28-47ae-873a-75fbb9de7085',
      },
      FormHTML: {
        value: eloquaMarkup,
      },
      SuccessMessage: {
        value: successMarkup,
      },
      SuccessPage: {
        value: {
          href: '/contact/contact-form/thank-you',
        },
      },
    },
  },
};

export const WithDarkBlueBackground: Story = {
  args: {
    rendering: {
      componentName: 'HubspotForm',
      dataSource: 'HubspotForm',
    },
    params: {
      Theme: '{"Value":{"value":"dark-blue"}}',
      DynamicPlaceholderId: '3',
    },
    fields: {
      Title: {
        value: 'We make it easy to get started',
      },
      Region: {
        value: 'na1',
      },
      PortalId: {
        value: '8430964',
      },
      FormId: {
        value: 'ddd37d0c-8c28-47ae-873a-75fbb9de7085',
      },
      FormHTML: {
        value: eloquaMarkup,
      },
      SuccessMessage: {
        value: successMarkup,
      },
      SuccessPage: {
        value: {
          href: '/contact/contact-form/thank-you',
        },
      },
    },
  },
};

export const WithLightBackground: Story = {
  args: {
    rendering: {
      componentName: 'HubspotForm',
      dataSource: 'HubspotForm',
    },
    params: {
      Theme: '{"Value":{"value":"light"}}',
      DynamicPlaceholderId: '3',
    },
    fields: {
      Title: {
        value: 'We make it easy to get started',
      },
      Region: {
        value: 'na1',
      },
      PortalId: {
        value: '8430964',
      },
      FormId: {
        value: 'ddd37d0c-8c28-47ae-873a-75fbb9de7085',
      },
      FormHTML: {
        value: eloquaMarkup,
      },
      SuccessMessage: {
        value: successMarkup,
      },
      SuccessPage: {
        value: {
          href: '/contact/contact-form/thank-you',
        },
      },
    },
  },
};
