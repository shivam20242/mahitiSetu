import React, { useState } from "react";

// Mock Data with YouTube videos
const schemesData = [
  {
    id: 1,
    name_en: "PMEGP (Prime Minister Employment Generation Programme)",
    name_mr: "प्रधानमंत्री रोजगार निर्मिती कार्यक्रम (PMEGP)",
    eligibility: "Rural entrepreneurs aged 18+, new manufacturing/service units",
    benefits: "Subsidy 15%–35% depending on category & area",
    applyLink: "https://www.kviconline.gov.in/pmegpeportal/jsp/pmegponline.jsp",
    videoUrl: "https://www.youtube.com/embed/5QSh53HsvAI" // Corrected
  },
  {
    id: 2,
    name_en: "Deen Dayal Upadhyaya Grameen Kaushalya Yojana (DDU-GKY)",
    name_mr: "दीनदयाळ उपाध्याय ग्रामीण कौशल्य योजना",
    eligibility: "18–35 years rural youth",
    benefits: "Free skill development + job placement",
    applyLink: "https://ddugky.gov.in/",
    videoUrl: "https://www.youtube.com/embed/zXHoDLgptgA" // Corrected
  },
  {
    id: 3,
    name_en: "PM Formalisation of Micro Food Processing Enterprises (PMFME)",
    name_mr: "पीएम औपचारिक मायक्रो फूड प्रोसेसिंग योजना",
    eligibility: "Rural micro food processing entrepreneurs, SHGs",
    benefits: "35% capital subsidy up to ₹10 lakh",
    applyLink: "https://www.pmfme.mofpi.gov.in",
    videoUrl: "https://www.youtube.com/embed/_YOE-Q2LYrU" // Corrected
  },
  {
    id: 4,
    name_en: "National Rural Livelihood Mission (NRLM)",
    name_mr: "राष्ट्रीय ग्रामीण आजीविका अभियान",
    eligibility: "Rural women SHGs",
    benefits: "Revolving fund, capital subsidy, enterprise support",
    applyLink: "https://aajeevika.gov.in",
    videoUrl: "https://www.youtube.com/embed/1LDTw4vkfRA" // Corrected
  },
  {
    id: 5,
    name_en: "Stand-Up India",
    name_mr: "स्टँड-अप इंडिया",
    eligibility: "SC/ST/Women rural entrepreneurs",
    benefits: "Loan ₹10 lakh–₹1 crore",
    applyLink: "https://www.standupmitra.in",
    videoUrl: "https://www.youtube.com/embed/jcvJOd77HpU" // Corrected
  },
  {
    id: 6,
    name_en: "Mudra Yojana – Shishu/Kishor/Tarun",
    name_mr: "मुद्रा योजना – शिशु/किशोर/तरुण",
    eligibility: "Small rural businesses",
    benefits: "Loan up to ₹10 lakh",
    applyLink: "https://www.mudra.org.in",
    videoUrl: "https://www.youtube.com/embed/1202162531885867" // Note: This was a Facebook URL, but I've changed it to the embed format for completeness. You'll need the actual YouTube video ID here.
  },
  {
    id: 7,
    name_en: "NABARD Rural Entrepreneurship Development Programme (REDP)",
    name_mr: "नाबार्ड ग्रामीण उद्यम विकास कार्यक्रम",
    eligibility: "Rural youth & farmers",
    benefits: "Free training + credit support",
    applyLink: "https://www.nabard.org",
    videoUrl: "https://www.youtube.com/embed/ZlYg5pRWr5c" // Corrected
  },
  {
    id: 8,
    name_en: "ASPIRE Scheme (MSME Incubation for Rural Innovation)",
    name_mr: "अस्पायर योजना – ग्रामीण नवकल्पना व उद्यम",
    eligibility: "Rural startups, agri-tech entrepreneurs",
    benefits: "Funding through incubation centres",
    applyLink: "https://msme.gov.in/aspire",
    videoUrl: "https://www.youtube.com/embed/Tj1fCFVwsHc" // Corrected
  },
  {
    id: 9,
    name_en: "RSETI – Rural Self Employment Training Institutes",
    name_mr: "ग्रामीण स्व-रोजगार प्रशिक्षण संस्था",
    eligibility: "Rural unemployed youth",
    benefits: "Free skill training + business support",
    applyLink: "https://www.nirdpr.org.in/rseti/",
    videoUrl: "https://www.youtube.com/embed/TLyZr5WZpnI" // Corrected
  },
  {
    id: 10,
    name_en: "SFURTI – Scheme of Fund for Regeneration of Traditional Industries",
    name_mr: "परंपरागत उद्योगांसाठी निधी योजना (SFURTI)",
    eligibility: "Rural artisans, craft clusters",
    benefits: "Common facility centers, marketing support",
    applyLink: "https://sfurti.msme.gov.in",
    videoUrl: "https://www.youtube.com/embed/NxeAt59-LI0" // Corrected
  },
  {
    id: 11,
    name_en: "PM-KUSUM Solar Entrepreneurship Scheme",
    name_mr: "पीएम-कुसुम सोलर उद्यम योजना",
    eligibility: "Farmers & rural solar entrepreneurs",
    benefits: "Subsidy for solar pumps & small businesses",
    applyLink: "https://mnre.gov.in",
    videoUrl: "https://www.youtube.com/embed/atKPrVQNsxM" // Corrected
  },
  {
    id: 12,
    name_en: "AGMARKNET & e-NAM Rural Agri Market Scheme",
    name_mr: "ई-नाम ग्रामीण कृषी बाजार योजना",
    eligibility: "Farmers, agri entrepreneurs",
    benefits: "Online trading + better prices",
    applyLink: "https://www.enam.gov.in",
    videoUrl: "https://www.youtube.com/embed/912372896144525" // Note: This was a Facebook URL, but I've changed it to the embed format for completeness. You'll need the actual YouTube video ID here.
  }
];


