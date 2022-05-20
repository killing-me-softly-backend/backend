import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
export type Maybe<T> = T;
export type InputMaybe<T> = T;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export interface Scalars {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  BigInt: number;
  ZonedDateTime: Date;
}

export interface AbstractItem {
  classification?: Maybe<ClassificationEnum>;
  container?: Maybe<Container>;
  createdBy: Scalars['String'];
  creationTime: Scalars['ZonedDateTime'];
  id: Scalars['String'];
  isClassified?: Maybe<Scalars['Boolean']>;
  isDeleted?: Maybe<Scalars['Boolean']>;
  lastUpdateBy?: Maybe<Scalars['String']>;
  lastUpdateTime?: Maybe<Scalars['ZonedDateTime']>;
  name?: Maybe<Scalars['String']>;
  realityId: Scalars['Int'];
  secGroups?: Maybe<Array<Maybe<Scalars['String']>>>;
}

export interface BaseEntity {
  classification?: Maybe<ClassificationEnum>;
  createdBy: Scalars['String'];
  creationTime: Scalars['ZonedDateTime'];
  id: Scalars['String'];
  isClassified?: Maybe<Scalars['Boolean']>;
  isDeleted?: Maybe<Scalars['Boolean']>;
  lastUpdateBy?: Maybe<Scalars['String']>;
  lastUpdateTime?: Maybe<Scalars['ZonedDateTime']>;
  realityId: Scalars['Int'];
  secGroups?: Maybe<Array<Maybe<Scalars['String']>>>;
}

export interface Cat {
  __typename?: 'Cat';
  age?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  owner?: Maybe<Owner>;
  type?: Maybe<CatTypeEnum>;
}

export enum CatTypeEnum {
  Type1 = 'TYPE1',
  Type2 = 'TYPE2',
  Type3 = 'TYPE3'
}

export enum ClassificationEnum {
  Confid = 'CONFID',
  Intel = 'INTEL',
  Sec = 'SEC',
  Sensi = 'SENSI',
  Tsec = 'TSEC',
  Unclas = 'UNCLAS'
}

export interface Container extends BaseEntity {
  __typename?: 'Container';
  classification?: Maybe<ClassificationEnum>;
  createdBy: Scalars['String'];
  creationTime: Scalars['ZonedDateTime'];
  id: Scalars['String'];
  isClassified?: Maybe<Scalars['Boolean']>;
  isDeleted?: Maybe<Scalars['Boolean']>;
  items?: Maybe<Array<Maybe<Item>>>;
  lastUpdateBy?: Maybe<Scalars['String']>;
  lastUpdateTime?: Maybe<Scalars['ZonedDateTime']>;
  location: StorageLocationsEnum;
  realityId: Scalars['Int'];
  secGroups?: Maybe<Array<Maybe<Scalars['String']>>>;
}

export interface ContainersFilter {
  byLocation?: InputMaybe<Array<InputMaybe<StorageLocationsEnum>>>;
}

export interface CreateCatInput {
  age?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  ownerId?: InputMaybe<Scalars['Int']>;
  type?: InputMaybe<CatTypeEnum>;
}

export type Item = OfficeEquipment | OfficeFurniture | Software;

export enum ItemTypes {
  OfficeEquipment = 'OFFICE_EQUIPMENT',
  OfficeFurniture = 'OFFICE_FURNITURE',
  Software = 'SOFTWARE'
}

export interface MoveItem {
  container_id?: InputMaybe<Scalars['String']>;
  item_id?: InputMaybe<Scalars['String']>;
}

export interface Mutation {
  __typename?: 'Mutation';
  createCat?: Maybe<Array<Maybe<Cat>>>;
  moveItems?: Maybe<Array<Maybe<Item>>>;
  /** Returns the ID's that were deleted succesfully */
  removeItems?: Maybe<Array<Maybe<Scalars['String']>>>;
  /**
   * INSERT or UPDATE OfficeEquipment.
   * If the input object has an ID field then it's considered upsert, otherwise it's considered insert.
   * You can do both INSERTs and UPDATEs in the same request
   */
  upsertOfficeEquipment?: Maybe<Array<Maybe<OfficeEquipment>>>;
}


export interface MutationCreateCatArgs {
  createCatInput?: InputMaybe<Array<InputMaybe<CreateCatInput>>>;
}


export interface MutationMoveItemsArgs {
  input?: InputMaybe<Array<InputMaybe<MoveItem>>>;
}


export interface MutationRemoveItemsArgs {
  input?: InputMaybe<RemoveItems>;
}


export interface MutationUpsertOfficeEquipmentArgs {
  input?: InputMaybe<Array<InputMaybe<UpsertOfficeEquipment>>>;
}

