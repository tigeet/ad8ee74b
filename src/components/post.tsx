import { url } from "inspector";
import { IconWrapper, Icon } from "../styles/icon";
import { Container } from "../styles/iconContainer";

interface PostProps {
  url: string;
  text: string;
  id: string;
}

const Post = ({ url, text }: PostProps) => {
  return (
    // <Container>
    <IconWrapper>
      <Icon src={url} alt="?" loading="lazy" />
    </IconWrapper>

    // <span>{text}</span>
    // </Container>
  );
};

export { Post };
