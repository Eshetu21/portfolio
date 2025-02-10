import Image from "next/image";

export default function Contact() {
  const contactLinks = [
    { name: "GitHub", url: "https://github.com/Eshetu21", icon: "/github.png" },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/eshetu-tesema-538b962a6",
      icon: "/linkedin.png",
    },
    { name: "Telegram", url: "https://t.me/estar23", icon: "/telegram.png" },
    {
      name: "Email",
      url: "mailto:eshetutesema2@gmail.com?subject=Hello&body=I want to connect!",
      icon: "/email.png",
    },
  ];

  return (
    <div className="max-w-2xl mx-auto p-8 text-center rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
      <p className="mb-6">Feel free to reach out. {"I'd love to connect!"}</p>

      <div className="flex justify-center gap-6">
        {contactLinks.map((contact, index) => (
          <a
            key={index}
            href={contact.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center space-y-2 text-white transition-transform transform hover:scale-110"
          >
            <Image
              src={contact.icon}
              alt={contact.name}
              width={40}
              height={40}
            />
            <span className="text-sm">{contact.name}</span>
          </a>
        ))}
      </div>
    </div>
  );
}
