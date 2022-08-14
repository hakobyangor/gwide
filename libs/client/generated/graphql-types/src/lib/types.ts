export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: any;
};

export type City = {
  __typename?: 'City';
  TourCity?: Maybe<Array<TourCity>>;
  _count: CityCount;
  country: Country;
  countryId: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  name: Scalars['String'];
  status: Status;
  updatedAt: Scalars['DateTime'];
};

export type CityAvgAggregate = {
  __typename?: 'CityAvgAggregate';
  countryId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

export type CityCount = {
  __typename?: 'CityCount';
  TourCity: Scalars['Int'];
};

export type CityCountAggregate = {
  __typename?: 'CityCountAggregate';
  _all: Scalars['Int'];
  countryId: Scalars['Int'];
  createdAt: Scalars['Int'];
  id: Scalars['Int'];
  name: Scalars['Int'];
  status: Scalars['Int'];
  updatedAt: Scalars['Int'];
};

export type CityCreateManyCountryInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['Int']>;
  name: Scalars['String'];
  status?: InputMaybe<Status>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type CityCreateManyCountryInputEnvelope = {
  data: Array<CityCreateManyCountryInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type CityCreateNestedManyWithoutCountryInput = {
  connect?: InputMaybe<Array<CityWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<CityCreateOrConnectWithoutCountryInput>>;
  create?: InputMaybe<Array<CityCreateWithoutCountryInput>>;
  createMany?: InputMaybe<CityCreateManyCountryInputEnvelope>;
};

export type CityCreateNestedOneWithoutTourCityInput = {
  connect?: InputMaybe<CityWhereUniqueInput>;
  connectOrCreate?: InputMaybe<CityCreateOrConnectWithoutTourCityInput>;
  create?: InputMaybe<CityCreateWithoutTourCityInput>;
};

export type CityCreateOrConnectWithoutCountryInput = {
  create: CityCreateWithoutCountryInput;
  where: CityWhereUniqueInput;
};

export type CityCreateOrConnectWithoutTourCityInput = {
  create: CityCreateWithoutTourCityInput;
  where: CityWhereUniqueInput;
};

export type CityCreateWithoutCountryInput = {
  TourCity?: InputMaybe<TourCityCreateNestedManyWithoutCityInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  name: Scalars['String'];
  status?: InputMaybe<Status>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type CityCreateWithoutTourCityInput = {
  country: CountryCreateNestedOneWithoutCityInput;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  name: Scalars['String'];
  status?: InputMaybe<Status>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type CityListRelationFilter = {
  every?: InputMaybe<CityWhereInput>;
  none?: InputMaybe<CityWhereInput>;
  some?: InputMaybe<CityWhereInput>;
};

export type CityMaxAggregate = {
  __typename?: 'CityMaxAggregate';
  countryId?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  status?: Maybe<Status>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CityMinAggregate = {
  __typename?: 'CityMinAggregate';
  countryId?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  status?: Maybe<Status>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CityOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type CityRelationFilter = {
  is?: InputMaybe<CityWhereInput>;
  isNot?: InputMaybe<CityWhereInput>;
};

export type CityScalarWhereInput = {
  AND?: InputMaybe<Array<CityScalarWhereInput>>;
  NOT?: InputMaybe<Array<CityScalarWhereInput>>;
  OR?: InputMaybe<Array<CityScalarWhereInput>>;
  countryId?: InputMaybe<IntFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IntFilter>;
  name?: InputMaybe<StringFilter>;
  status?: InputMaybe<EnumStatusFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type CitySumAggregate = {
  __typename?: 'CitySumAggregate';
  countryId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
};

export type CityUpdateManyMutationInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  name?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Status>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type CityUpdateManyWithWhereWithoutCountryInput = {
  data: CityUpdateManyMutationInput;
  where: CityScalarWhereInput;
};

export type CityUpdateManyWithoutCountryInput = {
  connect?: InputMaybe<Array<CityWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<CityCreateOrConnectWithoutCountryInput>>;
  create?: InputMaybe<Array<CityCreateWithoutCountryInput>>;
  createMany?: InputMaybe<CityCreateManyCountryInputEnvelope>;
  delete?: InputMaybe<Array<CityWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<CityScalarWhereInput>>;
  disconnect?: InputMaybe<Array<CityWhereUniqueInput>>;
  set?: InputMaybe<Array<CityWhereUniqueInput>>;
  update?: InputMaybe<Array<CityUpdateWithWhereUniqueWithoutCountryInput>>;
  updateMany?: InputMaybe<Array<CityUpdateManyWithWhereWithoutCountryInput>>;
  upsert?: InputMaybe<Array<CityUpsertWithWhereUniqueWithoutCountryInput>>;
};

export type CityUpdateWithWhereUniqueWithoutCountryInput = {
  data: CityUpdateWithoutCountryInput;
  where: CityWhereUniqueInput;
};

export type CityUpdateWithoutCountryInput = {
  TourCity?: InputMaybe<TourCityUpdateManyWithoutCityInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  name?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Status>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type CityUpsertWithWhereUniqueWithoutCountryInput = {
  create: CityCreateWithoutCountryInput;
  update: CityUpdateWithoutCountryInput;
  where: CityWhereUniqueInput;
};

export type CityWhereInput = {
  AND?: InputMaybe<Array<CityWhereInput>>;
  NOT?: InputMaybe<Array<CityWhereInput>>;
  OR?: InputMaybe<Array<CityWhereInput>>;
  TourCity?: InputMaybe<TourCityListRelationFilter>;
  country?: InputMaybe<CountryRelationFilter>;
  countryId?: InputMaybe<IntFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IntFilter>;
  name?: InputMaybe<StringFilter>;
  status?: InputMaybe<EnumStatusFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type CityWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
};

export type Country = {
  __typename?: 'Country';
  City?: Maybe<Array<City>>;
  User?: Maybe<Array<User>>;
  _count: CountryCount;
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  name: Scalars['String'];
  status: Status;
  updatedAt: Scalars['DateTime'];
};

export type CountryAvgAggregate = {
  __typename?: 'CountryAvgAggregate';
  id?: Maybe<Scalars['Float']>;
};

export type CountryCount = {
  __typename?: 'CountryCount';
  City: Scalars['Int'];
  User: Scalars['Int'];
};

export type CountryCountAggregate = {
  __typename?: 'CountryCountAggregate';
  _all: Scalars['Int'];
  createdAt: Scalars['Int'];
  id: Scalars['Int'];
  name: Scalars['Int'];
  status: Scalars['Int'];
  updatedAt: Scalars['Int'];
};

export type CountryCreateNestedOneWithoutCityInput = {
  connect?: InputMaybe<CountryWhereUniqueInput>;
  connectOrCreate?: InputMaybe<CountryCreateOrConnectWithoutCityInput>;
  create?: InputMaybe<CountryCreateWithoutCityInput>;
};

export type CountryCreateNestedOneWithoutUserInput = {
  connect?: InputMaybe<CountryWhereUniqueInput>;
  connectOrCreate?: InputMaybe<CountryCreateOrConnectWithoutUserInput>;
  create?: InputMaybe<CountryCreateWithoutUserInput>;
};

export type CountryCreateOrConnectWithoutCityInput = {
  create: CountryCreateWithoutCityInput;
  where: CountryWhereUniqueInput;
};

export type CountryCreateOrConnectWithoutUserInput = {
  create: CountryCreateWithoutUserInput;
  where: CountryWhereUniqueInput;
};

export type CountryCreateWithoutCityInput = {
  User?: InputMaybe<UserCreateNestedManyWithoutCountryInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  name: Scalars['String'];
  status?: InputMaybe<Status>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type CountryCreateWithoutUserInput = {
  City?: InputMaybe<CityCreateNestedManyWithoutCountryInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  name: Scalars['String'];
  status?: InputMaybe<Status>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type CountryMaxAggregate = {
  __typename?: 'CountryMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  status?: Maybe<Status>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CountryMinAggregate = {
  __typename?: 'CountryMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  status?: Maybe<Status>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CountryOrderByWithRelationInput = {
  City?: InputMaybe<CityOrderByRelationAggregateInput>;
  User?: InputMaybe<UserOrderByRelationAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type CountryRelationFilter = {
  is?: InputMaybe<CountryWhereInput>;
  isNot?: InputMaybe<CountryWhereInput>;
};

export type CountrySumAggregate = {
  __typename?: 'CountrySumAggregate';
  id?: Maybe<Scalars['Int']>;
};

export type CountryUpdateOneWithoutUserInput = {
  connect?: InputMaybe<CountryWhereUniqueInput>;
  connectOrCreate?: InputMaybe<CountryCreateOrConnectWithoutUserInput>;
  create?: InputMaybe<CountryCreateWithoutUserInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<CountryUpdateWithoutUserInput>;
  upsert?: InputMaybe<CountryUpsertWithoutUserInput>;
};

export type CountryUpdateWithoutUserInput = {
  City?: InputMaybe<CityUpdateManyWithoutCountryInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  name?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Status>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type CountryUpsertWithoutUserInput = {
  create: CountryCreateWithoutUserInput;
  update: CountryUpdateWithoutUserInput;
};

export type CountryWhereInput = {
  AND?: InputMaybe<Array<CountryWhereInput>>;
  City?: InputMaybe<CityListRelationFilter>;
  NOT?: InputMaybe<Array<CountryWhereInput>>;
  OR?: InputMaybe<Array<CountryWhereInput>>;
  User?: InputMaybe<UserListRelationFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IntFilter>;
  name?: InputMaybe<StringFilter>;
  status?: InputMaybe<EnumStatusFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type CountryWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
};

export type Currency = {
  __typename?: 'Currency';
  Tour?: Maybe<Array<Tour>>;
  _count: CurrencyCount;
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  name: Scalars['String'];
  status: Status;
  updatedAt: Scalars['DateTime'];
};

export type CurrencyAvgAggregate = {
  __typename?: 'CurrencyAvgAggregate';
  id?: Maybe<Scalars['Float']>;
};

export type CurrencyCount = {
  __typename?: 'CurrencyCount';
  Tour: Scalars['Int'];
};

export type CurrencyCountAggregate = {
  __typename?: 'CurrencyCountAggregate';
  _all: Scalars['Int'];
  createdAt: Scalars['Int'];
  id: Scalars['Int'];
  name: Scalars['Int'];
  status: Scalars['Int'];
  updatedAt: Scalars['Int'];
};

export type CurrencyCreateNestedOneWithoutTourInput = {
  connect?: InputMaybe<CurrencyWhereUniqueInput>;
  connectOrCreate?: InputMaybe<CurrencyCreateOrConnectWithoutTourInput>;
  create?: InputMaybe<CurrencyCreateWithoutTourInput>;
};

export type CurrencyCreateOrConnectWithoutTourInput = {
  create: CurrencyCreateWithoutTourInput;
  where: CurrencyWhereUniqueInput;
};

export type CurrencyCreateWithoutTourInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  name: Scalars['String'];
  status?: InputMaybe<Status>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type CurrencyMaxAggregate = {
  __typename?: 'CurrencyMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  status?: Maybe<Status>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CurrencyMinAggregate = {
  __typename?: 'CurrencyMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  status?: Maybe<Status>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CurrencyRelationFilter = {
  is?: InputMaybe<CurrencyWhereInput>;
  isNot?: InputMaybe<CurrencyWhereInput>;
};

export type CurrencySumAggregate = {
  __typename?: 'CurrencySumAggregate';
  id?: Maybe<Scalars['Int']>;
};

export type CurrencyUpdateOneRequiredWithoutTourInput = {
  connect?: InputMaybe<CurrencyWhereUniqueInput>;
  connectOrCreate?: InputMaybe<CurrencyCreateOrConnectWithoutTourInput>;
  create?: InputMaybe<CurrencyCreateWithoutTourInput>;
  update?: InputMaybe<CurrencyUpdateWithoutTourInput>;
  upsert?: InputMaybe<CurrencyUpsertWithoutTourInput>;
};

export type CurrencyUpdateWithoutTourInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  name?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Status>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type CurrencyUpsertWithoutTourInput = {
  create: CurrencyCreateWithoutTourInput;
  update: CurrencyUpdateWithoutTourInput;
};

export type CurrencyWhereInput = {
  AND?: InputMaybe<Array<CurrencyWhereInput>>;
  NOT?: InputMaybe<Array<CurrencyWhereInput>>;
  OR?: InputMaybe<Array<CurrencyWhereInput>>;
  Tour?: InputMaybe<TourListRelationFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IntFilter>;
  name?: InputMaybe<StringFilter>;
  status?: InputMaybe<EnumStatusFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type CurrencyWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
};

export type DateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<DateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type EnumStatusFilter = {
  equals?: InputMaybe<Status>;
  in?: InputMaybe<Array<Status>>;
  not?: InputMaybe<EnumStatusFilter>;
  notIn?: InputMaybe<Array<Status>>;
};

export type EnumUserRoleFilter = {
  equals?: InputMaybe<UserRole>;
  in?: InputMaybe<Array<UserRole>>;
  not?: InputMaybe<EnumUserRoleFilter>;
  notIn?: InputMaybe<Array<UserRole>>;
};

export type EnumYesNoFilter = {
  equals?: InputMaybe<YesNo>;
  in?: InputMaybe<Array<YesNo>>;
  not?: InputMaybe<EnumYesNoFilter>;
  notIn?: InputMaybe<Array<YesNo>>;
};

export type FloatFilter = {
  equals?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<Scalars['Float']>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  not?: InputMaybe<FloatFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']>>;
};

export type IntFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<IntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type Languages = {
  __typename?: 'Languages';
  TourLanguages?: Maybe<Array<TourLanguages>>;
  _count: LanguagesCount;
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  name: Scalars['String'];
  status: Status;
  updatedAt: Scalars['DateTime'];
};

export type LanguagesAvgAggregate = {
  __typename?: 'LanguagesAvgAggregate';
  id?: Maybe<Scalars['Float']>;
};

export type LanguagesCount = {
  __typename?: 'LanguagesCount';
  TourLanguages: Scalars['Int'];
};

export type LanguagesCountAggregate = {
  __typename?: 'LanguagesCountAggregate';
  _all: Scalars['Int'];
  createdAt: Scalars['Int'];
  id: Scalars['Int'];
  name: Scalars['Int'];
  status: Scalars['Int'];
  updatedAt: Scalars['Int'];
};

export type LanguagesCreateNestedOneWithoutTourLanguagesInput = {
  connect?: InputMaybe<LanguagesWhereUniqueInput>;
  connectOrCreate?: InputMaybe<LanguagesCreateOrConnectWithoutTourLanguagesInput>;
  create?: InputMaybe<LanguagesCreateWithoutTourLanguagesInput>;
};

export type LanguagesCreateOrConnectWithoutTourLanguagesInput = {
  create: LanguagesCreateWithoutTourLanguagesInput;
  where: LanguagesWhereUniqueInput;
};

export type LanguagesCreateWithoutTourLanguagesInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  name: Scalars['String'];
  status?: InputMaybe<Status>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type LanguagesMaxAggregate = {
  __typename?: 'LanguagesMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  status?: Maybe<Status>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type LanguagesMinAggregate = {
  __typename?: 'LanguagesMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  status?: Maybe<Status>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type LanguagesRelationFilter = {
  is?: InputMaybe<LanguagesWhereInput>;
  isNot?: InputMaybe<LanguagesWhereInput>;
};

export type LanguagesSumAggregate = {
  __typename?: 'LanguagesSumAggregate';
  id?: Maybe<Scalars['Int']>;
};

export type LanguagesUpdateOneRequiredWithoutTourLanguagesInput = {
  connect?: InputMaybe<LanguagesWhereUniqueInput>;
  connectOrCreate?: InputMaybe<LanguagesCreateOrConnectWithoutTourLanguagesInput>;
  create?: InputMaybe<LanguagesCreateWithoutTourLanguagesInput>;
  update?: InputMaybe<LanguagesUpdateWithoutTourLanguagesInput>;
  upsert?: InputMaybe<LanguagesUpsertWithoutTourLanguagesInput>;
};

export type LanguagesUpdateWithoutTourLanguagesInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  name?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Status>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type LanguagesUpsertWithoutTourLanguagesInput = {
  create: LanguagesCreateWithoutTourLanguagesInput;
  update: LanguagesUpdateWithoutTourLanguagesInput;
};

export type LanguagesWhereInput = {
  AND?: InputMaybe<Array<LanguagesWhereInput>>;
  NOT?: InputMaybe<Array<LanguagesWhereInput>>;
  OR?: InputMaybe<Array<LanguagesWhereInput>>;
  TourLanguages?: InputMaybe<TourLanguagesListRelationFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IntFilter>;
  name?: InputMaybe<StringFilter>;
  status?: InputMaybe<EnumStatusFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type LanguagesWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
};

export type LoginInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createUser: User;
  login: User;
  removeUser: User;
  resetPassword: User;
  signUp: User;
  updateUser: User;
};


export type MutationCreateUserArgs = {
  data: UserCreateInput;
};


export type MutationLoginArgs = {
  loginInput: LoginInput;
};


export type MutationRemoveUserArgs = {
  where: UserWhereUniqueInput;
};


export type MutationResetPasswordArgs = {
  resetPassword: ResetPassword;
};


export type MutationSignUpArgs = {
  signUpInput: RegisterInput;
};


export type MutationUpdateUserArgs = {
  data: UpdateUserInput;
  where: UserWhereUniqueInput;
};

export type Query = {
  __typename?: 'Query';
  getGuides: Array<User>;
  resetPasswordEmail: User;
  user: User;
  users: Array<User>;
};


export type QueryGetGuidesArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryResetPasswordEmailArgs = {
  where: UserWhereUniqueInput;
};


export type QueryUserArgs = {
  where: UserWhereUniqueInput;
};

export type RegisterInput = {
  email: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  password: Scalars['String'];
  role: UserRole;
  status?: InputMaybe<Status>;
};

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc'
}

export enum Status {
  Active = 'ACTIVE',
  Blocked = 'BLOCKED',
  Draft = 'DRAFT',
  Inactive = 'INACTIVE',
  Pending = 'PENDING'
}

export type StringFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<StringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type Tour = {
  __typename?: 'Tour';
  TourCity?: Maybe<Array<TourCity>>;
  TourLanguages?: Maybe<Array<TourLanguages>>;
  TourTourCategory?: Maybe<Array<TourTourCategory>>;
  _count: TourCount;
  createdAt: Scalars['DateTime'];
  currency: Currency;
  currencyId: Scalars['Int'];
  guide: User;
  guideId: Scalars['Int'];
  id: Scalars['ID'];
  maxCapacity: Scalars['Int'];
  name: Scalars['String'];
  price: Scalars['Float'];
  status: Status;
  updatedAt: Scalars['DateTime'];
};

export type TourAvgAggregate = {
  __typename?: 'TourAvgAggregate';
  currencyId?: Maybe<Scalars['Float']>;
  guideId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  maxCapacity?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
};

export type TourCategory = {
  __typename?: 'TourCategory';
  TourTourCategory?: Maybe<Array<TourTourCategory>>;
  _count: TourCategoryCount;
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  name: Scalars['String'];
  status: Status;
  updatedAt: Scalars['DateTime'];
};

export type TourCategoryAvgAggregate = {
  __typename?: 'TourCategoryAvgAggregate';
  id?: Maybe<Scalars['Float']>;
};

export type TourCategoryCount = {
  __typename?: 'TourCategoryCount';
  TourTourCategory: Scalars['Int'];
};

export type TourCategoryCountAggregate = {
  __typename?: 'TourCategoryCountAggregate';
  _all: Scalars['Int'];
  createdAt: Scalars['Int'];
  id: Scalars['Int'];
  name: Scalars['Int'];
  status: Scalars['Int'];
  updatedAt: Scalars['Int'];
};

export type TourCategoryCreateNestedOneWithoutTourTourCategoryInput = {
  connect?: InputMaybe<TourCategoryWhereUniqueInput>;
  connectOrCreate?: InputMaybe<TourCategoryCreateOrConnectWithoutTourTourCategoryInput>;
  create?: InputMaybe<TourCategoryCreateWithoutTourTourCategoryInput>;
};

export type TourCategoryCreateOrConnectWithoutTourTourCategoryInput = {
  create: TourCategoryCreateWithoutTourTourCategoryInput;
  where: TourCategoryWhereUniqueInput;
};

export type TourCategoryCreateWithoutTourTourCategoryInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  name: Scalars['String'];
  status?: InputMaybe<Status>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type TourCategoryMaxAggregate = {
  __typename?: 'TourCategoryMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  status?: Maybe<Status>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type TourCategoryMinAggregate = {
  __typename?: 'TourCategoryMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  status?: Maybe<Status>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type TourCategoryRelationFilter = {
  is?: InputMaybe<TourCategoryWhereInput>;
  isNot?: InputMaybe<TourCategoryWhereInput>;
};

export type TourCategorySumAggregate = {
  __typename?: 'TourCategorySumAggregate';
  id?: Maybe<Scalars['Int']>;
};

export type TourCategoryUpdateOneRequiredWithoutTourTourCategoryInput = {
  connect?: InputMaybe<TourCategoryWhereUniqueInput>;
  connectOrCreate?: InputMaybe<TourCategoryCreateOrConnectWithoutTourTourCategoryInput>;
  create?: InputMaybe<TourCategoryCreateWithoutTourTourCategoryInput>;
  update?: InputMaybe<TourCategoryUpdateWithoutTourTourCategoryInput>;
  upsert?: InputMaybe<TourCategoryUpsertWithoutTourTourCategoryInput>;
};

export type TourCategoryUpdateWithoutTourTourCategoryInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  name?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Status>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type TourCategoryUpsertWithoutTourTourCategoryInput = {
  create: TourCategoryCreateWithoutTourTourCategoryInput;
  update: TourCategoryUpdateWithoutTourTourCategoryInput;
};

export type TourCategoryWhereInput = {
  AND?: InputMaybe<Array<TourCategoryWhereInput>>;
  NOT?: InputMaybe<Array<TourCategoryWhereInput>>;
  OR?: InputMaybe<Array<TourCategoryWhereInput>>;
  TourTourCategory?: InputMaybe<TourTourCategoryListRelationFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IntFilter>;
  name?: InputMaybe<StringFilter>;
  status?: InputMaybe<EnumStatusFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type TourCategoryWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
};

export type TourCity = {
  __typename?: 'TourCity';
  city: City;
  cityId: Scalars['Int'];
  status: Status;
  tour?: Maybe<Tour>;
  tourId: Scalars['Int'];
};

export type TourCityAvgAggregate = {
  __typename?: 'TourCityAvgAggregate';
  cityId?: Maybe<Scalars['Float']>;
  tourId?: Maybe<Scalars['Float']>;
};

export type TourCityCountAggregate = {
  __typename?: 'TourCityCountAggregate';
  _all: Scalars['Int'];
  cityId: Scalars['Int'];
  status: Scalars['Int'];
  tourId: Scalars['Int'];
};

export type TourCityCreateManyCityInput = {
  status?: InputMaybe<Status>;
  tourId: Scalars['Int'];
};

export type TourCityCreateManyCityInputEnvelope = {
  data: Array<TourCityCreateManyCityInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type TourCityCreateManyTourInput = {
  cityId: Scalars['Int'];
  status?: InputMaybe<Status>;
};

export type TourCityCreateManyTourInputEnvelope = {
  data: Array<TourCityCreateManyTourInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type TourCityCreateNestedManyWithoutCityInput = {
  connect?: InputMaybe<Array<TourCityWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<TourCityCreateOrConnectWithoutCityInput>>;
  create?: InputMaybe<Array<TourCityCreateWithoutCityInput>>;
  createMany?: InputMaybe<TourCityCreateManyCityInputEnvelope>;
};

export type TourCityCreateNestedManyWithoutTourInput = {
  connect?: InputMaybe<Array<TourCityWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<TourCityCreateOrConnectWithoutTourInput>>;
  create?: InputMaybe<Array<TourCityCreateWithoutTourInput>>;
  createMany?: InputMaybe<TourCityCreateManyTourInputEnvelope>;
};

export type TourCityCreateOrConnectWithoutCityInput = {
  create: TourCityCreateWithoutCityInput;
  where: TourCityWhereUniqueInput;
};

export type TourCityCreateOrConnectWithoutTourInput = {
  create: TourCityCreateWithoutTourInput;
  where: TourCityWhereUniqueInput;
};

export type TourCityCreateWithoutCityInput = {
  status?: InputMaybe<Status>;
  tour?: InputMaybe<TourCreateNestedOneWithoutTourCityInput>;
};

export type TourCityCreateWithoutTourInput = {
  city: CityCreateNestedOneWithoutTourCityInput;
  status?: InputMaybe<Status>;
};

export type TourCityListRelationFilter = {
  every?: InputMaybe<TourCityWhereInput>;
  none?: InputMaybe<TourCityWhereInput>;
  some?: InputMaybe<TourCityWhereInput>;
};

export type TourCityMaxAggregate = {
  __typename?: 'TourCityMaxAggregate';
  cityId?: Maybe<Scalars['Int']>;
  status?: Maybe<Status>;
  tourId?: Maybe<Scalars['Int']>;
};

export type TourCityMinAggregate = {
  __typename?: 'TourCityMinAggregate';
  cityId?: Maybe<Scalars['Int']>;
  status?: Maybe<Status>;
  tourId?: Maybe<Scalars['Int']>;
};

export type TourCityScalarWhereInput = {
  AND?: InputMaybe<Array<TourCityScalarWhereInput>>;
  NOT?: InputMaybe<Array<TourCityScalarWhereInput>>;
  OR?: InputMaybe<Array<TourCityScalarWhereInput>>;
  cityId?: InputMaybe<IntFilter>;
  status?: InputMaybe<EnumStatusFilter>;
  tourId?: InputMaybe<IntFilter>;
};

export type TourCitySumAggregate = {
  __typename?: 'TourCitySumAggregate';
  cityId?: Maybe<Scalars['Int']>;
  tourId?: Maybe<Scalars['Int']>;
};

export type TourCityTourIdCityIdCompoundUniqueInput = {
  cityId: Scalars['Int'];
  tourId: Scalars['Int'];
};

export type TourCityUpdateManyMutationInput = {
  status?: InputMaybe<Status>;
};

export type TourCityUpdateManyWithWhereWithoutCityInput = {
  data: TourCityUpdateManyMutationInput;
  where: TourCityScalarWhereInput;
};

export type TourCityUpdateManyWithoutCityInput = {
  connect?: InputMaybe<Array<TourCityWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<TourCityCreateOrConnectWithoutCityInput>>;
  create?: InputMaybe<Array<TourCityCreateWithoutCityInput>>;
  createMany?: InputMaybe<TourCityCreateManyCityInputEnvelope>;
  delete?: InputMaybe<Array<TourCityWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<TourCityScalarWhereInput>>;
  disconnect?: InputMaybe<Array<TourCityWhereUniqueInput>>;
  set?: InputMaybe<Array<TourCityWhereUniqueInput>>;
  update?: InputMaybe<Array<TourCityUpdateWithWhereUniqueWithoutCityInput>>;
  updateMany?: InputMaybe<Array<TourCityUpdateManyWithWhereWithoutCityInput>>;
  upsert?: InputMaybe<Array<TourCityUpsertWithWhereUniqueWithoutCityInput>>;
};

export type TourCityUpdateWithWhereUniqueWithoutCityInput = {
  data: TourCityUpdateWithoutCityInput;
  where: TourCityWhereUniqueInput;
};

export type TourCityUpdateWithoutCityInput = {
  status?: InputMaybe<Status>;
  tour?: InputMaybe<TourUpdateOneWithoutTourCityInput>;
};

export type TourCityUpsertWithWhereUniqueWithoutCityInput = {
  create: TourCityCreateWithoutCityInput;
  update: TourCityUpdateWithoutCityInput;
  where: TourCityWhereUniqueInput;
};

export type TourCityWhereInput = {
  AND?: InputMaybe<Array<TourCityWhereInput>>;
  NOT?: InputMaybe<Array<TourCityWhereInput>>;
  OR?: InputMaybe<Array<TourCityWhereInput>>;
  city?: InputMaybe<CityRelationFilter>;
  cityId?: InputMaybe<IntFilter>;
  status?: InputMaybe<EnumStatusFilter>;
  tour?: InputMaybe<TourRelationFilter>;
  tourId?: InputMaybe<IntFilter>;
};

export type TourCityWhereUniqueInput = {
  tourId_cityId?: InputMaybe<TourCityTourIdCityIdCompoundUniqueInput>;
};

export type TourCount = {
  __typename?: 'TourCount';
  TourCity: Scalars['Int'];
  TourLanguages: Scalars['Int'];
  TourTourCategory: Scalars['Int'];
};

export type TourCountAggregate = {
  __typename?: 'TourCountAggregate';
  _all: Scalars['Int'];
  createdAt: Scalars['Int'];
  currencyId: Scalars['Int'];
  guideId: Scalars['Int'];
  id: Scalars['Int'];
  maxCapacity: Scalars['Int'];
  name: Scalars['Int'];
  price: Scalars['Int'];
  status: Scalars['Int'];
  updatedAt: Scalars['Int'];
};

export type TourCreateManyGuideInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  currencyId?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
  maxCapacity?: InputMaybe<Scalars['Int']>;
  name: Scalars['String'];
  price?: InputMaybe<Scalars['Float']>;
  status?: InputMaybe<Status>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type TourCreateManyGuideInputEnvelope = {
  data: Array<TourCreateManyGuideInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type TourCreateNestedManyWithoutGuideInput = {
  connect?: InputMaybe<Array<TourWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<TourCreateOrConnectWithoutGuideInput>>;
  create?: InputMaybe<Array<TourCreateWithoutGuideInput>>;
  createMany?: InputMaybe<TourCreateManyGuideInputEnvelope>;
};

export type TourCreateNestedOneWithoutTourCityInput = {
  connect?: InputMaybe<TourWhereUniqueInput>;
  connectOrCreate?: InputMaybe<TourCreateOrConnectWithoutTourCityInput>;
  create?: InputMaybe<TourCreateWithoutTourCityInput>;
};

export type TourCreateOrConnectWithoutGuideInput = {
  create: TourCreateWithoutGuideInput;
  where: TourWhereUniqueInput;
};

export type TourCreateOrConnectWithoutTourCityInput = {
  create: TourCreateWithoutTourCityInput;
  where: TourWhereUniqueInput;
};

export type TourCreateWithoutGuideInput = {
  TourCity?: InputMaybe<TourCityCreateNestedManyWithoutTourInput>;
  TourLanguages?: InputMaybe<TourLanguagesCreateNestedManyWithoutTourInput>;
  TourTourCategory?: InputMaybe<TourTourCategoryCreateNestedManyWithoutTourInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  currency?: InputMaybe<CurrencyCreateNestedOneWithoutTourInput>;
  maxCapacity?: InputMaybe<Scalars['Int']>;
  name: Scalars['String'];
  price?: InputMaybe<Scalars['Float']>;
  status?: InputMaybe<Status>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type TourCreateWithoutTourCityInput = {
  TourLanguages?: InputMaybe<TourLanguagesCreateNestedManyWithoutTourInput>;
  TourTourCategory?: InputMaybe<TourTourCategoryCreateNestedManyWithoutTourInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  currency?: InputMaybe<CurrencyCreateNestedOneWithoutTourInput>;
  guide: UserCreateNestedOneWithoutTourInput;
  maxCapacity?: InputMaybe<Scalars['Int']>;
  name: Scalars['String'];
  price?: InputMaybe<Scalars['Float']>;
  status?: InputMaybe<Status>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type TourLanguages = {
  __typename?: 'TourLanguages';
  language: Languages;
  languageId: Scalars['Int'];
  status: Status;
  tour?: Maybe<Tour>;
  tourId: Scalars['Int'];
};

export type TourLanguagesAvgAggregate = {
  __typename?: 'TourLanguagesAvgAggregate';
  languageId?: Maybe<Scalars['Float']>;
  tourId?: Maybe<Scalars['Float']>;
};

export type TourLanguagesCountAggregate = {
  __typename?: 'TourLanguagesCountAggregate';
  _all: Scalars['Int'];
  languageId: Scalars['Int'];
  status: Scalars['Int'];
  tourId: Scalars['Int'];
};

export type TourLanguagesCreateManyTourInput = {
  languageId: Scalars['Int'];
  status?: InputMaybe<Status>;
};

export type TourLanguagesCreateManyTourInputEnvelope = {
  data: Array<TourLanguagesCreateManyTourInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type TourLanguagesCreateNestedManyWithoutTourInput = {
  connect?: InputMaybe<Array<TourLanguagesWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<TourLanguagesCreateOrConnectWithoutTourInput>>;
  create?: InputMaybe<Array<TourLanguagesCreateWithoutTourInput>>;
  createMany?: InputMaybe<TourLanguagesCreateManyTourInputEnvelope>;
};

export type TourLanguagesCreateOrConnectWithoutTourInput = {
  create: TourLanguagesCreateWithoutTourInput;
  where: TourLanguagesWhereUniqueInput;
};

export type TourLanguagesCreateWithoutTourInput = {
  language: LanguagesCreateNestedOneWithoutTourLanguagesInput;
  status?: InputMaybe<Status>;
};

export type TourLanguagesListRelationFilter = {
  every?: InputMaybe<TourLanguagesWhereInput>;
  none?: InputMaybe<TourLanguagesWhereInput>;
  some?: InputMaybe<TourLanguagesWhereInput>;
};

export type TourLanguagesMaxAggregate = {
  __typename?: 'TourLanguagesMaxAggregate';
  languageId?: Maybe<Scalars['Int']>;
  status?: Maybe<Status>;
  tourId?: Maybe<Scalars['Int']>;
};

export type TourLanguagesMinAggregate = {
  __typename?: 'TourLanguagesMinAggregate';
  languageId?: Maybe<Scalars['Int']>;
  status?: Maybe<Status>;
  tourId?: Maybe<Scalars['Int']>;
};

export type TourLanguagesScalarWhereInput = {
  AND?: InputMaybe<Array<TourLanguagesScalarWhereInput>>;
  NOT?: InputMaybe<Array<TourLanguagesScalarWhereInput>>;
  OR?: InputMaybe<Array<TourLanguagesScalarWhereInput>>;
  languageId?: InputMaybe<IntFilter>;
  status?: InputMaybe<EnumStatusFilter>;
  tourId?: InputMaybe<IntFilter>;
};

export type TourLanguagesSumAggregate = {
  __typename?: 'TourLanguagesSumAggregate';
  languageId?: Maybe<Scalars['Int']>;
  tourId?: Maybe<Scalars['Int']>;
};

export type TourLanguagesTourIdLanguageIdCompoundUniqueInput = {
  languageId: Scalars['Int'];
  tourId: Scalars['Int'];
};

export type TourLanguagesUpdateManyMutationInput = {
  status?: InputMaybe<Status>;
};

export type TourLanguagesUpdateManyWithWhereWithoutTourInput = {
  data: TourLanguagesUpdateManyMutationInput;
  where: TourLanguagesScalarWhereInput;
};

export type TourLanguagesUpdateManyWithoutTourInput = {
  connect?: InputMaybe<Array<TourLanguagesWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<TourLanguagesCreateOrConnectWithoutTourInput>>;
  create?: InputMaybe<Array<TourLanguagesCreateWithoutTourInput>>;
  createMany?: InputMaybe<TourLanguagesCreateManyTourInputEnvelope>;
  delete?: InputMaybe<Array<TourLanguagesWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<TourLanguagesScalarWhereInput>>;
  disconnect?: InputMaybe<Array<TourLanguagesWhereUniqueInput>>;
  set?: InputMaybe<Array<TourLanguagesWhereUniqueInput>>;
  update?: InputMaybe<Array<TourLanguagesUpdateWithWhereUniqueWithoutTourInput>>;
  updateMany?: InputMaybe<Array<TourLanguagesUpdateManyWithWhereWithoutTourInput>>;
  upsert?: InputMaybe<Array<TourLanguagesUpsertWithWhereUniqueWithoutTourInput>>;
};

export type TourLanguagesUpdateWithWhereUniqueWithoutTourInput = {
  data: TourLanguagesUpdateWithoutTourInput;
  where: TourLanguagesWhereUniqueInput;
};

export type TourLanguagesUpdateWithoutTourInput = {
  language?: InputMaybe<LanguagesUpdateOneRequiredWithoutTourLanguagesInput>;
  status?: InputMaybe<Status>;
};

export type TourLanguagesUpsertWithWhereUniqueWithoutTourInput = {
  create: TourLanguagesCreateWithoutTourInput;
  update: TourLanguagesUpdateWithoutTourInput;
  where: TourLanguagesWhereUniqueInput;
};

export type TourLanguagesWhereInput = {
  AND?: InputMaybe<Array<TourLanguagesWhereInput>>;
  NOT?: InputMaybe<Array<TourLanguagesWhereInput>>;
  OR?: InputMaybe<Array<TourLanguagesWhereInput>>;
  language?: InputMaybe<LanguagesRelationFilter>;
  languageId?: InputMaybe<IntFilter>;
  status?: InputMaybe<EnumStatusFilter>;
  tour?: InputMaybe<TourRelationFilter>;
  tourId?: InputMaybe<IntFilter>;
};

export type TourLanguagesWhereUniqueInput = {
  tourId_languageId?: InputMaybe<TourLanguagesTourIdLanguageIdCompoundUniqueInput>;
};

export type TourListRelationFilter = {
  every?: InputMaybe<TourWhereInput>;
  none?: InputMaybe<TourWhereInput>;
  some?: InputMaybe<TourWhereInput>;
};

export type TourMaxAggregate = {
  __typename?: 'TourMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  currencyId?: Maybe<Scalars['Int']>;
  guideId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  maxCapacity?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Float']>;
  status?: Maybe<Status>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type TourMinAggregate = {
  __typename?: 'TourMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  currencyId?: Maybe<Scalars['Int']>;
  guideId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  maxCapacity?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Float']>;
  status?: Maybe<Status>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type TourOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type TourRelationFilter = {
  is?: InputMaybe<TourWhereInput>;
  isNot?: InputMaybe<TourWhereInput>;
};

export type TourSumAggregate = {
  __typename?: 'TourSumAggregate';
  currencyId?: Maybe<Scalars['Int']>;
  guideId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  maxCapacity?: Maybe<Scalars['Int']>;
  price?: Maybe<Scalars['Float']>;
};

export type TourTourCategory = {
  __typename?: 'TourTourCategory';
  status: Status;
  tour?: Maybe<Tour>;
  tourCategory: TourCategory;
  tourCategoryId: Scalars['Int'];
  tourId: Scalars['Int'];
};

export type TourTourCategoryAvgAggregate = {
  __typename?: 'TourTourCategoryAvgAggregate';
  tourCategoryId?: Maybe<Scalars['Float']>;
  tourId?: Maybe<Scalars['Float']>;
};

export type TourTourCategoryCountAggregate = {
  __typename?: 'TourTourCategoryCountAggregate';
  _all: Scalars['Int'];
  status: Scalars['Int'];
  tourCategoryId: Scalars['Int'];
  tourId: Scalars['Int'];
};

export type TourTourCategoryCreateManyTourInput = {
  status?: InputMaybe<Status>;
  tourCategoryId: Scalars['Int'];
};

export type TourTourCategoryCreateManyTourInputEnvelope = {
  data: Array<TourTourCategoryCreateManyTourInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type TourTourCategoryCreateNestedManyWithoutTourInput = {
  connect?: InputMaybe<Array<TourTourCategoryWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<TourTourCategoryCreateOrConnectWithoutTourInput>>;
  create?: InputMaybe<Array<TourTourCategoryCreateWithoutTourInput>>;
  createMany?: InputMaybe<TourTourCategoryCreateManyTourInputEnvelope>;
};

export type TourTourCategoryCreateOrConnectWithoutTourInput = {
  create: TourTourCategoryCreateWithoutTourInput;
  where: TourTourCategoryWhereUniqueInput;
};

export type TourTourCategoryCreateWithoutTourInput = {
  status?: InputMaybe<Status>;
  tourCategory: TourCategoryCreateNestedOneWithoutTourTourCategoryInput;
};

export type TourTourCategoryListRelationFilter = {
  every?: InputMaybe<TourTourCategoryWhereInput>;
  none?: InputMaybe<TourTourCategoryWhereInput>;
  some?: InputMaybe<TourTourCategoryWhereInput>;
};

export type TourTourCategoryMaxAggregate = {
  __typename?: 'TourTourCategoryMaxAggregate';
  status?: Maybe<Status>;
  tourCategoryId?: Maybe<Scalars['Int']>;
  tourId?: Maybe<Scalars['Int']>;
};

export type TourTourCategoryMinAggregate = {
  __typename?: 'TourTourCategoryMinAggregate';
  status?: Maybe<Status>;
  tourCategoryId?: Maybe<Scalars['Int']>;
  tourId?: Maybe<Scalars['Int']>;
};

export type TourTourCategoryScalarWhereInput = {
  AND?: InputMaybe<Array<TourTourCategoryScalarWhereInput>>;
  NOT?: InputMaybe<Array<TourTourCategoryScalarWhereInput>>;
  OR?: InputMaybe<Array<TourTourCategoryScalarWhereInput>>;
  status?: InputMaybe<EnumStatusFilter>;
  tourCategoryId?: InputMaybe<IntFilter>;
  tourId?: InputMaybe<IntFilter>;
};

export type TourTourCategorySumAggregate = {
  __typename?: 'TourTourCategorySumAggregate';
  tourCategoryId?: Maybe<Scalars['Int']>;
  tourId?: Maybe<Scalars['Int']>;
};

export type TourTourCategoryTourIdTourCategoryIdCompoundUniqueInput = {
  tourCategoryId: Scalars['Int'];
  tourId: Scalars['Int'];
};

export type TourTourCategoryUpdateManyMutationInput = {
  status?: InputMaybe<Status>;
};

export type TourTourCategoryUpdateManyWithWhereWithoutTourInput = {
  data: TourTourCategoryUpdateManyMutationInput;
  where: TourTourCategoryScalarWhereInput;
};

export type TourTourCategoryUpdateManyWithoutTourInput = {
  connect?: InputMaybe<Array<TourTourCategoryWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<TourTourCategoryCreateOrConnectWithoutTourInput>>;
  create?: InputMaybe<Array<TourTourCategoryCreateWithoutTourInput>>;
  createMany?: InputMaybe<TourTourCategoryCreateManyTourInputEnvelope>;
  delete?: InputMaybe<Array<TourTourCategoryWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<TourTourCategoryScalarWhereInput>>;
  disconnect?: InputMaybe<Array<TourTourCategoryWhereUniqueInput>>;
  set?: InputMaybe<Array<TourTourCategoryWhereUniqueInput>>;
  update?: InputMaybe<Array<TourTourCategoryUpdateWithWhereUniqueWithoutTourInput>>;
  updateMany?: InputMaybe<Array<TourTourCategoryUpdateManyWithWhereWithoutTourInput>>;
  upsert?: InputMaybe<Array<TourTourCategoryUpsertWithWhereUniqueWithoutTourInput>>;
};

export type TourTourCategoryUpdateWithWhereUniqueWithoutTourInput = {
  data: TourTourCategoryUpdateWithoutTourInput;
  where: TourTourCategoryWhereUniqueInput;
};

export type TourTourCategoryUpdateWithoutTourInput = {
  status?: InputMaybe<Status>;
  tourCategory?: InputMaybe<TourCategoryUpdateOneRequiredWithoutTourTourCategoryInput>;
};

export type TourTourCategoryUpsertWithWhereUniqueWithoutTourInput = {
  create: TourTourCategoryCreateWithoutTourInput;
  update: TourTourCategoryUpdateWithoutTourInput;
  where: TourTourCategoryWhereUniqueInput;
};

export type TourTourCategoryWhereInput = {
  AND?: InputMaybe<Array<TourTourCategoryWhereInput>>;
  NOT?: InputMaybe<Array<TourTourCategoryWhereInput>>;
  OR?: InputMaybe<Array<TourTourCategoryWhereInput>>;
  status?: InputMaybe<EnumStatusFilter>;
  tour?: InputMaybe<TourRelationFilter>;
  tourCategory?: InputMaybe<TourCategoryRelationFilter>;
  tourCategoryId?: InputMaybe<IntFilter>;
  tourId?: InputMaybe<IntFilter>;
};

export type TourTourCategoryWhereUniqueInput = {
  tourId_tourCategoryId?: InputMaybe<TourTourCategoryTourIdTourCategoryIdCompoundUniqueInput>;
};

export type TourUpdateOneWithoutTourCityInput = {
  connect?: InputMaybe<TourWhereUniqueInput>;
  connectOrCreate?: InputMaybe<TourCreateOrConnectWithoutTourCityInput>;
  create?: InputMaybe<TourCreateWithoutTourCityInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<TourUpdateWithoutTourCityInput>;
  upsert?: InputMaybe<TourUpsertWithoutTourCityInput>;
};

export type TourUpdateWithoutTourCityInput = {
  TourLanguages?: InputMaybe<TourLanguagesUpdateManyWithoutTourInput>;
  TourTourCategory?: InputMaybe<TourTourCategoryUpdateManyWithoutTourInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  currency?: InputMaybe<CurrencyUpdateOneRequiredWithoutTourInput>;
  guide?: InputMaybe<UserUpdateOneRequiredWithoutTourInput>;
  maxCapacity?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['Float']>;
  status?: InputMaybe<Status>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type TourUpsertWithoutTourCityInput = {
  create: TourCreateWithoutTourCityInput;
  update: TourUpdateWithoutTourCityInput;
};

export type TourWhereInput = {
  AND?: InputMaybe<Array<TourWhereInput>>;
  NOT?: InputMaybe<Array<TourWhereInput>>;
  OR?: InputMaybe<Array<TourWhereInput>>;
  TourCity?: InputMaybe<TourCityListRelationFilter>;
  TourLanguages?: InputMaybe<TourLanguagesListRelationFilter>;
  TourTourCategory?: InputMaybe<TourTourCategoryListRelationFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  currency?: InputMaybe<CurrencyRelationFilter>;
  currencyId?: InputMaybe<IntFilter>;
  guide?: InputMaybe<UserRelationFilter>;
  guideId?: InputMaybe<IntFilter>;
  id?: InputMaybe<IntFilter>;
  maxCapacity?: InputMaybe<IntFilter>;
  name?: InputMaybe<StringFilter>;
  price?: InputMaybe<FloatFilter>;
  status?: InputMaybe<EnumStatusFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type TourWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
};

export type UpdateUserInput = {
  bio?: InputMaybe<Scalars['String']>;
  country?: InputMaybe<CountryUpdateOneWithoutUserInput>;
  email?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  Tour?: Maybe<Array<Tour>>;
  _count: UserCount;
  bio?: Maybe<Scalars['String']>;
  country?: Maybe<Country>;
  countryId?: Maybe<Scalars['Int']>;
  createdAt: Scalars['DateTime'];
  email: Scalars['String'];
  firstName: Scalars['String'];
  hash?: Maybe<Scalars['String']>;
  hashExpiredAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['ID'];
  image?: Maybe<Scalars['String']>;
  isVerified: YesNo;
  lastName: Scalars['String'];
  rating?: Maybe<Scalars['Float']>;
  role: UserRole;
  status: Status;
  updatedAt: Scalars['DateTime'];
};

export type UserAvgAggregate = {
  __typename?: 'UserAvgAggregate';
  countryId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  rating?: Maybe<Scalars['Float']>;
};

export type UserCount = {
  __typename?: 'UserCount';
  Tour: Scalars['Int'];
};

export type UserCountAggregate = {
  __typename?: 'UserCountAggregate';
  _all: Scalars['Int'];
  bio: Scalars['Int'];
  countryId: Scalars['Int'];
  createdAt: Scalars['Int'];
  email: Scalars['Int'];
  firstName: Scalars['Int'];
  hash: Scalars['Int'];
  hashExpiredAt: Scalars['Int'];
  id: Scalars['Int'];
  image: Scalars['Int'];
  isVerified: Scalars['Int'];
  lastName: Scalars['Int'];
  rating: Scalars['Int'];
  role: Scalars['Int'];
  status: Scalars['Int'];
  updatedAt: Scalars['Int'];
};

export type UserCreateInput = {
  Tour?: InputMaybe<TourCreateNestedManyWithoutGuideInput>;
  bio?: InputMaybe<Scalars['String']>;
  country?: InputMaybe<CountryCreateNestedOneWithoutUserInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  email: Scalars['String'];
  firstName: Scalars['String'];
  hash?: InputMaybe<Scalars['String']>;
  hashExpiredAt?: InputMaybe<Scalars['DateTime']>;
  image?: InputMaybe<Scalars['String']>;
  isVerified?: InputMaybe<YesNo>;
  lastName: Scalars['String'];
  password: Scalars['String'];
  rating?: InputMaybe<Scalars['Float']>;
  role: UserRole;
  status?: InputMaybe<Status>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type UserCreateManyCountryInput = {
  bio?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  email: Scalars['String'];
  firstName: Scalars['String'];
  hash?: InputMaybe<Scalars['String']>;
  hashExpiredAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['Int']>;
  image?: InputMaybe<Scalars['String']>;
  isVerified?: InputMaybe<YesNo>;
  lastName: Scalars['String'];
  password: Scalars['String'];
  rating?: InputMaybe<Scalars['Float']>;
  role: UserRole;
  status?: InputMaybe<Status>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type UserCreateManyCountryInputEnvelope = {
  data: Array<UserCreateManyCountryInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type UserCreateNestedManyWithoutCountryInput = {
  connect?: InputMaybe<Array<UserWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UserCreateOrConnectWithoutCountryInput>>;
  create?: InputMaybe<Array<UserCreateWithoutCountryInput>>;
  createMany?: InputMaybe<UserCreateManyCountryInputEnvelope>;
};

export type UserCreateNestedOneWithoutTourInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutTourInput>;
  create?: InputMaybe<UserCreateWithoutTourInput>;
};

export type UserCreateOrConnectWithoutCountryInput = {
  create: UserCreateWithoutCountryInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutTourInput = {
  create: UserCreateWithoutTourInput;
  where: UserWhereUniqueInput;
};

export type UserCreateWithoutCountryInput = {
  Tour?: InputMaybe<TourCreateNestedManyWithoutGuideInput>;
  bio?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  email: Scalars['String'];
  firstName: Scalars['String'];
  hash?: InputMaybe<Scalars['String']>;
  hashExpiredAt?: InputMaybe<Scalars['DateTime']>;
  image?: InputMaybe<Scalars['String']>;
  isVerified?: InputMaybe<YesNo>;
  lastName: Scalars['String'];
  password: Scalars['String'];
  rating?: InputMaybe<Scalars['Float']>;
  role: UserRole;
  status?: InputMaybe<Status>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type UserCreateWithoutTourInput = {
  bio?: InputMaybe<Scalars['String']>;
  country?: InputMaybe<CountryCreateNestedOneWithoutUserInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  email: Scalars['String'];
  firstName: Scalars['String'];
  hash?: InputMaybe<Scalars['String']>;
  hashExpiredAt?: InputMaybe<Scalars['DateTime']>;
  image?: InputMaybe<Scalars['String']>;
  isVerified?: InputMaybe<YesNo>;
  lastName: Scalars['String'];
  password: Scalars['String'];
  rating?: InputMaybe<Scalars['Float']>;
  role: UserRole;
  status?: InputMaybe<Status>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type UserListRelationFilter = {
  every?: InputMaybe<UserWhereInput>;
  none?: InputMaybe<UserWhereInput>;
  some?: InputMaybe<UserWhereInput>;
};

export type UserMaxAggregate = {
  __typename?: 'UserMaxAggregate';
  bio?: Maybe<Scalars['String']>;
  countryId?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  hash?: Maybe<Scalars['String']>;
  hashExpiredAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  image?: Maybe<Scalars['String']>;
  isVerified?: Maybe<YesNo>;
  lastName?: Maybe<Scalars['String']>;
  rating?: Maybe<Scalars['Float']>;
  role?: Maybe<UserRole>;
  status?: Maybe<Status>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type UserMinAggregate = {
  __typename?: 'UserMinAggregate';
  bio?: Maybe<Scalars['String']>;
  countryId?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  hash?: Maybe<Scalars['String']>;
  hashExpiredAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  image?: Maybe<Scalars['String']>;
  isVerified?: Maybe<YesNo>;
  lastName?: Maybe<Scalars['String']>;
  rating?: Maybe<Scalars['Float']>;
  role?: Maybe<UserRole>;
  status?: Maybe<Status>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type UserOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type UserOrderByWithRelationInput = {
  Tour?: InputMaybe<TourOrderByRelationAggregateInput>;
  bio?: InputMaybe<SortOrder>;
  country?: InputMaybe<CountryOrderByWithRelationInput>;
  countryId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  firstName?: InputMaybe<SortOrder>;
  hash?: InputMaybe<SortOrder>;
  hashExpiredAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  image?: InputMaybe<SortOrder>;
  isVerified?: InputMaybe<SortOrder>;
  lastName?: InputMaybe<SortOrder>;
  password?: InputMaybe<SortOrder>;
  rating?: InputMaybe<SortOrder>;
  role?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type UserRelationFilter = {
  is?: InputMaybe<UserWhereInput>;
  isNot?: InputMaybe<UserWhereInput>;
};

export enum UserRole {
  Admin = 'ADMIN',
  Guide = 'GUIDE',
  User = 'USER'
}

export enum UserScalarFieldEnum {
  Bio = 'bio',
  CountryId = 'countryId',
  CreatedAt = 'createdAt',
  Email = 'email',
  FirstName = 'firstName',
  Hash = 'hash',
  HashExpiredAt = 'hashExpiredAt',
  Id = 'id',
  Image = 'image',
  IsVerified = 'isVerified',
  LastName = 'lastName',
  Password = 'password',
  Rating = 'rating',
  Role = 'role',
  Status = 'status',
  UpdatedAt = 'updatedAt'
}

export type UserSumAggregate = {
  __typename?: 'UserSumAggregate';
  countryId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  rating?: Maybe<Scalars['Float']>;
};

export type UserUpdateOneRequiredWithoutTourInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutTourInput>;
  create?: InputMaybe<UserCreateWithoutTourInput>;
  update?: InputMaybe<UserUpdateWithoutTourInput>;
  upsert?: InputMaybe<UserUpsertWithoutTourInput>;
};

export type UserUpdateWithoutTourInput = {
  bio?: InputMaybe<Scalars['String']>;
  country?: InputMaybe<CountryUpdateOneWithoutUserInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  email?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  hash?: InputMaybe<Scalars['String']>;
  hashExpiredAt?: InputMaybe<Scalars['DateTime']>;
  image?: InputMaybe<Scalars['String']>;
  isVerified?: InputMaybe<YesNo>;
  lastName?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  rating?: InputMaybe<Scalars['Float']>;
  role?: InputMaybe<UserRole>;
  status?: InputMaybe<Status>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type UserUpsertWithoutTourInput = {
  create: UserCreateWithoutTourInput;
  update: UserUpdateWithoutTourInput;
};

export type UserWhereInput = {
  AND?: InputMaybe<Array<UserWhereInput>>;
  NOT?: InputMaybe<Array<UserWhereInput>>;
  OR?: InputMaybe<Array<UserWhereInput>>;
  Tour?: InputMaybe<TourListRelationFilter>;
  bio?: InputMaybe<StringFilter>;
  country?: InputMaybe<CountryRelationFilter>;
  countryId?: InputMaybe<IntFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  email?: InputMaybe<StringFilter>;
  firstName?: InputMaybe<StringFilter>;
  hash?: InputMaybe<StringFilter>;
  hashExpiredAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IntFilter>;
  image?: InputMaybe<StringFilter>;
  isVerified?: InputMaybe<EnumYesNoFilter>;
  lastName?: InputMaybe<StringFilter>;
  password?: InputMaybe<StringFilter>;
  rating?: InputMaybe<FloatFilter>;
  role?: InputMaybe<EnumUserRoleFilter>;
  status?: InputMaybe<EnumStatusFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type UserWhereUniqueInput = {
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
};

export enum YesNo {
  No = 'NO',
  Yes = 'YES'
}

export type ResetPassword = {
  hash: Scalars['String'];
  password: Scalars['String'];
};
