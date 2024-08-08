import { ResponsivePie } from '@nivo/pie';
import { useMemo } from 'react';

import { theme } from '../../styles/theme';
import { formatCurrency } from '../../utils/format-currency';

const apiData = [
  {
    _id: '1',
    title: 'Alimentação',
    amount: 100000,
    color: '#e02623dc',
  },
  {
    _id: '2',
    title: 'Roupas',
    amount: 80000,
    color: '#df8620ce',
  },
  {
    _id: '3',
    title: 'Combustível',
    amount: 15000,
    color: '#1cb2e0d1',
  },
];

export type CategoryProps = {
  id: string;
  title: string;
  color: string;
};

type ChartData = {
  id: string;
  label: string;
  externalId: string;
  value: number;
  color: string;
};

type CategoriesPieChartProps = {
  onClick: (category: CategoryProps) => void;
};

export function CategoriesPieChart({ onClick }: CategoriesPieChartProps) {
  const data = useMemo<ChartData[]>(() => {
    const chartData = apiData.map((item) => ({
      id: item.title,
      label: item.title,
      externalId: item._id,
      value: item.amount,
      color: item.color,
    }));

    return chartData;
  }, []);

  return (
    <ResponsivePie
      onClick={({ data }) =>
        onClick({
          id: data.externalId,
          title: data.id,
          color: data.color,
        })
      }
      data={data}
      enableArcLabels={false}
      enableArcLinkLabels={false}
      colors={({ data }) => data.color}
      margin={{ top: 20 }}
      valueFormat={formatCurrency}
      theme={{
        text: {
          fontFamily: 'Lexend',
          fontSize: 10,
        },
        tooltip: {
          container: {
            backgroundColor: theme.colors.black,
            padding: 16,
            color: theme.colors.white,
            fontFamily: 'Lexend',
            fontSize: 12,
            borderRadius: 4,
          },
        },
      }}
      legends={[
        {
          anchor: 'top',
          direction: 'row',
          justify: false,
          translateX: 0,
          translateY: -20,
          itemWidth: 120,
          itemHeight: 16,
          itemTextColor: theme.colors.neutral,
          itemDirection: 'left-to-right',
          symbolSize: 10,
          symbolShape: 'circle',
        },
      ]}
    />
  );
}
