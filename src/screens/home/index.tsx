import { InputMask } from '@react-input/mask';

import logo from '../../assets/logo.svg';
import { ButtonIcon } from '../../components/button-icon/indesx';
import { Button } from '../../components/button/indesx';
import { Input } from '../../components/input';
import { Title } from '../../components/title';
import { Filters, Header, Img, InputDiv, Main, Section } from './styles';

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
            <InputDiv>
              <InputMask
                component={Input}
                mask="dd/mm/yyyy"
                replacement={{ d: /\d/, m: /\d/, y: /\d/ }}
                label="Início"
                placeholder="dd/mm/yyyy"
              />
              <InputMask
                component={Input}
                mask="dd/mm/yyyy"
                replacement={{ d: /\d/, m: /\d/, y: /\d/ }}
                label="Fim"
                placeholder="dd/mm/yyyy"
              />
              <ButtonIcon />
            </InputDiv>
          </Filters>
        </Section>
      </Main>
    </>
  );
}
