import type { Meta, StoryObj } from '@storybook/react';
import ContactForm from 'components/ContactForm/ContactForm';

const meta: Meta<typeof ContactForm> = {
  title: 'Components/ContactForm',
  component: ContactForm,
  argTypes: {},
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/rOV6xOuNIa5Jd0RR06Sz8N/Iron-Mountain-Component-Library?type=design&node-id=437-190&t=ITAQpsrHUxw3ptrG-0',
    },
  },
};

export default meta;
type Story = StoryObj<typeof ContactForm>;

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

const hubspotDataCentersMarkup = `
<div class="contact-us-form" id="contact-us-form">
<div id="hubSpotFormContainer" class="hbspt-form" data-hs-forms-root="true">
<form id="hsForm_ddd37d0c-8c28-47ae-873a-75fbb9de7085" method="POST" accept-charset="UTF-8" enctype="multipart/form-data" novalidate="" action="https://forms.hsforms.com/submissions/v3/public/submit/formsnext/multipart/8430964/ddd37d0c-8c28-47ae-873a-75fbb9de7085" class="hs-form-private hsForm_ddd37d0c-8c28-47ae-873a-75fbb9de7085 hs-form-ddd37d0c-8c28-47ae-873a-75fbb9de7085 hs-form-ddd37d0c-8c28-47ae-873a-75fbb9de7085_1b73f66b-e869-4ae1-9ae6-6e35677ea974 hs-form stacked" target="target_iframe_ddd37d0c-8c28-47ae-873a-75fbb9de7085" data-instance-id="1b73f66b-e869-4ae1-9ae6-6e35677ea974" data-form-id="ddd37d0c-8c28-47ae-873a-75fbb9de7085" data-portal-id="8430964">
  <fieldset class="form-columns-0"><div class="hs-richtext hs-main-font-element"><h2 style="font-size: 24px;">WANT TO LEARN MORE? CONTACT A DATA CENTER TEAM MEMBER TODAY!</h2></div></fieldset>
  <fieldset class="form-columns-2"><div class="hs_firstname hs-firstname hs-fieldtype-text field hs-form-field"><label id="label-firstname-ddd37d0c-8c28-47ae-873a-75fbb9de7085" class="" placeholder="Enter your " for="firstname-ddd37d0c-8c28-47ae-873a-75fbb9de7085"><span></span></label><legend class="hs-field-desc" style="display: none;"></legend><div class="input"><input id="firstname-ddd37d0c-8c28-47ae-873a-75fbb9de7085" name="firstname" required="" placeholder="First Name*" type="text" class="hs-input" inputmode="text" autocomplete="given-name" value=""><div data-lastpass-icon-root="true" style="position: relative !important; height: 0px !important; width: 0px !important; float: left !important;"></div></div></div><div class="hs_lastname hs-lastname hs-fieldtype-text field hs-form-field"><label id="label-lastname-ddd37d0c-8c28-47ae-873a-75fbb9de7085" class="" placeholder="Enter your " for="lastname-ddd37d0c-8c28-47ae-873a-75fbb9de7085"><span></span></label><legend class="hs-field-desc" style="display: none;"></legend><div class="input"><input id="lastname-ddd37d0c-8c28-47ae-873a-75fbb9de7085" name="lastname" required="" placeholder="Last Name*" type="text" class="hs-input" inputmode="text" autocomplete="family-name" value=""></div></div></fieldset>
  <fieldset class="form-columns-2"><div class="hs_email hs-email hs-fieldtype-text field hs-form-field"><label id="label-email-ddd37d0c-8c28-47ae-873a-75fbb9de7085" class="" placeholder="Enter your " for="email-ddd37d0c-8c28-47ae-873a-75fbb9de7085"><span></span></label><legend class="hs-field-desc" style="display: none;"></legend><div class="input"><input id="email-ddd37d0c-8c28-47ae-873a-75fbb9de7085" name="email" required="" placeholder="Email Address*" type="email" class="hs-input" inputmode="email" autocomplete="email" value=""></div></div><div class="hs_company hs-company hs-fieldtype-text field hs-form-field"><label id="label-company-ddd37d0c-8c28-47ae-873a-75fbb9de7085" class="" placeholder="Enter your " for="company-ddd37d0c-8c28-47ae-873a-75fbb9de7085"><span></span></label><legend class="hs-field-desc" style="display: none;"></legend><div class="input"><input id="company-ddd37d0c-8c28-47ae-873a-75fbb9de7085" name="company" required="" placeholder="Company*" type="text" class="hs-input" inputmode="text" autocomplete="organization" value=""></div></div></fieldset>
  <fieldset class="form-columns-1"><div class="hs_country hs-country hs-fieldtype-select field hs-form-field"><label id="label-country-ddd37d0c-8c28-47ae-873a-75fbb9de7085" class="" placeholder="Enter your " for="country-ddd37d0c-8c28-47ae-873a-75fbb9de7085"><span></span></label><legend class="hs-field-desc" style="display: none;"></legend><div class="input"><select id="country-ddd37d0c-8c28-47ae-873a-75fbb9de7085" required="" class="hs-input" name="country"><option disabled="" value="">Please Select*</option><option value="United States">United States</option><option value="United Kingdom">United Kingdom</option><option value="Netherlands">Netherlands</option><option value="Germany">Germany</option><option value="Spain">Spain</option><option value="Singapore">Singapore</option><option value="India">India</option><option value="Afghanistan">Afghanistan</option><option value="Åland Islands">Aland Islands</option><option value="Albania">Albania</option><option value="Algeria">Algeria</option><option value="American Samoa">American Samoa</option><option value="Andorra">Andorra</option><option value="Angola">Angola</option><option value="Anguilla">Anguilla</option><option value="Antarctica">Antarctica</option><option value="Antigua and Barbuda">Antigua and Barbuda</option><option value="Argentina">Argentina</option><option value="Armenia">Armenia</option><option value="Aruba">Aruba</option><option value="Australia">Australia</option><option value="Austria">Austria</option><option value="Azerbaijan">Azerbaijan</option><option value="Bahamas">Bahamas</option><option value="Bahrain">Bahrain</option><option value="Bangladesh">Bangladesh</option><option value="Barbados">Barbados</option><option value="Belarus">Belarus</option><option value="Belgium">Belgium</option><option value="Belize">Belize</option><option value="Benin">Benin</option><option value="Bermuda">Bermuda</option><option value="Bhutan">Bhutan</option><option value="Bolivia">Bolivia, Purinational state of</option><option value="Caribbean Netherlands">Bonaire, Sint Eustatius and Saba</option><option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option><option value="Botswana">Botswana</option><option value="Bouvet Island">Bouvet Island</option><option value="Brazil">Brazil</option><option value="British Indian Ocean Territory">British Indian Ocean Territory</option><option value="British Virgin Islands">Virgin Islands, British</option><option value="Brunei">Brunei Darussalam</option><option value="Bulgaria">Bulgaria</option><option value="Burkina Faso">Burkina Faso</option><option value="Burundi">Burundi</option><option value="Cambodia">Cambodia</option><option value="Cameroon">Cameroon</option><option value="Canada">Canada</option><option value="Cape Verde">Cape Verde</option><option value="Cayman Islands">Cayman Islands</option><option value="Central African Republic">Central African Republic</option><option value="Chad">Chad</option><option value="Chile">Chile</option><option value="China">China</option><option value="Christmas Island">Christmas Island</option><option value="Cocos (Keeling) Islands">Cocos (Keeling) Islands</option><option value="Colombia">Colombia</option><option value="Comoros">Comoros</option><option value="Congo">Congo</option><option value="Democratic Republic of the Congo">Congo, the Democratic Republic of the</option><option value="Cook Islands">Cook Islands</option><option value="Costa Rica">Costa Rica</option><option value="Cote d'Ivoire">Cote d'Ivoire</option><option value="Croatia">Croatia</option><option value="Cuba">Cuba</option><option value="Curaçao">Curaçao</option><option value="Cyprus">Cyprus</option><option value="Czechia">Czechia</option><option value="Denmark">Denmark</option><option value="Djibouti">Djibouti</option><option value="Dominica">Dominica</option><option value="Dominican Republic">Dominican Republic</option><option value="East Timor">Timor-Leste</option><option value="Ecuador">Ecuador</option><option value="Egypt">Egypt</option><option value="El Salvador">El Salvador</option><option value="Equatorial Guinea">Equatorial Guinea</option><option value="Eritrea">Eritrea</option><option value="Estonia">Estonia</option><option value="Ethiopia">Ethiopia</option><option value="Falkland Islands">Falkland Islands (Malvinas)</option><option value="Faroe Islands">Faroe Islands</option><option value="Fiji">Fiji</option><option value="Finland">Finland</option><option value="France">France</option><option value="French Guiana">French Guiana</option><option value="French Polynesia">French Polynesia</option><option value="French Southern and Antarctic Lands">French Southern Territories</option><option value="Gabon">Gabon</option><option value="Gambia">Gambia</option><option value="Georgia">Georgia</option><option value="Ghana">Ghana</option><option value="Gibraltar">Gibraltar</option><option value="Greece">Greece</option><option value="Greenland">Greenland</option><option value="Grenada">Grenada</option><option value="Guadeloupe">Guadeloupe</option><option value="Guam">Guam</option><option value="Guatemala">Guatemala</option><option value="Guernsey">Guernsey</option><option value="Guinea">Guinea</option><option value="Guinea-Bissau">Guinea-Bissau</option><option value="Guyana">Guyana</option><option value="Haiti">Haiti</option><option value="Heard Island and McDonald Islands">Heard Island and McDonald Islands</option><option value="Honduras">Honduras</option><option value="Hong Kong">Hong Kong</option><option value="Hungary">Hungary</option><option value="Iceland">Iceland</option><option value="Indonesia">Indonesia</option><option value="Iran">Iran, Islamic Republic of</option><option value="Iraq">Iraq</option><option value="Ireland">Ireland</option><option value="Isle of Man">Isle of Man</option><option value="Israel">Israel</option><option value="Italy">Italy</option><option value="Jamaica">Jamaica</option><option value="Japan">Japan</option><option value="Jersey">Jersey</option><option value="Jordan">Jordan</option><option value="Kazakhstan">Kazakhstan</option><option value="Kenya">Kenya</option><option value="Kiribati">Kiribati</option><option value="Kuwait">Kuwait</option><option value="Kyrgyzstan">Kyrgyzstan</option><option value="Laos">Lao People's Democratic Republic</option><option value="Latvia">Latvia</option><option value="Lebanon">Lebanon</option><option value="Lesotho">Lesotho</option><option value="Liberia">Liberia</option><option value="Libya">Libyan Arab Jamahiriya</option><option value="Liechtenstein">Liechtenstein</option><option value="Lithuania">Lithuania</option><option value="Luxembourg">Luxembourg</option><option value="Macau">Macao</option><option value="Macedonia (FYROM)">Macedonia, the former Yugoslav Republic of</option><option value="Madagascar">Madagascar</option><option value="Malawi">Malawi</option><option value="Malaysia">Malaysia</option><option value="Maldives">Maldives</option><option value="Mali">Mali</option><option value="Malta">Malta</option><option value="Marshall Islands">Marshall Islands</option><option value="Martinique">Martinique</option><option value="Mauritania">Mauritania</option><option value="Mauritius">Mauritius</option><option value="Mayotte">Mayotte</option><option value="Mexico">Mexico</option><option value="Micronesia">Micronesia</option><option value="Moldova">Moldova, Republic of</option><option value="Monaco">Monaco</option><option value="Mongolia">Mongolia</option><option value="Montenegro">Montenegro</option><option value="Montserrat">Montserrat</option><option value="Morocco">Morocco</option><option value="Mozambique">Mozambique</option><option value="Myanmar (Burma)">Myanmar</option><option value="Namibia">Namibia</option><option value="Nauru">Nauru</option><option value="Nepal">Nepal</option><option value="Netherlands Antilles">Netherlands Antilles</option><option value="New Caledonia">New Caledonia</option><option value="New Zealand">New Zealand</option><option value="Nicaragua">Nicaragua</option><option value="Niger">Niger</option><option value="Nigeria">Nigeria</option><option value="Niue">Niue</option><option value="Norfolk Island">Norfolk Island</option><option value="North Korea">Korea, Democratic People's Republic of</option><option value="Northern Mariana Islands">Northern Mariana Islands</option><option value="Norway">Norway</option><option value="Oman">Oman</option><option value="Pakistan">Pakistan</option><option value="Palau">Palau</option><option value="Palestine">Palestinian Territory, Occupied</option><option value="Panama">Panama</option><option value="Papua New Guinea">Papua New Guinea</option><option value="Paraguay">Paraguay</option><option value="Peru">Peru</option><option value="Philippines">Philippines</option><option value="Pitcairn Islands">Pitcairn</option><option value="Poland">Poland</option><option value="Portugal">Portugal</option><option value="Puerto Rico">Puerto Rico</option><option value="Qatar">Qatar</option><option value="Réunion">Reunion</option><option value="Romania">Romania</option><option value="Russia">Russian Federation</option><option value="Rwanda">Rwanda</option><option value="Saint Barthélemy">Saint Barthélemy</option><option value="Saint Helena">Saint Helena, Ascension and Tristan da Cunha</option><option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option><option value="Saint Lucia">Saint Lucia</option><option value="Saint Martin">Saint Martin (French part)</option><option value="Saint Pierre and Miquelon">Saint Pierre and Miquelon</option><option value="Saint Vincent and the Grenadines">Saint Vincent and the Grenadines</option><option value="Samoa">Samoa</option><option value="San Marino">San Marino</option><option value="Sao Tome and Principe">Sao Tome and Principe</option><option value="Saudi Arabia">Saudi Arabia</option><option value="Senegal">Senegal</option><option value="Serbia">Serbia</option><option value="Seychelles">Seychelles</option><option value="Sierra Leone">Sierra Leone</option><option value="Sint Maarten">Sint Maarten (Dutch part)</option><option value="Slovakia">Slovakia</option><option value="Slovenia">Slovenia</option><option value="Solomon Islands">Solomon Islands</option><option value="Somalia">Somalia</option><option value="South Africa">South Africa</option><option value="South Georgia and the South Sandwich Islands">South Georgia and the South Sandwich Islands</option><option value="South Korea">Korea, Republic of</option><option value="South Sudan">South Sudan</option><option value="Sri Lanka">Sri Lanka</option><option value="Sudan">Sudan</option><option value="Suriname">Suriname</option><option value="Svalbard and Jan Mayen">Svalbard and Jan Mayen</option><option value="Swaziland">Swaziland</option><option value="Sweden">Sweden</option><option value="Switzerland">Switzerland</option><option value="Syria">Syrian Arab Republic</option><option value="Taiwan">Taiwan</option><option value="Tajikistan">Tajikistan</option><option value="Tanzania">Tanzania, United Republic of</option><option value="Thailand">Thailand</option><option value="Togo">Togo</option><option value="Tokelau">Tokelau</option><option value="Tonga">Tonga</option><option value="Trinidad and Tobago">Trinidad and Tobago</option><option value="Tunisia">Tunisia</option><option value="Turkey">Turkey</option><option value="Turkmenistan">Turkmenistan</option><option value="Turks and Caicos Islands">Turks and Caicos Islands</option><option value="Tuvalu">Tuvalu</option><option value="U.S. Virgin Islands">U.S. Virgin Islands</option><option value="Uganda">Uganda</option><option value="Ukraine">Ukraine</option><option value="United Arab Emirates">United Arab Emirates</option><option value="United States Minor Outlying Islands">United States Minor Outlying Islands</option><option value="Uruguay">Uruguay</option><option value="Uzbekistan">Uzbekistan</option><option value="Vanuatu">Vanuatu</option><option value="Vatican City">Holy See (Vatican City State)</option><option value="Venezuela">Venezuela, Bolivarian Republic of</option><option value="Viet Nam">Viet Nam</option><option value="Wallis and Futuna">Wallis and Futuna</option><option value="Western Sahara">Western Sahara</option><option value="Yemen">Yemen</option><option value="Zambia">Zambia</option><option value="Zimbabwe">Zimbabwe</option><option value="Vietnam">Vietnam</option></select></div></div></fieldset>
  <fieldset class="form-columns-1"><div class="hs_submitted_form_on_page hs-submitted_form_on_page hs-fieldtype-text field hs-form-field" style="display: none;"><label id="label-submitted_form_on_page-ddd37d0c-8c28-47ae-873a-75fbb9de7085" class="" placeholder="Enter your Submitted Form On Page" for="submitted_form_on_page-ddd37d0c-8c28-47ae-873a-75fbb9de7085"><span>Submitted Form On Page</span></label><legend class="hs-field-desc" style="display: none;"></legend><div class="input"><input name="submitted_form_on_page" class="hs-input" type="hidden" value=""></div></div></fieldset>
  <fieldset class="form-columns-1"><div class="hs_utm_campaign_mr hs-utm_campaign_mr hs-fieldtype-text field hs-form-field" style="display: none;"><label id="label-utm_campaign_mr-ddd37d0c-8c28-47ae-873a-75fbb9de7085" class="" placeholder="Enter your utm_campaign_most_recent" for="utm_campaign_mr-ddd37d0c-8c28-47ae-873a-75fbb9de7085"><span>utm_campaign_most_recent</span></label><legend class="hs-field-desc" style="display: none;"></legend><div class="input"><input name="utm_campaign_mr" class="hs-input" type="hidden" value=""></div></div></fieldset>
  <fieldset class="form-columns-1"><div class="hs_utm_source_mr hs-utm_source_mr hs-fieldtype-text field hs-form-field" style="display: none;"><label id="label-utm_source_mr-ddd37d0c-8c28-47ae-873a-75fbb9de7085" class="" placeholder="Enter your utm_source_most_recent" for="utm_source_mr-ddd37d0c-8c28-47ae-873a-75fbb9de7085"><span>utm_source_most_recent</span></label><legend class="hs-field-desc" style="display: none;"></legend><div class="input"><input name="utm_source_mr" class="hs-input" type="hidden" value=""></div></div></fieldset>
  <fieldset class="form-columns-1"><div class="hs_utm_medium_mr hs-utm_medium_mr hs-fieldtype-text field hs-form-field" style="display: none;"><label id="label-utm_medium_mr-ddd37d0c-8c28-47ae-873a-75fbb9de7085" class="" placeholder="Enter your utm_medium_most_recent" for="utm_medium_mr-ddd37d0c-8c28-47ae-873a-75fbb9de7085"><span>utm_medium_most_recent</span></label><legend class="hs-field-desc" style="display: none;"></legend><div class="input"><input name="utm_medium_mr" class="hs-input" type="hidden" value=""></div></div></fieldset>
  <fieldset class="form-columns-1"><div class="hs_utm_term_mr hs-utm_term_mr hs-fieldtype-text field hs-form-field" style="display: none;"><label id="label-utm_term_mr-ddd37d0c-8c28-47ae-873a-75fbb9de7085" class="" placeholder="Enter your utm_term_most_recent" for="utm_term_mr-ddd37d0c-8c28-47ae-873a-75fbb9de7085"><span>utm_term_most_recent</span></label><legend class="hs-field-desc" style="display: none;"></legend><div class="input"><input name="utm_term_mr" class="hs-input" type="hidden" value=""></div></div></fieldset>
  <fieldset class="form-columns-1"><div class="legal-consent-container"><div><div class="hs-dependent-field"><div class="hs_LEGAL_CONSENT.subscription_type_10378483 hs-LEGAL_CONSENT.subscription_type_10378483 hs-fieldtype-booleancheckbox field hs-form-field"><legend class="hs-field-desc" style="display: none;"></legend><div class="input"><ul class="inputs-list" required=""><li class="hs-form-booleancheckbox"><label for="LEGAL_CONSENT.subscription_type_10378483-ddd37d0c-8c28-47ae-873a-75fbb9de7085" class="hs-form-booleancheckbox-display"><input id="LEGAL_CONSENT.subscription_type_10378483-ddd37d0c-8c28-47ae-873a-75fbb9de7085" class="hs-input" type="checkbox" name="LEGAL_CONSENT.subscription_type_10378483" value="true"><span><p>I consent to receive commercial messages related to Iron Mountain products and services. </p><span class="hs-form-required">*</span></span></label></li></ul></div></div></div><legend class="hs-field-desc checkbox-desc" style="display: none;"></legend></div><div class="hs-richtext"><p>By clicking the submit button, you consent to receive commercial communications from Iron Mountain as it relates to our products and services. Please visit our privacy policies across the globe (<strong><a href="https://www.ironmountain.com/utility/legal/privacy-policy?__hstc=159041573.b9684e2acaa986f44b57b1c6a0d5586a.1693259167570.1695820913517.1695933284539.10&amp;__hssc=159041573.1.1695933284539&amp;__hsfp=2880765162" target="_blank" rel="noopener">US</a></strong>, <strong><a href="https://www.ironmountain.co.uk/utility/legal/privacy-policy?__hstc=159041573.b9684e2acaa986f44b57b1c6a0d5586a.1693259167570.1695820913517.1695933284539.10&amp;__hssc=159041573.1.1695933284539&amp;__hsfp=2880765162" target="_blank" rel="noopener">EMEA</a></strong>, <strong><a href="https://www.ironmountain.com.sg/utility/legal/privacy-policy?__hstc=159041573.b9684e2acaa986f44b57b1c6a0d5586a.1693259167570.1695820913517.1695933284539.10&amp;__hssc=159041573.1.1695933284539&amp;__hsfp=2880765162" target="_blank" rel="noopener">APAC</a></strong>) for more information.</p></div></div></fieldset>
  <div class="hs_submit hs-submit"><div class="hs-field-desc" style="display: none;"></div><div class="actions"><input type="submit" class="hs-button primary large" value="Submit"></div></div>
</form>
</div>
</div>
`;

