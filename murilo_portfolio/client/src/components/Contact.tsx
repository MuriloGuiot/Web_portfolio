import { Mail, Phone, MapPin, Linkedin, Github, Send, Download } from 'lucide-react';
import { useState } from 'react';

/**
 * Contact Section Component
 * Design: Minimalismo TÃ©cnico - FormulÃ¡rio limpo + informaÃ§Ãµes de contato
 * - Cards com informaÃ§Ãµes de contato
 * - FormulÃ¡rio responsivo
 * - Links para redes sociais
 */
export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const subject = encodeURIComponent(`Nova mensagem do portifólio - ${formData.name}`);
    const body = encodeURIComponent(
      `Nome: ${formData.name}\nEmail: ${formData.email}\n\nMensagem:\n${formData.message}`
    );

    window.location.href = `mailto:muriloguiot@gmail.com?subject=${subject}&body=${body}`;

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'muriloguiot@gmail.com',
      href: 'mailto:muriloguiot@gmail.com',
    },
    {
      icon: Phone,
      label: 'Telefone',
      value: '+55 61 99316-8008',
      href: 'tel:+5561993168008',
    },
    {
      icon: MapPin,
      label: 'Localização',
      value: 'Brasília, DF',
      href: '#',
    },
  ];

  return (
    <section id="contact" className="py-20 md:py-32 bg-white">
      <div className="container">
        <div className="space-y-16">
          {/* Section Header */}
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">Entre em Contato</h2>
            <p className="text-xl text-foreground/70 max-w-2xl">
              Estou sempre aberto a novas oportunidades e colaborações. Sinta-se livre para entrar em contato!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Info */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <a
                    key={index}
                    href={info.href}
                    className="flex items-start gap-4 p-4 bg-background border border-border rounded-lg hover:border-primary hover:shadow-lg transition-all duration-200 group"
                  >
                    <div className="p-3 bg-blue-50 rounded-lg group-hover:bg-primary group-hover:text-white transition-colors duration-200 flex-shrink-0">
                      <Icon size={24} className="text-primary group-hover:text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-foreground/50 font-medium">{info.label}</p>
                      <p className="text-foreground font-semibold">{info.value}</p>
                    </div>
                  </a>
                );
              })}

              {/* Social Links */}
              <div className="space-y-4 pt-4 border-t border-border">
                <p className="text-sm font-semibold text-foreground">Redes Sociais</p>
                <div className="flex gap-3">
                  <a
                    href="https://linkedin.com/in/murilo-guiot-22944a2b8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 p-3 bg-background border border-border rounded-lg hover:bg-primary hover:text-white hover:border-primary transition-all duration-200 font-medium text-sm"
                  >
                    <Linkedin size={20} />
                    LinkedIn
                  </a>
                  <a
                    href="https://github.com/MuriloGuiot"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 p-3 bg-background border border-border rounded-lg hover:bg-primary hover:text-white hover:border-primary transition-all duration-200 font-medium text-sm"
                  >
                    <Github size={20} />
                    GitHub
                  </a>
                </div>
                <p className="text-sm font-semibold text-foreground">Meu currículo</p>
                <a
                  href="/MuriloG_CV.pdf"
                  download="MuriloG_CV.pdf"
                  className="w-full flex items-center justify-center gap-2 p-3 bg-background border border-border rounded-lg hover:bg-primary hover:text-white hover:border-primary transition-all duration-200 font-medium text-sm"
                >
                  <Download size={20} />
                  CV Download
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="space-y-6 p-8 bg-background border border-border rounded-lg">
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm font-semibold text-foreground">
                    Nome
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-200"
                    placeholder="Seu nome"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-semibold text-foreground">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-200"
                    placeholder="seu@email.com"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="block text-sm font-semibold text-foreground">
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-white border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-200 resize-none"
                    placeholder="Sua mensagem aqui..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 font-semibold"
                >
                  Enviar Mensagem
                  <Send size={20} />
                </button>

                {submitted && (
                  <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-700 font-medium text-center">
                    Sua mensagem foi preparada no seu aplicativo de e-mail.
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
