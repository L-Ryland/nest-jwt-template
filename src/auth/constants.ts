export const jwtConstants = {
  secret: "<#,)sS$*zJ/f6Yp-PEY\"Q_VX\"N_F=NtX=!^VbP(duuVs_Zf:b!/<Y:#9CH,z+:Xa"
};
export const realms = {
  CustomerRealm: ["customer"],

  SuperAdminRealm: ["super-admin"],

  AdminRealm: ["super-admin", "admin"],

  ProductManagerRealm: ["super-admin", "admin", "product-manager"],
  FinanceOnlyRealm: ["super-admin", "admin", "finance"],

  FinanceLimitedRealm: ["super-admin", "admin", "product-manager", "finance"],
  CustomerHeroRealm: ["super-admin", "admin", "product-manager", "customer-hero"],
  ManagerRealm: ["super-admin", "admin", "product-manager", "community-manager"],

  FinanceLogisticRealm: ["super-admin", "admin", "product-manager", "logistic", "finance"],
  LogisticRealm: ["super-admin", "admin", "product-manager", "community-manager", "logistic"],
  FinanceManagersRealm: ["super-admin", "admin", "product-manager", "community-manager", "finance"],
  FinanceLargeRealm: ["super-admin", "admin", "product-manager", "community-manager", "finance"],
  DesignManagerRealm: ["super-admin", "admin", "product-manager", "community-manager", "designer"],
  CustomerFacingRealm: ["super-admin", "admin", "product-manager", "community-manager", "customer-hero"],

  NoFinanceHeroRealm: ["super-admin", "admin", "product-manager", "community-manager", "designer", "logistic"],
  NoFinanceDesignerRealm: ["super-admin", "admin", "product-manager", "community-manager", "customer-hero", "logistic"],
  NoDesignerLogisticRealm: ["super-admin", "admin", "product-manager", "community-manager", "customer-hero", "finance"],
  FinanceLogisticLargeRealm: ["super-admin", "admin", "product-manager", "community-manager", "logistic", "finance"],

  NoDesignerRealm: ["super-admin", "admin", "product-manager", "community-manager", "customer-hero", "logistic", "finance"],

  AllRealm: ["super-admin", "admin", "product-manager", "community-manager", "customer-hero", "designer", "logistic", "finance", "customer"]
};