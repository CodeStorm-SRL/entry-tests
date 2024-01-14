import { useLocation, useNavigate } from "react-router-dom";

export const useBackToMainPage = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const isUserInPhotoPage = pathname === "/photo";

  function handleNavigate(): void {
    if (isUserInPhotoPage) return;

    navigate("/");
  }
  return { isUserInPhotoPage, handleNavigate };
};
