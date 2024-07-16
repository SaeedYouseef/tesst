
const arabicCurrencyNames = {
  "AED": "درهم إماراتي",
  "AFN": "أفغاني",
  "ALL": "ليك ألباني",
  "AMD": "درام أرميني",
  "ANG": "غيلدر هولندي",
  "AOA": "كوانزا أنغولي",
  "ARS": "بيزو أرجنتيني",
  "AUD": "دولار أسترالي",
  "AWG": "فلورن أروبي",
  "AZN": "مانات أذربيجاني",
  "BAM": "مارك البوسنة والهرسك القابل للتحويل",
  "BBD": "دولار بربادوسي",
  "BDT": "تاكا بنغلاديشي",
  "BGN": "ليف بلغاري",
  "BHD": "دينار بحريني",
  "BIF": "فرنك بوروندي",
  "BMD": "دولار برمودي",
  "BND": "دولار بروناي",
  "BOB": "بوليفيانو بوليفي",
  "BRL": "ريال برازيلي",
  "BSD": "دولار باهامي",
  "BTN": "نولتوم بوتاني",
  "BWP": "بولا بوتسواني",
  "BYN": "روبل بيلاروسي",
  "BZD": "دولار بليزي",
  "CAD": "دولار كندي",
  "CDF": "فرنك كونغولي",
  "CHF": "فرنك سويسري",
  "CLP": "بيزو تشيلي",
  "CNY": "يوان صيني",
  "COP": "بيزو كولومبي",
  "CRC": "كولون كوستاريكي",
  "CUP": "بيزو كوبي",
  "CVE": "إسكودو الرأس الأخضر",
  "CZK": "كرونة تشيكية",
  "DJF": "فرنك جيبوتي",
  "DKK": "كرونة دنماركية",
  "DOP": "بيزو الدومينيكان",
  "DZD": "دينار جزائري",
  "EGP": "جنيه مصري",
  "ERN": "ناكفا إريتري",
  "ETB": "بير إثيوبي",
  "EUR": "يورو",
  "FJD": "دولار فيجي",
  "FKP": "جنيه جزر فوكلاند",
  "FOK": "كرونة جزر فارو",
  "GBP": "جنيه إسترليني",
  "GEL": "لاري جورجي",
  "GGP": "جنيه غيرنسي",
  "GHS": "سيدي غاني",
  "GIP": "جنيه جبل طارق",
  "GMD": "دالاسي غامبي",
  "GNF": "فرنك غيني",
  "GTQ": "كتزال غواتيمالي",
  "GYD": "دولار غياني",
  "HKD": "دولار هونغ كونغ",
  "HNL": "ليمبيرا هندوراسي",
  "HRK": "كونا كرواتي",
  "HTG": "غورد هايتي",
  "HUF": "فورينت مجري",
  "IDR": "روبية إندونيسية",
  "ILS": "شيكل إسرائيلي جديد",
  "IMP": "جنيه جزيرة مان",
  "INR": "روبية هندية",
  "IQD": "دينار عراقي",
  "IRR": "ريال إيراني",
  "ISK": "كرونة آيسلندية",
  "JEP": "جنيه جيرسي",
  "JMD": "دولار جامايكي",
  "JOD": "دينار أردني",
  "JPY": "ين ياباني",
  "KES": "شلن كيني",
  "KGS": "سوم قيرغيزستاني",
  "KHR": "ريال كمبودي",
  "KID": "دولار كيريباتي",
  "KMF": "فرنك قمري",
  "KRW": "وون كوري جنوبي",
  "KWD": "دينار كويتي",
  "KYD": "دولار جزر كايمان",
  "KZT": "تينغ كازاخستاني",
  "LAK": "كيب لاوسي",
  "LBP": "ليرة لبنانية",
  "LKR": "روبية سريلانكية",
  "LRD": "دولار ليبيري",
  "LSL": "لوتي ليسوتو",
  "LYD": "دينار ليبي",
  "MAD": "درهم مغربي",
  "MDL": "ليو مولدوفي",
  "MGA": "أرياري مدغشقري",
  "MKD": "دينار مقدوني",
  "MMK": "كيات ميانماري",
  "MNT": "توغروغ منغولي",
  "MOP": "باتاكا ماكاوي",
  "MRU": "أوقية موريتانية",
  "MUR": "روبية موريشيوسية",
  "MVR": "روفيا مالديفية",
  "MWK": "كواشا مالاوي",
  "MXN": "بيزو مكسيكي",
  "MYR": "رينغيت ماليزي",
  "MZN": "ميتيكال موزمبيقي",
  "NAD": "دولار ناميبي",
  "NGN": "نايرا نيجيري",
  "NIO": "قرطبة نيكاراغوا",
  "NOK": "كرونة نرويجية",
  "NPR": "روبية نيبالية",
  "NZD": "دولار نيوزيلندي",
  "OMR": "ريال عماني",
  "PAB": "بالبوا بنمي",
  "PEN": "سول بيروفي",
  "PGK": "كينا بابوا غينيا الجديدة",
  "PHP": "بيزو فلبيني",
  "PKR": "روبية باكستانية",
  "PLN": "زلوتي بولندي",
  "PYG": "غواراني باراغواي",
  "QAR": "ريال قطري",
  "RON": "ليو روماني",
  "RSD": "دينار صربي",
  "RUB": "روبل روسي",
  "RWF": "فرنك رواندي",
  "SAR": "ريال سعودي",
  "SBD": "دولار جزر سليمان",
  "SCR": "روبية سيشلية",
  "SDG": "جنيه سوداني",
  "SEK": "كرونة سويدية",
  "SGD": "دولار سنغافوري",
  "SHP": "جنيه سانت هيليني",
  "SLE": "ليون سيراليوني",
  "SLL": "ليون سيراليوني",
  "SOS": "شلن صومالي",
  "SRD": "دولار سورينامي",
  "SSP": "جنيه جنوب سوداني",
  "STN": "دوبرا ساو تومي وبرينسيب",
  "SYP": "ليرة سورية",
  "SZL": "ليلانجيني سوازيلندي",
  "THB": "بات تايلاندي",
  "TJS": "سوموني طاجيكستاني",
  "TMT": "مانات تركمانستاني",
  "TND": "دينار تونسي",
  "TOP": "بانغا تونغي",
  "TRY": "ليرة تركية",
  "TTD": "دولار ترينيداد وتوباغو",
  "TVD": "دولار تونغا",
  "TWD": "دولار تايواني",
  "TZS": "شلن تنزاني",
  "UAH": "هريفنيا أوكرانية",
  "UGX": "شلن أوغندي",
  "USD": "دولار أمريكي",
  "UYU": "بيزو أوروغواي",
  "UZS": "سوم أوزبكستاني",
  "VES": "بوليفار فنزويلي",
  "VND": "دونغ فيتنامي",
  "VUV": "فاتو فانواتو",
  "WST": "تالا ساموا",
  "XAF": "فرنك وسط أفريقي",
  "XCD": "دولار شرق الكاريبي",
  "XDR": "حقوق السحب الخاصة",
  "XOF": "فرنك غرب أفريقي",
  "XPF": "فرنك سي إف بي",
  "YER": "ريال يمني",
  "ZAR": "راند جنوب أفريقي",
  "ZMW": "كواشا زامبي",
  "ZWL": "دولار زيمبابوي"
};
const latestUrl = `https://v6.exchangerate-api.com/v6/bb64387ae8fe689ba4ffb112/latest/USD`;

