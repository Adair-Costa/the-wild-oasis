import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import { useUser } from "../features/authentication/useUser";
import Spinner from "./Spinner";

const FullPage = styled.div`
  height: 100vh;
  background-color: var(--color-gray-50);
  display: flex;
  align-items: center;
  justify-content: center;
`;

function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  // 1. LOAD THE AUTHENTICATED USER
  const { isAuthenticated, isLoading } = useUser();

  // 3. IF THERE IS NO AUTHENTICATED USER, REDIRECT TO THE /LOGIN
  useEffect(
    function () {
      if (!isAuthenticated && !isLoading) navigate("/login");
    },
    [isAuthenticated, isLoading, navigate]
  );

  // 2.WHILE LOADING, SHOW A SPINNER
  if (isLoading)
    return (
      <FullPage>
        <Spinner />
      </FullPage>
    );

  // 4. IF THERE IS THE USER, RENDER THE APP
  if (isAuthenticated) return children;
}

export default ProtectedRoute;