const hubspotContactUsMarkup = `
<div class="contact-us-form" id="contact-us-form">
<div id="hubSpotFormContainer" class="hbspt-form" data-hs-forms-root="true">
  <fieldset class="form-columns-2"><div class="hs_firstname hs-firstname hs-fieldtype-text field hs-form-field"><label id="label-firstname-a09ec527-8358-4057-abfe-e4b8274b65ab" class="" placeholder="Enter your " for="firstname-a09ec527-8358-4057-abfe-e4b8274b65ab"><span></span></label><legend class="hs-field-desc" style="display: none;"></legend><div class="input"><input id="firstname-a09ec527-8358-4057-abfe-e4b8274b65ab" name="firstname" required="" placeholder="First Name*" type="text" class="hs-input" inputmode="text" autocomplete="given-name" value=""><div data-lastpass-icon-root="true" style="position: relative !important; height: 0px !important; width: 0px !important; float: left !important;"></div></div></div><div class="hs_lastname hs-lastname hs-fieldtype-text field hs-form-field"><label id="label-lastname-a09ec527-8358-4057-abfe-e4b8274b65ab" class="" placeholder="Enter your " for="lastname-a09ec527-8358-4057-abfe-e4b8274b65ab"><span></span></label><legend class="hs-field-desc" style="display: none;"></legend><div class="input"><input id="lastname-a09ec527-8358-4057-abfe-e4b8274b65ab" name="lastname" required="" placeholder="Last Name*" type="text" class="hs-input" inputmode="text" autocomplete="family-name" value=""></div></div></fieldset>
  <fieldset class="form-columns-2"><div class="hs_company hs-company hs-fieldtype-text field hs-form-field"><label id="label-company-a09ec527-8358-4057-abfe-e4b8274b65ab" class="" placeholder="Enter your " for="company-a09ec527-8358-4057-abfe-e4b8274b65ab"><span></span></label><legend class="hs-field-desc" style="display: none;"></legend><div class="input"><input id="company-a09ec527-8358-4057-abfe-e4b8274b65ab" name="company" required="" placeholder="Company*" type="text" class="hs-input" inputmode="text" autocomplete="organization" value=""></div></div><div class="hs_jobtitle hs-jobtitle hs-fieldtype-text field hs-form-field"><label id="label-jobtitle-a09ec527-8358-4057-abfe-e4b8274b65ab" class="" placeholder="Enter your " for="jobtitle-a09ec527-8358-4057-abfe-e4b8274b65ab"><span></span></label><legend class="hs-field-desc" style="display: none;"></legend><div class="input"><input id="jobtitle-a09ec527-8358-4057-abfe-e4b8274b65ab" name="jobtitle" required="" placeholder="Title*" type="text" class="hs-input" inputmode="text" autocomplete="organization-title" value=""></div></div></fieldset>
  <fieldset class="form-columns-2"><div class="hs_phone hs-phone hs-fieldtype-phonenumber field hs-form-field"><label id="label-phone-a09ec527-8358-4057-abfe-e4b8274b65ab" class="" placeholder="Enter your " for="phone-a09ec527-8358-4057-abfe-e4b8274b65ab"><span></span></label><legend class="hs-field-desc" style="display: none;"></legend><div class="input"><input id="phone-a09ec527-8358-4057-abfe-e4b8274b65ab" name="phone" required="" placeholder="Business Phone*" type="tel" class="hs-input" inputmode="tel" autocomplete="tel" value=""></div></div><div class="hs_email hs-email hs-fieldtype-text field hs-form-field"><label id="label-email-a09ec527-8358-4057-abfe-e4b8274b65ab" class="" placeholder="Enter your " for="email-a09ec527-8358-4057-abfe-e4b8274b65ab"><span></span></label><legend class="hs-field-desc" style="display: none;"></legend><div class="input"><input id="email-a09ec527-8358-4057-abfe-e4b8274b65ab" name="email" required="" placeholder="Email Address*" type="email" class="hs-input" inputmode="email" autocomplete="email" value=""></div></div></fieldset>
  <fieldset class="form-columns-2"><div class="hs_country hs-country hs-fieldtype-select field hs-form-field"><label id="label-country-a09ec527-8358-4057-abfe-e4b8274b65ab" class="" placeholder="Enter your " for="country-a09ec527-8358-4057-abfe-e4b8274b65ab"><span></span></label><legend class="hs-field-desc" style="display: none;"></legend><div class="input"><select id="country-a09ec527-8358-4057-abfe-e4b8274b65ab" required="" class="hs-input" name="country"><option disabled="" value="">Country/Region*</option><option value="United States">United States</option><option value="United Kingdom">United Kingdom</option><option value="Netherlands">Netherlands</option><option value="Germany">Germany</option><option value="Spain">Spain</option><option value="Singapore">Singapore</option><option value="India">India</option><option value="Afghanistan">Afghanistan</option><option value="Åland Islands">Aland Islands</option><option value="Albania">Albania</option><option value="Algeria">Algeria</option><option value="American Samoa">American Samoa</option><option value="Andorra">Andorra</option><option value="Angola">Angola</option><option value="Anguilla">Anguilla</option><option value="Antarctica">Antarctica</option><option value="Antigua and Barbuda">Antigua and Barbuda</option><option value="Argentina">Argentina</option><option value="Armenia">Armenia</option><option value="Aruba">Aruba</option><option value="Australia">Australia</option><option value="Austria">Austria</option><option value="Azerbaijan">Azerbaijan</option><option value="Bahamas">Bahamas</option><option value="Bahrain">Bahrain</option><option value="Bangladesh">Bangladesh</option><option value="Barbados">Barbados</option><option value="Belarus">Belarus</option><option value="Belgium">Belgium</option><option value="Belize">Belize</option><option value="Benin">Benin</option><option value="Bermuda">Bermuda</option><option value="Bhutan">Bhutan</option><option value="Bolivia">Bolivia, Purinational state of</option><option value="Caribbean Netherlands">Bonaire, Sint Eustatius and Saba</option><option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option><option value="Botswana">Botswana</option><option value="Bouvet Island">Bouvet Island</option><option value="Brazil">Brazil</option><option value="British Indian Ocean Territory">British Indian Ocean Territory</option><option value="British Virgin Islands">Virgin Islands, British</option><option value="Brunei">Brunei Darussalam</option><option value="Bulgaria">Bulgaria</option><option value="Burkina Faso">Burkina Faso</option><option value="Burundi">Burundi</option><option value="Cambodia">Cambodia</option><option value="Cameroon">Cameroon</option><option value="Canada">Canada</option><option value="Cape Verde">Cape Verde</option><option value="Cayman Islands">Cayman Islands</option><option value="Central African Republic">Central African Republic</option><option value="Chad">Chad</option><option value="Chile">Chile</option><option value="China">China</option><option value="Christmas Island">Christmas Island</option><option value="Cocos (Keeling) Islands">Cocos (Keeling) Islands</option><option value="Colombia">Colombia</option><option value="Comoros">Comoros</option><option value="Congo">Congo</option><option value="Democratic Republic of the Congo">Congo, the Democratic Republic of the</option><option value="Cook Islands">Cook Islands</option><option value="Costa Rica">Costa Rica</option><option value="Cote d'Ivoire">Cote d'Ivoire</option><option value="Croatia">Croatia</option><option value="Cuba">Cuba</option><option value="Curaçao">Curaçao</option><option value="Cyprus">Cyprus</option><option value="Czechia">Czechia</option><option value="Denmark">Denmark</option><option value="Djibouti">Djibouti</option><option value="Dominica">Dominica</option><option value="Dominican Republic">Dominican Republic</option><option value="East Timor">Timor-Leste</option><option value="Ecuador">Ecuador</option><option value="Egypt">Egypt</option><option value="El Salvador">El Salvador</option><option value="Equatorial Guinea">Equatorial Guinea</option><option value="Eritrea">Eritrea</option><option value="Estonia">Estonia</option><option value="Ethiopia">Ethiopia</option><option value="Falkland Islands">Falkland Islands (Malvinas)</option><option value="Faroe Islands">Faroe Islands</option><option value="Fiji">Fiji</option><option value="Finland">Finland</option><option value="France">France</option><option value="French Guiana">French Guiana</option><option value="French Polynesia">French Polynesia</option><option value="French Southern and Antarctic Lands">French Southern Territories</option><option value="Gabon">Gabon</option><option value="Gambia">Gambia</option><option value="Georgia">Georgia</option><option value="Ghana">Ghana</option><option value="Gibraltar">Gibraltar</option><option value="Greece">Greece</option><option value="Greenland">Greenland</option><option value="Grenada">Grenada</option><option value="Guadeloupe">Guadeloupe</option><option value="Guam">Guam</option><option value="Guatemala">Guatemala</option><option value="Guernsey">Guernsey</option><option value="Guinea">Guinea</option><option value="Guinea-Bissau">Guinea-Bissau</option><option value="Guyana">Guyana</option><option value="Haiti">Haiti</option><option value="Heard Island and McDonald Islands">Heard Island and McDonald Islands</option><option value="Honduras">Honduras</option><option value="Hong Kong">Hong Kong</option><option value="Hungary">Hungary</option><option value="Iceland">Iceland</option><option value="Indonesia">Indonesia</option><option value="Iran">Iran, Islamic Republic of</option><option value="Iraq">Iraq</option><option value="Ireland">Ireland</option><option value="Isle of Man">Isle of Man</option><option value="Israel">Israel</option><option value="Italy">Italy</option><option value="Jamaica">Jamaica</option><option value="Japan">Japan</option><option value="Jersey">Jersey</option><option value="Jordan">Jordan</option><option value="Kazakhstan">Kazakhstan</option><option value="Kenya">Kenya</option><option value="Kiribati">Kiribati</option><option value="Kuwait">Kuwait</option><option value="Kyrgyzstan">Kyrgyzstan</option><option value="Laos">Lao People's Democratic Republic</option><option value="Latvia">Latvia</option><option value="Lebanon">Lebanon</option><option value="Lesotho">Lesotho</option><option value="Liberia">Liberia</option><option value="Libya">Libyan Arab Jamahiriya</option><option value="Liechtenstein">Liechtenstein</option><option value="Lithuania">Lithuania</option><option value="Luxembourg">Luxembourg</option><option value="Macau">Macao</option><option value="Macedonia (FYROM)">Macedonia, the former Yugoslav Republic of</option><option value="Madagascar">Madagascar</option><option value="Malawi">Malawi</option><option value="Malaysia">Malaysia</option><option value="Maldives">Maldives</option><option value="Mali">Mali</option><option value="Malta">Malta</option><option value="Marshall Islands">Marshall Islands</option><option value="Martinique">Martinique</option><option value="Mauritania">Mauritania</option><option value="Mauritius">Mauritius</option><option value="Mayotte">Mayotte</option><option value="Mexico">Mexico</option><option value="Micronesia">Micronesia</option><option value="Moldova">Moldova, Republic of</option><option value="Monaco">Monaco</option><option value="Mongolia">Mongolia</option><option value="Montenegro">Montenegro</option><option value="Montserrat">Montserrat</option><option value="Morocco">Morocco</option><option value="Mozambique">Mozambique</option><option value="Myanmar (Burma)">Myanmar</option><option value="Namibia">Namibia</option><option value="Nauru">Nauru</option><option value="Nepal">Nepal</option><option value="Netherlands Antilles">Netherlands Antilles</option><option value="New Caledonia">New Caledonia</option><option value="New Zealand">New Zealand</option><option value="Nicaragua">Nicaragua</option><option value="Niger">Niger</option><option value="Nigeria">Nigeria</option><option value="Niue">Niue</option><option value="Norfolk Island">Norfolk Island</option><option value="North Korea">Korea, Democratic People's Republic of</option><option value="Northern Mariana Islands">Northern Mariana Islands</option><option value="Norway">Norway</option><option value="Oman">Oman</option><option value="Pakistan">Pakistan</option><option value="Palau">Palau</option><option value="Palestine">Palestinian Territory, Occupied</option><option value="Panama">Panama</option><option value="Papua New Guinea">Papua New Guinea</option><option value="Paraguay">Paraguay</option><option value="Peru">Peru</option><option value="Philippines">Philippines</option><option value="Pitcairn Islands">Pitcairn</option><option value="Poland">Poland</option><option value="Portugal">Portugal</option><option value="Puerto Rico">Puerto Rico</option><option value="Qatar">Qatar</option><option value="Réunion">Reunion</option><option value="Romania">Romania</option><option value="Russia">Russian Federation</option><option value="Rwanda">Rwanda</option><option value="Saint Barthélemy">Saint Barthélemy</option><option value="Saint Helena">Saint Helena, Ascension and Tristan da Cunha</option><option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option><option value="Saint Lucia">Saint Lucia</option><option value="Saint Martin">Saint Martin (French part)</option><option value="Saint Pierre and Miquelon">Saint Pierre and Miquelon</option><option value="Saint Vincent and the Grenadines">Saint Vincent and the Grenadines</option><option value="Samoa">Samoa</option><option value="San Marino">San Marino</option><option value="Sao Tome and Principe">Sao Tome and Principe</option><option value="Saudi Arabia">Saudi Arabia</option><option value="Senegal">Senegal</option><option value="Serbia">Serbia</option><option value="Seychelles">Seychelles</option><option value="Sierra Leone">Sierra Leone</option><option value="Sint Maarten">Sint Maarten (Dutch part)</option><option value="Slovakia">Slovakia</option><option value="Slovenia">Slovenia</option><option value="Solomon Islands">Solomon Islands</option><option value="Somalia">Somalia</option><option value="South Africa">South Africa</option><option value="South Georgia and the South Sandwich Islands">South Georgia and the South Sandwich Islands</option><option value="South Korea">Korea, Republic of</option><option value="South Sudan">South Sudan</option><option value="Sri Lanka">Sri Lanka</option><option value="Sudan">Sudan</option><option value="Suriname">Suriname</option><option value="Svalbard and Jan Mayen">Svalbard and Jan Mayen</option><option value="Swaziland">Swaziland</option><option value="Sweden">Sweden</option><option value="Switzerland">Switzerland</option><option value="Syria">Syrian Arab Republic</option><option value="Taiwan">Taiwan</option><option value="Tajikistan">Tajikistan</option><option value="Tanzania">Tanzania, United Republic of</option><option value="Thailand">Thailand</option><option value="Togo">Togo</option><option value="Tokelau">Tokelau</option><option value="Tonga">Tonga</option><option value="Trinidad and Tobago">Trinidad and Tobago</option><option value="Tunisia">Tunisia</option><option value="Turkey">Turkey</option><option value="Turkmenistan">Turkmenistan</option><option value="Turks and Caicos Islands">Turks and Caicos Islands</option><option value="Tuvalu">Tuvalu</option><option value="U.S. Virgin Islands">U.S. Virgin Islands</option><option value="Uganda">Uganda</option><option value="Ukraine">Ukraine</option><option value="United Arab Emirates">United Arab Emirates</option><option value="United States Minor Outlying Islands">United States Minor Outlying Islands</option><option value="Uruguay">Uruguay</option><option value="Uzbekistan">Uzbekistan</option><option value="Vanuatu">Vanuatu</option><option value="Vatican City">Holy See (Vatican City State)</option><option value="Venezuela">Venezuela, Bolivarian Republic of</option><option value="Viet Nam">Viet Nam</option><option value="Wallis and Futuna">Wallis and Futuna</option><option value="Western Sahara">Western Sahara</option><option value="Yemen">Yemen</option><option value="Zambia">Zambia</option><option value="Zimbabwe">Zimbabwe</option><option value="Vietnam">Vietnam</option></select></div></div><div class="hs_zip hs-zip hs-fieldtype-text field hs-form-field"><label id="label-zip-a09ec527-8358-4057-abfe-e4b8274b65ab" class="" placeholder="Enter your " for="zip-a09ec527-8358-4057-abfe-e4b8274b65ab"><span></span></label><legend class="hs-field-desc" style="display: none;"></legend><div class="input"><input id="zip-a09ec527-8358-4057-abfe-e4b8274b65ab" name="zip" required="" placeholder="Zip or Postal Code*" type="text" class="hs-input" inputmode="text" value=""></div></div></fieldset>
  <fieldset class="form-columns-1"><div class="hs-dependent-field"><div class="hs_data_center_location hs-data_center_location hs-fieldtype-select field hs-form-field"><label id="label-data_center_location-a09ec527-8358-4057-abfe-e4b8274b65ab" class="" placeholder="Enter your " for="data_center_location-a09ec527-8358-4057-abfe-e4b8274b65ab"><span></span></label><legend class="hs-field-desc" style="display: none;"></legend><div class="input"><select id="data_center_location-a09ec527-8358-4057-abfe-e4b8274b65ab" class="hs-input is-placeholder" name="data_center_location"><option disabled="" value="">Are you inquiring about a particular location?</option><option value="Amsterdam">Amsterdam</option><option value="Bengaluru">Bengaluru</option><option value="Boston">Boston</option><option value="Delhi-NCR">Delhi-NCR</option><option value="Denver">Denver</option><option value="Frankfurt">Frankfurt</option><option value="Hyderabad">Hyderabad</option><option value="Kansas_City">Kansas City</option><option value="London">London</option><option value="Madrid">Madrid</option><option value="Mumbai">Mumbai</option><option value="New_Jersey">New Jersey</option><option value="Northern_Virginia">Northern Virginia</option><option value="Ohio">Ohio</option><option value="Phoenix">Phoenix</option><option value="Pune">Pune</option><option value="Scottsdale">Scottsdale</option><option value="Singapore">Singapore</option><option value="Western_Pennsylvania">Western Pennsylvania</option><option value="Location Not Listed">Location Not Listed</option></select></div></div></div></fieldset>
  <fieldset class="form-columns-1"><div class="hs_message hs-message hs-fieldtype-textarea field hs-form-field"><label id="label-message-a09ec527-8358-4057-abfe-e4b8274b65ab" class="" placeholder="Enter your " for="message-a09ec527-8358-4057-abfe-e4b8274b65ab"><span></span></label><legend class="hs-field-desc" style="display: none;"></legend><div class="input"><textarea id="message-a09ec527-8358-4057-abfe-e4b8274b65ab" class="hs-input hs-fieldtype-textarea" name="message" placeholder="Please explain your inquiry or describe your colocation/power requirements here"></textarea></div></div></fieldset>
  <fieldset class="form-columns-1"><div class="hs_utm_campaign_mr hs-utm_campaign_mr hs-fieldtype-text field hs-form-field" style="display: none;"><label id="label-utm_campaign_mr-a09ec527-8358-4057-abfe-e4b8274b65ab" class="" placeholder="Enter your utm_campaign_most_recent" for="utm_campaign_mr-a09ec527-8358-4057-abfe-e4b8274b65ab"><span>utm_campaign_most_recent</span></label><legend class="hs-field-desc" style="display: none;"></legend><div class="input"><input name="utm_campaign_mr" class="hs-input" type="hidden" value=""></div></div></fieldset>
  <fieldset class="form-columns-1"><div class="hs_utm_source_mr hs-utm_source_mr hs-fieldtype-text field hs-form-field" style="display: none;"><label id="label-utm_source_mr-a09ec527-8358-4057-abfe-e4b8274b65ab" class="" placeholder="Enter your utm_source_most_recent" for="utm_source_mr-a09ec527-8358-4057-abfe-e4b8274b65ab"><span>utm_source_most_recent</span></label><legend class="hs-field-desc" style="display: none;"></legend><div class="input"><input name="utm_source_mr" class="hs-input" type="hidden" value=""></div></div></fieldset>
  <fieldset class="form-columns-1"><div class="hs_utm_medium_mr hs-utm_medium_mr hs-fieldtype-text field hs-form-field" style="display: none;"><label id="label-utm_medium_mr-a09ec527-8358-4057-abfe-e4b8274b65ab" class="" placeholder="Enter your utm_medium_most_recent" for="utm_medium_mr-a09ec527-8358-4057-abfe-e4b8274b65ab"><span>utm_medium_most_recent</span></label><legend class="hs-field-desc" style="display: none;"></legend><div class="input"><input name="utm_medium_mr" class="hs-input" type="hidden" value=""></div></div></fieldset>
  <fieldset class="form-columns-1"><div class="hs_utm_term_mr hs-utm_term_mr hs-fieldtype-text field hs-form-field" style="display: none;"><label id="label-utm_term_mr-a09ec527-8358-4057-abfe-e4b8274b65ab" class="" placeholder="Enter your utm_term_most_recent" for="utm_term_mr-a09ec527-8358-4057-abfe-e4b8274b65ab"><span>utm_term_most_recent</span></label><legend class="hs-field-desc" style="display: none;"></legend><div class="input"><input name="utm_term_mr" class="hs-input" type="hidden" value=""></div></div></fieldset>
  <fieldset class="form-columns-1"><div class="legal-consent-container"><div><div class="hs-dependent-field"><div class="hs_LEGAL_CONSENT.subscription_type_10378483 hs-LEGAL_CONSENT.subscription_type_10378483 hs-fieldtype-booleancheckbox field hs-form-field"><legend class="hs-field-desc" style="display: none;"></legend><div class="input"><ul class="inputs-list" required=""><li class="hs-form-booleancheckbox"><label for="LEGAL_CONSENT.subscription_type_10378483-a09ec527-8358-4057-abfe-e4b8274b65ab" class="hs-form-booleancheckbox-display"><input id="LEGAL_CONSENT.subscription_type_10378483-a09ec527-8358-4057-abfe-e4b8274b65ab" class="hs-input" type="checkbox" name="LEGAL_CONSENT.subscription_type_10378483" value="true"><span><p>I consent to receive commercial messages related to Iron Mountain products and services.</p><span class="hs-form-required">*</span></span></label></li></ul></div></div></div><legend class="hs-field-desc checkbox-desc" style="display: none;"></legend></div><div class="hs-richtext"><p>I agree to receive commercial communications from Iron Mountain as it relates to our products and services. We respect your privacy and will only process your data in the manner described in our privacy policies (<a href="https://www.ironmountain.com/utility/legal/privacy-policy?__hstc=159041573.b9684e2acaa986f44b57b1c6a0d5586a.1693259167570.1695820913517.1695933284539.10&amp;__hssc=159041573.2.1695933284539&amp;__hsfp=2880765162" rel="noopener">US</a>,&nbsp;<a href="https://www.ironmountain.co.uk/utility/legal/privacy-policy?__hstc=159041573.b9684e2acaa986f44b57b1c6a0d5586a.1693259167570.1695820913517.1695933284539.10&amp;__hssc=159041573.2.1695933284539&amp;__hsfp=2880765162" rel="noopener">EMEA</a>,&nbsp;<a href="https://www.ironmountain.com.sg/utility/legal/privacy-policy?__hstc=159041573.b9684e2acaa986f44b57b1c6a0d5586a.1693259167570.1695820913517.1695933284539.10&amp;__hssc=159041573.2.1695933284539&amp;__hsfp=2880765162" rel="noopener">APAC</a>).</p></div></div></fieldset>
  <div class="hs_submit hs-submit"><div class="hs-field-desc" style="display: none;"></div><div class="actions"><input type="submit" class="hs-button primary large" value="Submit"></div></div>
</form>
</div>
</div>
`;

