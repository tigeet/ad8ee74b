import { Grid, GridWrapper } from "../styles/grid";
import { IconContainer } from "./iconContainer";
import { ThemeButton } from "./themeButton";

const GridComponent = ({ urls }: { urls: string[] }) => {
  return (
    <GridWrapper>
      <Grid>
        {urls.map((url, i) => (
          <IconContainer key={i} url={url} />
        ))}
      </Grid>
    </GridWrapper>
  );
};

export { GridComponent };
