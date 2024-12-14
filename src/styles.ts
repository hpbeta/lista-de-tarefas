import styled from "styled-components";

interface ListItemProps {
  $finished?: boolean;
}

export const Container = styled.div`
  h1 {
    font-family: sans-serif;
    margin-bottom: 20px;
    text-align: center;
  }
`;

export const Form = styled.form`
  display: flex;
  min-width: 375px;
  border-radius: 10px;

  input {
    outline: none;
    border: none;
    padding: 10px 0;
    border-radius: 5px;
    width: 100%;
    padding-left: 7px;
  }

  button {
    border-radius: 5px;
    border: none;
    padding: 0 10px;
    margin-left: 7px;
    background-color: #0194be;
    font-weight: bold;
    cursor: pointer;
    color: #ffffff;

    &:hover {
      opacity: 0.8;
    }
  }
`;

export const ContainerList = styled.ul`
  margin-top: 20px;
  text-align: center;

  svg {
    font-size: 20px;
    cursor: pointer;
    margin: 0 5px;
  }
`;

export const ListItem = styled.li<ListItemProps>`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 20px;
  padding: 10px 0;
  border-radius: 5px;
  background-color: ${({ $finished }) => ($finished ? "green" : "white")};
`;
