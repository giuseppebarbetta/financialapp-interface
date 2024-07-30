import { ResponsiveBar } from '@nivo/bar';
import dayjs from 'dayjs';
import ptBRLocale from 'dayjs/locale/pt-br';
import { useMemo } from 'react';

import { theme } from '../../styles/theme';
import { formatCurrency } from '../../utils/format-currency';

dayjs.locale(ptBRLocale);

const apiData = [
  {
    _id: {
      year: 2024,
      month: 5,
    },
    balance: 650000,
    incomes: 1000000,
    expenses: 350000,
  },
  {
    _id: {
      year: 2024,
      month: 6,
    },
    balance: 620000,
    incomes: 1000000,
    expenses: 380000,
  },
  {
    _id: {
      year: 2024,
      month: 7,
    },
    balance: 510000,
    incomes: 1000000,
    expenses: 490000,
  },
  {
    _id: {
      year: 2024,
      month: 8,
    },
    balance: 500000,
    incomes: 1200000,
    expenses: 700000,
  },
];

type ChartData = {
  month: string;
  Saldo: number;
  Receitas: number;
  Gastos: number;
};

export function FinancialEvolutionBarChart() {
  const data = useMemo<ChartData[]>(() => {
    const chartData: ChartData[] = apiData.map((item) => ({
      month: dayjs(`${item._id.year}-${item._id.month}-01`).format('MMM'),
      Saldo: item.balance,
      Receitas: item.incomes,
      Gastos: item.expenses,
    }));

    return chartData;
  }, []);

  return (
    <ResponsiveBar
      data={data}
      keys={['Saldo', 'Receitas', 'Gastos']}
      indexBy={'month'}
      colors={[theme.colors.info, theme.colors.primaryDark, theme.colors.error]}
      groupMode="grouped"
      enableLabel={false}
      enableGridY={false}
      padding={0.2}
      axisLeft={{
        tickSize: 0,
        format: formatCurrency,
      }}
      margin={{ left: 80, bottom: 28 }}
      theme={{
        text: {
          fontFamily: 'Lexend',
          fontSize: 10,
        },
        axis: {
          ticks: {
            text: {
              fill: theme.colors.white,
            },
          },
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
      valueFormat={formatCurrency}
    />
  );
}
