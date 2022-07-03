import { useEffect, useState } from "react";
import styled from "styled-components";
import { Post } from "../components/post";
import { useAppDispatch, useAppSelector } from "../hooks";
import { getLoading, getPosts } from "../selectors/selectors";
import { fetchPosts, PostObject } from "../slices/postSlice";
import { GridWrapper, Grid } from "../styles/grid";

interface LoadingOverlayProps {
  visible: boolean;
}

const LoadingOverlay = styled.div<LoadingOverlayProps>`
  /* visibility: ${(props) => (props.visible ? "visible" : "hidden")};
  opacity: ${(props) => (props.visible ? "1" : "0")};
  transition: opacity 0.05s; */
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(100vw / 7);
  letter-spacing: 1rem;
  background-color: ${(props) => props.theme.colorMain};
  color: ${(props) => props.theme.colorAccent};
`;

const Gallery = () => {
  const dispatch = useAppDispatch();
  const posts: PostObject[] = useAppSelector(getPosts);
  const loading: boolean = useAppSelector(getLoading);

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  return (
    <>
      {loading ? (
        <LoadingOverlay visible={loading}>LOADING</LoadingOverlay>
      ) : (
        <GridWrapper scrollable={false}>
          <Grid>
            {posts.map((obj: PostObject, i) => (
              <Post url={obj.url} key={obj.id} text={obj.title} id={obj.id} />
            ))}
          </Grid>
        </GridWrapper>
      )}
    </>
  );
};

export { Gallery };
