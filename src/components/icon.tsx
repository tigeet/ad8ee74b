import { Icon, IconWrapper } from "../styles/icon";

const IconComponent = ({ url, size }: { url: string; size: number }) => {
  return (
    <IconWrapper>
      <Icon src={url} alt="?" />
    </IconWrapper>
  );
};

export { IconComponent };
