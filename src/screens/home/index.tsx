import logo from '../../assets/logo.svg';
import { Button } from '../../components/button/indesx';
import { Title } from '../../components/title';
import { Filters, Header, Img, Main, Section } from './styles';

export function Home() {
  return (
    <>
      <Header>
        <Img src={logo} />
        <div>
          <Button>Nova transação</Button>
          <Button>Nova categoria</Button>
        </div>
      </Header>
      <Main>
        <Section>
          <Filters>
            <Title title="Saldo" subtitle="Receitas e despesas no período" />
          </Filters>
        </Section>
      </Main>
    </>
  );
}