const toolsData = [
  {
    id: 1,
    name_en: "UPI Payments",
    name_mr: "यूपीआय पेमेंट्स",
    description_en: "Accept instant payments via Google Pay, PhonePe, BHIM UPI apps",
    description_mr: "Google Pay, PhonePe, BHIM यांसारख्या यूपीआय अ‍ॅपद्वारे त्वरित पेमेंट स्वीकारा",
    benefit_en: "Fast, cashless, low-cost transactions",
    benefit_mr: "जलद, कॅशलेस आणि कमी खर्चातील व्यवहार",
    howToUse_en: "1. Download any UPI app (Google Pay, PhonePe, BHIM)\n2. Link your bank account\n3. Create UPI ID\n4. Share your UPI ID or QR code with customers\n5. Receive payments instantly",
    howToUse_mr: "1. कोणतेही UPI अ‍ॅप डाउनलोड करा (Google Pay, PhonePe, BHIM)\n2. बँक खाते जोडा\n3. UPI ID तयार करा\n4. ग्राहकांना UPI ID किंवा QR कोड शेअर करा\n5. त्वरित पेमेंट मिळवा"
  },
  {
    id: 2,
    name_en: "WhatsApp Business",
    name_mr: "व्हॉट्सअ‍ॅप बिझनेस",
    description_en: "Chat, catalog and quick replies to manage customer communication",
    description_mr: "ग्राहक संवादासाठी चॅट, कॅटलॉग आणि जलद उत्तरांचा वापर करा",
    benefit_en: "Simple customer contact, order taking and support",
    benefit_mr: "सोपे ग्राहक संपर्क, ऑर्डर घेणे आणि समर्थन",
    howToUse_en: "1. Download WhatsApp Business app\n2. Set up business profile with name, address, hours\n3. Create product catalog with photos and prices\n4. Set up quick replies for common questions\n5. Start chatting with customers",
    howToUse_mr: "1. WhatsApp Business अ‍ॅप डाउनलोड करा\n2. नाव, पत्ता, वेळ यांसह व्यवसाय प्रोफाइल सेट करा\n3. फोटो आणि किमतींसह उत्पादन कॅटलॉग तयार करा\n4. सामान्य प्रश्नांसाठी जलद उत्तरे सेट करा\n5. ग्राहकांशी चॅट करणे सुरू करा"
  },
  {
    id: 3,
    name_en: "Google My Business",
    name_mr: "गूगल माय बिझनेस",
    description_en: "List local business on Google Search & Maps to improve discoverability",
    description_mr: "गूगल सर्च व मॅपवर व्यवसाय नोंदवा — अधिक दृश्यमानता मिळवा",
    benefit_en: "Free visibility and customer leads",
    benefit_mr: "मुक्त दृश्यता आणि ग्राहक लीड्स",
    howToUse_en: "1. Visit google.com/business\n2. Sign in with Google account\n3. Enter business name and address\n4. Verify via phone or postcard\n5. Add photos, hours, and services\n6. Respond to customer reviews",
    howToUse_mr: "1. google.com/business ला भेट द्या\n2. Google खात्याने साइन इन करा\n3. व्यवसायाचे नाव आणि पत्ता प्रविष्ट करा\n4. फोन किंवा पोस्टकार्डद्वारे सत्यापित करा\n5. फोटो, वेळ आणि सेवा जोडा\n6. ग्राहक पुनरावलोकनांना प्रतिसाद द्या"
  },
  {
    id: 4,
    name_en: "Facebook & Instagram Business",
    name_mr: "फेसबुक व इन्स्टाग्राम बिझनेस",
    description_en: "Create posts, stories and ads to reach local customers",
    description_mr: "पोस्ट, स्टोरी आणि जाहिरातीद्वारे स्थानिक ग्राहकांपर्यंत पोहोचा",
    benefit_en: "Affordable local advertising and audience targeting",
    benefit_mr: "परवडणारे स्थानिक जाहिराती व लक्ष्यीकरण",
    howToUse_en: "1. Create Facebook Business Page\n2. Link Instagram Business account\n3. Post product photos and videos regularly\n4. Use local hashtags\n5. Run targeted ads for ₹100-500/day\n6. Engage with customer comments",
    howToUse_mr: "1. Facebook Business पेज तयार करा\n2. Instagram Business खाते जोडा\n3. नियमितपणे उत्पादन फोटो आणि व्हिडिओ पोस्ट करा\n4. स्थानिक हॅशटॅग वापरा\n5. ₹100-500/दिवस साठी लक्ष्यित जाहिराती चालवा\n6. ग्राहक टिप्पण्यांशी संवाद साधा"
  },
  {
    id: 5,
    name_en: "YouTube Channel",
    name_mr: "यूट्यूब चॅनल",
    description_en: "Upload product demos, how-tos and testimonials to build trust",
    description_mr: "उत्पादन डेमो, कसे-करावे आणि ग्राहक बोलणे यांचा व्हिडिओ अपलोड करा",
    benefit_en: "Long-form engagement and search visibility",
    benefit_mr: "दीर्घकालीन व्यस्तता व शोध दृश्यता",
    howToUse_en: "1. Create YouTube channel with Google account\n2. Record videos using smartphone\n3. Upload product demos and tutorials\n4. Add clear titles in local language\n5. Share videos on WhatsApp and social media\n6. Respond to viewer comments",
    howToUse_mr: "1. Google खात्याने YouTube चॅनल तयार करा\n2. स्मार्टफोनद्वारे व्हिडिओ रेकॉर्ड करा\n3. उत्पादन डेमो आणि ट्यूटोरियल अपलोड करा\n4. स्थानिक भाषेत स्पष्ट शीर्षके जोडा\n5. WhatsApp आणि सोशल मीडियावर व्हिडिओ शेअर करा\n6. दर्शक टिप्पण्यांना प्रतिसाद द्या"
  },
  {
    id: 6,
    name_en: "Google Forms & Sheets",
    name_mr: "Google Forms व Sheets",
    description_en: "Simple tools for order forms, customer lists and inventory tracking",
    description_mr: "ऑर्डर फॉर्म, ग्राहक सूची व स्टॉक ट्रॅकिंगसाठी सोपे टूल्स",
    benefit_en: "Free and easy data collection & management",
    benefit_mr: "मुक्त व सोपी डेटा गोळा करणे व व्यवस्थापन",
    howToUse_en: "1. Open Google Forms (forms.google.com)\n2. Create order form or survey\n3. Share link with customers\n4. Responses auto-save to Google Sheets\n5. Track orders and inventory in Sheets\n6. Use on any device, anywhere",
    howToUse_mr: "1. Google Forms उघडा (forms.google.com)\n2. ऑर्डर फॉर्म किंवा सर्वेक्षण तयार करा\n3. ग्राहकांसह लिंक शेअर करा\n4. प्रतिसाद Google Sheets मध्ये ऑटो-सेव्ह होतात\n5. Sheets मध्ये ऑर्डर आणि इन्व्हेंटरी ट्रॅक करा\n6. कोणत्याही डिव्हाइसवर, कुठेही वापरा"
  },
  {
    id: 7,
    name_en: "Paytm / Razorpay / Instamojo (Payment Gateway)",
    name_mr: "पेमेंट गेटवे (Paytm/Razorpay/Instamojo)",
    description_en: "Enable card, UPI and wallet payments for online orders",
    description_mr: "ऑनलाइन ऑर्डरसाठी कार्ड, यूपीआय व वॉलेट पेमेंट सक्षम करा",
    benefit_en: "Secure online payments and settlement",
    benefit_mr: "सुरक्षित ऑनलाइन पेमेंट व रकमाचे निष्पादन",
    howToUse_en: "1. Sign up on Paytm/Razorpay/Instamojo\n2. Complete KYC verification\n3. Create payment links or buttons\n4. Share links with customers\n5. Customer pays via card/UPI/wallet\n6. Money settles to your bank in 1-3 days",
    howToUse_mr: "1. Paytm/Razorpay/Instamojo वर साइन अप करा\n2. KYC सत्यापन पूर्ण करा\n3. पेमेंट लिंक किंवा बटणे तयार करा\n4. ग्राहकांसह लिंक शेअर करा\n5. ग्राहक कार्ड/UPI/वॉलेटद्वारे पैसे देतो\n6. पैसे 1-3 दिवसांत तुमच्या बँकेत जमा होतात"
  },
  {
    id: 8,
    name_en: "Phone-based POS Apps",
    name_mr: "फोन-आधारित POS अ‍ॅप्स",
    description_en: "Turn smartphone into billing & invoicing terminal",
    description_mr: "स्मार्टफोनद्वारे बिलिंग व चलनव्यवहार करा",
    benefit_en: "Low-cost sales tracking and receipts",
    benefit_mr: "कमी खर्चातील विक्री ट्रॅकिंग व पावत्या",
    howToUse_en: "1. Download POS app (myBillBook, Khatabook, etc.)\n2. Add your products with prices\n3. Create bill when customer purchases\n4. Share digital receipt via WhatsApp/SMS\n5. Track daily sales automatically\n6. View reports and inventory",
    howToUse_mr: "1. POS अ‍ॅप डाउनलोड करा (myBillBook, Khatabook, इ.)\n2. किमतींसह उत्पादने जोडा\n3. ग्राहक खरेदी करतो तेव्हा बिल तयार करा\n4. WhatsApp/SMS द्वारे डिजिटल पावती शेअर करा\n5. दररोजची विक्री आपोआप ट्रॅक करा\n6. अहवाल आणि इन्व्हेंटरी पहा"
  },
  {
    id: 9,
    name_en: "WhatsApp Catalog + Payment Links",
    name_mr: "व्हॉट्सअ‍ॅप कॅटलॉग + पेमेंट लिंक्स",
    description_en: "Show product catalog and send payment links directly in chat",
    description_mr: "उत्पादन कॅटलॉग दाखवा व पेमेंट लिंक थेट चॅटमध्ये पाठवा",
    benefit_en: "Smooth order-to-payment flow",
    benefit_mr: "सुलभ ऑर्डर-ते-पेमेंट प्रवाह",
    howToUse_en: "1. Set up WhatsApp Business catalog\n2. Add products with photos and prices\n3. Customer browses catalog in chat\n4. Generate payment link (Paytm/Razorpay)\n5. Send payment link in WhatsApp\n6. Confirm order after payment received",
    howToUse_mr: "1. WhatsApp Business कॅटलॉग सेट करा\n2. फोटो आणि किमतींसह उत्पादने जोडा\n3. ग्राहक चॅटमध्ये कॅटलॉग पाहतो\n4. पेमेंट लिंक तयार करा (Paytm/Razorpay)\n5. WhatsApp मध्ये पेमेंट लिंक पाठवा\n6. पेमेंट मिळाल्यानंतर ऑर्डर पुष्टी करा"
  },
  {
    id: 10,
    name_en: "Local eCommerce Marketplaces",
    name_mr: "स्थानिक ई-कॉमर्स मार्केटप्लेस",
    description_en: "List products on regional marketplaces and agri platforms",
    description_mr: "प्रादेशिक मार्केटप्लेस व कृषी प्लॅटफॉर्मवर उत्पादन नोंदवा",
    benefit_en: "Wider market access without heavy tech",
    benefit_mr: "भारी तंत्रज्ञानांशिवाय विस्तृत बाजार प्रवेश",
    howToUse_en: "1. Register on local marketplace (Meesho, GlowRoad, etc.)\n2. Upload product photos and details\n3. Set prices and delivery areas\n4. Receive orders on app/WhatsApp\n5. Pack and ship products\n6. Receive payment after delivery",
    howToUse_mr: "1. स्थानिक मार्केटप्लेसवर नोंदणी करा (Meesho, GlowRoad, इ.)\n2. उत्पादन फोटो आणि तपशील अपलोड करा\n3. किमती आणि डिलिव्हरी क्षेत्रे सेट करा\n4. अ‍ॅप/WhatsApp वर ऑर्डर मिळवा\n5. उत्पादने पॅक करा आणि पाठवा\n6. डिलिव्हरीनंतर पेमेंट मिळवा"
  },
  {
    id: 11,
    name_en: "Farm-to-Consumer Platforms (e-NAM / Local Aggregators)",
    name_mr: "शेतकरी-ते-ग्राहक प्लॅटफॉर्म (e-NAM/अ‍ॅग्रिगेटर्स)",
    description_en: "Sell produce directly to buyers through aggregator platforms",
    description_mr: "अ‍ॅग्रिगेटर प्लॅटफॉर्मद्वारे थेट खरेदीदारांना विक्री करा",
    benefit_en: "Better price discovery and reduced middlemen",
    benefit_mr: "उत्तम किमती व मध्यम्यांची कमी",
    howToUse_en: "1. Register on e-NAM portal (enam.gov.in)\n2. Upload produce details and quantity\n3. Set minimum price\n4. Buyers bid on your produce\n5. Accept best offer\n6. Arrange transport and delivery\n7. Receive payment directly",
    howToUse_mr: "1. e-NAM पोर्टलवर नोंदणी करा (enam.gov.in)\n2. उत्पादन तपशील आणि प्रमाण अपलोड करा\n3. किमान किमत सेट करा\n4. खरेदीदार तुमच्या उत्पादनावर बोली लावतात\n5. सर्वोत्तम ऑफर स्वीकारा\n6. वाहतूक आणि डिलिव्हरी व्यवस्था करा\n7. थेट पेमेंट मिळवा"
  },
  {
    id: 12,
    name_en: "Basic Inventory Apps",
    name_mr: "मूळ इन्व्हेंटरी अ‍ॅप्स",
    description_en: "Track stock levels, reorder alerts and product variants",
    description_mr: "स्टॉक पातळी, पुनर्निर्देशन सूचना व उत्पादन प्रकार ट्रॅक करा",
    benefit_en: "Prevent stockouts and improve fulfilment",
    benefit_mr: "स्टॉकआउट टाळा व पूर्ती सुधारित करा",
    howToUse_en: "1. Download inventory app (Zoho Inventory, etc.)\n2. Add all products with quantities\n3. Update stock after each sale\n4. Set low stock alerts\n5. App notifies when reorder needed\n6. Generate stock reports",
    howToUse_mr: "1. इन्व्हेंटरी अ‍ॅप डाउनलोड करा (Zoho Inventory, इ.)\n2. प्रमाणांसह सर्व उत्पादने जोडा\n3. प्रत्येक विक्रीनंतर स्टॉक अपडेट करा\n4. कमी स्टॉक सूचना सेट करा\n5. पुनर्क्रयाची आवश्यकता असताना अ‍ॅप सूचित करते\n6. स्टॉक अहवाल तयार करा"
  },
  {
    id: 13,
    name_en: "Simple Accounting Apps (GST-ready)",
    name_mr: "सोपे अकाउंटिंग अ‍ॅप (GST-योग्य)",
    description_en: "Record sales, expenses and generate basic GST invoices",
    description_mr: "विक्री, खर्च नोंदवा व GST इनवॉइस तयार करा",
    benefit_en: "Tax compliance and financial clarity",
    benefit_mr: "कर पालन व आर्थिक स्पष्टता",
    howToUse_en: "1. Download GST accounting app (Tally, Busy, etc.)\n2. Enter business and GST details\n3. Record all sales and purchases\n4. Generate GST invoices automatically\n5. File GST returns through app\n6. View profit/loss reports",
    howToUse_mr: "1. GST अकाउंटिंग अ‍ॅप डाउनलोड करा (Tally, Busy, इ.)\n2. व्यवसाय आणि GST तपशील प्रविष्ट करा\n3. सर्व विक्री आणि खरेदी नोंदवा\n4. आपोआप GST इनवॉइस तयार करा\n5. अ‍ॅपद्वारे GST रिटर्न भरा\n6. नफा/तोटा अहवाल पहा"
  },
  {
    id: 14,
    name_en: "SMS & IVR Customer Alerts",
    name_mr: "SMS व IVR ग्राहक सूचना",
    description_en: "Automated order confirmations and delivery updates via SMS/IVR",
    description_mr: "SMS/IVR द्वारे ऑटोमेटेड ऑर्डर पुष्टी व डिलिव्हरी अपडेट",
    benefit_en: "Improves customer trust and reduces calls",
    benefit_mr: "ग्राहक विश्वास वाढवतो व कॉल कमी करतो",
    howToUse_en: "1. Sign up for SMS service (MSG91, Textlocal, etc.)\n2. Set up automated message templates\n3. Integrate with your order system\n4. Auto-send order confirmation SMS\n5. Send delivery status updates\n6. Track SMS delivery reports",
    howToUse_mr: "1. SMS सेवेसाठी साइन अप करा (MSG91, Textlocal, इ.)\n2. स्वयंचलित संदेश टेम्पलेट सेट करा\n3. तुमच्या ऑर्डर सिस्टमशी एकत्रित करा\n4. ऑर्डर पुष्टी SMS ऑटो-पाठवा\n5. डिलिव्हरी स्थिती अपडेट पाठवा\n6. SMS डिलिव्हरी अहवाल ट्रॅक करा"
  },
  {
    id: 15,
    name_en: "Local Language Content Tools",
    name_mr: "स्थानिक भाषेतील कंटेंट टूल्स",
    description_en: "Create marketing materials in Marathi and other local languages",
    description_mr: "मराठी व स्थानिक भाषांमध्ये मार्केटिंग साहित्य तयार करा",
    benefit_en: "Better connection with local customers",
    benefit_mr: "स्थानिक ग्राहकांशी चांगला जोड",
    howToUse_en: "1. Use Canva or similar design tools\n2. Select Marathi/local language templates\n3. Add product photos and text\n4. Create posters, flyers, social posts\n5. Download and share on WhatsApp/Facebook\n6. Print for physical distribution",
    howToUse_mr: "1. Canva किंवा समान डिझाइन टूल्स वापरा\n2. मराठी/स्थानिक भाषा टेम्पलेट निवडा\n3. उत्पादन फोटो आणि मजकूर जोडा\n4. पोस्टर, फ्लायर, सोशल पोस्ट तयार करा\n5. WhatsApp/Facebook वर डाउनलोड आणि शेअर करा\n6. भौतिक वितरणासाठी प्रिंट करा"
  },
  {
    id: 16,
    name_en: "Farmer Producer Organization Platforms (FPO Tools)",
    name_mr: "शेतकरी उत्पादक संघटन (FPO) टूल्स",
    description_en: "Tools to manage group procurement, sales and aggregation",
    description_mr: "गट खरेदी, विक्री व एकत्रीकरण व्यवस्थापित करण्यासाठी टूल्स",
    benefit_en: "Collective bargaining and scale benefits",
    benefit_mr: "सामूहिक वाटाघाट व प्रमाण फायदे",
    howToUse_en: "1. Form FPO with 10+ farmers\n2. Register with government portal\n3. Use FPO management software\n4. Pool produce from members\n5. Negotiate bulk prices with buyers\n6. Distribute profits to members",
    howToUse_mr: "1. 10+ शेतकऱ्यांसह FPO तयार करा\n2. सरकारी पोर्टलवर नोंदणी करा\n3. FPO व्यवस्थापन सॉफ्टवेअर वापरा\n4. सदस्यांकडून उत्पादन एकत्र करा\n5. खरेदीदारांसह मोठ्या प्रमाणात किमतींवर वाटाघाटी करा\n6. सदस्यांना नफा वितरित करा"
  },
  {
    id: 17,
    name_en: "Micro-Insurance Enrollment Tools",
    name_mr: "सूक्ष्म-विमा नावनोंदणी टूल्स",
    description_en: "Enroll rural customers in crop, livestock and health micro-insurance",
    description_mr: "कृषी, पशुपालन व आरोग्य सूक्ष्म-विम्यांमध्ये नावनोंदणी करा",
    benefit_en: "Risk protection for small entrepreneurs",
    benefit_mr: "लहान उद्योजकांसाठी जोखीम संरक्षण",
    howToUse_en: "1. Visit insurance company website/app\n2. Select micro-insurance plan\n3. Enter Aadhaar and business details\n4. Pay small premium (₹50-500)\n5. Receive policy on mobile\n6. Claim through app if needed",
    howToUse_mr: "1. विमा कंपनीच्या वेबसाइट/अ‍ॅपला भेट द्या\n2. सूक्ष्म-विमा योजना निवडा\n3. आधार आणि व्यवसाय तपशील प्रविष्ट करा\n4. लहान प्रीमियम भरा (₹50-500)\n5. मोबाईलवर पॉलिसी मिळवा\n6. आवश्यक असल्यास अ‍ॅपद्वारे दावा करा"
  },
  {
    id: 18,
    name_en: "Simple E-invoicing & QR Billing",
    name_mr: "ई-इनवॉइसिंग व QR बिलिंग",
    description_en: "Generate QR-based receipts and e-invoices to ease payments",
    description_mr: "पेमेंट सुलभ करण्यासाठी QR पावती व ई-इनवॉइस तयार करा",
    benefit_en: "Professional receipts and faster reconciliation",
    benefit_mr: "व्यावसायिक पावत्या व वेगवान समर्पण",
    howToUse_en: "1. Use billing app with QR feature\n2. Generate invoice with QR code\n3. Customer scans QR to pay instantly\n4. Payment auto-reconciled\n5. Send e-invoice via email/WhatsApp\n6. Track all payments digitally",
    howToUse_mr: "1. QR वैशिष्ट्यासह बिलिंग अ‍ॅप वापरा\n2. QR कोडसह इनवॉइस तयार करा\n3. ग्राहक त्वरित पेमेंट करण्यासाठी QR स्कॅन करतो\n4. पेमेंट ऑटो-समर्पित\n5. ईमेल/WhatsApp द्वारे ई-इनवॉइस पाठवा\n6. सर्व पेमेंट डिजिटली ट्रॅक करा"
  },
  {
    id: 19,
    name_en: "Local Logistics & Last-mile Apps",
    name_mr: "स्थानिक लॉजिस्टिक्स व लास्ट-माइल अ‍ॅप्स",
    description_en: "Connect to affordable transport for product delivery",
    description_mr: "उत्पादन वितरणासाठी परवडणारे वाहतूक जोडणी",
    benefit_en: "Reduced delivery costs and better coverage",
    benefit_mr: "कमी वितरण खर्च व चांगले कव्हरेज",
    howToUse_en: "1. Register on local delivery app (Dunzo, Porter, etc.)\n2. Enter pickup and delivery addresses\n3. Select vehicle type\n4. Book delivery slot\n5. Track delivery in real-time\n6. Customer receives product, you get confirmation",
    howToUse_mr: "1. स्थानिक डिलिव्हरी अ‍ॅपवर नोंदणी करा (Dunzo, Porter, इ.)\n2. पिकअप आणि डिलिव्हरी पत्ते प्रविष्ट करा\n3. वाहन प्रकार निवडा\n4. डिलिव्हरी स्लॉट बुक करा\n5. रिअल-टाइममध्ये डिलिव्हरी ट्रॅक करा\n6. ग्राहकाला उत्पादन मिळते, तुम्हाला पुष्टी मिळते"
  },
  {
    id: 20,
    name_en: "Government e-Services & eKYC Tools",
    name_mr: "शासन ई-सेवा व eKYC टूल्स",
    description_en: "Access to digital IDs, subsidy portals and online registrations",
    description_mr: "डिजिटल आयडी, सब्सिडी पोर्टल व ऑनलाइन नोंदणी उपलब्ध करा",
    benefit_en: "Simplifies application for schemes and subsidies",
    benefit_mr: "योजना व सब्सिडीसाठी अर्ज सोपे करते",
    howToUse_en: "1. Visit Digilocker or UMANG app\n2. Link Aadhaar for eKYC\n3. Access digital documents (PAN, licenses)\n4. Apply for government schemes online\n5. Track application status\n6. Receive benefits directly in bank",
    howToUse_mr: "1. Digilocker किंवा UMANG अ‍ॅपला भेट द्या\n2. eKYC साठी आधार जोडा\n3. डिजिटल दस्तऐवज मिळवा (PAN, परवाने)\n4. ऑनलाइन सरकारी योजनांसाठी अर्ज करा\n5. अर्ज स्थिती ट्रॅक करा\n6. थेट बँकेत लाभ मिळवा"
  }
];


