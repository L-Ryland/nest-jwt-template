export const jwtConstants = {
  secret: "<#,)sS$*zJ/f6Yp-PEY\"Q_VX\"N_F=NtX=!^VbP(duuVs_Zf:b!/<Y:#9CH,z+:Xa"
};
export const realms = {
  CUSTOMER_REALM: ["customer"],

  SUPER_ADMIN_REALM: ["super-admin"],

  ADMIN_REALM: ["super-admin", "admin"],

  PRODUCT_MANAGER_REALM: ["super-admin", "admin", "product-manager"],
  FINANCE_ONLY_REALM: ["super-admin", "admin", "finance"],

  FINANCE_LIMITED_REALM: ["super-admin", "admin", "product-manager", "finance"],
  CUSTOMER_HERO_REALM: ["super-admin", "admin", "product-manager", "customer-hero"],
  MANAGERS_REALM: ["super-admin", "admin", "product-manager", "community-manager"],

  FINANCE_LOGISTIC_REALM: ["super-admin", "admin", "product-manager", "logistic", "finance"],
  LOGISTIC_REALM: ["super-admin", "admin", "product-manager", "community-manager", "logistic"],
  FINANCE_MANAGERS_REALM: ["super-admin", "admin", "product-manager", "community-manager", "finance"],
  FINANCE_LARGE_REALM: ["super-admin", "admin", "product-manager", "community-manager", "finance"],
  DESIGN_MANAGER_REALM: ["super-admin", "admin", "product-manager", "community-manager", "designer"],
  CUSTOMER_FACING_REALM: ["super-admin", "admin", "product-manager", "community-manager", "customer-hero"],

  NO_FINANCE_HERO_REALM: ["super-admin", "admin", "product-manager", "community-manager", "designer", "logistic"],
  NO_FINANCE_DESIGNER_REALM: ["super-admin", "admin", "product-manager", "community-manager", "customer-hero", "logistic"],
  NO_DESIGNER_LOGISTIC_REALM: ["super-admin", "admin", "product-manager", "community-manager", "customer-hero", "finance"],
  FINANCE_LOGISTIC_LARGE_REALM: ["super-admin", "admin", "product-manager", "community-manager", "logistic", "finance"],

  NO_DESIGNER_REALM: ["super-admin", "admin", "product-manager", "community-manager", "customer-hero", "logistic", "finance"],

  ALL_REALM: ["super-admin", "admin", "product-manager", "community-manager", "customer-hero", "designer", "logistic", "finance", "customer"]
};