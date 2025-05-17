
import React from 'react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, 
  Legend, ResponsiveContainer, PieChart, Pie, Cell,
  LineChart, Line, RadarChart, PolarGrid, PolarAngleAxis, 
  PolarRadiusAxis, Radar
} from 'recharts';
import { motion } from 'framer-motion';
import { ChartPie, ChartBar, ChartLine } from 'lucide-react';

const COLORS = ['#F97316', '#9F7F50', '#4F772D', '#31572C', '#132A13'];

interface ChartProps {
  data: any[];
  type: 'bar' | 'line' | 'pie' | 'radar';
  dataKeys: string[];
  title: string;
}

const FoodChart: React.FC<ChartProps> = ({ data, type, dataKeys, title }) => {
  const renderChart = () => {
    switch (type) {
      case 'bar':
        return (
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 30 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: "#fff", 
                  borderColor: "#F97316",
                  borderRadius: "8px"
                }} 
              />
              <Legend />
              {dataKeys.map((key, index) => (
                <Bar key={key} dataKey={key} fill={COLORS[index % COLORS.length]} />
              ))}
            </BarChart>
          </ResponsiveContainer>
        );
      case 'pie':
        return (
          <ResponsiveContainer width="100%" height={400}>
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                labelLine={true}
                label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                outerRadius={150}
                fill="#8884d8"
                dataKey={dataKeys[0]}
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        );
      case 'line':
        return (
          <ResponsiveContainer width="100%" height={400}>
            <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 30 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: "#fff", 
                  borderColor: "#F97316",
                  borderRadius: "8px"
                }}
              />
              <Legend />
              {dataKeys.map((key, index) => (
                <Line 
                  key={key} 
                  type="monotone" 
                  dataKey={key} 
                  stroke={COLORS[index % COLORS.length]} 
                  activeDot={{ r: 8 }} 
                />
              ))}
            </LineChart>
          </ResponsiveContainer>
        );
      case 'radar':
        return (
          <ResponsiveContainer width="100%" height={400}>
            <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
              <PolarGrid />
              <PolarAngleAxis dataKey="name" />
              <PolarRadiusAxis />
              {dataKeys.map((key, index) => (
                <Radar 
                  key={key} 
                  name={key} 
                  dataKey={key} 
                  stroke={COLORS[index % COLORS.length]} 
                  fill={COLORS[index % COLORS.length]} 
                  fillOpacity={0.6} 
                />
              ))}
              <Legend />
              <Tooltip />
            </RadarChart>
          </ResponsiveContainer>
        );
      default:
        return null;
    }
  };

  const getIcon = () => {
    switch (type) {
      case 'pie':
        return <ChartPie className="mr-2" />;
      case 'bar':
        return <ChartBar className="mr-2" />;
      case 'line':
      case 'radar':
        return <ChartLine className="mr-2" />;
      default:
        return null;
    }
  };

  return (
    <motion.div 
      className="bg-white rounded-xl shadow-md p-6 mb-10"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center mb-6">
        {getIcon()}
        <h3 className="text-xl font-semibold text-naija-brown">{title}</h3>
      </div>
      {renderChart()}
    </motion.div>
  );
};

export default FoodChart;
