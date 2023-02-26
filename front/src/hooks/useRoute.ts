import { useNavigate } from "react-router";

const useRoute = () => {
  const navigate = useNavigate();
  const handleRouteBack = () => {
    navigate(-1);
  };

  return { handleRouteBack };
};

export default useRoute;
