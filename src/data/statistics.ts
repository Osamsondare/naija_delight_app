
// Food consumption and popularity statistics for Nigerian dishes

export interface DishStatistic {
  name: string;
  popularity: number;
  preparation: number;
  nutrition: number;
}

export const popularityData: DishStatistic[] = [
  { name: "Jollof Rice", popularity: 95, preparation: 60, nutrition: 75 },
  { name: "Egusi Soup", popularity: 85, preparation: 70, nutrition: 80 },
  { name: "Pounded Yam", popularity: 80, preparation: 40, nutrition: 65 },
  { name: "Suya", popularity: 90, preparation: 30, nutrition: 60 },
  { name: "Moin Moin", popularity: 75, preparation: 65, nutrition: 85 },
  { name: "Akara", popularity: 70, preparation: 45, nutrition: 70 },
  { name: "Efo Riro", popularity: 65, preparation: 55, nutrition: 90 },
  { name: "Pepper Soup", popularity: 80, preparation: 50, nutrition: 65 },
];

export const regionData = [
  { name: "South West", jollofRice: 95, egusi: 70, peppersoup: 50, suya: 65, moinmoin: 90 },
  { name: "South East", jollofRice: 80, egusi: 95, peppersoup: 75, suya: 60, moinmoin: 65 },
  { name: "South South", jollofRice: 85, egusi: 75, peppersoup: 90, suya: 55, moinmoin: 70 },
  { name: "North Central", jollofRice: 90, egusi: 65, peppersoup: 60, suya: 95, moinmoin: 75 },
  { name: "North East", jollofRice: 75, egusi: 60, peppersoup: 70, suya: 95, moinmoin: 60 },
  { name: "North West", jollofRice: 85, egusi: 55, peppersoup: 65, suya: 90, moinmoin: 65 },
];

export const nutritionData = [
  { name: "Jollof Rice", protein: 15, carbs: 70, fats: 15 },
  { name: "Egusi Soup", protein: 30, carbs: 40, fats: 30 },
  { name: "Pounded Yam", protein: 5, carbs: 90, fats: 5 },
  { name: "Suya", protein: 75, carbs: 5, fats: 20 },
  { name: "Moin Moin", protein: 35, carbs: 55, fats: 10 },
];
