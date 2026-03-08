import { useNavigation, Outlet } from "react-router";
import Navbar from "../components/Navbar";
import PageLoader from "../components/PageLoader";

function MainLayout() {
  const navigation = useNavigation();

  // lazy load 時，state 會變成 "loading"
  const isLoading = navigation.state === "loading";

  return (
    <>
      <Navbar />
      <main>
        {isLoading ? (
          // 顯示暫時的載入畫面，直到 lazy 元件載入完成
          <PageLoader />
        ) : (
          // child route component 會在 lazy 元件載入完成後顯示
          <Outlet />
        )}
      </main>
    </>
  );
}

export default MainLayout;
