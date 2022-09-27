import { SetMetadata } from "@nestjs/common";
import { realms } from "../auth/constants";

export const Roles = (role: keyof typeof realms) => SetMetadata("realms", realms[role]);