export interface OfficeEquipment extends AbstractItem {
  __typename?: 'OfficeEquipment';
  classification?: Maybe<ClassificationEnum>;
  container?: Maybe<Container>;
  createdBy: Scalars['String'];
  creationTime: Scalars['ZonedDateTime'];
  id: Scalars['String'];
  isClassified?: Maybe<Scalars['Boolean']>;
  isDeleted?: Maybe<Scalars['Boolean']>;
  isFragile?: Maybe<Scalars['Boolean']>;
  lastUpdateBy?: Maybe<Scalars['String']>;
  lastUpdateTime?: Maybe<Scalars['ZonedDateTime']>;
  name?: Maybe<Scalars['String']>;
  realityId: Scalars['Int'];
  secGroups?: Maybe<Array<Maybe<Scalars['String']>>>;
}

export interface OfficeFurniture extends AbstractItem {
  __typename?: 'OfficeFurniture';
  classification?: Maybe<ClassificationEnum>;
  container?: Maybe<Container>;
  createdBy: Scalars['String'];
  creationTime: Scalars['ZonedDateTime'];
  id: Scalars['String'];
  isClassified?: Maybe<Scalars['Boolean']>;
  isDeleted?: Maybe<Scalars['Boolean']>;
  isWood?: Maybe<Scalars['Boolean']>;
  lastUpdateBy?: Maybe<Scalars['String']>;
  lastUpdateTime?: Maybe<Scalars['ZonedDateTime']>;
  name?: Maybe<Scalars['String']>;
  realityId: Scalars['Int'];
  secGroups?: Maybe<Array<Maybe<Scalars['String']>>>;
}

export interface Owner {
  __typename?: 'Owner';
  age?: Maybe<Scalars['Int']>;
  cats?: Maybe<Array<Cat>>;
  id: Scalars['Int'];
  name: Scalars['String'];
}

export interface Query {
  __typename?: 'Query';
  cat?: Maybe<Cat>;
  cats?: Maybe<Array<Maybe<Cat>>>;
  containers: Array<Maybe<Container>>;
  items: Array<Maybe<Item>>;
}


export interface QueryCatArgs {
  id: Scalars['ID'];
}


export interface QueryContainersArgs {
  filter?: InputMaybe<ContainersFilter>;
}

export interface RemoveItems {
  /**
   * When some of the input ID's cannot be deleted (such that they don't exists, etc.):
   * When set to TRUE, delets what possible, if FALSE delets nothing.
   * Default: TRUE
   */
  allowPartialDelete?: InputMaybe<Scalars['Boolean']>;
  ids: Array<Scalars['String']>;
}

export interface Software extends AbstractItem {
  __typename?: 'Software';
  classification?: Maybe<ClassificationEnum>;
  container?: Maybe<Container>;
  createdBy: Scalars['String'];
  creationTime: Scalars['ZonedDateTime'];
  id: Scalars['String'];
  isClassified?: Maybe<Scalars['Boolean']>;
  isDeleted?: Maybe<Scalars['Boolean']>;
  isOpenSource?: Maybe<Scalars['Boolean']>;
  lastUpdateBy?: Maybe<Scalars['String']>;
  lastUpdateTime?: Maybe<Scalars['ZonedDateTime']>;
  name?: Maybe<Scalars['String']>;
  realityId: Scalars['Int'];
  secGroups?: Maybe<Array<Maybe<Scalars['String']>>>;
}

export enum StorageLocationsEnum {
  Center = 'CENTER',
  North = 'NORTH',
  South = 'SOUTH'
}

export interface Subscription {
  __typename?: 'Subscription';
  catCreated?: Maybe<Cat>;
}