let fromSelect = document.getElementById('formOptionsList');
let toSelect = document.getElementById('toOptionsList');
let inputFrom = document.getElementById('fromInput');
let inputTo = document.getElementById('toInput');
async function fetchCurrencyData() {
  try {
    const responseLatest = await fetch(latestUrl);
    const dataLatest = await responseLatest.json();

    let currencyOptions = Object.entries(dataLatest.conversion_rates).map(([currencyCode, rate]) => {
    const currencyNameArabic = arabicCurrencyNames[currencyCode] || currencyCode;
      return { currencyCode, currencyNameArabic, rate };
    });
    currencyOptions.sort((a, b) => a.currencyNameArabic.localeCompare(b.currencyNameArabic));

    currencyOptions.forEach(({ currencyCode, currencyNameArabic, rate }) => {
      let fromOption = document.createElement('option');
      fromOption.value = currencyCode;
      fromOption.dataset.val =rate;
      fromOption.textContent = `${currencyNameArabic} | ${currencyCode}`;
      fromSelect.appendChild(fromOption);
      let toOption = document.createElement('option');
      toOption.value = currencyCode;
      toOption.dataset.val =rate;
      toOption.textContent = `${currencyNameArabic} | ${currencyCode}`;
      toSelect.appendChild(toOption);
    });
    fromSelect.value = 'USD';
    toSelect.value = 'EGP';
    
    updateOptions()
  } catch (error) {
    console.error('Error fetching currency data:', error);
  }
}

function updateOptions() {
    let selectedFrom = fromSelect.value;
    let selectedTo = toSelect.value;

    Array.from(fromSelect.options).forEach(option => {
      if (option.value && option.value === selectedTo) {
        option.style.display = 'none';
      } else {
        option.style.display = 'block';
      }
    });

    Array.from(toSelect.options).forEach(option => {
      if (option.value && option.value === selectedFrom) {
        option.style.display = 'none';
      } else {
        option.style.display = 'block';
      }

  });
  updateConvertedValue()
}

function updateConvertedValue() {
  if (fromInput.value.trim() === "") {
      toInput.value = "";
      return;
  }
  let fromRate = parseFloat(fromSelect.options[fromSelect.selectedIndex].dataset.val );
  let toRate = parseFloat(toSelect.options[toSelect.selectedIndex].dataset.val);
  let amount = parseFloat(fromInput.value);

  let convertedValue = (amount * toRate) / fromRate;
  toInput.value = convertedValue.toFixed(2);
}


fromInput.addEventListener('input', updateConvertedValue);
fromSelect.addEventListener('change', updateOptions);
toSelect.addEventListener('change', updateOptions);

fetchCurrencyData();

function swap(a, b) {
    return [b, a]; 
}


document.getElementById('swap').addEventListener('click',()=>{
  const [newFromValue, newToValue] = swap(fromSelect.value,toSelect.value);
  fromSelect.value = newFromValue;
  toSelect.value = newToValue;
  updateConvertedValue();
})
