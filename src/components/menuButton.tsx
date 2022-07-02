import { Menu } from "react-feather";
import styled from "styled-components";

interface ContainerProps {
  size: number;
}

const Container = styled.div<ContainerProps>`
  /* color: ${(props) => props.theme.colorAccent}; */

  /* background-color: ${(props) => props.theme.colorAccent}; */
  /* position: absolute; */
  /* left: 100px; */
  /* top: 100px; */
  aspect-ratio: 1/1;
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  /* width: 32px; */
  /* height: 32px; */
  font-size: 18px;
  border-radius: 4px;
  &:hover {
    background-color: ${(props) => props.theme.colorSelected};
  }
`;

interface MenuButtonProps {
  innerSize: number;
  outerSize: number;
}

const MenuButton = ({ outerSize, innerSize }: MenuButtonProps) => {
  // return <Menu size={outerSize} iconSize={innerSize} />;
  return (
    <Container size={outerSize}>
      <Menu size={innerSize} />
    </Container>
  );
};

export { MenuButton };