export interface UpsertOfficeEquipment {
  classification?: InputMaybe<ClassificationEnum>;
  container_id?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  isClassified?: InputMaybe<Scalars['Boolean']>;
  isFragile?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  realityId?: InputMaybe<Scalars['Int']>;
  secGroups?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
}



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  AbstractItem: ResolversTypes['OfficeEquipment'] | ResolversTypes['OfficeFurniture'] | ResolversTypes['Software'];
  BaseEntity: ResolversTypes['Container'];
  BigInt: ResolverTypeWrapper<Scalars['BigInt']>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Cat: ResolverTypeWrapper<Cat>;
  CatTypeEnum: CatTypeEnum;
  ClassificationEnum: ClassificationEnum;
  Container: ResolverTypeWrapper<Omit<Container, 'items'> & { items?: Maybe<Array<Maybe<ResolversTypes['Item']>>> }>;
  ContainersFilter: ContainersFilter;
  CreateCatInput: CreateCatInput;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Item: ResolversTypes['OfficeEquipment'] | ResolversTypes['OfficeFurniture'] | ResolversTypes['Software'];
  ItemTypes: ItemTypes;
  MoveItem: MoveItem;
  Mutation: ResolverTypeWrapper<{}>;
  OfficeEquipment: ResolverTypeWrapper<OfficeEquipment>;
  OfficeFurniture: ResolverTypeWrapper<OfficeFurniture>;
  Owner: ResolverTypeWrapper<Owner>;
  Query: ResolverTypeWrapper<{}>;
  RemoveItems: RemoveItems;
  Software: ResolverTypeWrapper<Software>;
  StorageLocationsEnum: StorageLocationsEnum;
  String: ResolverTypeWrapper<Scalars['String']>;
  Subscription: ResolverTypeWrapper<{}>;
  UpsertOfficeEquipment: UpsertOfficeEquipment;
  ZonedDateTime: ResolverTypeWrapper<Scalars['ZonedDateTime']>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  AbstractItem: ResolversParentTypes['OfficeEquipment'] | ResolversParentTypes['OfficeFurniture'] | ResolversParentTypes['Software'];
  BaseEntity: ResolversParentTypes['Container'];
  BigInt: Scalars['BigInt'];
  Boolean: Scalars['Boolean'];
  Cat: Cat;
  Container: Omit<Container, 'items'> & { items?: Maybe<Array<Maybe<ResolversParentTypes['Item']>>> };
  ContainersFilter: ContainersFilter;
  CreateCatInput: CreateCatInput;
  ID: Scalars['ID'];
  Int: Scalars['Int'];
  Item: ResolversParentTypes['OfficeEquipment'] | ResolversParentTypes['OfficeFurniture'] | ResolversParentTypes['Software'];
  MoveItem: MoveItem;
  Mutation: {};
  OfficeEquipment: OfficeEquipment;
  OfficeFurniture: OfficeFurniture;
  Owner: Owner;
  Query: {};
  RemoveItems: RemoveItems;
  Software: Software;
  String: Scalars['String'];
  Subscription: {};
  UpsertOfficeEquipment: UpsertOfficeEquipment;
  ZonedDateTime: Scalars['ZonedDateTime'];
};

