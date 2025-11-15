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
    benefit_mr: "जलद, कॅशलेस आणि कमी खर्चातील व्यवहार"
  },
  {
    id: 2,
    name_en: "WhatsApp Business",
    name_mr: "व्हॉट्सअ‍ॅप बिझनेस",
    description_en: "Chat, catalog and quick replies to manage customer communication",
    description_mr: "ग्राहक संवादासाठी चॅट, कॅटलॉग आणि जलद उत्तरांचा वापर करा",
    benefit_en: "Simple customer contact, order taking and support",
    benefit_mr: "सोपे ग्राहक संपर्क, ऑर्डर घेणे आणि समर्थन"
  },
  {
    id: 3,
    name_en: "Google My Business",
    name_mr: "गूगल माय बिझनेस",
    description_en: "List local business on Google Search & Maps to improve discoverability",
    description_mr: "गूगल सर्च व मॅपवर व्यवसाय नोंदवा — अधिक दृश्यमानता मिळवा",
    benefit_en: "Free visibility and customer leads",
    benefit_mr: "मुक्त दृश्यता आणि ग्राहक लीड्स"
  },
  {
    id: 4,
    name_en: "Facebook & Instagram Business",
    name_mr: "फेसबुक व इन्स्टाग्राम बिझनेस",
    description_en: "Create posts, stories and ads to reach local customers",
    description_mr: "पोस्ट, स्टोरी आणि जाहिरातीद्वारे स्थानिक ग्राहकांपर्यंत पोहोचा",
    benefit_en: "Affordable local advertising and audience targeting",
    benefit_mr: "परवडणारे स्थानिक जाहिराती व लक्ष्यीकरण"
  },
  {
    id: 5,
    name_en: "YouTube Channel",
    name_mr: "यूट्यूब चॅनल",
    description_en: "Upload product demos, how-tos and testimonials to build trust",
    description_mr: "उत्पादन डेमो, कसे-करावे आणि ग्राहक बोलणे यांचा व्हिडिओ अपलोड करा",
    benefit_en: "Long-form engagement and search visibility",
    benefit_mr: "दीर्घकालीन व्यस्तता व शोध दृश्यता"
  },
  {
    id: 6,
    name_en: "Google Forms & Sheets",
    name_mr: "Google Forms व Sheets",
    description_en: "Simple tools for order forms, customer lists and inventory tracking",
    description_mr: "ऑर्डर फॉर्म, ग्राहक सूची व स्टॉक ट्रॅकिंगसाठी सोपे टूल्स",
    benefit_en: "Free and easy data collection & management",
    benefit_mr: "मुक्त व सोपी डेटा गोळा करणे व व्यवस्थापन"
  },
  {
    id: 7,
    name_en: "Paytm / Razorpay / Instamojo (Payment Gateway)",
    name_mr: "पेमेंट गेटवे (Paytm/Razorpay/Instamojo)",
    description_en: "Enable card, UPI and wallet payments for online orders",
    description_mr: "ऑनलाइन ऑर्डरसाठी कार्ड, यूपीआय व वॉलेट पेमेंट सक्षम करा",
    benefit_en: "Secure online payments and settlement",
    benefit_mr: "सुरक्षित ऑनलाइन पेमेंट व रकमाचे निष्पादन"
  },
  {
    id: 8,
    name_en: "Phone-based POS Apps",
    name_mr: "फोन-आधारित POS अ‍ॅप्स",
    description_en: "Turn smartphone into billing & invoicing terminal",
    description_mr: "स्मार्टफोनद्वारे बिलिंग व चलनव्यवहार करा",
    benefit_en: "Low-cost sales tracking and receipts",
    benefit_mr: "कमी खर्चातील विक्री ट्रॅकिंग व पावत्या"
  },
  {
    id: 9,
    name_en: "WhatsApp Catalog + Payment Links",
    name_mr: "व्हॉट्सअ‍ॅप कॅटलॉग + पेमेंट लिंक्स",
    description_en: "Show product catalog and send payment links directly in chat",
    description_mr: "उत्पादन कॅटलॉग दाखवा व पेमेंट लिंक थेट चॅटमध्ये पाठवा",
    benefit_en: "Smooth order-to-payment flow",
    benefit_mr: "सुलभ ऑर्डर-ते-पेमेंट प्रवाह"
  },
  {
    id: 10,
    name_en: "Local eCommerce Marketplaces",
    name_mr: "स्थानिक ई-कॉमर्स मार्केटप्लेस",
    description_en: "List products on regional marketplaces and agri platforms",
    description_mr: "प्रादेशिक मार्केटप्लेस व कृषी प्लॅटफॉर्मवर उत्पादन नोंदवा",
    benefit_en: "Wider market access without heavy tech",
    benefit_mr: "भारी तंत्रज्ञानांशिवाय विस्तृत बाजार प्रवेश"
  },
  {
    id: 11,
    name_en: "Farm-to-Consumer Platforms (e-NAM / Local Aggregators)",
    name_mr: "शेतकरी-ते-ग्राहक प्लॅटफॉर्म (e-NAM/अ‍ॅग्रिगेटर्स)",
    description_en: "Sell produce directly to buyers through aggregator platforms",
    description_mr: "अ‍ॅग्रिगेटर प्लॅटफॉर्मद्वारे थेट खरेदीदारांना विक्री करा",
    benefit_en: "Better price discovery and reduced middlemen",
    benefit_mr: "उत्तम किमती व मध्यम्यांची कमी"
  },
  {
    id: 12,
    name_en: "Basic Inventory Apps",
    name_mr: "मूळ इन्व्हेंटरी अ‍ॅप्स",
    description_en: "Track stock levels, reorder alerts and product variants",
    description_mr: "स्टॉक पातळी, पुनर्निर्देशन सूचना व उत्पादन प्रकार ट्रॅक करा",
    benefit_en: "Prevent stockouts and improve fulfilment",
    benefit_mr: "स्टॉकआउट टाळा व पूर्ती सुधारित करा"
  },
  {
    id: 13,
    name_en: "Simple Accounting Apps (GST-ready)",
    name_mr: "सोपे अकाउंटिंग अ‍ॅप (GST-योग्य)",
    description_en: "Record sales, expenses and generate basic GST invoices",
    description_mr: "विक्री, खर्च नोंदवा व GST इनवॉइस तयार करा",
    benefit_en: "Tax compliance and financial clarity",
    benefit_mr: "कर पालन व आर्थिक स्पष्टता"
  },
  {
    id: 14,
    name_en: "SMS & IVR Customer Alerts",
    name_mr: "SMS व IVR ग्राहक सूचना",
    description_en: "Automated order confirmations and delivery updates via SMS/IVR",
    description_mr: "SMS/IVR द्वारे ऑटोमेटेड ऑर्डर पुष्टी व डिलिव्हरी अपडेट",
    benefit_en: "Improves customer trust and reduces calls",
    benefit_mr: "ग्राहक विश्वास वाढवतो व कॉल कमी करतो"
  },
  {
    id: 15,
    name_en: "Local Language Content Tools",
    name_mr: "स्थानिक भाषेतील कंटेंट टूल्स",
    description_en: "Create marketing materials in Marathi and other local languages",
    description_mr: "मराठी व स्थानिक भाषांमध्ये मार्केटिंग साहित्य तयार करा",
    benefit_en: "Better connection with local customers",
    benefit_mr: "स्थानिक ग्राहकांशी चांगला जोड"
  },
  {
    id: 16,
    name_en: "Farmer Producer Organization Platforms (FPO Tools)",
    name_mr: "शेतकरी उत्पादक संघटन (FPO) टूल्स",
    description_en: "Tools to manage group procurement, sales and aggregation",
    description_mr: "गट खरेदी, विक्री व एकत्रीकरण व्यवस्थापित करण्यासाठी टूल्स",
    benefit_en: "Collective bargaining and scale benefits",
    benefit_mr: "सामूहिक वाटाघाट व प्रमाण फायदे"
  },
  {
    id: 17,
    name_en: "Micro-Insurance Enrollment Tools",
    name_mr: "सूक्ष्म-विमा नावनोंदणी टूल्स",
    description_en: "Enroll rural customers in crop, livestock and health micro-insurance",
    description_mr: "कृषी, पशुपालन व आरोग्य सूक्ष्म-विम्यांमध्ये नावनोंदणी करा",
    benefit_en: "Risk protection for small entrepreneurs",
    benefit_mr: "लहान उद्योजकांसाठी जोखीम संरक्षण"
  },
  {
    id: 18,
    name_en: "Simple E-invoicing & QR Billing",
    name_mr: "ई-इनवॉइसिंग व QR बिलिंग",
    description_en: "Generate QR-based receipts and e-invoices to ease payments",
    description_mr: "पेमेंट सुलभ करण्यासाठी QR पावती व ई-इनवॉइस तयार करा",
    benefit_en: "Professional receipts and faster reconciliation",
    benefit_mr: "व्यावसायिक पावत्या व वेगवान समर्पण"
  },
  {
    id: 19,
    name_en: "Local Logistics & Last-mile Apps",
    name_mr: "स्थानिक लॉजिस्टिक्स व लास्ट-माइल अ‍ॅप्स",
    description_en: "Connect to affordable transport for product delivery",
    description_mr: "उत्पादन वितरणासाठी परवडणारे वाहतूक जोडणी",
    benefit_en: "Reduced delivery costs and better coverage",
    benefit_mr: "कमी वितरण खर्च व चांगले कव्हरेज"
  },
  {
    id: 20,
    name_en: "Government e-Services & eKYC Tools",
    name_mr: "शासन ई-सेवा व eKYC टूल्स",
    description_en: "Access to digital IDs, subsidy portals and online registrations",
    description_mr: "डिजिटल आयडी, सब्सिडी पोर्टल व ऑनलाइन नोंदणी उपलब्ध करा",
    benefit_en: "Simplifies application for schemes and subsidies",
    benefit_mr: "योजना व सब्सिडीसाठी अर्ज सोपे करते"
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
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-5 hover:border-blue-500 transition-colors">
      <h3 className="text-lg font-semibold text-gray-900 mb-2">
        {lang === "mr" ? tool.name_mr : tool.name_en}
      </h3>
      <p className="text-sm text-gray-600 mb-3">
        {lang === "mr" ? tool.description_mr : tool.description_en}
      </p>
      <p className="text-sm text-gray-700">
        <span className="font-medium">
          {lang === "mr" ? "फायदा: " : "Benefit: "}
        </span>
        {lang === "mr" ? tool.benefit_mr : tool.benefit_en}
      </p>
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