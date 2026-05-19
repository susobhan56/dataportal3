import { useState } from 'react';
import Image from 'next/image';

const AGE_GROUPS = [
  { key: '0-5', label: '0-5', icon: '/icons/age-0-5.png' },
  { key: '5-14', label: '5-14', icon: '/icons/age-5-14.png' },
  { key: '15-24', label: '15-24', icon: '/icons/age-15-24.png' },
  { key: '25-59', label: '25-59', icon: '/icons/age-25-59.png' },
  { key: '60+', label: '60+', icon: '/icons/age-60plus.png' },
];

type AgeKey = '0-5' | '5-14' | '15-24' | '25-59' | '60+';
type PopulationData = Record<AgeKey, number>;

const POPULATION_DATA: Record<number, PopulationData> = {
  1901: { '0-5': 12, '5-14': 20, '15-24': 18, '25-59': 40, '60+': 10 },
  1921: { '0-5': 13, '5-14': 19, '15-24': 17, '25-59': 41, '60+': 10 },
  1936: { '0-5': 11, '5-14': 21, '15-24': 16, '25-59': 42, '60+': 10 },
};

function getPopulationByYear(year: number): PopulationData {
  if (year <= 1901) return POPULATION_DATA[1901];
  if (year >= 1936) return POPULATION_DATA[1936];
  const y1 = 1901, y2 = 1936;
  const d1 = POPULATION_DATA[1901], d2 = POPULATION_DATA[1936];
  const ratio = (year - y1) / (y2 - y1);
  const result: PopulationData = { '0-5': 0, '5-14': 0, '15-24': 0, '25-59': 0, '60+': 0 };
  (Object.keys(result) as AgeKey[]).forEach((key) => {
    result[key] = Math.round(d1[key] + (d2[key] - d1[key]) * ratio);
  });
  return result;
}

export default function PopulationExplorer() {
  const [year, setYear] = useState(1901);
  const composition = getPopulationByYear(year);

  return (
    <section className="bg-white rounded-lg shadow-md p-8 mt-12 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold text-indigo-800 mb-6 text-center">Population Explorer</h2>
      <div className="flex flex-col items-center mb-6">
        <label htmlFor="year-slider" className="mb-2 font-medium text-gray-700">Year: <span className="text-indigo-700 font-bold">{year}</span></label>
        <input
          id="year-slider"
          type="range"
          min={1901}
          max={1936}
          value={year}
          onChange={e => setYear(Number(e.target.value))}
          className="w-full max-w-md accent-indigo-600"
        />
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-6 mt-6">
        {AGE_GROUPS.map(group => (
          <div key={group.key} className="flex flex-col items-center">
            <div className="w-24 h-24 mb-2">
              <Image src={group.icon} alt={group.label} width={96} height={96} />
            </div>
            <span className="font-semibold text-indigo-700">{group.label}</span>
            <span className="text-lg font-bold text-gray-800 mt-1">{composition[group.key as AgeKey]}%</span>
          </div>
        ))}
      </div>
    </section>
  );
}