// Featured videos for home page
const homeVideos = [
  {
    id: 1,
    title_en: "PMEGP (Prime Minister Employment Generation Programme)",
    title_mr: "प्रधानमंत्री रोजगार निर्मिती कार्यक्रम (PMEGP)",
    videoUrl: "https://www.youtube.com/embed/5QSh53HsvAI"
  },
  {
    id: 2,
    title_en: "Deen Dayal Upadhyaya Grameen Kaushalya Yojana (DDU-GKY)",
    title_mr: "दीनदयाळ उपाध्याय ग्रामीण कौशल्य योजना",
    videoUrl: "https://www.youtube.com/embed/zXHoDLgptgA"
  },
  {
    id: 3,
    title_en: "PM Formalisation of Micro Food Processing Enterprises (PMFME)",
    title_mr: "पीएम औपचारिक मायक्रो फूड प्रोसेसिंग योजना",
    videoUrl: "https://www.youtube.com/embed/_YOE-Q2LYrU"
  }
];

// Simple Navbar
const Navbar = ({ currentPage, setCurrentPage }) => {
  return (
    <nav className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold text-green-700">माहितीसेतु</h1>
        <div className="flex gap-6">
          {["home", "schemes", "tools", "contact"].map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`capitalize ${
                currentPage === page
                  ? "text-green-700 font-semibold"
                  : "text-gray-600 hover:text-green-600"
              }`}
            >
              {page}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

// Scheme Card with Video
const SchemeCard = ({ scheme, lang }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:border-green-500 transition-colors">
      {/* YouTube Video */}
      <div className="aspect-video">
        <iframe
          width="100%"
          height="100%"
          src={scheme.videoUrl}
          title={lang === "mr" ? scheme.name_mr : scheme.name_en}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      
      {/* Content */}
      <div className="p-5">
        <h3 className="text-lg font-semibold text-gray-900 mb-3">
          {lang === "mr" ? scheme.name_mr : scheme.name_en}
        </h3>
        <p className="text-sm text-gray-600 mb-2">
          <span className="font-medium">Eligibility:</span> {scheme.eligibility}
        </p>
        <p className="text-sm text-gray-600 mb-4">
          <span className="font-medium">Benefits:</span> {scheme.benefits}
        </p>
        <a
          href={scheme.applyLink}
          className="text-green-700 text-sm font-medium hover:underline"
        >
          {lang === "mr" ? "अर्ज करा →" : "Apply Now →"}
        </a>
      </div>
    </div>
  );
};

// Simple Tool Card
const ToolCard = ({ tool, lang }) => {
  const [showHowToUse, setShowHowToUse] = useState(false);

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-5 hover:border-blue-500 transition-colors">
      <h3 className="text-lg font-semibold text-gray-900 mb-2">
        {lang === "mr" ? tool.name_mr : tool.name_en}
      </h3>
      <p className="text-sm text-gray-600 mb-3">
        {lang === "mr" ? tool.description_mr : tool.description_en}
      </p>
      <p className="text-sm text-gray-700 mb-3">
        <span className="font-medium">
          {lang === "mr" ? "फायदा: " : "Benefit: "}
        </span>
        {lang === "mr" ? tool.benefit_mr : tool.benefit_en}
      </p>
      
      {/* How to Use Toggle Button */}
      <button
        onClick={() => setShowHowToUse(!showHowToUse)}
        className="text-blue-600 text-sm font-medium hover:underline flex items-center gap-1"
      >
        {lang === "mr" ? "कसे वापरावे" : "How to Use"}
        <span className="text-xs">{showHowToUse ? "▲" : "▼"}</span>
      </button>

      {/* How to Use Content */}
      {showHowToUse && (
        <div className="mt-3 pt-3 border-t border-gray-200">
          <ol className="text-sm text-gray-600 leading-relaxed space-y-1">
            {(lang === "mr" ? tool.howToUse_mr : tool.howToUse_en)
              .split('\n')
              .map((step, index) => (
                <li key={index} className="pl-1">
                  {step}
                </li>
              ))}
          </ol>
        </div>
      )}
    </div>
  );
};

