import {
  Outlet,
  RouterProvider,
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";
import Layout from "./components/Layout";
import About from "./pages/About";
import AzadirachtinExtract from "./pages/AzadirachtinExtract";
import ColdPressedNeemOil from "./pages/ColdPressedNeemOil";
import Contact from "./pages/Contact";
import DoubleFilteredNeemOil from "./pages/DoubleFilteredNeemOil";
import ExportDocumentation from "./pages/ExportDocumentation";
import FAQ from "./pages/FAQ";
import FilteredNeemOil from "./pages/FilteredNeemOil";
import GlobalExportMarkets from "./pages/GlobalExportMarkets";
import Home from "./pages/Home";
import IndustryApplications from "./pages/IndustryApplications";
import InvestorInsights from "./pages/InvestorInsights";
import NeemOilOverview from "./pages/NeemOilOverview";
import QualityControl from "./pages/QualityControl";
import SupplyChain from "./pages/SupplyChain";

const rootRoute = createRootRoute({
  component: () => (
    <Layout>
      <Outlet />
    </Layout>
  ),
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: Home,
});
const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/about",
  component: About,
});
const neemOverviewRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/neem-oil-overview",
  component: NeemOilOverview,
});
const coldPressedRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/cold-pressed-neem-oil",
  component: ColdPressedNeemOil,
});
const filteredRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/filtered-neem-oil",
  component: FilteredNeemOil,
});
const doubleFilteredRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/double-filtered-neem-oil",
  component: DoubleFilteredNeemOil,
});
const azadirachtinRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/azadirachtin-extract",
  component: AzadirachtinExtract,
});
const globalMarketsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/global-export-markets",
  component: GlobalExportMarkets,
});
const industryRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/industry-applications",
  component: IndustryApplications,
});
const supplyChainRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/supply-chain",
  component: SupplyChain,
});
const qualityRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/quality-control",
  component: QualityControl,
});
const exportDocsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/export-documentation",
  component: ExportDocumentation,
});
const investorRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/investor-insights",
  component: InvestorInsights,
});
const faqRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/faq",
  component: FAQ,
});
const contactRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/contact",
  component: Contact,
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  aboutRoute,
  neemOverviewRoute,
  coldPressedRoute,
  filteredRoute,
  doubleFilteredRoute,
  azadirachtinRoute,
  globalMarketsRoute,
  industryRoute,
  supplyChainRoute,
  qualityRoute,
  exportDocsRoute,
  investorRoute,
  faqRoute,
  contactRoute,
]);

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return <RouterProvider router={router} />;
}
