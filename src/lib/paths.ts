import CONFIG from "@/lib/config";

export const BASE_PATH = "/api/" + CONFIG.API_VERSION;

export const PATHS = {
  AUTH: {
    BASE: `${BASE_PATH}/auth`,
    REGISTER: `${BASE_PATH}/auth/register`,
  },
};
