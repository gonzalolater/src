import { useState } from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ThreeBackground from '@/components/ThreeBackground';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { 
  Mail, 
  MessageCircle, 
  Calendar, 
  MapPin, 
  Send,
  CheckCircle,
  Clock,
  Globe
} from 'lucide-react';
import { toast } from 'sonner';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    budget: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));

    toast.success("Message sent successfully! We'll get back to you within 24 hours.");
    setFormData({ name: '', email: '', company: '', budget: '', message: '' });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactMethods = [
    {
      icon: <Mail className="h-8 w-8" />,
      title: "Email Us",
      description: "Get in touch via email for detailed discussions",
      contact: "hello@chainquerydapp.com",
      action: "Send Email"
    },
    {
      icon: <MessageCircle className="h-8 w-8" />,
      title: "Discord Community",
      description: "Join our community for real-time discussions",
      contact: "discord.gg/chainquerydapp",
      action: "Join Discord"
    },
    {
      icon: <Calendar className="h-8 w-8" />,
      title: "Book a Call",
      description: "Schedule a consultation to discuss your project",
      contact: "30-minute free consultation",
      action: "Schedule Call"
    }
  ];

  const faqs = [
    {
      question: "What's the typical timeline for a dApp project?",
      answer: "Projects typically range from 8-16 weeks depending on complexity, from initial design to deployment."
    },
    {
      question: "Do you provide ongoing support after launch?",
      answer: "Yes, we offer comprehensive maintenance packages including updates, monitoring, and feature enhancements."
    },
    {
      question: "What blockchain networks do you support?",
      answer: "We work with Ethereum, Polygon, Binance Smart Chain, Solana, and other major networks based on your needs."
    },
    {
      question: "Can you help with smart contract development?",
      answer: "Absolutely! We provide end-to-end services including smart contract development, auditing, and UI integration."
    }
  ];

  return (
    <div className="min-h-screen">
      <ThreeBackground />
      <Header />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 cyber-grid opacity-10"></div>
          <div className="container mx-auto px-4 relative">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Let's Build Together
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                Ready to transform your Web3 vision into reality? Get in touch and let's create something extraordinary.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
              {contactMethods.map((method, index) => (
                <motion.div
                  key={index}
                  className="bg-card/20 backdrop-blur-sm border border-primary/20 rounded-xl p-8 text-center hover:border-primary/40 transition-all duration-300 hover:shadow-[0_0_30px_hsl(var(--primary)/0.2)] group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.8 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <div className="text-primary mb-6 group-hover:scale-110 transition-transform duration-300">
                    {method.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-foreground">
                    {method.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    {method.description}
                  </p>
                  <p className="text-primary font-medium mb-6">
                    {method.contact}
                  </p>
                  <Button variant="cyber" className="w-full">
                    {method.action}
                  </Button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-20 bg-card/10 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold mb-6 text-foreground">
                  Start Your <span className="text-primary">Project</span>
                </h2>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  Tell us about your vision and we'll get back to you with a detailed proposal within 24 hours.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Name *
                      </label>
                      <Input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="bg-card/50 border-primary/20 focus:border-primary"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Email *
                      </label>
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="bg-card/50 border-primary/20 focus:border-primary"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Company
                      </label>
                      <Input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="bg-card/50 border-primary/20 focus:border-primary"
                        placeholder="Your company name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Budget Range
                      </label>
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full bg-card/50 border border-primary/20 rounded-md px-3 py-2 text-foreground focus:border-primary focus:outline-none"
                      >
                        <option value="">Select budget range</option>
                        <option value="$10k-$25k">$10k - $25k</option>
                        <option value="$25k-$50k">$25k - $50k</option>
                        <option value="$50k-$100k">$50k - $100k</option>
                        <option value="$100k+">$100k+</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Project Description *
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="bg-card/50 border-primary/20 focus:border-primary resize-none"
                      placeholder="Tell us about your project, goals, and any specific requirements..."
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="hero"
                    size="lg"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-background mr-2"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 h-5 w-5" />
                      </>
                    )}
                  </Button>
                </form>
              </motion.div>

              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <div>
                  <h3 className="text-2xl font-bold mb-6 text-foreground">
                    Why Choose <span className="text-secondary">ChainQueryDapp</span>?
                  </h3>
                  <div className="space-y-4">
                    {[
                      {
                        icon: <CheckCircle className="h-5 w-5" />,
                        text: "10+ years of combined blockchain experience"
                      },
                      {
                        icon: <Clock className="h-5 w-5" />,
                        text: "24-hour response time guarantee"
                      },
                      {
                        icon: <Globe className="h-5 w-5" />,
                        text: "Multi-chain expertise and support"
                      },
                      {
                        icon: <CheckCircle className="h-5 w-5" />,
                        text: "End-to-end project management"
                      }
                    ].map((benefit, index) => (
                      <div key={index} className="flex items-center text-muted-foreground">
                        <div className="text-primary mr-3">
                          {benefit.icon}
                        </div>
                        {benefit.text}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-card/30 backdrop-blur-sm border border-secondary/20 rounded-xl p-6">
                  <h4 className="text-xl font-bold mb-4 text-foreground">
                    Quick Response Promise
                  </h4>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    We understand that timing is crucial in the fast-moving Web3 space. 
                    That's why we guarantee a response within 24 hours of receiving your message.
                  </p>
                  <div className="flex items-center text-secondary text-sm">
                    <MapPin className="h-4 w-4 mr-2" />
                    Available globally, timezone flexible
                  </div>
                </div>

                <div>
                  <h4 className="text-xl font-bold mb-4 text-foreground">
                    Office Locations
                  </h4>
                  <div className="space-y-3 text-sm text-muted-foreground">
                    <div className="flex items-start">
                      <MapPin className="h-4 w-4 mr-2 mt-1 text-primary flex-shrink-0" />
                      <div>
                        <div className="font-medium text-foreground">San Francisco, CA</div>
                        <div>Main development hub</div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <MapPin className="h-4 w-4 mr-2 mt-1 text-primary flex-shrink-0" />
                      <div>
                        <div className="font-medium text-foreground">Remote First</div>
                        <div>Distributed team worldwide</div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-6 text-foreground">
                Frequently Asked <span className="text-primary">Questions</span>
              </h2>
            </motion.div>

            <div className="max-w-3xl mx-auto space-y-6">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  className="bg-card/20 backdrop-blur-sm border border-primary/20 rounded-xl p-6 hover:border-primary/40 transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;