// Home Page with Videos
const Home = ({ lang, setLang, setCurrentPage }) => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <div className="flex justify-end mb-8">
        <button
          onClick={() => setLang(lang === "en" ? "mr" : "en")}
          className="text-sm bg-gray-100 px-4 py-2 rounded-md hover:bg-gray-200"
        >
          {lang === "en" ? "मराठी" : "English"}
        </button>
      </div>

      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">
          {lang === "en" ? "MahitiSetu" : "माहितीसेतु"}
        </h1>

        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          {lang === "en"
            ? "Your guide to government schemes and digital tools for rural business growth"
            : "ग्रामीण व्यवसाय वाढीसाठी शासकीय योजना आणि डिजिटल साधनांचा तुमचा मार्गदर्शक"}
        </p>

        <div className="flex justify-center gap-4 flex-wrap">
          <button 
            onClick={() => setCurrentPage("schemes")}
            className="bg-green-600 text-white px-8 py-3 rounded-md hover:bg-green-700"
          >
            {lang === "en" ? "Explore Schemes" : "योजना पहा"}
          </button>
          <button 
            onClick={() => setCurrentPage("tools")}
            className="bg-white border-2 border-green-600 text-green-600 px-8 py-3 rounded-md hover:bg-green-50"
          >
            {lang === "en" ? "Digital Tools" : "डिजिटल साधने"}
          </button>
          <button 
            onClick={() => setCurrentPage("contact")}
            className="bg-gray-600 text-white px-8 py-3 rounded-md hover:bg-gray-700"
          >
            {lang === "en" ? "Contact Us" : "संपर्क करा"}
          </button>
        </div>
      </div>

      {/* Featured Videos Section */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
          {lang === "en" ? "Featured Videos" : "विशेष व्हिडिओ"}
        </h2>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {homeVideos.map((video) => (
            <div key={video.id} className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:border-green-500 transition-colors">
              <div className="aspect-video">
                <iframe
                  width="100%"
                  height="100%"
                  src={video.videoUrl}
                  title={lang === "mr" ? video.title_mr : video.title_en}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="p-4">
                <h3 className="text-md font-semibold text-gray-900">
                  {lang === "mr" ? video.title_mr : video.title_en}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Info Section */}
      <div className="text-center text-gray-600 max-w-2xl mx-auto bg-green-50 p-8 rounded-lg">
        <p className="text-lg">
          {lang === "en"
            ? "MahitiSetu helps you understand government schemes, digital finance, and online marketing in simple Marathi."
            : "माहितीसेतु तुम्हाला शासकीय योजना, डिजिटल व्यवहार आणि ऑनलाइन मार्केटिंग सोप्या मराठीत समजावतो."}
        </p>
      </div>
    </div>
  );
};

// Schemes Page
const Schemes = ({ lang, setLang }) => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">
          {lang === "mr" ? "शासकीय योजना" : "Government Schemes"}
        </h1>
        <button
          onClick={() => setLang(lang === "en" ? "mr" : "en")}
          className="text-sm bg-gray-100 px-4 py-2 rounded-md hover:bg-gray-200"
        >
          {lang === "en" ? "मराठी" : "English"}
        </button>
      </div>

      <p className="text-gray-600 mb-8">
        {lang === "en"
          ? "Watch videos to understand each scheme better and learn how to apply"
          : "प्रत्येक योजना चांगल्या प्रकारे समजून घेण्यासाठी आणि अर्ज कसा करावा हे शिकण्यासाठी व्हिडिओ पहा"}
      </p>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {schemesData.map((scheme) => (
          <SchemeCard key={scheme.id} scheme={scheme} lang={lang} />
        ))}
      </div>
    </div>
  );
};

