// import About from "./components/About";
// import SideMenu from "./components/SideMenu";
import ServicePage from "./components/ServicePage";
// import Feedback from "./components/Feedback";
// import QuestionPage from "./components/QuestionPage";
// import ReasonPage from "./components/ReasonPage";
import Service from "./components/Service";
// import PartnerPage from "./components/PartnerPage";
// import PromotionPage from "./components/PromotionPage";
// import ChatBoxList from "./components/ChatBoxList";
import Vision from "./components/Vision";

export default function Home() {
  return (
    <div className="bg-white relative overflow-x-hidden">
      {/* Side Menu */}
      {/* <SideMenu /> */}

      {/* About section */}
      {/* <About /> */}

      {/* Service Page section - Dịch vụ quốc tế */}
      <ServicePage />

      {/* About section */}
      <Vision />

      {/* Service Page section - Quy trình 5 bước */}
      <Service />

      {/* Reason Page section - Lý do chọn TixiMax */}
      {/* <ReasonPage /> */}

      {/* Question Page section - FAQ & Báo giá */}
      {/* <QuestionPage /> */}

      {/* Feedback Page section - Đánh giá khách hàng */}
      {/* <Feedback /> */}

      {/* Partner Page section - FAQ & Báo giá */}
      {/* <PartnerPage /> */}

      {/* Promotion Page section - Khuyến mãi */}
      {/* <PromotionPage /> */}

      {/* Chat hỗ trợ nổi góc phải */}
      {/* <ChatBoxList
        zaloHref="https://zalo.me/84367427630"
        hotlineHref="tel:+84367427630"
        onLiveChat={() => alert("Mở hỗ trợ trực tuyến")}
        onAssistant={() => alert("Mở trợ lý mua sắm Tiximax")}
      /> */}
    </div>
  );
}
