import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ThreeBackground from '@/components/ThreeBackground';
import { Button } from '@/components/ui/button';
import { Zap, Shield, Cpu, Globe, Users, Target } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Security First",
      description: "Every query and API endpoint prioritizes security and trust, ensuring developers and users' data is protected."
    },
    {
      icon: <Cpu className="h-8 w-8" />,
      title: "Multi-Chain Support",
      description: "We provide seamless access to blockchain data across Ethereum, Polygon, Arbitrum, and more networks."
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Decentralized",
      description: "Built for Web3, our indexing layer embraces decentralization, eliminating single points of failure."
    }
  ];

  const team = [
    {
      name: "Alex Chen",
      role: "Lead Blockchain Architect",
      description: "10+ years in distributed systems and smart contract development."
    },
    {
      name: "Sarah Kim",
      role: "API & Developer Experience Lead",
      description: "Former GraphQL expert at major tech companies, specializing in scalable API design."
    },
    {
      name: "Marcus Rivera",
      role: "Full-Stack Engineer",
      description: "Web3 native with expertise in React, Solidity, and DeFi protocols."
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
                  Our Vision
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                We believe in a future where blockchain data is as accessible as web APIs, where decentralized indexing empowers developers,
                and where multi-chain interoperability unlocks new possibilities for Web3 innovation.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Mission Statement */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl font-bold mb-6 text-foreground">
                  Democratizing <span className="text-primary">Blockchain Data</span>
                </h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  We're building the bridges between complex blockchain networks and application developers.
                  Our decentralized indexing makes multi-chain data querying simple, reliable, and cost-effective.
                </p>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  From DeFi liquidity pools to NFT ownership records, we provide APIs that
                  put developers first while maintaining the decentralization and transparency that makes blockchain revolutionary.
                </p>
                <Button variant="cyber-primary" size="lg">
                  <Target className="mr-2 h-5 w-5" />
                  Our Mission
                </Button>
              </motion.div>

              <motion.div
                className="relative"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="bg-card/30 backdrop-blur-sm border border-primary/20 rounded-2xl p-8 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5"></div>
                  <div className="relative">
                    <Zap className="h-12 w-12 text-primary mb-6" />
                    <h3 className="text-2xl font-bold mb-4 text-foreground">The Future is Decentralized</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      We're not just building APIs—we're crafting the foundation for accessible blockchain data.
                      One where developers query multi-chain data effortlessly, communities maintain reliable indexes, and Web3 innovation accelerates.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values */}
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
                Our <span className="text-secondary">Core Values</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                The principles that guide every decision we make and every interface we create.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  className="bg-card/30 backdrop-blur-sm border border-primary/20 rounded-xl p-8 text-center hover:border-primary/40 transition-all duration-300 group hover:shadow-[0_0_30px_hsl(var(--primary)/0.2)]"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.8 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <div className="text-primary mb-6 group-hover:scale-110 transition-transform duration-300">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-foreground">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
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
                Meet the <span className="text-primary">Team</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Passionate experts from blockchain, API development, and distributed systems backgrounds working together to build the future of data access.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <motion.div
                  key={index}
                  className="bg-card/20 backdrop-blur-sm border border-secondary/20 rounded-xl p-8 text-center hover:border-secondary/40 transition-all duration-300 group hover:shadow-[0_0_30px_hsl(var(--secondary)/0.2)]"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.8 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <div className="w-20 h-20 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto mb-6 flex items-center justify-center text-background font-bold text-xl">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-foreground">
                    {member.name}
                  </h3>
                  <p className="text-secondary font-medium mb-4">
                    {member.role}
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {member.description}
                  </p>
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
                Ready to Build the <span className="text-primary">Future</span>?
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Join us in creating the next generation of developer tools that make blockchain data accessible and reliable.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" size="xl">
                  <Users className="mr-2 h-5 w-5" />
                  Join Our Team
                </Button>
                <Button variant="cyber-secondary" size="xl">
                  Start a Project
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

export default About;