interface SpendingChartProps {
  data: {
    entertainment: number;
    education: number;
    productivity: number;
    lifestyle: number;
  };
}

export default function SpendingChart({ data }: SpendingChartProps) {
  const categories = [
    { key: 'entertainment', label: 'Ent.', color: 'bg-blue-400', value: data.entertainment },
    { key: 'education', label: 'Edu.', color: 'bg-purple-400', value: data.education },
    { key: 'productivity', label: 'Prod.', color: 'bg-teal-400', value: data.productivity },
    { key: 'lifestyle', label: 'Life.', color: 'bg-pink-400', value: data.lifestyle },
  ];

  const maxValue = Math.max(...Object.values(data));
  const topCategory = categories.find((cat) => cat.value === maxValue);
  const topPercentage = data.entertainment;

  return (
    <div className="bg-white p-6 rounded-2xl border border-gray-200">
      <h3 className="text-lg font-bold text-gray-900 mb-6">Spending Habits</h3>

      <div className="flex items-end justify-between gap-3 h-40 mb-6">
        {categories.map((category) => {
          const height = maxValue > 0 ? (category.value / maxValue) * 100 : 0;
          return (
            <div key={category.key} className="flex-1 flex flex-col items-center gap-2">
              <div className="w-full flex items-end justify-center h-32">
                <div
                  className={`w-full ${category.color} rounded-t-lg transition-all duration-500`}
                  style={{ height: `${height}%`, minHeight: height > 0 ? '10%' : '0%' }}
                ></div>
              </div>
              <span className="text-xs font-medium text-gray-600">{category.label}</span>
            </div>
          );
        })}
      </div>

      <p className="text-sm text-gray-600 text-center">
        You're spending <span className="font-bold text-gray-900">{topPercentage}%</span> of your
        subscription budget on {topCategory?.label || 'Entertainment'}.
      </p>
    </div>
  );
}
