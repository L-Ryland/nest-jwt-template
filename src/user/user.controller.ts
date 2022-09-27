import { Body, Controller, Post } from "@nestjs/common";
import { User } from "./user.service";
import { Knex } from "knex";
import { KnexService } from "../knex/knex.service";
import { AuthService } from "../auth/auth.service";

const userPrefix = "users";
@Controller(userPrefix)
export class UserController {
  constructor(private authService: AuthService) { }
  @Post("login")
  async login(@Body() user: User) {
    // return this.knex(userPrefix).where(user);
    return this.authService.login(user);
  }
}