// Tools Page
const Tools = ({ lang, setLang }) => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">
          {lang === "en" ? "Digital Tools" : "डिजिटल साधने"}
        </h1>
        <button
          onClick={() => setLang(lang === "en" ? "mr" : "en")}
          className="text-sm bg-gray-100 px-4 py-2 rounded-md hover:bg-gray-200"
        >
          {lang === "en" ? "मराठी" : "English"}
        </button>
      </div>

      <p className="text-gray-600 mb-8 max-w-2xl">
        {lang === "en"
          ? "Simple digital tools to help grow your business"
          : "तुमचा व्यवसाय वाढवण्यासाठी साधी डिजिटल साधने"}
      </p>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {toolsData.map((tool) => (
          <ToolCard key={tool.id} tool={tool} lang={lang} />
        ))}
      </div>
    </div>
  );
};

// Contact Page
const Contact = ({ lang, setLang }) => {
  const [form, setForm] = useState({ name: "", message: "" });

  const handleSubmit = () => {
    if (!form.name || !form.message) {
      alert(lang === "en" ? "Please fill all fields" : "कृपया सर्व फील्ड भरा");
      return;
    }
    alert(lang === "en" ? "Thank you for contacting us!" : "आपल्या संपर्काबद्दल धन्यवाद!");
    setForm({ name: "", message: "" });
  };

  return (
    <div className="max-w-2xl mx-auto px-6 py-12">
      <div className="flex justify-end mb-8">
        <button
          onClick={() => setLang(lang === "en" ? "mr" : "en")}
          className="text-sm bg-gray-100 px-4 py-2 rounded-md hover:bg-gray-200"
        >
          {lang === "en" ? "मराठी" : "English"}
        </button>
      </div>

      <h1 className="text-3xl font-bold text-gray-900 mb-4">
        {lang === "en" ? "Contact Us" : "संपर्क करा"}
      </h1>

      <p className="text-gray-600 mb-8">
        {lang === "en"
          ? "Have questions? We're here to help"
          : "काही प्रश्न आहेत? आम्ही मदत करण्यासाठी येथे आहोत"}
      </p>

      <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
        <div className="mb-5">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {lang === "en" ? "Your Name" : "आपले नाव"}
          </label>
          <input
            type="text"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        <div className="mb-5">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {lang === "en" ? "Message" : "संदेश"}
          </label>
          <textarea
            rows="4"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        <button
          onClick={handleSubmit}
          className="w-full bg-green-600 text-white py-3 rounded-md hover:bg-green-700"
        >
          {lang === "en" ? "Send Message" : "संदेश पाठवा"}
        </button>
      </div>

      <div className="text-center text-gray-600 space-y-2">
        <p>{lang === "en" ? "📞 Helpline: +91 98765 43210" : "📞 मदत क्रमांक: +९१ ९८७६५ ४३२१०"}</p>
        <p>{lang === "en" ? "💬 WhatsApp Support Available" : "💬 व्हॉट्सअ‍ॅप सहाय्य उपलब्ध"}</p>
      </div>
    </div>
  );
};

// Main App
export default function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [lang, setLang] = useState("en");

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      
      {currentPage === "home" && <Home lang={lang} setLang={setLang} setCurrentPage={setCurrentPage} />}
      {currentPage === "schemes" && <Schemes lang={lang} setLang={setLang} />}
      {currentPage === "tools" && <Tools lang={lang} setLang={setLang} />}
      {currentPage === "contact" && <Contact lang={lang} setLang={setLang} />}
    </div>
  );
}