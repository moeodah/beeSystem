<template>
  <form class="container">
    <v-text-field
      label="Name"
    />
    <v-select
      v-model="gender"
      :items="genders"
      label="Gender"
    />
    <v-select
      v-model="education"
      :items="educations"
      label="Education"
    />
    <v-text-field
      v-model="email1"
      label="Primary Email"
      type="text"
    />
    <v-text-field
      v-model="email2"
      label="Secondry Email"
      type="text"
    />
    <v-text-field
      v-model="phoneNumber1"
      label="Primary Phone Number"
      type="number"
    />
    <v-text-field
      v-model="phoneNumber2"
      label="Secondry Phone Number"
      type="text"
    />
    <v-text-field
      v-model="address1"
      label="Primary Address"
      type="text"
    />
    <v-text-field
      v-model="address2"
      label="Secondry Address"
      type="text"
    />
    <v-text-field
      v-model="civilId"
      label="Civil Id"
      type="number"
    />
    <v-text-field
      v-model="civilIdExpiry"
      label="Civil Id Expiry"
      type="date"
    />
    <v-text-field
      v-model="DOB"
      label="Date of Birth"
      type="date"
    />
    <v-text-field
      v-model="driverLicenseExpiry"
      label="Driver License Expiry Date"
      type="date"
    />
    <v-text-field
      v-model="passportId"
      label="Passport Id"
      type="text"
    />
    <v-text-field
      v-model="passportIdExpiry"
      label="Passport Expiry Date"
      type="date"
    />
    <v-text-field
      v-model="jobTitle"
      label="Job Title"
      type="text"
    />
    <v-text-field
      v-model="dateOfHire"
      label="Date of Hire"
      type="date"
    />
    <v-text-field
      v-model="bankAccountNumber"
      label="Bank Account Number"
      type="number"
    />
    <v-text-field
      v-model="Iban"
      label="IBAN"
      type="text"
    />
    <v-text-field
      v-model="bankName"
      label="Bank Name"
      type="text"
    />
    <v-text-field
      v-model="salary"
      label="Salary"
      type="number"
      prefix="KD"
    />
    <v-select
      v-model="Martial"
      :items="mStatus"
      label="Martial Status"
    />
    <v-select
      v-model="nationality"
      :items="countries"
      label="Nationatity"
    />
    <v-text-field
      v-model="fileName"
      label="Attach Files"
      prepend-icon="attach_file"
      @click="onPickFile"
    />
    <router-link :to="{ name: 'employees' }">
      <v-btn
        @click="submit"
      >
        submit
      </v-btn>
    </router-link>
    <!-- <v-btn
      @click="clear"
    >
      clear
    </v-btn> -->
  </form>
