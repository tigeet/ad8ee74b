import { ChangeEvent, useEffect, useState } from "react";
import styled from "styled-components";
import { Post } from "./post";
import { useAppDispatch, useAppSelector } from "../hooks";
import { getLoading, getPosts } from "../selectors/selectors";
import { fetchPosts, PostObject } from "../slices/postSlice";
import { Pagination } from "@mui/material";

const Grid = styled.div`
  width: fit-content;
  display: grid;
  gap: 16px;
  transition: background-color 0.3s;
  grid-template-columns: 1fr;

  @media (min-width: 576px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

interface GridProps {
  scrollable: boolean;
}

const GridWrapper = styled.div<GridProps>`
  width: 100%;
  height: ${(props) => (props.scrollable ? "unset" : "100%")};
  overflow: ${(props) => (props.scrollable ? "unset" : "hidden")};
  transition: background-color 0.3s;
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: center;
  padding: 24px 12px;
`;

const Gallery = () => {
  const dispatch = useAppDispatch();
  const posts: PostObject[] = useAppSelector(getPosts);
  const [page, setPage] = useState<number>(1);
  const PAGE_SIZE: number = 12;

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <Container>
      <GridWrapper scrollable={false}>
        <Grid>
          {posts
            .slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE)
            .map((obj: PostObject, i) => (
              <Post url={obj.url} key={obj.id} text={obj.title} id={obj.id} />
            ))}
        </Grid>
      </GridWrapper>

      {/* set up mui theming */}
      <Pagination
        count={Math.ceil(posts.length / PAGE_SIZE)}
        page={page}
        color="primary"
        onChange={(e, v: number) => {
          console.log(v);
          setPage(v);
        }}
      />
    </Container>
  );
};

export { Gallery };
