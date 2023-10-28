import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  > p {
    font-size: 1.5rem;
  }
`;

const Icon = styled.img`
  max-width: 20px;
  padding: 5px;
`;

const Link = styled.div`
  display: flex;
  flex-direction: row;

  :hover {
    zoom: 120%;
    transition: zoom 0.5s;
  }
`;

const Site = styled.p`
  font-family: 'Nunito', sans-serif;
  font-size: 20px;
  font-style: normal;
  font-variant: normal;
  font-weight: 400;
  line-height: 23px;
`;

interface CompProps {
  footerText: string;
  linkAddress: string;
  icon: string;
}

export const Footer = (props: CompProps) => {
  return (
    <Container>
      <a href={props.linkAddress}>
        <Link>
          <Icon src={props.icon} />
          <Site> {props.footerText}</Site>
        </Link>
      </a>
    </Container>
  );
};