const successMarkup = `
<h2>Thank you for reaching out</h2>
<p> You should get a response within one business day</p>
`;

export const WithMountainsBackground: Story = {
  args: {
    rendering: {
      componentName: 'ContactForm',
      dataSource: 'ContactForm',
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
      componentName: 'ContactForm',
      dataSource: 'ContactForm',
    },
    params: {
      Theme: '{"Value":{"value":"dark-blue"}}',
      DynamicPlaceholderId: '3',
    },
    fields: {
      Title: {
        value: 'We make it easy to get started',
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
      componentName: 'ContactForm',
      dataSource: 'ContactForm',
    },
    params: {
      Theme: '{"Value":{"value":"light"}}',
      DynamicPlaceholderId: '3',
    },
    fields: {
      Title: {
        value: 'We make it easy to get started',
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

export const Hubspot1WithMountainsBackground: Story = {
  args: {
    rendering: {
      componentName: 'ContactForm',
      dataSource: 'ContactForm',
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
      FormHTML: {
        value: hubspotDataCentersMarkup,
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

export const Hubspot1WithDarkBlueBackground: Story = {
  args: {
    rendering: {
      componentName: 'ContactForm',
      dataSource: 'ContactForm',
    },
    params: {
      Theme: '{"Value":{"value":"dark-blue"}}',
      DynamicPlaceholderId: '3',
    },
    fields: {
      Title: {
        value: 'We make it easy to get started',
      },
      FormHTML: {
        value: hubspotDataCentersMarkup,
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

export const Hubspot1WithLightBackground: Story = {
  args: {
    rendering: {
      componentName: 'ContactForm',
      dataSource: 'ContactForm',
    },
    params: {
      Theme: '{"Value":{"value":"light"}}',
      DynamicPlaceholderId: '3',
    },
    fields: {
      Title: {
        value: 'We make it easy to get started',
      },
      FormHTML: {
        value: hubspotDataCentersMarkup,
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

export const Hubspot2WithMountainsBackground: Story = {
  args: {
    rendering: {
      componentName: 'ContactForm',
      dataSource: 'ContactForm',
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
      FormHTML: {
        value: hubspotContactUsMarkup,
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

export const Hubspot2WithDarkBlueBackground: Story = {
  args: {
    rendering: {
      componentName: 'ContactForm',
      dataSource: 'ContactForm',
    },
    params: {
      Theme: '{"Value":{"value":"dark-blue"}}',
      DynamicPlaceholderId: '3',
    },
    fields: {
      Title: {
        value: 'We make it easy to get started',
      },
      FormHTML: {
        value: hubspotContactUsMarkup,
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

export const Hubspot2WithLightBackground: Story = {
  args: {
    rendering: {
      componentName: 'ContactForm',
      dataSource: 'ContactForm',
    },
    params: {
      Theme: '{"Value":{"value":"light"}}',
      DynamicPlaceholderId: '3',
    },
    fields: {
      Title: {
        value: 'We make it easy to get started',
      },
      FormHTML: {
        value: hubspotContactUsMarkup,
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
