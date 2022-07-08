import styled from "styled-components";


interface BackgroundProps {
  backgroundColor: string,
}

const Background = styled.div<BackgroundProps>`
  transition: width 0.1s;
  width: 0;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  background-color: ${props => props.backgroundColor};
  z-index: -100;
`;

interface ContentProps {
  contentColor: string
}

const Content = styled.div<ContentProps>`
  font-size: 18px;
  color: ${props => props.contentColor}
`;

interface ContainerProps {
  width?: number;
  height?: number;
}

const Container = styled.div<ContainerProps>.attrs((props: ContainerProps) => ({
  width: (props.width === undefined) ? 'fit-content' : props.width + 'px',
  height: (props.height === undefined) ? 'fit-content' : props.height + 'px',
}))`
  padding: 6px 12px;
  border: 2px solid white;
  position: relative;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover ${Background} {
    width: 100%;
  }
`;

interface SlideButtonProps {
  width?: number,
  height?: number,
  text: string,
  borderColor: string,
  backgroundColor: string,
  contentColor: string,
}

const SlideButton = (props: SlideButtonProps) => {
  return (
    <Container {...props}>
      <Content contentColor={props.contentColor}>
        {props.text}
        </Content>
      <Background {...props}/>
    </Container>
  );
};

export { SlideButton };
