import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ThreeBackground from '@/components/ThreeBackground';
import { Button } from '@/components/ui/button';
import {
  Blocks,
  Database,
  BarChart3,
  Network,
  Code,
  Smartphone,
  ArrowRight,
  CheckCircle,
  Zap,
  Palette,
  Shield
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Database className="h-12 w-12" />,
      title: "Decentralized Indexing",
      description: "Community-maintained indexing infrastructure that provides reliable, censorship-resistant data feeds.",
      features: ["Multi-Chain Support", "Real-Time Updates", "Community Rewards", "High Availability"],
      gradient: "from-primary to-primary-glow"
    },
    {
      icon: <Code className="h-12 w-12" />,
      title: "GraphQL & REST APIs",
      description: "Powerful APIs that make blockchain data querying as simple as traditional web APIs.",
      features: ["GraphQL Queries", "REST Endpoints", "Rate Limiting", "API Documentation"],
      gradient: "from-secondary to-secondary-glow"
    },
    {
      icon: <BarChart3 className="h-12 w-12" />,
      title: "Developer Dashboard",
      description: "Intuitive dashboard for testing queries, monitoring usage, and managing API keys.",
      features: ["Query Builder", "Usage Analytics", "API Key Management", "Performance Metrics"],
      gradient: "from-primary to-secondary"
    },
    {
      icon: <Network className="h-12 w-12" />,
      title: "Multi-Chain Support",
      description: "Seamless access to data across Ethereum, Polygon, Arbitrum, BSC, and other major networks.",
      features: ["Cross-Chain Queries", "Unified Schema", "Chain Abstraction", "Auto-Sync"],
      gradient: "from-secondary to-primary"
    },
    {
      icon: <Zap className="h-12 w-12" />,
      title: "SDK & Integrations",
      description: "Extensible SDKs and libraries for easy integration into any application or framework.",
      features: ["JavaScript SDK", "Python Library", "TypeScript Types", "Framework Plugins"],
      gradient: "from-primary-glow to-secondary-glow"
    },
    {
      icon: <Smartphone className="h-12 w-12" />,
      title: "dApp Development Tools",
      description: "Complete toolkit for building production-ready dApps with reliable data access.",
      features: ["Code Generators", "Testing Tools", "Deployment Scripts", "Monitoring"],
      gradient: "from-secondary-glow to-primary"
    }
  ];

  const process = [
    {
      step: "01",
      title: "Discovery & Strategy",
      description: "We dive deep into your vision, understanding your users and technical requirements.",
      icon: <Code className="h-8 w-8" />
    },
    {
      step: "02", 
      title: "Design & Prototyping",
      description: "Creating beautiful, intuitive designs that make complex blockchain interactions simple.",
      icon: <Palette className="h-8 w-8" />
    },
    {
      step: "03",
      title: "Development & Testing",
      description: "Building secure, scalable solutions with comprehensive testing and optimization.",
      icon: <Shield className="h-8 w-8" />
    },
    {
      step: "04",
      title: "Launch & Support",
      description: "Deploying your dApp with ongoing support and continuous improvement based on user feedback.",
      icon: <CheckCircle className="h-8 w-8" />
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
                  Our Services
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                Complete blockchain data infrastructure that empowers developers to build
                production-ready dApps without managing complex indexing or node operations.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  className="group relative bg-card/20 backdrop-blur-sm border border-primary/20 rounded-xl p-8 hover:border-primary/40 transition-all duration-300 hover:shadow-[0_0_40px_hsl(var(--primary)/0.2)]"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.8 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                >
                  {/* Background Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-5 rounded-xl`}></div>
                  
                  <div className="relative">
                    <div className="text-primary mb-6 group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-4 text-foreground">
                      {service.title}
                    </h3>
                    
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                          <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    <Button variant="cyber" className="w-full group">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-card/10 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-6 text-foreground">
                Our <span className="text-secondary">Process</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                A proven methodology that delivers exceptional results, from concept to launch and beyond.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {process.map((step, index) => (
                <motion.div
                  key={index}
                  className="relative text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  {/* Connection Line */}
                  {index < process.length - 1 && (
                    <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-primary/30 to-secondary/30 z-0"></div>
                  )}
                  
                  <div className="relative z-10">
                    {/* Step Number */}
                    <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center text-background font-bold text-xl">
                      {step.step}
                    </div>
                    
                    {/* Icon */}
                    <div className="text-primary mb-4">
                      {step.icon}
                    </div>
                    
                    <h3 className="text-xl font-bold mb-4 text-foreground">
                      {step.title}
                    </h3>
                    
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Technologies */}
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
                Technologies We <span className="text-primary">Master</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Cutting-edge tools and frameworks that power the decentralized future.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
              {['GraphQL', 'PostgreSQL', 'Ethereum', 'Polygon', 'Subgraph', 'Node.js'].map((tech, index) => (
                <motion.div
                  key={tech}
                  className="bg-card/20 backdrop-blur-sm border border-primary/20 rounded-lg p-6 text-center hover:border-primary/40 transition-all duration-300 hover:shadow-[0_0_20px_hsl(var(--primary)/0.2)]"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-lg mx-auto mb-4 flex items-center justify-center text-background font-bold">
                    {tech.substring(0, 2)}
                  </div>
                  <h3 className="text-sm font-semibold text-foreground">{tech}</h3>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-card/10 backdrop-blur-sm">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-6 text-foreground">
                Ready to Query <span className="text-primary">Blockchain Data</span>?
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Get started with ChainQueryDapp and access multi-chain data through our powerful APIs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" size="xl">
                  Get API Access
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="cyber-secondary" size="xl">
                  View Documentation
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Services;