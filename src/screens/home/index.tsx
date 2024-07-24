import { InputMask } from '@react-input/mask';

import logo from '../../assets/logo.svg';
import { ButtonIcon } from '../../components/button-icon/indesx';
import { Button } from '../../components/button/indesx';
import { Card } from '../../components/card';
import { CreateCategoryDialog } from '../../components/create-category-dialog';
import { Input } from '../../components/input';
import { Title } from '../../components/title';
import { Transaction } from '../../components/transaction';
import {
  Aside,
  Balance,
  ChartAction,
  ChartContainer,
  ChartContent,
  Filters,
  Header,
  Img,
  InputDiv,
  Main,
  SearchTransaction,
  Section,
  TransactionsGroup,
} from './styles';

export function Home() {
  return (
    <>
      <Header>
        <Img src={logo} />
        <div>
          <Button>Nova transação</Button>
          <CreateCategoryDialog />
        </div>
      </Header>
      <Main>
        <Section>
          <Filters>
            <Title title="Saldo" subtitle="Receitas e despesas no período" />
            <InputDiv>
              <InputMask
                component={Input}
                mask="dd/mm/aaaa"
                replacement={{ d: /\d/, m: /\d/, a: /\d/ }}
                label="Início"
                placeholder="dd/mm/aaaa"
              />
              <InputMask
                component={Input}
                mask="dd/mm/aaaa"
                replacement={{ d: /\d/, m: /\d/, a: /\d/ }}
                label="Fim"
                placeholder="dd/mm/aaaa"
              />
              <ButtonIcon />
            </InputDiv>
          </Filters>

          <Balance>
            <Card title="Saldo" amount={1000000} />
            <Card title="Saldo" amount={1000000} variant="incomes" />
            <Card title="Saldo" amount={1000000} variant="expenses" />
          </Balance>

          <ChartContainer>
            <header>
              <Title
                title="Gastos"
                subtitle="Despesas por categoria no período"
              />
            </header>
            <ChartContent></ChartContent>
          </ChartContainer>

          <ChartContainer>
            <header>
              <Title
                title="Evolução Financeira"
                subtitle="Saldo, Receitas e Gastos no ano"
              />
              <ChartAction>
                <InputMask
                  component={Input}
                  mask="aaaa"
                  replacement={{ a: /\d/ }}
                  variant="black"
                  label="Ano"
                  placeholder="aaaa"
                />
                <ButtonIcon />
              </ChartAction>
            </header>
            <ChartContent></ChartContent>
          </ChartContainer>
        </Section>

        <Aside>
          <header>
            <Title title="Transações" subtitle="Receitas e Gastos no período" />
            <SearchTransaction>
              <Input variant="black" placeholder="Procurar transação" />
              <ButtonIcon />
            </SearchTransaction>
          </header>
          <TransactionsGroup>
            <Transaction
              id={1}
              amount={150000}
              category={{ title: 'Salário', color: '#c1fb72' }}
              date="23/07/2024"
              title="Freela"
              variant="income"
            />
            <Transaction
              id={1}
              amount={150000}
              category={{ title: 'Salário', color: '#c1fb72' }}
              date="23/07/2024"
              title="Freela"
              variant="income"
            />
          </TransactionsGroup>
        </Aside>
      </Main>
    </>
  );
}
