import api from "@/app/lib/api";

const trackingCustomerService = {
  getShipmentsByPhone(phone: string) {
    return api.get(`/orders/shipments-by-phone/${phone}`);
  },
};

export default trackingCustomerService;
