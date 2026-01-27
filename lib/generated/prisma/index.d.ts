
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
 * Model Store
 * 
 */
export type Store = $Result.DefaultSelection<Prisma.$StorePayload>
/**
 * Model StoreImage
 * 
 */
export type StoreImage = $Result.DefaultSelection<Prisma.$StoreImagePayload>
/**
 * Model StoreLike
 * 
 */
export type StoreLike = $Result.DefaultSelection<Prisma.$StoreLikePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const ShareMode: {
  HOURS_BY_HOURS: 'HOURS_BY_HOURS',
  DAYS_BY_DAYS: 'DAYS_BY_DAYS',
  SPLIT_STORE: 'SPLIT_STORE',
  DAY_OR_NIGHT: 'DAY_OR_NIGHT',
  Weekend: 'Weekend',
  Regular: 'Regular'
};

export type ShareMode = (typeof ShareMode)[keyof typeof ShareMode]

}

export type ShareMode = $Enums.ShareMode

export const ShareMode: typeof $Enums.ShareMode

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
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
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
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
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

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
   * `prisma.store`: Exposes CRUD operations for the **Store** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Stores
    * const stores = await prisma.store.findMany()
    * ```
    */
  get store(): Prisma.StoreDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.storeImage`: Exposes CRUD operations for the **StoreImage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StoreImages
    * const storeImages = await prisma.storeImage.findMany()
    * ```
    */
  get storeImage(): Prisma.StoreImageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.storeLike`: Exposes CRUD operations for the **StoreLike** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StoreLikes
    * const storeLikes = await prisma.storeLike.findMany()
    * ```
    */
  get storeLike(): Prisma.StoreLikeDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 7.3.0
   * Query Engine version: 9d6ad21cbbceab97458517b147a6a09ff43aa735
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
      (Without<T, U> & U) | (Without<U, T> & T)
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
    Store: 'Store',
    StoreImage: 'StoreImage',
    StoreLike: 'StoreLike'
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
      modelProps: "user" | "store" | "storeImage" | "storeLike"
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
      Store: {
        payload: Prisma.$StorePayload<ExtArgs>
        fields: Prisma.StoreFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StoreFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StoreFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorePayload>
          }
          findFirst: {
            args: Prisma.StoreFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StoreFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorePayload>
          }
          findMany: {
            args: Prisma.StoreFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorePayload>[]
          }
          create: {
            args: Prisma.StoreCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorePayload>
          }
          createMany: {
            args: Prisma.StoreCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StoreCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorePayload>[]
          }
          delete: {
            args: Prisma.StoreDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorePayload>
          }
          update: {
            args: Prisma.StoreUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorePayload>
          }
          deleteMany: {
            args: Prisma.StoreDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StoreUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StoreUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorePayload>[]
          }
          upsert: {
            args: Prisma.StoreUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorePayload>
          }
          aggregate: {
            args: Prisma.StoreAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStore>
          }
          groupBy: {
            args: Prisma.StoreGroupByArgs<ExtArgs>
            result: $Utils.Optional<StoreGroupByOutputType>[]
          }
          count: {
            args: Prisma.StoreCountArgs<ExtArgs>
            result: $Utils.Optional<StoreCountAggregateOutputType> | number
          }
        }
      }
      StoreImage: {
        payload: Prisma.$StoreImagePayload<ExtArgs>
        fields: Prisma.StoreImageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StoreImageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoreImagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StoreImageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoreImagePayload>
          }
          findFirst: {
            args: Prisma.StoreImageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoreImagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StoreImageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoreImagePayload>
          }
          findMany: {
            args: Prisma.StoreImageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoreImagePayload>[]
          }
          create: {
            args: Prisma.StoreImageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoreImagePayload>
          }
          createMany: {
            args: Prisma.StoreImageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StoreImageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoreImagePayload>[]
          }
          delete: {
            args: Prisma.StoreImageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoreImagePayload>
          }
          update: {
            args: Prisma.StoreImageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoreImagePayload>
          }
          deleteMany: {
            args: Prisma.StoreImageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StoreImageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StoreImageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoreImagePayload>[]
          }
          upsert: {
            args: Prisma.StoreImageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoreImagePayload>
          }
          aggregate: {
            args: Prisma.StoreImageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStoreImage>
          }
          groupBy: {
            args: Prisma.StoreImageGroupByArgs<ExtArgs>
            result: $Utils.Optional<StoreImageGroupByOutputType>[]
          }
          count: {
            args: Prisma.StoreImageCountArgs<ExtArgs>
            result: $Utils.Optional<StoreImageCountAggregateOutputType> | number
          }
        }
      }
      StoreLike: {
        payload: Prisma.$StoreLikePayload<ExtArgs>
        fields: Prisma.StoreLikeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StoreLikeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoreLikePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StoreLikeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoreLikePayload>
          }
          findFirst: {
            args: Prisma.StoreLikeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoreLikePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StoreLikeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoreLikePayload>
          }
          findMany: {
            args: Prisma.StoreLikeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoreLikePayload>[]
          }
          create: {
            args: Prisma.StoreLikeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoreLikePayload>
          }
          createMany: {
            args: Prisma.StoreLikeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StoreLikeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoreLikePayload>[]
          }
          delete: {
            args: Prisma.StoreLikeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoreLikePayload>
          }
          update: {
            args: Prisma.StoreLikeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoreLikePayload>
          }
          deleteMany: {
            args: Prisma.StoreLikeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StoreLikeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StoreLikeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoreLikePayload>[]
          }
          upsert: {
            args: Prisma.StoreLikeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoreLikePayload>
          }
          aggregate: {
            args: Prisma.StoreLikeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStoreLike>
          }
          groupBy: {
            args: Prisma.StoreLikeGroupByArgs<ExtArgs>
            result: $Utils.Optional<StoreLikeGroupByOutputType>[]
          }
          count: {
            args: Prisma.StoreLikeCountArgs<ExtArgs>
            result: $Utils.Optional<StoreLikeCountAggregateOutputType> | number
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
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
    store?: StoreOmit
    storeImage?: StoreImageOmit
    storeLike?: StoreLikeOmit
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
    stores: number
    likedStores: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    stores?: boolean | UserCountOutputTypeCountStoresArgs
    likedStores?: boolean | UserCountOutputTypeCountLikedStoresArgs
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
  export type UserCountOutputTypeCountStoresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StoreWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountLikedStoresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StoreLikeWhereInput
  }


  /**
   * Count Type StoreCountOutputType
   */

  export type StoreCountOutputType = {
    images: number
    likes: number
  }

  export type StoreCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    images?: boolean | StoreCountOutputTypeCountImagesArgs
    likes?: boolean | StoreCountOutputTypeCountLikesArgs
  }

  // Custom InputTypes
  /**
   * StoreCountOutputType without action
   */
  export type StoreCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreCountOutputType
     */
    select?: StoreCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * StoreCountOutputType without action
   */
  export type StoreCountOutputTypeCountImagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StoreImageWhereInput
  }

  /**
   * StoreCountOutputType without action
   */
  export type StoreCountOutputTypeCountLikesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StoreLikeWhereInput
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
    email: string | null
    image: string | null
    phone: string | null
    phoneVerified: boolean | null
    createdAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    image: string | null
    phone: string | null
    phoneVerified: boolean | null
    createdAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    image: number
    phone: number
    phoneVerified: number
    createdAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    image?: true
    phone?: true
    phoneVerified?: true
    createdAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    image?: true
    phone?: true
    phoneVerified?: true
    createdAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    image?: true
    phone?: true
    phoneVerified?: true
    createdAt?: true
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
    name: string | null
    email: string | null
    image: string | null
    phone: string | null
    phoneVerified: boolean
    createdAt: Date
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
    email?: boolean
    image?: boolean
    phone?: boolean
    phoneVerified?: boolean
    createdAt?: boolean
    stores?: boolean | User$storesArgs<ExtArgs>
    likedStores?: boolean | User$likedStoresArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    image?: boolean
    phone?: boolean
    phoneVerified?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    image?: boolean
    phone?: boolean
    phoneVerified?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    image?: boolean
    phone?: boolean
    phoneVerified?: boolean
    createdAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "image" | "phone" | "phoneVerified" | "createdAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    stores?: boolean | User$storesArgs<ExtArgs>
    likedStores?: boolean | User$likedStoresArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      stores: Prisma.$StorePayload<ExtArgs>[]
      likedStores: Prisma.$StoreLikePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string | null
      email: string | null
      image: string | null
      phone: string | null
      phoneVerified: boolean
      createdAt: Date
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
    stores<T extends User$storesArgs<ExtArgs> = {}>(args?: Subset<T, User$storesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    likedStores<T extends User$likedStoresArgs<ExtArgs> = {}>(args?: Subset<T, User$likedStoresArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StoreLikePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly email: FieldRef<"User", 'String'>
    readonly image: FieldRef<"User", 'String'>
    readonly phone: FieldRef<"User", 'String'>
    readonly phoneVerified: FieldRef<"User", 'Boolean'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
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
    data?: XOR<UserCreateInput, UserUncheckedCreateInput>
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
   * User.stores
   */
  export type User$storesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Store
     */
    omit?: StoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreInclude<ExtArgs> | null
    where?: StoreWhereInput
    orderBy?: StoreOrderByWithRelationInput | StoreOrderByWithRelationInput[]
    cursor?: StoreWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StoreScalarFieldEnum | StoreScalarFieldEnum[]
  }

  /**
   * User.likedStores
   */
  export type User$likedStoresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreLike
     */
    select?: StoreLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StoreLike
     */
    omit?: StoreLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreLikeInclude<ExtArgs> | null
    where?: StoreLikeWhereInput
    orderBy?: StoreLikeOrderByWithRelationInput | StoreLikeOrderByWithRelationInput[]
    cursor?: StoreLikeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StoreLikeScalarFieldEnum | StoreLikeScalarFieldEnum[]
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
   * Model Store
   */

  export type AggregateStore = {
    _count: StoreCountAggregateOutputType | null
    _avg: StoreAvgAggregateOutputType | null
    _sum: StoreSumAggregateOutputType | null
    _min: StoreMinAggregateOutputType | null
    _max: StoreMaxAggregateOutputType | null
  }

  export type StoreAvgAggregateOutputType = {
    latitude: number | null
    longitude: number | null
    priceInr: number | null
    sqft: number | null
  }

  export type StoreSumAggregateOutputType = {
    latitude: number | null
    longitude: number | null
    priceInr: number | null
    sqft: number | null
  }

  export type StoreMinAggregateOutputType = {
    id: string | null
    ownerId: string | null
    title: string | null
    desc: string | null
    peopleDesc: string | null
    storeSize: string | null
    businessType: string | null
    country: string | null
    state: string | null
    city: string | null
    pin: string | null
    fullAddress: string | null
    latitude: number | null
    longitude: number | null
    bannerImageUrl: string | null
    priceInr: number | null
    shareMode: $Enums.ShareMode | null
    startTime: string | null
    endTime: string | null
    sqft: number | null
    dayOrNight: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type StoreMaxAggregateOutputType = {
    id: string | null
    ownerId: string | null
    title: string | null
    desc: string | null
    peopleDesc: string | null
    storeSize: string | null
    businessType: string | null
    country: string | null
    state: string | null
    city: string | null
    pin: string | null
    fullAddress: string | null
    latitude: number | null
    longitude: number | null
    bannerImageUrl: string | null
    priceInr: number | null
    shareMode: $Enums.ShareMode | null
    startTime: string | null
    endTime: string | null
    sqft: number | null
    dayOrNight: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type StoreCountAggregateOutputType = {
    id: number
    ownerId: number
    title: number
    desc: number
    peopleDesc: number
    storeSize: number
    businessType: number
    country: number
    state: number
    city: number
    pin: number
    fullAddress: number
    latitude: number
    longitude: number
    bannerImageUrl: number
    priceInr: number
    shareMode: number
    startTime: number
    endTime: number
    days: number
    sqft: number
    dayOrNight: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type StoreAvgAggregateInputType = {
    latitude?: true
    longitude?: true
    priceInr?: true
    sqft?: true
  }

  export type StoreSumAggregateInputType = {
    latitude?: true
    longitude?: true
    priceInr?: true
    sqft?: true
  }

  export type StoreMinAggregateInputType = {
    id?: true
    ownerId?: true
    title?: true
    desc?: true
    peopleDesc?: true
    storeSize?: true
    businessType?: true
    country?: true
    state?: true
    city?: true
    pin?: true
    fullAddress?: true
    latitude?: true
    longitude?: true
    bannerImageUrl?: true
    priceInr?: true
    shareMode?: true
    startTime?: true
    endTime?: true
    sqft?: true
    dayOrNight?: true
    createdAt?: true
    updatedAt?: true
  }

  export type StoreMaxAggregateInputType = {
    id?: true
    ownerId?: true
    title?: true
    desc?: true
    peopleDesc?: true
    storeSize?: true
    businessType?: true
    country?: true
    state?: true
    city?: true
    pin?: true
    fullAddress?: true
    latitude?: true
    longitude?: true
    bannerImageUrl?: true
    priceInr?: true
    shareMode?: true
    startTime?: true
    endTime?: true
    sqft?: true
    dayOrNight?: true
    createdAt?: true
    updatedAt?: true
  }

  export type StoreCountAggregateInputType = {
    id?: true
    ownerId?: true
    title?: true
    desc?: true
    peopleDesc?: true
    storeSize?: true
    businessType?: true
    country?: true
    state?: true
    city?: true
    pin?: true
    fullAddress?: true
    latitude?: true
    longitude?: true
    bannerImageUrl?: true
    priceInr?: true
    shareMode?: true
    startTime?: true
    endTime?: true
    days?: true
    sqft?: true
    dayOrNight?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type StoreAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Store to aggregate.
     */
    where?: StoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stores to fetch.
     */
    orderBy?: StoreOrderByWithRelationInput | StoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Stores
    **/
    _count?: true | StoreCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StoreAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StoreSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StoreMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StoreMaxAggregateInputType
  }

  export type GetStoreAggregateType<T extends StoreAggregateArgs> = {
        [P in keyof T & keyof AggregateStore]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStore[P]>
      : GetScalarType<T[P], AggregateStore[P]>
  }




  export type StoreGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StoreWhereInput
    orderBy?: StoreOrderByWithAggregationInput | StoreOrderByWithAggregationInput[]
    by: StoreScalarFieldEnum[] | StoreScalarFieldEnum
    having?: StoreScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StoreCountAggregateInputType | true
    _avg?: StoreAvgAggregateInputType
    _sum?: StoreSumAggregateInputType
    _min?: StoreMinAggregateInputType
    _max?: StoreMaxAggregateInputType
  }

  export type StoreGroupByOutputType = {
    id: string
    ownerId: string
    title: string
    desc: string
    peopleDesc: string
    storeSize: string
    businessType: string
    country: string
    state: string
    city: string
    pin: string
    fullAddress: string
    latitude: number | null
    longitude: number | null
    bannerImageUrl: string | null
    priceInr: number
    shareMode: $Enums.ShareMode
    startTime: string | null
    endTime: string | null
    days: string[]
    sqft: number | null
    dayOrNight: string | null
    createdAt: Date
    updatedAt: Date
    _count: StoreCountAggregateOutputType | null
    _avg: StoreAvgAggregateOutputType | null
    _sum: StoreSumAggregateOutputType | null
    _min: StoreMinAggregateOutputType | null
    _max: StoreMaxAggregateOutputType | null
  }

  type GetStoreGroupByPayload<T extends StoreGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StoreGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StoreGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StoreGroupByOutputType[P]>
            : GetScalarType<T[P], StoreGroupByOutputType[P]>
        }
      >
    >


  export type StoreSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ownerId?: boolean
    title?: boolean
    desc?: boolean
    peopleDesc?: boolean
    storeSize?: boolean
    businessType?: boolean
    country?: boolean
    state?: boolean
    city?: boolean
    pin?: boolean
    fullAddress?: boolean
    latitude?: boolean
    longitude?: boolean
    bannerImageUrl?: boolean
    priceInr?: boolean
    shareMode?: boolean
    startTime?: boolean
    endTime?: boolean
    days?: boolean
    sqft?: boolean
    dayOrNight?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
    images?: boolean | Store$imagesArgs<ExtArgs>
    likes?: boolean | Store$likesArgs<ExtArgs>
    _count?: boolean | StoreCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["store"]>

  export type StoreSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ownerId?: boolean
    title?: boolean
    desc?: boolean
    peopleDesc?: boolean
    storeSize?: boolean
    businessType?: boolean
    country?: boolean
    state?: boolean
    city?: boolean
    pin?: boolean
    fullAddress?: boolean
    latitude?: boolean
    longitude?: boolean
    bannerImageUrl?: boolean
    priceInr?: boolean
    shareMode?: boolean
    startTime?: boolean
    endTime?: boolean
    days?: boolean
    sqft?: boolean
    dayOrNight?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["store"]>

  export type StoreSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ownerId?: boolean
    title?: boolean
    desc?: boolean
    peopleDesc?: boolean
    storeSize?: boolean
    businessType?: boolean
    country?: boolean
    state?: boolean
    city?: boolean
    pin?: boolean
    fullAddress?: boolean
    latitude?: boolean
    longitude?: boolean
    bannerImageUrl?: boolean
    priceInr?: boolean
    shareMode?: boolean
    startTime?: boolean
    endTime?: boolean
    days?: boolean
    sqft?: boolean
    dayOrNight?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["store"]>

  export type StoreSelectScalar = {
    id?: boolean
    ownerId?: boolean
    title?: boolean
    desc?: boolean
    peopleDesc?: boolean
    storeSize?: boolean
    businessType?: boolean
    country?: boolean
    state?: boolean
    city?: boolean
    pin?: boolean
    fullAddress?: boolean
    latitude?: boolean
    longitude?: boolean
    bannerImageUrl?: boolean
    priceInr?: boolean
    shareMode?: boolean
    startTime?: boolean
    endTime?: boolean
    days?: boolean
    sqft?: boolean
    dayOrNight?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type StoreOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "ownerId" | "title" | "desc" | "peopleDesc" | "storeSize" | "businessType" | "country" | "state" | "city" | "pin" | "fullAddress" | "latitude" | "longitude" | "bannerImageUrl" | "priceInr" | "shareMode" | "startTime" | "endTime" | "days" | "sqft" | "dayOrNight" | "createdAt" | "updatedAt", ExtArgs["result"]["store"]>
  export type StoreInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
    images?: boolean | Store$imagesArgs<ExtArgs>
    likes?: boolean | Store$likesArgs<ExtArgs>
    _count?: boolean | StoreCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type StoreIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type StoreIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $StorePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Store"
    objects: {
      owner: Prisma.$UserPayload<ExtArgs>
      images: Prisma.$StoreImagePayload<ExtArgs>[]
      likes: Prisma.$StoreLikePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      ownerId: string
      title: string
      desc: string
      peopleDesc: string
      storeSize: string
      businessType: string
      country: string
      state: string
      city: string
      pin: string
      fullAddress: string
      latitude: number | null
      longitude: number | null
      bannerImageUrl: string | null
      priceInr: number
      shareMode: $Enums.ShareMode
      startTime: string | null
      endTime: string | null
      days: string[]
      sqft: number | null
      dayOrNight: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["store"]>
    composites: {}
  }

  type StoreGetPayload<S extends boolean | null | undefined | StoreDefaultArgs> = $Result.GetResult<Prisma.$StorePayload, S>

  type StoreCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StoreFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StoreCountAggregateInputType | true
    }

  export interface StoreDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Store'], meta: { name: 'Store' } }
    /**
     * Find zero or one Store that matches the filter.
     * @param {StoreFindUniqueArgs} args - Arguments to find a Store
     * @example
     * // Get one Store
     * const store = await prisma.store.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StoreFindUniqueArgs>(args: SelectSubset<T, StoreFindUniqueArgs<ExtArgs>>): Prisma__StoreClient<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Store that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StoreFindUniqueOrThrowArgs} args - Arguments to find a Store
     * @example
     * // Get one Store
     * const store = await prisma.store.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StoreFindUniqueOrThrowArgs>(args: SelectSubset<T, StoreFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StoreClient<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Store that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreFindFirstArgs} args - Arguments to find a Store
     * @example
     * // Get one Store
     * const store = await prisma.store.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StoreFindFirstArgs>(args?: SelectSubset<T, StoreFindFirstArgs<ExtArgs>>): Prisma__StoreClient<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Store that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreFindFirstOrThrowArgs} args - Arguments to find a Store
     * @example
     * // Get one Store
     * const store = await prisma.store.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StoreFindFirstOrThrowArgs>(args?: SelectSubset<T, StoreFindFirstOrThrowArgs<ExtArgs>>): Prisma__StoreClient<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Stores that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Stores
     * const stores = await prisma.store.findMany()
     * 
     * // Get first 10 Stores
     * const stores = await prisma.store.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const storeWithIdOnly = await prisma.store.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StoreFindManyArgs>(args?: SelectSubset<T, StoreFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Store.
     * @param {StoreCreateArgs} args - Arguments to create a Store.
     * @example
     * // Create one Store
     * const Store = await prisma.store.create({
     *   data: {
     *     // ... data to create a Store
     *   }
     * })
     * 
     */
    create<T extends StoreCreateArgs>(args: SelectSubset<T, StoreCreateArgs<ExtArgs>>): Prisma__StoreClient<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Stores.
     * @param {StoreCreateManyArgs} args - Arguments to create many Stores.
     * @example
     * // Create many Stores
     * const store = await prisma.store.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StoreCreateManyArgs>(args?: SelectSubset<T, StoreCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Stores and returns the data saved in the database.
     * @param {StoreCreateManyAndReturnArgs} args - Arguments to create many Stores.
     * @example
     * // Create many Stores
     * const store = await prisma.store.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Stores and only return the `id`
     * const storeWithIdOnly = await prisma.store.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StoreCreateManyAndReturnArgs>(args?: SelectSubset<T, StoreCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Store.
     * @param {StoreDeleteArgs} args - Arguments to delete one Store.
     * @example
     * // Delete one Store
     * const Store = await prisma.store.delete({
     *   where: {
     *     // ... filter to delete one Store
     *   }
     * })
     * 
     */
    delete<T extends StoreDeleteArgs>(args: SelectSubset<T, StoreDeleteArgs<ExtArgs>>): Prisma__StoreClient<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Store.
     * @param {StoreUpdateArgs} args - Arguments to update one Store.
     * @example
     * // Update one Store
     * const store = await prisma.store.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StoreUpdateArgs>(args: SelectSubset<T, StoreUpdateArgs<ExtArgs>>): Prisma__StoreClient<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Stores.
     * @param {StoreDeleteManyArgs} args - Arguments to filter Stores to delete.
     * @example
     * // Delete a few Stores
     * const { count } = await prisma.store.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StoreDeleteManyArgs>(args?: SelectSubset<T, StoreDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Stores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Stores
     * const store = await prisma.store.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StoreUpdateManyArgs>(args: SelectSubset<T, StoreUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Stores and returns the data updated in the database.
     * @param {StoreUpdateManyAndReturnArgs} args - Arguments to update many Stores.
     * @example
     * // Update many Stores
     * const store = await prisma.store.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Stores and only return the `id`
     * const storeWithIdOnly = await prisma.store.updateManyAndReturn({
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
    updateManyAndReturn<T extends StoreUpdateManyAndReturnArgs>(args: SelectSubset<T, StoreUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Store.
     * @param {StoreUpsertArgs} args - Arguments to update or create a Store.
     * @example
     * // Update or create a Store
     * const store = await prisma.store.upsert({
     *   create: {
     *     // ... data to create a Store
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Store we want to update
     *   }
     * })
     */
    upsert<T extends StoreUpsertArgs>(args: SelectSubset<T, StoreUpsertArgs<ExtArgs>>): Prisma__StoreClient<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Stores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreCountArgs} args - Arguments to filter Stores to count.
     * @example
     * // Count the number of Stores
     * const count = await prisma.store.count({
     *   where: {
     *     // ... the filter for the Stores we want to count
     *   }
     * })
    **/
    count<T extends StoreCountArgs>(
      args?: Subset<T, StoreCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StoreCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Store.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StoreAggregateArgs>(args: Subset<T, StoreAggregateArgs>): Prisma.PrismaPromise<GetStoreAggregateType<T>>

    /**
     * Group by Store.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreGroupByArgs} args - Group by arguments.
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
      T extends StoreGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StoreGroupByArgs['orderBy'] }
        : { orderBy?: StoreGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, StoreGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStoreGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Store model
   */
  readonly fields: StoreFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Store.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StoreClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    owner<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    images<T extends Store$imagesArgs<ExtArgs> = {}>(args?: Subset<T, Store$imagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StoreImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    likes<T extends Store$likesArgs<ExtArgs> = {}>(args?: Subset<T, Store$likesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StoreLikePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Store model
   */
  interface StoreFieldRefs {
    readonly id: FieldRef<"Store", 'String'>
    readonly ownerId: FieldRef<"Store", 'String'>
    readonly title: FieldRef<"Store", 'String'>
    readonly desc: FieldRef<"Store", 'String'>
    readonly peopleDesc: FieldRef<"Store", 'String'>
    readonly storeSize: FieldRef<"Store", 'String'>
    readonly businessType: FieldRef<"Store", 'String'>
    readonly country: FieldRef<"Store", 'String'>
    readonly state: FieldRef<"Store", 'String'>
    readonly city: FieldRef<"Store", 'String'>
    readonly pin: FieldRef<"Store", 'String'>
    readonly fullAddress: FieldRef<"Store", 'String'>
    readonly latitude: FieldRef<"Store", 'Float'>
    readonly longitude: FieldRef<"Store", 'Float'>
    readonly bannerImageUrl: FieldRef<"Store", 'String'>
    readonly priceInr: FieldRef<"Store", 'Int'>
    readonly shareMode: FieldRef<"Store", 'ShareMode'>
    readonly startTime: FieldRef<"Store", 'String'>
    readonly endTime: FieldRef<"Store", 'String'>
    readonly days: FieldRef<"Store", 'String[]'>
    readonly sqft: FieldRef<"Store", 'Int'>
    readonly dayOrNight: FieldRef<"Store", 'String'>
    readonly createdAt: FieldRef<"Store", 'DateTime'>
    readonly updatedAt: FieldRef<"Store", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Store findUnique
   */
  export type StoreFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Store
     */
    omit?: StoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreInclude<ExtArgs> | null
    /**
     * Filter, which Store to fetch.
     */
    where: StoreWhereUniqueInput
  }

  /**
   * Store findUniqueOrThrow
   */
  export type StoreFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Store
     */
    omit?: StoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreInclude<ExtArgs> | null
    /**
     * Filter, which Store to fetch.
     */
    where: StoreWhereUniqueInput
  }

  /**
   * Store findFirst
   */
  export type StoreFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Store
     */
    omit?: StoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreInclude<ExtArgs> | null
    /**
     * Filter, which Store to fetch.
     */
    where?: StoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stores to fetch.
     */
    orderBy?: StoreOrderByWithRelationInput | StoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Stores.
     */
    cursor?: StoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Stores.
     */
    distinct?: StoreScalarFieldEnum | StoreScalarFieldEnum[]
  }

  /**
   * Store findFirstOrThrow
   */
  export type StoreFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Store
     */
    omit?: StoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreInclude<ExtArgs> | null
    /**
     * Filter, which Store to fetch.
     */
    where?: StoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stores to fetch.
     */
    orderBy?: StoreOrderByWithRelationInput | StoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Stores.
     */
    cursor?: StoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Stores.
     */
    distinct?: StoreScalarFieldEnum | StoreScalarFieldEnum[]
  }

  /**
   * Store findMany
   */
  export type StoreFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Store
     */
    omit?: StoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreInclude<ExtArgs> | null
    /**
     * Filter, which Stores to fetch.
     */
    where?: StoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stores to fetch.
     */
    orderBy?: StoreOrderByWithRelationInput | StoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Stores.
     */
    cursor?: StoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stores.
     */
    skip?: number
    distinct?: StoreScalarFieldEnum | StoreScalarFieldEnum[]
  }

  /**
   * Store create
   */
  export type StoreCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Store
     */
    omit?: StoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreInclude<ExtArgs> | null
    /**
     * The data needed to create a Store.
     */
    data: XOR<StoreCreateInput, StoreUncheckedCreateInput>
  }

  /**
   * Store createMany
   */
  export type StoreCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Stores.
     */
    data: StoreCreateManyInput | StoreCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Store createManyAndReturn
   */
  export type StoreCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Store
     */
    omit?: StoreOmit<ExtArgs> | null
    /**
     * The data used to create many Stores.
     */
    data: StoreCreateManyInput | StoreCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Store update
   */
  export type StoreUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Store
     */
    omit?: StoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreInclude<ExtArgs> | null
    /**
     * The data needed to update a Store.
     */
    data: XOR<StoreUpdateInput, StoreUncheckedUpdateInput>
    /**
     * Choose, which Store to update.
     */
    where: StoreWhereUniqueInput
  }

  /**
   * Store updateMany
   */
  export type StoreUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Stores.
     */
    data: XOR<StoreUpdateManyMutationInput, StoreUncheckedUpdateManyInput>
    /**
     * Filter which Stores to update
     */
    where?: StoreWhereInput
    /**
     * Limit how many Stores to update.
     */
    limit?: number
  }

  /**
   * Store updateManyAndReturn
   */
  export type StoreUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Store
     */
    omit?: StoreOmit<ExtArgs> | null
    /**
     * The data used to update Stores.
     */
    data: XOR<StoreUpdateManyMutationInput, StoreUncheckedUpdateManyInput>
    /**
     * Filter which Stores to update
     */
    where?: StoreWhereInput
    /**
     * Limit how many Stores to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Store upsert
   */
  export type StoreUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Store
     */
    omit?: StoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreInclude<ExtArgs> | null
    /**
     * The filter to search for the Store to update in case it exists.
     */
    where: StoreWhereUniqueInput
    /**
     * In case the Store found by the `where` argument doesn't exist, create a new Store with this data.
     */
    create: XOR<StoreCreateInput, StoreUncheckedCreateInput>
    /**
     * In case the Store was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StoreUpdateInput, StoreUncheckedUpdateInput>
  }

  /**
   * Store delete
   */
  export type StoreDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Store
     */
    omit?: StoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreInclude<ExtArgs> | null
    /**
     * Filter which Store to delete.
     */
    where: StoreWhereUniqueInput
  }

  /**
   * Store deleteMany
   */
  export type StoreDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Stores to delete
     */
    where?: StoreWhereInput
    /**
     * Limit how many Stores to delete.
     */
    limit?: number
  }

  /**
   * Store.images
   */
  export type Store$imagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreImage
     */
    select?: StoreImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StoreImage
     */
    omit?: StoreImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreImageInclude<ExtArgs> | null
    where?: StoreImageWhereInput
    orderBy?: StoreImageOrderByWithRelationInput | StoreImageOrderByWithRelationInput[]
    cursor?: StoreImageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StoreImageScalarFieldEnum | StoreImageScalarFieldEnum[]
  }

  /**
   * Store.likes
   */
  export type Store$likesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreLike
     */
    select?: StoreLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StoreLike
     */
    omit?: StoreLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreLikeInclude<ExtArgs> | null
    where?: StoreLikeWhereInput
    orderBy?: StoreLikeOrderByWithRelationInput | StoreLikeOrderByWithRelationInput[]
    cursor?: StoreLikeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StoreLikeScalarFieldEnum | StoreLikeScalarFieldEnum[]
  }

  /**
   * Store without action
   */
  export type StoreDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Store
     */
    omit?: StoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreInclude<ExtArgs> | null
  }


  /**
   * Model StoreImage
   */

  export type AggregateStoreImage = {
    _count: StoreImageCountAggregateOutputType | null
    _avg: StoreImageAvgAggregateOutputType | null
    _sum: StoreImageSumAggregateOutputType | null
    _min: StoreImageMinAggregateOutputType | null
    _max: StoreImageMaxAggregateOutputType | null
  }

  export type StoreImageAvgAggregateOutputType = {
    order: number | null
  }

  export type StoreImageSumAggregateOutputType = {
    order: number | null
  }

  export type StoreImageMinAggregateOutputType = {
    id: string | null
    storeId: string | null
    url: string | null
    order: number | null
    createdAt: Date | null
  }

  export type StoreImageMaxAggregateOutputType = {
    id: string | null
    storeId: string | null
    url: string | null
    order: number | null
    createdAt: Date | null
  }

  export type StoreImageCountAggregateOutputType = {
    id: number
    storeId: number
    url: number
    order: number
    createdAt: number
    _all: number
  }


  export type StoreImageAvgAggregateInputType = {
    order?: true
  }

  export type StoreImageSumAggregateInputType = {
    order?: true
  }

  export type StoreImageMinAggregateInputType = {
    id?: true
    storeId?: true
    url?: true
    order?: true
    createdAt?: true
  }

  export type StoreImageMaxAggregateInputType = {
    id?: true
    storeId?: true
    url?: true
    order?: true
    createdAt?: true
  }

  export type StoreImageCountAggregateInputType = {
    id?: true
    storeId?: true
    url?: true
    order?: true
    createdAt?: true
    _all?: true
  }

  export type StoreImageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StoreImage to aggregate.
     */
    where?: StoreImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StoreImages to fetch.
     */
    orderBy?: StoreImageOrderByWithRelationInput | StoreImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StoreImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StoreImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StoreImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned StoreImages
    **/
    _count?: true | StoreImageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StoreImageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StoreImageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StoreImageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StoreImageMaxAggregateInputType
  }

  export type GetStoreImageAggregateType<T extends StoreImageAggregateArgs> = {
        [P in keyof T & keyof AggregateStoreImage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStoreImage[P]>
      : GetScalarType<T[P], AggregateStoreImage[P]>
  }




  export type StoreImageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StoreImageWhereInput
    orderBy?: StoreImageOrderByWithAggregationInput | StoreImageOrderByWithAggregationInput[]
    by: StoreImageScalarFieldEnum[] | StoreImageScalarFieldEnum
    having?: StoreImageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StoreImageCountAggregateInputType | true
    _avg?: StoreImageAvgAggregateInputType
    _sum?: StoreImageSumAggregateInputType
    _min?: StoreImageMinAggregateInputType
    _max?: StoreImageMaxAggregateInputType
  }

  export type StoreImageGroupByOutputType = {
    id: string
    storeId: string
    url: string
    order: number
    createdAt: Date
    _count: StoreImageCountAggregateOutputType | null
    _avg: StoreImageAvgAggregateOutputType | null
    _sum: StoreImageSumAggregateOutputType | null
    _min: StoreImageMinAggregateOutputType | null
    _max: StoreImageMaxAggregateOutputType | null
  }

  type GetStoreImageGroupByPayload<T extends StoreImageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StoreImageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StoreImageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StoreImageGroupByOutputType[P]>
            : GetScalarType<T[P], StoreImageGroupByOutputType[P]>
        }
      >
    >


  export type StoreImageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    storeId?: boolean
    url?: boolean
    order?: boolean
    createdAt?: boolean
    store?: boolean | StoreDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["storeImage"]>

  export type StoreImageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    storeId?: boolean
    url?: boolean
    order?: boolean
    createdAt?: boolean
    store?: boolean | StoreDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["storeImage"]>

  export type StoreImageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    storeId?: boolean
    url?: boolean
    order?: boolean
    createdAt?: boolean
    store?: boolean | StoreDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["storeImage"]>

  export type StoreImageSelectScalar = {
    id?: boolean
    storeId?: boolean
    url?: boolean
    order?: boolean
    createdAt?: boolean
  }

  export type StoreImageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "storeId" | "url" | "order" | "createdAt", ExtArgs["result"]["storeImage"]>
  export type StoreImageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    store?: boolean | StoreDefaultArgs<ExtArgs>
  }
  export type StoreImageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    store?: boolean | StoreDefaultArgs<ExtArgs>
  }
  export type StoreImageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    store?: boolean | StoreDefaultArgs<ExtArgs>
  }

  export type $StoreImagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "StoreImage"
    objects: {
      store: Prisma.$StorePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      storeId: string
      url: string
      order: number
      createdAt: Date
    }, ExtArgs["result"]["storeImage"]>
    composites: {}
  }

  type StoreImageGetPayload<S extends boolean | null | undefined | StoreImageDefaultArgs> = $Result.GetResult<Prisma.$StoreImagePayload, S>

  type StoreImageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StoreImageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StoreImageCountAggregateInputType | true
    }

  export interface StoreImageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['StoreImage'], meta: { name: 'StoreImage' } }
    /**
     * Find zero or one StoreImage that matches the filter.
     * @param {StoreImageFindUniqueArgs} args - Arguments to find a StoreImage
     * @example
     * // Get one StoreImage
     * const storeImage = await prisma.storeImage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StoreImageFindUniqueArgs>(args: SelectSubset<T, StoreImageFindUniqueArgs<ExtArgs>>): Prisma__StoreImageClient<$Result.GetResult<Prisma.$StoreImagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one StoreImage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StoreImageFindUniqueOrThrowArgs} args - Arguments to find a StoreImage
     * @example
     * // Get one StoreImage
     * const storeImage = await prisma.storeImage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StoreImageFindUniqueOrThrowArgs>(args: SelectSubset<T, StoreImageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StoreImageClient<$Result.GetResult<Prisma.$StoreImagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StoreImage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreImageFindFirstArgs} args - Arguments to find a StoreImage
     * @example
     * // Get one StoreImage
     * const storeImage = await prisma.storeImage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StoreImageFindFirstArgs>(args?: SelectSubset<T, StoreImageFindFirstArgs<ExtArgs>>): Prisma__StoreImageClient<$Result.GetResult<Prisma.$StoreImagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StoreImage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreImageFindFirstOrThrowArgs} args - Arguments to find a StoreImage
     * @example
     * // Get one StoreImage
     * const storeImage = await prisma.storeImage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StoreImageFindFirstOrThrowArgs>(args?: SelectSubset<T, StoreImageFindFirstOrThrowArgs<ExtArgs>>): Prisma__StoreImageClient<$Result.GetResult<Prisma.$StoreImagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more StoreImages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreImageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StoreImages
     * const storeImages = await prisma.storeImage.findMany()
     * 
     * // Get first 10 StoreImages
     * const storeImages = await prisma.storeImage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const storeImageWithIdOnly = await prisma.storeImage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StoreImageFindManyArgs>(args?: SelectSubset<T, StoreImageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StoreImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a StoreImage.
     * @param {StoreImageCreateArgs} args - Arguments to create a StoreImage.
     * @example
     * // Create one StoreImage
     * const StoreImage = await prisma.storeImage.create({
     *   data: {
     *     // ... data to create a StoreImage
     *   }
     * })
     * 
     */
    create<T extends StoreImageCreateArgs>(args: SelectSubset<T, StoreImageCreateArgs<ExtArgs>>): Prisma__StoreImageClient<$Result.GetResult<Prisma.$StoreImagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many StoreImages.
     * @param {StoreImageCreateManyArgs} args - Arguments to create many StoreImages.
     * @example
     * // Create many StoreImages
     * const storeImage = await prisma.storeImage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StoreImageCreateManyArgs>(args?: SelectSubset<T, StoreImageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many StoreImages and returns the data saved in the database.
     * @param {StoreImageCreateManyAndReturnArgs} args - Arguments to create many StoreImages.
     * @example
     * // Create many StoreImages
     * const storeImage = await prisma.storeImage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many StoreImages and only return the `id`
     * const storeImageWithIdOnly = await prisma.storeImage.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StoreImageCreateManyAndReturnArgs>(args?: SelectSubset<T, StoreImageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StoreImagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a StoreImage.
     * @param {StoreImageDeleteArgs} args - Arguments to delete one StoreImage.
     * @example
     * // Delete one StoreImage
     * const StoreImage = await prisma.storeImage.delete({
     *   where: {
     *     // ... filter to delete one StoreImage
     *   }
     * })
     * 
     */
    delete<T extends StoreImageDeleteArgs>(args: SelectSubset<T, StoreImageDeleteArgs<ExtArgs>>): Prisma__StoreImageClient<$Result.GetResult<Prisma.$StoreImagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one StoreImage.
     * @param {StoreImageUpdateArgs} args - Arguments to update one StoreImage.
     * @example
     * // Update one StoreImage
     * const storeImage = await prisma.storeImage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StoreImageUpdateArgs>(args: SelectSubset<T, StoreImageUpdateArgs<ExtArgs>>): Prisma__StoreImageClient<$Result.GetResult<Prisma.$StoreImagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more StoreImages.
     * @param {StoreImageDeleteManyArgs} args - Arguments to filter StoreImages to delete.
     * @example
     * // Delete a few StoreImages
     * const { count } = await prisma.storeImage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StoreImageDeleteManyArgs>(args?: SelectSubset<T, StoreImageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StoreImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreImageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StoreImages
     * const storeImage = await prisma.storeImage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StoreImageUpdateManyArgs>(args: SelectSubset<T, StoreImageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StoreImages and returns the data updated in the database.
     * @param {StoreImageUpdateManyAndReturnArgs} args - Arguments to update many StoreImages.
     * @example
     * // Update many StoreImages
     * const storeImage = await prisma.storeImage.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more StoreImages and only return the `id`
     * const storeImageWithIdOnly = await prisma.storeImage.updateManyAndReturn({
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
    updateManyAndReturn<T extends StoreImageUpdateManyAndReturnArgs>(args: SelectSubset<T, StoreImageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StoreImagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one StoreImage.
     * @param {StoreImageUpsertArgs} args - Arguments to update or create a StoreImage.
     * @example
     * // Update or create a StoreImage
     * const storeImage = await prisma.storeImage.upsert({
     *   create: {
     *     // ... data to create a StoreImage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StoreImage we want to update
     *   }
     * })
     */
    upsert<T extends StoreImageUpsertArgs>(args: SelectSubset<T, StoreImageUpsertArgs<ExtArgs>>): Prisma__StoreImageClient<$Result.GetResult<Prisma.$StoreImagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of StoreImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreImageCountArgs} args - Arguments to filter StoreImages to count.
     * @example
     * // Count the number of StoreImages
     * const count = await prisma.storeImage.count({
     *   where: {
     *     // ... the filter for the StoreImages we want to count
     *   }
     * })
    **/
    count<T extends StoreImageCountArgs>(
      args?: Subset<T, StoreImageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StoreImageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StoreImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreImageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StoreImageAggregateArgs>(args: Subset<T, StoreImageAggregateArgs>): Prisma.PrismaPromise<GetStoreImageAggregateType<T>>

    /**
     * Group by StoreImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreImageGroupByArgs} args - Group by arguments.
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
      T extends StoreImageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StoreImageGroupByArgs['orderBy'] }
        : { orderBy?: StoreImageGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, StoreImageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStoreImageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the StoreImage model
   */
  readonly fields: StoreImageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for StoreImage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StoreImageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    store<T extends StoreDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StoreDefaultArgs<ExtArgs>>): Prisma__StoreClient<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the StoreImage model
   */
  interface StoreImageFieldRefs {
    readonly id: FieldRef<"StoreImage", 'String'>
    readonly storeId: FieldRef<"StoreImage", 'String'>
    readonly url: FieldRef<"StoreImage", 'String'>
    readonly order: FieldRef<"StoreImage", 'Int'>
    readonly createdAt: FieldRef<"StoreImage", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * StoreImage findUnique
   */
  export type StoreImageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreImage
     */
    select?: StoreImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StoreImage
     */
    omit?: StoreImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreImageInclude<ExtArgs> | null
    /**
     * Filter, which StoreImage to fetch.
     */
    where: StoreImageWhereUniqueInput
  }

  /**
   * StoreImage findUniqueOrThrow
   */
  export type StoreImageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreImage
     */
    select?: StoreImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StoreImage
     */
    omit?: StoreImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreImageInclude<ExtArgs> | null
    /**
     * Filter, which StoreImage to fetch.
     */
    where: StoreImageWhereUniqueInput
  }

  /**
   * StoreImage findFirst
   */
  export type StoreImageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreImage
     */
    select?: StoreImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StoreImage
     */
    omit?: StoreImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreImageInclude<ExtArgs> | null
    /**
     * Filter, which StoreImage to fetch.
     */
    where?: StoreImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StoreImages to fetch.
     */
    orderBy?: StoreImageOrderByWithRelationInput | StoreImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StoreImages.
     */
    cursor?: StoreImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StoreImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StoreImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StoreImages.
     */
    distinct?: StoreImageScalarFieldEnum | StoreImageScalarFieldEnum[]
  }

  /**
   * StoreImage findFirstOrThrow
   */
  export type StoreImageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreImage
     */
    select?: StoreImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StoreImage
     */
    omit?: StoreImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreImageInclude<ExtArgs> | null
    /**
     * Filter, which StoreImage to fetch.
     */
    where?: StoreImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StoreImages to fetch.
     */
    orderBy?: StoreImageOrderByWithRelationInput | StoreImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StoreImages.
     */
    cursor?: StoreImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StoreImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StoreImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StoreImages.
     */
    distinct?: StoreImageScalarFieldEnum | StoreImageScalarFieldEnum[]
  }

  /**
   * StoreImage findMany
   */
  export type StoreImageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreImage
     */
    select?: StoreImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StoreImage
     */
    omit?: StoreImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreImageInclude<ExtArgs> | null
    /**
     * Filter, which StoreImages to fetch.
     */
    where?: StoreImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StoreImages to fetch.
     */
    orderBy?: StoreImageOrderByWithRelationInput | StoreImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing StoreImages.
     */
    cursor?: StoreImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StoreImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StoreImages.
     */
    skip?: number
    distinct?: StoreImageScalarFieldEnum | StoreImageScalarFieldEnum[]
  }

  /**
   * StoreImage create
   */
  export type StoreImageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreImage
     */
    select?: StoreImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StoreImage
     */
    omit?: StoreImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreImageInclude<ExtArgs> | null
    /**
     * The data needed to create a StoreImage.
     */
    data: XOR<StoreImageCreateInput, StoreImageUncheckedCreateInput>
  }

  /**
   * StoreImage createMany
   */
  export type StoreImageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many StoreImages.
     */
    data: StoreImageCreateManyInput | StoreImageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * StoreImage createManyAndReturn
   */
  export type StoreImageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreImage
     */
    select?: StoreImageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StoreImage
     */
    omit?: StoreImageOmit<ExtArgs> | null
    /**
     * The data used to create many StoreImages.
     */
    data: StoreImageCreateManyInput | StoreImageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreImageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * StoreImage update
   */
  export type StoreImageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreImage
     */
    select?: StoreImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StoreImage
     */
    omit?: StoreImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreImageInclude<ExtArgs> | null
    /**
     * The data needed to update a StoreImage.
     */
    data: XOR<StoreImageUpdateInput, StoreImageUncheckedUpdateInput>
    /**
     * Choose, which StoreImage to update.
     */
    where: StoreImageWhereUniqueInput
  }

  /**
   * StoreImage updateMany
   */
  export type StoreImageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update StoreImages.
     */
    data: XOR<StoreImageUpdateManyMutationInput, StoreImageUncheckedUpdateManyInput>
    /**
     * Filter which StoreImages to update
     */
    where?: StoreImageWhereInput
    /**
     * Limit how many StoreImages to update.
     */
    limit?: number
  }

  /**
   * StoreImage updateManyAndReturn
   */
  export type StoreImageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreImage
     */
    select?: StoreImageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StoreImage
     */
    omit?: StoreImageOmit<ExtArgs> | null
    /**
     * The data used to update StoreImages.
     */
    data: XOR<StoreImageUpdateManyMutationInput, StoreImageUncheckedUpdateManyInput>
    /**
     * Filter which StoreImages to update
     */
    where?: StoreImageWhereInput
    /**
     * Limit how many StoreImages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreImageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * StoreImage upsert
   */
  export type StoreImageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreImage
     */
    select?: StoreImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StoreImage
     */
    omit?: StoreImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreImageInclude<ExtArgs> | null
    /**
     * The filter to search for the StoreImage to update in case it exists.
     */
    where: StoreImageWhereUniqueInput
    /**
     * In case the StoreImage found by the `where` argument doesn't exist, create a new StoreImage with this data.
     */
    create: XOR<StoreImageCreateInput, StoreImageUncheckedCreateInput>
    /**
     * In case the StoreImage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StoreImageUpdateInput, StoreImageUncheckedUpdateInput>
  }

  /**
   * StoreImage delete
   */
  export type StoreImageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreImage
     */
    select?: StoreImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StoreImage
     */
    omit?: StoreImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreImageInclude<ExtArgs> | null
    /**
     * Filter which StoreImage to delete.
     */
    where: StoreImageWhereUniqueInput
  }

  /**
   * StoreImage deleteMany
   */
  export type StoreImageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StoreImages to delete
     */
    where?: StoreImageWhereInput
    /**
     * Limit how many StoreImages to delete.
     */
    limit?: number
  }

  /**
   * StoreImage without action
   */
  export type StoreImageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreImage
     */
    select?: StoreImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StoreImage
     */
    omit?: StoreImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreImageInclude<ExtArgs> | null
  }


  /**
   * Model StoreLike
   */

  export type AggregateStoreLike = {
    _count: StoreLikeCountAggregateOutputType | null
    _min: StoreLikeMinAggregateOutputType | null
    _max: StoreLikeMaxAggregateOutputType | null
  }

  export type StoreLikeMinAggregateOutputType = {
    id: string | null
    userId: string | null
    storeId: string | null
    createdAt: Date | null
  }

  export type StoreLikeMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    storeId: string | null
    createdAt: Date | null
  }

  export type StoreLikeCountAggregateOutputType = {
    id: number
    userId: number
    storeId: number
    createdAt: number
    _all: number
  }


  export type StoreLikeMinAggregateInputType = {
    id?: true
    userId?: true
    storeId?: true
    createdAt?: true
  }

  export type StoreLikeMaxAggregateInputType = {
    id?: true
    userId?: true
    storeId?: true
    createdAt?: true
  }

  export type StoreLikeCountAggregateInputType = {
    id?: true
    userId?: true
    storeId?: true
    createdAt?: true
    _all?: true
  }

  export type StoreLikeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StoreLike to aggregate.
     */
    where?: StoreLikeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StoreLikes to fetch.
     */
    orderBy?: StoreLikeOrderByWithRelationInput | StoreLikeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StoreLikeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StoreLikes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StoreLikes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned StoreLikes
    **/
    _count?: true | StoreLikeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StoreLikeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StoreLikeMaxAggregateInputType
  }

  export type GetStoreLikeAggregateType<T extends StoreLikeAggregateArgs> = {
        [P in keyof T & keyof AggregateStoreLike]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStoreLike[P]>
      : GetScalarType<T[P], AggregateStoreLike[P]>
  }




  export type StoreLikeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StoreLikeWhereInput
    orderBy?: StoreLikeOrderByWithAggregationInput | StoreLikeOrderByWithAggregationInput[]
    by: StoreLikeScalarFieldEnum[] | StoreLikeScalarFieldEnum
    having?: StoreLikeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StoreLikeCountAggregateInputType | true
    _min?: StoreLikeMinAggregateInputType
    _max?: StoreLikeMaxAggregateInputType
  }

  export type StoreLikeGroupByOutputType = {
    id: string
    userId: string
    storeId: string
    createdAt: Date
    _count: StoreLikeCountAggregateOutputType | null
    _min: StoreLikeMinAggregateOutputType | null
    _max: StoreLikeMaxAggregateOutputType | null
  }

  type GetStoreLikeGroupByPayload<T extends StoreLikeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StoreLikeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StoreLikeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StoreLikeGroupByOutputType[P]>
            : GetScalarType<T[P], StoreLikeGroupByOutputType[P]>
        }
      >
    >


  export type StoreLikeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    storeId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    store?: boolean | StoreDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["storeLike"]>

  export type StoreLikeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    storeId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    store?: boolean | StoreDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["storeLike"]>

  export type StoreLikeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    storeId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    store?: boolean | StoreDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["storeLike"]>

  export type StoreLikeSelectScalar = {
    id?: boolean
    userId?: boolean
    storeId?: boolean
    createdAt?: boolean
  }

  export type StoreLikeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "storeId" | "createdAt", ExtArgs["result"]["storeLike"]>
  export type StoreLikeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    store?: boolean | StoreDefaultArgs<ExtArgs>
  }
  export type StoreLikeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    store?: boolean | StoreDefaultArgs<ExtArgs>
  }
  export type StoreLikeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    store?: boolean | StoreDefaultArgs<ExtArgs>
  }

  export type $StoreLikePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "StoreLike"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      store: Prisma.$StorePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      storeId: string
      createdAt: Date
    }, ExtArgs["result"]["storeLike"]>
    composites: {}
  }

  type StoreLikeGetPayload<S extends boolean | null | undefined | StoreLikeDefaultArgs> = $Result.GetResult<Prisma.$StoreLikePayload, S>

  type StoreLikeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StoreLikeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StoreLikeCountAggregateInputType | true
    }

  export interface StoreLikeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['StoreLike'], meta: { name: 'StoreLike' } }
    /**
     * Find zero or one StoreLike that matches the filter.
     * @param {StoreLikeFindUniqueArgs} args - Arguments to find a StoreLike
     * @example
     * // Get one StoreLike
     * const storeLike = await prisma.storeLike.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StoreLikeFindUniqueArgs>(args: SelectSubset<T, StoreLikeFindUniqueArgs<ExtArgs>>): Prisma__StoreLikeClient<$Result.GetResult<Prisma.$StoreLikePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one StoreLike that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StoreLikeFindUniqueOrThrowArgs} args - Arguments to find a StoreLike
     * @example
     * // Get one StoreLike
     * const storeLike = await prisma.storeLike.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StoreLikeFindUniqueOrThrowArgs>(args: SelectSubset<T, StoreLikeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StoreLikeClient<$Result.GetResult<Prisma.$StoreLikePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StoreLike that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreLikeFindFirstArgs} args - Arguments to find a StoreLike
     * @example
     * // Get one StoreLike
     * const storeLike = await prisma.storeLike.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StoreLikeFindFirstArgs>(args?: SelectSubset<T, StoreLikeFindFirstArgs<ExtArgs>>): Prisma__StoreLikeClient<$Result.GetResult<Prisma.$StoreLikePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StoreLike that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreLikeFindFirstOrThrowArgs} args - Arguments to find a StoreLike
     * @example
     * // Get one StoreLike
     * const storeLike = await prisma.storeLike.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StoreLikeFindFirstOrThrowArgs>(args?: SelectSubset<T, StoreLikeFindFirstOrThrowArgs<ExtArgs>>): Prisma__StoreLikeClient<$Result.GetResult<Prisma.$StoreLikePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more StoreLikes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreLikeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StoreLikes
     * const storeLikes = await prisma.storeLike.findMany()
     * 
     * // Get first 10 StoreLikes
     * const storeLikes = await prisma.storeLike.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const storeLikeWithIdOnly = await prisma.storeLike.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StoreLikeFindManyArgs>(args?: SelectSubset<T, StoreLikeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StoreLikePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a StoreLike.
     * @param {StoreLikeCreateArgs} args - Arguments to create a StoreLike.
     * @example
     * // Create one StoreLike
     * const StoreLike = await prisma.storeLike.create({
     *   data: {
     *     // ... data to create a StoreLike
     *   }
     * })
     * 
     */
    create<T extends StoreLikeCreateArgs>(args: SelectSubset<T, StoreLikeCreateArgs<ExtArgs>>): Prisma__StoreLikeClient<$Result.GetResult<Prisma.$StoreLikePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many StoreLikes.
     * @param {StoreLikeCreateManyArgs} args - Arguments to create many StoreLikes.
     * @example
     * // Create many StoreLikes
     * const storeLike = await prisma.storeLike.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StoreLikeCreateManyArgs>(args?: SelectSubset<T, StoreLikeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many StoreLikes and returns the data saved in the database.
     * @param {StoreLikeCreateManyAndReturnArgs} args - Arguments to create many StoreLikes.
     * @example
     * // Create many StoreLikes
     * const storeLike = await prisma.storeLike.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many StoreLikes and only return the `id`
     * const storeLikeWithIdOnly = await prisma.storeLike.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StoreLikeCreateManyAndReturnArgs>(args?: SelectSubset<T, StoreLikeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StoreLikePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a StoreLike.
     * @param {StoreLikeDeleteArgs} args - Arguments to delete one StoreLike.
     * @example
     * // Delete one StoreLike
     * const StoreLike = await prisma.storeLike.delete({
     *   where: {
     *     // ... filter to delete one StoreLike
     *   }
     * })
     * 
     */
    delete<T extends StoreLikeDeleteArgs>(args: SelectSubset<T, StoreLikeDeleteArgs<ExtArgs>>): Prisma__StoreLikeClient<$Result.GetResult<Prisma.$StoreLikePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one StoreLike.
     * @param {StoreLikeUpdateArgs} args - Arguments to update one StoreLike.
     * @example
     * // Update one StoreLike
     * const storeLike = await prisma.storeLike.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StoreLikeUpdateArgs>(args: SelectSubset<T, StoreLikeUpdateArgs<ExtArgs>>): Prisma__StoreLikeClient<$Result.GetResult<Prisma.$StoreLikePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more StoreLikes.
     * @param {StoreLikeDeleteManyArgs} args - Arguments to filter StoreLikes to delete.
     * @example
     * // Delete a few StoreLikes
     * const { count } = await prisma.storeLike.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StoreLikeDeleteManyArgs>(args?: SelectSubset<T, StoreLikeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StoreLikes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreLikeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StoreLikes
     * const storeLike = await prisma.storeLike.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StoreLikeUpdateManyArgs>(args: SelectSubset<T, StoreLikeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StoreLikes and returns the data updated in the database.
     * @param {StoreLikeUpdateManyAndReturnArgs} args - Arguments to update many StoreLikes.
     * @example
     * // Update many StoreLikes
     * const storeLike = await prisma.storeLike.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more StoreLikes and only return the `id`
     * const storeLikeWithIdOnly = await prisma.storeLike.updateManyAndReturn({
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
    updateManyAndReturn<T extends StoreLikeUpdateManyAndReturnArgs>(args: SelectSubset<T, StoreLikeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StoreLikePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one StoreLike.
     * @param {StoreLikeUpsertArgs} args - Arguments to update or create a StoreLike.
     * @example
     * // Update or create a StoreLike
     * const storeLike = await prisma.storeLike.upsert({
     *   create: {
     *     // ... data to create a StoreLike
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StoreLike we want to update
     *   }
     * })
     */
    upsert<T extends StoreLikeUpsertArgs>(args: SelectSubset<T, StoreLikeUpsertArgs<ExtArgs>>): Prisma__StoreLikeClient<$Result.GetResult<Prisma.$StoreLikePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of StoreLikes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreLikeCountArgs} args - Arguments to filter StoreLikes to count.
     * @example
     * // Count the number of StoreLikes
     * const count = await prisma.storeLike.count({
     *   where: {
     *     // ... the filter for the StoreLikes we want to count
     *   }
     * })
    **/
    count<T extends StoreLikeCountArgs>(
      args?: Subset<T, StoreLikeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StoreLikeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StoreLike.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreLikeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StoreLikeAggregateArgs>(args: Subset<T, StoreLikeAggregateArgs>): Prisma.PrismaPromise<GetStoreLikeAggregateType<T>>

    /**
     * Group by StoreLike.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreLikeGroupByArgs} args - Group by arguments.
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
      T extends StoreLikeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StoreLikeGroupByArgs['orderBy'] }
        : { orderBy?: StoreLikeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, StoreLikeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStoreLikeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the StoreLike model
   */
  readonly fields: StoreLikeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for StoreLike.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StoreLikeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    store<T extends StoreDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StoreDefaultArgs<ExtArgs>>): Prisma__StoreClient<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the StoreLike model
   */
  interface StoreLikeFieldRefs {
    readonly id: FieldRef<"StoreLike", 'String'>
    readonly userId: FieldRef<"StoreLike", 'String'>
    readonly storeId: FieldRef<"StoreLike", 'String'>
    readonly createdAt: FieldRef<"StoreLike", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * StoreLike findUnique
   */
  export type StoreLikeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreLike
     */
    select?: StoreLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StoreLike
     */
    omit?: StoreLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreLikeInclude<ExtArgs> | null
    /**
     * Filter, which StoreLike to fetch.
     */
    where: StoreLikeWhereUniqueInput
  }

  /**
   * StoreLike findUniqueOrThrow
   */
  export type StoreLikeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreLike
     */
    select?: StoreLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StoreLike
     */
    omit?: StoreLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreLikeInclude<ExtArgs> | null
    /**
     * Filter, which StoreLike to fetch.
     */
    where: StoreLikeWhereUniqueInput
  }

  /**
   * StoreLike findFirst
   */
  export type StoreLikeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreLike
     */
    select?: StoreLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StoreLike
     */
    omit?: StoreLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreLikeInclude<ExtArgs> | null
    /**
     * Filter, which StoreLike to fetch.
     */
    where?: StoreLikeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StoreLikes to fetch.
     */
    orderBy?: StoreLikeOrderByWithRelationInput | StoreLikeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StoreLikes.
     */
    cursor?: StoreLikeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StoreLikes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StoreLikes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StoreLikes.
     */
    distinct?: StoreLikeScalarFieldEnum | StoreLikeScalarFieldEnum[]
  }

  /**
   * StoreLike findFirstOrThrow
   */
  export type StoreLikeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreLike
     */
    select?: StoreLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StoreLike
     */
    omit?: StoreLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreLikeInclude<ExtArgs> | null
    /**
     * Filter, which StoreLike to fetch.
     */
    where?: StoreLikeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StoreLikes to fetch.
     */
    orderBy?: StoreLikeOrderByWithRelationInput | StoreLikeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StoreLikes.
     */
    cursor?: StoreLikeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StoreLikes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StoreLikes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StoreLikes.
     */
    distinct?: StoreLikeScalarFieldEnum | StoreLikeScalarFieldEnum[]
  }

  /**
   * StoreLike findMany
   */
  export type StoreLikeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreLike
     */
    select?: StoreLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StoreLike
     */
    omit?: StoreLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreLikeInclude<ExtArgs> | null
    /**
     * Filter, which StoreLikes to fetch.
     */
    where?: StoreLikeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StoreLikes to fetch.
     */
    orderBy?: StoreLikeOrderByWithRelationInput | StoreLikeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing StoreLikes.
     */
    cursor?: StoreLikeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StoreLikes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StoreLikes.
     */
    skip?: number
    distinct?: StoreLikeScalarFieldEnum | StoreLikeScalarFieldEnum[]
  }

  /**
   * StoreLike create
   */
  export type StoreLikeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreLike
     */
    select?: StoreLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StoreLike
     */
    omit?: StoreLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreLikeInclude<ExtArgs> | null
    /**
     * The data needed to create a StoreLike.
     */
    data: XOR<StoreLikeCreateInput, StoreLikeUncheckedCreateInput>
  }

  /**
   * StoreLike createMany
   */
  export type StoreLikeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many StoreLikes.
     */
    data: StoreLikeCreateManyInput | StoreLikeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * StoreLike createManyAndReturn
   */
  export type StoreLikeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreLike
     */
    select?: StoreLikeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StoreLike
     */
    omit?: StoreLikeOmit<ExtArgs> | null
    /**
     * The data used to create many StoreLikes.
     */
    data: StoreLikeCreateManyInput | StoreLikeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreLikeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * StoreLike update
   */
  export type StoreLikeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreLike
     */
    select?: StoreLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StoreLike
     */
    omit?: StoreLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreLikeInclude<ExtArgs> | null
    /**
     * The data needed to update a StoreLike.
     */
    data: XOR<StoreLikeUpdateInput, StoreLikeUncheckedUpdateInput>
    /**
     * Choose, which StoreLike to update.
     */
    where: StoreLikeWhereUniqueInput
  }

  /**
   * StoreLike updateMany
   */
  export type StoreLikeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update StoreLikes.
     */
    data: XOR<StoreLikeUpdateManyMutationInput, StoreLikeUncheckedUpdateManyInput>
    /**
     * Filter which StoreLikes to update
     */
    where?: StoreLikeWhereInput
    /**
     * Limit how many StoreLikes to update.
     */
    limit?: number
  }

  /**
   * StoreLike updateManyAndReturn
   */
  export type StoreLikeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreLike
     */
    select?: StoreLikeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StoreLike
     */
    omit?: StoreLikeOmit<ExtArgs> | null
    /**
     * The data used to update StoreLikes.
     */
    data: XOR<StoreLikeUpdateManyMutationInput, StoreLikeUncheckedUpdateManyInput>
    /**
     * Filter which StoreLikes to update
     */
    where?: StoreLikeWhereInput
    /**
     * Limit how many StoreLikes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreLikeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * StoreLike upsert
   */
  export type StoreLikeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreLike
     */
    select?: StoreLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StoreLike
     */
    omit?: StoreLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreLikeInclude<ExtArgs> | null
    /**
     * The filter to search for the StoreLike to update in case it exists.
     */
    where: StoreLikeWhereUniqueInput
    /**
     * In case the StoreLike found by the `where` argument doesn't exist, create a new StoreLike with this data.
     */
    create: XOR<StoreLikeCreateInput, StoreLikeUncheckedCreateInput>
    /**
     * In case the StoreLike was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StoreLikeUpdateInput, StoreLikeUncheckedUpdateInput>
  }

  /**
   * StoreLike delete
   */
  export type StoreLikeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreLike
     */
    select?: StoreLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StoreLike
     */
    omit?: StoreLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreLikeInclude<ExtArgs> | null
    /**
     * Filter which StoreLike to delete.
     */
    where: StoreLikeWhereUniqueInput
  }

  /**
   * StoreLike deleteMany
   */
  export type StoreLikeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StoreLikes to delete
     */
    where?: StoreLikeWhereInput
    /**
     * Limit how many StoreLikes to delete.
     */
    limit?: number
  }

  /**
   * StoreLike without action
   */
  export type StoreLikeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreLike
     */
    select?: StoreLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StoreLike
     */
    omit?: StoreLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreLikeInclude<ExtArgs> | null
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
    email: 'email',
    image: 'image',
    phone: 'phone',
    phoneVerified: 'phoneVerified',
    createdAt: 'createdAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const StoreScalarFieldEnum: {
    id: 'id',
    ownerId: 'ownerId',
    title: 'title',
    desc: 'desc',
    peopleDesc: 'peopleDesc',
    storeSize: 'storeSize',
    businessType: 'businessType',
    country: 'country',
    state: 'state',
    city: 'city',
    pin: 'pin',
    fullAddress: 'fullAddress',
    latitude: 'latitude',
    longitude: 'longitude',
    bannerImageUrl: 'bannerImageUrl',
    priceInr: 'priceInr',
    shareMode: 'shareMode',
    startTime: 'startTime',
    endTime: 'endTime',
    days: 'days',
    sqft: 'sqft',
    dayOrNight: 'dayOrNight',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type StoreScalarFieldEnum = (typeof StoreScalarFieldEnum)[keyof typeof StoreScalarFieldEnum]


  export const StoreImageScalarFieldEnum: {
    id: 'id',
    storeId: 'storeId',
    url: 'url',
    order: 'order',
    createdAt: 'createdAt'
  };

  export type StoreImageScalarFieldEnum = (typeof StoreImageScalarFieldEnum)[keyof typeof StoreImageScalarFieldEnum]


  export const StoreLikeScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    storeId: 'storeId',
    createdAt: 'createdAt'
  };

  export type StoreLikeScalarFieldEnum = (typeof StoreLikeScalarFieldEnum)[keyof typeof StoreLikeScalarFieldEnum]


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
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


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
   * Reference to a field of type 'ShareMode'
   */
  export type EnumShareModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ShareMode'>
    


  /**
   * Reference to a field of type 'ShareMode[]'
   */
  export type ListEnumShareModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ShareMode[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    email?: StringNullableFilter<"User"> | string | null
    image?: StringNullableFilter<"User"> | string | null
    phone?: StringNullableFilter<"User"> | string | null
    phoneVerified?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    stores?: StoreListRelationFilter
    likedStores?: StoreLikeListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    phoneVerified?: SortOrder
    createdAt?: SortOrder
    stores?: StoreOrderByRelationAggregateInput
    likedStores?: StoreLikeOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    image?: StringNullableFilter<"User"> | string | null
    phone?: StringNullableFilter<"User"> | string | null
    phoneVerified?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    stores?: StoreListRelationFilter
    likedStores?: StoreLikeListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    phoneVerified?: SortOrder
    createdAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    email?: StringNullableWithAggregatesFilter<"User"> | string | null
    image?: StringNullableWithAggregatesFilter<"User"> | string | null
    phone?: StringNullableWithAggregatesFilter<"User"> | string | null
    phoneVerified?: BoolWithAggregatesFilter<"User"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type StoreWhereInput = {
    AND?: StoreWhereInput | StoreWhereInput[]
    OR?: StoreWhereInput[]
    NOT?: StoreWhereInput | StoreWhereInput[]
    id?: StringFilter<"Store"> | string
    ownerId?: StringFilter<"Store"> | string
    title?: StringFilter<"Store"> | string
    desc?: StringFilter<"Store"> | string
    peopleDesc?: StringFilter<"Store"> | string
    storeSize?: StringFilter<"Store"> | string
    businessType?: StringFilter<"Store"> | string
    country?: StringFilter<"Store"> | string
    state?: StringFilter<"Store"> | string
    city?: StringFilter<"Store"> | string
    pin?: StringFilter<"Store"> | string
    fullAddress?: StringFilter<"Store"> | string
    latitude?: FloatNullableFilter<"Store"> | number | null
    longitude?: FloatNullableFilter<"Store"> | number | null
    bannerImageUrl?: StringNullableFilter<"Store"> | string | null
    priceInr?: IntFilter<"Store"> | number
    shareMode?: EnumShareModeFilter<"Store"> | $Enums.ShareMode
    startTime?: StringNullableFilter<"Store"> | string | null
    endTime?: StringNullableFilter<"Store"> | string | null
    days?: StringNullableListFilter<"Store">
    sqft?: IntNullableFilter<"Store"> | number | null
    dayOrNight?: StringNullableFilter<"Store"> | string | null
    createdAt?: DateTimeFilter<"Store"> | Date | string
    updatedAt?: DateTimeFilter<"Store"> | Date | string
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
    images?: StoreImageListRelationFilter
    likes?: StoreLikeListRelationFilter
  }

  export type StoreOrderByWithRelationInput = {
    id?: SortOrder
    ownerId?: SortOrder
    title?: SortOrder
    desc?: SortOrder
    peopleDesc?: SortOrder
    storeSize?: SortOrder
    businessType?: SortOrder
    country?: SortOrder
    state?: SortOrder
    city?: SortOrder
    pin?: SortOrder
    fullAddress?: SortOrder
    latitude?: SortOrderInput | SortOrder
    longitude?: SortOrderInput | SortOrder
    bannerImageUrl?: SortOrderInput | SortOrder
    priceInr?: SortOrder
    shareMode?: SortOrder
    startTime?: SortOrderInput | SortOrder
    endTime?: SortOrderInput | SortOrder
    days?: SortOrder
    sqft?: SortOrderInput | SortOrder
    dayOrNight?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    owner?: UserOrderByWithRelationInput
    images?: StoreImageOrderByRelationAggregateInput
    likes?: StoreLikeOrderByRelationAggregateInput
  }

  export type StoreWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: StoreWhereInput | StoreWhereInput[]
    OR?: StoreWhereInput[]
    NOT?: StoreWhereInput | StoreWhereInput[]
    ownerId?: StringFilter<"Store"> | string
    title?: StringFilter<"Store"> | string
    desc?: StringFilter<"Store"> | string
    peopleDesc?: StringFilter<"Store"> | string
    storeSize?: StringFilter<"Store"> | string
    businessType?: StringFilter<"Store"> | string
    country?: StringFilter<"Store"> | string
    state?: StringFilter<"Store"> | string
    city?: StringFilter<"Store"> | string
    pin?: StringFilter<"Store"> | string
    fullAddress?: StringFilter<"Store"> | string
    latitude?: FloatNullableFilter<"Store"> | number | null
    longitude?: FloatNullableFilter<"Store"> | number | null
    bannerImageUrl?: StringNullableFilter<"Store"> | string | null
    priceInr?: IntFilter<"Store"> | number
    shareMode?: EnumShareModeFilter<"Store"> | $Enums.ShareMode
    startTime?: StringNullableFilter<"Store"> | string | null
    endTime?: StringNullableFilter<"Store"> | string | null
    days?: StringNullableListFilter<"Store">
    sqft?: IntNullableFilter<"Store"> | number | null
    dayOrNight?: StringNullableFilter<"Store"> | string | null
    createdAt?: DateTimeFilter<"Store"> | Date | string
    updatedAt?: DateTimeFilter<"Store"> | Date | string
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
    images?: StoreImageListRelationFilter
    likes?: StoreLikeListRelationFilter
  }, "id">

  export type StoreOrderByWithAggregationInput = {
    id?: SortOrder
    ownerId?: SortOrder
    title?: SortOrder
    desc?: SortOrder
    peopleDesc?: SortOrder
    storeSize?: SortOrder
    businessType?: SortOrder
    country?: SortOrder
    state?: SortOrder
    city?: SortOrder
    pin?: SortOrder
    fullAddress?: SortOrder
    latitude?: SortOrderInput | SortOrder
    longitude?: SortOrderInput | SortOrder
    bannerImageUrl?: SortOrderInput | SortOrder
    priceInr?: SortOrder
    shareMode?: SortOrder
    startTime?: SortOrderInput | SortOrder
    endTime?: SortOrderInput | SortOrder
    days?: SortOrder
    sqft?: SortOrderInput | SortOrder
    dayOrNight?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: StoreCountOrderByAggregateInput
    _avg?: StoreAvgOrderByAggregateInput
    _max?: StoreMaxOrderByAggregateInput
    _min?: StoreMinOrderByAggregateInput
    _sum?: StoreSumOrderByAggregateInput
  }

  export type StoreScalarWhereWithAggregatesInput = {
    AND?: StoreScalarWhereWithAggregatesInput | StoreScalarWhereWithAggregatesInput[]
    OR?: StoreScalarWhereWithAggregatesInput[]
    NOT?: StoreScalarWhereWithAggregatesInput | StoreScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Store"> | string
    ownerId?: StringWithAggregatesFilter<"Store"> | string
    title?: StringWithAggregatesFilter<"Store"> | string
    desc?: StringWithAggregatesFilter<"Store"> | string
    peopleDesc?: StringWithAggregatesFilter<"Store"> | string
    storeSize?: StringWithAggregatesFilter<"Store"> | string
    businessType?: StringWithAggregatesFilter<"Store"> | string
    country?: StringWithAggregatesFilter<"Store"> | string
    state?: StringWithAggregatesFilter<"Store"> | string
    city?: StringWithAggregatesFilter<"Store"> | string
    pin?: StringWithAggregatesFilter<"Store"> | string
    fullAddress?: StringWithAggregatesFilter<"Store"> | string
    latitude?: FloatNullableWithAggregatesFilter<"Store"> | number | null
    longitude?: FloatNullableWithAggregatesFilter<"Store"> | number | null
    bannerImageUrl?: StringNullableWithAggregatesFilter<"Store"> | string | null
    priceInr?: IntWithAggregatesFilter<"Store"> | number
    shareMode?: EnumShareModeWithAggregatesFilter<"Store"> | $Enums.ShareMode
    startTime?: StringNullableWithAggregatesFilter<"Store"> | string | null
    endTime?: StringNullableWithAggregatesFilter<"Store"> | string | null
    days?: StringNullableListFilter<"Store">
    sqft?: IntNullableWithAggregatesFilter<"Store"> | number | null
    dayOrNight?: StringNullableWithAggregatesFilter<"Store"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Store"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Store"> | Date | string
  }

  export type StoreImageWhereInput = {
    AND?: StoreImageWhereInput | StoreImageWhereInput[]
    OR?: StoreImageWhereInput[]
    NOT?: StoreImageWhereInput | StoreImageWhereInput[]
    id?: StringFilter<"StoreImage"> | string
    storeId?: StringFilter<"StoreImage"> | string
    url?: StringFilter<"StoreImage"> | string
    order?: IntFilter<"StoreImage"> | number
    createdAt?: DateTimeFilter<"StoreImage"> | Date | string
    store?: XOR<StoreScalarRelationFilter, StoreWhereInput>
  }

  export type StoreImageOrderByWithRelationInput = {
    id?: SortOrder
    storeId?: SortOrder
    url?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    store?: StoreOrderByWithRelationInput
  }

  export type StoreImageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: StoreImageWhereInput | StoreImageWhereInput[]
    OR?: StoreImageWhereInput[]
    NOT?: StoreImageWhereInput | StoreImageWhereInput[]
    storeId?: StringFilter<"StoreImage"> | string
    url?: StringFilter<"StoreImage"> | string
    order?: IntFilter<"StoreImage"> | number
    createdAt?: DateTimeFilter<"StoreImage"> | Date | string
    store?: XOR<StoreScalarRelationFilter, StoreWhereInput>
  }, "id">

  export type StoreImageOrderByWithAggregationInput = {
    id?: SortOrder
    storeId?: SortOrder
    url?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    _count?: StoreImageCountOrderByAggregateInput
    _avg?: StoreImageAvgOrderByAggregateInput
    _max?: StoreImageMaxOrderByAggregateInput
    _min?: StoreImageMinOrderByAggregateInput
    _sum?: StoreImageSumOrderByAggregateInput
  }

  export type StoreImageScalarWhereWithAggregatesInput = {
    AND?: StoreImageScalarWhereWithAggregatesInput | StoreImageScalarWhereWithAggregatesInput[]
    OR?: StoreImageScalarWhereWithAggregatesInput[]
    NOT?: StoreImageScalarWhereWithAggregatesInput | StoreImageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"StoreImage"> | string
    storeId?: StringWithAggregatesFilter<"StoreImage"> | string
    url?: StringWithAggregatesFilter<"StoreImage"> | string
    order?: IntWithAggregatesFilter<"StoreImage"> | number
    createdAt?: DateTimeWithAggregatesFilter<"StoreImage"> | Date | string
  }

  export type StoreLikeWhereInput = {
    AND?: StoreLikeWhereInput | StoreLikeWhereInput[]
    OR?: StoreLikeWhereInput[]
    NOT?: StoreLikeWhereInput | StoreLikeWhereInput[]
    id?: StringFilter<"StoreLike"> | string
    userId?: StringFilter<"StoreLike"> | string
    storeId?: StringFilter<"StoreLike"> | string
    createdAt?: DateTimeFilter<"StoreLike"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    store?: XOR<StoreScalarRelationFilter, StoreWhereInput>
  }

  export type StoreLikeOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    storeId?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    store?: StoreOrderByWithRelationInput
  }

  export type StoreLikeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_storeId?: StoreLikeUserIdStoreIdCompoundUniqueInput
    AND?: StoreLikeWhereInput | StoreLikeWhereInput[]
    OR?: StoreLikeWhereInput[]
    NOT?: StoreLikeWhereInput | StoreLikeWhereInput[]
    userId?: StringFilter<"StoreLike"> | string
    storeId?: StringFilter<"StoreLike"> | string
    createdAt?: DateTimeFilter<"StoreLike"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    store?: XOR<StoreScalarRelationFilter, StoreWhereInput>
  }, "id" | "userId_storeId">

  export type StoreLikeOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    storeId?: SortOrder
    createdAt?: SortOrder
    _count?: StoreLikeCountOrderByAggregateInput
    _max?: StoreLikeMaxOrderByAggregateInput
    _min?: StoreLikeMinOrderByAggregateInput
  }

  export type StoreLikeScalarWhereWithAggregatesInput = {
    AND?: StoreLikeScalarWhereWithAggregatesInput | StoreLikeScalarWhereWithAggregatesInput[]
    OR?: StoreLikeScalarWhereWithAggregatesInput[]
    NOT?: StoreLikeScalarWhereWithAggregatesInput | StoreLikeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"StoreLike"> | string
    userId?: StringWithAggregatesFilter<"StoreLike"> | string
    storeId?: StringWithAggregatesFilter<"StoreLike"> | string
    createdAt?: DateTimeWithAggregatesFilter<"StoreLike"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    name?: string | null
    email?: string | null
    image?: string | null
    phone?: string | null
    phoneVerified?: boolean
    createdAt?: Date | string
    stores?: StoreCreateNestedManyWithoutOwnerInput
    likedStores?: StoreLikeCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name?: string | null
    email?: string | null
    image?: string | null
    phone?: string | null
    phoneVerified?: boolean
    createdAt?: Date | string
    stores?: StoreUncheckedCreateNestedManyWithoutOwnerInput
    likedStores?: StoreLikeUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    phoneVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    stores?: StoreUpdateManyWithoutOwnerNestedInput
    likedStores?: StoreLikeUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    phoneVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    stores?: StoreUncheckedUpdateManyWithoutOwnerNestedInput
    likedStores?: StoreLikeUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name?: string | null
    email?: string | null
    image?: string | null
    phone?: string | null
    phoneVerified?: boolean
    createdAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    phoneVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    phoneVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StoreCreateInput = {
    id?: string
    title: string
    desc: string
    peopleDesc: string
    storeSize: string
    businessType: string
    country: string
    state: string
    city: string
    pin: string
    fullAddress: string
    latitude?: number | null
    longitude?: number | null
    bannerImageUrl?: string | null
    priceInr: number
    shareMode: $Enums.ShareMode
    startTime?: string | null
    endTime?: string | null
    days?: StoreCreatedaysInput | string[]
    sqft?: number | null
    dayOrNight?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    owner: UserCreateNestedOneWithoutStoresInput
    images?: StoreImageCreateNestedManyWithoutStoreInput
    likes?: StoreLikeCreateNestedManyWithoutStoreInput
  }

  export type StoreUncheckedCreateInput = {
    id?: string
    ownerId: string
    title: string
    desc: string
    peopleDesc: string
    storeSize: string
    businessType: string
    country: string
    state: string
    city: string
    pin: string
    fullAddress: string
    latitude?: number | null
    longitude?: number | null
    bannerImageUrl?: string | null
    priceInr: number
    shareMode: $Enums.ShareMode
    startTime?: string | null
    endTime?: string | null
    days?: StoreCreatedaysInput | string[]
    sqft?: number | null
    dayOrNight?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: StoreImageUncheckedCreateNestedManyWithoutStoreInput
    likes?: StoreLikeUncheckedCreateNestedManyWithoutStoreInput
  }

  export type StoreUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    desc?: StringFieldUpdateOperationsInput | string
    peopleDesc?: StringFieldUpdateOperationsInput | string
    storeSize?: StringFieldUpdateOperationsInput | string
    businessType?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    pin?: StringFieldUpdateOperationsInput | string
    fullAddress?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    bannerImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    priceInr?: IntFieldUpdateOperationsInput | number
    shareMode?: EnumShareModeFieldUpdateOperationsInput | $Enums.ShareMode
    startTime?: NullableStringFieldUpdateOperationsInput | string | null
    endTime?: NullableStringFieldUpdateOperationsInput | string | null
    days?: StoreUpdatedaysInput | string[]
    sqft?: NullableIntFieldUpdateOperationsInput | number | null
    dayOrNight?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutStoresNestedInput
    images?: StoreImageUpdateManyWithoutStoreNestedInput
    likes?: StoreLikeUpdateManyWithoutStoreNestedInput
  }

  export type StoreUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    desc?: StringFieldUpdateOperationsInput | string
    peopleDesc?: StringFieldUpdateOperationsInput | string
    storeSize?: StringFieldUpdateOperationsInput | string
    businessType?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    pin?: StringFieldUpdateOperationsInput | string
    fullAddress?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    bannerImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    priceInr?: IntFieldUpdateOperationsInput | number
    shareMode?: EnumShareModeFieldUpdateOperationsInput | $Enums.ShareMode
    startTime?: NullableStringFieldUpdateOperationsInput | string | null
    endTime?: NullableStringFieldUpdateOperationsInput | string | null
    days?: StoreUpdatedaysInput | string[]
    sqft?: NullableIntFieldUpdateOperationsInput | number | null
    dayOrNight?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: StoreImageUncheckedUpdateManyWithoutStoreNestedInput
    likes?: StoreLikeUncheckedUpdateManyWithoutStoreNestedInput
  }

  export type StoreCreateManyInput = {
    id?: string
    ownerId: string
    title: string
    desc: string
    peopleDesc: string
    storeSize: string
    businessType: string
    country: string
    state: string
    city: string
    pin: string
    fullAddress: string
    latitude?: number | null
    longitude?: number | null
    bannerImageUrl?: string | null
    priceInr: number
    shareMode: $Enums.ShareMode
    startTime?: string | null
    endTime?: string | null
    days?: StoreCreatedaysInput | string[]
    sqft?: number | null
    dayOrNight?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StoreUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    desc?: StringFieldUpdateOperationsInput | string
    peopleDesc?: StringFieldUpdateOperationsInput | string
    storeSize?: StringFieldUpdateOperationsInput | string
    businessType?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    pin?: StringFieldUpdateOperationsInput | string
    fullAddress?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    bannerImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    priceInr?: IntFieldUpdateOperationsInput | number
    shareMode?: EnumShareModeFieldUpdateOperationsInput | $Enums.ShareMode
    startTime?: NullableStringFieldUpdateOperationsInput | string | null
    endTime?: NullableStringFieldUpdateOperationsInput | string | null
    days?: StoreUpdatedaysInput | string[]
    sqft?: NullableIntFieldUpdateOperationsInput | number | null
    dayOrNight?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StoreUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    desc?: StringFieldUpdateOperationsInput | string
    peopleDesc?: StringFieldUpdateOperationsInput | string
    storeSize?: StringFieldUpdateOperationsInput | string
    businessType?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    pin?: StringFieldUpdateOperationsInput | string
    fullAddress?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    bannerImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    priceInr?: IntFieldUpdateOperationsInput | number
    shareMode?: EnumShareModeFieldUpdateOperationsInput | $Enums.ShareMode
    startTime?: NullableStringFieldUpdateOperationsInput | string | null
    endTime?: NullableStringFieldUpdateOperationsInput | string | null
    days?: StoreUpdatedaysInput | string[]
    sqft?: NullableIntFieldUpdateOperationsInput | number | null
    dayOrNight?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StoreImageCreateInput = {
    id?: string
    url: string
    order?: number
    createdAt?: Date | string
    store: StoreCreateNestedOneWithoutImagesInput
  }

  export type StoreImageUncheckedCreateInput = {
    id?: string
    storeId: string
    url: string
    order?: number
    createdAt?: Date | string
  }

  export type StoreImageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    store?: StoreUpdateOneRequiredWithoutImagesNestedInput
  }

  export type StoreImageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    storeId?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StoreImageCreateManyInput = {
    id?: string
    storeId: string
    url: string
    order?: number
    createdAt?: Date | string
  }

  export type StoreImageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StoreImageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    storeId?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StoreLikeCreateInput = {
    id?: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutLikedStoresInput
    store: StoreCreateNestedOneWithoutLikesInput
  }

  export type StoreLikeUncheckedCreateInput = {
    id?: string
    userId: string
    storeId: string
    createdAt?: Date | string
  }

  export type StoreLikeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutLikedStoresNestedInput
    store?: StoreUpdateOneRequiredWithoutLikesNestedInput
  }

  export type StoreLikeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    storeId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StoreLikeCreateManyInput = {
    id?: string
    userId: string
    storeId: string
    createdAt?: Date | string
  }

  export type StoreLikeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StoreLikeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    storeId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type StoreListRelationFilter = {
    every?: StoreWhereInput
    some?: StoreWhereInput
    none?: StoreWhereInput
  }

  export type StoreLikeListRelationFilter = {
    every?: StoreLikeWhereInput
    some?: StoreLikeWhereInput
    none?: StoreLikeWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type StoreOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StoreLikeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    image?: SortOrder
    phone?: SortOrder
    phoneVerified?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    image?: SortOrder
    phone?: SortOrder
    phoneVerified?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    image?: SortOrder
    phone?: SortOrder
    phoneVerified?: SortOrder
    createdAt?: SortOrder
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type EnumShareModeFilter<$PrismaModel = never> = {
    equals?: $Enums.ShareMode | EnumShareModeFieldRefInput<$PrismaModel>
    in?: $Enums.ShareMode[] | ListEnumShareModeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ShareMode[] | ListEnumShareModeFieldRefInput<$PrismaModel>
    not?: NestedEnumShareModeFilter<$PrismaModel> | $Enums.ShareMode
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
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

  export type StoreImageListRelationFilter = {
    every?: StoreImageWhereInput
    some?: StoreImageWhereInput
    none?: StoreImageWhereInput
  }

  export type StoreImageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StoreCountOrderByAggregateInput = {
    id?: SortOrder
    ownerId?: SortOrder
    title?: SortOrder
    desc?: SortOrder
    peopleDesc?: SortOrder
    storeSize?: SortOrder
    businessType?: SortOrder
    country?: SortOrder
    state?: SortOrder
    city?: SortOrder
    pin?: SortOrder
    fullAddress?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    bannerImageUrl?: SortOrder
    priceInr?: SortOrder
    shareMode?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    days?: SortOrder
    sqft?: SortOrder
    dayOrNight?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StoreAvgOrderByAggregateInput = {
    latitude?: SortOrder
    longitude?: SortOrder
    priceInr?: SortOrder
    sqft?: SortOrder
  }

  export type StoreMaxOrderByAggregateInput = {
    id?: SortOrder
    ownerId?: SortOrder
    title?: SortOrder
    desc?: SortOrder
    peopleDesc?: SortOrder
    storeSize?: SortOrder
    businessType?: SortOrder
    country?: SortOrder
    state?: SortOrder
    city?: SortOrder
    pin?: SortOrder
    fullAddress?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    bannerImageUrl?: SortOrder
    priceInr?: SortOrder
    shareMode?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    sqft?: SortOrder
    dayOrNight?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StoreMinOrderByAggregateInput = {
    id?: SortOrder
    ownerId?: SortOrder
    title?: SortOrder
    desc?: SortOrder
    peopleDesc?: SortOrder
    storeSize?: SortOrder
    businessType?: SortOrder
    country?: SortOrder
    state?: SortOrder
    city?: SortOrder
    pin?: SortOrder
    fullAddress?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    bannerImageUrl?: SortOrder
    priceInr?: SortOrder
    shareMode?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    sqft?: SortOrder
    dayOrNight?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StoreSumOrderByAggregateInput = {
    latitude?: SortOrder
    longitude?: SortOrder
    priceInr?: SortOrder
    sqft?: SortOrder
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

  export type EnumShareModeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ShareMode | EnumShareModeFieldRefInput<$PrismaModel>
    in?: $Enums.ShareMode[] | ListEnumShareModeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ShareMode[] | ListEnumShareModeFieldRefInput<$PrismaModel>
    not?: NestedEnumShareModeWithAggregatesFilter<$PrismaModel> | $Enums.ShareMode
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumShareModeFilter<$PrismaModel>
    _max?: NestedEnumShareModeFilter<$PrismaModel>
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

  export type StoreScalarRelationFilter = {
    is?: StoreWhereInput
    isNot?: StoreWhereInput
  }

  export type StoreImageCountOrderByAggregateInput = {
    id?: SortOrder
    storeId?: SortOrder
    url?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
  }

  export type StoreImageAvgOrderByAggregateInput = {
    order?: SortOrder
  }

  export type StoreImageMaxOrderByAggregateInput = {
    id?: SortOrder
    storeId?: SortOrder
    url?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
  }

  export type StoreImageMinOrderByAggregateInput = {
    id?: SortOrder
    storeId?: SortOrder
    url?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
  }

  export type StoreImageSumOrderByAggregateInput = {
    order?: SortOrder
  }

  export type StoreLikeUserIdStoreIdCompoundUniqueInput = {
    userId: string
    storeId: string
  }

  export type StoreLikeCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    storeId?: SortOrder
    createdAt?: SortOrder
  }

  export type StoreLikeMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    storeId?: SortOrder
    createdAt?: SortOrder
  }

  export type StoreLikeMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    storeId?: SortOrder
    createdAt?: SortOrder
  }

  export type StoreCreateNestedManyWithoutOwnerInput = {
    create?: XOR<StoreCreateWithoutOwnerInput, StoreUncheckedCreateWithoutOwnerInput> | StoreCreateWithoutOwnerInput[] | StoreUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: StoreCreateOrConnectWithoutOwnerInput | StoreCreateOrConnectWithoutOwnerInput[]
    createMany?: StoreCreateManyOwnerInputEnvelope
    connect?: StoreWhereUniqueInput | StoreWhereUniqueInput[]
  }

  export type StoreLikeCreateNestedManyWithoutUserInput = {
    create?: XOR<StoreLikeCreateWithoutUserInput, StoreLikeUncheckedCreateWithoutUserInput> | StoreLikeCreateWithoutUserInput[] | StoreLikeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: StoreLikeCreateOrConnectWithoutUserInput | StoreLikeCreateOrConnectWithoutUserInput[]
    createMany?: StoreLikeCreateManyUserInputEnvelope
    connect?: StoreLikeWhereUniqueInput | StoreLikeWhereUniqueInput[]
  }

  export type StoreUncheckedCreateNestedManyWithoutOwnerInput = {
    create?: XOR<StoreCreateWithoutOwnerInput, StoreUncheckedCreateWithoutOwnerInput> | StoreCreateWithoutOwnerInput[] | StoreUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: StoreCreateOrConnectWithoutOwnerInput | StoreCreateOrConnectWithoutOwnerInput[]
    createMany?: StoreCreateManyOwnerInputEnvelope
    connect?: StoreWhereUniqueInput | StoreWhereUniqueInput[]
  }

  export type StoreLikeUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<StoreLikeCreateWithoutUserInput, StoreLikeUncheckedCreateWithoutUserInput> | StoreLikeCreateWithoutUserInput[] | StoreLikeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: StoreLikeCreateOrConnectWithoutUserInput | StoreLikeCreateOrConnectWithoutUserInput[]
    createMany?: StoreLikeCreateManyUserInputEnvelope
    connect?: StoreLikeWhereUniqueInput | StoreLikeWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type StoreUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<StoreCreateWithoutOwnerInput, StoreUncheckedCreateWithoutOwnerInput> | StoreCreateWithoutOwnerInput[] | StoreUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: StoreCreateOrConnectWithoutOwnerInput | StoreCreateOrConnectWithoutOwnerInput[]
    upsert?: StoreUpsertWithWhereUniqueWithoutOwnerInput | StoreUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: StoreCreateManyOwnerInputEnvelope
    set?: StoreWhereUniqueInput | StoreWhereUniqueInput[]
    disconnect?: StoreWhereUniqueInput | StoreWhereUniqueInput[]
    delete?: StoreWhereUniqueInput | StoreWhereUniqueInput[]
    connect?: StoreWhereUniqueInput | StoreWhereUniqueInput[]
    update?: StoreUpdateWithWhereUniqueWithoutOwnerInput | StoreUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: StoreUpdateManyWithWhereWithoutOwnerInput | StoreUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: StoreScalarWhereInput | StoreScalarWhereInput[]
  }

  export type StoreLikeUpdateManyWithoutUserNestedInput = {
    create?: XOR<StoreLikeCreateWithoutUserInput, StoreLikeUncheckedCreateWithoutUserInput> | StoreLikeCreateWithoutUserInput[] | StoreLikeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: StoreLikeCreateOrConnectWithoutUserInput | StoreLikeCreateOrConnectWithoutUserInput[]
    upsert?: StoreLikeUpsertWithWhereUniqueWithoutUserInput | StoreLikeUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: StoreLikeCreateManyUserInputEnvelope
    set?: StoreLikeWhereUniqueInput | StoreLikeWhereUniqueInput[]
    disconnect?: StoreLikeWhereUniqueInput | StoreLikeWhereUniqueInput[]
    delete?: StoreLikeWhereUniqueInput | StoreLikeWhereUniqueInput[]
    connect?: StoreLikeWhereUniqueInput | StoreLikeWhereUniqueInput[]
    update?: StoreLikeUpdateWithWhereUniqueWithoutUserInput | StoreLikeUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: StoreLikeUpdateManyWithWhereWithoutUserInput | StoreLikeUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: StoreLikeScalarWhereInput | StoreLikeScalarWhereInput[]
  }

  export type StoreUncheckedUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<StoreCreateWithoutOwnerInput, StoreUncheckedCreateWithoutOwnerInput> | StoreCreateWithoutOwnerInput[] | StoreUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: StoreCreateOrConnectWithoutOwnerInput | StoreCreateOrConnectWithoutOwnerInput[]
    upsert?: StoreUpsertWithWhereUniqueWithoutOwnerInput | StoreUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: StoreCreateManyOwnerInputEnvelope
    set?: StoreWhereUniqueInput | StoreWhereUniqueInput[]
    disconnect?: StoreWhereUniqueInput | StoreWhereUniqueInput[]
    delete?: StoreWhereUniqueInput | StoreWhereUniqueInput[]
    connect?: StoreWhereUniqueInput | StoreWhereUniqueInput[]
    update?: StoreUpdateWithWhereUniqueWithoutOwnerInput | StoreUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: StoreUpdateManyWithWhereWithoutOwnerInput | StoreUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: StoreScalarWhereInput | StoreScalarWhereInput[]
  }

  export type StoreLikeUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<StoreLikeCreateWithoutUserInput, StoreLikeUncheckedCreateWithoutUserInput> | StoreLikeCreateWithoutUserInput[] | StoreLikeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: StoreLikeCreateOrConnectWithoutUserInput | StoreLikeCreateOrConnectWithoutUserInput[]
    upsert?: StoreLikeUpsertWithWhereUniqueWithoutUserInput | StoreLikeUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: StoreLikeCreateManyUserInputEnvelope
    set?: StoreLikeWhereUniqueInput | StoreLikeWhereUniqueInput[]
    disconnect?: StoreLikeWhereUniqueInput | StoreLikeWhereUniqueInput[]
    delete?: StoreLikeWhereUniqueInput | StoreLikeWhereUniqueInput[]
    connect?: StoreLikeWhereUniqueInput | StoreLikeWhereUniqueInput[]
    update?: StoreLikeUpdateWithWhereUniqueWithoutUserInput | StoreLikeUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: StoreLikeUpdateManyWithWhereWithoutUserInput | StoreLikeUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: StoreLikeScalarWhereInput | StoreLikeScalarWhereInput[]
  }

  export type StoreCreatedaysInput = {
    set: string[]
  }

  export type UserCreateNestedOneWithoutStoresInput = {
    create?: XOR<UserCreateWithoutStoresInput, UserUncheckedCreateWithoutStoresInput>
    connectOrCreate?: UserCreateOrConnectWithoutStoresInput
    connect?: UserWhereUniqueInput
  }

  export type StoreImageCreateNestedManyWithoutStoreInput = {
    create?: XOR<StoreImageCreateWithoutStoreInput, StoreImageUncheckedCreateWithoutStoreInput> | StoreImageCreateWithoutStoreInput[] | StoreImageUncheckedCreateWithoutStoreInput[]
    connectOrCreate?: StoreImageCreateOrConnectWithoutStoreInput | StoreImageCreateOrConnectWithoutStoreInput[]
    createMany?: StoreImageCreateManyStoreInputEnvelope
    connect?: StoreImageWhereUniqueInput | StoreImageWhereUniqueInput[]
  }

  export type StoreLikeCreateNestedManyWithoutStoreInput = {
    create?: XOR<StoreLikeCreateWithoutStoreInput, StoreLikeUncheckedCreateWithoutStoreInput> | StoreLikeCreateWithoutStoreInput[] | StoreLikeUncheckedCreateWithoutStoreInput[]
    connectOrCreate?: StoreLikeCreateOrConnectWithoutStoreInput | StoreLikeCreateOrConnectWithoutStoreInput[]
    createMany?: StoreLikeCreateManyStoreInputEnvelope
    connect?: StoreLikeWhereUniqueInput | StoreLikeWhereUniqueInput[]
  }

  export type StoreImageUncheckedCreateNestedManyWithoutStoreInput = {
    create?: XOR<StoreImageCreateWithoutStoreInput, StoreImageUncheckedCreateWithoutStoreInput> | StoreImageCreateWithoutStoreInput[] | StoreImageUncheckedCreateWithoutStoreInput[]
    connectOrCreate?: StoreImageCreateOrConnectWithoutStoreInput | StoreImageCreateOrConnectWithoutStoreInput[]
    createMany?: StoreImageCreateManyStoreInputEnvelope
    connect?: StoreImageWhereUniqueInput | StoreImageWhereUniqueInput[]
  }

  export type StoreLikeUncheckedCreateNestedManyWithoutStoreInput = {
    create?: XOR<StoreLikeCreateWithoutStoreInput, StoreLikeUncheckedCreateWithoutStoreInput> | StoreLikeCreateWithoutStoreInput[] | StoreLikeUncheckedCreateWithoutStoreInput[]
    connectOrCreate?: StoreLikeCreateOrConnectWithoutStoreInput | StoreLikeCreateOrConnectWithoutStoreInput[]
    createMany?: StoreLikeCreateManyStoreInputEnvelope
    connect?: StoreLikeWhereUniqueInput | StoreLikeWhereUniqueInput[]
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumShareModeFieldUpdateOperationsInput = {
    set?: $Enums.ShareMode
  }

  export type StoreUpdatedaysInput = {
    set?: string[]
    push?: string | string[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutStoresNestedInput = {
    create?: XOR<UserCreateWithoutStoresInput, UserUncheckedCreateWithoutStoresInput>
    connectOrCreate?: UserCreateOrConnectWithoutStoresInput
    upsert?: UserUpsertWithoutStoresInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutStoresInput, UserUpdateWithoutStoresInput>, UserUncheckedUpdateWithoutStoresInput>
  }

  export type StoreImageUpdateManyWithoutStoreNestedInput = {
    create?: XOR<StoreImageCreateWithoutStoreInput, StoreImageUncheckedCreateWithoutStoreInput> | StoreImageCreateWithoutStoreInput[] | StoreImageUncheckedCreateWithoutStoreInput[]
    connectOrCreate?: StoreImageCreateOrConnectWithoutStoreInput | StoreImageCreateOrConnectWithoutStoreInput[]
    upsert?: StoreImageUpsertWithWhereUniqueWithoutStoreInput | StoreImageUpsertWithWhereUniqueWithoutStoreInput[]
    createMany?: StoreImageCreateManyStoreInputEnvelope
    set?: StoreImageWhereUniqueInput | StoreImageWhereUniqueInput[]
    disconnect?: StoreImageWhereUniqueInput | StoreImageWhereUniqueInput[]
    delete?: StoreImageWhereUniqueInput | StoreImageWhereUniqueInput[]
    connect?: StoreImageWhereUniqueInput | StoreImageWhereUniqueInput[]
    update?: StoreImageUpdateWithWhereUniqueWithoutStoreInput | StoreImageUpdateWithWhereUniqueWithoutStoreInput[]
    updateMany?: StoreImageUpdateManyWithWhereWithoutStoreInput | StoreImageUpdateManyWithWhereWithoutStoreInput[]
    deleteMany?: StoreImageScalarWhereInput | StoreImageScalarWhereInput[]
  }

  export type StoreLikeUpdateManyWithoutStoreNestedInput = {
    create?: XOR<StoreLikeCreateWithoutStoreInput, StoreLikeUncheckedCreateWithoutStoreInput> | StoreLikeCreateWithoutStoreInput[] | StoreLikeUncheckedCreateWithoutStoreInput[]
    connectOrCreate?: StoreLikeCreateOrConnectWithoutStoreInput | StoreLikeCreateOrConnectWithoutStoreInput[]
    upsert?: StoreLikeUpsertWithWhereUniqueWithoutStoreInput | StoreLikeUpsertWithWhereUniqueWithoutStoreInput[]
    createMany?: StoreLikeCreateManyStoreInputEnvelope
    set?: StoreLikeWhereUniqueInput | StoreLikeWhereUniqueInput[]
    disconnect?: StoreLikeWhereUniqueInput | StoreLikeWhereUniqueInput[]
    delete?: StoreLikeWhereUniqueInput | StoreLikeWhereUniqueInput[]
    connect?: StoreLikeWhereUniqueInput | StoreLikeWhereUniqueInput[]
    update?: StoreLikeUpdateWithWhereUniqueWithoutStoreInput | StoreLikeUpdateWithWhereUniqueWithoutStoreInput[]
    updateMany?: StoreLikeUpdateManyWithWhereWithoutStoreInput | StoreLikeUpdateManyWithWhereWithoutStoreInput[]
    deleteMany?: StoreLikeScalarWhereInput | StoreLikeScalarWhereInput[]
  }

  export type StoreImageUncheckedUpdateManyWithoutStoreNestedInput = {
    create?: XOR<StoreImageCreateWithoutStoreInput, StoreImageUncheckedCreateWithoutStoreInput> | StoreImageCreateWithoutStoreInput[] | StoreImageUncheckedCreateWithoutStoreInput[]
    connectOrCreate?: StoreImageCreateOrConnectWithoutStoreInput | StoreImageCreateOrConnectWithoutStoreInput[]
    upsert?: StoreImageUpsertWithWhereUniqueWithoutStoreInput | StoreImageUpsertWithWhereUniqueWithoutStoreInput[]
    createMany?: StoreImageCreateManyStoreInputEnvelope
    set?: StoreImageWhereUniqueInput | StoreImageWhereUniqueInput[]
    disconnect?: StoreImageWhereUniqueInput | StoreImageWhereUniqueInput[]
    delete?: StoreImageWhereUniqueInput | StoreImageWhereUniqueInput[]
    connect?: StoreImageWhereUniqueInput | StoreImageWhereUniqueInput[]
    update?: StoreImageUpdateWithWhereUniqueWithoutStoreInput | StoreImageUpdateWithWhereUniqueWithoutStoreInput[]
    updateMany?: StoreImageUpdateManyWithWhereWithoutStoreInput | StoreImageUpdateManyWithWhereWithoutStoreInput[]
    deleteMany?: StoreImageScalarWhereInput | StoreImageScalarWhereInput[]
  }

  export type StoreLikeUncheckedUpdateManyWithoutStoreNestedInput = {
    create?: XOR<StoreLikeCreateWithoutStoreInput, StoreLikeUncheckedCreateWithoutStoreInput> | StoreLikeCreateWithoutStoreInput[] | StoreLikeUncheckedCreateWithoutStoreInput[]
    connectOrCreate?: StoreLikeCreateOrConnectWithoutStoreInput | StoreLikeCreateOrConnectWithoutStoreInput[]
    upsert?: StoreLikeUpsertWithWhereUniqueWithoutStoreInput | StoreLikeUpsertWithWhereUniqueWithoutStoreInput[]
    createMany?: StoreLikeCreateManyStoreInputEnvelope
    set?: StoreLikeWhereUniqueInput | StoreLikeWhereUniqueInput[]
    disconnect?: StoreLikeWhereUniqueInput | StoreLikeWhereUniqueInput[]
    delete?: StoreLikeWhereUniqueInput | StoreLikeWhereUniqueInput[]
    connect?: StoreLikeWhereUniqueInput | StoreLikeWhereUniqueInput[]
    update?: StoreLikeUpdateWithWhereUniqueWithoutStoreInput | StoreLikeUpdateWithWhereUniqueWithoutStoreInput[]
    updateMany?: StoreLikeUpdateManyWithWhereWithoutStoreInput | StoreLikeUpdateManyWithWhereWithoutStoreInput[]
    deleteMany?: StoreLikeScalarWhereInput | StoreLikeScalarWhereInput[]
  }

  export type StoreCreateNestedOneWithoutImagesInput = {
    create?: XOR<StoreCreateWithoutImagesInput, StoreUncheckedCreateWithoutImagesInput>
    connectOrCreate?: StoreCreateOrConnectWithoutImagesInput
    connect?: StoreWhereUniqueInput
  }

  export type StoreUpdateOneRequiredWithoutImagesNestedInput = {
    create?: XOR<StoreCreateWithoutImagesInput, StoreUncheckedCreateWithoutImagesInput>
    connectOrCreate?: StoreCreateOrConnectWithoutImagesInput
    upsert?: StoreUpsertWithoutImagesInput
    connect?: StoreWhereUniqueInput
    update?: XOR<XOR<StoreUpdateToOneWithWhereWithoutImagesInput, StoreUpdateWithoutImagesInput>, StoreUncheckedUpdateWithoutImagesInput>
  }

  export type UserCreateNestedOneWithoutLikedStoresInput = {
    create?: XOR<UserCreateWithoutLikedStoresInput, UserUncheckedCreateWithoutLikedStoresInput>
    connectOrCreate?: UserCreateOrConnectWithoutLikedStoresInput
    connect?: UserWhereUniqueInput
  }

  export type StoreCreateNestedOneWithoutLikesInput = {
    create?: XOR<StoreCreateWithoutLikesInput, StoreUncheckedCreateWithoutLikesInput>
    connectOrCreate?: StoreCreateOrConnectWithoutLikesInput
    connect?: StoreWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutLikedStoresNestedInput = {
    create?: XOR<UserCreateWithoutLikedStoresInput, UserUncheckedCreateWithoutLikedStoresInput>
    connectOrCreate?: UserCreateOrConnectWithoutLikedStoresInput
    upsert?: UserUpsertWithoutLikedStoresInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutLikedStoresInput, UserUpdateWithoutLikedStoresInput>, UserUncheckedUpdateWithoutLikedStoresInput>
  }

  export type StoreUpdateOneRequiredWithoutLikesNestedInput = {
    create?: XOR<StoreCreateWithoutLikesInput, StoreUncheckedCreateWithoutLikesInput>
    connectOrCreate?: StoreCreateOrConnectWithoutLikesInput
    upsert?: StoreUpsertWithoutLikesInput
    connect?: StoreWhereUniqueInput
    update?: XOR<XOR<StoreUpdateToOneWithWhereWithoutLikesInput, StoreUpdateWithoutLikesInput>, StoreUncheckedUpdateWithoutLikesInput>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type NestedEnumShareModeFilter<$PrismaModel = never> = {
    equals?: $Enums.ShareMode | EnumShareModeFieldRefInput<$PrismaModel>
    in?: $Enums.ShareMode[] | ListEnumShareModeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ShareMode[] | ListEnumShareModeFieldRefInput<$PrismaModel>
    not?: NestedEnumShareModeFilter<$PrismaModel> | $Enums.ShareMode
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

  export type NestedEnumShareModeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ShareMode | EnumShareModeFieldRefInput<$PrismaModel>
    in?: $Enums.ShareMode[] | ListEnumShareModeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ShareMode[] | ListEnumShareModeFieldRefInput<$PrismaModel>
    not?: NestedEnumShareModeWithAggregatesFilter<$PrismaModel> | $Enums.ShareMode
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumShareModeFilter<$PrismaModel>
    _max?: NestedEnumShareModeFilter<$PrismaModel>
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

  export type StoreCreateWithoutOwnerInput = {
    id?: string
    title: string
    desc: string
    peopleDesc: string
    storeSize: string
    businessType: string
    country: string
    state: string
    city: string
    pin: string
    fullAddress: string
    latitude?: number | null
    longitude?: number | null
    bannerImageUrl?: string | null
    priceInr: number
    shareMode: $Enums.ShareMode
    startTime?: string | null
    endTime?: string | null
    days?: StoreCreatedaysInput | string[]
    sqft?: number | null
    dayOrNight?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: StoreImageCreateNestedManyWithoutStoreInput
    likes?: StoreLikeCreateNestedManyWithoutStoreInput
  }

  export type StoreUncheckedCreateWithoutOwnerInput = {
    id?: string
    title: string
    desc: string
    peopleDesc: string
    storeSize: string
    businessType: string
    country: string
    state: string
    city: string
    pin: string
    fullAddress: string
    latitude?: number | null
    longitude?: number | null
    bannerImageUrl?: string | null
    priceInr: number
    shareMode: $Enums.ShareMode
    startTime?: string | null
    endTime?: string | null
    days?: StoreCreatedaysInput | string[]
    sqft?: number | null
    dayOrNight?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: StoreImageUncheckedCreateNestedManyWithoutStoreInput
    likes?: StoreLikeUncheckedCreateNestedManyWithoutStoreInput
  }

  export type StoreCreateOrConnectWithoutOwnerInput = {
    where: StoreWhereUniqueInput
    create: XOR<StoreCreateWithoutOwnerInput, StoreUncheckedCreateWithoutOwnerInput>
  }

  export type StoreCreateManyOwnerInputEnvelope = {
    data: StoreCreateManyOwnerInput | StoreCreateManyOwnerInput[]
    skipDuplicates?: boolean
  }

  export type StoreLikeCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    store: StoreCreateNestedOneWithoutLikesInput
  }

  export type StoreLikeUncheckedCreateWithoutUserInput = {
    id?: string
    storeId: string
    createdAt?: Date | string
  }

  export type StoreLikeCreateOrConnectWithoutUserInput = {
    where: StoreLikeWhereUniqueInput
    create: XOR<StoreLikeCreateWithoutUserInput, StoreLikeUncheckedCreateWithoutUserInput>
  }

  export type StoreLikeCreateManyUserInputEnvelope = {
    data: StoreLikeCreateManyUserInput | StoreLikeCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type StoreUpsertWithWhereUniqueWithoutOwnerInput = {
    where: StoreWhereUniqueInput
    update: XOR<StoreUpdateWithoutOwnerInput, StoreUncheckedUpdateWithoutOwnerInput>
    create: XOR<StoreCreateWithoutOwnerInput, StoreUncheckedCreateWithoutOwnerInput>
  }

  export type StoreUpdateWithWhereUniqueWithoutOwnerInput = {
    where: StoreWhereUniqueInput
    data: XOR<StoreUpdateWithoutOwnerInput, StoreUncheckedUpdateWithoutOwnerInput>
  }

  export type StoreUpdateManyWithWhereWithoutOwnerInput = {
    where: StoreScalarWhereInput
    data: XOR<StoreUpdateManyMutationInput, StoreUncheckedUpdateManyWithoutOwnerInput>
  }

  export type StoreScalarWhereInput = {
    AND?: StoreScalarWhereInput | StoreScalarWhereInput[]
    OR?: StoreScalarWhereInput[]
    NOT?: StoreScalarWhereInput | StoreScalarWhereInput[]
    id?: StringFilter<"Store"> | string
    ownerId?: StringFilter<"Store"> | string
    title?: StringFilter<"Store"> | string
    desc?: StringFilter<"Store"> | string
    peopleDesc?: StringFilter<"Store"> | string
    storeSize?: StringFilter<"Store"> | string
    businessType?: StringFilter<"Store"> | string
    country?: StringFilter<"Store"> | string
    state?: StringFilter<"Store"> | string
    city?: StringFilter<"Store"> | string
    pin?: StringFilter<"Store"> | string
    fullAddress?: StringFilter<"Store"> | string
    latitude?: FloatNullableFilter<"Store"> | number | null
    longitude?: FloatNullableFilter<"Store"> | number | null
    bannerImageUrl?: StringNullableFilter<"Store"> | string | null
    priceInr?: IntFilter<"Store"> | number
    shareMode?: EnumShareModeFilter<"Store"> | $Enums.ShareMode
    startTime?: StringNullableFilter<"Store"> | string | null
    endTime?: StringNullableFilter<"Store"> | string | null
    days?: StringNullableListFilter<"Store">
    sqft?: IntNullableFilter<"Store"> | number | null
    dayOrNight?: StringNullableFilter<"Store"> | string | null
    createdAt?: DateTimeFilter<"Store"> | Date | string
    updatedAt?: DateTimeFilter<"Store"> | Date | string
  }

  export type StoreLikeUpsertWithWhereUniqueWithoutUserInput = {
    where: StoreLikeWhereUniqueInput
    update: XOR<StoreLikeUpdateWithoutUserInput, StoreLikeUncheckedUpdateWithoutUserInput>
    create: XOR<StoreLikeCreateWithoutUserInput, StoreLikeUncheckedCreateWithoutUserInput>
  }

  export type StoreLikeUpdateWithWhereUniqueWithoutUserInput = {
    where: StoreLikeWhereUniqueInput
    data: XOR<StoreLikeUpdateWithoutUserInput, StoreLikeUncheckedUpdateWithoutUserInput>
  }

  export type StoreLikeUpdateManyWithWhereWithoutUserInput = {
    where: StoreLikeScalarWhereInput
    data: XOR<StoreLikeUpdateManyMutationInput, StoreLikeUncheckedUpdateManyWithoutUserInput>
  }

  export type StoreLikeScalarWhereInput = {
    AND?: StoreLikeScalarWhereInput | StoreLikeScalarWhereInput[]
    OR?: StoreLikeScalarWhereInput[]
    NOT?: StoreLikeScalarWhereInput | StoreLikeScalarWhereInput[]
    id?: StringFilter<"StoreLike"> | string
    userId?: StringFilter<"StoreLike"> | string
    storeId?: StringFilter<"StoreLike"> | string
    createdAt?: DateTimeFilter<"StoreLike"> | Date | string
  }

  export type UserCreateWithoutStoresInput = {
    id?: string
    name?: string | null
    email?: string | null
    image?: string | null
    phone?: string | null
    phoneVerified?: boolean
    createdAt?: Date | string
    likedStores?: StoreLikeCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutStoresInput = {
    id?: string
    name?: string | null
    email?: string | null
    image?: string | null
    phone?: string | null
    phoneVerified?: boolean
    createdAt?: Date | string
    likedStores?: StoreLikeUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutStoresInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutStoresInput, UserUncheckedCreateWithoutStoresInput>
  }

  export type StoreImageCreateWithoutStoreInput = {
    id?: string
    url: string
    order?: number
    createdAt?: Date | string
  }

  export type StoreImageUncheckedCreateWithoutStoreInput = {
    id?: string
    url: string
    order?: number
    createdAt?: Date | string
  }

  export type StoreImageCreateOrConnectWithoutStoreInput = {
    where: StoreImageWhereUniqueInput
    create: XOR<StoreImageCreateWithoutStoreInput, StoreImageUncheckedCreateWithoutStoreInput>
  }

  export type StoreImageCreateManyStoreInputEnvelope = {
    data: StoreImageCreateManyStoreInput | StoreImageCreateManyStoreInput[]
    skipDuplicates?: boolean
  }

  export type StoreLikeCreateWithoutStoreInput = {
    id?: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutLikedStoresInput
  }

  export type StoreLikeUncheckedCreateWithoutStoreInput = {
    id?: string
    userId: string
    createdAt?: Date | string
  }

  export type StoreLikeCreateOrConnectWithoutStoreInput = {
    where: StoreLikeWhereUniqueInput
    create: XOR<StoreLikeCreateWithoutStoreInput, StoreLikeUncheckedCreateWithoutStoreInput>
  }

  export type StoreLikeCreateManyStoreInputEnvelope = {
    data: StoreLikeCreateManyStoreInput | StoreLikeCreateManyStoreInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutStoresInput = {
    update: XOR<UserUpdateWithoutStoresInput, UserUncheckedUpdateWithoutStoresInput>
    create: XOR<UserCreateWithoutStoresInput, UserUncheckedCreateWithoutStoresInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutStoresInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutStoresInput, UserUncheckedUpdateWithoutStoresInput>
  }

  export type UserUpdateWithoutStoresInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    phoneVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    likedStores?: StoreLikeUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutStoresInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    phoneVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    likedStores?: StoreLikeUncheckedUpdateManyWithoutUserNestedInput
  }

  export type StoreImageUpsertWithWhereUniqueWithoutStoreInput = {
    where: StoreImageWhereUniqueInput
    update: XOR<StoreImageUpdateWithoutStoreInput, StoreImageUncheckedUpdateWithoutStoreInput>
    create: XOR<StoreImageCreateWithoutStoreInput, StoreImageUncheckedCreateWithoutStoreInput>
  }

  export type StoreImageUpdateWithWhereUniqueWithoutStoreInput = {
    where: StoreImageWhereUniqueInput
    data: XOR<StoreImageUpdateWithoutStoreInput, StoreImageUncheckedUpdateWithoutStoreInput>
  }

  export type StoreImageUpdateManyWithWhereWithoutStoreInput = {
    where: StoreImageScalarWhereInput
    data: XOR<StoreImageUpdateManyMutationInput, StoreImageUncheckedUpdateManyWithoutStoreInput>
  }

  export type StoreImageScalarWhereInput = {
    AND?: StoreImageScalarWhereInput | StoreImageScalarWhereInput[]
    OR?: StoreImageScalarWhereInput[]
    NOT?: StoreImageScalarWhereInput | StoreImageScalarWhereInput[]
    id?: StringFilter<"StoreImage"> | string
    storeId?: StringFilter<"StoreImage"> | string
    url?: StringFilter<"StoreImage"> | string
    order?: IntFilter<"StoreImage"> | number
    createdAt?: DateTimeFilter<"StoreImage"> | Date | string
  }

  export type StoreLikeUpsertWithWhereUniqueWithoutStoreInput = {
    where: StoreLikeWhereUniqueInput
    update: XOR<StoreLikeUpdateWithoutStoreInput, StoreLikeUncheckedUpdateWithoutStoreInput>
    create: XOR<StoreLikeCreateWithoutStoreInput, StoreLikeUncheckedCreateWithoutStoreInput>
  }

  export type StoreLikeUpdateWithWhereUniqueWithoutStoreInput = {
    where: StoreLikeWhereUniqueInput
    data: XOR<StoreLikeUpdateWithoutStoreInput, StoreLikeUncheckedUpdateWithoutStoreInput>
  }

  export type StoreLikeUpdateManyWithWhereWithoutStoreInput = {
    where: StoreLikeScalarWhereInput
    data: XOR<StoreLikeUpdateManyMutationInput, StoreLikeUncheckedUpdateManyWithoutStoreInput>
  }

  export type StoreCreateWithoutImagesInput = {
    id?: string
    title: string
    desc: string
    peopleDesc: string
    storeSize: string
    businessType: string
    country: string
    state: string
    city: string
    pin: string
    fullAddress: string
    latitude?: number | null
    longitude?: number | null
    bannerImageUrl?: string | null
    priceInr: number
    shareMode: $Enums.ShareMode
    startTime?: string | null
    endTime?: string | null
    days?: StoreCreatedaysInput | string[]
    sqft?: number | null
    dayOrNight?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    owner: UserCreateNestedOneWithoutStoresInput
    likes?: StoreLikeCreateNestedManyWithoutStoreInput
  }

  export type StoreUncheckedCreateWithoutImagesInput = {
    id?: string
    ownerId: string
    title: string
    desc: string
    peopleDesc: string
    storeSize: string
    businessType: string
    country: string
    state: string
    city: string
    pin: string
    fullAddress: string
    latitude?: number | null
    longitude?: number | null
    bannerImageUrl?: string | null
    priceInr: number
    shareMode: $Enums.ShareMode
    startTime?: string | null
    endTime?: string | null
    days?: StoreCreatedaysInput | string[]
    sqft?: number | null
    dayOrNight?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    likes?: StoreLikeUncheckedCreateNestedManyWithoutStoreInput
  }

  export type StoreCreateOrConnectWithoutImagesInput = {
    where: StoreWhereUniqueInput
    create: XOR<StoreCreateWithoutImagesInput, StoreUncheckedCreateWithoutImagesInput>
  }

  export type StoreUpsertWithoutImagesInput = {
    update: XOR<StoreUpdateWithoutImagesInput, StoreUncheckedUpdateWithoutImagesInput>
    create: XOR<StoreCreateWithoutImagesInput, StoreUncheckedCreateWithoutImagesInput>
    where?: StoreWhereInput
  }

  export type StoreUpdateToOneWithWhereWithoutImagesInput = {
    where?: StoreWhereInput
    data: XOR<StoreUpdateWithoutImagesInput, StoreUncheckedUpdateWithoutImagesInput>
  }

  export type StoreUpdateWithoutImagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    desc?: StringFieldUpdateOperationsInput | string
    peopleDesc?: StringFieldUpdateOperationsInput | string
    storeSize?: StringFieldUpdateOperationsInput | string
    businessType?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    pin?: StringFieldUpdateOperationsInput | string
    fullAddress?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    bannerImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    priceInr?: IntFieldUpdateOperationsInput | number
    shareMode?: EnumShareModeFieldUpdateOperationsInput | $Enums.ShareMode
    startTime?: NullableStringFieldUpdateOperationsInput | string | null
    endTime?: NullableStringFieldUpdateOperationsInput | string | null
    days?: StoreUpdatedaysInput | string[]
    sqft?: NullableIntFieldUpdateOperationsInput | number | null
    dayOrNight?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutStoresNestedInput
    likes?: StoreLikeUpdateManyWithoutStoreNestedInput
  }

  export type StoreUncheckedUpdateWithoutImagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    desc?: StringFieldUpdateOperationsInput | string
    peopleDesc?: StringFieldUpdateOperationsInput | string
    storeSize?: StringFieldUpdateOperationsInput | string
    businessType?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    pin?: StringFieldUpdateOperationsInput | string
    fullAddress?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    bannerImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    priceInr?: IntFieldUpdateOperationsInput | number
    shareMode?: EnumShareModeFieldUpdateOperationsInput | $Enums.ShareMode
    startTime?: NullableStringFieldUpdateOperationsInput | string | null
    endTime?: NullableStringFieldUpdateOperationsInput | string | null
    days?: StoreUpdatedaysInput | string[]
    sqft?: NullableIntFieldUpdateOperationsInput | number | null
    dayOrNight?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    likes?: StoreLikeUncheckedUpdateManyWithoutStoreNestedInput
  }

  export type UserCreateWithoutLikedStoresInput = {
    id?: string
    name?: string | null
    email?: string | null
    image?: string | null
    phone?: string | null
    phoneVerified?: boolean
    createdAt?: Date | string
    stores?: StoreCreateNestedManyWithoutOwnerInput
  }

  export type UserUncheckedCreateWithoutLikedStoresInput = {
    id?: string
    name?: string | null
    email?: string | null
    image?: string | null
    phone?: string | null
    phoneVerified?: boolean
    createdAt?: Date | string
    stores?: StoreUncheckedCreateNestedManyWithoutOwnerInput
  }

  export type UserCreateOrConnectWithoutLikedStoresInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutLikedStoresInput, UserUncheckedCreateWithoutLikedStoresInput>
  }

  export type StoreCreateWithoutLikesInput = {
    id?: string
    title: string
    desc: string
    peopleDesc: string
    storeSize: string
    businessType: string
    country: string
    state: string
    city: string
    pin: string
    fullAddress: string
    latitude?: number | null
    longitude?: number | null
    bannerImageUrl?: string | null
    priceInr: number
    shareMode: $Enums.ShareMode
    startTime?: string | null
    endTime?: string | null
    days?: StoreCreatedaysInput | string[]
    sqft?: number | null
    dayOrNight?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    owner: UserCreateNestedOneWithoutStoresInput
    images?: StoreImageCreateNestedManyWithoutStoreInput
  }

  export type StoreUncheckedCreateWithoutLikesInput = {
    id?: string
    ownerId: string
    title: string
    desc: string
    peopleDesc: string
    storeSize: string
    businessType: string
    country: string
    state: string
    city: string
    pin: string
    fullAddress: string
    latitude?: number | null
    longitude?: number | null
    bannerImageUrl?: string | null
    priceInr: number
    shareMode: $Enums.ShareMode
    startTime?: string | null
    endTime?: string | null
    days?: StoreCreatedaysInput | string[]
    sqft?: number | null
    dayOrNight?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: StoreImageUncheckedCreateNestedManyWithoutStoreInput
  }

  export type StoreCreateOrConnectWithoutLikesInput = {
    where: StoreWhereUniqueInput
    create: XOR<StoreCreateWithoutLikesInput, StoreUncheckedCreateWithoutLikesInput>
  }

  export type UserUpsertWithoutLikedStoresInput = {
    update: XOR<UserUpdateWithoutLikedStoresInput, UserUncheckedUpdateWithoutLikedStoresInput>
    create: XOR<UserCreateWithoutLikedStoresInput, UserUncheckedCreateWithoutLikedStoresInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutLikedStoresInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutLikedStoresInput, UserUncheckedUpdateWithoutLikedStoresInput>
  }

  export type UserUpdateWithoutLikedStoresInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    phoneVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    stores?: StoreUpdateManyWithoutOwnerNestedInput
  }

  export type UserUncheckedUpdateWithoutLikedStoresInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    phoneVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    stores?: StoreUncheckedUpdateManyWithoutOwnerNestedInput
  }

  export type StoreUpsertWithoutLikesInput = {
    update: XOR<StoreUpdateWithoutLikesInput, StoreUncheckedUpdateWithoutLikesInput>
    create: XOR<StoreCreateWithoutLikesInput, StoreUncheckedCreateWithoutLikesInput>
    where?: StoreWhereInput
  }

  export type StoreUpdateToOneWithWhereWithoutLikesInput = {
    where?: StoreWhereInput
    data: XOR<StoreUpdateWithoutLikesInput, StoreUncheckedUpdateWithoutLikesInput>
  }

  export type StoreUpdateWithoutLikesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    desc?: StringFieldUpdateOperationsInput | string
    peopleDesc?: StringFieldUpdateOperationsInput | string
    storeSize?: StringFieldUpdateOperationsInput | string
    businessType?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    pin?: StringFieldUpdateOperationsInput | string
    fullAddress?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    bannerImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    priceInr?: IntFieldUpdateOperationsInput | number
    shareMode?: EnumShareModeFieldUpdateOperationsInput | $Enums.ShareMode
    startTime?: NullableStringFieldUpdateOperationsInput | string | null
    endTime?: NullableStringFieldUpdateOperationsInput | string | null
    days?: StoreUpdatedaysInput | string[]
    sqft?: NullableIntFieldUpdateOperationsInput | number | null
    dayOrNight?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutStoresNestedInput
    images?: StoreImageUpdateManyWithoutStoreNestedInput
  }

  export type StoreUncheckedUpdateWithoutLikesInput = {
    id?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    desc?: StringFieldUpdateOperationsInput | string
    peopleDesc?: StringFieldUpdateOperationsInput | string
    storeSize?: StringFieldUpdateOperationsInput | string
    businessType?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    pin?: StringFieldUpdateOperationsInput | string
    fullAddress?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    bannerImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    priceInr?: IntFieldUpdateOperationsInput | number
    shareMode?: EnumShareModeFieldUpdateOperationsInput | $Enums.ShareMode
    startTime?: NullableStringFieldUpdateOperationsInput | string | null
    endTime?: NullableStringFieldUpdateOperationsInput | string | null
    days?: StoreUpdatedaysInput | string[]
    sqft?: NullableIntFieldUpdateOperationsInput | number | null
    dayOrNight?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: StoreImageUncheckedUpdateManyWithoutStoreNestedInput
  }

  export type StoreCreateManyOwnerInput = {
    id?: string
    title: string
    desc: string
    peopleDesc: string
    storeSize: string
    businessType: string
    country: string
    state: string
    city: string
    pin: string
    fullAddress: string
    latitude?: number | null
    longitude?: number | null
    bannerImageUrl?: string | null
    priceInr: number
    shareMode: $Enums.ShareMode
    startTime?: string | null
    endTime?: string | null
    days?: StoreCreatedaysInput | string[]
    sqft?: number | null
    dayOrNight?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StoreLikeCreateManyUserInput = {
    id?: string
    storeId: string
    createdAt?: Date | string
  }

  export type StoreUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    desc?: StringFieldUpdateOperationsInput | string
    peopleDesc?: StringFieldUpdateOperationsInput | string
    storeSize?: StringFieldUpdateOperationsInput | string
    businessType?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    pin?: StringFieldUpdateOperationsInput | string
    fullAddress?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    bannerImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    priceInr?: IntFieldUpdateOperationsInput | number
    shareMode?: EnumShareModeFieldUpdateOperationsInput | $Enums.ShareMode
    startTime?: NullableStringFieldUpdateOperationsInput | string | null
    endTime?: NullableStringFieldUpdateOperationsInput | string | null
    days?: StoreUpdatedaysInput | string[]
    sqft?: NullableIntFieldUpdateOperationsInput | number | null
    dayOrNight?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: StoreImageUpdateManyWithoutStoreNestedInput
    likes?: StoreLikeUpdateManyWithoutStoreNestedInput
  }

  export type StoreUncheckedUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    desc?: StringFieldUpdateOperationsInput | string
    peopleDesc?: StringFieldUpdateOperationsInput | string
    storeSize?: StringFieldUpdateOperationsInput | string
    businessType?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    pin?: StringFieldUpdateOperationsInput | string
    fullAddress?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    bannerImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    priceInr?: IntFieldUpdateOperationsInput | number
    shareMode?: EnumShareModeFieldUpdateOperationsInput | $Enums.ShareMode
    startTime?: NullableStringFieldUpdateOperationsInput | string | null
    endTime?: NullableStringFieldUpdateOperationsInput | string | null
    days?: StoreUpdatedaysInput | string[]
    sqft?: NullableIntFieldUpdateOperationsInput | number | null
    dayOrNight?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: StoreImageUncheckedUpdateManyWithoutStoreNestedInput
    likes?: StoreLikeUncheckedUpdateManyWithoutStoreNestedInput
  }

  export type StoreUncheckedUpdateManyWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    desc?: StringFieldUpdateOperationsInput | string
    peopleDesc?: StringFieldUpdateOperationsInput | string
    storeSize?: StringFieldUpdateOperationsInput | string
    businessType?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    pin?: StringFieldUpdateOperationsInput | string
    fullAddress?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    bannerImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    priceInr?: IntFieldUpdateOperationsInput | number
    shareMode?: EnumShareModeFieldUpdateOperationsInput | $Enums.ShareMode
    startTime?: NullableStringFieldUpdateOperationsInput | string | null
    endTime?: NullableStringFieldUpdateOperationsInput | string | null
    days?: StoreUpdatedaysInput | string[]
    sqft?: NullableIntFieldUpdateOperationsInput | number | null
    dayOrNight?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StoreLikeUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    store?: StoreUpdateOneRequiredWithoutLikesNestedInput
  }

  export type StoreLikeUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    storeId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StoreLikeUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    storeId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StoreImageCreateManyStoreInput = {
    id?: string
    url: string
    order?: number
    createdAt?: Date | string
  }

  export type StoreLikeCreateManyStoreInput = {
    id?: string
    userId: string
    createdAt?: Date | string
  }

  export type StoreImageUpdateWithoutStoreInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StoreImageUncheckedUpdateWithoutStoreInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StoreImageUncheckedUpdateManyWithoutStoreInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StoreLikeUpdateWithoutStoreInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutLikedStoresNestedInput
  }

  export type StoreLikeUncheckedUpdateWithoutStoreInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StoreLikeUncheckedUpdateManyWithoutStoreInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
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