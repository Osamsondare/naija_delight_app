
import React from 'react';
import { motion } from 'framer-motion';
import FoodChart from '../components/FoodChart';
import { 
  popularityData, 
  regionData, 
  nutritionData 
} from '../data/statistics';
import Footer from '../components/Footer';
import { ChartPie } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Charts = () => {
  return (
    <div className="min-h-screen bg-naija-cream/30">
      <div className="bg-naija-green py-12">
        <motion.div 
          className="container mx-auto px-4 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center justify-center mb-4">
            <ChartPie className="mr-3 text-naija-cream h-8 w-8" />
            <h1 className="font-display text-3xl md:text-4xl font-bold text-white">
              Nigerian Cuisine Analytics
            </h1>
          </div>
          <p className="text-naija-cream/90 max-w-2xl mx-auto">
            Explore popular Nigerian dishes through interactive visualizations and discover regional preferences, nutritional info, and more.
          </p>
        </motion.div>
      </div>

      <section className="container mx-auto py-12 px-4">
        <Tabs defaultValue="popularity" className="w-full">
          <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 mb-8">
            <TabsTrigger value="popularity">Dish Popularity</TabsTrigger>
            <TabsTrigger value="regional">Regional Preferences</TabsTrigger>
            <TabsTrigger value="nutrition">Nutritional Data</TabsTrigger>
          </TabsList>
          
          <TabsContent value="popularity">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <FoodChart 
                data={popularityData} 
                type="bar" 
                dataKeys={['popularity']} 
                title="Dish Popularity Ratings (0-100)"
              />
              <FoodChart 
                data={popularityData} 
                type="radar" 
                dataKeys={['preparation', 'nutrition', 'popularity']} 
                title="Dish Attributes Comparison"
              />
            </div>
          </TabsContent>
          
          <TabsContent value="regional">
            <div className="grid grid-cols-1 gap-8">
              <FoodChart 
                data={regionData} 
                type="line" 
                dataKeys={['jollofRice', 'egusi', 'peppersoup', 'suya', 'moinmoin']} 
                title="Regional Food Preferences"
              />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <FoodChart 
                  data={regionData.map(item => ({ name: item.name, value: item.jollofRice }))} 
                  type="pie" 
                  dataKeys={['value']} 
                  title="Jollof Rice Popularity by Region"
                />
                <FoodChart 
                  data={regionData.map(item => ({ name: item.name, value: item.suya }))} 
                  type="pie" 
                  dataKeys={['value']} 
                  title="Suya Popularity by Region"
                />
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="nutrition">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <FoodChart 
                data={nutritionData} 
                type="bar" 
                dataKeys={['protein', 'carbs', 'fats']} 
                title="Nutritional Composition"
              />
              {nutritionData.map((dish) => (
                <motion.div 
                  key={dish.name}
                  className="bg-white rounded-xl shadow-md p-6"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                >
                  <h3 className="text-lg font-semibold text-naija-brown mb-4">{dish.name} - Nutrition Breakdown</h3>
                  <FoodChart 
                    data={[
                      { name: 'Protein', value: dish.protein },
                      { name: 'Carbs', value: dish.carbs },
                      { name: 'Fats', value: dish.fats }
                    ]} 
                    type="pie" 
                    dataKeys={['value']} 
                    title=""
                  />
                </motion.div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </section>

      <Footer />
    </div>
  );
};

export default Charts;
