
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Asset
 * 
 */
export type Asset = $Result.DefaultSelection<Prisma.$AssetPayload>
/**
 * Model AudioFingerprint
 * 
 */
export type AudioFingerprint = $Result.DefaultSelection<Prisma.$AudioFingerprintPayload>
/**
 * Model FingerprintHash
 * 
 */
export type FingerprintHash = $Result.DefaultSelection<Prisma.$FingerprintHashPayload>
/**
 * Model Watermark
 * 
 */
export type Watermark = $Result.DefaultSelection<Prisma.$WatermarkPayload>
/**
 * Model Broadcaster
 * 
 */
export type Broadcaster = $Result.DefaultSelection<Prisma.$BroadcasterPayload>
/**
 * Model MonitoringSession
 * 
 */
export type MonitoringSession = $Result.DefaultSelection<Prisma.$MonitoringSessionPayload>
/**
 * Model Detection
 * 
 */
export type Detection = $Result.DefaultSelection<Prisma.$DetectionPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Status: {
  PENDING: 'PENDING',
  ACTIVE: 'ACTIVE',
  INACTIVE: 'INACTIVE',
  DELETED: 'DELETED'
};

export type Status = (typeof Status)[keyof typeof Status]


export const UserRole: {
  USER: 'USER',
  ADMINISTRATOR: 'ADMINISTRATOR',
  SYSTEM: 'SYSTEM'
};

export type UserRole = (typeof UserRole)[keyof typeof UserRole]


export const AssetType: {
  MUSIC: 'MUSIC',
  VIDEO: 'VIDEO'
};

export type AssetType = (typeof AssetType)[keyof typeof AssetType]


export const DetectionStatus: {
  PENDING: 'PENDING',
  VERIFIED: 'VERIFIED',
  REJECTED: 'REJECTED'
};

export type DetectionStatus = (typeof DetectionStatus)[keyof typeof DetectionStatus]

}

export type Status = $Enums.Status

export const Status: typeof $Enums.Status

export type UserRole = $Enums.UserRole

export const UserRole: typeof $Enums.UserRole

export type AssetType = $Enums.AssetType

export const AssetType: typeof $Enums.AssetType

export type DetectionStatus = $Enums.DetectionStatus

export const DetectionStatus: typeof $Enums.DetectionStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.PrismaClientConstructorArgs<ClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.asset`: Exposes CRUD operations for the **Asset** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Assets
    * const assets = await prisma.asset.findMany()
    * ```
    */
  get asset(): Prisma.AssetDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.audioFingerprint`: Exposes CRUD operations for the **AudioFingerprint** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AudioFingerprints
    * const audioFingerprints = await prisma.audioFingerprint.findMany()
    * ```
    */
  get audioFingerprint(): Prisma.AudioFingerprintDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.fingerprintHash`: Exposes CRUD operations for the **FingerprintHash** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FingerprintHashes
    * const fingerprintHashes = await prisma.fingerprintHash.findMany()
    * ```
    */
  get fingerprintHash(): Prisma.FingerprintHashDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.watermark`: Exposes CRUD operations for the **Watermark** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Watermarks
    * const watermarks = await prisma.watermark.findMany()
    * ```
    */
  get watermark(): Prisma.WatermarkDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.broadcaster`: Exposes CRUD operations for the **Broadcaster** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Broadcasters
    * const broadcasters = await prisma.broadcaster.findMany()
    * ```
    */
  get broadcaster(): Prisma.BroadcasterDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.monitoringSession`: Exposes CRUD operations for the **MonitoringSession** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MonitoringSessions
    * const monitoringSessions = await prisma.monitoringSession.findMany()
    * ```
    */
  get monitoringSession(): Prisma.MonitoringSessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.detection`: Exposes CRUD operations for the **Detection** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Detections
    * const detections = await prisma.detection.findMany()
    * ```
    */
  get detection(): Prisma.DetectionDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.9.0
   * Query Engine version: e922089b7d7502aff4249d5da3420f6fa55fc6ad
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * Resolved type of the argument passed to the `PrismaClient` constructor.
   *
   * When called without a narrower options type (the common case), this resolves
   * to `PrismaClientOptions` directly, which produces a clear TypeScript error
   * message (`not assignable to parameter of type 'PrismaClientOptions'`) when
   * the argument is missing or incomplete. When the user supplies a narrower
   * options type (e.g. via a literal), it falls back to `Subset` to keep
   * filtering out unknown properties.
   */
  export type PrismaClientConstructorArgs<Options extends PrismaClientOptions> =
    [PrismaClientOptions] extends [Options] ? PrismaClientOptions : Subset<Options, PrismaClientOptions>;

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      ((Without<T, U> & U) | (Without<U, T> & T)) & object
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Asset: 'Asset',
    AudioFingerprint: 'AudioFingerprint',
    FingerprintHash: 'FingerprintHash',
    Watermark: 'Watermark',
    Broadcaster: 'Broadcaster',
    MonitoringSession: 'MonitoringSession',
    Detection: 'Detection'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "asset" | "audioFingerprint" | "fingerprintHash" | "watermark" | "broadcaster" | "monitoringSession" | "detection"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Asset: {
        payload: Prisma.$AssetPayload<ExtArgs>
        fields: Prisma.AssetFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AssetFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssetPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AssetFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssetPayload>
          }
          findFirst: {
            args: Prisma.AssetFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssetPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AssetFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssetPayload>
          }
          findMany: {
            args: Prisma.AssetFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssetPayload>[]
          }
          create: {
            args: Prisma.AssetCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssetPayload>
          }
          createMany: {
            args: Prisma.AssetCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AssetCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssetPayload>[]
          }
          delete: {
            args: Prisma.AssetDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssetPayload>
          }
          update: {
            args: Prisma.AssetUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssetPayload>
          }
          deleteMany: {
            args: Prisma.AssetDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AssetUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AssetUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssetPayload>[]
          }
          upsert: {
            args: Prisma.AssetUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssetPayload>
          }
          aggregate: {
            args: Prisma.AssetAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAsset>
          }
          groupBy: {
            args: Prisma.AssetGroupByArgs<ExtArgs>
            result: $Utils.Optional<AssetGroupByOutputType>[]
          }
          count: {
            args: Prisma.AssetCountArgs<ExtArgs>
            result: $Utils.Optional<AssetCountAggregateOutputType> | number
          }
        }
      }
      AudioFingerprint: {
        payload: Prisma.$AudioFingerprintPayload<ExtArgs>
        fields: Prisma.AudioFingerprintFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AudioFingerprintFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AudioFingerprintPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AudioFingerprintFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AudioFingerprintPayload>
          }
          findFirst: {
            args: Prisma.AudioFingerprintFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AudioFingerprintPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AudioFingerprintFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AudioFingerprintPayload>
          }
          findMany: {
            args: Prisma.AudioFingerprintFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AudioFingerprintPayload>[]
          }
          create: {
            args: Prisma.AudioFingerprintCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AudioFingerprintPayload>
          }
          createMany: {
            args: Prisma.AudioFingerprintCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AudioFingerprintCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AudioFingerprintPayload>[]
          }
          delete: {
            args: Prisma.AudioFingerprintDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AudioFingerprintPayload>
          }
          update: {
            args: Prisma.AudioFingerprintUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AudioFingerprintPayload>
          }
          deleteMany: {
            args: Prisma.AudioFingerprintDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AudioFingerprintUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AudioFingerprintUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AudioFingerprintPayload>[]
          }
          upsert: {
            args: Prisma.AudioFingerprintUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AudioFingerprintPayload>
          }
          aggregate: {
            args: Prisma.AudioFingerprintAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAudioFingerprint>
          }
          groupBy: {
            args: Prisma.AudioFingerprintGroupByArgs<ExtArgs>
            result: $Utils.Optional<AudioFingerprintGroupByOutputType>[]
          }
          count: {
            args: Prisma.AudioFingerprintCountArgs<ExtArgs>
            result: $Utils.Optional<AudioFingerprintCountAggregateOutputType> | number
          }
        }
      }
      FingerprintHash: {
        payload: Prisma.$FingerprintHashPayload<ExtArgs>
        fields: Prisma.FingerprintHashFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FingerprintHashFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FingerprintHashPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FingerprintHashFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FingerprintHashPayload>
          }
          findFirst: {
            args: Prisma.FingerprintHashFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FingerprintHashPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FingerprintHashFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FingerprintHashPayload>
          }
          findMany: {
            args: Prisma.FingerprintHashFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FingerprintHashPayload>[]
          }
          create: {
            args: Prisma.FingerprintHashCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FingerprintHashPayload>
          }
          createMany: {
            args: Prisma.FingerprintHashCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FingerprintHashCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FingerprintHashPayload>[]
          }
          delete: {
            args: Prisma.FingerprintHashDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FingerprintHashPayload>
          }
          update: {
            args: Prisma.FingerprintHashUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FingerprintHashPayload>
          }
          deleteMany: {
            args: Prisma.FingerprintHashDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FingerprintHashUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FingerprintHashUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FingerprintHashPayload>[]
          }
          upsert: {
            args: Prisma.FingerprintHashUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FingerprintHashPayload>
          }
          aggregate: {
            args: Prisma.FingerprintHashAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFingerprintHash>
          }
          groupBy: {
            args: Prisma.FingerprintHashGroupByArgs<ExtArgs>
            result: $Utils.Optional<FingerprintHashGroupByOutputType>[]
          }
          count: {
            args: Prisma.FingerprintHashCountArgs<ExtArgs>
            result: $Utils.Optional<FingerprintHashCountAggregateOutputType> | number
          }
        }
      }
      Watermark: {
        payload: Prisma.$WatermarkPayload<ExtArgs>
        fields: Prisma.WatermarkFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WatermarkFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WatermarkPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WatermarkFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WatermarkPayload>
          }
          findFirst: {
            args: Prisma.WatermarkFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WatermarkPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WatermarkFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WatermarkPayload>
          }
          findMany: {
            args: Prisma.WatermarkFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WatermarkPayload>[]
          }
          create: {
            args: Prisma.WatermarkCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WatermarkPayload>
          }
          createMany: {
            args: Prisma.WatermarkCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WatermarkCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WatermarkPayload>[]
          }
          delete: {
            args: Prisma.WatermarkDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WatermarkPayload>
          }
          update: {
            args: Prisma.WatermarkUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WatermarkPayload>
          }
          deleteMany: {
            args: Prisma.WatermarkDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WatermarkUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WatermarkUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WatermarkPayload>[]
          }
          upsert: {
            args: Prisma.WatermarkUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WatermarkPayload>
          }
          aggregate: {
            args: Prisma.WatermarkAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWatermark>
          }
          groupBy: {
            args: Prisma.WatermarkGroupByArgs<ExtArgs>
            result: $Utils.Optional<WatermarkGroupByOutputType>[]
          }
          count: {
            args: Prisma.WatermarkCountArgs<ExtArgs>
            result: $Utils.Optional<WatermarkCountAggregateOutputType> | number
          }
        }
      }
      Broadcaster: {
        payload: Prisma.$BroadcasterPayload<ExtArgs>
        fields: Prisma.BroadcasterFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BroadcasterFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BroadcasterPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BroadcasterFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BroadcasterPayload>
          }
          findFirst: {
            args: Prisma.BroadcasterFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BroadcasterPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BroadcasterFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BroadcasterPayload>
          }
          findMany: {
            args: Prisma.BroadcasterFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BroadcasterPayload>[]
          }
          create: {
            args: Prisma.BroadcasterCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BroadcasterPayload>
          }
          createMany: {
            args: Prisma.BroadcasterCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BroadcasterCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BroadcasterPayload>[]
          }
          delete: {
            args: Prisma.BroadcasterDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BroadcasterPayload>
          }
          update: {
            args: Prisma.BroadcasterUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BroadcasterPayload>
          }
          deleteMany: {
            args: Prisma.BroadcasterDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BroadcasterUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BroadcasterUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BroadcasterPayload>[]
          }
          upsert: {
            args: Prisma.BroadcasterUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BroadcasterPayload>
          }
          aggregate: {
            args: Prisma.BroadcasterAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBroadcaster>
          }
          groupBy: {
            args: Prisma.BroadcasterGroupByArgs<ExtArgs>
            result: $Utils.Optional<BroadcasterGroupByOutputType>[]
          }
          count: {
            args: Prisma.BroadcasterCountArgs<ExtArgs>
            result: $Utils.Optional<BroadcasterCountAggregateOutputType> | number
          }
        }
      }
      MonitoringSession: {
        payload: Prisma.$MonitoringSessionPayload<ExtArgs>
        fields: Prisma.MonitoringSessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MonitoringSessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonitoringSessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MonitoringSessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonitoringSessionPayload>
          }
          findFirst: {
            args: Prisma.MonitoringSessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonitoringSessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MonitoringSessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonitoringSessionPayload>
          }
          findMany: {
            args: Prisma.MonitoringSessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonitoringSessionPayload>[]
          }
          create: {
            args: Prisma.MonitoringSessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonitoringSessionPayload>
          }
          createMany: {
            args: Prisma.MonitoringSessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MonitoringSessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonitoringSessionPayload>[]
          }
          delete: {
            args: Prisma.MonitoringSessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonitoringSessionPayload>
          }
          update: {
            args: Prisma.MonitoringSessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonitoringSessionPayload>
          }
          deleteMany: {
            args: Prisma.MonitoringSessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MonitoringSessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MonitoringSessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonitoringSessionPayload>[]
          }
          upsert: {
            args: Prisma.MonitoringSessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonitoringSessionPayload>
          }
          aggregate: {
            args: Prisma.MonitoringSessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMonitoringSession>
          }
          groupBy: {
            args: Prisma.MonitoringSessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<MonitoringSessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.MonitoringSessionCountArgs<ExtArgs>
            result: $Utils.Optional<MonitoringSessionCountAggregateOutputType> | number
          }
        }
      }
      Detection: {
        payload: Prisma.$DetectionPayload<ExtArgs>
        fields: Prisma.DetectionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DetectionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetectionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DetectionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetectionPayload>
          }
          findFirst: {
            args: Prisma.DetectionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetectionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DetectionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetectionPayload>
          }
          findMany: {
            args: Prisma.DetectionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetectionPayload>[]
          }
          create: {
            args: Prisma.DetectionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetectionPayload>
          }
          createMany: {
            args: Prisma.DetectionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DetectionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetectionPayload>[]
          }
          delete: {
            args: Prisma.DetectionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetectionPayload>
          }
          update: {
            args: Prisma.DetectionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetectionPayload>
          }
          deleteMany: {
            args: Prisma.DetectionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DetectionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DetectionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetectionPayload>[]
          }
          upsert: {
            args: Prisma.DetectionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetectionPayload>
          }
          aggregate: {
            args: Prisma.DetectionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDetection>
          }
          groupBy: {
            args: Prisma.DetectionGroupByArgs<ExtArgs>
            result: $Utils.Optional<DetectionGroupByOutputType>[]
          }
          count: {
            args: Prisma.DetectionCountArgs<ExtArgs>
            result: $Utils.Optional<DetectionCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * A driver adapter that PrismaClient uses to connect to your database, such as the ones provided by `@prisma/adapter-pg`, `@prisma/adapter-libsql`, `@prisma/adapter-planetscale`, etc.
     * 
     * A driver adapter is **required** unless you connect to your database through Prisma Accelerate (in which case use `accelerateUrl` instead).
     * 
     * Learn more: https://pris.ly/d/driver-adapters
     * 
     * @example
     * ```ts
     * import { PrismaPg } from '@prisma/adapter-pg'
     * import { PrismaClient } from './generated/prisma/client'
     * 
     * const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL })
     * const prisma = new PrismaClient({ adapter })
     * ```
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * The Prisma Accelerate connection URL. Use this option to connect to your database through Prisma Accelerate instead of using a driver adapter to connect directly.
     * 
     * Learn more: https://pris.ly/d/accelerate
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    asset?: AssetOmit
    audioFingerprint?: AudioFingerprintOmit
    fingerprintHash?: FingerprintHashOmit
    watermark?: WatermarkOmit
    broadcaster?: BroadcasterOmit
    monitoringSession?: MonitoringSessionOmit
    detection?: DetectionOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    assets: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assets?: boolean | UserCountOutputTypeCountAssetsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAssetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AssetWhereInput
  }


  /**
   * Count Type AssetCountOutputType
   */

  export type AssetCountOutputType = {
    hashes: number
    detections: number
  }

  export type AssetCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    hashes?: boolean | AssetCountOutputTypeCountHashesArgs
    detections?: boolean | AssetCountOutputTypeCountDetectionsArgs
  }

  // Custom InputTypes
  /**
   * AssetCountOutputType without action
   */
  export type AssetCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssetCountOutputType
     */
    select?: AssetCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AssetCountOutputType without action
   */
  export type AssetCountOutputTypeCountHashesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FingerprintHashWhereInput
  }

  /**
   * AssetCountOutputType without action
   */
  export type AssetCountOutputTypeCountDetectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DetectionWhereInput
  }


  /**
   * Count Type AudioFingerprintCountOutputType
   */

  export type AudioFingerprintCountOutputType = {
    hashes: number
  }

  export type AudioFingerprintCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    hashes?: boolean | AudioFingerprintCountOutputTypeCountHashesArgs
  }

  // Custom InputTypes
  /**
   * AudioFingerprintCountOutputType without action
   */
  export type AudioFingerprintCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AudioFingerprintCountOutputType
     */
    select?: AudioFingerprintCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AudioFingerprintCountOutputType without action
   */
  export type AudioFingerprintCountOutputTypeCountHashesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FingerprintHashWhereInput
  }


  /**
   * Count Type BroadcasterCountOutputType
   */

  export type BroadcasterCountOutputType = {
    monitoringSessions: number
    detections: number
  }

  export type BroadcasterCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    monitoringSessions?: boolean | BroadcasterCountOutputTypeCountMonitoringSessionsArgs
    detections?: boolean | BroadcasterCountOutputTypeCountDetectionsArgs
  }

  // Custom InputTypes
  /**
   * BroadcasterCountOutputType without action
   */
  export type BroadcasterCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BroadcasterCountOutputType
     */
    select?: BroadcasterCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BroadcasterCountOutputType without action
   */
  export type BroadcasterCountOutputTypeCountMonitoringSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MonitoringSessionWhereInput
  }

  /**
   * BroadcasterCountOutputType without action
   */
  export type BroadcasterCountOutputTypeCountDetectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DetectionWhereInput
  }


  /**
   * Count Type MonitoringSessionCountOutputType
   */

  export type MonitoringSessionCountOutputType = {
    detections: number
  }

  export type MonitoringSessionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    detections?: boolean | MonitoringSessionCountOutputTypeCountDetectionsArgs
  }

  // Custom InputTypes
  /**
   * MonitoringSessionCountOutputType without action
   */
  export type MonitoringSessionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonitoringSessionCountOutputType
     */
    select?: MonitoringSessionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MonitoringSessionCountOutputType without action
   */
  export type MonitoringSessionCountOutputTypeCountDetectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DetectionWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    phone: string | null
    email: string | null
    passwordHash: string | null
    voiceSign: string | null
    role: $Enums.UserRole | null
    image: string | null
    resetToken: string | null
    resetTokenExpiry: Date | null
    apiKeyHash: string | null
    status: $Enums.Status | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    phone: string | null
    email: string | null
    passwordHash: string | null
    voiceSign: string | null
    role: $Enums.UserRole | null
    image: string | null
    resetToken: string | null
    resetTokenExpiry: Date | null
    apiKeyHash: string | null
    status: $Enums.Status | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    phone: number
    email: number
    passwordHash: number
    voiceSign: number
    role: number
    image: number
    resetToken: number
    resetTokenExpiry: number
    apiKeyHash: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    phone?: true
    email?: true
    passwordHash?: true
    voiceSign?: true
    role?: true
    image?: true
    resetToken?: true
    resetTokenExpiry?: true
    apiKeyHash?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    phone?: true
    email?: true
    passwordHash?: true
    voiceSign?: true
    role?: true
    image?: true
    resetToken?: true
    resetTokenExpiry?: true
    apiKeyHash?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    phone?: true
    email?: true
    passwordHash?: true
    voiceSign?: true
    role?: true
    image?: true
    resetToken?: true
    resetTokenExpiry?: true
    apiKeyHash?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string
    phone: string | null
    email: string | null
    passwordHash: string | null
    voiceSign: string | null
    role: $Enums.UserRole
    image: string | null
    resetToken: string | null
    resetTokenExpiry: Date | null
    apiKeyHash: string | null
    status: $Enums.Status
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    phone?: boolean
    email?: boolean
    passwordHash?: boolean
    voiceSign?: boolean
    role?: boolean
    image?: boolean
    resetToken?: boolean
    resetTokenExpiry?: boolean
    apiKeyHash?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    assets?: boolean | User$assetsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    phone?: boolean
    email?: boolean
    passwordHash?: boolean
    voiceSign?: boolean
    role?: boolean
    image?: boolean
    resetToken?: boolean
    resetTokenExpiry?: boolean
    apiKeyHash?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    phone?: boolean
    email?: boolean
    passwordHash?: boolean
    voiceSign?: boolean
    role?: boolean
    image?: boolean
    resetToken?: boolean
    resetTokenExpiry?: boolean
    apiKeyHash?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    phone?: boolean
    email?: boolean
    passwordHash?: boolean
    voiceSign?: boolean
    role?: boolean
    image?: boolean
    resetToken?: boolean
    resetTokenExpiry?: boolean
    apiKeyHash?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "phone" | "email" | "passwordHash" | "voiceSign" | "role" | "image" | "resetToken" | "resetTokenExpiry" | "apiKeyHash" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assets?: boolean | User$assetsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      assets: Prisma.$AssetPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      phone: string | null
      email: string | null
      passwordHash: string | null
      voiceSign: string | null
      role: $Enums.UserRole
      image: string | null
      resetToken: string | null
      resetTokenExpiry: Date | null
      apiKeyHash: string | null
      status: $Enums.Status
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    assets<T extends User$assetsArgs<ExtArgs> = {}>(args?: Subset<T, User$assetsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly phone: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly passwordHash: FieldRef<"User", 'String'>
    readonly voiceSign: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'UserRole'>
    readonly image: FieldRef<"User", 'String'>
    readonly resetToken: FieldRef<"User", 'String'>
    readonly resetTokenExpiry: FieldRef<"User", 'DateTime'>
    readonly apiKeyHash: FieldRef<"User", 'String'>
    readonly status: FieldRef<"User", 'Status'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.assets
   */
  export type User$assetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asset
     */
    select?: AssetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Asset
     */
    omit?: AssetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssetInclude<ExtArgs> | null
    where?: AssetWhereInput
    orderBy?: AssetOrderByWithRelationInput | AssetOrderByWithRelationInput[]
    cursor?: AssetWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AssetScalarFieldEnum | AssetScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Asset
   */

  export type AggregateAsset = {
    _count: AssetCountAggregateOutputType | null
    _avg: AssetAvgAggregateOutputType | null
    _sum: AssetSumAggregateOutputType | null
    _min: AssetMinAggregateOutputType | null
    _max: AssetMaxAggregateOutputType | null
  }

  export type AssetAvgAggregateOutputType = {
    duration: number | null
    sampleRate: number | null
    bitRate: number | null
    channels: number | null
    fileSize: number | null
  }

  export type AssetSumAggregateOutputType = {
    duration: number | null
    sampleRate: number | null
    bitRate: number | null
    channels: number | null
    fileSize: number | null
  }

  export type AssetMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    artist: string | null
    album: string | null
    isrc: string | null
    filename: string | null
    file: string | null
    image: string | null
    type: $Enums.AssetType | null
    status: $Enums.Status | null
    duration: number | null
    sampleRate: number | null
    bitRate: number | null
    channels: number | null
    fileSize: number | null
    checksum: string | null
    ownerId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AssetMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    artist: string | null
    album: string | null
    isrc: string | null
    filename: string | null
    file: string | null
    image: string | null
    type: $Enums.AssetType | null
    status: $Enums.Status | null
    duration: number | null
    sampleRate: number | null
    bitRate: number | null
    channels: number | null
    fileSize: number | null
    checksum: string | null
    ownerId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AssetCountAggregateOutputType = {
    id: number
    title: number
    description: number
    artist: number
    album: number
    isrc: number
    filename: number
    file: number
    image: number
    type: number
    status: number
    duration: number
    sampleRate: number
    bitRate: number
    channels: number
    fileSize: number
    checksum: number
    ownerId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AssetAvgAggregateInputType = {
    duration?: true
    sampleRate?: true
    bitRate?: true
    channels?: true
    fileSize?: true
  }

  export type AssetSumAggregateInputType = {
    duration?: true
    sampleRate?: true
    bitRate?: true
    channels?: true
    fileSize?: true
  }

  export type AssetMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    artist?: true
    album?: true
    isrc?: true
    filename?: true
    file?: true
    image?: true
    type?: true
    status?: true
    duration?: true
    sampleRate?: true
    bitRate?: true
    channels?: true
    fileSize?: true
    checksum?: true
    ownerId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AssetMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    artist?: true
    album?: true
    isrc?: true
    filename?: true
    file?: true
    image?: true
    type?: true
    status?: true
    duration?: true
    sampleRate?: true
    bitRate?: true
    channels?: true
    fileSize?: true
    checksum?: true
    ownerId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AssetCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    artist?: true
    album?: true
    isrc?: true
    filename?: true
    file?: true
    image?: true
    type?: true
    status?: true
    duration?: true
    sampleRate?: true
    bitRate?: true
    channels?: true
    fileSize?: true
    checksum?: true
    ownerId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AssetAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Asset to aggregate.
     */
    where?: AssetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Assets to fetch.
     */
    orderBy?: AssetOrderByWithRelationInput | AssetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AssetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Assets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Assets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Assets
    **/
    _count?: true | AssetCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AssetAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AssetSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AssetMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AssetMaxAggregateInputType
  }

  export type GetAssetAggregateType<T extends AssetAggregateArgs> = {
        [P in keyof T & keyof AggregateAsset]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAsset[P]>
      : GetScalarType<T[P], AggregateAsset[P]>
  }




  export type AssetGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AssetWhereInput
    orderBy?: AssetOrderByWithAggregationInput | AssetOrderByWithAggregationInput[]
    by: AssetScalarFieldEnum[] | AssetScalarFieldEnum
    having?: AssetScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AssetCountAggregateInputType | true
    _avg?: AssetAvgAggregateInputType
    _sum?: AssetSumAggregateInputType
    _min?: AssetMinAggregateInputType
    _max?: AssetMaxAggregateInputType
  }

  export type AssetGroupByOutputType = {
    id: string
    title: string
    description: string | null
    artist: string | null
    album: string | null
    isrc: string | null
    filename: string | null
    file: string | null
    image: string | null
    type: $Enums.AssetType
    status: $Enums.Status
    duration: number | null
    sampleRate: number | null
    bitRate: number | null
    channels: number | null
    fileSize: number | null
    checksum: string | null
    ownerId: string
    createdAt: Date
    updatedAt: Date
    _count: AssetCountAggregateOutputType | null
    _avg: AssetAvgAggregateOutputType | null
    _sum: AssetSumAggregateOutputType | null
    _min: AssetMinAggregateOutputType | null
    _max: AssetMaxAggregateOutputType | null
  }

  type GetAssetGroupByPayload<T extends AssetGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AssetGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AssetGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AssetGroupByOutputType[P]>
            : GetScalarType<T[P], AssetGroupByOutputType[P]>
        }
      >
    >


  export type AssetSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    artist?: boolean
    album?: boolean
    isrc?: boolean
    filename?: boolean
    file?: boolean
    image?: boolean
    type?: boolean
    status?: boolean
    duration?: boolean
    sampleRate?: boolean
    bitRate?: boolean
    channels?: boolean
    fileSize?: boolean
    checksum?: boolean
    ownerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
    fingerprint?: boolean | Asset$fingerprintArgs<ExtArgs>
    hashes?: boolean | Asset$hashesArgs<ExtArgs>
    watermark?: boolean | Asset$watermarkArgs<ExtArgs>
    detections?: boolean | Asset$detectionsArgs<ExtArgs>
    _count?: boolean | AssetCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["asset"]>

  export type AssetSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    artist?: boolean
    album?: boolean
    isrc?: boolean
    filename?: boolean
    file?: boolean
    image?: boolean
    type?: boolean
    status?: boolean
    duration?: boolean
    sampleRate?: boolean
    bitRate?: boolean
    channels?: boolean
    fileSize?: boolean
    checksum?: boolean
    ownerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["asset"]>

  export type AssetSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    artist?: boolean
    album?: boolean
    isrc?: boolean
    filename?: boolean
    file?: boolean
    image?: boolean
    type?: boolean
    status?: boolean
    duration?: boolean
    sampleRate?: boolean
    bitRate?: boolean
    channels?: boolean
    fileSize?: boolean
    checksum?: boolean
    ownerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["asset"]>

  export type AssetSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    artist?: boolean
    album?: boolean
    isrc?: boolean
    filename?: boolean
    file?: boolean
    image?: boolean
    type?: boolean
    status?: boolean
    duration?: boolean
    sampleRate?: boolean
    bitRate?: boolean
    channels?: boolean
    fileSize?: boolean
    checksum?: boolean
    ownerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AssetOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "artist" | "album" | "isrc" | "filename" | "file" | "image" | "type" | "status" | "duration" | "sampleRate" | "bitRate" | "channels" | "fileSize" | "checksum" | "ownerId" | "createdAt" | "updatedAt", ExtArgs["result"]["asset"]>
  export type AssetInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
    fingerprint?: boolean | Asset$fingerprintArgs<ExtArgs>
    hashes?: boolean | Asset$hashesArgs<ExtArgs>
    watermark?: boolean | Asset$watermarkArgs<ExtArgs>
    detections?: boolean | Asset$detectionsArgs<ExtArgs>
    _count?: boolean | AssetCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AssetIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AssetIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AssetPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Asset"
    objects: {
      owner: Prisma.$UserPayload<ExtArgs>
      fingerprint: Prisma.$AudioFingerprintPayload<ExtArgs> | null
      hashes: Prisma.$FingerprintHashPayload<ExtArgs>[]
      watermark: Prisma.$WatermarkPayload<ExtArgs> | null
      detections: Prisma.$DetectionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string | null
      artist: string | null
      album: string | null
      isrc: string | null
      filename: string | null
      file: string | null
      image: string | null
      type: $Enums.AssetType
      status: $Enums.Status
      duration: number | null
      sampleRate: number | null
      bitRate: number | null
      channels: number | null
      fileSize: number | null
      checksum: string | null
      ownerId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["asset"]>
    composites: {}
  }

  type AssetGetPayload<S extends boolean | null | undefined | AssetDefaultArgs> = $Result.GetResult<Prisma.$AssetPayload, S>

  type AssetCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AssetFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AssetCountAggregateInputType | true
    }

  export interface AssetDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Asset'], meta: { name: 'Asset' } }
    /**
     * Find zero or one Asset that matches the filter.
     * @param {AssetFindUniqueArgs} args - Arguments to find a Asset
     * @example
     * // Get one Asset
     * const asset = await prisma.asset.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AssetFindUniqueArgs>(args: SelectSubset<T, AssetFindUniqueArgs<ExtArgs>>): Prisma__AssetClient<$Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Asset that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AssetFindUniqueOrThrowArgs} args - Arguments to find a Asset
     * @example
     * // Get one Asset
     * const asset = await prisma.asset.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AssetFindUniqueOrThrowArgs>(args: SelectSubset<T, AssetFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AssetClient<$Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Asset that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssetFindFirstArgs} args - Arguments to find a Asset
     * @example
     * // Get one Asset
     * const asset = await prisma.asset.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AssetFindFirstArgs>(args?: SelectSubset<T, AssetFindFirstArgs<ExtArgs>>): Prisma__AssetClient<$Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Asset that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssetFindFirstOrThrowArgs} args - Arguments to find a Asset
     * @example
     * // Get one Asset
     * const asset = await prisma.asset.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AssetFindFirstOrThrowArgs>(args?: SelectSubset<T, AssetFindFirstOrThrowArgs<ExtArgs>>): Prisma__AssetClient<$Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Assets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssetFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Assets
     * const assets = await prisma.asset.findMany()
     * 
     * // Get first 10 Assets
     * const assets = await prisma.asset.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const assetWithIdOnly = await prisma.asset.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AssetFindManyArgs>(args?: SelectSubset<T, AssetFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Asset.
     * @param {AssetCreateArgs} args - Arguments to create a Asset.
     * @example
     * // Create one Asset
     * const Asset = await prisma.asset.create({
     *   data: {
     *     // ... data to create a Asset
     *   }
     * })
     * 
     */
    create<T extends AssetCreateArgs>(args: SelectSubset<T, AssetCreateArgs<ExtArgs>>): Prisma__AssetClient<$Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Assets.
     * @param {AssetCreateManyArgs} args - Arguments to create many Assets.
     * @example
     * // Create many Assets
     * const asset = await prisma.asset.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AssetCreateManyArgs>(args?: SelectSubset<T, AssetCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Assets and returns the data saved in the database.
     * @param {AssetCreateManyAndReturnArgs} args - Arguments to create many Assets.
     * @example
     * // Create many Assets
     * const asset = await prisma.asset.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Assets and only return the `id`
     * const assetWithIdOnly = await prisma.asset.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AssetCreateManyAndReturnArgs>(args?: SelectSubset<T, AssetCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Asset.
     * @param {AssetDeleteArgs} args - Arguments to delete one Asset.
     * @example
     * // Delete one Asset
     * const Asset = await prisma.asset.delete({
     *   where: {
     *     // ... filter to delete one Asset
     *   }
     * })
     * 
     */
    delete<T extends AssetDeleteArgs>(args: SelectSubset<T, AssetDeleteArgs<ExtArgs>>): Prisma__AssetClient<$Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Asset.
     * @param {AssetUpdateArgs} args - Arguments to update one Asset.
     * @example
     * // Update one Asset
     * const asset = await prisma.asset.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AssetUpdateArgs>(args: SelectSubset<T, AssetUpdateArgs<ExtArgs>>): Prisma__AssetClient<$Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Assets.
     * @param {AssetDeleteManyArgs} args - Arguments to filter Assets to delete.
     * @example
     * // Delete a few Assets
     * const { count } = await prisma.asset.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AssetDeleteManyArgs>(args?: SelectSubset<T, AssetDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Assets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssetUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Assets
     * const asset = await prisma.asset.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AssetUpdateManyArgs>(args: SelectSubset<T, AssetUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Assets and returns the data updated in the database.
     * @param {AssetUpdateManyAndReturnArgs} args - Arguments to update many Assets.
     * @example
     * // Update many Assets
     * const asset = await prisma.asset.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Assets and only return the `id`
     * const assetWithIdOnly = await prisma.asset.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AssetUpdateManyAndReturnArgs>(args: SelectSubset<T, AssetUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Asset.
     * @param {AssetUpsertArgs} args - Arguments to update or create a Asset.
     * @example
     * // Update or create a Asset
     * const asset = await prisma.asset.upsert({
     *   create: {
     *     // ... data to create a Asset
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Asset we want to update
     *   }
     * })
     */
    upsert<T extends AssetUpsertArgs>(args: SelectSubset<T, AssetUpsertArgs<ExtArgs>>): Prisma__AssetClient<$Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Assets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssetCountArgs} args - Arguments to filter Assets to count.
     * @example
     * // Count the number of Assets
     * const count = await prisma.asset.count({
     *   where: {
     *     // ... the filter for the Assets we want to count
     *   }
     * })
    **/
    count<T extends AssetCountArgs>(
      args?: Subset<T, AssetCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AssetCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Asset.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssetAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AssetAggregateArgs>(args: Subset<T, AssetAggregateArgs>): Prisma.PrismaPromise<GetAssetAggregateType<T>>

    /**
     * Group by Asset.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssetGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AssetGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AssetGroupByArgs['orderBy'] }
        : { orderBy?: AssetGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AssetGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAssetGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Asset model
   */
  readonly fields: AssetFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Asset.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AssetClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    owner<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    fingerprint<T extends Asset$fingerprintArgs<ExtArgs> = {}>(args?: Subset<T, Asset$fingerprintArgs<ExtArgs>>): Prisma__AudioFingerprintClient<$Result.GetResult<Prisma.$AudioFingerprintPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    hashes<T extends Asset$hashesArgs<ExtArgs> = {}>(args?: Subset<T, Asset$hashesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FingerprintHashPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    watermark<T extends Asset$watermarkArgs<ExtArgs> = {}>(args?: Subset<T, Asset$watermarkArgs<ExtArgs>>): Prisma__WatermarkClient<$Result.GetResult<Prisma.$WatermarkPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    detections<T extends Asset$detectionsArgs<ExtArgs> = {}>(args?: Subset<T, Asset$detectionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DetectionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Asset model
   */
  interface AssetFieldRefs {
    readonly id: FieldRef<"Asset", 'String'>
    readonly title: FieldRef<"Asset", 'String'>
    readonly description: FieldRef<"Asset", 'String'>
    readonly artist: FieldRef<"Asset", 'String'>
    readonly album: FieldRef<"Asset", 'String'>
    readonly isrc: FieldRef<"Asset", 'String'>
    readonly filename: FieldRef<"Asset", 'String'>
    readonly file: FieldRef<"Asset", 'String'>
    readonly image: FieldRef<"Asset", 'String'>
    readonly type: FieldRef<"Asset", 'AssetType'>
    readonly status: FieldRef<"Asset", 'Status'>
    readonly duration: FieldRef<"Asset", 'Float'>
    readonly sampleRate: FieldRef<"Asset", 'Int'>
    readonly bitRate: FieldRef<"Asset", 'Int'>
    readonly channels: FieldRef<"Asset", 'Int'>
    readonly fileSize: FieldRef<"Asset", 'Int'>
    readonly checksum: FieldRef<"Asset", 'String'>
    readonly ownerId: FieldRef<"Asset", 'String'>
    readonly createdAt: FieldRef<"Asset", 'DateTime'>
    readonly updatedAt: FieldRef<"Asset", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Asset findUnique
   */
  export type AssetFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asset
     */
    select?: AssetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Asset
     */
    omit?: AssetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssetInclude<ExtArgs> | null
    /**
     * Filter, which Asset to fetch.
     */
    where: AssetWhereUniqueInput
  }

  /**
   * Asset findUniqueOrThrow
   */
  export type AssetFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asset
     */
    select?: AssetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Asset
     */
    omit?: AssetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssetInclude<ExtArgs> | null
    /**
     * Filter, which Asset to fetch.
     */
    where: AssetWhereUniqueInput
  }

  /**
   * Asset findFirst
   */
  export type AssetFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asset
     */
    select?: AssetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Asset
     */
    omit?: AssetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssetInclude<ExtArgs> | null
    /**
     * Filter, which Asset to fetch.
     */
    where?: AssetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Assets to fetch.
     */
    orderBy?: AssetOrderByWithRelationInput | AssetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Assets.
     */
    cursor?: AssetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Assets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Assets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Assets.
     */
    distinct?: AssetScalarFieldEnum | AssetScalarFieldEnum[]
  }

  /**
   * Asset findFirstOrThrow
   */
  export type AssetFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asset
     */
    select?: AssetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Asset
     */
    omit?: AssetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssetInclude<ExtArgs> | null
    /**
     * Filter, which Asset to fetch.
     */
    where?: AssetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Assets to fetch.
     */
    orderBy?: AssetOrderByWithRelationInput | AssetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Assets.
     */
    cursor?: AssetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Assets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Assets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Assets.
     */
    distinct?: AssetScalarFieldEnum | AssetScalarFieldEnum[]
  }

  /**
   * Asset findMany
   */
  export type AssetFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asset
     */
    select?: AssetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Asset
     */
    omit?: AssetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssetInclude<ExtArgs> | null
    /**
     * Filter, which Assets to fetch.
     */
    where?: AssetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Assets to fetch.
     */
    orderBy?: AssetOrderByWithRelationInput | AssetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Assets.
     */
    cursor?: AssetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Assets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Assets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Assets.
     */
    distinct?: AssetScalarFieldEnum | AssetScalarFieldEnum[]
  }

  /**
   * Asset create
   */
  export type AssetCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asset
     */
    select?: AssetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Asset
     */
    omit?: AssetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssetInclude<ExtArgs> | null
    /**
     * The data needed to create a Asset.
     */
    data: XOR<AssetCreateInput, AssetUncheckedCreateInput>
  }

  /**
   * Asset createMany
   */
  export type AssetCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Assets.
     */
    data: AssetCreateManyInput | AssetCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Asset createManyAndReturn
   */
  export type AssetCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asset
     */
    select?: AssetSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Asset
     */
    omit?: AssetOmit<ExtArgs> | null
    /**
     * The data used to create many Assets.
     */
    data: AssetCreateManyInput | AssetCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssetIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Asset update
   */
  export type AssetUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asset
     */
    select?: AssetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Asset
     */
    omit?: AssetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssetInclude<ExtArgs> | null
    /**
     * The data needed to update a Asset.
     */
    data: XOR<AssetUpdateInput, AssetUncheckedUpdateInput>
    /**
     * Choose, which Asset to update.
     */
    where: AssetWhereUniqueInput
  }

  /**
   * Asset updateMany
   */
  export type AssetUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Assets.
     */
    data: XOR<AssetUpdateManyMutationInput, AssetUncheckedUpdateManyInput>
    /**
     * Filter which Assets to update
     */
    where?: AssetWhereInput
    /**
     * Limit how many Assets to update.
     */
    limit?: number
  }

  /**
   * Asset updateManyAndReturn
   */
  export type AssetUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asset
     */
    select?: AssetSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Asset
     */
    omit?: AssetOmit<ExtArgs> | null
    /**
     * The data used to update Assets.
     */
    data: XOR<AssetUpdateManyMutationInput, AssetUncheckedUpdateManyInput>
    /**
     * Filter which Assets to update
     */
    where?: AssetWhereInput
    /**
     * Limit how many Assets to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssetIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Asset upsert
   */
  export type AssetUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asset
     */
    select?: AssetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Asset
     */
    omit?: AssetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssetInclude<ExtArgs> | null
    /**
     * The filter to search for the Asset to update in case it exists.
     */
    where: AssetWhereUniqueInput
    /**
     * In case the Asset found by the `where` argument doesn't exist, create a new Asset with this data.
     */
    create: XOR<AssetCreateInput, AssetUncheckedCreateInput>
    /**
     * In case the Asset was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AssetUpdateInput, AssetUncheckedUpdateInput>
  }

  /**
   * Asset delete
   */
  export type AssetDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asset
     */
    select?: AssetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Asset
     */
    omit?: AssetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssetInclude<ExtArgs> | null
    /**
     * Filter which Asset to delete.
     */
    where: AssetWhereUniqueInput
  }

  /**
   * Asset deleteMany
   */
  export type AssetDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Assets to delete
     */
    where?: AssetWhereInput
    /**
     * Limit how many Assets to delete.
     */
    limit?: number
  }

  /**
   * Asset.fingerprint
   */
  export type Asset$fingerprintArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AudioFingerprint
     */
    select?: AudioFingerprintSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AudioFingerprint
     */
    omit?: AudioFingerprintOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AudioFingerprintInclude<ExtArgs> | null
    where?: AudioFingerprintWhereInput
  }

  /**
   * Asset.hashes
   */
  export type Asset$hashesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FingerprintHash
     */
    select?: FingerprintHashSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FingerprintHash
     */
    omit?: FingerprintHashOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FingerprintHashInclude<ExtArgs> | null
    where?: FingerprintHashWhereInput
    orderBy?: FingerprintHashOrderByWithRelationInput | FingerprintHashOrderByWithRelationInput[]
    cursor?: FingerprintHashWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FingerprintHashScalarFieldEnum | FingerprintHashScalarFieldEnum[]
  }

  /**
   * Asset.watermark
   */
  export type Asset$watermarkArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Watermark
     */
    select?: WatermarkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Watermark
     */
    omit?: WatermarkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatermarkInclude<ExtArgs> | null
    where?: WatermarkWhereInput
  }

  /**
   * Asset.detections
   */
  export type Asset$detectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Detection
     */
    select?: DetectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Detection
     */
    omit?: DetectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetectionInclude<ExtArgs> | null
    where?: DetectionWhereInput
    orderBy?: DetectionOrderByWithRelationInput | DetectionOrderByWithRelationInput[]
    cursor?: DetectionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DetectionScalarFieldEnum | DetectionScalarFieldEnum[]
  }

  /**
   * Asset without action
   */
  export type AssetDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asset
     */
    select?: AssetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Asset
     */
    omit?: AssetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssetInclude<ExtArgs> | null
  }


  /**
   * Model AudioFingerprint
   */

  export type AggregateAudioFingerprint = {
    _count: AudioFingerprintCountAggregateOutputType | null
    _min: AudioFingerprintMinAggregateOutputType | null
    _max: AudioFingerprintMaxAggregateOutputType | null
  }

  export type AudioFingerprintMinAggregateOutputType = {
    id: string | null
    algorithm: string | null
    version: string | null
    generatedAt: Date | null
    assetId: string | null
  }

  export type AudioFingerprintMaxAggregateOutputType = {
    id: string | null
    algorithm: string | null
    version: string | null
    generatedAt: Date | null
    assetId: string | null
  }

  export type AudioFingerprintCountAggregateOutputType = {
    id: number
    algorithm: number
    version: number
    generatedAt: number
    assetId: number
    _all: number
  }


  export type AudioFingerprintMinAggregateInputType = {
    id?: true
    algorithm?: true
    version?: true
    generatedAt?: true
    assetId?: true
  }

  export type AudioFingerprintMaxAggregateInputType = {
    id?: true
    algorithm?: true
    version?: true
    generatedAt?: true
    assetId?: true
  }

  export type AudioFingerprintCountAggregateInputType = {
    id?: true
    algorithm?: true
    version?: true
    generatedAt?: true
    assetId?: true
    _all?: true
  }

  export type AudioFingerprintAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AudioFingerprint to aggregate.
     */
    where?: AudioFingerprintWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AudioFingerprints to fetch.
     */
    orderBy?: AudioFingerprintOrderByWithRelationInput | AudioFingerprintOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AudioFingerprintWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AudioFingerprints from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AudioFingerprints.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AudioFingerprints
    **/
    _count?: true | AudioFingerprintCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AudioFingerprintMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AudioFingerprintMaxAggregateInputType
  }

  export type GetAudioFingerprintAggregateType<T extends AudioFingerprintAggregateArgs> = {
        [P in keyof T & keyof AggregateAudioFingerprint]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAudioFingerprint[P]>
      : GetScalarType<T[P], AggregateAudioFingerprint[P]>
  }




  export type AudioFingerprintGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AudioFingerprintWhereInput
    orderBy?: AudioFingerprintOrderByWithAggregationInput | AudioFingerprintOrderByWithAggregationInput[]
    by: AudioFingerprintScalarFieldEnum[] | AudioFingerprintScalarFieldEnum
    having?: AudioFingerprintScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AudioFingerprintCountAggregateInputType | true
    _min?: AudioFingerprintMinAggregateInputType
    _max?: AudioFingerprintMaxAggregateInputType
  }

  export type AudioFingerprintGroupByOutputType = {
    id: string
    algorithm: string
    version: string
    generatedAt: Date
    assetId: string
    _count: AudioFingerprintCountAggregateOutputType | null
    _min: AudioFingerprintMinAggregateOutputType | null
    _max: AudioFingerprintMaxAggregateOutputType | null
  }

  type GetAudioFingerprintGroupByPayload<T extends AudioFingerprintGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AudioFingerprintGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AudioFingerprintGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AudioFingerprintGroupByOutputType[P]>
            : GetScalarType<T[P], AudioFingerprintGroupByOutputType[P]>
        }
      >
    >


  export type AudioFingerprintSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    algorithm?: boolean
    version?: boolean
    generatedAt?: boolean
    assetId?: boolean
    asset?: boolean | AssetDefaultArgs<ExtArgs>
    hashes?: boolean | AudioFingerprint$hashesArgs<ExtArgs>
    _count?: boolean | AudioFingerprintCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["audioFingerprint"]>

  export type AudioFingerprintSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    algorithm?: boolean
    version?: boolean
    generatedAt?: boolean
    assetId?: boolean
    asset?: boolean | AssetDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["audioFingerprint"]>

  export type AudioFingerprintSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    algorithm?: boolean
    version?: boolean
    generatedAt?: boolean
    assetId?: boolean
    asset?: boolean | AssetDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["audioFingerprint"]>

  export type AudioFingerprintSelectScalar = {
    id?: boolean
    algorithm?: boolean
    version?: boolean
    generatedAt?: boolean
    assetId?: boolean
  }

  export type AudioFingerprintOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "algorithm" | "version" | "generatedAt" | "assetId", ExtArgs["result"]["audioFingerprint"]>
  export type AudioFingerprintInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    asset?: boolean | AssetDefaultArgs<ExtArgs>
    hashes?: boolean | AudioFingerprint$hashesArgs<ExtArgs>
    _count?: boolean | AudioFingerprintCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AudioFingerprintIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    asset?: boolean | AssetDefaultArgs<ExtArgs>
  }
  export type AudioFingerprintIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    asset?: boolean | AssetDefaultArgs<ExtArgs>
  }

  export type $AudioFingerprintPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AudioFingerprint"
    objects: {
      asset: Prisma.$AssetPayload<ExtArgs>
      hashes: Prisma.$FingerprintHashPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      algorithm: string
      version: string
      generatedAt: Date
      assetId: string
    }, ExtArgs["result"]["audioFingerprint"]>
    composites: {}
  }

  type AudioFingerprintGetPayload<S extends boolean | null | undefined | AudioFingerprintDefaultArgs> = $Result.GetResult<Prisma.$AudioFingerprintPayload, S>

  type AudioFingerprintCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AudioFingerprintFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AudioFingerprintCountAggregateInputType | true
    }

  export interface AudioFingerprintDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AudioFingerprint'], meta: { name: 'AudioFingerprint' } }
    /**
     * Find zero or one AudioFingerprint that matches the filter.
     * @param {AudioFingerprintFindUniqueArgs} args - Arguments to find a AudioFingerprint
     * @example
     * // Get one AudioFingerprint
     * const audioFingerprint = await prisma.audioFingerprint.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AudioFingerprintFindUniqueArgs>(args: SelectSubset<T, AudioFingerprintFindUniqueArgs<ExtArgs>>): Prisma__AudioFingerprintClient<$Result.GetResult<Prisma.$AudioFingerprintPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AudioFingerprint that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AudioFingerprintFindUniqueOrThrowArgs} args - Arguments to find a AudioFingerprint
     * @example
     * // Get one AudioFingerprint
     * const audioFingerprint = await prisma.audioFingerprint.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AudioFingerprintFindUniqueOrThrowArgs>(args: SelectSubset<T, AudioFingerprintFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AudioFingerprintClient<$Result.GetResult<Prisma.$AudioFingerprintPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AudioFingerprint that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AudioFingerprintFindFirstArgs} args - Arguments to find a AudioFingerprint
     * @example
     * // Get one AudioFingerprint
     * const audioFingerprint = await prisma.audioFingerprint.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AudioFingerprintFindFirstArgs>(args?: SelectSubset<T, AudioFingerprintFindFirstArgs<ExtArgs>>): Prisma__AudioFingerprintClient<$Result.GetResult<Prisma.$AudioFingerprintPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AudioFingerprint that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AudioFingerprintFindFirstOrThrowArgs} args - Arguments to find a AudioFingerprint
     * @example
     * // Get one AudioFingerprint
     * const audioFingerprint = await prisma.audioFingerprint.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AudioFingerprintFindFirstOrThrowArgs>(args?: SelectSubset<T, AudioFingerprintFindFirstOrThrowArgs<ExtArgs>>): Prisma__AudioFingerprintClient<$Result.GetResult<Prisma.$AudioFingerprintPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AudioFingerprints that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AudioFingerprintFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AudioFingerprints
     * const audioFingerprints = await prisma.audioFingerprint.findMany()
     * 
     * // Get first 10 AudioFingerprints
     * const audioFingerprints = await prisma.audioFingerprint.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const audioFingerprintWithIdOnly = await prisma.audioFingerprint.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AudioFingerprintFindManyArgs>(args?: SelectSubset<T, AudioFingerprintFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AudioFingerprintPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AudioFingerprint.
     * @param {AudioFingerprintCreateArgs} args - Arguments to create a AudioFingerprint.
     * @example
     * // Create one AudioFingerprint
     * const AudioFingerprint = await prisma.audioFingerprint.create({
     *   data: {
     *     // ... data to create a AudioFingerprint
     *   }
     * })
     * 
     */
    create<T extends AudioFingerprintCreateArgs>(args: SelectSubset<T, AudioFingerprintCreateArgs<ExtArgs>>): Prisma__AudioFingerprintClient<$Result.GetResult<Prisma.$AudioFingerprintPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AudioFingerprints.
     * @param {AudioFingerprintCreateManyArgs} args - Arguments to create many AudioFingerprints.
     * @example
     * // Create many AudioFingerprints
     * const audioFingerprint = await prisma.audioFingerprint.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AudioFingerprintCreateManyArgs>(args?: SelectSubset<T, AudioFingerprintCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AudioFingerprints and returns the data saved in the database.
     * @param {AudioFingerprintCreateManyAndReturnArgs} args - Arguments to create many AudioFingerprints.
     * @example
     * // Create many AudioFingerprints
     * const audioFingerprint = await prisma.audioFingerprint.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AudioFingerprints and only return the `id`
     * const audioFingerprintWithIdOnly = await prisma.audioFingerprint.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AudioFingerprintCreateManyAndReturnArgs>(args?: SelectSubset<T, AudioFingerprintCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AudioFingerprintPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AudioFingerprint.
     * @param {AudioFingerprintDeleteArgs} args - Arguments to delete one AudioFingerprint.
     * @example
     * // Delete one AudioFingerprint
     * const AudioFingerprint = await prisma.audioFingerprint.delete({
     *   where: {
     *     // ... filter to delete one AudioFingerprint
     *   }
     * })
     * 
     */
    delete<T extends AudioFingerprintDeleteArgs>(args: SelectSubset<T, AudioFingerprintDeleteArgs<ExtArgs>>): Prisma__AudioFingerprintClient<$Result.GetResult<Prisma.$AudioFingerprintPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AudioFingerprint.
     * @param {AudioFingerprintUpdateArgs} args - Arguments to update one AudioFingerprint.
     * @example
     * // Update one AudioFingerprint
     * const audioFingerprint = await prisma.audioFingerprint.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AudioFingerprintUpdateArgs>(args: SelectSubset<T, AudioFingerprintUpdateArgs<ExtArgs>>): Prisma__AudioFingerprintClient<$Result.GetResult<Prisma.$AudioFingerprintPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AudioFingerprints.
     * @param {AudioFingerprintDeleteManyArgs} args - Arguments to filter AudioFingerprints to delete.
     * @example
     * // Delete a few AudioFingerprints
     * const { count } = await prisma.audioFingerprint.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AudioFingerprintDeleteManyArgs>(args?: SelectSubset<T, AudioFingerprintDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AudioFingerprints.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AudioFingerprintUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AudioFingerprints
     * const audioFingerprint = await prisma.audioFingerprint.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AudioFingerprintUpdateManyArgs>(args: SelectSubset<T, AudioFingerprintUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AudioFingerprints and returns the data updated in the database.
     * @param {AudioFingerprintUpdateManyAndReturnArgs} args - Arguments to update many AudioFingerprints.
     * @example
     * // Update many AudioFingerprints
     * const audioFingerprint = await prisma.audioFingerprint.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AudioFingerprints and only return the `id`
     * const audioFingerprintWithIdOnly = await prisma.audioFingerprint.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AudioFingerprintUpdateManyAndReturnArgs>(args: SelectSubset<T, AudioFingerprintUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AudioFingerprintPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AudioFingerprint.
     * @param {AudioFingerprintUpsertArgs} args - Arguments to update or create a AudioFingerprint.
     * @example
     * // Update or create a AudioFingerprint
     * const audioFingerprint = await prisma.audioFingerprint.upsert({
     *   create: {
     *     // ... data to create a AudioFingerprint
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AudioFingerprint we want to update
     *   }
     * })
     */
    upsert<T extends AudioFingerprintUpsertArgs>(args: SelectSubset<T, AudioFingerprintUpsertArgs<ExtArgs>>): Prisma__AudioFingerprintClient<$Result.GetResult<Prisma.$AudioFingerprintPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AudioFingerprints.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AudioFingerprintCountArgs} args - Arguments to filter AudioFingerprints to count.
     * @example
     * // Count the number of AudioFingerprints
     * const count = await prisma.audioFingerprint.count({
     *   where: {
     *     // ... the filter for the AudioFingerprints we want to count
     *   }
     * })
    **/
    count<T extends AudioFingerprintCountArgs>(
      args?: Subset<T, AudioFingerprintCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AudioFingerprintCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AudioFingerprint.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AudioFingerprintAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AudioFingerprintAggregateArgs>(args: Subset<T, AudioFingerprintAggregateArgs>): Prisma.PrismaPromise<GetAudioFingerprintAggregateType<T>>

    /**
     * Group by AudioFingerprint.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AudioFingerprintGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AudioFingerprintGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AudioFingerprintGroupByArgs['orderBy'] }
        : { orderBy?: AudioFingerprintGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AudioFingerprintGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAudioFingerprintGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AudioFingerprint model
   */
  readonly fields: AudioFingerprintFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AudioFingerprint.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AudioFingerprintClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    asset<T extends AssetDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AssetDefaultArgs<ExtArgs>>): Prisma__AssetClient<$Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    hashes<T extends AudioFingerprint$hashesArgs<ExtArgs> = {}>(args?: Subset<T, AudioFingerprint$hashesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FingerprintHashPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AudioFingerprint model
   */
  interface AudioFingerprintFieldRefs {
    readonly id: FieldRef<"AudioFingerprint", 'String'>
    readonly algorithm: FieldRef<"AudioFingerprint", 'String'>
    readonly version: FieldRef<"AudioFingerprint", 'String'>
    readonly generatedAt: FieldRef<"AudioFingerprint", 'DateTime'>
    readonly assetId: FieldRef<"AudioFingerprint", 'String'>
  }
    

  // Custom InputTypes
  /**
   * AudioFingerprint findUnique
   */
  export type AudioFingerprintFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AudioFingerprint
     */
    select?: AudioFingerprintSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AudioFingerprint
     */
    omit?: AudioFingerprintOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AudioFingerprintInclude<ExtArgs> | null
    /**
     * Filter, which AudioFingerprint to fetch.
     */
    where: AudioFingerprintWhereUniqueInput
  }

  /**
   * AudioFingerprint findUniqueOrThrow
   */
  export type AudioFingerprintFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AudioFingerprint
     */
    select?: AudioFingerprintSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AudioFingerprint
     */
    omit?: AudioFingerprintOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AudioFingerprintInclude<ExtArgs> | null
    /**
     * Filter, which AudioFingerprint to fetch.
     */
    where: AudioFingerprintWhereUniqueInput
  }

  /**
   * AudioFingerprint findFirst
   */
  export type AudioFingerprintFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AudioFingerprint
     */
    select?: AudioFingerprintSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AudioFingerprint
     */
    omit?: AudioFingerprintOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AudioFingerprintInclude<ExtArgs> | null
    /**
     * Filter, which AudioFingerprint to fetch.
     */
    where?: AudioFingerprintWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AudioFingerprints to fetch.
     */
    orderBy?: AudioFingerprintOrderByWithRelationInput | AudioFingerprintOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AudioFingerprints.
     */
    cursor?: AudioFingerprintWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AudioFingerprints from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AudioFingerprints.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AudioFingerprints.
     */
    distinct?: AudioFingerprintScalarFieldEnum | AudioFingerprintScalarFieldEnum[]
  }

  /**
   * AudioFingerprint findFirstOrThrow
   */
  export type AudioFingerprintFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AudioFingerprint
     */
    select?: AudioFingerprintSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AudioFingerprint
     */
    omit?: AudioFingerprintOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AudioFingerprintInclude<ExtArgs> | null
    /**
     * Filter, which AudioFingerprint to fetch.
     */
    where?: AudioFingerprintWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AudioFingerprints to fetch.
     */
    orderBy?: AudioFingerprintOrderByWithRelationInput | AudioFingerprintOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AudioFingerprints.
     */
    cursor?: AudioFingerprintWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AudioFingerprints from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AudioFingerprints.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AudioFingerprints.
     */
    distinct?: AudioFingerprintScalarFieldEnum | AudioFingerprintScalarFieldEnum[]
  }

  /**
   * AudioFingerprint findMany
   */
  export type AudioFingerprintFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AudioFingerprint
     */
    select?: AudioFingerprintSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AudioFingerprint
     */
    omit?: AudioFingerprintOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AudioFingerprintInclude<ExtArgs> | null
    /**
     * Filter, which AudioFingerprints to fetch.
     */
    where?: AudioFingerprintWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AudioFingerprints to fetch.
     */
    orderBy?: AudioFingerprintOrderByWithRelationInput | AudioFingerprintOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AudioFingerprints.
     */
    cursor?: AudioFingerprintWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AudioFingerprints from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AudioFingerprints.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AudioFingerprints.
     */
    distinct?: AudioFingerprintScalarFieldEnum | AudioFingerprintScalarFieldEnum[]
  }

  /**
   * AudioFingerprint create
   */
  export type AudioFingerprintCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AudioFingerprint
     */
    select?: AudioFingerprintSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AudioFingerprint
     */
    omit?: AudioFingerprintOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AudioFingerprintInclude<ExtArgs> | null
    /**
     * The data needed to create a AudioFingerprint.
     */
    data: XOR<AudioFingerprintCreateInput, AudioFingerprintUncheckedCreateInput>
  }

  /**
   * AudioFingerprint createMany
   */
  export type AudioFingerprintCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AudioFingerprints.
     */
    data: AudioFingerprintCreateManyInput | AudioFingerprintCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AudioFingerprint createManyAndReturn
   */
  export type AudioFingerprintCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AudioFingerprint
     */
    select?: AudioFingerprintSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AudioFingerprint
     */
    omit?: AudioFingerprintOmit<ExtArgs> | null
    /**
     * The data used to create many AudioFingerprints.
     */
    data: AudioFingerprintCreateManyInput | AudioFingerprintCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AudioFingerprintIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AudioFingerprint update
   */
  export type AudioFingerprintUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AudioFingerprint
     */
    select?: AudioFingerprintSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AudioFingerprint
     */
    omit?: AudioFingerprintOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AudioFingerprintInclude<ExtArgs> | null
    /**
     * The data needed to update a AudioFingerprint.
     */
    data: XOR<AudioFingerprintUpdateInput, AudioFingerprintUncheckedUpdateInput>
    /**
     * Choose, which AudioFingerprint to update.
     */
    where: AudioFingerprintWhereUniqueInput
  }

  /**
   * AudioFingerprint updateMany
   */
  export type AudioFingerprintUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AudioFingerprints.
     */
    data: XOR<AudioFingerprintUpdateManyMutationInput, AudioFingerprintUncheckedUpdateManyInput>
    /**
     * Filter which AudioFingerprints to update
     */
    where?: AudioFingerprintWhereInput
    /**
     * Limit how many AudioFingerprints to update.
     */
    limit?: number
  }

  /**
   * AudioFingerprint updateManyAndReturn
   */
  export type AudioFingerprintUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AudioFingerprint
     */
    select?: AudioFingerprintSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AudioFingerprint
     */
    omit?: AudioFingerprintOmit<ExtArgs> | null
    /**
     * The data used to update AudioFingerprints.
     */
    data: XOR<AudioFingerprintUpdateManyMutationInput, AudioFingerprintUncheckedUpdateManyInput>
    /**
     * Filter which AudioFingerprints to update
     */
    where?: AudioFingerprintWhereInput
    /**
     * Limit how many AudioFingerprints to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AudioFingerprintIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AudioFingerprint upsert
   */
  export type AudioFingerprintUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AudioFingerprint
     */
    select?: AudioFingerprintSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AudioFingerprint
     */
    omit?: AudioFingerprintOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AudioFingerprintInclude<ExtArgs> | null
    /**
     * The filter to search for the AudioFingerprint to update in case it exists.
     */
    where: AudioFingerprintWhereUniqueInput
    /**
     * In case the AudioFingerprint found by the `where` argument doesn't exist, create a new AudioFingerprint with this data.
     */
    create: XOR<AudioFingerprintCreateInput, AudioFingerprintUncheckedCreateInput>
    /**
     * In case the AudioFingerprint was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AudioFingerprintUpdateInput, AudioFingerprintUncheckedUpdateInput>
  }

  /**
   * AudioFingerprint delete
   */
  export type AudioFingerprintDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AudioFingerprint
     */
    select?: AudioFingerprintSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AudioFingerprint
     */
    omit?: AudioFingerprintOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AudioFingerprintInclude<ExtArgs> | null
    /**
     * Filter which AudioFingerprint to delete.
     */
    where: AudioFingerprintWhereUniqueInput
  }

  /**
   * AudioFingerprint deleteMany
   */
  export type AudioFingerprintDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AudioFingerprints to delete
     */
    where?: AudioFingerprintWhereInput
    /**
     * Limit how many AudioFingerprints to delete.
     */
    limit?: number
  }

  /**
   * AudioFingerprint.hashes
   */
  export type AudioFingerprint$hashesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FingerprintHash
     */
    select?: FingerprintHashSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FingerprintHash
     */
    omit?: FingerprintHashOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FingerprintHashInclude<ExtArgs> | null
    where?: FingerprintHashWhereInput
    orderBy?: FingerprintHashOrderByWithRelationInput | FingerprintHashOrderByWithRelationInput[]
    cursor?: FingerprintHashWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FingerprintHashScalarFieldEnum | FingerprintHashScalarFieldEnum[]
  }

  /**
   * AudioFingerprint without action
   */
  export type AudioFingerprintDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AudioFingerprint
     */
    select?: AudioFingerprintSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AudioFingerprint
     */
    omit?: AudioFingerprintOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AudioFingerprintInclude<ExtArgs> | null
  }


  /**
   * Model FingerprintHash
   */

  export type AggregateFingerprintHash = {
    _count: FingerprintHashCountAggregateOutputType | null
    _avg: FingerprintHashAvgAggregateOutputType | null
    _sum: FingerprintHashSumAggregateOutputType | null
    _min: FingerprintHashMinAggregateOutputType | null
    _max: FingerprintHashMaxAggregateOutputType | null
  }

  export type FingerprintHashAvgAggregateOutputType = {
    id: number | null
    hash: number | null
    offsetMs: number | null
  }

  export type FingerprintHashSumAggregateOutputType = {
    id: bigint | null
    hash: bigint | null
    offsetMs: number | null
  }

  export type FingerprintHashMinAggregateOutputType = {
    id: bigint | null
    hash: bigint | null
    offsetMs: number | null
    audioFingerprintId: string | null
    assetId: string | null
  }

  export type FingerprintHashMaxAggregateOutputType = {
    id: bigint | null
    hash: bigint | null
    offsetMs: number | null
    audioFingerprintId: string | null
    assetId: string | null
  }

  export type FingerprintHashCountAggregateOutputType = {
    id: number
    hash: number
    offsetMs: number
    audioFingerprintId: number
    assetId: number
    _all: number
  }


  export type FingerprintHashAvgAggregateInputType = {
    id?: true
    hash?: true
    offsetMs?: true
  }

  export type FingerprintHashSumAggregateInputType = {
    id?: true
    hash?: true
    offsetMs?: true
  }

  export type FingerprintHashMinAggregateInputType = {
    id?: true
    hash?: true
    offsetMs?: true
    audioFingerprintId?: true
    assetId?: true
  }

  export type FingerprintHashMaxAggregateInputType = {
    id?: true
    hash?: true
    offsetMs?: true
    audioFingerprintId?: true
    assetId?: true
  }

  export type FingerprintHashCountAggregateInputType = {
    id?: true
    hash?: true
    offsetMs?: true
    audioFingerprintId?: true
    assetId?: true
    _all?: true
  }

  export type FingerprintHashAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FingerprintHash to aggregate.
     */
    where?: FingerprintHashWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FingerprintHashes to fetch.
     */
    orderBy?: FingerprintHashOrderByWithRelationInput | FingerprintHashOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FingerprintHashWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FingerprintHashes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FingerprintHashes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FingerprintHashes
    **/
    _count?: true | FingerprintHashCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FingerprintHashAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FingerprintHashSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FingerprintHashMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FingerprintHashMaxAggregateInputType
  }

  export type GetFingerprintHashAggregateType<T extends FingerprintHashAggregateArgs> = {
        [P in keyof T & keyof AggregateFingerprintHash]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFingerprintHash[P]>
      : GetScalarType<T[P], AggregateFingerprintHash[P]>
  }




  export type FingerprintHashGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FingerprintHashWhereInput
    orderBy?: FingerprintHashOrderByWithAggregationInput | FingerprintHashOrderByWithAggregationInput[]
    by: FingerprintHashScalarFieldEnum[] | FingerprintHashScalarFieldEnum
    having?: FingerprintHashScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FingerprintHashCountAggregateInputType | true
    _avg?: FingerprintHashAvgAggregateInputType
    _sum?: FingerprintHashSumAggregateInputType
    _min?: FingerprintHashMinAggregateInputType
    _max?: FingerprintHashMaxAggregateInputType
  }

  export type FingerprintHashGroupByOutputType = {
    id: bigint
    hash: bigint
    offsetMs: number
    audioFingerprintId: string
    assetId: string
    _count: FingerprintHashCountAggregateOutputType | null
    _avg: FingerprintHashAvgAggregateOutputType | null
    _sum: FingerprintHashSumAggregateOutputType | null
    _min: FingerprintHashMinAggregateOutputType | null
    _max: FingerprintHashMaxAggregateOutputType | null
  }

  type GetFingerprintHashGroupByPayload<T extends FingerprintHashGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FingerprintHashGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FingerprintHashGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FingerprintHashGroupByOutputType[P]>
            : GetScalarType<T[P], FingerprintHashGroupByOutputType[P]>
        }
      >
    >


  export type FingerprintHashSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    hash?: boolean
    offsetMs?: boolean
    audioFingerprintId?: boolean
    assetId?: boolean
    audioFingerprint?: boolean | AudioFingerprintDefaultArgs<ExtArgs>
    asset?: boolean | AssetDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["fingerprintHash"]>

  export type FingerprintHashSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    hash?: boolean
    offsetMs?: boolean
    audioFingerprintId?: boolean
    assetId?: boolean
    audioFingerprint?: boolean | AudioFingerprintDefaultArgs<ExtArgs>
    asset?: boolean | AssetDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["fingerprintHash"]>

  export type FingerprintHashSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    hash?: boolean
    offsetMs?: boolean
    audioFingerprintId?: boolean
    assetId?: boolean
    audioFingerprint?: boolean | AudioFingerprintDefaultArgs<ExtArgs>
    asset?: boolean | AssetDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["fingerprintHash"]>

  export type FingerprintHashSelectScalar = {
    id?: boolean
    hash?: boolean
    offsetMs?: boolean
    audioFingerprintId?: boolean
    assetId?: boolean
  }

  export type FingerprintHashOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "hash" | "offsetMs" | "audioFingerprintId" | "assetId", ExtArgs["result"]["fingerprintHash"]>
  export type FingerprintHashInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    audioFingerprint?: boolean | AudioFingerprintDefaultArgs<ExtArgs>
    asset?: boolean | AssetDefaultArgs<ExtArgs>
  }
  export type FingerprintHashIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    audioFingerprint?: boolean | AudioFingerprintDefaultArgs<ExtArgs>
    asset?: boolean | AssetDefaultArgs<ExtArgs>
  }
  export type FingerprintHashIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    audioFingerprint?: boolean | AudioFingerprintDefaultArgs<ExtArgs>
    asset?: boolean | AssetDefaultArgs<ExtArgs>
  }

  export type $FingerprintHashPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FingerprintHash"
    objects: {
      audioFingerprint: Prisma.$AudioFingerprintPayload<ExtArgs>
      asset: Prisma.$AssetPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      hash: bigint
      offsetMs: number
      audioFingerprintId: string
      assetId: string
    }, ExtArgs["result"]["fingerprintHash"]>
    composites: {}
  }

  type FingerprintHashGetPayload<S extends boolean | null | undefined | FingerprintHashDefaultArgs> = $Result.GetResult<Prisma.$FingerprintHashPayload, S>

  type FingerprintHashCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FingerprintHashFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FingerprintHashCountAggregateInputType | true
    }

  export interface FingerprintHashDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FingerprintHash'], meta: { name: 'FingerprintHash' } }
    /**
     * Find zero or one FingerprintHash that matches the filter.
     * @param {FingerprintHashFindUniqueArgs} args - Arguments to find a FingerprintHash
     * @example
     * // Get one FingerprintHash
     * const fingerprintHash = await prisma.fingerprintHash.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FingerprintHashFindUniqueArgs>(args: SelectSubset<T, FingerprintHashFindUniqueArgs<ExtArgs>>): Prisma__FingerprintHashClient<$Result.GetResult<Prisma.$FingerprintHashPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FingerprintHash that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FingerprintHashFindUniqueOrThrowArgs} args - Arguments to find a FingerprintHash
     * @example
     * // Get one FingerprintHash
     * const fingerprintHash = await prisma.fingerprintHash.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FingerprintHashFindUniqueOrThrowArgs>(args: SelectSubset<T, FingerprintHashFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FingerprintHashClient<$Result.GetResult<Prisma.$FingerprintHashPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FingerprintHash that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FingerprintHashFindFirstArgs} args - Arguments to find a FingerprintHash
     * @example
     * // Get one FingerprintHash
     * const fingerprintHash = await prisma.fingerprintHash.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FingerprintHashFindFirstArgs>(args?: SelectSubset<T, FingerprintHashFindFirstArgs<ExtArgs>>): Prisma__FingerprintHashClient<$Result.GetResult<Prisma.$FingerprintHashPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FingerprintHash that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FingerprintHashFindFirstOrThrowArgs} args - Arguments to find a FingerprintHash
     * @example
     * // Get one FingerprintHash
     * const fingerprintHash = await prisma.fingerprintHash.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FingerprintHashFindFirstOrThrowArgs>(args?: SelectSubset<T, FingerprintHashFindFirstOrThrowArgs<ExtArgs>>): Prisma__FingerprintHashClient<$Result.GetResult<Prisma.$FingerprintHashPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FingerprintHashes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FingerprintHashFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FingerprintHashes
     * const fingerprintHashes = await prisma.fingerprintHash.findMany()
     * 
     * // Get first 10 FingerprintHashes
     * const fingerprintHashes = await prisma.fingerprintHash.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const fingerprintHashWithIdOnly = await prisma.fingerprintHash.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FingerprintHashFindManyArgs>(args?: SelectSubset<T, FingerprintHashFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FingerprintHashPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FingerprintHash.
     * @param {FingerprintHashCreateArgs} args - Arguments to create a FingerprintHash.
     * @example
     * // Create one FingerprintHash
     * const FingerprintHash = await prisma.fingerprintHash.create({
     *   data: {
     *     // ... data to create a FingerprintHash
     *   }
     * })
     * 
     */
    create<T extends FingerprintHashCreateArgs>(args: SelectSubset<T, FingerprintHashCreateArgs<ExtArgs>>): Prisma__FingerprintHashClient<$Result.GetResult<Prisma.$FingerprintHashPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FingerprintHashes.
     * @param {FingerprintHashCreateManyArgs} args - Arguments to create many FingerprintHashes.
     * @example
     * // Create many FingerprintHashes
     * const fingerprintHash = await prisma.fingerprintHash.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FingerprintHashCreateManyArgs>(args?: SelectSubset<T, FingerprintHashCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FingerprintHashes and returns the data saved in the database.
     * @param {FingerprintHashCreateManyAndReturnArgs} args - Arguments to create many FingerprintHashes.
     * @example
     * // Create many FingerprintHashes
     * const fingerprintHash = await prisma.fingerprintHash.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FingerprintHashes and only return the `id`
     * const fingerprintHashWithIdOnly = await prisma.fingerprintHash.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FingerprintHashCreateManyAndReturnArgs>(args?: SelectSubset<T, FingerprintHashCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FingerprintHashPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a FingerprintHash.
     * @param {FingerprintHashDeleteArgs} args - Arguments to delete one FingerprintHash.
     * @example
     * // Delete one FingerprintHash
     * const FingerprintHash = await prisma.fingerprintHash.delete({
     *   where: {
     *     // ... filter to delete one FingerprintHash
     *   }
     * })
     * 
     */
    delete<T extends FingerprintHashDeleteArgs>(args: SelectSubset<T, FingerprintHashDeleteArgs<ExtArgs>>): Prisma__FingerprintHashClient<$Result.GetResult<Prisma.$FingerprintHashPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FingerprintHash.
     * @param {FingerprintHashUpdateArgs} args - Arguments to update one FingerprintHash.
     * @example
     * // Update one FingerprintHash
     * const fingerprintHash = await prisma.fingerprintHash.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FingerprintHashUpdateArgs>(args: SelectSubset<T, FingerprintHashUpdateArgs<ExtArgs>>): Prisma__FingerprintHashClient<$Result.GetResult<Prisma.$FingerprintHashPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FingerprintHashes.
     * @param {FingerprintHashDeleteManyArgs} args - Arguments to filter FingerprintHashes to delete.
     * @example
     * // Delete a few FingerprintHashes
     * const { count } = await prisma.fingerprintHash.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FingerprintHashDeleteManyArgs>(args?: SelectSubset<T, FingerprintHashDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FingerprintHashes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FingerprintHashUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FingerprintHashes
     * const fingerprintHash = await prisma.fingerprintHash.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FingerprintHashUpdateManyArgs>(args: SelectSubset<T, FingerprintHashUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FingerprintHashes and returns the data updated in the database.
     * @param {FingerprintHashUpdateManyAndReturnArgs} args - Arguments to update many FingerprintHashes.
     * @example
     * // Update many FingerprintHashes
     * const fingerprintHash = await prisma.fingerprintHash.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more FingerprintHashes and only return the `id`
     * const fingerprintHashWithIdOnly = await prisma.fingerprintHash.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FingerprintHashUpdateManyAndReturnArgs>(args: SelectSubset<T, FingerprintHashUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FingerprintHashPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one FingerprintHash.
     * @param {FingerprintHashUpsertArgs} args - Arguments to update or create a FingerprintHash.
     * @example
     * // Update or create a FingerprintHash
     * const fingerprintHash = await prisma.fingerprintHash.upsert({
     *   create: {
     *     // ... data to create a FingerprintHash
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FingerprintHash we want to update
     *   }
     * })
     */
    upsert<T extends FingerprintHashUpsertArgs>(args: SelectSubset<T, FingerprintHashUpsertArgs<ExtArgs>>): Prisma__FingerprintHashClient<$Result.GetResult<Prisma.$FingerprintHashPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FingerprintHashes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FingerprintHashCountArgs} args - Arguments to filter FingerprintHashes to count.
     * @example
     * // Count the number of FingerprintHashes
     * const count = await prisma.fingerprintHash.count({
     *   where: {
     *     // ... the filter for the FingerprintHashes we want to count
     *   }
     * })
    **/
    count<T extends FingerprintHashCountArgs>(
      args?: Subset<T, FingerprintHashCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FingerprintHashCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FingerprintHash.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FingerprintHashAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FingerprintHashAggregateArgs>(args: Subset<T, FingerprintHashAggregateArgs>): Prisma.PrismaPromise<GetFingerprintHashAggregateType<T>>

    /**
     * Group by FingerprintHash.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FingerprintHashGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FingerprintHashGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FingerprintHashGroupByArgs['orderBy'] }
        : { orderBy?: FingerprintHashGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FingerprintHashGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFingerprintHashGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FingerprintHash model
   */
  readonly fields: FingerprintHashFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FingerprintHash.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FingerprintHashClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    audioFingerprint<T extends AudioFingerprintDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AudioFingerprintDefaultArgs<ExtArgs>>): Prisma__AudioFingerprintClient<$Result.GetResult<Prisma.$AudioFingerprintPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    asset<T extends AssetDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AssetDefaultArgs<ExtArgs>>): Prisma__AssetClient<$Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the FingerprintHash model
   */
  interface FingerprintHashFieldRefs {
    readonly id: FieldRef<"FingerprintHash", 'BigInt'>
    readonly hash: FieldRef<"FingerprintHash", 'BigInt'>
    readonly offsetMs: FieldRef<"FingerprintHash", 'Int'>
    readonly audioFingerprintId: FieldRef<"FingerprintHash", 'String'>
    readonly assetId: FieldRef<"FingerprintHash", 'String'>
  }
    

  // Custom InputTypes
  /**
   * FingerprintHash findUnique
   */
  export type FingerprintHashFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FingerprintHash
     */
    select?: FingerprintHashSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FingerprintHash
     */
    omit?: FingerprintHashOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FingerprintHashInclude<ExtArgs> | null
    /**
     * Filter, which FingerprintHash to fetch.
     */
    where: FingerprintHashWhereUniqueInput
  }

  /**
   * FingerprintHash findUniqueOrThrow
   */
  export type FingerprintHashFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FingerprintHash
     */
    select?: FingerprintHashSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FingerprintHash
     */
    omit?: FingerprintHashOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FingerprintHashInclude<ExtArgs> | null
    /**
     * Filter, which FingerprintHash to fetch.
     */
    where: FingerprintHashWhereUniqueInput
  }

  /**
   * FingerprintHash findFirst
   */
  export type FingerprintHashFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FingerprintHash
     */
    select?: FingerprintHashSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FingerprintHash
     */
    omit?: FingerprintHashOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FingerprintHashInclude<ExtArgs> | null
    /**
     * Filter, which FingerprintHash to fetch.
     */
    where?: FingerprintHashWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FingerprintHashes to fetch.
     */
    orderBy?: FingerprintHashOrderByWithRelationInput | FingerprintHashOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FingerprintHashes.
     */
    cursor?: FingerprintHashWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FingerprintHashes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FingerprintHashes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FingerprintHashes.
     */
    distinct?: FingerprintHashScalarFieldEnum | FingerprintHashScalarFieldEnum[]
  }

  /**
   * FingerprintHash findFirstOrThrow
   */
  export type FingerprintHashFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FingerprintHash
     */
    select?: FingerprintHashSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FingerprintHash
     */
    omit?: FingerprintHashOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FingerprintHashInclude<ExtArgs> | null
    /**
     * Filter, which FingerprintHash to fetch.
     */
    where?: FingerprintHashWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FingerprintHashes to fetch.
     */
    orderBy?: FingerprintHashOrderByWithRelationInput | FingerprintHashOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FingerprintHashes.
     */
    cursor?: FingerprintHashWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FingerprintHashes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FingerprintHashes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FingerprintHashes.
     */
    distinct?: FingerprintHashScalarFieldEnum | FingerprintHashScalarFieldEnum[]
  }

  /**
   * FingerprintHash findMany
   */
  export type FingerprintHashFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FingerprintHash
     */
    select?: FingerprintHashSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FingerprintHash
     */
    omit?: FingerprintHashOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FingerprintHashInclude<ExtArgs> | null
    /**
     * Filter, which FingerprintHashes to fetch.
     */
    where?: FingerprintHashWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FingerprintHashes to fetch.
     */
    orderBy?: FingerprintHashOrderByWithRelationInput | FingerprintHashOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FingerprintHashes.
     */
    cursor?: FingerprintHashWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FingerprintHashes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FingerprintHashes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FingerprintHashes.
     */
    distinct?: FingerprintHashScalarFieldEnum | FingerprintHashScalarFieldEnum[]
  }

  /**
   * FingerprintHash create
   */
  export type FingerprintHashCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FingerprintHash
     */
    select?: FingerprintHashSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FingerprintHash
     */
    omit?: FingerprintHashOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FingerprintHashInclude<ExtArgs> | null
    /**
     * The data needed to create a FingerprintHash.
     */
    data: XOR<FingerprintHashCreateInput, FingerprintHashUncheckedCreateInput>
  }

  /**
   * FingerprintHash createMany
   */
  export type FingerprintHashCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FingerprintHashes.
     */
    data: FingerprintHashCreateManyInput | FingerprintHashCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FingerprintHash createManyAndReturn
   */
  export type FingerprintHashCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FingerprintHash
     */
    select?: FingerprintHashSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FingerprintHash
     */
    omit?: FingerprintHashOmit<ExtArgs> | null
    /**
     * The data used to create many FingerprintHashes.
     */
    data: FingerprintHashCreateManyInput | FingerprintHashCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FingerprintHashIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * FingerprintHash update
   */
  export type FingerprintHashUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FingerprintHash
     */
    select?: FingerprintHashSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FingerprintHash
     */
    omit?: FingerprintHashOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FingerprintHashInclude<ExtArgs> | null
    /**
     * The data needed to update a FingerprintHash.
     */
    data: XOR<FingerprintHashUpdateInput, FingerprintHashUncheckedUpdateInput>
    /**
     * Choose, which FingerprintHash to update.
     */
    where: FingerprintHashWhereUniqueInput
  }

  /**
   * FingerprintHash updateMany
   */
  export type FingerprintHashUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FingerprintHashes.
     */
    data: XOR<FingerprintHashUpdateManyMutationInput, FingerprintHashUncheckedUpdateManyInput>
    /**
     * Filter which FingerprintHashes to update
     */
    where?: FingerprintHashWhereInput
    /**
     * Limit how many FingerprintHashes to update.
     */
    limit?: number
  }

  /**
   * FingerprintHash updateManyAndReturn
   */
  export type FingerprintHashUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FingerprintHash
     */
    select?: FingerprintHashSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FingerprintHash
     */
    omit?: FingerprintHashOmit<ExtArgs> | null
    /**
     * The data used to update FingerprintHashes.
     */
    data: XOR<FingerprintHashUpdateManyMutationInput, FingerprintHashUncheckedUpdateManyInput>
    /**
     * Filter which FingerprintHashes to update
     */
    where?: FingerprintHashWhereInput
    /**
     * Limit how many FingerprintHashes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FingerprintHashIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * FingerprintHash upsert
   */
  export type FingerprintHashUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FingerprintHash
     */
    select?: FingerprintHashSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FingerprintHash
     */
    omit?: FingerprintHashOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FingerprintHashInclude<ExtArgs> | null
    /**
     * The filter to search for the FingerprintHash to update in case it exists.
     */
    where: FingerprintHashWhereUniqueInput
    /**
     * In case the FingerprintHash found by the `where` argument doesn't exist, create a new FingerprintHash with this data.
     */
    create: XOR<FingerprintHashCreateInput, FingerprintHashUncheckedCreateInput>
    /**
     * In case the FingerprintHash was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FingerprintHashUpdateInput, FingerprintHashUncheckedUpdateInput>
  }

  /**
   * FingerprintHash delete
   */
  export type FingerprintHashDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FingerprintHash
     */
    select?: FingerprintHashSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FingerprintHash
     */
    omit?: FingerprintHashOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FingerprintHashInclude<ExtArgs> | null
    /**
     * Filter which FingerprintHash to delete.
     */
    where: FingerprintHashWhereUniqueInput
  }

  /**
   * FingerprintHash deleteMany
   */
  export type FingerprintHashDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FingerprintHashes to delete
     */
    where?: FingerprintHashWhereInput
    /**
     * Limit how many FingerprintHashes to delete.
     */
    limit?: number
  }

  /**
   * FingerprintHash without action
   */
  export type FingerprintHashDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FingerprintHash
     */
    select?: FingerprintHashSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FingerprintHash
     */
    omit?: FingerprintHashOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FingerprintHashInclude<ExtArgs> | null
  }


  /**
   * Model Watermark
   */

  export type AggregateWatermark = {
    _count: WatermarkCountAggregateOutputType | null
    _min: WatermarkMinAggregateOutputType | null
    _max: WatermarkMaxAggregateOutputType | null
  }

  export type WatermarkMinAggregateOutputType = {
    id: string | null
    algorithm: string | null
    payload: string | null
    embeddedAt: Date | null
    assetId: string | null
  }

  export type WatermarkMaxAggregateOutputType = {
    id: string | null
    algorithm: string | null
    payload: string | null
    embeddedAt: Date | null
    assetId: string | null
  }

  export type WatermarkCountAggregateOutputType = {
    id: number
    algorithm: number
    payload: number
    embeddedAt: number
    assetId: number
    _all: number
  }


  export type WatermarkMinAggregateInputType = {
    id?: true
    algorithm?: true
    payload?: true
    embeddedAt?: true
    assetId?: true
  }

  export type WatermarkMaxAggregateInputType = {
    id?: true
    algorithm?: true
    payload?: true
    embeddedAt?: true
    assetId?: true
  }

  export type WatermarkCountAggregateInputType = {
    id?: true
    algorithm?: true
    payload?: true
    embeddedAt?: true
    assetId?: true
    _all?: true
  }

  export type WatermarkAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Watermark to aggregate.
     */
    where?: WatermarkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Watermarks to fetch.
     */
    orderBy?: WatermarkOrderByWithRelationInput | WatermarkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WatermarkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Watermarks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Watermarks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Watermarks
    **/
    _count?: true | WatermarkCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WatermarkMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WatermarkMaxAggregateInputType
  }

  export type GetWatermarkAggregateType<T extends WatermarkAggregateArgs> = {
        [P in keyof T & keyof AggregateWatermark]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWatermark[P]>
      : GetScalarType<T[P], AggregateWatermark[P]>
  }




  export type WatermarkGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WatermarkWhereInput
    orderBy?: WatermarkOrderByWithAggregationInput | WatermarkOrderByWithAggregationInput[]
    by: WatermarkScalarFieldEnum[] | WatermarkScalarFieldEnum
    having?: WatermarkScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WatermarkCountAggregateInputType | true
    _min?: WatermarkMinAggregateInputType
    _max?: WatermarkMaxAggregateInputType
  }

  export type WatermarkGroupByOutputType = {
    id: string
    algorithm: string
    payload: string
    embeddedAt: Date
    assetId: string
    _count: WatermarkCountAggregateOutputType | null
    _min: WatermarkMinAggregateOutputType | null
    _max: WatermarkMaxAggregateOutputType | null
  }

  type GetWatermarkGroupByPayload<T extends WatermarkGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WatermarkGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WatermarkGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WatermarkGroupByOutputType[P]>
            : GetScalarType<T[P], WatermarkGroupByOutputType[P]>
        }
      >
    >


  export type WatermarkSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    algorithm?: boolean
    payload?: boolean
    embeddedAt?: boolean
    assetId?: boolean
    asset?: boolean | AssetDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["watermark"]>

  export type WatermarkSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    algorithm?: boolean
    payload?: boolean
    embeddedAt?: boolean
    assetId?: boolean
    asset?: boolean | AssetDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["watermark"]>

  export type WatermarkSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    algorithm?: boolean
    payload?: boolean
    embeddedAt?: boolean
    assetId?: boolean
    asset?: boolean | AssetDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["watermark"]>

  export type WatermarkSelectScalar = {
    id?: boolean
    algorithm?: boolean
    payload?: boolean
    embeddedAt?: boolean
    assetId?: boolean
  }

  export type WatermarkOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "algorithm" | "payload" | "embeddedAt" | "assetId", ExtArgs["result"]["watermark"]>
  export type WatermarkInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    asset?: boolean | AssetDefaultArgs<ExtArgs>
  }
  export type WatermarkIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    asset?: boolean | AssetDefaultArgs<ExtArgs>
  }
  export type WatermarkIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    asset?: boolean | AssetDefaultArgs<ExtArgs>
  }

  export type $WatermarkPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Watermark"
    objects: {
      asset: Prisma.$AssetPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      algorithm: string
      payload: string
      embeddedAt: Date
      assetId: string
    }, ExtArgs["result"]["watermark"]>
    composites: {}
  }

  type WatermarkGetPayload<S extends boolean | null | undefined | WatermarkDefaultArgs> = $Result.GetResult<Prisma.$WatermarkPayload, S>

  type WatermarkCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WatermarkFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WatermarkCountAggregateInputType | true
    }

  export interface WatermarkDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Watermark'], meta: { name: 'Watermark' } }
    /**
     * Find zero or one Watermark that matches the filter.
     * @param {WatermarkFindUniqueArgs} args - Arguments to find a Watermark
     * @example
     * // Get one Watermark
     * const watermark = await prisma.watermark.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WatermarkFindUniqueArgs>(args: SelectSubset<T, WatermarkFindUniqueArgs<ExtArgs>>): Prisma__WatermarkClient<$Result.GetResult<Prisma.$WatermarkPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Watermark that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WatermarkFindUniqueOrThrowArgs} args - Arguments to find a Watermark
     * @example
     * // Get one Watermark
     * const watermark = await prisma.watermark.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WatermarkFindUniqueOrThrowArgs>(args: SelectSubset<T, WatermarkFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WatermarkClient<$Result.GetResult<Prisma.$WatermarkPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Watermark that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WatermarkFindFirstArgs} args - Arguments to find a Watermark
     * @example
     * // Get one Watermark
     * const watermark = await prisma.watermark.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WatermarkFindFirstArgs>(args?: SelectSubset<T, WatermarkFindFirstArgs<ExtArgs>>): Prisma__WatermarkClient<$Result.GetResult<Prisma.$WatermarkPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Watermark that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WatermarkFindFirstOrThrowArgs} args - Arguments to find a Watermark
     * @example
     * // Get one Watermark
     * const watermark = await prisma.watermark.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WatermarkFindFirstOrThrowArgs>(args?: SelectSubset<T, WatermarkFindFirstOrThrowArgs<ExtArgs>>): Prisma__WatermarkClient<$Result.GetResult<Prisma.$WatermarkPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Watermarks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WatermarkFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Watermarks
     * const watermarks = await prisma.watermark.findMany()
     * 
     * // Get first 10 Watermarks
     * const watermarks = await prisma.watermark.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const watermarkWithIdOnly = await prisma.watermark.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WatermarkFindManyArgs>(args?: SelectSubset<T, WatermarkFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WatermarkPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Watermark.
     * @param {WatermarkCreateArgs} args - Arguments to create a Watermark.
     * @example
     * // Create one Watermark
     * const Watermark = await prisma.watermark.create({
     *   data: {
     *     // ... data to create a Watermark
     *   }
     * })
     * 
     */
    create<T extends WatermarkCreateArgs>(args: SelectSubset<T, WatermarkCreateArgs<ExtArgs>>): Prisma__WatermarkClient<$Result.GetResult<Prisma.$WatermarkPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Watermarks.
     * @param {WatermarkCreateManyArgs} args - Arguments to create many Watermarks.
     * @example
     * // Create many Watermarks
     * const watermark = await prisma.watermark.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WatermarkCreateManyArgs>(args?: SelectSubset<T, WatermarkCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Watermarks and returns the data saved in the database.
     * @param {WatermarkCreateManyAndReturnArgs} args - Arguments to create many Watermarks.
     * @example
     * // Create many Watermarks
     * const watermark = await prisma.watermark.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Watermarks and only return the `id`
     * const watermarkWithIdOnly = await prisma.watermark.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WatermarkCreateManyAndReturnArgs>(args?: SelectSubset<T, WatermarkCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WatermarkPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Watermark.
     * @param {WatermarkDeleteArgs} args - Arguments to delete one Watermark.
     * @example
     * // Delete one Watermark
     * const Watermark = await prisma.watermark.delete({
     *   where: {
     *     // ... filter to delete one Watermark
     *   }
     * })
     * 
     */
    delete<T extends WatermarkDeleteArgs>(args: SelectSubset<T, WatermarkDeleteArgs<ExtArgs>>): Prisma__WatermarkClient<$Result.GetResult<Prisma.$WatermarkPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Watermark.
     * @param {WatermarkUpdateArgs} args - Arguments to update one Watermark.
     * @example
     * // Update one Watermark
     * const watermark = await prisma.watermark.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WatermarkUpdateArgs>(args: SelectSubset<T, WatermarkUpdateArgs<ExtArgs>>): Prisma__WatermarkClient<$Result.GetResult<Prisma.$WatermarkPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Watermarks.
     * @param {WatermarkDeleteManyArgs} args - Arguments to filter Watermarks to delete.
     * @example
     * // Delete a few Watermarks
     * const { count } = await prisma.watermark.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WatermarkDeleteManyArgs>(args?: SelectSubset<T, WatermarkDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Watermarks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WatermarkUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Watermarks
     * const watermark = await prisma.watermark.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WatermarkUpdateManyArgs>(args: SelectSubset<T, WatermarkUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Watermarks and returns the data updated in the database.
     * @param {WatermarkUpdateManyAndReturnArgs} args - Arguments to update many Watermarks.
     * @example
     * // Update many Watermarks
     * const watermark = await prisma.watermark.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Watermarks and only return the `id`
     * const watermarkWithIdOnly = await prisma.watermark.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends WatermarkUpdateManyAndReturnArgs>(args: SelectSubset<T, WatermarkUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WatermarkPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Watermark.
     * @param {WatermarkUpsertArgs} args - Arguments to update or create a Watermark.
     * @example
     * // Update or create a Watermark
     * const watermark = await prisma.watermark.upsert({
     *   create: {
     *     // ... data to create a Watermark
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Watermark we want to update
     *   }
     * })
     */
    upsert<T extends WatermarkUpsertArgs>(args: SelectSubset<T, WatermarkUpsertArgs<ExtArgs>>): Prisma__WatermarkClient<$Result.GetResult<Prisma.$WatermarkPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Watermarks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WatermarkCountArgs} args - Arguments to filter Watermarks to count.
     * @example
     * // Count the number of Watermarks
     * const count = await prisma.watermark.count({
     *   where: {
     *     // ... the filter for the Watermarks we want to count
     *   }
     * })
    **/
    count<T extends WatermarkCountArgs>(
      args?: Subset<T, WatermarkCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WatermarkCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Watermark.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WatermarkAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WatermarkAggregateArgs>(args: Subset<T, WatermarkAggregateArgs>): Prisma.PrismaPromise<GetWatermarkAggregateType<T>>

    /**
     * Group by Watermark.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WatermarkGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WatermarkGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WatermarkGroupByArgs['orderBy'] }
        : { orderBy?: WatermarkGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WatermarkGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWatermarkGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Watermark model
   */
  readonly fields: WatermarkFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Watermark.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WatermarkClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    asset<T extends AssetDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AssetDefaultArgs<ExtArgs>>): Prisma__AssetClient<$Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Watermark model
   */
  interface WatermarkFieldRefs {
    readonly id: FieldRef<"Watermark", 'String'>
    readonly algorithm: FieldRef<"Watermark", 'String'>
    readonly payload: FieldRef<"Watermark", 'String'>
    readonly embeddedAt: FieldRef<"Watermark", 'DateTime'>
    readonly assetId: FieldRef<"Watermark", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Watermark findUnique
   */
  export type WatermarkFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Watermark
     */
    select?: WatermarkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Watermark
     */
    omit?: WatermarkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatermarkInclude<ExtArgs> | null
    /**
     * Filter, which Watermark to fetch.
     */
    where: WatermarkWhereUniqueInput
  }

  /**
   * Watermark findUniqueOrThrow
   */
  export type WatermarkFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Watermark
     */
    select?: WatermarkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Watermark
     */
    omit?: WatermarkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatermarkInclude<ExtArgs> | null
    /**
     * Filter, which Watermark to fetch.
     */
    where: WatermarkWhereUniqueInput
  }

  /**
   * Watermark findFirst
   */
  export type WatermarkFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Watermark
     */
    select?: WatermarkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Watermark
     */
    omit?: WatermarkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatermarkInclude<ExtArgs> | null
    /**
     * Filter, which Watermark to fetch.
     */
    where?: WatermarkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Watermarks to fetch.
     */
    orderBy?: WatermarkOrderByWithRelationInput | WatermarkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Watermarks.
     */
    cursor?: WatermarkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Watermarks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Watermarks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Watermarks.
     */
    distinct?: WatermarkScalarFieldEnum | WatermarkScalarFieldEnum[]
  }

  /**
   * Watermark findFirstOrThrow
   */
  export type WatermarkFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Watermark
     */
    select?: WatermarkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Watermark
     */
    omit?: WatermarkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatermarkInclude<ExtArgs> | null
    /**
     * Filter, which Watermark to fetch.
     */
    where?: WatermarkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Watermarks to fetch.
     */
    orderBy?: WatermarkOrderByWithRelationInput | WatermarkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Watermarks.
     */
    cursor?: WatermarkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Watermarks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Watermarks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Watermarks.
     */
    distinct?: WatermarkScalarFieldEnum | WatermarkScalarFieldEnum[]
  }

  /**
   * Watermark findMany
   */
  export type WatermarkFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Watermark
     */
    select?: WatermarkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Watermark
     */
    omit?: WatermarkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatermarkInclude<ExtArgs> | null
    /**
     * Filter, which Watermarks to fetch.
     */
    where?: WatermarkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Watermarks to fetch.
     */
    orderBy?: WatermarkOrderByWithRelationInput | WatermarkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Watermarks.
     */
    cursor?: WatermarkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Watermarks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Watermarks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Watermarks.
     */
    distinct?: WatermarkScalarFieldEnum | WatermarkScalarFieldEnum[]
  }

  /**
   * Watermark create
   */
  export type WatermarkCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Watermark
     */
    select?: WatermarkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Watermark
     */
    omit?: WatermarkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatermarkInclude<ExtArgs> | null
    /**
     * The data needed to create a Watermark.
     */
    data: XOR<WatermarkCreateInput, WatermarkUncheckedCreateInput>
  }

  /**
   * Watermark createMany
   */
  export type WatermarkCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Watermarks.
     */
    data: WatermarkCreateManyInput | WatermarkCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Watermark createManyAndReturn
   */
  export type WatermarkCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Watermark
     */
    select?: WatermarkSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Watermark
     */
    omit?: WatermarkOmit<ExtArgs> | null
    /**
     * The data used to create many Watermarks.
     */
    data: WatermarkCreateManyInput | WatermarkCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatermarkIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Watermark update
   */
  export type WatermarkUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Watermark
     */
    select?: WatermarkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Watermark
     */
    omit?: WatermarkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatermarkInclude<ExtArgs> | null
    /**
     * The data needed to update a Watermark.
     */
    data: XOR<WatermarkUpdateInput, WatermarkUncheckedUpdateInput>
    /**
     * Choose, which Watermark to update.
     */
    where: WatermarkWhereUniqueInput
  }

  /**
   * Watermark updateMany
   */
  export type WatermarkUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Watermarks.
     */
    data: XOR<WatermarkUpdateManyMutationInput, WatermarkUncheckedUpdateManyInput>
    /**
     * Filter which Watermarks to update
     */
    where?: WatermarkWhereInput
    /**
     * Limit how many Watermarks to update.
     */
    limit?: number
  }

  /**
   * Watermark updateManyAndReturn
   */
  export type WatermarkUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Watermark
     */
    select?: WatermarkSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Watermark
     */
    omit?: WatermarkOmit<ExtArgs> | null
    /**
     * The data used to update Watermarks.
     */
    data: XOR<WatermarkUpdateManyMutationInput, WatermarkUncheckedUpdateManyInput>
    /**
     * Filter which Watermarks to update
     */
    where?: WatermarkWhereInput
    /**
     * Limit how many Watermarks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatermarkIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Watermark upsert
   */
  export type WatermarkUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Watermark
     */
    select?: WatermarkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Watermark
     */
    omit?: WatermarkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatermarkInclude<ExtArgs> | null
    /**
     * The filter to search for the Watermark to update in case it exists.
     */
    where: WatermarkWhereUniqueInput
    /**
     * In case the Watermark found by the `where` argument doesn't exist, create a new Watermark with this data.
     */
    create: XOR<WatermarkCreateInput, WatermarkUncheckedCreateInput>
    /**
     * In case the Watermark was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WatermarkUpdateInput, WatermarkUncheckedUpdateInput>
  }

  /**
   * Watermark delete
   */
  export type WatermarkDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Watermark
     */
    select?: WatermarkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Watermark
     */
    omit?: WatermarkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatermarkInclude<ExtArgs> | null
    /**
     * Filter which Watermark to delete.
     */
    where: WatermarkWhereUniqueInput
  }

  /**
   * Watermark deleteMany
   */
  export type WatermarkDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Watermarks to delete
     */
    where?: WatermarkWhereInput
    /**
     * Limit how many Watermarks to delete.
     */
    limit?: number
  }

  /**
   * Watermark without action
   */
  export type WatermarkDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Watermark
     */
    select?: WatermarkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Watermark
     */
    omit?: WatermarkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatermarkInclude<ExtArgs> | null
  }


  /**
   * Model Broadcaster
   */

  export type AggregateBroadcaster = {
    _count: BroadcasterCountAggregateOutputType | null
    _min: BroadcasterMinAggregateOutputType | null
    _max: BroadcasterMaxAggregateOutputType | null
  }

  export type BroadcasterMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    website: string | null
    streamUrl: string | null
    country: string | null
    frequency: string | null
    status: $Enums.Status | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BroadcasterMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    website: string | null
    streamUrl: string | null
    country: string | null
    frequency: string | null
    status: $Enums.Status | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BroadcasterCountAggregateOutputType = {
    id: number
    name: number
    description: number
    website: number
    streamUrl: number
    country: number
    frequency: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BroadcasterMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    website?: true
    streamUrl?: true
    country?: true
    frequency?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BroadcasterMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    website?: true
    streamUrl?: true
    country?: true
    frequency?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BroadcasterCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    website?: true
    streamUrl?: true
    country?: true
    frequency?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BroadcasterAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Broadcaster to aggregate.
     */
    where?: BroadcasterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Broadcasters to fetch.
     */
    orderBy?: BroadcasterOrderByWithRelationInput | BroadcasterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BroadcasterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Broadcasters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Broadcasters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Broadcasters
    **/
    _count?: true | BroadcasterCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BroadcasterMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BroadcasterMaxAggregateInputType
  }

  export type GetBroadcasterAggregateType<T extends BroadcasterAggregateArgs> = {
        [P in keyof T & keyof AggregateBroadcaster]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBroadcaster[P]>
      : GetScalarType<T[P], AggregateBroadcaster[P]>
  }




  export type BroadcasterGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BroadcasterWhereInput
    orderBy?: BroadcasterOrderByWithAggregationInput | BroadcasterOrderByWithAggregationInput[]
    by: BroadcasterScalarFieldEnum[] | BroadcasterScalarFieldEnum
    having?: BroadcasterScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BroadcasterCountAggregateInputType | true
    _min?: BroadcasterMinAggregateInputType
    _max?: BroadcasterMaxAggregateInputType
  }

  export type BroadcasterGroupByOutputType = {
    id: string
    name: string
    description: string | null
    website: string | null
    streamUrl: string | null
    country: string | null
    frequency: string | null
    status: $Enums.Status
    createdAt: Date
    updatedAt: Date
    _count: BroadcasterCountAggregateOutputType | null
    _min: BroadcasterMinAggregateOutputType | null
    _max: BroadcasterMaxAggregateOutputType | null
  }

  type GetBroadcasterGroupByPayload<T extends BroadcasterGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BroadcasterGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BroadcasterGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BroadcasterGroupByOutputType[P]>
            : GetScalarType<T[P], BroadcasterGroupByOutputType[P]>
        }
      >
    >


  export type BroadcasterSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    website?: boolean
    streamUrl?: boolean
    country?: boolean
    frequency?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    monitoringSessions?: boolean | Broadcaster$monitoringSessionsArgs<ExtArgs>
    detections?: boolean | Broadcaster$detectionsArgs<ExtArgs>
    _count?: boolean | BroadcasterCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["broadcaster"]>

  export type BroadcasterSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    website?: boolean
    streamUrl?: boolean
    country?: boolean
    frequency?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["broadcaster"]>

  export type BroadcasterSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    website?: boolean
    streamUrl?: boolean
    country?: boolean
    frequency?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["broadcaster"]>

  export type BroadcasterSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    website?: boolean
    streamUrl?: boolean
    country?: boolean
    frequency?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type BroadcasterOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "website" | "streamUrl" | "country" | "frequency" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["broadcaster"]>
  export type BroadcasterInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    monitoringSessions?: boolean | Broadcaster$monitoringSessionsArgs<ExtArgs>
    detections?: boolean | Broadcaster$detectionsArgs<ExtArgs>
    _count?: boolean | BroadcasterCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BroadcasterIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type BroadcasterIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $BroadcasterPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Broadcaster"
    objects: {
      monitoringSessions: Prisma.$MonitoringSessionPayload<ExtArgs>[]
      detections: Prisma.$DetectionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
      website: string | null
      streamUrl: string | null
      country: string | null
      frequency: string | null
      status: $Enums.Status
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["broadcaster"]>
    composites: {}
  }

  type BroadcasterGetPayload<S extends boolean | null | undefined | BroadcasterDefaultArgs> = $Result.GetResult<Prisma.$BroadcasterPayload, S>

  type BroadcasterCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BroadcasterFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BroadcasterCountAggregateInputType | true
    }

  export interface BroadcasterDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Broadcaster'], meta: { name: 'Broadcaster' } }
    /**
     * Find zero or one Broadcaster that matches the filter.
     * @param {BroadcasterFindUniqueArgs} args - Arguments to find a Broadcaster
     * @example
     * // Get one Broadcaster
     * const broadcaster = await prisma.broadcaster.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BroadcasterFindUniqueArgs>(args: SelectSubset<T, BroadcasterFindUniqueArgs<ExtArgs>>): Prisma__BroadcasterClient<$Result.GetResult<Prisma.$BroadcasterPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Broadcaster that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BroadcasterFindUniqueOrThrowArgs} args - Arguments to find a Broadcaster
     * @example
     * // Get one Broadcaster
     * const broadcaster = await prisma.broadcaster.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BroadcasterFindUniqueOrThrowArgs>(args: SelectSubset<T, BroadcasterFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BroadcasterClient<$Result.GetResult<Prisma.$BroadcasterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Broadcaster that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BroadcasterFindFirstArgs} args - Arguments to find a Broadcaster
     * @example
     * // Get one Broadcaster
     * const broadcaster = await prisma.broadcaster.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BroadcasterFindFirstArgs>(args?: SelectSubset<T, BroadcasterFindFirstArgs<ExtArgs>>): Prisma__BroadcasterClient<$Result.GetResult<Prisma.$BroadcasterPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Broadcaster that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BroadcasterFindFirstOrThrowArgs} args - Arguments to find a Broadcaster
     * @example
     * // Get one Broadcaster
     * const broadcaster = await prisma.broadcaster.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BroadcasterFindFirstOrThrowArgs>(args?: SelectSubset<T, BroadcasterFindFirstOrThrowArgs<ExtArgs>>): Prisma__BroadcasterClient<$Result.GetResult<Prisma.$BroadcasterPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Broadcasters that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BroadcasterFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Broadcasters
     * const broadcasters = await prisma.broadcaster.findMany()
     * 
     * // Get first 10 Broadcasters
     * const broadcasters = await prisma.broadcaster.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const broadcasterWithIdOnly = await prisma.broadcaster.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BroadcasterFindManyArgs>(args?: SelectSubset<T, BroadcasterFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BroadcasterPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Broadcaster.
     * @param {BroadcasterCreateArgs} args - Arguments to create a Broadcaster.
     * @example
     * // Create one Broadcaster
     * const Broadcaster = await prisma.broadcaster.create({
     *   data: {
     *     // ... data to create a Broadcaster
     *   }
     * })
     * 
     */
    create<T extends BroadcasterCreateArgs>(args: SelectSubset<T, BroadcasterCreateArgs<ExtArgs>>): Prisma__BroadcasterClient<$Result.GetResult<Prisma.$BroadcasterPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Broadcasters.
     * @param {BroadcasterCreateManyArgs} args - Arguments to create many Broadcasters.
     * @example
     * // Create many Broadcasters
     * const broadcaster = await prisma.broadcaster.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BroadcasterCreateManyArgs>(args?: SelectSubset<T, BroadcasterCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Broadcasters and returns the data saved in the database.
     * @param {BroadcasterCreateManyAndReturnArgs} args - Arguments to create many Broadcasters.
     * @example
     * // Create many Broadcasters
     * const broadcaster = await prisma.broadcaster.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Broadcasters and only return the `id`
     * const broadcasterWithIdOnly = await prisma.broadcaster.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BroadcasterCreateManyAndReturnArgs>(args?: SelectSubset<T, BroadcasterCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BroadcasterPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Broadcaster.
     * @param {BroadcasterDeleteArgs} args - Arguments to delete one Broadcaster.
     * @example
     * // Delete one Broadcaster
     * const Broadcaster = await prisma.broadcaster.delete({
     *   where: {
     *     // ... filter to delete one Broadcaster
     *   }
     * })
     * 
     */
    delete<T extends BroadcasterDeleteArgs>(args: SelectSubset<T, BroadcasterDeleteArgs<ExtArgs>>): Prisma__BroadcasterClient<$Result.GetResult<Prisma.$BroadcasterPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Broadcaster.
     * @param {BroadcasterUpdateArgs} args - Arguments to update one Broadcaster.
     * @example
     * // Update one Broadcaster
     * const broadcaster = await prisma.broadcaster.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BroadcasterUpdateArgs>(args: SelectSubset<T, BroadcasterUpdateArgs<ExtArgs>>): Prisma__BroadcasterClient<$Result.GetResult<Prisma.$BroadcasterPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Broadcasters.
     * @param {BroadcasterDeleteManyArgs} args - Arguments to filter Broadcasters to delete.
     * @example
     * // Delete a few Broadcasters
     * const { count } = await prisma.broadcaster.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BroadcasterDeleteManyArgs>(args?: SelectSubset<T, BroadcasterDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Broadcasters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BroadcasterUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Broadcasters
     * const broadcaster = await prisma.broadcaster.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BroadcasterUpdateManyArgs>(args: SelectSubset<T, BroadcasterUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Broadcasters and returns the data updated in the database.
     * @param {BroadcasterUpdateManyAndReturnArgs} args - Arguments to update many Broadcasters.
     * @example
     * // Update many Broadcasters
     * const broadcaster = await prisma.broadcaster.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Broadcasters and only return the `id`
     * const broadcasterWithIdOnly = await prisma.broadcaster.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BroadcasterUpdateManyAndReturnArgs>(args: SelectSubset<T, BroadcasterUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BroadcasterPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Broadcaster.
     * @param {BroadcasterUpsertArgs} args - Arguments to update or create a Broadcaster.
     * @example
     * // Update or create a Broadcaster
     * const broadcaster = await prisma.broadcaster.upsert({
     *   create: {
     *     // ... data to create a Broadcaster
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Broadcaster we want to update
     *   }
     * })
     */
    upsert<T extends BroadcasterUpsertArgs>(args: SelectSubset<T, BroadcasterUpsertArgs<ExtArgs>>): Prisma__BroadcasterClient<$Result.GetResult<Prisma.$BroadcasterPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Broadcasters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BroadcasterCountArgs} args - Arguments to filter Broadcasters to count.
     * @example
     * // Count the number of Broadcasters
     * const count = await prisma.broadcaster.count({
     *   where: {
     *     // ... the filter for the Broadcasters we want to count
     *   }
     * })
    **/
    count<T extends BroadcasterCountArgs>(
      args?: Subset<T, BroadcasterCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BroadcasterCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Broadcaster.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BroadcasterAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BroadcasterAggregateArgs>(args: Subset<T, BroadcasterAggregateArgs>): Prisma.PrismaPromise<GetBroadcasterAggregateType<T>>

    /**
     * Group by Broadcaster.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BroadcasterGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BroadcasterGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BroadcasterGroupByArgs['orderBy'] }
        : { orderBy?: BroadcasterGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BroadcasterGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBroadcasterGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Broadcaster model
   */
  readonly fields: BroadcasterFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Broadcaster.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BroadcasterClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    monitoringSessions<T extends Broadcaster$monitoringSessionsArgs<ExtArgs> = {}>(args?: Subset<T, Broadcaster$monitoringSessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MonitoringSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    detections<T extends Broadcaster$detectionsArgs<ExtArgs> = {}>(args?: Subset<T, Broadcaster$detectionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DetectionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Broadcaster model
   */
  interface BroadcasterFieldRefs {
    readonly id: FieldRef<"Broadcaster", 'String'>
    readonly name: FieldRef<"Broadcaster", 'String'>
    readonly description: FieldRef<"Broadcaster", 'String'>
    readonly website: FieldRef<"Broadcaster", 'String'>
    readonly streamUrl: FieldRef<"Broadcaster", 'String'>
    readonly country: FieldRef<"Broadcaster", 'String'>
    readonly frequency: FieldRef<"Broadcaster", 'String'>
    readonly status: FieldRef<"Broadcaster", 'Status'>
    readonly createdAt: FieldRef<"Broadcaster", 'DateTime'>
    readonly updatedAt: FieldRef<"Broadcaster", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Broadcaster findUnique
   */
  export type BroadcasterFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Broadcaster
     */
    select?: BroadcasterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Broadcaster
     */
    omit?: BroadcasterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BroadcasterInclude<ExtArgs> | null
    /**
     * Filter, which Broadcaster to fetch.
     */
    where: BroadcasterWhereUniqueInput
  }

  /**
   * Broadcaster findUniqueOrThrow
   */
  export type BroadcasterFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Broadcaster
     */
    select?: BroadcasterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Broadcaster
     */
    omit?: BroadcasterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BroadcasterInclude<ExtArgs> | null
    /**
     * Filter, which Broadcaster to fetch.
     */
    where: BroadcasterWhereUniqueInput
  }

  /**
   * Broadcaster findFirst
   */
  export type BroadcasterFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Broadcaster
     */
    select?: BroadcasterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Broadcaster
     */
    omit?: BroadcasterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BroadcasterInclude<ExtArgs> | null
    /**
     * Filter, which Broadcaster to fetch.
     */
    where?: BroadcasterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Broadcasters to fetch.
     */
    orderBy?: BroadcasterOrderByWithRelationInput | BroadcasterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Broadcasters.
     */
    cursor?: BroadcasterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Broadcasters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Broadcasters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Broadcasters.
     */
    distinct?: BroadcasterScalarFieldEnum | BroadcasterScalarFieldEnum[]
  }

  /**
   * Broadcaster findFirstOrThrow
   */
  export type BroadcasterFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Broadcaster
     */
    select?: BroadcasterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Broadcaster
     */
    omit?: BroadcasterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BroadcasterInclude<ExtArgs> | null
    /**
     * Filter, which Broadcaster to fetch.
     */
    where?: BroadcasterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Broadcasters to fetch.
     */
    orderBy?: BroadcasterOrderByWithRelationInput | BroadcasterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Broadcasters.
     */
    cursor?: BroadcasterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Broadcasters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Broadcasters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Broadcasters.
     */
    distinct?: BroadcasterScalarFieldEnum | BroadcasterScalarFieldEnum[]
  }

  /**
   * Broadcaster findMany
   */
  export type BroadcasterFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Broadcaster
     */
    select?: BroadcasterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Broadcaster
     */
    omit?: BroadcasterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BroadcasterInclude<ExtArgs> | null
    /**
     * Filter, which Broadcasters to fetch.
     */
    where?: BroadcasterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Broadcasters to fetch.
     */
    orderBy?: BroadcasterOrderByWithRelationInput | BroadcasterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Broadcasters.
     */
    cursor?: BroadcasterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Broadcasters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Broadcasters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Broadcasters.
     */
    distinct?: BroadcasterScalarFieldEnum | BroadcasterScalarFieldEnum[]
  }

  /**
   * Broadcaster create
   */
  export type BroadcasterCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Broadcaster
     */
    select?: BroadcasterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Broadcaster
     */
    omit?: BroadcasterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BroadcasterInclude<ExtArgs> | null
    /**
     * The data needed to create a Broadcaster.
     */
    data: XOR<BroadcasterCreateInput, BroadcasterUncheckedCreateInput>
  }

  /**
   * Broadcaster createMany
   */
  export type BroadcasterCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Broadcasters.
     */
    data: BroadcasterCreateManyInput | BroadcasterCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Broadcaster createManyAndReturn
   */
  export type BroadcasterCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Broadcaster
     */
    select?: BroadcasterSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Broadcaster
     */
    omit?: BroadcasterOmit<ExtArgs> | null
    /**
     * The data used to create many Broadcasters.
     */
    data: BroadcasterCreateManyInput | BroadcasterCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Broadcaster update
   */
  export type BroadcasterUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Broadcaster
     */
    select?: BroadcasterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Broadcaster
     */
    omit?: BroadcasterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BroadcasterInclude<ExtArgs> | null
    /**
     * The data needed to update a Broadcaster.
     */
    data: XOR<BroadcasterUpdateInput, BroadcasterUncheckedUpdateInput>
    /**
     * Choose, which Broadcaster to update.
     */
    where: BroadcasterWhereUniqueInput
  }

  /**
   * Broadcaster updateMany
   */
  export type BroadcasterUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Broadcasters.
     */
    data: XOR<BroadcasterUpdateManyMutationInput, BroadcasterUncheckedUpdateManyInput>
    /**
     * Filter which Broadcasters to update
     */
    where?: BroadcasterWhereInput
    /**
     * Limit how many Broadcasters to update.
     */
    limit?: number
  }

  /**
   * Broadcaster updateManyAndReturn
   */
  export type BroadcasterUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Broadcaster
     */
    select?: BroadcasterSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Broadcaster
     */
    omit?: BroadcasterOmit<ExtArgs> | null
    /**
     * The data used to update Broadcasters.
     */
    data: XOR<BroadcasterUpdateManyMutationInput, BroadcasterUncheckedUpdateManyInput>
    /**
     * Filter which Broadcasters to update
     */
    where?: BroadcasterWhereInput
    /**
     * Limit how many Broadcasters to update.
     */
    limit?: number
  }

  /**
   * Broadcaster upsert
   */
  export type BroadcasterUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Broadcaster
     */
    select?: BroadcasterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Broadcaster
     */
    omit?: BroadcasterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BroadcasterInclude<ExtArgs> | null
    /**
     * The filter to search for the Broadcaster to update in case it exists.
     */
    where: BroadcasterWhereUniqueInput
    /**
     * In case the Broadcaster found by the `where` argument doesn't exist, create a new Broadcaster with this data.
     */
    create: XOR<BroadcasterCreateInput, BroadcasterUncheckedCreateInput>
    /**
     * In case the Broadcaster was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BroadcasterUpdateInput, BroadcasterUncheckedUpdateInput>
  }

  /**
   * Broadcaster delete
   */
  export type BroadcasterDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Broadcaster
     */
    select?: BroadcasterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Broadcaster
     */
    omit?: BroadcasterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BroadcasterInclude<ExtArgs> | null
    /**
     * Filter which Broadcaster to delete.
     */
    where: BroadcasterWhereUniqueInput
  }

  /**
   * Broadcaster deleteMany
   */
  export type BroadcasterDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Broadcasters to delete
     */
    where?: BroadcasterWhereInput
    /**
     * Limit how many Broadcasters to delete.
     */
    limit?: number
  }

  /**
   * Broadcaster.monitoringSessions
   */
  export type Broadcaster$monitoringSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonitoringSession
     */
    select?: MonitoringSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MonitoringSession
     */
    omit?: MonitoringSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonitoringSessionInclude<ExtArgs> | null
    where?: MonitoringSessionWhereInput
    orderBy?: MonitoringSessionOrderByWithRelationInput | MonitoringSessionOrderByWithRelationInput[]
    cursor?: MonitoringSessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MonitoringSessionScalarFieldEnum | MonitoringSessionScalarFieldEnum[]
  }

  /**
   * Broadcaster.detections
   */
  export type Broadcaster$detectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Detection
     */
    select?: DetectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Detection
     */
    omit?: DetectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetectionInclude<ExtArgs> | null
    where?: DetectionWhereInput
    orderBy?: DetectionOrderByWithRelationInput | DetectionOrderByWithRelationInput[]
    cursor?: DetectionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DetectionScalarFieldEnum | DetectionScalarFieldEnum[]
  }

  /**
   * Broadcaster without action
   */
  export type BroadcasterDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Broadcaster
     */
    select?: BroadcasterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Broadcaster
     */
    omit?: BroadcasterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BroadcasterInclude<ExtArgs> | null
  }


  /**
   * Model MonitoringSession
   */

  export type AggregateMonitoringSession = {
    _count: MonitoringSessionCountAggregateOutputType | null
    _min: MonitoringSessionMinAggregateOutputType | null
    _max: MonitoringSessionMaxAggregateOutputType | null
  }

  export type MonitoringSessionMinAggregateOutputType = {
    id: string | null
    broadcasterId: string | null
    startedAt: Date | null
    endedAt: Date | null
    status: $Enums.Status | null
    createdAt: Date | null
  }

  export type MonitoringSessionMaxAggregateOutputType = {
    id: string | null
    broadcasterId: string | null
    startedAt: Date | null
    endedAt: Date | null
    status: $Enums.Status | null
    createdAt: Date | null
  }

  export type MonitoringSessionCountAggregateOutputType = {
    id: number
    broadcasterId: number
    startedAt: number
    endedAt: number
    status: number
    createdAt: number
    _all: number
  }


  export type MonitoringSessionMinAggregateInputType = {
    id?: true
    broadcasterId?: true
    startedAt?: true
    endedAt?: true
    status?: true
    createdAt?: true
  }

  export type MonitoringSessionMaxAggregateInputType = {
    id?: true
    broadcasterId?: true
    startedAt?: true
    endedAt?: true
    status?: true
    createdAt?: true
  }

  export type MonitoringSessionCountAggregateInputType = {
    id?: true
    broadcasterId?: true
    startedAt?: true
    endedAt?: true
    status?: true
    createdAt?: true
    _all?: true
  }

  export type MonitoringSessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MonitoringSession to aggregate.
     */
    where?: MonitoringSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MonitoringSessions to fetch.
     */
    orderBy?: MonitoringSessionOrderByWithRelationInput | MonitoringSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MonitoringSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MonitoringSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MonitoringSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MonitoringSessions
    **/
    _count?: true | MonitoringSessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MonitoringSessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MonitoringSessionMaxAggregateInputType
  }

  export type GetMonitoringSessionAggregateType<T extends MonitoringSessionAggregateArgs> = {
        [P in keyof T & keyof AggregateMonitoringSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMonitoringSession[P]>
      : GetScalarType<T[P], AggregateMonitoringSession[P]>
  }




  export type MonitoringSessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MonitoringSessionWhereInput
    orderBy?: MonitoringSessionOrderByWithAggregationInput | MonitoringSessionOrderByWithAggregationInput[]
    by: MonitoringSessionScalarFieldEnum[] | MonitoringSessionScalarFieldEnum
    having?: MonitoringSessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MonitoringSessionCountAggregateInputType | true
    _min?: MonitoringSessionMinAggregateInputType
    _max?: MonitoringSessionMaxAggregateInputType
  }

  export type MonitoringSessionGroupByOutputType = {
    id: string
    broadcasterId: string
    startedAt: Date
    endedAt: Date | null
    status: $Enums.Status
    createdAt: Date
    _count: MonitoringSessionCountAggregateOutputType | null
    _min: MonitoringSessionMinAggregateOutputType | null
    _max: MonitoringSessionMaxAggregateOutputType | null
  }

  type GetMonitoringSessionGroupByPayload<T extends MonitoringSessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MonitoringSessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MonitoringSessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MonitoringSessionGroupByOutputType[P]>
            : GetScalarType<T[P], MonitoringSessionGroupByOutputType[P]>
        }
      >
    >


  export type MonitoringSessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    broadcasterId?: boolean
    startedAt?: boolean
    endedAt?: boolean
    status?: boolean
    createdAt?: boolean
    broadcaster?: boolean | BroadcasterDefaultArgs<ExtArgs>
    detections?: boolean | MonitoringSession$detectionsArgs<ExtArgs>
    _count?: boolean | MonitoringSessionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["monitoringSession"]>

  export type MonitoringSessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    broadcasterId?: boolean
    startedAt?: boolean
    endedAt?: boolean
    status?: boolean
    createdAt?: boolean
    broadcaster?: boolean | BroadcasterDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["monitoringSession"]>

  export type MonitoringSessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    broadcasterId?: boolean
    startedAt?: boolean
    endedAt?: boolean
    status?: boolean
    createdAt?: boolean
    broadcaster?: boolean | BroadcasterDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["monitoringSession"]>

  export type MonitoringSessionSelectScalar = {
    id?: boolean
    broadcasterId?: boolean
    startedAt?: boolean
    endedAt?: boolean
    status?: boolean
    createdAt?: boolean
  }

  export type MonitoringSessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "broadcasterId" | "startedAt" | "endedAt" | "status" | "createdAt", ExtArgs["result"]["monitoringSession"]>
  export type MonitoringSessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    broadcaster?: boolean | BroadcasterDefaultArgs<ExtArgs>
    detections?: boolean | MonitoringSession$detectionsArgs<ExtArgs>
    _count?: boolean | MonitoringSessionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MonitoringSessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    broadcaster?: boolean | BroadcasterDefaultArgs<ExtArgs>
  }
  export type MonitoringSessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    broadcaster?: boolean | BroadcasterDefaultArgs<ExtArgs>
  }

  export type $MonitoringSessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MonitoringSession"
    objects: {
      broadcaster: Prisma.$BroadcasterPayload<ExtArgs>
      detections: Prisma.$DetectionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      broadcasterId: string
      startedAt: Date
      endedAt: Date | null
      status: $Enums.Status
      createdAt: Date
    }, ExtArgs["result"]["monitoringSession"]>
    composites: {}
  }

  type MonitoringSessionGetPayload<S extends boolean | null | undefined | MonitoringSessionDefaultArgs> = $Result.GetResult<Prisma.$MonitoringSessionPayload, S>

  type MonitoringSessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MonitoringSessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MonitoringSessionCountAggregateInputType | true
    }

  export interface MonitoringSessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MonitoringSession'], meta: { name: 'MonitoringSession' } }
    /**
     * Find zero or one MonitoringSession that matches the filter.
     * @param {MonitoringSessionFindUniqueArgs} args - Arguments to find a MonitoringSession
     * @example
     * // Get one MonitoringSession
     * const monitoringSession = await prisma.monitoringSession.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MonitoringSessionFindUniqueArgs>(args: SelectSubset<T, MonitoringSessionFindUniqueArgs<ExtArgs>>): Prisma__MonitoringSessionClient<$Result.GetResult<Prisma.$MonitoringSessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MonitoringSession that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MonitoringSessionFindUniqueOrThrowArgs} args - Arguments to find a MonitoringSession
     * @example
     * // Get one MonitoringSession
     * const monitoringSession = await prisma.monitoringSession.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MonitoringSessionFindUniqueOrThrowArgs>(args: SelectSubset<T, MonitoringSessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MonitoringSessionClient<$Result.GetResult<Prisma.$MonitoringSessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MonitoringSession that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonitoringSessionFindFirstArgs} args - Arguments to find a MonitoringSession
     * @example
     * // Get one MonitoringSession
     * const monitoringSession = await prisma.monitoringSession.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MonitoringSessionFindFirstArgs>(args?: SelectSubset<T, MonitoringSessionFindFirstArgs<ExtArgs>>): Prisma__MonitoringSessionClient<$Result.GetResult<Prisma.$MonitoringSessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MonitoringSession that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonitoringSessionFindFirstOrThrowArgs} args - Arguments to find a MonitoringSession
     * @example
     * // Get one MonitoringSession
     * const monitoringSession = await prisma.monitoringSession.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MonitoringSessionFindFirstOrThrowArgs>(args?: SelectSubset<T, MonitoringSessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__MonitoringSessionClient<$Result.GetResult<Prisma.$MonitoringSessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MonitoringSessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonitoringSessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MonitoringSessions
     * const monitoringSessions = await prisma.monitoringSession.findMany()
     * 
     * // Get first 10 MonitoringSessions
     * const monitoringSessions = await prisma.monitoringSession.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const monitoringSessionWithIdOnly = await prisma.monitoringSession.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MonitoringSessionFindManyArgs>(args?: SelectSubset<T, MonitoringSessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MonitoringSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MonitoringSession.
     * @param {MonitoringSessionCreateArgs} args - Arguments to create a MonitoringSession.
     * @example
     * // Create one MonitoringSession
     * const MonitoringSession = await prisma.monitoringSession.create({
     *   data: {
     *     // ... data to create a MonitoringSession
     *   }
     * })
     * 
     */
    create<T extends MonitoringSessionCreateArgs>(args: SelectSubset<T, MonitoringSessionCreateArgs<ExtArgs>>): Prisma__MonitoringSessionClient<$Result.GetResult<Prisma.$MonitoringSessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MonitoringSessions.
     * @param {MonitoringSessionCreateManyArgs} args - Arguments to create many MonitoringSessions.
     * @example
     * // Create many MonitoringSessions
     * const monitoringSession = await prisma.monitoringSession.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MonitoringSessionCreateManyArgs>(args?: SelectSubset<T, MonitoringSessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MonitoringSessions and returns the data saved in the database.
     * @param {MonitoringSessionCreateManyAndReturnArgs} args - Arguments to create many MonitoringSessions.
     * @example
     * // Create many MonitoringSessions
     * const monitoringSession = await prisma.monitoringSession.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MonitoringSessions and only return the `id`
     * const monitoringSessionWithIdOnly = await prisma.monitoringSession.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MonitoringSessionCreateManyAndReturnArgs>(args?: SelectSubset<T, MonitoringSessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MonitoringSessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MonitoringSession.
     * @param {MonitoringSessionDeleteArgs} args - Arguments to delete one MonitoringSession.
     * @example
     * // Delete one MonitoringSession
     * const MonitoringSession = await prisma.monitoringSession.delete({
     *   where: {
     *     // ... filter to delete one MonitoringSession
     *   }
     * })
     * 
     */
    delete<T extends MonitoringSessionDeleteArgs>(args: SelectSubset<T, MonitoringSessionDeleteArgs<ExtArgs>>): Prisma__MonitoringSessionClient<$Result.GetResult<Prisma.$MonitoringSessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MonitoringSession.
     * @param {MonitoringSessionUpdateArgs} args - Arguments to update one MonitoringSession.
     * @example
     * // Update one MonitoringSession
     * const monitoringSession = await prisma.monitoringSession.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MonitoringSessionUpdateArgs>(args: SelectSubset<T, MonitoringSessionUpdateArgs<ExtArgs>>): Prisma__MonitoringSessionClient<$Result.GetResult<Prisma.$MonitoringSessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MonitoringSessions.
     * @param {MonitoringSessionDeleteManyArgs} args - Arguments to filter MonitoringSessions to delete.
     * @example
     * // Delete a few MonitoringSessions
     * const { count } = await prisma.monitoringSession.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MonitoringSessionDeleteManyArgs>(args?: SelectSubset<T, MonitoringSessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MonitoringSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonitoringSessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MonitoringSessions
     * const monitoringSession = await prisma.monitoringSession.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MonitoringSessionUpdateManyArgs>(args: SelectSubset<T, MonitoringSessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MonitoringSessions and returns the data updated in the database.
     * @param {MonitoringSessionUpdateManyAndReturnArgs} args - Arguments to update many MonitoringSessions.
     * @example
     * // Update many MonitoringSessions
     * const monitoringSession = await prisma.monitoringSession.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MonitoringSessions and only return the `id`
     * const monitoringSessionWithIdOnly = await prisma.monitoringSession.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MonitoringSessionUpdateManyAndReturnArgs>(args: SelectSubset<T, MonitoringSessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MonitoringSessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MonitoringSession.
     * @param {MonitoringSessionUpsertArgs} args - Arguments to update or create a MonitoringSession.
     * @example
     * // Update or create a MonitoringSession
     * const monitoringSession = await prisma.monitoringSession.upsert({
     *   create: {
     *     // ... data to create a MonitoringSession
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MonitoringSession we want to update
     *   }
     * })
     */
    upsert<T extends MonitoringSessionUpsertArgs>(args: SelectSubset<T, MonitoringSessionUpsertArgs<ExtArgs>>): Prisma__MonitoringSessionClient<$Result.GetResult<Prisma.$MonitoringSessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MonitoringSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonitoringSessionCountArgs} args - Arguments to filter MonitoringSessions to count.
     * @example
     * // Count the number of MonitoringSessions
     * const count = await prisma.monitoringSession.count({
     *   where: {
     *     // ... the filter for the MonitoringSessions we want to count
     *   }
     * })
    **/
    count<T extends MonitoringSessionCountArgs>(
      args?: Subset<T, MonitoringSessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MonitoringSessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MonitoringSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonitoringSessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MonitoringSessionAggregateArgs>(args: Subset<T, MonitoringSessionAggregateArgs>): Prisma.PrismaPromise<GetMonitoringSessionAggregateType<T>>

    /**
     * Group by MonitoringSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonitoringSessionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MonitoringSessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MonitoringSessionGroupByArgs['orderBy'] }
        : { orderBy?: MonitoringSessionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MonitoringSessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMonitoringSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MonitoringSession model
   */
  readonly fields: MonitoringSessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MonitoringSession.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MonitoringSessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    broadcaster<T extends BroadcasterDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BroadcasterDefaultArgs<ExtArgs>>): Prisma__BroadcasterClient<$Result.GetResult<Prisma.$BroadcasterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    detections<T extends MonitoringSession$detectionsArgs<ExtArgs> = {}>(args?: Subset<T, MonitoringSession$detectionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DetectionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MonitoringSession model
   */
  interface MonitoringSessionFieldRefs {
    readonly id: FieldRef<"MonitoringSession", 'String'>
    readonly broadcasterId: FieldRef<"MonitoringSession", 'String'>
    readonly startedAt: FieldRef<"MonitoringSession", 'DateTime'>
    readonly endedAt: FieldRef<"MonitoringSession", 'DateTime'>
    readonly status: FieldRef<"MonitoringSession", 'Status'>
    readonly createdAt: FieldRef<"MonitoringSession", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MonitoringSession findUnique
   */
  export type MonitoringSessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonitoringSession
     */
    select?: MonitoringSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MonitoringSession
     */
    omit?: MonitoringSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonitoringSessionInclude<ExtArgs> | null
    /**
     * Filter, which MonitoringSession to fetch.
     */
    where: MonitoringSessionWhereUniqueInput
  }

  /**
   * MonitoringSession findUniqueOrThrow
   */
  export type MonitoringSessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonitoringSession
     */
    select?: MonitoringSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MonitoringSession
     */
    omit?: MonitoringSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonitoringSessionInclude<ExtArgs> | null
    /**
     * Filter, which MonitoringSession to fetch.
     */
    where: MonitoringSessionWhereUniqueInput
  }

  /**
   * MonitoringSession findFirst
   */
  export type MonitoringSessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonitoringSession
     */
    select?: MonitoringSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MonitoringSession
     */
    omit?: MonitoringSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonitoringSessionInclude<ExtArgs> | null
    /**
     * Filter, which MonitoringSession to fetch.
     */
    where?: MonitoringSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MonitoringSessions to fetch.
     */
    orderBy?: MonitoringSessionOrderByWithRelationInput | MonitoringSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MonitoringSessions.
     */
    cursor?: MonitoringSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MonitoringSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MonitoringSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MonitoringSessions.
     */
    distinct?: MonitoringSessionScalarFieldEnum | MonitoringSessionScalarFieldEnum[]
  }

  /**
   * MonitoringSession findFirstOrThrow
   */
  export type MonitoringSessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonitoringSession
     */
    select?: MonitoringSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MonitoringSession
     */
    omit?: MonitoringSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonitoringSessionInclude<ExtArgs> | null
    /**
     * Filter, which MonitoringSession to fetch.
     */
    where?: MonitoringSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MonitoringSessions to fetch.
     */
    orderBy?: MonitoringSessionOrderByWithRelationInput | MonitoringSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MonitoringSessions.
     */
    cursor?: MonitoringSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MonitoringSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MonitoringSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MonitoringSessions.
     */
    distinct?: MonitoringSessionScalarFieldEnum | MonitoringSessionScalarFieldEnum[]
  }

  /**
   * MonitoringSession findMany
   */
  export type MonitoringSessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonitoringSession
     */
    select?: MonitoringSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MonitoringSession
     */
    omit?: MonitoringSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonitoringSessionInclude<ExtArgs> | null
    /**
     * Filter, which MonitoringSessions to fetch.
     */
    where?: MonitoringSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MonitoringSessions to fetch.
     */
    orderBy?: MonitoringSessionOrderByWithRelationInput | MonitoringSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MonitoringSessions.
     */
    cursor?: MonitoringSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MonitoringSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MonitoringSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MonitoringSessions.
     */
    distinct?: MonitoringSessionScalarFieldEnum | MonitoringSessionScalarFieldEnum[]
  }

  /**
   * MonitoringSession create
   */
  export type MonitoringSessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonitoringSession
     */
    select?: MonitoringSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MonitoringSession
     */
    omit?: MonitoringSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonitoringSessionInclude<ExtArgs> | null
    /**
     * The data needed to create a MonitoringSession.
     */
    data: XOR<MonitoringSessionCreateInput, MonitoringSessionUncheckedCreateInput>
  }

  /**
   * MonitoringSession createMany
   */
  export type MonitoringSessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MonitoringSessions.
     */
    data: MonitoringSessionCreateManyInput | MonitoringSessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MonitoringSession createManyAndReturn
   */
  export type MonitoringSessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonitoringSession
     */
    select?: MonitoringSessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MonitoringSession
     */
    omit?: MonitoringSessionOmit<ExtArgs> | null
    /**
     * The data used to create many MonitoringSessions.
     */
    data: MonitoringSessionCreateManyInput | MonitoringSessionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonitoringSessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MonitoringSession update
   */
  export type MonitoringSessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonitoringSession
     */
    select?: MonitoringSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MonitoringSession
     */
    omit?: MonitoringSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonitoringSessionInclude<ExtArgs> | null
    /**
     * The data needed to update a MonitoringSession.
     */
    data: XOR<MonitoringSessionUpdateInput, MonitoringSessionUncheckedUpdateInput>
    /**
     * Choose, which MonitoringSession to update.
     */
    where: MonitoringSessionWhereUniqueInput
  }

  /**
   * MonitoringSession updateMany
   */
  export type MonitoringSessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MonitoringSessions.
     */
    data: XOR<MonitoringSessionUpdateManyMutationInput, MonitoringSessionUncheckedUpdateManyInput>
    /**
     * Filter which MonitoringSessions to update
     */
    where?: MonitoringSessionWhereInput
    /**
     * Limit how many MonitoringSessions to update.
     */
    limit?: number
  }

  /**
   * MonitoringSession updateManyAndReturn
   */
  export type MonitoringSessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonitoringSession
     */
    select?: MonitoringSessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MonitoringSession
     */
    omit?: MonitoringSessionOmit<ExtArgs> | null
    /**
     * The data used to update MonitoringSessions.
     */
    data: XOR<MonitoringSessionUpdateManyMutationInput, MonitoringSessionUncheckedUpdateManyInput>
    /**
     * Filter which MonitoringSessions to update
     */
    where?: MonitoringSessionWhereInput
    /**
     * Limit how many MonitoringSessions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonitoringSessionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MonitoringSession upsert
   */
  export type MonitoringSessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonitoringSession
     */
    select?: MonitoringSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MonitoringSession
     */
    omit?: MonitoringSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonitoringSessionInclude<ExtArgs> | null
    /**
     * The filter to search for the MonitoringSession to update in case it exists.
     */
    where: MonitoringSessionWhereUniqueInput
    /**
     * In case the MonitoringSession found by the `where` argument doesn't exist, create a new MonitoringSession with this data.
     */
    create: XOR<MonitoringSessionCreateInput, MonitoringSessionUncheckedCreateInput>
    /**
     * In case the MonitoringSession was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MonitoringSessionUpdateInput, MonitoringSessionUncheckedUpdateInput>
  }

  /**
   * MonitoringSession delete
   */
  export type MonitoringSessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonitoringSession
     */
    select?: MonitoringSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MonitoringSession
     */
    omit?: MonitoringSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonitoringSessionInclude<ExtArgs> | null
    /**
     * Filter which MonitoringSession to delete.
     */
    where: MonitoringSessionWhereUniqueInput
  }

  /**
   * MonitoringSession deleteMany
   */
  export type MonitoringSessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MonitoringSessions to delete
     */
    where?: MonitoringSessionWhereInput
    /**
     * Limit how many MonitoringSessions to delete.
     */
    limit?: number
  }

  /**
   * MonitoringSession.detections
   */
  export type MonitoringSession$detectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Detection
     */
    select?: DetectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Detection
     */
    omit?: DetectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetectionInclude<ExtArgs> | null
    where?: DetectionWhereInput
    orderBy?: DetectionOrderByWithRelationInput | DetectionOrderByWithRelationInput[]
    cursor?: DetectionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DetectionScalarFieldEnum | DetectionScalarFieldEnum[]
  }

  /**
   * MonitoringSession without action
   */
  export type MonitoringSessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonitoringSession
     */
    select?: MonitoringSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MonitoringSession
     */
    omit?: MonitoringSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonitoringSessionInclude<ExtArgs> | null
  }


  /**
   * Model Detection
   */

  export type AggregateDetection = {
    _count: DetectionCountAggregateOutputType | null
    _avg: DetectionAvgAggregateOutputType | null
    _sum: DetectionSumAggregateOutputType | null
    _min: DetectionMinAggregateOutputType | null
    _max: DetectionMaxAggregateOutputType | null
  }

  export type DetectionAvgAggregateOutputType = {
    confidence: number | null
    startOffset: number | null
    endOffset: number | null
    duration: number | null
  }

  export type DetectionSumAggregateOutputType = {
    confidence: number | null
    startOffset: number | null
    endOffset: number | null
    duration: number | null
  }

  export type DetectionMinAggregateOutputType = {
    id: string | null
    assetId: string | null
    broadcasterId: string | null
    sessionId: string | null
    broadcastAt: Date | null
    detectedAt: Date | null
    confidence: number | null
    startOffset: number | null
    endOffset: number | null
    duration: number | null
    engineVersion: string | null
    status: $Enums.DetectionStatus | null
    createdAt: Date | null
  }

  export type DetectionMaxAggregateOutputType = {
    id: string | null
    assetId: string | null
    broadcasterId: string | null
    sessionId: string | null
    broadcastAt: Date | null
    detectedAt: Date | null
    confidence: number | null
    startOffset: number | null
    endOffset: number | null
    duration: number | null
    engineVersion: string | null
    status: $Enums.DetectionStatus | null
    createdAt: Date | null
  }

  export type DetectionCountAggregateOutputType = {
    id: number
    assetId: number
    broadcasterId: number
    sessionId: number
    broadcastAt: number
    detectedAt: number
    confidence: number
    startOffset: number
    endOffset: number
    duration: number
    engineVersion: number
    status: number
    createdAt: number
    _all: number
  }


  export type DetectionAvgAggregateInputType = {
    confidence?: true
    startOffset?: true
    endOffset?: true
    duration?: true
  }

  export type DetectionSumAggregateInputType = {
    confidence?: true
    startOffset?: true
    endOffset?: true
    duration?: true
  }

  export type DetectionMinAggregateInputType = {
    id?: true
    assetId?: true
    broadcasterId?: true
    sessionId?: true
    broadcastAt?: true
    detectedAt?: true
    confidence?: true
    startOffset?: true
    endOffset?: true
    duration?: true
    engineVersion?: true
    status?: true
    createdAt?: true
  }

  export type DetectionMaxAggregateInputType = {
    id?: true
    assetId?: true
    broadcasterId?: true
    sessionId?: true
    broadcastAt?: true
    detectedAt?: true
    confidence?: true
    startOffset?: true
    endOffset?: true
    duration?: true
    engineVersion?: true
    status?: true
    createdAt?: true
  }

  export type DetectionCountAggregateInputType = {
    id?: true
    assetId?: true
    broadcasterId?: true
    sessionId?: true
    broadcastAt?: true
    detectedAt?: true
    confidence?: true
    startOffset?: true
    endOffset?: true
    duration?: true
    engineVersion?: true
    status?: true
    createdAt?: true
    _all?: true
  }

  export type DetectionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Detection to aggregate.
     */
    where?: DetectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Detections to fetch.
     */
    orderBy?: DetectionOrderByWithRelationInput | DetectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DetectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Detections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Detections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Detections
    **/
    _count?: true | DetectionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DetectionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DetectionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DetectionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DetectionMaxAggregateInputType
  }

  export type GetDetectionAggregateType<T extends DetectionAggregateArgs> = {
        [P in keyof T & keyof AggregateDetection]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDetection[P]>
      : GetScalarType<T[P], AggregateDetection[P]>
  }




  export type DetectionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DetectionWhereInput
    orderBy?: DetectionOrderByWithAggregationInput | DetectionOrderByWithAggregationInput[]
    by: DetectionScalarFieldEnum[] | DetectionScalarFieldEnum
    having?: DetectionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DetectionCountAggregateInputType | true
    _avg?: DetectionAvgAggregateInputType
    _sum?: DetectionSumAggregateInputType
    _min?: DetectionMinAggregateInputType
    _max?: DetectionMaxAggregateInputType
  }

  export type DetectionGroupByOutputType = {
    id: string
    assetId: string
    broadcasterId: string
    sessionId: string | null
    broadcastAt: Date
    detectedAt: Date
    confidence: number
    startOffset: number | null
    endOffset: number | null
    duration: number | null
    engineVersion: string
    status: $Enums.DetectionStatus
    createdAt: Date
    _count: DetectionCountAggregateOutputType | null
    _avg: DetectionAvgAggregateOutputType | null
    _sum: DetectionSumAggregateOutputType | null
    _min: DetectionMinAggregateOutputType | null
    _max: DetectionMaxAggregateOutputType | null
  }

  type GetDetectionGroupByPayload<T extends DetectionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DetectionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DetectionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DetectionGroupByOutputType[P]>
            : GetScalarType<T[P], DetectionGroupByOutputType[P]>
        }
      >
    >


  export type DetectionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    assetId?: boolean
    broadcasterId?: boolean
    sessionId?: boolean
    broadcastAt?: boolean
    detectedAt?: boolean
    confidence?: boolean
    startOffset?: boolean
    endOffset?: boolean
    duration?: boolean
    engineVersion?: boolean
    status?: boolean
    createdAt?: boolean
    asset?: boolean | AssetDefaultArgs<ExtArgs>
    broadcaster?: boolean | BroadcasterDefaultArgs<ExtArgs>
    session?: boolean | Detection$sessionArgs<ExtArgs>
  }, ExtArgs["result"]["detection"]>

  export type DetectionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    assetId?: boolean
    broadcasterId?: boolean
    sessionId?: boolean
    broadcastAt?: boolean
    detectedAt?: boolean
    confidence?: boolean
    startOffset?: boolean
    endOffset?: boolean
    duration?: boolean
    engineVersion?: boolean
    status?: boolean
    createdAt?: boolean
    asset?: boolean | AssetDefaultArgs<ExtArgs>
    broadcaster?: boolean | BroadcasterDefaultArgs<ExtArgs>
    session?: boolean | Detection$sessionArgs<ExtArgs>
  }, ExtArgs["result"]["detection"]>

  export type DetectionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    assetId?: boolean
    broadcasterId?: boolean
    sessionId?: boolean
    broadcastAt?: boolean
    detectedAt?: boolean
    confidence?: boolean
    startOffset?: boolean
    endOffset?: boolean
    duration?: boolean
    engineVersion?: boolean
    status?: boolean
    createdAt?: boolean
    asset?: boolean | AssetDefaultArgs<ExtArgs>
    broadcaster?: boolean | BroadcasterDefaultArgs<ExtArgs>
    session?: boolean | Detection$sessionArgs<ExtArgs>
  }, ExtArgs["result"]["detection"]>

  export type DetectionSelectScalar = {
    id?: boolean
    assetId?: boolean
    broadcasterId?: boolean
    sessionId?: boolean
    broadcastAt?: boolean
    detectedAt?: boolean
    confidence?: boolean
    startOffset?: boolean
    endOffset?: boolean
    duration?: boolean
    engineVersion?: boolean
    status?: boolean
    createdAt?: boolean
  }

  export type DetectionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "assetId" | "broadcasterId" | "sessionId" | "broadcastAt" | "detectedAt" | "confidence" | "startOffset" | "endOffset" | "duration" | "engineVersion" | "status" | "createdAt", ExtArgs["result"]["detection"]>
  export type DetectionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    asset?: boolean | AssetDefaultArgs<ExtArgs>
    broadcaster?: boolean | BroadcasterDefaultArgs<ExtArgs>
    session?: boolean | Detection$sessionArgs<ExtArgs>
  }
  export type DetectionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    asset?: boolean | AssetDefaultArgs<ExtArgs>
    broadcaster?: boolean | BroadcasterDefaultArgs<ExtArgs>
    session?: boolean | Detection$sessionArgs<ExtArgs>
  }
  export type DetectionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    asset?: boolean | AssetDefaultArgs<ExtArgs>
    broadcaster?: boolean | BroadcasterDefaultArgs<ExtArgs>
    session?: boolean | Detection$sessionArgs<ExtArgs>
  }

  export type $DetectionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Detection"
    objects: {
      asset: Prisma.$AssetPayload<ExtArgs>
      broadcaster: Prisma.$BroadcasterPayload<ExtArgs>
      session: Prisma.$MonitoringSessionPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      assetId: string
      broadcasterId: string
      sessionId: string | null
      broadcastAt: Date
      detectedAt: Date
      confidence: number
      startOffset: number | null
      endOffset: number | null
      duration: number | null
      engineVersion: string
      status: $Enums.DetectionStatus
      createdAt: Date
    }, ExtArgs["result"]["detection"]>
    composites: {}
  }

  type DetectionGetPayload<S extends boolean | null | undefined | DetectionDefaultArgs> = $Result.GetResult<Prisma.$DetectionPayload, S>

  type DetectionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DetectionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DetectionCountAggregateInputType | true
    }

  export interface DetectionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Detection'], meta: { name: 'Detection' } }
    /**
     * Find zero or one Detection that matches the filter.
     * @param {DetectionFindUniqueArgs} args - Arguments to find a Detection
     * @example
     * // Get one Detection
     * const detection = await prisma.detection.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DetectionFindUniqueArgs>(args: SelectSubset<T, DetectionFindUniqueArgs<ExtArgs>>): Prisma__DetectionClient<$Result.GetResult<Prisma.$DetectionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Detection that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DetectionFindUniqueOrThrowArgs} args - Arguments to find a Detection
     * @example
     * // Get one Detection
     * const detection = await prisma.detection.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DetectionFindUniqueOrThrowArgs>(args: SelectSubset<T, DetectionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DetectionClient<$Result.GetResult<Prisma.$DetectionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Detection that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetectionFindFirstArgs} args - Arguments to find a Detection
     * @example
     * // Get one Detection
     * const detection = await prisma.detection.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DetectionFindFirstArgs>(args?: SelectSubset<T, DetectionFindFirstArgs<ExtArgs>>): Prisma__DetectionClient<$Result.GetResult<Prisma.$DetectionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Detection that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetectionFindFirstOrThrowArgs} args - Arguments to find a Detection
     * @example
     * // Get one Detection
     * const detection = await prisma.detection.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DetectionFindFirstOrThrowArgs>(args?: SelectSubset<T, DetectionFindFirstOrThrowArgs<ExtArgs>>): Prisma__DetectionClient<$Result.GetResult<Prisma.$DetectionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Detections that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetectionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Detections
     * const detections = await prisma.detection.findMany()
     * 
     * // Get first 10 Detections
     * const detections = await prisma.detection.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const detectionWithIdOnly = await prisma.detection.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DetectionFindManyArgs>(args?: SelectSubset<T, DetectionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DetectionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Detection.
     * @param {DetectionCreateArgs} args - Arguments to create a Detection.
     * @example
     * // Create one Detection
     * const Detection = await prisma.detection.create({
     *   data: {
     *     // ... data to create a Detection
     *   }
     * })
     * 
     */
    create<T extends DetectionCreateArgs>(args: SelectSubset<T, DetectionCreateArgs<ExtArgs>>): Prisma__DetectionClient<$Result.GetResult<Prisma.$DetectionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Detections.
     * @param {DetectionCreateManyArgs} args - Arguments to create many Detections.
     * @example
     * // Create many Detections
     * const detection = await prisma.detection.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DetectionCreateManyArgs>(args?: SelectSubset<T, DetectionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Detections and returns the data saved in the database.
     * @param {DetectionCreateManyAndReturnArgs} args - Arguments to create many Detections.
     * @example
     * // Create many Detections
     * const detection = await prisma.detection.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Detections and only return the `id`
     * const detectionWithIdOnly = await prisma.detection.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DetectionCreateManyAndReturnArgs>(args?: SelectSubset<T, DetectionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DetectionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Detection.
     * @param {DetectionDeleteArgs} args - Arguments to delete one Detection.
     * @example
     * // Delete one Detection
     * const Detection = await prisma.detection.delete({
     *   where: {
     *     // ... filter to delete one Detection
     *   }
     * })
     * 
     */
    delete<T extends DetectionDeleteArgs>(args: SelectSubset<T, DetectionDeleteArgs<ExtArgs>>): Prisma__DetectionClient<$Result.GetResult<Prisma.$DetectionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Detection.
     * @param {DetectionUpdateArgs} args - Arguments to update one Detection.
     * @example
     * // Update one Detection
     * const detection = await prisma.detection.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DetectionUpdateArgs>(args: SelectSubset<T, DetectionUpdateArgs<ExtArgs>>): Prisma__DetectionClient<$Result.GetResult<Prisma.$DetectionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Detections.
     * @param {DetectionDeleteManyArgs} args - Arguments to filter Detections to delete.
     * @example
     * // Delete a few Detections
     * const { count } = await prisma.detection.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DetectionDeleteManyArgs>(args?: SelectSubset<T, DetectionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Detections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetectionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Detections
     * const detection = await prisma.detection.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DetectionUpdateManyArgs>(args: SelectSubset<T, DetectionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Detections and returns the data updated in the database.
     * @param {DetectionUpdateManyAndReturnArgs} args - Arguments to update many Detections.
     * @example
     * // Update many Detections
     * const detection = await prisma.detection.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Detections and only return the `id`
     * const detectionWithIdOnly = await prisma.detection.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DetectionUpdateManyAndReturnArgs>(args: SelectSubset<T, DetectionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DetectionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Detection.
     * @param {DetectionUpsertArgs} args - Arguments to update or create a Detection.
     * @example
     * // Update or create a Detection
     * const detection = await prisma.detection.upsert({
     *   create: {
     *     // ... data to create a Detection
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Detection we want to update
     *   }
     * })
     */
    upsert<T extends DetectionUpsertArgs>(args: SelectSubset<T, DetectionUpsertArgs<ExtArgs>>): Prisma__DetectionClient<$Result.GetResult<Prisma.$DetectionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Detections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetectionCountArgs} args - Arguments to filter Detections to count.
     * @example
     * // Count the number of Detections
     * const count = await prisma.detection.count({
     *   where: {
     *     // ... the filter for the Detections we want to count
     *   }
     * })
    **/
    count<T extends DetectionCountArgs>(
      args?: Subset<T, DetectionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DetectionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Detection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetectionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DetectionAggregateArgs>(args: Subset<T, DetectionAggregateArgs>): Prisma.PrismaPromise<GetDetectionAggregateType<T>>

    /**
     * Group by Detection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetectionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DetectionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DetectionGroupByArgs['orderBy'] }
        : { orderBy?: DetectionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DetectionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDetectionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Detection model
   */
  readonly fields: DetectionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Detection.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DetectionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    asset<T extends AssetDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AssetDefaultArgs<ExtArgs>>): Prisma__AssetClient<$Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    broadcaster<T extends BroadcasterDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BroadcasterDefaultArgs<ExtArgs>>): Prisma__BroadcasterClient<$Result.GetResult<Prisma.$BroadcasterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    session<T extends Detection$sessionArgs<ExtArgs> = {}>(args?: Subset<T, Detection$sessionArgs<ExtArgs>>): Prisma__MonitoringSessionClient<$Result.GetResult<Prisma.$MonitoringSessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Detection model
   */
  interface DetectionFieldRefs {
    readonly id: FieldRef<"Detection", 'String'>
    readonly assetId: FieldRef<"Detection", 'String'>
    readonly broadcasterId: FieldRef<"Detection", 'String'>
    readonly sessionId: FieldRef<"Detection", 'String'>
    readonly broadcastAt: FieldRef<"Detection", 'DateTime'>
    readonly detectedAt: FieldRef<"Detection", 'DateTime'>
    readonly confidence: FieldRef<"Detection", 'Float'>
    readonly startOffset: FieldRef<"Detection", 'Float'>
    readonly endOffset: FieldRef<"Detection", 'Float'>
    readonly duration: FieldRef<"Detection", 'Float'>
    readonly engineVersion: FieldRef<"Detection", 'String'>
    readonly status: FieldRef<"Detection", 'DetectionStatus'>
    readonly createdAt: FieldRef<"Detection", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Detection findUnique
   */
  export type DetectionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Detection
     */
    select?: DetectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Detection
     */
    omit?: DetectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetectionInclude<ExtArgs> | null
    /**
     * Filter, which Detection to fetch.
     */
    where: DetectionWhereUniqueInput
  }

  /**
   * Detection findUniqueOrThrow
   */
  export type DetectionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Detection
     */
    select?: DetectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Detection
     */
    omit?: DetectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetectionInclude<ExtArgs> | null
    /**
     * Filter, which Detection to fetch.
     */
    where: DetectionWhereUniqueInput
  }

  /**
   * Detection findFirst
   */
  export type DetectionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Detection
     */
    select?: DetectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Detection
     */
    omit?: DetectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetectionInclude<ExtArgs> | null
    /**
     * Filter, which Detection to fetch.
     */
    where?: DetectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Detections to fetch.
     */
    orderBy?: DetectionOrderByWithRelationInput | DetectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Detections.
     */
    cursor?: DetectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Detections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Detections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Detections.
     */
    distinct?: DetectionScalarFieldEnum | DetectionScalarFieldEnum[]
  }

  /**
   * Detection findFirstOrThrow
   */
  export type DetectionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Detection
     */
    select?: DetectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Detection
     */
    omit?: DetectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetectionInclude<ExtArgs> | null
    /**
     * Filter, which Detection to fetch.
     */
    where?: DetectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Detections to fetch.
     */
    orderBy?: DetectionOrderByWithRelationInput | DetectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Detections.
     */
    cursor?: DetectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Detections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Detections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Detections.
     */
    distinct?: DetectionScalarFieldEnum | DetectionScalarFieldEnum[]
  }

  /**
   * Detection findMany
   */
  export type DetectionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Detection
     */
    select?: DetectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Detection
     */
    omit?: DetectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetectionInclude<ExtArgs> | null
    /**
     * Filter, which Detections to fetch.
     */
    where?: DetectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Detections to fetch.
     */
    orderBy?: DetectionOrderByWithRelationInput | DetectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Detections.
     */
    cursor?: DetectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Detections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Detections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Detections.
     */
    distinct?: DetectionScalarFieldEnum | DetectionScalarFieldEnum[]
  }

  /**
   * Detection create
   */
  export type DetectionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Detection
     */
    select?: DetectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Detection
     */
    omit?: DetectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetectionInclude<ExtArgs> | null
    /**
     * The data needed to create a Detection.
     */
    data: XOR<DetectionCreateInput, DetectionUncheckedCreateInput>
  }

  /**
   * Detection createMany
   */
  export type DetectionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Detections.
     */
    data: DetectionCreateManyInput | DetectionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Detection createManyAndReturn
   */
  export type DetectionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Detection
     */
    select?: DetectionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Detection
     */
    omit?: DetectionOmit<ExtArgs> | null
    /**
     * The data used to create many Detections.
     */
    data: DetectionCreateManyInput | DetectionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetectionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Detection update
   */
  export type DetectionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Detection
     */
    select?: DetectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Detection
     */
    omit?: DetectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetectionInclude<ExtArgs> | null
    /**
     * The data needed to update a Detection.
     */
    data: XOR<DetectionUpdateInput, DetectionUncheckedUpdateInput>
    /**
     * Choose, which Detection to update.
     */
    where: DetectionWhereUniqueInput
  }

  /**
   * Detection updateMany
   */
  export type DetectionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Detections.
     */
    data: XOR<DetectionUpdateManyMutationInput, DetectionUncheckedUpdateManyInput>
    /**
     * Filter which Detections to update
     */
    where?: DetectionWhereInput
    /**
     * Limit how many Detections to update.
     */
    limit?: number
  }

  /**
   * Detection updateManyAndReturn
   */
  export type DetectionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Detection
     */
    select?: DetectionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Detection
     */
    omit?: DetectionOmit<ExtArgs> | null
    /**
     * The data used to update Detections.
     */
    data: XOR<DetectionUpdateManyMutationInput, DetectionUncheckedUpdateManyInput>
    /**
     * Filter which Detections to update
     */
    where?: DetectionWhereInput
    /**
     * Limit how many Detections to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetectionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Detection upsert
   */
  export type DetectionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Detection
     */
    select?: DetectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Detection
     */
    omit?: DetectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetectionInclude<ExtArgs> | null
    /**
     * The filter to search for the Detection to update in case it exists.
     */
    where: DetectionWhereUniqueInput
    /**
     * In case the Detection found by the `where` argument doesn't exist, create a new Detection with this data.
     */
    create: XOR<DetectionCreateInput, DetectionUncheckedCreateInput>
    /**
     * In case the Detection was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DetectionUpdateInput, DetectionUncheckedUpdateInput>
  }

  /**
   * Detection delete
   */
  export type DetectionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Detection
     */
    select?: DetectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Detection
     */
    omit?: DetectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetectionInclude<ExtArgs> | null
    /**
     * Filter which Detection to delete.
     */
    where: DetectionWhereUniqueInput
  }

  /**
   * Detection deleteMany
   */
  export type DetectionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Detections to delete
     */
    where?: DetectionWhereInput
    /**
     * Limit how many Detections to delete.
     */
    limit?: number
  }

  /**
   * Detection.session
   */
  export type Detection$sessionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonitoringSession
     */
    select?: MonitoringSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MonitoringSession
     */
    omit?: MonitoringSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonitoringSessionInclude<ExtArgs> | null
    where?: MonitoringSessionWhereInput
  }

  /**
   * Detection without action
   */
  export type DetectionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Detection
     */
    select?: DetectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Detection
     */
    omit?: DetectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetectionInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    phone: 'phone',
    email: 'email',
    passwordHash: 'passwordHash',
    voiceSign: 'voiceSign',
    role: 'role',
    image: 'image',
    resetToken: 'resetToken',
    resetTokenExpiry: 'resetTokenExpiry',
    apiKeyHash: 'apiKeyHash',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const AssetScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    artist: 'artist',
    album: 'album',
    isrc: 'isrc',
    filename: 'filename',
    file: 'file',
    image: 'image',
    type: 'type',
    status: 'status',
    duration: 'duration',
    sampleRate: 'sampleRate',
    bitRate: 'bitRate',
    channels: 'channels',
    fileSize: 'fileSize',
    checksum: 'checksum',
    ownerId: 'ownerId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AssetScalarFieldEnum = (typeof AssetScalarFieldEnum)[keyof typeof AssetScalarFieldEnum]


  export const AudioFingerprintScalarFieldEnum: {
    id: 'id',
    algorithm: 'algorithm',
    version: 'version',
    generatedAt: 'generatedAt',
    assetId: 'assetId'
  };

  export type AudioFingerprintScalarFieldEnum = (typeof AudioFingerprintScalarFieldEnum)[keyof typeof AudioFingerprintScalarFieldEnum]


  export const FingerprintHashScalarFieldEnum: {
    id: 'id',
    hash: 'hash',
    offsetMs: 'offsetMs',
    audioFingerprintId: 'audioFingerprintId',
    assetId: 'assetId'
  };

  export type FingerprintHashScalarFieldEnum = (typeof FingerprintHashScalarFieldEnum)[keyof typeof FingerprintHashScalarFieldEnum]


  export const WatermarkScalarFieldEnum: {
    id: 'id',
    algorithm: 'algorithm',
    payload: 'payload',
    embeddedAt: 'embeddedAt',
    assetId: 'assetId'
  };

  export type WatermarkScalarFieldEnum = (typeof WatermarkScalarFieldEnum)[keyof typeof WatermarkScalarFieldEnum]


  export const BroadcasterScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    website: 'website',
    streamUrl: 'streamUrl',
    country: 'country',
    frequency: 'frequency',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BroadcasterScalarFieldEnum = (typeof BroadcasterScalarFieldEnum)[keyof typeof BroadcasterScalarFieldEnum]


  export const MonitoringSessionScalarFieldEnum: {
    id: 'id',
    broadcasterId: 'broadcasterId',
    startedAt: 'startedAt',
    endedAt: 'endedAt',
    status: 'status',
    createdAt: 'createdAt'
  };

  export type MonitoringSessionScalarFieldEnum = (typeof MonitoringSessionScalarFieldEnum)[keyof typeof MonitoringSessionScalarFieldEnum]


  export const DetectionScalarFieldEnum: {
    id: 'id',
    assetId: 'assetId',
    broadcasterId: 'broadcasterId',
    sessionId: 'sessionId',
    broadcastAt: 'broadcastAt',
    detectedAt: 'detectedAt',
    confidence: 'confidence',
    startOffset: 'startOffset',
    endOffset: 'endOffset',
    duration: 'duration',
    engineVersion: 'engineVersion',
    status: 'status',
    createdAt: 'createdAt'
  };

  export type DetectionScalarFieldEnum = (typeof DetectionScalarFieldEnum)[keyof typeof DetectionScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'UserRole'
   */
  export type EnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole'>
    


  /**
   * Reference to a field of type 'UserRole[]'
   */
  export type ListEnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Status'
   */
  export type EnumStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Status'>
    


  /**
   * Reference to a field of type 'Status[]'
   */
  export type ListEnumStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Status[]'>
    


  /**
   * Reference to a field of type 'AssetType'
   */
  export type EnumAssetTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AssetType'>
    


  /**
   * Reference to a field of type 'AssetType[]'
   */
  export type ListEnumAssetTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AssetType[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'BigInt[]'
   */
  export type ListBigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt[]'>
    


  /**
   * Reference to a field of type 'DetectionStatus'
   */
  export type EnumDetectionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DetectionStatus'>
    


  /**
   * Reference to a field of type 'DetectionStatus[]'
   */
  export type ListEnumDetectionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DetectionStatus[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: UuidFilter<"User"> | string
    name?: StringFilter<"User"> | string
    phone?: StringNullableFilter<"User"> | string | null
    email?: StringNullableFilter<"User"> | string | null
    passwordHash?: StringNullableFilter<"User"> | string | null
    voiceSign?: StringNullableFilter<"User"> | string | null
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    image?: StringNullableFilter<"User"> | string | null
    resetToken?: StringNullableFilter<"User"> | string | null
    resetTokenExpiry?: DateTimeNullableFilter<"User"> | Date | string | null
    apiKeyHash?: StringNullableFilter<"User"> | string | null
    status?: EnumStatusFilter<"User"> | $Enums.Status
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    assets?: AssetListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    passwordHash?: SortOrderInput | SortOrder
    voiceSign?: SortOrderInput | SortOrder
    role?: SortOrder
    image?: SortOrderInput | SortOrder
    resetToken?: SortOrderInput | SortOrder
    resetTokenExpiry?: SortOrderInput | SortOrder
    apiKeyHash?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    assets?: AssetOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    phone?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    passwordHash?: StringNullableFilter<"User"> | string | null
    voiceSign?: StringNullableFilter<"User"> | string | null
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    image?: StringNullableFilter<"User"> | string | null
    resetToken?: StringNullableFilter<"User"> | string | null
    resetTokenExpiry?: DateTimeNullableFilter<"User"> | Date | string | null
    apiKeyHash?: StringNullableFilter<"User"> | string | null
    status?: EnumStatusFilter<"User"> | $Enums.Status
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    assets?: AssetListRelationFilter
  }, "id" | "phone" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    passwordHash?: SortOrderInput | SortOrder
    voiceSign?: SortOrderInput | SortOrder
    role?: SortOrder
    image?: SortOrderInput | SortOrder
    resetToken?: SortOrderInput | SortOrder
    resetTokenExpiry?: SortOrderInput | SortOrder
    apiKeyHash?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    phone?: StringNullableWithAggregatesFilter<"User"> | string | null
    email?: StringNullableWithAggregatesFilter<"User"> | string | null
    passwordHash?: StringNullableWithAggregatesFilter<"User"> | string | null
    voiceSign?: StringNullableWithAggregatesFilter<"User"> | string | null
    role?: EnumUserRoleWithAggregatesFilter<"User"> | $Enums.UserRole
    image?: StringNullableWithAggregatesFilter<"User"> | string | null
    resetToken?: StringNullableWithAggregatesFilter<"User"> | string | null
    resetTokenExpiry?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    apiKeyHash?: StringNullableWithAggregatesFilter<"User"> | string | null
    status?: EnumStatusWithAggregatesFilter<"User"> | $Enums.Status
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type AssetWhereInput = {
    AND?: AssetWhereInput | AssetWhereInput[]
    OR?: AssetWhereInput[]
    NOT?: AssetWhereInput | AssetWhereInput[]
    id?: UuidFilter<"Asset"> | string
    title?: StringFilter<"Asset"> | string
    description?: StringNullableFilter<"Asset"> | string | null
    artist?: StringNullableFilter<"Asset"> | string | null
    album?: StringNullableFilter<"Asset"> | string | null
    isrc?: StringNullableFilter<"Asset"> | string | null
    filename?: StringNullableFilter<"Asset"> | string | null
    file?: StringNullableFilter<"Asset"> | string | null
    image?: StringNullableFilter<"Asset"> | string | null
    type?: EnumAssetTypeFilter<"Asset"> | $Enums.AssetType
    status?: EnumStatusFilter<"Asset"> | $Enums.Status
    duration?: FloatNullableFilter<"Asset"> | number | null
    sampleRate?: IntNullableFilter<"Asset"> | number | null
    bitRate?: IntNullableFilter<"Asset"> | number | null
    channels?: IntNullableFilter<"Asset"> | number | null
    fileSize?: IntNullableFilter<"Asset"> | number | null
    checksum?: StringNullableFilter<"Asset"> | string | null
    ownerId?: UuidFilter<"Asset"> | string
    createdAt?: DateTimeFilter<"Asset"> | Date | string
    updatedAt?: DateTimeFilter<"Asset"> | Date | string
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
    fingerprint?: XOR<AudioFingerprintNullableScalarRelationFilter, AudioFingerprintWhereInput> | null
    hashes?: FingerprintHashListRelationFilter
    watermark?: XOR<WatermarkNullableScalarRelationFilter, WatermarkWhereInput> | null
    detections?: DetectionListRelationFilter
  }

  export type AssetOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    artist?: SortOrderInput | SortOrder
    album?: SortOrderInput | SortOrder
    isrc?: SortOrderInput | SortOrder
    filename?: SortOrderInput | SortOrder
    file?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    type?: SortOrder
    status?: SortOrder
    duration?: SortOrderInput | SortOrder
    sampleRate?: SortOrderInput | SortOrder
    bitRate?: SortOrderInput | SortOrder
    channels?: SortOrderInput | SortOrder
    fileSize?: SortOrderInput | SortOrder
    checksum?: SortOrderInput | SortOrder
    ownerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    owner?: UserOrderByWithRelationInput
    fingerprint?: AudioFingerprintOrderByWithRelationInput
    hashes?: FingerprintHashOrderByRelationAggregateInput
    watermark?: WatermarkOrderByWithRelationInput
    detections?: DetectionOrderByRelationAggregateInput
  }

  export type AssetWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    isrc?: string
    checksum?: string
    AND?: AssetWhereInput | AssetWhereInput[]
    OR?: AssetWhereInput[]
    NOT?: AssetWhereInput | AssetWhereInput[]
    title?: StringFilter<"Asset"> | string
    description?: StringNullableFilter<"Asset"> | string | null
    artist?: StringNullableFilter<"Asset"> | string | null
    album?: StringNullableFilter<"Asset"> | string | null
    filename?: StringNullableFilter<"Asset"> | string | null
    file?: StringNullableFilter<"Asset"> | string | null
    image?: StringNullableFilter<"Asset"> | string | null
    type?: EnumAssetTypeFilter<"Asset"> | $Enums.AssetType
    status?: EnumStatusFilter<"Asset"> | $Enums.Status
    duration?: FloatNullableFilter<"Asset"> | number | null
    sampleRate?: IntNullableFilter<"Asset"> | number | null
    bitRate?: IntNullableFilter<"Asset"> | number | null
    channels?: IntNullableFilter<"Asset"> | number | null
    fileSize?: IntNullableFilter<"Asset"> | number | null
    ownerId?: UuidFilter<"Asset"> | string
    createdAt?: DateTimeFilter<"Asset"> | Date | string
    updatedAt?: DateTimeFilter<"Asset"> | Date | string
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
    fingerprint?: XOR<AudioFingerprintNullableScalarRelationFilter, AudioFingerprintWhereInput> | null
    hashes?: FingerprintHashListRelationFilter
    watermark?: XOR<WatermarkNullableScalarRelationFilter, WatermarkWhereInput> | null
    detections?: DetectionListRelationFilter
  }, "id" | "isrc" | "checksum">

  export type AssetOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    artist?: SortOrderInput | SortOrder
    album?: SortOrderInput | SortOrder
    isrc?: SortOrderInput | SortOrder
    filename?: SortOrderInput | SortOrder
    file?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    type?: SortOrder
    status?: SortOrder
    duration?: SortOrderInput | SortOrder
    sampleRate?: SortOrderInput | SortOrder
    bitRate?: SortOrderInput | SortOrder
    channels?: SortOrderInput | SortOrder
    fileSize?: SortOrderInput | SortOrder
    checksum?: SortOrderInput | SortOrder
    ownerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AssetCountOrderByAggregateInput
    _avg?: AssetAvgOrderByAggregateInput
    _max?: AssetMaxOrderByAggregateInput
    _min?: AssetMinOrderByAggregateInput
    _sum?: AssetSumOrderByAggregateInput
  }

  export type AssetScalarWhereWithAggregatesInput = {
    AND?: AssetScalarWhereWithAggregatesInput | AssetScalarWhereWithAggregatesInput[]
    OR?: AssetScalarWhereWithAggregatesInput[]
    NOT?: AssetScalarWhereWithAggregatesInput | AssetScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Asset"> | string
    title?: StringWithAggregatesFilter<"Asset"> | string
    description?: StringNullableWithAggregatesFilter<"Asset"> | string | null
    artist?: StringNullableWithAggregatesFilter<"Asset"> | string | null
    album?: StringNullableWithAggregatesFilter<"Asset"> | string | null
    isrc?: StringNullableWithAggregatesFilter<"Asset"> | string | null
    filename?: StringNullableWithAggregatesFilter<"Asset"> | string | null
    file?: StringNullableWithAggregatesFilter<"Asset"> | string | null
    image?: StringNullableWithAggregatesFilter<"Asset"> | string | null
    type?: EnumAssetTypeWithAggregatesFilter<"Asset"> | $Enums.AssetType
    status?: EnumStatusWithAggregatesFilter<"Asset"> | $Enums.Status
    duration?: FloatNullableWithAggregatesFilter<"Asset"> | number | null
    sampleRate?: IntNullableWithAggregatesFilter<"Asset"> | number | null
    bitRate?: IntNullableWithAggregatesFilter<"Asset"> | number | null
    channels?: IntNullableWithAggregatesFilter<"Asset"> | number | null
    fileSize?: IntNullableWithAggregatesFilter<"Asset"> | number | null
    checksum?: StringNullableWithAggregatesFilter<"Asset"> | string | null
    ownerId?: UuidWithAggregatesFilter<"Asset"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Asset"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Asset"> | Date | string
  }

  export type AudioFingerprintWhereInput = {
    AND?: AudioFingerprintWhereInput | AudioFingerprintWhereInput[]
    OR?: AudioFingerprintWhereInput[]
    NOT?: AudioFingerprintWhereInput | AudioFingerprintWhereInput[]
    id?: UuidFilter<"AudioFingerprint"> | string
    algorithm?: StringFilter<"AudioFingerprint"> | string
    version?: StringFilter<"AudioFingerprint"> | string
    generatedAt?: DateTimeFilter<"AudioFingerprint"> | Date | string
    assetId?: UuidFilter<"AudioFingerprint"> | string
    asset?: XOR<AssetScalarRelationFilter, AssetWhereInput>
    hashes?: FingerprintHashListRelationFilter
  }

  export type AudioFingerprintOrderByWithRelationInput = {
    id?: SortOrder
    algorithm?: SortOrder
    version?: SortOrder
    generatedAt?: SortOrder
    assetId?: SortOrder
    asset?: AssetOrderByWithRelationInput
    hashes?: FingerprintHashOrderByRelationAggregateInput
  }

  export type AudioFingerprintWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    assetId?: string
    AND?: AudioFingerprintWhereInput | AudioFingerprintWhereInput[]
    OR?: AudioFingerprintWhereInput[]
    NOT?: AudioFingerprintWhereInput | AudioFingerprintWhereInput[]
    algorithm?: StringFilter<"AudioFingerprint"> | string
    version?: StringFilter<"AudioFingerprint"> | string
    generatedAt?: DateTimeFilter<"AudioFingerprint"> | Date | string
    asset?: XOR<AssetScalarRelationFilter, AssetWhereInput>
    hashes?: FingerprintHashListRelationFilter
  }, "id" | "assetId">

  export type AudioFingerprintOrderByWithAggregationInput = {
    id?: SortOrder
    algorithm?: SortOrder
    version?: SortOrder
    generatedAt?: SortOrder
    assetId?: SortOrder
    _count?: AudioFingerprintCountOrderByAggregateInput
    _max?: AudioFingerprintMaxOrderByAggregateInput
    _min?: AudioFingerprintMinOrderByAggregateInput
  }

  export type AudioFingerprintScalarWhereWithAggregatesInput = {
    AND?: AudioFingerprintScalarWhereWithAggregatesInput | AudioFingerprintScalarWhereWithAggregatesInput[]
    OR?: AudioFingerprintScalarWhereWithAggregatesInput[]
    NOT?: AudioFingerprintScalarWhereWithAggregatesInput | AudioFingerprintScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"AudioFingerprint"> | string
    algorithm?: StringWithAggregatesFilter<"AudioFingerprint"> | string
    version?: StringWithAggregatesFilter<"AudioFingerprint"> | string
    generatedAt?: DateTimeWithAggregatesFilter<"AudioFingerprint"> | Date | string
    assetId?: UuidWithAggregatesFilter<"AudioFingerprint"> | string
  }

  export type FingerprintHashWhereInput = {
    AND?: FingerprintHashWhereInput | FingerprintHashWhereInput[]
    OR?: FingerprintHashWhereInput[]
    NOT?: FingerprintHashWhereInput | FingerprintHashWhereInput[]
    id?: BigIntFilter<"FingerprintHash"> | bigint | number
    hash?: BigIntFilter<"FingerprintHash"> | bigint | number
    offsetMs?: IntFilter<"FingerprintHash"> | number
    audioFingerprintId?: UuidFilter<"FingerprintHash"> | string
    assetId?: UuidFilter<"FingerprintHash"> | string
    audioFingerprint?: XOR<AudioFingerprintScalarRelationFilter, AudioFingerprintWhereInput>
    asset?: XOR<AssetScalarRelationFilter, AssetWhereInput>
  }

  export type FingerprintHashOrderByWithRelationInput = {
    id?: SortOrder
    hash?: SortOrder
    offsetMs?: SortOrder
    audioFingerprintId?: SortOrder
    assetId?: SortOrder
    audioFingerprint?: AudioFingerprintOrderByWithRelationInput
    asset?: AssetOrderByWithRelationInput
  }

  export type FingerprintHashWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: FingerprintHashWhereInput | FingerprintHashWhereInput[]
    OR?: FingerprintHashWhereInput[]
    NOT?: FingerprintHashWhereInput | FingerprintHashWhereInput[]
    hash?: BigIntFilter<"FingerprintHash"> | bigint | number
    offsetMs?: IntFilter<"FingerprintHash"> | number
    audioFingerprintId?: UuidFilter<"FingerprintHash"> | string
    assetId?: UuidFilter<"FingerprintHash"> | string
    audioFingerprint?: XOR<AudioFingerprintScalarRelationFilter, AudioFingerprintWhereInput>
    asset?: XOR<AssetScalarRelationFilter, AssetWhereInput>
  }, "id">

  export type FingerprintHashOrderByWithAggregationInput = {
    id?: SortOrder
    hash?: SortOrder
    offsetMs?: SortOrder
    audioFingerprintId?: SortOrder
    assetId?: SortOrder
    _count?: FingerprintHashCountOrderByAggregateInput
    _avg?: FingerprintHashAvgOrderByAggregateInput
    _max?: FingerprintHashMaxOrderByAggregateInput
    _min?: FingerprintHashMinOrderByAggregateInput
    _sum?: FingerprintHashSumOrderByAggregateInput
  }

  export type FingerprintHashScalarWhereWithAggregatesInput = {
    AND?: FingerprintHashScalarWhereWithAggregatesInput | FingerprintHashScalarWhereWithAggregatesInput[]
    OR?: FingerprintHashScalarWhereWithAggregatesInput[]
    NOT?: FingerprintHashScalarWhereWithAggregatesInput | FingerprintHashScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"FingerprintHash"> | bigint | number
    hash?: BigIntWithAggregatesFilter<"FingerprintHash"> | bigint | number
    offsetMs?: IntWithAggregatesFilter<"FingerprintHash"> | number
    audioFingerprintId?: UuidWithAggregatesFilter<"FingerprintHash"> | string
    assetId?: UuidWithAggregatesFilter<"FingerprintHash"> | string
  }

  export type WatermarkWhereInput = {
    AND?: WatermarkWhereInput | WatermarkWhereInput[]
    OR?: WatermarkWhereInput[]
    NOT?: WatermarkWhereInput | WatermarkWhereInput[]
    id?: UuidFilter<"Watermark"> | string
    algorithm?: StringFilter<"Watermark"> | string
    payload?: StringFilter<"Watermark"> | string
    embeddedAt?: DateTimeFilter<"Watermark"> | Date | string
    assetId?: UuidFilter<"Watermark"> | string
    asset?: XOR<AssetScalarRelationFilter, AssetWhereInput>
  }

  export type WatermarkOrderByWithRelationInput = {
    id?: SortOrder
    algorithm?: SortOrder
    payload?: SortOrder
    embeddedAt?: SortOrder
    assetId?: SortOrder
    asset?: AssetOrderByWithRelationInput
  }

  export type WatermarkWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    assetId?: string
    AND?: WatermarkWhereInput | WatermarkWhereInput[]
    OR?: WatermarkWhereInput[]
    NOT?: WatermarkWhereInput | WatermarkWhereInput[]
    algorithm?: StringFilter<"Watermark"> | string
    payload?: StringFilter<"Watermark"> | string
    embeddedAt?: DateTimeFilter<"Watermark"> | Date | string
    asset?: XOR<AssetScalarRelationFilter, AssetWhereInput>
  }, "id" | "assetId">

  export type WatermarkOrderByWithAggregationInput = {
    id?: SortOrder
    algorithm?: SortOrder
    payload?: SortOrder
    embeddedAt?: SortOrder
    assetId?: SortOrder
    _count?: WatermarkCountOrderByAggregateInput
    _max?: WatermarkMaxOrderByAggregateInput
    _min?: WatermarkMinOrderByAggregateInput
  }

  export type WatermarkScalarWhereWithAggregatesInput = {
    AND?: WatermarkScalarWhereWithAggregatesInput | WatermarkScalarWhereWithAggregatesInput[]
    OR?: WatermarkScalarWhereWithAggregatesInput[]
    NOT?: WatermarkScalarWhereWithAggregatesInput | WatermarkScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Watermark"> | string
    algorithm?: StringWithAggregatesFilter<"Watermark"> | string
    payload?: StringWithAggregatesFilter<"Watermark"> | string
    embeddedAt?: DateTimeWithAggregatesFilter<"Watermark"> | Date | string
    assetId?: UuidWithAggregatesFilter<"Watermark"> | string
  }

  export type BroadcasterWhereInput = {
    AND?: BroadcasterWhereInput | BroadcasterWhereInput[]
    OR?: BroadcasterWhereInput[]
    NOT?: BroadcasterWhereInput | BroadcasterWhereInput[]
    id?: UuidFilter<"Broadcaster"> | string
    name?: StringFilter<"Broadcaster"> | string
    description?: StringNullableFilter<"Broadcaster"> | string | null
    website?: StringNullableFilter<"Broadcaster"> | string | null
    streamUrl?: StringNullableFilter<"Broadcaster"> | string | null
    country?: StringNullableFilter<"Broadcaster"> | string | null
    frequency?: StringNullableFilter<"Broadcaster"> | string | null
    status?: EnumStatusFilter<"Broadcaster"> | $Enums.Status
    createdAt?: DateTimeFilter<"Broadcaster"> | Date | string
    updatedAt?: DateTimeFilter<"Broadcaster"> | Date | string
    monitoringSessions?: MonitoringSessionListRelationFilter
    detections?: DetectionListRelationFilter
  }

  export type BroadcasterOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    website?: SortOrderInput | SortOrder
    streamUrl?: SortOrderInput | SortOrder
    country?: SortOrderInput | SortOrder
    frequency?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    monitoringSessions?: MonitoringSessionOrderByRelationAggregateInput
    detections?: DetectionOrderByRelationAggregateInput
  }

  export type BroadcasterWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    streamUrl?: string
    AND?: BroadcasterWhereInput | BroadcasterWhereInput[]
    OR?: BroadcasterWhereInput[]
    NOT?: BroadcasterWhereInput | BroadcasterWhereInput[]
    description?: StringNullableFilter<"Broadcaster"> | string | null
    website?: StringNullableFilter<"Broadcaster"> | string | null
    country?: StringNullableFilter<"Broadcaster"> | string | null
    frequency?: StringNullableFilter<"Broadcaster"> | string | null
    status?: EnumStatusFilter<"Broadcaster"> | $Enums.Status
    createdAt?: DateTimeFilter<"Broadcaster"> | Date | string
    updatedAt?: DateTimeFilter<"Broadcaster"> | Date | string
    monitoringSessions?: MonitoringSessionListRelationFilter
    detections?: DetectionListRelationFilter
  }, "id" | "name" | "streamUrl">

  export type BroadcasterOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    website?: SortOrderInput | SortOrder
    streamUrl?: SortOrderInput | SortOrder
    country?: SortOrderInput | SortOrder
    frequency?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BroadcasterCountOrderByAggregateInput
    _max?: BroadcasterMaxOrderByAggregateInput
    _min?: BroadcasterMinOrderByAggregateInput
  }

  export type BroadcasterScalarWhereWithAggregatesInput = {
    AND?: BroadcasterScalarWhereWithAggregatesInput | BroadcasterScalarWhereWithAggregatesInput[]
    OR?: BroadcasterScalarWhereWithAggregatesInput[]
    NOT?: BroadcasterScalarWhereWithAggregatesInput | BroadcasterScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Broadcaster"> | string
    name?: StringWithAggregatesFilter<"Broadcaster"> | string
    description?: StringNullableWithAggregatesFilter<"Broadcaster"> | string | null
    website?: StringNullableWithAggregatesFilter<"Broadcaster"> | string | null
    streamUrl?: StringNullableWithAggregatesFilter<"Broadcaster"> | string | null
    country?: StringNullableWithAggregatesFilter<"Broadcaster"> | string | null
    frequency?: StringNullableWithAggregatesFilter<"Broadcaster"> | string | null
    status?: EnumStatusWithAggregatesFilter<"Broadcaster"> | $Enums.Status
    createdAt?: DateTimeWithAggregatesFilter<"Broadcaster"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Broadcaster"> | Date | string
  }

  export type MonitoringSessionWhereInput = {
    AND?: MonitoringSessionWhereInput | MonitoringSessionWhereInput[]
    OR?: MonitoringSessionWhereInput[]
    NOT?: MonitoringSessionWhereInput | MonitoringSessionWhereInput[]
    id?: UuidFilter<"MonitoringSession"> | string
    broadcasterId?: UuidFilter<"MonitoringSession"> | string
    startedAt?: DateTimeFilter<"MonitoringSession"> | Date | string
    endedAt?: DateTimeNullableFilter<"MonitoringSession"> | Date | string | null
    status?: EnumStatusFilter<"MonitoringSession"> | $Enums.Status
    createdAt?: DateTimeFilter<"MonitoringSession"> | Date | string
    broadcaster?: XOR<BroadcasterScalarRelationFilter, BroadcasterWhereInput>
    detections?: DetectionListRelationFilter
  }

  export type MonitoringSessionOrderByWithRelationInput = {
    id?: SortOrder
    broadcasterId?: SortOrder
    startedAt?: SortOrder
    endedAt?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    broadcaster?: BroadcasterOrderByWithRelationInput
    detections?: DetectionOrderByRelationAggregateInput
  }

  export type MonitoringSessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    broadcasterId_startedAt?: MonitoringSessionBroadcasterIdStartedAtCompoundUniqueInput
    AND?: MonitoringSessionWhereInput | MonitoringSessionWhereInput[]
    OR?: MonitoringSessionWhereInput[]
    NOT?: MonitoringSessionWhereInput | MonitoringSessionWhereInput[]
    broadcasterId?: UuidFilter<"MonitoringSession"> | string
    startedAt?: DateTimeFilter<"MonitoringSession"> | Date | string
    endedAt?: DateTimeNullableFilter<"MonitoringSession"> | Date | string | null
    status?: EnumStatusFilter<"MonitoringSession"> | $Enums.Status
    createdAt?: DateTimeFilter<"MonitoringSession"> | Date | string
    broadcaster?: XOR<BroadcasterScalarRelationFilter, BroadcasterWhereInput>
    detections?: DetectionListRelationFilter
  }, "id" | "broadcasterId_startedAt">

  export type MonitoringSessionOrderByWithAggregationInput = {
    id?: SortOrder
    broadcasterId?: SortOrder
    startedAt?: SortOrder
    endedAt?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    _count?: MonitoringSessionCountOrderByAggregateInput
    _max?: MonitoringSessionMaxOrderByAggregateInput
    _min?: MonitoringSessionMinOrderByAggregateInput
  }

  export type MonitoringSessionScalarWhereWithAggregatesInput = {
    AND?: MonitoringSessionScalarWhereWithAggregatesInput | MonitoringSessionScalarWhereWithAggregatesInput[]
    OR?: MonitoringSessionScalarWhereWithAggregatesInput[]
    NOT?: MonitoringSessionScalarWhereWithAggregatesInput | MonitoringSessionScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"MonitoringSession"> | string
    broadcasterId?: UuidWithAggregatesFilter<"MonitoringSession"> | string
    startedAt?: DateTimeWithAggregatesFilter<"MonitoringSession"> | Date | string
    endedAt?: DateTimeNullableWithAggregatesFilter<"MonitoringSession"> | Date | string | null
    status?: EnumStatusWithAggregatesFilter<"MonitoringSession"> | $Enums.Status
    createdAt?: DateTimeWithAggregatesFilter<"MonitoringSession"> | Date | string
  }

  export type DetectionWhereInput = {
    AND?: DetectionWhereInput | DetectionWhereInput[]
    OR?: DetectionWhereInput[]
    NOT?: DetectionWhereInput | DetectionWhereInput[]
    id?: UuidFilter<"Detection"> | string
    assetId?: UuidFilter<"Detection"> | string
    broadcasterId?: UuidFilter<"Detection"> | string
    sessionId?: UuidNullableFilter<"Detection"> | string | null
    broadcastAt?: DateTimeFilter<"Detection"> | Date | string
    detectedAt?: DateTimeFilter<"Detection"> | Date | string
    confidence?: FloatFilter<"Detection"> | number
    startOffset?: FloatNullableFilter<"Detection"> | number | null
    endOffset?: FloatNullableFilter<"Detection"> | number | null
    duration?: FloatNullableFilter<"Detection"> | number | null
    engineVersion?: StringFilter<"Detection"> | string
    status?: EnumDetectionStatusFilter<"Detection"> | $Enums.DetectionStatus
    createdAt?: DateTimeFilter<"Detection"> | Date | string
    asset?: XOR<AssetScalarRelationFilter, AssetWhereInput>
    broadcaster?: XOR<BroadcasterScalarRelationFilter, BroadcasterWhereInput>
    session?: XOR<MonitoringSessionNullableScalarRelationFilter, MonitoringSessionWhereInput> | null
  }

  export type DetectionOrderByWithRelationInput = {
    id?: SortOrder
    assetId?: SortOrder
    broadcasterId?: SortOrder
    sessionId?: SortOrderInput | SortOrder
    broadcastAt?: SortOrder
    detectedAt?: SortOrder
    confidence?: SortOrder
    startOffset?: SortOrderInput | SortOrder
    endOffset?: SortOrderInput | SortOrder
    duration?: SortOrderInput | SortOrder
    engineVersion?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    asset?: AssetOrderByWithRelationInput
    broadcaster?: BroadcasterOrderByWithRelationInput
    session?: MonitoringSessionOrderByWithRelationInput
  }

  export type DetectionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    assetId_broadcasterId_broadcastAt?: DetectionAssetIdBroadcasterIdBroadcastAtCompoundUniqueInput
    AND?: DetectionWhereInput | DetectionWhereInput[]
    OR?: DetectionWhereInput[]
    NOT?: DetectionWhereInput | DetectionWhereInput[]
    assetId?: UuidFilter<"Detection"> | string
    broadcasterId?: UuidFilter<"Detection"> | string
    sessionId?: UuidNullableFilter<"Detection"> | string | null
    broadcastAt?: DateTimeFilter<"Detection"> | Date | string
    detectedAt?: DateTimeFilter<"Detection"> | Date | string
    confidence?: FloatFilter<"Detection"> | number
    startOffset?: FloatNullableFilter<"Detection"> | number | null
    endOffset?: FloatNullableFilter<"Detection"> | number | null
    duration?: FloatNullableFilter<"Detection"> | number | null
    engineVersion?: StringFilter<"Detection"> | string
    status?: EnumDetectionStatusFilter<"Detection"> | $Enums.DetectionStatus
    createdAt?: DateTimeFilter<"Detection"> | Date | string
    asset?: XOR<AssetScalarRelationFilter, AssetWhereInput>
    broadcaster?: XOR<BroadcasterScalarRelationFilter, BroadcasterWhereInput>
    session?: XOR<MonitoringSessionNullableScalarRelationFilter, MonitoringSessionWhereInput> | null
  }, "id" | "assetId_broadcasterId_broadcastAt">

  export type DetectionOrderByWithAggregationInput = {
    id?: SortOrder
    assetId?: SortOrder
    broadcasterId?: SortOrder
    sessionId?: SortOrderInput | SortOrder
    broadcastAt?: SortOrder
    detectedAt?: SortOrder
    confidence?: SortOrder
    startOffset?: SortOrderInput | SortOrder
    endOffset?: SortOrderInput | SortOrder
    duration?: SortOrderInput | SortOrder
    engineVersion?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    _count?: DetectionCountOrderByAggregateInput
    _avg?: DetectionAvgOrderByAggregateInput
    _max?: DetectionMaxOrderByAggregateInput
    _min?: DetectionMinOrderByAggregateInput
    _sum?: DetectionSumOrderByAggregateInput
  }

  export type DetectionScalarWhereWithAggregatesInput = {
    AND?: DetectionScalarWhereWithAggregatesInput | DetectionScalarWhereWithAggregatesInput[]
    OR?: DetectionScalarWhereWithAggregatesInput[]
    NOT?: DetectionScalarWhereWithAggregatesInput | DetectionScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Detection"> | string
    assetId?: UuidWithAggregatesFilter<"Detection"> | string
    broadcasterId?: UuidWithAggregatesFilter<"Detection"> | string
    sessionId?: UuidNullableWithAggregatesFilter<"Detection"> | string | null
    broadcastAt?: DateTimeWithAggregatesFilter<"Detection"> | Date | string
    detectedAt?: DateTimeWithAggregatesFilter<"Detection"> | Date | string
    confidence?: FloatWithAggregatesFilter<"Detection"> | number
    startOffset?: FloatNullableWithAggregatesFilter<"Detection"> | number | null
    endOffset?: FloatNullableWithAggregatesFilter<"Detection"> | number | null
    duration?: FloatNullableWithAggregatesFilter<"Detection"> | number | null
    engineVersion?: StringWithAggregatesFilter<"Detection"> | string
    status?: EnumDetectionStatusWithAggregatesFilter<"Detection"> | $Enums.DetectionStatus
    createdAt?: DateTimeWithAggregatesFilter<"Detection"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    name: string
    phone?: string | null
    email?: string | null
    passwordHash?: string | null
    voiceSign?: string | null
    role?: $Enums.UserRole
    image?: string | null
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    apiKeyHash?: string | null
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
    assets?: AssetCreateNestedManyWithoutOwnerInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    phone?: string | null
    email?: string | null
    passwordHash?: string | null
    voiceSign?: string | null
    role?: $Enums.UserRole
    image?: string | null
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    apiKeyHash?: string | null
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
    assets?: AssetUncheckedCreateNestedManyWithoutOwnerInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    voiceSign?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    image?: NullableStringFieldUpdateOperationsInput | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    apiKeyHash?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assets?: AssetUpdateManyWithoutOwnerNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    voiceSign?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    image?: NullableStringFieldUpdateOperationsInput | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    apiKeyHash?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assets?: AssetUncheckedUpdateManyWithoutOwnerNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    phone?: string | null
    email?: string | null
    passwordHash?: string | null
    voiceSign?: string | null
    role?: $Enums.UserRole
    image?: string | null
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    apiKeyHash?: string | null
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    voiceSign?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    image?: NullableStringFieldUpdateOperationsInput | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    apiKeyHash?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    voiceSign?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    image?: NullableStringFieldUpdateOperationsInput | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    apiKeyHash?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AssetCreateInput = {
    id?: string
    title: string
    description?: string | null
    artist?: string | null
    album?: string | null
    isrc?: string | null
    filename?: string | null
    file?: string | null
    image?: string | null
    type?: $Enums.AssetType
    status?: $Enums.Status
    duration?: number | null
    sampleRate?: number | null
    bitRate?: number | null
    channels?: number | null
    fileSize?: number | null
    checksum?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    owner: UserCreateNestedOneWithoutAssetsInput
    fingerprint?: AudioFingerprintCreateNestedOneWithoutAssetInput
    hashes?: FingerprintHashCreateNestedManyWithoutAssetInput
    watermark?: WatermarkCreateNestedOneWithoutAssetInput
    detections?: DetectionCreateNestedManyWithoutAssetInput
  }

  export type AssetUncheckedCreateInput = {
    id?: string
    title: string
    description?: string | null
    artist?: string | null
    album?: string | null
    isrc?: string | null
    filename?: string | null
    file?: string | null
    image?: string | null
    type?: $Enums.AssetType
    status?: $Enums.Status
    duration?: number | null
    sampleRate?: number | null
    bitRate?: number | null
    channels?: number | null
    fileSize?: number | null
    checksum?: string | null
    ownerId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    fingerprint?: AudioFingerprintUncheckedCreateNestedOneWithoutAssetInput
    hashes?: FingerprintHashUncheckedCreateNestedManyWithoutAssetInput
    watermark?: WatermarkUncheckedCreateNestedOneWithoutAssetInput
    detections?: DetectionUncheckedCreateNestedManyWithoutAssetInput
  }

  export type AssetUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    artist?: NullableStringFieldUpdateOperationsInput | string | null
    album?: NullableStringFieldUpdateOperationsInput | string | null
    isrc?: NullableStringFieldUpdateOperationsInput | string | null
    filename?: NullableStringFieldUpdateOperationsInput | string | null
    file?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumAssetTypeFieldUpdateOperationsInput | $Enums.AssetType
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    duration?: NullableFloatFieldUpdateOperationsInput | number | null
    sampleRate?: NullableIntFieldUpdateOperationsInput | number | null
    bitRate?: NullableIntFieldUpdateOperationsInput | number | null
    channels?: NullableIntFieldUpdateOperationsInput | number | null
    fileSize?: NullableIntFieldUpdateOperationsInput | number | null
    checksum?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutAssetsNestedInput
    fingerprint?: AudioFingerprintUpdateOneWithoutAssetNestedInput
    hashes?: FingerprintHashUpdateManyWithoutAssetNestedInput
    watermark?: WatermarkUpdateOneWithoutAssetNestedInput
    detections?: DetectionUpdateManyWithoutAssetNestedInput
  }

  export type AssetUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    artist?: NullableStringFieldUpdateOperationsInput | string | null
    album?: NullableStringFieldUpdateOperationsInput | string | null
    isrc?: NullableStringFieldUpdateOperationsInput | string | null
    filename?: NullableStringFieldUpdateOperationsInput | string | null
    file?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumAssetTypeFieldUpdateOperationsInput | $Enums.AssetType
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    duration?: NullableFloatFieldUpdateOperationsInput | number | null
    sampleRate?: NullableIntFieldUpdateOperationsInput | number | null
    bitRate?: NullableIntFieldUpdateOperationsInput | number | null
    channels?: NullableIntFieldUpdateOperationsInput | number | null
    fileSize?: NullableIntFieldUpdateOperationsInput | number | null
    checksum?: NullableStringFieldUpdateOperationsInput | string | null
    ownerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fingerprint?: AudioFingerprintUncheckedUpdateOneWithoutAssetNestedInput
    hashes?: FingerprintHashUncheckedUpdateManyWithoutAssetNestedInput
    watermark?: WatermarkUncheckedUpdateOneWithoutAssetNestedInput
    detections?: DetectionUncheckedUpdateManyWithoutAssetNestedInput
  }

  export type AssetCreateManyInput = {
    id?: string
    title: string
    description?: string | null
    artist?: string | null
    album?: string | null
    isrc?: string | null
    filename?: string | null
    file?: string | null
    image?: string | null
    type?: $Enums.AssetType
    status?: $Enums.Status
    duration?: number | null
    sampleRate?: number | null
    bitRate?: number | null
    channels?: number | null
    fileSize?: number | null
    checksum?: string | null
    ownerId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AssetUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    artist?: NullableStringFieldUpdateOperationsInput | string | null
    album?: NullableStringFieldUpdateOperationsInput | string | null
    isrc?: NullableStringFieldUpdateOperationsInput | string | null
    filename?: NullableStringFieldUpdateOperationsInput | string | null
    file?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumAssetTypeFieldUpdateOperationsInput | $Enums.AssetType
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    duration?: NullableFloatFieldUpdateOperationsInput | number | null
    sampleRate?: NullableIntFieldUpdateOperationsInput | number | null
    bitRate?: NullableIntFieldUpdateOperationsInput | number | null
    channels?: NullableIntFieldUpdateOperationsInput | number | null
    fileSize?: NullableIntFieldUpdateOperationsInput | number | null
    checksum?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AssetUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    artist?: NullableStringFieldUpdateOperationsInput | string | null
    album?: NullableStringFieldUpdateOperationsInput | string | null
    isrc?: NullableStringFieldUpdateOperationsInput | string | null
    filename?: NullableStringFieldUpdateOperationsInput | string | null
    file?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumAssetTypeFieldUpdateOperationsInput | $Enums.AssetType
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    duration?: NullableFloatFieldUpdateOperationsInput | number | null
    sampleRate?: NullableIntFieldUpdateOperationsInput | number | null
    bitRate?: NullableIntFieldUpdateOperationsInput | number | null
    channels?: NullableIntFieldUpdateOperationsInput | number | null
    fileSize?: NullableIntFieldUpdateOperationsInput | number | null
    checksum?: NullableStringFieldUpdateOperationsInput | string | null
    ownerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AudioFingerprintCreateInput = {
    id?: string
    algorithm?: string
    version?: string
    generatedAt?: Date | string
    asset: AssetCreateNestedOneWithoutFingerprintInput
    hashes?: FingerprintHashCreateNestedManyWithoutAudioFingerprintInput
  }

  export type AudioFingerprintUncheckedCreateInput = {
    id?: string
    algorithm?: string
    version?: string
    generatedAt?: Date | string
    assetId: string
    hashes?: FingerprintHashUncheckedCreateNestedManyWithoutAudioFingerprintInput
  }

  export type AudioFingerprintUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    algorithm?: StringFieldUpdateOperationsInput | string
    version?: StringFieldUpdateOperationsInput | string
    generatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    asset?: AssetUpdateOneRequiredWithoutFingerprintNestedInput
    hashes?: FingerprintHashUpdateManyWithoutAudioFingerprintNestedInput
  }

  export type AudioFingerprintUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    algorithm?: StringFieldUpdateOperationsInput | string
    version?: StringFieldUpdateOperationsInput | string
    generatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assetId?: StringFieldUpdateOperationsInput | string
    hashes?: FingerprintHashUncheckedUpdateManyWithoutAudioFingerprintNestedInput
  }

  export type AudioFingerprintCreateManyInput = {
    id?: string
    algorithm?: string
    version?: string
    generatedAt?: Date | string
    assetId: string
  }

  export type AudioFingerprintUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    algorithm?: StringFieldUpdateOperationsInput | string
    version?: StringFieldUpdateOperationsInput | string
    generatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AudioFingerprintUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    algorithm?: StringFieldUpdateOperationsInput | string
    version?: StringFieldUpdateOperationsInput | string
    generatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assetId?: StringFieldUpdateOperationsInput | string
  }

  export type FingerprintHashCreateInput = {
    id?: bigint | number
    hash: bigint | number
    offsetMs: number
    audioFingerprint: AudioFingerprintCreateNestedOneWithoutHashesInput
    asset: AssetCreateNestedOneWithoutHashesInput
  }

  export type FingerprintHashUncheckedCreateInput = {
    id?: bigint | number
    hash: bigint | number
    offsetMs: number
    audioFingerprintId: string
    assetId: string
  }

  export type FingerprintHashUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    hash?: BigIntFieldUpdateOperationsInput | bigint | number
    offsetMs?: IntFieldUpdateOperationsInput | number
    audioFingerprint?: AudioFingerprintUpdateOneRequiredWithoutHashesNestedInput
    asset?: AssetUpdateOneRequiredWithoutHashesNestedInput
  }

  export type FingerprintHashUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    hash?: BigIntFieldUpdateOperationsInput | bigint | number
    offsetMs?: IntFieldUpdateOperationsInput | number
    audioFingerprintId?: StringFieldUpdateOperationsInput | string
    assetId?: StringFieldUpdateOperationsInput | string
  }

  export type FingerprintHashCreateManyInput = {
    id?: bigint | number
    hash: bigint | number
    offsetMs: number
    audioFingerprintId: string
    assetId: string
  }

  export type FingerprintHashUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    hash?: BigIntFieldUpdateOperationsInput | bigint | number
    offsetMs?: IntFieldUpdateOperationsInput | number
  }

  export type FingerprintHashUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    hash?: BigIntFieldUpdateOperationsInput | bigint | number
    offsetMs?: IntFieldUpdateOperationsInput | number
    audioFingerprintId?: StringFieldUpdateOperationsInput | string
    assetId?: StringFieldUpdateOperationsInput | string
  }

  export type WatermarkCreateInput = {
    id?: string
    algorithm: string
    payload: string
    embeddedAt?: Date | string
    asset: AssetCreateNestedOneWithoutWatermarkInput
  }

  export type WatermarkUncheckedCreateInput = {
    id?: string
    algorithm: string
    payload: string
    embeddedAt?: Date | string
    assetId: string
  }

  export type WatermarkUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    algorithm?: StringFieldUpdateOperationsInput | string
    payload?: StringFieldUpdateOperationsInput | string
    embeddedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    asset?: AssetUpdateOneRequiredWithoutWatermarkNestedInput
  }

  export type WatermarkUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    algorithm?: StringFieldUpdateOperationsInput | string
    payload?: StringFieldUpdateOperationsInput | string
    embeddedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assetId?: StringFieldUpdateOperationsInput | string
  }

  export type WatermarkCreateManyInput = {
    id?: string
    algorithm: string
    payload: string
    embeddedAt?: Date | string
    assetId: string
  }

  export type WatermarkUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    algorithm?: StringFieldUpdateOperationsInput | string
    payload?: StringFieldUpdateOperationsInput | string
    embeddedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WatermarkUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    algorithm?: StringFieldUpdateOperationsInput | string
    payload?: StringFieldUpdateOperationsInput | string
    embeddedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assetId?: StringFieldUpdateOperationsInput | string
  }

  export type BroadcasterCreateInput = {
    id?: string
    name: string
    description?: string | null
    website?: string | null
    streamUrl?: string | null
    country?: string | null
    frequency?: string | null
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
    monitoringSessions?: MonitoringSessionCreateNestedManyWithoutBroadcasterInput
    detections?: DetectionCreateNestedManyWithoutBroadcasterInput
  }

  export type BroadcasterUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    website?: string | null
    streamUrl?: string | null
    country?: string | null
    frequency?: string | null
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
    monitoringSessions?: MonitoringSessionUncheckedCreateNestedManyWithoutBroadcasterInput
    detections?: DetectionUncheckedCreateNestedManyWithoutBroadcasterInput
  }

  export type BroadcasterUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    streamUrl?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    frequency?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    monitoringSessions?: MonitoringSessionUpdateManyWithoutBroadcasterNestedInput
    detections?: DetectionUpdateManyWithoutBroadcasterNestedInput
  }

  export type BroadcasterUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    streamUrl?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    frequency?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    monitoringSessions?: MonitoringSessionUncheckedUpdateManyWithoutBroadcasterNestedInput
    detections?: DetectionUncheckedUpdateManyWithoutBroadcasterNestedInput
  }

  export type BroadcasterCreateManyInput = {
    id?: string
    name: string
    description?: string | null
    website?: string | null
    streamUrl?: string | null
    country?: string | null
    frequency?: string | null
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BroadcasterUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    streamUrl?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    frequency?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BroadcasterUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    streamUrl?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    frequency?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MonitoringSessionCreateInput = {
    id?: string
    startedAt: Date | string
    endedAt?: Date | string | null
    status?: $Enums.Status
    createdAt?: Date | string
    broadcaster: BroadcasterCreateNestedOneWithoutMonitoringSessionsInput
    detections?: DetectionCreateNestedManyWithoutSessionInput
  }

  export type MonitoringSessionUncheckedCreateInput = {
    id?: string
    broadcasterId: string
    startedAt: Date | string
    endedAt?: Date | string | null
    status?: $Enums.Status
    createdAt?: Date | string
    detections?: DetectionUncheckedCreateNestedManyWithoutSessionInput
  }

  export type MonitoringSessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    broadcaster?: BroadcasterUpdateOneRequiredWithoutMonitoringSessionsNestedInput
    detections?: DetectionUpdateManyWithoutSessionNestedInput
  }

  export type MonitoringSessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    broadcasterId?: StringFieldUpdateOperationsInput | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    detections?: DetectionUncheckedUpdateManyWithoutSessionNestedInput
  }

  export type MonitoringSessionCreateManyInput = {
    id?: string
    broadcasterId: string
    startedAt: Date | string
    endedAt?: Date | string | null
    status?: $Enums.Status
    createdAt?: Date | string
  }

  export type MonitoringSessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MonitoringSessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    broadcasterId?: StringFieldUpdateOperationsInput | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DetectionCreateInput = {
    id?: string
    broadcastAt: Date | string
    detectedAt?: Date | string
    confidence: number
    startOffset?: number | null
    endOffset?: number | null
    duration?: number | null
    engineVersion: string
    status?: $Enums.DetectionStatus
    createdAt?: Date | string
    asset: AssetCreateNestedOneWithoutDetectionsInput
    broadcaster: BroadcasterCreateNestedOneWithoutDetectionsInput
    session?: MonitoringSessionCreateNestedOneWithoutDetectionsInput
  }

  export type DetectionUncheckedCreateInput = {
    id?: string
    assetId: string
    broadcasterId: string
    sessionId?: string | null
    broadcastAt: Date | string
    detectedAt?: Date | string
    confidence: number
    startOffset?: number | null
    endOffset?: number | null
    duration?: number | null
    engineVersion: string
    status?: $Enums.DetectionStatus
    createdAt?: Date | string
  }

  export type DetectionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    broadcastAt?: DateTimeFieldUpdateOperationsInput | Date | string
    detectedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    confidence?: FloatFieldUpdateOperationsInput | number
    startOffset?: NullableFloatFieldUpdateOperationsInput | number | null
    endOffset?: NullableFloatFieldUpdateOperationsInput | number | null
    duration?: NullableFloatFieldUpdateOperationsInput | number | null
    engineVersion?: StringFieldUpdateOperationsInput | string
    status?: EnumDetectionStatusFieldUpdateOperationsInput | $Enums.DetectionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    asset?: AssetUpdateOneRequiredWithoutDetectionsNestedInput
    broadcaster?: BroadcasterUpdateOneRequiredWithoutDetectionsNestedInput
    session?: MonitoringSessionUpdateOneWithoutDetectionsNestedInput
  }

  export type DetectionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    assetId?: StringFieldUpdateOperationsInput | string
    broadcasterId?: StringFieldUpdateOperationsInput | string
    sessionId?: NullableStringFieldUpdateOperationsInput | string | null
    broadcastAt?: DateTimeFieldUpdateOperationsInput | Date | string
    detectedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    confidence?: FloatFieldUpdateOperationsInput | number
    startOffset?: NullableFloatFieldUpdateOperationsInput | number | null
    endOffset?: NullableFloatFieldUpdateOperationsInput | number | null
    duration?: NullableFloatFieldUpdateOperationsInput | number | null
    engineVersion?: StringFieldUpdateOperationsInput | string
    status?: EnumDetectionStatusFieldUpdateOperationsInput | $Enums.DetectionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DetectionCreateManyInput = {
    id?: string
    assetId: string
    broadcasterId: string
    sessionId?: string | null
    broadcastAt: Date | string
    detectedAt?: Date | string
    confidence: number
    startOffset?: number | null
    endOffset?: number | null
    duration?: number | null
    engineVersion: string
    status?: $Enums.DetectionStatus
    createdAt?: Date | string
  }

  export type DetectionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    broadcastAt?: DateTimeFieldUpdateOperationsInput | Date | string
    detectedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    confidence?: FloatFieldUpdateOperationsInput | number
    startOffset?: NullableFloatFieldUpdateOperationsInput | number | null
    endOffset?: NullableFloatFieldUpdateOperationsInput | number | null
    duration?: NullableFloatFieldUpdateOperationsInput | number | null
    engineVersion?: StringFieldUpdateOperationsInput | string
    status?: EnumDetectionStatusFieldUpdateOperationsInput | $Enums.DetectionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DetectionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    assetId?: StringFieldUpdateOperationsInput | string
    broadcasterId?: StringFieldUpdateOperationsInput | string
    sessionId?: NullableStringFieldUpdateOperationsInput | string | null
    broadcastAt?: DateTimeFieldUpdateOperationsInput | Date | string
    detectedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    confidence?: FloatFieldUpdateOperationsInput | number
    startOffset?: NullableFloatFieldUpdateOperationsInput | number | null
    endOffset?: NullableFloatFieldUpdateOperationsInput | number | null
    duration?: NullableFloatFieldUpdateOperationsInput | number | null
    engineVersion?: StringFieldUpdateOperationsInput | string
    status?: EnumDetectionStatusFieldUpdateOperationsInput | $Enums.DetectionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type EnumStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusFilter<$PrismaModel> | $Enums.Status
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type AssetListRelationFilter = {
    every?: AssetWhereInput
    some?: AssetWhereInput
    none?: AssetWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AssetOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    voiceSign?: SortOrder
    role?: SortOrder
    image?: SortOrder
    resetToken?: SortOrder
    resetTokenExpiry?: SortOrder
    apiKeyHash?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    voiceSign?: SortOrder
    role?: SortOrder
    image?: SortOrder
    resetToken?: SortOrder
    resetTokenExpiry?: SortOrder
    apiKeyHash?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    voiceSign?: SortOrder
    role?: SortOrder
    image?: SortOrder
    resetToken?: SortOrder
    resetTokenExpiry?: SortOrder
    apiKeyHash?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EnumStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusWithAggregatesFilter<$PrismaModel> | $Enums.Status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusFilter<$PrismaModel>
    _max?: NestedEnumStatusFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumAssetTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.AssetType | EnumAssetTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AssetType[] | ListEnumAssetTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AssetType[] | ListEnumAssetTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAssetTypeFilter<$PrismaModel> | $Enums.AssetType
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type AudioFingerprintNullableScalarRelationFilter = {
    is?: AudioFingerprintWhereInput | null
    isNot?: AudioFingerprintWhereInput | null
  }

  export type FingerprintHashListRelationFilter = {
    every?: FingerprintHashWhereInput
    some?: FingerprintHashWhereInput
    none?: FingerprintHashWhereInput
  }

  export type WatermarkNullableScalarRelationFilter = {
    is?: WatermarkWhereInput | null
    isNot?: WatermarkWhereInput | null
  }

  export type DetectionListRelationFilter = {
    every?: DetectionWhereInput
    some?: DetectionWhereInput
    none?: DetectionWhereInput
  }

  export type FingerprintHashOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DetectionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AssetCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    artist?: SortOrder
    album?: SortOrder
    isrc?: SortOrder
    filename?: SortOrder
    file?: SortOrder
    image?: SortOrder
    type?: SortOrder
    status?: SortOrder
    duration?: SortOrder
    sampleRate?: SortOrder
    bitRate?: SortOrder
    channels?: SortOrder
    fileSize?: SortOrder
    checksum?: SortOrder
    ownerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AssetAvgOrderByAggregateInput = {
    duration?: SortOrder
    sampleRate?: SortOrder
    bitRate?: SortOrder
    channels?: SortOrder
    fileSize?: SortOrder
  }

  export type AssetMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    artist?: SortOrder
    album?: SortOrder
    isrc?: SortOrder
    filename?: SortOrder
    file?: SortOrder
    image?: SortOrder
    type?: SortOrder
    status?: SortOrder
    duration?: SortOrder
    sampleRate?: SortOrder
    bitRate?: SortOrder
    channels?: SortOrder
    fileSize?: SortOrder
    checksum?: SortOrder
    ownerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AssetMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    artist?: SortOrder
    album?: SortOrder
    isrc?: SortOrder
    filename?: SortOrder
    file?: SortOrder
    image?: SortOrder
    type?: SortOrder
    status?: SortOrder
    duration?: SortOrder
    sampleRate?: SortOrder
    bitRate?: SortOrder
    channels?: SortOrder
    fileSize?: SortOrder
    checksum?: SortOrder
    ownerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AssetSumOrderByAggregateInput = {
    duration?: SortOrder
    sampleRate?: SortOrder
    bitRate?: SortOrder
    channels?: SortOrder
    fileSize?: SortOrder
  }

  export type EnumAssetTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AssetType | EnumAssetTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AssetType[] | ListEnumAssetTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AssetType[] | ListEnumAssetTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAssetTypeWithAggregatesFilter<$PrismaModel> | $Enums.AssetType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAssetTypeFilter<$PrismaModel>
    _max?: NestedEnumAssetTypeFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type AssetScalarRelationFilter = {
    is?: AssetWhereInput
    isNot?: AssetWhereInput
  }

  export type AudioFingerprintCountOrderByAggregateInput = {
    id?: SortOrder
    algorithm?: SortOrder
    version?: SortOrder
    generatedAt?: SortOrder
    assetId?: SortOrder
  }

  export type AudioFingerprintMaxOrderByAggregateInput = {
    id?: SortOrder
    algorithm?: SortOrder
    version?: SortOrder
    generatedAt?: SortOrder
    assetId?: SortOrder
  }

  export type AudioFingerprintMinOrderByAggregateInput = {
    id?: SortOrder
    algorithm?: SortOrder
    version?: SortOrder
    generatedAt?: SortOrder
    assetId?: SortOrder
  }

  export type BigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type AudioFingerprintScalarRelationFilter = {
    is?: AudioFingerprintWhereInput
    isNot?: AudioFingerprintWhereInput
  }

  export type FingerprintHashCountOrderByAggregateInput = {
    id?: SortOrder
    hash?: SortOrder
    offsetMs?: SortOrder
    audioFingerprintId?: SortOrder
    assetId?: SortOrder
  }

  export type FingerprintHashAvgOrderByAggregateInput = {
    id?: SortOrder
    hash?: SortOrder
    offsetMs?: SortOrder
  }

  export type FingerprintHashMaxOrderByAggregateInput = {
    id?: SortOrder
    hash?: SortOrder
    offsetMs?: SortOrder
    audioFingerprintId?: SortOrder
    assetId?: SortOrder
  }

  export type FingerprintHashMinOrderByAggregateInput = {
    id?: SortOrder
    hash?: SortOrder
    offsetMs?: SortOrder
    audioFingerprintId?: SortOrder
    assetId?: SortOrder
  }

  export type FingerprintHashSumOrderByAggregateInput = {
    id?: SortOrder
    hash?: SortOrder
    offsetMs?: SortOrder
  }

  export type BigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type WatermarkCountOrderByAggregateInput = {
    id?: SortOrder
    algorithm?: SortOrder
    payload?: SortOrder
    embeddedAt?: SortOrder
    assetId?: SortOrder
  }

  export type WatermarkMaxOrderByAggregateInput = {
    id?: SortOrder
    algorithm?: SortOrder
    payload?: SortOrder
    embeddedAt?: SortOrder
    assetId?: SortOrder
  }

  export type WatermarkMinOrderByAggregateInput = {
    id?: SortOrder
    algorithm?: SortOrder
    payload?: SortOrder
    embeddedAt?: SortOrder
    assetId?: SortOrder
  }

  export type MonitoringSessionListRelationFilter = {
    every?: MonitoringSessionWhereInput
    some?: MonitoringSessionWhereInput
    none?: MonitoringSessionWhereInput
  }

  export type MonitoringSessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BroadcasterCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    website?: SortOrder
    streamUrl?: SortOrder
    country?: SortOrder
    frequency?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BroadcasterMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    website?: SortOrder
    streamUrl?: SortOrder
    country?: SortOrder
    frequency?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BroadcasterMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    website?: SortOrder
    streamUrl?: SortOrder
    country?: SortOrder
    frequency?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BroadcasterScalarRelationFilter = {
    is?: BroadcasterWhereInput
    isNot?: BroadcasterWhereInput
  }

  export type MonitoringSessionBroadcasterIdStartedAtCompoundUniqueInput = {
    broadcasterId: string
    startedAt: Date | string
  }

  export type MonitoringSessionCountOrderByAggregateInput = {
    id?: SortOrder
    broadcasterId?: SortOrder
    startedAt?: SortOrder
    endedAt?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type MonitoringSessionMaxOrderByAggregateInput = {
    id?: SortOrder
    broadcasterId?: SortOrder
    startedAt?: SortOrder
    endedAt?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type MonitoringSessionMinOrderByAggregateInput = {
    id?: SortOrder
    broadcasterId?: SortOrder
    startedAt?: SortOrder
    endedAt?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type UuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type EnumDetectionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.DetectionStatus | EnumDetectionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DetectionStatus[] | ListEnumDetectionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.DetectionStatus[] | ListEnumDetectionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumDetectionStatusFilter<$PrismaModel> | $Enums.DetectionStatus
  }

  export type MonitoringSessionNullableScalarRelationFilter = {
    is?: MonitoringSessionWhereInput | null
    isNot?: MonitoringSessionWhereInput | null
  }

  export type DetectionAssetIdBroadcasterIdBroadcastAtCompoundUniqueInput = {
    assetId: string
    broadcasterId: string
    broadcastAt: Date | string
  }

  export type DetectionCountOrderByAggregateInput = {
    id?: SortOrder
    assetId?: SortOrder
    broadcasterId?: SortOrder
    sessionId?: SortOrder
    broadcastAt?: SortOrder
    detectedAt?: SortOrder
    confidence?: SortOrder
    startOffset?: SortOrder
    endOffset?: SortOrder
    duration?: SortOrder
    engineVersion?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type DetectionAvgOrderByAggregateInput = {
    confidence?: SortOrder
    startOffset?: SortOrder
    endOffset?: SortOrder
    duration?: SortOrder
  }

  export type DetectionMaxOrderByAggregateInput = {
    id?: SortOrder
    assetId?: SortOrder
    broadcasterId?: SortOrder
    sessionId?: SortOrder
    broadcastAt?: SortOrder
    detectedAt?: SortOrder
    confidence?: SortOrder
    startOffset?: SortOrder
    endOffset?: SortOrder
    duration?: SortOrder
    engineVersion?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type DetectionMinOrderByAggregateInput = {
    id?: SortOrder
    assetId?: SortOrder
    broadcasterId?: SortOrder
    sessionId?: SortOrder
    broadcastAt?: SortOrder
    detectedAt?: SortOrder
    confidence?: SortOrder
    startOffset?: SortOrder
    endOffset?: SortOrder
    duration?: SortOrder
    engineVersion?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type DetectionSumOrderByAggregateInput = {
    confidence?: SortOrder
    startOffset?: SortOrder
    endOffset?: SortOrder
    duration?: SortOrder
  }

  export type UuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type EnumDetectionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DetectionStatus | EnumDetectionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DetectionStatus[] | ListEnumDetectionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.DetectionStatus[] | ListEnumDetectionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumDetectionStatusWithAggregatesFilter<$PrismaModel> | $Enums.DetectionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDetectionStatusFilter<$PrismaModel>
    _max?: NestedEnumDetectionStatusFilter<$PrismaModel>
  }

  export type AssetCreateNestedManyWithoutOwnerInput = {
    create?: XOR<AssetCreateWithoutOwnerInput, AssetUncheckedCreateWithoutOwnerInput> | AssetCreateWithoutOwnerInput[] | AssetUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: AssetCreateOrConnectWithoutOwnerInput | AssetCreateOrConnectWithoutOwnerInput[]
    createMany?: AssetCreateManyOwnerInputEnvelope
    connect?: AssetWhereUniqueInput | AssetWhereUniqueInput[]
  }

  export type AssetUncheckedCreateNestedManyWithoutOwnerInput = {
    create?: XOR<AssetCreateWithoutOwnerInput, AssetUncheckedCreateWithoutOwnerInput> | AssetCreateWithoutOwnerInput[] | AssetUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: AssetCreateOrConnectWithoutOwnerInput | AssetCreateOrConnectWithoutOwnerInput[]
    createMany?: AssetCreateManyOwnerInputEnvelope
    connect?: AssetWhereUniqueInput | AssetWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumUserRoleFieldUpdateOperationsInput = {
    set?: $Enums.UserRole
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type EnumStatusFieldUpdateOperationsInput = {
    set?: $Enums.Status
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type AssetUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<AssetCreateWithoutOwnerInput, AssetUncheckedCreateWithoutOwnerInput> | AssetCreateWithoutOwnerInput[] | AssetUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: AssetCreateOrConnectWithoutOwnerInput | AssetCreateOrConnectWithoutOwnerInput[]
    upsert?: AssetUpsertWithWhereUniqueWithoutOwnerInput | AssetUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: AssetCreateManyOwnerInputEnvelope
    set?: AssetWhereUniqueInput | AssetWhereUniqueInput[]
    disconnect?: AssetWhereUniqueInput | AssetWhereUniqueInput[]
    delete?: AssetWhereUniqueInput | AssetWhereUniqueInput[]
    connect?: AssetWhereUniqueInput | AssetWhereUniqueInput[]
    update?: AssetUpdateWithWhereUniqueWithoutOwnerInput | AssetUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: AssetUpdateManyWithWhereWithoutOwnerInput | AssetUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: AssetScalarWhereInput | AssetScalarWhereInput[]
  }

  export type AssetUncheckedUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<AssetCreateWithoutOwnerInput, AssetUncheckedCreateWithoutOwnerInput> | AssetCreateWithoutOwnerInput[] | AssetUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: AssetCreateOrConnectWithoutOwnerInput | AssetCreateOrConnectWithoutOwnerInput[]
    upsert?: AssetUpsertWithWhereUniqueWithoutOwnerInput | AssetUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: AssetCreateManyOwnerInputEnvelope
    set?: AssetWhereUniqueInput | AssetWhereUniqueInput[]
    disconnect?: AssetWhereUniqueInput | AssetWhereUniqueInput[]
    delete?: AssetWhereUniqueInput | AssetWhereUniqueInput[]
    connect?: AssetWhereUniqueInput | AssetWhereUniqueInput[]
    update?: AssetUpdateWithWhereUniqueWithoutOwnerInput | AssetUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: AssetUpdateManyWithWhereWithoutOwnerInput | AssetUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: AssetScalarWhereInput | AssetScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutAssetsInput = {
    create?: XOR<UserCreateWithoutAssetsInput, UserUncheckedCreateWithoutAssetsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAssetsInput
    connect?: UserWhereUniqueInput
  }

  export type AudioFingerprintCreateNestedOneWithoutAssetInput = {
    create?: XOR<AudioFingerprintCreateWithoutAssetInput, AudioFingerprintUncheckedCreateWithoutAssetInput>
    connectOrCreate?: AudioFingerprintCreateOrConnectWithoutAssetInput
    connect?: AudioFingerprintWhereUniqueInput
  }

  export type FingerprintHashCreateNestedManyWithoutAssetInput = {
    create?: XOR<FingerprintHashCreateWithoutAssetInput, FingerprintHashUncheckedCreateWithoutAssetInput> | FingerprintHashCreateWithoutAssetInput[] | FingerprintHashUncheckedCreateWithoutAssetInput[]
    connectOrCreate?: FingerprintHashCreateOrConnectWithoutAssetInput | FingerprintHashCreateOrConnectWithoutAssetInput[]
    createMany?: FingerprintHashCreateManyAssetInputEnvelope
    connect?: FingerprintHashWhereUniqueInput | FingerprintHashWhereUniqueInput[]
  }

  export type WatermarkCreateNestedOneWithoutAssetInput = {
    create?: XOR<WatermarkCreateWithoutAssetInput, WatermarkUncheckedCreateWithoutAssetInput>
    connectOrCreate?: WatermarkCreateOrConnectWithoutAssetInput
    connect?: WatermarkWhereUniqueInput
  }

  export type DetectionCreateNestedManyWithoutAssetInput = {
    create?: XOR<DetectionCreateWithoutAssetInput, DetectionUncheckedCreateWithoutAssetInput> | DetectionCreateWithoutAssetInput[] | DetectionUncheckedCreateWithoutAssetInput[]
    connectOrCreate?: DetectionCreateOrConnectWithoutAssetInput | DetectionCreateOrConnectWithoutAssetInput[]
    createMany?: DetectionCreateManyAssetInputEnvelope
    connect?: DetectionWhereUniqueInput | DetectionWhereUniqueInput[]
  }

  export type AudioFingerprintUncheckedCreateNestedOneWithoutAssetInput = {
    create?: XOR<AudioFingerprintCreateWithoutAssetInput, AudioFingerprintUncheckedCreateWithoutAssetInput>
    connectOrCreate?: AudioFingerprintCreateOrConnectWithoutAssetInput
    connect?: AudioFingerprintWhereUniqueInput
  }

  export type FingerprintHashUncheckedCreateNestedManyWithoutAssetInput = {
    create?: XOR<FingerprintHashCreateWithoutAssetInput, FingerprintHashUncheckedCreateWithoutAssetInput> | FingerprintHashCreateWithoutAssetInput[] | FingerprintHashUncheckedCreateWithoutAssetInput[]
    connectOrCreate?: FingerprintHashCreateOrConnectWithoutAssetInput | FingerprintHashCreateOrConnectWithoutAssetInput[]
    createMany?: FingerprintHashCreateManyAssetInputEnvelope
    connect?: FingerprintHashWhereUniqueInput | FingerprintHashWhereUniqueInput[]
  }

  export type WatermarkUncheckedCreateNestedOneWithoutAssetInput = {
    create?: XOR<WatermarkCreateWithoutAssetInput, WatermarkUncheckedCreateWithoutAssetInput>
    connectOrCreate?: WatermarkCreateOrConnectWithoutAssetInput
    connect?: WatermarkWhereUniqueInput
  }

  export type DetectionUncheckedCreateNestedManyWithoutAssetInput = {
    create?: XOR<DetectionCreateWithoutAssetInput, DetectionUncheckedCreateWithoutAssetInput> | DetectionCreateWithoutAssetInput[] | DetectionUncheckedCreateWithoutAssetInput[]
    connectOrCreate?: DetectionCreateOrConnectWithoutAssetInput | DetectionCreateOrConnectWithoutAssetInput[]
    createMany?: DetectionCreateManyAssetInputEnvelope
    connect?: DetectionWhereUniqueInput | DetectionWhereUniqueInput[]
  }

  export type EnumAssetTypeFieldUpdateOperationsInput = {
    set?: $Enums.AssetType
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutAssetsNestedInput = {
    create?: XOR<UserCreateWithoutAssetsInput, UserUncheckedCreateWithoutAssetsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAssetsInput
    upsert?: UserUpsertWithoutAssetsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAssetsInput, UserUpdateWithoutAssetsInput>, UserUncheckedUpdateWithoutAssetsInput>
  }

  export type AudioFingerprintUpdateOneWithoutAssetNestedInput = {
    create?: XOR<AudioFingerprintCreateWithoutAssetInput, AudioFingerprintUncheckedCreateWithoutAssetInput>
    connectOrCreate?: AudioFingerprintCreateOrConnectWithoutAssetInput
    upsert?: AudioFingerprintUpsertWithoutAssetInput
    disconnect?: AudioFingerprintWhereInput | boolean
    delete?: AudioFingerprintWhereInput | boolean
    connect?: AudioFingerprintWhereUniqueInput
    update?: XOR<XOR<AudioFingerprintUpdateToOneWithWhereWithoutAssetInput, AudioFingerprintUpdateWithoutAssetInput>, AudioFingerprintUncheckedUpdateWithoutAssetInput>
  }

  export type FingerprintHashUpdateManyWithoutAssetNestedInput = {
    create?: XOR<FingerprintHashCreateWithoutAssetInput, FingerprintHashUncheckedCreateWithoutAssetInput> | FingerprintHashCreateWithoutAssetInput[] | FingerprintHashUncheckedCreateWithoutAssetInput[]
    connectOrCreate?: FingerprintHashCreateOrConnectWithoutAssetInput | FingerprintHashCreateOrConnectWithoutAssetInput[]
    upsert?: FingerprintHashUpsertWithWhereUniqueWithoutAssetInput | FingerprintHashUpsertWithWhereUniqueWithoutAssetInput[]
    createMany?: FingerprintHashCreateManyAssetInputEnvelope
    set?: FingerprintHashWhereUniqueInput | FingerprintHashWhereUniqueInput[]
    disconnect?: FingerprintHashWhereUniqueInput | FingerprintHashWhereUniqueInput[]
    delete?: FingerprintHashWhereUniqueInput | FingerprintHashWhereUniqueInput[]
    connect?: FingerprintHashWhereUniqueInput | FingerprintHashWhereUniqueInput[]
    update?: FingerprintHashUpdateWithWhereUniqueWithoutAssetInput | FingerprintHashUpdateWithWhereUniqueWithoutAssetInput[]
    updateMany?: FingerprintHashUpdateManyWithWhereWithoutAssetInput | FingerprintHashUpdateManyWithWhereWithoutAssetInput[]
    deleteMany?: FingerprintHashScalarWhereInput | FingerprintHashScalarWhereInput[]
  }

  export type WatermarkUpdateOneWithoutAssetNestedInput = {
    create?: XOR<WatermarkCreateWithoutAssetInput, WatermarkUncheckedCreateWithoutAssetInput>
    connectOrCreate?: WatermarkCreateOrConnectWithoutAssetInput
    upsert?: WatermarkUpsertWithoutAssetInput
    disconnect?: WatermarkWhereInput | boolean
    delete?: WatermarkWhereInput | boolean
    connect?: WatermarkWhereUniqueInput
    update?: XOR<XOR<WatermarkUpdateToOneWithWhereWithoutAssetInput, WatermarkUpdateWithoutAssetInput>, WatermarkUncheckedUpdateWithoutAssetInput>
  }

  export type DetectionUpdateManyWithoutAssetNestedInput = {
    create?: XOR<DetectionCreateWithoutAssetInput, DetectionUncheckedCreateWithoutAssetInput> | DetectionCreateWithoutAssetInput[] | DetectionUncheckedCreateWithoutAssetInput[]
    connectOrCreate?: DetectionCreateOrConnectWithoutAssetInput | DetectionCreateOrConnectWithoutAssetInput[]
    upsert?: DetectionUpsertWithWhereUniqueWithoutAssetInput | DetectionUpsertWithWhereUniqueWithoutAssetInput[]
    createMany?: DetectionCreateManyAssetInputEnvelope
    set?: DetectionWhereUniqueInput | DetectionWhereUniqueInput[]
    disconnect?: DetectionWhereUniqueInput | DetectionWhereUniqueInput[]
    delete?: DetectionWhereUniqueInput | DetectionWhereUniqueInput[]
    connect?: DetectionWhereUniqueInput | DetectionWhereUniqueInput[]
    update?: DetectionUpdateWithWhereUniqueWithoutAssetInput | DetectionUpdateWithWhereUniqueWithoutAssetInput[]
    updateMany?: DetectionUpdateManyWithWhereWithoutAssetInput | DetectionUpdateManyWithWhereWithoutAssetInput[]
    deleteMany?: DetectionScalarWhereInput | DetectionScalarWhereInput[]
  }

  export type AudioFingerprintUncheckedUpdateOneWithoutAssetNestedInput = {
    create?: XOR<AudioFingerprintCreateWithoutAssetInput, AudioFingerprintUncheckedCreateWithoutAssetInput>
    connectOrCreate?: AudioFingerprintCreateOrConnectWithoutAssetInput
    upsert?: AudioFingerprintUpsertWithoutAssetInput
    disconnect?: AudioFingerprintWhereInput | boolean
    delete?: AudioFingerprintWhereInput | boolean
    connect?: AudioFingerprintWhereUniqueInput
    update?: XOR<XOR<AudioFingerprintUpdateToOneWithWhereWithoutAssetInput, AudioFingerprintUpdateWithoutAssetInput>, AudioFingerprintUncheckedUpdateWithoutAssetInput>
  }

  export type FingerprintHashUncheckedUpdateManyWithoutAssetNestedInput = {
    create?: XOR<FingerprintHashCreateWithoutAssetInput, FingerprintHashUncheckedCreateWithoutAssetInput> | FingerprintHashCreateWithoutAssetInput[] | FingerprintHashUncheckedCreateWithoutAssetInput[]
    connectOrCreate?: FingerprintHashCreateOrConnectWithoutAssetInput | FingerprintHashCreateOrConnectWithoutAssetInput[]
    upsert?: FingerprintHashUpsertWithWhereUniqueWithoutAssetInput | FingerprintHashUpsertWithWhereUniqueWithoutAssetInput[]
    createMany?: FingerprintHashCreateManyAssetInputEnvelope
    set?: FingerprintHashWhereUniqueInput | FingerprintHashWhereUniqueInput[]
    disconnect?: FingerprintHashWhereUniqueInput | FingerprintHashWhereUniqueInput[]
    delete?: FingerprintHashWhereUniqueInput | FingerprintHashWhereUniqueInput[]
    connect?: FingerprintHashWhereUniqueInput | FingerprintHashWhereUniqueInput[]
    update?: FingerprintHashUpdateWithWhereUniqueWithoutAssetInput | FingerprintHashUpdateWithWhereUniqueWithoutAssetInput[]
    updateMany?: FingerprintHashUpdateManyWithWhereWithoutAssetInput | FingerprintHashUpdateManyWithWhereWithoutAssetInput[]
    deleteMany?: FingerprintHashScalarWhereInput | FingerprintHashScalarWhereInput[]
  }

  export type WatermarkUncheckedUpdateOneWithoutAssetNestedInput = {
    create?: XOR<WatermarkCreateWithoutAssetInput, WatermarkUncheckedCreateWithoutAssetInput>
    connectOrCreate?: WatermarkCreateOrConnectWithoutAssetInput
    upsert?: WatermarkUpsertWithoutAssetInput
    disconnect?: WatermarkWhereInput | boolean
    delete?: WatermarkWhereInput | boolean
    connect?: WatermarkWhereUniqueInput
    update?: XOR<XOR<WatermarkUpdateToOneWithWhereWithoutAssetInput, WatermarkUpdateWithoutAssetInput>, WatermarkUncheckedUpdateWithoutAssetInput>
  }

  export type DetectionUncheckedUpdateManyWithoutAssetNestedInput = {
    create?: XOR<DetectionCreateWithoutAssetInput, DetectionUncheckedCreateWithoutAssetInput> | DetectionCreateWithoutAssetInput[] | DetectionUncheckedCreateWithoutAssetInput[]
    connectOrCreate?: DetectionCreateOrConnectWithoutAssetInput | DetectionCreateOrConnectWithoutAssetInput[]
    upsert?: DetectionUpsertWithWhereUniqueWithoutAssetInput | DetectionUpsertWithWhereUniqueWithoutAssetInput[]
    createMany?: DetectionCreateManyAssetInputEnvelope
    set?: DetectionWhereUniqueInput | DetectionWhereUniqueInput[]
    disconnect?: DetectionWhereUniqueInput | DetectionWhereUniqueInput[]
    delete?: DetectionWhereUniqueInput | DetectionWhereUniqueInput[]
    connect?: DetectionWhereUniqueInput | DetectionWhereUniqueInput[]
    update?: DetectionUpdateWithWhereUniqueWithoutAssetInput | DetectionUpdateWithWhereUniqueWithoutAssetInput[]
    updateMany?: DetectionUpdateManyWithWhereWithoutAssetInput | DetectionUpdateManyWithWhereWithoutAssetInput[]
    deleteMany?: DetectionScalarWhereInput | DetectionScalarWhereInput[]
  }

  export type AssetCreateNestedOneWithoutFingerprintInput = {
    create?: XOR<AssetCreateWithoutFingerprintInput, AssetUncheckedCreateWithoutFingerprintInput>
    connectOrCreate?: AssetCreateOrConnectWithoutFingerprintInput
    connect?: AssetWhereUniqueInput
  }

  export type FingerprintHashCreateNestedManyWithoutAudioFingerprintInput = {
    create?: XOR<FingerprintHashCreateWithoutAudioFingerprintInput, FingerprintHashUncheckedCreateWithoutAudioFingerprintInput> | FingerprintHashCreateWithoutAudioFingerprintInput[] | FingerprintHashUncheckedCreateWithoutAudioFingerprintInput[]
    connectOrCreate?: FingerprintHashCreateOrConnectWithoutAudioFingerprintInput | FingerprintHashCreateOrConnectWithoutAudioFingerprintInput[]
    createMany?: FingerprintHashCreateManyAudioFingerprintInputEnvelope
    connect?: FingerprintHashWhereUniqueInput | FingerprintHashWhereUniqueInput[]
  }

  export type FingerprintHashUncheckedCreateNestedManyWithoutAudioFingerprintInput = {
    create?: XOR<FingerprintHashCreateWithoutAudioFingerprintInput, FingerprintHashUncheckedCreateWithoutAudioFingerprintInput> | FingerprintHashCreateWithoutAudioFingerprintInput[] | FingerprintHashUncheckedCreateWithoutAudioFingerprintInput[]
    connectOrCreate?: FingerprintHashCreateOrConnectWithoutAudioFingerprintInput | FingerprintHashCreateOrConnectWithoutAudioFingerprintInput[]
    createMany?: FingerprintHashCreateManyAudioFingerprintInputEnvelope
    connect?: FingerprintHashWhereUniqueInput | FingerprintHashWhereUniqueInput[]
  }

  export type AssetUpdateOneRequiredWithoutFingerprintNestedInput = {
    create?: XOR<AssetCreateWithoutFingerprintInput, AssetUncheckedCreateWithoutFingerprintInput>
    connectOrCreate?: AssetCreateOrConnectWithoutFingerprintInput
    upsert?: AssetUpsertWithoutFingerprintInput
    connect?: AssetWhereUniqueInput
    update?: XOR<XOR<AssetUpdateToOneWithWhereWithoutFingerprintInput, AssetUpdateWithoutFingerprintInput>, AssetUncheckedUpdateWithoutFingerprintInput>
  }

  export type FingerprintHashUpdateManyWithoutAudioFingerprintNestedInput = {
    create?: XOR<FingerprintHashCreateWithoutAudioFingerprintInput, FingerprintHashUncheckedCreateWithoutAudioFingerprintInput> | FingerprintHashCreateWithoutAudioFingerprintInput[] | FingerprintHashUncheckedCreateWithoutAudioFingerprintInput[]
    connectOrCreate?: FingerprintHashCreateOrConnectWithoutAudioFingerprintInput | FingerprintHashCreateOrConnectWithoutAudioFingerprintInput[]
    upsert?: FingerprintHashUpsertWithWhereUniqueWithoutAudioFingerprintInput | FingerprintHashUpsertWithWhereUniqueWithoutAudioFingerprintInput[]
    createMany?: FingerprintHashCreateManyAudioFingerprintInputEnvelope
    set?: FingerprintHashWhereUniqueInput | FingerprintHashWhereUniqueInput[]
    disconnect?: FingerprintHashWhereUniqueInput | FingerprintHashWhereUniqueInput[]
    delete?: FingerprintHashWhereUniqueInput | FingerprintHashWhereUniqueInput[]
    connect?: FingerprintHashWhereUniqueInput | FingerprintHashWhereUniqueInput[]
    update?: FingerprintHashUpdateWithWhereUniqueWithoutAudioFingerprintInput | FingerprintHashUpdateWithWhereUniqueWithoutAudioFingerprintInput[]
    updateMany?: FingerprintHashUpdateManyWithWhereWithoutAudioFingerprintInput | FingerprintHashUpdateManyWithWhereWithoutAudioFingerprintInput[]
    deleteMany?: FingerprintHashScalarWhereInput | FingerprintHashScalarWhereInput[]
  }

  export type FingerprintHashUncheckedUpdateManyWithoutAudioFingerprintNestedInput = {
    create?: XOR<FingerprintHashCreateWithoutAudioFingerprintInput, FingerprintHashUncheckedCreateWithoutAudioFingerprintInput> | FingerprintHashCreateWithoutAudioFingerprintInput[] | FingerprintHashUncheckedCreateWithoutAudioFingerprintInput[]
    connectOrCreate?: FingerprintHashCreateOrConnectWithoutAudioFingerprintInput | FingerprintHashCreateOrConnectWithoutAudioFingerprintInput[]
    upsert?: FingerprintHashUpsertWithWhereUniqueWithoutAudioFingerprintInput | FingerprintHashUpsertWithWhereUniqueWithoutAudioFingerprintInput[]
    createMany?: FingerprintHashCreateManyAudioFingerprintInputEnvelope
    set?: FingerprintHashWhereUniqueInput | FingerprintHashWhereUniqueInput[]
    disconnect?: FingerprintHashWhereUniqueInput | FingerprintHashWhereUniqueInput[]
    delete?: FingerprintHashWhereUniqueInput | FingerprintHashWhereUniqueInput[]
    connect?: FingerprintHashWhereUniqueInput | FingerprintHashWhereUniqueInput[]
    update?: FingerprintHashUpdateWithWhereUniqueWithoutAudioFingerprintInput | FingerprintHashUpdateWithWhereUniqueWithoutAudioFingerprintInput[]
    updateMany?: FingerprintHashUpdateManyWithWhereWithoutAudioFingerprintInput | FingerprintHashUpdateManyWithWhereWithoutAudioFingerprintInput[]
    deleteMany?: FingerprintHashScalarWhereInput | FingerprintHashScalarWhereInput[]
  }

  export type AudioFingerprintCreateNestedOneWithoutHashesInput = {
    create?: XOR<AudioFingerprintCreateWithoutHashesInput, AudioFingerprintUncheckedCreateWithoutHashesInput>
    connectOrCreate?: AudioFingerprintCreateOrConnectWithoutHashesInput
    connect?: AudioFingerprintWhereUniqueInput
  }

  export type AssetCreateNestedOneWithoutHashesInput = {
    create?: XOR<AssetCreateWithoutHashesInput, AssetUncheckedCreateWithoutHashesInput>
    connectOrCreate?: AssetCreateOrConnectWithoutHashesInput
    connect?: AssetWhereUniqueInput
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type AudioFingerprintUpdateOneRequiredWithoutHashesNestedInput = {
    create?: XOR<AudioFingerprintCreateWithoutHashesInput, AudioFingerprintUncheckedCreateWithoutHashesInput>
    connectOrCreate?: AudioFingerprintCreateOrConnectWithoutHashesInput
    upsert?: AudioFingerprintUpsertWithoutHashesInput
    connect?: AudioFingerprintWhereUniqueInput
    update?: XOR<XOR<AudioFingerprintUpdateToOneWithWhereWithoutHashesInput, AudioFingerprintUpdateWithoutHashesInput>, AudioFingerprintUncheckedUpdateWithoutHashesInput>
  }

  export type AssetUpdateOneRequiredWithoutHashesNestedInput = {
    create?: XOR<AssetCreateWithoutHashesInput, AssetUncheckedCreateWithoutHashesInput>
    connectOrCreate?: AssetCreateOrConnectWithoutHashesInput
    upsert?: AssetUpsertWithoutHashesInput
    connect?: AssetWhereUniqueInput
    update?: XOR<XOR<AssetUpdateToOneWithWhereWithoutHashesInput, AssetUpdateWithoutHashesInput>, AssetUncheckedUpdateWithoutHashesInput>
  }

  export type AssetCreateNestedOneWithoutWatermarkInput = {
    create?: XOR<AssetCreateWithoutWatermarkInput, AssetUncheckedCreateWithoutWatermarkInput>
    connectOrCreate?: AssetCreateOrConnectWithoutWatermarkInput
    connect?: AssetWhereUniqueInput
  }

  export type AssetUpdateOneRequiredWithoutWatermarkNestedInput = {
    create?: XOR<AssetCreateWithoutWatermarkInput, AssetUncheckedCreateWithoutWatermarkInput>
    connectOrCreate?: AssetCreateOrConnectWithoutWatermarkInput
    upsert?: AssetUpsertWithoutWatermarkInput
    connect?: AssetWhereUniqueInput
    update?: XOR<XOR<AssetUpdateToOneWithWhereWithoutWatermarkInput, AssetUpdateWithoutWatermarkInput>, AssetUncheckedUpdateWithoutWatermarkInput>
  }

  export type MonitoringSessionCreateNestedManyWithoutBroadcasterInput = {
    create?: XOR<MonitoringSessionCreateWithoutBroadcasterInput, MonitoringSessionUncheckedCreateWithoutBroadcasterInput> | MonitoringSessionCreateWithoutBroadcasterInput[] | MonitoringSessionUncheckedCreateWithoutBroadcasterInput[]
    connectOrCreate?: MonitoringSessionCreateOrConnectWithoutBroadcasterInput | MonitoringSessionCreateOrConnectWithoutBroadcasterInput[]
    createMany?: MonitoringSessionCreateManyBroadcasterInputEnvelope
    connect?: MonitoringSessionWhereUniqueInput | MonitoringSessionWhereUniqueInput[]
  }

  export type DetectionCreateNestedManyWithoutBroadcasterInput = {
    create?: XOR<DetectionCreateWithoutBroadcasterInput, DetectionUncheckedCreateWithoutBroadcasterInput> | DetectionCreateWithoutBroadcasterInput[] | DetectionUncheckedCreateWithoutBroadcasterInput[]
    connectOrCreate?: DetectionCreateOrConnectWithoutBroadcasterInput | DetectionCreateOrConnectWithoutBroadcasterInput[]
    createMany?: DetectionCreateManyBroadcasterInputEnvelope
    connect?: DetectionWhereUniqueInput | DetectionWhereUniqueInput[]
  }

  export type MonitoringSessionUncheckedCreateNestedManyWithoutBroadcasterInput = {
    create?: XOR<MonitoringSessionCreateWithoutBroadcasterInput, MonitoringSessionUncheckedCreateWithoutBroadcasterInput> | MonitoringSessionCreateWithoutBroadcasterInput[] | MonitoringSessionUncheckedCreateWithoutBroadcasterInput[]
    connectOrCreate?: MonitoringSessionCreateOrConnectWithoutBroadcasterInput | MonitoringSessionCreateOrConnectWithoutBroadcasterInput[]
    createMany?: MonitoringSessionCreateManyBroadcasterInputEnvelope
    connect?: MonitoringSessionWhereUniqueInput | MonitoringSessionWhereUniqueInput[]
  }

  export type DetectionUncheckedCreateNestedManyWithoutBroadcasterInput = {
    create?: XOR<DetectionCreateWithoutBroadcasterInput, DetectionUncheckedCreateWithoutBroadcasterInput> | DetectionCreateWithoutBroadcasterInput[] | DetectionUncheckedCreateWithoutBroadcasterInput[]
    connectOrCreate?: DetectionCreateOrConnectWithoutBroadcasterInput | DetectionCreateOrConnectWithoutBroadcasterInput[]
    createMany?: DetectionCreateManyBroadcasterInputEnvelope
    connect?: DetectionWhereUniqueInput | DetectionWhereUniqueInput[]
  }

  export type MonitoringSessionUpdateManyWithoutBroadcasterNestedInput = {
    create?: XOR<MonitoringSessionCreateWithoutBroadcasterInput, MonitoringSessionUncheckedCreateWithoutBroadcasterInput> | MonitoringSessionCreateWithoutBroadcasterInput[] | MonitoringSessionUncheckedCreateWithoutBroadcasterInput[]
    connectOrCreate?: MonitoringSessionCreateOrConnectWithoutBroadcasterInput | MonitoringSessionCreateOrConnectWithoutBroadcasterInput[]
    upsert?: MonitoringSessionUpsertWithWhereUniqueWithoutBroadcasterInput | MonitoringSessionUpsertWithWhereUniqueWithoutBroadcasterInput[]
    createMany?: MonitoringSessionCreateManyBroadcasterInputEnvelope
    set?: MonitoringSessionWhereUniqueInput | MonitoringSessionWhereUniqueInput[]
    disconnect?: MonitoringSessionWhereUniqueInput | MonitoringSessionWhereUniqueInput[]
    delete?: MonitoringSessionWhereUniqueInput | MonitoringSessionWhereUniqueInput[]
    connect?: MonitoringSessionWhereUniqueInput | MonitoringSessionWhereUniqueInput[]
    update?: MonitoringSessionUpdateWithWhereUniqueWithoutBroadcasterInput | MonitoringSessionUpdateWithWhereUniqueWithoutBroadcasterInput[]
    updateMany?: MonitoringSessionUpdateManyWithWhereWithoutBroadcasterInput | MonitoringSessionUpdateManyWithWhereWithoutBroadcasterInput[]
    deleteMany?: MonitoringSessionScalarWhereInput | MonitoringSessionScalarWhereInput[]
  }

  export type DetectionUpdateManyWithoutBroadcasterNestedInput = {
    create?: XOR<DetectionCreateWithoutBroadcasterInput, DetectionUncheckedCreateWithoutBroadcasterInput> | DetectionCreateWithoutBroadcasterInput[] | DetectionUncheckedCreateWithoutBroadcasterInput[]
    connectOrCreate?: DetectionCreateOrConnectWithoutBroadcasterInput | DetectionCreateOrConnectWithoutBroadcasterInput[]
    upsert?: DetectionUpsertWithWhereUniqueWithoutBroadcasterInput | DetectionUpsertWithWhereUniqueWithoutBroadcasterInput[]
    createMany?: DetectionCreateManyBroadcasterInputEnvelope
    set?: DetectionWhereUniqueInput | DetectionWhereUniqueInput[]
    disconnect?: DetectionWhereUniqueInput | DetectionWhereUniqueInput[]
    delete?: DetectionWhereUniqueInput | DetectionWhereUniqueInput[]
    connect?: DetectionWhereUniqueInput | DetectionWhereUniqueInput[]
    update?: DetectionUpdateWithWhereUniqueWithoutBroadcasterInput | DetectionUpdateWithWhereUniqueWithoutBroadcasterInput[]
    updateMany?: DetectionUpdateManyWithWhereWithoutBroadcasterInput | DetectionUpdateManyWithWhereWithoutBroadcasterInput[]
    deleteMany?: DetectionScalarWhereInput | DetectionScalarWhereInput[]
  }

  export type MonitoringSessionUncheckedUpdateManyWithoutBroadcasterNestedInput = {
    create?: XOR<MonitoringSessionCreateWithoutBroadcasterInput, MonitoringSessionUncheckedCreateWithoutBroadcasterInput> | MonitoringSessionCreateWithoutBroadcasterInput[] | MonitoringSessionUncheckedCreateWithoutBroadcasterInput[]
    connectOrCreate?: MonitoringSessionCreateOrConnectWithoutBroadcasterInput | MonitoringSessionCreateOrConnectWithoutBroadcasterInput[]
    upsert?: MonitoringSessionUpsertWithWhereUniqueWithoutBroadcasterInput | MonitoringSessionUpsertWithWhereUniqueWithoutBroadcasterInput[]
    createMany?: MonitoringSessionCreateManyBroadcasterInputEnvelope
    set?: MonitoringSessionWhereUniqueInput | MonitoringSessionWhereUniqueInput[]
    disconnect?: MonitoringSessionWhereUniqueInput | MonitoringSessionWhereUniqueInput[]
    delete?: MonitoringSessionWhereUniqueInput | MonitoringSessionWhereUniqueInput[]
    connect?: MonitoringSessionWhereUniqueInput | MonitoringSessionWhereUniqueInput[]
    update?: MonitoringSessionUpdateWithWhereUniqueWithoutBroadcasterInput | MonitoringSessionUpdateWithWhereUniqueWithoutBroadcasterInput[]
    updateMany?: MonitoringSessionUpdateManyWithWhereWithoutBroadcasterInput | MonitoringSessionUpdateManyWithWhereWithoutBroadcasterInput[]
    deleteMany?: MonitoringSessionScalarWhereInput | MonitoringSessionScalarWhereInput[]
  }

  export type DetectionUncheckedUpdateManyWithoutBroadcasterNestedInput = {
    create?: XOR<DetectionCreateWithoutBroadcasterInput, DetectionUncheckedCreateWithoutBroadcasterInput> | DetectionCreateWithoutBroadcasterInput[] | DetectionUncheckedCreateWithoutBroadcasterInput[]
    connectOrCreate?: DetectionCreateOrConnectWithoutBroadcasterInput | DetectionCreateOrConnectWithoutBroadcasterInput[]
    upsert?: DetectionUpsertWithWhereUniqueWithoutBroadcasterInput | DetectionUpsertWithWhereUniqueWithoutBroadcasterInput[]
    createMany?: DetectionCreateManyBroadcasterInputEnvelope
    set?: DetectionWhereUniqueInput | DetectionWhereUniqueInput[]
    disconnect?: DetectionWhereUniqueInput | DetectionWhereUniqueInput[]
    delete?: DetectionWhereUniqueInput | DetectionWhereUniqueInput[]
    connect?: DetectionWhereUniqueInput | DetectionWhereUniqueInput[]
    update?: DetectionUpdateWithWhereUniqueWithoutBroadcasterInput | DetectionUpdateWithWhereUniqueWithoutBroadcasterInput[]
    updateMany?: DetectionUpdateManyWithWhereWithoutBroadcasterInput | DetectionUpdateManyWithWhereWithoutBroadcasterInput[]
    deleteMany?: DetectionScalarWhereInput | DetectionScalarWhereInput[]
  }

  export type BroadcasterCreateNestedOneWithoutMonitoringSessionsInput = {
    create?: XOR<BroadcasterCreateWithoutMonitoringSessionsInput, BroadcasterUncheckedCreateWithoutMonitoringSessionsInput>
    connectOrCreate?: BroadcasterCreateOrConnectWithoutMonitoringSessionsInput
    connect?: BroadcasterWhereUniqueInput
  }

  export type DetectionCreateNestedManyWithoutSessionInput = {
    create?: XOR<DetectionCreateWithoutSessionInput, DetectionUncheckedCreateWithoutSessionInput> | DetectionCreateWithoutSessionInput[] | DetectionUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: DetectionCreateOrConnectWithoutSessionInput | DetectionCreateOrConnectWithoutSessionInput[]
    createMany?: DetectionCreateManySessionInputEnvelope
    connect?: DetectionWhereUniqueInput | DetectionWhereUniqueInput[]
  }

  export type DetectionUncheckedCreateNestedManyWithoutSessionInput = {
    create?: XOR<DetectionCreateWithoutSessionInput, DetectionUncheckedCreateWithoutSessionInput> | DetectionCreateWithoutSessionInput[] | DetectionUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: DetectionCreateOrConnectWithoutSessionInput | DetectionCreateOrConnectWithoutSessionInput[]
    createMany?: DetectionCreateManySessionInputEnvelope
    connect?: DetectionWhereUniqueInput | DetectionWhereUniqueInput[]
  }

  export type BroadcasterUpdateOneRequiredWithoutMonitoringSessionsNestedInput = {
    create?: XOR<BroadcasterCreateWithoutMonitoringSessionsInput, BroadcasterUncheckedCreateWithoutMonitoringSessionsInput>
    connectOrCreate?: BroadcasterCreateOrConnectWithoutMonitoringSessionsInput
    upsert?: BroadcasterUpsertWithoutMonitoringSessionsInput
    connect?: BroadcasterWhereUniqueInput
    update?: XOR<XOR<BroadcasterUpdateToOneWithWhereWithoutMonitoringSessionsInput, BroadcasterUpdateWithoutMonitoringSessionsInput>, BroadcasterUncheckedUpdateWithoutMonitoringSessionsInput>
  }

  export type DetectionUpdateManyWithoutSessionNestedInput = {
    create?: XOR<DetectionCreateWithoutSessionInput, DetectionUncheckedCreateWithoutSessionInput> | DetectionCreateWithoutSessionInput[] | DetectionUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: DetectionCreateOrConnectWithoutSessionInput | DetectionCreateOrConnectWithoutSessionInput[]
    upsert?: DetectionUpsertWithWhereUniqueWithoutSessionInput | DetectionUpsertWithWhereUniqueWithoutSessionInput[]
    createMany?: DetectionCreateManySessionInputEnvelope
    set?: DetectionWhereUniqueInput | DetectionWhereUniqueInput[]
    disconnect?: DetectionWhereUniqueInput | DetectionWhereUniqueInput[]
    delete?: DetectionWhereUniqueInput | DetectionWhereUniqueInput[]
    connect?: DetectionWhereUniqueInput | DetectionWhereUniqueInput[]
    update?: DetectionUpdateWithWhereUniqueWithoutSessionInput | DetectionUpdateWithWhereUniqueWithoutSessionInput[]
    updateMany?: DetectionUpdateManyWithWhereWithoutSessionInput | DetectionUpdateManyWithWhereWithoutSessionInput[]
    deleteMany?: DetectionScalarWhereInput | DetectionScalarWhereInput[]
  }

  export type DetectionUncheckedUpdateManyWithoutSessionNestedInput = {
    create?: XOR<DetectionCreateWithoutSessionInput, DetectionUncheckedCreateWithoutSessionInput> | DetectionCreateWithoutSessionInput[] | DetectionUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: DetectionCreateOrConnectWithoutSessionInput | DetectionCreateOrConnectWithoutSessionInput[]
    upsert?: DetectionUpsertWithWhereUniqueWithoutSessionInput | DetectionUpsertWithWhereUniqueWithoutSessionInput[]
    createMany?: DetectionCreateManySessionInputEnvelope
    set?: DetectionWhereUniqueInput | DetectionWhereUniqueInput[]
    disconnect?: DetectionWhereUniqueInput | DetectionWhereUniqueInput[]
    delete?: DetectionWhereUniqueInput | DetectionWhereUniqueInput[]
    connect?: DetectionWhereUniqueInput | DetectionWhereUniqueInput[]
    update?: DetectionUpdateWithWhereUniqueWithoutSessionInput | DetectionUpdateWithWhereUniqueWithoutSessionInput[]
    updateMany?: DetectionUpdateManyWithWhereWithoutSessionInput | DetectionUpdateManyWithWhereWithoutSessionInput[]
    deleteMany?: DetectionScalarWhereInput | DetectionScalarWhereInput[]
  }

  export type AssetCreateNestedOneWithoutDetectionsInput = {
    create?: XOR<AssetCreateWithoutDetectionsInput, AssetUncheckedCreateWithoutDetectionsInput>
    connectOrCreate?: AssetCreateOrConnectWithoutDetectionsInput
    connect?: AssetWhereUniqueInput
  }

  export type BroadcasterCreateNestedOneWithoutDetectionsInput = {
    create?: XOR<BroadcasterCreateWithoutDetectionsInput, BroadcasterUncheckedCreateWithoutDetectionsInput>
    connectOrCreate?: BroadcasterCreateOrConnectWithoutDetectionsInput
    connect?: BroadcasterWhereUniqueInput
  }

  export type MonitoringSessionCreateNestedOneWithoutDetectionsInput = {
    create?: XOR<MonitoringSessionCreateWithoutDetectionsInput, MonitoringSessionUncheckedCreateWithoutDetectionsInput>
    connectOrCreate?: MonitoringSessionCreateOrConnectWithoutDetectionsInput
    connect?: MonitoringSessionWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumDetectionStatusFieldUpdateOperationsInput = {
    set?: $Enums.DetectionStatus
  }

  export type AssetUpdateOneRequiredWithoutDetectionsNestedInput = {
    create?: XOR<AssetCreateWithoutDetectionsInput, AssetUncheckedCreateWithoutDetectionsInput>
    connectOrCreate?: AssetCreateOrConnectWithoutDetectionsInput
    upsert?: AssetUpsertWithoutDetectionsInput
    connect?: AssetWhereUniqueInput
    update?: XOR<XOR<AssetUpdateToOneWithWhereWithoutDetectionsInput, AssetUpdateWithoutDetectionsInput>, AssetUncheckedUpdateWithoutDetectionsInput>
  }

  export type BroadcasterUpdateOneRequiredWithoutDetectionsNestedInput = {
    create?: XOR<BroadcasterCreateWithoutDetectionsInput, BroadcasterUncheckedCreateWithoutDetectionsInput>
    connectOrCreate?: BroadcasterCreateOrConnectWithoutDetectionsInput
    upsert?: BroadcasterUpsertWithoutDetectionsInput
    connect?: BroadcasterWhereUniqueInput
    update?: XOR<XOR<BroadcasterUpdateToOneWithWhereWithoutDetectionsInput, BroadcasterUpdateWithoutDetectionsInput>, BroadcasterUncheckedUpdateWithoutDetectionsInput>
  }

  export type MonitoringSessionUpdateOneWithoutDetectionsNestedInput = {
    create?: XOR<MonitoringSessionCreateWithoutDetectionsInput, MonitoringSessionUncheckedCreateWithoutDetectionsInput>
    connectOrCreate?: MonitoringSessionCreateOrConnectWithoutDetectionsInput
    upsert?: MonitoringSessionUpsertWithoutDetectionsInput
    disconnect?: MonitoringSessionWhereInput | boolean
    delete?: MonitoringSessionWhereInput | boolean
    connect?: MonitoringSessionWhereUniqueInput
    update?: XOR<XOR<MonitoringSessionUpdateToOneWithWhereWithoutDetectionsInput, MonitoringSessionUpdateWithoutDetectionsInput>, MonitoringSessionUncheckedUpdateWithoutDetectionsInput>
  }

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusFilter<$PrismaModel> | $Enums.Status
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusWithAggregatesFilter<$PrismaModel> | $Enums.Status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusFilter<$PrismaModel>
    _max?: NestedEnumStatusFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumAssetTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.AssetType | EnumAssetTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AssetType[] | ListEnumAssetTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AssetType[] | ListEnumAssetTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAssetTypeFilter<$PrismaModel> | $Enums.AssetType
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumAssetTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AssetType | EnumAssetTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AssetType[] | ListEnumAssetTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AssetType[] | ListEnumAssetTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAssetTypeWithAggregatesFilter<$PrismaModel> | $Enums.AssetType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAssetTypeFilter<$PrismaModel>
    _max?: NestedEnumAssetTypeFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedBigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type NestedBigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedUuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumDetectionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.DetectionStatus | EnumDetectionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DetectionStatus[] | ListEnumDetectionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.DetectionStatus[] | ListEnumDetectionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumDetectionStatusFilter<$PrismaModel> | $Enums.DetectionStatus
  }

  export type NestedUuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedEnumDetectionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DetectionStatus | EnumDetectionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DetectionStatus[] | ListEnumDetectionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.DetectionStatus[] | ListEnumDetectionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumDetectionStatusWithAggregatesFilter<$PrismaModel> | $Enums.DetectionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDetectionStatusFilter<$PrismaModel>
    _max?: NestedEnumDetectionStatusFilter<$PrismaModel>
  }

  export type AssetCreateWithoutOwnerInput = {
    id?: string
    title: string
    description?: string | null
    artist?: string | null
    album?: string | null
    isrc?: string | null
    filename?: string | null
    file?: string | null
    image?: string | null
    type?: $Enums.AssetType
    status?: $Enums.Status
    duration?: number | null
    sampleRate?: number | null
    bitRate?: number | null
    channels?: number | null
    fileSize?: number | null
    checksum?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    fingerprint?: AudioFingerprintCreateNestedOneWithoutAssetInput
    hashes?: FingerprintHashCreateNestedManyWithoutAssetInput
    watermark?: WatermarkCreateNestedOneWithoutAssetInput
    detections?: DetectionCreateNestedManyWithoutAssetInput
  }

  export type AssetUncheckedCreateWithoutOwnerInput = {
    id?: string
    title: string
    description?: string | null
    artist?: string | null
    album?: string | null
    isrc?: string | null
    filename?: string | null
    file?: string | null
    image?: string | null
    type?: $Enums.AssetType
    status?: $Enums.Status
    duration?: number | null
    sampleRate?: number | null
    bitRate?: number | null
    channels?: number | null
    fileSize?: number | null
    checksum?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    fingerprint?: AudioFingerprintUncheckedCreateNestedOneWithoutAssetInput
    hashes?: FingerprintHashUncheckedCreateNestedManyWithoutAssetInput
    watermark?: WatermarkUncheckedCreateNestedOneWithoutAssetInput
    detections?: DetectionUncheckedCreateNestedManyWithoutAssetInput
  }

  export type AssetCreateOrConnectWithoutOwnerInput = {
    where: AssetWhereUniqueInput
    create: XOR<AssetCreateWithoutOwnerInput, AssetUncheckedCreateWithoutOwnerInput>
  }

  export type AssetCreateManyOwnerInputEnvelope = {
    data: AssetCreateManyOwnerInput | AssetCreateManyOwnerInput[]
    skipDuplicates?: boolean
  }

  export type AssetUpsertWithWhereUniqueWithoutOwnerInput = {
    where: AssetWhereUniqueInput
    update: XOR<AssetUpdateWithoutOwnerInput, AssetUncheckedUpdateWithoutOwnerInput>
    create: XOR<AssetCreateWithoutOwnerInput, AssetUncheckedCreateWithoutOwnerInput>
  }

  export type AssetUpdateWithWhereUniqueWithoutOwnerInput = {
    where: AssetWhereUniqueInput
    data: XOR<AssetUpdateWithoutOwnerInput, AssetUncheckedUpdateWithoutOwnerInput>
  }

  export type AssetUpdateManyWithWhereWithoutOwnerInput = {
    where: AssetScalarWhereInput
    data: XOR<AssetUpdateManyMutationInput, AssetUncheckedUpdateManyWithoutOwnerInput>
  }

  export type AssetScalarWhereInput = {
    AND?: AssetScalarWhereInput | AssetScalarWhereInput[]
    OR?: AssetScalarWhereInput[]
    NOT?: AssetScalarWhereInput | AssetScalarWhereInput[]
    id?: UuidFilter<"Asset"> | string
    title?: StringFilter<"Asset"> | string
    description?: StringNullableFilter<"Asset"> | string | null
    artist?: StringNullableFilter<"Asset"> | string | null
    album?: StringNullableFilter<"Asset"> | string | null
    isrc?: StringNullableFilter<"Asset"> | string | null
    filename?: StringNullableFilter<"Asset"> | string | null
    file?: StringNullableFilter<"Asset"> | string | null
    image?: StringNullableFilter<"Asset"> | string | null
    type?: EnumAssetTypeFilter<"Asset"> | $Enums.AssetType
    status?: EnumStatusFilter<"Asset"> | $Enums.Status
    duration?: FloatNullableFilter<"Asset"> | number | null
    sampleRate?: IntNullableFilter<"Asset"> | number | null
    bitRate?: IntNullableFilter<"Asset"> | number | null
    channels?: IntNullableFilter<"Asset"> | number | null
    fileSize?: IntNullableFilter<"Asset"> | number | null
    checksum?: StringNullableFilter<"Asset"> | string | null
    ownerId?: UuidFilter<"Asset"> | string
    createdAt?: DateTimeFilter<"Asset"> | Date | string
    updatedAt?: DateTimeFilter<"Asset"> | Date | string
  }

  export type UserCreateWithoutAssetsInput = {
    id?: string
    name: string
    phone?: string | null
    email?: string | null
    passwordHash?: string | null
    voiceSign?: string | null
    role?: $Enums.UserRole
    image?: string | null
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    apiKeyHash?: string | null
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUncheckedCreateWithoutAssetsInput = {
    id?: string
    name: string
    phone?: string | null
    email?: string | null
    passwordHash?: string | null
    voiceSign?: string | null
    role?: $Enums.UserRole
    image?: string | null
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    apiKeyHash?: string | null
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCreateOrConnectWithoutAssetsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAssetsInput, UserUncheckedCreateWithoutAssetsInput>
  }

  export type AudioFingerprintCreateWithoutAssetInput = {
    id?: string
    algorithm?: string
    version?: string
    generatedAt?: Date | string
    hashes?: FingerprintHashCreateNestedManyWithoutAudioFingerprintInput
  }

  export type AudioFingerprintUncheckedCreateWithoutAssetInput = {
    id?: string
    algorithm?: string
    version?: string
    generatedAt?: Date | string
    hashes?: FingerprintHashUncheckedCreateNestedManyWithoutAudioFingerprintInput
  }

  export type AudioFingerprintCreateOrConnectWithoutAssetInput = {
    where: AudioFingerprintWhereUniqueInput
    create: XOR<AudioFingerprintCreateWithoutAssetInput, AudioFingerprintUncheckedCreateWithoutAssetInput>
  }

  export type FingerprintHashCreateWithoutAssetInput = {
    id?: bigint | number
    hash: bigint | number
    offsetMs: number
    audioFingerprint: AudioFingerprintCreateNestedOneWithoutHashesInput
  }

  export type FingerprintHashUncheckedCreateWithoutAssetInput = {
    id?: bigint | number
    hash: bigint | number
    offsetMs: number
    audioFingerprintId: string
  }

  export type FingerprintHashCreateOrConnectWithoutAssetInput = {
    where: FingerprintHashWhereUniqueInput
    create: XOR<FingerprintHashCreateWithoutAssetInput, FingerprintHashUncheckedCreateWithoutAssetInput>
  }

  export type FingerprintHashCreateManyAssetInputEnvelope = {
    data: FingerprintHashCreateManyAssetInput | FingerprintHashCreateManyAssetInput[]
    skipDuplicates?: boolean
  }

  export type WatermarkCreateWithoutAssetInput = {
    id?: string
    algorithm: string
    payload: string
    embeddedAt?: Date | string
  }

  export type WatermarkUncheckedCreateWithoutAssetInput = {
    id?: string
    algorithm: string
    payload: string
    embeddedAt?: Date | string
  }

  export type WatermarkCreateOrConnectWithoutAssetInput = {
    where: WatermarkWhereUniqueInput
    create: XOR<WatermarkCreateWithoutAssetInput, WatermarkUncheckedCreateWithoutAssetInput>
  }

  export type DetectionCreateWithoutAssetInput = {
    id?: string
    broadcastAt: Date | string
    detectedAt?: Date | string
    confidence: number
    startOffset?: number | null
    endOffset?: number | null
    duration?: number | null
    engineVersion: string
    status?: $Enums.DetectionStatus
    createdAt?: Date | string
    broadcaster: BroadcasterCreateNestedOneWithoutDetectionsInput
    session?: MonitoringSessionCreateNestedOneWithoutDetectionsInput
  }

  export type DetectionUncheckedCreateWithoutAssetInput = {
    id?: string
    broadcasterId: string
    sessionId?: string | null
    broadcastAt: Date | string
    detectedAt?: Date | string
    confidence: number
    startOffset?: number | null
    endOffset?: number | null
    duration?: number | null
    engineVersion: string
    status?: $Enums.DetectionStatus
    createdAt?: Date | string
  }

  export type DetectionCreateOrConnectWithoutAssetInput = {
    where: DetectionWhereUniqueInput
    create: XOR<DetectionCreateWithoutAssetInput, DetectionUncheckedCreateWithoutAssetInput>
  }

  export type DetectionCreateManyAssetInputEnvelope = {
    data: DetectionCreateManyAssetInput | DetectionCreateManyAssetInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutAssetsInput = {
    update: XOR<UserUpdateWithoutAssetsInput, UserUncheckedUpdateWithoutAssetsInput>
    create: XOR<UserCreateWithoutAssetsInput, UserUncheckedCreateWithoutAssetsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAssetsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAssetsInput, UserUncheckedUpdateWithoutAssetsInput>
  }

  export type UserUpdateWithoutAssetsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    voiceSign?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    image?: NullableStringFieldUpdateOperationsInput | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    apiKeyHash?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateWithoutAssetsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    voiceSign?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    image?: NullableStringFieldUpdateOperationsInput | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    apiKeyHash?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AudioFingerprintUpsertWithoutAssetInput = {
    update: XOR<AudioFingerprintUpdateWithoutAssetInput, AudioFingerprintUncheckedUpdateWithoutAssetInput>
    create: XOR<AudioFingerprintCreateWithoutAssetInput, AudioFingerprintUncheckedCreateWithoutAssetInput>
    where?: AudioFingerprintWhereInput
  }

  export type AudioFingerprintUpdateToOneWithWhereWithoutAssetInput = {
    where?: AudioFingerprintWhereInput
    data: XOR<AudioFingerprintUpdateWithoutAssetInput, AudioFingerprintUncheckedUpdateWithoutAssetInput>
  }

  export type AudioFingerprintUpdateWithoutAssetInput = {
    id?: StringFieldUpdateOperationsInput | string
    algorithm?: StringFieldUpdateOperationsInput | string
    version?: StringFieldUpdateOperationsInput | string
    generatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hashes?: FingerprintHashUpdateManyWithoutAudioFingerprintNestedInput
  }

  export type AudioFingerprintUncheckedUpdateWithoutAssetInput = {
    id?: StringFieldUpdateOperationsInput | string
    algorithm?: StringFieldUpdateOperationsInput | string
    version?: StringFieldUpdateOperationsInput | string
    generatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hashes?: FingerprintHashUncheckedUpdateManyWithoutAudioFingerprintNestedInput
  }

  export type FingerprintHashUpsertWithWhereUniqueWithoutAssetInput = {
    where: FingerprintHashWhereUniqueInput
    update: XOR<FingerprintHashUpdateWithoutAssetInput, FingerprintHashUncheckedUpdateWithoutAssetInput>
    create: XOR<FingerprintHashCreateWithoutAssetInput, FingerprintHashUncheckedCreateWithoutAssetInput>
  }

  export type FingerprintHashUpdateWithWhereUniqueWithoutAssetInput = {
    where: FingerprintHashWhereUniqueInput
    data: XOR<FingerprintHashUpdateWithoutAssetInput, FingerprintHashUncheckedUpdateWithoutAssetInput>
  }

  export type FingerprintHashUpdateManyWithWhereWithoutAssetInput = {
    where: FingerprintHashScalarWhereInput
    data: XOR<FingerprintHashUpdateManyMutationInput, FingerprintHashUncheckedUpdateManyWithoutAssetInput>
  }

  export type FingerprintHashScalarWhereInput = {
    AND?: FingerprintHashScalarWhereInput | FingerprintHashScalarWhereInput[]
    OR?: FingerprintHashScalarWhereInput[]
    NOT?: FingerprintHashScalarWhereInput | FingerprintHashScalarWhereInput[]
    id?: BigIntFilter<"FingerprintHash"> | bigint | number
    hash?: BigIntFilter<"FingerprintHash"> | bigint | number
    offsetMs?: IntFilter<"FingerprintHash"> | number
    audioFingerprintId?: UuidFilter<"FingerprintHash"> | string
    assetId?: UuidFilter<"FingerprintHash"> | string
  }

  export type WatermarkUpsertWithoutAssetInput = {
    update: XOR<WatermarkUpdateWithoutAssetInput, WatermarkUncheckedUpdateWithoutAssetInput>
    create: XOR<WatermarkCreateWithoutAssetInput, WatermarkUncheckedCreateWithoutAssetInput>
    where?: WatermarkWhereInput
  }

  export type WatermarkUpdateToOneWithWhereWithoutAssetInput = {
    where?: WatermarkWhereInput
    data: XOR<WatermarkUpdateWithoutAssetInput, WatermarkUncheckedUpdateWithoutAssetInput>
  }

  export type WatermarkUpdateWithoutAssetInput = {
    id?: StringFieldUpdateOperationsInput | string
    algorithm?: StringFieldUpdateOperationsInput | string
    payload?: StringFieldUpdateOperationsInput | string
    embeddedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WatermarkUncheckedUpdateWithoutAssetInput = {
    id?: StringFieldUpdateOperationsInput | string
    algorithm?: StringFieldUpdateOperationsInput | string
    payload?: StringFieldUpdateOperationsInput | string
    embeddedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DetectionUpsertWithWhereUniqueWithoutAssetInput = {
    where: DetectionWhereUniqueInput
    update: XOR<DetectionUpdateWithoutAssetInput, DetectionUncheckedUpdateWithoutAssetInput>
    create: XOR<DetectionCreateWithoutAssetInput, DetectionUncheckedCreateWithoutAssetInput>
  }

  export type DetectionUpdateWithWhereUniqueWithoutAssetInput = {
    where: DetectionWhereUniqueInput
    data: XOR<DetectionUpdateWithoutAssetInput, DetectionUncheckedUpdateWithoutAssetInput>
  }

  export type DetectionUpdateManyWithWhereWithoutAssetInput = {
    where: DetectionScalarWhereInput
    data: XOR<DetectionUpdateManyMutationInput, DetectionUncheckedUpdateManyWithoutAssetInput>
  }

  export type DetectionScalarWhereInput = {
    AND?: DetectionScalarWhereInput | DetectionScalarWhereInput[]
    OR?: DetectionScalarWhereInput[]
    NOT?: DetectionScalarWhereInput | DetectionScalarWhereInput[]
    id?: UuidFilter<"Detection"> | string
    assetId?: UuidFilter<"Detection"> | string
    broadcasterId?: UuidFilter<"Detection"> | string
    sessionId?: UuidNullableFilter<"Detection"> | string | null
    broadcastAt?: DateTimeFilter<"Detection"> | Date | string
    detectedAt?: DateTimeFilter<"Detection"> | Date | string
    confidence?: FloatFilter<"Detection"> | number
    startOffset?: FloatNullableFilter<"Detection"> | number | null
    endOffset?: FloatNullableFilter<"Detection"> | number | null
    duration?: FloatNullableFilter<"Detection"> | number | null
    engineVersion?: StringFilter<"Detection"> | string
    status?: EnumDetectionStatusFilter<"Detection"> | $Enums.DetectionStatus
    createdAt?: DateTimeFilter<"Detection"> | Date | string
  }

  export type AssetCreateWithoutFingerprintInput = {
    id?: string
    title: string
    description?: string | null
    artist?: string | null
    album?: string | null
    isrc?: string | null
    filename?: string | null
    file?: string | null
    image?: string | null
    type?: $Enums.AssetType
    status?: $Enums.Status
    duration?: number | null
    sampleRate?: number | null
    bitRate?: number | null
    channels?: number | null
    fileSize?: number | null
    checksum?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    owner: UserCreateNestedOneWithoutAssetsInput
    hashes?: FingerprintHashCreateNestedManyWithoutAssetInput
    watermark?: WatermarkCreateNestedOneWithoutAssetInput
    detections?: DetectionCreateNestedManyWithoutAssetInput
  }

  export type AssetUncheckedCreateWithoutFingerprintInput = {
    id?: string
    title: string
    description?: string | null
    artist?: string | null
    album?: string | null
    isrc?: string | null
    filename?: string | null
    file?: string | null
    image?: string | null
    type?: $Enums.AssetType
    status?: $Enums.Status
    duration?: number | null
    sampleRate?: number | null
    bitRate?: number | null
    channels?: number | null
    fileSize?: number | null
    checksum?: string | null
    ownerId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    hashes?: FingerprintHashUncheckedCreateNestedManyWithoutAssetInput
    watermark?: WatermarkUncheckedCreateNestedOneWithoutAssetInput
    detections?: DetectionUncheckedCreateNestedManyWithoutAssetInput
  }

  export type AssetCreateOrConnectWithoutFingerprintInput = {
    where: AssetWhereUniqueInput
    create: XOR<AssetCreateWithoutFingerprintInput, AssetUncheckedCreateWithoutFingerprintInput>
  }

  export type FingerprintHashCreateWithoutAudioFingerprintInput = {
    id?: bigint | number
    hash: bigint | number
    offsetMs: number
    asset: AssetCreateNestedOneWithoutHashesInput
  }

  export type FingerprintHashUncheckedCreateWithoutAudioFingerprintInput = {
    id?: bigint | number
    hash: bigint | number
    offsetMs: number
    assetId: string
  }

  export type FingerprintHashCreateOrConnectWithoutAudioFingerprintInput = {
    where: FingerprintHashWhereUniqueInput
    create: XOR<FingerprintHashCreateWithoutAudioFingerprintInput, FingerprintHashUncheckedCreateWithoutAudioFingerprintInput>
  }

  export type FingerprintHashCreateManyAudioFingerprintInputEnvelope = {
    data: FingerprintHashCreateManyAudioFingerprintInput | FingerprintHashCreateManyAudioFingerprintInput[]
    skipDuplicates?: boolean
  }

  export type AssetUpsertWithoutFingerprintInput = {
    update: XOR<AssetUpdateWithoutFingerprintInput, AssetUncheckedUpdateWithoutFingerprintInput>
    create: XOR<AssetCreateWithoutFingerprintInput, AssetUncheckedCreateWithoutFingerprintInput>
    where?: AssetWhereInput
  }

  export type AssetUpdateToOneWithWhereWithoutFingerprintInput = {
    where?: AssetWhereInput
    data: XOR<AssetUpdateWithoutFingerprintInput, AssetUncheckedUpdateWithoutFingerprintInput>
  }

  export type AssetUpdateWithoutFingerprintInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    artist?: NullableStringFieldUpdateOperationsInput | string | null
    album?: NullableStringFieldUpdateOperationsInput | string | null
    isrc?: NullableStringFieldUpdateOperationsInput | string | null
    filename?: NullableStringFieldUpdateOperationsInput | string | null
    file?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumAssetTypeFieldUpdateOperationsInput | $Enums.AssetType
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    duration?: NullableFloatFieldUpdateOperationsInput | number | null
    sampleRate?: NullableIntFieldUpdateOperationsInput | number | null
    bitRate?: NullableIntFieldUpdateOperationsInput | number | null
    channels?: NullableIntFieldUpdateOperationsInput | number | null
    fileSize?: NullableIntFieldUpdateOperationsInput | number | null
    checksum?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutAssetsNestedInput
    hashes?: FingerprintHashUpdateManyWithoutAssetNestedInput
    watermark?: WatermarkUpdateOneWithoutAssetNestedInput
    detections?: DetectionUpdateManyWithoutAssetNestedInput
  }

  export type AssetUncheckedUpdateWithoutFingerprintInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    artist?: NullableStringFieldUpdateOperationsInput | string | null
    album?: NullableStringFieldUpdateOperationsInput | string | null
    isrc?: NullableStringFieldUpdateOperationsInput | string | null
    filename?: NullableStringFieldUpdateOperationsInput | string | null
    file?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumAssetTypeFieldUpdateOperationsInput | $Enums.AssetType
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    duration?: NullableFloatFieldUpdateOperationsInput | number | null
    sampleRate?: NullableIntFieldUpdateOperationsInput | number | null
    bitRate?: NullableIntFieldUpdateOperationsInput | number | null
    channels?: NullableIntFieldUpdateOperationsInput | number | null
    fileSize?: NullableIntFieldUpdateOperationsInput | number | null
    checksum?: NullableStringFieldUpdateOperationsInput | string | null
    ownerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hashes?: FingerprintHashUncheckedUpdateManyWithoutAssetNestedInput
    watermark?: WatermarkUncheckedUpdateOneWithoutAssetNestedInput
    detections?: DetectionUncheckedUpdateManyWithoutAssetNestedInput
  }

  export type FingerprintHashUpsertWithWhereUniqueWithoutAudioFingerprintInput = {
    where: FingerprintHashWhereUniqueInput
    update: XOR<FingerprintHashUpdateWithoutAudioFingerprintInput, FingerprintHashUncheckedUpdateWithoutAudioFingerprintInput>
    create: XOR<FingerprintHashCreateWithoutAudioFingerprintInput, FingerprintHashUncheckedCreateWithoutAudioFingerprintInput>
  }

  export type FingerprintHashUpdateWithWhereUniqueWithoutAudioFingerprintInput = {
    where: FingerprintHashWhereUniqueInput
    data: XOR<FingerprintHashUpdateWithoutAudioFingerprintInput, FingerprintHashUncheckedUpdateWithoutAudioFingerprintInput>
  }

  export type FingerprintHashUpdateManyWithWhereWithoutAudioFingerprintInput = {
    where: FingerprintHashScalarWhereInput
    data: XOR<FingerprintHashUpdateManyMutationInput, FingerprintHashUncheckedUpdateManyWithoutAudioFingerprintInput>
  }

  export type AudioFingerprintCreateWithoutHashesInput = {
    id?: string
    algorithm?: string
    version?: string
    generatedAt?: Date | string
    asset: AssetCreateNestedOneWithoutFingerprintInput
  }

  export type AudioFingerprintUncheckedCreateWithoutHashesInput = {
    id?: string
    algorithm?: string
    version?: string
    generatedAt?: Date | string
    assetId: string
  }

  export type AudioFingerprintCreateOrConnectWithoutHashesInput = {
    where: AudioFingerprintWhereUniqueInput
    create: XOR<AudioFingerprintCreateWithoutHashesInput, AudioFingerprintUncheckedCreateWithoutHashesInput>
  }

  export type AssetCreateWithoutHashesInput = {
    id?: string
    title: string
    description?: string | null
    artist?: string | null
    album?: string | null
    isrc?: string | null
    filename?: string | null
    file?: string | null
    image?: string | null
    type?: $Enums.AssetType
    status?: $Enums.Status
    duration?: number | null
    sampleRate?: number | null
    bitRate?: number | null
    channels?: number | null
    fileSize?: number | null
    checksum?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    owner: UserCreateNestedOneWithoutAssetsInput
    fingerprint?: AudioFingerprintCreateNestedOneWithoutAssetInput
    watermark?: WatermarkCreateNestedOneWithoutAssetInput
    detections?: DetectionCreateNestedManyWithoutAssetInput
  }

  export type AssetUncheckedCreateWithoutHashesInput = {
    id?: string
    title: string
    description?: string | null
    artist?: string | null
    album?: string | null
    isrc?: string | null
    filename?: string | null
    file?: string | null
    image?: string | null
    type?: $Enums.AssetType
    status?: $Enums.Status
    duration?: number | null
    sampleRate?: number | null
    bitRate?: number | null
    channels?: number | null
    fileSize?: number | null
    checksum?: string | null
    ownerId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    fingerprint?: AudioFingerprintUncheckedCreateNestedOneWithoutAssetInput
    watermark?: WatermarkUncheckedCreateNestedOneWithoutAssetInput
    detections?: DetectionUncheckedCreateNestedManyWithoutAssetInput
  }

  export type AssetCreateOrConnectWithoutHashesInput = {
    where: AssetWhereUniqueInput
    create: XOR<AssetCreateWithoutHashesInput, AssetUncheckedCreateWithoutHashesInput>
  }

  export type AudioFingerprintUpsertWithoutHashesInput = {
    update: XOR<AudioFingerprintUpdateWithoutHashesInput, AudioFingerprintUncheckedUpdateWithoutHashesInput>
    create: XOR<AudioFingerprintCreateWithoutHashesInput, AudioFingerprintUncheckedCreateWithoutHashesInput>
    where?: AudioFingerprintWhereInput
  }

  export type AudioFingerprintUpdateToOneWithWhereWithoutHashesInput = {
    where?: AudioFingerprintWhereInput
    data: XOR<AudioFingerprintUpdateWithoutHashesInput, AudioFingerprintUncheckedUpdateWithoutHashesInput>
  }

  export type AudioFingerprintUpdateWithoutHashesInput = {
    id?: StringFieldUpdateOperationsInput | string
    algorithm?: StringFieldUpdateOperationsInput | string
    version?: StringFieldUpdateOperationsInput | string
    generatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    asset?: AssetUpdateOneRequiredWithoutFingerprintNestedInput
  }

  export type AudioFingerprintUncheckedUpdateWithoutHashesInput = {
    id?: StringFieldUpdateOperationsInput | string
    algorithm?: StringFieldUpdateOperationsInput | string
    version?: StringFieldUpdateOperationsInput | string
    generatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assetId?: StringFieldUpdateOperationsInput | string
  }

  export type AssetUpsertWithoutHashesInput = {
    update: XOR<AssetUpdateWithoutHashesInput, AssetUncheckedUpdateWithoutHashesInput>
    create: XOR<AssetCreateWithoutHashesInput, AssetUncheckedCreateWithoutHashesInput>
    where?: AssetWhereInput
  }

  export type AssetUpdateToOneWithWhereWithoutHashesInput = {
    where?: AssetWhereInput
    data: XOR<AssetUpdateWithoutHashesInput, AssetUncheckedUpdateWithoutHashesInput>
  }

  export type AssetUpdateWithoutHashesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    artist?: NullableStringFieldUpdateOperationsInput | string | null
    album?: NullableStringFieldUpdateOperationsInput | string | null
    isrc?: NullableStringFieldUpdateOperationsInput | string | null
    filename?: NullableStringFieldUpdateOperationsInput | string | null
    file?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumAssetTypeFieldUpdateOperationsInput | $Enums.AssetType
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    duration?: NullableFloatFieldUpdateOperationsInput | number | null
    sampleRate?: NullableIntFieldUpdateOperationsInput | number | null
    bitRate?: NullableIntFieldUpdateOperationsInput | number | null
    channels?: NullableIntFieldUpdateOperationsInput | number | null
    fileSize?: NullableIntFieldUpdateOperationsInput | number | null
    checksum?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutAssetsNestedInput
    fingerprint?: AudioFingerprintUpdateOneWithoutAssetNestedInput
    watermark?: WatermarkUpdateOneWithoutAssetNestedInput
    detections?: DetectionUpdateManyWithoutAssetNestedInput
  }

  export type AssetUncheckedUpdateWithoutHashesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    artist?: NullableStringFieldUpdateOperationsInput | string | null
    album?: NullableStringFieldUpdateOperationsInput | string | null
    isrc?: NullableStringFieldUpdateOperationsInput | string | null
    filename?: NullableStringFieldUpdateOperationsInput | string | null
    file?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumAssetTypeFieldUpdateOperationsInput | $Enums.AssetType
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    duration?: NullableFloatFieldUpdateOperationsInput | number | null
    sampleRate?: NullableIntFieldUpdateOperationsInput | number | null
    bitRate?: NullableIntFieldUpdateOperationsInput | number | null
    channels?: NullableIntFieldUpdateOperationsInput | number | null
    fileSize?: NullableIntFieldUpdateOperationsInput | number | null
    checksum?: NullableStringFieldUpdateOperationsInput | string | null
    ownerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fingerprint?: AudioFingerprintUncheckedUpdateOneWithoutAssetNestedInput
    watermark?: WatermarkUncheckedUpdateOneWithoutAssetNestedInput
    detections?: DetectionUncheckedUpdateManyWithoutAssetNestedInput
  }

  export type AssetCreateWithoutWatermarkInput = {
    id?: string
    title: string
    description?: string | null
    artist?: string | null
    album?: string | null
    isrc?: string | null
    filename?: string | null
    file?: string | null
    image?: string | null
    type?: $Enums.AssetType
    status?: $Enums.Status
    duration?: number | null
    sampleRate?: number | null
    bitRate?: number | null
    channels?: number | null
    fileSize?: number | null
    checksum?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    owner: UserCreateNestedOneWithoutAssetsInput
    fingerprint?: AudioFingerprintCreateNestedOneWithoutAssetInput
    hashes?: FingerprintHashCreateNestedManyWithoutAssetInput
    detections?: DetectionCreateNestedManyWithoutAssetInput
  }

  export type AssetUncheckedCreateWithoutWatermarkInput = {
    id?: string
    title: string
    description?: string | null
    artist?: string | null
    album?: string | null
    isrc?: string | null
    filename?: string | null
    file?: string | null
    image?: string | null
    type?: $Enums.AssetType
    status?: $Enums.Status
    duration?: number | null
    sampleRate?: number | null
    bitRate?: number | null
    channels?: number | null
    fileSize?: number | null
    checksum?: string | null
    ownerId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    fingerprint?: AudioFingerprintUncheckedCreateNestedOneWithoutAssetInput
    hashes?: FingerprintHashUncheckedCreateNestedManyWithoutAssetInput
    detections?: DetectionUncheckedCreateNestedManyWithoutAssetInput
  }

  export type AssetCreateOrConnectWithoutWatermarkInput = {
    where: AssetWhereUniqueInput
    create: XOR<AssetCreateWithoutWatermarkInput, AssetUncheckedCreateWithoutWatermarkInput>
  }

  export type AssetUpsertWithoutWatermarkInput = {
    update: XOR<AssetUpdateWithoutWatermarkInput, AssetUncheckedUpdateWithoutWatermarkInput>
    create: XOR<AssetCreateWithoutWatermarkInput, AssetUncheckedCreateWithoutWatermarkInput>
    where?: AssetWhereInput
  }

  export type AssetUpdateToOneWithWhereWithoutWatermarkInput = {
    where?: AssetWhereInput
    data: XOR<AssetUpdateWithoutWatermarkInput, AssetUncheckedUpdateWithoutWatermarkInput>
  }

  export type AssetUpdateWithoutWatermarkInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    artist?: NullableStringFieldUpdateOperationsInput | string | null
    album?: NullableStringFieldUpdateOperationsInput | string | null
    isrc?: NullableStringFieldUpdateOperationsInput | string | null
    filename?: NullableStringFieldUpdateOperationsInput | string | null
    file?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumAssetTypeFieldUpdateOperationsInput | $Enums.AssetType
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    duration?: NullableFloatFieldUpdateOperationsInput | number | null
    sampleRate?: NullableIntFieldUpdateOperationsInput | number | null
    bitRate?: NullableIntFieldUpdateOperationsInput | number | null
    channels?: NullableIntFieldUpdateOperationsInput | number | null
    fileSize?: NullableIntFieldUpdateOperationsInput | number | null
    checksum?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutAssetsNestedInput
    fingerprint?: AudioFingerprintUpdateOneWithoutAssetNestedInput
    hashes?: FingerprintHashUpdateManyWithoutAssetNestedInput
    detections?: DetectionUpdateManyWithoutAssetNestedInput
  }

  export type AssetUncheckedUpdateWithoutWatermarkInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    artist?: NullableStringFieldUpdateOperationsInput | string | null
    album?: NullableStringFieldUpdateOperationsInput | string | null
    isrc?: NullableStringFieldUpdateOperationsInput | string | null
    filename?: NullableStringFieldUpdateOperationsInput | string | null
    file?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumAssetTypeFieldUpdateOperationsInput | $Enums.AssetType
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    duration?: NullableFloatFieldUpdateOperationsInput | number | null
    sampleRate?: NullableIntFieldUpdateOperationsInput | number | null
    bitRate?: NullableIntFieldUpdateOperationsInput | number | null
    channels?: NullableIntFieldUpdateOperationsInput | number | null
    fileSize?: NullableIntFieldUpdateOperationsInput | number | null
    checksum?: NullableStringFieldUpdateOperationsInput | string | null
    ownerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fingerprint?: AudioFingerprintUncheckedUpdateOneWithoutAssetNestedInput
    hashes?: FingerprintHashUncheckedUpdateManyWithoutAssetNestedInput
    detections?: DetectionUncheckedUpdateManyWithoutAssetNestedInput
  }

  export type MonitoringSessionCreateWithoutBroadcasterInput = {
    id?: string
    startedAt: Date | string
    endedAt?: Date | string | null
    status?: $Enums.Status
    createdAt?: Date | string
    detections?: DetectionCreateNestedManyWithoutSessionInput
  }

  export type MonitoringSessionUncheckedCreateWithoutBroadcasterInput = {
    id?: string
    startedAt: Date | string
    endedAt?: Date | string | null
    status?: $Enums.Status
    createdAt?: Date | string
    detections?: DetectionUncheckedCreateNestedManyWithoutSessionInput
  }

  export type MonitoringSessionCreateOrConnectWithoutBroadcasterInput = {
    where: MonitoringSessionWhereUniqueInput
    create: XOR<MonitoringSessionCreateWithoutBroadcasterInput, MonitoringSessionUncheckedCreateWithoutBroadcasterInput>
  }

  export type MonitoringSessionCreateManyBroadcasterInputEnvelope = {
    data: MonitoringSessionCreateManyBroadcasterInput | MonitoringSessionCreateManyBroadcasterInput[]
    skipDuplicates?: boolean
  }

  export type DetectionCreateWithoutBroadcasterInput = {
    id?: string
    broadcastAt: Date | string
    detectedAt?: Date | string
    confidence: number
    startOffset?: number | null
    endOffset?: number | null
    duration?: number | null
    engineVersion: string
    status?: $Enums.DetectionStatus
    createdAt?: Date | string
    asset: AssetCreateNestedOneWithoutDetectionsInput
    session?: MonitoringSessionCreateNestedOneWithoutDetectionsInput
  }

  export type DetectionUncheckedCreateWithoutBroadcasterInput = {
    id?: string
    assetId: string
    sessionId?: string | null
    broadcastAt: Date | string
    detectedAt?: Date | string
    confidence: number
    startOffset?: number | null
    endOffset?: number | null
    duration?: number | null
    engineVersion: string
    status?: $Enums.DetectionStatus
    createdAt?: Date | string
  }

  export type DetectionCreateOrConnectWithoutBroadcasterInput = {
    where: DetectionWhereUniqueInput
    create: XOR<DetectionCreateWithoutBroadcasterInput, DetectionUncheckedCreateWithoutBroadcasterInput>
  }

  export type DetectionCreateManyBroadcasterInputEnvelope = {
    data: DetectionCreateManyBroadcasterInput | DetectionCreateManyBroadcasterInput[]
    skipDuplicates?: boolean
  }

  export type MonitoringSessionUpsertWithWhereUniqueWithoutBroadcasterInput = {
    where: MonitoringSessionWhereUniqueInput
    update: XOR<MonitoringSessionUpdateWithoutBroadcasterInput, MonitoringSessionUncheckedUpdateWithoutBroadcasterInput>
    create: XOR<MonitoringSessionCreateWithoutBroadcasterInput, MonitoringSessionUncheckedCreateWithoutBroadcasterInput>
  }

  export type MonitoringSessionUpdateWithWhereUniqueWithoutBroadcasterInput = {
    where: MonitoringSessionWhereUniqueInput
    data: XOR<MonitoringSessionUpdateWithoutBroadcasterInput, MonitoringSessionUncheckedUpdateWithoutBroadcasterInput>
  }

  export type MonitoringSessionUpdateManyWithWhereWithoutBroadcasterInput = {
    where: MonitoringSessionScalarWhereInput
    data: XOR<MonitoringSessionUpdateManyMutationInput, MonitoringSessionUncheckedUpdateManyWithoutBroadcasterInput>
  }

  export type MonitoringSessionScalarWhereInput = {
    AND?: MonitoringSessionScalarWhereInput | MonitoringSessionScalarWhereInput[]
    OR?: MonitoringSessionScalarWhereInput[]
    NOT?: MonitoringSessionScalarWhereInput | MonitoringSessionScalarWhereInput[]
    id?: UuidFilter<"MonitoringSession"> | string
    broadcasterId?: UuidFilter<"MonitoringSession"> | string
    startedAt?: DateTimeFilter<"MonitoringSession"> | Date | string
    endedAt?: DateTimeNullableFilter<"MonitoringSession"> | Date | string | null
    status?: EnumStatusFilter<"MonitoringSession"> | $Enums.Status
    createdAt?: DateTimeFilter<"MonitoringSession"> | Date | string
  }

  export type DetectionUpsertWithWhereUniqueWithoutBroadcasterInput = {
    where: DetectionWhereUniqueInput
    update: XOR<DetectionUpdateWithoutBroadcasterInput, DetectionUncheckedUpdateWithoutBroadcasterInput>
    create: XOR<DetectionCreateWithoutBroadcasterInput, DetectionUncheckedCreateWithoutBroadcasterInput>
  }

  export type DetectionUpdateWithWhereUniqueWithoutBroadcasterInput = {
    where: DetectionWhereUniqueInput
    data: XOR<DetectionUpdateWithoutBroadcasterInput, DetectionUncheckedUpdateWithoutBroadcasterInput>
  }

  export type DetectionUpdateManyWithWhereWithoutBroadcasterInput = {
    where: DetectionScalarWhereInput
    data: XOR<DetectionUpdateManyMutationInput, DetectionUncheckedUpdateManyWithoutBroadcasterInput>
  }

  export type BroadcasterCreateWithoutMonitoringSessionsInput = {
    id?: string
    name: string
    description?: string | null
    website?: string | null
    streamUrl?: string | null
    country?: string | null
    frequency?: string | null
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
    detections?: DetectionCreateNestedManyWithoutBroadcasterInput
  }

  export type BroadcasterUncheckedCreateWithoutMonitoringSessionsInput = {
    id?: string
    name: string
    description?: string | null
    website?: string | null
    streamUrl?: string | null
    country?: string | null
    frequency?: string | null
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
    detections?: DetectionUncheckedCreateNestedManyWithoutBroadcasterInput
  }

  export type BroadcasterCreateOrConnectWithoutMonitoringSessionsInput = {
    where: BroadcasterWhereUniqueInput
    create: XOR<BroadcasterCreateWithoutMonitoringSessionsInput, BroadcasterUncheckedCreateWithoutMonitoringSessionsInput>
  }

  export type DetectionCreateWithoutSessionInput = {
    id?: string
    broadcastAt: Date | string
    detectedAt?: Date | string
    confidence: number
    startOffset?: number | null
    endOffset?: number | null
    duration?: number | null
    engineVersion: string
    status?: $Enums.DetectionStatus
    createdAt?: Date | string
    asset: AssetCreateNestedOneWithoutDetectionsInput
    broadcaster: BroadcasterCreateNestedOneWithoutDetectionsInput
  }

  export type DetectionUncheckedCreateWithoutSessionInput = {
    id?: string
    assetId: string
    broadcasterId: string
    broadcastAt: Date | string
    detectedAt?: Date | string
    confidence: number
    startOffset?: number | null
    endOffset?: number | null
    duration?: number | null
    engineVersion: string
    status?: $Enums.DetectionStatus
    createdAt?: Date | string
  }

  export type DetectionCreateOrConnectWithoutSessionInput = {
    where: DetectionWhereUniqueInput
    create: XOR<DetectionCreateWithoutSessionInput, DetectionUncheckedCreateWithoutSessionInput>
  }

  export type DetectionCreateManySessionInputEnvelope = {
    data: DetectionCreateManySessionInput | DetectionCreateManySessionInput[]
    skipDuplicates?: boolean
  }

  export type BroadcasterUpsertWithoutMonitoringSessionsInput = {
    update: XOR<BroadcasterUpdateWithoutMonitoringSessionsInput, BroadcasterUncheckedUpdateWithoutMonitoringSessionsInput>
    create: XOR<BroadcasterCreateWithoutMonitoringSessionsInput, BroadcasterUncheckedCreateWithoutMonitoringSessionsInput>
    where?: BroadcasterWhereInput
  }

  export type BroadcasterUpdateToOneWithWhereWithoutMonitoringSessionsInput = {
    where?: BroadcasterWhereInput
    data: XOR<BroadcasterUpdateWithoutMonitoringSessionsInput, BroadcasterUncheckedUpdateWithoutMonitoringSessionsInput>
  }

  export type BroadcasterUpdateWithoutMonitoringSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    streamUrl?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    frequency?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    detections?: DetectionUpdateManyWithoutBroadcasterNestedInput
  }

  export type BroadcasterUncheckedUpdateWithoutMonitoringSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    streamUrl?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    frequency?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    detections?: DetectionUncheckedUpdateManyWithoutBroadcasterNestedInput
  }

  export type DetectionUpsertWithWhereUniqueWithoutSessionInput = {
    where: DetectionWhereUniqueInput
    update: XOR<DetectionUpdateWithoutSessionInput, DetectionUncheckedUpdateWithoutSessionInput>
    create: XOR<DetectionCreateWithoutSessionInput, DetectionUncheckedCreateWithoutSessionInput>
  }

  export type DetectionUpdateWithWhereUniqueWithoutSessionInput = {
    where: DetectionWhereUniqueInput
    data: XOR<DetectionUpdateWithoutSessionInput, DetectionUncheckedUpdateWithoutSessionInput>
  }

  export type DetectionUpdateManyWithWhereWithoutSessionInput = {
    where: DetectionScalarWhereInput
    data: XOR<DetectionUpdateManyMutationInput, DetectionUncheckedUpdateManyWithoutSessionInput>
  }

  export type AssetCreateWithoutDetectionsInput = {
    id?: string
    title: string
    description?: string | null
    artist?: string | null
    album?: string | null
    isrc?: string | null
    filename?: string | null
    file?: string | null
    image?: string | null
    type?: $Enums.AssetType
    status?: $Enums.Status
    duration?: number | null
    sampleRate?: number | null
    bitRate?: number | null
    channels?: number | null
    fileSize?: number | null
    checksum?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    owner: UserCreateNestedOneWithoutAssetsInput
    fingerprint?: AudioFingerprintCreateNestedOneWithoutAssetInput
    hashes?: FingerprintHashCreateNestedManyWithoutAssetInput
    watermark?: WatermarkCreateNestedOneWithoutAssetInput
  }

  export type AssetUncheckedCreateWithoutDetectionsInput = {
    id?: string
    title: string
    description?: string | null
    artist?: string | null
    album?: string | null
    isrc?: string | null
    filename?: string | null
    file?: string | null
    image?: string | null
    type?: $Enums.AssetType
    status?: $Enums.Status
    duration?: number | null
    sampleRate?: number | null
    bitRate?: number | null
    channels?: number | null
    fileSize?: number | null
    checksum?: string | null
    ownerId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    fingerprint?: AudioFingerprintUncheckedCreateNestedOneWithoutAssetInput
    hashes?: FingerprintHashUncheckedCreateNestedManyWithoutAssetInput
    watermark?: WatermarkUncheckedCreateNestedOneWithoutAssetInput
  }

  export type AssetCreateOrConnectWithoutDetectionsInput = {
    where: AssetWhereUniqueInput
    create: XOR<AssetCreateWithoutDetectionsInput, AssetUncheckedCreateWithoutDetectionsInput>
  }

  export type BroadcasterCreateWithoutDetectionsInput = {
    id?: string
    name: string
    description?: string | null
    website?: string | null
    streamUrl?: string | null
    country?: string | null
    frequency?: string | null
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
    monitoringSessions?: MonitoringSessionCreateNestedManyWithoutBroadcasterInput
  }

  export type BroadcasterUncheckedCreateWithoutDetectionsInput = {
    id?: string
    name: string
    description?: string | null
    website?: string | null
    streamUrl?: string | null
    country?: string | null
    frequency?: string | null
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
    monitoringSessions?: MonitoringSessionUncheckedCreateNestedManyWithoutBroadcasterInput
  }

  export type BroadcasterCreateOrConnectWithoutDetectionsInput = {
    where: BroadcasterWhereUniqueInput
    create: XOR<BroadcasterCreateWithoutDetectionsInput, BroadcasterUncheckedCreateWithoutDetectionsInput>
  }

  export type MonitoringSessionCreateWithoutDetectionsInput = {
    id?: string
    startedAt: Date | string
    endedAt?: Date | string | null
    status?: $Enums.Status
    createdAt?: Date | string
    broadcaster: BroadcasterCreateNestedOneWithoutMonitoringSessionsInput
  }

  export type MonitoringSessionUncheckedCreateWithoutDetectionsInput = {
    id?: string
    broadcasterId: string
    startedAt: Date | string
    endedAt?: Date | string | null
    status?: $Enums.Status
    createdAt?: Date | string
  }

  export type MonitoringSessionCreateOrConnectWithoutDetectionsInput = {
    where: MonitoringSessionWhereUniqueInput
    create: XOR<MonitoringSessionCreateWithoutDetectionsInput, MonitoringSessionUncheckedCreateWithoutDetectionsInput>
  }

  export type AssetUpsertWithoutDetectionsInput = {
    update: XOR<AssetUpdateWithoutDetectionsInput, AssetUncheckedUpdateWithoutDetectionsInput>
    create: XOR<AssetCreateWithoutDetectionsInput, AssetUncheckedCreateWithoutDetectionsInput>
    where?: AssetWhereInput
  }

  export type AssetUpdateToOneWithWhereWithoutDetectionsInput = {
    where?: AssetWhereInput
    data: XOR<AssetUpdateWithoutDetectionsInput, AssetUncheckedUpdateWithoutDetectionsInput>
  }

  export type AssetUpdateWithoutDetectionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    artist?: NullableStringFieldUpdateOperationsInput | string | null
    album?: NullableStringFieldUpdateOperationsInput | string | null
    isrc?: NullableStringFieldUpdateOperationsInput | string | null
    filename?: NullableStringFieldUpdateOperationsInput | string | null
    file?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumAssetTypeFieldUpdateOperationsInput | $Enums.AssetType
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    duration?: NullableFloatFieldUpdateOperationsInput | number | null
    sampleRate?: NullableIntFieldUpdateOperationsInput | number | null
    bitRate?: NullableIntFieldUpdateOperationsInput | number | null
    channels?: NullableIntFieldUpdateOperationsInput | number | null
    fileSize?: NullableIntFieldUpdateOperationsInput | number | null
    checksum?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutAssetsNestedInput
    fingerprint?: AudioFingerprintUpdateOneWithoutAssetNestedInput
    hashes?: FingerprintHashUpdateManyWithoutAssetNestedInput
    watermark?: WatermarkUpdateOneWithoutAssetNestedInput
  }

  export type AssetUncheckedUpdateWithoutDetectionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    artist?: NullableStringFieldUpdateOperationsInput | string | null
    album?: NullableStringFieldUpdateOperationsInput | string | null
    isrc?: NullableStringFieldUpdateOperationsInput | string | null
    filename?: NullableStringFieldUpdateOperationsInput | string | null
    file?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumAssetTypeFieldUpdateOperationsInput | $Enums.AssetType
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    duration?: NullableFloatFieldUpdateOperationsInput | number | null
    sampleRate?: NullableIntFieldUpdateOperationsInput | number | null
    bitRate?: NullableIntFieldUpdateOperationsInput | number | null
    channels?: NullableIntFieldUpdateOperationsInput | number | null
    fileSize?: NullableIntFieldUpdateOperationsInput | number | null
    checksum?: NullableStringFieldUpdateOperationsInput | string | null
    ownerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fingerprint?: AudioFingerprintUncheckedUpdateOneWithoutAssetNestedInput
    hashes?: FingerprintHashUncheckedUpdateManyWithoutAssetNestedInput
    watermark?: WatermarkUncheckedUpdateOneWithoutAssetNestedInput
  }

  export type BroadcasterUpsertWithoutDetectionsInput = {
    update: XOR<BroadcasterUpdateWithoutDetectionsInput, BroadcasterUncheckedUpdateWithoutDetectionsInput>
    create: XOR<BroadcasterCreateWithoutDetectionsInput, BroadcasterUncheckedCreateWithoutDetectionsInput>
    where?: BroadcasterWhereInput
  }

  export type BroadcasterUpdateToOneWithWhereWithoutDetectionsInput = {
    where?: BroadcasterWhereInput
    data: XOR<BroadcasterUpdateWithoutDetectionsInput, BroadcasterUncheckedUpdateWithoutDetectionsInput>
  }

  export type BroadcasterUpdateWithoutDetectionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    streamUrl?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    frequency?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    monitoringSessions?: MonitoringSessionUpdateManyWithoutBroadcasterNestedInput
  }

  export type BroadcasterUncheckedUpdateWithoutDetectionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    streamUrl?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    frequency?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    monitoringSessions?: MonitoringSessionUncheckedUpdateManyWithoutBroadcasterNestedInput
  }

  export type MonitoringSessionUpsertWithoutDetectionsInput = {
    update: XOR<MonitoringSessionUpdateWithoutDetectionsInput, MonitoringSessionUncheckedUpdateWithoutDetectionsInput>
    create: XOR<MonitoringSessionCreateWithoutDetectionsInput, MonitoringSessionUncheckedCreateWithoutDetectionsInput>
    where?: MonitoringSessionWhereInput
  }

  export type MonitoringSessionUpdateToOneWithWhereWithoutDetectionsInput = {
    where?: MonitoringSessionWhereInput
    data: XOR<MonitoringSessionUpdateWithoutDetectionsInput, MonitoringSessionUncheckedUpdateWithoutDetectionsInput>
  }

  export type MonitoringSessionUpdateWithoutDetectionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    broadcaster?: BroadcasterUpdateOneRequiredWithoutMonitoringSessionsNestedInput
  }

  export type MonitoringSessionUncheckedUpdateWithoutDetectionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    broadcasterId?: StringFieldUpdateOperationsInput | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AssetCreateManyOwnerInput = {
    id?: string
    title: string
    description?: string | null
    artist?: string | null
    album?: string | null
    isrc?: string | null
    filename?: string | null
    file?: string | null
    image?: string | null
    type?: $Enums.AssetType
    status?: $Enums.Status
    duration?: number | null
    sampleRate?: number | null
    bitRate?: number | null
    channels?: number | null
    fileSize?: number | null
    checksum?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AssetUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    artist?: NullableStringFieldUpdateOperationsInput | string | null
    album?: NullableStringFieldUpdateOperationsInput | string | null
    isrc?: NullableStringFieldUpdateOperationsInput | string | null
    filename?: NullableStringFieldUpdateOperationsInput | string | null
    file?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumAssetTypeFieldUpdateOperationsInput | $Enums.AssetType
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    duration?: NullableFloatFieldUpdateOperationsInput | number | null
    sampleRate?: NullableIntFieldUpdateOperationsInput | number | null
    bitRate?: NullableIntFieldUpdateOperationsInput | number | null
    channels?: NullableIntFieldUpdateOperationsInput | number | null
    fileSize?: NullableIntFieldUpdateOperationsInput | number | null
    checksum?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fingerprint?: AudioFingerprintUpdateOneWithoutAssetNestedInput
    hashes?: FingerprintHashUpdateManyWithoutAssetNestedInput
    watermark?: WatermarkUpdateOneWithoutAssetNestedInput
    detections?: DetectionUpdateManyWithoutAssetNestedInput
  }

  export type AssetUncheckedUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    artist?: NullableStringFieldUpdateOperationsInput | string | null
    album?: NullableStringFieldUpdateOperationsInput | string | null
    isrc?: NullableStringFieldUpdateOperationsInput | string | null
    filename?: NullableStringFieldUpdateOperationsInput | string | null
    file?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumAssetTypeFieldUpdateOperationsInput | $Enums.AssetType
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    duration?: NullableFloatFieldUpdateOperationsInput | number | null
    sampleRate?: NullableIntFieldUpdateOperationsInput | number | null
    bitRate?: NullableIntFieldUpdateOperationsInput | number | null
    channels?: NullableIntFieldUpdateOperationsInput | number | null
    fileSize?: NullableIntFieldUpdateOperationsInput | number | null
    checksum?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fingerprint?: AudioFingerprintUncheckedUpdateOneWithoutAssetNestedInput
    hashes?: FingerprintHashUncheckedUpdateManyWithoutAssetNestedInput
    watermark?: WatermarkUncheckedUpdateOneWithoutAssetNestedInput
    detections?: DetectionUncheckedUpdateManyWithoutAssetNestedInput
  }

  export type AssetUncheckedUpdateManyWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    artist?: NullableStringFieldUpdateOperationsInput | string | null
    album?: NullableStringFieldUpdateOperationsInput | string | null
    isrc?: NullableStringFieldUpdateOperationsInput | string | null
    filename?: NullableStringFieldUpdateOperationsInput | string | null
    file?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumAssetTypeFieldUpdateOperationsInput | $Enums.AssetType
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    duration?: NullableFloatFieldUpdateOperationsInput | number | null
    sampleRate?: NullableIntFieldUpdateOperationsInput | number | null
    bitRate?: NullableIntFieldUpdateOperationsInput | number | null
    channels?: NullableIntFieldUpdateOperationsInput | number | null
    fileSize?: NullableIntFieldUpdateOperationsInput | number | null
    checksum?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FingerprintHashCreateManyAssetInput = {
    id?: bigint | number
    hash: bigint | number
    offsetMs: number
    audioFingerprintId: string
  }

  export type DetectionCreateManyAssetInput = {
    id?: string
    broadcasterId: string
    sessionId?: string | null
    broadcastAt: Date | string
    detectedAt?: Date | string
    confidence: number
    startOffset?: number | null
    endOffset?: number | null
    duration?: number | null
    engineVersion: string
    status?: $Enums.DetectionStatus
    createdAt?: Date | string
  }

  export type FingerprintHashUpdateWithoutAssetInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    hash?: BigIntFieldUpdateOperationsInput | bigint | number
    offsetMs?: IntFieldUpdateOperationsInput | number
    audioFingerprint?: AudioFingerprintUpdateOneRequiredWithoutHashesNestedInput
  }

  export type FingerprintHashUncheckedUpdateWithoutAssetInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    hash?: BigIntFieldUpdateOperationsInput | bigint | number
    offsetMs?: IntFieldUpdateOperationsInput | number
    audioFingerprintId?: StringFieldUpdateOperationsInput | string
  }

  export type FingerprintHashUncheckedUpdateManyWithoutAssetInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    hash?: BigIntFieldUpdateOperationsInput | bigint | number
    offsetMs?: IntFieldUpdateOperationsInput | number
    audioFingerprintId?: StringFieldUpdateOperationsInput | string
  }

  export type DetectionUpdateWithoutAssetInput = {
    id?: StringFieldUpdateOperationsInput | string
    broadcastAt?: DateTimeFieldUpdateOperationsInput | Date | string
    detectedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    confidence?: FloatFieldUpdateOperationsInput | number
    startOffset?: NullableFloatFieldUpdateOperationsInput | number | null
    endOffset?: NullableFloatFieldUpdateOperationsInput | number | null
    duration?: NullableFloatFieldUpdateOperationsInput | number | null
    engineVersion?: StringFieldUpdateOperationsInput | string
    status?: EnumDetectionStatusFieldUpdateOperationsInput | $Enums.DetectionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    broadcaster?: BroadcasterUpdateOneRequiredWithoutDetectionsNestedInput
    session?: MonitoringSessionUpdateOneWithoutDetectionsNestedInput
  }

  export type DetectionUncheckedUpdateWithoutAssetInput = {
    id?: StringFieldUpdateOperationsInput | string
    broadcasterId?: StringFieldUpdateOperationsInput | string
    sessionId?: NullableStringFieldUpdateOperationsInput | string | null
    broadcastAt?: DateTimeFieldUpdateOperationsInput | Date | string
    detectedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    confidence?: FloatFieldUpdateOperationsInput | number
    startOffset?: NullableFloatFieldUpdateOperationsInput | number | null
    endOffset?: NullableFloatFieldUpdateOperationsInput | number | null
    duration?: NullableFloatFieldUpdateOperationsInput | number | null
    engineVersion?: StringFieldUpdateOperationsInput | string
    status?: EnumDetectionStatusFieldUpdateOperationsInput | $Enums.DetectionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DetectionUncheckedUpdateManyWithoutAssetInput = {
    id?: StringFieldUpdateOperationsInput | string
    broadcasterId?: StringFieldUpdateOperationsInput | string
    sessionId?: NullableStringFieldUpdateOperationsInput | string | null
    broadcastAt?: DateTimeFieldUpdateOperationsInput | Date | string
    detectedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    confidence?: FloatFieldUpdateOperationsInput | number
    startOffset?: NullableFloatFieldUpdateOperationsInput | number | null
    endOffset?: NullableFloatFieldUpdateOperationsInput | number | null
    duration?: NullableFloatFieldUpdateOperationsInput | number | null
    engineVersion?: StringFieldUpdateOperationsInput | string
    status?: EnumDetectionStatusFieldUpdateOperationsInput | $Enums.DetectionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FingerprintHashCreateManyAudioFingerprintInput = {
    id?: bigint | number
    hash: bigint | number
    offsetMs: number
    assetId: string
  }

  export type FingerprintHashUpdateWithoutAudioFingerprintInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    hash?: BigIntFieldUpdateOperationsInput | bigint | number
    offsetMs?: IntFieldUpdateOperationsInput | number
    asset?: AssetUpdateOneRequiredWithoutHashesNestedInput
  }

  export type FingerprintHashUncheckedUpdateWithoutAudioFingerprintInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    hash?: BigIntFieldUpdateOperationsInput | bigint | number
    offsetMs?: IntFieldUpdateOperationsInput | number
    assetId?: StringFieldUpdateOperationsInput | string
  }

  export type FingerprintHashUncheckedUpdateManyWithoutAudioFingerprintInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    hash?: BigIntFieldUpdateOperationsInput | bigint | number
    offsetMs?: IntFieldUpdateOperationsInput | number
    assetId?: StringFieldUpdateOperationsInput | string
  }

  export type MonitoringSessionCreateManyBroadcasterInput = {
    id?: string
    startedAt: Date | string
    endedAt?: Date | string | null
    status?: $Enums.Status
    createdAt?: Date | string
  }

  export type DetectionCreateManyBroadcasterInput = {
    id?: string
    assetId: string
    sessionId?: string | null
    broadcastAt: Date | string
    detectedAt?: Date | string
    confidence: number
    startOffset?: number | null
    endOffset?: number | null
    duration?: number | null
    engineVersion: string
    status?: $Enums.DetectionStatus
    createdAt?: Date | string
  }

  export type MonitoringSessionUpdateWithoutBroadcasterInput = {
    id?: StringFieldUpdateOperationsInput | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    detections?: DetectionUpdateManyWithoutSessionNestedInput
  }

  export type MonitoringSessionUncheckedUpdateWithoutBroadcasterInput = {
    id?: StringFieldUpdateOperationsInput | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    detections?: DetectionUncheckedUpdateManyWithoutSessionNestedInput
  }

  export type MonitoringSessionUncheckedUpdateManyWithoutBroadcasterInput = {
    id?: StringFieldUpdateOperationsInput | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DetectionUpdateWithoutBroadcasterInput = {
    id?: StringFieldUpdateOperationsInput | string
    broadcastAt?: DateTimeFieldUpdateOperationsInput | Date | string
    detectedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    confidence?: FloatFieldUpdateOperationsInput | number
    startOffset?: NullableFloatFieldUpdateOperationsInput | number | null
    endOffset?: NullableFloatFieldUpdateOperationsInput | number | null
    duration?: NullableFloatFieldUpdateOperationsInput | number | null
    engineVersion?: StringFieldUpdateOperationsInput | string
    status?: EnumDetectionStatusFieldUpdateOperationsInput | $Enums.DetectionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    asset?: AssetUpdateOneRequiredWithoutDetectionsNestedInput
    session?: MonitoringSessionUpdateOneWithoutDetectionsNestedInput
  }

  export type DetectionUncheckedUpdateWithoutBroadcasterInput = {
    id?: StringFieldUpdateOperationsInput | string
    assetId?: StringFieldUpdateOperationsInput | string
    sessionId?: NullableStringFieldUpdateOperationsInput | string | null
    broadcastAt?: DateTimeFieldUpdateOperationsInput | Date | string
    detectedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    confidence?: FloatFieldUpdateOperationsInput | number
    startOffset?: NullableFloatFieldUpdateOperationsInput | number | null
    endOffset?: NullableFloatFieldUpdateOperationsInput | number | null
    duration?: NullableFloatFieldUpdateOperationsInput | number | null
    engineVersion?: StringFieldUpdateOperationsInput | string
    status?: EnumDetectionStatusFieldUpdateOperationsInput | $Enums.DetectionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DetectionUncheckedUpdateManyWithoutBroadcasterInput = {
    id?: StringFieldUpdateOperationsInput | string
    assetId?: StringFieldUpdateOperationsInput | string
    sessionId?: NullableStringFieldUpdateOperationsInput | string | null
    broadcastAt?: DateTimeFieldUpdateOperationsInput | Date | string
    detectedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    confidence?: FloatFieldUpdateOperationsInput | number
    startOffset?: NullableFloatFieldUpdateOperationsInput | number | null
    endOffset?: NullableFloatFieldUpdateOperationsInput | number | null
    duration?: NullableFloatFieldUpdateOperationsInput | number | null
    engineVersion?: StringFieldUpdateOperationsInput | string
    status?: EnumDetectionStatusFieldUpdateOperationsInput | $Enums.DetectionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DetectionCreateManySessionInput = {
    id?: string
    assetId: string
    broadcasterId: string
    broadcastAt: Date | string
    detectedAt?: Date | string
    confidence: number
    startOffset?: number | null
    endOffset?: number | null
    duration?: number | null
    engineVersion: string
    status?: $Enums.DetectionStatus
    createdAt?: Date | string
  }

  export type DetectionUpdateWithoutSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    broadcastAt?: DateTimeFieldUpdateOperationsInput | Date | string
    detectedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    confidence?: FloatFieldUpdateOperationsInput | number
    startOffset?: NullableFloatFieldUpdateOperationsInput | number | null
    endOffset?: NullableFloatFieldUpdateOperationsInput | number | null
    duration?: NullableFloatFieldUpdateOperationsInput | number | null
    engineVersion?: StringFieldUpdateOperationsInput | string
    status?: EnumDetectionStatusFieldUpdateOperationsInput | $Enums.DetectionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    asset?: AssetUpdateOneRequiredWithoutDetectionsNestedInput
    broadcaster?: BroadcasterUpdateOneRequiredWithoutDetectionsNestedInput
  }

  export type DetectionUncheckedUpdateWithoutSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    assetId?: StringFieldUpdateOperationsInput | string
    broadcasterId?: StringFieldUpdateOperationsInput | string
    broadcastAt?: DateTimeFieldUpdateOperationsInput | Date | string
    detectedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    confidence?: FloatFieldUpdateOperationsInput | number
    startOffset?: NullableFloatFieldUpdateOperationsInput | number | null
    endOffset?: NullableFloatFieldUpdateOperationsInput | number | null
    duration?: NullableFloatFieldUpdateOperationsInput | number | null
    engineVersion?: StringFieldUpdateOperationsInput | string
    status?: EnumDetectionStatusFieldUpdateOperationsInput | $Enums.DetectionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DetectionUncheckedUpdateManyWithoutSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    assetId?: StringFieldUpdateOperationsInput | string
    broadcasterId?: StringFieldUpdateOperationsInput | string
    broadcastAt?: DateTimeFieldUpdateOperationsInput | Date | string
    detectedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    confidence?: FloatFieldUpdateOperationsInput | number
    startOffset?: NullableFloatFieldUpdateOperationsInput | number | null
    endOffset?: NullableFloatFieldUpdateOperationsInput | number | null
    duration?: NullableFloatFieldUpdateOperationsInput | number | null
    engineVersion?: StringFieldUpdateOperationsInput | string
    status?: EnumDetectionStatusFieldUpdateOperationsInput | $Enums.DetectionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}