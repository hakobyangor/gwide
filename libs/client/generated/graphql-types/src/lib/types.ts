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
  GuideCity?: Maybe<Array<GuideCity>>;
  GuideLanguages?: Maybe<Array<GuideLanguages>>;
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
  GuideCity: Scalars['Int'];
  GuideLanguages: Scalars['Int'];
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

export type CityCreateNestedOneWithoutGuideCityInput = {
  connect?: InputMaybe<CityWhereUniqueInput>;
  connectOrCreate?: InputMaybe<CityCreateOrConnectWithoutGuideCityInput>;
  create?: InputMaybe<CityCreateWithoutGuideCityInput>;
};

export type CityCreateNestedOneWithoutGuideLanguagesInput = {
  connect?: InputMaybe<CityWhereUniqueInput>;
  connectOrCreate?: InputMaybe<CityCreateOrConnectWithoutGuideLanguagesInput>;
  create?: InputMaybe<CityCreateWithoutGuideLanguagesInput>;
};

export type CityCreateOrConnectWithoutCountryInput = {
  create: CityCreateWithoutCountryInput;
  where: CityWhereUniqueInput;
};

export type CityCreateOrConnectWithoutGuideCityInput = {
  create: CityCreateWithoutGuideCityInput;
  where: CityWhereUniqueInput;
};

export type CityCreateOrConnectWithoutGuideLanguagesInput = {
  create: CityCreateWithoutGuideLanguagesInput;
  where: CityWhereUniqueInput;
};