</template>
<script>
  import EmployeeServices from '@/services/EmployeeServices'
  export default {
    data: () => ({
      name: null,
      gender: null,
      education: null,
      email1: null,
      email2: null,
      phoneNumber1: null,
      phoneNumber2: null,
      address1: null,
      address2: null,
      civilId: null,
      civilIdExpiry: null,
      DOB: null,
      driverLicenseExpiry: null,
      passportId: null,
      passportIdExpiry: null,
      jobTitle: null,
      dateOfHire: null,
      bankAccountNumber: null,
      Iban: null,
      bankName: null,
      salary: null,
      Martial: null,
      nationality: null,
      countries: ['United States', 'Canada', 'Afghanistan', 'Albania', 'Algeria', 'American Samoa', 'Andorra', 'Angola', 'Anguilla', 'Antarctica', 'Antigua and/or Barbuda', 'Argentina', 'Armenia', 'Aruba', 'Australia', 'Austria', 'Azerbaijan', 'Bahamas', 'Bahrain', 'Bangladesh', 'Barbados', 'Belarus', 'Belgium', 'Belize', 'Benin', 'Bermuda', 'Bhutan', 'Bolivia', 'Bosnia and Herzegovina', 'Botswana', 'Bouvet Island', 'Brazil', 'British Indian Ocean Territory', 'Brunei Darussalam', 'Bulgaria', 'Burkina Faso', 'Burundi', 'Cambodia', 'Cameroon', 'Cape Verde', 'Cayman Islands', 'Central African Republic', 'Chad', 'Chile', 'China', 'Christmas Island', 'Cocos (Keeling) Islands', 'Colombia', 'Comoros', 'Congo', 'Cook Islands', 'Costa Rica', 'Croatia (Hrvatska)', 'Cuba', 'Cyprus', 'Czech Republic', 'Denmark', 'Djibouti', 'Dominica', 'Dominican Republic', 'East Timor', 'Ecudaor', 'Egypt', 'El Salvador', 'Equatorial Guinea', 'Eritrea', 'Estonia', 'Ethiopia', 'Falkland Islands (Malvinas)', 'Faroe Islands', 'Fiji', 'Finland', 'France', 'France, Metropolitan', 'French Guiana', 'French Polynesia', 'French Southern Territories', 'Gabon', 'Gambia', 'Georgia', 'Germany', 'Ghana', 'Gibraltar', 'Greece', 'Greenland', 'Grenada', 'Guadeloupe', 'Guam', 'Guatemala', 'Guinea', 'Guinea-Bissau', 'Guyana', 'Haiti', 'Heard and Mc Donald Islands', 'Honduras', 'Hong Kong', 'Hungary', 'Iceland', 'India', 'Indonesia', 'Iran (Islamic Republic of)', 'Iraq', 'Ireland', 'Israel', 'Italy', 'Ivory Coast', 'Jamaica', 'Japan', 'Jordan', 'Kazakhstan', 'Kenya', 'Kiribati', "Korea, Democratic People's Republic of", 'Korea, Republic of', 'Kosovo', 'Kuwait', 'Kyrgyzstan', "Lao People's Democratic Republic", 'Latvia', 'Lebanon', 'Lesotho', 'Liberia', 'Libyan Arab Jamahiriya', 'Liechtenstein', 'Lithuania', 'Luxembourg', 'Macau', 'Macedonia', 'Madagascar', 'Malawi', 'Malaysia', 'Maldives', 'Mali', 'Malta', 'Marshall Islands', 'Martinique', 'Mauritania', 'Mauritius', 'Mayotte', 'Mexico', 'Micronesia, Federated States of', 'Moldova, Republic of', 'Monaco', 'Mongolia', 'Montserrat', 'Morocco', 'Mozambique', 'Myanmar', 'Namibia', 'Nauru', 'Nepal', 'Netherlands', 'Netherlands Antilles', 'New Caledonia', 'New Zealand', 'Nicaragua', 'Niger', 'Nigeria', 'Niue', 'Norfork Island', 'Northern Mariana Islands', 'Norway', 'Oman', 'Pakistan', 'Palau', 'Panama', 'Papua New Guinea', 'Paraguay', 'Peru', 'Philippines', 'Pitcairn', 'Poland', 'Portugal', 'Puerto Rico', 'Qatar', 'Reunion', 'Romania', 'Russian Federation', 'Rwanda', 'Saint Kitts and Nevis', 'Saint Lucia', 'Saint Vincent and the Grenadines', 'Samoa', 'San Marino', 'Sao Tome and Principe', 'Saudi Arabia', 'Senegal', 'Seychelles', 'Sierra Leone', 'Singapore', 'Slovakia', 'Slovenia', 'Solomon Islands', 'Somalia', 'South Africa', 'South Georgia South Sandwich Islands', 'South Sudan', 'Spain', 'Sri Lanka', 'St. Helena', 'St. Pierre and Miquelon', 'Sudan', 'Suriname', 'Svalbarn and Jan Mayen Islands', 'Swaziland', 'Sweden', 'Switzerland', 'Syrian Arab Republic', 'Taiwan', 'Tajikistan', 'Tanzania, United Republic of', 'Thailand', 'Togo', 'Tokelau', 'Tonga', 'Trinidad and Tobago', 'Tunisia', 'Turkey', 'Turkmenistan', 'Turks and Caicos Islands', 'Tuvalu', 'Uganda', 'Ukraine', 'United Arab Emirates', 'United Kingdom', 'United States minor outlying islands', 'Uruguay', 'Uzbekistan', 'Vanuatu', 'Vatican City State', 'Venezuela', 'Vietnam', 'Virigan Islands (British)', 'Virgin Islands (U.S.)', 'Wallis and Futuna Islands', 'Western Sahara', 'Yemen', 'Yugoslavia', 'Zaire', 'Zambia', 'Zimbabwe'],
      mStatus: [
        'Single',
        'Married',
        'Divorced',
        'Widowed',
      ],
      genders: [
        'Male',
        'Female',
      ],
      educations: [
        'Highschool',
        'Diploma',
        'Bachelors',
        'Masters',
        'PhD',
      ],
    }),

    methods: {
      async submit () {
        try {
          await EmployeeServices.post({
            name: this.name,
            gender: this.gender,
            education: this.education,
            email1: this.email1,
            email2: this.email2,
            phoneNumber1: this.phoneNumber1,
            phoneNumber2: this.phoneNumber24,
            address1: this.address1,
            address2: this.address2,
            civilId: this.civilId,
            civilIdExpiry: this.civilIdExpiry,
            DOB: this.DOB,
            driverLicenseExpiry: this.driverLicenseExpiry,
            passportId: this.passportId,
            passportIdExpiry: this.passportIdExpiry,
            jobTitle: this.jobTitle,
            dateOfHire: this.dateOfHire,
            bankAccountNumber: this.bankAccountNumber,
            Iban: this.Iban,
            bankName: this.bankName,
            salary: this.salary,
            Martial: this.Martial,
            nationality: this.nationality,
          })
        } catch (error) {

        }
      },
      // clear () {
      //   this.name = '',
      //   this.gender = null,
      //   this.education = null,
      //   this.email1 = '',
      //   this.email2 = '',
      //   this.phoneNumber1 = '',
      //   this.phoneNumber2 = '',
      //   this.address1 = '',
      //   this.address2 = '',
      //   this.civilId = '',
      //   this.civilIdExpiry = '',
      //   this.DOB = '',
      //   this.driverLicenseExpiry = '',
      //   this.passportId = '',
      //   this.passportIdExpiry = '',
      //   this.jobTitle = '',
      //   this.dateOfHire = '',
      //   this.bankAccountNumber = '',
      //   this.Iban = '',
      //   this.bankName = '',
      //   this.salary = '',
      //   this.Martial = null,
      //   this.nationality = null
      // },
    },
  }
</script>
