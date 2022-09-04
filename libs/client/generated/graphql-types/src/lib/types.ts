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
  _count: CityCount;
  country: Country;
  countryId: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  name: Scalars['String'];
  status: Status;
  tourCity?: Maybe<Array<TourCity>>;
  updatedAt: Scalars['DateTime'];
};

export type CityAvgAggregate = {
  __typename?: 'CityAvgAggregate';
  countryId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

export type CityCount = {
  __typename?: 'CityCount';
  tourCity: Scalars['Int'];
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
  createdAt?: InputMaybe<Scalars['DateTime']>;
  name: Scalars['String'];
  status?: InputMaybe<Status>;
  tourCity?: InputMaybe<TourCityCreateNestedManyWithoutCityInput>;
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

export type CityUpdateOneRequiredWithoutTourCityInput = {
  connect?: InputMaybe<CityWhereUniqueInput>;
  connectOrCreate?: InputMaybe<CityCreateOrConnectWithoutTourCityInput>;
  create?: InputMaybe<CityCreateWithoutTourCityInput>;
  update?: InputMaybe<CityUpdateWithoutTourCityInput>;
  upsert?: InputMaybe<CityUpsertWithoutTourCityInput>;
};

export type CityUpdateWithWhereUniqueWithoutCountryInput = {
  data: CityUpdateWithoutCountryInput;
  where: CityWhereUniqueInput;
};

export type CityUpdateWithoutCountryInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  name?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Status>;
  tourCity?: InputMaybe<TourCityUpdateManyWithoutCityInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type CityUpdateWithoutTourCityInput = {
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

export type CityUpsertWithoutTourCityInput = {
  create: CityCreateWithoutTourCityInput;
  update: CityUpdateWithoutTourCityInput;
};

export type CityWhereInput = {
  AND?: InputMaybe<Array<CityWhereInput>>;
  NOT?: InputMaybe<Array<CityWhereInput>>;
  OR?: InputMaybe<Array<CityWhereInput>>;
  country?: InputMaybe<CountryRelationFilter>;
  countryId?: InputMaybe<IntFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IntFilter>;
  name?: InputMaybe<StringFilter>;
  status?: InputMaybe<EnumStatusFilter>;
  tourCity?: InputMaybe<TourCityListRelationFilter>;
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

export type CreateTourInput = {
  currencyId: Scalars['Int'];
  description: Scalars['String'];
  durationHours: Scalars['Int'];
  durationMinutes: Scalars['Int'];
  format: TourFormat;
  guideId: Scalars['Int'];
  image: Scalars['String'];
  maxCapacity: Scalars['Int'];
  name: Scalars['String'];
  price: Scalars['Float'];
  status?: InputMaybe<Status>;
  tourCity?: InputMaybe<Array<TourCityCreateManyTourInput>>;
  tourImage?: InputMaybe<Array<TourImageCreateManyTourInput>>;
  tourLanguage?: InputMaybe<Array<TourLanguageCreateManyTourInput>>;
  tourTourCategory?: InputMaybe<Array<TourTourCategoryCreateManyTourInput>>;
  type: TourType;
};

export type Currency = {
  __typename?: 'Currency';
  _count: CurrencyCount;
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  name: Scalars['String'];
  status: Status;
  tour?: Maybe<Array<Tour>>;
  updatedAt: Scalars['DateTime'];
};

export type CurrencyAvgAggregate = {
  __typename?: 'CurrencyAvgAggregate';
  id?: Maybe<Scalars['Float']>;
};

export type CurrencyCount = {
  __typename?: 'CurrencyCount';
  tour: Scalars['Int'];
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
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IntFilter>;
  name?: InputMaybe<StringFilter>;
  status?: InputMaybe<EnumStatusFilter>;
  tour?: InputMaybe<TourListRelationFilter>;
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

export type EnumTourFormatFilter = {
  equals?: InputMaybe<TourFormat>;
  in?: InputMaybe<Array<TourFormat>>;
  not?: InputMaybe<EnumTourFormatFilter>;
  notIn?: InputMaybe<Array<TourFormat>>;
};

export type EnumTourTypeFilter = {
  equals?: InputMaybe<TourType>;
  in?: InputMaybe<Array<TourType>>;
  not?: InputMaybe<EnumTourTypeFilter>;
  notIn?: InputMaybe<Array<TourType>>;
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

export type GetToursInput = {
  priceMax?: InputMaybe<Scalars['Float']>;
  priceMin?: InputMaybe<Scalars['Float']>;
  showOnlyTopRated?: InputMaybe<Scalars['Boolean']>;
  tourCategory?: InputMaybe<Array<Scalars['Int']>>;
  tourCity?: InputMaybe<Array<Scalars['Int']>>;
  tourFormat?: InputMaybe<Array<TourFormat>>;
  tourLanguage?: InputMaybe<Array<Scalars['Int']>>;
  tourType?: InputMaybe<Array<TourType>>;
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

export type Language = {
  __typename?: 'Language';
  _count: LanguageCount;
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  name: Scalars['String'];
  status: Status;
  tourLanguage?: Maybe<Array<TourLanguage>>;
  updatedAt: Scalars['DateTime'];
};

export type LanguageAvgAggregate = {
  __typename?: 'LanguageAvgAggregate';
  id?: Maybe<Scalars['Float']>;
};

export type LanguageCount = {
  __typename?: 'LanguageCount';
  tourLanguage: Scalars['Int'];
};

export type LanguageCountAggregate = {
  __typename?: 'LanguageCountAggregate';
  _all: Scalars['Int'];
  createdAt: Scalars['Int'];
  id: Scalars['Int'];
  name: Scalars['Int'];
  status: Scalars['Int'];
  updatedAt: Scalars['Int'];
};

export type LanguageCreateNestedOneWithoutTourLanguageInput = {
  connect?: InputMaybe<LanguageWhereUniqueInput>;
  connectOrCreate?: InputMaybe<LanguageCreateOrConnectWithoutTourLanguageInput>;
  create?: InputMaybe<LanguageCreateWithoutTourLanguageInput>;
};

export type LanguageCreateOrConnectWithoutTourLanguageInput = {
  create: LanguageCreateWithoutTourLanguageInput;
  where: LanguageWhereUniqueInput;
};

export type LanguageCreateWithoutTourLanguageInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  name: Scalars['String'];
  status?: InputMaybe<Status>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type LanguageMaxAggregate = {
  __typename?: 'LanguageMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  status?: Maybe<Status>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type LanguageMinAggregate = {
  __typename?: 'LanguageMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  status?: Maybe<Status>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type LanguageRelationFilter = {
  is?: InputMaybe<LanguageWhereInput>;
  isNot?: InputMaybe<LanguageWhereInput>;
};

export type LanguageSumAggregate = {
  __typename?: 'LanguageSumAggregate';
  id?: Maybe<Scalars['Int']>;
};

export type LanguageUpdateOneRequiredWithoutTourLanguageInput = {
  connect?: InputMaybe<LanguageWhereUniqueInput>;
  connectOrCreate?: InputMaybe<LanguageCreateOrConnectWithoutTourLanguageInput>;
  create?: InputMaybe<LanguageCreateWithoutTourLanguageInput>;
  update?: InputMaybe<LanguageUpdateWithoutTourLanguageInput>;
  upsert?: InputMaybe<LanguageUpsertWithoutTourLanguageInput>;
};

export type LanguageUpdateWithoutTourLanguageInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  name?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Status>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type LanguageUpsertWithoutTourLanguageInput = {
  create: LanguageCreateWithoutTourLanguageInput;
  update: LanguageUpdateWithoutTourLanguageInput;
};

export type LanguageWhereInput = {
  AND?: InputMaybe<Array<LanguageWhereInput>>;
  NOT?: InputMaybe<Array<LanguageWhereInput>>;
  OR?: InputMaybe<Array<LanguageWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IntFilter>;
  name?: InputMaybe<StringFilter>;
  status?: InputMaybe<EnumStatusFilter>;
  tourLanguage?: InputMaybe<TourLanguageListRelationFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type LanguageWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
};

export type LoginInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createTour: Tour;
  createUser: User;
  login: User;
  removeTour: Tour;
  removeUser: User;
  resetPassword: User;
  signUp: User;
  updateTour: Tour;
  updateUser: User;
  verifyEmail: User;
};


export type MutationCreateTourArgs = {
  createTourInput: CreateTourInput;
};


export type MutationCreateUserArgs = {
  data: UserCreateInput;
};


export type MutationLoginArgs = {
  loginInput: LoginInput;
};


export type MutationRemoveTourArgs = {
  id: Scalars['Int'];
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


export type MutationUpdateTourArgs = {
  id: Scalars['Int'];
  updateTourInput: UpdateTourInput;
};


export type MutationUpdateUserArgs = {
  data: UpdateUserInput;
};


export type MutationVerifyEmailArgs = {
  verifyEmail: VerifyEmail;
};

export type Query = {
  __typename?: 'Query';
  getGuides: Array<User>;
  getTour: Tour;
  getTours: Array<Tour>;
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


export type QueryGetTourArgs = {
  id: Scalars['Int'];
};


export type QueryGetToursArgs = {
  getToursInput: GetToursInput;
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
  _count: TourCount;
  createdAt: Scalars['DateTime'];
  currency: Currency;
  currencyId: Scalars['Int'];
  description: Scalars['String'];
  durationHours: Scalars['Int'];
  durationMinutes: Scalars['Int'];
  format: TourFormat;
  guide: User;
  guideId: Scalars['Int'];
  id: Scalars['ID'];
  image: Scalars['String'];
  maxCapacity: Scalars['Int'];
  name: Scalars['String'];
  price: Scalars['Float'];
  rating?: Maybe<Scalars['Float']>;
  status: Status;
  tourCity?: Maybe<Array<TourCity>>;
  tourImage?: Maybe<Array<TourImage>>;
  tourLanguage?: Maybe<Array<TourLanguage>>;
  tourReview?: Maybe<Array<TourReview>>;
  tourTourCategory?: Maybe<Array<TourTourCategory>>;
  type: TourType;
  updatedAt: Scalars['DateTime'];
};

export type TourAvgAggregate = {
  __typename?: 'TourAvgAggregate';
  currencyId?: Maybe<Scalars['Float']>;
  durationHours?: Maybe<Scalars['Float']>;
  durationMinutes?: Maybe<Scalars['Float']>;
  guideId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  maxCapacity?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  rating?: Maybe<Scalars['Float']>;
};

export type TourCategory = {
  __typename?: 'TourCategory';
  _count: TourCategoryCount;
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  name: Scalars['String'];
  status: Status;
  tourTourCategory?: Maybe<Array<TourTourCategory>>;
  updatedAt: Scalars['DateTime'];
};

export type TourCategoryAvgAggregate = {
  __typename?: 'TourCategoryAvgAggregate';
  id?: Maybe<Scalars['Float']>;
};

export type TourCategoryCount = {
  __typename?: 'TourCategoryCount';
  tourTourCategory: Scalars['Int'];
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
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IntFilter>;
  name?: InputMaybe<StringFilter>;
  status?: InputMaybe<EnumStatusFilter>;
  tourTourCategory?: InputMaybe<TourTourCategoryListRelationFilter>;
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

export type TourCityUpdateManyWithWhereWithoutTourInput = {
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

export type TourCityUpdateManyWithoutTourInput = {
  connect?: InputMaybe<Array<TourCityWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<TourCityCreateOrConnectWithoutTourInput>>;
  create?: InputMaybe<Array<TourCityCreateWithoutTourInput>>;
  createMany?: InputMaybe<TourCityCreateManyTourInputEnvelope>;
  delete?: InputMaybe<Array<TourCityWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<TourCityScalarWhereInput>>;
  disconnect?: InputMaybe<Array<TourCityWhereUniqueInput>>;
  set?: InputMaybe<Array<TourCityWhereUniqueInput>>;
  update?: InputMaybe<Array<TourCityUpdateWithWhereUniqueWithoutTourInput>>;
  updateMany?: InputMaybe<Array<TourCityUpdateManyWithWhereWithoutTourInput>>;
  upsert?: InputMaybe<Array<TourCityUpsertWithWhereUniqueWithoutTourInput>>;
};

export type TourCityUpdateWithWhereUniqueWithoutCityInput = {
  data: TourCityUpdateWithoutCityInput;
  where: TourCityWhereUniqueInput;
};

export type TourCityUpdateWithWhereUniqueWithoutTourInput = {
  data: TourCityUpdateWithoutTourInput;
  where: TourCityWhereUniqueInput;
};

export type TourCityUpdateWithoutCityInput = {
  status?: InputMaybe<Status>;
  tour?: InputMaybe<TourUpdateOneWithoutTourCityInput>;
};

export type TourCityUpdateWithoutTourInput = {
  city?: InputMaybe<CityUpdateOneRequiredWithoutTourCityInput>;
  status?: InputMaybe<Status>;
};

export type TourCityUpsertWithWhereUniqueWithoutCityInput = {
  create: TourCityCreateWithoutCityInput;
  update: TourCityUpdateWithoutCityInput;
  where: TourCityWhereUniqueInput;
};

export type TourCityUpsertWithWhereUniqueWithoutTourInput = {
  create: TourCityCreateWithoutTourInput;
  update: TourCityUpdateWithoutTourInput;
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
  tourCity: Scalars['Int'];
  tourImage: Scalars['Int'];
  tourLanguage: Scalars['Int'];
  tourReview: Scalars['Int'];
  tourTourCategory: Scalars['Int'];
};

export type TourCountAggregate = {
  __typename?: 'TourCountAggregate';
  _all: Scalars['Int'];
  createdAt: Scalars['Int'];
  currencyId: Scalars['Int'];
  description: Scalars['Int'];
  durationHours: Scalars['Int'];
  durationMinutes: Scalars['Int'];
  format: Scalars['Int'];
  guideId: Scalars['Int'];
  id: Scalars['Int'];
  image: Scalars['Int'];
  maxCapacity: Scalars['Int'];
  name: Scalars['Int'];
  price: Scalars['Int'];
  rating: Scalars['Int'];
  status: Scalars['Int'];
  type: Scalars['Int'];
  updatedAt: Scalars['Int'];
};

export type TourCreateManyGuideInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  currencyId: Scalars['Int'];
  description: Scalars['String'];
  durationHours: Scalars['Int'];
  durationMinutes: Scalars['Int'];
  format?: InputMaybe<TourFormat>;
  id?: InputMaybe<Scalars['Int']>;
  image: Scalars['String'];
  maxCapacity: Scalars['Int'];
  name: Scalars['String'];
  price: Scalars['Float'];
  rating?: InputMaybe<Scalars['Float']>;
  status?: InputMaybe<Status>;
  type?: InputMaybe<TourType>;
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

export type TourCreateNestedOneWithoutTourReviewInput = {
  connect?: InputMaybe<TourWhereUniqueInput>;
  connectOrCreate?: InputMaybe<TourCreateOrConnectWithoutTourReviewInput>;
  create?: InputMaybe<TourCreateWithoutTourReviewInput>;
};

export type TourCreateOrConnectWithoutGuideInput = {
  create: TourCreateWithoutGuideInput;
  where: TourWhereUniqueInput;
};

export type TourCreateOrConnectWithoutTourCityInput = {
  create: TourCreateWithoutTourCityInput;
  where: TourWhereUniqueInput;
};

export type TourCreateOrConnectWithoutTourReviewInput = {
  create: TourCreateWithoutTourReviewInput;
  where: TourWhereUniqueInput;
};

export type TourCreateWithoutGuideInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  currency: CurrencyCreateNestedOneWithoutTourInput;
  description: Scalars['String'];
  durationHours: Scalars['Int'];
  durationMinutes: Scalars['Int'];
  format?: InputMaybe<TourFormat>;
  image: Scalars['String'];
  maxCapacity: Scalars['Int'];
  name: Scalars['String'];
  price: Scalars['Float'];
  rating?: InputMaybe<Scalars['Float']>;
  status?: InputMaybe<Status>;
  tourCity?: InputMaybe<TourCityCreateNestedManyWithoutTourInput>;
  tourImage?: InputMaybe<TourImageCreateNestedManyWithoutTourInput>;
  tourLanguage?: InputMaybe<TourLanguageCreateNestedManyWithoutTourInput>;
  tourReview?: InputMaybe<TourReviewCreateNestedManyWithoutTourInput>;
  tourTourCategory?: InputMaybe<TourTourCategoryCreateNestedManyWithoutTourInput>;
  type?: InputMaybe<TourType>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type TourCreateWithoutTourCityInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  currency: CurrencyCreateNestedOneWithoutTourInput;
  description: Scalars['String'];
  durationHours: Scalars['Int'];
  durationMinutes: Scalars['Int'];
  format?: InputMaybe<TourFormat>;
  guide: UserCreateNestedOneWithoutTourInput;
  image: Scalars['String'];
  maxCapacity: Scalars['Int'];
  name: Scalars['String'];
  price: Scalars['Float'];
  rating?: InputMaybe<Scalars['Float']>;
  status?: InputMaybe<Status>;
  tourImage?: InputMaybe<TourImageCreateNestedManyWithoutTourInput>;
  tourLanguage?: InputMaybe<TourLanguageCreateNestedManyWithoutTourInput>;
  tourReview?: InputMaybe<TourReviewCreateNestedManyWithoutTourInput>;
  tourTourCategory?: InputMaybe<TourTourCategoryCreateNestedManyWithoutTourInput>;
  type?: InputMaybe<TourType>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type TourCreateWithoutTourReviewInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  currency: CurrencyCreateNestedOneWithoutTourInput;
  description: Scalars['String'];
  durationHours: Scalars['Int'];
  durationMinutes: Scalars['Int'];
  format?: InputMaybe<TourFormat>;
  guide: UserCreateNestedOneWithoutTourInput;
  image: Scalars['String'];
  maxCapacity: Scalars['Int'];
  name: Scalars['String'];
  price: Scalars['Float'];
  rating?: InputMaybe<Scalars['Float']>;
  status?: InputMaybe<Status>;
  tourCity?: InputMaybe<TourCityCreateNestedManyWithoutTourInput>;
  tourImage?: InputMaybe<TourImageCreateNestedManyWithoutTourInput>;
  tourLanguage?: InputMaybe<TourLanguageCreateNestedManyWithoutTourInput>;
  tourTourCategory?: InputMaybe<TourTourCategoryCreateNestedManyWithoutTourInput>;
  type?: InputMaybe<TourType>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export enum TourFormat {
  ByCar = 'BY_CAR',
  OnFoot = 'ON_FOOT'
}

export type TourImage = {
  __typename?: 'TourImage';
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  image: Scalars['String'];
  name: Scalars['String'];
  sortOrder: Scalars['Int'];
  status: Status;
  tour?: Maybe<Tour>;
  tourId?: Maybe<Scalars['Int']>;
  updatedAt: Scalars['DateTime'];
};

export type TourImageAvgAggregate = {
  __typename?: 'TourImageAvgAggregate';
  id?: Maybe<Scalars['Float']>;
  sortOrder?: Maybe<Scalars['Float']>;
  tourId?: Maybe<Scalars['Float']>;
};

export type TourImageCountAggregate = {
  __typename?: 'TourImageCountAggregate';
  _all: Scalars['Int'];
  createdAt: Scalars['Int'];
  id: Scalars['Int'];
  image: Scalars['Int'];
  name: Scalars['Int'];
  sortOrder: Scalars['Int'];
  status: Scalars['Int'];
  tourId: Scalars['Int'];
  updatedAt: Scalars['Int'];
};

export type TourImageCreateManyTourInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['Int']>;
  image: Scalars['String'];
  name: Scalars['String'];
  sortOrder: Scalars['Int'];
  status?: InputMaybe<Status>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type TourImageCreateManyTourInputEnvelope = {
  data: Array<TourImageCreateManyTourInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type TourImageCreateNestedManyWithoutTourInput = {
  connect?: InputMaybe<Array<TourImageWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<TourImageCreateOrConnectWithoutTourInput>>;
  create?: InputMaybe<Array<TourImageCreateWithoutTourInput>>;
  createMany?: InputMaybe<TourImageCreateManyTourInputEnvelope>;
};

export type TourImageCreateOrConnectWithoutTourInput = {
  create: TourImageCreateWithoutTourInput;
  where: TourImageWhereUniqueInput;
};

export type TourImageCreateWithoutTourInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  image: Scalars['String'];
  name: Scalars['String'];
  sortOrder: Scalars['Int'];
  status?: InputMaybe<Status>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type TourImageListRelationFilter = {
  every?: InputMaybe<TourImageWhereInput>;
  none?: InputMaybe<TourImageWhereInput>;
  some?: InputMaybe<TourImageWhereInput>;
};

export type TourImageMaxAggregate = {
  __typename?: 'TourImageMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  image?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  sortOrder?: Maybe<Scalars['Int']>;
  status?: Maybe<Status>;
  tourId?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type TourImageMinAggregate = {
  __typename?: 'TourImageMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  image?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  sortOrder?: Maybe<Scalars['Int']>;
  status?: Maybe<Status>;
  tourId?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type TourImageScalarWhereInput = {
  AND?: InputMaybe<Array<TourImageScalarWhereInput>>;
  NOT?: InputMaybe<Array<TourImageScalarWhereInput>>;
  OR?: InputMaybe<Array<TourImageScalarWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IntFilter>;
  image?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  sortOrder?: InputMaybe<IntFilter>;
  status?: InputMaybe<EnumStatusFilter>;
  tourId?: InputMaybe<IntFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type TourImageSumAggregate = {
  __typename?: 'TourImageSumAggregate';
  id?: Maybe<Scalars['Int']>;
  sortOrder?: Maybe<Scalars['Int']>;
  tourId?: Maybe<Scalars['Int']>;
};

export type TourImageUpdateManyMutationInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  image?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  sortOrder?: InputMaybe<Scalars['Int']>;
  status?: InputMaybe<Status>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type TourImageUpdateManyWithWhereWithoutTourInput = {
  data: TourImageUpdateManyMutationInput;
  where: TourImageScalarWhereInput;
};

export type TourImageUpdateManyWithoutTourInput = {
  connect?: InputMaybe<Array<TourImageWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<TourImageCreateOrConnectWithoutTourInput>>;
  create?: InputMaybe<Array<TourImageCreateWithoutTourInput>>;
  createMany?: InputMaybe<TourImageCreateManyTourInputEnvelope>;
  delete?: InputMaybe<Array<TourImageWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<TourImageScalarWhereInput>>;
  disconnect?: InputMaybe<Array<TourImageWhereUniqueInput>>;
  set?: InputMaybe<Array<TourImageWhereUniqueInput>>;
  update?: InputMaybe<Array<TourImageUpdateWithWhereUniqueWithoutTourInput>>;
  updateMany?: InputMaybe<Array<TourImageUpdateManyWithWhereWithoutTourInput>>;
  upsert?: InputMaybe<Array<TourImageUpsertWithWhereUniqueWithoutTourInput>>;
};

export type TourImageUpdateWithWhereUniqueWithoutTourInput = {
  data: TourImageUpdateWithoutTourInput;
  where: TourImageWhereUniqueInput;
};

export type TourImageUpdateWithoutTourInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  image?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  sortOrder?: InputMaybe<Scalars['Int']>;
  status?: InputMaybe<Status>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type TourImageUpsertWithWhereUniqueWithoutTourInput = {
  create: TourImageCreateWithoutTourInput;
  update: TourImageUpdateWithoutTourInput;
  where: TourImageWhereUniqueInput;
};

export type TourImageWhereInput = {
  AND?: InputMaybe<Array<TourImageWhereInput>>;
  NOT?: InputMaybe<Array<TourImageWhereInput>>;
  OR?: InputMaybe<Array<TourImageWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IntFilter>;
  image?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  sortOrder?: InputMaybe<IntFilter>;
  status?: InputMaybe<EnumStatusFilter>;
  tour?: InputMaybe<TourRelationFilter>;
  tourId?: InputMaybe<IntFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type TourImageWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
};

export type TourLanguage = {
  __typename?: 'TourLanguage';
  language: Language;
  languageId: Scalars['Int'];
  status: Status;
  tour?: Maybe<Tour>;
  tourId: Scalars['Int'];
};

export type TourLanguageAvgAggregate = {
  __typename?: 'TourLanguageAvgAggregate';
  languageId?: Maybe<Scalars['Float']>;
  tourId?: Maybe<Scalars['Float']>;
};

export type TourLanguageCountAggregate = {
  __typename?: 'TourLanguageCountAggregate';
  _all: Scalars['Int'];
  languageId: Scalars['Int'];
  status: Scalars['Int'];
  tourId: Scalars['Int'];
};

export type TourLanguageCreateManyTourInput = {
  languageId: Scalars['Int'];
  status?: InputMaybe<Status>;
};

export type TourLanguageCreateManyTourInputEnvelope = {
  data: Array<TourLanguageCreateManyTourInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type TourLanguageCreateNestedManyWithoutTourInput = {
  connect?: InputMaybe<Array<TourLanguageWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<TourLanguageCreateOrConnectWithoutTourInput>>;
  create?: InputMaybe<Array<TourLanguageCreateWithoutTourInput>>;
  createMany?: InputMaybe<TourLanguageCreateManyTourInputEnvelope>;
};

export type TourLanguageCreateOrConnectWithoutTourInput = {
  create: TourLanguageCreateWithoutTourInput;
  where: TourLanguageWhereUniqueInput;
};

export type TourLanguageCreateWithoutTourInput = {
  language: LanguageCreateNestedOneWithoutTourLanguageInput;
  status?: InputMaybe<Status>;
};

export type TourLanguageListRelationFilter = {
  every?: InputMaybe<TourLanguageWhereInput>;
  none?: InputMaybe<TourLanguageWhereInput>;
  some?: InputMaybe<TourLanguageWhereInput>;
};

export type TourLanguageMaxAggregate = {
  __typename?: 'TourLanguageMaxAggregate';
  languageId?: Maybe<Scalars['Int']>;
  status?: Maybe<Status>;
  tourId?: Maybe<Scalars['Int']>;
};

export type TourLanguageMinAggregate = {
  __typename?: 'TourLanguageMinAggregate';
  languageId?: Maybe<Scalars['Int']>;
  status?: Maybe<Status>;
  tourId?: Maybe<Scalars['Int']>;
};

export type TourLanguageScalarWhereInput = {
  AND?: InputMaybe<Array<TourLanguageScalarWhereInput>>;
  NOT?: InputMaybe<Array<TourLanguageScalarWhereInput>>;
  OR?: InputMaybe<Array<TourLanguageScalarWhereInput>>;
  languageId?: InputMaybe<IntFilter>;
  status?: InputMaybe<EnumStatusFilter>;
  tourId?: InputMaybe<IntFilter>;
};

export type TourLanguageSumAggregate = {
  __typename?: 'TourLanguageSumAggregate';
  languageId?: Maybe<Scalars['Int']>;
  tourId?: Maybe<Scalars['Int']>;
};

export type TourLanguageTourIdLanguageIdCompoundUniqueInput = {
  languageId: Scalars['Int'];
  tourId: Scalars['Int'];
};

export type TourLanguageUpdateManyMutationInput = {
  status?: InputMaybe<Status>;
};

export type TourLanguageUpdateManyWithWhereWithoutTourInput = {
  data: TourLanguageUpdateManyMutationInput;
  where: TourLanguageScalarWhereInput;
};

export type TourLanguageUpdateManyWithoutTourInput = {
  connect?: InputMaybe<Array<TourLanguageWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<TourLanguageCreateOrConnectWithoutTourInput>>;
  create?: InputMaybe<Array<TourLanguageCreateWithoutTourInput>>;
  createMany?: InputMaybe<TourLanguageCreateManyTourInputEnvelope>;
  delete?: InputMaybe<Array<TourLanguageWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<TourLanguageScalarWhereInput>>;
  disconnect?: InputMaybe<Array<TourLanguageWhereUniqueInput>>;
  set?: InputMaybe<Array<TourLanguageWhereUniqueInput>>;
  update?: InputMaybe<Array<TourLanguageUpdateWithWhereUniqueWithoutTourInput>>;
  updateMany?: InputMaybe<Array<TourLanguageUpdateManyWithWhereWithoutTourInput>>;
  upsert?: InputMaybe<Array<TourLanguageUpsertWithWhereUniqueWithoutTourInput>>;
};

export type TourLanguageUpdateWithWhereUniqueWithoutTourInput = {
  data: TourLanguageUpdateWithoutTourInput;
  where: TourLanguageWhereUniqueInput;
};

export type TourLanguageUpdateWithoutTourInput = {
  language?: InputMaybe<LanguageUpdateOneRequiredWithoutTourLanguageInput>;
  status?: InputMaybe<Status>;
};

export type TourLanguageUpsertWithWhereUniqueWithoutTourInput = {
  create: TourLanguageCreateWithoutTourInput;
  update: TourLanguageUpdateWithoutTourInput;
  where: TourLanguageWhereUniqueInput;
};

export type TourLanguageWhereInput = {
  AND?: InputMaybe<Array<TourLanguageWhereInput>>;
  NOT?: InputMaybe<Array<TourLanguageWhereInput>>;
  OR?: InputMaybe<Array<TourLanguageWhereInput>>;
  language?: InputMaybe<LanguageRelationFilter>;
  languageId?: InputMaybe<IntFilter>;
  status?: InputMaybe<EnumStatusFilter>;
  tour?: InputMaybe<TourRelationFilter>;
  tourId?: InputMaybe<IntFilter>;
};

export type TourLanguageWhereUniqueInput = {
  tourId_languageId?: InputMaybe<TourLanguageTourIdLanguageIdCompoundUniqueInput>;
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
  description?: Maybe<Scalars['String']>;
  durationHours?: Maybe<Scalars['Int']>;
  durationMinutes?: Maybe<Scalars['Int']>;
  format?: Maybe<TourFormat>;
  guideId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  image?: Maybe<Scalars['String']>;
  maxCapacity?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Float']>;
  rating?: Maybe<Scalars['Float']>;
  status?: Maybe<Status>;
  type?: Maybe<TourType>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type TourMinAggregate = {
  __typename?: 'TourMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  currencyId?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['String']>;
  durationHours?: Maybe<Scalars['Int']>;
  durationMinutes?: Maybe<Scalars['Int']>;
  format?: Maybe<TourFormat>;
  guideId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  image?: Maybe<Scalars['String']>;
  maxCapacity?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Float']>;
  rating?: Maybe<Scalars['Float']>;
  status?: Maybe<Status>;
  type?: Maybe<TourType>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type TourOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type TourRelationFilter = {
  is?: InputMaybe<TourWhereInput>;
  isNot?: InputMaybe<TourWhereInput>;
};

export type TourReview = {
  __typename?: 'TourReview';
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  name: Scalars['String'];
  rate: Scalars['Int'];
  review: Scalars['String'];
  status: Status;
  tour?: Maybe<Tour>;
  tourId?: Maybe<Scalars['Int']>;
  updatedAt: Scalars['DateTime'];
  user?: Maybe<User>;
  userId?: Maybe<Scalars['Int']>;
};

export type TourReviewAvgAggregate = {
  __typename?: 'TourReviewAvgAggregate';
  id?: Maybe<Scalars['Float']>;
  rate?: Maybe<Scalars['Float']>;
  tourId?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

export type TourReviewCountAggregate = {
  __typename?: 'TourReviewCountAggregate';
  _all: Scalars['Int'];
  createdAt: Scalars['Int'];
  id: Scalars['Int'];
  name: Scalars['Int'];
  rate: Scalars['Int'];
  review: Scalars['Int'];
  status: Scalars['Int'];
  tourId: Scalars['Int'];
  updatedAt: Scalars['Int'];
  userId: Scalars['Int'];
};

export type TourReviewCreateManyTourInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['Int']>;
  name: Scalars['String'];
  rate: Scalars['Int'];
  review: Scalars['String'];
  status?: InputMaybe<Status>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  userId?: InputMaybe<Scalars['Int']>;
};

export type TourReviewCreateManyTourInputEnvelope = {
  data: Array<TourReviewCreateManyTourInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type TourReviewCreateManyUserInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['Int']>;
  name: Scalars['String'];
  rate: Scalars['Int'];
  review: Scalars['String'];
  status?: InputMaybe<Status>;
  tourId?: InputMaybe<Scalars['Int']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type TourReviewCreateManyUserInputEnvelope = {
  data: Array<TourReviewCreateManyUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type TourReviewCreateNestedManyWithoutTourInput = {
  connect?: InputMaybe<Array<TourReviewWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<TourReviewCreateOrConnectWithoutTourInput>>;
  create?: InputMaybe<Array<TourReviewCreateWithoutTourInput>>;
  createMany?: InputMaybe<TourReviewCreateManyTourInputEnvelope>;
};

export type TourReviewCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<TourReviewWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<TourReviewCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<TourReviewCreateWithoutUserInput>>;
  createMany?: InputMaybe<TourReviewCreateManyUserInputEnvelope>;
};

export type TourReviewCreateOrConnectWithoutTourInput = {
  create: TourReviewCreateWithoutTourInput;
  where: TourReviewWhereUniqueInput;
};

export type TourReviewCreateOrConnectWithoutUserInput = {
  create: TourReviewCreateWithoutUserInput;
  where: TourReviewWhereUniqueInput;
};

export type TourReviewCreateWithoutTourInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  name: Scalars['String'];
  rate: Scalars['Int'];
  review: Scalars['String'];
  status?: InputMaybe<Status>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  user?: InputMaybe<UserCreateNestedOneWithoutTourReviewInput>;
};

export type TourReviewCreateWithoutUserInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  name: Scalars['String'];
  rate: Scalars['Int'];
  review: Scalars['String'];
  status?: InputMaybe<Status>;
  tour?: InputMaybe<TourCreateNestedOneWithoutTourReviewInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type TourReviewListRelationFilter = {
  every?: InputMaybe<TourReviewWhereInput>;
  none?: InputMaybe<TourReviewWhereInput>;
  some?: InputMaybe<TourReviewWhereInput>;
};

export type TourReviewMaxAggregate = {
  __typename?: 'TourReviewMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  rate?: Maybe<Scalars['Int']>;
  review?: Maybe<Scalars['String']>;
  status?: Maybe<Status>;
  tourId?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  userId?: Maybe<Scalars['Int']>;
};

export type TourReviewMinAggregate = {
  __typename?: 'TourReviewMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  rate?: Maybe<Scalars['Int']>;
  review?: Maybe<Scalars['String']>;
  status?: Maybe<Status>;
  tourId?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  userId?: Maybe<Scalars['Int']>;
};

export type TourReviewOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type TourReviewScalarWhereInput = {
  AND?: InputMaybe<Array<TourReviewScalarWhereInput>>;
  NOT?: InputMaybe<Array<TourReviewScalarWhereInput>>;
  OR?: InputMaybe<Array<TourReviewScalarWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IntFilter>;
  name?: InputMaybe<StringFilter>;
  rate?: InputMaybe<IntFilter>;
  review?: InputMaybe<StringFilter>;
  status?: InputMaybe<EnumStatusFilter>;
  tourId?: InputMaybe<IntFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  userId?: InputMaybe<IntFilter>;
};

export type TourReviewSumAggregate = {
  __typename?: 'TourReviewSumAggregate';
  id?: Maybe<Scalars['Int']>;
  rate?: Maybe<Scalars['Int']>;
  tourId?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
};

export type TourReviewUpdateManyMutationInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  name?: InputMaybe<Scalars['String']>;
  rate?: InputMaybe<Scalars['Int']>;
  review?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Status>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type TourReviewUpdateManyWithWhereWithoutTourInput = {
  data: TourReviewUpdateManyMutationInput;
  where: TourReviewScalarWhereInput;
};

export type TourReviewUpdateManyWithWhereWithoutUserInput = {
  data: TourReviewUpdateManyMutationInput;
  where: TourReviewScalarWhereInput;
};

export type TourReviewUpdateManyWithoutTourInput = {
  connect?: InputMaybe<Array<TourReviewWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<TourReviewCreateOrConnectWithoutTourInput>>;
  create?: InputMaybe<Array<TourReviewCreateWithoutTourInput>>;
  createMany?: InputMaybe<TourReviewCreateManyTourInputEnvelope>;
  delete?: InputMaybe<Array<TourReviewWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<TourReviewScalarWhereInput>>;
  disconnect?: InputMaybe<Array<TourReviewWhereUniqueInput>>;
  set?: InputMaybe<Array<TourReviewWhereUniqueInput>>;
  update?: InputMaybe<Array<TourReviewUpdateWithWhereUniqueWithoutTourInput>>;
  updateMany?: InputMaybe<Array<TourReviewUpdateManyWithWhereWithoutTourInput>>;
  upsert?: InputMaybe<Array<TourReviewUpsertWithWhereUniqueWithoutTourInput>>;
};

export type TourReviewUpdateManyWithoutUserInput = {
  connect?: InputMaybe<Array<TourReviewWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<TourReviewCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<TourReviewCreateWithoutUserInput>>;
  createMany?: InputMaybe<TourReviewCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<TourReviewWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<TourReviewScalarWhereInput>>;
  disconnect?: InputMaybe<Array<TourReviewWhereUniqueInput>>;
  set?: InputMaybe<Array<TourReviewWhereUniqueInput>>;
  update?: InputMaybe<Array<TourReviewUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: InputMaybe<Array<TourReviewUpdateManyWithWhereWithoutUserInput>>;
  upsert?: InputMaybe<Array<TourReviewUpsertWithWhereUniqueWithoutUserInput>>;
};

export type TourReviewUpdateWithWhereUniqueWithoutTourInput = {
  data: TourReviewUpdateWithoutTourInput;
  where: TourReviewWhereUniqueInput;
};

export type TourReviewUpdateWithWhereUniqueWithoutUserInput = {
  data: TourReviewUpdateWithoutUserInput;
  where: TourReviewWhereUniqueInput;
};

export type TourReviewUpdateWithoutTourInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  name?: InputMaybe<Scalars['String']>;
  rate?: InputMaybe<Scalars['Int']>;
  review?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Status>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  user?: InputMaybe<UserUpdateOneWithoutTourReviewInput>;
};

export type TourReviewUpdateWithoutUserInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  name?: InputMaybe<Scalars['String']>;
  rate?: InputMaybe<Scalars['Int']>;
  review?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Status>;
  tour?: InputMaybe<TourUpdateOneWithoutTourReviewInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type TourReviewUpsertWithWhereUniqueWithoutTourInput = {
  create: TourReviewCreateWithoutTourInput;
  update: TourReviewUpdateWithoutTourInput;
  where: TourReviewWhereUniqueInput;
};

export type TourReviewUpsertWithWhereUniqueWithoutUserInput = {
  create: TourReviewCreateWithoutUserInput;
  update: TourReviewUpdateWithoutUserInput;
  where: TourReviewWhereUniqueInput;
};

export type TourReviewWhereInput = {
  AND?: InputMaybe<Array<TourReviewWhereInput>>;
  NOT?: InputMaybe<Array<TourReviewWhereInput>>;
  OR?: InputMaybe<Array<TourReviewWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IntFilter>;
  name?: InputMaybe<StringFilter>;
  rate?: InputMaybe<IntFilter>;
  review?: InputMaybe<StringFilter>;
  status?: InputMaybe<EnumStatusFilter>;
  tour?: InputMaybe<TourRelationFilter>;
  tourId?: InputMaybe<IntFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<IntFilter>;
};

export type TourReviewWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
};

export type TourScalarWhereInput = {
  AND?: InputMaybe<Array<TourScalarWhereInput>>;
  NOT?: InputMaybe<Array<TourScalarWhereInput>>;
  OR?: InputMaybe<Array<TourScalarWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  currencyId?: InputMaybe<IntFilter>;
  description?: InputMaybe<StringFilter>;
  durationHours?: InputMaybe<IntFilter>;
  durationMinutes?: InputMaybe<IntFilter>;
  format?: InputMaybe<EnumTourFormatFilter>;
  guideId?: InputMaybe<IntFilter>;
  id?: InputMaybe<IntFilter>;
  image?: InputMaybe<StringFilter>;
  maxCapacity?: InputMaybe<IntFilter>;
  name?: InputMaybe<StringFilter>;
  price?: InputMaybe<FloatFilter>;
  rating?: InputMaybe<FloatFilter>;
  status?: InputMaybe<EnumStatusFilter>;
  type?: InputMaybe<EnumTourTypeFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type TourSumAggregate = {
  __typename?: 'TourSumAggregate';
  currencyId?: Maybe<Scalars['Int']>;
  durationHours?: Maybe<Scalars['Int']>;
  durationMinutes?: Maybe<Scalars['Int']>;
  guideId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  maxCapacity?: Maybe<Scalars['Int']>;
  price?: Maybe<Scalars['Float']>;
  rating?: Maybe<Scalars['Float']>;
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

export enum TourType {
  Group = 'GROUP',
  Individual = 'INDIVIDUAL'
}

export type TourUpdateManyMutationInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description?: InputMaybe<Scalars['String']>;
  durationHours?: InputMaybe<Scalars['Int']>;
  durationMinutes?: InputMaybe<Scalars['Int']>;
  format?: InputMaybe<TourFormat>;
  image?: InputMaybe<Scalars['String']>;
  maxCapacity?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['Float']>;
  rating?: InputMaybe<Scalars['Float']>;
  status?: InputMaybe<Status>;
  type?: InputMaybe<TourType>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type TourUpdateManyWithWhereWithoutGuideInput = {
  data: TourUpdateManyMutationInput;
  where: TourScalarWhereInput;
};

export type TourUpdateManyWithoutGuideInput = {
  connect?: InputMaybe<Array<TourWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<TourCreateOrConnectWithoutGuideInput>>;
  create?: InputMaybe<Array<TourCreateWithoutGuideInput>>;
  createMany?: InputMaybe<TourCreateManyGuideInputEnvelope>;
  delete?: InputMaybe<Array<TourWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<TourScalarWhereInput>>;
  disconnect?: InputMaybe<Array<TourWhereUniqueInput>>;
  set?: InputMaybe<Array<TourWhereUniqueInput>>;
  update?: InputMaybe<Array<TourUpdateWithWhereUniqueWithoutGuideInput>>;
  updateMany?: InputMaybe<Array<TourUpdateManyWithWhereWithoutGuideInput>>;
  upsert?: InputMaybe<Array<TourUpsertWithWhereUniqueWithoutGuideInput>>;
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

export type TourUpdateOneWithoutTourReviewInput = {
  connect?: InputMaybe<TourWhereUniqueInput>;
  connectOrCreate?: InputMaybe<TourCreateOrConnectWithoutTourReviewInput>;
  create?: InputMaybe<TourCreateWithoutTourReviewInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<TourUpdateWithoutTourReviewInput>;
  upsert?: InputMaybe<TourUpsertWithoutTourReviewInput>;
};

export type TourUpdateWithWhereUniqueWithoutGuideInput = {
  data: TourUpdateWithoutGuideInput;
  where: TourWhereUniqueInput;
};

export type TourUpdateWithoutGuideInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  currency?: InputMaybe<CurrencyUpdateOneRequiredWithoutTourInput>;
  description?: InputMaybe<Scalars['String']>;
  durationHours?: InputMaybe<Scalars['Int']>;
  durationMinutes?: InputMaybe<Scalars['Int']>;
  format?: InputMaybe<TourFormat>;
  image?: InputMaybe<Scalars['String']>;
  maxCapacity?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['Float']>;
  rating?: InputMaybe<Scalars['Float']>;
  status?: InputMaybe<Status>;
  tourCity?: InputMaybe<TourCityUpdateManyWithoutTourInput>;
  tourImage?: InputMaybe<TourImageUpdateManyWithoutTourInput>;
  tourLanguage?: InputMaybe<TourLanguageUpdateManyWithoutTourInput>;
  tourReview?: InputMaybe<TourReviewUpdateManyWithoutTourInput>;
  tourTourCategory?: InputMaybe<TourTourCategoryUpdateManyWithoutTourInput>;
  type?: InputMaybe<TourType>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type TourUpdateWithoutTourCityInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  currency?: InputMaybe<CurrencyUpdateOneRequiredWithoutTourInput>;
  description?: InputMaybe<Scalars['String']>;
  durationHours?: InputMaybe<Scalars['Int']>;
  durationMinutes?: InputMaybe<Scalars['Int']>;
  format?: InputMaybe<TourFormat>;
  guide?: InputMaybe<UserUpdateOneRequiredWithoutTourInput>;
  image?: InputMaybe<Scalars['String']>;
  maxCapacity?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['Float']>;
  rating?: InputMaybe<Scalars['Float']>;
  status?: InputMaybe<Status>;
  tourImage?: InputMaybe<TourImageUpdateManyWithoutTourInput>;
  tourLanguage?: InputMaybe<TourLanguageUpdateManyWithoutTourInput>;
  tourReview?: InputMaybe<TourReviewUpdateManyWithoutTourInput>;
  tourTourCategory?: InputMaybe<TourTourCategoryUpdateManyWithoutTourInput>;
  type?: InputMaybe<TourType>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type TourUpdateWithoutTourReviewInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  currency?: InputMaybe<CurrencyUpdateOneRequiredWithoutTourInput>;
  description?: InputMaybe<Scalars['String']>;
  durationHours?: InputMaybe<Scalars['Int']>;
  durationMinutes?: InputMaybe<Scalars['Int']>;
  format?: InputMaybe<TourFormat>;
  guide?: InputMaybe<UserUpdateOneRequiredWithoutTourInput>;
  image?: InputMaybe<Scalars['String']>;
  maxCapacity?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['Float']>;
  rating?: InputMaybe<Scalars['Float']>;
  status?: InputMaybe<Status>;
  tourCity?: InputMaybe<TourCityUpdateManyWithoutTourInput>;
  tourImage?: InputMaybe<TourImageUpdateManyWithoutTourInput>;
  tourLanguage?: InputMaybe<TourLanguageUpdateManyWithoutTourInput>;
  tourTourCategory?: InputMaybe<TourTourCategoryUpdateManyWithoutTourInput>;
  type?: InputMaybe<TourType>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type TourUpsertWithWhereUniqueWithoutGuideInput = {
  create: TourCreateWithoutGuideInput;
  update: TourUpdateWithoutGuideInput;
  where: TourWhereUniqueInput;
};

export type TourUpsertWithoutTourCityInput = {
  create: TourCreateWithoutTourCityInput;
  update: TourUpdateWithoutTourCityInput;
};

export type TourUpsertWithoutTourReviewInput = {
  create: TourCreateWithoutTourReviewInput;
  update: TourUpdateWithoutTourReviewInput;
};

export type TourWhereInput = {
  AND?: InputMaybe<Array<TourWhereInput>>;
  NOT?: InputMaybe<Array<TourWhereInput>>;
  OR?: InputMaybe<Array<TourWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  currency?: InputMaybe<CurrencyRelationFilter>;
  currencyId?: InputMaybe<IntFilter>;
  description?: InputMaybe<StringFilter>;
  durationHours?: InputMaybe<IntFilter>;
  durationMinutes?: InputMaybe<IntFilter>;
  format?: InputMaybe<EnumTourFormatFilter>;
  guide?: InputMaybe<UserRelationFilter>;
  guideId?: InputMaybe<IntFilter>;
  id?: InputMaybe<IntFilter>;
  image?: InputMaybe<StringFilter>;
  maxCapacity?: InputMaybe<IntFilter>;
  name?: InputMaybe<StringFilter>;
  price?: InputMaybe<FloatFilter>;
  rating?: InputMaybe<FloatFilter>;
  status?: InputMaybe<EnumStatusFilter>;
  tourCity?: InputMaybe<TourCityListRelationFilter>;
  tourImage?: InputMaybe<TourImageListRelationFilter>;
  tourLanguage?: InputMaybe<TourLanguageListRelationFilter>;
  tourReview?: InputMaybe<TourReviewListRelationFilter>;
  tourTourCategory?: InputMaybe<TourTourCategoryListRelationFilter>;
  type?: InputMaybe<EnumTourTypeFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type TourWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
};

export type UpdateTourInput = {
  currencyId: Scalars['Int'];
  description: Scalars['String'];
  durationHours: Scalars['Int'];
  durationMinutes: Scalars['Int'];
  format: TourFormat;
  guideId: Scalars['Int'];
  image: Scalars['String'];
  maxCapacity: Scalars['Int'];
  name: Scalars['String'];
  price: Scalars['Float'];
  status?: InputMaybe<Status>;
  tourCity: Array<TourCityCreateManyTourInput>;
  tourImage?: InputMaybe<Array<TourImageCreateManyTourInput>>;
  tourLanguage?: InputMaybe<Array<TourLanguageCreateManyTourInput>>;
  tourTourCategory?: InputMaybe<Array<TourTourCategoryCreateManyTourInput>>;
  type: TourType;
};

export type UpdateUserInput = {
  bio?: InputMaybe<Scalars['String']>;
  country?: InputMaybe<CountryUpdateOneWithoutUserInput>;
  countryId: Scalars['Float'];
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
  tour?: InputMaybe<TourUpdateManyWithoutGuideInput>;
  tourReview?: InputMaybe<TourReviewUpdateManyWithoutUserInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type User = {
  __typename?: 'User';
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
  tour?: Maybe<Array<Tour>>;
  tourReview?: Maybe<Array<TourReview>>;
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
  tour: Scalars['Int'];
  tourReview: Scalars['Int'];
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
  tour?: InputMaybe<TourCreateNestedManyWithoutGuideInput>;
  tourReview?: InputMaybe<TourReviewCreateNestedManyWithoutUserInput>;
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

export type UserCreateNestedOneWithoutTourReviewInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutTourReviewInput>;
  create?: InputMaybe<UserCreateWithoutTourReviewInput>;
};

export type UserCreateOrConnectWithoutCountryInput = {
  create: UserCreateWithoutCountryInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutTourInput = {
  create: UserCreateWithoutTourInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutTourReviewInput = {
  create: UserCreateWithoutTourReviewInput;
  where: UserWhereUniqueInput;
};

export type UserCreateWithoutCountryInput = {
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
  tour?: InputMaybe<TourCreateNestedManyWithoutGuideInput>;
  tourReview?: InputMaybe<TourReviewCreateNestedManyWithoutUserInput>;
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
  tourReview?: InputMaybe<TourReviewCreateNestedManyWithoutUserInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type UserCreateWithoutTourReviewInput = {
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
  tour?: InputMaybe<TourCreateNestedManyWithoutGuideInput>;
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
  tour?: InputMaybe<TourOrderByRelationAggregateInput>;
  tourReview?: InputMaybe<TourReviewOrderByRelationAggregateInput>;
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

export type UserUpdateOneRequiredWithoutTourInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutTourInput>;
  create?: InputMaybe<UserCreateWithoutTourInput>;
  update?: InputMaybe<UserUpdateWithoutTourInput>;
  upsert?: InputMaybe<UserUpsertWithoutTourInput>;
};

export type UserUpdateOneWithoutTourReviewInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutTourReviewInput>;
  create?: InputMaybe<UserCreateWithoutTourReviewInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<UserUpdateWithoutTourReviewInput>;
  upsert?: InputMaybe<UserUpsertWithoutTourReviewInput>;
};

export type UserUpdateWithWhereUniqueWithoutCountryInput = {
  data: UserUpdateWithoutCountryInput;
  where: UserWhereUniqueInput;
};

export type UserUpdateWithoutCountryInput = {
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
  tour?: InputMaybe<TourUpdateManyWithoutGuideInput>;
  tourReview?: InputMaybe<TourReviewUpdateManyWithoutUserInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
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
  tourReview?: InputMaybe<TourReviewUpdateManyWithoutUserInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type UserUpdateWithoutTourReviewInput = {
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
  tour?: InputMaybe<TourUpdateManyWithoutGuideInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type UserUpsertWithWhereUniqueWithoutCountryInput = {
  create: UserCreateWithoutCountryInput;
  update: UserUpdateWithoutCountryInput;
  where: UserWhereUniqueInput;
};

export type UserUpsertWithoutTourInput = {
  create: UserCreateWithoutTourInput;
  update: UserUpdateWithoutTourInput;
};

export type UserUpsertWithoutTourReviewInput = {
  create: UserCreateWithoutTourReviewInput;
  update: UserUpdateWithoutTourReviewInput;
};

export type UserWhereInput = {
  AND?: InputMaybe<Array<UserWhereInput>>;
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
  tour?: InputMaybe<TourListRelationFilter>;
  tourReview?: InputMaybe<TourReviewListRelationFilter>;
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

export type VerifyEmail = {
  hash: Scalars['String'];
};