export type CityCreateWithoutCountryInput = {
  GuideCity?: InputMaybe<GuideCityCreateNestedManyWithoutCityInput>;
  GuideLanguages?: InputMaybe<GuideLanguagesCreateNestedManyWithoutCityInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  name: Scalars['String'];
  status?: InputMaybe<Status>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type CityCreateWithoutGuideCityInput = {
  GuideLanguages?: InputMaybe<GuideLanguagesCreateNestedManyWithoutCityInput>;
  country: CountryCreateNestedOneWithoutCityInput;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  name: Scalars['String'];
  status?: InputMaybe<Status>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type CityCreateWithoutGuideLanguagesInput = {
  GuideCity?: InputMaybe<GuideCityCreateNestedManyWithoutCityInput>;
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

export type CityUpdateOneRequiredWithoutGuideCityInput = {
  connect?: InputMaybe<CityWhereUniqueInput>;
  connectOrCreate?: InputMaybe<CityCreateOrConnectWithoutGuideCityInput>;
  create?: InputMaybe<CityCreateWithoutGuideCityInput>;
  update?: InputMaybe<CityUpdateWithoutGuideCityInput>;
  upsert?: InputMaybe<CityUpsertWithoutGuideCityInput>;
};

export type CityUpdateOneWithoutGuideLanguagesInput = {
  connect?: InputMaybe<CityWhereUniqueInput>;
  connectOrCreate?: InputMaybe<CityCreateOrConnectWithoutGuideLanguagesInput>;
  create?: InputMaybe<CityCreateWithoutGuideLanguagesInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<CityUpdateWithoutGuideLanguagesInput>;
  upsert?: InputMaybe<CityUpsertWithoutGuideLanguagesInput>;
};

export type CityUpdateWithWhereUniqueWithoutCountryInput = {
  data: CityUpdateWithoutCountryInput;
  where: CityWhereUniqueInput;
};

export type CityUpdateWithoutCountryInput = {
  GuideCity?: InputMaybe<GuideCityUpdateManyWithoutCityInput>;
  GuideLanguages?: InputMaybe<GuideLanguagesUpdateManyWithoutCityInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  name?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Status>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type CityUpdateWithoutGuideCityInput = {
  GuideLanguages?: InputMaybe<GuideLanguagesUpdateManyWithoutCityInput>;
  country?: InputMaybe<CountryUpdateOneRequiredWithoutCityInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  name?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Status>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type CityUpdateWithoutGuideLanguagesInput = {
  GuideCity?: InputMaybe<GuideCityUpdateManyWithoutCityInput>;
  country?: InputMaybe<CountryUpdateOneRequiredWithoutCityInput>;
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

export type CityUpsertWithoutGuideCityInput = {
  create: CityCreateWithoutGuideCityInput;
  update: CityUpdateWithoutGuideCityInput;
};

export type CityUpsertWithoutGuideLanguagesInput = {
  create: CityCreateWithoutGuideLanguagesInput;
  update: CityUpdateWithoutGuideLanguagesInput;
};

export type CityWhereInput = {
  AND?: InputMaybe<Array<CityWhereInput>>;
  GuideCity?: InputMaybe<GuideCityListRelationFilter>;
  GuideLanguages?: InputMaybe<GuideLanguagesListRelationFilter>;
  NOT?: InputMaybe<Array<CityWhereInput>>;
  OR?: InputMaybe<Array<CityWhereInput>>;
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

export type CountryUpdateOneRequiredWithoutCityInput = {
  connect?: InputMaybe<CountryWhereUniqueInput>;
  connectOrCreate?: InputMaybe<CountryCreateOrConnectWithoutCityInput>;
  create?: InputMaybe<CountryCreateWithoutCityInput>;
  update?: InputMaybe<CountryUpdateWithoutCityInput>;
  upsert?: InputMaybe<CountryUpsertWithoutCityInput>;
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

export type CountryUpdateWithoutCityInput = {
  User?: InputMaybe<UserUpdateManyWithoutCountryInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  name?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Status>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type CountryUpdateWithoutUserInput = {
  City?: InputMaybe<CityUpdateManyWithoutCountryInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  name?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Status>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type CountryUpsertWithoutCityInput = {
  create: CountryCreateWithoutCityInput;
  update: CountryUpdateWithoutCityInput;
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

export type GuideCategory = {
  __typename?: 'GuideCategory';
  GuideGuideCategory?: Maybe<Array<GuideGuideCategory>>;
  _count: GuideCategoryCount;
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  name: Scalars['String'];
  status: Status;
  updatedAt: Scalars['DateTime'];
};

export type GuideCategoryAvgAggregate = {
  __typename?: 'GuideCategoryAvgAggregate';
  id?: Maybe<Scalars['Float']>;
};

export type GuideCategoryCount = {
  __typename?: 'GuideCategoryCount';
  GuideGuideCategory: Scalars['Int'];
};

export type GuideCategoryCountAggregate = {
  __typename?: 'GuideCategoryCountAggregate';
  _all: Scalars['Int'];
  createdAt: Scalars['Int'];
  id: Scalars['Int'];
  name: Scalars['Int'];
  status: Scalars['Int'];
  updatedAt: Scalars['Int'];
};

export type GuideCategoryCreateNestedOneWithoutGuideGuideCategoryInput = {
  connect?: InputMaybe<GuideCategoryWhereUniqueInput>;
  connectOrCreate?: InputMaybe<GuideCategoryCreateOrConnectWithoutGuideGuideCategoryInput>;
  create?: InputMaybe<GuideCategoryCreateWithoutGuideGuideCategoryInput>;
};

export type GuideCategoryCreateOrConnectWithoutGuideGuideCategoryInput = {
  create: GuideCategoryCreateWithoutGuideGuideCategoryInput;
  where: GuideCategoryWhereUniqueInput;
};

export type GuideCategoryCreateWithoutGuideGuideCategoryInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  name: Scalars['String'];
  status?: InputMaybe<Status>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type GuideCategoryMaxAggregate = {
  __typename?: 'GuideCategoryMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  status?: Maybe<Status>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type GuideCategoryMinAggregate = {
  __typename?: 'GuideCategoryMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  status?: Maybe<Status>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type GuideCategoryRelationFilter = {
  is?: InputMaybe<GuideCategoryWhereInput>;
  isNot?: InputMaybe<GuideCategoryWhereInput>;
};

export type GuideCategorySumAggregate = {
  __typename?: 'GuideCategorySumAggregate';
  id?: Maybe<Scalars['Int']>;
};

export type GuideCategoryUpdateOneRequiredWithoutGuideGuideCategoryInput = {
  connect?: InputMaybe<GuideCategoryWhereUniqueInput>;
  connectOrCreate?: InputMaybe<GuideCategoryCreateOrConnectWithoutGuideGuideCategoryInput>;
  create?: InputMaybe<GuideCategoryCreateWithoutGuideGuideCategoryInput>;
  update?: InputMaybe<GuideCategoryUpdateWithoutGuideGuideCategoryInput>;
  upsert?: InputMaybe<GuideCategoryUpsertWithoutGuideGuideCategoryInput>;
};

export type GuideCategoryUpdateWithoutGuideGuideCategoryInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  name?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Status>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type GuideCategoryUpsertWithoutGuideGuideCategoryInput = {
  create: GuideCategoryCreateWithoutGuideGuideCategoryInput;
  update: GuideCategoryUpdateWithoutGuideGuideCategoryInput;
};

export type GuideCategoryWhereInput = {
  AND?: InputMaybe<Array<GuideCategoryWhereInput>>;
  GuideGuideCategory?: InputMaybe<GuideGuideCategoryListRelationFilter>;
  NOT?: InputMaybe<Array<GuideCategoryWhereInput>>;
  OR?: InputMaybe<Array<GuideCategoryWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IntFilter>;
  name?: InputMaybe<StringFilter>;
  status?: InputMaybe<EnumStatusFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type GuideCategoryWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
};

export type GuideCity = {
  __typename?: 'GuideCity';
  city: City;
  cityId: Scalars['Int'];
  status: Status;
  user: User;
  userId: Scalars['Int'];
};

export type GuideCityAvgAggregate = {
  __typename?: 'GuideCityAvgAggregate';
  cityId?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

export type GuideCityCountAggregate = {
  __typename?: 'GuideCityCountAggregate';
  _all: Scalars['Int'];
  cityId: Scalars['Int'];
  status: Scalars['Int'];
  userId: Scalars['Int'];
};

export type GuideCityCreateManyCityInput = {
  status?: InputMaybe<Status>;
  userId: Scalars['Int'];
};

export type GuideCityCreateManyCityInputEnvelope = {
  data: Array<GuideCityCreateManyCityInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type GuideCityCreateManyUserInput = {
  cityId: Scalars['Int'];
  status?: InputMaybe<Status>;
};

export type GuideCityCreateManyUserInputEnvelope = {
  data: Array<GuideCityCreateManyUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type GuideCityCreateNestedManyWithoutCityInput = {
  connect?: InputMaybe<Array<GuideCityWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<GuideCityCreateOrConnectWithoutCityInput>>;
  create?: InputMaybe<Array<GuideCityCreateWithoutCityInput>>;
  createMany?: InputMaybe<GuideCityCreateManyCityInputEnvelope>;
};

export type GuideCityCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<GuideCityWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<GuideCityCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<GuideCityCreateWithoutUserInput>>;
  createMany?: InputMaybe<GuideCityCreateManyUserInputEnvelope>;
};

export type GuideCityCreateOrConnectWithoutCityInput = {
  create: GuideCityCreateWithoutCityInput;
  where: GuideCityWhereUniqueInput;
};

export type GuideCityCreateOrConnectWithoutUserInput = {
  create: GuideCityCreateWithoutUserInput;
  where: GuideCityWhereUniqueInput;
};

export type GuideCityCreateWithoutCityInput = {
  status?: InputMaybe<Status>;
  user: UserCreateNestedOneWithoutGuideCityInput;
};

export type GuideCityCreateWithoutUserInput = {
  city: CityCreateNestedOneWithoutGuideCityInput;
  status?: InputMaybe<Status>;
};

export type GuideCityListRelationFilter = {
  every?: InputMaybe<GuideCityWhereInput>;
  none?: InputMaybe<GuideCityWhereInput>;
  some?: InputMaybe<GuideCityWhereInput>;
};

export type GuideCityMaxAggregate = {
  __typename?: 'GuideCityMaxAggregate';
  cityId?: Maybe<Scalars['Int']>;
  status?: Maybe<Status>;
  userId?: Maybe<Scalars['Int']>;
};

export type GuideCityMinAggregate = {
  __typename?: 'GuideCityMinAggregate';
  cityId?: Maybe<Scalars['Int']>;
  status?: Maybe<Status>;
  userId?: Maybe<Scalars['Int']>;
};

export type GuideCityOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type GuideCityScalarWhereInput = {
  AND?: InputMaybe<Array<GuideCityScalarWhereInput>>;
  NOT?: InputMaybe<Array<GuideCityScalarWhereInput>>;
  OR?: InputMaybe<Array<GuideCityScalarWhereInput>>;
  cityId?: InputMaybe<IntFilter>;
  status?: InputMaybe<EnumStatusFilter>;
  userId?: InputMaybe<IntFilter>;
};

export type GuideCitySumAggregate = {
  __typename?: 'GuideCitySumAggregate';
  cityId?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
};

export type GuideCityUpdateManyMutationInput = {
  status?: InputMaybe<Status>;
};

export type GuideCityUpdateManyWithWhereWithoutCityInput = {
  data: GuideCityUpdateManyMutationInput;
  where: GuideCityScalarWhereInput;
};

export type GuideCityUpdateManyWithWhereWithoutUserInput = {
  data: GuideCityUpdateManyMutationInput;
  where: GuideCityScalarWhereInput;
};

export type GuideCityUpdateManyWithoutCityInput = {
  connect?: InputMaybe<Array<GuideCityWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<GuideCityCreateOrConnectWithoutCityInput>>;
  create?: InputMaybe<Array<GuideCityCreateWithoutCityInput>>;
  createMany?: InputMaybe<GuideCityCreateManyCityInputEnvelope>;
  delete?: InputMaybe<Array<GuideCityWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<GuideCityScalarWhereInput>>;
  disconnect?: InputMaybe<Array<GuideCityWhereUniqueInput>>;
  set?: InputMaybe<Array<GuideCityWhereUniqueInput>>;
  update?: InputMaybe<Array<GuideCityUpdateWithWhereUniqueWithoutCityInput>>;
  updateMany?: InputMaybe<Array<GuideCityUpdateManyWithWhereWithoutCityInput>>;
  upsert?: InputMaybe<Array<GuideCityUpsertWithWhereUniqueWithoutCityInput>>;
};

export type GuideCityUpdateManyWithoutUserInput = {
  connect?: InputMaybe<Array<GuideCityWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<GuideCityCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<GuideCityCreateWithoutUserInput>>;
  createMany?: InputMaybe<GuideCityCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<GuideCityWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<GuideCityScalarWhereInput>>;
  disconnect?: InputMaybe<Array<GuideCityWhereUniqueInput>>;
  set?: InputMaybe<Array<GuideCityWhereUniqueInput>>;
  update?: InputMaybe<Array<GuideCityUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: InputMaybe<Array<GuideCityUpdateManyWithWhereWithoutUserInput>>;
  upsert?: InputMaybe<Array<GuideCityUpsertWithWhereUniqueWithoutUserInput>>;
};

export type GuideCityUpdateWithWhereUniqueWithoutCityInput = {
  data: GuideCityUpdateWithoutCityInput;
  where: GuideCityWhereUniqueInput;
};

export type GuideCityUpdateWithWhereUniqueWithoutUserInput = {
  data: GuideCityUpdateWithoutUserInput;
  where: GuideCityWhereUniqueInput;
};

export type GuideCityUpdateWithoutCityInput = {
  status?: InputMaybe<Status>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutGuideCityInput>;
};

export type GuideCityUpdateWithoutUserInput = {
  city?: InputMaybe<CityUpdateOneRequiredWithoutGuideCityInput>;
  status?: InputMaybe<Status>;
};

export type GuideCityUpsertWithWhereUniqueWithoutCityInput = {
  create: GuideCityCreateWithoutCityInput;
  update: GuideCityUpdateWithoutCityInput;
  where: GuideCityWhereUniqueInput;
};

export type GuideCityUpsertWithWhereUniqueWithoutUserInput = {
  create: GuideCityCreateWithoutUserInput;
  update: GuideCityUpdateWithoutUserInput;
  where: GuideCityWhereUniqueInput;
};

export type GuideCityUserIdCityIdCompoundUniqueInput = {
  cityId: Scalars['Int'];
  userId: Scalars['Int'];
};

export type GuideCityWhereInput = {
  AND?: InputMaybe<Array<GuideCityWhereInput>>;
  NOT?: InputMaybe<Array<GuideCityWhereInput>>;
  OR?: InputMaybe<Array<GuideCityWhereInput>>;
  city?: InputMaybe<CityRelationFilter>;
  cityId?: InputMaybe<IntFilter>;
  status?: InputMaybe<EnumStatusFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<IntFilter>;
};

export type GuideCityWhereUniqueInput = {
  userId_cityId?: InputMaybe<GuideCityUserIdCityIdCompoundUniqueInput>;
};

export type GuideGuideCategory = {
  __typename?: 'GuideGuideCategory';
  guideCategory: GuideCategory;
  guideCategoryId: Scalars['Int'];
  status: Status;
  user: User;
  userId: Scalars['Int'];
};

export type GuideGuideCategoryAvgAggregate = {
  __typename?: 'GuideGuideCategoryAvgAggregate';
  guideCategoryId?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

export type GuideGuideCategoryCountAggregate = {
  __typename?: 'GuideGuideCategoryCountAggregate';
  _all: Scalars['Int'];
  guideCategoryId: Scalars['Int'];
  status: Scalars['Int'];
  userId: Scalars['Int'];
};

export type GuideGuideCategoryCreateManyUserInput = {
  guideCategoryId: Scalars['Int'];
  status?: InputMaybe<Status>;
};

export type GuideGuideCategoryCreateManyUserInputEnvelope = {
  data: Array<GuideGuideCategoryCreateManyUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type GuideGuideCategoryCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<GuideGuideCategoryWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<GuideGuideCategoryCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<GuideGuideCategoryCreateWithoutUserInput>>;
  createMany?: InputMaybe<GuideGuideCategoryCreateManyUserInputEnvelope>;
};

export type GuideGuideCategoryCreateOrConnectWithoutUserInput = {
  create: GuideGuideCategoryCreateWithoutUserInput;
  where: GuideGuideCategoryWhereUniqueInput;
};

export type GuideGuideCategoryCreateWithoutUserInput = {
  guideCategory: GuideCategoryCreateNestedOneWithoutGuideGuideCategoryInput;
  status?: InputMaybe<Status>;
};

export type GuideGuideCategoryListRelationFilter = {
  every?: InputMaybe<GuideGuideCategoryWhereInput>;
  none?: InputMaybe<GuideGuideCategoryWhereInput>;
  some?: InputMaybe<GuideGuideCategoryWhereInput>;
};

export type GuideGuideCategoryMaxAggregate = {
  __typename?: 'GuideGuideCategoryMaxAggregate';
  guideCategoryId?: Maybe<Scalars['Int']>;
  status?: Maybe<Status>;
  userId?: Maybe<Scalars['Int']>;
};

export type GuideGuideCategoryMinAggregate = {
  __typename?: 'GuideGuideCategoryMinAggregate';
  guideCategoryId?: Maybe<Scalars['Int']>;
  status?: Maybe<Status>;
  userId?: Maybe<Scalars['Int']>;
};

export type GuideGuideCategoryOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type GuideGuideCategoryScalarWhereInput = {
  AND?: InputMaybe<Array<GuideGuideCategoryScalarWhereInput>>;
  NOT?: InputMaybe<Array<GuideGuideCategoryScalarWhereInput>>;
  OR?: InputMaybe<Array<GuideGuideCategoryScalarWhereInput>>;
  guideCategoryId?: InputMaybe<IntFilter>;
  status?: InputMaybe<EnumStatusFilter>;
  userId?: InputMaybe<IntFilter>;
};

export type GuideGuideCategorySumAggregate = {
  __typename?: 'GuideGuideCategorySumAggregate';
  guideCategoryId?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
};

export type GuideGuideCategoryUpdateManyMutationInput = {
  status?: InputMaybe<Status>;
};

export type GuideGuideCategoryUpdateManyWithWhereWithoutUserInput = {
  data: GuideGuideCategoryUpdateManyMutationInput;
  where: GuideGuideCategoryScalarWhereInput;
};

export type GuideGuideCategoryUpdateManyWithoutUserInput = {
  connect?: InputMaybe<Array<GuideGuideCategoryWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<GuideGuideCategoryCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<GuideGuideCategoryCreateWithoutUserInput>>;
  createMany?: InputMaybe<GuideGuideCategoryCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<GuideGuideCategoryWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<GuideGuideCategoryScalarWhereInput>>;
  disconnect?: InputMaybe<Array<GuideGuideCategoryWhereUniqueInput>>;
  set?: InputMaybe<Array<GuideGuideCategoryWhereUniqueInput>>;
  update?: InputMaybe<Array<GuideGuideCategoryUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: InputMaybe<Array<GuideGuideCategoryUpdateManyWithWhereWithoutUserInput>>;
  upsert?: InputMaybe<Array<GuideGuideCategoryUpsertWithWhereUniqueWithoutUserInput>>;
};

export type GuideGuideCategoryUpdateWithWhereUniqueWithoutUserInput = {
  data: GuideGuideCategoryUpdateWithoutUserInput;
  where: GuideGuideCategoryWhereUniqueInput;
};

export type GuideGuideCategoryUpdateWithoutUserInput = {
  guideCategory?: InputMaybe<GuideCategoryUpdateOneRequiredWithoutGuideGuideCategoryInput>;
  status?: InputMaybe<Status>;
};

export type GuideGuideCategoryUpsertWithWhereUniqueWithoutUserInput = {
  create: GuideGuideCategoryCreateWithoutUserInput;
  update: GuideGuideCategoryUpdateWithoutUserInput;
  where: GuideGuideCategoryWhereUniqueInput;
};

export type GuideGuideCategoryUserIdGuideCategoryIdCompoundUniqueInput = {
  guideCategoryId: Scalars['Int'];
  userId: Scalars['Int'];
};

export type GuideGuideCategoryWhereInput = {
  AND?: InputMaybe<Array<GuideGuideCategoryWhereInput>>;
  NOT?: InputMaybe<Array<GuideGuideCategoryWhereInput>>;
  OR?: InputMaybe<Array<GuideGuideCategoryWhereInput>>;
  guideCategory?: InputMaybe<GuideCategoryRelationFilter>;
  guideCategoryId?: InputMaybe<IntFilter>;
  status?: InputMaybe<EnumStatusFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<IntFilter>;
};

export type GuideGuideCategoryWhereUniqueInput = {
  userId_guideCategoryId?: InputMaybe<GuideGuideCategoryUserIdGuideCategoryIdCompoundUniqueInput>;
};

export type GuideLanguages = {
  __typename?: 'GuideLanguages';
  City?: Maybe<City>;
  cityId?: Maybe<Scalars['Int']>;
  language: Languages;
  languageId: Scalars['Int'];
  status: Status;
  user: User;
  userId: Scalars['Int'];
};

export type GuideLanguagesAvgAggregate = {
  __typename?: 'GuideLanguagesAvgAggregate';
  cityId?: Maybe<Scalars['Float']>;
  languageId?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

export type GuideLanguagesCountAggregate = {
  __typename?: 'GuideLanguagesCountAggregate';
  _all: Scalars['Int'];
  cityId: Scalars['Int'];
  languageId: Scalars['Int'];
  status: Scalars['Int'];
  userId: Scalars['Int'];
};

export type GuideLanguagesCreateManyCityInput = {
  languageId: Scalars['Int'];
  status?: InputMaybe<Status>;
  userId: Scalars['Int'];
};

export type GuideLanguagesCreateManyCityInputEnvelope = {
  data: Array<GuideLanguagesCreateManyCityInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type GuideLanguagesCreateManyUserInput = {
  cityId?: InputMaybe<Scalars['Int']>;
  languageId: Scalars['Int'];
  status?: InputMaybe<Status>;
};

export type GuideLanguagesCreateManyUserInputEnvelope = {
  data: Array<GuideLanguagesCreateManyUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type GuideLanguagesCreateNestedManyWithoutCityInput = {
  connect?: InputMaybe<Array<GuideLanguagesWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<GuideLanguagesCreateOrConnectWithoutCityInput>>;
  create?: InputMaybe<Array<GuideLanguagesCreateWithoutCityInput>>;
  createMany?: InputMaybe<GuideLanguagesCreateManyCityInputEnvelope>;
};

export type GuideLanguagesCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<GuideLanguagesWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<GuideLanguagesCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<GuideLanguagesCreateWithoutUserInput>>;
  createMany?: InputMaybe<GuideLanguagesCreateManyUserInputEnvelope>;
};

export type GuideLanguagesCreateOrConnectWithoutCityInput = {
  create: GuideLanguagesCreateWithoutCityInput;
  where: GuideLanguagesWhereUniqueInput;
};

export type GuideLanguagesCreateOrConnectWithoutUserInput = {
  create: GuideLanguagesCreateWithoutUserInput;
  where: GuideLanguagesWhereUniqueInput;
};

export type GuideLanguagesCreateWithoutCityInput = {
  language: LanguagesCreateNestedOneWithoutGuideLanguagesInput;
  status?: InputMaybe<Status>;
  user: UserCreateNestedOneWithoutGuideLanguagesInput;
};

export type GuideLanguagesCreateWithoutUserInput = {
  City?: InputMaybe<CityCreateNestedOneWithoutGuideLanguagesInput>;
  language: LanguagesCreateNestedOneWithoutGuideLanguagesInput;
  status?: InputMaybe<Status>;
};

export type GuideLanguagesListRelationFilter = {
  every?: InputMaybe<GuideLanguagesWhereInput>;
  none?: InputMaybe<GuideLanguagesWhereInput>;
  some?: InputMaybe<GuideLanguagesWhereInput>;
};

export type GuideLanguagesMaxAggregate = {
  __typename?: 'GuideLanguagesMaxAggregate';
  cityId?: Maybe<Scalars['Int']>;
  languageId?: Maybe<Scalars['Int']>;
  status?: Maybe<Status>;
  userId?: Maybe<Scalars['Int']>;
};

export type GuideLanguagesMinAggregate = {
  __typename?: 'GuideLanguagesMinAggregate';
  cityId?: Maybe<Scalars['Int']>;
  languageId?: Maybe<Scalars['Int']>;
  status?: Maybe<Status>;
  userId?: Maybe<Scalars['Int']>;
};

export type GuideLanguagesOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type GuideLanguagesScalarWhereInput = {
  AND?: InputMaybe<Array<GuideLanguagesScalarWhereInput>>;
  NOT?: InputMaybe<Array<GuideLanguagesScalarWhereInput>>;
  OR?: InputMaybe<Array<GuideLanguagesScalarWhereInput>>;
  cityId?: InputMaybe<IntFilter>;
  languageId?: InputMaybe<IntFilter>;
  status?: InputMaybe<EnumStatusFilter>;
  userId?: InputMaybe<IntFilter>;
};

export type GuideLanguagesSumAggregate = {
  __typename?: 'GuideLanguagesSumAggregate';
  cityId?: Maybe<Scalars['Int']>;
  languageId?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
};

export type GuideLanguagesUpdateManyMutationInput = {
  status?: InputMaybe<Status>;
};

export type GuideLanguagesUpdateManyWithWhereWithoutCityInput = {
  data: GuideLanguagesUpdateManyMutationInput;
  where: GuideLanguagesScalarWhereInput;
};

export type GuideLanguagesUpdateManyWithWhereWithoutUserInput = {
  data: GuideLanguagesUpdateManyMutationInput;
  where: GuideLanguagesScalarWhereInput;
};

export type GuideLanguagesUpdateManyWithoutCityInput = {
  connect?: InputMaybe<Array<GuideLanguagesWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<GuideLanguagesCreateOrConnectWithoutCityInput>>;
  create?: InputMaybe<Array<GuideLanguagesCreateWithoutCityInput>>;
  createMany?: InputMaybe<GuideLanguagesCreateManyCityInputEnvelope>;
  delete?: InputMaybe<Array<GuideLanguagesWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<GuideLanguagesScalarWhereInput>>;
  disconnect?: InputMaybe<Array<GuideLanguagesWhereUniqueInput>>;
  set?: InputMaybe<Array<GuideLanguagesWhereUniqueInput>>;
  update?: InputMaybe<Array<GuideLanguagesUpdateWithWhereUniqueWithoutCityInput>>;
  updateMany?: InputMaybe<Array<GuideLanguagesUpdateManyWithWhereWithoutCityInput>>;
  upsert?: InputMaybe<Array<GuideLanguagesUpsertWithWhereUniqueWithoutCityInput>>;
};

export type GuideLanguagesUpdateManyWithoutUserInput = {
  connect?: InputMaybe<Array<GuideLanguagesWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<GuideLanguagesCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<GuideLanguagesCreateWithoutUserInput>>;
  createMany?: InputMaybe<GuideLanguagesCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<GuideLanguagesWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<GuideLanguagesScalarWhereInput>>;
  disconnect?: InputMaybe<Array<GuideLanguagesWhereUniqueInput>>;
  set?: InputMaybe<Array<GuideLanguagesWhereUniqueInput>>;
  update?: InputMaybe<Array<GuideLanguagesUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: InputMaybe<Array<GuideLanguagesUpdateManyWithWhereWithoutUserInput>>;
  upsert?: InputMaybe<Array<GuideLanguagesUpsertWithWhereUniqueWithoutUserInput>>;
};

export type GuideLanguagesUpdateWithWhereUniqueWithoutCityInput = {
  data: GuideLanguagesUpdateWithoutCityInput;
  where: GuideLanguagesWhereUniqueInput;
};

export type GuideLanguagesUpdateWithWhereUniqueWithoutUserInput = {
  data: GuideLanguagesUpdateWithoutUserInput;
  where: GuideLanguagesWhereUniqueInput;
};

export type GuideLanguagesUpdateWithoutCityInput = {
  language?: InputMaybe<LanguagesUpdateOneRequiredWithoutGuideLanguagesInput>;
  status?: InputMaybe<Status>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutGuideLanguagesInput>;
};

export type GuideLanguagesUpdateWithoutUserInput = {
  City?: InputMaybe<CityUpdateOneWithoutGuideLanguagesInput>;
  language?: InputMaybe<LanguagesUpdateOneRequiredWithoutGuideLanguagesInput>;
  status?: InputMaybe<Status>;
};

export type GuideLanguagesUpsertWithWhereUniqueWithoutCityInput = {
  create: GuideLanguagesCreateWithoutCityInput;
  update: GuideLanguagesUpdateWithoutCityInput;
  where: GuideLanguagesWhereUniqueInput;
};

export type GuideLanguagesUpsertWithWhereUniqueWithoutUserInput = {
  create: GuideLanguagesCreateWithoutUserInput;
  update: GuideLanguagesUpdateWithoutUserInput;
  where: GuideLanguagesWhereUniqueInput;
};

export type GuideLanguagesUserIdLanguageIdCompoundUniqueInput = {
  languageId: Scalars['Int'];
  userId: Scalars['Int'];
};

export type GuideLanguagesWhereInput = {
  AND?: InputMaybe<Array<GuideLanguagesWhereInput>>;
  City?: InputMaybe<CityRelationFilter>;
  NOT?: InputMaybe<Array<GuideLanguagesWhereInput>>;
  OR?: InputMaybe<Array<GuideLanguagesWhereInput>>;
  cityId?: InputMaybe<IntFilter>;
  language?: InputMaybe<LanguagesRelationFilter>;
  languageId?: InputMaybe<IntFilter>;
  status?: InputMaybe<EnumStatusFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<IntFilter>;
};

export type GuideLanguagesWhereUniqueInput = {
  userId_languageId?: InputMaybe<GuideLanguagesUserIdLanguageIdCompoundUniqueInput>;
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
  GuideLanguages?: Maybe<Array<GuideLanguages>>;
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
  GuideLanguages: Scalars['Int'];
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

export type LanguagesCreateNestedOneWithoutGuideLanguagesInput = {
  connect?: InputMaybe<LanguagesWhereUniqueInput>;
  connectOrCreate?: InputMaybe<LanguagesCreateOrConnectWithoutGuideLanguagesInput>;
  create?: InputMaybe<LanguagesCreateWithoutGuideLanguagesInput>;
};

export type LanguagesCreateOrConnectWithoutGuideLanguagesInput = {
  create: LanguagesCreateWithoutGuideLanguagesInput;
  where: LanguagesWhereUniqueInput;
};

export type LanguagesCreateWithoutGuideLanguagesInput = {
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

export type LanguagesUpdateOneRequiredWithoutGuideLanguagesInput = {
  connect?: InputMaybe<LanguagesWhereUniqueInput>;
  connectOrCreate?: InputMaybe<LanguagesCreateOrConnectWithoutGuideLanguagesInput>;
  create?: InputMaybe<LanguagesCreateWithoutGuideLanguagesInput>;
  update?: InputMaybe<LanguagesUpdateWithoutGuideLanguagesInput>;
  upsert?: InputMaybe<LanguagesUpsertWithoutGuideLanguagesInput>;
};

export type LanguagesUpdateWithoutGuideLanguagesInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  name?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Status>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type LanguagesUpsertWithoutGuideLanguagesInput = {
  create: LanguagesCreateWithoutGuideLanguagesInput;
  update: LanguagesUpdateWithoutGuideLanguagesInput;
};

export type LanguagesWhereInput = {
  AND?: InputMaybe<Array<LanguagesWhereInput>>;
  GuideLanguages?: InputMaybe<GuideLanguagesListRelationFilter>;
  NOT?: InputMaybe<Array<LanguagesWhereInput>>;
  OR?: InputMaybe<Array<LanguagesWhereInput>>;
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
  GuideCity?: Maybe<Array<GuideCity>>;
  GuideGuideCategory?: Maybe<Array<GuideGuideCategory>>;
  GuideLanguages?: Maybe<Array<GuideLanguages>>;
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
  GuideCity: Scalars['Int'];
  GuideGuideCategory: Scalars['Int'];
  GuideLanguages: Scalars['Int'];
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
  GuideCity?: InputMaybe<GuideCityCreateNestedManyWithoutUserInput>;
  GuideGuideCategory?: InputMaybe<GuideGuideCategoryCreateNestedManyWithoutUserInput>;
  GuideLanguages?: InputMaybe<GuideLanguagesCreateNestedManyWithoutUserInput>;
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

export type UserCreateNestedOneWithoutGuideCityInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutGuideCityInput>;
  create?: InputMaybe<UserCreateWithoutGuideCityInput>;
};

export type UserCreateNestedOneWithoutGuideLanguagesInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutGuideLanguagesInput>;
  create?: InputMaybe<UserCreateWithoutGuideLanguagesInput>;
};

export type UserCreateOrConnectWithoutCountryInput = {
  create: UserCreateWithoutCountryInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutGuideCityInput = {
  create: UserCreateWithoutGuideCityInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutGuideLanguagesInput = {
  create: UserCreateWithoutGuideLanguagesInput;
  where: UserWhereUniqueInput;
};

export type UserCreateWithoutCountryInput = {
  GuideCity?: InputMaybe<GuideCityCreateNestedManyWithoutUserInput>;
  GuideGuideCategory?: InputMaybe<GuideGuideCategoryCreateNestedManyWithoutUserInput>;
  GuideLanguages?: InputMaybe<GuideLanguagesCreateNestedManyWithoutUserInput>;
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

export type UserCreateWithoutGuideCityInput = {
  GuideGuideCategory?: InputMaybe<GuideGuideCategoryCreateNestedManyWithoutUserInput>;
  GuideLanguages?: InputMaybe<GuideLanguagesCreateNestedManyWithoutUserInput>;
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

export type UserCreateWithoutGuideLanguagesInput = {
  GuideCity?: InputMaybe<GuideCityCreateNestedManyWithoutUserInput>;
  GuideGuideCategory?: InputMaybe<GuideGuideCategoryCreateNestedManyWithoutUserInput>;
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
  GuideCity?: InputMaybe<GuideCityOrderByRelationAggregateInput>;
  GuideGuideCategory?: InputMaybe<GuideGuideCategoryOrderByRelationAggregateInput>;
  GuideLanguages?: InputMaybe<GuideLanguagesOrderByRelationAggregateInput>;
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

export type UserScalarWhereInput = {
  AND?: InputMaybe<Array<UserScalarWhereInput>>;
  NOT?: InputMaybe<Array<UserScalarWhereInput>>;
  OR?: InputMaybe<Array<UserScalarWhereInput>>;
  bio?: InputMaybe<StringFilter>;
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

export type UserSumAggregate = {
  __typename?: 'UserSumAggregate';
  countryId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  rating?: Maybe<Scalars['Float']>;
};

export type UserUpdateManyMutationInput = {
  bio?: InputMaybe<Scalars['String']>;
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

export type UserUpdateManyWithWhereWithoutCountryInput = {
  data: UserUpdateManyMutationInput;
  where: UserScalarWhereInput;
};

export type UserUpdateManyWithoutCountryInput = {
  connect?: InputMaybe<Array<UserWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UserCreateOrConnectWithoutCountryInput>>;
  create?: InputMaybe<Array<UserCreateWithoutCountryInput>>;
  createMany?: InputMaybe<UserCreateManyCountryInputEnvelope>;
  delete?: InputMaybe<Array<UserWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<UserScalarWhereInput>>;
  disconnect?: InputMaybe<Array<UserWhereUniqueInput>>;
  set?: InputMaybe<Array<UserWhereUniqueInput>>;
  update?: InputMaybe<Array<UserUpdateWithWhereUniqueWithoutCountryInput>>;
  updateMany?: InputMaybe<Array<UserUpdateManyWithWhereWithoutCountryInput>>;
  upsert?: InputMaybe<Array<UserUpsertWithWhereUniqueWithoutCountryInput>>;
};

export type UserUpdateOneRequiredWithoutGuideCityInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutGuideCityInput>;
  create?: InputMaybe<UserCreateWithoutGuideCityInput>;
  update?: InputMaybe<UserUpdateWithoutGuideCityInput>;
  upsert?: InputMaybe<UserUpsertWithoutGuideCityInput>;
};

export type UserUpdateOneRequiredWithoutGuideLanguagesInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutGuideLanguagesInput>;
  create?: InputMaybe<UserCreateWithoutGuideLanguagesInput>;
  update?: InputMaybe<UserUpdateWithoutGuideLanguagesInput>;
  upsert?: InputMaybe<UserUpsertWithoutGuideLanguagesInput>;
};

export type UserUpdateWithWhereUniqueWithoutCountryInput = {
  data: UserUpdateWithoutCountryInput;
  where: UserWhereUniqueInput;
};

export type UserUpdateWithoutCountryInput = {
  GuideCity?: InputMaybe<GuideCityUpdateManyWithoutUserInput>;
  GuideGuideCategory?: InputMaybe<GuideGuideCategoryUpdateManyWithoutUserInput>;
  GuideLanguages?: InputMaybe<GuideLanguagesUpdateManyWithoutUserInput>;
  bio?: InputMaybe<Scalars['String']>;
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

export type UserUpdateWithoutGuideCityInput = {
  GuideGuideCategory?: InputMaybe<GuideGuideCategoryUpdateManyWithoutUserInput>;
  GuideLanguages?: InputMaybe<GuideLanguagesUpdateManyWithoutUserInput>;
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

export type UserUpdateWithoutGuideLanguagesInput = {
  GuideCity?: InputMaybe<GuideCityUpdateManyWithoutUserInput>;
  GuideGuideCategory?: InputMaybe<GuideGuideCategoryUpdateManyWithoutUserInput>;
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

export type UserUpsertWithWhereUniqueWithoutCountryInput = {
  create: UserCreateWithoutCountryInput;
  update: UserUpdateWithoutCountryInput;
  where: UserWhereUniqueInput;
};

export type UserUpsertWithoutGuideCityInput = {
  create: UserCreateWithoutGuideCityInput;
  update: UserUpdateWithoutGuideCityInput;
};

export type UserUpsertWithoutGuideLanguagesInput = {
  create: UserCreateWithoutGuideLanguagesInput;
  update: UserUpdateWithoutGuideLanguagesInput;
};

export type UserWhereInput = {
  AND?: InputMaybe<Array<UserWhereInput>>;
  GuideCity?: InputMaybe<GuideCityListRelationFilter>;
  GuideGuideCategory?: InputMaybe<GuideGuideCategoryListRelationFilter>;
  GuideLanguages?: InputMaybe<GuideLanguagesListRelationFilter>;
  NOT?: InputMaybe<Array<UserWhereInput>>;
  OR?: InputMaybe<Array<UserWhereInput>>;
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
