import { url } from "inspector";
import { IconWrapper, Icon } from "../styles/icon";
import { Container } from "../styles/iconContainer";

interface PostProps {
  url: string;
  text: string;
}

const Post = ({ url, text }: PostProps) => {
  return (
    // <Container>
    <IconWrapper>
      <Icon src={url} alt="?" />
    </IconWrapper>

    // <p>{text}</p>
    // </Container>
  );
};

export { Post };
