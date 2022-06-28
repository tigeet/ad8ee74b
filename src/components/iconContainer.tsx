import { Container } from "../styles/icon-container";
import { IconComponent } from "./icon";

const IconContainer = ({ url }: { url: string }) => {
  return (
    <Container>
      <IconComponent url={url} size={256} />
      <p>#$&(@$&%</p>
    </Container>
  );
};

export { IconContainer };
