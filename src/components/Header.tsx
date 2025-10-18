import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [account, setAccount] = useState<string | null>(null);
  const [isConnecting, setIsConnecting] = useState(false);
  const [manuallyDisconnected, setManuallyDisconnected] = useState(false);
  const location = useLocation();
 
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
 
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Try to restore an existing wallet connection and listen for account changes
  useEffect(() => {
    const stored = localStorage.getItem('wallet:manuallyDisconnected');
    setManuallyDisconnected(stored === 'true');

    const ethereum = (window as any)?.ethereum;
    if (!ethereum) return;

    const loadAccounts = async () => {
      try {
        if (manuallyDisconnected) return;
        const accounts: string[] = await ethereum.request({ method: 'eth_accounts' });
        setAccount(accounts && accounts.length > 0 ? accounts[0] : null);
      } catch (_) {
        // ignore
      }
    };

    loadAccounts();

    const handleAccountsChanged = (accounts: string[]) => {
      setAccount(accounts && accounts.length > 0 ? accounts[0] : null);
    };

    ethereum.on?.('accountsChanged', handleAccountsChanged);
    return () => {
      ethereum.removeListener?.('accountsChanged', handleAccountsChanged);
    };
  }, [manuallyDisconnected]);

  const connectWallet = async () => {
    const ethereum = (window as any)?.ethereum;
    if (!ethereum) {
      alert('No wallet found. Please install MetaMask.');
      return;
    }
    try {
      setIsConnecting(true);
      const accounts: string[] = await ethereum.request({ method: 'eth_requestAccounts' });
      const next = accounts && accounts.length > 0 ? accounts[0] : null;
      setAccount(next);
      if (next) {
        setManuallyDisconnected(false);
        localStorage.setItem('wallet:manuallyDisconnected', 'false');
      }
    } catch (err) {
      // user may have rejected or error occurred; keep silent
    } finally {
      setIsConnecting(false);
    }
  };

  const disconnectWallet = async () => {
    const ethereum = (window as any)?.ethereum;
    if (ethereum) {
      try {
        await ethereum.request({ method: 'wallet_revokePermissions', params: [{ eth_accounts: {} }] });
      } catch (_) {
        // ignore if not supported or fails
      }
    }
    setAccount(null);
    setManuallyDisconnected(true);
    localStorage.setItem('wallet:manuallyDisconnected', 'true');
  };

  const formatAddress = (addr: string) => `${addr.slice(0, 6)}...${addr.slice(-4)}`;

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Dashboard', path: '/dashboard' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-card/80 backdrop-blur-lg border-b border-primary/20' 
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 z-50">
            <img src="/logo.svg" alt="ChainQueryDapp Logo" className="w-8 h-8 rounded" />
            <span className="text-lg sm:text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              ChainQueryDapp
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`relative transition-colors duration-200 font-medium ${
                  location.pathname === item.path
                    ? 'text-primary'
                    : 'text-foreground hover:text-primary'
                }`}
              >
                {item.name}
                {location.pathname === item.path && (
                  <motion.div
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
                    layoutId="activeTab"
                    initial={false}
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </nav>

          {/* Wallet Controls */}
          <div className="hidden lg:flex items-center gap-3">
            {account ? (
              <>
                <Button variant="cyber-primary" size="lg" disabled className="text-sm">
                  {formatAddress(account)}
                </Button>
                <Button variant="cyber-secondary" size="lg" onClick={disconnectWallet} className="text-sm">
                  Disconnect
                </Button>
              </>
            ) : (
              <Button variant="cyber-primary" size="lg" onClick={connectWallet} disabled={isConnecting} className="text-sm">
                {isConnecting ? 'Connecting…' : 'Connect Wallet'}
              </Button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-foreground hover:text-primary transition-colors z-50"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.nav
              className="lg:hidden mt-4 pb-4 bg-card/90 backdrop-blur-lg rounded-lg border border-primary/20"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex flex-col space-y-4 p-4">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      to={item.path}
                      className={`block py-3 px-4 rounded-lg transition-colors duration-200 font-medium ${
                        location.pathname === item.path
                          ? 'text-primary bg-primary/10'
                          : 'text-foreground hover:text-primary hover:bg-primary/5'
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navItems.length * 0.1 }}
                  className="pt-4 border-t border-primary/20"
                >
                  {account ? (
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Button variant="cyber-primary" className="flex-1" disabled>
                        {formatAddress(account)}
                      </Button>
                      <Button variant="cyber-secondary" onClick={disconnectWallet}>
                        Disconnect
                      </Button>
                    </div>
                  ) : (
                    <Button variant="cyber-primary" className="w-full" onClick={connectWallet} disabled={isConnecting}>
                      {isConnecting ? 'Connecting…' : 'Connect Wallet'}
                    </Button>
                  )}
                </motion.div>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;