import logo from '../../assets/logo.svg';
import { Button } from '../../components/button/indesx';
import { Header, Img } from './styles';

export function Home() {
  return (
    <Header>
      <Img src={logo} />
      <div>
        <Button>Nova transação</Button>
        <Button>Nova categoria</Button>
      </div>
    </Header>
  );
}
