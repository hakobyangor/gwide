import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { Int } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { registerEnumType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';

export enum UserScalarFieldEnum {
    id = "id",
    email = "email",
    firstName = "firstName",
    lastName = "lastName",
    password = "password",
    status = "status",
    image = "image",
    countryId = "countryId",
    role = "role",
    bio = "bio",
    hash = "hash",
    hashExpiredAt = "hashExpiredAt",
    rating = "rating",
    isVerified = "isVerified",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}

export enum TourTourCategoryScalarFieldEnum {
    status = "status",
    tourId = "tourId",
    tourCategoryId = "tourCategoryId"
}

export enum TourLanguageScalarFieldEnum {
    status = "status",
    tourId = "tourId",
    languageId = "languageId"
}

export enum TourCityScalarFieldEnum {
    status = "status",
    tourId = "tourId",
    cityId = "cityId"
}

export enum TourCategoryScalarFieldEnum {
    id = "id",
    name = "name",
    status = "status",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}

export enum TourScalarFieldEnum {
    id = "id",
    name = "name",
    status = "status",
    guideId = "guideId",
    currencyId = "currencyId",
    maxCapacity = "maxCapacity",
    price = "price",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}

export enum YesNo {
    YES = "YES",
    NO = "NO"
}

export enum UserRole {
    USER = "USER",
    ADMIN = "ADMIN",
    GUIDE = "GUIDE"
}

export enum Status {
    ACTIVE = "ACTIVE",
    PENDING = "PENDING",
    DRAFT = "DRAFT",
    INACTIVE = "INACTIVE",
    BLOCKED = "BLOCKED"
}

export enum SortOrder {
    asc = "asc",
    desc = "desc"
}

export enum QueryMode {
    'default' = "default",
    insensitive = "insensitive"
}

export enum LanguageScalarFieldEnum {
    id = "id",
    name = "name",
    status = "status",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}

export enum CurrencyScalarFieldEnum {
    id = "id",
    name = "name",
    status = "status",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}

export enum CountryScalarFieldEnum {
    id = "id",
    name = "name",
    status = "status",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}

export enum CityScalarFieldEnum {
    id = "id",
    name = "name",
    status = "status",
    countryId = "countryId",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}

registerEnumType(CityScalarFieldEnum, { name: 'CityScalarFieldEnum', description: undefined })
registerEnumType(CountryScalarFieldEnum, { name: 'CountryScalarFieldEnum', description: undefined })
registerEnumType(CurrencyScalarFieldEnum, { name: 'CurrencyScalarFieldEnum', description: undefined })
registerEnumType(LanguageScalarFieldEnum, { name: 'LanguageScalarFieldEnum', description: undefined })
registerEnumType(QueryMode, { name: 'QueryMode', description: undefined })
registerEnumType(SortOrder, { name: 'SortOrder', description: undefined })
registerEnumType(Status, { name: 'Status', description: undefined })
registerEnumType(UserRole, { name: 'UserRole', description: undefined })
registerEnumType(YesNo, { name: 'YesNo', description: undefined })
registerEnumType(TourScalarFieldEnum, { name: 'TourScalarFieldEnum', description: undefined })
registerEnumType(TourCategoryScalarFieldEnum, { name: 'TourCategoryScalarFieldEnum', description: undefined })
registerEnumType(TourCityScalarFieldEnum, { name: 'TourCityScalarFieldEnum', description: undefined })
registerEnumType(TourLanguageScalarFieldEnum, { name: 'TourLanguageScalarFieldEnum', description: undefined })
registerEnumType(TourTourCategoryScalarFieldEnum, { name: 'TourTourCategoryScalarFieldEnum', description: undefined })
registerEnumType(UserScalarFieldEnum, { name: 'UserScalarFieldEnum', description: undefined })

@ObjectType()
export class AggregateCity {
    @Field(() => CityCountAggregate, {nullable:true})
    _count?: InstanceType<typeof CityCountAggregate>;
    @Field(() => CityAvgAggregate, {nullable:true})
    _avg?: InstanceType<typeof CityAvgAggregate>;
    @Field(() => CitySumAggregate, {nullable:true})
    _sum?: InstanceType<typeof CitySumAggregate>;
    @Field(() => CityMinAggregate, {nullable:true})
    _min?: InstanceType<typeof CityMinAggregate>;
    @Field(() => CityMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof CityMaxAggregate>;
}

@ArgsType()
export class CityAggregateArgs {
    @Field(() => CityWhereInput, {nullable:true})
    @Type(() => CityWhereInput)
    @ValidateNested({ each: true })
    where?: InstanceType<typeof CityWhereInput>;
    @Field(() => [CityOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<CityOrderByWithRelationInput>;
    @Field(() => CityWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof CityWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => CityCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof CityCountAggregateInput>;
    @Field(() => CityAvgAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof CityAvgAggregateInput>;
    @Field(() => CitySumAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof CitySumAggregateInput>;
    @Field(() => CityMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof CityMinAggregateInput>;
    @Field(() => CityMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof CityMaxAggregateInput>;
}

@InputType()
export class CityAvgAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    countryId?: true;
}

@ObjectType()
export class CityAvgAggregate {
    @Field(() => Float, {nullable:true})
    id?: number;
    @Field(() => Float, {nullable:true})
    countryId?: number;
}

@InputType()
export class CityAvgOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    countryId?: keyof typeof SortOrder;
}

@InputType()
export class CityCountAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    name?: true;
    @Field(() => Boolean, {nullable:true})
    status?: true;
    @Field(() => Boolean, {nullable:true})
    countryId?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
    @Field(() => Boolean, {nullable:true})
    _all?: true;
}

@ObjectType()
export class CityCountAggregate {
    @Field(() => Int, {nullable:false})
    id!: number;
    @Field(() => Int, {nullable:false})
    name!: number;
    @Field(() => Int, {nullable:false})
    status!: number;
    @Field(() => Int, {nullable:false})
    countryId!: number;
    @Field(() => Int, {nullable:false})
    createdAt!: number;
    @Field(() => Int, {nullable:false})
    updatedAt!: number;
    @Field(() => Int, {nullable:false})
    _all!: number;
}

@InputType()
export class CityCountOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    countryId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
}

@ObjectType()
export class CityCount {
    @Field(() => Int, {nullable:false})
    tourCity?: number;
}

@InputType()
export class CityCreateManyCountryInputEnvelope {
    @Field(() => [CityCreateManyCountryInput], {nullable:false})
    @Type(() => CityCreateManyCountryInput)
    data!: Array<CityCreateManyCountryInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@InputType()
export class CityCreateManyCountryInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    name!: string;
    @Field(() => Status, {nullable:true})
    @Validator.IsString()
    status?: keyof typeof Status;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class CityCreateManyInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    name!: string;
    @Field(() => Status, {nullable:true})
    @Validator.IsString()
    status?: keyof typeof Status;
    @Field(() => Int, {nullable:false})
    countryId!: number;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class CityCreateNestedManyWithoutCountryInput {
    @Field(() => [CityCreateWithoutCountryInput], {nullable:true})
    @Type(() => CityCreateWithoutCountryInput)
    create?: Array<CityCreateWithoutCountryInput>;
    @Field(() => [CityCreateOrConnectWithoutCountryInput], {nullable:true})
    @Type(() => CityCreateOrConnectWithoutCountryInput)
    connectOrCreate?: Array<CityCreateOrConnectWithoutCountryInput>;
    @Field(() => CityCreateManyCountryInputEnvelope, {nullable:true})
    @Type(() => CityCreateManyCountryInputEnvelope)
    createMany?: InstanceType<typeof CityCreateManyCountryInputEnvelope>;
    @Field(() => [CityWhereUniqueInput], {nullable:true})
    @Type(() => CityWhereUniqueInput)
    connect?: Array<CityWhereUniqueInput>;
}

@InputType()
export class CityCreateNestedOneWithoutTourCityInput {
    @Field(() => CityCreateWithoutTourCityInput, {nullable:true})
    @Type(() => CityCreateWithoutTourCityInput)
    create?: InstanceType<typeof CityCreateWithoutTourCityInput>;
    @Field(() => CityCreateOrConnectWithoutTourCityInput, {nullable:true})
    @Type(() => CityCreateOrConnectWithoutTourCityInput)
    connectOrCreate?: InstanceType<typeof CityCreateOrConnectWithoutTourCityInput>;
    @Field(() => CityWhereUniqueInput, {nullable:true})
    @Type(() => CityWhereUniqueInput)
    connect?: InstanceType<typeof CityWhereUniqueInput>;
}

@InputType()
export class CityCreateOrConnectWithoutCountryInput {
    @Field(() => CityWhereUniqueInput, {nullable:false})
    @Type(() => CityWhereUniqueInput)
    where!: InstanceType<typeof CityWhereUniqueInput>;
    @Field(() => CityCreateWithoutCountryInput, {nullable:false})
    @Type(() => CityCreateWithoutCountryInput)
    create!: InstanceType<typeof CityCreateWithoutCountryInput>;
}

@InputType()
export class CityCreateOrConnectWithoutTourCityInput {
    @Field(() => CityWhereUniqueInput, {nullable:false})
    @Type(() => CityWhereUniqueInput)
    where!: InstanceType<typeof CityWhereUniqueInput>;
    @Field(() => CityCreateWithoutTourCityInput, {nullable:false})
    @Type(() => CityCreateWithoutTourCityInput)
    create!: InstanceType<typeof CityCreateWithoutTourCityInput>;
}

@InputType()
export class CityCreateWithoutCountryInput {
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    name!: string;
    @Field(() => Status, {nullable:true})
    @Validator.IsString()
    status?: keyof typeof Status;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => TourCityCreateNestedManyWithoutCityInput, {nullable:true})
    tourCity?: InstanceType<typeof TourCityCreateNestedManyWithoutCityInput>;
}

@InputType()
export class CityCreateWithoutTourCityInput {
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    name!: string;
    @Field(() => Status, {nullable:true})
    @Validator.IsString()
    status?: keyof typeof Status;
    @Field(() => CountryCreateNestedOneWithoutCityInput, {nullable:false})
    country!: InstanceType<typeof CountryCreateNestedOneWithoutCityInput>;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class CityCreateInput {
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    name!: string;
    @Field(() => Status, {nullable:true})
    @Validator.IsString()
    status?: keyof typeof Status;
    @Field(() => CountryCreateNestedOneWithoutCityInput, {nullable:false})
    country!: InstanceType<typeof CountryCreateNestedOneWithoutCityInput>;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => TourCityCreateNestedManyWithoutCityInput, {nullable:true})
    tourCity?: InstanceType<typeof TourCityCreateNestedManyWithoutCityInput>;
}

@ArgsType()
export class CityGroupByArgs {
    @Field(() => CityWhereInput, {nullable:true})
    @Type(() => CityWhereInput)
    @ValidateNested({ each: true })
    where?: InstanceType<typeof CityWhereInput>;
    @Field(() => [CityOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<CityOrderByWithAggregationInput>;
    @Field(() => [CityScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof CityScalarFieldEnum>;
    @Field(() => CityScalarWhereWithAggregatesInput, {nullable:true})
    having?: InstanceType<typeof CityScalarWhereWithAggregatesInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => CityCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof CityCountAggregateInput>;
    @Field(() => CityAvgAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof CityAvgAggregateInput>;
    @Field(() => CitySumAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof CitySumAggregateInput>;
    @Field(() => CityMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof CityMinAggregateInput>;
    @Field(() => CityMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof CityMaxAggregateInput>;
}

@ObjectType()
export class CityGroupBy {
    @Field(() => Int, {nullable:false})
    id!: number;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    name!: string;
    @Field(() => Status, {nullable:false})
    @Validator.IsString()
    status!: keyof typeof Status;
    @Field(() => Int, {nullable:false})
    countryId!: number;
    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;
    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;
    @Field(() => CityCountAggregate, {nullable:true})
    _count?: InstanceType<typeof CityCountAggregate>;
    @Field(() => CityAvgAggregate, {nullable:true})
    _avg?: InstanceType<typeof CityAvgAggregate>;
    @Field(() => CitySumAggregate, {nullable:true})
    _sum?: InstanceType<typeof CitySumAggregate>;
    @Field(() => CityMinAggregate, {nullable:true})
    _min?: InstanceType<typeof CityMinAggregate>;
    @Field(() => CityMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof CityMaxAggregate>;
}

@InputType()
export class CityListRelationFilter {
    @Field(() => CityWhereInput, {nullable:true})
    every?: InstanceType<typeof CityWhereInput>;
    @Field(() => CityWhereInput, {nullable:true})
    some?: InstanceType<typeof CityWhereInput>;
    @Field(() => CityWhereInput, {nullable:true})
    none?: InstanceType<typeof CityWhereInput>;
}

@InputType()
export class CityMaxAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    name?: true;
    @Field(() => Boolean, {nullable:true})
    status?: true;
    @Field(() => Boolean, {nullable:true})
    countryId?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
}

@ObjectType()
export class CityMaxAggregate {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    name?: string;
    @Field(() => Status, {nullable:true})
    @Validator.IsString()
    status?: keyof typeof Status;
    @Field(() => Int, {nullable:true})
    countryId?: number;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class CityMaxOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    countryId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
}

@InputType()
export class CityMinAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    name?: true;
    @Field(() => Boolean, {nullable:true})
    status?: true;
    @Field(() => Boolean, {nullable:true})
    countryId?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
}

@ObjectType()
export class CityMinAggregate {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    name?: string;
    @Field(() => Status, {nullable:true})
    @Validator.IsString()
    status?: keyof typeof Status;
    @Field(() => Int, {nullable:true})
    countryId?: number;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class CityMinOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    countryId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
}

@InputType()
export class CityOrderByRelationAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    _count?: keyof typeof SortOrder;
}

@InputType()
export class CityOrderByWithAggregationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    countryId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
    @Field(() => CityCountOrderByAggregateInput, {nullable:true})
    _count?: InstanceType<typeof CityCountOrderByAggregateInput>;
    @Field(() => CityAvgOrderByAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof CityAvgOrderByAggregateInput>;
    @Field(() => CityMaxOrderByAggregateInput, {nullable:true})
    _max?: InstanceType<typeof CityMaxOrderByAggregateInput>;
    @Field(() => CityMinOrderByAggregateInput, {nullable:true})
    _min?: InstanceType<typeof CityMinOrderByAggregateInput>;
    @Field(() => CitySumOrderByAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof CitySumOrderByAggregateInput>;
}

@InputType()
export class CityOrderByWithRelationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;
    @Field(() => CountryOrderByWithRelationInput, {nullable:true})
    country?: InstanceType<typeof CountryOrderByWithRelationInput>;
    @Field(() => SortOrder, {nullable:true})
    countryId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
    @Field(() => TourCityOrderByRelationAggregateInput, {nullable:true})
    tourCity?: InstanceType<typeof TourCityOrderByRelationAggregateInput>;
}

@InputType()
export class CityRelationFilter {
    @Field(() => CityWhereInput, {nullable:true})
    is?: InstanceType<typeof CityWhereInput>;
    @Field(() => CityWhereInput, {nullable:true})
    isNot?: InstanceType<typeof CityWhereInput>;
}

@InputType()
export class CityScalarWhereWithAggregatesInput {
    @Field(() => [CityScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<CityScalarWhereWithAggregatesInput>;
    @Field(() => [CityScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<CityScalarWhereWithAggregatesInput>;
    @Field(() => [CityScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<CityScalarWhereWithAggregatesInput>;
    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: InstanceType<typeof IntWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => EnumStatusWithAggregatesFilter, {nullable:true})
    status?: InstanceType<typeof EnumStatusWithAggregatesFilter>;
    @Field(() => IntWithAggregatesFilter, {nullable:true})
    countryId?: InstanceType<typeof IntWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
}

@InputType()
export class CityScalarWhereInput {
    @Field(() => [CityScalarWhereInput], {nullable:true})
    AND?: Array<CityScalarWhereInput>;
    @Field(() => [CityScalarWhereInput], {nullable:true})
    OR?: Array<CityScalarWhereInput>;
    @Field(() => [CityScalarWhereInput], {nullable:true})
    NOT?: Array<CityScalarWhereInput>;
    @Field(() => IntFilter, {nullable:true})
    id?: InstanceType<typeof IntFilter>;
    @Field(() => StringFilter, {nullable:true})
    name?: InstanceType<typeof StringFilter>;
    @Field(() => EnumStatusFilter, {nullable:true})
    status?: InstanceType<typeof EnumStatusFilter>;
    @Field(() => IntFilter, {nullable:true})
    countryId?: InstanceType<typeof IntFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFilter>;
}

@InputType()
export class CitySumAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    countryId?: true;
}

@ObjectType()
export class CitySumAggregate {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => Int, {nullable:true})
    countryId?: number;
}

@InputType()
export class CitySumOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    countryId?: keyof typeof SortOrder;
}

@InputType()
export class CityUncheckedCreateNestedManyWithoutCountryInput {
    @Field(() => [CityCreateWithoutCountryInput], {nullable:true})
    @Type(() => CityCreateWithoutCountryInput)
    create?: Array<CityCreateWithoutCountryInput>;
    @Field(() => [CityCreateOrConnectWithoutCountryInput], {nullable:true})
    @Type(() => CityCreateOrConnectWithoutCountryInput)
    connectOrCreate?: Array<CityCreateOrConnectWithoutCountryInput>;
    @Field(() => CityCreateManyCountryInputEnvelope, {nullable:true})
    @Type(() => CityCreateManyCountryInputEnvelope)
    createMany?: InstanceType<typeof CityCreateManyCountryInputEnvelope>;
    @Field(() => [CityWhereUniqueInput], {nullable:true})
    @Type(() => CityWhereUniqueInput)
    connect?: Array<CityWhereUniqueInput>;
}

@InputType()
export class CityUncheckedCreateWithoutCountryInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    name!: string;
    @Field(() => Status, {nullable:true})
    @Validator.IsString()
    status?: keyof typeof Status;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => TourCityUncheckedCreateNestedManyWithoutCityInput, {nullable:true})
    tourCity?: InstanceType<typeof TourCityUncheckedCreateNestedManyWithoutCityInput>;
}

@InputType()
export class CityUncheckedCreateWithoutTourCityInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    name!: string;
    @Field(() => Status, {nullable:true})
    @Validator.IsString()
    status?: keyof typeof Status;
    @Field(() => Int, {nullable:false})
    countryId!: number;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class CityUncheckedCreateInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    name!: string;
    @Field(() => Status, {nullable:true})
    @Validator.IsString()
    status?: keyof typeof Status;
    @Field(() => Int, {nullable:false})
    countryId!: number;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => TourCityUncheckedCreateNestedManyWithoutCityInput, {nullable:true})
    tourCity?: InstanceType<typeof TourCityUncheckedCreateNestedManyWithoutCityInput>;
}

@InputType()
export class CityUncheckedUpdateManyWithoutCityInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    name?: string;
    @Field(() => Status, {nullable:true})
    @Validator.IsString()
    status?: keyof typeof Status;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class CityUncheckedUpdateManyWithoutCountryInput {
    @Field(() => [CityCreateWithoutCountryInput], {nullable:true})
    @Type(() => CityCreateWithoutCountryInput)
    create?: Array<CityCreateWithoutCountryInput>;
    @Field(() => [CityCreateOrConnectWithoutCountryInput], {nullable:true})
    @Type(() => CityCreateOrConnectWithoutCountryInput)
    connectOrCreate?: Array<CityCreateOrConnectWithoutCountryInput>;
    @Field(() => [CityUpsertWithWhereUniqueWithoutCountryInput], {nullable:true})
    @Type(() => CityUpsertWithWhereUniqueWithoutCountryInput)
    upsert?: Array<CityUpsertWithWhereUniqueWithoutCountryInput>;
    @Field(() => CityCreateManyCountryInputEnvelope, {nullable:true})
    @Type(() => CityCreateManyCountryInputEnvelope)
    createMany?: InstanceType<typeof CityCreateManyCountryInputEnvelope>;
    @Field(() => [CityWhereUniqueInput], {nullable:true})
    @Type(() => CityWhereUniqueInput)
    set?: Array<CityWhereUniqueInput>;
    @Field(() => [CityWhereUniqueInput], {nullable:true})
    @Type(() => CityWhereUniqueInput)
    disconnect?: Array<CityWhereUniqueInput>;
    @Field(() => [CityWhereUniqueInput], {nullable:true})
    @Type(() => CityWhereUniqueInput)
    delete?: Array<CityWhereUniqueInput>;
    @Field(() => [CityWhereUniqueInput], {nullable:true})
    @Type(() => CityWhereUniqueInput)
    connect?: Array<CityWhereUniqueInput>;
    @Field(() => [CityUpdateWithWhereUniqueWithoutCountryInput], {nullable:true})
    @Type(() => CityUpdateWithWhereUniqueWithoutCountryInput)
    update?: Array<CityUpdateWithWhereUniqueWithoutCountryInput>;
    @Field(() => [CityUpdateManyWithWhereWithoutCountryInput], {nullable:true})
    @Type(() => CityUpdateManyWithWhereWithoutCountryInput)
    updateMany?: Array<CityUpdateManyWithWhereWithoutCountryInput>;
    @Field(() => [CityScalarWhereInput], {nullable:true})
    @Type(() => CityScalarWhereInput)
    deleteMany?: Array<CityScalarWhereInput>;
}

@InputType()
export class CityUncheckedUpdateManyInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    name?: string;
    @Field(() => Status, {nullable:true})
    @Validator.IsString()
    status?: keyof typeof Status;
    @Field(() => Int, {nullable:true})
    countryId?: number;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class CityUncheckedUpdateWithoutCountryInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    name?: string;
    @Field(() => Status, {nullable:true})
    @Validator.IsString()
    status?: keyof typeof Status;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => TourCityUncheckedUpdateManyWithoutCityInput, {nullable:true})
    tourCity?: InstanceType<typeof TourCityUncheckedUpdateManyWithoutCityInput>;
}

@InputType()
export class CityUncheckedUpdateWithoutTourCityInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    name?: string;
    @Field(() => Status, {nullable:true})
    @Validator.IsString()
    status?: keyof typeof Status;
    @Field(() => Int, {nullable:true})
    countryId?: number;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class CityUncheckedUpdateInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    name?: string;
    @Field(() => Status, {nullable:true})
    @Validator.IsString()
    status?: keyof typeof Status;
    @Field(() => Int, {nullable:true})
    countryId?: number;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => TourCityUncheckedUpdateManyWithoutCityInput, {nullable:true})
    tourCity?: InstanceType<typeof TourCityUncheckedUpdateManyWithoutCityInput>;
}

@InputType()
export class CityUpdateManyMutationInput {
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    name?: string;
    @Field(() => Status, {nullable:true})
    @Validator.IsString()
    status?: keyof typeof Status;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class CityUpdateManyWithWhereWithoutCountryInput {
    @Field(() => CityScalarWhereInput, {nullable:false})
    @Type(() => CityScalarWhereInput)
    where!: InstanceType<typeof CityScalarWhereInput>;
    @Field(() => CityUpdateManyMutationInput, {nullable:false})
    @Type(() => CityUpdateManyMutationInput)
    data!: InstanceType<typeof CityUpdateManyMutationInput>;
}

@InputType()
export class CityUpdateManyWithoutCountryInput {
    @Field(() => [CityCreateWithoutCountryInput], {nullable:true})
    @Type(() => CityCreateWithoutCountryInput)
    create?: Array<CityCreateWithoutCountryInput>;
    @Field(() => [CityCreateOrConnectWithoutCountryInput], {nullable:true})
    @Type(() => CityCreateOrConnectWithoutCountryInput)
    connectOrCreate?: Array<CityCreateOrConnectWithoutCountryInput>;
    @Field(() => [CityUpsertWithWhereUniqueWithoutCountryInput], {nullable:true})
    @Type(() => CityUpsertWithWhereUniqueWithoutCountryInput)
    upsert?: Array<CityUpsertWithWhereUniqueWithoutCountryInput>;
    @Field(() => CityCreateManyCountryInputEnvelope, {nullable:true})
    @Type(() => CityCreateManyCountryInputEnvelope)
    createMany?: InstanceType<typeof CityCreateManyCountryInputEnvelope>;
    @Field(() => [CityWhereUniqueInput], {nullable:true})
    @Type(() => CityWhereUniqueInput)
    set?: Array<CityWhereUniqueInput>;
    @Field(() => [CityWhereUniqueInput], {nullable:true})
    @Type(() => CityWhereUniqueInput)
    disconnect?: Array<CityWhereUniqueInput>;
    @Field(() => [CityWhereUniqueInput], {nullable:true})
    @Type(() => CityWhereUniqueInput)
    delete?: Array<CityWhereUniqueInput>;
    @Field(() => [CityWhereUniqueInput], {nullable:true})
    @Type(() => CityWhereUniqueInput)
    connect?: Array<CityWhereUniqueInput>;
    @Field(() => [CityUpdateWithWhereUniqueWithoutCountryInput], {nullable:true})
    @Type(() => CityUpdateWithWhereUniqueWithoutCountryInput)
    update?: Array<CityUpdateWithWhereUniqueWithoutCountryInput>;
    @Field(() => [CityUpdateManyWithWhereWithoutCountryInput], {nullable:true})
    @Type(() => CityUpdateManyWithWhereWithoutCountryInput)
    updateMany?: Array<CityUpdateManyWithWhereWithoutCountryInput>;
    @Field(() => [CityScalarWhereInput], {nullable:true})
    @Type(() => CityScalarWhereInput)
    deleteMany?: Array<CityScalarWhereInput>;
}

@InputType()
export class CityUpdateOneRequiredWithoutTourCityInput {
    @Field(() => CityCreateWithoutTourCityInput, {nullable:true})
    @Type(() => CityCreateWithoutTourCityInput)
    create?: InstanceType<typeof CityCreateWithoutTourCityInput>;
    @Field(() => CityCreateOrConnectWithoutTourCityInput, {nullable:true})
    @Type(() => CityCreateOrConnectWithoutTourCityInput)
    connectOrCreate?: InstanceType<typeof CityCreateOrConnectWithoutTourCityInput>;
    @Field(() => CityUpsertWithoutTourCityInput, {nullable:true})
    @Type(() => CityUpsertWithoutTourCityInput)
    upsert?: InstanceType<typeof CityUpsertWithoutTourCityInput>;
    @Field(() => CityWhereUniqueInput, {nullable:true})
    @Type(() => CityWhereUniqueInput)
    connect?: InstanceType<typeof CityWhereUniqueInput>;
    @Field(() => CityUpdateWithoutTourCityInput, {nullable:true})
    @Type(() => CityUpdateWithoutTourCityInput)
    update?: InstanceType<typeof CityUpdateWithoutTourCityInput>;
}

@InputType()
export class CityUpdateWithWhereUniqueWithoutCountryInput {
    @Field(() => CityWhereUniqueInput, {nullable:false})
    @Type(() => CityWhereUniqueInput)
    where!: InstanceType<typeof CityWhereUniqueInput>;
    @Field(() => CityUpdateWithoutCountryInput, {nullable:false})
    @Type(() => CityUpdateWithoutCountryInput)
    data!: InstanceType<typeof CityUpdateWithoutCountryInput>;
}

@InputType()
export class CityUpdateWithoutCountryInput {
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    name?: string;
    @Field(() => Status, {nullable:true})
    @Validator.IsString()
    status?: keyof typeof Status;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => TourCityUpdateManyWithoutCityInput, {nullable:true})
    tourCity?: InstanceType<typeof TourCityUpdateManyWithoutCityInput>;
}

@InputType()
export class CityUpdateWithoutTourCityInput {
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    name?: string;
    @Field(() => Status, {nullable:true})
    @Validator.IsString()
    status?: keyof typeof Status;
    @Field(() => CountryUpdateOneRequiredWithoutCityInput, {nullable:true})
    country?: InstanceType<typeof CountryUpdateOneRequiredWithoutCityInput>;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class CityUpdateInput {
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    name?: string;
    @Field(() => Status, {nullable:true})
    @Validator.IsString()
    status?: keyof typeof Status;
    @Field(() => CountryUpdateOneRequiredWithoutCityInput, {nullable:true})
    country?: InstanceType<typeof CountryUpdateOneRequiredWithoutCityInput>;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => TourCityUpdateManyWithoutCityInput, {nullable:true})
    tourCity?: InstanceType<typeof TourCityUpdateManyWithoutCityInput>;
}

@InputType()
export class CityUpsertWithWhereUniqueWithoutCountryInput {
    @Field(() => CityWhereUniqueInput, {nullable:false})
    @Type(() => CityWhereUniqueInput)
    where!: InstanceType<typeof CityWhereUniqueInput>;
    @Field(() => CityUpdateWithoutCountryInput, {nullable:false})
    @Type(() => CityUpdateWithoutCountryInput)
    update!: InstanceType<typeof CityUpdateWithoutCountryInput>;
    @Field(() => CityCreateWithoutCountryInput, {nullable:false})
    @Type(() => CityCreateWithoutCountryInput)
    create!: InstanceType<typeof CityCreateWithoutCountryInput>;
}

@InputType()
export class CityUpsertWithoutTourCityInput {
    @Field(() => CityUpdateWithoutTourCityInput, {nullable:false})
    @Type(() => CityUpdateWithoutTourCityInput)
    update!: InstanceType<typeof CityUpdateWithoutTourCityInput>;
    @Field(() => CityCreateWithoutTourCityInput, {nullable:false})
    @Type(() => CityCreateWithoutTourCityInput)
    create!: InstanceType<typeof CityCreateWithoutTourCityInput>;
}

@InputType()
export class CityWhereUniqueInput {
    @Field(() => Int, {nullable:true})
    id?: number;
}

@InputType()
export class CityWhereInput {
    @Field(() => [CityWhereInput], {nullable:true})
    AND?: Array<CityWhereInput>;
    @Field(() => [CityWhereInput], {nullable:true})
    OR?: Array<CityWhereInput>;
    @Field(() => [CityWhereInput], {nullable:true})
    NOT?: Array<CityWhereInput>;
    @Field(() => IntFilter, {nullable:true})
    id?: InstanceType<typeof IntFilter>;
    @Field(() => StringFilter, {nullable:true})
    name?: InstanceType<typeof StringFilter>;
    @Field(() => EnumStatusFilter, {nullable:true})
    status?: InstanceType<typeof EnumStatusFilter>;
    @Field(() => CountryRelationFilter, {nullable:true})
    country?: InstanceType<typeof CountryRelationFilter>;
    @Field(() => IntFilter, {nullable:true})
    countryId?: InstanceType<typeof IntFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => TourCityListRelationFilter, {nullable:true})
    tourCity?: InstanceType<typeof TourCityListRelationFilter>;
}

@ObjectType()
export class City {
    @Field(() => ID, {nullable:false})
    id!: number;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => Status, {nullable:false,defaultValue:'ACTIVE'})
    status!: keyof typeof Status;
    @Field(() => Country, {nullable:false})
    country?: InstanceType<typeof Country>;
    @Field(() => Int, {nullable:false})
    countryId!: number;
    @Field(() => Date, {nullable:false})
    createdAt!: Date;
    @Field(() => Date, {nullable:false})
    updatedAt!: Date;
    @Field(() => [TourCity], {nullable:true})
    tourCity?: Array<TourCity>;
    @Field(() => CityCount, {nullable:false})
    _count?: InstanceType<typeof CityCount>;
}

@ArgsType()
export class CreateManyCityArgs {
    @Field(() => [CityCreateManyInput], {nullable:false})
    @Type(() => CityCreateManyInput)
    @ValidateNested({ each: true })
    data!: Array<CityCreateManyInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@ArgsType()
export class CreateOneCityArgs {
    @Field(() => CityCreateInput, {nullable:false})
    @Type(() => CityCreateInput)
    @ValidateNested({ each: true })
    data!: InstanceType<typeof CityCreateInput>;
}

@ArgsType()
export class DeleteManyCityArgs {
    @Field(() => CityWhereInput, {nullable:true})
    @Type(() => CityWhereInput)
    @ValidateNested({ each: true })
    where?: InstanceType<typeof CityWhereInput>;
}

@ArgsType()
export class DeleteOneCityArgs {
    @Field(() => CityWhereUniqueInput, {nullable:false})
    @Type(() => CityWhereUniqueInput)
    @ValidateNested({ each: true })
    where!: InstanceType<typeof CityWhereUniqueInput>;
}

@ArgsType()
export class FindFirstCityArgs {
    @Field(() => CityWhereInput, {nullable:true})
    @Type(() => CityWhereInput)
    @ValidateNested({ each: true })
    where?: InstanceType<typeof CityWhereInput>;
    @Field(() => [CityOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<CityOrderByWithRelationInput>;
    @Field(() => CityWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof CityWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [CityScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof CityScalarFieldEnum>;
}

@ArgsType()
export class FindManyCityArgs {
    @Field(() => CityWhereInput, {nullable:true})
    @Type(() => CityWhereInput)
    @ValidateNested({ each: true })
    where?: InstanceType<typeof CityWhereInput>;
    @Field(() => [CityOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<CityOrderByWithRelationInput>;
    @Field(() => CityWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof CityWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [CityScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof CityScalarFieldEnum>;
}

@ArgsType()
export class FindUniqueCityArgs {
    @Field(() => CityWhereUniqueInput, {nullable:false})
    @Type(() => CityWhereUniqueInput)
    @ValidateNested({ each: true })
    where!: InstanceType<typeof CityWhereUniqueInput>;
}

@ArgsType()
export class UpdateManyCityArgs {
    @Field(() => CityUpdateManyMutationInput, {nullable:false})
    @Type(() => CityUpdateManyMutationInput)
    @ValidateNested({ each: true })
    data!: InstanceType<typeof CityUpdateManyMutationInput>;
    @Field(() => CityWhereInput, {nullable:true})
    @Type(() => CityWhereInput)
    @ValidateNested({ each: true })
    where?: InstanceType<typeof CityWhereInput>;
}

@ArgsType()
export class UpdateOneCityArgs {
    @Field(() => CityUpdateInput, {nullable:false})
    @Type(() => CityUpdateInput)
    @ValidateNested({ each: true })
    data!: InstanceType<typeof CityUpdateInput>;
    @Field(() => CityWhereUniqueInput, {nullable:false})
    @Type(() => CityWhereUniqueInput)
    @ValidateNested({ each: true })
    where!: InstanceType<typeof CityWhereUniqueInput>;
}

@ArgsType()
export class UpsertOneCityArgs {
    @Field(() => CityWhereUniqueInput, {nullable:false})
    @Type(() => CityWhereUniqueInput)
    @ValidateNested({ each: true })
    where!: InstanceType<typeof CityWhereUniqueInput>;
    @Field(() => CityCreateInput, {nullable:false})
    @Type(() => CityCreateInput)
    create!: InstanceType<typeof CityCreateInput>;
    @Field(() => CityUpdateInput, {nullable:false})
    @Type(() => CityUpdateInput)
    update!: InstanceType<typeof CityUpdateInput>;
}

@ObjectType()
export class AggregateCountry {
    @Field(() => CountryCountAggregate, {nullable:true})
    _count?: InstanceType<typeof CountryCountAggregate>;
    @Field(() => CountryAvgAggregate, {nullable:true})
    _avg?: InstanceType<typeof CountryAvgAggregate>;
    @Field(() => CountrySumAggregate, {nullable:true})
    _sum?: InstanceType<typeof CountrySumAggregate>;
    @Field(() => CountryMinAggregate, {nullable:true})
    _min?: InstanceType<typeof CountryMinAggregate>;
    @Field(() => CountryMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof CountryMaxAggregate>;
}

@ArgsType()
export class CountryAggregateArgs {
    @Field(() => CountryWhereInput, {nullable:true})
    @Type(() => CountryWhereInput)
    @ValidateNested({ each: true })
    where?: InstanceType<typeof CountryWhereInput>;
    @Field(() => [CountryOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<CountryOrderByWithRelationInput>;
    @Field(() => CountryWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof CountryWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => CountryCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof CountryCountAggregateInput>;
    @Field(() => CountryAvgAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof CountryAvgAggregateInput>;
    @Field(() => CountrySumAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof CountrySumAggregateInput>;
    @Field(() => CountryMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof CountryMinAggregateInput>;
    @Field(() => CountryMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof CountryMaxAggregateInput>;
}

@InputType()
export class CountryAvgAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
}

@ObjectType()
export class CountryAvgAggregate {
    @Field(() => Float, {nullable:true})
    id?: number;
}

@InputType()
export class CountryAvgOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
}

@InputType()
export class CountryCountAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    name?: true;
    @Field(() => Boolean, {nullable:true})
    status?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
    @Field(() => Boolean, {nullable:true})
    _all?: true;
}

@ObjectType()
export class CountryCountAggregate {
    @Field(() => Int, {nullable:false})
    id!: number;
    @Field(() => Int, {nullable:false})
    name!: number;
    @Field(() => Int, {nullable:false})
    status!: number;
    @Field(() => Int, {nullable:false})
    createdAt!: number;
    @Field(() => Int, {nullable:false})
    updatedAt!: number;
    @Field(() => Int, {nullable:false})
    _all!: number;
}

@InputType()
export class CountryCountOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
}

@ObjectType()
export class CountryCount {
    @Field(() => Int, {nullable:false})
    User?: number;
    @Field(() => Int, {nullable:false})
    City?: number;
}

@InputType()
export class CountryCreateManyInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    name!: string;
    @Field(() => Status, {nullable:true})
    @Validator.IsString()
    status?: keyof typeof Status;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class CountryCreateNestedOneWithoutCityInput {
    @Field(() => CountryCreateWithoutCityInput, {nullable:true})
    @Type(() => CountryCreateWithoutCityInput)
    create?: InstanceType<typeof CountryCreateWithoutCityInput>;
    @Field(() => CountryCreateOrConnectWithoutCityInput, {nullable:true})
    @Type(() => CountryCreateOrConnectWithoutCityInput)
    connectOrCreate?: InstanceType<typeof CountryCreateOrConnectWithoutCityInput>;
    @Field(() => CountryWhereUniqueInput, {nullable:true})
    @Type(() => CountryWhereUniqueInput)
    connect?: InstanceType<typeof CountryWhereUniqueInput>;
}

@InputType()
export class CountryCreateNestedOneWithoutUserInput {
    @Field(() => CountryCreateWithoutUserInput, {nullable:true})
    @Type(() => CountryCreateWithoutUserInput)
    create?: InstanceType<typeof CountryCreateWithoutUserInput>;
    @Field(() => CountryCreateOrConnectWithoutUserInput, {nullable:true})
    @Type(() => CountryCreateOrConnectWithoutUserInput)
    connectOrCreate?: InstanceType<typeof CountryCreateOrConnectWithoutUserInput>;
    @Field(() => CountryWhereUniqueInput, {nullable:true})
    @Type(() => CountryWhereUniqueInput)
    connect?: InstanceType<typeof CountryWhereUniqueInput>;
}

@InputType()
export class CountryCreateOrConnectWithoutCityInput {
    @Field(() => CountryWhereUniqueInput, {nullable:false})
    @Type(() => CountryWhereUniqueInput)
    where!: InstanceType<typeof CountryWhereUniqueInput>;
    @Field(() => CountryCreateWithoutCityInput, {nullable:false})
    @Type(() => CountryCreateWithoutCityInput)
    create!: InstanceType<typeof CountryCreateWithoutCityInput>;
}

@InputType()
export class CountryCreateOrConnectWithoutUserInput {
    @Field(() => CountryWhereUniqueInput, {nullable:false})
    @Type(() => CountryWhereUniqueInput)
    where!: InstanceType<typeof CountryWhereUniqueInput>;
    @Field(() => CountryCreateWithoutUserInput, {nullable:false})
    @Type(() => CountryCreateWithoutUserInput)
    create!: InstanceType<typeof CountryCreateWithoutUserInput>;
}

@InputType()
export class CountryCreateWithoutCityInput {
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    name!: string;
    @Field(() => Status, {nullable:true})
    @Validator.IsString()
    status?: keyof typeof Status;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => UserCreateNestedManyWithoutCountryInput, {nullable:true})
    User?: InstanceType<typeof UserCreateNestedManyWithoutCountryInput>;
}

@InputType()
export class CountryCreateWithoutUserInput {
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    name!: string;
    @Field(() => Status, {nullable:true})
    @Validator.IsString()
    status?: keyof typeof Status;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => CityCreateNestedManyWithoutCountryInput, {nullable:true})
    City?: InstanceType<typeof CityCreateNestedManyWithoutCountryInput>;
}

@InputType()
export class CountryCreateInput {
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    name!: string;
    @Field(() => Status, {nullable:true})
    @Validator.IsString()
    status?: keyof typeof Status;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => UserCreateNestedManyWithoutCountryInput, {nullable:true})
    User?: InstanceType<typeof UserCreateNestedManyWithoutCountryInput>;
    @Field(() => CityCreateNestedManyWithoutCountryInput, {nullable:true})
    City?: InstanceType<typeof CityCreateNestedManyWithoutCountryInput>;
}

@ArgsType()
export class CountryGroupByArgs {
    @Field(() => CountryWhereInput, {nullable:true})
    @Type(() => CountryWhereInput)
    @ValidateNested({ each: true })
    where?: InstanceType<typeof CountryWhereInput>;
    @Field(() => [CountryOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<CountryOrderByWithAggregationInput>;
    @Field(() => [CountryScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof CountryScalarFieldEnum>;
    @Field(() => CountryScalarWhereWithAggregatesInput, {nullable:true})
    having?: InstanceType<typeof CountryScalarWhereWithAggregatesInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => CountryCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof CountryCountAggregateInput>;
    @Field(() => CountryAvgAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof CountryAvgAggregateInput>;
    @Field(() => CountrySumAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof CountrySumAggregateInput>;
    @Field(() => CountryMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof CountryMinAggregateInput>;
    @Field(() => CountryMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof CountryMaxAggregateInput>;
}

@ObjectType()
export class CountryGroupBy {
    @Field(() => Int, {nullable:false})
    id!: number;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    name!: string;
    @Field(() => Status, {nullable:false})
    @Validator.IsString()
    status!: keyof typeof Status;
    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;
    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;
    @Field(() => CountryCountAggregate, {nullable:true})
    _count?: InstanceType<typeof CountryCountAggregate>;
    @Field(() => CountryAvgAggregate, {nullable:true})
    _avg?: InstanceType<typeof CountryAvgAggregate>;
    @Field(() => CountrySumAggregate, {nullable:true})
    _sum?: InstanceType<typeof CountrySumAggregate>;
    @Field(() => CountryMinAggregate, {nullable:true})
    _min?: InstanceType<typeof CountryMinAggregate>;
    @Field(() => CountryMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof CountryMaxAggregate>;
}

@InputType()
export class CountryMaxAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    name?: true;
    @Field(() => Boolean, {nullable:true})
    status?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
}

@ObjectType()
export class CountryMaxAggregate {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    name?: string;
    @Field(() => Status, {nullable:true})
    @Validator.IsString()
    status?: keyof typeof Status;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class CountryMaxOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
}

@InputType()
export class CountryMinAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    name?: true;
    @Field(() => Boolean, {nullable:true})
    status?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
}

@ObjectType()
export class CountryMinAggregate {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    name?: string;
    @Field(() => Status, {nullable:true})
    @Validator.IsString()
    status?: keyof typeof Status;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class CountryMinOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
}

@InputType()
export class CountryOrderByWithAggregationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
    @Field(() => CountryCountOrderByAggregateInput, {nullable:true})
    _count?: InstanceType<typeof CountryCountOrderByAggregateInput>;
    @Field(() => CountryAvgOrderByAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof CountryAvgOrderByAggregateInput>;
    @Field(() => CountryMaxOrderByAggregateInput, {nullable:true})
    _max?: InstanceType<typeof CountryMaxOrderByAggregateInput>;
    @Field(() => CountryMinOrderByAggregateInput, {nullable:true})
    _min?: InstanceType<typeof CountryMinOrderByAggregateInput>;
    @Field(() => CountrySumOrderByAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof CountrySumOrderByAggregateInput>;
}

@InputType()
export class CountryOrderByWithRelationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
    @Field(() => UserOrderByRelationAggregateInput, {nullable:true})
    User?: InstanceType<typeof UserOrderByRelationAggregateInput>;
    @Field(() => CityOrderByRelationAggregateInput, {nullable:true})
    City?: InstanceType<typeof CityOrderByRelationAggregateInput>;
}

@InputType()
export class CountryRelationFilter {
    @Field(() => CountryWhereInput, {nullable:true})
    is?: InstanceType<typeof CountryWhereInput>;
    @Field(() => CountryWhereInput, {nullable:true})
    isNot?: InstanceType<typeof CountryWhereInput>;
}

@InputType()
export class CountryScalarWhereWithAggregatesInput {
    @Field(() => [CountryScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<CountryScalarWhereWithAggregatesInput>;
    @Field(() => [CountryScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<CountryScalarWhereWithAggregatesInput>;
    @Field(() => [CountryScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<CountryScalarWhereWithAggregatesInput>;
    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: InstanceType<typeof IntWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => EnumStatusWithAggregatesFilter, {nullable:true})
    status?: InstanceType<typeof EnumStatusWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
}

@InputType()
export class CountrySumAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
}

@ObjectType()
export class CountrySumAggregate {
    @Field(() => Int, {nullable:true})
    id?: number;
}

@InputType()
export class CountrySumOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
}

@InputType()
export class CountryUncheckedCreateWithoutCityInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    name!: string;
    @Field(() => Status, {nullable:true})
    @Validator.IsString()
    status?: keyof typeof Status;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => UserUncheckedCreateNestedManyWithoutCountryInput, {nullable:true})
    User?: InstanceType<typeof UserUncheckedCreateNestedManyWithoutCountryInput>;
}

@InputType()
export class CountryUncheckedCreateWithoutUserInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    name!: string;
    @Field(() => Status, {nullable:true})
    @Validator.IsString()
    status?: keyof typeof Status;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => CityUncheckedCreateNestedManyWithoutCountryInput, {nullable:true})
    City?: InstanceType<typeof CityUncheckedCreateNestedManyWithoutCountryInput>;
}

@InputType()
export class CountryUncheckedCreateInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    name!: string;
    @Field(() => Status, {nullable:true})
    @Validator.IsString()
    status?: keyof typeof Status;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => UserUncheckedCreateNestedManyWithoutCountryInput, {nullable:true})
    User?: InstanceType<typeof UserUncheckedCreateNestedManyWithoutCountryInput>;
    @Field(() => CityUncheckedCreateNestedManyWithoutCountryInput, {nullable:true})
    City?: InstanceType<typeof CityUncheckedCreateNestedManyWithoutCountryInput>;
}

@InputType()
export class CountryUncheckedUpdateManyInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    name?: string;
    @Field(() => Status, {nullable:true})
    @Validator.IsString()
    status?: keyof typeof Status;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class CountryUncheckedUpdateWithoutCityInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    name?: string;
    @Field(() => Status, {nullable:true})
    @Validator.IsString()
    status?: keyof typeof Status;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => UserUncheckedUpdateManyWithoutCountryInput, {nullable:true})
    User?: InstanceType<typeof UserUncheckedUpdateManyWithoutCountryInput>;
}

@InputType()
export class CountryUncheckedUpdateWithoutUserInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    name?: string;
    @Field(() => Status, {nullable:true})
    @Validator.IsString()
    status?: keyof typeof Status;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => CityUncheckedUpdateManyWithoutCountryInput, {nullable:true})
    City?: InstanceType<typeof CityUncheckedUpdateManyWithoutCountryInput>;
}

@InputType()
export class CountryUncheckedUpdateInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    name?: string;
    @Field(() => Status, {nullable:true})
    @Validator.IsString()
    status?: keyof typeof Status;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => UserUncheckedUpdateManyWithoutCountryInput, {nullable:true})
    User?: InstanceType<typeof UserUncheckedUpdateManyWithoutCountryInput>;
    @Field(() => CityUncheckedUpdateManyWithoutCountryInput, {nullable:true})
    City?: InstanceType<typeof CityUncheckedUpdateManyWithoutCountryInput>;
}

@InputType()
export class CountryUpdateManyMutationInput {
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    name?: string;
    @Field(() => Status, {nullable:true})
    @Validator.IsString()
    status?: keyof typeof Status;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class CountryUpdateOneRequiredWithoutCityInput {
    @Field(() => CountryCreateWithoutCityInput, {nullable:true})
    @Type(() => CountryCreateWithoutCityInput)
    create?: InstanceType<typeof CountryCreateWithoutCityInput>;
    @Field(() => CountryCreateOrConnectWithoutCityInput, {nullable:true})
    @Type(() => CountryCreateOrConnectWithoutCityInput)
    connectOrCreate?: InstanceType<typeof CountryCreateOrConnectWithoutCityInput>;
    @Field(() => CountryUpsertWithoutCityInput, {nullable:true})
    @Type(() => CountryUpsertWithoutCityInput)
    upsert?: InstanceType<typeof CountryUpsertWithoutCityInput>;
    @Field(() => CountryWhereUniqueInput, {nullable:true})
    @Type(() => CountryWhereUniqueInput)
    connect?: InstanceType<typeof CountryWhereUniqueInput>;
    @Field(() => CountryUpdateWithoutCityInput, {nullable:true})
    @Type(() => CountryUpdateWithoutCityInput)
    update?: InstanceType<typeof CountryUpdateWithoutCityInput>;
}

@InputType()
export class CountryUpdateOneWithoutUserInput {
    @Field(() => CountryCreateWithoutUserInput, {nullable:true})
    @Type(() => CountryCreateWithoutUserInput)
    create?: InstanceType<typeof CountryCreateWithoutUserInput>;
    @Field(() => CountryCreateOrConnectWithoutUserInput, {nullable:true})
    @Type(() => CountryCreateOrConnectWithoutUserInput)
    connectOrCreate?: InstanceType<typeof CountryCreateOrConnectWithoutUserInput>;
    @Field(() => CountryUpsertWithoutUserInput, {nullable:true})
    @Type(() => CountryUpsertWithoutUserInput)
    upsert?: InstanceType<typeof CountryUpsertWithoutUserInput>;
    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;
    @Field(() => Boolean, {nullable:true})
    delete?: boolean;
    @Field(() => CountryWhereUniqueInput, {nullable:true})
    @Type(() => CountryWhereUniqueInput)
    connect?: InstanceType<typeof CountryWhereUniqueInput>;
    @Field(() => CountryUpdateWithoutUserInput, {nullable:true})
    @Type(() => CountryUpdateWithoutUserInput)
    update?: InstanceType<typeof CountryUpdateWithoutUserInput>;
}

@InputType()
export class CountryUpdateWithoutCityInput {
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    name?: string;
    @Field(() => Status, {nullable:true})
    @Validator.IsString()
    status?: keyof typeof Status;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => UserUpdateManyWithoutCountryInput, {nullable:true})
    User?: InstanceType<typeof UserUpdateManyWithoutCountryInput>;
}

@InputType()
export class CountryUpdateWithoutUserInput {
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    name?: string;
    @Field(() => Status, {nullable:true})
    @Validator.IsString()
    status?: keyof typeof Status;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => CityUpdateManyWithoutCountryInput, {nullable:true})
    City?: InstanceType<typeof CityUpdateManyWithoutCountryInput>;
}

@InputType()
export class CountryUpdateInput {
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    name?: string;
    @Field(() => Status, {nullable:true})
    @Validator.IsString()
    status?: keyof typeof Status;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => UserUpdateManyWithoutCountryInput, {nullable:true})
    User?: InstanceType<typeof UserUpdateManyWithoutCountryInput>;
    @Field(() => CityUpdateManyWithoutCountryInput, {nullable:true})
    City?: InstanceType<typeof CityUpdateManyWithoutCountryInput>;
}

@InputType()
export class CountryUpsertWithoutCityInput {
    @Field(() => CountryUpdateWithoutCityInput, {nullable:false})
    @Type(() => CountryUpdateWithoutCityInput)
    update!: InstanceType<typeof CountryUpdateWithoutCityInput>;
    @Field(() => CountryCreateWithoutCityInput, {nullable:false})
    @Type(() => CountryCreateWithoutCityInput)
    create!: InstanceType<typeof CountryCreateWithoutCityInput>;
}

@InputType()
export class CountryUpsertWithoutUserInput {
    @Field(() => CountryUpdateWithoutUserInput, {nullable:false})
    @Type(() => CountryUpdateWithoutUserInput)
    update!: InstanceType<typeof CountryUpdateWithoutUserInput>;
    @Field(() => CountryCreateWithoutUserInput, {nullable:false})
    @Type(() => CountryCreateWithoutUserInput)
    create!: InstanceType<typeof CountryCreateWithoutUserInput>;
}

@InputType()
export class CountryWhereUniqueInput {
    @Field(() => Int, {nullable:true})
    id?: number;
}

@InputType()
export class CountryWhereInput {
    @Field(() => [CountryWhereInput], {nullable:true})
    AND?: Array<CountryWhereInput>;
    @Field(() => [CountryWhereInput], {nullable:true})
    OR?: Array<CountryWhereInput>;
    @Field(() => [CountryWhereInput], {nullable:true})
    NOT?: Array<CountryWhereInput>;
    @Field(() => IntFilter, {nullable:true})
    id?: InstanceType<typeof IntFilter>;
    @Field(() => StringFilter, {nullable:true})
    name?: InstanceType<typeof StringFilter>;
    @Field(() => EnumStatusFilter, {nullable:true})
    status?: InstanceType<typeof EnumStatusFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => UserListRelationFilter, {nullable:true})
    User?: InstanceType<typeof UserListRelationFilter>;
    @Field(() => CityListRelationFilter, {nullable:true})
    City?: InstanceType<typeof CityListRelationFilter>;
}

@ObjectType()
export class Country {
    @Field(() => ID, {nullable:false})
    id!: number;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => Status, {nullable:false,defaultValue:'ACTIVE'})
    status!: keyof typeof Status;
    @Field(() => Date, {nullable:false})
    createdAt!: Date;
    @Field(() => Date, {nullable:false})
    updatedAt!: Date;
    @Field(() => [User], {nullable:true})
    User?: Array<User>;
    @Field(() => [City], {nullable:true})
    City?: Array<City>;
    @Field(() => CountryCount, {nullable:false})
    _count?: InstanceType<typeof CountryCount>;
}

@ArgsType()
export class CreateManyCountryArgs {
    @Field(() => [CountryCreateManyInput], {nullable:false})
    @Type(() => CountryCreateManyInput)
    @ValidateNested({ each: true })
    data!: Array<CountryCreateManyInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@ArgsType()
export class CreateOneCountryArgs {
    @Field(() => CountryCreateInput, {nullable:false})
    @Type(() => CountryCreateInput)
    @ValidateNested({ each: true })
    data!: InstanceType<typeof CountryCreateInput>;
}

@ArgsType()
export class DeleteManyCountryArgs {
    @Field(() => CountryWhereInput, {nullable:true})
    @Type(() => CountryWhereInput)
    @ValidateNested({ each: true })
    where?: InstanceType<typeof CountryWhereInput>;
}

@ArgsType()
export class DeleteOneCountryArgs {
    @Field(() => CountryWhereUniqueInput, {nullable:false})
    @Type(() => CountryWhereUniqueInput)
    @ValidateNested({ each: true })
    where!: InstanceType<typeof CountryWhereUniqueInput>;
}

@ArgsType()
export class FindFirstCountryArgs {
    @Field(() => CountryWhereInput, {nullable:true})
    @Type(() => CountryWhereInput)
    @ValidateNested({ each: true })
    where?: InstanceType<typeof CountryWhereInput>;
    @Field(() => [CountryOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<CountryOrderByWithRelationInput>;
    @Field(() => CountryWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof CountryWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [CountryScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof CountryScalarFieldEnum>;
}

@ArgsType()
export class FindManyCountryArgs {
    @Field(() => CountryWhereInput, {nullable:true})
    @Type(() => CountryWhereInput)
    @ValidateNested({ each: true })
    where?: InstanceType<typeof CountryWhereInput>;
    @Field(() => [CountryOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<CountryOrderByWithRelationInput>;
    @Field(() => CountryWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof CountryWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [CountryScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof CountryScalarFieldEnum>;
}

@ArgsType()
export class FindUniqueCountryArgs {
    @Field(() => CountryWhereUniqueInput, {nullable:false})
    @Type(() => CountryWhereUniqueInput)
    @ValidateNested({ each: true })
    where!: InstanceType<typeof CountryWhereUniqueInput>;
}

@ArgsType()
export class UpdateManyCountryArgs {
    @Field(() => CountryUpdateManyMutationInput, {nullable:false})
    @Type(() => CountryUpdateManyMutationInput)
    @ValidateNested({ each: true })
    data!: InstanceType<typeof CountryUpdateManyMutationInput>;
    @Field(() => CountryWhereInput, {nullable:true})
    @Type(() => CountryWhereInput)
    @ValidateNested({ each: true })
    where?: InstanceType<typeof CountryWhereInput>;
}

@ArgsType()
export class UpdateOneCountryArgs {
    @Field(() => CountryUpdateInput, {nullable:false})
    @Type(() => CountryUpdateInput)
    @ValidateNested({ each: true })
    data!: InstanceType<typeof CountryUpdateInput>;
    @Field(() => CountryWhereUniqueInput, {nullable:false})
    @Type(() => CountryWhereUniqueInput)
    @ValidateNested({ each: true })
    where!: InstanceType<typeof CountryWhereUniqueInput>;
}

@ArgsType()
export class UpsertOneCountryArgs {
    @Field(() => CountryWhereUniqueInput, {nullable:false})
    @Type(() => CountryWhereUniqueInput)
    @ValidateNested({ each: true })
    where!: InstanceType<typeof CountryWhereUniqueInput>;
    @Field(() => CountryCreateInput, {nullable:false})
    @Type(() => CountryCreateInput)
    create!: InstanceType<typeof CountryCreateInput>;
    @Field(() => CountryUpdateInput, {nullable:false})
    @Type(() => CountryUpdateInput)
    update!: InstanceType<typeof CountryUpdateInput>;
}

@ObjectType()
export class AggregateCurrency {
    @Field(() => CurrencyCountAggregate, {nullable:true})
    _count?: InstanceType<typeof CurrencyCountAggregate>;
    @Field(() => CurrencyAvgAggregate, {nullable:true})
    _avg?: InstanceType<typeof CurrencyAvgAggregate>;
    @Field(() => CurrencySumAggregate, {nullable:true})
    _sum?: InstanceType<typeof CurrencySumAggregate>;
    @Field(() => CurrencyMinAggregate, {nullable:true})
    _min?: InstanceType<typeof CurrencyMinAggregate>;
    @Field(() => CurrencyMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof CurrencyMaxAggregate>;
}

@ArgsType()
export class CreateManyCurrencyArgs {
    @Field(() => [CurrencyCreateManyInput], {nullable:false})
    @Type(() => CurrencyCreateManyInput)
    @ValidateNested({ each: true })
    data!: Array<CurrencyCreateManyInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@ArgsType()
export class CreateOneCurrencyArgs {
    @Field(() => CurrencyCreateInput, {nullable:false})
    @Type(() => CurrencyCreateInput)
    @ValidateNested({ each: true })
    data!: InstanceType<typeof CurrencyCreateInput>;
}

@ArgsType()
export class CurrencyAggregateArgs {
    @Field(() => CurrencyWhereInput, {nullable:true})
    @Type(() => CurrencyWhereInput)
    @ValidateNested({ each: true })
    where?: InstanceType<typeof CurrencyWhereInput>;
    @Field(() => [CurrencyOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<CurrencyOrderByWithRelationInput>;
    @Field(() => CurrencyWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof CurrencyWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => CurrencyCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof CurrencyCountAggregateInput>;
    @Field(() => CurrencyAvgAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof CurrencyAvgAggregateInput>;
    @Field(() => CurrencySumAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof CurrencySumAggregateInput>;
    @Field(() => CurrencyMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof CurrencyMinAggregateInput>;
    @Field(() => CurrencyMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof CurrencyMaxAggregateInput>;
}

@InputType()
export class CurrencyAvgAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
}

@ObjectType()
export class CurrencyAvgAggregate {
    @Field(() => Float, {nullable:true})
    id?: number;
}

@InputType()
export class CurrencyAvgOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
}

@InputType()
export class CurrencyCountAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    name?: true;
    @Field(() => Boolean, {nullable:true})
    status?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
    @Field(() => Boolean, {nullable:true})
    _all?: true;
}

@ObjectType()
export class CurrencyCountAggregate {
    @Field(() => Int, {nullable:false})
    id!: number;
    @Field(() => Int, {nullable:false})
    name!: number;
    @Field(() => Int, {nullable:false})
    status!: number;
    @Field(() => Int, {nullable:false})
    createdAt!: number;
    @Field(() => Int, {nullable:false})
    updatedAt!: number;
    @Field(() => Int, {nullable:false})
    _all!: number;
}

@InputType()
export class CurrencyCountOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
}

@ObjectType()
export class CurrencyCount {
    @Field(() => Int, {nullable:false})
    tour?: number;
}

@InputType()
export class CurrencyCreateManyInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    name!: string;
    @Field(() => Status, {nullable:true})
    @Validator.IsString()
    status?: keyof typeof Status;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class CurrencyCreateNestedOneWithoutTourInput {
    @Field(() => CurrencyCreateWithoutTourInput, {nullable:true})
    @Type(() => CurrencyCreateWithoutTourInput)
    create?: InstanceType<typeof CurrencyCreateWithoutTourInput>;
    @Field(() => CurrencyCreateOrConnectWithoutTourInput, {nullable:true})
    @Type(() => CurrencyCreateOrConnectWithoutTourInput)
    connectOrCreate?: InstanceType<typeof CurrencyCreateOrConnectWithoutTourInput>;
    @Field(() => CurrencyWhereUniqueInput, {nullable:true})
    @Type(() => CurrencyWhereUniqueInput)
    connect?: InstanceType<typeof CurrencyWhereUniqueInput>;
}

@InputType()
export class CurrencyCreateOrConnectWithoutTourInput {
    @Field(() => CurrencyWhereUniqueInput, {nullable:false})
    @Type(() => CurrencyWhereUniqueInput)
    where!: InstanceType<typeof CurrencyWhereUniqueInput>;
    @Field(() => CurrencyCreateWithoutTourInput, {nullable:false})
    @Type(() => CurrencyCreateWithoutTourInput)
    create!: InstanceType<typeof CurrencyCreateWithoutTourInput>;
}

@InputType()
export class CurrencyCreateWithoutTourInput {
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    name!: string;
    @Field(() => Status, {nullable:true})
    @Validator.IsString()
    status?: keyof typeof Status;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class CurrencyCreateInput {
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    name!: string;
    @Field(() => Status, {nullable:true})
    @Validator.IsString()
    status?: keyof typeof Status;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => TourCreateNestedManyWithoutCurrencyInput, {nullable:true})
    tour?: InstanceType<typeof TourCreateNestedManyWithoutCurrencyInput>;
}

@ArgsType()
export class CurrencyGroupByArgs {
    @Field(() => CurrencyWhereInput, {nullable:true})
    @Type(() => CurrencyWhereInput)
    @ValidateNested({ each: true })
    where?: InstanceType<typeof CurrencyWhereInput>;
    @Field(() => [CurrencyOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<CurrencyOrderByWithAggregationInput>;
    @Field(() => [CurrencyScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof CurrencyScalarFieldEnum>;
    @Field(() => CurrencyScalarWhereWithAggregatesInput, {nullable:true})
    having?: InstanceType<typeof CurrencyScalarWhereWithAggregatesInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => CurrencyCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof CurrencyCountAggregateInput>;
    @Field(() => CurrencyAvgAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof CurrencyAvgAggregateInput>;
    @Field(() => CurrencySumAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof CurrencySumAggregateInput>;
    @Field(() => CurrencyMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof CurrencyMinAggregateInput>;
    @Field(() => CurrencyMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof CurrencyMaxAggregateInput>;
}

@ObjectType()
export class CurrencyGroupBy {
    @Field(() => Int, {nullable:false})
    id!: number;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    name!: string;
    @Field(() => Status, {nullable:false})
    @Validator.IsString()
    status!: keyof typeof Status;
    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;
    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;
    @Field(() => CurrencyCountAggregate, {nullable:true})
    _count?: InstanceType<typeof CurrencyCountAggregate>;
    @Field(() => CurrencyAvgAggregate, {nullable:true})
    _avg?: InstanceType<typeof CurrencyAvgAggregate>;
    @Field(() => CurrencySumAggregate, {nullable:true})
    _sum?: InstanceType<typeof CurrencySumAggregate>;
    @Field(() => CurrencyMinAggregate, {nullable:true})
    _min?: InstanceType<typeof CurrencyMinAggregate>;
    @Field(() => CurrencyMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof CurrencyMaxAggregate>;
}

@InputType()
export class CurrencyMaxAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    name?: true;
    @Field(() => Boolean, {nullable:true})
    status?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
}

@ObjectType()
export class CurrencyMaxAggregate {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    name?: string;
    @Field(() => Status, {nullable:true})
    @Validator.IsString()
    status?: keyof typeof Status;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class CurrencyMaxOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
}

@InputType()
export class CurrencyMinAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    name?: true;
    @Field(() => Boolean, {nullable:true})
    status?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
}

@ObjectType()
export class CurrencyMinAggregate {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    name?: string;
    @Field(() => Status, {nullable:true})
    @Validator.IsString()
    status?: keyof typeof Status;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class CurrencyMinOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
}

@InputType()
export class CurrencyOrderByWithAggregationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
    @Field(() => CurrencyCountOrderByAggregateInput, {nullable:true})
    _count?: InstanceType<typeof CurrencyCountOrderByAggregateInput>;
    @Field(() => CurrencyAvgOrderByAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof CurrencyAvgOrderByAggregateInput>;
    @Field(() => CurrencyMaxOrderByAggregateInput, {nullable:true})
    _max?: InstanceType<typeof CurrencyMaxOrderByAggregateInput>;
    @Field(() => CurrencyMinOrderByAggregateInput, {nullable:true})
    _min?: InstanceType<typeof CurrencyMinOrderByAggregateInput>;
    @Field(() => CurrencySumOrderByAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof CurrencySumOrderByAggregateInput>;
}

@InputType()
export class CurrencyOrderByWithRelationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
    @Field(() => TourOrderByRelationAggregateInput, {nullable:true})
    tour?: InstanceType<typeof TourOrderByRelationAggregateInput>;
}

@InputType()
export class CurrencyRelationFilter {
    @Field(() => CurrencyWhereInput, {nullable:true})
    is?: InstanceType<typeof CurrencyWhereInput>;
    @Field(() => CurrencyWhereInput, {nullable:true})
    isNot?: InstanceType<typeof CurrencyWhereInput>;
}

@InputType()
export class CurrencyScalarWhereWithAggregatesInput {
    @Field(() => [CurrencyScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<CurrencyScalarWhereWithAggregatesInput>;
    @Field(() => [CurrencyScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<CurrencyScalarWhereWithAggregatesInput>;
    @Field(() => [CurrencyScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<CurrencyScalarWhereWithAggregatesInput>;
    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: InstanceType<typeof IntWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => EnumStatusWithAggregatesFilter, {nullable:true})
    status?: InstanceType<typeof EnumStatusWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
}

@InputType()
export class CurrencySumAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
}

@ObjectType()
export class CurrencySumAggregate {
    @Field(() => Int, {nullable:true})
    id?: number;
}

@InputType()
export class CurrencySumOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
}

@InputType()
export class CurrencyUncheckedCreateWithoutTourInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    name!: string;
    @Field(() => Status, {nullable:true})
    @Validator.IsString()
    status?: keyof typeof Status;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class CurrencyUncheckedCreateInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    name!: string;
    @Field(() => Status, {nullable:true})
    @Validator.IsString()
    status?: keyof typeof Status;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => TourUncheckedCreateNestedManyWithoutCurrencyInput, {nullable:true})
    tour?: InstanceType<typeof TourUncheckedCreateNestedManyWithoutCurrencyInput>;
}

@InputType()
export class CurrencyUncheckedUpdateManyInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    name?: string;
    @Field(() => Status, {nullable:true})
    @Validator.IsString()
    status?: keyof typeof Status;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class CurrencyUncheckedUpdateWithoutTourInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    name?: string;
    @Field(() => Status, {nullable:true})
    @Validator.IsString()
    status?: keyof typeof Status;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class CurrencyUncheckedUpdateInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    name?: string;
    @Field(() => Status, {nullable:true})
    @Validator.IsString()
    status?: keyof typeof Status;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => TourUncheckedUpdateManyWithoutCurrencyInput, {nullable:true})
    tour?: InstanceType<typeof TourUncheckedUpdateManyWithoutCurrencyInput>;
}

@InputType()
export class CurrencyUpdateManyMutationInput {
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    name?: string;
    @Field(() => Status, {nullable:true})
    @Validator.IsString()
    status?: keyof typeof Status;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class CurrencyUpdateOneRequiredWithoutTourInput {
    @Field(() => CurrencyCreateWithoutTourInput, {nullable:true})
    @Type(() => CurrencyCreateWithoutTourInput)
    create?: InstanceType<typeof CurrencyCreateWithoutTourInput>;
    @Field(() => CurrencyCreateOrConnectWithoutTourInput, {nullable:true})
    @Type(() => CurrencyCreateOrConnectWithoutTourInput)
    connectOrCreate?: InstanceType<typeof CurrencyCreateOrConnectWithoutTourInput>;
    @Field(() => CurrencyUpsertWithoutTourInput, {nullable:true})
    @Type(() => CurrencyUpsertWithoutTourInput)
    upsert?: InstanceType<typeof CurrencyUpsertWithoutTourInput>;
    @Field(() => CurrencyWhereUniqueInput, {nullable:true})
    @Type(() => CurrencyWhereUniqueInput)
    connect?: InstanceType<typeof CurrencyWhereUniqueInput>;
    @Field(() => CurrencyUpdateWithoutTourInput, {nullable:true})
    @Type(() => CurrencyUpdateWithoutTourInput)
    update?: InstanceType<typeof CurrencyUpdateWithoutTourInput>;
}

@InputType()
export class CurrencyUpdateWithoutTourInput {
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    name?: string;
    @Field(() => Status, {nullable:true})
    @Validator.IsString()
    status?: keyof typeof Status;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class CurrencyUpdateInput {
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    name?: string;
    @Field(() => Status, {nullable:true})
    @Validator.IsString()
    status?: keyof typeof Status;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => TourUpdateManyWithoutCurrencyInput, {nullable:true})
    tour?: InstanceType<typeof TourUpdateManyWithoutCurrencyInput>;
}

@InputType()
export class CurrencyUpsertWithoutTourInput {
    @Field(() => CurrencyUpdateWithoutTourInput, {nullable:false})
    @Type(() => CurrencyUpdateWithoutTourInput)
    update!: InstanceType<typeof CurrencyUpdateWithoutTourInput>;
    @Field(() => CurrencyCreateWithoutTourInput, {nullable:false})
    @Type(() => CurrencyCreateWithoutTourInput)
    create!: InstanceType<typeof CurrencyCreateWithoutTourInput>;
}

@InputType()
export class CurrencyWhereUniqueInput {
    @Field(() => Int, {nullable:true})
    id?: number;
}

@InputType()
export class CurrencyWhereInput {
    @Field(() => [CurrencyWhereInput], {nullable:true})
    AND?: Array<CurrencyWhereInput>;
    @Field(() => [CurrencyWhereInput], {nullable:true})
    OR?: Array<CurrencyWhereInput>;
    @Field(() => [CurrencyWhereInput], {nullable:true})
    NOT?: Array<CurrencyWhereInput>;
    @Field(() => IntFilter, {nullable:true})
    id?: InstanceType<typeof IntFilter>;
    @Field(() => StringFilter, {nullable:true})
    name?: InstanceType<typeof StringFilter>;
    @Field(() => EnumStatusFilter, {nullable:true})
    status?: InstanceType<typeof EnumStatusFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => TourListRelationFilter, {nullable:true})
    tour?: InstanceType<typeof TourListRelationFilter>;
}

@ObjectType()
export class Currency {
    @Field(() => ID, {nullable:false})
    id!: number;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => Status, {nullable:false,defaultValue:'ACTIVE'})
    status!: keyof typeof Status;
    @Field(() => Date, {nullable:false})
    createdAt!: Date;
    @Field(() => Date, {nullable:false})
    updatedAt!: Date;
    @Field(() => [Tour], {nullable:true})
    tour?: Array<Tour>;
    @Field(() => CurrencyCount, {nullable:false})
    _count?: InstanceType<typeof CurrencyCount>;
}

@ArgsType()
export class DeleteManyCurrencyArgs {
    @Field(() => CurrencyWhereInput, {nullable:true})
    @Type(() => CurrencyWhereInput)
    @ValidateNested({ each: true })
    where?: InstanceType<typeof CurrencyWhereInput>;
}

@ArgsType()
export class DeleteOneCurrencyArgs {
    @Field(() => CurrencyWhereUniqueInput, {nullable:false})
    @Type(() => CurrencyWhereUniqueInput)
    @ValidateNested({ each: true })
    where!: InstanceType<typeof CurrencyWhereUniqueInput>;
}

@ArgsType()
export class FindFirstCurrencyArgs {
    @Field(() => CurrencyWhereInput, {nullable:true})
    @Type(() => CurrencyWhereInput)
    @ValidateNested({ each: true })
    where?: InstanceType<typeof CurrencyWhereInput>;
    @Field(() => [CurrencyOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<CurrencyOrderByWithRelationInput>;
    @Field(() => CurrencyWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof CurrencyWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [CurrencyScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof CurrencyScalarFieldEnum>;
}

@ArgsType()
export class FindManyCurrencyArgs {
    @Field(() => CurrencyWhereInput, {nullable:true})
    @Type(() => CurrencyWhereInput)
    @ValidateNested({ each: true })
    where?: InstanceType<typeof CurrencyWhereInput>;
    @Field(() => [CurrencyOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<CurrencyOrderByWithRelationInput>;
    @Field(() => CurrencyWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof CurrencyWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [CurrencyScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof CurrencyScalarFieldEnum>;
}

@ArgsType()
export class FindUniqueCurrencyArgs {
    @Field(() => CurrencyWhereUniqueInput, {nullable:false})
    @Type(() => CurrencyWhereUniqueInput)
    @ValidateNested({ each: true })
    where!: InstanceType<typeof CurrencyWhereUniqueInput>;
}

@ArgsType()
export class UpdateManyCurrencyArgs {
    @Field(() => CurrencyUpdateManyMutationInput, {nullable:false})
    @Type(() => CurrencyUpdateManyMutationInput)
    @ValidateNested({ each: true })
    data!: InstanceType<typeof CurrencyUpdateManyMutationInput>;
    @Field(() => CurrencyWhereInput, {nullable:true})
    @Type(() => CurrencyWhereInput)
    @ValidateNested({ each: true })
    where?: InstanceType<typeof CurrencyWhereInput>;
}

@ArgsType()
export class UpdateOneCurrencyArgs {
    @Field(() => CurrencyUpdateInput, {nullable:false})
    @Type(() => CurrencyUpdateInput)
    @ValidateNested({ each: true })
    data!: InstanceType<typeof CurrencyUpdateInput>;
    @Field(() => CurrencyWhereUniqueInput, {nullable:false})
    @Type(() => CurrencyWhereUniqueInput)
    @ValidateNested({ each: true })
    where!: InstanceType<typeof CurrencyWhereUniqueInput>;
}

@ArgsType()
export class UpsertOneCurrencyArgs {
    @Field(() => CurrencyWhereUniqueInput, {nullable:false})
    @Type(() => CurrencyWhereUniqueInput)
    @ValidateNested({ each: true })
    where!: InstanceType<typeof CurrencyWhereUniqueInput>;
    @Field(() => CurrencyCreateInput, {nullable:false})
    @Type(() => CurrencyCreateInput)
    create!: InstanceType<typeof CurrencyCreateInput>;
    @Field(() => CurrencyUpdateInput, {nullable:false})
    @Type(() => CurrencyUpdateInput)
    update!: InstanceType<typeof CurrencyUpdateInput>;
}

@ObjectType()
export class AggregateLanguage {
    @Field(() => LanguageCountAggregate, {nullable:true})
    _count?: InstanceType<typeof LanguageCountAggregate>;
    @Field(() => LanguageAvgAggregate, {nullable:true})
    _avg?: InstanceType<typeof LanguageAvgAggregate>;
    @Field(() => LanguageSumAggregate, {nullable:true})
    _sum?: InstanceType<typeof LanguageSumAggregate>;
    @Field(() => LanguageMinAggregate, {nullable:true})
    _min?: InstanceType<typeof LanguageMinAggregate>;
    @Field(() => LanguageMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof LanguageMaxAggregate>;
}

@ArgsType()
export class CreateManyLanguageArgs {
    @Field(() => [LanguageCreateManyInput], {nullable:false})
    @Type(() => LanguageCreateManyInput)
    @ValidateNested({ each: true })
    data!: Array<LanguageCreateManyInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@ArgsType()
export class CreateOneLanguageArgs {
    @Field(() => LanguageCreateInput, {nullable:false})
    @Type(() => LanguageCreateInput)
    @ValidateNested({ each: true })
    data!: InstanceType<typeof LanguageCreateInput>;
}

@ArgsType()
export class DeleteManyLanguageArgs {
    @Field(() => LanguageWhereInput, {nullable:true})
    @Type(() => LanguageWhereInput)
    @ValidateNested({ each: true })
    where?: InstanceType<typeof LanguageWhereInput>;
}

@ArgsType()
export class DeleteOneLanguageArgs {
    @Field(() => LanguageWhereUniqueInput, {nullable:false})
    @Type(() => LanguageWhereUniqueInput)
    @ValidateNested({ each: true })
    where!: InstanceType<typeof LanguageWhereUniqueInput>;
}

@ArgsType()
export class FindFirstLanguageArgs {
    @Field(() => LanguageWhereInput, {nullable:true})
    @Type(() => LanguageWhereInput)
    @ValidateNested({ each: true })
    where?: InstanceType<typeof LanguageWhereInput>;
    @Field(() => [LanguageOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<LanguageOrderByWithRelationInput>;
    @Field(() => LanguageWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof LanguageWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [LanguageScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof LanguageScalarFieldEnum>;
}

@ArgsType()
export class FindManyLanguageArgs {
    @Field(() => LanguageWhereInput, {nullable:true})
    @Type(() => LanguageWhereInput)
    @ValidateNested({ each: true })
    where?: InstanceType<typeof LanguageWhereInput>;
    @Field(() => [LanguageOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<LanguageOrderByWithRelationInput>;
    @Field(() => LanguageWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof LanguageWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [LanguageScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof LanguageScalarFieldEnum>;
}

@ArgsType()
export class FindUniqueLanguageArgs {
    @Field(() => LanguageWhereUniqueInput, {nullable:false})
    @Type(() => LanguageWhereUniqueInput)
    @ValidateNested({ each: true })
    where!: InstanceType<typeof LanguageWhereUniqueInput>;
}

@ArgsType()
export class LanguageAggregateArgs {
    @Field(() => LanguageWhereInput, {nullable:true})
    @Type(() => LanguageWhereInput)
    @ValidateNested({ each: true })
    where?: InstanceType<typeof LanguageWhereInput>;
    @Field(() => [LanguageOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<LanguageOrderByWithRelationInput>;
    @Field(() => LanguageWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof LanguageWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => LanguageCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof LanguageCountAggregateInput>;
    @Field(() => LanguageAvgAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof LanguageAvgAggregateInput>;
    @Field(() => LanguageSumAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof LanguageSumAggregateInput>;
    @Field(() => LanguageMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof LanguageMinAggregateInput>;
    @Field(() => LanguageMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof LanguageMaxAggregateInput>;
}

@InputType()
export class LanguageAvgAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
}

@ObjectType()
export class LanguageAvgAggregate {
    @Field(() => Float, {nullable:true})
    id?: number;
}

@InputType()
export class LanguageAvgOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
}

@InputType()
export class LanguageCountAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    name?: true;
    @Field(() => Boolean, {nullable:true})
    status?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
    @Field(() => Boolean, {nullable:true})
    _all?: true;
}

@ObjectType()
export class LanguageCountAggregate {
    @Field(() => Int, {nullable:false})
    id!: number;
    @Field(() => Int, {nullable:false})
    name!: number;
    @Field(() => Int, {nullable:false})
    status!: number;
    @Field(() => Int, {nullable:false})
    createdAt!: number;
    @Field(() => Int, {nullable:false})
    updatedAt!: number;
    @Field(() => Int, {nullable:false})
    _all!: number;
}

@InputType()
export class LanguageCountOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
}

@ObjectType()
export class LanguageCount {
    @Field(() => Int, {nullable:false})
    tourLanguage?: number;
}

@InputType()
export class LanguageCreateManyInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    name!: string;
    @Field(() => Status, {nullable:true})
    @Validator.IsString()
    status?: keyof typeof Status;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class LanguageCreateNestedOneWithoutTourLanguageInput {
    @Field(() => LanguageCreateWithoutTourLanguageInput, {nullable:true})
    @Type(() => LanguageCreateWithoutTourLanguageInput)
    create?: InstanceType<typeof LanguageCreateWithoutTourLanguageInput>;
    @Field(() => LanguageCreateOrConnectWithoutTourLanguageInput, {nullable:true})
    @Type(() => LanguageCreateOrConnectWithoutTourLanguageInput)
    connectOrCreate?: InstanceType<typeof LanguageCreateOrConnectWithoutTourLanguageInput>;
    @Field(() => LanguageWhereUniqueInput, {nullable:true})
    @Type(() => LanguageWhereUniqueInput)
    connect?: InstanceType<typeof LanguageWhereUniqueInput>;
}

@InputType()
export class LanguageCreateOrConnectWithoutTourLanguageInput {
    @Field(() => LanguageWhereUniqueInput, {nullable:false})
    @Type(() => LanguageWhereUniqueInput)
    where!: InstanceType<typeof LanguageWhereUniqueInput>;
    @Field(() => LanguageCreateWithoutTourLanguageInput, {nullable:false})
    @Type(() => LanguageCreateWithoutTourLanguageInput)
    create!: InstanceType<typeof LanguageCreateWithoutTourLanguageInput>;
}

@InputType()
export class LanguageCreateWithoutTourLanguageInput {
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    name!: string;
    @Field(() => Status, {nullable:true})
    @Validator.IsString()
    status?: keyof typeof Status;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class LanguageCreateInput {
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    name!: string;
    @Field(() => Status, {nullable:true})
    @Validator.IsString()
    status?: keyof typeof Status;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => TourLanguageCreateNestedManyWithoutLanguageInput, {nullable:true})
    tourLanguage?: InstanceType<typeof TourLanguageCreateNestedManyWithoutLanguageInput>;
}

@ArgsType()
export class LanguageGroupByArgs {
    @Field(() => LanguageWhereInput, {nullable:true})
    @Type(() => LanguageWhereInput)
    @ValidateNested({ each: true })
    where?: InstanceType<typeof LanguageWhereInput>;
    @Field(() => [LanguageOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<LanguageOrderByWithAggregationInput>;
    @Field(() => [LanguageScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof LanguageScalarFieldEnum>;
    @Field(() => LanguageScalarWhereWithAggregatesInput, {nullable:true})
    having?: InstanceType<typeof LanguageScalarWhereWithAggregatesInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => LanguageCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof LanguageCountAggregateInput>;
    @Field(() => LanguageAvgAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof LanguageAvgAggregateInput>;
    @Field(() => LanguageSumAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof LanguageSumAggregateInput>;
    @Field(() => LanguageMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof LanguageMinAggregateInput>;
    @Field(() => LanguageMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof LanguageMaxAggregateInput>;
}

@ObjectType()
export class LanguageGroupBy {
    @Field(() => Int, {nullable:false})
    id!: number;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    name!: string;
    @Field(() => Status, {nullable:false})
    @Validator.IsString()
    status!: keyof typeof Status;
    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;
    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;
    @Field(() => LanguageCountAggregate, {nullable:true})
    _count?: InstanceType<typeof LanguageCountAggregate>;
    @Field(() => LanguageAvgAggregate, {nullable:true})
    _avg?: InstanceType<typeof LanguageAvgAggregate>;
    @Field(() => LanguageSumAggregate, {nullable:true})
    _sum?: InstanceType<typeof LanguageSumAggregate>;
    @Field(() => LanguageMinAggregate, {nullable:true})
    _min?: InstanceType<typeof LanguageMinAggregate>;
    @Field(() => LanguageMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof LanguageMaxAggregate>;
}

@InputType()
export class LanguageMaxAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    name?: true;
    @Field(() => Boolean, {nullable:true})
    status?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
}

@ObjectType()
export class LanguageMaxAggregate {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    name?: string;
    @Field(() => Status, {nullable:true})
    @Validator.IsString()
    status?: keyof typeof Status;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class LanguageMaxOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
}

@InputType()
export class LanguageMinAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    name?: true;
    @Field(() => Boolean, {nullable:true})
    status?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
}

@ObjectType()
export class LanguageMinAggregate {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    name?: string;
    @Field(() => Status, {nullable:true})
    @Validator.IsString()
    status?: keyof typeof Status;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class LanguageMinOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
}

@InputType()
export class LanguageOrderByWithAggregationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
    @Field(() => LanguageCountOrderByAggregateInput, {nullable:true})
    _count?: InstanceType<typeof LanguageCountOrderByAggregateInput>;
    @Field(() => LanguageAvgOrderByAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof LanguageAvgOrderByAggregateInput>;
    @Field(() => LanguageMaxOrderByAggregateInput, {nullable:true})
    _max?: InstanceType<typeof LanguageMaxOrderByAggregateInput>;
    @Field(() => LanguageMinOrderByAggregateInput, {nullable:true})
    _min?: InstanceType<typeof LanguageMinOrderByAggregateInput>;
    @Field(() => LanguageSumOrderByAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof LanguageSumOrderByAggregateInput>;
}

@InputType()
export class LanguageOrderByWithRelationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
    @Field(() => TourLanguageOrderByRelationAggregateInput, {nullable:true})
    tourLanguage?: InstanceType<typeof TourLanguageOrderByRelationAggregateInput>;
}

@InputType()
export class LanguageRelationFilter {
    @Field(() => LanguageWhereInput, {nullable:true})
    is?: InstanceType<typeof LanguageWhereInput>;
    @Field(() => LanguageWhereInput, {nullable:true})
    isNot?: InstanceType<typeof LanguageWhereInput>;
}

@InputType()
export class LanguageScalarWhereWithAggregatesInput {
    @Field(() => [LanguageScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<LanguageScalarWhereWithAggregatesInput>;
    @Field(() => [LanguageScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<LanguageScalarWhereWithAggregatesInput>;
    @Field(() => [LanguageScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<LanguageScalarWhereWithAggregatesInput>;
    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: InstanceType<typeof IntWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => EnumStatusWithAggregatesFilter, {nullable:true})
    status?: InstanceType<typeof EnumStatusWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
}

@InputType()
export class LanguageSumAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
}

@ObjectType()
export class LanguageSumAggregate {
    @Field(() => Int, {nullable:true})
    id?: number;
}

@InputType()
export class LanguageSumOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
}

@InputType()
export class LanguageUncheckedCreateWithoutTourLanguageInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    name!: string;
    @Field(() => Status, {nullable:true})
    @Validator.IsString()
    status?: keyof typeof Status;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class LanguageUncheckedCreateInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    name!: string;
    @Field(() => Status, {nullable:true})
    @Validator.IsString()
    status?: keyof typeof Status;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => TourLanguageUncheckedCreateNestedManyWithoutLanguageInput, {nullable:true})
    tourLanguage?: InstanceType<typeof TourLanguageUncheckedCreateNestedManyWithoutLanguageInput>;
}

@InputType()
export class LanguageUncheckedUpdateManyInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    name?: string;
    @Field(() => Status, {nullable:true})
    @Validator.IsString()
    status?: keyof typeof Status;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class LanguageUncheckedUpdateWithoutTourLanguageInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    name?: string;
    @Field(() => Status, {nullable:true})
    @Validator.IsString()
    status?: keyof typeof Status;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class LanguageUncheckedUpdateInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    name?: string;
    @Field(() => Status, {nullable:true})
    @Validator.IsString()
    status?: keyof typeof Status;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => TourLanguageUncheckedUpdateManyWithoutLanguageInput, {nullable:true})
    tourLanguage?: InstanceType<typeof TourLanguageUncheckedUpdateManyWithoutLanguageInput>;
}

@InputType()
export class LanguageUpdateManyMutationInput {
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    name?: string;
    @Field(() => Status, {nullable:true})
    @Validator.IsString()
    status?: keyof typeof Status;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class LanguageUpdateOneRequiredWithoutTourLanguageInput {
    @Field(() => LanguageCreateWithoutTourLanguageInput, {nullable:true})
    @Type(() => LanguageCreateWithoutTourLanguageInput)
    create?: InstanceType<typeof LanguageCreateWithoutTourLanguageInput>;
    @Field(() => LanguageCreateOrConnectWithoutTourLanguageInput, {nullable:true})
    @Type(() => LanguageCreateOrConnectWithoutTourLanguageInput)
    connectOrCreate?: InstanceType<typeof LanguageCreateOrConnectWithoutTourLanguageInput>;
    @Field(() => LanguageUpsertWithoutTourLanguageInput, {nullable:true})
    @Type(() => LanguageUpsertWithoutTourLanguageInput)
    upsert?: InstanceType<typeof LanguageUpsertWithoutTourLanguageInput>;
    @Field(() => LanguageWhereUniqueInput, {nullable:true})
    @Type(() => LanguageWhereUniqueInput)
    connect?: InstanceType<typeof LanguageWhereUniqueInput>;
    @Field(() => LanguageUpdateWithoutTourLanguageInput, {nullable:true})
    @Type(() => LanguageUpdateWithoutTourLanguageInput)
    update?: InstanceType<typeof LanguageUpdateWithoutTourLanguageInput>;
}

@InputType()
export class LanguageUpdateWithoutTourLanguageInput {
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    name?: string;
    @Field(() => Status, {nullable:true})
    @Validator.IsString()
    status?: keyof typeof Status;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class LanguageUpdateInput {
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    name?: string;
    @Field(() => Status, {nullable:true})
    @Validator.IsString()
    status?: keyof typeof Status;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => TourLanguageUpdateManyWithoutLanguageInput, {nullable:true})
    tourLanguage?: InstanceType<typeof TourLanguageUpdateManyWithoutLanguageInput>;
}

@InputType()
export class LanguageUpsertWithoutTourLanguageInput {
    @Field(() => LanguageUpdateWithoutTourLanguageInput, {nullable:false})
    @Type(() => LanguageUpdateWithoutTourLanguageInput)
    update!: InstanceType<typeof LanguageUpdateWithoutTourLanguageInput>;
    @Field(() => LanguageCreateWithoutTourLanguageInput, {nullable:false})
    @Type(() => LanguageCreateWithoutTourLanguageInput)
    create!: InstanceType<typeof LanguageCreateWithoutTourLanguageInput>;
}

@InputType()
export class LanguageWhereUniqueInput {
    @Field(() => Int, {nullable:true})
    id?: number;
}

@InputType()
export class LanguageWhereInput {
    @Field(() => [LanguageWhereInput], {nullable:true})
    AND?: Array<LanguageWhereInput>;
    @Field(() => [LanguageWhereInput], {nullable:true})
    OR?: Array<LanguageWhereInput>;
    @Field(() => [LanguageWhereInput], {nullable:true})
    NOT?: Array<LanguageWhereInput>;
    @Field(() => IntFilter, {nullable:true})
    id?: InstanceType<typeof IntFilter>;
    @Field(() => StringFilter, {nullable:true})
    name?: InstanceType<typeof StringFilter>;
    @Field(() => EnumStatusFilter, {nullable:true})
    status?: InstanceType<typeof EnumStatusFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => TourLanguageListRelationFilter, {nullable:true})
    tourLanguage?: InstanceType<typeof TourLanguageListRelationFilter>;
}

@ObjectType()
export class Language {
    @Field(() => ID, {nullable:false})
    id!: number;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => Status, {nullable:false,defaultValue:'ACTIVE'})
    status!: keyof typeof Status;
    @Field(() => Date, {nullable:false})
    createdAt!: Date;
    @Field(() => Date, {nullable:false})
    updatedAt!: Date;
    @Field(() => [TourLanguage], {nullable:true})
    tourLanguage?: Array<TourLanguage>;
    @Field(() => LanguageCount, {nullable:false})
    _count?: InstanceType<typeof LanguageCount>;
}

@ArgsType()
export class UpdateManyLanguageArgs {
    @Field(() => LanguageUpdateManyMutationInput, {nullable:false})
    @Type(() => LanguageUpdateManyMutationInput)
    @ValidateNested({ each: true })
    data!: InstanceType<typeof LanguageUpdateManyMutationInput>;
    @Field(() => LanguageWhereInput, {nullable:true})
    @Type(() => LanguageWhereInput)
    @ValidateNested({ each: true })
    where?: InstanceType<typeof LanguageWhereInput>;
}

@ArgsType()
export class UpdateOneLanguageArgs {
    @Field(() => LanguageUpdateInput, {nullable:false})
    @Type(() => LanguageUpdateInput)
    @ValidateNested({ each: true })
    data!: InstanceType<typeof LanguageUpdateInput>;
    @Field(() => LanguageWhereUniqueInput, {nullable:false})
    @Type(() => LanguageWhereUniqueInput)
    @ValidateNested({ each: true })
    where!: InstanceType<typeof LanguageWhereUniqueInput>;
}

@ArgsType()
export class UpsertOneLanguageArgs {
    @Field(() => LanguageWhereUniqueInput, {nullable:false})
    @Type(() => LanguageWhereUniqueInput)
    @ValidateNested({ each: true })
    where!: InstanceType<typeof LanguageWhereUniqueInput>;
    @Field(() => LanguageCreateInput, {nullable:false})
    @Type(() => LanguageCreateInput)
    create!: InstanceType<typeof LanguageCreateInput>;
    @Field(() => LanguageUpdateInput, {nullable:false})
    @Type(() => LanguageUpdateInput)
    update!: InstanceType<typeof LanguageUpdateInput>;
}

@ObjectType()
export class AffectedRows {
    @Field(() => Int, {nullable:false})
    count!: number;
}

@InputType()
export class DateTimeFilter {
    @Field(() => Date, {nullable:true})
    equals?: Date | string;
    @Field(() => [Date], {nullable:true})
    in?: Array<Date> | Array<string>;
    @Field(() => [Date], {nullable:true})
    notIn?: Array<Date> | Array<string>;
    @Field(() => Date, {nullable:true})
    lt?: Date | string;
    @Field(() => Date, {nullable:true})
    lte?: Date | string;
    @Field(() => Date, {nullable:true})
    gt?: Date | string;
    @Field(() => Date, {nullable:true})
    gte?: Date | string;
    @Field(() => DateTimeFilter, {nullable:true})
    not?: InstanceType<typeof DateTimeFilter>;
}

@InputType()
export class DateTimeWithAggregatesFilter {
    @Field(() => Date, {nullable:true})
    equals?: Date | string;
    @Field(() => [Date], {nullable:true})
    in?: Array<Date> | Array<string>;
    @Field(() => [Date], {nullable:true})
    notIn?: Array<Date> | Array<string>;
    @Field(() => Date, {nullable:true})
    lt?: Date | string;
    @Field(() => Date, {nullable:true})
    lte?: Date | string;
    @Field(() => Date, {nullable:true})
    gt?: Date | string;
    @Field(() => Date, {nullable:true})
    gte?: Date | string;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    @Field(() => IntFilter, {nullable:true})
    _count?: InstanceType<typeof IntFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    _min?: InstanceType<typeof DateTimeFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    _max?: InstanceType<typeof DateTimeFilter>;
}

@InputType()
export class EnumStatusFilter {
    @Field(() => Status, {nullable:true})
    equals?: keyof typeof Status;
    @Field(() => [Status], {nullable:true})
    in?: Array<keyof typeof Status>;
    @Field(() => [Status], {nullable:true})
    notIn?: Array<keyof typeof Status>;
    @Field(() => EnumStatusFilter, {nullable:true})
    not?: InstanceType<typeof EnumStatusFilter>;
}

@InputType()
export class EnumStatusWithAggregatesFilter {
    @Field(() => Status, {nullable:true})
    equals?: keyof typeof Status;
    @Field(() => [Status], {nullable:true})
    in?: Array<keyof typeof Status>;
    @Field(() => [Status], {nullable:true})
    notIn?: Array<keyof typeof Status>;
    @Field(() => EnumStatusWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof EnumStatusWithAggregatesFilter>;
    @Field(() => IntFilter, {nullable:true})
    _count?: InstanceType<typeof IntFilter>;
    @Field(() => EnumStatusFilter, {nullable:true})
    _min?: InstanceType<typeof EnumStatusFilter>;
    @Field(() => EnumStatusFilter, {nullable:true})
    _max?: InstanceType<typeof EnumStatusFilter>;
}

@InputType()
export class EnumUserRoleFilter {
    @Field(() => UserRole, {nullable:true})
    equals?: keyof typeof UserRole;
    @Field(() => [UserRole], {nullable:true})
    in?: Array<keyof typeof UserRole>;
    @Field(() => [UserRole], {nullable:true})
    notIn?: Array<keyof typeof UserRole>;
    @Field(() => EnumUserRoleFilter, {nullable:true})
    not?: InstanceType<typeof EnumUserRoleFilter>;
}

@InputType()
export class EnumUserRoleWithAggregatesFilter {
    @Field(() => UserRole, {nullable:true})
    equals?: keyof typeof UserRole;
    @Field(() => [UserRole], {nullable:true})
    in?: Array<keyof typeof UserRole>;
    @Field(() => [UserRole], {nullable:true})
    notIn?: Array<keyof typeof UserRole>;
    @Field(() => EnumUserRoleWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof EnumUserRoleWithAggregatesFilter>;
    @Field(() => IntFilter, {nullable:true})
    _count?: InstanceType<typeof IntFilter>;
    @Field(() => EnumUserRoleFilter, {nullable:true})
    _min?: InstanceType<typeof EnumUserRoleFilter>;
    @Field(() => EnumUserRoleFilter, {nullable:true})
    _max?: InstanceType<typeof EnumUserRoleFilter>;
}

@InputType()
export class EnumYesNoFilter {
    @Field(() => YesNo, {nullable:true})
    equals?: keyof typeof YesNo;
    @Field(() => [YesNo], {nullable:true})
    in?: Array<keyof typeof YesNo>;
    @Field(() => [YesNo], {nullable:true})
    notIn?: Array<keyof typeof YesNo>;
    @Field(() => EnumYesNoFilter, {nullable:true})
    not?: InstanceType<typeof EnumYesNoFilter>;
}

@InputType()
export class EnumYesNoWithAggregatesFilter {
    @Field(() => YesNo, {nullable:true})
    equals?: keyof typeof YesNo;
    @Field(() => [YesNo], {nullable:true})
    in?: Array<keyof typeof YesNo>;
    @Field(() => [YesNo], {nullable:true})
    notIn?: Array<keyof typeof YesNo>;
    @Field(() => EnumYesNoWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof EnumYesNoWithAggregatesFilter>;
    @Field(() => IntFilter, {nullable:true})
    _count?: InstanceType<typeof IntFilter>;
    @Field(() => EnumYesNoFilter, {nullable:true})
    _min?: InstanceType<typeof EnumYesNoFilter>;
    @Field(() => EnumYesNoFilter, {nullable:true})
    _max?: InstanceType<typeof EnumYesNoFilter>;
}

@InputType()
export class FloatFilter {
    @Field(() => Float, {nullable:true})
    equals?: number;
    @Field(() => [Float], {nullable:true})
    in?: Array<number>;
    @Field(() => [Float], {nullable:true})
    notIn?: Array<number>;
    @Field(() => Float, {nullable:true})
    lt?: number;
    @Field(() => Float, {nullable:true})
    lte?: number;
    @Field(() => Float, {nullable:true})
    gt?: number;
    @Field(() => Float, {nullable:true})
    gte?: number;
    @Field(() => FloatFilter, {nullable:true})
    not?: InstanceType<typeof FloatFilter>;
}

@InputType()
export class FloatWithAggregatesFilter {
    @Field(() => Float, {nullable:true})
    equals?: number;
    @Field(() => [Float], {nullable:true})
    in?: Array<number>;
    @Field(() => [Float], {nullable:true})
    notIn?: Array<number>;
    @Field(() => Float, {nullable:true})
    lt?: number;
    @Field(() => Float, {nullable:true})
    lte?: number;
    @Field(() => Float, {nullable:true})
    gt?: number;
    @Field(() => Float, {nullable:true})
    gte?: number;
    @Field(() => FloatWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof FloatWithAggregatesFilter>;
    @Field(() => IntFilter, {nullable:true})
    _count?: InstanceType<typeof IntFilter>;
    @Field(() => FloatFilter, {nullable:true})
    _avg?: InstanceType<typeof FloatFilter>;
    @Field(() => FloatFilter, {nullable:true})
    _sum?: InstanceType<typeof FloatFilter>;
    @Field(() => FloatFilter, {nullable:true})
    _min?: InstanceType<typeof FloatFilter>;
    @Field(() => FloatFilter, {nullable:true})
    _max?: InstanceType<typeof FloatFilter>;
}

@InputType()
export class IntFilter {
    @Field(() => Int, {nullable:true})
    equals?: number;
    @Field(() => [Int], {nullable:true})
    in?: Array<number>;
    @Field(() => [Int], {nullable:true})
    notIn?: Array<number>;
    @Field(() => Int, {nullable:true})
    lt?: number;
    @Field(() => Int, {nullable:true})
    lte?: number;
    @Field(() => Int, {nullable:true})
    gt?: number;
    @Field(() => Int, {nullable:true})
    gte?: number;
    @Field(() => IntFilter, {nullable:true})
    not?: InstanceType<typeof IntFilter>;
}

@InputType()
export class IntWithAggregatesFilter {
    @Field(() => Int, {nullable:true})
    equals?: number;
    @Field(() => [Int], {nullable:true})
    in?: Array<number>;
    @Field(() => [Int], {nullable:true})
    notIn?: Array<number>;
    @Field(() => Int, {nullable:true})
    lt?: number;
    @Field(() => Int, {nullable:true})
    lte?: number;
    @Field(() => Int, {nullable:true})
    gt?: number;
    @Field(() => Int, {nullable:true})
    gte?: number;
    @Field(() => IntWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof IntWithAggregatesFilter>;
    @Field(() => IntFilter, {nullable:true})
    _count?: InstanceType<typeof IntFilter>;
    @Field(() => FloatFilter, {nullable:true})
    _avg?: InstanceType<typeof FloatFilter>;
    @Field(() => IntFilter, {nullable:true})
    _sum?: InstanceType<typeof IntFilter>;
    @Field(() => IntFilter, {nullable:true})
    _min?: InstanceType<typeof IntFilter>;
    @Field(() => IntFilter, {nullable:true})
    _max?: InstanceType<typeof IntFilter>;
}

@InputType()
export class StringFilter {
    @Field(() => String, {nullable:true})
    equals?: string;
    @Field(() => [String], {nullable:true})
    in?: Array<string>;
    @Field(() => [String], {nullable:true})
    notIn?: Array<string>;
    @Field(() => String, {nullable:true})
    lt?: string;
    @Field(() => String, {nullable:true})
    lte?: string;
    @Field(() => String, {nullable:true})
    gt?: string;
    @Field(() => String, {nullable:true})
    gte?: string;
    @Field(() => String, {nullable:true})
    contains?: string;
    @Field(() => String, {nullable:true})
    startsWith?: string;
    @Field(() => String, {nullable:true})
    endsWith?: string;
    @Field(() => StringFilter, {nullable:true})
    not?: InstanceType<typeof StringFilter>;
}

@InputType()
export class StringWithAggregatesFilter {
    @Field(() => String, {nullable:true})
    equals?: string;
    @Field(() => [String], {nullable:true})
    in?: Array<string>;
    @Field(() => [String], {nullable:true})
    notIn?: Array<string>;
    @Field(() => String, {nullable:true})
    lt?: string;
    @Field(() => String, {nullable:true})
    lte?: string;
    @Field(() => String, {nullable:true})
    gt?: string;
    @Field(() => String, {nullable:true})
    gte?: string;
    @Field(() => String, {nullable:true})
    contains?: string;
    @Field(() => String, {nullable:true})
    startsWith?: string;
    @Field(() => String, {nullable:true})
    endsWith?: string;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => IntFilter, {nullable:true})
    _count?: InstanceType<typeof IntFilter>;
    @Field(() => StringFilter, {nullable:true})
    _min?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    _max?: InstanceType<typeof StringFilter>;
}

@ObjectType()
export class AggregateTour {
    @Field(() => TourCountAggregate, {nullable:true})
    _count?: InstanceType<typeof TourCountAggregate>;
    @Field(() => TourAvgAggregate, {nullable:true})
    _avg?: InstanceType<typeof TourAvgAggregate>;
    @Field(() => TourSumAggregate, {nullable:true})
    _sum?: InstanceType<typeof TourSumAggregate>;
    @Field(() => TourMinAggregate, {nullable:true})
    _min?: InstanceType<typeof TourMinAggregate>;
    @Field(() => TourMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof TourMaxAggregate>;
}

@ArgsType()
export class CreateManyTourArgs {
    @Field(() => [TourCreateManyInput], {nullable:false})
    @Type(() => TourCreateManyInput)
    @ValidateNested({ each: true })
    data!: Array<TourCreateManyInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@ArgsType()
export class CreateOneTourArgs {
    @Field(() => TourCreateInput, {nullable:false})
    @Type(() => TourCreateInput)
    @ValidateNested({ each: true })
    data!: InstanceType<typeof TourCreateInput>;
}

@ArgsType()
export class DeleteManyTourArgs {
    @Field(() => TourWhereInput, {nullable:true})
    @Type(() => TourWhereInput)
    @ValidateNested({ each: true })
    where?: InstanceType<typeof TourWhereInput>;
}

@ArgsType()
export class DeleteOneTourArgs {
    @Field(() => TourWhereUniqueInput, {nullable:false})
    @Type(() => TourWhereUniqueInput)
    @ValidateNested({ each: true })
    where!: InstanceType<typeof TourWhereUniqueInput>;
}

@ArgsType()
export class FindFirstTourArgs {
    @Field(() => TourWhereInput, {nullable:true})
    @Type(() => TourWhereInput)
    @ValidateNested({ each: true })
    where?: InstanceType<typeof TourWhereInput>;
    @Field(() => [TourOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<TourOrderByWithRelationInput>;
    @Field(() => TourWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof TourWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [TourScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof TourScalarFieldEnum>;
}

@ArgsType()
export class FindManyTourArgs {
    @Field(() => TourWhereInput, {nullable:true})
    @Type(() => TourWhereInput)
    @ValidateNested({ each: true })
    where?: InstanceType<typeof TourWhereInput>;
    @Field(() => [TourOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<TourOrderByWithRelationInput>;
    @Field(() => TourWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof TourWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [TourScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof TourScalarFieldEnum>;
}

@ArgsType()
export class FindUniqueTourArgs {
    @Field(() => TourWhereUniqueInput, {nullable:false})
    @Type(() => TourWhereUniqueInput)
    @ValidateNested({ each: true })
    where!: InstanceType<typeof TourWhereUniqueInput>;
}

@ArgsType()
export class TourAggregateArgs {
    @Field(() => TourWhereInput, {nullable:true})
    @Type(() => TourWhereInput)
    @ValidateNested({ each: true })
    where?: InstanceType<typeof TourWhereInput>;
    @Field(() => [TourOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<TourOrderByWithRelationInput>;
    @Field(() => TourWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof TourWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => TourCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof TourCountAggregateInput>;
    @Field(() => TourAvgAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof TourAvgAggregateInput>;
    @Field(() => TourSumAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof TourSumAggregateInput>;
    @Field(() => TourMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof TourMinAggregateInput>;
    @Field(() => TourMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof TourMaxAggregateInput>;
}

@InputType()
export class TourAvgAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    guideId?: true;
    @Field(() => Boolean, {nullable:true})
    currencyId?: true;
    @Field(() => Boolean, {nullable:true})
    maxCapacity?: true;
    @Field(() => Boolean, {nullable:true})
    price?: true;
}

@ObjectType()
export class TourAvgAggregate {
    @Field(() => Float, {nullable:true})
    id?: number;
    @Field(() => Float, {nullable:true})
    guideId?: number;
    @Field(() => Float, {nullable:true})
    currencyId?: number;
    @Field(() => Float, {nullable:true})
    maxCapacity?: number;
    @Field(() => Float, {nullable:true})
    price?: number;
}

@InputType()
export class TourAvgOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    guideId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    currencyId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    maxCapacity?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    price?: keyof typeof SortOrder;
}

@ObjectType()
export class TourCategoryCount {
    @Field(() => Int, {nullable:false})
    tourTourCategory?: number;
}

@InputType()
export class TourCountAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    name?: true;
    @Field(() => Boolean, {nullable:true})
    status?: true;
    @Field(() => Boolean, {nullable:true})
    guideId?: true;
    @Field(() => Boolean, {nullable:true})
    currencyId?: true;
    @Field(() => Boolean, {nullable:true})
    maxCapacity?: true;
    @Field(() => Boolean, {nullable:true})
    price?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
    @Field(() => Boolean, {nullable:true})
    _all?: true;
}

@ObjectType()
export class TourCountAggregate {
    @Field(() => Int, {nullable:false})
    id!: number;
    @Field(() => Int, {nullable:false})
    name!: number;
    @Field(() => Int, {nullable:false})
    status!: number;
    @Field(() => Int, {nullable:false})
    guideId!: number;
    @Field(() => Int, {nullable:false})
    currencyId!: number;
    @Field(() => Int, {nullable:false})
    maxCapacity!: number;
    @Field(() => Int, {nullable:false})
    price!: number;
    @Field(() => Int, {nullable:false})
    createdAt!: number;
    @Field(() => Int, {nullable:false})
    updatedAt!: number;
    @Field(() => Int, {nullable:false})
    _all!: number;
}

@InputType()
export class TourCountOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    guideId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    currencyId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    maxCapacity?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    price?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
}

@ObjectType()
export class TourCount {
    @Field(() => Int, {nullable:false})
    tourTourCategory?: number;
    @Field(() => Int, {nullable:false})
    tourCity?: number;
    @Field(() => Int, {nullable:false})
    tourLanguage?: number;
}

@InputType()
export class TourCreateManyCurrencyInputEnvelope {
    @Field(() => [TourCreateManyCurrencyInput], {nullable:false})
    @Type(() => TourCreateManyCurrencyInput)
    data!: Array<TourCreateManyCurrencyInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@InputType()
export class TourCreateManyCurrencyInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    name!: string;
    @Field(() => Status, {nullable:true})
    @Validator.IsString()
    status?: keyof typeof Status;
    @Field(() => Int, {nullable:false})
    guideId!: number;
    @Field(() => Int, {nullable:false})
    maxCapacity!: number;
    @Field(() => Float, {nullable:false})
    price!: number;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class TourCreateManyGuideInputEnvelope {
    @Field(() => [TourCreateManyGuideInput], {nullable:false})
    @Type(() => TourCreateManyGuideInput)
    data!: Array<TourCreateManyGuideInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@InputType()
export class TourCreateManyGuideInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    name!: string;
    @Field(() => Status, {nullable:true})
    @Validator.IsString()
    status?: keyof typeof Status;
    @Field(() => Int, {nullable:false})
    currencyId!: number;
    @Field(() => Int, {nullable:false})
    maxCapacity!: number;
    @Field(() => Float, {nullable:false})
    price!: number;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class TourCreateManyInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    name!: string;
    @Field(() => Status, {nullable:true})
    @Validator.IsString()
    status?: keyof typeof Status;
    @Field(() => Int, {nullable:false})
    guideId!: number;
    @Field(() => Int, {nullable:false})
    currencyId!: number;
    @Field(() => Int, {nullable:false})
    maxCapacity!: number;
    @Field(() => Float, {nullable:false})
    price!: number;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class TourCreateNestedManyWithoutCurrencyInput {
    @Field(() => [TourCreateWithoutCurrencyInput], {nullable:true})
    @Type(() => TourCreateWithoutCurrencyInput)
    create?: Array<TourCreateWithoutCurrencyInput>;
    @Field(() => [TourCreateOrConnectWithoutCurrencyInput], {nullable:true})
    @Type(() => TourCreateOrConnectWithoutCurrencyInput)
    connectOrCreate?: Array<TourCreateOrConnectWithoutCurrencyInput>;
    @Field(() => TourCreateManyCurrencyInputEnvelope, {nullable:true})
    @Type(() => TourCreateManyCurrencyInputEnvelope)
    createMany?: InstanceType<typeof TourCreateManyCurrencyInputEnvelope>;
    @Field(() => [TourWhereUniqueInput], {nullable:true})
    @Type(() => TourWhereUniqueInput)
    connect?: Array<TourWhereUniqueInput>;
}

@InputType()
export class TourCreateNestedManyWithoutGuideInput {
    @Field(() => [TourCreateWithoutGuideInput], {nullable:true})
    @Type(() => TourCreateWithoutGuideInput)
    create?: Array<TourCreateWithoutGuideInput>;
    @Field(() => [TourCreateOrConnectWithoutGuideInput], {nullable:true})
    @Type(() => TourCreateOrConnectWithoutGuideInput)
    connectOrCreate?: Array<TourCreateOrConnectWithoutGuideInput>;
    @Field(() => TourCreateManyGuideInputEnvelope, {nullable:true})
    @Type(() => TourCreateManyGuideInputEnvelope)
    createMany?: InstanceType<typeof TourCreateManyGuideInputEnvelope>;
    @Field(() => [TourWhereUniqueInput], {nullable:true})
    @Type(() => TourWhereUniqueInput)
    connect?: Array<TourWhereUniqueInput>;
}

@InputType()
export class TourCreateNestedOneWithoutTourCityInput {
    @Field(() => TourCreateWithoutTourCityInput, {nullable:true})
    @Type(() => TourCreateWithoutTourCityInput)
    create?: InstanceType<typeof TourCreateWithoutTourCityInput>;
    @Field(() => TourCreateOrConnectWithoutTourCityInput, {nullable:true})
    @Type(() => TourCreateOrConnectWithoutTourCityInput)
    connectOrCreate?: InstanceType<typeof TourCreateOrConnectWithoutTourCityInput>;
    @Field(() => TourWhereUniqueInput, {nullable:true})
    @Type(() => TourWhereUniqueInput)
    connect?: InstanceType<typeof TourWhereUniqueInput>;
}

@InputType()
export class TourCreateNestedOneWithoutTourLanguageInput {
    @Field(() => TourCreateWithoutTourLanguageInput, {nullable:true})
    @Type(() => TourCreateWithoutTourLanguageInput)
    create?: InstanceType<typeof TourCreateWithoutTourLanguageInput>;
    @Field(() => TourCreateOrConnectWithoutTourLanguageInput, {nullable:true})
    @Type(() => TourCreateOrConnectWithoutTourLanguageInput)
    connectOrCreate?: InstanceType<typeof TourCreateOrConnectWithoutTourLanguageInput>;
    @Field(() => TourWhereUniqueInput, {nullable:true})
    @Type(() => TourWhereUniqueInput)
    connect?: InstanceType<typeof TourWhereUniqueInput>;
}

@InputType()
export class TourCreateNestedOneWithoutTourTourCategoryInput {
    @Field(() => TourCreateWithoutTourTourCategoryInput, {nullable:true})
    @Type(() => TourCreateWithoutTourTourCategoryInput)
    create?: InstanceType<typeof TourCreateWithoutTourTourCategoryInput>;
    @Field(() => TourCreateOrConnectWithoutTourTourCategoryInput, {nullable:true})
    @Type(() => TourCreateOrConnectWithoutTourTourCategoryInput)
    connectOrCreate?: InstanceType<typeof TourCreateOrConnectWithoutTourTourCategoryInput>;
    @Field(() => TourWhereUniqueInput, {nullable:true})
    @Type(() => TourWhereUniqueInput)
    connect?: InstanceType<typeof TourWhereUniqueInput>;
}

@InputType()
export class TourCreateOrConnectWithoutCurrencyInput {
    @Field(() => TourWhereUniqueInput, {nullable:false})
    @Type(() => TourWhereUniqueInput)
    where!: InstanceType<typeof TourWhereUniqueInput>;
    @Field(() => TourCreateWithoutCurrencyInput, {nullable:false})
    @Type(() => TourCreateWithoutCurrencyInput)
    create!: InstanceType<typeof TourCreateWithoutCurrencyInput>;
}

@InputType()
export class TourCreateOrConnectWithoutGuideInput {
    @Field(() => TourWhereUniqueInput, {nullable:false})
    @Type(() => TourWhereUniqueInput)
    where!: InstanceType<typeof TourWhereUniqueInput>;
    @Field(() => TourCreateWithoutGuideInput, {nullable:false})
    @Type(() => TourCreateWithoutGuideInput)
    create!: InstanceType<typeof TourCreateWithoutGuideInput>;
}

@InputType()
export class TourCreateOrConnectWithoutTourCityInput {
    @Field(() => TourWhereUniqueInput, {nullable:false})
    @Type(() => TourWhereUniqueInput)
    where!: InstanceType<typeof TourWhereUniqueInput>;
    @Field(() => TourCreateWithoutTourCityInput, {nullable:false})
    @Type(() => TourCreateWithoutTourCityInput)
    create!: InstanceType<typeof TourCreateWithoutTourCityInput>;
}

@InputType()
export class TourCreateOrConnectWithoutTourLanguageInput {
    @Field(() => TourWhereUniqueInput, {nullable:false})
    @Type(() => TourWhereUniqueInput)
    where!: InstanceType<typeof TourWhereUniqueInput>;
    @Field(() => TourCreateWithoutTourLanguageInput, {nullable:false})
    @Type(() => TourCreateWithoutTourLanguageInput)
    create!: InstanceType<typeof TourCreateWithoutTourLanguageInput>;
}

@InputType()
export class TourCreateOrConnectWithoutTourTourCategoryInput {
    @Field(() => TourWhereUniqueInput, {nullable:false})
    @Type(() => TourWhereUniqueInput)
    where!: InstanceType<typeof TourWhereUniqueInput>;
    @Field(() => TourCreateWithoutTourTourCategoryInput, {nullable:false})
    @Type(() => TourCreateWithoutTourTourCategoryInput)
    create!: InstanceType<typeof TourCreateWithoutTourTourCategoryInput>;
}

@InputType()
export class TourCreateWithoutCurrencyInput {
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    name!: string;
    @Field(() => Status, {nullable:true})
    @Validator.IsString()
    status?: keyof typeof Status;
    @Field(() => UserCreateNestedOneWithoutTourInput, {nullable:false})
    guide!: InstanceType<typeof UserCreateNestedOneWithoutTourInput>;
    @Field(() => Int, {nullable:false})
    maxCapacity!: number;
    @Field(() => Float, {nullable:false})
    price!: number;
    @Field(() => TourTourCategoryCreateNestedManyWithoutTourInput, {nullable:true})
    tourTourCategory?: InstanceType<typeof TourTourCategoryCreateNestedManyWithoutTourInput>;
    @Field(() => TourCityCreateNestedManyWithoutTourInput, {nullable:true})
    tourCity?: InstanceType<typeof TourCityCreateNestedManyWithoutTourInput>;
    @Field(() => TourLanguageCreateNestedManyWithoutTourInput, {nullable:true})
    tourLanguage?: InstanceType<typeof TourLanguageCreateNestedManyWithoutTourInput>;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class TourCreateWithoutGuideInput {
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    name!: string;
    @Field(() => Status, {nullable:true})
    @Validator.IsString()
    status?: keyof typeof Status;
    @Field(() => CurrencyCreateNestedOneWithoutTourInput, {nullable:false})
    currency!: InstanceType<typeof CurrencyCreateNestedOneWithoutTourInput>;
    @Field(() => Int, {nullable:false})
    maxCapacity!: number;
    @Field(() => Float, {nullable:false})
    price!: number;
    @Field(() => TourTourCategoryCreateNestedManyWithoutTourInput, {nullable:true})
    tourTourCategory?: InstanceType<typeof TourTourCategoryCreateNestedManyWithoutTourInput>;
    @Field(() => TourCityCreateNestedManyWithoutTourInput, {nullable:true})
    tourCity?: InstanceType<typeof TourCityCreateNestedManyWithoutTourInput>;
    @Field(() => TourLanguageCreateNestedManyWithoutTourInput, {nullable:true})
    tourLanguage?: InstanceType<typeof TourLanguageCreateNestedManyWithoutTourInput>;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class TourCreateWithoutTourCityInput {
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    name!: string;
    @Field(() => Status, {nullable:true})
    @Validator.IsString()
    status?: keyof typeof Status;
    @Field(() => UserCreateNestedOneWithoutTourInput, {nullable:false})
    guide!: InstanceType<typeof UserCreateNestedOneWithoutTourInput>;
    @Field(() => CurrencyCreateNestedOneWithoutTourInput, {nullable:false})
    currency!: InstanceType<typeof CurrencyCreateNestedOneWithoutTourInput>;
    @Field(() => Int, {nullable:false})
    maxCapacity!: number;
    @Field(() => Float, {nullable:false})
    price!: number;
    @Field(() => TourTourCategoryCreateNestedManyWithoutTourInput, {nullable:true})
    tourTourCategory?: InstanceType<typeof TourTourCategoryCreateNestedManyWithoutTourInput>;
    @Field(() => TourLanguageCreateNestedManyWithoutTourInput, {nullable:true})
    tourLanguage?: InstanceType<typeof TourLanguageCreateNestedManyWithoutTourInput>;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class TourCreateWithoutTourLanguageInput {
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    name!: string;
    @Field(() => Status, {nullable:true})
    @Validator.IsString()
    status?: keyof typeof Status;
    @Field(() => UserCreateNestedOneWithoutTourInput, {nullable:false})
    guide!: InstanceType<typeof UserCreateNestedOneWithoutTourInput>;
    @Field(() => CurrencyCreateNestedOneWithoutTourInput, {nullable:false})
    currency!: InstanceType<typeof CurrencyCreateNestedOneWithoutTourInput>;
    @Field(() => Int, {nullable:false})
    maxCapacity!: number;
    @Field(() => Float, {nullable:false})
    price!: number;
    @Field(() => TourTourCategoryCreateNestedManyWithoutTourInput, {nullable:true})
    tourTourCategory?: InstanceType<typeof TourTourCategoryCreateNestedManyWithoutTourInput>;
    @Field(() => TourCityCreateNestedManyWithoutTourInput, {nullable:true})
    tourCity?: InstanceType<typeof TourCityCreateNestedManyWithoutTourInput>;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class TourCreateWithoutTourTourCategoryInput {
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    name!: string;
    @Field(() => Status, {nullable:true})
    @Validator.IsString()
    status?: keyof typeof Status;
    @Field(() => UserCreateNestedOneWithoutTourInput, {nullable:false})
    guide!: InstanceType<typeof UserCreateNestedOneWithoutTourInput>;
    @Field(() => CurrencyCreateNestedOneWithoutTourInput, {nullable:false})
    currency!: InstanceType<typeof CurrencyCreateNestedOneWithoutTourInput>;
    @Field(() => Int, {nullable:false})
    maxCapacity!: number;
    @Field(() => Float, {nullable:false})
    price!: number;
    @Field(() => TourCityCreateNestedManyWithoutTourInput, {nullable:true})
    tourCity?: InstanceType<typeof TourCityCreateNestedManyWithoutTourInput>;
    @Field(() => TourLanguageCreateNestedManyWithoutTourInput, {nullable:true})
    tourLanguage?: InstanceType<typeof TourLanguageCreateNestedManyWithoutTourInput>;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class TourCreateInput {
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    name!: string;
    @Field(() => Status, {nullable:true})
    @Validator.IsString()
    status?: keyof typeof Status;
    @Field(() => UserCreateNestedOneWithoutTourInput, {nullable:false})
    guide!: InstanceType<typeof UserCreateNestedOneWithoutTourInput>;
    @Field(() => CurrencyCreateNestedOneWithoutTourInput, {nullable:false})
    currency!: InstanceType<typeof CurrencyCreateNestedOneWithoutTourInput>;
    @Field(() => Int, {nullable:false})
    maxCapacity!: number;
    @Field(() => Float, {nullable:false})
    price!: number;
    @Field(() => TourTourCategoryCreateNestedManyWithoutTourInput, {nullable:true})
    tourTourCategory?: InstanceType<typeof TourTourCategoryCreateNestedManyWithoutTourInput>;
    @Field(() => TourCityCreateNestedManyWithoutTourInput, {nullable:true})
    tourCity?: InstanceType<typeof TourCityCreateNestedManyWithoutTourInput>;
    @Field(() => TourLanguageCreateNestedManyWithoutTourInput, {nullable:true})
    tourLanguage?: InstanceType<typeof TourLanguageCreateNestedManyWithoutTourInput>;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@ArgsType()
export class TourGroupByArgs {
    @Field(() => TourWhereInput, {nullable:true})
    @Type(() => TourWhereInput)
    @ValidateNested({ each: true })
    where?: InstanceType<typeof TourWhereInput>;
    @Field(() => [TourOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<TourOrderByWithAggregationInput>;
    @Field(() => [TourScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof TourScalarFieldEnum>;
    @Field(() => TourScalarWhereWithAggregatesInput, {nullable:true})
    having?: InstanceType<typeof TourScalarWhereWithAggregatesInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => TourCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof TourCountAggregateInput>;
    @Field(() => TourAvgAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof TourAvgAggregateInput>;
    @Field(() => TourSumAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof TourSumAggregateInput>;
    @Field(() => TourMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof TourMinAggregateInput>;
    @Field(() => TourMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof TourMaxAggregateInput>;
}

@ObjectType()
export class TourGroupBy {
    @Field(() => Int, {nullable:false})
    id!: number;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    name!: string;
    @Field(() => Status, {nullable:false})
    @Validator.IsString()
    status!: keyof typeof Status;
    @Field(() => Int, {nullable:false})
    guideId!: number;
    @Field(() => Int, {nullable:false})
    currencyId!: number;
    @Field(() => Int, {nullable:false})
    maxCapacity!: number;
    @Field(() => Float, {nullable:false})
    price!: number;
    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;
    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;
    @Field(() => TourCountAggregate, {nullable:true})
    _count?: InstanceType<typeof TourCountAggregate>;
    @Field(() => TourAvgAggregate, {nullable:true})
    _avg?: InstanceType<typeof TourAvgAggregate>;
    @Field(() => TourSumAggregate, {nullable:true})
    _sum?: InstanceType<typeof TourSumAggregate>;
    @Field(() => TourMinAggregate, {nullable:true})
    _min?: InstanceType<typeof TourMinAggregate>;
    @Field(() => TourMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof TourMaxAggregate>;
}

@InputType()
export class TourListRelationFilter {
    @Field(() => TourWhereInput, {nullable:true})
    every?: InstanceType<typeof TourWhereInput>;
    @Field(() => TourWhereInput, {nullable:true})
    some?: InstanceType<typeof TourWhereInput>;
    @Field(() => TourWhereInput, {nullable:true})
    none?: InstanceType<typeof TourWhereInput>;
}

@InputType()
export class TourMaxAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    name?: true;
    @Field(() => Boolean, {nullable:true})
    status?: true;
    @Field(() => Boolean, {nullable:true})
    guideId?: true;
    @Field(() => Boolean, {nullable:true})
    currencyId?: true;
    @Field(() => Boolean, {nullable:true})
    maxCapacity?: true;
    @Field(() => Boolean, {nullable:true})
    price?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
}

@ObjectType()
export class TourMaxAggregate {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    name?: string;
    @Field(() => Status, {nullable:true})
    @Validator.IsString()
    status?: keyof typeof Status;
    @Field(() => Int, {nullable:true})
    guideId?: number;
    @Field(() => Int, {nullable:true})
    currencyId?: number;
    @Field(() => Int, {nullable:true})
    maxCapacity?: number;
    @Field(() => Float, {nullable:true})
    price?: number;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class TourMaxOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    guideId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    currencyId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    maxCapacity?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    price?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
}

@InputType()
export class TourMinAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    name?: true;
    @Field(() => Boolean, {nullable:true})
    status?: true;
    @Field(() => Boolean, {nullable:true})
    guideId?: true;
    @Field(() => Boolean, {nullable:true})
    currencyId?: true;
    @Field(() => Boolean, {nullable:true})
    maxCapacity?: true;
    @Field(() => Boolean, {nullable:true})
    price?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
}

@ObjectType()
export class TourMinAggregate {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    name?: string;
    @Field(() => Status, {nullable:true})
    @Validator.IsString()
    status?: keyof typeof Status;
    @Field(() => Int, {nullable:true})
    guideId?: number;
    @Field(() => Int, {nullable:true})
    currencyId?: number;
    @Field(() => Int, {nullable:true})
    maxCapacity?: number;
    @Field(() => Float, {nullable:true})
    price?: number;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class TourMinOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    guideId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    currencyId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    maxCapacity?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    price?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
}

@InputType()
export class TourOrderByRelationAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    _count?: keyof typeof SortOrder;
}

@InputType()
export class TourOrderByWithAggregationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    guideId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    currencyId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    maxCapacity?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    price?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
    @Field(() => TourCountOrderByAggregateInput, {nullable:true})
    _count?: InstanceType<typeof TourCountOrderByAggregateInput>;
    @Field(() => TourAvgOrderByAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof TourAvgOrderByAggregateInput>;
    @Field(() => TourMaxOrderByAggregateInput, {nullable:true})
    _max?: InstanceType<typeof TourMaxOrderByAggregateInput>;
    @Field(() => TourMinOrderByAggregateInput, {nullable:true})
    _min?: InstanceType<typeof TourMinOrderByAggregateInput>;
    @Field(() => TourSumOrderByAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof TourSumOrderByAggregateInput>;
}

@InputType()
export class TourOrderByWithRelationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;
    @Field(() => UserOrderByWithRelationInput, {nullable:true})
    guide?: InstanceType<typeof UserOrderByWithRelationInput>;
    @Field(() => SortOrder, {nullable:true})
    guideId?: keyof typeof SortOrder;
    @Field(() => CurrencyOrderByWithRelationInput, {nullable:true})
    currency?: InstanceType<typeof CurrencyOrderByWithRelationInput>;
    @Field(() => SortOrder, {nullable:true})
    currencyId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    maxCapacity?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    price?: keyof typeof SortOrder;
    @Field(() => TourTourCategoryOrderByRelationAggregateInput, {nullable:true})
    tourTourCategory?: InstanceType<typeof TourTourCategoryOrderByRelationAggregateInput>;
    @Field(() => TourCityOrderByRelationAggregateInput, {nullable:true})
    tourCity?: InstanceType<typeof TourCityOrderByRelationAggregateInput>;
    @Field(() => TourLanguageOrderByRelationAggregateInput, {nullable:true})
    tourLanguage?: InstanceType<typeof TourLanguageOrderByRelationAggregateInput>;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
}

@InputType()
export class TourRelationFilter {
    @Field(() => TourWhereInput, {nullable:true})
    is?: InstanceType<typeof TourWhereInput>;
    @Field(() => TourWhereInput, {nullable:true})
    isNot?: InstanceType<typeof TourWhereInput>;
}

@InputType()
export class TourScalarWhereWithAggregatesInput {
    @Field(() => [TourScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<TourScalarWhereWithAggregatesInput>;
    @Field(() => [TourScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<TourScalarWhereWithAggregatesInput>;
    @Field(() => [TourScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<TourScalarWhereWithAggregatesInput>;
    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: InstanceType<typeof IntWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => EnumStatusWithAggregatesFilter, {nullable:true})
    status?: InstanceType<typeof EnumStatusWithAggregatesFilter>;
    @Field(() => IntWithAggregatesFilter, {nullable:true})
    guideId?: InstanceType<typeof IntWithAggregatesFilter>;
    @Field(() => IntWithAggregatesFilter, {nullable:true})
    currencyId?: InstanceType<typeof IntWithAggregatesFilter>;
    @Field(() => IntWithAggregatesFilter, {nullable:true})
    maxCapacity?: InstanceType<typeof IntWithAggregatesFilter>;
    @Field(() => FloatWithAggregatesFilter, {nullable:true})
    price?: InstanceType<typeof FloatWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
}

@InputType()
export class TourScalarWhereInput {
    @Field(() => [TourScalarWhereInput], {nullable:true})
    AND?: Array<TourScalarWhereInput>;
    @Field(() => [TourScalarWhereInput], {nullable:true})
    OR?: Array<TourScalarWhereInput>;
    @Field(() => [TourScalarWhereInput], {nullable:true})
    NOT?: Array<TourScalarWhereInput>;
    @Field(() => IntFilter, {nullable:true})
    id?: InstanceType<typeof IntFilter>;
    @Field(() => StringFilter, {nullable:true})
    name?: InstanceType<typeof StringFilter>;
    @Field(() => EnumStatusFilter, {nullable:true})
    status?: InstanceType<typeof EnumStatusFilter>;
    @Field(() => IntFilter, {nullable:true})
    guideId?: InstanceType<typeof IntFilter>;
    @Field(() => IntFilter, {nullable:true})
    currencyId?: InstanceType<typeof IntFilter>;
    @Field(() => IntFilter, {nullable:true})
    maxCapacity?: InstanceType<typeof IntFilter>;
    @Field(() => FloatFilter, {nullable:true})
    price?: InstanceType<typeof FloatFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFilter>;
}

@InputType()
export class TourSumAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    guideId?: true;
    @Field(() => Boolean, {nullable:true})
    currencyId?: true;
    @Field(() => Boolean, {nullable:true})
    maxCapacity?: true;
    @Field(() => Boolean, {nullable:true})
    price?: true;
}

@ObjectType()
export class TourSumAggregate {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => Int, {nullable:true})
    guideId?: number;
    @Field(() => Int, {nullable:true})
    currencyId?: number;
    @Field(() => Int, {nullable:true})
    maxCapacity?: number;
    @Field(() => Float, {nullable:true})
    price?: number;
}

@InputType()
export class TourSumOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    guideId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    currencyId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    maxCapacity?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    price?: keyof typeof SortOrder;
}

@InputType()
export class TourUncheckedCreateNestedManyWithoutCurrencyInput {
    @Field(() => [TourCreateWithoutCurrencyInput], {nullable:true})
    @Type(() => TourCreateWithoutCurrencyInput)
    create?: Array<TourCreateWithoutCurrencyInput>;
    @Field(() => [TourCreateOrConnectWithoutCurrencyInput], {nullable:true})
    @Type(() => TourCreateOrConnectWithoutCurrencyInput)
    connectOrCreate?: Array<TourCreateOrConnectWithoutCurrencyInput>;
    @Field(() => TourCreateManyCurrencyInputEnvelope, {nullable:true})
    @Type(() => TourCreateManyCurrencyInputEnvelope)
    createMany?: InstanceType<typeof TourCreateManyCurrencyInputEnvelope>;
    @Field(() => [TourWhereUniqueInput], {nullable:true})
    @Type(() => TourWhereUniqueInput)
    connect?: Array<TourWhereUniqueInput>;
}

@InputType()
export class TourUncheckedCreateNestedManyWithoutGuideInput {
    @Field(() => [TourCreateWithoutGuideInput], {nullable:true})
    @Type(() => TourCreateWithoutGuideInput)
    create?: Array<TourCreateWithoutGuideInput>;
    @Field(() => [TourCreateOrConnectWithoutGuideInput], {nullable:true})
    @Type(() => TourCreateOrConnectWithoutGuideInput)
    connectOrCreate?: Array<TourCreateOrConnectWithoutGuideInput>;
    @Field(() => TourCreateManyGuideInputEnvelope, {nullable:true})
    @Type(() => TourCreateManyGuideInputEnvelope)
    createMany?: InstanceType<typeof TourCreateManyGuideInputEnvelope>;
    @Field(() => [TourWhereUniqueInput], {nullable:true})
    @Type(() => TourWhereUniqueInput)
    connect?: Array<TourWhereUniqueInput>;
}

@InputType()
export class TourUncheckedCreateWithoutCurrencyInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    name!: string;
    @Field(() => Status, {nullable:true})
    @Validator.IsString()
    status?: keyof typeof Status;
    @Field(() => Int, {nullable:false})
    guideId!: number;
    @Field(() => Int, {nullable:false})
    maxCapacity!: number;
    @Field(() => Float, {nullable:false})
    price!: number;
    @Field(() => TourTourCategoryUncheckedCreateNestedManyWithoutTourInput, {nullable:true})
    tourTourCategory?: InstanceType<typeof TourTourCategoryUncheckedCreateNestedManyWithoutTourInput>;
    @Field(() => TourCityUncheckedCreateNestedManyWithoutTourInput, {nullable:true})
    tourCity?: InstanceType<typeof TourCityUncheckedCreateNestedManyWithoutTourInput>;
    @Field(() => TourLanguageUncheckedCreateNestedManyWithoutTourInput, {nullable:true})
    tourLanguage?: InstanceType<typeof TourLanguageUncheckedCreateNestedManyWithoutTourInput>;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class TourUncheckedCreateWithoutGuideInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    name!: string;
    @Field(() => Status, {nullable:true})
    @Validator.IsString()
    status?: keyof typeof Status;
    @Field(() => Int, {nullable:false})
    currencyId!: number;
    @Field(() => Int, {nullable:false})
    maxCapacity!: number;
    @Field(() => Float, {nullable:false})
    price!: number;
    @Field(() => TourTourCategoryUncheckedCreateNestedManyWithoutTourInput, {nullable:true})
    tourTourCategory?: InstanceType<typeof TourTourCategoryUncheckedCreateNestedManyWithoutTourInput>;
    @Field(() => TourCityUncheckedCreateNestedManyWithoutTourInput, {nullable:true})
    tourCity?: InstanceType<typeof TourCityUncheckedCreateNestedManyWithoutTourInput>;
    @Field(() => TourLanguageUncheckedCreateNestedManyWithoutTourInput, {nullable:true})
    tourLanguage?: InstanceType<typeof TourLanguageUncheckedCreateNestedManyWithoutTourInput>;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class TourUncheckedCreateWithoutTourCityInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    name!: string;
    @Field(() => Status, {nullable:true})
    @Validator.IsString()
    status?: keyof typeof Status;
    @Field(() => Int, {nullable:false})
    guideId!: number;
    @Field(() => Int, {nullable:false})
    currencyId!: number;
    @Field(() => Int, {nullable:false})
    maxCapacity!: number;
    @Field(() => Float, {nullable:false})
    price!: number;
    @Field(() => TourTourCategoryUncheckedCreateNestedManyWithoutTourInput, {nullable:true})
    tourTourCategory?: InstanceType<typeof TourTourCategoryUncheckedCreateNestedManyWithoutTourInput>;
    @Field(() => TourLanguageUncheckedCreateNestedManyWithoutTourInput, {nullable:true})
    tourLanguage?: InstanceType<typeof TourLanguageUncheckedCreateNestedManyWithoutTourInput>;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class TourUncheckedCreateWithoutTourLanguageInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    name!: string;
    @Field(() => Status, {nullable:true})
    @Validator.IsString()
    status?: keyof typeof Status;
    @Field(() => Int, {nullable:false})
    guideId!: number;
    @Field(() => Int, {nullable:false})
    currencyId!: number;
    @Field(() => Int, {nullable:false})
    maxCapacity!: number;
    @Field(() => Float, {nullable:false})
    price!: number;
    @Field(() => TourTourCategoryUncheckedCreateNestedManyWithoutTourInput, {nullable:true})
    tourTourCategory?: InstanceType<typeof TourTourCategoryUncheckedCreateNestedManyWithoutTourInput>;
    @Field(() => TourCityUncheckedCreateNestedManyWithoutTourInput, {nullable:true})
    tourCity?: InstanceType<typeof TourCityUncheckedCreateNestedManyWithoutTourInput>;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class TourUncheckedCreateWithoutTourTourCategoryInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    name!: string;
    @Field(() => Status, {nullable:true})
    @Validator.IsString()
    status?: keyof typeof Status;
    @Field(() => Int, {nullable:false})
    guideId!: number;
    @Field(() => Int, {nullable:false})
    currencyId!: number;
    @Field(() => Int, {nullable:false})
    maxCapacity!: number;
    @Field(() => Float, {nullable:false})
    price!: number;
    @Field(() => TourCityUncheckedCreateNestedManyWithoutTourInput, {nullable:true})
    tourCity?: InstanceType<typeof TourCityUncheckedCreateNestedManyWithoutTourInput>;
    @Field(() => TourLanguageUncheckedCreateNestedManyWithoutTourInput, {nullable:true})
    tourLanguage?: InstanceType<typeof TourLanguageUncheckedCreateNestedManyWithoutTourInput>;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class TourUncheckedCreateInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    name!: string;
    @Field(() => Status, {nullable:true})
    @Validator.IsString()
    status?: keyof typeof Status;
    @Field(() => Int, {nullable:false})
    guideId!: number;
    @Field(() => Int, {nullable:false})
    currencyId!: number;
    @Field(() => Int, {nullable:false})
    maxCapacity!: number;
    @Field(() => Float, {nullable:false})
    price!: number;
    @Field(() => TourTourCategoryUncheckedCreateNestedManyWithoutTourInput, {nullable:true})
    tourTourCategory?: InstanceType<typeof TourTourCategoryUncheckedCreateNestedManyWithoutTourInput>;
    @Field(() => TourCityUncheckedCreateNestedManyWithoutTourInput, {nullable:true})
    tourCity?: InstanceType<typeof TourCityUncheckedCreateNestedManyWithoutTourInput>;
    @Field(() => TourLanguageUncheckedCreateNestedManyWithoutTourInput, {nullable:true})
    tourLanguage?: InstanceType<typeof TourLanguageUncheckedCreateNestedManyWithoutTourInput>;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class TourUncheckedUpdateManyWithoutCurrencyInput {
    @Field(() => [TourCreateWithoutCurrencyInput], {nullable:true})
    @Type(() => TourCreateWithoutCurrencyInput)
    create?: Array<TourCreateWithoutCurrencyInput>;
    @Field(() => [TourCreateOrConnectWithoutCurrencyInput], {nullable:true})
    @Type(() => TourCreateOrConnectWithoutCurrencyInput)
    connectOrCreate?: Array<TourCreateOrConnectWithoutCurrencyInput>;
    @Field(() => [TourUpsertWithWhereUniqueWithoutCurrencyInput], {nullable:true})
    @Type(() => TourUpsertWithWhereUniqueWithoutCurrencyInput)
    upsert?: Array<TourUpsertWithWhereUniqueWithoutCurrencyInput>;
    @Field(() => TourCreateManyCurrencyInputEnvelope, {nullable:true})
    @Type(() => TourCreateManyCurrencyInputEnvelope)
    createMany?: InstanceType<typeof TourCreateManyCurrencyInputEnvelope>;
    @Field(() => [TourWhereUniqueInput], {nullable:true})
    @Type(() => TourWhereUniqueInput)
    set?: Array<TourWhereUniqueInput>;
    @Field(() => [TourWhereUniqueInput], {nullable:true})
    @Type(() => TourWhereUniqueInput)
    disconnect?: Array<TourWhereUniqueInput>;
    @Field(() => [TourWhereUniqueInput], {nullable:true})
    @Type(() => TourWhereUniqueInput)
    delete?: Array<TourWhereUniqueInput>;
    @Field(() => [TourWhereUniqueInput], {nullable:true})
    @Type(() => TourWhereUniqueInput)
    connect?: Array<TourWhereUniqueInput>;
    @Field(() => [TourUpdateWithWhereUniqueWithoutCurrencyInput], {nullable:true})
    @Type(() => TourUpdateWithWhereUniqueWithoutCurrencyInput)
    update?: Array<TourUpdateWithWhereUniqueWithoutCurrencyInput>;
    @Field(() => [TourUpdateManyWithWhereWithoutCurrencyInput], {nullable:true})
    @Type(() => TourUpdateManyWithWhereWithoutCurrencyInput)
    updateMany?: Array<TourUpdateManyWithWhereWithoutCurrencyInput>;
    @Field(() => [TourScalarWhereInput], {nullable:true})
    @Type(() => TourScalarWhereInput)
    deleteMany?: Array<TourScalarWhereInput>;
}

@InputType()
export class TourUncheckedUpdateManyWithoutGuideInput {
    @Field(() => [TourCreateWithoutGuideInput], {nullable:true})
    @Type(() => TourCreateWithoutGuideInput)
    create?: Array<TourCreateWithoutGuideInput>;
    @Field(() => [TourCreateOrConnectWithoutGuideInput], {nullable:true})
    @Type(() => TourCreateOrConnectWithoutGuideInput)
    connectOrCreate?: Array<TourCreateOrConnectWithoutGuideInput>;
    @Field(() => [TourUpsertWithWhereUniqueWithoutGuideInput], {nullable:true})
    @Type(() => TourUpsertWithWhereUniqueWithoutGuideInput)
    upsert?: Array<TourUpsertWithWhereUniqueWithoutGuideInput>;
    @Field(() => TourCreateManyGuideInputEnvelope, {nullable:true})
    @Type(() => TourCreateManyGuideInputEnvelope)
    createMany?: InstanceType<typeof TourCreateManyGuideInputEnvelope>;
    @Field(() => [TourWhereUniqueInput], {nullable:true})
    @Type(() => TourWhereUniqueInput)
    set?: Array<TourWhereUniqueInput>;
    @Field(() => [TourWhereUniqueInput], {nullable:true})
    @Type(() => TourWhereUniqueInput)
    disconnect?: Array<TourWhereUniqueInput>;
    @Field(() => [TourWhereUniqueInput], {nullable:true})
    @Type(() => TourWhereUniqueInput)
    delete?: Array<TourWhereUniqueInput>;
    @Field(() => [TourWhereUniqueInput], {nullable:true})
    @Type(() => TourWhereUniqueInput)
    connect?: Array<TourWhereUniqueInput>;
    @Field(() => [TourUpdateWithWhereUniqueWithoutGuideInput], {nullable:true})
    @Type(() => TourUpdateWithWhereUniqueWithoutGuideInput)
    update?: Array<TourUpdateWithWhereUniqueWithoutGuideInput>;
    @Field(() => [TourUpdateManyWithWhereWithoutGuideInput], {nullable:true})
    @Type(() => TourUpdateManyWithWhereWithoutGuideInput)
    updateMany?: Array<TourUpdateManyWithWhereWithoutGuideInput>;
    @Field(() => [TourScalarWhereInput], {nullable:true})
    @Type(() => TourScalarWhereInput)
    deleteMany?: Array<TourScalarWhereInput>;
}

@InputType()
export class TourUncheckedUpdateManyWithoutTourInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    name?: string;
    @Field(() => Status, {nullable:true})
    @Validator.IsString()
    status?: keyof typeof Status;
    @Field(() => Int, {nullable:true})
    currencyId?: number;
    @Field(() => Int, {nullable:true})
    maxCapacity?: number;
    @Field(() => Float, {nullable:true})
    price?: number;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class TourUncheckedUpdateManyInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    name?: string;
    @Field(() => Status, {nullable:true})
    @Validator.IsString()
    status?: keyof typeof Status;
    @Field(() => Int, {nullable:true})
    guideId?: number;
    @Field(() => Int, {nullable:true})
    currencyId?: number;
    @Field(() => Int, {nullable:true})
    maxCapacity?: number;
    @Field(() => Float, {nullable:true})
    price?: number;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class TourUncheckedUpdateWithoutCurrencyInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    name?: string;
    @Field(() => Status, {nullable:true})
    @Validator.IsString()
    status?: keyof typeof Status;
    @Field(() => Int, {nullable:true})
    guideId?: number;
    @Field(() => Int, {nullable:true})
    maxCapacity?: number;
    @Field(() => Float, {nullable:true})
    price?: number;
    @Field(() => TourTourCategoryUncheckedUpdateManyWithoutTourInput, {nullable:true})
    tourTourCategory?: InstanceType<typeof TourTourCategoryUncheckedUpdateManyWithoutTourInput>;
    @Field(() => TourCityUncheckedUpdateManyWithoutTourInput, {nullable:true})
    tourCity?: InstanceType<typeof TourCityUncheckedUpdateManyWithoutTourInput>;
    @Field(() => TourLanguageUncheckedUpdateManyWithoutTourInput, {nullable:true})
    tourLanguage?: InstanceType<typeof TourLanguageUncheckedUpdateManyWithoutTourInput>;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class TourUncheckedUpdateWithoutGuideInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    name?: string;
    @Field(() => Status, {nullable:true})
    @Validator.IsString()
    status?: keyof typeof Status;
    @Field(() => Int, {nullable:true})
    currencyId?: number;
    @Field(() => Int, {nullable:true})
    maxCapacity?: number;
    @Field(() => Float, {nullable:true})
    price?: number;
    @Field(() => TourTourCategoryUncheckedUpdateManyWithoutTourInput, {nullable:true})
    tourTourCategory?: InstanceType<typeof TourTourCategoryUncheckedUpdateManyWithoutTourInput>;
    @Field(() => TourCityUncheckedUpdateManyWithoutTourInput, {nullable:true})
    tourCity?: InstanceType<typeof TourCityUncheckedUpdateManyWithoutTourInput>;
    @Field(() => TourLanguageUncheckedUpdateManyWithoutTourInput, {nullable:true})
    tourLanguage?: InstanceType<typeof TourLanguageUncheckedUpdateManyWithoutTourInput>;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class TourUncheckedUpdateWithoutTourCityInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    name?: string;
    @Field(() => Status, {nullable:true})
    @Validator.IsString()
    status?: keyof typeof Status;
    @Field(() => Int, {nullable:true})
    guideId?: number;
    @Field(() => Int, {nullable:true})
    currencyId?: number;
    @Field(() => Int, {nullable:true})
    maxCapacity?: number;
    @Field(() => Float, {nullable:true})
    price?: number;
    @Field(() => TourTourCategoryUncheckedUpdateManyWithoutTourInput, {nullable:true})
    tourTourCategory?: InstanceType<typeof TourTourCategoryUncheckedUpdateManyWithoutTourInput>;
    @Field(() => TourLanguageUncheckedUpdateManyWithoutTourInput, {nullable:true})
    tourLanguage?: InstanceType<typeof TourLanguageUncheckedUpdateManyWithoutTourInput>;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class TourUncheckedUpdateWithoutTourLanguageInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    name?: string;
    @Field(() => Status, {nullable:true})
    @Validator.IsString()
    status?: keyof typeof Status;
    @Field(() => Int, {nullable:true})
    guideId?: number;
    @Field(() => Int, {nullable:true})
    currencyId?: number;
    @Field(() => Int, {nullable:true})
    maxCapacity?: number;
    @Field(() => Float, {nullable:true})
    price?: number;
    @Field(() => TourTourCategoryUncheckedUpdateManyWithoutTourInput, {nullable:true})
    tourTourCategory?: InstanceType<typeof TourTourCategoryUncheckedUpdateManyWithoutTourInput>;
    @Field(() => TourCityUncheckedUpdateManyWithoutTourInput, {nullable:true})
    tourCity?: InstanceType<typeof TourCityUncheckedUpdateManyWithoutTourInput>;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class TourUncheckedUpdateWithoutTourTourCategoryInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    name?: string;
    @Field(() => Status, {nullable:true})
    @Validator.IsString()
    status?: keyof typeof Status;
    @Field(() => Int, {nullable:true})
    guideId?: number;
    @Field(() => Int, {nullable:true})
    currencyId?: number;
    @Field(() => Int, {nullable:true})
    maxCapacity?: number;
    @Field(() => Float, {nullable:true})
    price?: number;
    @Field(() => TourCityUncheckedUpdateManyWithoutTourInput, {nullable:true})
    tourCity?: InstanceType<typeof TourCityUncheckedUpdateManyWithoutTourInput>;
    @Field(() => TourLanguageUncheckedUpdateManyWithoutTourInput, {nullable:true})
    tourLanguage?: InstanceType<typeof TourLanguageUncheckedUpdateManyWithoutTourInput>;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class TourUncheckedUpdateInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    name?: string;
    @Field(() => Status, {nullable:true})
    @Validator.IsString()
    status?: keyof typeof Status;
    @Field(() => Int, {nullable:true})
    guideId?: number;
    @Field(() => Int, {nullable:true})
    currencyId?: number;
    @Field(() => Int, {nullable:true})
    maxCapacity?: number;
    @Field(() => Float, {nullable:true})
    price?: number;
    @Field(() => TourTourCategoryUncheckedUpdateManyWithoutTourInput, {nullable:true})
    tourTourCategory?: InstanceType<typeof TourTourCategoryUncheckedUpdateManyWithoutTourInput>;
    @Field(() => TourCityUncheckedUpdateManyWithoutTourInput, {nullable:true})
    tourCity?: InstanceType<typeof TourCityUncheckedUpdateManyWithoutTourInput>;
    @Field(() => TourLanguageUncheckedUpdateManyWithoutTourInput, {nullable:true})
    tourLanguage?: InstanceType<typeof TourLanguageUncheckedUpdateManyWithoutTourInput>;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class TourUpdateManyMutationInput {
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    name?: string;
    @Field(() => Status, {nullable:true})
    @Validator.IsString()
    status?: keyof typeof Status;
    @Field(() => Int, {nullable:true})
    maxCapacity?: number;
    @Field(() => Float, {nullable:true})
    price?: number;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class TourUpdateManyWithWhereWithoutCurrencyInput {
    @Field(() => TourScalarWhereInput, {nullable:false})
    @Type(() => TourScalarWhereInput)
    where!: InstanceType<typeof TourScalarWhereInput>;
    @Field(() => TourUpdateManyMutationInput, {nullable:false})
    @Type(() => TourUpdateManyMutationInput)
    data!: InstanceType<typeof TourUpdateManyMutationInput>;
}

@InputType()
export class TourUpdateManyWithWhereWithoutGuideInput {
    @Field(() => TourScalarWhereInput, {nullable:false})
    @Type(() => TourScalarWhereInput)
    where!: InstanceType<typeof TourScalarWhereInput>;
    @Field(() => TourUpdateManyMutationInput, {nullable:false})
    @Type(() => TourUpdateManyMutationInput)
    data!: InstanceType<typeof TourUpdateManyMutationInput>;
}

@InputType()
export class TourUpdateManyWithoutCurrencyInput {
    @Field(() => [TourCreateWithoutCurrencyInput], {nullable:true})
    @Type(() => TourCreateWithoutCurrencyInput)
    create?: Array<TourCreateWithoutCurrencyInput>;
    @Field(() => [TourCreateOrConnectWithoutCurrencyInput], {nullable:true})
    @Type(() => TourCreateOrConnectWithoutCurrencyInput)
    connectOrCreate?: Array<TourCreateOrConnectWithoutCurrencyInput>;
    @Field(() => [TourUpsertWithWhereUniqueWithoutCurrencyInput], {nullable:true})
    @Type(() => TourUpsertWithWhereUniqueWithoutCurrencyInput)
    upsert?: Array<TourUpsertWithWhereUniqueWithoutCurrencyInput>;
    @Field(() => TourCreateManyCurrencyInputEnvelope, {nullable:true})
    @Type(() => TourCreateManyCurrencyInputEnvelope)
    createMany?: InstanceType<typeof TourCreateManyCurrencyInputEnvelope>;
    @Field(() => [TourWhereUniqueInput], {nullable:true})
    @Type(() => TourWhereUniqueInput)
    set?: Array<TourWhereUniqueInput>;
    @Field(() => [TourWhereUniqueInput], {nullable:true})
    @Type(() => TourWhereUniqueInput)
    disconnect?: Array<TourWhereUniqueInput>;
    @Field(() => [TourWhereUniqueInput], {nullable:true})
    @Type(() => TourWhereUniqueInput)
    delete?: Array<TourWhereUniqueInput>;
    @Field(() => [TourWhereUniqueInput], {nullable:true})
    @Type(() => TourWhereUniqueInput)
    connect?: Array<TourWhereUniqueInput>;
    @Field(() => [TourUpdateWithWhereUniqueWithoutCurrencyInput], {nullable:true})
    @Type(() => TourUpdateWithWhereUniqueWithoutCurrencyInput)
    update?: Array<TourUpdateWithWhereUniqueWithoutCurrencyInput>;
    @Field(() => [TourUpdateManyWithWhereWithoutCurrencyInput], {nullable:true})
    @Type(() => TourUpdateManyWithWhereWithoutCurrencyInput)
    updateMany?: Array<TourUpdateManyWithWhereWithoutCurrencyInput>;
    @Field(() => [TourScalarWhereInput], {nullable:true})
    @Type(() => TourScalarWhereInput)
    deleteMany?: Array<TourScalarWhereInput>;
}

@InputType()
export class TourUpdateManyWithoutGuideInput {
    @Field(() => [TourCreateWithoutGuideInput], {nullable:true})
    @Type(() => TourCreateWithoutGuideInput)
    create?: Array<TourCreateWithoutGuideInput>;
    @Field(() => [TourCreateOrConnectWithoutGuideInput], {nullable:true})
    @Type(() => TourCreateOrConnectWithoutGuideInput)
    connectOrCreate?: Array<TourCreateOrConnectWithoutGuideInput>;
    @Field(() => [TourUpsertWithWhereUniqueWithoutGuideInput], {nullable:true})
    @Type(() => TourUpsertWithWhereUniqueWithoutGuideInput)
    upsert?: Array<TourUpsertWithWhereUniqueWithoutGuideInput>;
    @Field(() => TourCreateManyGuideInputEnvelope, {nullable:true})
    @Type(() => TourCreateManyGuideInputEnvelope)
    createMany?: InstanceType<typeof TourCreateManyGuideInputEnvelope>;
    @Field(() => [TourWhereUniqueInput], {nullable:true})
    @Type(() => TourWhereUniqueInput)
    set?: Array<TourWhereUniqueInput>;
    @Field(() => [TourWhereUniqueInput], {nullable:true})
    @Type(() => TourWhereUniqueInput)
    disconnect?: Array<TourWhereUniqueInput>;
    @Field(() => [TourWhereUniqueInput], {nullable:true})
    @Type(() => TourWhereUniqueInput)
    delete?: Array<TourWhereUniqueInput>;
    @Field(() => [TourWhereUniqueInput], {nullable:true})
    @Type(() => TourWhereUniqueInput)
    connect?: Array<TourWhereUniqueInput>;
    @Field(() => [TourUpdateWithWhereUniqueWithoutGuideInput], {nullable:true})
    @Type(() => TourUpdateWithWhereUniqueWithoutGuideInput)
    update?: Array<TourUpdateWithWhereUniqueWithoutGuideInput>;
    @Field(() => [TourUpdateManyWithWhereWithoutGuideInput], {nullable:true})
    @Type(() => TourUpdateManyWithWhereWithoutGuideInput)
    updateMany?: Array<TourUpdateManyWithWhereWithoutGuideInput>;
    @Field(() => [TourScalarWhereInput], {nullable:true})
    @Type(() => TourScalarWhereInput)
    deleteMany?: Array<TourScalarWhereInput>;
}

@InputType()
export class TourUpdateOneWithoutTourCityInput {
    @Field(() => TourCreateWithoutTourCityInput, {nullable:true})
    @Type(() => TourCreateWithoutTourCityInput)
    create?: InstanceType<typeof TourCreateWithoutTourCityInput>;
    @Field(() => TourCreateOrConnectWithoutTourCityInput, {nullable:true})
    @Type(() => TourCreateOrConnectWithoutTourCityInput)
    connectOrCreate?: InstanceType<typeof TourCreateOrConnectWithoutTourCityInput>;
    @Field(() => TourUpsertWithoutTourCityInput, {nullable:true})
    @Type(() => TourUpsertWithoutTourCityInput)
    upsert?: InstanceType<typeof TourUpsertWithoutTourCityInput>;
    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;
    @Field(() => Boolean, {nullable:true})
    delete?: boolean;
    @Field(() => TourWhereUniqueInput, {nullable:true})
    @Type(() => TourWhereUniqueInput)
    connect?: InstanceType<typeof TourWhereUniqueInput>;
    @Field(() => TourUpdateWithoutTourCityInput, {nullable:true})
    @Type(() => TourUpdateWithoutTourCityInput)
    update?: InstanceType<typeof TourUpdateWithoutTourCityInput>;
}

@InputType()
export class TourUpdateOneWithoutTourLanguageInput {
    @Field(() => TourCreateWithoutTourLanguageInput, {nullable:true})
    @Type(() => TourCreateWithoutTourLanguageInput)
    create?: InstanceType<typeof TourCreateWithoutTourLanguageInput>;
    @Field(() => TourCreateOrConnectWithoutTourLanguageInput, {nullable:true})
    @Type(() => TourCreateOrConnectWithoutTourLanguageInput)
    connectOrCreate?: InstanceType<typeof TourCreateOrConnectWithoutTourLanguageInput>;
    @Field(() => TourUpsertWithoutTourLanguageInput, {nullable:true})
    @Type(() => TourUpsertWithoutTourLanguageInput)
    upsert?: InstanceType<typeof TourUpsertWithoutTourLanguageInput>;
    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;
    @Field(() => Boolean, {nullable:true})
    delete?: boolean;
    @Field(() => TourWhereUniqueInput, {nullable:true})
    @Type(() => TourWhereUniqueInput)
    connect?: InstanceType<typeof TourWhereUniqueInput>;
    @Field(() => TourUpdateWithoutTourLanguageInput, {nullable:true})
    @Type(() => TourUpdateWithoutTourLanguageInput)
    update?: InstanceType<typeof TourUpdateWithoutTourLanguageInput>;
}

@InputType()
export class TourUpdateOneWithoutTourTourCategoryInput {
    @Field(() => TourCreateWithoutTourTourCategoryInput, {nullable:true})
    @Type(() => TourCreateWithoutTourTourCategoryInput)
    create?: InstanceType<typeof TourCreateWithoutTourTourCategoryInput>;
    @Field(() => TourCreateOrConnectWithoutTourTourCategoryInput, {nullable:true})
    @Type(() => TourCreateOrConnectWithoutTourTourCategoryInput)
    connectOrCreate?: InstanceType<typeof TourCreateOrConnectWithoutTourTourCategoryInput>;
    @Field(() => TourUpsertWithoutTourTourCategoryInput, {nullable:true})
    @Type(() => TourUpsertWithoutTourTourCategoryInput)
    upsert?: InstanceType<typeof TourUpsertWithoutTourTourCategoryInput>;
    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;
    @Field(() => Boolean, {nullable:true})
    delete?: boolean;
    @Field(() => TourWhereUniqueInput, {nullable:true})
    @Type(() => TourWhereUniqueInput)
    connect?: InstanceType<typeof TourWhereUniqueInput>;
    @Field(() => TourUpdateWithoutTourTourCategoryInput, {nullable:true})
    @Type(() => TourUpdateWithoutTourTourCategoryInput)
    update?: InstanceType<typeof TourUpdateWithoutTourTourCategoryInput>;
}

@InputType()
export class TourUpdateWithWhereUniqueWithoutCurrencyInput {
    @Field(() => TourWhereUniqueInput, {nullable:false})
    @Type(() => TourWhereUniqueInput)
    where!: InstanceType<typeof TourWhereUniqueInput>;
    @Field(() => TourUpdateWithoutCurrencyInput, {nullable:false})
    @Type(() => TourUpdateWithoutCurrencyInput)
    data!: InstanceType<typeof TourUpdateWithoutCurrencyInput>;
}

@InputType()
export class TourUpdateWithWhereUniqueWithoutGuideInput {
    @Field(() => TourWhereUniqueInput, {nullable:false})
    @Type(() => TourWhereUniqueInput)
    where!: InstanceType<typeof TourWhereUniqueInput>;
    @Field(() => TourUpdateWithoutGuideInput, {nullable:false})
    @Type(() => TourUpdateWithoutGuideInput)
    data!: InstanceType<typeof TourUpdateWithoutGuideInput>;
}

@InputType()
export class TourUpdateWithoutCurrencyInput {
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    name?: string;
    @Field(() => Status, {nullable:true})
    @Validator.IsString()
    status?: keyof typeof Status;
    @Field(() => UserUpdateOneRequiredWithoutTourInput, {nullable:true})
    guide?: InstanceType<typeof UserUpdateOneRequiredWithoutTourInput>;
    @Field(() => Int, {nullable:true})
    maxCapacity?: number;
    @Field(() => Float, {nullable:true})
    price?: number;
    @Field(() => TourTourCategoryUpdateManyWithoutTourInput, {nullable:true})
    tourTourCategory?: InstanceType<typeof TourTourCategoryUpdateManyWithoutTourInput>;
    @Field(() => TourCityUpdateManyWithoutTourInput, {nullable:true})
    tourCity?: InstanceType<typeof TourCityUpdateManyWithoutTourInput>;
    @Field(() => TourLanguageUpdateManyWithoutTourInput, {nullable:true})
    tourLanguage?: InstanceType<typeof TourLanguageUpdateManyWithoutTourInput>;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class TourUpdateWithoutGuideInput {
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    name?: string;
    @Field(() => Status, {nullable:true})
    @Validator.IsString()
    status?: keyof typeof Status;
    @Field(() => CurrencyUpdateOneRequiredWithoutTourInput, {nullable:true})
    currency?: InstanceType<typeof CurrencyUpdateOneRequiredWithoutTourInput>;
    @Field(() => Int, {nullable:true})
    maxCapacity?: number;
    @Field(() => Float, {nullable:true})
    price?: number;
    @Field(() => TourTourCategoryUpdateManyWithoutTourInput, {nullable:true})
    tourTourCategory?: InstanceType<typeof TourTourCategoryUpdateManyWithoutTourInput>;
    @Field(() => TourCityUpdateManyWithoutTourInput, {nullable:true})
    tourCity?: InstanceType<typeof TourCityUpdateManyWithoutTourInput>;
    @Field(() => TourLanguageUpdateManyWithoutTourInput, {nullable:true})
    tourLanguage?: InstanceType<typeof TourLanguageUpdateManyWithoutTourInput>;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class TourUpdateWithoutTourCityInput {
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    name?: string;
    @Field(() => Status, {nullable:true})
    @Validator.IsString()
    status?: keyof typeof Status;
    @Field(() => UserUpdateOneRequiredWithoutTourInput, {nullable:true})
    guide?: InstanceType<typeof UserUpdateOneRequiredWithoutTourInput>;
    @Field(() => CurrencyUpdateOneRequiredWithoutTourInput, {nullable:true})
    currency?: InstanceType<typeof CurrencyUpdateOneRequiredWithoutTourInput>;
    @Field(() => Int, {nullable:true})
    maxCapacity?: number;
    @Field(() => Float, {nullable:true})
    price?: number;
    @Field(() => TourTourCategoryUpdateManyWithoutTourInput, {nullable:true})
    tourTourCategory?: InstanceType<typeof TourTourCategoryUpdateManyWithoutTourInput>;
    @Field(() => TourLanguageUpdateManyWithoutTourInput, {nullable:true})
    tourLanguage?: InstanceType<typeof TourLanguageUpdateManyWithoutTourInput>;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class TourUpdateWithoutTourLanguageInput {
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    name?: string;
    @Field(() => Status, {nullable:true})
    @Validator.IsString()
    status?: keyof typeof Status;
    @Field(() => UserUpdateOneRequiredWithoutTourInput, {nullable:true})
    guide?: InstanceType<typeof UserUpdateOneRequiredWithoutTourInput>;
    @Field(() => CurrencyUpdateOneRequiredWithoutTourInput, {nullable:true})
    currency?: InstanceType<typeof CurrencyUpdateOneRequiredWithoutTourInput>;
    @Field(() => Int, {nullable:true})
    maxCapacity?: number;
    @Field(() => Float, {nullable:true})
    price?: number;
    @Field(() => TourTourCategoryUpdateManyWithoutTourInput, {nullable:true})
    tourTourCategory?: InstanceType<typeof TourTourCategoryUpdateManyWithoutTourInput>;
    @Field(() => TourCityUpdateManyWithoutTourInput, {nullable:true})
    tourCity?: InstanceType<typeof TourCityUpdateManyWithoutTourInput>;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class TourUpdateWithoutTourTourCategoryInput {
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    name?: string;
    @Field(() => Status, {nullable:true})
    @Validator.IsString()
    status?: keyof typeof Status;
    @Field(() => UserUpdateOneRequiredWithoutTourInput, {nullable:true})
    guide?: InstanceType<typeof UserUpdateOneRequiredWithoutTourInput>;
    @Field(() => CurrencyUpdateOneRequiredWithoutTourInput, {nullable:true})
    currency?: InstanceType<typeof CurrencyUpdateOneRequiredWithoutTourInput>;
    @Field(() => Int, {nullable:true})
    maxCapacity?: number;
    @Field(() => Float, {nullable:true})
    price?: number;
    @Field(() => TourCityUpdateManyWithoutTourInput, {nullable:true})
    tourCity?: InstanceType<typeof TourCityUpdateManyWithoutTourInput>;
    @Field(() => TourLanguageUpdateManyWithoutTourInput, {nullable:true})
    tourLanguage?: InstanceType<typeof TourLanguageUpdateManyWithoutTourInput>;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class TourUpdateInput {
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    name?: string;
    @Field(() => Status, {nullable:true})
    @Validator.IsString()
    status?: keyof typeof Status;
    @Field(() => UserUpdateOneRequiredWithoutTourInput, {nullable:true})
    guide?: InstanceType<typeof UserUpdateOneRequiredWithoutTourInput>;
    @Field(() => CurrencyUpdateOneRequiredWithoutTourInput, {nullable:true})
    currency?: InstanceType<typeof CurrencyUpdateOneRequiredWithoutTourInput>;
    @Field(() => Int, {nullable:true})
    maxCapacity?: number;
    @Field(() => Float, {nullable:true})
    price?: number;
    @Field(() => TourTourCategoryUpdateManyWithoutTourInput, {nullable:true})
    tourTourCategory?: InstanceType<typeof TourTourCategoryUpdateManyWithoutTourInput>;
    @Field(() => TourCityUpdateManyWithoutTourInput, {nullable:true})
    tourCity?: InstanceType<typeof TourCityUpdateManyWithoutTourInput>;
    @Field(() => TourLanguageUpdateManyWithoutTourInput, {nullable:true})
    tourLanguage?: InstanceType<typeof TourLanguageUpdateManyWithoutTourInput>;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class TourUpsertWithWhereUniqueWithoutCurrencyInput {
    @Field(() => TourWhereUniqueInput, {nullable:false})
    @Type(() => TourWhereUniqueInput)
    where!: InstanceType<typeof TourWhereUniqueInput>;
    @Field(() => TourUpdateWithoutCurrencyInput, {nullable:false})
    @Type(() => TourUpdateWithoutCurrencyInput)
    update!: InstanceType<typeof TourUpdateWithoutCurrencyInput>;
    @Field(() => TourCreateWithoutCurrencyInput, {nullable:false})
    @Type(() => TourCreateWithoutCurrencyInput)
    create!: InstanceType<typeof TourCreateWithoutCurrencyInput>;
}

@InputType()
export class TourUpsertWithWhereUniqueWithoutGuideInput {
    @Field(() => TourWhereUniqueInput, {nullable:false})
    @Type(() => TourWhereUniqueInput)
    where!: InstanceType<typeof TourWhereUniqueInput>;
    @Field(() => TourUpdateWithoutGuideInput, {nullable:false})
    @Type(() => TourUpdateWithoutGuideInput)
    update!: InstanceType<typeof TourUpdateWithoutGuideInput>;
    @Field(() => TourCreateWithoutGuideInput, {nullable:false})
    @Type(() => TourCreateWithoutGuideInput)
    create!: InstanceType<typeof TourCreateWithoutGuideInput>;
}

@InputType()
export class TourUpsertWithoutTourCityInput {
    @Field(() => TourUpdateWithoutTourCityInput, {nullable:false})
    @Type(() => TourUpdateWithoutTourCityInput)
    update!: InstanceType<typeof TourUpdateWithoutTourCityInput>;
    @Field(() => TourCreateWithoutTourCityInput, {nullable:false})
    @Type(() => TourCreateWithoutTourCityInput)
    create!: InstanceType<typeof TourCreateWithoutTourCityInput>;
}

@InputType()
export class TourUpsertWithoutTourLanguageInput {
    @Field(() => TourUpdateWithoutTourLanguageInput, {nullable:false})
    @Type(() => TourUpdateWithoutTourLanguageInput)
    update!: InstanceType<typeof TourUpdateWithoutTourLanguageInput>;
    @Field(() => TourCreateWithoutTourLanguageInput, {nullable:false})
    @Type(() => TourCreateWithoutTourLanguageInput)
    create!: InstanceType<typeof TourCreateWithoutTourLanguageInput>;
}

@InputType()
export class TourUpsertWithoutTourTourCategoryInput {
    @Field(() => TourUpdateWithoutTourTourCategoryInput, {nullable:false})
    @Type(() => TourUpdateWithoutTourTourCategoryInput)
    update!: InstanceType<typeof TourUpdateWithoutTourTourCategoryInput>;
    @Field(() => TourCreateWithoutTourTourCategoryInput, {nullable:false})
    @Type(() => TourCreateWithoutTourTourCategoryInput)
    create!: InstanceType<typeof TourCreateWithoutTourTourCategoryInput>;
}

@InputType()
export class TourWhereUniqueInput {
    @Field(() => Int, {nullable:true})
    id?: number;
}

@InputType()
export class TourWhereInput {
    @Field(() => [TourWhereInput], {nullable:true})
    AND?: Array<TourWhereInput>;
    @Field(() => [TourWhereInput], {nullable:true})
    OR?: Array<TourWhereInput>;
    @Field(() => [TourWhereInput], {nullable:true})
    NOT?: Array<TourWhereInput>;
    @Field(() => IntFilter, {nullable:true})
    id?: InstanceType<typeof IntFilter>;
    @Field(() => StringFilter, {nullable:true})
    name?: InstanceType<typeof StringFilter>;
    @Field(() => EnumStatusFilter, {nullable:true})
    status?: InstanceType<typeof EnumStatusFilter>;
    @Field(() => UserRelationFilter, {nullable:true})
    guide?: InstanceType<typeof UserRelationFilter>;
    @Field(() => IntFilter, {nullable:true})
    guideId?: InstanceType<typeof IntFilter>;
    @Field(() => CurrencyRelationFilter, {nullable:true})
    currency?: InstanceType<typeof CurrencyRelationFilter>;
    @Field(() => IntFilter, {nullable:true})
    currencyId?: InstanceType<typeof IntFilter>;
    @Field(() => IntFilter, {nullable:true})
    maxCapacity?: InstanceType<typeof IntFilter>;
    @Field(() => FloatFilter, {nullable:true})
    price?: InstanceType<typeof FloatFilter>;
    @Field(() => TourTourCategoryListRelationFilter, {nullable:true})
    tourTourCategory?: InstanceType<typeof TourTourCategoryListRelationFilter>;
    @Field(() => TourCityListRelationFilter, {nullable:true})
    tourCity?: InstanceType<typeof TourCityListRelationFilter>;
    @Field(() => TourLanguageListRelationFilter, {nullable:true})
    tourLanguage?: InstanceType<typeof TourLanguageListRelationFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFilter>;
}

@ObjectType()
export class Tour {
    @Field(() => ID, {nullable:false})
    id!: number;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => Status, {nullable:false,defaultValue:'ACTIVE'})
    status!: keyof typeof Status;
    @Field(() => User, {nullable:false})
    guide?: InstanceType<typeof User>;
    @Field(() => Int, {nullable:false})
    guideId!: number;
    @Field(() => Currency, {nullable:false})
    currency?: InstanceType<typeof Currency>;
    @Field(() => Int, {nullable:false})
    currencyId!: number;
    @Field(() => Int, {nullable:false})
    maxCapacity!: number;
    @Field(() => Float, {nullable:false})
    price!: number;
    @Field(() => [TourTourCategory], {nullable:true})
    tourTourCategory?: Array<TourTourCategory>;
    @Field(() => [TourCity], {nullable:true})
    tourCity?: Array<TourCity>;
    @Field(() => [TourLanguage], {nullable:true})
    tourLanguage?: Array<TourLanguage>;
    @Field(() => Date, {nullable:false})
    createdAt!: Date;
    @Field(() => Date, {nullable:false})
    updatedAt!: Date;
    @Field(() => TourCount, {nullable:false})
    _count?: InstanceType<typeof TourCount>;
}

@ArgsType()
export class UpdateManyTourArgs {
    @Field(() => TourUpdateManyMutationInput, {nullable:false})
    @Type(() => TourUpdateManyMutationInput)
    @ValidateNested({ each: true })
    data!: InstanceType<typeof TourUpdateManyMutationInput>;
    @Field(() => TourWhereInput, {nullable:true})
    @Type(() => TourWhereInput)
    @ValidateNested({ each: true })
    where?: InstanceType<typeof TourWhereInput>;
}

@ArgsType()
export class UpdateOneTourArgs {
    @Field(() => TourUpdateInput, {nullable:false})
    @Type(() => TourUpdateInput)
    @ValidateNested({ each: true })
    data!: InstanceType<typeof TourUpdateInput>;
    @Field(() => TourWhereUniqueInput, {nullable:false})
    @Type(() => TourWhereUniqueInput)
    @ValidateNested({ each: true })
    where!: InstanceType<typeof TourWhereUniqueInput>;
}

@ArgsType()
export class UpsertOneTourArgs {
    @Field(() => TourWhereUniqueInput, {nullable:false})
    @Type(() => TourWhereUniqueInput)
    @ValidateNested({ each: true })
    where!: InstanceType<typeof TourWhereUniqueInput>;
    @Field(() => TourCreateInput, {nullable:false})
    @Type(() => TourCreateInput)
    create!: InstanceType<typeof TourCreateInput>;
    @Field(() => TourUpdateInput, {nullable:false})
    @Type(() => TourUpdateInput)
    update!: InstanceType<typeof TourUpdateInput>;
}

@ObjectType()
export class AggregateTourCategory {
    @Field(() => TourCategoryCountAggregate, {nullable:true})
    _count?: InstanceType<typeof TourCategoryCountAggregate>;
    @Field(() => TourCategoryAvgAggregate, {nullable:true})
    _avg?: InstanceType<typeof TourCategoryAvgAggregate>;
    @Field(() => TourCategorySumAggregate, {nullable:true})
    _sum?: InstanceType<typeof TourCategorySumAggregate>;
    @Field(() => TourCategoryMinAggregate, {nullable:true})
    _min?: InstanceType<typeof TourCategoryMinAggregate>;
    @Field(() => TourCategoryMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof TourCategoryMaxAggregate>;
}

@ArgsType()
export class CreateManyTourCategoryArgs {
    @Field(() => [TourCategoryCreateManyInput], {nullable:false})
    @Type(() => TourCategoryCreateManyInput)
    @ValidateNested({ each: true })
    data!: Array<TourCategoryCreateManyInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@ArgsType()
export class CreateOneTourCategoryArgs {
    @Field(() => TourCategoryCreateInput, {nullable:false})
    @Type(() => TourCategoryCreateInput)
    @ValidateNested({ each: true })
    data!: InstanceType<typeof TourCategoryCreateInput>;
}

@ArgsType()
export class DeleteManyTourCategoryArgs {
    @Field(() => TourCategoryWhereInput, {nullable:true})
    @Type(() => TourCategoryWhereInput)
    @ValidateNested({ each: true })
    where?: InstanceType<typeof TourCategoryWhereInput>;
}

@ArgsType()
export class DeleteOneTourCategoryArgs {
    @Field(() => TourCategoryWhereUniqueInput, {nullable:false})
    @Type(() => TourCategoryWhereUniqueInput)
    @ValidateNested({ each: true })
    where!: InstanceType<typeof TourCategoryWhereUniqueInput>;
}

@ArgsType()
export class FindFirstTourCategoryArgs {
    @Field(() => TourCategoryWhereInput, {nullable:true})
    @Type(() => TourCategoryWhereInput)
    @ValidateNested({ each: true })
    where?: InstanceType<typeof TourCategoryWhereInput>;
    @Field(() => [TourCategoryOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<TourCategoryOrderByWithRelationInput>;
    @Field(() => TourCategoryWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof TourCategoryWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [TourCategoryScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof TourCategoryScalarFieldEnum>;
}

@ArgsType()
export class FindManyTourCategoryArgs {
    @Field(() => TourCategoryWhereInput, {nullable:true})
    @Type(() => TourCategoryWhereInput)
    @ValidateNested({ each: true })
    where?: InstanceType<typeof TourCategoryWhereInput>;
    @Field(() => [TourCategoryOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<TourCategoryOrderByWithRelationInput>;
    @Field(() => TourCategoryWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof TourCategoryWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [TourCategoryScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof TourCategoryScalarFieldEnum>;
}

@ArgsType()
export class FindUniqueTourCategoryArgs {
    @Field(() => TourCategoryWhereUniqueInput, {nullable:false})
    @Type(() => TourCategoryWhereUniqueInput)
    @ValidateNested({ each: true })
    where!: InstanceType<typeof TourCategoryWhereUniqueInput>;
}

@ArgsType()
export class TourCategoryAggregateArgs {
    @Field(() => TourCategoryWhereInput, {nullable:true})
    @Type(() => TourCategoryWhereInput)
    @ValidateNested({ each: true })
    where?: InstanceType<typeof TourCategoryWhereInput>;
    @Field(() => [TourCategoryOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<TourCategoryOrderByWithRelationInput>;
    @Field(() => TourCategoryWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof TourCategoryWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => TourCategoryCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof TourCategoryCountAggregateInput>;
    @Field(() => TourCategoryAvgAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof TourCategoryAvgAggregateInput>;
    @Field(() => TourCategorySumAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof TourCategorySumAggregateInput>;
    @Field(() => TourCategoryMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof TourCategoryMinAggregateInput>;
    @Field(() => TourCategoryMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof TourCategoryMaxAggregateInput>;
}

@InputType()
export class TourCategoryAvgAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
}

@ObjectType()
export class TourCategoryAvgAggregate {
    @Field(() => Float, {nullable:true})
    id?: number;
}

@InputType()
export class TourCategoryAvgOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
}

@InputType()
export class TourCategoryCountAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    name?: true;
    @Field(() => Boolean, {nullable:true})
    status?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
    @Field(() => Boolean, {nullable:true})
    _all?: true;
}

@ObjectType()
export class TourCategoryCountAggregate {
    @Field(() => Int, {nullable:false})
    id!: number;
    @Field(() => Int, {nullable:false})
    name!: number;
    @Field(() => Int, {nullable:false})
    status!: number;
    @Field(() => Int, {nullable:false})
    createdAt!: number;
    @Field(() => Int, {nullable:false})
    updatedAt!: number;
    @Field(() => Int, {nullable:false})
    _all!: number;
}

@InputType()
export class TourCategoryCountOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
}

@InputType()
export class TourCategoryCreateManyInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    name!: string;
    @Field(() => Status, {nullable:true})
    status?: keyof typeof Status;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class TourCategoryCreateNestedOneWithoutTourTourCategoryInput {
    @Field(() => TourCategoryCreateWithoutTourTourCategoryInput, {nullable:true})
    @Type(() => TourCategoryCreateWithoutTourTourCategoryInput)
    create?: InstanceType<typeof TourCategoryCreateWithoutTourTourCategoryInput>;
    @Field(() => TourCategoryCreateOrConnectWithoutTourTourCategoryInput, {nullable:true})
    @Type(() => TourCategoryCreateOrConnectWithoutTourTourCategoryInput)
    connectOrCreate?: InstanceType<typeof TourCategoryCreateOrConnectWithoutTourTourCategoryInput>;
    @Field(() => TourCategoryWhereUniqueInput, {nullable:true})
    @Type(() => TourCategoryWhereUniqueInput)
    connect?: InstanceType<typeof TourCategoryWhereUniqueInput>;
}

@InputType()
export class TourCategoryCreateOrConnectWithoutTourTourCategoryInput {
    @Field(() => TourCategoryWhereUniqueInput, {nullable:false})
    @Type(() => TourCategoryWhereUniqueInput)
    where!: InstanceType<typeof TourCategoryWhereUniqueInput>;
    @Field(() => TourCategoryCreateWithoutTourTourCategoryInput, {nullable:false})
    @Type(() => TourCategoryCreateWithoutTourTourCategoryInput)
    create!: InstanceType<typeof TourCategoryCreateWithoutTourTourCategoryInput>;
}

@InputType()
export class TourCategoryCreateWithoutTourTourCategoryInput {
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    name!: string;
    @Field(() => Status, {nullable:true})
    status?: keyof typeof Status;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class TourCategoryCreateInput {
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    name!: string;
    @Field(() => Status, {nullable:true})
    status?: keyof typeof Status;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => TourTourCategoryCreateNestedManyWithoutTourCategoryInput, {nullable:true})
    tourTourCategory?: InstanceType<typeof TourTourCategoryCreateNestedManyWithoutTourCategoryInput>;
}

@ArgsType()
export class TourCategoryGroupByArgs {
    @Field(() => TourCategoryWhereInput, {nullable:true})
    @Type(() => TourCategoryWhereInput)
    @ValidateNested({ each: true })
    where?: InstanceType<typeof TourCategoryWhereInput>;
    @Field(() => [TourCategoryOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<TourCategoryOrderByWithAggregationInput>;
    @Field(() => [TourCategoryScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof TourCategoryScalarFieldEnum>;
    @Field(() => TourCategoryScalarWhereWithAggregatesInput, {nullable:true})
    having?: InstanceType<typeof TourCategoryScalarWhereWithAggregatesInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => TourCategoryCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof TourCategoryCountAggregateInput>;
    @Field(() => TourCategoryAvgAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof TourCategoryAvgAggregateInput>;
    @Field(() => TourCategorySumAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof TourCategorySumAggregateInput>;
    @Field(() => TourCategoryMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof TourCategoryMinAggregateInput>;
    @Field(() => TourCategoryMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof TourCategoryMaxAggregateInput>;
}

@ObjectType()
export class TourCategoryGroupBy {
    @Field(() => Int, {nullable:false})
    id!: number;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    name!: string;
    @Field(() => Status, {nullable:false})
    status!: keyof typeof Status;
    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;
    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;
    @Field(() => TourCategoryCountAggregate, {nullable:true})
    _count?: InstanceType<typeof TourCategoryCountAggregate>;
    @Field(() => TourCategoryAvgAggregate, {nullable:true})
    _avg?: InstanceType<typeof TourCategoryAvgAggregate>;
    @Field(() => TourCategorySumAggregate, {nullable:true})
    _sum?: InstanceType<typeof TourCategorySumAggregate>;
    @Field(() => TourCategoryMinAggregate, {nullable:true})
    _min?: InstanceType<typeof TourCategoryMinAggregate>;
    @Field(() => TourCategoryMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof TourCategoryMaxAggregate>;
}

@InputType()
export class TourCategoryMaxAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    name?: true;
    @Field(() => Boolean, {nullable:true})
    status?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
}

@ObjectType()
export class TourCategoryMaxAggregate {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    name?: string;
    @Field(() => Status, {nullable:true})
    status?: keyof typeof Status;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class TourCategoryMaxOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
}

@InputType()
export class TourCategoryMinAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    name?: true;
    @Field(() => Boolean, {nullable:true})
    status?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
}

@ObjectType()
export class TourCategoryMinAggregate {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    name?: string;
    @Field(() => Status, {nullable:true})
    status?: keyof typeof Status;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class TourCategoryMinOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
}

@InputType()
export class TourCategoryOrderByWithAggregationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
    @Field(() => TourCategoryCountOrderByAggregateInput, {nullable:true})
    _count?: InstanceType<typeof TourCategoryCountOrderByAggregateInput>;
    @Field(() => TourCategoryAvgOrderByAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof TourCategoryAvgOrderByAggregateInput>;
    @Field(() => TourCategoryMaxOrderByAggregateInput, {nullable:true})
    _max?: InstanceType<typeof TourCategoryMaxOrderByAggregateInput>;
    @Field(() => TourCategoryMinOrderByAggregateInput, {nullable:true})
    _min?: InstanceType<typeof TourCategoryMinOrderByAggregateInput>;
    @Field(() => TourCategorySumOrderByAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof TourCategorySumOrderByAggregateInput>;
}

@InputType()
export class TourCategoryOrderByWithRelationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
    @Field(() => TourTourCategoryOrderByRelationAggregateInput, {nullable:true})
    tourTourCategory?: InstanceType<typeof TourTourCategoryOrderByRelationAggregateInput>;
}

@InputType()
export class TourCategoryRelationFilter {
    @Field(() => TourCategoryWhereInput, {nullable:true})
    is?: InstanceType<typeof TourCategoryWhereInput>;
    @Field(() => TourCategoryWhereInput, {nullable:true})
    isNot?: InstanceType<typeof TourCategoryWhereInput>;
}

@InputType()
export class TourCategoryScalarWhereWithAggregatesInput {
    @Field(() => [TourCategoryScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<TourCategoryScalarWhereWithAggregatesInput>;
    @Field(() => [TourCategoryScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<TourCategoryScalarWhereWithAggregatesInput>;
    @Field(() => [TourCategoryScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<TourCategoryScalarWhereWithAggregatesInput>;
    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: InstanceType<typeof IntWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => EnumStatusWithAggregatesFilter, {nullable:true})
    status?: InstanceType<typeof EnumStatusWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
}

@InputType()
export class TourCategorySumAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
}

@ObjectType()
export class TourCategorySumAggregate {
    @Field(() => Int, {nullable:true})
    id?: number;
}

@InputType()
export class TourCategorySumOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
}

@InputType()
export class TourCategoryUncheckedCreateWithoutTourTourCategoryInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    name!: string;
    @Field(() => Status, {nullable:true})
    status?: keyof typeof Status;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class TourCategoryUncheckedCreateInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    name!: string;
    @Field(() => Status, {nullable:true})
    status?: keyof typeof Status;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => TourTourCategoryUncheckedCreateNestedManyWithoutTourCategoryInput, {nullable:true})
    tourTourCategory?: InstanceType<typeof TourTourCategoryUncheckedCreateNestedManyWithoutTourCategoryInput>;
}

@InputType()
export class TourCategoryUncheckedUpdateManyInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    name?: string;
    @Field(() => Status, {nullable:true})
    status?: keyof typeof Status;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class TourCategoryUncheckedUpdateWithoutTourTourCategoryInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    name?: string;
    @Field(() => Status, {nullable:true})
    status?: keyof typeof Status;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class TourCategoryUncheckedUpdateInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    name?: string;
    @Field(() => Status, {nullable:true})
    status?: keyof typeof Status;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => TourTourCategoryUncheckedUpdateManyWithoutTourCategoryInput, {nullable:true})
    tourTourCategory?: InstanceType<typeof TourTourCategoryUncheckedUpdateManyWithoutTourCategoryInput>;
}

@InputType()
export class TourCategoryUpdateManyMutationInput {
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    name?: string;
    @Field(() => Status, {nullable:true})
    status?: keyof typeof Status;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class TourCategoryUpdateOneRequiredWithoutTourTourCategoryInput {
    @Field(() => TourCategoryCreateWithoutTourTourCategoryInput, {nullable:true})
    @Type(() => TourCategoryCreateWithoutTourTourCategoryInput)
    create?: InstanceType<typeof TourCategoryCreateWithoutTourTourCategoryInput>;
    @Field(() => TourCategoryCreateOrConnectWithoutTourTourCategoryInput, {nullable:true})
    @Type(() => TourCategoryCreateOrConnectWithoutTourTourCategoryInput)
    connectOrCreate?: InstanceType<typeof TourCategoryCreateOrConnectWithoutTourTourCategoryInput>;
    @Field(() => TourCategoryUpsertWithoutTourTourCategoryInput, {nullable:true})
    @Type(() => TourCategoryUpsertWithoutTourTourCategoryInput)
    upsert?: InstanceType<typeof TourCategoryUpsertWithoutTourTourCategoryInput>;
    @Field(() => TourCategoryWhereUniqueInput, {nullable:true})
    @Type(() => TourCategoryWhereUniqueInput)
    connect?: InstanceType<typeof TourCategoryWhereUniqueInput>;
    @Field(() => TourCategoryUpdateWithoutTourTourCategoryInput, {nullable:true})
    @Type(() => TourCategoryUpdateWithoutTourTourCategoryInput)
    update?: InstanceType<typeof TourCategoryUpdateWithoutTourTourCategoryInput>;
}

@InputType()
export class TourCategoryUpdateWithoutTourTourCategoryInput {
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    name?: string;
    @Field(() => Status, {nullable:true})
    status?: keyof typeof Status;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class TourCategoryUpdateInput {
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    name?: string;
    @Field(() => Status, {nullable:true})
    status?: keyof typeof Status;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => TourTourCategoryUpdateManyWithoutTourCategoryInput, {nullable:true})
    tourTourCategory?: InstanceType<typeof TourTourCategoryUpdateManyWithoutTourCategoryInput>;
}

@InputType()
export class TourCategoryUpsertWithoutTourTourCategoryInput {
    @Field(() => TourCategoryUpdateWithoutTourTourCategoryInput, {nullable:false})
    @Type(() => TourCategoryUpdateWithoutTourTourCategoryInput)
    update!: InstanceType<typeof TourCategoryUpdateWithoutTourTourCategoryInput>;
    @Field(() => TourCategoryCreateWithoutTourTourCategoryInput, {nullable:false})
    @Type(() => TourCategoryCreateWithoutTourTourCategoryInput)
    create!: InstanceType<typeof TourCategoryCreateWithoutTourTourCategoryInput>;
}

@InputType()
export class TourCategoryWhereUniqueInput {
    @Field(() => Int, {nullable:true})
    id?: number;
}

@InputType()
export class TourCategoryWhereInput {
    @Field(() => [TourCategoryWhereInput], {nullable:true})
    AND?: Array<TourCategoryWhereInput>;
    @Field(() => [TourCategoryWhereInput], {nullable:true})
    OR?: Array<TourCategoryWhereInput>;
    @Field(() => [TourCategoryWhereInput], {nullable:true})
    NOT?: Array<TourCategoryWhereInput>;
    @Field(() => IntFilter, {nullable:true})
    id?: InstanceType<typeof IntFilter>;
    @Field(() => StringFilter, {nullable:true})
    name?: InstanceType<typeof StringFilter>;
    @Field(() => EnumStatusFilter, {nullable:true})
    status?: InstanceType<typeof EnumStatusFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => TourTourCategoryListRelationFilter, {nullable:true})
    tourTourCategory?: InstanceType<typeof TourTourCategoryListRelationFilter>;
}

@ObjectType()
export class TourCategory {
    @Field(() => ID, {nullable:false})
    id!: number;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => Status, {nullable:false,defaultValue:'ACTIVE'})
    status!: keyof typeof Status;
    @Field(() => Date, {nullable:false})
    createdAt!: Date;
    @Field(() => Date, {nullable:false})
    updatedAt!: Date;
    @Field(() => [TourTourCategory], {nullable:true})
    tourTourCategory?: Array<TourTourCategory>;
    @Field(() => TourCategoryCount, {nullable:false})
    _count?: InstanceType<typeof TourCategoryCount>;
}

@ArgsType()
export class UpdateManyTourCategoryArgs {
    @Field(() => TourCategoryUpdateManyMutationInput, {nullable:false})
    @Type(() => TourCategoryUpdateManyMutationInput)
    @ValidateNested({ each: true })
    data!: InstanceType<typeof TourCategoryUpdateManyMutationInput>;
    @Field(() => TourCategoryWhereInput, {nullable:true})
    @Type(() => TourCategoryWhereInput)
    @ValidateNested({ each: true })
    where?: InstanceType<typeof TourCategoryWhereInput>;
}

@ArgsType()
export class UpdateOneTourCategoryArgs {
    @Field(() => TourCategoryUpdateInput, {nullable:false})
    @Type(() => TourCategoryUpdateInput)
    @ValidateNested({ each: true })
    data!: InstanceType<typeof TourCategoryUpdateInput>;
    @Field(() => TourCategoryWhereUniqueInput, {nullable:false})
    @Type(() => TourCategoryWhereUniqueInput)
    @ValidateNested({ each: true })
    where!: InstanceType<typeof TourCategoryWhereUniqueInput>;
}

@ArgsType()
export class UpsertOneTourCategoryArgs {
    @Field(() => TourCategoryWhereUniqueInput, {nullable:false})
    @Type(() => TourCategoryWhereUniqueInput)
    @ValidateNested({ each: true })
    where!: InstanceType<typeof TourCategoryWhereUniqueInput>;
    @Field(() => TourCategoryCreateInput, {nullable:false})
    @Type(() => TourCategoryCreateInput)
    create!: InstanceType<typeof TourCategoryCreateInput>;
    @Field(() => TourCategoryUpdateInput, {nullable:false})
    @Type(() => TourCategoryUpdateInput)
    update!: InstanceType<typeof TourCategoryUpdateInput>;
}

@ObjectType()
export class AggregateTourCity {
    @Field(() => TourCityCountAggregate, {nullable:true})
    _count?: InstanceType<typeof TourCityCountAggregate>;
    @Field(() => TourCityAvgAggregate, {nullable:true})
    _avg?: InstanceType<typeof TourCityAvgAggregate>;
    @Field(() => TourCitySumAggregate, {nullable:true})
    _sum?: InstanceType<typeof TourCitySumAggregate>;
    @Field(() => TourCityMinAggregate, {nullable:true})
    _min?: InstanceType<typeof TourCityMinAggregate>;
    @Field(() => TourCityMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof TourCityMaxAggregate>;
}

@ArgsType()
export class CreateManyTourCityArgs {
    @Field(() => [TourCityCreateManyInput], {nullable:false})
    @Type(() => TourCityCreateManyInput)
    @ValidateNested({ each: true })
    data!: Array<TourCityCreateManyInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@ArgsType()
export class CreateOneTourCityArgs {
    @Field(() => TourCityCreateInput, {nullable:false})
    @Type(() => TourCityCreateInput)
    @ValidateNested({ each: true })
    data!: InstanceType<typeof TourCityCreateInput>;
}

@ArgsType()
export class DeleteManyTourCityArgs {
    @Field(() => TourCityWhereInput, {nullable:true})
    @Type(() => TourCityWhereInput)
    @ValidateNested({ each: true })
    where?: InstanceType<typeof TourCityWhereInput>;
}

@ArgsType()
export class DeleteOneTourCityArgs {
    @Field(() => TourCityWhereUniqueInput, {nullable:false})
    @Type(() => TourCityWhereUniqueInput)
    @ValidateNested({ each: true })
    where!: InstanceType<typeof TourCityWhereUniqueInput>;
}

@ArgsType()
export class FindFirstTourCityArgs {
    @Field(() => TourCityWhereInput, {nullable:true})
    @Type(() => TourCityWhereInput)
    @ValidateNested({ each: true })
    where?: InstanceType<typeof TourCityWhereInput>;
    @Field(() => [TourCityOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<TourCityOrderByWithRelationInput>;
    @Field(() => TourCityWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof TourCityWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [TourCityScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof TourCityScalarFieldEnum>;
}

@ArgsType()
export class FindManyTourCityArgs {
    @Field(() => TourCityWhereInput, {nullable:true})
    @Type(() => TourCityWhereInput)
    @ValidateNested({ each: true })
    where?: InstanceType<typeof TourCityWhereInput>;
    @Field(() => [TourCityOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<TourCityOrderByWithRelationInput>;
    @Field(() => TourCityWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof TourCityWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [TourCityScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof TourCityScalarFieldEnum>;
}

@ArgsType()
export class FindUniqueTourCityArgs {
    @Field(() => TourCityWhereUniqueInput, {nullable:false})
    @Type(() => TourCityWhereUniqueInput)
    @ValidateNested({ each: true })
    where!: InstanceType<typeof TourCityWhereUniqueInput>;
}

@ArgsType()
export class TourCityAggregateArgs {
    @Field(() => TourCityWhereInput, {nullable:true})
    @Type(() => TourCityWhereInput)
    @ValidateNested({ each: true })
    where?: InstanceType<typeof TourCityWhereInput>;
    @Field(() => [TourCityOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<TourCityOrderByWithRelationInput>;
    @Field(() => TourCityWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof TourCityWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => TourCityCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof TourCityCountAggregateInput>;
    @Field(() => TourCityAvgAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof TourCityAvgAggregateInput>;
    @Field(() => TourCitySumAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof TourCitySumAggregateInput>;
    @Field(() => TourCityMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof TourCityMinAggregateInput>;
    @Field(() => TourCityMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof TourCityMaxAggregateInput>;
}

@InputType()
export class TourCityAvgAggregateInput {
    @Field(() => Boolean, {nullable:true})
    tourId?: true;
    @Field(() => Boolean, {nullable:true})
    cityId?: true;
}

@ObjectType()
export class TourCityAvgAggregate {
    @Field(() => Float, {nullable:true})
    tourId?: number;
    @Field(() => Float, {nullable:true})
    cityId?: number;
}

@InputType()
export class TourCityAvgOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    tourId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    cityId?: keyof typeof SortOrder;
}

@InputType()
export class TourCityCountAggregateInput {
    @Field(() => Boolean, {nullable:true})
    status?: true;
    @Field(() => Boolean, {nullable:true})
    tourId?: true;
    @Field(() => Boolean, {nullable:true})
    cityId?: true;
    @Field(() => Boolean, {nullable:true})
    _all?: true;
}

@ObjectType()
export class TourCityCountAggregate {
    @Field(() => Int, {nullable:false})
    status!: number;
    @Field(() => Int, {nullable:false})
    tourId!: number;
    @Field(() => Int, {nullable:false})
    cityId!: number;
    @Field(() => Int, {nullable:false})
    _all!: number;
}

@InputType()
export class TourCityCountOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    tourId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    cityId?: keyof typeof SortOrder;
}

@InputType()
export class TourCityCreateManyCityInputEnvelope {
    @Field(() => [TourCityCreateManyCityInput], {nullable:false})
    @Type(() => TourCityCreateManyCityInput)
    data!: Array<TourCityCreateManyCityInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@InputType()
export class TourCityCreateManyCityInput {
    @Field(() => Status, {nullable:true})
    status?: keyof typeof Status;
    @Field(() => Int, {nullable:false})
    tourId!: number;
}

@InputType()
export class TourCityCreateManyTourInputEnvelope {
    @Field(() => [TourCityCreateManyTourInput], {nullable:false})
    @Type(() => TourCityCreateManyTourInput)
    data!: Array<TourCityCreateManyTourInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@InputType()
export class TourCityCreateManyTourInput {
    @Field(() => Status, {nullable:true})
    status?: keyof typeof Status;
    @Field(() => Int, {nullable:false})
    cityId!: number;
}

@InputType()
export class TourCityCreateManyInput {
    @Field(() => Status, {nullable:true})
    status?: keyof typeof Status;
    @Field(() => Int, {nullable:false})
    tourId!: number;
    @Field(() => Int, {nullable:false})
    cityId!: number;
}

@InputType()
export class TourCityCreateNestedManyWithoutCityInput {
    @Field(() => [TourCityCreateWithoutCityInput], {nullable:true})
    @Type(() => TourCityCreateWithoutCityInput)
    create?: Array<TourCityCreateWithoutCityInput>;
    @Field(() => [TourCityCreateOrConnectWithoutCityInput], {nullable:true})
    @Type(() => TourCityCreateOrConnectWithoutCityInput)
    connectOrCreate?: Array<TourCityCreateOrConnectWithoutCityInput>;
    @Field(() => TourCityCreateManyCityInputEnvelope, {nullable:true})
    @Type(() => TourCityCreateManyCityInputEnvelope)
    createMany?: InstanceType<typeof TourCityCreateManyCityInputEnvelope>;
    @Field(() => [TourCityWhereUniqueInput], {nullable:true})
    @Type(() => TourCityWhereUniqueInput)
    connect?: Array<TourCityWhereUniqueInput>;
}

@InputType()
export class TourCityCreateNestedManyWithoutTourInput {
    @Field(() => [TourCityCreateWithoutTourInput], {nullable:true})
    @Type(() => TourCityCreateWithoutTourInput)
    create?: Array<TourCityCreateWithoutTourInput>;
    @Field(() => [TourCityCreateOrConnectWithoutTourInput], {nullable:true})
    @Type(() => TourCityCreateOrConnectWithoutTourInput)
    connectOrCreate?: Array<TourCityCreateOrConnectWithoutTourInput>;
    @Field(() => TourCityCreateManyTourInputEnvelope, {nullable:true})
    @Type(() => TourCityCreateManyTourInputEnvelope)
    createMany?: InstanceType<typeof TourCityCreateManyTourInputEnvelope>;
    @Field(() => [TourCityWhereUniqueInput], {nullable:true})
    @Type(() => TourCityWhereUniqueInput)
    connect?: Array<TourCityWhereUniqueInput>;
}

@InputType()
export class TourCityCreateOrConnectWithoutCityInput {
    @Field(() => TourCityWhereUniqueInput, {nullable:false})
    @Type(() => TourCityWhereUniqueInput)
    where!: InstanceType<typeof TourCityWhereUniqueInput>;
    @Field(() => TourCityCreateWithoutCityInput, {nullable:false})
    @Type(() => TourCityCreateWithoutCityInput)
    create!: InstanceType<typeof TourCityCreateWithoutCityInput>;
}

@InputType()
export class TourCityCreateOrConnectWithoutTourInput {
    @Field(() => TourCityWhereUniqueInput, {nullable:false})
    @Type(() => TourCityWhereUniqueInput)
    where!: InstanceType<typeof TourCityWhereUniqueInput>;
    @Field(() => TourCityCreateWithoutTourInput, {nullable:false})
    @Type(() => TourCityCreateWithoutTourInput)
    create!: InstanceType<typeof TourCityCreateWithoutTourInput>;
}

@InputType()
export class TourCityCreateWithoutCityInput {
    @Field(() => Status, {nullable:true})
    status?: keyof typeof Status;
    @Field(() => TourCreateNestedOneWithoutTourCityInput, {nullable:true})
    tour?: InstanceType<typeof TourCreateNestedOneWithoutTourCityInput>;
}

@InputType()
export class TourCityCreateWithoutTourInput {
    @Field(() => Status, {nullable:true})
    status?: keyof typeof Status;
    @Field(() => CityCreateNestedOneWithoutTourCityInput, {nullable:false})
    city!: InstanceType<typeof CityCreateNestedOneWithoutTourCityInput>;
}

@InputType()
export class TourCityCreateInput {
    @Field(() => Status, {nullable:true})
    status?: keyof typeof Status;
    @Field(() => TourCreateNestedOneWithoutTourCityInput, {nullable:true})
    tour?: InstanceType<typeof TourCreateNestedOneWithoutTourCityInput>;
    @Field(() => CityCreateNestedOneWithoutTourCityInput, {nullable:false})
    city!: InstanceType<typeof CityCreateNestedOneWithoutTourCityInput>;
}

@ArgsType()
export class TourCityGroupByArgs {
    @Field(() => TourCityWhereInput, {nullable:true})
    @Type(() => TourCityWhereInput)
    @ValidateNested({ each: true })
    where?: InstanceType<typeof TourCityWhereInput>;
    @Field(() => [TourCityOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<TourCityOrderByWithAggregationInput>;
    @Field(() => [TourCityScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof TourCityScalarFieldEnum>;
    @Field(() => TourCityScalarWhereWithAggregatesInput, {nullable:true})
    having?: InstanceType<typeof TourCityScalarWhereWithAggregatesInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => TourCityCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof TourCityCountAggregateInput>;
    @Field(() => TourCityAvgAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof TourCityAvgAggregateInput>;
    @Field(() => TourCitySumAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof TourCitySumAggregateInput>;
    @Field(() => TourCityMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof TourCityMinAggregateInput>;
    @Field(() => TourCityMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof TourCityMaxAggregateInput>;
}

@ObjectType()
export class TourCityGroupBy {
    @Field(() => Status, {nullable:false})
    status!: keyof typeof Status;
    @Field(() => Int, {nullable:false})
    tourId!: number;
    @Field(() => Int, {nullable:false})
    cityId!: number;
    @Field(() => TourCityCountAggregate, {nullable:true})
    _count?: InstanceType<typeof TourCityCountAggregate>;
    @Field(() => TourCityAvgAggregate, {nullable:true})
    _avg?: InstanceType<typeof TourCityAvgAggregate>;
    @Field(() => TourCitySumAggregate, {nullable:true})
    _sum?: InstanceType<typeof TourCitySumAggregate>;
    @Field(() => TourCityMinAggregate, {nullable:true})
    _min?: InstanceType<typeof TourCityMinAggregate>;
    @Field(() => TourCityMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof TourCityMaxAggregate>;
}

@InputType()
export class TourCityListRelationFilter {
    @Field(() => TourCityWhereInput, {nullable:true})
    every?: InstanceType<typeof TourCityWhereInput>;
    @Field(() => TourCityWhereInput, {nullable:true})
    some?: InstanceType<typeof TourCityWhereInput>;
    @Field(() => TourCityWhereInput, {nullable:true})
    none?: InstanceType<typeof TourCityWhereInput>;
}

@InputType()
export class TourCityMaxAggregateInput {
    @Field(() => Boolean, {nullable:true})
    status?: true;
    @Field(() => Boolean, {nullable:true})
    tourId?: true;
    @Field(() => Boolean, {nullable:true})
    cityId?: true;
}

@ObjectType()
export class TourCityMaxAggregate {
    @Field(() => Status, {nullable:true})
    status?: keyof typeof Status;
    @Field(() => Int, {nullable:true})
    tourId?: number;
    @Field(() => Int, {nullable:true})
    cityId?: number;
}

@InputType()
export class TourCityMaxOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    tourId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    cityId?: keyof typeof SortOrder;
}

@InputType()
export class TourCityMinAggregateInput {
    @Field(() => Boolean, {nullable:true})
    status?: true;
    @Field(() => Boolean, {nullable:true})
    tourId?: true;
    @Field(() => Boolean, {nullable:true})
    cityId?: true;
}

@ObjectType()
export class TourCityMinAggregate {
    @Field(() => Status, {nullable:true})
    status?: keyof typeof Status;
    @Field(() => Int, {nullable:true})
    tourId?: number;
    @Field(() => Int, {nullable:true})
    cityId?: number;
}

@InputType()
export class TourCityMinOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    tourId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    cityId?: keyof typeof SortOrder;
}

@InputType()
export class TourCityOrderByRelationAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    _count?: keyof typeof SortOrder;
}

@InputType()
export class TourCityOrderByWithAggregationInput {
    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    tourId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    cityId?: keyof typeof SortOrder;
    @Field(() => TourCityCountOrderByAggregateInput, {nullable:true})
    _count?: InstanceType<typeof TourCityCountOrderByAggregateInput>;
    @Field(() => TourCityAvgOrderByAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof TourCityAvgOrderByAggregateInput>;
    @Field(() => TourCityMaxOrderByAggregateInput, {nullable:true})
    _max?: InstanceType<typeof TourCityMaxOrderByAggregateInput>;
    @Field(() => TourCityMinOrderByAggregateInput, {nullable:true})
    _min?: InstanceType<typeof TourCityMinOrderByAggregateInput>;
    @Field(() => TourCitySumOrderByAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof TourCitySumOrderByAggregateInput>;
}

@InputType()
export class TourCityOrderByWithRelationInput {
    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;
    @Field(() => TourOrderByWithRelationInput, {nullable:true})
    tour?: InstanceType<typeof TourOrderByWithRelationInput>;
    @Field(() => SortOrder, {nullable:true})
    tourId?: keyof typeof SortOrder;
    @Field(() => CityOrderByWithRelationInput, {nullable:true})
    city?: InstanceType<typeof CityOrderByWithRelationInput>;
    @Field(() => SortOrder, {nullable:true})
    cityId?: keyof typeof SortOrder;
}

@InputType()
export class TourCityScalarWhereWithAggregatesInput {
    @Field(() => [TourCityScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<TourCityScalarWhereWithAggregatesInput>;
    @Field(() => [TourCityScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<TourCityScalarWhereWithAggregatesInput>;
    @Field(() => [TourCityScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<TourCityScalarWhereWithAggregatesInput>;
    @Field(() => EnumStatusWithAggregatesFilter, {nullable:true})
    status?: InstanceType<typeof EnumStatusWithAggregatesFilter>;
    @Field(() => IntWithAggregatesFilter, {nullable:true})
    tourId?: InstanceType<typeof IntWithAggregatesFilter>;
    @Field(() => IntWithAggregatesFilter, {nullable:true})
    cityId?: InstanceType<typeof IntWithAggregatesFilter>;
}

@InputType()
export class TourCityScalarWhereInput {
    @Field(() => [TourCityScalarWhereInput], {nullable:true})
    AND?: Array<TourCityScalarWhereInput>;
    @Field(() => [TourCityScalarWhereInput], {nullable:true})
    OR?: Array<TourCityScalarWhereInput>;
    @Field(() => [TourCityScalarWhereInput], {nullable:true})
    NOT?: Array<TourCityScalarWhereInput>;
    @Field(() => EnumStatusFilter, {nullable:true})
    status?: InstanceType<typeof EnumStatusFilter>;
    @Field(() => IntFilter, {nullable:true})
    tourId?: InstanceType<typeof IntFilter>;
    @Field(() => IntFilter, {nullable:true})
    cityId?: InstanceType<typeof IntFilter>;
}

@InputType()
export class TourCitySumAggregateInput {
    @Field(() => Boolean, {nullable:true})
    tourId?: true;
    @Field(() => Boolean, {nullable:true})
    cityId?: true;
}

@ObjectType()
export class TourCitySumAggregate {
    @Field(() => Int, {nullable:true})
    tourId?: number;
    @Field(() => Int, {nullable:true})
    cityId?: number;
}

@InputType()
export class TourCitySumOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    tourId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    cityId?: keyof typeof SortOrder;
}

@InputType()
export class TourCityTourIdCityIdCompoundUniqueInput {
    @Field(() => Int, {nullable:false})
    tourId!: number;
    @Field(() => Int, {nullable:false})
    cityId!: number;
}

@InputType()
export class TourCityUncheckedCreateNestedManyWithoutCityInput {
    @Field(() => [TourCityCreateWithoutCityInput], {nullable:true})
    @Type(() => TourCityCreateWithoutCityInput)
    create?: Array<TourCityCreateWithoutCityInput>;
    @Field(() => [TourCityCreateOrConnectWithoutCityInput], {nullable:true})
    @Type(() => TourCityCreateOrConnectWithoutCityInput)
    connectOrCreate?: Array<TourCityCreateOrConnectWithoutCityInput>;
    @Field(() => TourCityCreateManyCityInputEnvelope, {nullable:true})
    @Type(() => TourCityCreateManyCityInputEnvelope)
    createMany?: InstanceType<typeof TourCityCreateManyCityInputEnvelope>;
    @Field(() => [TourCityWhereUniqueInput], {nullable:true})
    @Type(() => TourCityWhereUniqueInput)
    connect?: Array<TourCityWhereUniqueInput>;
}

@InputType()
export class TourCityUncheckedCreateNestedManyWithoutTourInput {
    @Field(() => [TourCityCreateWithoutTourInput], {nullable:true})
    @Type(() => TourCityCreateWithoutTourInput)
    create?: Array<TourCityCreateWithoutTourInput>;
    @Field(() => [TourCityCreateOrConnectWithoutTourInput], {nullable:true})
    @Type(() => TourCityCreateOrConnectWithoutTourInput)
    connectOrCreate?: Array<TourCityCreateOrConnectWithoutTourInput>;
    @Field(() => TourCityCreateManyTourInputEnvelope, {nullable:true})
    @Type(() => TourCityCreateManyTourInputEnvelope)
    createMany?: InstanceType<typeof TourCityCreateManyTourInputEnvelope>;
    @Field(() => [TourCityWhereUniqueInput], {nullable:true})
    @Type(() => TourCityWhereUniqueInput)
    connect?: Array<TourCityWhereUniqueInput>;
}

@InputType()
export class TourCityUncheckedCreateWithoutCityInput {
    @Field(() => Status, {nullable:true})
    status?: keyof typeof Status;
    @Field(() => Int, {nullable:false})
    tourId!: number;
}

@InputType()
export class TourCityUncheckedCreateWithoutTourInput {
    @Field(() => Status, {nullable:true})
    status?: keyof typeof Status;
    @Field(() => Int, {nullable:false})
    cityId!: number;
}

@InputType()
export class TourCityUncheckedCreateInput {
    @Field(() => Status, {nullable:true})
    status?: keyof typeof Status;
    @Field(() => Int, {nullable:false})
    tourId!: number;
    @Field(() => Int, {nullable:false})
    cityId!: number;
}

@InputType()
export class TourCityUncheckedUpdateManyWithoutCityInput {
    @Field(() => [TourCityCreateWithoutCityInput], {nullable:true})
    @Type(() => TourCityCreateWithoutCityInput)
    create?: Array<TourCityCreateWithoutCityInput>;
    @Field(() => [TourCityCreateOrConnectWithoutCityInput], {nullable:true})
    @Type(() => TourCityCreateOrConnectWithoutCityInput)
    connectOrCreate?: Array<TourCityCreateOrConnectWithoutCityInput>;
    @Field(() => [TourCityUpsertWithWhereUniqueWithoutCityInput], {nullable:true})
    @Type(() => TourCityUpsertWithWhereUniqueWithoutCityInput)
    upsert?: Array<TourCityUpsertWithWhereUniqueWithoutCityInput>;
    @Field(() => TourCityCreateManyCityInputEnvelope, {nullable:true})
    @Type(() => TourCityCreateManyCityInputEnvelope)
    createMany?: InstanceType<typeof TourCityCreateManyCityInputEnvelope>;
    @Field(() => [TourCityWhereUniqueInput], {nullable:true})
    @Type(() => TourCityWhereUniqueInput)
    set?: Array<TourCityWhereUniqueInput>;
    @Field(() => [TourCityWhereUniqueInput], {nullable:true})
    @Type(() => TourCityWhereUniqueInput)
    disconnect?: Array<TourCityWhereUniqueInput>;
    @Field(() => [TourCityWhereUniqueInput], {nullable:true})
    @Type(() => TourCityWhereUniqueInput)
    delete?: Array<TourCityWhereUniqueInput>;
    @Field(() => [TourCityWhereUniqueInput], {nullable:true})
    @Type(() => TourCityWhereUniqueInput)
    connect?: Array<TourCityWhereUniqueInput>;
    @Field(() => [TourCityUpdateWithWhereUniqueWithoutCityInput], {nullable:true})
    @Type(() => TourCityUpdateWithWhereUniqueWithoutCityInput)
    update?: Array<TourCityUpdateWithWhereUniqueWithoutCityInput>;
    @Field(() => [TourCityUpdateManyWithWhereWithoutCityInput], {nullable:true})
    @Type(() => TourCityUpdateManyWithWhereWithoutCityInput)
    updateMany?: Array<TourCityUpdateManyWithWhereWithoutCityInput>;
    @Field(() => [TourCityScalarWhereInput], {nullable:true})
    @Type(() => TourCityScalarWhereInput)
    deleteMany?: Array<TourCityScalarWhereInput>;
}

@InputType()
export class TourCityUncheckedUpdateManyWithoutTourCityInput {
    @Field(() => Status, {nullable:true})
    status?: keyof typeof Status;
    @Field(() => Int, {nullable:true})
    cityId?: number;
}

@InputType()
export class TourCityUncheckedUpdateManyWithoutTourInput {
    @Field(() => [TourCityCreateWithoutTourInput], {nullable:true})
    @Type(() => TourCityCreateWithoutTourInput)
    create?: Array<TourCityCreateWithoutTourInput>;
    @Field(() => [TourCityCreateOrConnectWithoutTourInput], {nullable:true})
    @Type(() => TourCityCreateOrConnectWithoutTourInput)
    connectOrCreate?: Array<TourCityCreateOrConnectWithoutTourInput>;
    @Field(() => [TourCityUpsertWithWhereUniqueWithoutTourInput], {nullable:true})
    @Type(() => TourCityUpsertWithWhereUniqueWithoutTourInput)
    upsert?: Array<TourCityUpsertWithWhereUniqueWithoutTourInput>;
    @Field(() => TourCityCreateManyTourInputEnvelope, {nullable:true})
    @Type(() => TourCityCreateManyTourInputEnvelope)
    createMany?: InstanceType<typeof TourCityCreateManyTourInputEnvelope>;
    @Field(() => [TourCityWhereUniqueInput], {nullable:true})
    @Type(() => TourCityWhereUniqueInput)
    set?: Array<TourCityWhereUniqueInput>;
    @Field(() => [TourCityWhereUniqueInput], {nullable:true})
    @Type(() => TourCityWhereUniqueInput)
    disconnect?: Array<TourCityWhereUniqueInput>;
    @Field(() => [TourCityWhereUniqueInput], {nullable:true})
    @Type(() => TourCityWhereUniqueInput)
    delete?: Array<TourCityWhereUniqueInput>;
    @Field(() => [TourCityWhereUniqueInput], {nullable:true})
    @Type(() => TourCityWhereUniqueInput)
    connect?: Array<TourCityWhereUniqueInput>;
    @Field(() => [TourCityUpdateWithWhereUniqueWithoutTourInput], {nullable:true})
    @Type(() => TourCityUpdateWithWhereUniqueWithoutTourInput)
    update?: Array<TourCityUpdateWithWhereUniqueWithoutTourInput>;
    @Field(() => [TourCityUpdateManyWithWhereWithoutTourInput], {nullable:true})
    @Type(() => TourCityUpdateManyWithWhereWithoutTourInput)
    updateMany?: Array<TourCityUpdateManyWithWhereWithoutTourInput>;
    @Field(() => [TourCityScalarWhereInput], {nullable:true})
    @Type(() => TourCityScalarWhereInput)
    deleteMany?: Array<TourCityScalarWhereInput>;
}

@InputType()
export class TourCityUncheckedUpdateManyInput {
    @Field(() => Status, {nullable:true})
    status?: keyof typeof Status;
    @Field(() => Int, {nullable:true})
    tourId?: number;
    @Field(() => Int, {nullable:true})
    cityId?: number;
}

@InputType()
export class TourCityUncheckedUpdateWithoutCityInput {
    @Field(() => Status, {nullable:true})
    status?: keyof typeof Status;
    @Field(() => Int, {nullable:true})
    tourId?: number;
}

@InputType()
export class TourCityUncheckedUpdateWithoutTourInput {
    @Field(() => Status, {nullable:true})
    status?: keyof typeof Status;
    @Field(() => Int, {nullable:true})
    cityId?: number;
}

@InputType()
export class TourCityUncheckedUpdateInput {
    @Field(() => Status, {nullable:true})
    status?: keyof typeof Status;
    @Field(() => Int, {nullable:true})
    tourId?: number;
    @Field(() => Int, {nullable:true})
    cityId?: number;
}

@InputType()
export class TourCityUpdateManyMutationInput {
    @Field(() => Status, {nullable:true})
    status?: keyof typeof Status;
}

@InputType()
export class TourCityUpdateManyWithWhereWithoutCityInput {
    @Field(() => TourCityScalarWhereInput, {nullable:false})
    @Type(() => TourCityScalarWhereInput)
    where!: InstanceType<typeof TourCityScalarWhereInput>;
    @Field(() => TourCityUpdateManyMutationInput, {nullable:false})
    @Type(() => TourCityUpdateManyMutationInput)
    data!: InstanceType<typeof TourCityUpdateManyMutationInput>;
}

@InputType()
export class TourCityUpdateManyWithWhereWithoutTourInput {
    @Field(() => TourCityScalarWhereInput, {nullable:false})
    @Type(() => TourCityScalarWhereInput)
    where!: InstanceType<typeof TourCityScalarWhereInput>;
    @Field(() => TourCityUpdateManyMutationInput, {nullable:false})
    @Type(() => TourCityUpdateManyMutationInput)
    data!: InstanceType<typeof TourCityUpdateManyMutationInput>;
}

@InputType()
export class TourCityUpdateManyWithoutCityInput {
    @Field(() => [TourCityCreateWithoutCityInput], {nullable:true})
    @Type(() => TourCityCreateWithoutCityInput)
    create?: Array<TourCityCreateWithoutCityInput>;
    @Field(() => [TourCityCreateOrConnectWithoutCityInput], {nullable:true})
    @Type(() => TourCityCreateOrConnectWithoutCityInput)
    connectOrCreate?: Array<TourCityCreateOrConnectWithoutCityInput>;
    @Field(() => [TourCityUpsertWithWhereUniqueWithoutCityInput], {nullable:true})
    @Type(() => TourCityUpsertWithWhereUniqueWithoutCityInput)
    upsert?: Array<TourCityUpsertWithWhereUniqueWithoutCityInput>;
    @Field(() => TourCityCreateManyCityInputEnvelope, {nullable:true})
    @Type(() => TourCityCreateManyCityInputEnvelope)
    createMany?: InstanceType<typeof TourCityCreateManyCityInputEnvelope>;
    @Field(() => [TourCityWhereUniqueInput], {nullable:true})
    @Type(() => TourCityWhereUniqueInput)
    set?: Array<TourCityWhereUniqueInput>;
    @Field(() => [TourCityWhereUniqueInput], {nullable:true})
    @Type(() => TourCityWhereUniqueInput)
    disconnect?: Array<TourCityWhereUniqueInput>;
    @Field(() => [TourCityWhereUniqueInput], {nullable:true})
    @Type(() => TourCityWhereUniqueInput)
    delete?: Array<TourCityWhereUniqueInput>;
    @Field(() => [TourCityWhereUniqueInput], {nullable:true})
    @Type(() => TourCityWhereUniqueInput)
    connect?: Array<TourCityWhereUniqueInput>;
    @Field(() => [TourCityUpdateWithWhereUniqueWithoutCityInput], {nullable:true})
    @Type(() => TourCityUpdateWithWhereUniqueWithoutCityInput)
    update?: Array<TourCityUpdateWithWhereUniqueWithoutCityInput>;
    @Field(() => [TourCityUpdateManyWithWhereWithoutCityInput], {nullable:true})
    @Type(() => TourCityUpdateManyWithWhereWithoutCityInput)
    updateMany?: Array<TourCityUpdateManyWithWhereWithoutCityInput>;
    @Field(() => [TourCityScalarWhereInput], {nullable:true})
    @Type(() => TourCityScalarWhereInput)
    deleteMany?: Array<TourCityScalarWhereInput>;
}

@InputType()
export class TourCityUpdateManyWithoutTourInput {
    @Field(() => [TourCityCreateWithoutTourInput], {nullable:true})
    @Type(() => TourCityCreateWithoutTourInput)
    create?: Array<TourCityCreateWithoutTourInput>;
    @Field(() => [TourCityCreateOrConnectWithoutTourInput], {nullable:true})
    @Type(() => TourCityCreateOrConnectWithoutTourInput)
    connectOrCreate?: Array<TourCityCreateOrConnectWithoutTourInput>;
    @Field(() => [TourCityUpsertWithWhereUniqueWithoutTourInput], {nullable:true})
    @Type(() => TourCityUpsertWithWhereUniqueWithoutTourInput)
    upsert?: Array<TourCityUpsertWithWhereUniqueWithoutTourInput>;
    @Field(() => TourCityCreateManyTourInputEnvelope, {nullable:true})
    @Type(() => TourCityCreateManyTourInputEnvelope)
    createMany?: InstanceType<typeof TourCityCreateManyTourInputEnvelope>;
    @Field(() => [TourCityWhereUniqueInput], {nullable:true})
    @Type(() => TourCityWhereUniqueInput)
    set?: Array<TourCityWhereUniqueInput>;
    @Field(() => [TourCityWhereUniqueInput], {nullable:true})
    @Type(() => TourCityWhereUniqueInput)
    disconnect?: Array<TourCityWhereUniqueInput>;
    @Field(() => [TourCityWhereUniqueInput], {nullable:true})
    @Type(() => TourCityWhereUniqueInput)
    delete?: Array<TourCityWhereUniqueInput>;
    @Field(() => [TourCityWhereUniqueInput], {nullable:true})
    @Type(() => TourCityWhereUniqueInput)
    connect?: Array<TourCityWhereUniqueInput>;
    @Field(() => [TourCityUpdateWithWhereUniqueWithoutTourInput], {nullable:true})
    @Type(() => TourCityUpdateWithWhereUniqueWithoutTourInput)
    update?: Array<TourCityUpdateWithWhereUniqueWithoutTourInput>;
    @Field(() => [TourCityUpdateManyWithWhereWithoutTourInput], {nullable:true})
    @Type(() => TourCityUpdateManyWithWhereWithoutTourInput)
    updateMany?: Array<TourCityUpdateManyWithWhereWithoutTourInput>;
    @Field(() => [TourCityScalarWhereInput], {nullable:true})
    @Type(() => TourCityScalarWhereInput)
    deleteMany?: Array<TourCityScalarWhereInput>;
}

@InputType()
export class TourCityUpdateWithWhereUniqueWithoutCityInput {
    @Field(() => TourCityWhereUniqueInput, {nullable:false})
    @Type(() => TourCityWhereUniqueInput)
    where!: InstanceType<typeof TourCityWhereUniqueInput>;
    @Field(() => TourCityUpdateWithoutCityInput, {nullable:false})
    @Type(() => TourCityUpdateWithoutCityInput)
    data!: InstanceType<typeof TourCityUpdateWithoutCityInput>;
}

@InputType()
export class TourCityUpdateWithWhereUniqueWithoutTourInput {
    @Field(() => TourCityWhereUniqueInput, {nullable:false})
    @Type(() => TourCityWhereUniqueInput)
    where!: InstanceType<typeof TourCityWhereUniqueInput>;
    @Field(() => TourCityUpdateWithoutTourInput, {nullable:false})
    @Type(() => TourCityUpdateWithoutTourInput)
    data!: InstanceType<typeof TourCityUpdateWithoutTourInput>;
}

@InputType()
export class TourCityUpdateWithoutCityInput {
    @Field(() => Status, {nullable:true})
    status?: keyof typeof Status;
    @Field(() => TourUpdateOneWithoutTourCityInput, {nullable:true})
    tour?: InstanceType<typeof TourUpdateOneWithoutTourCityInput>;
}

@InputType()
export class TourCityUpdateWithoutTourInput {
    @Field(() => Status, {nullable:true})
    status?: keyof typeof Status;
    @Field(() => CityUpdateOneRequiredWithoutTourCityInput, {nullable:true})
    city?: InstanceType<typeof CityUpdateOneRequiredWithoutTourCityInput>;
}

@InputType()
export class TourCityUpdateInput {
    @Field(() => Status, {nullable:true})
    status?: keyof typeof Status;
    @Field(() => TourUpdateOneWithoutTourCityInput, {nullable:true})
    tour?: InstanceType<typeof TourUpdateOneWithoutTourCityInput>;
    @Field(() => CityUpdateOneRequiredWithoutTourCityInput, {nullable:true})
    city?: InstanceType<typeof CityUpdateOneRequiredWithoutTourCityInput>;
}

@InputType()
export class TourCityUpsertWithWhereUniqueWithoutCityInput {
    @Field(() => TourCityWhereUniqueInput, {nullable:false})
    @Type(() => TourCityWhereUniqueInput)
    where!: InstanceType<typeof TourCityWhereUniqueInput>;
    @Field(() => TourCityUpdateWithoutCityInput, {nullable:false})
    @Type(() => TourCityUpdateWithoutCityInput)
    update!: InstanceType<typeof TourCityUpdateWithoutCityInput>;
    @Field(() => TourCityCreateWithoutCityInput, {nullable:false})
    @Type(() => TourCityCreateWithoutCityInput)
    create!: InstanceType<typeof TourCityCreateWithoutCityInput>;
}

@InputType()
export class TourCityUpsertWithWhereUniqueWithoutTourInput {
    @Field(() => TourCityWhereUniqueInput, {nullable:false})
    @Type(() => TourCityWhereUniqueInput)
    where!: InstanceType<typeof TourCityWhereUniqueInput>;
    @Field(() => TourCityUpdateWithoutTourInput, {nullable:false})
    @Type(() => TourCityUpdateWithoutTourInput)
    update!: InstanceType<typeof TourCityUpdateWithoutTourInput>;
    @Field(() => TourCityCreateWithoutTourInput, {nullable:false})
    @Type(() => TourCityCreateWithoutTourInput)
    create!: InstanceType<typeof TourCityCreateWithoutTourInput>;
}

@InputType()
export class TourCityWhereUniqueInput {
    @Field(() => TourCityTourIdCityIdCompoundUniqueInput, {nullable:true})
    tourId_cityId?: InstanceType<typeof TourCityTourIdCityIdCompoundUniqueInput>;
}

@InputType()
export class TourCityWhereInput {
    @Field(() => [TourCityWhereInput], {nullable:true})
    AND?: Array<TourCityWhereInput>;
    @Field(() => [TourCityWhereInput], {nullable:true})
    OR?: Array<TourCityWhereInput>;
    @Field(() => [TourCityWhereInput], {nullable:true})
    NOT?: Array<TourCityWhereInput>;
    @Field(() => EnumStatusFilter, {nullable:true})
    status?: InstanceType<typeof EnumStatusFilter>;
    @Field(() => TourRelationFilter, {nullable:true})
    tour?: InstanceType<typeof TourRelationFilter>;
    @Field(() => IntFilter, {nullable:true})
    tourId?: InstanceType<typeof IntFilter>;
    @Field(() => CityRelationFilter, {nullable:true})
    city?: InstanceType<typeof CityRelationFilter>;
    @Field(() => IntFilter, {nullable:true})
    cityId?: InstanceType<typeof IntFilter>;
}

@ObjectType()
export class TourCity {
    @Field(() => Status, {nullable:false,defaultValue:'ACTIVE'})
    status!: keyof typeof Status;
    @Field(() => Tour, {nullable:true})
    tour?: InstanceType<typeof Tour> | null;
    @Field(() => Int, {nullable:false})
    tourId!: number;
    @Field(() => City, {nullable:false})
    city?: InstanceType<typeof City>;
    @Field(() => Int, {nullable:false})
    cityId!: number;
}

@ArgsType()
export class UpdateManyTourCityArgs {
    @Field(() => TourCityUpdateManyMutationInput, {nullable:false})
    @Type(() => TourCityUpdateManyMutationInput)
    @ValidateNested({ each: true })
    data!: InstanceType<typeof TourCityUpdateManyMutationInput>;
    @Field(() => TourCityWhereInput, {nullable:true})
    @Type(() => TourCityWhereInput)
    @ValidateNested({ each: true })
    where?: InstanceType<typeof TourCityWhereInput>;
}

@ArgsType()
export class UpdateOneTourCityArgs {
    @Field(() => TourCityUpdateInput, {nullable:false})
    @Type(() => TourCityUpdateInput)
    @ValidateNested({ each: true })
    data!: InstanceType<typeof TourCityUpdateInput>;
    @Field(() => TourCityWhereUniqueInput, {nullable:false})
    @Type(() => TourCityWhereUniqueInput)
    @ValidateNested({ each: true })
    where!: InstanceType<typeof TourCityWhereUniqueInput>;
}

@ArgsType()
export class UpsertOneTourCityArgs {
    @Field(() => TourCityWhereUniqueInput, {nullable:false})
    @Type(() => TourCityWhereUniqueInput)
    @ValidateNested({ each: true })
    where!: InstanceType<typeof TourCityWhereUniqueInput>;
    @Field(() => TourCityCreateInput, {nullable:false})
    @Type(() => TourCityCreateInput)
    create!: InstanceType<typeof TourCityCreateInput>;
    @Field(() => TourCityUpdateInput, {nullable:false})
    @Type(() => TourCityUpdateInput)
    update!: InstanceType<typeof TourCityUpdateInput>;
}

@ObjectType()
export class AggregateTourLanguage {
    @Field(() => TourLanguageCountAggregate, {nullable:true})
    _count?: InstanceType<typeof TourLanguageCountAggregate>;
    @Field(() => TourLanguageAvgAggregate, {nullable:true})
    _avg?: InstanceType<typeof TourLanguageAvgAggregate>;
    @Field(() => TourLanguageSumAggregate, {nullable:true})
    _sum?: InstanceType<typeof TourLanguageSumAggregate>;
    @Field(() => TourLanguageMinAggregate, {nullable:true})
    _min?: InstanceType<typeof TourLanguageMinAggregate>;
    @Field(() => TourLanguageMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof TourLanguageMaxAggregate>;
}

@ArgsType()
export class CreateManyTourLanguageArgs {
    @Field(() => [TourLanguageCreateManyInput], {nullable:false})
    @Type(() => TourLanguageCreateManyInput)
    @ValidateNested({ each: true })
    data!: Array<TourLanguageCreateManyInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@ArgsType()
export class CreateOneTourLanguageArgs {
    @Field(() => TourLanguageCreateInput, {nullable:false})
    @Type(() => TourLanguageCreateInput)
    @ValidateNested({ each: true })
    data!: InstanceType<typeof TourLanguageCreateInput>;
}

@ArgsType()
export class DeleteManyTourLanguageArgs {
    @Field(() => TourLanguageWhereInput, {nullable:true})
    @Type(() => TourLanguageWhereInput)
    @ValidateNested({ each: true })
    where?: InstanceType<typeof TourLanguageWhereInput>;
}

@ArgsType()
export class DeleteOneTourLanguageArgs {
    @Field(() => TourLanguageWhereUniqueInput, {nullable:false})
    @Type(() => TourLanguageWhereUniqueInput)
    @ValidateNested({ each: true })
    where!: InstanceType<typeof TourLanguageWhereUniqueInput>;
}

@ArgsType()
export class FindFirstTourLanguageArgs {
    @Field(() => TourLanguageWhereInput, {nullable:true})
    @Type(() => TourLanguageWhereInput)
    @ValidateNested({ each: true })
    where?: InstanceType<typeof TourLanguageWhereInput>;
    @Field(() => [TourLanguageOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<TourLanguageOrderByWithRelationInput>;
    @Field(() => TourLanguageWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof TourLanguageWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [TourLanguageScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof TourLanguageScalarFieldEnum>;
}

@ArgsType()
export class FindManyTourLanguageArgs {
    @Field(() => TourLanguageWhereInput, {nullable:true})
    @Type(() => TourLanguageWhereInput)
    @ValidateNested({ each: true })
    where?: InstanceType<typeof TourLanguageWhereInput>;
    @Field(() => [TourLanguageOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<TourLanguageOrderByWithRelationInput>;
    @Field(() => TourLanguageWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof TourLanguageWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [TourLanguageScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof TourLanguageScalarFieldEnum>;
}

@ArgsType()
export class FindUniqueTourLanguageArgs {
    @Field(() => TourLanguageWhereUniqueInput, {nullable:false})
    @Type(() => TourLanguageWhereUniqueInput)
    @ValidateNested({ each: true })
    where!: InstanceType<typeof TourLanguageWhereUniqueInput>;
}

@ArgsType()
export class TourLanguageAggregateArgs {
    @Field(() => TourLanguageWhereInput, {nullable:true})
    @Type(() => TourLanguageWhereInput)
    @ValidateNested({ each: true })
    where?: InstanceType<typeof TourLanguageWhereInput>;
    @Field(() => [TourLanguageOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<TourLanguageOrderByWithRelationInput>;
    @Field(() => TourLanguageWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof TourLanguageWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => TourLanguageCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof TourLanguageCountAggregateInput>;
    @Field(() => TourLanguageAvgAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof TourLanguageAvgAggregateInput>;
    @Field(() => TourLanguageSumAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof TourLanguageSumAggregateInput>;
    @Field(() => TourLanguageMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof TourLanguageMinAggregateInput>;
    @Field(() => TourLanguageMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof TourLanguageMaxAggregateInput>;
}

@InputType()
export class TourLanguageAvgAggregateInput {
    @Field(() => Boolean, {nullable:true})
    tourId?: true;
    @Field(() => Boolean, {nullable:true})
    languageId?: true;
}

@ObjectType()
export class TourLanguageAvgAggregate {
    @Field(() => Float, {nullable:true})
    tourId?: number;
    @Field(() => Float, {nullable:true})
    languageId?: number;
}

@InputType()
export class TourLanguageAvgOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    tourId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    languageId?: keyof typeof SortOrder;
}

@InputType()
export class TourLanguageCountAggregateInput {
    @Field(() => Boolean, {nullable:true})
    status?: true;
    @Field(() => Boolean, {nullable:true})
    tourId?: true;
    @Field(() => Boolean, {nullable:true})
    languageId?: true;
    @Field(() => Boolean, {nullable:true})
    _all?: true;
}

@ObjectType()
export class TourLanguageCountAggregate {
    @Field(() => Int, {nullable:false})
    status!: number;
    @Field(() => Int, {nullable:false})
    tourId!: number;
    @Field(() => Int, {nullable:false})
    languageId!: number;
    @Field(() => Int, {nullable:false})
    _all!: number;
}

@InputType()
export class TourLanguageCountOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    tourId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    languageId?: keyof typeof SortOrder;
}

@InputType()
export class TourLanguageCreateManyLanguageInputEnvelope {
    @Field(() => [TourLanguageCreateManyLanguageInput], {nullable:false})
    @Type(() => TourLanguageCreateManyLanguageInput)
    data!: Array<TourLanguageCreateManyLanguageInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@InputType()
export class TourLanguageCreateManyLanguageInput {
    @Field(() => Status, {nullable:true})
    status?: keyof typeof Status;
    @Field(() => Int, {nullable:false})
    tourId!: number;
}

@InputType()
export class TourLanguageCreateManyTourInputEnvelope {
    @Field(() => [TourLanguageCreateManyTourInput], {nullable:false})
    @Type(() => TourLanguageCreateManyTourInput)
    data!: Array<TourLanguageCreateManyTourInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@InputType()
export class TourLanguageCreateManyTourInput {
    @Field(() => Status, {nullable:true})
    status?: keyof typeof Status;
    @Field(() => Int, {nullable:false})
    languageId!: number;
}

@InputType()
export class TourLanguageCreateManyInput {
    @Field(() => Status, {nullable:true})
    status?: keyof typeof Status;
    @Field(() => Int, {nullable:false})
    tourId!: number;
    @Field(() => Int, {nullable:false})
    languageId!: number;
}

@InputType()
export class TourLanguageCreateNestedManyWithoutLanguageInput {
    @Field(() => [TourLanguageCreateWithoutLanguageInput], {nullable:true})
    @Type(() => TourLanguageCreateWithoutLanguageInput)
    create?: Array<TourLanguageCreateWithoutLanguageInput>;
    @Field(() => [TourLanguageCreateOrConnectWithoutLanguageInput], {nullable:true})
    @Type(() => TourLanguageCreateOrConnectWithoutLanguageInput)
    connectOrCreate?: Array<TourLanguageCreateOrConnectWithoutLanguageInput>;
    @Field(() => TourLanguageCreateManyLanguageInputEnvelope, {nullable:true})
    @Type(() => TourLanguageCreateManyLanguageInputEnvelope)
    createMany?: InstanceType<typeof TourLanguageCreateManyLanguageInputEnvelope>;
    @Field(() => [TourLanguageWhereUniqueInput], {nullable:true})
    @Type(() => TourLanguageWhereUniqueInput)
    connect?: Array<TourLanguageWhereUniqueInput>;
}

@InputType()
export class TourLanguageCreateNestedManyWithoutTourInput {
    @Field(() => [TourLanguageCreateWithoutTourInput], {nullable:true})
    @Type(() => TourLanguageCreateWithoutTourInput)
    create?: Array<TourLanguageCreateWithoutTourInput>;
    @Field(() => [TourLanguageCreateOrConnectWithoutTourInput], {nullable:true})
    @Type(() => TourLanguageCreateOrConnectWithoutTourInput)
    connectOrCreate?: Array<TourLanguageCreateOrConnectWithoutTourInput>;
    @Field(() => TourLanguageCreateManyTourInputEnvelope, {nullable:true})
    @Type(() => TourLanguageCreateManyTourInputEnvelope)
    createMany?: InstanceType<typeof TourLanguageCreateManyTourInputEnvelope>;
    @Field(() => [TourLanguageWhereUniqueInput], {nullable:true})
    @Type(() => TourLanguageWhereUniqueInput)
    connect?: Array<TourLanguageWhereUniqueInput>;
}

@InputType()
export class TourLanguageCreateOrConnectWithoutLanguageInput {
    @Field(() => TourLanguageWhereUniqueInput, {nullable:false})
    @Type(() => TourLanguageWhereUniqueInput)
    where!: InstanceType<typeof TourLanguageWhereUniqueInput>;
    @Field(() => TourLanguageCreateWithoutLanguageInput, {nullable:false})
    @Type(() => TourLanguageCreateWithoutLanguageInput)
    create!: InstanceType<typeof TourLanguageCreateWithoutLanguageInput>;
}

@InputType()
export class TourLanguageCreateOrConnectWithoutTourInput {
    @Field(() => TourLanguageWhereUniqueInput, {nullable:false})
    @Type(() => TourLanguageWhereUniqueInput)
    where!: InstanceType<typeof TourLanguageWhereUniqueInput>;
    @Field(() => TourLanguageCreateWithoutTourInput, {nullable:false})
    @Type(() => TourLanguageCreateWithoutTourInput)
    create!: InstanceType<typeof TourLanguageCreateWithoutTourInput>;
}

@InputType()
export class TourLanguageCreateWithoutLanguageInput {
    @Field(() => Status, {nullable:true})
    status?: keyof typeof Status;
    @Field(() => TourCreateNestedOneWithoutTourLanguageInput, {nullable:true})
    tour?: InstanceType<typeof TourCreateNestedOneWithoutTourLanguageInput>;
}

@InputType()
export class TourLanguageCreateWithoutTourInput {
    @Field(() => Status, {nullable:true})
    status?: keyof typeof Status;
    @Field(() => LanguageCreateNestedOneWithoutTourLanguageInput, {nullable:false})
    language!: InstanceType<typeof LanguageCreateNestedOneWithoutTourLanguageInput>;
}

@InputType()
export class TourLanguageCreateInput {
    @Field(() => Status, {nullable:true})
    status?: keyof typeof Status;
    @Field(() => TourCreateNestedOneWithoutTourLanguageInput, {nullable:true})
    tour?: InstanceType<typeof TourCreateNestedOneWithoutTourLanguageInput>;
    @Field(() => LanguageCreateNestedOneWithoutTourLanguageInput, {nullable:false})
    language!: InstanceType<typeof LanguageCreateNestedOneWithoutTourLanguageInput>;
}

@ArgsType()
export class TourLanguageGroupByArgs {
    @Field(() => TourLanguageWhereInput, {nullable:true})
    @Type(() => TourLanguageWhereInput)
    @ValidateNested({ each: true })
    where?: InstanceType<typeof TourLanguageWhereInput>;
    @Field(() => [TourLanguageOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<TourLanguageOrderByWithAggregationInput>;
    @Field(() => [TourLanguageScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof TourLanguageScalarFieldEnum>;
    @Field(() => TourLanguageScalarWhereWithAggregatesInput, {nullable:true})
    having?: InstanceType<typeof TourLanguageScalarWhereWithAggregatesInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => TourLanguageCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof TourLanguageCountAggregateInput>;
    @Field(() => TourLanguageAvgAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof TourLanguageAvgAggregateInput>;
    @Field(() => TourLanguageSumAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof TourLanguageSumAggregateInput>;
    @Field(() => TourLanguageMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof TourLanguageMinAggregateInput>;
    @Field(() => TourLanguageMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof TourLanguageMaxAggregateInput>;
}

@ObjectType()
export class TourLanguageGroupBy {
    @Field(() => Status, {nullable:false})
    status!: keyof typeof Status;
    @Field(() => Int, {nullable:false})
    tourId!: number;
    @Field(() => Int, {nullable:false})
    languageId!: number;
    @Field(() => TourLanguageCountAggregate, {nullable:true})
    _count?: InstanceType<typeof TourLanguageCountAggregate>;
    @Field(() => TourLanguageAvgAggregate, {nullable:true})
    _avg?: InstanceType<typeof TourLanguageAvgAggregate>;
    @Field(() => TourLanguageSumAggregate, {nullable:true})
    _sum?: InstanceType<typeof TourLanguageSumAggregate>;
    @Field(() => TourLanguageMinAggregate, {nullable:true})
    _min?: InstanceType<typeof TourLanguageMinAggregate>;
    @Field(() => TourLanguageMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof TourLanguageMaxAggregate>;
}

@InputType()
export class TourLanguageListRelationFilter {
    @Field(() => TourLanguageWhereInput, {nullable:true})
    every?: InstanceType<typeof TourLanguageWhereInput>;
    @Field(() => TourLanguageWhereInput, {nullable:true})
    some?: InstanceType<typeof TourLanguageWhereInput>;
    @Field(() => TourLanguageWhereInput, {nullable:true})
    none?: InstanceType<typeof TourLanguageWhereInput>;
}

@InputType()
export class TourLanguageMaxAggregateInput {
    @Field(() => Boolean, {nullable:true})
    status?: true;
    @Field(() => Boolean, {nullable:true})
    tourId?: true;
    @Field(() => Boolean, {nullable:true})
    languageId?: true;
}

@ObjectType()
export class TourLanguageMaxAggregate {
    @Field(() => Status, {nullable:true})
    status?: keyof typeof Status;
    @Field(() => Int, {nullable:true})
    tourId?: number;
    @Field(() => Int, {nullable:true})
    languageId?: number;
}

@InputType()
export class TourLanguageMaxOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    tourId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    languageId?: keyof typeof SortOrder;
}

@InputType()
export class TourLanguageMinAggregateInput {
    @Field(() => Boolean, {nullable:true})
    status?: true;
    @Field(() => Boolean, {nullable:true})
    tourId?: true;
    @Field(() => Boolean, {nullable:true})
    languageId?: true;
}

@ObjectType()
export class TourLanguageMinAggregate {
    @Field(() => Status, {nullable:true})
    status?: keyof typeof Status;
    @Field(() => Int, {nullable:true})
    tourId?: number;
    @Field(() => Int, {nullable:true})
    languageId?: number;
}

@InputType()
export class TourLanguageMinOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    tourId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    languageId?: keyof typeof SortOrder;
}

@InputType()
export class TourLanguageOrderByRelationAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    _count?: keyof typeof SortOrder;
}

@InputType()
export class TourLanguageOrderByWithAggregationInput {
    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    tourId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    languageId?: keyof typeof SortOrder;
    @Field(() => TourLanguageCountOrderByAggregateInput, {nullable:true})
    _count?: InstanceType<typeof TourLanguageCountOrderByAggregateInput>;
    @Field(() => TourLanguageAvgOrderByAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof TourLanguageAvgOrderByAggregateInput>;
    @Field(() => TourLanguageMaxOrderByAggregateInput, {nullable:true})
    _max?: InstanceType<typeof TourLanguageMaxOrderByAggregateInput>;
    @Field(() => TourLanguageMinOrderByAggregateInput, {nullable:true})
    _min?: InstanceType<typeof TourLanguageMinOrderByAggregateInput>;
    @Field(() => TourLanguageSumOrderByAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof TourLanguageSumOrderByAggregateInput>;
}

@InputType()
export class TourLanguageOrderByWithRelationInput {
    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;
    @Field(() => TourOrderByWithRelationInput, {nullable:true})
    tour?: InstanceType<typeof TourOrderByWithRelationInput>;
    @Field(() => SortOrder, {nullable:true})
    tourId?: keyof typeof SortOrder;
    @Field(() => LanguageOrderByWithRelationInput, {nullable:true})
    language?: InstanceType<typeof LanguageOrderByWithRelationInput>;
    @Field(() => SortOrder, {nullable:true})
    languageId?: keyof typeof SortOrder;
}

@InputType()
export class TourLanguageScalarWhereWithAggregatesInput {
    @Field(() => [TourLanguageScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<TourLanguageScalarWhereWithAggregatesInput>;
    @Field(() => [TourLanguageScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<TourLanguageScalarWhereWithAggregatesInput>;
    @Field(() => [TourLanguageScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<TourLanguageScalarWhereWithAggregatesInput>;
    @Field(() => EnumStatusWithAggregatesFilter, {nullable:true})
    status?: InstanceType<typeof EnumStatusWithAggregatesFilter>;
    @Field(() => IntWithAggregatesFilter, {nullable:true})
    tourId?: InstanceType<typeof IntWithAggregatesFilter>;
    @Field(() => IntWithAggregatesFilter, {nullable:true})
    languageId?: InstanceType<typeof IntWithAggregatesFilter>;
}

@InputType()
export class TourLanguageScalarWhereInput {
    @Field(() => [TourLanguageScalarWhereInput], {nullable:true})
    AND?: Array<TourLanguageScalarWhereInput>;
    @Field(() => [TourLanguageScalarWhereInput], {nullable:true})
    OR?: Array<TourLanguageScalarWhereInput>;
    @Field(() => [TourLanguageScalarWhereInput], {nullable:true})
    NOT?: Array<TourLanguageScalarWhereInput>;
    @Field(() => EnumStatusFilter, {nullable:true})
    status?: InstanceType<typeof EnumStatusFilter>;
    @Field(() => IntFilter, {nullable:true})
    tourId?: InstanceType<typeof IntFilter>;
    @Field(() => IntFilter, {nullable:true})
    languageId?: InstanceType<typeof IntFilter>;
}

@InputType()
export class TourLanguageSumAggregateInput {
    @Field(() => Boolean, {nullable:true})
    tourId?: true;
    @Field(() => Boolean, {nullable:true})
    languageId?: true;
}

@ObjectType()
export class TourLanguageSumAggregate {
    @Field(() => Int, {nullable:true})
    tourId?: number;
    @Field(() => Int, {nullable:true})
    languageId?: number;
}

@InputType()
export class TourLanguageSumOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    tourId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    languageId?: keyof typeof SortOrder;
}

@InputType()
export class TourLanguageTourIdLanguageIdCompoundUniqueInput {
    @Field(() => Int, {nullable:false})
    tourId!: number;
    @Field(() => Int, {nullable:false})
    languageId!: number;
}

@InputType()
export class TourLanguageUncheckedCreateNestedManyWithoutLanguageInput {
    @Field(() => [TourLanguageCreateWithoutLanguageInput], {nullable:true})
    @Type(() => TourLanguageCreateWithoutLanguageInput)
    create?: Array<TourLanguageCreateWithoutLanguageInput>;
    @Field(() => [TourLanguageCreateOrConnectWithoutLanguageInput], {nullable:true})
    @Type(() => TourLanguageCreateOrConnectWithoutLanguageInput)
    connectOrCreate?: Array<TourLanguageCreateOrConnectWithoutLanguageInput>;
    @Field(() => TourLanguageCreateManyLanguageInputEnvelope, {nullable:true})
    @Type(() => TourLanguageCreateManyLanguageInputEnvelope)
    createMany?: InstanceType<typeof TourLanguageCreateManyLanguageInputEnvelope>;
    @Field(() => [TourLanguageWhereUniqueInput], {nullable:true})
    @Type(() => TourLanguageWhereUniqueInput)
    connect?: Array<TourLanguageWhereUniqueInput>;
}

@InputType()
export class TourLanguageUncheckedCreateNestedManyWithoutTourInput {
    @Field(() => [TourLanguageCreateWithoutTourInput], {nullable:true})
    @Type(() => TourLanguageCreateWithoutTourInput)
    create?: Array<TourLanguageCreateWithoutTourInput>;
    @Field(() => [TourLanguageCreateOrConnectWithoutTourInput], {nullable:true})
    @Type(() => TourLanguageCreateOrConnectWithoutTourInput)
    connectOrCreate?: Array<TourLanguageCreateOrConnectWithoutTourInput>;
    @Field(() => TourLanguageCreateManyTourInputEnvelope, {nullable:true})
    @Type(() => TourLanguageCreateManyTourInputEnvelope)
    createMany?: InstanceType<typeof TourLanguageCreateManyTourInputEnvelope>;
    @Field(() => [TourLanguageWhereUniqueInput], {nullable:true})
    @Type(() => TourLanguageWhereUniqueInput)
    connect?: Array<TourLanguageWhereUniqueInput>;
}

@InputType()
export class TourLanguageUncheckedCreateWithoutLanguageInput {
    @Field(() => Status, {nullable:true})
    status?: keyof typeof Status;
    @Field(() => Int, {nullable:false})
    tourId!: number;
}

@InputType()
export class TourLanguageUncheckedCreateWithoutTourInput {
    @Field(() => Status, {nullable:true})
    status?: keyof typeof Status;
    @Field(() => Int, {nullable:false})
    languageId!: number;
}

@InputType()
export class TourLanguageUncheckedCreateInput {
    @Field(() => Status, {nullable:true})
    status?: keyof typeof Status;
    @Field(() => Int, {nullable:false})
    tourId!: number;
    @Field(() => Int, {nullable:false})
    languageId!: number;
}

@InputType()
export class TourLanguageUncheckedUpdateManyWithoutLanguageInput {
    @Field(() => [TourLanguageCreateWithoutLanguageInput], {nullable:true})
    @Type(() => TourLanguageCreateWithoutLanguageInput)
    create?: Array<TourLanguageCreateWithoutLanguageInput>;
    @Field(() => [TourLanguageCreateOrConnectWithoutLanguageInput], {nullable:true})
    @Type(() => TourLanguageCreateOrConnectWithoutLanguageInput)
    connectOrCreate?: Array<TourLanguageCreateOrConnectWithoutLanguageInput>;
    @Field(() => [TourLanguageUpsertWithWhereUniqueWithoutLanguageInput], {nullable:true})
    @Type(() => TourLanguageUpsertWithWhereUniqueWithoutLanguageInput)
    upsert?: Array<TourLanguageUpsertWithWhereUniqueWithoutLanguageInput>;
    @Field(() => TourLanguageCreateManyLanguageInputEnvelope, {nullable:true})
    @Type(() => TourLanguageCreateManyLanguageInputEnvelope)
    createMany?: InstanceType<typeof TourLanguageCreateManyLanguageInputEnvelope>;
    @Field(() => [TourLanguageWhereUniqueInput], {nullable:true})
    @Type(() => TourLanguageWhereUniqueInput)
    set?: Array<TourLanguageWhereUniqueInput>;
    @Field(() => [TourLanguageWhereUniqueInput], {nullable:true})
    @Type(() => TourLanguageWhereUniqueInput)
    disconnect?: Array<TourLanguageWhereUniqueInput>;
    @Field(() => [TourLanguageWhereUniqueInput], {nullable:true})
    @Type(() => TourLanguageWhereUniqueInput)
    delete?: Array<TourLanguageWhereUniqueInput>;
    @Field(() => [TourLanguageWhereUniqueInput], {nullable:true})
    @Type(() => TourLanguageWhereUniqueInput)
    connect?: Array<TourLanguageWhereUniqueInput>;
    @Field(() => [TourLanguageUpdateWithWhereUniqueWithoutLanguageInput], {nullable:true})
    @Type(() => TourLanguageUpdateWithWhereUniqueWithoutLanguageInput)
    update?: Array<TourLanguageUpdateWithWhereUniqueWithoutLanguageInput>;
    @Field(() => [TourLanguageUpdateManyWithWhereWithoutLanguageInput], {nullable:true})
    @Type(() => TourLanguageUpdateManyWithWhereWithoutLanguageInput)
    updateMany?: Array<TourLanguageUpdateManyWithWhereWithoutLanguageInput>;
    @Field(() => [TourLanguageScalarWhereInput], {nullable:true})
    @Type(() => TourLanguageScalarWhereInput)
    deleteMany?: Array<TourLanguageScalarWhereInput>;
}

@InputType()
export class TourLanguageUncheckedUpdateManyWithoutTourLanguageInput {
    @Field(() => Status, {nullable:true})
    status?: keyof typeof Status;
    @Field(() => Int, {nullable:true})
    languageId?: number;
}

@InputType()
export class TourLanguageUncheckedUpdateManyWithoutTourInput {
    @Field(() => [TourLanguageCreateWithoutTourInput], {nullable:true})
    @Type(() => TourLanguageCreateWithoutTourInput)
    create?: Array<TourLanguageCreateWithoutTourInput>;
    @Field(() => [TourLanguageCreateOrConnectWithoutTourInput], {nullable:true})
    @Type(() => TourLanguageCreateOrConnectWithoutTourInput)
    connectOrCreate?: Array<TourLanguageCreateOrConnectWithoutTourInput>;
    @Field(() => [TourLanguageUpsertWithWhereUniqueWithoutTourInput], {nullable:true})
    @Type(() => TourLanguageUpsertWithWhereUniqueWithoutTourInput)
    upsert?: Array<TourLanguageUpsertWithWhereUniqueWithoutTourInput>;
    @Field(() => TourLanguageCreateManyTourInputEnvelope, {nullable:true})
    @Type(() => TourLanguageCreateManyTourInputEnvelope)
    createMany?: InstanceType<typeof TourLanguageCreateManyTourInputEnvelope>;
    @Field(() => [TourLanguageWhereUniqueInput], {nullable:true})
    @Type(() => TourLanguageWhereUniqueInput)
    set?: Array<TourLanguageWhereUniqueInput>;
    @Field(() => [TourLanguageWhereUniqueInput], {nullable:true})
    @Type(() => TourLanguageWhereUniqueInput)
    disconnect?: Array<TourLanguageWhereUniqueInput>;
    @Field(() => [TourLanguageWhereUniqueInput], {nullable:true})
    @Type(() => TourLanguageWhereUniqueInput)
    delete?: Array<TourLanguageWhereUniqueInput>;
    @Field(() => [TourLanguageWhereUniqueInput], {nullable:true})
    @Type(() => TourLanguageWhereUniqueInput)
    connect?: Array<TourLanguageWhereUniqueInput>;
    @Field(() => [TourLanguageUpdateWithWhereUniqueWithoutTourInput], {nullable:true})
    @Type(() => TourLanguageUpdateWithWhereUniqueWithoutTourInput)
    update?: Array<TourLanguageUpdateWithWhereUniqueWithoutTourInput>;
    @Field(() => [TourLanguageUpdateManyWithWhereWithoutTourInput], {nullable:true})
    @Type(() => TourLanguageUpdateManyWithWhereWithoutTourInput)
    updateMany?: Array<TourLanguageUpdateManyWithWhereWithoutTourInput>;
    @Field(() => [TourLanguageScalarWhereInput], {nullable:true})
    @Type(() => TourLanguageScalarWhereInput)
    deleteMany?: Array<TourLanguageScalarWhereInput>;
}

@InputType()
export class TourLanguageUncheckedUpdateManyInput {
    @Field(() => Status, {nullable:true})
    status?: keyof typeof Status;
    @Field(() => Int, {nullable:true})
    tourId?: number;
    @Field(() => Int, {nullable:true})
    languageId?: number;
}

@InputType()
export class TourLanguageUncheckedUpdateWithoutLanguageInput {
    @Field(() => Status, {nullable:true})
    status?: keyof typeof Status;
    @Field(() => Int, {nullable:true})
    tourId?: number;
}

@InputType()
export class TourLanguageUncheckedUpdateWithoutTourInput {
    @Field(() => Status, {nullable:true})
    status?: keyof typeof Status;
    @Field(() => Int, {nullable:true})
    languageId?: number;
}

@InputType()
export class TourLanguageUncheckedUpdateInput {
    @Field(() => Status, {nullable:true})
    status?: keyof typeof Status;
    @Field(() => Int, {nullable:true})
    tourId?: number;
    @Field(() => Int, {nullable:true})
    languageId?: number;
}

@InputType()
export class TourLanguageUpdateManyMutationInput {
    @Field(() => Status, {nullable:true})
    status?: keyof typeof Status;
}

@InputType()
export class TourLanguageUpdateManyWithWhereWithoutLanguageInput {
    @Field(() => TourLanguageScalarWhereInput, {nullable:false})
    @Type(() => TourLanguageScalarWhereInput)
    where!: InstanceType<typeof TourLanguageScalarWhereInput>;
    @Field(() => TourLanguageUpdateManyMutationInput, {nullable:false})
    @Type(() => TourLanguageUpdateManyMutationInput)
    data!: InstanceType<typeof TourLanguageUpdateManyMutationInput>;
}

@InputType()
export class TourLanguageUpdateManyWithWhereWithoutTourInput {
    @Field(() => TourLanguageScalarWhereInput, {nullable:false})
    @Type(() => TourLanguageScalarWhereInput)
    where!: InstanceType<typeof TourLanguageScalarWhereInput>;
    @Field(() => TourLanguageUpdateManyMutationInput, {nullable:false})
    @Type(() => TourLanguageUpdateManyMutationInput)
    data!: InstanceType<typeof TourLanguageUpdateManyMutationInput>;
}

@InputType()
export class TourLanguageUpdateManyWithoutLanguageInput {
    @Field(() => [TourLanguageCreateWithoutLanguageInput], {nullable:true})
    @Type(() => TourLanguageCreateWithoutLanguageInput)
    create?: Array<TourLanguageCreateWithoutLanguageInput>;
    @Field(() => [TourLanguageCreateOrConnectWithoutLanguageInput], {nullable:true})
    @Type(() => TourLanguageCreateOrConnectWithoutLanguageInput)
    connectOrCreate?: Array<TourLanguageCreateOrConnectWithoutLanguageInput>;
    @Field(() => [TourLanguageUpsertWithWhereUniqueWithoutLanguageInput], {nullable:true})
    @Type(() => TourLanguageUpsertWithWhereUniqueWithoutLanguageInput)
    upsert?: Array<TourLanguageUpsertWithWhereUniqueWithoutLanguageInput>;
    @Field(() => TourLanguageCreateManyLanguageInputEnvelope, {nullable:true})
    @Type(() => TourLanguageCreateManyLanguageInputEnvelope)
    createMany?: InstanceType<typeof TourLanguageCreateManyLanguageInputEnvelope>;
    @Field(() => [TourLanguageWhereUniqueInput], {nullable:true})
    @Type(() => TourLanguageWhereUniqueInput)
    set?: Array<TourLanguageWhereUniqueInput>;
    @Field(() => [TourLanguageWhereUniqueInput], {nullable:true})
    @Type(() => TourLanguageWhereUniqueInput)
    disconnect?: Array<TourLanguageWhereUniqueInput>;
    @Field(() => [TourLanguageWhereUniqueInput], {nullable:true})
    @Type(() => TourLanguageWhereUniqueInput)
    delete?: Array<TourLanguageWhereUniqueInput>;
    @Field(() => [TourLanguageWhereUniqueInput], {nullable:true})
    @Type(() => TourLanguageWhereUniqueInput)
    connect?: Array<TourLanguageWhereUniqueInput>;
    @Field(() => [TourLanguageUpdateWithWhereUniqueWithoutLanguageInput], {nullable:true})
    @Type(() => TourLanguageUpdateWithWhereUniqueWithoutLanguageInput)
    update?: Array<TourLanguageUpdateWithWhereUniqueWithoutLanguageInput>;
    @Field(() => [TourLanguageUpdateManyWithWhereWithoutLanguageInput], {nullable:true})
    @Type(() => TourLanguageUpdateManyWithWhereWithoutLanguageInput)
    updateMany?: Array<TourLanguageUpdateManyWithWhereWithoutLanguageInput>;
    @Field(() => [TourLanguageScalarWhereInput], {nullable:true})
    @Type(() => TourLanguageScalarWhereInput)
    deleteMany?: Array<TourLanguageScalarWhereInput>;
}

@InputType()
export class TourLanguageUpdateManyWithoutTourInput {
    @Field(() => [TourLanguageCreateWithoutTourInput], {nullable:true})
    @Type(() => TourLanguageCreateWithoutTourInput)
    create?: Array<TourLanguageCreateWithoutTourInput>;
    @Field(() => [TourLanguageCreateOrConnectWithoutTourInput], {nullable:true})
    @Type(() => TourLanguageCreateOrConnectWithoutTourInput)
    connectOrCreate?: Array<TourLanguageCreateOrConnectWithoutTourInput>;
    @Field(() => [TourLanguageUpsertWithWhereUniqueWithoutTourInput], {nullable:true})
    @Type(() => TourLanguageUpsertWithWhereUniqueWithoutTourInput)
    upsert?: Array<TourLanguageUpsertWithWhereUniqueWithoutTourInput>;
    @Field(() => TourLanguageCreateManyTourInputEnvelope, {nullable:true})
    @Type(() => TourLanguageCreateManyTourInputEnvelope)
    createMany?: InstanceType<typeof TourLanguageCreateManyTourInputEnvelope>;
    @Field(() => [TourLanguageWhereUniqueInput], {nullable:true})
    @Type(() => TourLanguageWhereUniqueInput)
    set?: Array<TourLanguageWhereUniqueInput>;
    @Field(() => [TourLanguageWhereUniqueInput], {nullable:true})
    @Type(() => TourLanguageWhereUniqueInput)
    disconnect?: Array<TourLanguageWhereUniqueInput>;
    @Field(() => [TourLanguageWhereUniqueInput], {nullable:true})
    @Type(() => TourLanguageWhereUniqueInput)
    delete?: Array<TourLanguageWhereUniqueInput>;
    @Field(() => [TourLanguageWhereUniqueInput], {nullable:true})
    @Type(() => TourLanguageWhereUniqueInput)
    connect?: Array<TourLanguageWhereUniqueInput>;
    @Field(() => [TourLanguageUpdateWithWhereUniqueWithoutTourInput], {nullable:true})
    @Type(() => TourLanguageUpdateWithWhereUniqueWithoutTourInput)
    update?: Array<TourLanguageUpdateWithWhereUniqueWithoutTourInput>;
    @Field(() => [TourLanguageUpdateManyWithWhereWithoutTourInput], {nullable:true})
    @Type(() => TourLanguageUpdateManyWithWhereWithoutTourInput)
    updateMany?: Array<TourLanguageUpdateManyWithWhereWithoutTourInput>;
    @Field(() => [TourLanguageScalarWhereInput], {nullable:true})
    @Type(() => TourLanguageScalarWhereInput)
    deleteMany?: Array<TourLanguageScalarWhereInput>;
}

@InputType()
export class TourLanguageUpdateWithWhereUniqueWithoutLanguageInput {
    @Field(() => TourLanguageWhereUniqueInput, {nullable:false})
    @Type(() => TourLanguageWhereUniqueInput)
    where!: InstanceType<typeof TourLanguageWhereUniqueInput>;
    @Field(() => TourLanguageUpdateWithoutLanguageInput, {nullable:false})
    @Type(() => TourLanguageUpdateWithoutLanguageInput)
    data!: InstanceType<typeof TourLanguageUpdateWithoutLanguageInput>;
}

@InputType()
export class TourLanguageUpdateWithWhereUniqueWithoutTourInput {
    @Field(() => TourLanguageWhereUniqueInput, {nullable:false})
    @Type(() => TourLanguageWhereUniqueInput)
    where!: InstanceType<typeof TourLanguageWhereUniqueInput>;
    @Field(() => TourLanguageUpdateWithoutTourInput, {nullable:false})
    @Type(() => TourLanguageUpdateWithoutTourInput)
    data!: InstanceType<typeof TourLanguageUpdateWithoutTourInput>;
}

@InputType()
export class TourLanguageUpdateWithoutLanguageInput {
    @Field(() => Status, {nullable:true})
    status?: keyof typeof Status;
    @Field(() => TourUpdateOneWithoutTourLanguageInput, {nullable:true})
    tour?: InstanceType<typeof TourUpdateOneWithoutTourLanguageInput>;
}

@InputType()
export class TourLanguageUpdateWithoutTourInput {
    @Field(() => Status, {nullable:true})
    status?: keyof typeof Status;
    @Field(() => LanguageUpdateOneRequiredWithoutTourLanguageInput, {nullable:true})
    language?: InstanceType<typeof LanguageUpdateOneRequiredWithoutTourLanguageInput>;
}

@InputType()
export class TourLanguageUpdateInput {
    @Field(() => Status, {nullable:true})
    status?: keyof typeof Status;
    @Field(() => TourUpdateOneWithoutTourLanguageInput, {nullable:true})
    tour?: InstanceType<typeof TourUpdateOneWithoutTourLanguageInput>;
    @Field(() => LanguageUpdateOneRequiredWithoutTourLanguageInput, {nullable:true})
    language?: InstanceType<typeof LanguageUpdateOneRequiredWithoutTourLanguageInput>;
}

@InputType()
export class TourLanguageUpsertWithWhereUniqueWithoutLanguageInput {
    @Field(() => TourLanguageWhereUniqueInput, {nullable:false})
    @Type(() => TourLanguageWhereUniqueInput)
    where!: InstanceType<typeof TourLanguageWhereUniqueInput>;
    @Field(() => TourLanguageUpdateWithoutLanguageInput, {nullable:false})
    @Type(() => TourLanguageUpdateWithoutLanguageInput)
    update!: InstanceType<typeof TourLanguageUpdateWithoutLanguageInput>;
    @Field(() => TourLanguageCreateWithoutLanguageInput, {nullable:false})
    @Type(() => TourLanguageCreateWithoutLanguageInput)
    create!: InstanceType<typeof TourLanguageCreateWithoutLanguageInput>;
}

@InputType()
export class TourLanguageUpsertWithWhereUniqueWithoutTourInput {
    @Field(() => TourLanguageWhereUniqueInput, {nullable:false})
    @Type(() => TourLanguageWhereUniqueInput)
    where!: InstanceType<typeof TourLanguageWhereUniqueInput>;
    @Field(() => TourLanguageUpdateWithoutTourInput, {nullable:false})
    @Type(() => TourLanguageUpdateWithoutTourInput)
    update!: InstanceType<typeof TourLanguageUpdateWithoutTourInput>;
    @Field(() => TourLanguageCreateWithoutTourInput, {nullable:false})
    @Type(() => TourLanguageCreateWithoutTourInput)
    create!: InstanceType<typeof TourLanguageCreateWithoutTourInput>;
}

@InputType()
export class TourLanguageWhereUniqueInput {
    @Field(() => TourLanguageTourIdLanguageIdCompoundUniqueInput, {nullable:true})
    tourId_languageId?: InstanceType<typeof TourLanguageTourIdLanguageIdCompoundUniqueInput>;
}

@InputType()
export class TourLanguageWhereInput {
    @Field(() => [TourLanguageWhereInput], {nullable:true})
    AND?: Array<TourLanguageWhereInput>;
    @Field(() => [TourLanguageWhereInput], {nullable:true})
    OR?: Array<TourLanguageWhereInput>;
    @Field(() => [TourLanguageWhereInput], {nullable:true})
    NOT?: Array<TourLanguageWhereInput>;
    @Field(() => EnumStatusFilter, {nullable:true})
    status?: InstanceType<typeof EnumStatusFilter>;
    @Field(() => TourRelationFilter, {nullable:true})
    tour?: InstanceType<typeof TourRelationFilter>;
    @Field(() => IntFilter, {nullable:true})
    tourId?: InstanceType<typeof IntFilter>;
    @Field(() => LanguageRelationFilter, {nullable:true})
    language?: InstanceType<typeof LanguageRelationFilter>;
    @Field(() => IntFilter, {nullable:true})
    languageId?: InstanceType<typeof IntFilter>;
}

@ObjectType()
export class TourLanguage {
    @Field(() => Status, {nullable:false,defaultValue:'ACTIVE'})
    status!: keyof typeof Status;
    @Field(() => Tour, {nullable:true})
    tour?: InstanceType<typeof Tour> | null;
    @Field(() => Int, {nullable:false})
    tourId!: number;
    @Field(() => Language, {nullable:false})
    language?: InstanceType<typeof Language>;
    @Field(() => Int, {nullable:false})
    languageId!: number;
}

@ArgsType()
export class UpdateManyTourLanguageArgs {
    @Field(() => TourLanguageUpdateManyMutationInput, {nullable:false})
    @Type(() => TourLanguageUpdateManyMutationInput)
    @ValidateNested({ each: true })
    data!: InstanceType<typeof TourLanguageUpdateManyMutationInput>;
    @Field(() => TourLanguageWhereInput, {nullable:true})
    @Type(() => TourLanguageWhereInput)
    @ValidateNested({ each: true })
    where?: InstanceType<typeof TourLanguageWhereInput>;
}

@ArgsType()
export class UpdateOneTourLanguageArgs {
    @Field(() => TourLanguageUpdateInput, {nullable:false})
    @Type(() => TourLanguageUpdateInput)
    @ValidateNested({ each: true })
    data!: InstanceType<typeof TourLanguageUpdateInput>;
    @Field(() => TourLanguageWhereUniqueInput, {nullable:false})
    @Type(() => TourLanguageWhereUniqueInput)
    @ValidateNested({ each: true })
    where!: InstanceType<typeof TourLanguageWhereUniqueInput>;
}

@ArgsType()
export class UpsertOneTourLanguageArgs {
    @Field(() => TourLanguageWhereUniqueInput, {nullable:false})
    @Type(() => TourLanguageWhereUniqueInput)
    @ValidateNested({ each: true })
    where!: InstanceType<typeof TourLanguageWhereUniqueInput>;
    @Field(() => TourLanguageCreateInput, {nullable:false})
    @Type(() => TourLanguageCreateInput)
    create!: InstanceType<typeof TourLanguageCreateInput>;
    @Field(() => TourLanguageUpdateInput, {nullable:false})
    @Type(() => TourLanguageUpdateInput)
    update!: InstanceType<typeof TourLanguageUpdateInput>;
}

@ObjectType()
export class AggregateTourTourCategory {
    @Field(() => TourTourCategoryCountAggregate, {nullable:true})
    _count?: InstanceType<typeof TourTourCategoryCountAggregate>;
    @Field(() => TourTourCategoryAvgAggregate, {nullable:true})
    _avg?: InstanceType<typeof TourTourCategoryAvgAggregate>;
    @Field(() => TourTourCategorySumAggregate, {nullable:true})
    _sum?: InstanceType<typeof TourTourCategorySumAggregate>;
    @Field(() => TourTourCategoryMinAggregate, {nullable:true})
    _min?: InstanceType<typeof TourTourCategoryMinAggregate>;
    @Field(() => TourTourCategoryMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof TourTourCategoryMaxAggregate>;
}

@ArgsType()
export class CreateManyTourTourCategoryArgs {
    @Field(() => [TourTourCategoryCreateManyInput], {nullable:false})
    @Type(() => TourTourCategoryCreateManyInput)
    @ValidateNested({ each: true })
    data!: Array<TourTourCategoryCreateManyInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@ArgsType()
export class CreateOneTourTourCategoryArgs {
    @Field(() => TourTourCategoryCreateInput, {nullable:false})
    @Type(() => TourTourCategoryCreateInput)
    @ValidateNested({ each: true })
    data!: InstanceType<typeof TourTourCategoryCreateInput>;
}

@ArgsType()
export class DeleteManyTourTourCategoryArgs {
    @Field(() => TourTourCategoryWhereInput, {nullable:true})
    @Type(() => TourTourCategoryWhereInput)
    @ValidateNested({ each: true })
    where?: InstanceType<typeof TourTourCategoryWhereInput>;
}

@ArgsType()
export class DeleteOneTourTourCategoryArgs {
    @Field(() => TourTourCategoryWhereUniqueInput, {nullable:false})
    @Type(() => TourTourCategoryWhereUniqueInput)
    @ValidateNested({ each: true })
    where!: InstanceType<typeof TourTourCategoryWhereUniqueInput>;
}

@ArgsType()
export class FindFirstTourTourCategoryArgs {
    @Field(() => TourTourCategoryWhereInput, {nullable:true})
    @Type(() => TourTourCategoryWhereInput)
    @ValidateNested({ each: true })
    where?: InstanceType<typeof TourTourCategoryWhereInput>;
    @Field(() => [TourTourCategoryOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<TourTourCategoryOrderByWithRelationInput>;
    @Field(() => TourTourCategoryWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof TourTourCategoryWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [TourTourCategoryScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof TourTourCategoryScalarFieldEnum>;
}

@ArgsType()
export class FindManyTourTourCategoryArgs {
    @Field(() => TourTourCategoryWhereInput, {nullable:true})
    @Type(() => TourTourCategoryWhereInput)
    @ValidateNested({ each: true })
    where?: InstanceType<typeof TourTourCategoryWhereInput>;
    @Field(() => [TourTourCategoryOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<TourTourCategoryOrderByWithRelationInput>;
    @Field(() => TourTourCategoryWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof TourTourCategoryWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [TourTourCategoryScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof TourTourCategoryScalarFieldEnum>;
}

@ArgsType()
export class FindUniqueTourTourCategoryArgs {
    @Field(() => TourTourCategoryWhereUniqueInput, {nullable:false})
    @Type(() => TourTourCategoryWhereUniqueInput)
    @ValidateNested({ each: true })
    where!: InstanceType<typeof TourTourCategoryWhereUniqueInput>;
}

@ArgsType()
export class TourTourCategoryAggregateArgs {
    @Field(() => TourTourCategoryWhereInput, {nullable:true})
    @Type(() => TourTourCategoryWhereInput)
    @ValidateNested({ each: true })
    where?: InstanceType<typeof TourTourCategoryWhereInput>;
    @Field(() => [TourTourCategoryOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<TourTourCategoryOrderByWithRelationInput>;
    @Field(() => TourTourCategoryWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof TourTourCategoryWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => TourTourCategoryCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof TourTourCategoryCountAggregateInput>;
    @Field(() => TourTourCategoryAvgAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof TourTourCategoryAvgAggregateInput>;
    @Field(() => TourTourCategorySumAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof TourTourCategorySumAggregateInput>;
    @Field(() => TourTourCategoryMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof TourTourCategoryMinAggregateInput>;
    @Field(() => TourTourCategoryMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof TourTourCategoryMaxAggregateInput>;
}

@InputType()
export class TourTourCategoryAvgAggregateInput {
    @Field(() => Boolean, {nullable:true})
    tourId?: true;
    @Field(() => Boolean, {nullable:true})
    tourCategoryId?: true;
}

@ObjectType()
export class TourTourCategoryAvgAggregate {
    @Field(() => Float, {nullable:true})
    tourId?: number;
    @Field(() => Float, {nullable:true})
    tourCategoryId?: number;
}

@InputType()
export class TourTourCategoryAvgOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    tourId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    tourCategoryId?: keyof typeof SortOrder;
}

@InputType()
export class TourTourCategoryCountAggregateInput {
    @Field(() => Boolean, {nullable:true})
    status?: true;
    @Field(() => Boolean, {nullable:true})
    tourId?: true;
    @Field(() => Boolean, {nullable:true})
    tourCategoryId?: true;
    @Field(() => Boolean, {nullable:true})
    _all?: true;
}

@ObjectType()
export class TourTourCategoryCountAggregate {
    @Field(() => Int, {nullable:false})
    status!: number;
    @Field(() => Int, {nullable:false})
    tourId!: number;
    @Field(() => Int, {nullable:false})
    tourCategoryId!: number;
    @Field(() => Int, {nullable:false})
    _all!: number;
}

@InputType()
export class TourTourCategoryCountOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    tourId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    tourCategoryId?: keyof typeof SortOrder;
}

@InputType()
export class TourTourCategoryCreateManyTourCategoryInputEnvelope {
    @Field(() => [TourTourCategoryCreateManyTourCategoryInput], {nullable:false})
    @Type(() => TourTourCategoryCreateManyTourCategoryInput)
    data!: Array<TourTourCategoryCreateManyTourCategoryInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@InputType()
export class TourTourCategoryCreateManyTourCategoryInput {
    @Field(() => Status, {nullable:true})
    status?: keyof typeof Status;
    @Field(() => Int, {nullable:false})
    tourId!: number;
}

@InputType()
export class TourTourCategoryCreateManyTourInputEnvelope {
    @Field(() => [TourTourCategoryCreateManyTourInput], {nullable:false})
    @Type(() => TourTourCategoryCreateManyTourInput)
    data!: Array<TourTourCategoryCreateManyTourInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@InputType()
export class TourTourCategoryCreateManyTourInput {
    @Field(() => Status, {nullable:true})
    status?: keyof typeof Status;
    @Field(() => Int, {nullable:false})
    tourCategoryId!: number;
}

@InputType()
export class TourTourCategoryCreateManyInput {
    @Field(() => Status, {nullable:true})
    status?: keyof typeof Status;
    @Field(() => Int, {nullable:false})
    tourId!: number;
    @Field(() => Int, {nullable:false})
    tourCategoryId!: number;
}

@InputType()
export class TourTourCategoryCreateNestedManyWithoutTourCategoryInput {
    @Field(() => [TourTourCategoryCreateWithoutTourCategoryInput], {nullable:true})
    @Type(() => TourTourCategoryCreateWithoutTourCategoryInput)
    create?: Array<TourTourCategoryCreateWithoutTourCategoryInput>;
    @Field(() => [TourTourCategoryCreateOrConnectWithoutTourCategoryInput], {nullable:true})
    @Type(() => TourTourCategoryCreateOrConnectWithoutTourCategoryInput)
    connectOrCreate?: Array<TourTourCategoryCreateOrConnectWithoutTourCategoryInput>;
    @Field(() => TourTourCategoryCreateManyTourCategoryInputEnvelope, {nullable:true})
    @Type(() => TourTourCategoryCreateManyTourCategoryInputEnvelope)
    createMany?: InstanceType<typeof TourTourCategoryCreateManyTourCategoryInputEnvelope>;
    @Field(() => [TourTourCategoryWhereUniqueInput], {nullable:true})
    @Type(() => TourTourCategoryWhereUniqueInput)
    connect?: Array<TourTourCategoryWhereUniqueInput>;
}

@InputType()
export class TourTourCategoryCreateNestedManyWithoutTourInput {
    @Field(() => [TourTourCategoryCreateWithoutTourInput], {nullable:true})
    @Type(() => TourTourCategoryCreateWithoutTourInput)
    create?: Array<TourTourCategoryCreateWithoutTourInput>;
    @Field(() => [TourTourCategoryCreateOrConnectWithoutTourInput], {nullable:true})
    @Type(() => TourTourCategoryCreateOrConnectWithoutTourInput)
    connectOrCreate?: Array<TourTourCategoryCreateOrConnectWithoutTourInput>;
    @Field(() => TourTourCategoryCreateManyTourInputEnvelope, {nullable:true})
    @Type(() => TourTourCategoryCreateManyTourInputEnvelope)
    createMany?: InstanceType<typeof TourTourCategoryCreateManyTourInputEnvelope>;
    @Field(() => [TourTourCategoryWhereUniqueInput], {nullable:true})
    @Type(() => TourTourCategoryWhereUniqueInput)
    connect?: Array<TourTourCategoryWhereUniqueInput>;
}

@InputType()
export class TourTourCategoryCreateOrConnectWithoutTourCategoryInput {
    @Field(() => TourTourCategoryWhereUniqueInput, {nullable:false})
    @Type(() => TourTourCategoryWhereUniqueInput)
    where!: InstanceType<typeof TourTourCategoryWhereUniqueInput>;
    @Field(() => TourTourCategoryCreateWithoutTourCategoryInput, {nullable:false})
    @Type(() => TourTourCategoryCreateWithoutTourCategoryInput)
    create!: InstanceType<typeof TourTourCategoryCreateWithoutTourCategoryInput>;
}

@InputType()
export class TourTourCategoryCreateOrConnectWithoutTourInput {
    @Field(() => TourTourCategoryWhereUniqueInput, {nullable:false})
    @Type(() => TourTourCategoryWhereUniqueInput)
    where!: InstanceType<typeof TourTourCategoryWhereUniqueInput>;
    @Field(() => TourTourCategoryCreateWithoutTourInput, {nullable:false})
    @Type(() => TourTourCategoryCreateWithoutTourInput)
    create!: InstanceType<typeof TourTourCategoryCreateWithoutTourInput>;
}

@InputType()
export class TourTourCategoryCreateWithoutTourCategoryInput {
    @Field(() => Status, {nullable:true})
    status?: keyof typeof Status;
    @Field(() => TourCreateNestedOneWithoutTourTourCategoryInput, {nullable:true})
    tour?: InstanceType<typeof TourCreateNestedOneWithoutTourTourCategoryInput>;
}

@InputType()
export class TourTourCategoryCreateWithoutTourInput {
    @Field(() => Status, {nullable:true})
    status?: keyof typeof Status;
    @Field(() => TourCategoryCreateNestedOneWithoutTourTourCategoryInput, {nullable:false})
    tourCategory!: InstanceType<typeof TourCategoryCreateNestedOneWithoutTourTourCategoryInput>;
}

@InputType()
export class TourTourCategoryCreateInput {
    @Field(() => Status, {nullable:true})
    status?: keyof typeof Status;
    @Field(() => TourCreateNestedOneWithoutTourTourCategoryInput, {nullable:true})
    tour?: InstanceType<typeof TourCreateNestedOneWithoutTourTourCategoryInput>;
    @Field(() => TourCategoryCreateNestedOneWithoutTourTourCategoryInput, {nullable:false})
    tourCategory!: InstanceType<typeof TourCategoryCreateNestedOneWithoutTourTourCategoryInput>;
}

@ArgsType()
export class TourTourCategoryGroupByArgs {
    @Field(() => TourTourCategoryWhereInput, {nullable:true})
    @Type(() => TourTourCategoryWhereInput)
    @ValidateNested({ each: true })
    where?: InstanceType<typeof TourTourCategoryWhereInput>;
    @Field(() => [TourTourCategoryOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<TourTourCategoryOrderByWithAggregationInput>;
    @Field(() => [TourTourCategoryScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof TourTourCategoryScalarFieldEnum>;
    @Field(() => TourTourCategoryScalarWhereWithAggregatesInput, {nullable:true})
    having?: InstanceType<typeof TourTourCategoryScalarWhereWithAggregatesInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => TourTourCategoryCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof TourTourCategoryCountAggregateInput>;
    @Field(() => TourTourCategoryAvgAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof TourTourCategoryAvgAggregateInput>;
    @Field(() => TourTourCategorySumAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof TourTourCategorySumAggregateInput>;
    @Field(() => TourTourCategoryMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof TourTourCategoryMinAggregateInput>;
    @Field(() => TourTourCategoryMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof TourTourCategoryMaxAggregateInput>;
}

@ObjectType()
export class TourTourCategoryGroupBy {
    @Field(() => Status, {nullable:false})
    status!: keyof typeof Status;
    @Field(() => Int, {nullable:false})
    tourId!: number;
    @Field(() => Int, {nullable:false})
    tourCategoryId!: number;
    @Field(() => TourTourCategoryCountAggregate, {nullable:true})
    _count?: InstanceType<typeof TourTourCategoryCountAggregate>;
    @Field(() => TourTourCategoryAvgAggregate, {nullable:true})
    _avg?: InstanceType<typeof TourTourCategoryAvgAggregate>;
    @Field(() => TourTourCategorySumAggregate, {nullable:true})
    _sum?: InstanceType<typeof TourTourCategorySumAggregate>;
    @Field(() => TourTourCategoryMinAggregate, {nullable:true})
    _min?: InstanceType<typeof TourTourCategoryMinAggregate>;
    @Field(() => TourTourCategoryMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof TourTourCategoryMaxAggregate>;
}

@InputType()
export class TourTourCategoryListRelationFilter {
    @Field(() => TourTourCategoryWhereInput, {nullable:true})
    every?: InstanceType<typeof TourTourCategoryWhereInput>;
    @Field(() => TourTourCategoryWhereInput, {nullable:true})
    some?: InstanceType<typeof TourTourCategoryWhereInput>;
    @Field(() => TourTourCategoryWhereInput, {nullable:true})
    none?: InstanceType<typeof TourTourCategoryWhereInput>;
}

@InputType()
export class TourTourCategoryMaxAggregateInput {
    @Field(() => Boolean, {nullable:true})
    status?: true;
    @Field(() => Boolean, {nullable:true})
    tourId?: true;
    @Field(() => Boolean, {nullable:true})
    tourCategoryId?: true;
}

@ObjectType()
export class TourTourCategoryMaxAggregate {
    @Field(() => Status, {nullable:true})
    status?: keyof typeof Status;
    @Field(() => Int, {nullable:true})
    tourId?: number;
    @Field(() => Int, {nullable:true})
    tourCategoryId?: number;
}

@InputType()
export class TourTourCategoryMaxOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    tourId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    tourCategoryId?: keyof typeof SortOrder;
}

@InputType()
export class TourTourCategoryMinAggregateInput {
    @Field(() => Boolean, {nullable:true})
    status?: true;
    @Field(() => Boolean, {nullable:true})
    tourId?: true;
    @Field(() => Boolean, {nullable:true})
    tourCategoryId?: true;
}

@ObjectType()
export class TourTourCategoryMinAggregate {
    @Field(() => Status, {nullable:true})
    status?: keyof typeof Status;
    @Field(() => Int, {nullable:true})
    tourId?: number;
    @Field(() => Int, {nullable:true})
    tourCategoryId?: number;
}

@InputType()
export class TourTourCategoryMinOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    tourId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    tourCategoryId?: keyof typeof SortOrder;
}

@InputType()
export class TourTourCategoryOrderByRelationAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    _count?: keyof typeof SortOrder;
}

@InputType()
export class TourTourCategoryOrderByWithAggregationInput {
    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    tourId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    tourCategoryId?: keyof typeof SortOrder;
    @Field(() => TourTourCategoryCountOrderByAggregateInput, {nullable:true})
    _count?: InstanceType<typeof TourTourCategoryCountOrderByAggregateInput>;
    @Field(() => TourTourCategoryAvgOrderByAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof TourTourCategoryAvgOrderByAggregateInput>;
    @Field(() => TourTourCategoryMaxOrderByAggregateInput, {nullable:true})
    _max?: InstanceType<typeof TourTourCategoryMaxOrderByAggregateInput>;
    @Field(() => TourTourCategoryMinOrderByAggregateInput, {nullable:true})
    _min?: InstanceType<typeof TourTourCategoryMinOrderByAggregateInput>;
    @Field(() => TourTourCategorySumOrderByAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof TourTourCategorySumOrderByAggregateInput>;
}

@InputType()
export class TourTourCategoryOrderByWithRelationInput {
    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;
    @Field(() => TourOrderByWithRelationInput, {nullable:true})
    tour?: InstanceType<typeof TourOrderByWithRelationInput>;
    @Field(() => SortOrder, {nullable:true})
    tourId?: keyof typeof SortOrder;
    @Field(() => TourCategoryOrderByWithRelationInput, {nullable:true})
    tourCategory?: InstanceType<typeof TourCategoryOrderByWithRelationInput>;
    @Field(() => SortOrder, {nullable:true})
    tourCategoryId?: keyof typeof SortOrder;
}

@InputType()
export class TourTourCategoryScalarWhereWithAggregatesInput {
    @Field(() => [TourTourCategoryScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<TourTourCategoryScalarWhereWithAggregatesInput>;
    @Field(() => [TourTourCategoryScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<TourTourCategoryScalarWhereWithAggregatesInput>;
    @Field(() => [TourTourCategoryScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<TourTourCategoryScalarWhereWithAggregatesInput>;
    @Field(() => EnumStatusWithAggregatesFilter, {nullable:true})
    status?: InstanceType<typeof EnumStatusWithAggregatesFilter>;
    @Field(() => IntWithAggregatesFilter, {nullable:true})
    tourId?: InstanceType<typeof IntWithAggregatesFilter>;
    @Field(() => IntWithAggregatesFilter, {nullable:true})
    tourCategoryId?: InstanceType<typeof IntWithAggregatesFilter>;
}

@InputType()
export class TourTourCategoryScalarWhereInput {
    @Field(() => [TourTourCategoryScalarWhereInput], {nullable:true})
    AND?: Array<TourTourCategoryScalarWhereInput>;
    @Field(() => [TourTourCategoryScalarWhereInput], {nullable:true})
    OR?: Array<TourTourCategoryScalarWhereInput>;
    @Field(() => [TourTourCategoryScalarWhereInput], {nullable:true})
    NOT?: Array<TourTourCategoryScalarWhereInput>;
    @Field(() => EnumStatusFilter, {nullable:true})
    status?: InstanceType<typeof EnumStatusFilter>;
    @Field(() => IntFilter, {nullable:true})
    tourId?: InstanceType<typeof IntFilter>;
    @Field(() => IntFilter, {nullable:true})
    tourCategoryId?: InstanceType<typeof IntFilter>;
}

@InputType()
export class TourTourCategorySumAggregateInput {
    @Field(() => Boolean, {nullable:true})
    tourId?: true;
    @Field(() => Boolean, {nullable:true})
    tourCategoryId?: true;
}

@ObjectType()
export class TourTourCategorySumAggregate {
    @Field(() => Int, {nullable:true})
    tourId?: number;
    @Field(() => Int, {nullable:true})
    tourCategoryId?: number;
}

@InputType()
export class TourTourCategorySumOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    tourId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    tourCategoryId?: keyof typeof SortOrder;
}

@InputType()
export class TourTourCategoryTourIdTourCategoryIdCompoundUniqueInput {
    @Field(() => Int, {nullable:false})
    tourId!: number;
    @Field(() => Int, {nullable:false})
    tourCategoryId!: number;
}

@InputType()
export class TourTourCategoryUncheckedCreateNestedManyWithoutTourCategoryInput {
    @Field(() => [TourTourCategoryCreateWithoutTourCategoryInput], {nullable:true})
    @Type(() => TourTourCategoryCreateWithoutTourCategoryInput)
    create?: Array<TourTourCategoryCreateWithoutTourCategoryInput>;
    @Field(() => [TourTourCategoryCreateOrConnectWithoutTourCategoryInput], {nullable:true})
    @Type(() => TourTourCategoryCreateOrConnectWithoutTourCategoryInput)
    connectOrCreate?: Array<TourTourCategoryCreateOrConnectWithoutTourCategoryInput>;
    @Field(() => TourTourCategoryCreateManyTourCategoryInputEnvelope, {nullable:true})
    @Type(() => TourTourCategoryCreateManyTourCategoryInputEnvelope)
    createMany?: InstanceType<typeof TourTourCategoryCreateManyTourCategoryInputEnvelope>;
    @Field(() => [TourTourCategoryWhereUniqueInput], {nullable:true})
    @Type(() => TourTourCategoryWhereUniqueInput)
    connect?: Array<TourTourCategoryWhereUniqueInput>;
}

@InputType()
export class TourTourCategoryUncheckedCreateNestedManyWithoutTourInput {
    @Field(() => [TourTourCategoryCreateWithoutTourInput], {nullable:true})
    @Type(() => TourTourCategoryCreateWithoutTourInput)
    create?: Array<TourTourCategoryCreateWithoutTourInput>;
    @Field(() => [TourTourCategoryCreateOrConnectWithoutTourInput], {nullable:true})
    @Type(() => TourTourCategoryCreateOrConnectWithoutTourInput)
    connectOrCreate?: Array<TourTourCategoryCreateOrConnectWithoutTourInput>;
    @Field(() => TourTourCategoryCreateManyTourInputEnvelope, {nullable:true})
    @Type(() => TourTourCategoryCreateManyTourInputEnvelope)
    createMany?: InstanceType<typeof TourTourCategoryCreateManyTourInputEnvelope>;
    @Field(() => [TourTourCategoryWhereUniqueInput], {nullable:true})
    @Type(() => TourTourCategoryWhereUniqueInput)
    connect?: Array<TourTourCategoryWhereUniqueInput>;
}

@InputType()
export class TourTourCategoryUncheckedCreateWithoutTourCategoryInput {
    @Field(() => Status, {nullable:true})
    status?: keyof typeof Status;
    @Field(() => Int, {nullable:false})
    tourId!: number;
}

@InputType()
export class TourTourCategoryUncheckedCreateWithoutTourInput {
    @Field(() => Status, {nullable:true})
    status?: keyof typeof Status;
    @Field(() => Int, {nullable:false})
    tourCategoryId!: number;
}

@InputType()
export class TourTourCategoryUncheckedCreateInput {
    @Field(() => Status, {nullable:true})
    status?: keyof typeof Status;
    @Field(() => Int, {nullable:false})
    tourId!: number;
    @Field(() => Int, {nullable:false})
    tourCategoryId!: number;
}

@InputType()
export class TourTourCategoryUncheckedUpdateManyWithoutTourCategoryInput {
    @Field(() => [TourTourCategoryCreateWithoutTourCategoryInput], {nullable:true})
    @Type(() => TourTourCategoryCreateWithoutTourCategoryInput)
    create?: Array<TourTourCategoryCreateWithoutTourCategoryInput>;
    @Field(() => [TourTourCategoryCreateOrConnectWithoutTourCategoryInput], {nullable:true})
    @Type(() => TourTourCategoryCreateOrConnectWithoutTourCategoryInput)
    connectOrCreate?: Array<TourTourCategoryCreateOrConnectWithoutTourCategoryInput>;
    @Field(() => [TourTourCategoryUpsertWithWhereUniqueWithoutTourCategoryInput], {nullable:true})
    @Type(() => TourTourCategoryUpsertWithWhereUniqueWithoutTourCategoryInput)
    upsert?: Array<TourTourCategoryUpsertWithWhereUniqueWithoutTourCategoryInput>;
    @Field(() => TourTourCategoryCreateManyTourCategoryInputEnvelope, {nullable:true})
    @Type(() => TourTourCategoryCreateManyTourCategoryInputEnvelope)
    createMany?: InstanceType<typeof TourTourCategoryCreateManyTourCategoryInputEnvelope>;
    @Field(() => [TourTourCategoryWhereUniqueInput], {nullable:true})
    @Type(() => TourTourCategoryWhereUniqueInput)
    set?: Array<TourTourCategoryWhereUniqueInput>;
    @Field(() => [TourTourCategoryWhereUniqueInput], {nullable:true})
    @Type(() => TourTourCategoryWhereUniqueInput)
    disconnect?: Array<TourTourCategoryWhereUniqueInput>;
    @Field(() => [TourTourCategoryWhereUniqueInput], {nullable:true})
    @Type(() => TourTourCategoryWhereUniqueInput)
    delete?: Array<TourTourCategoryWhereUniqueInput>;
    @Field(() => [TourTourCategoryWhereUniqueInput], {nullable:true})
    @Type(() => TourTourCategoryWhereUniqueInput)
    connect?: Array<TourTourCategoryWhereUniqueInput>;
    @Field(() => [TourTourCategoryUpdateWithWhereUniqueWithoutTourCategoryInput], {nullable:true})
    @Type(() => TourTourCategoryUpdateWithWhereUniqueWithoutTourCategoryInput)
    update?: Array<TourTourCategoryUpdateWithWhereUniqueWithoutTourCategoryInput>;
    @Field(() => [TourTourCategoryUpdateManyWithWhereWithoutTourCategoryInput], {nullable:true})
    @Type(() => TourTourCategoryUpdateManyWithWhereWithoutTourCategoryInput)
    updateMany?: Array<TourTourCategoryUpdateManyWithWhereWithoutTourCategoryInput>;
    @Field(() => [TourTourCategoryScalarWhereInput], {nullable:true})
    @Type(() => TourTourCategoryScalarWhereInput)
    deleteMany?: Array<TourTourCategoryScalarWhereInput>;
}

@InputType()
export class TourTourCategoryUncheckedUpdateManyWithoutTourTourCategoryInput {
    @Field(() => Status, {nullable:true})
    status?: keyof typeof Status;
    @Field(() => Int, {nullable:true})
    tourCategoryId?: number;
}

@InputType()
export class TourTourCategoryUncheckedUpdateManyWithoutTourInput {
    @Field(() => [TourTourCategoryCreateWithoutTourInput], {nullable:true})
    @Type(() => TourTourCategoryCreateWithoutTourInput)
    create?: Array<TourTourCategoryCreateWithoutTourInput>;
    @Field(() => [TourTourCategoryCreateOrConnectWithoutTourInput], {nullable:true})
    @Type(() => TourTourCategoryCreateOrConnectWithoutTourInput)
    connectOrCreate?: Array<TourTourCategoryCreateOrConnectWithoutTourInput>;
    @Field(() => [TourTourCategoryUpsertWithWhereUniqueWithoutTourInput], {nullable:true})
    @Type(() => TourTourCategoryUpsertWithWhereUniqueWithoutTourInput)
    upsert?: Array<TourTourCategoryUpsertWithWhereUniqueWithoutTourInput>;
    @Field(() => TourTourCategoryCreateManyTourInputEnvelope, {nullable:true})
    @Type(() => TourTourCategoryCreateManyTourInputEnvelope)
    createMany?: InstanceType<typeof TourTourCategoryCreateManyTourInputEnvelope>;
    @Field(() => [TourTourCategoryWhereUniqueInput], {nullable:true})
    @Type(() => TourTourCategoryWhereUniqueInput)
    set?: Array<TourTourCategoryWhereUniqueInput>;
    @Field(() => [TourTourCategoryWhereUniqueInput], {nullable:true})
    @Type(() => TourTourCategoryWhereUniqueInput)
    disconnect?: Array<TourTourCategoryWhereUniqueInput>;
    @Field(() => [TourTourCategoryWhereUniqueInput], {nullable:true})
    @Type(() => TourTourCategoryWhereUniqueInput)
    delete?: Array<TourTourCategoryWhereUniqueInput>;
    @Field(() => [TourTourCategoryWhereUniqueInput], {nullable:true})
    @Type(() => TourTourCategoryWhereUniqueInput)
    connect?: Array<TourTourCategoryWhereUniqueInput>;
    @Field(() => [TourTourCategoryUpdateWithWhereUniqueWithoutTourInput], {nullable:true})
    @Type(() => TourTourCategoryUpdateWithWhereUniqueWithoutTourInput)
    update?: Array<TourTourCategoryUpdateWithWhereUniqueWithoutTourInput>;
    @Field(() => [TourTourCategoryUpdateManyWithWhereWithoutTourInput], {nullable:true})
    @Type(() => TourTourCategoryUpdateManyWithWhereWithoutTourInput)
    updateMany?: Array<TourTourCategoryUpdateManyWithWhereWithoutTourInput>;
    @Field(() => [TourTourCategoryScalarWhereInput], {nullable:true})
    @Type(() => TourTourCategoryScalarWhereInput)
    deleteMany?: Array<TourTourCategoryScalarWhereInput>;
}

@InputType()
export class TourTourCategoryUncheckedUpdateManyInput {
    @Field(() => Status, {nullable:true})
    status?: keyof typeof Status;
    @Field(() => Int, {nullable:true})
    tourId?: number;
    @Field(() => Int, {nullable:true})
    tourCategoryId?: number;
}

@InputType()
export class TourTourCategoryUncheckedUpdateWithoutTourCategoryInput {
    @Field(() => Status, {nullable:true})
    status?: keyof typeof Status;
    @Field(() => Int, {nullable:true})
    tourId?: number;
}

@InputType()
export class TourTourCategoryUncheckedUpdateWithoutTourInput {
    @Field(() => Status, {nullable:true})
    status?: keyof typeof Status;
    @Field(() => Int, {nullable:true})
    tourCategoryId?: number;
}

@InputType()
export class TourTourCategoryUncheckedUpdateInput {
    @Field(() => Status, {nullable:true})
    status?: keyof typeof Status;
    @Field(() => Int, {nullable:true})
    tourId?: number;
    @Field(() => Int, {nullable:true})
    tourCategoryId?: number;
}

@InputType()
export class TourTourCategoryUpdateManyMutationInput {
    @Field(() => Status, {nullable:true})
    status?: keyof typeof Status;
}

@InputType()
export class TourTourCategoryUpdateManyWithWhereWithoutTourCategoryInput {
    @Field(() => TourTourCategoryScalarWhereInput, {nullable:false})
    @Type(() => TourTourCategoryScalarWhereInput)
    where!: InstanceType<typeof TourTourCategoryScalarWhereInput>;
    @Field(() => TourTourCategoryUpdateManyMutationInput, {nullable:false})
    @Type(() => TourTourCategoryUpdateManyMutationInput)
    data!: InstanceType<typeof TourTourCategoryUpdateManyMutationInput>;
}

@InputType()
export class TourTourCategoryUpdateManyWithWhereWithoutTourInput {
    @Field(() => TourTourCategoryScalarWhereInput, {nullable:false})
    @Type(() => TourTourCategoryScalarWhereInput)
    where!: InstanceType<typeof TourTourCategoryScalarWhereInput>;
    @Field(() => TourTourCategoryUpdateManyMutationInput, {nullable:false})
    @Type(() => TourTourCategoryUpdateManyMutationInput)
    data!: InstanceType<typeof TourTourCategoryUpdateManyMutationInput>;
}

@InputType()
export class TourTourCategoryUpdateManyWithoutTourCategoryInput {
    @Field(() => [TourTourCategoryCreateWithoutTourCategoryInput], {nullable:true})
    @Type(() => TourTourCategoryCreateWithoutTourCategoryInput)
    create?: Array<TourTourCategoryCreateWithoutTourCategoryInput>;
    @Field(() => [TourTourCategoryCreateOrConnectWithoutTourCategoryInput], {nullable:true})
    @Type(() => TourTourCategoryCreateOrConnectWithoutTourCategoryInput)
    connectOrCreate?: Array<TourTourCategoryCreateOrConnectWithoutTourCategoryInput>;
    @Field(() => [TourTourCategoryUpsertWithWhereUniqueWithoutTourCategoryInput], {nullable:true})
    @Type(() => TourTourCategoryUpsertWithWhereUniqueWithoutTourCategoryInput)
    upsert?: Array<TourTourCategoryUpsertWithWhereUniqueWithoutTourCategoryInput>;
    @Field(() => TourTourCategoryCreateManyTourCategoryInputEnvelope, {nullable:true})
    @Type(() => TourTourCategoryCreateManyTourCategoryInputEnvelope)
    createMany?: InstanceType<typeof TourTourCategoryCreateManyTourCategoryInputEnvelope>;
    @Field(() => [TourTourCategoryWhereUniqueInput], {nullable:true})
    @Type(() => TourTourCategoryWhereUniqueInput)
    set?: Array<TourTourCategoryWhereUniqueInput>;
    @Field(() => [TourTourCategoryWhereUniqueInput], {nullable:true})
    @Type(() => TourTourCategoryWhereUniqueInput)
    disconnect?: Array<TourTourCategoryWhereUniqueInput>;
    @Field(() => [TourTourCategoryWhereUniqueInput], {nullable:true})
    @Type(() => TourTourCategoryWhereUniqueInput)
    delete?: Array<TourTourCategoryWhereUniqueInput>;
    @Field(() => [TourTourCategoryWhereUniqueInput], {nullable:true})
    @Type(() => TourTourCategoryWhereUniqueInput)
    connect?: Array<TourTourCategoryWhereUniqueInput>;
    @Field(() => [TourTourCategoryUpdateWithWhereUniqueWithoutTourCategoryInput], {nullable:true})
    @Type(() => TourTourCategoryUpdateWithWhereUniqueWithoutTourCategoryInput)
    update?: Array<TourTourCategoryUpdateWithWhereUniqueWithoutTourCategoryInput>;
    @Field(() => [TourTourCategoryUpdateManyWithWhereWithoutTourCategoryInput], {nullable:true})
    @Type(() => TourTourCategoryUpdateManyWithWhereWithoutTourCategoryInput)
    updateMany?: Array<TourTourCategoryUpdateManyWithWhereWithoutTourCategoryInput>;
    @Field(() => [TourTourCategoryScalarWhereInput], {nullable:true})
    @Type(() => TourTourCategoryScalarWhereInput)
    deleteMany?: Array<TourTourCategoryScalarWhereInput>;
}

@InputType()
export class TourTourCategoryUpdateManyWithoutTourInput {
    @Field(() => [TourTourCategoryCreateWithoutTourInput], {nullable:true})
    @Type(() => TourTourCategoryCreateWithoutTourInput)
    create?: Array<TourTourCategoryCreateWithoutTourInput>;
    @Field(() => [TourTourCategoryCreateOrConnectWithoutTourInput], {nullable:true})
    @Type(() => TourTourCategoryCreateOrConnectWithoutTourInput)
    connectOrCreate?: Array<TourTourCategoryCreateOrConnectWithoutTourInput>;
    @Field(() => [TourTourCategoryUpsertWithWhereUniqueWithoutTourInput], {nullable:true})
    @Type(() => TourTourCategoryUpsertWithWhereUniqueWithoutTourInput)
    upsert?: Array<TourTourCategoryUpsertWithWhereUniqueWithoutTourInput>;
    @Field(() => TourTourCategoryCreateManyTourInputEnvelope, {nullable:true})
    @Type(() => TourTourCategoryCreateManyTourInputEnvelope)
    createMany?: InstanceType<typeof TourTourCategoryCreateManyTourInputEnvelope>;
    @Field(() => [TourTourCategoryWhereUniqueInput], {nullable:true})
    @Type(() => TourTourCategoryWhereUniqueInput)
    set?: Array<TourTourCategoryWhereUniqueInput>;
    @Field(() => [TourTourCategoryWhereUniqueInput], {nullable:true})
    @Type(() => TourTourCategoryWhereUniqueInput)
    disconnect?: Array<TourTourCategoryWhereUniqueInput>;
    @Field(() => [TourTourCategoryWhereUniqueInput], {nullable:true})
    @Type(() => TourTourCategoryWhereUniqueInput)
    delete?: Array<TourTourCategoryWhereUniqueInput>;
    @Field(() => [TourTourCategoryWhereUniqueInput], {nullable:true})
    @Type(() => TourTourCategoryWhereUniqueInput)
    connect?: Array<TourTourCategoryWhereUniqueInput>;
    @Field(() => [TourTourCategoryUpdateWithWhereUniqueWithoutTourInput], {nullable:true})
    @Type(() => TourTourCategoryUpdateWithWhereUniqueWithoutTourInput)
    update?: Array<TourTourCategoryUpdateWithWhereUniqueWithoutTourInput>;
    @Field(() => [TourTourCategoryUpdateManyWithWhereWithoutTourInput], {nullable:true})
    @Type(() => TourTourCategoryUpdateManyWithWhereWithoutTourInput)
    updateMany?: Array<TourTourCategoryUpdateManyWithWhereWithoutTourInput>;
    @Field(() => [TourTourCategoryScalarWhereInput], {nullable:true})
    @Type(() => TourTourCategoryScalarWhereInput)
    deleteMany?: Array<TourTourCategoryScalarWhereInput>;
}

@InputType()
export class TourTourCategoryUpdateWithWhereUniqueWithoutTourCategoryInput {
    @Field(() => TourTourCategoryWhereUniqueInput, {nullable:false})
    @Type(() => TourTourCategoryWhereUniqueInput)
    where!: InstanceType<typeof TourTourCategoryWhereUniqueInput>;
    @Field(() => TourTourCategoryUpdateWithoutTourCategoryInput, {nullable:false})
    @Type(() => TourTourCategoryUpdateWithoutTourCategoryInput)
    data!: InstanceType<typeof TourTourCategoryUpdateWithoutTourCategoryInput>;
}

@InputType()
export class TourTourCategoryUpdateWithWhereUniqueWithoutTourInput {
    @Field(() => TourTourCategoryWhereUniqueInput, {nullable:false})
    @Type(() => TourTourCategoryWhereUniqueInput)
    where!: InstanceType<typeof TourTourCategoryWhereUniqueInput>;
    @Field(() => TourTourCategoryUpdateWithoutTourInput, {nullable:false})
    @Type(() => TourTourCategoryUpdateWithoutTourInput)
    data!: InstanceType<typeof TourTourCategoryUpdateWithoutTourInput>;
}

@InputType()
export class TourTourCategoryUpdateWithoutTourCategoryInput {
    @Field(() => Status, {nullable:true})
    status?: keyof typeof Status;
    @Field(() => TourUpdateOneWithoutTourTourCategoryInput, {nullable:true})
    tour?: InstanceType<typeof TourUpdateOneWithoutTourTourCategoryInput>;
}

@InputType()
export class TourTourCategoryUpdateWithoutTourInput {
    @Field(() => Status, {nullable:true})
    status?: keyof typeof Status;
    @Field(() => TourCategoryUpdateOneRequiredWithoutTourTourCategoryInput, {nullable:true})
    tourCategory?: InstanceType<typeof TourCategoryUpdateOneRequiredWithoutTourTourCategoryInput>;
}

@InputType()
export class TourTourCategoryUpdateInput {
    @Field(() => Status, {nullable:true})
    status?: keyof typeof Status;
    @Field(() => TourUpdateOneWithoutTourTourCategoryInput, {nullable:true})
    tour?: InstanceType<typeof TourUpdateOneWithoutTourTourCategoryInput>;
    @Field(() => TourCategoryUpdateOneRequiredWithoutTourTourCategoryInput, {nullable:true})
    tourCategory?: InstanceType<typeof TourCategoryUpdateOneRequiredWithoutTourTourCategoryInput>;
}

@InputType()
export class TourTourCategoryUpsertWithWhereUniqueWithoutTourCategoryInput {
    @Field(() => TourTourCategoryWhereUniqueInput, {nullable:false})
    @Type(() => TourTourCategoryWhereUniqueInput)
    where!: InstanceType<typeof TourTourCategoryWhereUniqueInput>;
    @Field(() => TourTourCategoryUpdateWithoutTourCategoryInput, {nullable:false})
    @Type(() => TourTourCategoryUpdateWithoutTourCategoryInput)
    update!: InstanceType<typeof TourTourCategoryUpdateWithoutTourCategoryInput>;
    @Field(() => TourTourCategoryCreateWithoutTourCategoryInput, {nullable:false})
    @Type(() => TourTourCategoryCreateWithoutTourCategoryInput)
    create!: InstanceType<typeof TourTourCategoryCreateWithoutTourCategoryInput>;
}

@InputType()
export class TourTourCategoryUpsertWithWhereUniqueWithoutTourInput {
    @Field(() => TourTourCategoryWhereUniqueInput, {nullable:false})
    @Type(() => TourTourCategoryWhereUniqueInput)
    where!: InstanceType<typeof TourTourCategoryWhereUniqueInput>;
    @Field(() => TourTourCategoryUpdateWithoutTourInput, {nullable:false})
    @Type(() => TourTourCategoryUpdateWithoutTourInput)
    update!: InstanceType<typeof TourTourCategoryUpdateWithoutTourInput>;
    @Field(() => TourTourCategoryCreateWithoutTourInput, {nullable:false})
    @Type(() => TourTourCategoryCreateWithoutTourInput)
    create!: InstanceType<typeof TourTourCategoryCreateWithoutTourInput>;
}

@InputType()
export class TourTourCategoryWhereUniqueInput {
    @Field(() => TourTourCategoryTourIdTourCategoryIdCompoundUniqueInput, {nullable:true})
    tourId_tourCategoryId?: InstanceType<typeof TourTourCategoryTourIdTourCategoryIdCompoundUniqueInput>;
}

@InputType()
export class TourTourCategoryWhereInput {
    @Field(() => [TourTourCategoryWhereInput], {nullable:true})
    AND?: Array<TourTourCategoryWhereInput>;
    @Field(() => [TourTourCategoryWhereInput], {nullable:true})
    OR?: Array<TourTourCategoryWhereInput>;
    @Field(() => [TourTourCategoryWhereInput], {nullable:true})
    NOT?: Array<TourTourCategoryWhereInput>;
    @Field(() => EnumStatusFilter, {nullable:true})
    status?: InstanceType<typeof EnumStatusFilter>;
    @Field(() => TourRelationFilter, {nullable:true})
    tour?: InstanceType<typeof TourRelationFilter>;
    @Field(() => IntFilter, {nullable:true})
    tourId?: InstanceType<typeof IntFilter>;
    @Field(() => TourCategoryRelationFilter, {nullable:true})
    tourCategory?: InstanceType<typeof TourCategoryRelationFilter>;
    @Field(() => IntFilter, {nullable:true})
    tourCategoryId?: InstanceType<typeof IntFilter>;
}

@ObjectType()
export class TourTourCategory {
    @Field(() => Status, {nullable:false,defaultValue:'ACTIVE'})
    status!: keyof typeof Status;
    @Field(() => Tour, {nullable:true})
    tour?: InstanceType<typeof Tour> | null;
    @Field(() => Int, {nullable:false})
    tourId!: number;
    @Field(() => TourCategory, {nullable:false})
    tourCategory?: InstanceType<typeof TourCategory>;
    @Field(() => Int, {nullable:false})
    tourCategoryId!: number;
}

@ArgsType()
export class UpdateManyTourTourCategoryArgs {
    @Field(() => TourTourCategoryUpdateManyMutationInput, {nullable:false})
    @Type(() => TourTourCategoryUpdateManyMutationInput)
    @ValidateNested({ each: true })
    data!: InstanceType<typeof TourTourCategoryUpdateManyMutationInput>;
    @Field(() => TourTourCategoryWhereInput, {nullable:true})
    @Type(() => TourTourCategoryWhereInput)
    @ValidateNested({ each: true })
    where?: InstanceType<typeof TourTourCategoryWhereInput>;
}

@ArgsType()
export class UpdateOneTourTourCategoryArgs {
    @Field(() => TourTourCategoryUpdateInput, {nullable:false})
    @Type(() => TourTourCategoryUpdateInput)
    @ValidateNested({ each: true })
    data!: InstanceType<typeof TourTourCategoryUpdateInput>;
    @Field(() => TourTourCategoryWhereUniqueInput, {nullable:false})
    @Type(() => TourTourCategoryWhereUniqueInput)
    @ValidateNested({ each: true })
    where!: InstanceType<typeof TourTourCategoryWhereUniqueInput>;
}

@ArgsType()
export class UpsertOneTourTourCategoryArgs {
    @Field(() => TourTourCategoryWhereUniqueInput, {nullable:false})
    @Type(() => TourTourCategoryWhereUniqueInput)
    @ValidateNested({ each: true })
    where!: InstanceType<typeof TourTourCategoryWhereUniqueInput>;
    @Field(() => TourTourCategoryCreateInput, {nullable:false})
    @Type(() => TourTourCategoryCreateInput)
    create!: InstanceType<typeof TourTourCategoryCreateInput>;
    @Field(() => TourTourCategoryUpdateInput, {nullable:false})
    @Type(() => TourTourCategoryUpdateInput)
    update!: InstanceType<typeof TourTourCategoryUpdateInput>;
}

@ObjectType()
export class AggregateUser {
    @Field(() => UserCountAggregate, {nullable:true})
    _count?: InstanceType<typeof UserCountAggregate>;
    @Field(() => UserAvgAggregate, {nullable:true})
    _avg?: InstanceType<typeof UserAvgAggregate>;
    @Field(() => UserSumAggregate, {nullable:true})
    _sum?: InstanceType<typeof UserSumAggregate>;
    @Field(() => UserMinAggregate, {nullable:true})
    _min?: InstanceType<typeof UserMinAggregate>;
    @Field(() => UserMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof UserMaxAggregate>;
}

@ArgsType()
export class CreateManyUserArgs {
    @Field(() => [UserCreateManyInput], {nullable:false})
    @Type(() => UserCreateManyInput)
    @ValidateNested({ each: true })
    data!: Array<UserCreateManyInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@ArgsType()
export class CreateOneUserArgs {
    @Field(() => UserCreateInput, {nullable:false})
    @Type(() => UserCreateInput)
    @ValidateNested({ each: true })
    data!: InstanceType<typeof UserCreateInput>;
}

@ArgsType()
export class DeleteManyUserArgs {
    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    @ValidateNested({ each: true })
    where?: InstanceType<typeof UserWhereInput>;
}

@ArgsType()
export class DeleteOneUserArgs {
    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    @ValidateNested({ each: true })
    where!: InstanceType<typeof UserWhereUniqueInput>;
}

@ArgsType()
export class FindFirstUserArgs {
    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    @ValidateNested({ each: true })
    where?: InstanceType<typeof UserWhereInput>;
    @Field(() => [UserOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<UserOrderByWithRelationInput>;
    @Field(() => UserWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof UserWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [UserScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof UserScalarFieldEnum>;
}

@ArgsType()
export class FindManyUserArgs {
    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    @ValidateNested({ each: true })
    where?: InstanceType<typeof UserWhereInput>;
    @Field(() => [UserOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<UserOrderByWithRelationInput>;
    @Field(() => UserWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof UserWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [UserScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof UserScalarFieldEnum>;
}

@ArgsType()
export class FindUniqueUserArgs {
    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    @ValidateNested({ each: true })
    where!: InstanceType<typeof UserWhereUniqueInput>;
}

@ArgsType()
export class UpdateManyUserArgs {
    @Field(() => UserUpdateManyMutationInput, {nullable:false})
    @Type(() => UserUpdateManyMutationInput)
    @ValidateNested({ each: true })
    data!: InstanceType<typeof UserUpdateManyMutationInput>;
    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    @ValidateNested({ each: true })
    where?: InstanceType<typeof UserWhereInput>;
}

@ArgsType()
export class UpdateOneUserArgs {
    @Field(() => UserUpdateInput, {nullable:false})
    @Type(() => UserUpdateInput)
    @ValidateNested({ each: true })
    data!: InstanceType<typeof UserUpdateInput>;
    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    @ValidateNested({ each: true })
    where!: InstanceType<typeof UserWhereUniqueInput>;
}

@ArgsType()
export class UpsertOneUserArgs {
    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    @ValidateNested({ each: true })
    where!: InstanceType<typeof UserWhereUniqueInput>;
    @Field(() => UserCreateInput, {nullable:false})
    @Type(() => UserCreateInput)
    create!: InstanceType<typeof UserCreateInput>;
    @Field(() => UserUpdateInput, {nullable:false})
    @Type(() => UserUpdateInput)
    update!: InstanceType<typeof UserUpdateInput>;
}

@ArgsType()
export class UserAggregateArgs {
    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    @ValidateNested({ each: true })
    where?: InstanceType<typeof UserWhereInput>;
    @Field(() => [UserOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<UserOrderByWithRelationInput>;
    @Field(() => UserWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof UserWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => UserCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof UserCountAggregateInput>;
    @Field(() => UserAvgAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof UserAvgAggregateInput>;
    @Field(() => UserSumAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof UserSumAggregateInput>;
    @Field(() => UserMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof UserMinAggregateInput>;
    @Field(() => UserMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof UserMaxAggregateInput>;
}

@InputType()
export class UserAvgAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    countryId?: true;
    @Field(() => Boolean, {nullable:true})
    rating?: true;
}

@ObjectType()
export class UserAvgAggregate {
    @Field(() => Float, {nullable:true})
    id?: number;
    @Field(() => Float, {nullable:true})
    countryId?: number;
    @Field(() => Float, {nullable:true})
    rating?: number;
}

@InputType()
export class UserAvgOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    countryId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    rating?: keyof typeof SortOrder;
}

@InputType()
export class UserCountAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    email?: true;
    @Field(() => Boolean, {nullable:true})
    firstName?: true;
    @Field(() => Boolean, {nullable:true})
    lastName?: true;
    @Field(() => Boolean, {nullable:true})
    password?: true;
    @Field(() => Boolean, {nullable:true})
    status?: true;
    @Field(() => Boolean, {nullable:true})
    image?: true;
    @Field(() => Boolean, {nullable:true})
    countryId?: true;
    @Field(() => Boolean, {nullable:true})
    role?: true;
    @Field(() => Boolean, {nullable:true})
    bio?: true;
    @Field(() => Boolean, {nullable:true})
    hash?: true;
    @Field(() => Boolean, {nullable:true})
    hashExpiredAt?: true;
    @Field(() => Boolean, {nullable:true})
    rating?: true;
    @Field(() => Boolean, {nullable:true})
    isVerified?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
    @Field(() => Boolean, {nullable:true})
    _all?: true;
}

@ObjectType()
export class UserCountAggregate {
    @Field(() => Int, {nullable:false})
    id!: number;
    @Field(() => Int, {nullable:false})
    email!: number;
    @Field(() => Int, {nullable:false})
    firstName!: number;
    @Field(() => Int, {nullable:false})
    lastName!: number;
    @HideField()
    password!: number;
    @Field(() => Int, {nullable:false})
    status!: number;
    @Field(() => Int, {nullable:false})
    image!: number;
    @Field(() => Int, {nullable:false})
    countryId!: number;
    @Field(() => Int, {nullable:false})
    role!: number;
    @Field(() => Int, {nullable:false})
    bio!: number;
    @Field(() => Int, {nullable:false})
    hash!: number;
    @Field(() => Int, {nullable:false})
    hashExpiredAt!: number;
    @Field(() => Int, {nullable:false})
    rating!: number;
    @Field(() => Int, {nullable:false})
    isVerified!: number;
    @Field(() => Int, {nullable:false})
    createdAt!: number;
    @Field(() => Int, {nullable:false})
    updatedAt!: number;
    @Field(() => Int, {nullable:false})
    _all!: number;
}

@InputType()
export class UserCountOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    email?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    firstName?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    lastName?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    password?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    image?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    countryId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    role?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    bio?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    hash?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    hashExpiredAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    rating?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    isVerified?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
}

@ObjectType()
export class UserCount {
    @Field(() => Int, {nullable:false})
    Tour?: number;
}

@InputType()
export class UserCreateManyCountryInputEnvelope {
    @Field(() => [UserCreateManyCountryInput], {nullable:false})
    @Type(() => UserCreateManyCountryInput)
    data!: Array<UserCreateManyCountryInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@InputType()
export class UserCreateManyCountryInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:false})
    @Validator.IsNotEmpty()
    @Validator.IsEmail()
    email!: string;
    @Field(() => String, {nullable:false})
    @Validator.IsNotEmpty()
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(2)
    firstName!: string;
    @Field(() => String, {nullable:false})
    @Validator.IsNotEmpty()
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(2)
    lastName!: string;
    @Field(() => String, {nullable:false})
    @Validator.IsNotEmpty()
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(8)
    @Validator.Matches(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]+$/, {message: 'password too weak'})
    password!: string;
    @Field(() => Status, {nullable:true})
    @Validator.IsString()
    status?: keyof typeof Status;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    image?: string;
    @Field(() => UserRole, {nullable:false})
    @Validator.IsString()
    role!: keyof typeof UserRole;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    bio?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    hash?: string;
    @Field(() => Date, {nullable:true})
    hashExpiredAt?: Date | string;
    @Field(() => Float, {nullable:true})
    rating?: number;
    @Field(() => YesNo, {nullable:true})
    isVerified?: keyof typeof YesNo;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class UserCreateManyInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:false})
    @Validator.IsNotEmpty()
    @Validator.IsEmail()
    email!: string;
    @Field(() => String, {nullable:false})
    @Validator.IsNotEmpty()
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(2)
    firstName!: string;
    @Field(() => String, {nullable:false})
    @Validator.IsNotEmpty()
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(2)
    lastName!: string;
    @Field(() => String, {nullable:false})
    @Validator.IsNotEmpty()
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(8)
    @Validator.Matches(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]+$/, {message: 'password too weak'})
    password!: string;
    @Field(() => Status, {nullable:true})
    @Validator.IsString()
    status?: keyof typeof Status;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    image?: string;
    @Field(() => Int, {nullable:true})
    countryId?: number;
    @Field(() => UserRole, {nullable:false})
    @Validator.IsString()
    role!: keyof typeof UserRole;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    bio?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    hash?: string;
    @Field(() => Date, {nullable:true})
    hashExpiredAt?: Date | string;
    @Field(() => Float, {nullable:true})
    rating?: number;
    @Field(() => YesNo, {nullable:true})
    isVerified?: keyof typeof YesNo;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class UserCreateNestedManyWithoutCountryInput {
    @Field(() => [UserCreateWithoutCountryInput], {nullable:true})
    @Type(() => UserCreateWithoutCountryInput)
    create?: Array<UserCreateWithoutCountryInput>;
    @Field(() => [UserCreateOrConnectWithoutCountryInput], {nullable:true})
    @Type(() => UserCreateOrConnectWithoutCountryInput)
    connectOrCreate?: Array<UserCreateOrConnectWithoutCountryInput>;
    @Field(() => UserCreateManyCountryInputEnvelope, {nullable:true})
    @Type(() => UserCreateManyCountryInputEnvelope)
    createMany?: InstanceType<typeof UserCreateManyCountryInputEnvelope>;
    @Field(() => [UserWhereUniqueInput], {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Array<UserWhereUniqueInput>;
}

@InputType()
export class UserCreateNestedOneWithoutTourInput {
    @Field(() => UserCreateWithoutTourInput, {nullable:true})
    @Type(() => UserCreateWithoutTourInput)
    create?: InstanceType<typeof UserCreateWithoutTourInput>;
    @Field(() => UserCreateOrConnectWithoutTourInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutTourInput)
    connectOrCreate?: InstanceType<typeof UserCreateOrConnectWithoutTourInput>;
    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: InstanceType<typeof UserWhereUniqueInput>;
}

@InputType()
export class UserCreateOrConnectWithoutCountryInput {
    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: InstanceType<typeof UserWhereUniqueInput>;
    @Field(() => UserCreateWithoutCountryInput, {nullable:false})
    @Type(() => UserCreateWithoutCountryInput)
    create!: InstanceType<typeof UserCreateWithoutCountryInput>;
}

@InputType()
export class UserCreateOrConnectWithoutTourInput {
    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: InstanceType<typeof UserWhereUniqueInput>;
    @Field(() => UserCreateWithoutTourInput, {nullable:false})
    @Type(() => UserCreateWithoutTourInput)
    create!: InstanceType<typeof UserCreateWithoutTourInput>;
}

@InputType()
export class UserCreateWithoutCountryInput {
    @Field(() => String, {nullable:false})
    @Validator.IsNotEmpty()
    @Validator.IsEmail()
    email!: string;
    @Field(() => String, {nullable:false})
    @Validator.IsNotEmpty()
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(2)
    firstName!: string;
    @Field(() => String, {nullable:false})
    @Validator.IsNotEmpty()
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(2)
    lastName!: string;
    @Field(() => String, {nullable:false})
    @Validator.IsNotEmpty()
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(8)
    @Validator.Matches(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]+$/, {message: 'password too weak'})
    password!: string;
    @Field(() => Status, {nullable:true})
    @Validator.IsString()
    status?: keyof typeof Status;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    image?: string;
    @Field(() => UserRole, {nullable:false})
    @Validator.IsString()
    role!: keyof typeof UserRole;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    bio?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    hash?: string;
    @Field(() => Date, {nullable:true})
    hashExpiredAt?: Date | string;
    @Field(() => Float, {nullable:true})
    rating?: number;
    @Field(() => YesNo, {nullable:true})
    isVerified?: keyof typeof YesNo;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => TourCreateNestedManyWithoutGuideInput, {nullable:true})
    Tour?: InstanceType<typeof TourCreateNestedManyWithoutGuideInput>;
}

@InputType()
export class UserCreateWithoutTourInput {
    @Field(() => String, {nullable:false})
    @Validator.IsNotEmpty()
    @Validator.IsEmail()
    email!: string;
    @Field(() => String, {nullable:false})
    @Validator.IsNotEmpty()
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(2)
    firstName!: string;
    @Field(() => String, {nullable:false})
    @Validator.IsNotEmpty()
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(2)
    lastName!: string;
    @Field(() => String, {nullable:false})
    @Validator.IsNotEmpty()
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(8)
    @Validator.Matches(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]+$/, {message: 'password too weak'})
    password!: string;
    @Field(() => Status, {nullable:true})
    @Validator.IsString()
    status?: keyof typeof Status;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    image?: string;
    @Field(() => CountryCreateNestedOneWithoutUserInput, {nullable:true})
    country?: InstanceType<typeof CountryCreateNestedOneWithoutUserInput>;
    @Field(() => UserRole, {nullable:false})
    @Validator.IsString()
    role!: keyof typeof UserRole;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    bio?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    hash?: string;
    @Field(() => Date, {nullable:true})
    hashExpiredAt?: Date | string;
    @Field(() => Float, {nullable:true})
    rating?: number;
    @Field(() => YesNo, {nullable:true})
    isVerified?: keyof typeof YesNo;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class UserCreateInput {
    @Field(() => String, {nullable:false})
    @Validator.IsNotEmpty()
    @Validator.IsEmail()
    email!: string;
    @Field(() => String, {nullable:false})
    @Validator.IsNotEmpty()
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(2)
    firstName!: string;
    @Field(() => String, {nullable:false})
    @Validator.IsNotEmpty()
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(2)
    lastName!: string;
    @Field(() => String, {nullable:false})
    @Validator.IsNotEmpty()
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(8)
    @Validator.Matches(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]+$/, {message: 'password too weak'})
    password!: string;
    @Field(() => Status, {nullable:true})
    @Validator.IsString()
    status?: keyof typeof Status;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    image?: string;
    @Field(() => CountryCreateNestedOneWithoutUserInput, {nullable:true})
    country?: InstanceType<typeof CountryCreateNestedOneWithoutUserInput>;
    @Field(() => UserRole, {nullable:false})
    @Validator.IsString()
    role!: keyof typeof UserRole;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    bio?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    hash?: string;
    @Field(() => Date, {nullable:true})
    hashExpiredAt?: Date | string;
    @Field(() => Float, {nullable:true})
    rating?: number;
    @Field(() => YesNo, {nullable:true})
    isVerified?: keyof typeof YesNo;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => TourCreateNestedManyWithoutGuideInput, {nullable:true})
    Tour?: InstanceType<typeof TourCreateNestedManyWithoutGuideInput>;
}

@ArgsType()
export class UserGroupByArgs {
    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    @ValidateNested({ each: true })
    where?: InstanceType<typeof UserWhereInput>;
    @Field(() => [UserOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<UserOrderByWithAggregationInput>;
    @Field(() => [UserScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof UserScalarFieldEnum>;
    @Field(() => UserScalarWhereWithAggregatesInput, {nullable:true})
    having?: InstanceType<typeof UserScalarWhereWithAggregatesInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => UserCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof UserCountAggregateInput>;
    @Field(() => UserAvgAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof UserAvgAggregateInput>;
    @Field(() => UserSumAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof UserSumAggregateInput>;
    @Field(() => UserMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof UserMinAggregateInput>;
    @Field(() => UserMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof UserMaxAggregateInput>;
}

@ObjectType()
export class UserGroupBy {
    @Field(() => Int, {nullable:false})
    id!: number;
    @Field(() => String, {nullable:false})
    @Validator.IsNotEmpty()
    @Validator.IsEmail()
    email!: string;
    @Field(() => String, {nullable:false})
    @Validator.IsNotEmpty()
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(2)
    firstName!: string;
    @Field(() => String, {nullable:false})
    @Validator.IsNotEmpty()
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(2)
    lastName!: string;
    @HideField()
    password!: string;
    @Field(() => Status, {nullable:false})
    @Validator.IsString()
    status!: keyof typeof Status;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    image?: string;
    @Field(() => Int, {nullable:true})
    countryId?: number;
    @Field(() => UserRole, {nullable:false})
    @Validator.IsString()
    role!: keyof typeof UserRole;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    bio?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    hash?: string;
    @Field(() => Date, {nullable:true})
    hashExpiredAt?: Date | string;
    @Field(() => Float, {nullable:true})
    rating?: number;
    @Field(() => YesNo, {nullable:false})
    isVerified!: keyof typeof YesNo;
    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;
    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;
    @Field(() => UserCountAggregate, {nullable:true})
    _count?: InstanceType<typeof UserCountAggregate>;
    @Field(() => UserAvgAggregate, {nullable:true})
    _avg?: InstanceType<typeof UserAvgAggregate>;
    @Field(() => UserSumAggregate, {nullable:true})
    _sum?: InstanceType<typeof UserSumAggregate>;
    @Field(() => UserMinAggregate, {nullable:true})
    _min?: InstanceType<typeof UserMinAggregate>;
    @Field(() => UserMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof UserMaxAggregate>;
}

@InputType()
export class UserListRelationFilter {
    @Field(() => UserWhereInput, {nullable:true})
    every?: InstanceType<typeof UserWhereInput>;
    @Field(() => UserWhereInput, {nullable:true})
    some?: InstanceType<typeof UserWhereInput>;
    @Field(() => UserWhereInput, {nullable:true})
    none?: InstanceType<typeof UserWhereInput>;
}

@InputType()
export class UserMaxAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    email?: true;
    @Field(() => Boolean, {nullable:true})
    firstName?: true;
    @Field(() => Boolean, {nullable:true})
    lastName?: true;
    @Field(() => Boolean, {nullable:true})
    password?: true;
    @Field(() => Boolean, {nullable:true})
    status?: true;
    @Field(() => Boolean, {nullable:true})
    image?: true;
    @Field(() => Boolean, {nullable:true})
    countryId?: true;
    @Field(() => Boolean, {nullable:true})
    role?: true;
    @Field(() => Boolean, {nullable:true})
    bio?: true;
    @Field(() => Boolean, {nullable:true})
    hash?: true;
    @Field(() => Boolean, {nullable:true})
    hashExpiredAt?: true;
    @Field(() => Boolean, {nullable:true})
    rating?: true;
    @Field(() => Boolean, {nullable:true})
    isVerified?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
}

@ObjectType()
export class UserMaxAggregate {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:true})
    @Validator.IsNotEmpty()
    @Validator.IsEmail()
    email?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsNotEmpty()
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(2)
    firstName?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsNotEmpty()
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(2)
    lastName?: string;
    @HideField()
    password?: string;
    @Field(() => Status, {nullable:true})
    @Validator.IsString()
    status?: keyof typeof Status;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    image?: string;
    @Field(() => Int, {nullable:true})
    countryId?: number;
    @Field(() => UserRole, {nullable:true})
    @Validator.IsString()
    role?: keyof typeof UserRole;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    bio?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    hash?: string;
    @Field(() => Date, {nullable:true})
    hashExpiredAt?: Date | string;
    @Field(() => Float, {nullable:true})
    rating?: number;
    @Field(() => YesNo, {nullable:true})
    isVerified?: keyof typeof YesNo;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class UserMaxOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    email?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    firstName?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    lastName?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    password?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    image?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    countryId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    role?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    bio?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    hash?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    hashExpiredAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    rating?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    isVerified?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
}

@InputType()
export class UserMinAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    email?: true;
    @Field(() => Boolean, {nullable:true})
    firstName?: true;
    @Field(() => Boolean, {nullable:true})
    lastName?: true;
    @Field(() => Boolean, {nullable:true})
    password?: true;
    @Field(() => Boolean, {nullable:true})
    status?: true;
    @Field(() => Boolean, {nullable:true})
    image?: true;
    @Field(() => Boolean, {nullable:true})
    countryId?: true;
    @Field(() => Boolean, {nullable:true})
    role?: true;
    @Field(() => Boolean, {nullable:true})
    bio?: true;
    @Field(() => Boolean, {nullable:true})
    hash?: true;
    @Field(() => Boolean, {nullable:true})
    hashExpiredAt?: true;
    @Field(() => Boolean, {nullable:true})
    rating?: true;
    @Field(() => Boolean, {nullable:true})
    isVerified?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
}

@ObjectType()
export class UserMinAggregate {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:true})
    @Validator.IsNotEmpty()
    @Validator.IsEmail()
    email?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsNotEmpty()
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(2)
    firstName?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsNotEmpty()
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(2)
    lastName?: string;
    @HideField()
    password?: string;
    @Field(() => Status, {nullable:true})
    @Validator.IsString()
    status?: keyof typeof Status;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    image?: string;
    @Field(() => Int, {nullable:true})
    countryId?: number;
    @Field(() => UserRole, {nullable:true})
    @Validator.IsString()
    role?: keyof typeof UserRole;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    bio?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    hash?: string;
    @Field(() => Date, {nullable:true})
    hashExpiredAt?: Date | string;
    @Field(() => Float, {nullable:true})
    rating?: number;
    @Field(() => YesNo, {nullable:true})
    isVerified?: keyof typeof YesNo;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class UserMinOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    email?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    firstName?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    lastName?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    password?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    image?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    countryId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    role?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    bio?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    hash?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    hashExpiredAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    rating?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    isVerified?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
}

@InputType()
export class UserOrderByRelationAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    _count?: keyof typeof SortOrder;
}

@InputType()
export class UserOrderByWithAggregationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    email?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    firstName?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    lastName?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    password?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    image?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    countryId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    role?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    bio?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    hash?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    hashExpiredAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    rating?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    isVerified?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
    @Field(() => UserCountOrderByAggregateInput, {nullable:true})
    _count?: InstanceType<typeof UserCountOrderByAggregateInput>;
    @Field(() => UserAvgOrderByAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof UserAvgOrderByAggregateInput>;
    @Field(() => UserMaxOrderByAggregateInput, {nullable:true})
    _max?: InstanceType<typeof UserMaxOrderByAggregateInput>;
    @Field(() => UserMinOrderByAggregateInput, {nullable:true})
    _min?: InstanceType<typeof UserMinOrderByAggregateInput>;
    @Field(() => UserSumOrderByAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof UserSumOrderByAggregateInput>;
}

@InputType()
export class UserOrderByWithRelationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    email?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    firstName?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    lastName?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    password?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    image?: keyof typeof SortOrder;
    @Field(() => CountryOrderByWithRelationInput, {nullable:true})
    country?: InstanceType<typeof CountryOrderByWithRelationInput>;
    @Field(() => SortOrder, {nullable:true})
    countryId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    role?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    bio?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    hash?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    hashExpiredAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    rating?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    isVerified?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
    @Field(() => TourOrderByRelationAggregateInput, {nullable:true})
    Tour?: InstanceType<typeof TourOrderByRelationAggregateInput>;
}

@InputType()
export class UserRelationFilter {
    @Field(() => UserWhereInput, {nullable:true})
    is?: InstanceType<typeof UserWhereInput>;
    @Field(() => UserWhereInput, {nullable:true})
    isNot?: InstanceType<typeof UserWhereInput>;
}

@InputType()
export class UserScalarWhereWithAggregatesInput {
    @Field(() => [UserScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<UserScalarWhereWithAggregatesInput>;
    @Field(() => [UserScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<UserScalarWhereWithAggregatesInput>;
    @Field(() => [UserScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<UserScalarWhereWithAggregatesInput>;
    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: InstanceType<typeof IntWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    email?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    firstName?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    lastName?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    password?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => EnumStatusWithAggregatesFilter, {nullable:true})
    status?: InstanceType<typeof EnumStatusWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    image?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => IntWithAggregatesFilter, {nullable:true})
    countryId?: InstanceType<typeof IntWithAggregatesFilter>;
    @Field(() => EnumUserRoleWithAggregatesFilter, {nullable:true})
    role?: InstanceType<typeof EnumUserRoleWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    bio?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    hash?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    hashExpiredAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    @Field(() => FloatWithAggregatesFilter, {nullable:true})
    rating?: InstanceType<typeof FloatWithAggregatesFilter>;
    @Field(() => EnumYesNoWithAggregatesFilter, {nullable:true})
    isVerified?: InstanceType<typeof EnumYesNoWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
}

@InputType()
export class UserScalarWhereInput {
    @Field(() => [UserScalarWhereInput], {nullable:true})
    AND?: Array<UserScalarWhereInput>;
    @Field(() => [UserScalarWhereInput], {nullable:true})
    OR?: Array<UserScalarWhereInput>;
    @Field(() => [UserScalarWhereInput], {nullable:true})
    NOT?: Array<UserScalarWhereInput>;
    @Field(() => IntFilter, {nullable:true})
    id?: InstanceType<typeof IntFilter>;
    @Field(() => StringFilter, {nullable:true})
    email?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    firstName?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    lastName?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    password?: InstanceType<typeof StringFilter>;
    @Field(() => EnumStatusFilter, {nullable:true})
    status?: InstanceType<typeof EnumStatusFilter>;
    @Field(() => StringFilter, {nullable:true})
    image?: InstanceType<typeof StringFilter>;
    @Field(() => IntFilter, {nullable:true})
    countryId?: InstanceType<typeof IntFilter>;
    @Field(() => EnumUserRoleFilter, {nullable:true})
    role?: InstanceType<typeof EnumUserRoleFilter>;
    @Field(() => StringFilter, {nullable:true})
    bio?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    hash?: InstanceType<typeof StringFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    hashExpiredAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => FloatFilter, {nullable:true})
    rating?: InstanceType<typeof FloatFilter>;
    @Field(() => EnumYesNoFilter, {nullable:true})
    isVerified?: InstanceType<typeof EnumYesNoFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFilter>;
}

@InputType()
export class UserSumAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    countryId?: true;
    @Field(() => Boolean, {nullable:true})
    rating?: true;
}

@ObjectType()
export class UserSumAggregate {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => Int, {nullable:true})
    countryId?: number;
    @Field(() => Float, {nullable:true})
    rating?: number;
}

@InputType()
export class UserSumOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    countryId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    rating?: keyof typeof SortOrder;
}

@InputType()
export class UserUncheckedCreateNestedManyWithoutCountryInput {
    @Field(() => [UserCreateWithoutCountryInput], {nullable:true})
    @Type(() => UserCreateWithoutCountryInput)
    create?: Array<UserCreateWithoutCountryInput>;
    @Field(() => [UserCreateOrConnectWithoutCountryInput], {nullable:true})
    @Type(() => UserCreateOrConnectWithoutCountryInput)
    connectOrCreate?: Array<UserCreateOrConnectWithoutCountryInput>;
    @Field(() => UserCreateManyCountryInputEnvelope, {nullable:true})
    @Type(() => UserCreateManyCountryInputEnvelope)
    createMany?: InstanceType<typeof UserCreateManyCountryInputEnvelope>;
    @Field(() => [UserWhereUniqueInput], {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Array<UserWhereUniqueInput>;
}

@InputType()
export class UserUncheckedCreateWithoutCountryInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:false})
    @Validator.IsNotEmpty()
    @Validator.IsEmail()
    email!: string;
    @Field(() => String, {nullable:false})
    @Validator.IsNotEmpty()
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(2)
    firstName!: string;
    @Field(() => String, {nullable:false})
    @Validator.IsNotEmpty()
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(2)
    lastName!: string;
    @Field(() => String, {nullable:false})
    @Validator.IsNotEmpty()
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(8)
    @Validator.Matches(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]+$/, {message: 'password too weak'})
    password!: string;
    @Field(() => Status, {nullable:true})
    @Validator.IsString()
    status?: keyof typeof Status;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    image?: string;
    @Field(() => UserRole, {nullable:false})
    @Validator.IsString()
    role!: keyof typeof UserRole;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    bio?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    hash?: string;
    @Field(() => Date, {nullable:true})
    hashExpiredAt?: Date | string;
    @Field(() => Float, {nullable:true})
    rating?: number;
    @Field(() => YesNo, {nullable:true})
    isVerified?: keyof typeof YesNo;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => TourUncheckedCreateNestedManyWithoutGuideInput, {nullable:true})
    Tour?: InstanceType<typeof TourUncheckedCreateNestedManyWithoutGuideInput>;
}

@InputType()
export class UserUncheckedCreateWithoutTourInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:false})
    @Validator.IsNotEmpty()
    @Validator.IsEmail()
    email!: string;
    @Field(() => String, {nullable:false})
    @Validator.IsNotEmpty()
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(2)
    firstName!: string;
    @Field(() => String, {nullable:false})
    @Validator.IsNotEmpty()
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(2)
    lastName!: string;
    @Field(() => String, {nullable:false})
    @Validator.IsNotEmpty()
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(8)
    @Validator.Matches(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]+$/, {message: 'password too weak'})
    password!: string;
    @Field(() => Status, {nullable:true})
    @Validator.IsString()
    status?: keyof typeof Status;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    image?: string;
    @Field(() => Int, {nullable:true})
    countryId?: number;
    @Field(() => UserRole, {nullable:false})
    @Validator.IsString()
    role!: keyof typeof UserRole;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    bio?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    hash?: string;
    @Field(() => Date, {nullable:true})
    hashExpiredAt?: Date | string;
    @Field(() => Float, {nullable:true})
    rating?: number;
    @Field(() => YesNo, {nullable:true})
    isVerified?: keyof typeof YesNo;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class UserUncheckedCreateInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:false})
    @Validator.IsNotEmpty()
    @Validator.IsEmail()
    email!: string;
    @Field(() => String, {nullable:false})
    @Validator.IsNotEmpty()
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(2)
    firstName!: string;
    @Field(() => String, {nullable:false})
    @Validator.IsNotEmpty()
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(2)
    lastName!: string;
    @Field(() => String, {nullable:false})
    @Validator.IsNotEmpty()
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(8)
    @Validator.Matches(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]+$/, {message: 'password too weak'})
    password!: string;
    @Field(() => Status, {nullable:true})
    @Validator.IsString()
    status?: keyof typeof Status;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    image?: string;
    @Field(() => Int, {nullable:true})
    countryId?: number;
    @Field(() => UserRole, {nullable:false})
    @Validator.IsString()
    role!: keyof typeof UserRole;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    bio?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    hash?: string;
    @Field(() => Date, {nullable:true})
    hashExpiredAt?: Date | string;
    @Field(() => Float, {nullable:true})
    rating?: number;
    @Field(() => YesNo, {nullable:true})
    isVerified?: keyof typeof YesNo;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => TourUncheckedCreateNestedManyWithoutGuideInput, {nullable:true})
    Tour?: InstanceType<typeof TourUncheckedCreateNestedManyWithoutGuideInput>;
}

@InputType()
export class UserUncheckedUpdateManyWithoutCountryInput {
    @Field(() => [UserCreateWithoutCountryInput], {nullable:true})
    @Type(() => UserCreateWithoutCountryInput)
    create?: Array<UserCreateWithoutCountryInput>;
    @Field(() => [UserCreateOrConnectWithoutCountryInput], {nullable:true})
    @Type(() => UserCreateOrConnectWithoutCountryInput)
    connectOrCreate?: Array<UserCreateOrConnectWithoutCountryInput>;
    @Field(() => [UserUpsertWithWhereUniqueWithoutCountryInput], {nullable:true})
    @Type(() => UserUpsertWithWhereUniqueWithoutCountryInput)
    upsert?: Array<UserUpsertWithWhereUniqueWithoutCountryInput>;
    @Field(() => UserCreateManyCountryInputEnvelope, {nullable:true})
    @Type(() => UserCreateManyCountryInputEnvelope)
    createMany?: InstanceType<typeof UserCreateManyCountryInputEnvelope>;
    @Field(() => [UserWhereUniqueInput], {nullable:true})
    @Type(() => UserWhereUniqueInput)
    set?: Array<UserWhereUniqueInput>;
    @Field(() => [UserWhereUniqueInput], {nullable:true})
    @Type(() => UserWhereUniqueInput)
    disconnect?: Array<UserWhereUniqueInput>;
    @Field(() => [UserWhereUniqueInput], {nullable:true})
    @Type(() => UserWhereUniqueInput)
    delete?: Array<UserWhereUniqueInput>;
    @Field(() => [UserWhereUniqueInput], {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Array<UserWhereUniqueInput>;
    @Field(() => [UserUpdateWithWhereUniqueWithoutCountryInput], {nullable:true})
    @Type(() => UserUpdateWithWhereUniqueWithoutCountryInput)
    update?: Array<UserUpdateWithWhereUniqueWithoutCountryInput>;
    @Field(() => [UserUpdateManyWithWhereWithoutCountryInput], {nullable:true})
    @Type(() => UserUpdateManyWithWhereWithoutCountryInput)
    updateMany?: Array<UserUpdateManyWithWhereWithoutCountryInput>;
    @Field(() => [UserScalarWhereInput], {nullable:true})
    @Type(() => UserScalarWhereInput)
    deleteMany?: Array<UserScalarWhereInput>;
}

@InputType()
export class UserUncheckedUpdateManyWithoutUserInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:true})
    @Validator.IsNotEmpty()
    @Validator.IsEmail()
    email?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsNotEmpty()
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(2)
    firstName?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsNotEmpty()
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(2)
    lastName?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsNotEmpty()
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(8)
    @Validator.Matches(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]+$/, {message: 'password too weak'})
    password?: string;
    @Field(() => Status, {nullable:true})
    @Validator.IsString()
    status?: keyof typeof Status;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    image?: string;
    @Field(() => UserRole, {nullable:true})
    @Validator.IsString()
    role?: keyof typeof UserRole;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    bio?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    hash?: string;
    @Field(() => Date, {nullable:true})
    hashExpiredAt?: Date | string;
    @Field(() => Float, {nullable:true})
    rating?: number;
    @Field(() => YesNo, {nullable:true})
    isVerified?: keyof typeof YesNo;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class UserUncheckedUpdateManyInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:true})
    @Validator.IsNotEmpty()
    @Validator.IsEmail()
    email?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsNotEmpty()
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(2)
    firstName?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsNotEmpty()
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(2)
    lastName?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsNotEmpty()
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(8)
    @Validator.Matches(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]+$/, {message: 'password too weak'})
    password?: string;
    @Field(() => Status, {nullable:true})
    @Validator.IsString()
    status?: keyof typeof Status;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    image?: string;
    @Field(() => Int, {nullable:true})
    countryId?: number;
    @Field(() => UserRole, {nullable:true})
    @Validator.IsString()
    role?: keyof typeof UserRole;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    bio?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    hash?: string;
    @Field(() => Date, {nullable:true})
    hashExpiredAt?: Date | string;
    @Field(() => Float, {nullable:true})
    rating?: number;
    @Field(() => YesNo, {nullable:true})
    isVerified?: keyof typeof YesNo;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class UserUncheckedUpdateWithoutCountryInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:true})
    @Validator.IsNotEmpty()
    @Validator.IsEmail()
    email?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsNotEmpty()
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(2)
    firstName?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsNotEmpty()
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(2)
    lastName?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsNotEmpty()
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(8)
    @Validator.Matches(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]+$/, {message: 'password too weak'})
    password?: string;
    @Field(() => Status, {nullable:true})
    @Validator.IsString()
    status?: keyof typeof Status;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    image?: string;
    @Field(() => UserRole, {nullable:true})
    @Validator.IsString()
    role?: keyof typeof UserRole;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    bio?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    hash?: string;
    @Field(() => Date, {nullable:true})
    hashExpiredAt?: Date | string;
    @Field(() => Float, {nullable:true})
    rating?: number;
    @Field(() => YesNo, {nullable:true})
    isVerified?: keyof typeof YesNo;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => TourUncheckedUpdateManyWithoutGuideInput, {nullable:true})
    Tour?: InstanceType<typeof TourUncheckedUpdateManyWithoutGuideInput>;
}

@InputType()
export class UserUncheckedUpdateWithoutTourInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:true})
    @Validator.IsNotEmpty()
    @Validator.IsEmail()
    email?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsNotEmpty()
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(2)
    firstName?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsNotEmpty()
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(2)
    lastName?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsNotEmpty()
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(8)
    @Validator.Matches(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]+$/, {message: 'password too weak'})
    password?: string;
    @Field(() => Status, {nullable:true})
    @Validator.IsString()
    status?: keyof typeof Status;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    image?: string;
    @Field(() => Int, {nullable:true})
    countryId?: number;
    @Field(() => UserRole, {nullable:true})
    @Validator.IsString()
    role?: keyof typeof UserRole;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    bio?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    hash?: string;
    @Field(() => Date, {nullable:true})
    hashExpiredAt?: Date | string;
    @Field(() => Float, {nullable:true})
    rating?: number;
    @Field(() => YesNo, {nullable:true})
    isVerified?: keyof typeof YesNo;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class UserUncheckedUpdateInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:true})
    @Validator.IsNotEmpty()
    @Validator.IsEmail()
    email?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsNotEmpty()
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(2)
    firstName?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsNotEmpty()
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(2)
    lastName?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsNotEmpty()
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(8)
    @Validator.Matches(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]+$/, {message: 'password too weak'})
    password?: string;
    @Field(() => Status, {nullable:true})
    @Validator.IsString()
    status?: keyof typeof Status;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    image?: string;
    @Field(() => Int, {nullable:true})
    countryId?: number;
    @Field(() => UserRole, {nullable:true})
    @Validator.IsString()
    role?: keyof typeof UserRole;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    bio?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    hash?: string;
    @Field(() => Date, {nullable:true})
    hashExpiredAt?: Date | string;
    @Field(() => Float, {nullable:true})
    rating?: number;
    @Field(() => YesNo, {nullable:true})
    isVerified?: keyof typeof YesNo;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => TourUncheckedUpdateManyWithoutGuideInput, {nullable:true})
    Tour?: InstanceType<typeof TourUncheckedUpdateManyWithoutGuideInput>;
}

@InputType()
export class UserUpdateManyMutationInput {
    @Field(() => String, {nullable:true})
    @Validator.IsNotEmpty()
    @Validator.IsEmail()
    email?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsNotEmpty()
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(2)
    firstName?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsNotEmpty()
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(2)
    lastName?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsNotEmpty()
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(8)
    @Validator.Matches(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]+$/, {message: 'password too weak'})
    password?: string;
    @Field(() => Status, {nullable:true})
    @Validator.IsString()
    status?: keyof typeof Status;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    image?: string;
    @Field(() => UserRole, {nullable:true})
    @Validator.IsString()
    role?: keyof typeof UserRole;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    bio?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    hash?: string;
    @Field(() => Date, {nullable:true})
    hashExpiredAt?: Date | string;
    @Field(() => Float, {nullable:true})
    rating?: number;
    @Field(() => YesNo, {nullable:true})
    isVerified?: keyof typeof YesNo;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class UserUpdateManyWithWhereWithoutCountryInput {
    @Field(() => UserScalarWhereInput, {nullable:false})
    @Type(() => UserScalarWhereInput)
    where!: InstanceType<typeof UserScalarWhereInput>;
    @Field(() => UserUpdateManyMutationInput, {nullable:false})
    @Type(() => UserUpdateManyMutationInput)
    data!: InstanceType<typeof UserUpdateManyMutationInput>;
}

@InputType()
export class UserUpdateManyWithoutCountryInput {
    @Field(() => [UserCreateWithoutCountryInput], {nullable:true})
    @Type(() => UserCreateWithoutCountryInput)
    create?: Array<UserCreateWithoutCountryInput>;
    @Field(() => [UserCreateOrConnectWithoutCountryInput], {nullable:true})
    @Type(() => UserCreateOrConnectWithoutCountryInput)
    connectOrCreate?: Array<UserCreateOrConnectWithoutCountryInput>;
    @Field(() => [UserUpsertWithWhereUniqueWithoutCountryInput], {nullable:true})
    @Type(() => UserUpsertWithWhereUniqueWithoutCountryInput)
    upsert?: Array<UserUpsertWithWhereUniqueWithoutCountryInput>;
    @Field(() => UserCreateManyCountryInputEnvelope, {nullable:true})
    @Type(() => UserCreateManyCountryInputEnvelope)
    createMany?: InstanceType<typeof UserCreateManyCountryInputEnvelope>;
    @Field(() => [UserWhereUniqueInput], {nullable:true})
    @Type(() => UserWhereUniqueInput)
    set?: Array<UserWhereUniqueInput>;
    @Field(() => [UserWhereUniqueInput], {nullable:true})
    @Type(() => UserWhereUniqueInput)
    disconnect?: Array<UserWhereUniqueInput>;
    @Field(() => [UserWhereUniqueInput], {nullable:true})
    @Type(() => UserWhereUniqueInput)
    delete?: Array<UserWhereUniqueInput>;
    @Field(() => [UserWhereUniqueInput], {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Array<UserWhereUniqueInput>;
    @Field(() => [UserUpdateWithWhereUniqueWithoutCountryInput], {nullable:true})
    @Type(() => UserUpdateWithWhereUniqueWithoutCountryInput)
    update?: Array<UserUpdateWithWhereUniqueWithoutCountryInput>;
    @Field(() => [UserUpdateManyWithWhereWithoutCountryInput], {nullable:true})
    @Type(() => UserUpdateManyWithWhereWithoutCountryInput)
    updateMany?: Array<UserUpdateManyWithWhereWithoutCountryInput>;
    @Field(() => [UserScalarWhereInput], {nullable:true})
    @Type(() => UserScalarWhereInput)
    deleteMany?: Array<UserScalarWhereInput>;
}

@InputType()
export class UserUpdateOneRequiredWithoutTourInput {
    @Field(() => UserCreateWithoutTourInput, {nullable:true})
    @Type(() => UserCreateWithoutTourInput)
    create?: InstanceType<typeof UserCreateWithoutTourInput>;
    @Field(() => UserCreateOrConnectWithoutTourInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutTourInput)
    connectOrCreate?: InstanceType<typeof UserCreateOrConnectWithoutTourInput>;
    @Field(() => UserUpsertWithoutTourInput, {nullable:true})
    @Type(() => UserUpsertWithoutTourInput)
    upsert?: InstanceType<typeof UserUpsertWithoutTourInput>;
    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: InstanceType<typeof UserWhereUniqueInput>;
    @Field(() => UserUpdateWithoutTourInput, {nullable:true})
    @Type(() => UserUpdateWithoutTourInput)
    update?: InstanceType<typeof UserUpdateWithoutTourInput>;
}

@InputType()
export class UserUpdateWithWhereUniqueWithoutCountryInput {
    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: InstanceType<typeof UserWhereUniqueInput>;
    @Field(() => UserUpdateWithoutCountryInput, {nullable:false})
    @Type(() => UserUpdateWithoutCountryInput)
    data!: InstanceType<typeof UserUpdateWithoutCountryInput>;
}

@InputType()
export class UserUpdateWithoutCountryInput {
    @Field(() => String, {nullable:true})
    @Validator.IsNotEmpty()
    @Validator.IsEmail()
    email?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsNotEmpty()
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(2)
    firstName?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsNotEmpty()
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(2)
    lastName?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsNotEmpty()
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(8)
    @Validator.Matches(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]+$/, {message: 'password too weak'})
    password?: string;
    @Field(() => Status, {nullable:true})
    @Validator.IsString()
    status?: keyof typeof Status;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    image?: string;
    @Field(() => UserRole, {nullable:true})
    @Validator.IsString()
    role?: keyof typeof UserRole;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    bio?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    hash?: string;
    @Field(() => Date, {nullable:true})
    hashExpiredAt?: Date | string;
    @Field(() => Float, {nullable:true})
    rating?: number;
    @Field(() => YesNo, {nullable:true})
    isVerified?: keyof typeof YesNo;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => TourUpdateManyWithoutGuideInput, {nullable:true})
    Tour?: InstanceType<typeof TourUpdateManyWithoutGuideInput>;
}

@InputType()
export class UserUpdateWithoutTourInput {
    @Field(() => String, {nullable:true})
    @Validator.IsNotEmpty()
    @Validator.IsEmail()
    email?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsNotEmpty()
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(2)
    firstName?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsNotEmpty()
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(2)
    lastName?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsNotEmpty()
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(8)
    @Validator.Matches(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]+$/, {message: 'password too weak'})
    password?: string;
    @Field(() => Status, {nullable:true})
    @Validator.IsString()
    status?: keyof typeof Status;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    image?: string;
    @Field(() => CountryUpdateOneWithoutUserInput, {nullable:true})
    country?: InstanceType<typeof CountryUpdateOneWithoutUserInput>;
    @Field(() => UserRole, {nullable:true})
    @Validator.IsString()
    role?: keyof typeof UserRole;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    bio?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    hash?: string;
    @Field(() => Date, {nullable:true})
    hashExpiredAt?: Date | string;
    @Field(() => Float, {nullable:true})
    rating?: number;
    @Field(() => YesNo, {nullable:true})
    isVerified?: keyof typeof YesNo;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class UserUpdateInput {
    @Field(() => String, {nullable:true})
    @Validator.IsNotEmpty()
    @Validator.IsEmail()
    email?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsNotEmpty()
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(2)
    firstName?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsNotEmpty()
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(2)
    lastName?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsNotEmpty()
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(8)
    @Validator.Matches(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]+$/, {message: 'password too weak'})
    password?: string;
    @Field(() => Status, {nullable:true})
    @Validator.IsString()
    status?: keyof typeof Status;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    image?: string;
    @Field(() => CountryUpdateOneWithoutUserInput, {nullable:true})
    country?: InstanceType<typeof CountryUpdateOneWithoutUserInput>;
    @Field(() => UserRole, {nullable:true})
    @Validator.IsString()
    role?: keyof typeof UserRole;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    bio?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    hash?: string;
    @Field(() => Date, {nullable:true})
    hashExpiredAt?: Date | string;
    @Field(() => Float, {nullable:true})
    rating?: number;
    @Field(() => YesNo, {nullable:true})
    isVerified?: keyof typeof YesNo;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => TourUpdateManyWithoutGuideInput, {nullable:true})
    Tour?: InstanceType<typeof TourUpdateManyWithoutGuideInput>;
}

@InputType()
export class UserUpsertWithWhereUniqueWithoutCountryInput {
    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: InstanceType<typeof UserWhereUniqueInput>;
    @Field(() => UserUpdateWithoutCountryInput, {nullable:false})
    @Type(() => UserUpdateWithoutCountryInput)
    update!: InstanceType<typeof UserUpdateWithoutCountryInput>;
    @Field(() => UserCreateWithoutCountryInput, {nullable:false})
    @Type(() => UserCreateWithoutCountryInput)
    create!: InstanceType<typeof UserCreateWithoutCountryInput>;
}

@InputType()
export class UserUpsertWithoutTourInput {
    @Field(() => UserUpdateWithoutTourInput, {nullable:false})
    @Type(() => UserUpdateWithoutTourInput)
    update!: InstanceType<typeof UserUpdateWithoutTourInput>;
    @Field(() => UserCreateWithoutTourInput, {nullable:false})
    @Type(() => UserCreateWithoutTourInput)
    create!: InstanceType<typeof UserCreateWithoutTourInput>;
}

@InputType()
export class UserWhereUniqueInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:true})
    @Validator.IsNotEmpty()
    @Validator.IsEmail()
    email?: string;
}

@InputType()
export class UserWhereInput {
    @Field(() => [UserWhereInput], {nullable:true})
    AND?: Array<UserWhereInput>;
    @Field(() => [UserWhereInput], {nullable:true})
    OR?: Array<UserWhereInput>;
    @Field(() => [UserWhereInput], {nullable:true})
    NOT?: Array<UserWhereInput>;
    @Field(() => IntFilter, {nullable:true})
    id?: InstanceType<typeof IntFilter>;
    @Field(() => StringFilter, {nullable:true})
    email?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    firstName?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    lastName?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    password?: InstanceType<typeof StringFilter>;
    @Field(() => EnumStatusFilter, {nullable:true})
    status?: InstanceType<typeof EnumStatusFilter>;
    @Field(() => StringFilter, {nullable:true})
    image?: InstanceType<typeof StringFilter>;
    @Field(() => CountryRelationFilter, {nullable:true})
    country?: InstanceType<typeof CountryRelationFilter>;
    @Field(() => IntFilter, {nullable:true})
    countryId?: InstanceType<typeof IntFilter>;
    @Field(() => EnumUserRoleFilter, {nullable:true})
    role?: InstanceType<typeof EnumUserRoleFilter>;
    @Field(() => StringFilter, {nullable:true})
    bio?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    hash?: InstanceType<typeof StringFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    hashExpiredAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => FloatFilter, {nullable:true})
    rating?: InstanceType<typeof FloatFilter>;
    @Field(() => EnumYesNoFilter, {nullable:true})
    isVerified?: InstanceType<typeof EnumYesNoFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => TourListRelationFilter, {nullable:true})
    Tour?: InstanceType<typeof TourListRelationFilter>;
}

@ObjectType()
export class User {
    @Field(() => ID, {nullable:false})
    id!: number;
    @Field(() => String, {nullable:false})
    email!: string;
    @Field(() => String, {nullable:false})
    firstName!: string;
    @Field(() => String, {nullable:false})
    lastName!: string;
    @HideField()
    password!: string;
    @Field(() => Status, {nullable:false,defaultValue:'PENDING'})
    status!: keyof typeof Status;
    @Field(() => String, {nullable:true})
    image!: string | null;
    @Field(() => Country, {nullable:true})
    country?: InstanceType<typeof Country> | null;
    @Field(() => Int, {nullable:true})
    countryId!: number | null;
    @Field(() => UserRole, {nullable:false})
    role!: keyof typeof UserRole;
    @Field(() => String, {nullable:true})
    bio!: string | null;
    @Field(() => String, {nullable:true})
    hash!: string | null;
    @Field(() => Date, {nullable:true})
    hashExpiredAt!: Date | null;
    @Field(() => Float, {nullable:true,defaultValue:5})
    rating!: number | null;
    @Field(() => YesNo, {nullable:false,defaultValue:'NO'})
    isVerified!: keyof typeof YesNo;
    @Field(() => Date, {nullable:false})
    createdAt!: Date;
    @Field(() => Date, {nullable:false})
    updatedAt!: Date;
    @Field(() => [Tour], {nullable:true})
    Tour?: Array<Tour>;
    @Field(() => UserCount, {nullable:false})
    _count?: InstanceType<typeof UserCount>;
}
