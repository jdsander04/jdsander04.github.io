
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { LineChart, Line } from 'recharts';
import { PieChart, Pie, Cell } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Users, Eye, Clock, CalendarDays } from 'lucide-react';
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const visitorData = [
  { month: 'Jan', visitors: 1200 },
  { month: 'Feb', visitors: 1900 },
  { month: 'Mar', visitors: 2400 },
  { month: 'Apr', visitors: 1800 },
  { month: 'May', visitors: 2800 },
  { month: 'Jun', visitors: 3200 },
  { month: 'Jul', visitors: 3800 },
  { month: 'Aug', visitors: 4200 },
  { month: 'Sep', visitors: 4800 },
  { month: 'Oct', visitors: 5100 },
  { month: 'Nov', visitors: 5600 },
  { month: 'Dec', visitors: 6200 },
];

const pageViewsData = [
  { name: 'Homepage', views: 45 },
  { name: 'Projects', views: 25 },
  { name: 'Blog', views: 15 },
  { name: 'Contact', views: 15 },
];

const deviceData = [
  { name: 'Desktop', value: 65 },
  { name: 'Mobile', value: 30 },
  { name: 'Tablet', value: 5 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const CountryData = [
  { country: 'United States', visitors: 3500 },
  { country: 'United Kingdom', visitors: 1800 },
  { country: 'Canada', visitors: 1200 },
  { country: 'Australia', visitors: 950 },
  { country: 'Germany', visitors: 850 },
  { country: 'France', visitors: 750 },
  { country: 'India', visitors: 700 },
  { country: 'Brazil', visitors: 650 },
];

const Statistics = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <section className="py-16 md:py-24 bg-accent/30">
          <div className="container max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold mb-4">Site Statistics</h1>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Analytics and insights about the website's performance and visitor interactions.
              </p>
            </div>
          </div>
        </section>
        
        <section className="py-16">
          <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                  <CardTitle className="text-sm font-medium">Total Visitors</CardTitle>
                  <Users className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">38,547</div>
                  <p className="text-xs text-muted-foreground">
                    +12.5% from last month
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                  <CardTitle className="text-sm font-medium">Page Views</CardTitle>
                  <Eye className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">132,897</div>
                  <p className="text-xs text-muted-foreground">
                    +8.2% from last month
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                  <CardTitle className="text-sm font-medium">Avg. Session Duration</CardTitle>
                  <Clock className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">3m 42s</div>
                  <p className="text-xs text-muted-foreground">
                    +24.5% from last month
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                  <CardTitle className="text-sm font-medium">Returning Visitors</CardTitle>
                  <CalendarDays className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">42.8%</div>
                  <p className="text-xs text-muted-foreground">
                    +5.1% from last month
                  </p>
                </CardContent>
              </Card>
            </div>
            
            <Tabs defaultValue="visitors">
              <TabsList className="grid w-full grid-cols-1 md:grid-cols-4 mb-8">
                <TabsTrigger value="visitors">Visitor Trends</TabsTrigger>
                <TabsTrigger value="pages">Popular Pages</TabsTrigger>
                <TabsTrigger value="devices">Device Usage</TabsTrigger>
                <TabsTrigger value="countries">Top Countries</TabsTrigger>
              </TabsList>
              
              <TabsContent value="visitors">
                <Card>
                  <CardHeader>
                    <CardTitle>Monthly Visitors (Past Year)</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[400px]">
                      <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={visitorData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="month" />
                          <YAxis />
                          <Tooltip />
                          <Line type="monotone" dataKey="visitors" stroke="#0088FE" strokeWidth={2} activeDot={{ r: 8 }} />
                        </LineChart>
                      </ResponsiveContainer>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="pages">
                <Card>
                  <CardHeader>
                    <CardTitle>Most Visited Pages</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[400px]">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={pageViewsData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="name" />
                          <YAxis />
                          <Tooltip />
                          <Bar dataKey="views" fill="#00C49F" />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="devices">
                <Card>
                  <CardHeader>
                    <CardTitle>Device Distribution</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[400px]">
                      <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                          <Pie
                            data={deviceData}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            outerRadius={150}
                            fill="#8884d8"
                            dataKey="value"
                            label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                          >
                            {deviceData.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                          </Pie>
                          <Tooltip />
                        </PieChart>
                      </ResponsiveContainer>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="countries">
                <Card>
                  <CardHeader>
                    <CardTitle>Top Countries</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[400px]">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart
                          layout="vertical"
                          data={CountryData}
                          margin={{ top: 20, right: 30, left: 60, bottom: 20 }}
                        >
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis type="number" />
                          <YAxis dataKey="country" type="category" />
                          <Tooltip />
                          <Bar dataKey="visitors" fill="#FFBB28" />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Statistics;