export type AbstractItemResolvers<ContextType = any, ParentType extends ResolversParentTypes['AbstractItem'] = ResolversParentTypes['AbstractItem']> = {
  __resolveType: TypeResolveFn<'OfficeEquipment' | 'OfficeFurniture' | 'Software', ParentType, ContextType>;
  classification?: Resolver<Maybe<ResolversTypes['ClassificationEnum']>, ParentType, ContextType>;
  container?: Resolver<Maybe<ResolversTypes['Container']>, ParentType, ContextType>;
  createdBy?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  creationTime?: Resolver<ResolversTypes['ZonedDateTime'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  isClassified?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  isDeleted?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  lastUpdateBy?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  lastUpdateTime?: Resolver<Maybe<ResolversTypes['ZonedDateTime']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  realityId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  secGroups?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
};

export type BaseEntityResolvers<ContextType = any, ParentType extends ResolversParentTypes['BaseEntity'] = ResolversParentTypes['BaseEntity']> = {
  __resolveType: TypeResolveFn<'Container', ParentType, ContextType>;
  classification?: Resolver<Maybe<ResolversTypes['ClassificationEnum']>, ParentType, ContextType>;
  createdBy?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  creationTime?: Resolver<ResolversTypes['ZonedDateTime'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  isClassified?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  isDeleted?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  lastUpdateBy?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  lastUpdateTime?: Resolver<Maybe<ResolversTypes['ZonedDateTime']>, ParentType, ContextType>;
  realityId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  secGroups?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
};

export interface BigIntScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['BigInt'], any> {
  name: 'BigInt';
}

export type CatResolvers<ContextType = any, ParentType extends ResolversParentTypes['Cat'] = ResolversParentTypes['Cat']> = {
  age?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  owner?: Resolver<Maybe<ResolversTypes['Owner']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['CatTypeEnum']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ContainerResolvers<ContextType = any, ParentType extends ResolversParentTypes['Container'] = ResolversParentTypes['Container']> = {
  classification?: Resolver<Maybe<ResolversTypes['ClassificationEnum']>, ParentType, ContextType>;
  createdBy?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  creationTime?: Resolver<ResolversTypes['ZonedDateTime'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  isClassified?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  isDeleted?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  items?: Resolver<Maybe<Array<Maybe<ResolversTypes['Item']>>>, ParentType, ContextType>;
  lastUpdateBy?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  lastUpdateTime?: Resolver<Maybe<ResolversTypes['ZonedDateTime']>, ParentType, ContextType>;
  location?: Resolver<ResolversTypes['StorageLocationsEnum'], ParentType, ContextType>;
  realityId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  secGroups?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ItemResolvers<ContextType = any, ParentType extends ResolversParentTypes['Item'] = ResolversParentTypes['Item']> = {
  __resolveType: TypeResolveFn<'OfficeEquipment' | 'OfficeFurniture' | 'Software', ParentType, ContextType>;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  createCat?: Resolver<Maybe<Array<Maybe<ResolversTypes['Cat']>>>, ParentType, ContextType, RequireFields<MutationCreateCatArgs, never>>;
  moveItems?: Resolver<Maybe<Array<Maybe<ResolversTypes['Item']>>>, ParentType, ContextType, RequireFields<MutationMoveItemsArgs, never>>;
  removeItems?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType, RequireFields<MutationRemoveItemsArgs, never>>;
  upsertOfficeEquipment?: Resolver<Maybe<Array<Maybe<ResolversTypes['OfficeEquipment']>>>, ParentType, ContextType, RequireFields<MutationUpsertOfficeEquipmentArgs, never>>;
};

export type OfficeEquipmentResolvers<ContextType = any, ParentType extends ResolversParentTypes['OfficeEquipment'] = ResolversParentTypes['OfficeEquipment']> = {
  classification?: Resolver<Maybe<ResolversTypes['ClassificationEnum']>, ParentType, ContextType>;
  container?: Resolver<Maybe<ResolversTypes['Container']>, ParentType, ContextType>;
  createdBy?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  creationTime?: Resolver<ResolversTypes['ZonedDateTime'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  isClassified?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  isDeleted?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  isFragile?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  lastUpdateBy?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  lastUpdateTime?: Resolver<Maybe<ResolversTypes['ZonedDateTime']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  realityId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  secGroups?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OfficeFurnitureResolvers<ContextType = any, ParentType extends ResolversParentTypes['OfficeFurniture'] = ResolversParentTypes['OfficeFurniture']> = {
  classification?: Resolver<Maybe<ResolversTypes['ClassificationEnum']>, ParentType, ContextType>;
  container?: Resolver<Maybe<ResolversTypes['Container']>, ParentType, ContextType>;
  createdBy?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  creationTime?: Resolver<ResolversTypes['ZonedDateTime'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  isClassified?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  isDeleted?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  isWood?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  lastUpdateBy?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  lastUpdateTime?: Resolver<Maybe<ResolversTypes['ZonedDateTime']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  realityId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  secGroups?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OwnerResolvers<ContextType = any, ParentType extends ResolversParentTypes['Owner'] = ResolversParentTypes['Owner']> = {
  age?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  cats?: Resolver<Maybe<Array<ResolversTypes['Cat']>>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  cat?: Resolver<Maybe<ResolversTypes['Cat']>, ParentType, ContextType, RequireFields<QueryCatArgs, 'id'>>;
  cats?: Resolver<Maybe<Array<Maybe<ResolversTypes['Cat']>>>, ParentType, ContextType>;
  containers?: Resolver<Array<Maybe<ResolversTypes['Container']>>, ParentType, ContextType, RequireFields<QueryContainersArgs, never>>;
  items?: Resolver<Array<Maybe<ResolversTypes['Item']>>, ParentType, ContextType>;
};

export type SoftwareResolvers<ContextType = any, ParentType extends ResolversParentTypes['Software'] = ResolversParentTypes['Software']> = {
  classification?: Resolver<Maybe<ResolversTypes['ClassificationEnum']>, ParentType, ContextType>;
  container?: Resolver<Maybe<ResolversTypes['Container']>, ParentType, ContextType>;
  createdBy?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  creationTime?: Resolver<ResolversTypes['ZonedDateTime'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  isClassified?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  isDeleted?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  isOpenSource?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  lastUpdateBy?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  lastUpdateTime?: Resolver<Maybe<ResolversTypes['ZonedDateTime']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  realityId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  secGroups?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SubscriptionResolvers<ContextType = any, ParentType extends ResolversParentTypes['Subscription'] = ResolversParentTypes['Subscription']> = {
  catCreated?: SubscriptionResolver<Maybe<ResolversTypes['Cat']>, "catCreated", ParentType, ContextType>;
};

export interface ZonedDateTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['ZonedDateTime'], any> {
  name: 'ZonedDateTime';
}

export type Resolvers<ContextType = any> = {
  AbstractItem?: AbstractItemResolvers<ContextType>;
  BaseEntity?: BaseEntityResolvers<ContextType>;
  BigInt?: GraphQLScalarType;
  Cat?: CatResolvers<ContextType>;
  Container?: ContainerResolvers<ContextType>;
  Item?: ItemResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  OfficeEquipment?: OfficeEquipmentResolvers<ContextType>;
  OfficeFurniture?: OfficeFurnitureResolvers<ContextType>;
  Owner?: OwnerResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Software?: SoftwareResolvers<ContextType>;
  Subscription?: SubscriptionResolvers<ContextType>;
  ZonedDateTime?: GraphQLScalarType;
};

