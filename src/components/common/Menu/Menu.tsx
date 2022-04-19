import styled from 'styled-components';

export const Menu = () => {
  return (
    <Header>
      <div>
        <img src="images/logo.svg" alt="Logotipo Casa Verde" />
      </div>
      <Nav>
        <li>
          <a href="/">Como fazer</a>
          /
        </li>
        <li>
          <a href="/">Ofertas</a>
          /
        </li>
        <li>
          <a href="/">Depoimentos</a>
          /
        </li>
        <li>
          <a href="/">Vídeos</a>
          /
        </li>
        <li>
          <a href="/">Meu carrinho</a>
        </li>
      </Nav>
    </Header>
  );
}

export const Header = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
  padding: 0 16px;
  flex-wrap: wrap;
  flex-direction: column;
  
  @media (min-width: 920px) {
    flex-direction: row;
    padding: 0;
    padding-left: 16px;
  }
`;

export const Nav = styled.nav`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  
  @media (min-width: 920px) {
    justify-content: flex-end;
  }
  
  li {
    list-style: none;
    font-size: 12px;
    
    @media(min-width: 920px) {
      font-size: 16px;
    }
  }
    
  li a {
    display: inline-block;
    font-weight: 400;
    font-size: inherit;
    line-height: 1.1;
    text-decoration: none;
    color: #202020;
    padding: 8px;
    
    @media(min-width: 920px) {
      padding: 16px;
    }
  }
`;