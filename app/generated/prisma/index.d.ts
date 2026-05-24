
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Event
 * 
 */
export type Event = $Result.DefaultSelection<Prisma.$EventPayload>
/**
 * Model EventInvite
 * 
 */
export type EventInvite = $Result.DefaultSelection<Prisma.$EventInvitePayload>
/**
 * Model EventRsvp
 * 
 */
export type EventRsvp = $Result.DefaultSelection<Prisma.$EventRsvpPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const RsvpStatus: {
  going: 'going',
  maybe: 'maybe',
  not_going: 'not_going'
};

export type RsvpStatus = (typeof RsvpStatus)[keyof typeof RsvpStatus]

}

export type RsvpStatus = $Enums.RsvpStatus

export const RsvpStatus: typeof $Enums.RsvpStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Events
 * const events = await prisma.event.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
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
   * // Fetch zero or more Events
   * const events = await prisma.event.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * `prisma.event`: Exposes CRUD operations for the **Event** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Events
    * const events = await prisma.event.findMany()
    * ```
    */
  get event(): Prisma.EventDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.eventInvite`: Exposes CRUD operations for the **EventInvite** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EventInvites
    * const eventInvites = await prisma.eventInvite.findMany()
    * ```
    */
  get eventInvite(): Prisma.EventInviteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.eventRsvp`: Exposes CRUD operations for the **EventRsvp** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EventRsvps
    * const eventRsvps = await prisma.eventRsvp.findMany()
    * ```
    */
  get eventRsvp(): Prisma.EventRsvpDelegate<ExtArgs, ClientOptions>;
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
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

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
   * Prisma Client JS version: 6.19.3
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
   */
  export type PrismaVersion = {
    client: string
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
    Event: 'Event',
    EventInvite: 'EventInvite',
    EventRsvp: 'EventRsvp'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "event" | "eventInvite" | "eventRsvp"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Event: {
        payload: Prisma.$EventPayload<ExtArgs>
        fields: Prisma.EventFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EventFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EventFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          findFirst: {
            args: Prisma.EventFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EventFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          findMany: {
            args: Prisma.EventFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>[]
          }
          create: {
            args: Prisma.EventCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          createMany: {
            args: Prisma.EventCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EventCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>[]
          }
          delete: {
            args: Prisma.EventDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          update: {
            args: Prisma.EventUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          deleteMany: {
            args: Prisma.EventDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EventUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EventUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>[]
          }
          upsert: {
            args: Prisma.EventUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          aggregate: {
            args: Prisma.EventAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEvent>
          }
          groupBy: {
            args: Prisma.EventGroupByArgs<ExtArgs>
            result: $Utils.Optional<EventGroupByOutputType>[]
          }
          count: {
            args: Prisma.EventCountArgs<ExtArgs>
            result: $Utils.Optional<EventCountAggregateOutputType> | number
          }
        }
      }
      EventInvite: {
        payload: Prisma.$EventInvitePayload<ExtArgs>
        fields: Prisma.EventInviteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EventInviteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventInvitePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EventInviteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventInvitePayload>
          }
          findFirst: {
            args: Prisma.EventInviteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventInvitePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EventInviteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventInvitePayload>
          }
          findMany: {
            args: Prisma.EventInviteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventInvitePayload>[]
          }
          create: {
            args: Prisma.EventInviteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventInvitePayload>
          }
          createMany: {
            args: Prisma.EventInviteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EventInviteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventInvitePayload>[]
          }
          delete: {
            args: Prisma.EventInviteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventInvitePayload>
          }
          update: {
            args: Prisma.EventInviteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventInvitePayload>
          }
          deleteMany: {
            args: Prisma.EventInviteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EventInviteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EventInviteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventInvitePayload>[]
          }
          upsert: {
            args: Prisma.EventInviteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventInvitePayload>
          }
          aggregate: {
            args: Prisma.EventInviteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEventInvite>
          }
          groupBy: {
            args: Prisma.EventInviteGroupByArgs<ExtArgs>
            result: $Utils.Optional<EventInviteGroupByOutputType>[]
          }
          count: {
            args: Prisma.EventInviteCountArgs<ExtArgs>
            result: $Utils.Optional<EventInviteCountAggregateOutputType> | number
          }
        }
      }
      EventRsvp: {
        payload: Prisma.$EventRsvpPayload<ExtArgs>
        fields: Prisma.EventRsvpFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EventRsvpFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventRsvpPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EventRsvpFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventRsvpPayload>
          }
          findFirst: {
            args: Prisma.EventRsvpFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventRsvpPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EventRsvpFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventRsvpPayload>
          }
          findMany: {
            args: Prisma.EventRsvpFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventRsvpPayload>[]
          }
          create: {
            args: Prisma.EventRsvpCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventRsvpPayload>
          }
          createMany: {
            args: Prisma.EventRsvpCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EventRsvpCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventRsvpPayload>[]
          }
          delete: {
            args: Prisma.EventRsvpDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventRsvpPayload>
          }
          update: {
            args: Prisma.EventRsvpUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventRsvpPayload>
          }
          deleteMany: {
            args: Prisma.EventRsvpDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EventRsvpUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EventRsvpUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventRsvpPayload>[]
          }
          upsert: {
            args: Prisma.EventRsvpUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventRsvpPayload>
          }
          aggregate: {
            args: Prisma.EventRsvpAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEventRsvp>
          }
          groupBy: {
            args: Prisma.EventRsvpGroupByArgs<ExtArgs>
            result: $Utils.Optional<EventRsvpGroupByOutputType>[]
          }
          count: {
            args: Prisma.EventRsvpCountArgs<ExtArgs>
            result: $Utils.Optional<EventRsvpCountAggregateOutputType> | number
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
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
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
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
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
    adapter?: runtime.SqlDriverAdapterFactory | null
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
  }
  export type GlobalOmitConfig = {
    event?: EventOmit
    eventInvite?: EventInviteOmit
    eventRsvp?: EventRsvpOmit
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
   * Count Type EventCountOutputType
   */

  export type EventCountOutputType = {
    rsvps: number
  }

  export type EventCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rsvps?: boolean | EventCountOutputTypeCountRsvpsArgs
  }

  // Custom InputTypes
  /**
   * EventCountOutputType without action
   */
  export type EventCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventCountOutputType
     */
    select?: EventCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EventCountOutputType without action
   */
  export type EventCountOutputTypeCountRsvpsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventRsvpWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Event
   */

  export type AggregateEvent = {
    _count: EventCountAggregateOutputType | null
    _min: EventMinAggregateOutputType | null
    _max: EventMaxAggregateOutputType | null
  }

  export type EventMinAggregateOutputType = {
    id: string | null
    ownerUserId: string | null
    title: string | null
    description: string | null
    location: string | null
    eventDate: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EventMaxAggregateOutputType = {
    id: string | null
    ownerUserId: string | null
    title: string | null
    description: string | null
    location: string | null
    eventDate: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EventCountAggregateOutputType = {
    id: number
    ownerUserId: number
    title: number
    description: number
    location: number
    eventDate: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type EventMinAggregateInputType = {
    id?: true
    ownerUserId?: true
    title?: true
    description?: true
    location?: true
    eventDate?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EventMaxAggregateInputType = {
    id?: true
    ownerUserId?: true
    title?: true
    description?: true
    location?: true
    eventDate?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EventCountAggregateInputType = {
    id?: true
    ownerUserId?: true
    title?: true
    description?: true
    location?: true
    eventDate?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type EventAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Event to aggregate.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Events
    **/
    _count?: true | EventCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EventMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EventMaxAggregateInputType
  }

  export type GetEventAggregateType<T extends EventAggregateArgs> = {
        [P in keyof T & keyof AggregateEvent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEvent[P]>
      : GetScalarType<T[P], AggregateEvent[P]>
  }




  export type EventGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventWhereInput
    orderBy?: EventOrderByWithAggregationInput | EventOrderByWithAggregationInput[]
    by: EventScalarFieldEnum[] | EventScalarFieldEnum
    having?: EventScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EventCountAggregateInputType | true
    _min?: EventMinAggregateInputType
    _max?: EventMaxAggregateInputType
  }

  export type EventGroupByOutputType = {
    id: string
    ownerUserId: string
    title: string
    description: string | null
    location: string | null
    eventDate: Date | null
    createdAt: Date
    updatedAt: Date
    _count: EventCountAggregateOutputType | null
    _min: EventMinAggregateOutputType | null
    _max: EventMaxAggregateOutputType | null
  }

  type GetEventGroupByPayload<T extends EventGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EventGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EventGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EventGroupByOutputType[P]>
            : GetScalarType<T[P], EventGroupByOutputType[P]>
        }
      >
    >


  export type EventSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ownerUserId?: boolean
    title?: boolean
    description?: boolean
    location?: boolean
    eventDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    invite?: boolean | Event$inviteArgs<ExtArgs>
    rsvps?: boolean | Event$rsvpsArgs<ExtArgs>
    _count?: boolean | EventCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["event"]>

  export type EventSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ownerUserId?: boolean
    title?: boolean
    description?: boolean
    location?: boolean
    eventDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["event"]>

  export type EventSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ownerUserId?: boolean
    title?: boolean
    description?: boolean
    location?: boolean
    eventDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["event"]>

  export type EventSelectScalar = {
    id?: boolean
    ownerUserId?: boolean
    title?: boolean
    description?: boolean
    location?: boolean
    eventDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type EventOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "ownerUserId" | "title" | "description" | "location" | "eventDate" | "createdAt" | "updatedAt", ExtArgs["result"]["event"]>
  export type EventInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    invite?: boolean | Event$inviteArgs<ExtArgs>
    rsvps?: boolean | Event$rsvpsArgs<ExtArgs>
    _count?: boolean | EventCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EventIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type EventIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $EventPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Event"
    objects: {
      invite: Prisma.$EventInvitePayload<ExtArgs> | null
      rsvps: Prisma.$EventRsvpPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      ownerUserId: string
      title: string
      description: string | null
      location: string | null
      eventDate: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["event"]>
    composites: {}
  }

  type EventGetPayload<S extends boolean | null | undefined | EventDefaultArgs> = $Result.GetResult<Prisma.$EventPayload, S>

  type EventCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EventFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EventCountAggregateInputType | true
    }

  export interface EventDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Event'], meta: { name: 'Event' } }
    /**
     * Find zero or one Event that matches the filter.
     * @param {EventFindUniqueArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EventFindUniqueArgs>(args: SelectSubset<T, EventFindUniqueArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Event that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EventFindUniqueOrThrowArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EventFindUniqueOrThrowArgs>(args: SelectSubset<T, EventFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Event that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindFirstArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EventFindFirstArgs>(args?: SelectSubset<T, EventFindFirstArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Event that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindFirstOrThrowArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EventFindFirstOrThrowArgs>(args?: SelectSubset<T, EventFindFirstOrThrowArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Events that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Events
     * const events = await prisma.event.findMany()
     * 
     * // Get first 10 Events
     * const events = await prisma.event.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const eventWithIdOnly = await prisma.event.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EventFindManyArgs>(args?: SelectSubset<T, EventFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Event.
     * @param {EventCreateArgs} args - Arguments to create a Event.
     * @example
     * // Create one Event
     * const Event = await prisma.event.create({
     *   data: {
     *     // ... data to create a Event
     *   }
     * })
     * 
     */
    create<T extends EventCreateArgs>(args: SelectSubset<T, EventCreateArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Events.
     * @param {EventCreateManyArgs} args - Arguments to create many Events.
     * @example
     * // Create many Events
     * const event = await prisma.event.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EventCreateManyArgs>(args?: SelectSubset<T, EventCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Events and returns the data saved in the database.
     * @param {EventCreateManyAndReturnArgs} args - Arguments to create many Events.
     * @example
     * // Create many Events
     * const event = await prisma.event.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Events and only return the `id`
     * const eventWithIdOnly = await prisma.event.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EventCreateManyAndReturnArgs>(args?: SelectSubset<T, EventCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Event.
     * @param {EventDeleteArgs} args - Arguments to delete one Event.
     * @example
     * // Delete one Event
     * const Event = await prisma.event.delete({
     *   where: {
     *     // ... filter to delete one Event
     *   }
     * })
     * 
     */
    delete<T extends EventDeleteArgs>(args: SelectSubset<T, EventDeleteArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Event.
     * @param {EventUpdateArgs} args - Arguments to update one Event.
     * @example
     * // Update one Event
     * const event = await prisma.event.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EventUpdateArgs>(args: SelectSubset<T, EventUpdateArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Events.
     * @param {EventDeleteManyArgs} args - Arguments to filter Events to delete.
     * @example
     * // Delete a few Events
     * const { count } = await prisma.event.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EventDeleteManyArgs>(args?: SelectSubset<T, EventDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Events
     * const event = await prisma.event.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EventUpdateManyArgs>(args: SelectSubset<T, EventUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Events and returns the data updated in the database.
     * @param {EventUpdateManyAndReturnArgs} args - Arguments to update many Events.
     * @example
     * // Update many Events
     * const event = await prisma.event.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Events and only return the `id`
     * const eventWithIdOnly = await prisma.event.updateManyAndReturn({
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
    updateManyAndReturn<T extends EventUpdateManyAndReturnArgs>(args: SelectSubset<T, EventUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Event.
     * @param {EventUpsertArgs} args - Arguments to update or create a Event.
     * @example
     * // Update or create a Event
     * const event = await prisma.event.upsert({
     *   create: {
     *     // ... data to create a Event
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Event we want to update
     *   }
     * })
     */
    upsert<T extends EventUpsertArgs>(args: SelectSubset<T, EventUpsertArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventCountArgs} args - Arguments to filter Events to count.
     * @example
     * // Count the number of Events
     * const count = await prisma.event.count({
     *   where: {
     *     // ... the filter for the Events we want to count
     *   }
     * })
    **/
    count<T extends EventCountArgs>(
      args?: Subset<T, EventCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EventCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Event.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EventAggregateArgs>(args: Subset<T, EventAggregateArgs>): Prisma.PrismaPromise<GetEventAggregateType<T>>

    /**
     * Group by Event.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventGroupByArgs} args - Group by arguments.
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
      T extends EventGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EventGroupByArgs['orderBy'] }
        : { orderBy?: EventGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Event model
   */
  readonly fields: EventFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Event.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EventClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    invite<T extends Event$inviteArgs<ExtArgs> = {}>(args?: Subset<T, Event$inviteArgs<ExtArgs>>): Prisma__EventInviteClient<$Result.GetResult<Prisma.$EventInvitePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    rsvps<T extends Event$rsvpsArgs<ExtArgs> = {}>(args?: Subset<T, Event$rsvpsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventRsvpPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Event model
   */
  interface EventFieldRefs {
    readonly id: FieldRef<"Event", 'String'>
    readonly ownerUserId: FieldRef<"Event", 'String'>
    readonly title: FieldRef<"Event", 'String'>
    readonly description: FieldRef<"Event", 'String'>
    readonly location: FieldRef<"Event", 'String'>
    readonly eventDate: FieldRef<"Event", 'DateTime'>
    readonly createdAt: FieldRef<"Event", 'DateTime'>
    readonly updatedAt: FieldRef<"Event", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Event findUnique
   */
  export type EventFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event findUniqueOrThrow
   */
  export type EventFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event findFirst
   */
  export type EventFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Events.
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Events.
     */
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Event findFirstOrThrow
   */
  export type EventFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Events.
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Events.
     */
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Event findMany
   */
  export type EventFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Events to fetch.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Events.
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Event create
   */
  export type EventCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * The data needed to create a Event.
     */
    data: XOR<EventCreateInput, EventUncheckedCreateInput>
  }

  /**
   * Event createMany
   */
  export type EventCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Events.
     */
    data: EventCreateManyInput | EventCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Event createManyAndReturn
   */
  export type EventCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * The data used to create many Events.
     */
    data: EventCreateManyInput | EventCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Event update
   */
  export type EventUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * The data needed to update a Event.
     */
    data: XOR<EventUpdateInput, EventUncheckedUpdateInput>
    /**
     * Choose, which Event to update.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event updateMany
   */
  export type EventUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Events.
     */
    data: XOR<EventUpdateManyMutationInput, EventUncheckedUpdateManyInput>
    /**
     * Filter which Events to update
     */
    where?: EventWhereInput
    /**
     * Limit how many Events to update.
     */
    limit?: number
  }

  /**
   * Event updateManyAndReturn
   */
  export type EventUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * The data used to update Events.
     */
    data: XOR<EventUpdateManyMutationInput, EventUncheckedUpdateManyInput>
    /**
     * Filter which Events to update
     */
    where?: EventWhereInput
    /**
     * Limit how many Events to update.
     */
    limit?: number
  }

  /**
   * Event upsert
   */
  export type EventUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * The filter to search for the Event to update in case it exists.
     */
    where: EventWhereUniqueInput
    /**
     * In case the Event found by the `where` argument doesn't exist, create a new Event with this data.
     */
    create: XOR<EventCreateInput, EventUncheckedCreateInput>
    /**
     * In case the Event was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EventUpdateInput, EventUncheckedUpdateInput>
  }

  /**
   * Event delete
   */
  export type EventDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter which Event to delete.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event deleteMany
   */
  export type EventDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Events to delete
     */
    where?: EventWhereInput
    /**
     * Limit how many Events to delete.
     */
    limit?: number
  }

  /**
   * Event.invite
   */
  export type Event$inviteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventInvite
     */
    select?: EventInviteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventInvite
     */
    omit?: EventInviteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInviteInclude<ExtArgs> | null
    where?: EventInviteWhereInput
  }

  /**
   * Event.rsvps
   */
  export type Event$rsvpsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventRsvp
     */
    select?: EventRsvpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventRsvp
     */
    omit?: EventRsvpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventRsvpInclude<ExtArgs> | null
    where?: EventRsvpWhereInput
    orderBy?: EventRsvpOrderByWithRelationInput | EventRsvpOrderByWithRelationInput[]
    cursor?: EventRsvpWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EventRsvpScalarFieldEnum | EventRsvpScalarFieldEnum[]
  }

  /**
   * Event without action
   */
  export type EventDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
  }


  /**
   * Model EventInvite
   */

  export type AggregateEventInvite = {
    _count: EventInviteCountAggregateOutputType | null
    _min: EventInviteMinAggregateOutputType | null
    _max: EventInviteMaxAggregateOutputType | null
  }

  export type EventInviteMinAggregateOutputType = {
    id: string | null
    eventId: string | null
    token: string | null
    createdAt: Date | null
  }

  export type EventInviteMaxAggregateOutputType = {
    id: string | null
    eventId: string | null
    token: string | null
    createdAt: Date | null
  }

  export type EventInviteCountAggregateOutputType = {
    id: number
    eventId: number
    token: number
    createdAt: number
    _all: number
  }


  export type EventInviteMinAggregateInputType = {
    id?: true
    eventId?: true
    token?: true
    createdAt?: true
  }

  export type EventInviteMaxAggregateInputType = {
    id?: true
    eventId?: true
    token?: true
    createdAt?: true
  }

  export type EventInviteCountAggregateInputType = {
    id?: true
    eventId?: true
    token?: true
    createdAt?: true
    _all?: true
  }

  export type EventInviteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EventInvite to aggregate.
     */
    where?: EventInviteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventInvites to fetch.
     */
    orderBy?: EventInviteOrderByWithRelationInput | EventInviteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EventInviteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventInvites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventInvites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EventInvites
    **/
    _count?: true | EventInviteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EventInviteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EventInviteMaxAggregateInputType
  }

  export type GetEventInviteAggregateType<T extends EventInviteAggregateArgs> = {
        [P in keyof T & keyof AggregateEventInvite]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEventInvite[P]>
      : GetScalarType<T[P], AggregateEventInvite[P]>
  }




  export type EventInviteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventInviteWhereInput
    orderBy?: EventInviteOrderByWithAggregationInput | EventInviteOrderByWithAggregationInput[]
    by: EventInviteScalarFieldEnum[] | EventInviteScalarFieldEnum
    having?: EventInviteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EventInviteCountAggregateInputType | true
    _min?: EventInviteMinAggregateInputType
    _max?: EventInviteMaxAggregateInputType
  }

  export type EventInviteGroupByOutputType = {
    id: string
    eventId: string
    token: string
    createdAt: Date
    _count: EventInviteCountAggregateOutputType | null
    _min: EventInviteMinAggregateOutputType | null
    _max: EventInviteMaxAggregateOutputType | null
  }

  type GetEventInviteGroupByPayload<T extends EventInviteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EventInviteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EventInviteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EventInviteGroupByOutputType[P]>
            : GetScalarType<T[P], EventInviteGroupByOutputType[P]>
        }
      >
    >


  export type EventInviteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    eventId?: boolean
    token?: boolean
    createdAt?: boolean
    event?: boolean | EventDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["eventInvite"]>

  export type EventInviteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    eventId?: boolean
    token?: boolean
    createdAt?: boolean
    event?: boolean | EventDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["eventInvite"]>

  export type EventInviteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    eventId?: boolean
    token?: boolean
    createdAt?: boolean
    event?: boolean | EventDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["eventInvite"]>

  export type EventInviteSelectScalar = {
    id?: boolean
    eventId?: boolean
    token?: boolean
    createdAt?: boolean
  }

  export type EventInviteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "eventId" | "token" | "createdAt", ExtArgs["result"]["eventInvite"]>
  export type EventInviteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | EventDefaultArgs<ExtArgs>
  }
  export type EventInviteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | EventDefaultArgs<ExtArgs>
  }
  export type EventInviteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | EventDefaultArgs<ExtArgs>
  }

  export type $EventInvitePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EventInvite"
    objects: {
      event: Prisma.$EventPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      eventId: string
      token: string
      createdAt: Date
    }, ExtArgs["result"]["eventInvite"]>
    composites: {}
  }

  type EventInviteGetPayload<S extends boolean | null | undefined | EventInviteDefaultArgs> = $Result.GetResult<Prisma.$EventInvitePayload, S>

  type EventInviteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EventInviteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EventInviteCountAggregateInputType | true
    }

  export interface EventInviteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EventInvite'], meta: { name: 'EventInvite' } }
    /**
     * Find zero or one EventInvite that matches the filter.
     * @param {EventInviteFindUniqueArgs} args - Arguments to find a EventInvite
     * @example
     * // Get one EventInvite
     * const eventInvite = await prisma.eventInvite.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EventInviteFindUniqueArgs>(args: SelectSubset<T, EventInviteFindUniqueArgs<ExtArgs>>): Prisma__EventInviteClient<$Result.GetResult<Prisma.$EventInvitePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one EventInvite that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EventInviteFindUniqueOrThrowArgs} args - Arguments to find a EventInvite
     * @example
     * // Get one EventInvite
     * const eventInvite = await prisma.eventInvite.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EventInviteFindUniqueOrThrowArgs>(args: SelectSubset<T, EventInviteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EventInviteClient<$Result.GetResult<Prisma.$EventInvitePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EventInvite that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventInviteFindFirstArgs} args - Arguments to find a EventInvite
     * @example
     * // Get one EventInvite
     * const eventInvite = await prisma.eventInvite.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EventInviteFindFirstArgs>(args?: SelectSubset<T, EventInviteFindFirstArgs<ExtArgs>>): Prisma__EventInviteClient<$Result.GetResult<Prisma.$EventInvitePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EventInvite that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventInviteFindFirstOrThrowArgs} args - Arguments to find a EventInvite
     * @example
     * // Get one EventInvite
     * const eventInvite = await prisma.eventInvite.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EventInviteFindFirstOrThrowArgs>(args?: SelectSubset<T, EventInviteFindFirstOrThrowArgs<ExtArgs>>): Prisma__EventInviteClient<$Result.GetResult<Prisma.$EventInvitePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more EventInvites that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventInviteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EventInvites
     * const eventInvites = await prisma.eventInvite.findMany()
     * 
     * // Get first 10 EventInvites
     * const eventInvites = await prisma.eventInvite.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const eventInviteWithIdOnly = await prisma.eventInvite.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EventInviteFindManyArgs>(args?: SelectSubset<T, EventInviteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventInvitePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a EventInvite.
     * @param {EventInviteCreateArgs} args - Arguments to create a EventInvite.
     * @example
     * // Create one EventInvite
     * const EventInvite = await prisma.eventInvite.create({
     *   data: {
     *     // ... data to create a EventInvite
     *   }
     * })
     * 
     */
    create<T extends EventInviteCreateArgs>(args: SelectSubset<T, EventInviteCreateArgs<ExtArgs>>): Prisma__EventInviteClient<$Result.GetResult<Prisma.$EventInvitePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many EventInvites.
     * @param {EventInviteCreateManyArgs} args - Arguments to create many EventInvites.
     * @example
     * // Create many EventInvites
     * const eventInvite = await prisma.eventInvite.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EventInviteCreateManyArgs>(args?: SelectSubset<T, EventInviteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many EventInvites and returns the data saved in the database.
     * @param {EventInviteCreateManyAndReturnArgs} args - Arguments to create many EventInvites.
     * @example
     * // Create many EventInvites
     * const eventInvite = await prisma.eventInvite.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many EventInvites and only return the `id`
     * const eventInviteWithIdOnly = await prisma.eventInvite.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EventInviteCreateManyAndReturnArgs>(args?: SelectSubset<T, EventInviteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventInvitePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a EventInvite.
     * @param {EventInviteDeleteArgs} args - Arguments to delete one EventInvite.
     * @example
     * // Delete one EventInvite
     * const EventInvite = await prisma.eventInvite.delete({
     *   where: {
     *     // ... filter to delete one EventInvite
     *   }
     * })
     * 
     */
    delete<T extends EventInviteDeleteArgs>(args: SelectSubset<T, EventInviteDeleteArgs<ExtArgs>>): Prisma__EventInviteClient<$Result.GetResult<Prisma.$EventInvitePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one EventInvite.
     * @param {EventInviteUpdateArgs} args - Arguments to update one EventInvite.
     * @example
     * // Update one EventInvite
     * const eventInvite = await prisma.eventInvite.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EventInviteUpdateArgs>(args: SelectSubset<T, EventInviteUpdateArgs<ExtArgs>>): Prisma__EventInviteClient<$Result.GetResult<Prisma.$EventInvitePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more EventInvites.
     * @param {EventInviteDeleteManyArgs} args - Arguments to filter EventInvites to delete.
     * @example
     * // Delete a few EventInvites
     * const { count } = await prisma.eventInvite.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EventInviteDeleteManyArgs>(args?: SelectSubset<T, EventInviteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EventInvites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventInviteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EventInvites
     * const eventInvite = await prisma.eventInvite.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EventInviteUpdateManyArgs>(args: SelectSubset<T, EventInviteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EventInvites and returns the data updated in the database.
     * @param {EventInviteUpdateManyAndReturnArgs} args - Arguments to update many EventInvites.
     * @example
     * // Update many EventInvites
     * const eventInvite = await prisma.eventInvite.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more EventInvites and only return the `id`
     * const eventInviteWithIdOnly = await prisma.eventInvite.updateManyAndReturn({
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
    updateManyAndReturn<T extends EventInviteUpdateManyAndReturnArgs>(args: SelectSubset<T, EventInviteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventInvitePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one EventInvite.
     * @param {EventInviteUpsertArgs} args - Arguments to update or create a EventInvite.
     * @example
     * // Update or create a EventInvite
     * const eventInvite = await prisma.eventInvite.upsert({
     *   create: {
     *     // ... data to create a EventInvite
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EventInvite we want to update
     *   }
     * })
     */
    upsert<T extends EventInviteUpsertArgs>(args: SelectSubset<T, EventInviteUpsertArgs<ExtArgs>>): Prisma__EventInviteClient<$Result.GetResult<Prisma.$EventInvitePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of EventInvites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventInviteCountArgs} args - Arguments to filter EventInvites to count.
     * @example
     * // Count the number of EventInvites
     * const count = await prisma.eventInvite.count({
     *   where: {
     *     // ... the filter for the EventInvites we want to count
     *   }
     * })
    **/
    count<T extends EventInviteCountArgs>(
      args?: Subset<T, EventInviteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EventInviteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EventInvite.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventInviteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EventInviteAggregateArgs>(args: Subset<T, EventInviteAggregateArgs>): Prisma.PrismaPromise<GetEventInviteAggregateType<T>>

    /**
     * Group by EventInvite.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventInviteGroupByArgs} args - Group by arguments.
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
      T extends EventInviteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EventInviteGroupByArgs['orderBy'] }
        : { orderBy?: EventInviteGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EventInviteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEventInviteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EventInvite model
   */
  readonly fields: EventInviteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EventInvite.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EventInviteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    event<T extends EventDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EventDefaultArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the EventInvite model
   */
  interface EventInviteFieldRefs {
    readonly id: FieldRef<"EventInvite", 'String'>
    readonly eventId: FieldRef<"EventInvite", 'String'>
    readonly token: FieldRef<"EventInvite", 'String'>
    readonly createdAt: FieldRef<"EventInvite", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * EventInvite findUnique
   */
  export type EventInviteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventInvite
     */
    select?: EventInviteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventInvite
     */
    omit?: EventInviteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInviteInclude<ExtArgs> | null
    /**
     * Filter, which EventInvite to fetch.
     */
    where: EventInviteWhereUniqueInput
  }

  /**
   * EventInvite findUniqueOrThrow
   */
  export type EventInviteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventInvite
     */
    select?: EventInviteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventInvite
     */
    omit?: EventInviteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInviteInclude<ExtArgs> | null
    /**
     * Filter, which EventInvite to fetch.
     */
    where: EventInviteWhereUniqueInput
  }

  /**
   * EventInvite findFirst
   */
  export type EventInviteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventInvite
     */
    select?: EventInviteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventInvite
     */
    omit?: EventInviteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInviteInclude<ExtArgs> | null
    /**
     * Filter, which EventInvite to fetch.
     */
    where?: EventInviteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventInvites to fetch.
     */
    orderBy?: EventInviteOrderByWithRelationInput | EventInviteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EventInvites.
     */
    cursor?: EventInviteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventInvites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventInvites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EventInvites.
     */
    distinct?: EventInviteScalarFieldEnum | EventInviteScalarFieldEnum[]
  }

  /**
   * EventInvite findFirstOrThrow
   */
  export type EventInviteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventInvite
     */
    select?: EventInviteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventInvite
     */
    omit?: EventInviteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInviteInclude<ExtArgs> | null
    /**
     * Filter, which EventInvite to fetch.
     */
    where?: EventInviteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventInvites to fetch.
     */
    orderBy?: EventInviteOrderByWithRelationInput | EventInviteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EventInvites.
     */
    cursor?: EventInviteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventInvites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventInvites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EventInvites.
     */
    distinct?: EventInviteScalarFieldEnum | EventInviteScalarFieldEnum[]
  }

  /**
   * EventInvite findMany
   */
  export type EventInviteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventInvite
     */
    select?: EventInviteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventInvite
     */
    omit?: EventInviteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInviteInclude<ExtArgs> | null
    /**
     * Filter, which EventInvites to fetch.
     */
    where?: EventInviteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventInvites to fetch.
     */
    orderBy?: EventInviteOrderByWithRelationInput | EventInviteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EventInvites.
     */
    cursor?: EventInviteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventInvites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventInvites.
     */
    skip?: number
    distinct?: EventInviteScalarFieldEnum | EventInviteScalarFieldEnum[]
  }

  /**
   * EventInvite create
   */
  export type EventInviteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventInvite
     */
    select?: EventInviteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventInvite
     */
    omit?: EventInviteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInviteInclude<ExtArgs> | null
    /**
     * The data needed to create a EventInvite.
     */
    data: XOR<EventInviteCreateInput, EventInviteUncheckedCreateInput>
  }

  /**
   * EventInvite createMany
   */
  export type EventInviteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EventInvites.
     */
    data: EventInviteCreateManyInput | EventInviteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EventInvite createManyAndReturn
   */
  export type EventInviteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventInvite
     */
    select?: EventInviteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EventInvite
     */
    omit?: EventInviteOmit<ExtArgs> | null
    /**
     * The data used to create many EventInvites.
     */
    data: EventInviteCreateManyInput | EventInviteCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInviteIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * EventInvite update
   */
  export type EventInviteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventInvite
     */
    select?: EventInviteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventInvite
     */
    omit?: EventInviteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInviteInclude<ExtArgs> | null
    /**
     * The data needed to update a EventInvite.
     */
    data: XOR<EventInviteUpdateInput, EventInviteUncheckedUpdateInput>
    /**
     * Choose, which EventInvite to update.
     */
    where: EventInviteWhereUniqueInput
  }

  /**
   * EventInvite updateMany
   */
  export type EventInviteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EventInvites.
     */
    data: XOR<EventInviteUpdateManyMutationInput, EventInviteUncheckedUpdateManyInput>
    /**
     * Filter which EventInvites to update
     */
    where?: EventInviteWhereInput
    /**
     * Limit how many EventInvites to update.
     */
    limit?: number
  }

  /**
   * EventInvite updateManyAndReturn
   */
  export type EventInviteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventInvite
     */
    select?: EventInviteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EventInvite
     */
    omit?: EventInviteOmit<ExtArgs> | null
    /**
     * The data used to update EventInvites.
     */
    data: XOR<EventInviteUpdateManyMutationInput, EventInviteUncheckedUpdateManyInput>
    /**
     * Filter which EventInvites to update
     */
    where?: EventInviteWhereInput
    /**
     * Limit how many EventInvites to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInviteIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * EventInvite upsert
   */
  export type EventInviteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventInvite
     */
    select?: EventInviteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventInvite
     */
    omit?: EventInviteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInviteInclude<ExtArgs> | null
    /**
     * The filter to search for the EventInvite to update in case it exists.
     */
    where: EventInviteWhereUniqueInput
    /**
     * In case the EventInvite found by the `where` argument doesn't exist, create a new EventInvite with this data.
     */
    create: XOR<EventInviteCreateInput, EventInviteUncheckedCreateInput>
    /**
     * In case the EventInvite was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EventInviteUpdateInput, EventInviteUncheckedUpdateInput>
  }

  /**
   * EventInvite delete
   */
  export type EventInviteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventInvite
     */
    select?: EventInviteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventInvite
     */
    omit?: EventInviteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInviteInclude<ExtArgs> | null
    /**
     * Filter which EventInvite to delete.
     */
    where: EventInviteWhereUniqueInput
  }

  /**
   * EventInvite deleteMany
   */
  export type EventInviteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EventInvites to delete
     */
    where?: EventInviteWhereInput
    /**
     * Limit how many EventInvites to delete.
     */
    limit?: number
  }

  /**
   * EventInvite without action
   */
  export type EventInviteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventInvite
     */
    select?: EventInviteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventInvite
     */
    omit?: EventInviteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInviteInclude<ExtArgs> | null
  }


  /**
   * Model EventRsvp
   */

  export type AggregateEventRsvp = {
    _count: EventRsvpCountAggregateOutputType | null
    _min: EventRsvpMinAggregateOutputType | null
    _max: EventRsvpMaxAggregateOutputType | null
  }

  export type EventRsvpMinAggregateOutputType = {
    id: string | null
    eventId: string | null
    inviteId: string | null
    name: string | null
    email: string | null
    emailNormalized: string | null
    status: $Enums.RsvpStatus | null
    respondedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EventRsvpMaxAggregateOutputType = {
    id: string | null
    eventId: string | null
    inviteId: string | null
    name: string | null
    email: string | null
    emailNormalized: string | null
    status: $Enums.RsvpStatus | null
    respondedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EventRsvpCountAggregateOutputType = {
    id: number
    eventId: number
    inviteId: number
    name: number
    email: number
    emailNormalized: number
    status: number
    respondedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type EventRsvpMinAggregateInputType = {
    id?: true
    eventId?: true
    inviteId?: true
    name?: true
    email?: true
    emailNormalized?: true
    status?: true
    respondedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EventRsvpMaxAggregateInputType = {
    id?: true
    eventId?: true
    inviteId?: true
    name?: true
    email?: true
    emailNormalized?: true
    status?: true
    respondedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EventRsvpCountAggregateInputType = {
    id?: true
    eventId?: true
    inviteId?: true
    name?: true
    email?: true
    emailNormalized?: true
    status?: true
    respondedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type EventRsvpAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EventRsvp to aggregate.
     */
    where?: EventRsvpWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventRsvps to fetch.
     */
    orderBy?: EventRsvpOrderByWithRelationInput | EventRsvpOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EventRsvpWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventRsvps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventRsvps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EventRsvps
    **/
    _count?: true | EventRsvpCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EventRsvpMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EventRsvpMaxAggregateInputType
  }

  export type GetEventRsvpAggregateType<T extends EventRsvpAggregateArgs> = {
        [P in keyof T & keyof AggregateEventRsvp]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEventRsvp[P]>
      : GetScalarType<T[P], AggregateEventRsvp[P]>
  }




  export type EventRsvpGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventRsvpWhereInput
    orderBy?: EventRsvpOrderByWithAggregationInput | EventRsvpOrderByWithAggregationInput[]
    by: EventRsvpScalarFieldEnum[] | EventRsvpScalarFieldEnum
    having?: EventRsvpScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EventRsvpCountAggregateInputType | true
    _min?: EventRsvpMinAggregateInputType
    _max?: EventRsvpMaxAggregateInputType
  }

  export type EventRsvpGroupByOutputType = {
    id: string
    eventId: string
    inviteId: string | null
    name: string
    email: string
    emailNormalized: string
    status: $Enums.RsvpStatus
    respondedAt: Date
    createdAt: Date
    updatedAt: Date
    _count: EventRsvpCountAggregateOutputType | null
    _min: EventRsvpMinAggregateOutputType | null
    _max: EventRsvpMaxAggregateOutputType | null
  }

  type GetEventRsvpGroupByPayload<T extends EventRsvpGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EventRsvpGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EventRsvpGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EventRsvpGroupByOutputType[P]>
            : GetScalarType<T[P], EventRsvpGroupByOutputType[P]>
        }
      >
    >


  export type EventRsvpSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    eventId?: boolean
    inviteId?: boolean
    name?: boolean
    email?: boolean
    emailNormalized?: boolean
    status?: boolean
    respondedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    event?: boolean | EventDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["eventRsvp"]>

  export type EventRsvpSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    eventId?: boolean
    inviteId?: boolean
    name?: boolean
    email?: boolean
    emailNormalized?: boolean
    status?: boolean
    respondedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    event?: boolean | EventDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["eventRsvp"]>

  export type EventRsvpSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    eventId?: boolean
    inviteId?: boolean
    name?: boolean
    email?: boolean
    emailNormalized?: boolean
    status?: boolean
    respondedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    event?: boolean | EventDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["eventRsvp"]>

  export type EventRsvpSelectScalar = {
    id?: boolean
    eventId?: boolean
    inviteId?: boolean
    name?: boolean
    email?: boolean
    emailNormalized?: boolean
    status?: boolean
    respondedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type EventRsvpOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "eventId" | "inviteId" | "name" | "email" | "emailNormalized" | "status" | "respondedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["eventRsvp"]>
  export type EventRsvpInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | EventDefaultArgs<ExtArgs>
  }
  export type EventRsvpIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | EventDefaultArgs<ExtArgs>
  }
  export type EventRsvpIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | EventDefaultArgs<ExtArgs>
  }

  export type $EventRsvpPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EventRsvp"
    objects: {
      event: Prisma.$EventPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      eventId: string
      inviteId: string | null
      name: string
      email: string
      emailNormalized: string
      status: $Enums.RsvpStatus
      respondedAt: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["eventRsvp"]>
    composites: {}
  }

  type EventRsvpGetPayload<S extends boolean | null | undefined | EventRsvpDefaultArgs> = $Result.GetResult<Prisma.$EventRsvpPayload, S>

  type EventRsvpCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EventRsvpFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EventRsvpCountAggregateInputType | true
    }

  export interface EventRsvpDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EventRsvp'], meta: { name: 'EventRsvp' } }
    /**
     * Find zero or one EventRsvp that matches the filter.
     * @param {EventRsvpFindUniqueArgs} args - Arguments to find a EventRsvp
     * @example
     * // Get one EventRsvp
     * const eventRsvp = await prisma.eventRsvp.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EventRsvpFindUniqueArgs>(args: SelectSubset<T, EventRsvpFindUniqueArgs<ExtArgs>>): Prisma__EventRsvpClient<$Result.GetResult<Prisma.$EventRsvpPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one EventRsvp that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EventRsvpFindUniqueOrThrowArgs} args - Arguments to find a EventRsvp
     * @example
     * // Get one EventRsvp
     * const eventRsvp = await prisma.eventRsvp.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EventRsvpFindUniqueOrThrowArgs>(args: SelectSubset<T, EventRsvpFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EventRsvpClient<$Result.GetResult<Prisma.$EventRsvpPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EventRsvp that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventRsvpFindFirstArgs} args - Arguments to find a EventRsvp
     * @example
     * // Get one EventRsvp
     * const eventRsvp = await prisma.eventRsvp.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EventRsvpFindFirstArgs>(args?: SelectSubset<T, EventRsvpFindFirstArgs<ExtArgs>>): Prisma__EventRsvpClient<$Result.GetResult<Prisma.$EventRsvpPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EventRsvp that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventRsvpFindFirstOrThrowArgs} args - Arguments to find a EventRsvp
     * @example
     * // Get one EventRsvp
     * const eventRsvp = await prisma.eventRsvp.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EventRsvpFindFirstOrThrowArgs>(args?: SelectSubset<T, EventRsvpFindFirstOrThrowArgs<ExtArgs>>): Prisma__EventRsvpClient<$Result.GetResult<Prisma.$EventRsvpPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more EventRsvps that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventRsvpFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EventRsvps
     * const eventRsvps = await prisma.eventRsvp.findMany()
     * 
     * // Get first 10 EventRsvps
     * const eventRsvps = await prisma.eventRsvp.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const eventRsvpWithIdOnly = await prisma.eventRsvp.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EventRsvpFindManyArgs>(args?: SelectSubset<T, EventRsvpFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventRsvpPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a EventRsvp.
     * @param {EventRsvpCreateArgs} args - Arguments to create a EventRsvp.
     * @example
     * // Create one EventRsvp
     * const EventRsvp = await prisma.eventRsvp.create({
     *   data: {
     *     // ... data to create a EventRsvp
     *   }
     * })
     * 
     */
    create<T extends EventRsvpCreateArgs>(args: SelectSubset<T, EventRsvpCreateArgs<ExtArgs>>): Prisma__EventRsvpClient<$Result.GetResult<Prisma.$EventRsvpPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many EventRsvps.
     * @param {EventRsvpCreateManyArgs} args - Arguments to create many EventRsvps.
     * @example
     * // Create many EventRsvps
     * const eventRsvp = await prisma.eventRsvp.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EventRsvpCreateManyArgs>(args?: SelectSubset<T, EventRsvpCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many EventRsvps and returns the data saved in the database.
     * @param {EventRsvpCreateManyAndReturnArgs} args - Arguments to create many EventRsvps.
     * @example
     * // Create many EventRsvps
     * const eventRsvp = await prisma.eventRsvp.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many EventRsvps and only return the `id`
     * const eventRsvpWithIdOnly = await prisma.eventRsvp.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EventRsvpCreateManyAndReturnArgs>(args?: SelectSubset<T, EventRsvpCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventRsvpPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a EventRsvp.
     * @param {EventRsvpDeleteArgs} args - Arguments to delete one EventRsvp.
     * @example
     * // Delete one EventRsvp
     * const EventRsvp = await prisma.eventRsvp.delete({
     *   where: {
     *     // ... filter to delete one EventRsvp
     *   }
     * })
     * 
     */
    delete<T extends EventRsvpDeleteArgs>(args: SelectSubset<T, EventRsvpDeleteArgs<ExtArgs>>): Prisma__EventRsvpClient<$Result.GetResult<Prisma.$EventRsvpPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one EventRsvp.
     * @param {EventRsvpUpdateArgs} args - Arguments to update one EventRsvp.
     * @example
     * // Update one EventRsvp
     * const eventRsvp = await prisma.eventRsvp.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EventRsvpUpdateArgs>(args: SelectSubset<T, EventRsvpUpdateArgs<ExtArgs>>): Prisma__EventRsvpClient<$Result.GetResult<Prisma.$EventRsvpPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more EventRsvps.
     * @param {EventRsvpDeleteManyArgs} args - Arguments to filter EventRsvps to delete.
     * @example
     * // Delete a few EventRsvps
     * const { count } = await prisma.eventRsvp.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EventRsvpDeleteManyArgs>(args?: SelectSubset<T, EventRsvpDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EventRsvps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventRsvpUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EventRsvps
     * const eventRsvp = await prisma.eventRsvp.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EventRsvpUpdateManyArgs>(args: SelectSubset<T, EventRsvpUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EventRsvps and returns the data updated in the database.
     * @param {EventRsvpUpdateManyAndReturnArgs} args - Arguments to update many EventRsvps.
     * @example
     * // Update many EventRsvps
     * const eventRsvp = await prisma.eventRsvp.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more EventRsvps and only return the `id`
     * const eventRsvpWithIdOnly = await prisma.eventRsvp.updateManyAndReturn({
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
    updateManyAndReturn<T extends EventRsvpUpdateManyAndReturnArgs>(args: SelectSubset<T, EventRsvpUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventRsvpPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one EventRsvp.
     * @param {EventRsvpUpsertArgs} args - Arguments to update or create a EventRsvp.
     * @example
     * // Update or create a EventRsvp
     * const eventRsvp = await prisma.eventRsvp.upsert({
     *   create: {
     *     // ... data to create a EventRsvp
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EventRsvp we want to update
     *   }
     * })
     */
    upsert<T extends EventRsvpUpsertArgs>(args: SelectSubset<T, EventRsvpUpsertArgs<ExtArgs>>): Prisma__EventRsvpClient<$Result.GetResult<Prisma.$EventRsvpPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of EventRsvps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventRsvpCountArgs} args - Arguments to filter EventRsvps to count.
     * @example
     * // Count the number of EventRsvps
     * const count = await prisma.eventRsvp.count({
     *   where: {
     *     // ... the filter for the EventRsvps we want to count
     *   }
     * })
    **/
    count<T extends EventRsvpCountArgs>(
      args?: Subset<T, EventRsvpCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EventRsvpCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EventRsvp.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventRsvpAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EventRsvpAggregateArgs>(args: Subset<T, EventRsvpAggregateArgs>): Prisma.PrismaPromise<GetEventRsvpAggregateType<T>>

    /**
     * Group by EventRsvp.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventRsvpGroupByArgs} args - Group by arguments.
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
      T extends EventRsvpGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EventRsvpGroupByArgs['orderBy'] }
        : { orderBy?: EventRsvpGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EventRsvpGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEventRsvpGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EventRsvp model
   */
  readonly fields: EventRsvpFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EventRsvp.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EventRsvpClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    event<T extends EventDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EventDefaultArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the EventRsvp model
   */
  interface EventRsvpFieldRefs {
    readonly id: FieldRef<"EventRsvp", 'String'>
    readonly eventId: FieldRef<"EventRsvp", 'String'>
    readonly inviteId: FieldRef<"EventRsvp", 'String'>
    readonly name: FieldRef<"EventRsvp", 'String'>
    readonly email: FieldRef<"EventRsvp", 'String'>
    readonly emailNormalized: FieldRef<"EventRsvp", 'String'>
    readonly status: FieldRef<"EventRsvp", 'RsvpStatus'>
    readonly respondedAt: FieldRef<"EventRsvp", 'DateTime'>
    readonly createdAt: FieldRef<"EventRsvp", 'DateTime'>
    readonly updatedAt: FieldRef<"EventRsvp", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * EventRsvp findUnique
   */
  export type EventRsvpFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventRsvp
     */
    select?: EventRsvpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventRsvp
     */
    omit?: EventRsvpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventRsvpInclude<ExtArgs> | null
    /**
     * Filter, which EventRsvp to fetch.
     */
    where: EventRsvpWhereUniqueInput
  }

  /**
   * EventRsvp findUniqueOrThrow
   */
  export type EventRsvpFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventRsvp
     */
    select?: EventRsvpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventRsvp
     */
    omit?: EventRsvpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventRsvpInclude<ExtArgs> | null
    /**
     * Filter, which EventRsvp to fetch.
     */
    where: EventRsvpWhereUniqueInput
  }

  /**
   * EventRsvp findFirst
   */
  export type EventRsvpFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventRsvp
     */
    select?: EventRsvpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventRsvp
     */
    omit?: EventRsvpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventRsvpInclude<ExtArgs> | null
    /**
     * Filter, which EventRsvp to fetch.
     */
    where?: EventRsvpWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventRsvps to fetch.
     */
    orderBy?: EventRsvpOrderByWithRelationInput | EventRsvpOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EventRsvps.
     */
    cursor?: EventRsvpWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventRsvps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventRsvps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EventRsvps.
     */
    distinct?: EventRsvpScalarFieldEnum | EventRsvpScalarFieldEnum[]
  }

  /**
   * EventRsvp findFirstOrThrow
   */
  export type EventRsvpFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventRsvp
     */
    select?: EventRsvpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventRsvp
     */
    omit?: EventRsvpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventRsvpInclude<ExtArgs> | null
    /**
     * Filter, which EventRsvp to fetch.
     */
    where?: EventRsvpWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventRsvps to fetch.
     */
    orderBy?: EventRsvpOrderByWithRelationInput | EventRsvpOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EventRsvps.
     */
    cursor?: EventRsvpWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventRsvps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventRsvps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EventRsvps.
     */
    distinct?: EventRsvpScalarFieldEnum | EventRsvpScalarFieldEnum[]
  }

  /**
   * EventRsvp findMany
   */
  export type EventRsvpFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventRsvp
     */
    select?: EventRsvpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventRsvp
     */
    omit?: EventRsvpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventRsvpInclude<ExtArgs> | null
    /**
     * Filter, which EventRsvps to fetch.
     */
    where?: EventRsvpWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventRsvps to fetch.
     */
    orderBy?: EventRsvpOrderByWithRelationInput | EventRsvpOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EventRsvps.
     */
    cursor?: EventRsvpWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventRsvps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventRsvps.
     */
    skip?: number
    distinct?: EventRsvpScalarFieldEnum | EventRsvpScalarFieldEnum[]
  }

  /**
   * EventRsvp create
   */
  export type EventRsvpCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventRsvp
     */
    select?: EventRsvpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventRsvp
     */
    omit?: EventRsvpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventRsvpInclude<ExtArgs> | null
    /**
     * The data needed to create a EventRsvp.
     */
    data: XOR<EventRsvpCreateInput, EventRsvpUncheckedCreateInput>
  }

  /**
   * EventRsvp createMany
   */
  export type EventRsvpCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EventRsvps.
     */
    data: EventRsvpCreateManyInput | EventRsvpCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EventRsvp createManyAndReturn
   */
  export type EventRsvpCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventRsvp
     */
    select?: EventRsvpSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EventRsvp
     */
    omit?: EventRsvpOmit<ExtArgs> | null
    /**
     * The data used to create many EventRsvps.
     */
    data: EventRsvpCreateManyInput | EventRsvpCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventRsvpIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * EventRsvp update
   */
  export type EventRsvpUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventRsvp
     */
    select?: EventRsvpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventRsvp
     */
    omit?: EventRsvpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventRsvpInclude<ExtArgs> | null
    /**
     * The data needed to update a EventRsvp.
     */
    data: XOR<EventRsvpUpdateInput, EventRsvpUncheckedUpdateInput>
    /**
     * Choose, which EventRsvp to update.
     */
    where: EventRsvpWhereUniqueInput
  }

  /**
   * EventRsvp updateMany
   */
  export type EventRsvpUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EventRsvps.
     */
    data: XOR<EventRsvpUpdateManyMutationInput, EventRsvpUncheckedUpdateManyInput>
    /**
     * Filter which EventRsvps to update
     */
    where?: EventRsvpWhereInput
    /**
     * Limit how many EventRsvps to update.
     */
    limit?: number
  }

  /**
   * EventRsvp updateManyAndReturn
   */
  export type EventRsvpUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventRsvp
     */
    select?: EventRsvpSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EventRsvp
     */
    omit?: EventRsvpOmit<ExtArgs> | null
    /**
     * The data used to update EventRsvps.
     */
    data: XOR<EventRsvpUpdateManyMutationInput, EventRsvpUncheckedUpdateManyInput>
    /**
     * Filter which EventRsvps to update
     */
    where?: EventRsvpWhereInput
    /**
     * Limit how many EventRsvps to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventRsvpIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * EventRsvp upsert
   */
  export type EventRsvpUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventRsvp
     */
    select?: EventRsvpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventRsvp
     */
    omit?: EventRsvpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventRsvpInclude<ExtArgs> | null
    /**
     * The filter to search for the EventRsvp to update in case it exists.
     */
    where: EventRsvpWhereUniqueInput
    /**
     * In case the EventRsvp found by the `where` argument doesn't exist, create a new EventRsvp with this data.
     */
    create: XOR<EventRsvpCreateInput, EventRsvpUncheckedCreateInput>
    /**
     * In case the EventRsvp was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EventRsvpUpdateInput, EventRsvpUncheckedUpdateInput>
  }

  /**
   * EventRsvp delete
   */
  export type EventRsvpDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventRsvp
     */
    select?: EventRsvpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventRsvp
     */
    omit?: EventRsvpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventRsvpInclude<ExtArgs> | null
    /**
     * Filter which EventRsvp to delete.
     */
    where: EventRsvpWhereUniqueInput
  }

  /**
   * EventRsvp deleteMany
   */
  export type EventRsvpDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EventRsvps to delete
     */
    where?: EventRsvpWhereInput
    /**
     * Limit how many EventRsvps to delete.
     */
    limit?: number
  }

  /**
   * EventRsvp without action
   */
  export type EventRsvpDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventRsvp
     */
    select?: EventRsvpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventRsvp
     */
    omit?: EventRsvpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventRsvpInclude<ExtArgs> | null
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


  export const EventScalarFieldEnum: {
    id: 'id',
    ownerUserId: 'ownerUserId',
    title: 'title',
    description: 'description',
    location: 'location',
    eventDate: 'eventDate',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type EventScalarFieldEnum = (typeof EventScalarFieldEnum)[keyof typeof EventScalarFieldEnum]


  export const EventInviteScalarFieldEnum: {
    id: 'id',
    eventId: 'eventId',
    token: 'token',
    createdAt: 'createdAt'
  };

  export type EventInviteScalarFieldEnum = (typeof EventInviteScalarFieldEnum)[keyof typeof EventInviteScalarFieldEnum]


  export const EventRsvpScalarFieldEnum: {
    id: 'id',
    eventId: 'eventId',
    inviteId: 'inviteId',
    name: 'name',
    email: 'email',
    emailNormalized: 'emailNormalized',
    status: 'status',
    respondedAt: 'respondedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type EventRsvpScalarFieldEnum = (typeof EventRsvpScalarFieldEnum)[keyof typeof EventRsvpScalarFieldEnum]


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
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'RsvpStatus'
   */
  export type EnumRsvpStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RsvpStatus'>
    


  /**
   * Reference to a field of type 'RsvpStatus[]'
   */
  export type ListEnumRsvpStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RsvpStatus[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type EventWhereInput = {
    AND?: EventWhereInput | EventWhereInput[]
    OR?: EventWhereInput[]
    NOT?: EventWhereInput | EventWhereInput[]
    id?: UuidFilter<"Event"> | string
    ownerUserId?: StringFilter<"Event"> | string
    title?: StringFilter<"Event"> | string
    description?: StringNullableFilter<"Event"> | string | null
    location?: StringNullableFilter<"Event"> | string | null
    eventDate?: DateTimeNullableFilter<"Event"> | Date | string | null
    createdAt?: DateTimeFilter<"Event"> | Date | string
    updatedAt?: DateTimeFilter<"Event"> | Date | string
    invite?: XOR<EventInviteNullableScalarRelationFilter, EventInviteWhereInput> | null
    rsvps?: EventRsvpListRelationFilter
  }

  export type EventOrderByWithRelationInput = {
    id?: SortOrder
    ownerUserId?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    eventDate?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    invite?: EventInviteOrderByWithRelationInput
    rsvps?: EventRsvpOrderByRelationAggregateInput
  }

  export type EventWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: EventWhereInput | EventWhereInput[]
    OR?: EventWhereInput[]
    NOT?: EventWhereInput | EventWhereInput[]
    ownerUserId?: StringFilter<"Event"> | string
    title?: StringFilter<"Event"> | string
    description?: StringNullableFilter<"Event"> | string | null
    location?: StringNullableFilter<"Event"> | string | null
    eventDate?: DateTimeNullableFilter<"Event"> | Date | string | null
    createdAt?: DateTimeFilter<"Event"> | Date | string
    updatedAt?: DateTimeFilter<"Event"> | Date | string
    invite?: XOR<EventInviteNullableScalarRelationFilter, EventInviteWhereInput> | null
    rsvps?: EventRsvpListRelationFilter
  }, "id">

  export type EventOrderByWithAggregationInput = {
    id?: SortOrder
    ownerUserId?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    eventDate?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: EventCountOrderByAggregateInput
    _max?: EventMaxOrderByAggregateInput
    _min?: EventMinOrderByAggregateInput
  }

  export type EventScalarWhereWithAggregatesInput = {
    AND?: EventScalarWhereWithAggregatesInput | EventScalarWhereWithAggregatesInput[]
    OR?: EventScalarWhereWithAggregatesInput[]
    NOT?: EventScalarWhereWithAggregatesInput | EventScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Event"> | string
    ownerUserId?: StringWithAggregatesFilter<"Event"> | string
    title?: StringWithAggregatesFilter<"Event"> | string
    description?: StringNullableWithAggregatesFilter<"Event"> | string | null
    location?: StringNullableWithAggregatesFilter<"Event"> | string | null
    eventDate?: DateTimeNullableWithAggregatesFilter<"Event"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Event"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Event"> | Date | string
  }

  export type EventInviteWhereInput = {
    AND?: EventInviteWhereInput | EventInviteWhereInput[]
    OR?: EventInviteWhereInput[]
    NOT?: EventInviteWhereInput | EventInviteWhereInput[]
    id?: UuidFilter<"EventInvite"> | string
    eventId?: UuidFilter<"EventInvite"> | string
    token?: StringFilter<"EventInvite"> | string
    createdAt?: DateTimeFilter<"EventInvite"> | Date | string
    event?: XOR<EventScalarRelationFilter, EventWhereInput>
  }

  export type EventInviteOrderByWithRelationInput = {
    id?: SortOrder
    eventId?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    event?: EventOrderByWithRelationInput
  }

  export type EventInviteWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    eventId?: string
    token?: string
    AND?: EventInviteWhereInput | EventInviteWhereInput[]
    OR?: EventInviteWhereInput[]
    NOT?: EventInviteWhereInput | EventInviteWhereInput[]
    createdAt?: DateTimeFilter<"EventInvite"> | Date | string
    event?: XOR<EventScalarRelationFilter, EventWhereInput>
  }, "id" | "eventId" | "token">

  export type EventInviteOrderByWithAggregationInput = {
    id?: SortOrder
    eventId?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    _count?: EventInviteCountOrderByAggregateInput
    _max?: EventInviteMaxOrderByAggregateInput
    _min?: EventInviteMinOrderByAggregateInput
  }

  export type EventInviteScalarWhereWithAggregatesInput = {
    AND?: EventInviteScalarWhereWithAggregatesInput | EventInviteScalarWhereWithAggregatesInput[]
    OR?: EventInviteScalarWhereWithAggregatesInput[]
    NOT?: EventInviteScalarWhereWithAggregatesInput | EventInviteScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"EventInvite"> | string
    eventId?: UuidWithAggregatesFilter<"EventInvite"> | string
    token?: StringWithAggregatesFilter<"EventInvite"> | string
    createdAt?: DateTimeWithAggregatesFilter<"EventInvite"> | Date | string
  }

  export type EventRsvpWhereInput = {
    AND?: EventRsvpWhereInput | EventRsvpWhereInput[]
    OR?: EventRsvpWhereInput[]
    NOT?: EventRsvpWhereInput | EventRsvpWhereInput[]
    id?: UuidFilter<"EventRsvp"> | string
    eventId?: UuidFilter<"EventRsvp"> | string
    inviteId?: UuidNullableFilter<"EventRsvp"> | string | null
    name?: StringFilter<"EventRsvp"> | string
    email?: StringFilter<"EventRsvp"> | string
    emailNormalized?: StringFilter<"EventRsvp"> | string
    status?: EnumRsvpStatusFilter<"EventRsvp"> | $Enums.RsvpStatus
    respondedAt?: DateTimeFilter<"EventRsvp"> | Date | string
    createdAt?: DateTimeFilter<"EventRsvp"> | Date | string
    updatedAt?: DateTimeFilter<"EventRsvp"> | Date | string
    event?: XOR<EventScalarRelationFilter, EventWhereInput>
  }

  export type EventRsvpOrderByWithRelationInput = {
    id?: SortOrder
    eventId?: SortOrder
    inviteId?: SortOrderInput | SortOrder
    name?: SortOrder
    email?: SortOrder
    emailNormalized?: SortOrder
    status?: SortOrder
    respondedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    event?: EventOrderByWithRelationInput
  }

  export type EventRsvpWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    eventId_emailNormalized?: EventRsvpEventIdEmailNormalizedCompoundUniqueInput
    AND?: EventRsvpWhereInput | EventRsvpWhereInput[]
    OR?: EventRsvpWhereInput[]
    NOT?: EventRsvpWhereInput | EventRsvpWhereInput[]
    eventId?: UuidFilter<"EventRsvp"> | string
    inviteId?: UuidNullableFilter<"EventRsvp"> | string | null
    name?: StringFilter<"EventRsvp"> | string
    email?: StringFilter<"EventRsvp"> | string
    emailNormalized?: StringFilter<"EventRsvp"> | string
    status?: EnumRsvpStatusFilter<"EventRsvp"> | $Enums.RsvpStatus
    respondedAt?: DateTimeFilter<"EventRsvp"> | Date | string
    createdAt?: DateTimeFilter<"EventRsvp"> | Date | string
    updatedAt?: DateTimeFilter<"EventRsvp"> | Date | string
    event?: XOR<EventScalarRelationFilter, EventWhereInput>
  }, "id" | "eventId_emailNormalized">

  export type EventRsvpOrderByWithAggregationInput = {
    id?: SortOrder
    eventId?: SortOrder
    inviteId?: SortOrderInput | SortOrder
    name?: SortOrder
    email?: SortOrder
    emailNormalized?: SortOrder
    status?: SortOrder
    respondedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: EventRsvpCountOrderByAggregateInput
    _max?: EventRsvpMaxOrderByAggregateInput
    _min?: EventRsvpMinOrderByAggregateInput
  }

  export type EventRsvpScalarWhereWithAggregatesInput = {
    AND?: EventRsvpScalarWhereWithAggregatesInput | EventRsvpScalarWhereWithAggregatesInput[]
    OR?: EventRsvpScalarWhereWithAggregatesInput[]
    NOT?: EventRsvpScalarWhereWithAggregatesInput | EventRsvpScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"EventRsvp"> | string
    eventId?: UuidWithAggregatesFilter<"EventRsvp"> | string
    inviteId?: UuidNullableWithAggregatesFilter<"EventRsvp"> | string | null
    name?: StringWithAggregatesFilter<"EventRsvp"> | string
    email?: StringWithAggregatesFilter<"EventRsvp"> | string
    emailNormalized?: StringWithAggregatesFilter<"EventRsvp"> | string
    status?: EnumRsvpStatusWithAggregatesFilter<"EventRsvp"> | $Enums.RsvpStatus
    respondedAt?: DateTimeWithAggregatesFilter<"EventRsvp"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"EventRsvp"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"EventRsvp"> | Date | string
  }

  export type EventCreateInput = {
    id?: string
    ownerUserId: string
    title: string
    description?: string | null
    location?: string | null
    eventDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    invite?: EventInviteCreateNestedOneWithoutEventInput
    rsvps?: EventRsvpCreateNestedManyWithoutEventInput
  }

  export type EventUncheckedCreateInput = {
    id?: string
    ownerUserId: string
    title: string
    description?: string | null
    location?: string | null
    eventDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    invite?: EventInviteUncheckedCreateNestedOneWithoutEventInput
    rsvps?: EventRsvpUncheckedCreateNestedManyWithoutEventInput
  }

  export type EventUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    ownerUserId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    eventDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    invite?: EventInviteUpdateOneWithoutEventNestedInput
    rsvps?: EventRsvpUpdateManyWithoutEventNestedInput
  }

  export type EventUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    ownerUserId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    eventDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    invite?: EventInviteUncheckedUpdateOneWithoutEventNestedInput
    rsvps?: EventRsvpUncheckedUpdateManyWithoutEventNestedInput
  }

  export type EventCreateManyInput = {
    id?: string
    ownerUserId: string
    title: string
    description?: string | null
    location?: string | null
    eventDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EventUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    ownerUserId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    eventDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    ownerUserId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    eventDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventInviteCreateInput = {
    id?: string
    token: string
    createdAt?: Date | string
    event: EventCreateNestedOneWithoutInviteInput
  }

  export type EventInviteUncheckedCreateInput = {
    id?: string
    eventId: string
    token: string
    createdAt?: Date | string
  }

  export type EventInviteUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    event?: EventUpdateOneRequiredWithoutInviteNestedInput
  }

  export type EventInviteUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventInviteCreateManyInput = {
    id?: string
    eventId: string
    token: string
    createdAt?: Date | string
  }

  export type EventInviteUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventInviteUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventRsvpCreateInput = {
    id?: string
    inviteId?: string | null
    name: string
    email: string
    emailNormalized: string
    status: $Enums.RsvpStatus
    respondedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    event: EventCreateNestedOneWithoutRsvpsInput
  }

  export type EventRsvpUncheckedCreateInput = {
    id?: string
    eventId: string
    inviteId?: string | null
    name: string
    email: string
    emailNormalized: string
    status: $Enums.RsvpStatus
    respondedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EventRsvpUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    inviteId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailNormalized?: StringFieldUpdateOperationsInput | string
    status?: EnumRsvpStatusFieldUpdateOperationsInput | $Enums.RsvpStatus
    respondedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    event?: EventUpdateOneRequiredWithoutRsvpsNestedInput
  }

  export type EventRsvpUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    inviteId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailNormalized?: StringFieldUpdateOperationsInput | string
    status?: EnumRsvpStatusFieldUpdateOperationsInput | $Enums.RsvpStatus
    respondedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventRsvpCreateManyInput = {
    id?: string
    eventId: string
    inviteId?: string | null
    name: string
    email: string
    emailNormalized: string
    status: $Enums.RsvpStatus
    respondedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EventRsvpUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    inviteId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailNormalized?: StringFieldUpdateOperationsInput | string
    status?: EnumRsvpStatusFieldUpdateOperationsInput | $Enums.RsvpStatus
    respondedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventRsvpUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    inviteId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailNormalized?: StringFieldUpdateOperationsInput | string
    status?: EnumRsvpStatusFieldUpdateOperationsInput | $Enums.RsvpStatus
    respondedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type EventInviteNullableScalarRelationFilter = {
    is?: EventInviteWhereInput | null
    isNot?: EventInviteWhereInput | null
  }

  export type EventRsvpListRelationFilter = {
    every?: EventRsvpWhereInput
    some?: EventRsvpWhereInput
    none?: EventRsvpWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type EventRsvpOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EventCountOrderByAggregateInput = {
    id?: SortOrder
    ownerUserId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    location?: SortOrder
    eventDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EventMaxOrderByAggregateInput = {
    id?: SortOrder
    ownerUserId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    location?: SortOrder
    eventDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EventMinOrderByAggregateInput = {
    id?: SortOrder
    ownerUserId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    location?: SortOrder
    eventDate?: SortOrder
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

  export type EventScalarRelationFilter = {
    is?: EventWhereInput
    isNot?: EventWhereInput
  }

  export type EventInviteCountOrderByAggregateInput = {
    id?: SortOrder
    eventId?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
  }

  export type EventInviteMaxOrderByAggregateInput = {
    id?: SortOrder
    eventId?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
  }

  export type EventInviteMinOrderByAggregateInput = {
    id?: SortOrder
    eventId?: SortOrder
    token?: SortOrder
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

  export type EnumRsvpStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.RsvpStatus | EnumRsvpStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RsvpStatus[] | ListEnumRsvpStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RsvpStatus[] | ListEnumRsvpStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRsvpStatusFilter<$PrismaModel> | $Enums.RsvpStatus
  }

  export type EventRsvpEventIdEmailNormalizedCompoundUniqueInput = {
    eventId: string
    emailNormalized: string
  }

  export type EventRsvpCountOrderByAggregateInput = {
    id?: SortOrder
    eventId?: SortOrder
    inviteId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailNormalized?: SortOrder
    status?: SortOrder
    respondedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EventRsvpMaxOrderByAggregateInput = {
    id?: SortOrder
    eventId?: SortOrder
    inviteId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailNormalized?: SortOrder
    status?: SortOrder
    respondedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EventRsvpMinOrderByAggregateInput = {
    id?: SortOrder
    eventId?: SortOrder
    inviteId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailNormalized?: SortOrder
    status?: SortOrder
    respondedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type EnumRsvpStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RsvpStatus | EnumRsvpStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RsvpStatus[] | ListEnumRsvpStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RsvpStatus[] | ListEnumRsvpStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRsvpStatusWithAggregatesFilter<$PrismaModel> | $Enums.RsvpStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRsvpStatusFilter<$PrismaModel>
    _max?: NestedEnumRsvpStatusFilter<$PrismaModel>
  }

  export type EventInviteCreateNestedOneWithoutEventInput = {
    create?: XOR<EventInviteCreateWithoutEventInput, EventInviteUncheckedCreateWithoutEventInput>
    connectOrCreate?: EventInviteCreateOrConnectWithoutEventInput
    connect?: EventInviteWhereUniqueInput
  }

  export type EventRsvpCreateNestedManyWithoutEventInput = {
    create?: XOR<EventRsvpCreateWithoutEventInput, EventRsvpUncheckedCreateWithoutEventInput> | EventRsvpCreateWithoutEventInput[] | EventRsvpUncheckedCreateWithoutEventInput[]
    connectOrCreate?: EventRsvpCreateOrConnectWithoutEventInput | EventRsvpCreateOrConnectWithoutEventInput[]
    createMany?: EventRsvpCreateManyEventInputEnvelope
    connect?: EventRsvpWhereUniqueInput | EventRsvpWhereUniqueInput[]
  }

  export type EventInviteUncheckedCreateNestedOneWithoutEventInput = {
    create?: XOR<EventInviteCreateWithoutEventInput, EventInviteUncheckedCreateWithoutEventInput>
    connectOrCreate?: EventInviteCreateOrConnectWithoutEventInput
    connect?: EventInviteWhereUniqueInput
  }

  export type EventRsvpUncheckedCreateNestedManyWithoutEventInput = {
    create?: XOR<EventRsvpCreateWithoutEventInput, EventRsvpUncheckedCreateWithoutEventInput> | EventRsvpCreateWithoutEventInput[] | EventRsvpUncheckedCreateWithoutEventInput[]
    connectOrCreate?: EventRsvpCreateOrConnectWithoutEventInput | EventRsvpCreateOrConnectWithoutEventInput[]
    createMany?: EventRsvpCreateManyEventInputEnvelope
    connect?: EventRsvpWhereUniqueInput | EventRsvpWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type EventInviteUpdateOneWithoutEventNestedInput = {
    create?: XOR<EventInviteCreateWithoutEventInput, EventInviteUncheckedCreateWithoutEventInput>
    connectOrCreate?: EventInviteCreateOrConnectWithoutEventInput
    upsert?: EventInviteUpsertWithoutEventInput
    disconnect?: EventInviteWhereInput | boolean
    delete?: EventInviteWhereInput | boolean
    connect?: EventInviteWhereUniqueInput
    update?: XOR<XOR<EventInviteUpdateToOneWithWhereWithoutEventInput, EventInviteUpdateWithoutEventInput>, EventInviteUncheckedUpdateWithoutEventInput>
  }

  export type EventRsvpUpdateManyWithoutEventNestedInput = {
    create?: XOR<EventRsvpCreateWithoutEventInput, EventRsvpUncheckedCreateWithoutEventInput> | EventRsvpCreateWithoutEventInput[] | EventRsvpUncheckedCreateWithoutEventInput[]
    connectOrCreate?: EventRsvpCreateOrConnectWithoutEventInput | EventRsvpCreateOrConnectWithoutEventInput[]
    upsert?: EventRsvpUpsertWithWhereUniqueWithoutEventInput | EventRsvpUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: EventRsvpCreateManyEventInputEnvelope
    set?: EventRsvpWhereUniqueInput | EventRsvpWhereUniqueInput[]
    disconnect?: EventRsvpWhereUniqueInput | EventRsvpWhereUniqueInput[]
    delete?: EventRsvpWhereUniqueInput | EventRsvpWhereUniqueInput[]
    connect?: EventRsvpWhereUniqueInput | EventRsvpWhereUniqueInput[]
    update?: EventRsvpUpdateWithWhereUniqueWithoutEventInput | EventRsvpUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: EventRsvpUpdateManyWithWhereWithoutEventInput | EventRsvpUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: EventRsvpScalarWhereInput | EventRsvpScalarWhereInput[]
  }

  export type EventInviteUncheckedUpdateOneWithoutEventNestedInput = {
    create?: XOR<EventInviteCreateWithoutEventInput, EventInviteUncheckedCreateWithoutEventInput>
    connectOrCreate?: EventInviteCreateOrConnectWithoutEventInput
    upsert?: EventInviteUpsertWithoutEventInput
    disconnect?: EventInviteWhereInput | boolean
    delete?: EventInviteWhereInput | boolean
    connect?: EventInviteWhereUniqueInput
    update?: XOR<XOR<EventInviteUpdateToOneWithWhereWithoutEventInput, EventInviteUpdateWithoutEventInput>, EventInviteUncheckedUpdateWithoutEventInput>
  }

  export type EventRsvpUncheckedUpdateManyWithoutEventNestedInput = {
    create?: XOR<EventRsvpCreateWithoutEventInput, EventRsvpUncheckedCreateWithoutEventInput> | EventRsvpCreateWithoutEventInput[] | EventRsvpUncheckedCreateWithoutEventInput[]
    connectOrCreate?: EventRsvpCreateOrConnectWithoutEventInput | EventRsvpCreateOrConnectWithoutEventInput[]
    upsert?: EventRsvpUpsertWithWhereUniqueWithoutEventInput | EventRsvpUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: EventRsvpCreateManyEventInputEnvelope
    set?: EventRsvpWhereUniqueInput | EventRsvpWhereUniqueInput[]
    disconnect?: EventRsvpWhereUniqueInput | EventRsvpWhereUniqueInput[]
    delete?: EventRsvpWhereUniqueInput | EventRsvpWhereUniqueInput[]
    connect?: EventRsvpWhereUniqueInput | EventRsvpWhereUniqueInput[]
    update?: EventRsvpUpdateWithWhereUniqueWithoutEventInput | EventRsvpUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: EventRsvpUpdateManyWithWhereWithoutEventInput | EventRsvpUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: EventRsvpScalarWhereInput | EventRsvpScalarWhereInput[]
  }

  export type EventCreateNestedOneWithoutInviteInput = {
    create?: XOR<EventCreateWithoutInviteInput, EventUncheckedCreateWithoutInviteInput>
    connectOrCreate?: EventCreateOrConnectWithoutInviteInput
    connect?: EventWhereUniqueInput
  }

  export type EventUpdateOneRequiredWithoutInviteNestedInput = {
    create?: XOR<EventCreateWithoutInviteInput, EventUncheckedCreateWithoutInviteInput>
    connectOrCreate?: EventCreateOrConnectWithoutInviteInput
    upsert?: EventUpsertWithoutInviteInput
    connect?: EventWhereUniqueInput
    update?: XOR<XOR<EventUpdateToOneWithWhereWithoutInviteInput, EventUpdateWithoutInviteInput>, EventUncheckedUpdateWithoutInviteInput>
  }

  export type EventCreateNestedOneWithoutRsvpsInput = {
    create?: XOR<EventCreateWithoutRsvpsInput, EventUncheckedCreateWithoutRsvpsInput>
    connectOrCreate?: EventCreateOrConnectWithoutRsvpsInput
    connect?: EventWhereUniqueInput
  }

  export type EnumRsvpStatusFieldUpdateOperationsInput = {
    set?: $Enums.RsvpStatus
  }

  export type EventUpdateOneRequiredWithoutRsvpsNestedInput = {
    create?: XOR<EventCreateWithoutRsvpsInput, EventUncheckedCreateWithoutRsvpsInput>
    connectOrCreate?: EventCreateOrConnectWithoutRsvpsInput
    upsert?: EventUpsertWithoutRsvpsInput
    connect?: EventWhereUniqueInput
    update?: XOR<XOR<EventUpdateToOneWithWhereWithoutRsvpsInput, EventUpdateWithoutRsvpsInput>, EventUncheckedUpdateWithoutRsvpsInput>
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

  export type NestedEnumRsvpStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.RsvpStatus | EnumRsvpStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RsvpStatus[] | ListEnumRsvpStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RsvpStatus[] | ListEnumRsvpStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRsvpStatusFilter<$PrismaModel> | $Enums.RsvpStatus
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

  export type NestedEnumRsvpStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RsvpStatus | EnumRsvpStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RsvpStatus[] | ListEnumRsvpStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RsvpStatus[] | ListEnumRsvpStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRsvpStatusWithAggregatesFilter<$PrismaModel> | $Enums.RsvpStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRsvpStatusFilter<$PrismaModel>
    _max?: NestedEnumRsvpStatusFilter<$PrismaModel>
  }

  export type EventInviteCreateWithoutEventInput = {
    id?: string
    token: string
    createdAt?: Date | string
  }

  export type EventInviteUncheckedCreateWithoutEventInput = {
    id?: string
    token: string
    createdAt?: Date | string
  }

  export type EventInviteCreateOrConnectWithoutEventInput = {
    where: EventInviteWhereUniqueInput
    create: XOR<EventInviteCreateWithoutEventInput, EventInviteUncheckedCreateWithoutEventInput>
  }

  export type EventRsvpCreateWithoutEventInput = {
    id?: string
    inviteId?: string | null
    name: string
    email: string
    emailNormalized: string
    status: $Enums.RsvpStatus
    respondedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EventRsvpUncheckedCreateWithoutEventInput = {
    id?: string
    inviteId?: string | null
    name: string
    email: string
    emailNormalized: string
    status: $Enums.RsvpStatus
    respondedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EventRsvpCreateOrConnectWithoutEventInput = {
    where: EventRsvpWhereUniqueInput
    create: XOR<EventRsvpCreateWithoutEventInput, EventRsvpUncheckedCreateWithoutEventInput>
  }

  export type EventRsvpCreateManyEventInputEnvelope = {
    data: EventRsvpCreateManyEventInput | EventRsvpCreateManyEventInput[]
    skipDuplicates?: boolean
  }

  export type EventInviteUpsertWithoutEventInput = {
    update: XOR<EventInviteUpdateWithoutEventInput, EventInviteUncheckedUpdateWithoutEventInput>
    create: XOR<EventInviteCreateWithoutEventInput, EventInviteUncheckedCreateWithoutEventInput>
    where?: EventInviteWhereInput
  }

  export type EventInviteUpdateToOneWithWhereWithoutEventInput = {
    where?: EventInviteWhereInput
    data: XOR<EventInviteUpdateWithoutEventInput, EventInviteUncheckedUpdateWithoutEventInput>
  }

  export type EventInviteUpdateWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventInviteUncheckedUpdateWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventRsvpUpsertWithWhereUniqueWithoutEventInput = {
    where: EventRsvpWhereUniqueInput
    update: XOR<EventRsvpUpdateWithoutEventInput, EventRsvpUncheckedUpdateWithoutEventInput>
    create: XOR<EventRsvpCreateWithoutEventInput, EventRsvpUncheckedCreateWithoutEventInput>
  }

  export type EventRsvpUpdateWithWhereUniqueWithoutEventInput = {
    where: EventRsvpWhereUniqueInput
    data: XOR<EventRsvpUpdateWithoutEventInput, EventRsvpUncheckedUpdateWithoutEventInput>
  }

  export type EventRsvpUpdateManyWithWhereWithoutEventInput = {
    where: EventRsvpScalarWhereInput
    data: XOR<EventRsvpUpdateManyMutationInput, EventRsvpUncheckedUpdateManyWithoutEventInput>
  }

  export type EventRsvpScalarWhereInput = {
    AND?: EventRsvpScalarWhereInput | EventRsvpScalarWhereInput[]
    OR?: EventRsvpScalarWhereInput[]
    NOT?: EventRsvpScalarWhereInput | EventRsvpScalarWhereInput[]
    id?: UuidFilter<"EventRsvp"> | string
    eventId?: UuidFilter<"EventRsvp"> | string
    inviteId?: UuidNullableFilter<"EventRsvp"> | string | null
    name?: StringFilter<"EventRsvp"> | string
    email?: StringFilter<"EventRsvp"> | string
    emailNormalized?: StringFilter<"EventRsvp"> | string
    status?: EnumRsvpStatusFilter<"EventRsvp"> | $Enums.RsvpStatus
    respondedAt?: DateTimeFilter<"EventRsvp"> | Date | string
    createdAt?: DateTimeFilter<"EventRsvp"> | Date | string
    updatedAt?: DateTimeFilter<"EventRsvp"> | Date | string
  }

  export type EventCreateWithoutInviteInput = {
    id?: string
    ownerUserId: string
    title: string
    description?: string | null
    location?: string | null
    eventDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    rsvps?: EventRsvpCreateNestedManyWithoutEventInput
  }

  export type EventUncheckedCreateWithoutInviteInput = {
    id?: string
    ownerUserId: string
    title: string
    description?: string | null
    location?: string | null
    eventDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    rsvps?: EventRsvpUncheckedCreateNestedManyWithoutEventInput
  }

  export type EventCreateOrConnectWithoutInviteInput = {
    where: EventWhereUniqueInput
    create: XOR<EventCreateWithoutInviteInput, EventUncheckedCreateWithoutInviteInput>
  }

  export type EventUpsertWithoutInviteInput = {
    update: XOR<EventUpdateWithoutInviteInput, EventUncheckedUpdateWithoutInviteInput>
    create: XOR<EventCreateWithoutInviteInput, EventUncheckedCreateWithoutInviteInput>
    where?: EventWhereInput
  }

  export type EventUpdateToOneWithWhereWithoutInviteInput = {
    where?: EventWhereInput
    data: XOR<EventUpdateWithoutInviteInput, EventUncheckedUpdateWithoutInviteInput>
  }

  export type EventUpdateWithoutInviteInput = {
    id?: StringFieldUpdateOperationsInput | string
    ownerUserId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    eventDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rsvps?: EventRsvpUpdateManyWithoutEventNestedInput
  }

  export type EventUncheckedUpdateWithoutInviteInput = {
    id?: StringFieldUpdateOperationsInput | string
    ownerUserId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    eventDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rsvps?: EventRsvpUncheckedUpdateManyWithoutEventNestedInput
  }

  export type EventCreateWithoutRsvpsInput = {
    id?: string
    ownerUserId: string
    title: string
    description?: string | null
    location?: string | null
    eventDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    invite?: EventInviteCreateNestedOneWithoutEventInput
  }

  export type EventUncheckedCreateWithoutRsvpsInput = {
    id?: string
    ownerUserId: string
    title: string
    description?: string | null
    location?: string | null
    eventDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    invite?: EventInviteUncheckedCreateNestedOneWithoutEventInput
  }

  export type EventCreateOrConnectWithoutRsvpsInput = {
    where: EventWhereUniqueInput
    create: XOR<EventCreateWithoutRsvpsInput, EventUncheckedCreateWithoutRsvpsInput>
  }

  export type EventUpsertWithoutRsvpsInput = {
    update: XOR<EventUpdateWithoutRsvpsInput, EventUncheckedUpdateWithoutRsvpsInput>
    create: XOR<EventCreateWithoutRsvpsInput, EventUncheckedCreateWithoutRsvpsInput>
    where?: EventWhereInput
  }

  export type EventUpdateToOneWithWhereWithoutRsvpsInput = {
    where?: EventWhereInput
    data: XOR<EventUpdateWithoutRsvpsInput, EventUncheckedUpdateWithoutRsvpsInput>
  }

  export type EventUpdateWithoutRsvpsInput = {
    id?: StringFieldUpdateOperationsInput | string
    ownerUserId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    eventDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    invite?: EventInviteUpdateOneWithoutEventNestedInput
  }

  export type EventUncheckedUpdateWithoutRsvpsInput = {
    id?: StringFieldUpdateOperationsInput | string
    ownerUserId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    eventDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    invite?: EventInviteUncheckedUpdateOneWithoutEventNestedInput
  }

  export type EventRsvpCreateManyEventInput = {
    id?: string
    inviteId?: string | null
    name: string
    email: string
    emailNormalized: string
    status: $Enums.RsvpStatus
    respondedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EventRsvpUpdateWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    inviteId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailNormalized?: StringFieldUpdateOperationsInput | string
    status?: EnumRsvpStatusFieldUpdateOperationsInput | $Enums.RsvpStatus
    respondedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventRsvpUncheckedUpdateWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    inviteId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailNormalized?: StringFieldUpdateOperationsInput | string
    status?: EnumRsvpStatusFieldUpdateOperationsInput | $Enums.RsvpStatus
    respondedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventRsvpUncheckedUpdateManyWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    inviteId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailNormalized?: StringFieldUpdateOperationsInput | string
    status?: EnumRsvpStatusFieldUpdateOperationsInput | $Enums.RsvpStatus
    respondedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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
