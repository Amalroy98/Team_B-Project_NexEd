import styled from "styled-components";
import { Link } from "react-router-dom";

export const LoginButton = styled.div`
  display: flex;
  width: 60px;
  height: 37px;
  background: black;
  color: white;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  cursor: pointer;
`;

export const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  margin: 1rem;
  position: relative;
`;