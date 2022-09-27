import { Injectable } from "@nestjs/common";
import { User, UserService } from "../user/user.service";
import { Knex } from "knex";
import { KnexService } from "../knex/knex.service";
import { JwtService } from "@nestjs/jwt";
import { UserDto } from "../dto/user.dto";

@Injectable()
export class AuthService {
  knex: Knex;

  constructor(private userService: UserService, private knexService: KnexService, private jwtService: JwtService) {
    this.knex = knexService.knex;
  }

  async validateUser(user: User): Promise<UserDto | null> {
    const result = await this.knex("users").where(user);
    return result.length > 0 ? result[0] : null;
  }

  async login(user: User) {
    const result = await this.validateUser(user);
    if (result) return { access_token: this.jwtService.sign({ uid: result.id, type: "super-admin", permission: "super-admin" }) };
    return result;
  }
}
