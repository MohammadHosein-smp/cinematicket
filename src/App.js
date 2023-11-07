import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Components/HomePage";
import WalletPage from "./Components/DashboardPages/WalletPage";
import TransactionsPage from "./Components/DashboardPages/TransactionsPage";
import MyTicketsPage from "./Components/DashboardPages/MyTicketsPage";
import AuthenticationPage from "./Components/DashboardPages/AuthenticationPage";
import MovieMore from "./Components/MovieMorePage";
import CinemaPage from "./Components/CinemaPage";
import MovieDetailPage from "./Components/MovieDetailPage";
import ChooseSeatPage from "./Components/ChooseSeatPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="home/cinema" element={<CinemaPage />} />
        <Route path="movie/more/:title" element={<MovieMore />} />
        <Route path="dashboard/wallet" element={<WalletPage />} />
        <Route
          path="dashboard/authentication"
          element={<AuthenticationPage />}
        />
        <Route path="dashboard/transactions" element={<TransactionsPage />} />
        <Route path="dashboard/mytickets" element={<MyTicketsPage />} />
        <Route path="movie/detail/:id" element={<MovieDetailPage />} />
        <Route
          path="ticket/choose-seat/init/samfa/:id"
          element={<ChooseSeatPage />}
        />
        <Route path="*" element={<h1>Page Not Found!!!</h1>} />
      </Routes>
    </BrowserRouter>
  );
}
