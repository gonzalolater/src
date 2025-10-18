import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ThreeBackground from '@/components/ThreeBackground';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ChartContainer, ChartTooltip, ChartTooltipContent, ChartLegend, ChartLegendContent } from '@/components/ui/chart';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  AreaChart,
  Area,
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer
} from 'recharts';

const Dashboard = () => {
  // Mock data for charts
  const apiCallsHistory = [
    { time: '09:00', calls: 2410 },
    { time: '10:00', calls: 2442 },
    { time: '11:00', calls: 2430 },
    { time: '12:00', calls: 2468 },
    { time: '13:00', calls: 2495 },
    { time: '14:00', calls: 2510 },
    { time: '15:00', calls: 2528 },
  ];

  const queryPerformance = [
    { time: 'Mon', latency: 104 },
    { time: 'Tue', latency: 82 },
    { time: 'Wed', latency: 64 },
    { time: 'Thu', latency: 121 },
    { time: 'Fri', latency: 168 },
    { time: 'Sat', latency: 85 },
    { time: 'Sun', latency: 101 },
  ];

  const queryDistribution = [
    { name: 'Ethereum', value: 48 },
    { name: 'Polygon', value: 22 },
    { name: 'Arbitrum', value: 12 },
    { name: 'BSC', value: 8 },
    { name: 'Others', value: 10 },
  ];

  const chartConfig = {
    calls: {
      label: 'API Calls',
      theme: {
        light: 'hsl(var(--primary))',
        dark: 'hsl(var(--primary))',
      },
    },
    latency: {
      label: 'Query Latency (ms)',
      theme: {
        light: 'hsl(var(--secondary))',
        dark: 'hsl(var(--secondary))',
      },
    },
    eth: {
      label: 'ETH',
      theme: { light: '#627EEA', dark: '#627EEA' },
    },
    btc: {
      label: 'BTC',
      theme: { light: '#F7931A', dark: '#F7931A' },
    },
    sol: {
      label: 'SOL',
      theme: { light: '#9945FF', dark: '#9945FF' },
    },
    arb: {
      label: 'ARB',
      theme: { light: '#28A0F0', dark: '#28A0F0' },
    },
    usdc: {
      label: 'USDC',
      theme: { light: '#2775CA', dark: '#2775CA' },
    },
  } as const;

  const COLORS = ['var(--color-eth)', 'var(--color-btc)', 'var(--color-sol)', 'var(--color-arb)', 'var(--color-usdc)'];

  return (
    <div className="min-h-screen">
      <ThreeBackground />
      <Header />

      <main className="pt-24">
        <section className="relative py-10">
          <div className="container mx-auto px-4">
            <motion.div
              className="mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold">
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Developer Dashboard</span>
              </h1>
              <p className="text-muted-foreground mt-2">Query blockchain data, monitor API usage, and manage your applications.</p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <Card className="lg:col-span-2">
                <CardHeader>
                  <CardTitle>API Calls (Mock)</CardTitle>
                </CardHeader>
                <CardContent>
                  <ChartContainer config={chartConfig} className="h-64 w-full aspect-auto overflow-hidden">
                    <LineChart data={apiCallsHistory}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="time" tickLine={false} axisLine={false} />
                      <YAxis tickLine={false} axisLine={false} domain={[2400, 2550]} />
                      <ChartTooltip content={<ChartTooltipContent labelKey="calls" />} />
                      <Line type="monotone" dataKey="calls" stroke="var(--color-calls)" strokeWidth={2} dot={false} />
                    </LineChart>
                  </ChartContainer>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Query Latency (Mock)</CardTitle>
                </CardHeader>
                <CardContent>
                  <ChartContainer config={chartConfig} className="h-72 w-full aspect-auto overflow-hidden">
                    <AreaChart data={queryPerformance} margin={{ top: 10, right: 16, bottom: 0, left: 0 }}>
                      <defs>
                        <linearGradient id="latencyGradient" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="10%" stopColor="var(--color-latency)" stopOpacity={0.6} />
                          <stop offset="100%" stopColor="var(--color-latency)" stopOpacity={0.05} />
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="time" tickLine={false} axisLine={false} />
                      <YAxis tickLine={false} axisLine={false} tickFormatter={(v) => `${v}ms`} />
                      <ChartTooltip
                        content={
                          <ChartTooltipContent
                            labelKey="latency"
                            formatter={(val) => (
                              <span className="font-mono">
                                {Number(val)}ms
                              </span>
                            )}
                          />
                        }
                      />
                      <Area type="monotone" dataKey="latency" stroke="var(--color-latency)" strokeWidth={2} fill="url(#latencyGradient)" />
                    </AreaChart>
                  </ChartContainer>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
              <Card className="lg:col-span-1">
                <CardHeader>
                  <CardTitle>Query Distribution (Mock)</CardTitle>
                </CardHeader>
                <CardContent>
                  <ChartContainer config={chartConfig} className="h-64 w-full aspect-auto overflow-hidden">
                    <PieChart>
                      <Pie data={queryDistribution} dataKey="value" nameKey="name" outerRadius={80} label>
                        {queryDistribution.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <ChartLegend verticalAlign="bottom" content={<ChartLegendContent nameKey="name" />} />
                      <ChartTooltip content={<ChartTooltipContent nameKey="name" />} />
                    </PieChart>
                  </ChartContainer>
                </CardContent>
              </Card>

              <Card className="lg:col-span-2">
                <CardHeader>
                  <CardTitle>API Status</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    These charts use mocked data for demonstration. Connect to ChainQueryDapp's APIs
                    to show live query metrics, performance data, and usage analytics.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Dashboard;


