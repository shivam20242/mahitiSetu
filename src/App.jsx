import React, { useState } from "react";

// Mock Data with YouTube videos
const schemesData = [
  {
    id: 1,
    name_en: "PM Mudra Yojana",
    name_mr: "पीएम मुद्रा योजना",
    eligibility: "Small businesses, artisans",
    benefits: "Loan up to ₹10 lakhs",
    applyLink: "#",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: 2,
    name_en: "Stand-Up India",
    name_mr: "स्टँड-अप इंडिया",
    eligibility: "SC/ST/Women entrepreneurs",
    benefits: "₹10 lakh to ₹1 crore loan",
    applyLink: "#",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: 3,
    name_en: "PMEGP Scheme",
    name_mr: "पीएमईजीपी योजना",
    eligibility: "New entrepreneurs",
    benefits: "15-35% subsidy on projects",
    applyLink: "#",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  }
];

const toolsData = [
  {
    id: 1,
    name_en: "UPI Payments",
    name_mr: "यूपीआय पेमेंट्स",
    description_en: "Accept payments through Google Pay, PhonePe",
    description_mr: "गूगल पे, फोनपे द्वारे पेमेंट घ्या",
    benefit_en: "Fast, cashless transactions",
    benefit_mr: "जलद, कॅशलेस व्यवहार"
  },
  {
    id: 2,
    name_en: "WhatsApp Business",
    name_mr: "व्हॉट्सअ‍ॅप बिझनेस",
    description_en: "Manage customer communication easily",
    description_mr: "ग्राहकांशी सहज संवाद साधा",
    benefit_en: "Build customer trust",
    benefit_mr: "ग्राहक विश्वास वाढवा"
  },
  {
    id: 3,
    name_en: "Google My Business",
    name_mr: "गूगल माय बिझनेस",
    description_en: "List your business on Google Maps",
    description_mr: "गूगल मॅपवर तुमचा व्यवसाय नोंदवा",
    benefit_en: "More local visibility",
    benefit_mr: "अधिक स्थानिक दृश्यता"
  }
];

// Featured videos for home page
const homeVideos = [
  {
    id: 1,
    title_en: "Digital Marketing for Rural Business",
    title_mr: "ग्रामीण व्यवसायासाठी डिजिटल मार्केटिंग",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: 2,
    title_en: "How to Apply for Government Schemes",
    title_mr: "शासकीय योजनेसाठी अर्ज कसा करावा",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: 3,
    title_en: "Setting Up Your Online Business",
    title_mr: "ऑनलाइन व्यवसाय कसा सुरू करावा",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
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