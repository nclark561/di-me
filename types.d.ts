declare module "bcryptjs" {
  export function genSaltSync(rounds?: number): string;
  export function genSalt(rounds: number): Promise<string>;
  export function hashSync(data: string, salt: string | number): string;
  export function hash(
    data: string,
    saltOrRounds: string | number
  ): Promise<string>;
  export function compareSync(data: string, encrypted: string): boolean;
  export function compare(data: string, encrypted: string): Promise<boolean>;
  export function getRounds(encrypted: string): number | null;
}

declare module "jsonwebtoken" {
  export type Algorithm =
    | "HS256"
    | "HS384"
    | "HS512"
    | "RS256"
    | "RS384"
    | "RS512"
    | "ES256"
    | "ES384"
    | "ES512"
    | "PS256"
    | "PS384"
    | "PS512";

  export interface SignOptions {
    algorithm?: Algorithm;
    expiresIn?: string | number;
    notBefore?: string | number;
    audience?: string | string[];
    issuer?: string;
    subject?: string;
    jwtid?: string;
    noTimestamp?: boolean;
    header?: object;
    keyid?: string;
  }

  export interface VerifyOptions {
    algorithms?: Algorithm[];
    audience?: string | string[];
    issuer?: string | string[];
    subject?: string;
    clockTimestamp?: number;
    clockTolerance?: number;
    maxAge?: string | number;
    clockTimestampExpiresIn?: string;
  }

  export interface DecodeOptions {
    complete?: boolean;
    json?: boolean;
  }

  export interface VerifyCallback {
    (err: Error | null, decoded: object | undefined): void;
  }

  export function sign(
    payload: string | object | Buffer,
    secretOrPrivateKey: Secret,
    options?: SignOptions
  ): string;

  export function sign(
    payload: string | object | Buffer,
    secretOrPrivateKey: Secret,
    callback: (err: Error | null, token: string | undefined) => void
  ): void;

  export function sign(
    payload: string | object | Buffer,
    secretOrPrivateKey: Secret,
    options: SignOptions,
    callback: (err: Error | null, token: string | undefined) => void
  ): void;

  export function verify(
    token: string,
    secretOrPublicKey: Secret | GetPublicKeyOrSecret,
    options?: VerifyOptions,
    callback?: VerifyCallback
  ): object | string;

  export function decode(
    token: string,
    options?: DecodeOptions
  ): null | { [key: string]: any } | string;

  export function decode(
    token: string,
    options: DecodeOptions & { complete: true }
  ): null | { [key: string]: any } | string | JwtHeader | JwtPayload;
}

