import { ExecutionContext, ForbiddenException, Injectable } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { Observable } from "rxjs";
import { realms } from "./constants";
import { Reflector } from "@nestjs/core";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class JwtAuthGuard extends AuthGuard("jwt") {
  constructor(private reflector: Reflector) {
    super(reflector);
  }

  canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
    const roles = this.reflector.get<string[]>("realms", context.getHandler());
    console.log("realms", roles);
    const header = context.switchToHttp().getRequest().headers;
    // console.log('[jwtAuthGuard] request', request);
    const permission = this.validate(header);
    if (roles.find(role => role === permission)) return super.canActivate(context);
    throw new ForbiddenException(undefined, `${permission} is not authorized. `);
  }

  validate(header) {
    const jwtService = new JwtService();
    console.log("header", header);
    const tokenArray = header.authorization.split(" ")[1];
    const { permission } = jwtService.decode(tokenArray) as { permission: string };
    return permission;
  }
}