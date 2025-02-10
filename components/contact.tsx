export default function Contact() {
  const contactLinks = [
    { name: "GitHub", url: "https://github.com/Eshetu21" },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/eshetu-tesema-538b962a6",
    },
    { name: "Telegram", url: "https://t.me/estar23" },
    { name: "Email", url: "mailto:eshetutesema2@gmail.com" },
  ];

  return (
    <div className="max-w-3xl mx-auto p-6 text-center">
      <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
      <p className="text-gray-600 mb-6">
        Feel free to reach out via email or social platforms.
      </p>
      <div className="space-y-3">
        {contactLinks.map((contact, index) => (
          <a
            key={index}
            href={contact.url}
            className="block px-4 py-2 bg-blue-100 text-blue-700 rounded-md font-medium hover:bg-blue-200"
          >
            {contact.name}
          </a>
        ))}
      </div>
    </div>
  );
}
