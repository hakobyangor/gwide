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
    rating = "rating",
    isVerified = "isVerified",
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

export enum LanguagesScalarFieldEnum {
    id = "id",
    name = "name",
    status = "status",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}

export enum GuideLanguagesScalarFieldEnum {
    status = "status",
    userId = "userId",
    languageId = "languageId",
    cityId = "cityId"
}

export enum GuideGuideCategoryScalarFieldEnum {
    status = "status",
    userId = "userId",
    guideCategoryId = "guideCategoryId"
}

export enum GuideCityScalarFieldEnum {
    status = "status",
    userId = "userId",
    cityId = "cityId"
}

export enum GuideCategoryScalarFieldEnum {
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
registerEnumType(GuideCategoryScalarFieldEnum, { name: 'GuideCategoryScalarFieldEnum', description: undefined })
registerEnumType(GuideCityScalarFieldEnum, { name: 'GuideCityScalarFieldEnum', description: undefined })
registerEnumType(GuideGuideCategoryScalarFieldEnum, { name: 'GuideGuideCategoryScalarFieldEnum', description: undefined })
registerEnumType(GuideLanguagesScalarFieldEnum, { name: 'GuideLanguagesScalarFieldEnum', description: undefined })
registerEnumType(LanguagesScalarFieldEnum, { name: 'LanguagesScalarFieldEnum', description: undefined })
registerEnumType(QueryMode, { name: 'QueryMode', description: undefined })
registerEnumType(SortOrder, { name: 'SortOrder', description: undefined })
registerEnumType(Status, { name: 'Status', description: undefined })
registerEnumType(UserRole, { name: 'UserRole', description: undefined })
registerEnumType(YesNo, { name: 'YesNo', description: undefined })
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
    GuideCity?: number;
    @Field(() => Int, {nullable:false})
    GuideLanguages?: number;
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
export class CityCreateNestedOneWithoutGuideCityInput {
    @Field(() => CityCreateWithoutGuideCityInput, {nullable:true})
    @Type(() => CityCreateWithoutGuideCityInput)
    create?: InstanceType<typeof CityCreateWithoutGuideCityInput>;
    @Field(() => CityCreateOrConnectWithoutGuideCityInput, {nullable:true})
    @Type(() => CityCreateOrConnectWithoutGuideCityInput)
    connectOrCreate?: InstanceType<typeof CityCreateOrConnectWithoutGuideCityInput>;
    @Field(() => CityWhereUniqueInput, {nullable:true})
    @Type(() => CityWhereUniqueInput)
    connect?: InstanceType<typeof CityWhereUniqueInput>;
}

@InputType()
export class CityCreateNestedOneWithoutGuideLanguagesInput {
    @Field(() => CityCreateWithoutGuideLanguagesInput, {nullable:true})
    @Type(() => CityCreateWithoutGuideLanguagesInput)
    create?: InstanceType<typeof CityCreateWithoutGuideLanguagesInput>;
    @Field(() => CityCreateOrConnectWithoutGuideLanguagesInput, {nullable:true})
    @Type(() => CityCreateOrConnectWithoutGuideLanguagesInput)
    connectOrCreate?: InstanceType<typeof CityCreateOrConnectWithoutGuideLanguagesInput>;
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
export class CityCreateOrConnectWithoutGuideCityInput {
    @Field(() => CityWhereUniqueInput, {nullable:false})
    @Type(() => CityWhereUniqueInput)
    where!: InstanceType<typeof CityWhereUniqueInput>;
    @Field(() => CityCreateWithoutGuideCityInput, {nullable:false})
    @Type(() => CityCreateWithoutGuideCityInput)
    create!: InstanceType<typeof CityCreateWithoutGuideCityInput>;
}

@InputType()
export class CityCreateOrConnectWithoutGuideLanguagesInput {
    @Field(() => CityWhereUniqueInput, {nullable:false})
    @Type(() => CityWhereUniqueInput)
    where!: InstanceType<typeof CityWhereUniqueInput>;
    @Field(() => CityCreateWithoutGuideLanguagesInput, {nullable:false})
    @Type(() => CityCreateWithoutGuideLanguagesInput)
    create!: InstanceType<typeof CityCreateWithoutGuideLanguagesInput>;
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
    @Field(() => GuideCityCreateNestedManyWithoutCityInput, {nullable:true})
    GuideCity?: InstanceType<typeof GuideCityCreateNestedManyWithoutCityInput>;
    @Field(() => GuideLanguagesCreateNestedManyWithoutCityInput, {nullable:true})
    GuideLanguages?: InstanceType<typeof GuideLanguagesCreateNestedManyWithoutCityInput>;
}

@InputType()
export class CityCreateWithoutGuideCityInput {
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
    @Field(() => GuideLanguagesCreateNestedManyWithoutCityInput, {nullable:true})
    GuideLanguages?: InstanceType<typeof GuideLanguagesCreateNestedManyWithoutCityInput>;
}

@InputType()
export class CityCreateWithoutGuideLanguagesInput {
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
    @Field(() => GuideCityCreateNestedManyWithoutCityInput, {nullable:true})
    GuideCity?: InstanceType<typeof GuideCityCreateNestedManyWithoutCityInput>;
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
    @Field(() => GuideCityCreateNestedManyWithoutCityInput, {nullable:true})
    GuideCity?: InstanceType<typeof GuideCityCreateNestedManyWithoutCityInput>;
    @Field(() => GuideLanguagesCreateNestedManyWithoutCityInput, {nullable:true})
    GuideLanguages?: InstanceType<typeof GuideLanguagesCreateNestedManyWithoutCityInput>;
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
    @Field(() => GuideCityOrderByRelationAggregateInput, {nullable:true})
    GuideCity?: InstanceType<typeof GuideCityOrderByRelationAggregateInput>;
    @Field(() => GuideLanguagesOrderByRelationAggregateInput, {nullable:true})
    GuideLanguages?: InstanceType<typeof GuideLanguagesOrderByRelationAggregateInput>;
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
    @Field(() => GuideCityUncheckedCreateNestedManyWithoutCityInput, {nullable:true})
    GuideCity?: InstanceType<typeof GuideCityUncheckedCreateNestedManyWithoutCityInput>;
    @Field(() => GuideLanguagesUncheckedCreateNestedManyWithoutCityInput, {nullable:true})
    GuideLanguages?: InstanceType<typeof GuideLanguagesUncheckedCreateNestedManyWithoutCityInput>;
}

@InputType()
export class CityUncheckedCreateWithoutGuideCityInput {
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
    @Field(() => GuideLanguagesUncheckedCreateNestedManyWithoutCityInput, {nullable:true})
    GuideLanguages?: InstanceType<typeof GuideLanguagesUncheckedCreateNestedManyWithoutCityInput>;
}

@InputType()
export class CityUncheckedCreateWithoutGuideLanguagesInput {
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
    @Field(() => GuideCityUncheckedCreateNestedManyWithoutCityInput, {nullable:true})
    GuideCity?: InstanceType<typeof GuideCityUncheckedCreateNestedManyWithoutCityInput>;
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
    @Field(() => GuideCityUncheckedCreateNestedManyWithoutCityInput, {nullable:true})
    GuideCity?: InstanceType<typeof GuideCityUncheckedCreateNestedManyWithoutCityInput>;
    @Field(() => GuideLanguagesUncheckedCreateNestedManyWithoutCityInput, {nullable:true})
    GuideLanguages?: InstanceType<typeof GuideLanguagesUncheckedCreateNestedManyWithoutCityInput>;
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
    @Field(() => GuideCityUncheckedUpdateManyWithoutCityInput, {nullable:true})
    GuideCity?: InstanceType<typeof GuideCityUncheckedUpdateManyWithoutCityInput>;
    @Field(() => GuideLanguagesUncheckedUpdateManyWithoutCityInput, {nullable:true})
    GuideLanguages?: InstanceType<typeof GuideLanguagesUncheckedUpdateManyWithoutCityInput>;
}

@InputType()
export class CityUncheckedUpdateWithoutGuideCityInput {
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
    @Field(() => GuideLanguagesUncheckedUpdateManyWithoutCityInput, {nullable:true})
    GuideLanguages?: InstanceType<typeof GuideLanguagesUncheckedUpdateManyWithoutCityInput>;
}

@InputType()
export class CityUncheckedUpdateWithoutGuideLanguagesInput {
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
    @Field(() => GuideCityUncheckedUpdateManyWithoutCityInput, {nullable:true})
    GuideCity?: InstanceType<typeof GuideCityUncheckedUpdateManyWithoutCityInput>;
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
    @Field(() => GuideCityUncheckedUpdateManyWithoutCityInput, {nullable:true})
    GuideCity?: InstanceType<typeof GuideCityUncheckedUpdateManyWithoutCityInput>;
    @Field(() => GuideLanguagesUncheckedUpdateManyWithoutCityInput, {nullable:true})
    GuideLanguages?: InstanceType<typeof GuideLanguagesUncheckedUpdateManyWithoutCityInput>;
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
export class CityUpdateOneRequiredWithoutGuideCityInput {
    @Field(() => CityCreateWithoutGuideCityInput, {nullable:true})
    @Type(() => CityCreateWithoutGuideCityInput)
    create?: InstanceType<typeof CityCreateWithoutGuideCityInput>;
    @Field(() => CityCreateOrConnectWithoutGuideCityInput, {nullable:true})
    @Type(() => CityCreateOrConnectWithoutGuideCityInput)
    connectOrCreate?: InstanceType<typeof CityCreateOrConnectWithoutGuideCityInput>;
    @Field(() => CityUpsertWithoutGuideCityInput, {nullable:true})
    @Type(() => CityUpsertWithoutGuideCityInput)
    upsert?: InstanceType<typeof CityUpsertWithoutGuideCityInput>;
    @Field(() => CityWhereUniqueInput, {nullable:true})
    @Type(() => CityWhereUniqueInput)
    connect?: InstanceType<typeof CityWhereUniqueInput>;
    @Field(() => CityUpdateWithoutGuideCityInput, {nullable:true})
    @Type(() => CityUpdateWithoutGuideCityInput)
    update?: InstanceType<typeof CityUpdateWithoutGuideCityInput>;
}

@InputType()
export class CityUpdateOneWithoutGuideLanguagesInput {
    @Field(() => CityCreateWithoutGuideLanguagesInput, {nullable:true})
    @Type(() => CityCreateWithoutGuideLanguagesInput)
    create?: InstanceType<typeof CityCreateWithoutGuideLanguagesInput>;
    @Field(() => CityCreateOrConnectWithoutGuideLanguagesInput, {nullable:true})
    @Type(() => CityCreateOrConnectWithoutGuideLanguagesInput)
    connectOrCreate?: InstanceType<typeof CityCreateOrConnectWithoutGuideLanguagesInput>;
    @Field(() => CityUpsertWithoutGuideLanguagesInput, {nullable:true})
    @Type(() => CityUpsertWithoutGuideLanguagesInput)
    upsert?: InstanceType<typeof CityUpsertWithoutGuideLanguagesInput>;
    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;
    @Field(() => Boolean, {nullable:true})
    delete?: boolean;
    @Field(() => CityWhereUniqueInput, {nullable:true})
    @Type(() => CityWhereUniqueInput)
    connect?: InstanceType<typeof CityWhereUniqueInput>;
    @Field(() => CityUpdateWithoutGuideLanguagesInput, {nullable:true})
    @Type(() => CityUpdateWithoutGuideLanguagesInput)
    update?: InstanceType<typeof CityUpdateWithoutGuideLanguagesInput>;
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
    @Field(() => GuideCityUpdateManyWithoutCityInput, {nullable:true})
    GuideCity?: InstanceType<typeof GuideCityUpdateManyWithoutCityInput>;
    @Field(() => GuideLanguagesUpdateManyWithoutCityInput, {nullable:true})
    GuideLanguages?: InstanceType<typeof GuideLanguagesUpdateManyWithoutCityInput>;
}

@InputType()
export class CityUpdateWithoutGuideCityInput {
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
    @Field(() => GuideLanguagesUpdateManyWithoutCityInput, {nullable:true})
    GuideLanguages?: InstanceType<typeof GuideLanguagesUpdateManyWithoutCityInput>;
}

@InputType()
export class CityUpdateWithoutGuideLanguagesInput {
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
    @Field(() => GuideCityUpdateManyWithoutCityInput, {nullable:true})
    GuideCity?: InstanceType<typeof GuideCityUpdateManyWithoutCityInput>;
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
    @Field(() => GuideCityUpdateManyWithoutCityInput, {nullable:true})
    GuideCity?: InstanceType<typeof GuideCityUpdateManyWithoutCityInput>;
    @Field(() => GuideLanguagesUpdateManyWithoutCityInput, {nullable:true})
    GuideLanguages?: InstanceType<typeof GuideLanguagesUpdateManyWithoutCityInput>;
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
export class CityUpsertWithoutGuideCityInput {
    @Field(() => CityUpdateWithoutGuideCityInput, {nullable:false})
    @Type(() => CityUpdateWithoutGuideCityInput)
    update!: InstanceType<typeof CityUpdateWithoutGuideCityInput>;
    @Field(() => CityCreateWithoutGuideCityInput, {nullable:false})
    @Type(() => CityCreateWithoutGuideCityInput)
    create!: InstanceType<typeof CityCreateWithoutGuideCityInput>;
}

@InputType()
export class CityUpsertWithoutGuideLanguagesInput {
    @Field(() => CityUpdateWithoutGuideLanguagesInput, {nullable:false})
    @Type(() => CityUpdateWithoutGuideLanguagesInput)
    update!: InstanceType<typeof CityUpdateWithoutGuideLanguagesInput>;
    @Field(() => CityCreateWithoutGuideLanguagesInput, {nullable:false})
    @Type(() => CityCreateWithoutGuideLanguagesInput)
    create!: InstanceType<typeof CityCreateWithoutGuideLanguagesInput>;
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
    @Field(() => GuideCityListRelationFilter, {nullable:true})
    GuideCity?: InstanceType<typeof GuideCityListRelationFilter>;
    @Field(() => GuideLanguagesListRelationFilter, {nullable:true})
    GuideLanguages?: InstanceType<typeof GuideLanguagesListRelationFilter>;
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
    @Field(() => [GuideCity], {nullable:true})
    GuideCity?: Array<GuideCity>;
    @Field(() => [GuideLanguages], {nullable:true})
    GuideLanguages?: Array<GuideLanguages>;
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
export class AggregateGuideCategory {
    @Field(() => GuideCategoryCountAggregate, {nullable:true})
    _count?: InstanceType<typeof GuideCategoryCountAggregate>;
    @Field(() => GuideCategoryAvgAggregate, {nullable:true})
    _avg?: InstanceType<typeof GuideCategoryAvgAggregate>;
    @Field(() => GuideCategorySumAggregate, {nullable:true})
    _sum?: InstanceType<typeof GuideCategorySumAggregate>;
    @Field(() => GuideCategoryMinAggregate, {nullable:true})
    _min?: InstanceType<typeof GuideCategoryMinAggregate>;
    @Field(() => GuideCategoryMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof GuideCategoryMaxAggregate>;
}

@ArgsType()
export class CreateManyGuideCategoryArgs {
    @Field(() => [GuideCategoryCreateManyInput], {nullable:false})
    @Type(() => GuideCategoryCreateManyInput)
    @ValidateNested({ each: true })
    data!: Array<GuideCategoryCreateManyInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@ArgsType()
export class CreateOneGuideCategoryArgs {
    @Field(() => GuideCategoryCreateInput, {nullable:false})
    @Type(() => GuideCategoryCreateInput)
    @ValidateNested({ each: true })
    data!: InstanceType<typeof GuideCategoryCreateInput>;
}

@ArgsType()
export class DeleteManyGuideCategoryArgs {
    @Field(() => GuideCategoryWhereInput, {nullable:true})
    @Type(() => GuideCategoryWhereInput)
    @ValidateNested({ each: true })
    where?: InstanceType<typeof GuideCategoryWhereInput>;
}

@ArgsType()
export class DeleteOneGuideCategoryArgs {
    @Field(() => GuideCategoryWhereUniqueInput, {nullable:false})
    @Type(() => GuideCategoryWhereUniqueInput)
    @ValidateNested({ each: true })
    where!: InstanceType<typeof GuideCategoryWhereUniqueInput>;
}

@ArgsType()
export class FindFirstGuideCategoryArgs {
    @Field(() => GuideCategoryWhereInput, {nullable:true})
    @Type(() => GuideCategoryWhereInput)
    @ValidateNested({ each: true })
    where?: InstanceType<typeof GuideCategoryWhereInput>;
    @Field(() => [GuideCategoryOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<GuideCategoryOrderByWithRelationInput>;
    @Field(() => GuideCategoryWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof GuideCategoryWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [GuideCategoryScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof GuideCategoryScalarFieldEnum>;
}

@ArgsType()
export class FindManyGuideCategoryArgs {
    @Field(() => GuideCategoryWhereInput, {nullable:true})
    @Type(() => GuideCategoryWhereInput)
    @ValidateNested({ each: true })
    where?: InstanceType<typeof GuideCategoryWhereInput>;
    @Field(() => [GuideCategoryOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<GuideCategoryOrderByWithRelationInput>;
    @Field(() => GuideCategoryWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof GuideCategoryWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [GuideCategoryScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof GuideCategoryScalarFieldEnum>;
}

@ArgsType()
export class FindUniqueGuideCategoryArgs {
    @Field(() => GuideCategoryWhereUniqueInput, {nullable:false})
    @Type(() => GuideCategoryWhereUniqueInput)
    @ValidateNested({ each: true })
    where!: InstanceType<typeof GuideCategoryWhereUniqueInput>;
}

@ArgsType()
export class GuideCategoryAggregateArgs {
    @Field(() => GuideCategoryWhereInput, {nullable:true})
    @Type(() => GuideCategoryWhereInput)
    @ValidateNested({ each: true })
    where?: InstanceType<typeof GuideCategoryWhereInput>;
    @Field(() => [GuideCategoryOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<GuideCategoryOrderByWithRelationInput>;
    @Field(() => GuideCategoryWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof GuideCategoryWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => GuideCategoryCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof GuideCategoryCountAggregateInput>;
    @Field(() => GuideCategoryAvgAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof GuideCategoryAvgAggregateInput>;
    @Field(() => GuideCategorySumAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof GuideCategorySumAggregateInput>;
    @Field(() => GuideCategoryMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof GuideCategoryMinAggregateInput>;
    @Field(() => GuideCategoryMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof GuideCategoryMaxAggregateInput>;
}

@InputType()
export class GuideCategoryAvgAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
}

@ObjectType()
export class GuideCategoryAvgAggregate {
    @Field(() => Float, {nullable:true})
    id?: number;
}

@InputType()
export class GuideCategoryAvgOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
}

@InputType()
export class GuideCategoryCountAggregateInput {
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
export class GuideCategoryCountAggregate {
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
export class GuideCategoryCountOrderByAggregateInput {
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
export class GuideCategoryCount {
    @Field(() => Int, {nullable:false})
    GuideGuideCategory?: number;
}

@InputType()
export class GuideCategoryCreateManyInput {
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
export class GuideCategoryCreateNestedOneWithoutGuideGuideCategoryInput {
    @Field(() => GuideCategoryCreateWithoutGuideGuideCategoryInput, {nullable:true})
    @Type(() => GuideCategoryCreateWithoutGuideGuideCategoryInput)
    create?: InstanceType<typeof GuideCategoryCreateWithoutGuideGuideCategoryInput>;
    @Field(() => GuideCategoryCreateOrConnectWithoutGuideGuideCategoryInput, {nullable:true})
    @Type(() => GuideCategoryCreateOrConnectWithoutGuideGuideCategoryInput)
    connectOrCreate?: InstanceType<typeof GuideCategoryCreateOrConnectWithoutGuideGuideCategoryInput>;
    @Field(() => GuideCategoryWhereUniqueInput, {nullable:true})
    @Type(() => GuideCategoryWhereUniqueInput)
    connect?: InstanceType<typeof GuideCategoryWhereUniqueInput>;
}

@InputType()
export class GuideCategoryCreateOrConnectWithoutGuideGuideCategoryInput {
    @Field(() => GuideCategoryWhereUniqueInput, {nullable:false})
    @Type(() => GuideCategoryWhereUniqueInput)
    where!: InstanceType<typeof GuideCategoryWhereUniqueInput>;
    @Field(() => GuideCategoryCreateWithoutGuideGuideCategoryInput, {nullable:false})
    @Type(() => GuideCategoryCreateWithoutGuideGuideCategoryInput)
    create!: InstanceType<typeof GuideCategoryCreateWithoutGuideGuideCategoryInput>;
}

@InputType()
export class GuideCategoryCreateWithoutGuideGuideCategoryInput {
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
export class GuideCategoryCreateInput {
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    name!: string;
    @Field(() => Status, {nullable:true})
    status?: keyof typeof Status;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => GuideGuideCategoryCreateNestedManyWithoutGuideCategoryInput, {nullable:true})
    GuideGuideCategory?: InstanceType<typeof GuideGuideCategoryCreateNestedManyWithoutGuideCategoryInput>;
}

@ArgsType()
export class GuideCategoryGroupByArgs {
    @Field(() => GuideCategoryWhereInput, {nullable:true})
    @Type(() => GuideCategoryWhereInput)
    @ValidateNested({ each: true })
    where?: InstanceType<typeof GuideCategoryWhereInput>;
    @Field(() => [GuideCategoryOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<GuideCategoryOrderByWithAggregationInput>;
    @Field(() => [GuideCategoryScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof GuideCategoryScalarFieldEnum>;
    @Field(() => GuideCategoryScalarWhereWithAggregatesInput, {nullable:true})
    having?: InstanceType<typeof GuideCategoryScalarWhereWithAggregatesInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => GuideCategoryCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof GuideCategoryCountAggregateInput>;
    @Field(() => GuideCategoryAvgAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof GuideCategoryAvgAggregateInput>;
    @Field(() => GuideCategorySumAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof GuideCategorySumAggregateInput>;
    @Field(() => GuideCategoryMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof GuideCategoryMinAggregateInput>;
    @Field(() => GuideCategoryMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof GuideCategoryMaxAggregateInput>;
}

@ObjectType()
export class GuideCategoryGroupBy {
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
    @Field(() => GuideCategoryCountAggregate, {nullable:true})
    _count?: InstanceType<typeof GuideCategoryCountAggregate>;
    @Field(() => GuideCategoryAvgAggregate, {nullable:true})
    _avg?: InstanceType<typeof GuideCategoryAvgAggregate>;
    @Field(() => GuideCategorySumAggregate, {nullable:true})
    _sum?: InstanceType<typeof GuideCategorySumAggregate>;
    @Field(() => GuideCategoryMinAggregate, {nullable:true})
    _min?: InstanceType<typeof GuideCategoryMinAggregate>;
    @Field(() => GuideCategoryMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof GuideCategoryMaxAggregate>;
}

@InputType()
export class GuideCategoryMaxAggregateInput {
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
export class GuideCategoryMaxAggregate {
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
export class GuideCategoryMaxOrderByAggregateInput {
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
export class GuideCategoryMinAggregateInput {
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
export class GuideCategoryMinAggregate {
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
export class GuideCategoryMinOrderByAggregateInput {
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
export class GuideCategoryOrderByWithAggregationInput {
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
    @Field(() => GuideCategoryCountOrderByAggregateInput, {nullable:true})
    _count?: InstanceType<typeof GuideCategoryCountOrderByAggregateInput>;
    @Field(() => GuideCategoryAvgOrderByAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof GuideCategoryAvgOrderByAggregateInput>;
    @Field(() => GuideCategoryMaxOrderByAggregateInput, {nullable:true})
    _max?: InstanceType<typeof GuideCategoryMaxOrderByAggregateInput>;
    @Field(() => GuideCategoryMinOrderByAggregateInput, {nullable:true})
    _min?: InstanceType<typeof GuideCategoryMinOrderByAggregateInput>;
    @Field(() => GuideCategorySumOrderByAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof GuideCategorySumOrderByAggregateInput>;
}

@InputType()
export class GuideCategoryOrderByWithRelationInput {
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
    @Field(() => GuideGuideCategoryOrderByRelationAggregateInput, {nullable:true})
    GuideGuideCategory?: InstanceType<typeof GuideGuideCategoryOrderByRelationAggregateInput>;
}

@InputType()
export class GuideCategoryRelationFilter {
    @Field(() => GuideCategoryWhereInput, {nullable:true})
    is?: InstanceType<typeof GuideCategoryWhereInput>;
    @Field(() => GuideCategoryWhereInput, {nullable:true})
    isNot?: InstanceType<typeof GuideCategoryWhereInput>;
}

@InputType()
export class GuideCategoryScalarWhereWithAggregatesInput {
    @Field(() => [GuideCategoryScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<GuideCategoryScalarWhereWithAggregatesInput>;
    @Field(() => [GuideCategoryScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<GuideCategoryScalarWhereWithAggregatesInput>;
    @Field(() => [GuideCategoryScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<GuideCategoryScalarWhereWithAggregatesInput>;
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
export class GuideCategorySumAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
}

@ObjectType()
export class GuideCategorySumAggregate {
    @Field(() => Int, {nullable:true})
    id?: number;
}

@InputType()
export class GuideCategorySumOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
}

@InputType()
export class GuideCategoryUncheckedCreateWithoutGuideGuideCategoryInput {
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
export class GuideCategoryUncheckedCreateInput {
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
    @Field(() => GuideGuideCategoryUncheckedCreateNestedManyWithoutGuideCategoryInput, {nullable:true})
    GuideGuideCategory?: InstanceType<typeof GuideGuideCategoryUncheckedCreateNestedManyWithoutGuideCategoryInput>;
}

@InputType()
export class GuideCategoryUncheckedUpdateManyInput {
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
export class GuideCategoryUncheckedUpdateWithoutGuideGuideCategoryInput {
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
export class GuideCategoryUncheckedUpdateInput {
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
    @Field(() => GuideGuideCategoryUncheckedUpdateManyWithoutGuideCategoryInput, {nullable:true})
    GuideGuideCategory?: InstanceType<typeof GuideGuideCategoryUncheckedUpdateManyWithoutGuideCategoryInput>;
}

@InputType()
export class GuideCategoryUpdateManyMutationInput {
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
export class GuideCategoryUpdateOneRequiredWithoutGuideGuideCategoryInput {
    @Field(() => GuideCategoryCreateWithoutGuideGuideCategoryInput, {nullable:true})
    @Type(() => GuideCategoryCreateWithoutGuideGuideCategoryInput)
    create?: InstanceType<typeof GuideCategoryCreateWithoutGuideGuideCategoryInput>;
    @Field(() => GuideCategoryCreateOrConnectWithoutGuideGuideCategoryInput, {nullable:true})
    @Type(() => GuideCategoryCreateOrConnectWithoutGuideGuideCategoryInput)
    connectOrCreate?: InstanceType<typeof GuideCategoryCreateOrConnectWithoutGuideGuideCategoryInput>;
    @Field(() => GuideCategoryUpsertWithoutGuideGuideCategoryInput, {nullable:true})
    @Type(() => GuideCategoryUpsertWithoutGuideGuideCategoryInput)
    upsert?: InstanceType<typeof GuideCategoryUpsertWithoutGuideGuideCategoryInput>;
    @Field(() => GuideCategoryWhereUniqueInput, {nullable:true})
    @Type(() => GuideCategoryWhereUniqueInput)
    connect?: InstanceType<typeof GuideCategoryWhereUniqueInput>;
    @Field(() => GuideCategoryUpdateWithoutGuideGuideCategoryInput, {nullable:true})
    @Type(() => GuideCategoryUpdateWithoutGuideGuideCategoryInput)
    update?: InstanceType<typeof GuideCategoryUpdateWithoutGuideGuideCategoryInput>;
}

@InputType()
export class GuideCategoryUpdateWithoutGuideGuideCategoryInput {
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
export class GuideCategoryUpdateInput {
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    name?: string;
    @Field(() => Status, {nullable:true})
    status?: keyof typeof Status;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => GuideGuideCategoryUpdateManyWithoutGuideCategoryInput, {nullable:true})
    GuideGuideCategory?: InstanceType<typeof GuideGuideCategoryUpdateManyWithoutGuideCategoryInput>;
}

@InputType()
export class GuideCategoryUpsertWithoutGuideGuideCategoryInput {
    @Field(() => GuideCategoryUpdateWithoutGuideGuideCategoryInput, {nullable:false})
    @Type(() => GuideCategoryUpdateWithoutGuideGuideCategoryInput)
    update!: InstanceType<typeof GuideCategoryUpdateWithoutGuideGuideCategoryInput>;
    @Field(() => GuideCategoryCreateWithoutGuideGuideCategoryInput, {nullable:false})
    @Type(() => GuideCategoryCreateWithoutGuideGuideCategoryInput)
    create!: InstanceType<typeof GuideCategoryCreateWithoutGuideGuideCategoryInput>;
}

@InputType()
export class GuideCategoryWhereUniqueInput {
    @Field(() => Int, {nullable:true})
    id?: number;
}

@InputType()
export class GuideCategoryWhereInput {
    @Field(() => [GuideCategoryWhereInput], {nullable:true})
    AND?: Array<GuideCategoryWhereInput>;
    @Field(() => [GuideCategoryWhereInput], {nullable:true})
    OR?: Array<GuideCategoryWhereInput>;
    @Field(() => [GuideCategoryWhereInput], {nullable:true})
    NOT?: Array<GuideCategoryWhereInput>;
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
    @Field(() => GuideGuideCategoryListRelationFilter, {nullable:true})
    GuideGuideCategory?: InstanceType<typeof GuideGuideCategoryListRelationFilter>;
}

@ObjectType()
export class GuideCategory {
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
    @Field(() => [GuideGuideCategory], {nullable:true})
    GuideGuideCategory?: Array<GuideGuideCategory>;
    @Field(() => GuideCategoryCount, {nullable:false})
    _count?: InstanceType<typeof GuideCategoryCount>;
}

@ArgsType()
export class UpdateManyGuideCategoryArgs {
    @Field(() => GuideCategoryUpdateManyMutationInput, {nullable:false})
    @Type(() => GuideCategoryUpdateManyMutationInput)
    @ValidateNested({ each: true })
    data!: InstanceType<typeof GuideCategoryUpdateManyMutationInput>;
    @Field(() => GuideCategoryWhereInput, {nullable:true})
    @Type(() => GuideCategoryWhereInput)
    @ValidateNested({ each: true })
    where?: InstanceType<typeof GuideCategoryWhereInput>;
}

@ArgsType()
export class UpdateOneGuideCategoryArgs {
    @Field(() => GuideCategoryUpdateInput, {nullable:false})
    @Type(() => GuideCategoryUpdateInput)
    @ValidateNested({ each: true })
    data!: InstanceType<typeof GuideCategoryUpdateInput>;
    @Field(() => GuideCategoryWhereUniqueInput, {nullable:false})
    @Type(() => GuideCategoryWhereUniqueInput)
    @ValidateNested({ each: true })
    where!: InstanceType<typeof GuideCategoryWhereUniqueInput>;
}

@ArgsType()
export class UpsertOneGuideCategoryArgs {
    @Field(() => GuideCategoryWhereUniqueInput, {nullable:false})
    @Type(() => GuideCategoryWhereUniqueInput)
    @ValidateNested({ each: true })
    where!: InstanceType<typeof GuideCategoryWhereUniqueInput>;
    @Field(() => GuideCategoryCreateInput, {nullable:false})
    @Type(() => GuideCategoryCreateInput)
    create!: InstanceType<typeof GuideCategoryCreateInput>;
    @Field(() => GuideCategoryUpdateInput, {nullable:false})
    @Type(() => GuideCategoryUpdateInput)
    update!: InstanceType<typeof GuideCategoryUpdateInput>;
}

@ObjectType()
export class AggregateGuideCity {
    @Field(() => GuideCityCountAggregate, {nullable:true})
    _count?: InstanceType<typeof GuideCityCountAggregate>;
    @Field(() => GuideCityAvgAggregate, {nullable:true})
    _avg?: InstanceType<typeof GuideCityAvgAggregate>;
    @Field(() => GuideCitySumAggregate, {nullable:true})
    _sum?: InstanceType<typeof GuideCitySumAggregate>;
    @Field(() => GuideCityMinAggregate, {nullable:true})
    _min?: InstanceType<typeof GuideCityMinAggregate>;
    @Field(() => GuideCityMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof GuideCityMaxAggregate>;
}

@ArgsType()
export class CreateManyGuideCityArgs {
    @Field(() => [GuideCityCreateManyInput], {nullable:false})
    @Type(() => GuideCityCreateManyInput)
    @ValidateNested({ each: true })
    data!: Array<GuideCityCreateManyInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@ArgsType()
export class CreateOneGuideCityArgs {
    @Field(() => GuideCityCreateInput, {nullable:false})
    @Type(() => GuideCityCreateInput)
    @ValidateNested({ each: true })
    data!: InstanceType<typeof GuideCityCreateInput>;
}

@ArgsType()
export class DeleteManyGuideCityArgs {
    @Field(() => GuideCityWhereInput, {nullable:true})
    @Type(() => GuideCityWhereInput)
    @ValidateNested({ each: true })
    where?: InstanceType<typeof GuideCityWhereInput>;
}

@ArgsType()
export class DeleteOneGuideCityArgs {
    @Field(() => GuideCityWhereUniqueInput, {nullable:false})
    @Type(() => GuideCityWhereUniqueInput)
    @ValidateNested({ each: true })
    where!: InstanceType<typeof GuideCityWhereUniqueInput>;
}

@ArgsType()
export class FindFirstGuideCityArgs {
    @Field(() => GuideCityWhereInput, {nullable:true})
    @Type(() => GuideCityWhereInput)
    @ValidateNested({ each: true })
    where?: InstanceType<typeof GuideCityWhereInput>;
    @Field(() => [GuideCityOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<GuideCityOrderByWithRelationInput>;
    @Field(() => GuideCityWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof GuideCityWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [GuideCityScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof GuideCityScalarFieldEnum>;
}

@ArgsType()
export class FindManyGuideCityArgs {
    @Field(() => GuideCityWhereInput, {nullable:true})
    @Type(() => GuideCityWhereInput)
    @ValidateNested({ each: true })
    where?: InstanceType<typeof GuideCityWhereInput>;
    @Field(() => [GuideCityOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<GuideCityOrderByWithRelationInput>;
    @Field(() => GuideCityWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof GuideCityWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [GuideCityScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof GuideCityScalarFieldEnum>;
}

@ArgsType()
export class FindUniqueGuideCityArgs {
    @Field(() => GuideCityWhereUniqueInput, {nullable:false})
    @Type(() => GuideCityWhereUniqueInput)
    @ValidateNested({ each: true })
    where!: InstanceType<typeof GuideCityWhereUniqueInput>;
}

@ArgsType()
export class GuideCityAggregateArgs {
    @Field(() => GuideCityWhereInput, {nullable:true})
    @Type(() => GuideCityWhereInput)
    @ValidateNested({ each: true })
    where?: InstanceType<typeof GuideCityWhereInput>;
    @Field(() => [GuideCityOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<GuideCityOrderByWithRelationInput>;
    @Field(() => GuideCityWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof GuideCityWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => GuideCityCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof GuideCityCountAggregateInput>;
    @Field(() => GuideCityAvgAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof GuideCityAvgAggregateInput>;
    @Field(() => GuideCitySumAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof GuideCitySumAggregateInput>;
    @Field(() => GuideCityMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof GuideCityMinAggregateInput>;
    @Field(() => GuideCityMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof GuideCityMaxAggregateInput>;
}

@InputType()
export class GuideCityAvgAggregateInput {
    @Field(() => Boolean, {nullable:true})
    userId?: true;
    @Field(() => Boolean, {nullable:true})
    cityId?: true;
}

@ObjectType()
export class GuideCityAvgAggregate {
    @Field(() => Float, {nullable:true})
    userId?: number;
    @Field(() => Float, {nullable:true})
    cityId?: number;
}

@InputType()
export class GuideCityAvgOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    cityId?: keyof typeof SortOrder;
}

@InputType()
export class GuideCityCountAggregateInput {
    @Field(() => Boolean, {nullable:true})
    status?: true;
    @Field(() => Boolean, {nullable:true})
    userId?: true;
    @Field(() => Boolean, {nullable:true})
    cityId?: true;
    @Field(() => Boolean, {nullable:true})
    _all?: true;
}

@ObjectType()
export class GuideCityCountAggregate {
    @Field(() => Int, {nullable:false})
    status!: number;
    @Field(() => Int, {nullable:false})
    userId!: number;
    @Field(() => Int, {nullable:false})
    cityId!: number;
    @Field(() => Int, {nullable:false})
    _all!: number;
}

@InputType()
export class GuideCityCountOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    cityId?: keyof typeof SortOrder;
}

@InputType()
export class GuideCityCreateManyCityInputEnvelope {
    @Field(() => [GuideCityCreateManyCityInput], {nullable:false})
    @Type(() => GuideCityCreateManyCityInput)
    data!: Array<GuideCityCreateManyCityInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@InputType()
export class GuideCityCreateManyCityInput {
    @Field(() => Status, {nullable:true})
    status?: keyof typeof Status;
    @Field(() => Int, {nullable:false})
    userId!: number;
}

@InputType()
export class GuideCityCreateManyUserInputEnvelope {
    @Field(() => [GuideCityCreateManyUserInput], {nullable:false})
    @Type(() => GuideCityCreateManyUserInput)
    data!: Array<GuideCityCreateManyUserInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@InputType()
export class GuideCityCreateManyUserInput {
    @Field(() => Status, {nullable:true})
    status?: keyof typeof Status;
    @Field(() => Int, {nullable:false})
    cityId!: number;
}

@InputType()
export class GuideCityCreateManyInput {
    @Field(() => Status, {nullable:true})
    status?: keyof typeof Status;
    @Field(() => Int, {nullable:false})
    userId!: number;
    @Field(() => Int, {nullable:false})
    cityId!: number;
}

@InputType()
export class GuideCityCreateNestedManyWithoutCityInput {
    @Field(() => [GuideCityCreateWithoutCityInput], {nullable:true})
    @Type(() => GuideCityCreateWithoutCityInput)
    create?: Array<GuideCityCreateWithoutCityInput>;
    @Field(() => [GuideCityCreateOrConnectWithoutCityInput], {nullable:true})
    @Type(() => GuideCityCreateOrConnectWithoutCityInput)
    connectOrCreate?: Array<GuideCityCreateOrConnectWithoutCityInput>;
    @Field(() => GuideCityCreateManyCityInputEnvelope, {nullable:true})
    @Type(() => GuideCityCreateManyCityInputEnvelope)
    createMany?: InstanceType<typeof GuideCityCreateManyCityInputEnvelope>;
    @Field(() => [GuideCityWhereUniqueInput], {nullable:true})
    @Type(() => GuideCityWhereUniqueInput)
    connect?: Array<GuideCityWhereUniqueInput>;
}

@InputType()
export class GuideCityCreateNestedManyWithoutUserInput {
    @Field(() => [GuideCityCreateWithoutUserInput], {nullable:true})
    @Type(() => GuideCityCreateWithoutUserInput)
    create?: Array<GuideCityCreateWithoutUserInput>;
    @Field(() => [GuideCityCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => GuideCityCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<GuideCityCreateOrConnectWithoutUserInput>;
    @Field(() => GuideCityCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => GuideCityCreateManyUserInputEnvelope)
    createMany?: InstanceType<typeof GuideCityCreateManyUserInputEnvelope>;
    @Field(() => [GuideCityWhereUniqueInput], {nullable:true})
    @Type(() => GuideCityWhereUniqueInput)
    connect?: Array<GuideCityWhereUniqueInput>;
}

@InputType()
export class GuideCityCreateOrConnectWithoutCityInput {
    @Field(() => GuideCityWhereUniqueInput, {nullable:false})
    @Type(() => GuideCityWhereUniqueInput)
    where!: InstanceType<typeof GuideCityWhereUniqueInput>;
    @Field(() => GuideCityCreateWithoutCityInput, {nullable:false})
    @Type(() => GuideCityCreateWithoutCityInput)
    create!: InstanceType<typeof GuideCityCreateWithoutCityInput>;
}

@InputType()
export class GuideCityCreateOrConnectWithoutUserInput {
    @Field(() => GuideCityWhereUniqueInput, {nullable:false})
    @Type(() => GuideCityWhereUniqueInput)
    where!: InstanceType<typeof GuideCityWhereUniqueInput>;
    @Field(() => GuideCityCreateWithoutUserInput, {nullable:false})
    @Type(() => GuideCityCreateWithoutUserInput)
    create!: InstanceType<typeof GuideCityCreateWithoutUserInput>;
}

@InputType()
export class GuideCityCreateWithoutCityInput {
    @Field(() => Status, {nullable:true})
    status?: keyof typeof Status;
    @Field(() => UserCreateNestedOneWithoutGuideCityInput, {nullable:false})
    user!: InstanceType<typeof UserCreateNestedOneWithoutGuideCityInput>;
}

@InputType()
export class GuideCityCreateWithoutUserInput {
    @Field(() => Status, {nullable:true})
    status?: keyof typeof Status;
    @Field(() => CityCreateNestedOneWithoutGuideCityInput, {nullable:false})
    city!: InstanceType<typeof CityCreateNestedOneWithoutGuideCityInput>;
}

@InputType()
export class GuideCityCreateInput {
    @Field(() => Status, {nullable:true})
    status?: keyof typeof Status;
    @Field(() => UserCreateNestedOneWithoutGuideCityInput, {nullable:false})
    user!: InstanceType<typeof UserCreateNestedOneWithoutGuideCityInput>;
    @Field(() => CityCreateNestedOneWithoutGuideCityInput, {nullable:false})
    city!: InstanceType<typeof CityCreateNestedOneWithoutGuideCityInput>;
}

@ArgsType()
export class GuideCityGroupByArgs {
    @Field(() => GuideCityWhereInput, {nullable:true})
    @Type(() => GuideCityWhereInput)
    @ValidateNested({ each: true })
    where?: InstanceType<typeof GuideCityWhereInput>;
    @Field(() => [GuideCityOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<GuideCityOrderByWithAggregationInput>;
    @Field(() => [GuideCityScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof GuideCityScalarFieldEnum>;
    @Field(() => GuideCityScalarWhereWithAggregatesInput, {nullable:true})
    having?: InstanceType<typeof GuideCityScalarWhereWithAggregatesInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => GuideCityCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof GuideCityCountAggregateInput>;
    @Field(() => GuideCityAvgAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof GuideCityAvgAggregateInput>;
    @Field(() => GuideCitySumAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof GuideCitySumAggregateInput>;
    @Field(() => GuideCityMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof GuideCityMinAggregateInput>;
    @Field(() => GuideCityMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof GuideCityMaxAggregateInput>;
}

@ObjectType()
export class GuideCityGroupBy {
    @Field(() => Status, {nullable:false})
    status!: keyof typeof Status;
    @Field(() => Int, {nullable:false})
    userId!: number;
    @Field(() => Int, {nullable:false})
    cityId!: number;
    @Field(() => GuideCityCountAggregate, {nullable:true})
    _count?: InstanceType<typeof GuideCityCountAggregate>;
    @Field(() => GuideCityAvgAggregate, {nullable:true})
    _avg?: InstanceType<typeof GuideCityAvgAggregate>;
    @Field(() => GuideCitySumAggregate, {nullable:true})
    _sum?: InstanceType<typeof GuideCitySumAggregate>;
    @Field(() => GuideCityMinAggregate, {nullable:true})
    _min?: InstanceType<typeof GuideCityMinAggregate>;
    @Field(() => GuideCityMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof GuideCityMaxAggregate>;
}

@InputType()
export class GuideCityListRelationFilter {
    @Field(() => GuideCityWhereInput, {nullable:true})
    every?: InstanceType<typeof GuideCityWhereInput>;
    @Field(() => GuideCityWhereInput, {nullable:true})
    some?: InstanceType<typeof GuideCityWhereInput>;
    @Field(() => GuideCityWhereInput, {nullable:true})
    none?: InstanceType<typeof GuideCityWhereInput>;
}

@InputType()
export class GuideCityMaxAggregateInput {
    @Field(() => Boolean, {nullable:true})
    status?: true;
    @Field(() => Boolean, {nullable:true})
    userId?: true;
    @Field(() => Boolean, {nullable:true})
    cityId?: true;
}

@ObjectType()
export class GuideCityMaxAggregate {
    @Field(() => Status, {nullable:true})
    status?: keyof typeof Status;
    @Field(() => Int, {nullable:true})
    userId?: number;
    @Field(() => Int, {nullable:true})
    cityId?: number;
}

@InputType()
export class GuideCityMaxOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    cityId?: keyof typeof SortOrder;
}

@InputType()
export class GuideCityMinAggregateInput {
    @Field(() => Boolean, {nullable:true})
    status?: true;
    @Field(() => Boolean, {nullable:true})
    userId?: true;
    @Field(() => Boolean, {nullable:true})
    cityId?: true;
}

@ObjectType()
export class GuideCityMinAggregate {
    @Field(() => Status, {nullable:true})
    status?: keyof typeof Status;
    @Field(() => Int, {nullable:true})
    userId?: number;
    @Field(() => Int, {nullable:true})
    cityId?: number;
}

@InputType()
export class GuideCityMinOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    cityId?: keyof typeof SortOrder;
}

@InputType()
export class GuideCityOrderByRelationAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    _count?: keyof typeof SortOrder;
}

@InputType()
export class GuideCityOrderByWithAggregationInput {
    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    cityId?: keyof typeof SortOrder;
    @Field(() => GuideCityCountOrderByAggregateInput, {nullable:true})
    _count?: InstanceType<typeof GuideCityCountOrderByAggregateInput>;
    @Field(() => GuideCityAvgOrderByAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof GuideCityAvgOrderByAggregateInput>;
    @Field(() => GuideCityMaxOrderByAggregateInput, {nullable:true})
    _max?: InstanceType<typeof GuideCityMaxOrderByAggregateInput>;
    @Field(() => GuideCityMinOrderByAggregateInput, {nullable:true})
    _min?: InstanceType<typeof GuideCityMinOrderByAggregateInput>;
    @Field(() => GuideCitySumOrderByAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof GuideCitySumOrderByAggregateInput>;
}

@InputType()
export class GuideCityOrderByWithRelationInput {
    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;
    @Field(() => UserOrderByWithRelationInput, {nullable:true})
    user?: InstanceType<typeof UserOrderByWithRelationInput>;
    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;
    @Field(() => CityOrderByWithRelationInput, {nullable:true})
    city?: InstanceType<typeof CityOrderByWithRelationInput>;
    @Field(() => SortOrder, {nullable:true})
    cityId?: keyof typeof SortOrder;
}

@InputType()
export class GuideCityScalarWhereWithAggregatesInput {
    @Field(() => [GuideCityScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<GuideCityScalarWhereWithAggregatesInput>;
    @Field(() => [GuideCityScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<GuideCityScalarWhereWithAggregatesInput>;
    @Field(() => [GuideCityScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<GuideCityScalarWhereWithAggregatesInput>;
    @Field(() => EnumStatusWithAggregatesFilter, {nullable:true})
    status?: InstanceType<typeof EnumStatusWithAggregatesFilter>;
    @Field(() => IntWithAggregatesFilter, {nullable:true})
    userId?: InstanceType<typeof IntWithAggregatesFilter>;
    @Field(() => IntWithAggregatesFilter, {nullable:true})
    cityId?: InstanceType<typeof IntWithAggregatesFilter>;
}

@InputType()
export class GuideCityScalarWhereInput {
    @Field(() => [GuideCityScalarWhereInput], {nullable:true})
    AND?: Array<GuideCityScalarWhereInput>;
    @Field(() => [GuideCityScalarWhereInput], {nullable:true})
    OR?: Array<GuideCityScalarWhereInput>;
    @Field(() => [GuideCityScalarWhereInput], {nullable:true})
    NOT?: Array<GuideCityScalarWhereInput>;
    @Field(() => EnumStatusFilter, {nullable:true})
    status?: InstanceType<typeof EnumStatusFilter>;
    @Field(() => IntFilter, {nullable:true})
    userId?: InstanceType<typeof IntFilter>;
    @Field(() => IntFilter, {nullable:true})
    cityId?: InstanceType<typeof IntFilter>;
}

@InputType()
export class GuideCitySumAggregateInput {
    @Field(() => Boolean, {nullable:true})
    userId?: true;
    @Field(() => Boolean, {nullable:true})
    cityId?: true;
}

@ObjectType()
export class GuideCitySumAggregate {
    @Field(() => Int, {nullable:true})
    userId?: number;
    @Field(() => Int, {nullable:true})
    cityId?: number;
}

@InputType()
export class GuideCitySumOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    cityId?: keyof typeof SortOrder;
}

@InputType()
export class GuideCityUncheckedCreateNestedManyWithoutCityInput {
    @Field(() => [GuideCityCreateWithoutCityInput], {nullable:true})
    @Type(() => GuideCityCreateWithoutCityInput)
    create?: Array<GuideCityCreateWithoutCityInput>;
    @Field(() => [GuideCityCreateOrConnectWithoutCityInput], {nullable:true})
    @Type(() => GuideCityCreateOrConnectWithoutCityInput)
    connectOrCreate?: Array<GuideCityCreateOrConnectWithoutCityInput>;
    @Field(() => GuideCityCreateManyCityInputEnvelope, {nullable:true})
    @Type(() => GuideCityCreateManyCityInputEnvelope)
    createMany?: InstanceType<typeof GuideCityCreateManyCityInputEnvelope>;
    @Field(() => [GuideCityWhereUniqueInput], {nullable:true})
    @Type(() => GuideCityWhereUniqueInput)
    connect?: Array<GuideCityWhereUniqueInput>;
}

@InputType()
export class GuideCityUncheckedCreateNestedManyWithoutUserInput {
    @Field(() => [GuideCityCreateWithoutUserInput], {nullable:true})
    @Type(() => GuideCityCreateWithoutUserInput)
    create?: Array<GuideCityCreateWithoutUserInput>;
    @Field(() => [GuideCityCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => GuideCityCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<GuideCityCreateOrConnectWithoutUserInput>;
    @Field(() => GuideCityCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => GuideCityCreateManyUserInputEnvelope)
    createMany?: InstanceType<typeof GuideCityCreateManyUserInputEnvelope>;
    @Field(() => [GuideCityWhereUniqueInput], {nullable:true})
    @Type(() => GuideCityWhereUniqueInput)
    connect?: Array<GuideCityWhereUniqueInput>;
}

@InputType()
export class GuideCityUncheckedCreateWithoutCityInput {
    @Field(() => Status, {nullable:true})
    status?: keyof typeof Status;
    @Field(() => Int, {nullable:false})
    userId!: number;
}

@InputType()
export class GuideCityUncheckedCreateWithoutUserInput {
    @Field(() => Status, {nullable:true})
    status?: keyof typeof Status;
    @Field(() => Int, {nullable:false})
    cityId!: number;
}

@InputType()
export class GuideCityUncheckedCreateInput {
    @Field(() => Status, {nullable:true})
    status?: keyof typeof Status;
    @Field(() => Int, {nullable:false})
    userId!: number;
    @Field(() => Int, {nullable:false})
    cityId!: number;
}

@InputType()
export class GuideCityUncheckedUpdateManyWithoutCityInput {
    @Field(() => [GuideCityCreateWithoutCityInput], {nullable:true})
    @Type(() => GuideCityCreateWithoutCityInput)
    create?: Array<GuideCityCreateWithoutCityInput>;
    @Field(() => [GuideCityCreateOrConnectWithoutCityInput], {nullable:true})
    @Type(() => GuideCityCreateOrConnectWithoutCityInput)
    connectOrCreate?: Array<GuideCityCreateOrConnectWithoutCityInput>;
    @Field(() => [GuideCityUpsertWithWhereUniqueWithoutCityInput], {nullable:true})
    @Type(() => GuideCityUpsertWithWhereUniqueWithoutCityInput)
    upsert?: Array<GuideCityUpsertWithWhereUniqueWithoutCityInput>;
    @Field(() => GuideCityCreateManyCityInputEnvelope, {nullable:true})
    @Type(() => GuideCityCreateManyCityInputEnvelope)
    createMany?: InstanceType<typeof GuideCityCreateManyCityInputEnvelope>;
    @Field(() => [GuideCityWhereUniqueInput], {nullable:true})
    @Type(() => GuideCityWhereUniqueInput)
    set?: Array<GuideCityWhereUniqueInput>;
    @Field(() => [GuideCityWhereUniqueInput], {nullable:true})
    @Type(() => GuideCityWhereUniqueInput)
    disconnect?: Array<GuideCityWhereUniqueInput>;
    @Field(() => [GuideCityWhereUniqueInput], {nullable:true})
    @Type(() => GuideCityWhereUniqueInput)
    delete?: Array<GuideCityWhereUniqueInput>;
    @Field(() => [GuideCityWhereUniqueInput], {nullable:true})
    @Type(() => GuideCityWhereUniqueInput)
    connect?: Array<GuideCityWhereUniqueInput>;
    @Field(() => [GuideCityUpdateWithWhereUniqueWithoutCityInput], {nullable:true})
    @Type(() => GuideCityUpdateWithWhereUniqueWithoutCityInput)
    update?: Array<GuideCityUpdateWithWhereUniqueWithoutCityInput>;
    @Field(() => [GuideCityUpdateManyWithWhereWithoutCityInput], {nullable:true})
    @Type(() => GuideCityUpdateManyWithWhereWithoutCityInput)
    updateMany?: Array<GuideCityUpdateManyWithWhereWithoutCityInput>;
    @Field(() => [GuideCityScalarWhereInput], {nullable:true})
    @Type(() => GuideCityScalarWhereInput)
    deleteMany?: Array<GuideCityScalarWhereInput>;
}

@InputType()
export class GuideCityUncheckedUpdateManyWithoutGuideCityInput {
    @Field(() => Status, {nullable:true})
    status?: keyof typeof Status;
    @Field(() => Int, {nullable:true})
    cityId?: number;
}

@InputType()
export class GuideCityUncheckedUpdateManyWithoutUserInput {
    @Field(() => [GuideCityCreateWithoutUserInput], {nullable:true})
    @Type(() => GuideCityCreateWithoutUserInput)
    create?: Array<GuideCityCreateWithoutUserInput>;
    @Field(() => [GuideCityCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => GuideCityCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<GuideCityCreateOrConnectWithoutUserInput>;
    @Field(() => [GuideCityUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => GuideCityUpsertWithWhereUniqueWithoutUserInput)
    upsert?: Array<GuideCityUpsertWithWhereUniqueWithoutUserInput>;
    @Field(() => GuideCityCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => GuideCityCreateManyUserInputEnvelope)
    createMany?: InstanceType<typeof GuideCityCreateManyUserInputEnvelope>;
    @Field(() => [GuideCityWhereUniqueInput], {nullable:true})
    @Type(() => GuideCityWhereUniqueInput)
    set?: Array<GuideCityWhereUniqueInput>;
    @Field(() => [GuideCityWhereUniqueInput], {nullable:true})
    @Type(() => GuideCityWhereUniqueInput)
    disconnect?: Array<GuideCityWhereUniqueInput>;
    @Field(() => [GuideCityWhereUniqueInput], {nullable:true})
    @Type(() => GuideCityWhereUniqueInput)
    delete?: Array<GuideCityWhereUniqueInput>;
    @Field(() => [GuideCityWhereUniqueInput], {nullable:true})
    @Type(() => GuideCityWhereUniqueInput)
    connect?: Array<GuideCityWhereUniqueInput>;
    @Field(() => [GuideCityUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => GuideCityUpdateWithWhereUniqueWithoutUserInput)
    update?: Array<GuideCityUpdateWithWhereUniqueWithoutUserInput>;
    @Field(() => [GuideCityUpdateManyWithWhereWithoutUserInput], {nullable:true})
    @Type(() => GuideCityUpdateManyWithWhereWithoutUserInput)
    updateMany?: Array<GuideCityUpdateManyWithWhereWithoutUserInput>;
    @Field(() => [GuideCityScalarWhereInput], {nullable:true})
    @Type(() => GuideCityScalarWhereInput)
    deleteMany?: Array<GuideCityScalarWhereInput>;
}

@InputType()
export class GuideCityUncheckedUpdateManyInput {
    @Field(() => Status, {nullable:true})
    status?: keyof typeof Status;
    @Field(() => Int, {nullable:true})
    userId?: number;
    @Field(() => Int, {nullable:true})
    cityId?: number;
}

@InputType()
export class GuideCityUncheckedUpdateWithoutCityInput {
    @Field(() => Status, {nullable:true})
    status?: keyof typeof Status;
    @Field(() => Int, {nullable:true})
    userId?: number;
}

@InputType()
export class GuideCityUncheckedUpdateWithoutUserInput {
    @Field(() => Status, {nullable:true})
    status?: keyof typeof Status;
    @Field(() => Int, {nullable:true})
    cityId?: number;
}

@InputType()
export class GuideCityUncheckedUpdateInput {
    @Field(() => Status, {nullable:true})
    status?: keyof typeof Status;
    @Field(() => Int, {nullable:true})
    userId?: number;
    @Field(() => Int, {nullable:true})
    cityId?: number;
}

@InputType()
export class GuideCityUpdateManyMutationInput {
    @Field(() => Status, {nullable:true})
    status?: keyof typeof Status;
}

@InputType()
export class GuideCityUpdateManyWithWhereWithoutCityInput {
    @Field(() => GuideCityScalarWhereInput, {nullable:false})
    @Type(() => GuideCityScalarWhereInput)
    where!: InstanceType<typeof GuideCityScalarWhereInput>;
    @Field(() => GuideCityUpdateManyMutationInput, {nullable:false})
    @Type(() => GuideCityUpdateManyMutationInput)
    data!: InstanceType<typeof GuideCityUpdateManyMutationInput>;
}

@InputType()
export class GuideCityUpdateManyWithWhereWithoutUserInput {
    @Field(() => GuideCityScalarWhereInput, {nullable:false})
    @Type(() => GuideCityScalarWhereInput)
    where!: InstanceType<typeof GuideCityScalarWhereInput>;
    @Field(() => GuideCityUpdateManyMutationInput, {nullable:false})
    @Type(() => GuideCityUpdateManyMutationInput)
    data!: InstanceType<typeof GuideCityUpdateManyMutationInput>;
}

@InputType()
export class GuideCityUpdateManyWithoutCityInput {
    @Field(() => [GuideCityCreateWithoutCityInput], {nullable:true})
    @Type(() => GuideCityCreateWithoutCityInput)
    create?: Array<GuideCityCreateWithoutCityInput>;
    @Field(() => [GuideCityCreateOrConnectWithoutCityInput], {nullable:true})
    @Type(() => GuideCityCreateOrConnectWithoutCityInput)
    connectOrCreate?: Array<GuideCityCreateOrConnectWithoutCityInput>;
    @Field(() => [GuideCityUpsertWithWhereUniqueWithoutCityInput], {nullable:true})
    @Type(() => GuideCityUpsertWithWhereUniqueWithoutCityInput)
    upsert?: Array<GuideCityUpsertWithWhereUniqueWithoutCityInput>;
    @Field(() => GuideCityCreateManyCityInputEnvelope, {nullable:true})
    @Type(() => GuideCityCreateManyCityInputEnvelope)
    createMany?: InstanceType<typeof GuideCityCreateManyCityInputEnvelope>;
    @Field(() => [GuideCityWhereUniqueInput], {nullable:true})
    @Type(() => GuideCityWhereUniqueInput)
    set?: Array<GuideCityWhereUniqueInput>;
    @Field(() => [GuideCityWhereUniqueInput], {nullable:true})
    @Type(() => GuideCityWhereUniqueInput)
    disconnect?: Array<GuideCityWhereUniqueInput>;
    @Field(() => [GuideCityWhereUniqueInput], {nullable:true})
    @Type(() => GuideCityWhereUniqueInput)
    delete?: Array<GuideCityWhereUniqueInput>;
    @Field(() => [GuideCityWhereUniqueInput], {nullable:true})
    @Type(() => GuideCityWhereUniqueInput)
    connect?: Array<GuideCityWhereUniqueInput>;
    @Field(() => [GuideCityUpdateWithWhereUniqueWithoutCityInput], {nullable:true})
    @Type(() => GuideCityUpdateWithWhereUniqueWithoutCityInput)
    update?: Array<GuideCityUpdateWithWhereUniqueWithoutCityInput>;
    @Field(() => [GuideCityUpdateManyWithWhereWithoutCityInput], {nullable:true})
    @Type(() => GuideCityUpdateManyWithWhereWithoutCityInput)
    updateMany?: Array<GuideCityUpdateManyWithWhereWithoutCityInput>;
    @Field(() => [GuideCityScalarWhereInput], {nullable:true})
    @Type(() => GuideCityScalarWhereInput)
    deleteMany?: Array<GuideCityScalarWhereInput>;
}

@InputType()
export class GuideCityUpdateManyWithoutUserInput {
    @Field(() => [GuideCityCreateWithoutUserInput], {nullable:true})
    @Type(() => GuideCityCreateWithoutUserInput)
    create?: Array<GuideCityCreateWithoutUserInput>;
    @Field(() => [GuideCityCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => GuideCityCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<GuideCityCreateOrConnectWithoutUserInput>;
    @Field(() => [GuideCityUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => GuideCityUpsertWithWhereUniqueWithoutUserInput)
    upsert?: Array<GuideCityUpsertWithWhereUniqueWithoutUserInput>;
    @Field(() => GuideCityCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => GuideCityCreateManyUserInputEnvelope)
    createMany?: InstanceType<typeof GuideCityCreateManyUserInputEnvelope>;
    @Field(() => [GuideCityWhereUniqueInput], {nullable:true})
    @Type(() => GuideCityWhereUniqueInput)
    set?: Array<GuideCityWhereUniqueInput>;
    @Field(() => [GuideCityWhereUniqueInput], {nullable:true})
    @Type(() => GuideCityWhereUniqueInput)
    disconnect?: Array<GuideCityWhereUniqueInput>;
    @Field(() => [GuideCityWhereUniqueInput], {nullable:true})
    @Type(() => GuideCityWhereUniqueInput)
    delete?: Array<GuideCityWhereUniqueInput>;
    @Field(() => [GuideCityWhereUniqueInput], {nullable:true})
    @Type(() => GuideCityWhereUniqueInput)
    connect?: Array<GuideCityWhereUniqueInput>;
    @Field(() => [GuideCityUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => GuideCityUpdateWithWhereUniqueWithoutUserInput)
    update?: Array<GuideCityUpdateWithWhereUniqueWithoutUserInput>;
    @Field(() => [GuideCityUpdateManyWithWhereWithoutUserInput], {nullable:true})
    @Type(() => GuideCityUpdateManyWithWhereWithoutUserInput)
    updateMany?: Array<GuideCityUpdateManyWithWhereWithoutUserInput>;
    @Field(() => [GuideCityScalarWhereInput], {nullable:true})
    @Type(() => GuideCityScalarWhereInput)
    deleteMany?: Array<GuideCityScalarWhereInput>;
}

@InputType()
export class GuideCityUpdateWithWhereUniqueWithoutCityInput {
    @Field(() => GuideCityWhereUniqueInput, {nullable:false})
    @Type(() => GuideCityWhereUniqueInput)
    where!: InstanceType<typeof GuideCityWhereUniqueInput>;
    @Field(() => GuideCityUpdateWithoutCityInput, {nullable:false})
    @Type(() => GuideCityUpdateWithoutCityInput)
    data!: InstanceType<typeof GuideCityUpdateWithoutCityInput>;
}

@InputType()
export class GuideCityUpdateWithWhereUniqueWithoutUserInput {
    @Field(() => GuideCityWhereUniqueInput, {nullable:false})
    @Type(() => GuideCityWhereUniqueInput)
    where!: InstanceType<typeof GuideCityWhereUniqueInput>;
    @Field(() => GuideCityUpdateWithoutUserInput, {nullable:false})
    @Type(() => GuideCityUpdateWithoutUserInput)
    data!: InstanceType<typeof GuideCityUpdateWithoutUserInput>;
}

@InputType()
export class GuideCityUpdateWithoutCityInput {
    @Field(() => Status, {nullable:true})
    status?: keyof typeof Status;
    @Field(() => UserUpdateOneRequiredWithoutGuideCityInput, {nullable:true})
    user?: InstanceType<typeof UserUpdateOneRequiredWithoutGuideCityInput>;
}

@InputType()
export class GuideCityUpdateWithoutUserInput {
    @Field(() => Status, {nullable:true})
    status?: keyof typeof Status;
    @Field(() => CityUpdateOneRequiredWithoutGuideCityInput, {nullable:true})
    city?: InstanceType<typeof CityUpdateOneRequiredWithoutGuideCityInput>;
}

@InputType()
export class GuideCityUpdateInput {
    @Field(() => Status, {nullable:true})
    status?: keyof typeof Status;
    @Field(() => UserUpdateOneRequiredWithoutGuideCityInput, {nullable:true})
    user?: InstanceType<typeof UserUpdateOneRequiredWithoutGuideCityInput>;
    @Field(() => CityUpdateOneRequiredWithoutGuideCityInput, {nullable:true})
    city?: InstanceType<typeof CityUpdateOneRequiredWithoutGuideCityInput>;
}

@InputType()
export class GuideCityUpsertWithWhereUniqueWithoutCityInput {
    @Field(() => GuideCityWhereUniqueInput, {nullable:false})
    @Type(() => GuideCityWhereUniqueInput)
    where!: InstanceType<typeof GuideCityWhereUniqueInput>;
    @Field(() => GuideCityUpdateWithoutCityInput, {nullable:false})
    @Type(() => GuideCityUpdateWithoutCityInput)
    update!: InstanceType<typeof GuideCityUpdateWithoutCityInput>;
    @Field(() => GuideCityCreateWithoutCityInput, {nullable:false})
    @Type(() => GuideCityCreateWithoutCityInput)
    create!: InstanceType<typeof GuideCityCreateWithoutCityInput>;
}

@InputType()
export class GuideCityUpsertWithWhereUniqueWithoutUserInput {
    @Field(() => GuideCityWhereUniqueInput, {nullable:false})
    @Type(() => GuideCityWhereUniqueInput)
    where!: InstanceType<typeof GuideCityWhereUniqueInput>;
    @Field(() => GuideCityUpdateWithoutUserInput, {nullable:false})
    @Type(() => GuideCityUpdateWithoutUserInput)
    update!: InstanceType<typeof GuideCityUpdateWithoutUserInput>;
    @Field(() => GuideCityCreateWithoutUserInput, {nullable:false})
    @Type(() => GuideCityCreateWithoutUserInput)
    create!: InstanceType<typeof GuideCityCreateWithoutUserInput>;
}

@InputType()
export class GuideCityUserIdCityIdCompoundUniqueInput {
    @Field(() => Int, {nullable:false})
    userId!: number;
    @Field(() => Int, {nullable:false})
    cityId!: number;
}

@InputType()
export class GuideCityWhereUniqueInput {
    @Field(() => GuideCityUserIdCityIdCompoundUniqueInput, {nullable:true})
    userId_cityId?: InstanceType<typeof GuideCityUserIdCityIdCompoundUniqueInput>;
}

@InputType()
export class GuideCityWhereInput {
    @Field(() => [GuideCityWhereInput], {nullable:true})
    AND?: Array<GuideCityWhereInput>;
    @Field(() => [GuideCityWhereInput], {nullable:true})
    OR?: Array<GuideCityWhereInput>;
    @Field(() => [GuideCityWhereInput], {nullable:true})
    NOT?: Array<GuideCityWhereInput>;
    @Field(() => EnumStatusFilter, {nullable:true})
    status?: InstanceType<typeof EnumStatusFilter>;
    @Field(() => UserRelationFilter, {nullable:true})
    user?: InstanceType<typeof UserRelationFilter>;
    @Field(() => IntFilter, {nullable:true})
    userId?: InstanceType<typeof IntFilter>;
    @Field(() => CityRelationFilter, {nullable:true})
    city?: InstanceType<typeof CityRelationFilter>;
    @Field(() => IntFilter, {nullable:true})
    cityId?: InstanceType<typeof IntFilter>;
}

@ObjectType()
export class GuideCity {
    @Field(() => Status, {nullable:false,defaultValue:'ACTIVE'})
    status!: keyof typeof Status;
    @Field(() => User, {nullable:false})
    user?: InstanceType<typeof User>;
    @Field(() => Int, {nullable:false})
    userId!: number;
    @Field(() => City, {nullable:false})
    city?: InstanceType<typeof City>;
    @Field(() => Int, {nullable:false})
    cityId!: number;
}

@ArgsType()
export class UpdateManyGuideCityArgs {
    @Field(() => GuideCityUpdateManyMutationInput, {nullable:false})
    @Type(() => GuideCityUpdateManyMutationInput)
    @ValidateNested({ each: true })
    data!: InstanceType<typeof GuideCityUpdateManyMutationInput>;
    @Field(() => GuideCityWhereInput, {nullable:true})
    @Type(() => GuideCityWhereInput)
    @ValidateNested({ each: true })
    where?: InstanceType<typeof GuideCityWhereInput>;
}

@ArgsType()
export class UpdateOneGuideCityArgs {
    @Field(() => GuideCityUpdateInput, {nullable:false})
    @Type(() => GuideCityUpdateInput)
    @ValidateNested({ each: true })
    data!: InstanceType<typeof GuideCityUpdateInput>;
    @Field(() => GuideCityWhereUniqueInput, {nullable:false})
    @Type(() => GuideCityWhereUniqueInput)
    @ValidateNested({ each: true })
    where!: InstanceType<typeof GuideCityWhereUniqueInput>;
}

@ArgsType()
export class UpsertOneGuideCityArgs {
    @Field(() => GuideCityWhereUniqueInput, {nullable:false})
    @Type(() => GuideCityWhereUniqueInput)
    @ValidateNested({ each: true })
    where!: InstanceType<typeof GuideCityWhereUniqueInput>;
    @Field(() => GuideCityCreateInput, {nullable:false})
    @Type(() => GuideCityCreateInput)
    create!: InstanceType<typeof GuideCityCreateInput>;
    @Field(() => GuideCityUpdateInput, {nullable:false})
    @Type(() => GuideCityUpdateInput)
    update!: InstanceType<typeof GuideCityUpdateInput>;
}

@ObjectType()
export class AggregateGuideGuideCategory {
    @Field(() => GuideGuideCategoryCountAggregate, {nullable:true})
    _count?: InstanceType<typeof GuideGuideCategoryCountAggregate>;
    @Field(() => GuideGuideCategoryAvgAggregate, {nullable:true})
    _avg?: InstanceType<typeof GuideGuideCategoryAvgAggregate>;
    @Field(() => GuideGuideCategorySumAggregate, {nullable:true})
    _sum?: InstanceType<typeof GuideGuideCategorySumAggregate>;
    @Field(() => GuideGuideCategoryMinAggregate, {nullable:true})
    _min?: InstanceType<typeof GuideGuideCategoryMinAggregate>;
    @Field(() => GuideGuideCategoryMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof GuideGuideCategoryMaxAggregate>;
}

@ArgsType()
export class CreateManyGuideGuideCategoryArgs {
    @Field(() => [GuideGuideCategoryCreateManyInput], {nullable:false})
    @Type(() => GuideGuideCategoryCreateManyInput)
    @ValidateNested({ each: true })
    data!: Array<GuideGuideCategoryCreateManyInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@ArgsType()
export class CreateOneGuideGuideCategoryArgs {
    @Field(() => GuideGuideCategoryCreateInput, {nullable:false})
    @Type(() => GuideGuideCategoryCreateInput)
    @ValidateNested({ each: true })
    data!: InstanceType<typeof GuideGuideCategoryCreateInput>;
}

@ArgsType()
export class DeleteManyGuideGuideCategoryArgs {
    @Field(() => GuideGuideCategoryWhereInput, {nullable:true})
    @Type(() => GuideGuideCategoryWhereInput)
    @ValidateNested({ each: true })
    where?: InstanceType<typeof GuideGuideCategoryWhereInput>;
}

@ArgsType()
export class DeleteOneGuideGuideCategoryArgs {
    @Field(() => GuideGuideCategoryWhereUniqueInput, {nullable:false})
    @Type(() => GuideGuideCategoryWhereUniqueInput)
    @ValidateNested({ each: true })
    where!: InstanceType<typeof GuideGuideCategoryWhereUniqueInput>;
}

@ArgsType()
export class FindFirstGuideGuideCategoryArgs {
    @Field(() => GuideGuideCategoryWhereInput, {nullable:true})
    @Type(() => GuideGuideCategoryWhereInput)
    @ValidateNested({ each: true })
    where?: InstanceType<typeof GuideGuideCategoryWhereInput>;
    @Field(() => [GuideGuideCategoryOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<GuideGuideCategoryOrderByWithRelationInput>;
    @Field(() => GuideGuideCategoryWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof GuideGuideCategoryWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [GuideGuideCategoryScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof GuideGuideCategoryScalarFieldEnum>;
}

@ArgsType()
export class FindManyGuideGuideCategoryArgs {
    @Field(() => GuideGuideCategoryWhereInput, {nullable:true})
    @Type(() => GuideGuideCategoryWhereInput)
    @ValidateNested({ each: true })
    where?: InstanceType<typeof GuideGuideCategoryWhereInput>;
    @Field(() => [GuideGuideCategoryOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<GuideGuideCategoryOrderByWithRelationInput>;
    @Field(() => GuideGuideCategoryWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof GuideGuideCategoryWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [GuideGuideCategoryScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof GuideGuideCategoryScalarFieldEnum>;
}

@ArgsType()
export class FindUniqueGuideGuideCategoryArgs {
    @Field(() => GuideGuideCategoryWhereUniqueInput, {nullable:false})
    @Type(() => GuideGuideCategoryWhereUniqueInput)
    @ValidateNested({ each: true })
    where!: InstanceType<typeof GuideGuideCategoryWhereUniqueInput>;
}

@ArgsType()
export class GuideGuideCategoryAggregateArgs {
    @Field(() => GuideGuideCategoryWhereInput, {nullable:true})
    @Type(() => GuideGuideCategoryWhereInput)
    @ValidateNested({ each: true })
    where?: InstanceType<typeof GuideGuideCategoryWhereInput>;
    @Field(() => [GuideGuideCategoryOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<GuideGuideCategoryOrderByWithRelationInput>;
    @Field(() => GuideGuideCategoryWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof GuideGuideCategoryWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => GuideGuideCategoryCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof GuideGuideCategoryCountAggregateInput>;
    @Field(() => GuideGuideCategoryAvgAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof GuideGuideCategoryAvgAggregateInput>;
    @Field(() => GuideGuideCategorySumAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof GuideGuideCategorySumAggregateInput>;
    @Field(() => GuideGuideCategoryMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof GuideGuideCategoryMinAggregateInput>;
    @Field(() => GuideGuideCategoryMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof GuideGuideCategoryMaxAggregateInput>;
}

@InputType()
export class GuideGuideCategoryAvgAggregateInput {
    @Field(() => Boolean, {nullable:true})
    userId?: true;
    @Field(() => Boolean, {nullable:true})
    guideCategoryId?: true;
}

@ObjectType()
export class GuideGuideCategoryAvgAggregate {
    @Field(() => Float, {nullable:true})
    userId?: number;
    @Field(() => Float, {nullable:true})
    guideCategoryId?: number;
}

@InputType()
export class GuideGuideCategoryAvgOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    guideCategoryId?: keyof typeof SortOrder;
}

@InputType()
export class GuideGuideCategoryCountAggregateInput {
    @Field(() => Boolean, {nullable:true})
    status?: true;
    @Field(() => Boolean, {nullable:true})
    userId?: true;
    @Field(() => Boolean, {nullable:true})
    guideCategoryId?: true;
    @Field(() => Boolean, {nullable:true})
    _all?: true;
}

@ObjectType()
export class GuideGuideCategoryCountAggregate {
    @Field(() => Int, {nullable:false})
    status!: number;
    @Field(() => Int, {nullable:false})
    userId!: number;
    @Field(() => Int, {nullable:false})
    guideCategoryId!: number;
    @Field(() => Int, {nullable:false})
    _all!: number;
}

@InputType()
export class GuideGuideCategoryCountOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    guideCategoryId?: keyof typeof SortOrder;
}

@InputType()
export class GuideGuideCategoryCreateManyGuideCategoryInputEnvelope {
    @Field(() => [GuideGuideCategoryCreateManyGuideCategoryInput], {nullable:false})
    @Type(() => GuideGuideCategoryCreateManyGuideCategoryInput)
    data!: Array<GuideGuideCategoryCreateManyGuideCategoryInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@InputType()
export class GuideGuideCategoryCreateManyGuideCategoryInput {
    @Field(() => Status, {nullable:true})
    status?: keyof typeof Status;
    @Field(() => Int, {nullable:false})
    userId!: number;
}

@InputType()
export class GuideGuideCategoryCreateManyUserInputEnvelope {
    @Field(() => [GuideGuideCategoryCreateManyUserInput], {nullable:false})
    @Type(() => GuideGuideCategoryCreateManyUserInput)
    data!: Array<GuideGuideCategoryCreateManyUserInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@InputType()
export class GuideGuideCategoryCreateManyUserInput {
    @Field(() => Status, {nullable:true})
    status?: keyof typeof Status;
    @Field(() => Int, {nullable:false})
    guideCategoryId!: number;
}

@InputType()
export class GuideGuideCategoryCreateManyInput {
    @Field(() => Status, {nullable:true})
    status?: keyof typeof Status;
    @Field(() => Int, {nullable:false})
    userId!: number;
    @Field(() => Int, {nullable:false})
    guideCategoryId!: number;
}

@InputType()
export class GuideGuideCategoryCreateNestedManyWithoutGuideCategoryInput {
    @Field(() => [GuideGuideCategoryCreateWithoutGuideCategoryInput], {nullable:true})
    @Type(() => GuideGuideCategoryCreateWithoutGuideCategoryInput)
    create?: Array<GuideGuideCategoryCreateWithoutGuideCategoryInput>;
    @Field(() => [GuideGuideCategoryCreateOrConnectWithoutGuideCategoryInput], {nullable:true})
    @Type(() => GuideGuideCategoryCreateOrConnectWithoutGuideCategoryInput)
    connectOrCreate?: Array<GuideGuideCategoryCreateOrConnectWithoutGuideCategoryInput>;
    @Field(() => GuideGuideCategoryCreateManyGuideCategoryInputEnvelope, {nullable:true})
    @Type(() => GuideGuideCategoryCreateManyGuideCategoryInputEnvelope)
    createMany?: InstanceType<typeof GuideGuideCategoryCreateManyGuideCategoryInputEnvelope>;
    @Field(() => [GuideGuideCategoryWhereUniqueInput], {nullable:true})
    @Type(() => GuideGuideCategoryWhereUniqueInput)
    connect?: Array<GuideGuideCategoryWhereUniqueInput>;
}

@InputType()
export class GuideGuideCategoryCreateNestedManyWithoutUserInput {
    @Field(() => [GuideGuideCategoryCreateWithoutUserInput], {nullable:true})
    @Type(() => GuideGuideCategoryCreateWithoutUserInput)
    create?: Array<GuideGuideCategoryCreateWithoutUserInput>;
    @Field(() => [GuideGuideCategoryCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => GuideGuideCategoryCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<GuideGuideCategoryCreateOrConnectWithoutUserInput>;
    @Field(() => GuideGuideCategoryCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => GuideGuideCategoryCreateManyUserInputEnvelope)
    createMany?: InstanceType<typeof GuideGuideCategoryCreateManyUserInputEnvelope>;
    @Field(() => [GuideGuideCategoryWhereUniqueInput], {nullable:true})
    @Type(() => GuideGuideCategoryWhereUniqueInput)
    connect?: Array<GuideGuideCategoryWhereUniqueInput>;
}

@InputType()
export class GuideGuideCategoryCreateOrConnectWithoutGuideCategoryInput {
    @Field(() => GuideGuideCategoryWhereUniqueInput, {nullable:false})
    @Type(() => GuideGuideCategoryWhereUniqueInput)
    where!: InstanceType<typeof GuideGuideCategoryWhereUniqueInput>;
    @Field(() => GuideGuideCategoryCreateWithoutGuideCategoryInput, {nullable:false})
    @Type(() => GuideGuideCategoryCreateWithoutGuideCategoryInput)
    create!: InstanceType<typeof GuideGuideCategoryCreateWithoutGuideCategoryInput>;
}

@InputType()
export class GuideGuideCategoryCreateOrConnectWithoutUserInput {
    @Field(() => GuideGuideCategoryWhereUniqueInput, {nullable:false})
    @Type(() => GuideGuideCategoryWhereUniqueInput)
    where!: InstanceType<typeof GuideGuideCategoryWhereUniqueInput>;
    @Field(() => GuideGuideCategoryCreateWithoutUserInput, {nullable:false})
    @Type(() => GuideGuideCategoryCreateWithoutUserInput)
    create!: InstanceType<typeof GuideGuideCategoryCreateWithoutUserInput>;
}

@InputType()
export class GuideGuideCategoryCreateWithoutGuideCategoryInput {
    @Field(() => Status, {nullable:true})
    status?: keyof typeof Status;
    @Field(() => UserCreateNestedOneWithoutGuideGuideCategoryInput, {nullable:false})
    user!: InstanceType<typeof UserCreateNestedOneWithoutGuideGuideCategoryInput>;
}

@InputType()
export class GuideGuideCategoryCreateWithoutUserInput {
    @Field(() => Status, {nullable:true})
    status?: keyof typeof Status;
    @Field(() => GuideCategoryCreateNestedOneWithoutGuideGuideCategoryInput, {nullable:false})
    guideCategory!: InstanceType<typeof GuideCategoryCreateNestedOneWithoutGuideGuideCategoryInput>;
}

@InputType()
export class GuideGuideCategoryCreateInput {
    @Field(() => Status, {nullable:true})
    status?: keyof typeof Status;
    @Field(() => UserCreateNestedOneWithoutGuideGuideCategoryInput, {nullable:false})
    user!: InstanceType<typeof UserCreateNestedOneWithoutGuideGuideCategoryInput>;
    @Field(() => GuideCategoryCreateNestedOneWithoutGuideGuideCategoryInput, {nullable:false})
    guideCategory!: InstanceType<typeof GuideCategoryCreateNestedOneWithoutGuideGuideCategoryInput>;
}

@ArgsType()
export class GuideGuideCategoryGroupByArgs {
    @Field(() => GuideGuideCategoryWhereInput, {nullable:true})
    @Type(() => GuideGuideCategoryWhereInput)
    @ValidateNested({ each: true })
    where?: InstanceType<typeof GuideGuideCategoryWhereInput>;
    @Field(() => [GuideGuideCategoryOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<GuideGuideCategoryOrderByWithAggregationInput>;
    @Field(() => [GuideGuideCategoryScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof GuideGuideCategoryScalarFieldEnum>;
    @Field(() => GuideGuideCategoryScalarWhereWithAggregatesInput, {nullable:true})
    having?: InstanceType<typeof GuideGuideCategoryScalarWhereWithAggregatesInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => GuideGuideCategoryCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof GuideGuideCategoryCountAggregateInput>;
    @Field(() => GuideGuideCategoryAvgAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof GuideGuideCategoryAvgAggregateInput>;
    @Field(() => GuideGuideCategorySumAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof GuideGuideCategorySumAggregateInput>;
    @Field(() => GuideGuideCategoryMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof GuideGuideCategoryMinAggregateInput>;
    @Field(() => GuideGuideCategoryMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof GuideGuideCategoryMaxAggregateInput>;
}

@ObjectType()
export class GuideGuideCategoryGroupBy {
    @Field(() => Status, {nullable:false})
    status!: keyof typeof Status;
    @Field(() => Int, {nullable:false})
    userId!: number;
    @Field(() => Int, {nullable:false})
    guideCategoryId!: number;
    @Field(() => GuideGuideCategoryCountAggregate, {nullable:true})
    _count?: InstanceType<typeof GuideGuideCategoryCountAggregate>;
    @Field(() => GuideGuideCategoryAvgAggregate, {nullable:true})
    _avg?: InstanceType<typeof GuideGuideCategoryAvgAggregate>;
    @Field(() => GuideGuideCategorySumAggregate, {nullable:true})
    _sum?: InstanceType<typeof GuideGuideCategorySumAggregate>;
    @Field(() => GuideGuideCategoryMinAggregate, {nullable:true})
    _min?: InstanceType<typeof GuideGuideCategoryMinAggregate>;
    @Field(() => GuideGuideCategoryMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof GuideGuideCategoryMaxAggregate>;
}

@InputType()
export class GuideGuideCategoryListRelationFilter {
    @Field(() => GuideGuideCategoryWhereInput, {nullable:true})
    every?: InstanceType<typeof GuideGuideCategoryWhereInput>;
    @Field(() => GuideGuideCategoryWhereInput, {nullable:true})
    some?: InstanceType<typeof GuideGuideCategoryWhereInput>;
    @Field(() => GuideGuideCategoryWhereInput, {nullable:true})
    none?: InstanceType<typeof GuideGuideCategoryWhereInput>;
}

@InputType()
export class GuideGuideCategoryMaxAggregateInput {
    @Field(() => Boolean, {nullable:true})
    status?: true;
    @Field(() => Boolean, {nullable:true})
    userId?: true;
    @Field(() => Boolean, {nullable:true})
    guideCategoryId?: true;
}

@ObjectType()
export class GuideGuideCategoryMaxAggregate {
    @Field(() => Status, {nullable:true})
    status?: keyof typeof Status;
    @Field(() => Int, {nullable:true})
    userId?: number;
    @Field(() => Int, {nullable:true})
    guideCategoryId?: number;
}

@InputType()
export class GuideGuideCategoryMaxOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    guideCategoryId?: keyof typeof SortOrder;
}

@InputType()
export class GuideGuideCategoryMinAggregateInput {
    @Field(() => Boolean, {nullable:true})
    status?: true;
    @Field(() => Boolean, {nullable:true})
    userId?: true;
    @Field(() => Boolean, {nullable:true})
    guideCategoryId?: true;
}

@ObjectType()
export class GuideGuideCategoryMinAggregate {
    @Field(() => Status, {nullable:true})
    status?: keyof typeof Status;
    @Field(() => Int, {nullable:true})
    userId?: number;
    @Field(() => Int, {nullable:true})
    guideCategoryId?: number;
}

@InputType()
export class GuideGuideCategoryMinOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    guideCategoryId?: keyof typeof SortOrder;
}

@InputType()
export class GuideGuideCategoryOrderByRelationAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    _count?: keyof typeof SortOrder;
}

@InputType()
export class GuideGuideCategoryOrderByWithAggregationInput {
    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    guideCategoryId?: keyof typeof SortOrder;
    @Field(() => GuideGuideCategoryCountOrderByAggregateInput, {nullable:true})
    _count?: InstanceType<typeof GuideGuideCategoryCountOrderByAggregateInput>;
    @Field(() => GuideGuideCategoryAvgOrderByAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof GuideGuideCategoryAvgOrderByAggregateInput>;
    @Field(() => GuideGuideCategoryMaxOrderByAggregateInput, {nullable:true})
    _max?: InstanceType<typeof GuideGuideCategoryMaxOrderByAggregateInput>;
    @Field(() => GuideGuideCategoryMinOrderByAggregateInput, {nullable:true})
    _min?: InstanceType<typeof GuideGuideCategoryMinOrderByAggregateInput>;
    @Field(() => GuideGuideCategorySumOrderByAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof GuideGuideCategorySumOrderByAggregateInput>;
}

@InputType()
export class GuideGuideCategoryOrderByWithRelationInput {
    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;
    @Field(() => UserOrderByWithRelationInput, {nullable:true})
    user?: InstanceType<typeof UserOrderByWithRelationInput>;
    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;
    @Field(() => GuideCategoryOrderByWithRelationInput, {nullable:true})
    guideCategory?: InstanceType<typeof GuideCategoryOrderByWithRelationInput>;
    @Field(() => SortOrder, {nullable:true})
    guideCategoryId?: keyof typeof SortOrder;
}

@InputType()
export class GuideGuideCategoryScalarWhereWithAggregatesInput {
    @Field(() => [GuideGuideCategoryScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<GuideGuideCategoryScalarWhereWithAggregatesInput>;
    @Field(() => [GuideGuideCategoryScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<GuideGuideCategoryScalarWhereWithAggregatesInput>;
    @Field(() => [GuideGuideCategoryScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<GuideGuideCategoryScalarWhereWithAggregatesInput>;
    @Field(() => EnumStatusWithAggregatesFilter, {nullable:true})
    status?: InstanceType<typeof EnumStatusWithAggregatesFilter>;
    @Field(() => IntWithAggregatesFilter, {nullable:true})
    userId?: InstanceType<typeof IntWithAggregatesFilter>;
    @Field(() => IntWithAggregatesFilter, {nullable:true})
    guideCategoryId?: InstanceType<typeof IntWithAggregatesFilter>;
}

@InputType()
export class GuideGuideCategoryScalarWhereInput {
    @Field(() => [GuideGuideCategoryScalarWhereInput], {nullable:true})
    AND?: Array<GuideGuideCategoryScalarWhereInput>;
    @Field(() => [GuideGuideCategoryScalarWhereInput], {nullable:true})
    OR?: Array<GuideGuideCategoryScalarWhereInput>;
    @Field(() => [GuideGuideCategoryScalarWhereInput], {nullable:true})
    NOT?: Array<GuideGuideCategoryScalarWhereInput>;
    @Field(() => EnumStatusFilter, {nullable:true})
    status?: InstanceType<typeof EnumStatusFilter>;
    @Field(() => IntFilter, {nullable:true})
    userId?: InstanceType<typeof IntFilter>;
    @Field(() => IntFilter, {nullable:true})
    guideCategoryId?: InstanceType<typeof IntFilter>;
}

@InputType()
export class GuideGuideCategorySumAggregateInput {
    @Field(() => Boolean, {nullable:true})
    userId?: true;
    @Field(() => Boolean, {nullable:true})
    guideCategoryId?: true;
}

@ObjectType()
export class GuideGuideCategorySumAggregate {
    @Field(() => Int, {nullable:true})
    userId?: number;
    @Field(() => Int, {nullable:true})
    guideCategoryId?: number;
}

@InputType()
export class GuideGuideCategorySumOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    guideCategoryId?: keyof typeof SortOrder;
}

@InputType()
export class GuideGuideCategoryUncheckedCreateNestedManyWithoutGuideCategoryInput {
    @Field(() => [GuideGuideCategoryCreateWithoutGuideCategoryInput], {nullable:true})
    @Type(() => GuideGuideCategoryCreateWithoutGuideCategoryInput)
    create?: Array<GuideGuideCategoryCreateWithoutGuideCategoryInput>;
    @Field(() => [GuideGuideCategoryCreateOrConnectWithoutGuideCategoryInput], {nullable:true})
    @Type(() => GuideGuideCategoryCreateOrConnectWithoutGuideCategoryInput)
    connectOrCreate?: Array<GuideGuideCategoryCreateOrConnectWithoutGuideCategoryInput>;
    @Field(() => GuideGuideCategoryCreateManyGuideCategoryInputEnvelope, {nullable:true})
    @Type(() => GuideGuideCategoryCreateManyGuideCategoryInputEnvelope)
    createMany?: InstanceType<typeof GuideGuideCategoryCreateManyGuideCategoryInputEnvelope>;
    @Field(() => [GuideGuideCategoryWhereUniqueInput], {nullable:true})
    @Type(() => GuideGuideCategoryWhereUniqueInput)
    connect?: Array<GuideGuideCategoryWhereUniqueInput>;
}

@InputType()
export class GuideGuideCategoryUncheckedCreateNestedManyWithoutUserInput {
    @Field(() => [GuideGuideCategoryCreateWithoutUserInput], {nullable:true})
    @Type(() => GuideGuideCategoryCreateWithoutUserInput)
    create?: Array<GuideGuideCategoryCreateWithoutUserInput>;
    @Field(() => [GuideGuideCategoryCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => GuideGuideCategoryCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<GuideGuideCategoryCreateOrConnectWithoutUserInput>;
    @Field(() => GuideGuideCategoryCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => GuideGuideCategoryCreateManyUserInputEnvelope)
    createMany?: InstanceType<typeof GuideGuideCategoryCreateManyUserInputEnvelope>;
    @Field(() => [GuideGuideCategoryWhereUniqueInput], {nullable:true})
    @Type(() => GuideGuideCategoryWhereUniqueInput)
    connect?: Array<GuideGuideCategoryWhereUniqueInput>;
}

@InputType()
export class GuideGuideCategoryUncheckedCreateWithoutGuideCategoryInput {
    @Field(() => Status, {nullable:true})
    status?: keyof typeof Status;
    @Field(() => Int, {nullable:false})
    userId!: number;
}

@InputType()
export class GuideGuideCategoryUncheckedCreateWithoutUserInput {
    @Field(() => Status, {nullable:true})
    status?: keyof typeof Status;
    @Field(() => Int, {nullable:false})
    guideCategoryId!: number;
}

@InputType()
export class GuideGuideCategoryUncheckedCreateInput {
    @Field(() => Status, {nullable:true})
    status?: keyof typeof Status;
    @Field(() => Int, {nullable:false})
    userId!: number;
    @Field(() => Int, {nullable:false})
    guideCategoryId!: number;
}

@InputType()
export class GuideGuideCategoryUncheckedUpdateManyWithoutGuideCategoryInput {
    @Field(() => [GuideGuideCategoryCreateWithoutGuideCategoryInput], {nullable:true})
    @Type(() => GuideGuideCategoryCreateWithoutGuideCategoryInput)
    create?: Array<GuideGuideCategoryCreateWithoutGuideCategoryInput>;
    @Field(() => [GuideGuideCategoryCreateOrConnectWithoutGuideCategoryInput], {nullable:true})
    @Type(() => GuideGuideCategoryCreateOrConnectWithoutGuideCategoryInput)
    connectOrCreate?: Array<GuideGuideCategoryCreateOrConnectWithoutGuideCategoryInput>;
    @Field(() => [GuideGuideCategoryUpsertWithWhereUniqueWithoutGuideCategoryInput], {nullable:true})
    @Type(() => GuideGuideCategoryUpsertWithWhereUniqueWithoutGuideCategoryInput)
    upsert?: Array<GuideGuideCategoryUpsertWithWhereUniqueWithoutGuideCategoryInput>;
    @Field(() => GuideGuideCategoryCreateManyGuideCategoryInputEnvelope, {nullable:true})
    @Type(() => GuideGuideCategoryCreateManyGuideCategoryInputEnvelope)
    createMany?: InstanceType<typeof GuideGuideCategoryCreateManyGuideCategoryInputEnvelope>;
    @Field(() => [GuideGuideCategoryWhereUniqueInput], {nullable:true})
    @Type(() => GuideGuideCategoryWhereUniqueInput)
    set?: Array<GuideGuideCategoryWhereUniqueInput>;
    @Field(() => [GuideGuideCategoryWhereUniqueInput], {nullable:true})
    @Type(() => GuideGuideCategoryWhereUniqueInput)
    disconnect?: Array<GuideGuideCategoryWhereUniqueInput>;
    @Field(() => [GuideGuideCategoryWhereUniqueInput], {nullable:true})
    @Type(() => GuideGuideCategoryWhereUniqueInput)
    delete?: Array<GuideGuideCategoryWhereUniqueInput>;
    @Field(() => [GuideGuideCategoryWhereUniqueInput], {nullable:true})
    @Type(() => GuideGuideCategoryWhereUniqueInput)
    connect?: Array<GuideGuideCategoryWhereUniqueInput>;
    @Field(() => [GuideGuideCategoryUpdateWithWhereUniqueWithoutGuideCategoryInput], {nullable:true})
    @Type(() => GuideGuideCategoryUpdateWithWhereUniqueWithoutGuideCategoryInput)
    update?: Array<GuideGuideCategoryUpdateWithWhereUniqueWithoutGuideCategoryInput>;
    @Field(() => [GuideGuideCategoryUpdateManyWithWhereWithoutGuideCategoryInput], {nullable:true})
    @Type(() => GuideGuideCategoryUpdateManyWithWhereWithoutGuideCategoryInput)
    updateMany?: Array<GuideGuideCategoryUpdateManyWithWhereWithoutGuideCategoryInput>;
    @Field(() => [GuideGuideCategoryScalarWhereInput], {nullable:true})
    @Type(() => GuideGuideCategoryScalarWhereInput)
    deleteMany?: Array<GuideGuideCategoryScalarWhereInput>;
}

@InputType()
export class GuideGuideCategoryUncheckedUpdateManyWithoutGuideGuideCategoryInput {
    @Field(() => Status, {nullable:true})
    status?: keyof typeof Status;
    @Field(() => Int, {nullable:true})
    guideCategoryId?: number;
}

@InputType()
export class GuideGuideCategoryUncheckedUpdateManyWithoutUserInput {
    @Field(() => [GuideGuideCategoryCreateWithoutUserInput], {nullable:true})
    @Type(() => GuideGuideCategoryCreateWithoutUserInput)
    create?: Array<GuideGuideCategoryCreateWithoutUserInput>;
    @Field(() => [GuideGuideCategoryCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => GuideGuideCategoryCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<GuideGuideCategoryCreateOrConnectWithoutUserInput>;
    @Field(() => [GuideGuideCategoryUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => GuideGuideCategoryUpsertWithWhereUniqueWithoutUserInput)
    upsert?: Array<GuideGuideCategoryUpsertWithWhereUniqueWithoutUserInput>;
    @Field(() => GuideGuideCategoryCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => GuideGuideCategoryCreateManyUserInputEnvelope)
    createMany?: InstanceType<typeof GuideGuideCategoryCreateManyUserInputEnvelope>;
    @Field(() => [GuideGuideCategoryWhereUniqueInput], {nullable:true})
    @Type(() => GuideGuideCategoryWhereUniqueInput)
    set?: Array<GuideGuideCategoryWhereUniqueInput>;
    @Field(() => [GuideGuideCategoryWhereUniqueInput], {nullable:true})
    @Type(() => GuideGuideCategoryWhereUniqueInput)
    disconnect?: Array<GuideGuideCategoryWhereUniqueInput>;
    @Field(() => [GuideGuideCategoryWhereUniqueInput], {nullable:true})
    @Type(() => GuideGuideCategoryWhereUniqueInput)
    delete?: Array<GuideGuideCategoryWhereUniqueInput>;
    @Field(() => [GuideGuideCategoryWhereUniqueInput], {nullable:true})
    @Type(() => GuideGuideCategoryWhereUniqueInput)
    connect?: Array<GuideGuideCategoryWhereUniqueInput>;
    @Field(() => [GuideGuideCategoryUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => GuideGuideCategoryUpdateWithWhereUniqueWithoutUserInput)
    update?: Array<GuideGuideCategoryUpdateWithWhereUniqueWithoutUserInput>;
    @Field(() => [GuideGuideCategoryUpdateManyWithWhereWithoutUserInput], {nullable:true})
    @Type(() => GuideGuideCategoryUpdateManyWithWhereWithoutUserInput)
    updateMany?: Array<GuideGuideCategoryUpdateManyWithWhereWithoutUserInput>;
    @Field(() => [GuideGuideCategoryScalarWhereInput], {nullable:true})
    @Type(() => GuideGuideCategoryScalarWhereInput)
    deleteMany?: Array<GuideGuideCategoryScalarWhereInput>;
}

@InputType()
export class GuideGuideCategoryUncheckedUpdateManyInput {
    @Field(() => Status, {nullable:true})
    status?: keyof typeof Status;
    @Field(() => Int, {nullable:true})
    userId?: number;
    @Field(() => Int, {nullable:true})
    guideCategoryId?: number;
}

@InputType()
export class GuideGuideCategoryUncheckedUpdateWithoutGuideCategoryInput {
    @Field(() => Status, {nullable:true})
    status?: keyof typeof Status;
    @Field(() => Int, {nullable:true})
    userId?: number;
}

@InputType()
export class GuideGuideCategoryUncheckedUpdateWithoutUserInput {
    @Field(() => Status, {nullable:true})
    status?: keyof typeof Status;
    @Field(() => Int, {nullable:true})
    guideCategoryId?: number;
}

@InputType()
export class GuideGuideCategoryUncheckedUpdateInput {
    @Field(() => Status, {nullable:true})
    status?: keyof typeof Status;
    @Field(() => Int, {nullable:true})
    userId?: number;
    @Field(() => Int, {nullable:true})
    guideCategoryId?: number;
}

@InputType()
export class GuideGuideCategoryUpdateManyMutationInput {
    @Field(() => Status, {nullable:true})
    status?: keyof typeof Status;
}

@InputType()
export class GuideGuideCategoryUpdateManyWithWhereWithoutGuideCategoryInput {
    @Field(() => GuideGuideCategoryScalarWhereInput, {nullable:false})
    @Type(() => GuideGuideCategoryScalarWhereInput)
    where!: InstanceType<typeof GuideGuideCategoryScalarWhereInput>;
    @Field(() => GuideGuideCategoryUpdateManyMutationInput, {nullable:false})
    @Type(() => GuideGuideCategoryUpdateManyMutationInput)
    data!: InstanceType<typeof GuideGuideCategoryUpdateManyMutationInput>;
}

@InputType()
export class GuideGuideCategoryUpdateManyWithWhereWithoutUserInput {
    @Field(() => GuideGuideCategoryScalarWhereInput, {nullable:false})
    @Type(() => GuideGuideCategoryScalarWhereInput)
    where!: InstanceType<typeof GuideGuideCategoryScalarWhereInput>;
    @Field(() => GuideGuideCategoryUpdateManyMutationInput, {nullable:false})
    @Type(() => GuideGuideCategoryUpdateManyMutationInput)
    data!: InstanceType<typeof GuideGuideCategoryUpdateManyMutationInput>;
}

@InputType()
export class GuideGuideCategoryUpdateManyWithoutGuideCategoryInput {
    @Field(() => [GuideGuideCategoryCreateWithoutGuideCategoryInput], {nullable:true})
    @Type(() => GuideGuideCategoryCreateWithoutGuideCategoryInput)
    create?: Array<GuideGuideCategoryCreateWithoutGuideCategoryInput>;
    @Field(() => [GuideGuideCategoryCreateOrConnectWithoutGuideCategoryInput], {nullable:true})
    @Type(() => GuideGuideCategoryCreateOrConnectWithoutGuideCategoryInput)
    connectOrCreate?: Array<GuideGuideCategoryCreateOrConnectWithoutGuideCategoryInput>;
    @Field(() => [GuideGuideCategoryUpsertWithWhereUniqueWithoutGuideCategoryInput], {nullable:true})
    @Type(() => GuideGuideCategoryUpsertWithWhereUniqueWithoutGuideCategoryInput)
    upsert?: Array<GuideGuideCategoryUpsertWithWhereUniqueWithoutGuideCategoryInput>;
    @Field(() => GuideGuideCategoryCreateManyGuideCategoryInputEnvelope, {nullable:true})
    @Type(() => GuideGuideCategoryCreateManyGuideCategoryInputEnvelope)
    createMany?: InstanceType<typeof GuideGuideCategoryCreateManyGuideCategoryInputEnvelope>;
    @Field(() => [GuideGuideCategoryWhereUniqueInput], {nullable:true})
    @Type(() => GuideGuideCategoryWhereUniqueInput)
    set?: Array<GuideGuideCategoryWhereUniqueInput>;
    @Field(() => [GuideGuideCategoryWhereUniqueInput], {nullable:true})
    @Type(() => GuideGuideCategoryWhereUniqueInput)
    disconnect?: Array<GuideGuideCategoryWhereUniqueInput>;
    @Field(() => [GuideGuideCategoryWhereUniqueInput], {nullable:true})
    @Type(() => GuideGuideCategoryWhereUniqueInput)
    delete?: Array<GuideGuideCategoryWhereUniqueInput>;
    @Field(() => [GuideGuideCategoryWhereUniqueInput], {nullable:true})
    @Type(() => GuideGuideCategoryWhereUniqueInput)
    connect?: Array<GuideGuideCategoryWhereUniqueInput>;
    @Field(() => [GuideGuideCategoryUpdateWithWhereUniqueWithoutGuideCategoryInput], {nullable:true})
    @Type(() => GuideGuideCategoryUpdateWithWhereUniqueWithoutGuideCategoryInput)
    update?: Array<GuideGuideCategoryUpdateWithWhereUniqueWithoutGuideCategoryInput>;
    @Field(() => [GuideGuideCategoryUpdateManyWithWhereWithoutGuideCategoryInput], {nullable:true})
    @Type(() => GuideGuideCategoryUpdateManyWithWhereWithoutGuideCategoryInput)
    updateMany?: Array<GuideGuideCategoryUpdateManyWithWhereWithoutGuideCategoryInput>;
    @Field(() => [GuideGuideCategoryScalarWhereInput], {nullable:true})
    @Type(() => GuideGuideCategoryScalarWhereInput)
    deleteMany?: Array<GuideGuideCategoryScalarWhereInput>;
}

@InputType()
export class GuideGuideCategoryUpdateManyWithoutUserInput {
    @Field(() => [GuideGuideCategoryCreateWithoutUserInput], {nullable:true})
    @Type(() => GuideGuideCategoryCreateWithoutUserInput)
    create?: Array<GuideGuideCategoryCreateWithoutUserInput>;
    @Field(() => [GuideGuideCategoryCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => GuideGuideCategoryCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<GuideGuideCategoryCreateOrConnectWithoutUserInput>;
    @Field(() => [GuideGuideCategoryUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => GuideGuideCategoryUpsertWithWhereUniqueWithoutUserInput)
    upsert?: Array<GuideGuideCategoryUpsertWithWhereUniqueWithoutUserInput>;
    @Field(() => GuideGuideCategoryCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => GuideGuideCategoryCreateManyUserInputEnvelope)
    createMany?: InstanceType<typeof GuideGuideCategoryCreateManyUserInputEnvelope>;
    @Field(() => [GuideGuideCategoryWhereUniqueInput], {nullable:true})
    @Type(() => GuideGuideCategoryWhereUniqueInput)
    set?: Array<GuideGuideCategoryWhereUniqueInput>;
    @Field(() => [GuideGuideCategoryWhereUniqueInput], {nullable:true})
    @Type(() => GuideGuideCategoryWhereUniqueInput)
    disconnect?: Array<GuideGuideCategoryWhereUniqueInput>;
    @Field(() => [GuideGuideCategoryWhereUniqueInput], {nullable:true})
    @Type(() => GuideGuideCategoryWhereUniqueInput)
    delete?: Array<GuideGuideCategoryWhereUniqueInput>;
    @Field(() => [GuideGuideCategoryWhereUniqueInput], {nullable:true})
    @Type(() => GuideGuideCategoryWhereUniqueInput)
    connect?: Array<GuideGuideCategoryWhereUniqueInput>;
    @Field(() => [GuideGuideCategoryUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => GuideGuideCategoryUpdateWithWhereUniqueWithoutUserInput)
    update?: Array<GuideGuideCategoryUpdateWithWhereUniqueWithoutUserInput>;
    @Field(() => [GuideGuideCategoryUpdateManyWithWhereWithoutUserInput], {nullable:true})
    @Type(() => GuideGuideCategoryUpdateManyWithWhereWithoutUserInput)
    updateMany?: Array<GuideGuideCategoryUpdateManyWithWhereWithoutUserInput>;
    @Field(() => [GuideGuideCategoryScalarWhereInput], {nullable:true})
    @Type(() => GuideGuideCategoryScalarWhereInput)
    deleteMany?: Array<GuideGuideCategoryScalarWhereInput>;
}

@InputType()
export class GuideGuideCategoryUpdateWithWhereUniqueWithoutGuideCategoryInput {
    @Field(() => GuideGuideCategoryWhereUniqueInput, {nullable:false})
    @Type(() => GuideGuideCategoryWhereUniqueInput)
    where!: InstanceType<typeof GuideGuideCategoryWhereUniqueInput>;
    @Field(() => GuideGuideCategoryUpdateWithoutGuideCategoryInput, {nullable:false})
    @Type(() => GuideGuideCategoryUpdateWithoutGuideCategoryInput)
    data!: InstanceType<typeof GuideGuideCategoryUpdateWithoutGuideCategoryInput>;
}

@InputType()
export class GuideGuideCategoryUpdateWithWhereUniqueWithoutUserInput {
    @Field(() => GuideGuideCategoryWhereUniqueInput, {nullable:false})
    @Type(() => GuideGuideCategoryWhereUniqueInput)
    where!: InstanceType<typeof GuideGuideCategoryWhereUniqueInput>;
    @Field(() => GuideGuideCategoryUpdateWithoutUserInput, {nullable:false})
    @Type(() => GuideGuideCategoryUpdateWithoutUserInput)
    data!: InstanceType<typeof GuideGuideCategoryUpdateWithoutUserInput>;
}

@InputType()
export class GuideGuideCategoryUpdateWithoutGuideCategoryInput {
    @Field(() => Status, {nullable:true})
    status?: keyof typeof Status;
    @Field(() => UserUpdateOneRequiredWithoutGuideGuideCategoryInput, {nullable:true})
    user?: InstanceType<typeof UserUpdateOneRequiredWithoutGuideGuideCategoryInput>;
}

@InputType()
export class GuideGuideCategoryUpdateWithoutUserInput {
    @Field(() => Status, {nullable:true})
    status?: keyof typeof Status;
    @Field(() => GuideCategoryUpdateOneRequiredWithoutGuideGuideCategoryInput, {nullable:true})
    guideCategory?: InstanceType<typeof GuideCategoryUpdateOneRequiredWithoutGuideGuideCategoryInput>;
}

@InputType()
export class GuideGuideCategoryUpdateInput {
    @Field(() => Status, {nullable:true})
    status?: keyof typeof Status;
    @Field(() => UserUpdateOneRequiredWithoutGuideGuideCategoryInput, {nullable:true})
    user?: InstanceType<typeof UserUpdateOneRequiredWithoutGuideGuideCategoryInput>;
    @Field(() => GuideCategoryUpdateOneRequiredWithoutGuideGuideCategoryInput, {nullable:true})
    guideCategory?: InstanceType<typeof GuideCategoryUpdateOneRequiredWithoutGuideGuideCategoryInput>;
}

@InputType()
export class GuideGuideCategoryUpsertWithWhereUniqueWithoutGuideCategoryInput {
    @Field(() => GuideGuideCategoryWhereUniqueInput, {nullable:false})
    @Type(() => GuideGuideCategoryWhereUniqueInput)
    where!: InstanceType<typeof GuideGuideCategoryWhereUniqueInput>;
    @Field(() => GuideGuideCategoryUpdateWithoutGuideCategoryInput, {nullable:false})
    @Type(() => GuideGuideCategoryUpdateWithoutGuideCategoryInput)
    update!: InstanceType<typeof GuideGuideCategoryUpdateWithoutGuideCategoryInput>;
    @Field(() => GuideGuideCategoryCreateWithoutGuideCategoryInput, {nullable:false})
    @Type(() => GuideGuideCategoryCreateWithoutGuideCategoryInput)
    create!: InstanceType<typeof GuideGuideCategoryCreateWithoutGuideCategoryInput>;
}

@InputType()
export class GuideGuideCategoryUpsertWithWhereUniqueWithoutUserInput {
    @Field(() => GuideGuideCategoryWhereUniqueInput, {nullable:false})
    @Type(() => GuideGuideCategoryWhereUniqueInput)
    where!: InstanceType<typeof GuideGuideCategoryWhereUniqueInput>;
    @Field(() => GuideGuideCategoryUpdateWithoutUserInput, {nullable:false})
    @Type(() => GuideGuideCategoryUpdateWithoutUserInput)
    update!: InstanceType<typeof GuideGuideCategoryUpdateWithoutUserInput>;
    @Field(() => GuideGuideCategoryCreateWithoutUserInput, {nullable:false})
    @Type(() => GuideGuideCategoryCreateWithoutUserInput)
    create!: InstanceType<typeof GuideGuideCategoryCreateWithoutUserInput>;
}

@InputType()
export class GuideGuideCategoryUserIdGuideCategoryIdCompoundUniqueInput {
    @Field(() => Int, {nullable:false})
    userId!: number;
    @Field(() => Int, {nullable:false})
    guideCategoryId!: number;
}

@InputType()
export class GuideGuideCategoryWhereUniqueInput {
    @Field(() => GuideGuideCategoryUserIdGuideCategoryIdCompoundUniqueInput, {nullable:true})
    userId_guideCategoryId?: InstanceType<typeof GuideGuideCategoryUserIdGuideCategoryIdCompoundUniqueInput>;
}

@InputType()
export class GuideGuideCategoryWhereInput {
    @Field(() => [GuideGuideCategoryWhereInput], {nullable:true})
    AND?: Array<GuideGuideCategoryWhereInput>;
    @Field(() => [GuideGuideCategoryWhereInput], {nullable:true})
    OR?: Array<GuideGuideCategoryWhereInput>;
    @Field(() => [GuideGuideCategoryWhereInput], {nullable:true})
    NOT?: Array<GuideGuideCategoryWhereInput>;
    @Field(() => EnumStatusFilter, {nullable:true})
    status?: InstanceType<typeof EnumStatusFilter>;
    @Field(() => UserRelationFilter, {nullable:true})
    user?: InstanceType<typeof UserRelationFilter>;
    @Field(() => IntFilter, {nullable:true})
    userId?: InstanceType<typeof IntFilter>;
    @Field(() => GuideCategoryRelationFilter, {nullable:true})
    guideCategory?: InstanceType<typeof GuideCategoryRelationFilter>;
    @Field(() => IntFilter, {nullable:true})
    guideCategoryId?: InstanceType<typeof IntFilter>;
}

@ObjectType()
export class GuideGuideCategory {
    @Field(() => Status, {nullable:false,defaultValue:'ACTIVE'})
    status!: keyof typeof Status;
    @Field(() => User, {nullable:false})
    user?: InstanceType<typeof User>;
    @Field(() => Int, {nullable:false})
    userId!: number;
    @Field(() => GuideCategory, {nullable:false})
    guideCategory?: InstanceType<typeof GuideCategory>;
    @Field(() => Int, {nullable:false})
    guideCategoryId!: number;
}

@ArgsType()
export class UpdateManyGuideGuideCategoryArgs {
    @Field(() => GuideGuideCategoryUpdateManyMutationInput, {nullable:false})
    @Type(() => GuideGuideCategoryUpdateManyMutationInput)
    @ValidateNested({ each: true })
    data!: InstanceType<typeof GuideGuideCategoryUpdateManyMutationInput>;
    @Field(() => GuideGuideCategoryWhereInput, {nullable:true})
    @Type(() => GuideGuideCategoryWhereInput)
    @ValidateNested({ each: true })
    where?: InstanceType<typeof GuideGuideCategoryWhereInput>;
}

@ArgsType()
export class UpdateOneGuideGuideCategoryArgs {
    @Field(() => GuideGuideCategoryUpdateInput, {nullable:false})
    @Type(() => GuideGuideCategoryUpdateInput)
    @ValidateNested({ each: true })
    data!: InstanceType<typeof GuideGuideCategoryUpdateInput>;
    @Field(() => GuideGuideCategoryWhereUniqueInput, {nullable:false})
    @Type(() => GuideGuideCategoryWhereUniqueInput)
    @ValidateNested({ each: true })
    where!: InstanceType<typeof GuideGuideCategoryWhereUniqueInput>;
}

@ArgsType()
export class UpsertOneGuideGuideCategoryArgs {
    @Field(() => GuideGuideCategoryWhereUniqueInput, {nullable:false})
    @Type(() => GuideGuideCategoryWhereUniqueInput)
    @ValidateNested({ each: true })
    where!: InstanceType<typeof GuideGuideCategoryWhereUniqueInput>;
    @Field(() => GuideGuideCategoryCreateInput, {nullable:false})
    @Type(() => GuideGuideCategoryCreateInput)
    create!: InstanceType<typeof GuideGuideCategoryCreateInput>;
    @Field(() => GuideGuideCategoryUpdateInput, {nullable:false})
    @Type(() => GuideGuideCategoryUpdateInput)
    update!: InstanceType<typeof GuideGuideCategoryUpdateInput>;
}

@ObjectType()
export class AggregateGuideLanguages {
    @Field(() => GuideLanguagesCountAggregate, {nullable:true})
    _count?: InstanceType<typeof GuideLanguagesCountAggregate>;
    @Field(() => GuideLanguagesAvgAggregate, {nullable:true})
    _avg?: InstanceType<typeof GuideLanguagesAvgAggregate>;
    @Field(() => GuideLanguagesSumAggregate, {nullable:true})
    _sum?: InstanceType<typeof GuideLanguagesSumAggregate>;
    @Field(() => GuideLanguagesMinAggregate, {nullable:true})
    _min?: InstanceType<typeof GuideLanguagesMinAggregate>;
    @Field(() => GuideLanguagesMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof GuideLanguagesMaxAggregate>;
}

@ArgsType()
export class CreateManyGuideLanguagesArgs {
    @Field(() => [GuideLanguagesCreateManyInput], {nullable:false})
    @Type(() => GuideLanguagesCreateManyInput)
    @ValidateNested({ each: true })
    data!: Array<GuideLanguagesCreateManyInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@ArgsType()
export class CreateOneGuideLanguagesArgs {
    @Field(() => GuideLanguagesCreateInput, {nullable:false})
    @Type(() => GuideLanguagesCreateInput)
    @ValidateNested({ each: true })
    data!: InstanceType<typeof GuideLanguagesCreateInput>;
}

@ArgsType()
export class DeleteManyGuideLanguagesArgs {
    @Field(() => GuideLanguagesWhereInput, {nullable:true})
    @Type(() => GuideLanguagesWhereInput)
    @ValidateNested({ each: true })
    where?: InstanceType<typeof GuideLanguagesWhereInput>;
}

@ArgsType()
export class DeleteOneGuideLanguagesArgs {
    @Field(() => GuideLanguagesWhereUniqueInput, {nullable:false})
    @Type(() => GuideLanguagesWhereUniqueInput)
    @ValidateNested({ each: true })
    where!: InstanceType<typeof GuideLanguagesWhereUniqueInput>;
}

@ArgsType()
export class FindFirstGuideLanguagesArgs {
    @Field(() => GuideLanguagesWhereInput, {nullable:true})
    @Type(() => GuideLanguagesWhereInput)
    @ValidateNested({ each: true })
    where?: InstanceType<typeof GuideLanguagesWhereInput>;
    @Field(() => [GuideLanguagesOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<GuideLanguagesOrderByWithRelationInput>;
    @Field(() => GuideLanguagesWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof GuideLanguagesWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [GuideLanguagesScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof GuideLanguagesScalarFieldEnum>;
}

@ArgsType()
export class FindManyGuideLanguagesArgs {
    @Field(() => GuideLanguagesWhereInput, {nullable:true})
    @Type(() => GuideLanguagesWhereInput)
    @ValidateNested({ each: true })
    where?: InstanceType<typeof GuideLanguagesWhereInput>;
    @Field(() => [GuideLanguagesOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<GuideLanguagesOrderByWithRelationInput>;
    @Field(() => GuideLanguagesWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof GuideLanguagesWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [GuideLanguagesScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof GuideLanguagesScalarFieldEnum>;
}

@ArgsType()
export class FindUniqueGuideLanguagesArgs {
    @Field(() => GuideLanguagesWhereUniqueInput, {nullable:false})
    @Type(() => GuideLanguagesWhereUniqueInput)
    @ValidateNested({ each: true })
    where!: InstanceType<typeof GuideLanguagesWhereUniqueInput>;
}

@ArgsType()
export class GuideLanguagesAggregateArgs {
    @Field(() => GuideLanguagesWhereInput, {nullable:true})
    @Type(() => GuideLanguagesWhereInput)
    @ValidateNested({ each: true })
    where?: InstanceType<typeof GuideLanguagesWhereInput>;
    @Field(() => [GuideLanguagesOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<GuideLanguagesOrderByWithRelationInput>;
    @Field(() => GuideLanguagesWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof GuideLanguagesWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => GuideLanguagesCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof GuideLanguagesCountAggregateInput>;
    @Field(() => GuideLanguagesAvgAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof GuideLanguagesAvgAggregateInput>;
    @Field(() => GuideLanguagesSumAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof GuideLanguagesSumAggregateInput>;
    @Field(() => GuideLanguagesMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof GuideLanguagesMinAggregateInput>;
    @Field(() => GuideLanguagesMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof GuideLanguagesMaxAggregateInput>;
}

@InputType()
export class GuideLanguagesAvgAggregateInput {
    @Field(() => Boolean, {nullable:true})
    userId?: true;
    @Field(() => Boolean, {nullable:true})
    languageId?: true;
    @Field(() => Boolean, {nullable:true})
    cityId?: true;
}

@ObjectType()
export class GuideLanguagesAvgAggregate {
    @Field(() => Float, {nullable:true})
    userId?: number;
    @Field(() => Float, {nullable:true})
    languageId?: number;
    @Field(() => Float, {nullable:true})
    cityId?: number;
}

@InputType()
export class GuideLanguagesAvgOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    languageId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    cityId?: keyof typeof SortOrder;
}

@InputType()
export class GuideLanguagesCountAggregateInput {
    @Field(() => Boolean, {nullable:true})
    status?: true;
    @Field(() => Boolean, {nullable:true})
    userId?: true;
    @Field(() => Boolean, {nullable:true})
    languageId?: true;
    @Field(() => Boolean, {nullable:true})
    cityId?: true;
    @Field(() => Boolean, {nullable:true})
    _all?: true;
}

@ObjectType()
export class GuideLanguagesCountAggregate {
    @Field(() => Int, {nullable:false})
    status!: number;
    @Field(() => Int, {nullable:false})
    userId!: number;
    @Field(() => Int, {nullable:false})
    languageId!: number;
    @Field(() => Int, {nullable:false})
    cityId!: number;
    @Field(() => Int, {nullable:false})
    _all!: number;
}

@InputType()
export class GuideLanguagesCountOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    languageId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    cityId?: keyof typeof SortOrder;
}

@InputType()
export class GuideLanguagesCreateManyCityInputEnvelope {
    @Field(() => [GuideLanguagesCreateManyCityInput], {nullable:false})
    @Type(() => GuideLanguagesCreateManyCityInput)
    data!: Array<GuideLanguagesCreateManyCityInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@InputType()
export class GuideLanguagesCreateManyCityInput {
    @Field(() => Status, {nullable:true})
    status?: keyof typeof Status;
    @Field(() => Int, {nullable:false})
    userId!: number;
    @Field(() => Int, {nullable:false})
    languageId!: number;
}

@InputType()
export class GuideLanguagesCreateManyLanguageInputEnvelope {
    @Field(() => [GuideLanguagesCreateManyLanguageInput], {nullable:false})
    @Type(() => GuideLanguagesCreateManyLanguageInput)
    data!: Array<GuideLanguagesCreateManyLanguageInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@InputType()
export class GuideLanguagesCreateManyLanguageInput {
    @Field(() => Status, {nullable:true})
    status?: keyof typeof Status;
    @Field(() => Int, {nullable:false})
    userId!: number;
    @Field(() => Int, {nullable:true})
    cityId?: number;
}

@InputType()
export class GuideLanguagesCreateManyUserInputEnvelope {
    @Field(() => [GuideLanguagesCreateManyUserInput], {nullable:false})
    @Type(() => GuideLanguagesCreateManyUserInput)
    data!: Array<GuideLanguagesCreateManyUserInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@InputType()
export class GuideLanguagesCreateManyUserInput {
    @Field(() => Status, {nullable:true})
    status?: keyof typeof Status;
    @Field(() => Int, {nullable:false})
    languageId!: number;
    @Field(() => Int, {nullable:true})
    cityId?: number;
}

@InputType()
export class GuideLanguagesCreateManyInput {
    @Field(() => Status, {nullable:true})
    status?: keyof typeof Status;
    @Field(() => Int, {nullable:false})
    userId!: number;
    @Field(() => Int, {nullable:false})
    languageId!: number;
    @Field(() => Int, {nullable:true})
    cityId?: number;
}

@InputType()
export class GuideLanguagesCreateNestedManyWithoutCityInput {
    @Field(() => [GuideLanguagesCreateWithoutCityInput], {nullable:true})
    @Type(() => GuideLanguagesCreateWithoutCityInput)
    create?: Array<GuideLanguagesCreateWithoutCityInput>;
    @Field(() => [GuideLanguagesCreateOrConnectWithoutCityInput], {nullable:true})
    @Type(() => GuideLanguagesCreateOrConnectWithoutCityInput)
    connectOrCreate?: Array<GuideLanguagesCreateOrConnectWithoutCityInput>;
    @Field(() => GuideLanguagesCreateManyCityInputEnvelope, {nullable:true})
    @Type(() => GuideLanguagesCreateManyCityInputEnvelope)
    createMany?: InstanceType<typeof GuideLanguagesCreateManyCityInputEnvelope>;
    @Field(() => [GuideLanguagesWhereUniqueInput], {nullable:true})
    @Type(() => GuideLanguagesWhereUniqueInput)
    connect?: Array<GuideLanguagesWhereUniqueInput>;
}

@InputType()
export class GuideLanguagesCreateNestedManyWithoutLanguageInput {
    @Field(() => [GuideLanguagesCreateWithoutLanguageInput], {nullable:true})
    @Type(() => GuideLanguagesCreateWithoutLanguageInput)
    create?: Array<GuideLanguagesCreateWithoutLanguageInput>;
    @Field(() => [GuideLanguagesCreateOrConnectWithoutLanguageInput], {nullable:true})
    @Type(() => GuideLanguagesCreateOrConnectWithoutLanguageInput)
    connectOrCreate?: Array<GuideLanguagesCreateOrConnectWithoutLanguageInput>;
    @Field(() => GuideLanguagesCreateManyLanguageInputEnvelope, {nullable:true})
    @Type(() => GuideLanguagesCreateManyLanguageInputEnvelope)
    createMany?: InstanceType<typeof GuideLanguagesCreateManyLanguageInputEnvelope>;
    @Field(() => [GuideLanguagesWhereUniqueInput], {nullable:true})
    @Type(() => GuideLanguagesWhereUniqueInput)
    connect?: Array<GuideLanguagesWhereUniqueInput>;
}

@InputType()
export class GuideLanguagesCreateNestedManyWithoutUserInput {
    @Field(() => [GuideLanguagesCreateWithoutUserInput], {nullable:true})
    @Type(() => GuideLanguagesCreateWithoutUserInput)
    create?: Array<GuideLanguagesCreateWithoutUserInput>;
    @Field(() => [GuideLanguagesCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => GuideLanguagesCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<GuideLanguagesCreateOrConnectWithoutUserInput>;
    @Field(() => GuideLanguagesCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => GuideLanguagesCreateManyUserInputEnvelope)
    createMany?: InstanceType<typeof GuideLanguagesCreateManyUserInputEnvelope>;
    @Field(() => [GuideLanguagesWhereUniqueInput], {nullable:true})
    @Type(() => GuideLanguagesWhereUniqueInput)
    connect?: Array<GuideLanguagesWhereUniqueInput>;
}

@InputType()
export class GuideLanguagesCreateOrConnectWithoutCityInput {
    @Field(() => GuideLanguagesWhereUniqueInput, {nullable:false})
    @Type(() => GuideLanguagesWhereUniqueInput)
    where!: InstanceType<typeof GuideLanguagesWhereUniqueInput>;
    @Field(() => GuideLanguagesCreateWithoutCityInput, {nullable:false})
    @Type(() => GuideLanguagesCreateWithoutCityInput)
    create!: InstanceType<typeof GuideLanguagesCreateWithoutCityInput>;
}

@InputType()
export class GuideLanguagesCreateOrConnectWithoutLanguageInput {
    @Field(() => GuideLanguagesWhereUniqueInput, {nullable:false})
    @Type(() => GuideLanguagesWhereUniqueInput)
    where!: InstanceType<typeof GuideLanguagesWhereUniqueInput>;
    @Field(() => GuideLanguagesCreateWithoutLanguageInput, {nullable:false})
    @Type(() => GuideLanguagesCreateWithoutLanguageInput)
    create!: InstanceType<typeof GuideLanguagesCreateWithoutLanguageInput>;
}

@InputType()
export class GuideLanguagesCreateOrConnectWithoutUserInput {
    @Field(() => GuideLanguagesWhereUniqueInput, {nullable:false})
    @Type(() => GuideLanguagesWhereUniqueInput)
    where!: InstanceType<typeof GuideLanguagesWhereUniqueInput>;
    @Field(() => GuideLanguagesCreateWithoutUserInput, {nullable:false})
    @Type(() => GuideLanguagesCreateWithoutUserInput)
    create!: InstanceType<typeof GuideLanguagesCreateWithoutUserInput>;
}

@InputType()
export class GuideLanguagesCreateWithoutCityInput {
    @Field(() => Status, {nullable:true})
    status?: keyof typeof Status;
    @Field(() => UserCreateNestedOneWithoutGuideLanguagesInput, {nullable:false})
    user!: InstanceType<typeof UserCreateNestedOneWithoutGuideLanguagesInput>;
    @Field(() => LanguagesCreateNestedOneWithoutGuideLanguagesInput, {nullable:false})
    language!: InstanceType<typeof LanguagesCreateNestedOneWithoutGuideLanguagesInput>;
}

@InputType()
export class GuideLanguagesCreateWithoutLanguageInput {
    @Field(() => Status, {nullable:true})
    status?: keyof typeof Status;
    @Field(() => UserCreateNestedOneWithoutGuideLanguagesInput, {nullable:false})
    user!: InstanceType<typeof UserCreateNestedOneWithoutGuideLanguagesInput>;
    @Field(() => CityCreateNestedOneWithoutGuideLanguagesInput, {nullable:true})
    City?: InstanceType<typeof CityCreateNestedOneWithoutGuideLanguagesInput>;
}

@InputType()
export class GuideLanguagesCreateWithoutUserInput {
    @Field(() => Status, {nullable:true})
    status?: keyof typeof Status;
    @Field(() => LanguagesCreateNestedOneWithoutGuideLanguagesInput, {nullable:false})
    language!: InstanceType<typeof LanguagesCreateNestedOneWithoutGuideLanguagesInput>;
    @Field(() => CityCreateNestedOneWithoutGuideLanguagesInput, {nullable:true})
    City?: InstanceType<typeof CityCreateNestedOneWithoutGuideLanguagesInput>;
}

@InputType()
export class GuideLanguagesCreateInput {
    @Field(() => Status, {nullable:true})
    status?: keyof typeof Status;
    @Field(() => UserCreateNestedOneWithoutGuideLanguagesInput, {nullable:false})
    user!: InstanceType<typeof UserCreateNestedOneWithoutGuideLanguagesInput>;
    @Field(() => LanguagesCreateNestedOneWithoutGuideLanguagesInput, {nullable:false})
    language!: InstanceType<typeof LanguagesCreateNestedOneWithoutGuideLanguagesInput>;
    @Field(() => CityCreateNestedOneWithoutGuideLanguagesInput, {nullable:true})
    City?: InstanceType<typeof CityCreateNestedOneWithoutGuideLanguagesInput>;
}

@ArgsType()
export class GuideLanguagesGroupByArgs {
    @Field(() => GuideLanguagesWhereInput, {nullable:true})
    @Type(() => GuideLanguagesWhereInput)
    @ValidateNested({ each: true })
    where?: InstanceType<typeof GuideLanguagesWhereInput>;
    @Field(() => [GuideLanguagesOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<GuideLanguagesOrderByWithAggregationInput>;
    @Field(() => [GuideLanguagesScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof GuideLanguagesScalarFieldEnum>;
    @Field(() => GuideLanguagesScalarWhereWithAggregatesInput, {nullable:true})
    having?: InstanceType<typeof GuideLanguagesScalarWhereWithAggregatesInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => GuideLanguagesCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof GuideLanguagesCountAggregateInput>;
    @Field(() => GuideLanguagesAvgAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof GuideLanguagesAvgAggregateInput>;
    @Field(() => GuideLanguagesSumAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof GuideLanguagesSumAggregateInput>;
    @Field(() => GuideLanguagesMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof GuideLanguagesMinAggregateInput>;
    @Field(() => GuideLanguagesMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof GuideLanguagesMaxAggregateInput>;
}

@ObjectType()
export class GuideLanguagesGroupBy {
    @Field(() => Status, {nullable:false})
    status!: keyof typeof Status;
    @Field(() => Int, {nullable:false})
    userId!: number;
    @Field(() => Int, {nullable:false})
    languageId!: number;
    @Field(() => Int, {nullable:true})
    cityId?: number;
    @Field(() => GuideLanguagesCountAggregate, {nullable:true})
    _count?: InstanceType<typeof GuideLanguagesCountAggregate>;
    @Field(() => GuideLanguagesAvgAggregate, {nullable:true})
    _avg?: InstanceType<typeof GuideLanguagesAvgAggregate>;
    @Field(() => GuideLanguagesSumAggregate, {nullable:true})
    _sum?: InstanceType<typeof GuideLanguagesSumAggregate>;
    @Field(() => GuideLanguagesMinAggregate, {nullable:true})
    _min?: InstanceType<typeof GuideLanguagesMinAggregate>;
    @Field(() => GuideLanguagesMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof GuideLanguagesMaxAggregate>;
}

@InputType()
export class GuideLanguagesListRelationFilter {
    @Field(() => GuideLanguagesWhereInput, {nullable:true})
    every?: InstanceType<typeof GuideLanguagesWhereInput>;
    @Field(() => GuideLanguagesWhereInput, {nullable:true})
    some?: InstanceType<typeof GuideLanguagesWhereInput>;
    @Field(() => GuideLanguagesWhereInput, {nullable:true})
    none?: InstanceType<typeof GuideLanguagesWhereInput>;
}

@InputType()
export class GuideLanguagesMaxAggregateInput {
    @Field(() => Boolean, {nullable:true})
    status?: true;
    @Field(() => Boolean, {nullable:true})
    userId?: true;
    @Field(() => Boolean, {nullable:true})
    languageId?: true;
    @Field(() => Boolean, {nullable:true})
    cityId?: true;
}

@ObjectType()
export class GuideLanguagesMaxAggregate {
    @Field(() => Status, {nullable:true})
    status?: keyof typeof Status;
    @Field(() => Int, {nullable:true})
    userId?: number;
    @Field(() => Int, {nullable:true})
    languageId?: number;
    @Field(() => Int, {nullable:true})
    cityId?: number;
}

@InputType()
export class GuideLanguagesMaxOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    languageId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    cityId?: keyof typeof SortOrder;
}

@InputType()
export class GuideLanguagesMinAggregateInput {
    @Field(() => Boolean, {nullable:true})
    status?: true;
    @Field(() => Boolean, {nullable:true})
    userId?: true;
    @Field(() => Boolean, {nullable:true})
    languageId?: true;
    @Field(() => Boolean, {nullable:true})
    cityId?: true;
}

@ObjectType()
export class GuideLanguagesMinAggregate {
    @Field(() => Status, {nullable:true})
    status?: keyof typeof Status;
    @Field(() => Int, {nullable:true})
    userId?: number;
    @Field(() => Int, {nullable:true})
    languageId?: number;
    @Field(() => Int, {nullable:true})
    cityId?: number;
}

@InputType()
export class GuideLanguagesMinOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    languageId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    cityId?: keyof typeof SortOrder;
}

@InputType()
export class GuideLanguagesOrderByRelationAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    _count?: keyof typeof SortOrder;
}

@InputType()
export class GuideLanguagesOrderByWithAggregationInput {
    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    languageId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    cityId?: keyof typeof SortOrder;
    @Field(() => GuideLanguagesCountOrderByAggregateInput, {nullable:true})
    _count?: InstanceType<typeof GuideLanguagesCountOrderByAggregateInput>;
    @Field(() => GuideLanguagesAvgOrderByAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof GuideLanguagesAvgOrderByAggregateInput>;
    @Field(() => GuideLanguagesMaxOrderByAggregateInput, {nullable:true})
    _max?: InstanceType<typeof GuideLanguagesMaxOrderByAggregateInput>;
    @Field(() => GuideLanguagesMinOrderByAggregateInput, {nullable:true})
    _min?: InstanceType<typeof GuideLanguagesMinOrderByAggregateInput>;
    @Field(() => GuideLanguagesSumOrderByAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof GuideLanguagesSumOrderByAggregateInput>;
}

@InputType()
export class GuideLanguagesOrderByWithRelationInput {
    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;
    @Field(() => UserOrderByWithRelationInput, {nullable:true})
    user?: InstanceType<typeof UserOrderByWithRelationInput>;
    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;
    @Field(() => LanguagesOrderByWithRelationInput, {nullable:true})
    language?: InstanceType<typeof LanguagesOrderByWithRelationInput>;
    @Field(() => SortOrder, {nullable:true})
    languageId?: keyof typeof SortOrder;
    @Field(() => CityOrderByWithRelationInput, {nullable:true})
    City?: InstanceType<typeof CityOrderByWithRelationInput>;
    @Field(() => SortOrder, {nullable:true})
    cityId?: keyof typeof SortOrder;
}

@InputType()
export class GuideLanguagesScalarWhereWithAggregatesInput {
    @Field(() => [GuideLanguagesScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<GuideLanguagesScalarWhereWithAggregatesInput>;
    @Field(() => [GuideLanguagesScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<GuideLanguagesScalarWhereWithAggregatesInput>;
    @Field(() => [GuideLanguagesScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<GuideLanguagesScalarWhereWithAggregatesInput>;
    @Field(() => EnumStatusWithAggregatesFilter, {nullable:true})
    status?: InstanceType<typeof EnumStatusWithAggregatesFilter>;
    @Field(() => IntWithAggregatesFilter, {nullable:true})
    userId?: InstanceType<typeof IntWithAggregatesFilter>;
    @Field(() => IntWithAggregatesFilter, {nullable:true})
    languageId?: InstanceType<typeof IntWithAggregatesFilter>;
    @Field(() => IntWithAggregatesFilter, {nullable:true})
    cityId?: InstanceType<typeof IntWithAggregatesFilter>;
}

@InputType()
export class GuideLanguagesScalarWhereInput {
    @Field(() => [GuideLanguagesScalarWhereInput], {nullable:true})
    AND?: Array<GuideLanguagesScalarWhereInput>;
    @Field(() => [GuideLanguagesScalarWhereInput], {nullable:true})
    OR?: Array<GuideLanguagesScalarWhereInput>;
    @Field(() => [GuideLanguagesScalarWhereInput], {nullable:true})
    NOT?: Array<GuideLanguagesScalarWhereInput>;
    @Field(() => EnumStatusFilter, {nullable:true})
    status?: InstanceType<typeof EnumStatusFilter>;
    @Field(() => IntFilter, {nullable:true})
    userId?: InstanceType<typeof IntFilter>;
    @Field(() => IntFilter, {nullable:true})
    languageId?: InstanceType<typeof IntFilter>;
    @Field(() => IntFilter, {nullable:true})
    cityId?: InstanceType<typeof IntFilter>;
}

@InputType()
export class GuideLanguagesSumAggregateInput {
    @Field(() => Boolean, {nullable:true})
    userId?: true;
    @Field(() => Boolean, {nullable:true})
    languageId?: true;
    @Field(() => Boolean, {nullable:true})
    cityId?: true;
}

@ObjectType()
export class GuideLanguagesSumAggregate {
    @Field(() => Int, {nullable:true})
    userId?: number;
    @Field(() => Int, {nullable:true})
    languageId?: number;
    @Field(() => Int, {nullable:true})
    cityId?: number;
}

@InputType()
export class GuideLanguagesSumOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    languageId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    cityId?: keyof typeof SortOrder;
}

@InputType()
export class GuideLanguagesUncheckedCreateNestedManyWithoutCityInput {
    @Field(() => [GuideLanguagesCreateWithoutCityInput], {nullable:true})
    @Type(() => GuideLanguagesCreateWithoutCityInput)
    create?: Array<GuideLanguagesCreateWithoutCityInput>;
    @Field(() => [GuideLanguagesCreateOrConnectWithoutCityInput], {nullable:true})
    @Type(() => GuideLanguagesCreateOrConnectWithoutCityInput)
    connectOrCreate?: Array<GuideLanguagesCreateOrConnectWithoutCityInput>;
    @Field(() => GuideLanguagesCreateManyCityInputEnvelope, {nullable:true})
    @Type(() => GuideLanguagesCreateManyCityInputEnvelope)
    createMany?: InstanceType<typeof GuideLanguagesCreateManyCityInputEnvelope>;
    @Field(() => [GuideLanguagesWhereUniqueInput], {nullable:true})
    @Type(() => GuideLanguagesWhereUniqueInput)
    connect?: Array<GuideLanguagesWhereUniqueInput>;
}

@InputType()
export class GuideLanguagesUncheckedCreateNestedManyWithoutLanguageInput {
    @Field(() => [GuideLanguagesCreateWithoutLanguageInput], {nullable:true})
    @Type(() => GuideLanguagesCreateWithoutLanguageInput)
    create?: Array<GuideLanguagesCreateWithoutLanguageInput>;
    @Field(() => [GuideLanguagesCreateOrConnectWithoutLanguageInput], {nullable:true})
    @Type(() => GuideLanguagesCreateOrConnectWithoutLanguageInput)
    connectOrCreate?: Array<GuideLanguagesCreateOrConnectWithoutLanguageInput>;
    @Field(() => GuideLanguagesCreateManyLanguageInputEnvelope, {nullable:true})
    @Type(() => GuideLanguagesCreateManyLanguageInputEnvelope)
    createMany?: InstanceType<typeof GuideLanguagesCreateManyLanguageInputEnvelope>;
    @Field(() => [GuideLanguagesWhereUniqueInput], {nullable:true})
    @Type(() => GuideLanguagesWhereUniqueInput)
    connect?: Array<GuideLanguagesWhereUniqueInput>;
}

@InputType()
export class GuideLanguagesUncheckedCreateNestedManyWithoutUserInput {
    @Field(() => [GuideLanguagesCreateWithoutUserInput], {nullable:true})
    @Type(() => GuideLanguagesCreateWithoutUserInput)
    create?: Array<GuideLanguagesCreateWithoutUserInput>;
    @Field(() => [GuideLanguagesCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => GuideLanguagesCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<GuideLanguagesCreateOrConnectWithoutUserInput>;
    @Field(() => GuideLanguagesCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => GuideLanguagesCreateManyUserInputEnvelope)
    createMany?: InstanceType<typeof GuideLanguagesCreateManyUserInputEnvelope>;
    @Field(() => [GuideLanguagesWhereUniqueInput], {nullable:true})
    @Type(() => GuideLanguagesWhereUniqueInput)
    connect?: Array<GuideLanguagesWhereUniqueInput>;
}

@InputType()
export class GuideLanguagesUncheckedCreateWithoutCityInput {
    @Field(() => Status, {nullable:true})
    status?: keyof typeof Status;
    @Field(() => Int, {nullable:false})
    userId!: number;
    @Field(() => Int, {nullable:false})
    languageId!: number;
}

@InputType()
export class GuideLanguagesUncheckedCreateWithoutLanguageInput {
    @Field(() => Status, {nullable:true})
    status?: keyof typeof Status;
    @Field(() => Int, {nullable:false})
    userId!: number;
    @Field(() => Int, {nullable:true})
    cityId?: number;
}

@InputType()
export class GuideLanguagesUncheckedCreateWithoutUserInput {
    @Field(() => Status, {nullable:true})
    status?: keyof typeof Status;
    @Field(() => Int, {nullable:false})
    languageId!: number;
    @Field(() => Int, {nullable:true})
    cityId?: number;
}

@InputType()
export class GuideLanguagesUncheckedCreateInput {
    @Field(() => Status, {nullable:true})
    status?: keyof typeof Status;
    @Field(() => Int, {nullable:false})
    userId!: number;
    @Field(() => Int, {nullable:false})
    languageId!: number;
    @Field(() => Int, {nullable:true})
    cityId?: number;
}

@InputType()
export class GuideLanguagesUncheckedUpdateManyWithoutCityInput {
    @Field(() => [GuideLanguagesCreateWithoutCityInput], {nullable:true})
    @Type(() => GuideLanguagesCreateWithoutCityInput)
    create?: Array<GuideLanguagesCreateWithoutCityInput>;
    @Field(() => [GuideLanguagesCreateOrConnectWithoutCityInput], {nullable:true})
    @Type(() => GuideLanguagesCreateOrConnectWithoutCityInput)
    connectOrCreate?: Array<GuideLanguagesCreateOrConnectWithoutCityInput>;
    @Field(() => [GuideLanguagesUpsertWithWhereUniqueWithoutCityInput], {nullable:true})
    @Type(() => GuideLanguagesUpsertWithWhereUniqueWithoutCityInput)
    upsert?: Array<GuideLanguagesUpsertWithWhereUniqueWithoutCityInput>;
    @Field(() => GuideLanguagesCreateManyCityInputEnvelope, {nullable:true})
    @Type(() => GuideLanguagesCreateManyCityInputEnvelope)
    createMany?: InstanceType<typeof GuideLanguagesCreateManyCityInputEnvelope>;
    @Field(() => [GuideLanguagesWhereUniqueInput], {nullable:true})
    @Type(() => GuideLanguagesWhereUniqueInput)
    set?: Array<GuideLanguagesWhereUniqueInput>;
    @Field(() => [GuideLanguagesWhereUniqueInput], {nullable:true})
    @Type(() => GuideLanguagesWhereUniqueInput)
    disconnect?: Array<GuideLanguagesWhereUniqueInput>;
    @Field(() => [GuideLanguagesWhereUniqueInput], {nullable:true})
    @Type(() => GuideLanguagesWhereUniqueInput)
    delete?: Array<GuideLanguagesWhereUniqueInput>;
    @Field(() => [GuideLanguagesWhereUniqueInput], {nullable:true})
    @Type(() => GuideLanguagesWhereUniqueInput)
    connect?: Array<GuideLanguagesWhereUniqueInput>;
    @Field(() => [GuideLanguagesUpdateWithWhereUniqueWithoutCityInput], {nullable:true})
    @Type(() => GuideLanguagesUpdateWithWhereUniqueWithoutCityInput)
    update?: Array<GuideLanguagesUpdateWithWhereUniqueWithoutCityInput>;
    @Field(() => [GuideLanguagesUpdateManyWithWhereWithoutCityInput], {nullable:true})
    @Type(() => GuideLanguagesUpdateManyWithWhereWithoutCityInput)
    updateMany?: Array<GuideLanguagesUpdateManyWithWhereWithoutCityInput>;
    @Field(() => [GuideLanguagesScalarWhereInput], {nullable:true})
    @Type(() => GuideLanguagesScalarWhereInput)
    deleteMany?: Array<GuideLanguagesScalarWhereInput>;
}

@InputType()
export class GuideLanguagesUncheckedUpdateManyWithoutGuideLanguagesInput {
    @Field(() => Status, {nullable:true})
    status?: keyof typeof Status;
    @Field(() => Int, {nullable:true})
    languageId?: number;
    @Field(() => Int, {nullable:true})
    cityId?: number;
}

@InputType()
export class GuideLanguagesUncheckedUpdateManyWithoutLanguageInput {
    @Field(() => [GuideLanguagesCreateWithoutLanguageInput], {nullable:true})
    @Type(() => GuideLanguagesCreateWithoutLanguageInput)
    create?: Array<GuideLanguagesCreateWithoutLanguageInput>;
    @Field(() => [GuideLanguagesCreateOrConnectWithoutLanguageInput], {nullable:true})
    @Type(() => GuideLanguagesCreateOrConnectWithoutLanguageInput)
    connectOrCreate?: Array<GuideLanguagesCreateOrConnectWithoutLanguageInput>;
    @Field(() => [GuideLanguagesUpsertWithWhereUniqueWithoutLanguageInput], {nullable:true})
    @Type(() => GuideLanguagesUpsertWithWhereUniqueWithoutLanguageInput)
    upsert?: Array<GuideLanguagesUpsertWithWhereUniqueWithoutLanguageInput>;
    @Field(() => GuideLanguagesCreateManyLanguageInputEnvelope, {nullable:true})
    @Type(() => GuideLanguagesCreateManyLanguageInputEnvelope)
    createMany?: InstanceType<typeof GuideLanguagesCreateManyLanguageInputEnvelope>;
    @Field(() => [GuideLanguagesWhereUniqueInput], {nullable:true})
    @Type(() => GuideLanguagesWhereUniqueInput)
    set?: Array<GuideLanguagesWhereUniqueInput>;
    @Field(() => [GuideLanguagesWhereUniqueInput], {nullable:true})
    @Type(() => GuideLanguagesWhereUniqueInput)
    disconnect?: Array<GuideLanguagesWhereUniqueInput>;
    @Field(() => [GuideLanguagesWhereUniqueInput], {nullable:true})
    @Type(() => GuideLanguagesWhereUniqueInput)
    delete?: Array<GuideLanguagesWhereUniqueInput>;
    @Field(() => [GuideLanguagesWhereUniqueInput], {nullable:true})
    @Type(() => GuideLanguagesWhereUniqueInput)
    connect?: Array<GuideLanguagesWhereUniqueInput>;
    @Field(() => [GuideLanguagesUpdateWithWhereUniqueWithoutLanguageInput], {nullable:true})
    @Type(() => GuideLanguagesUpdateWithWhereUniqueWithoutLanguageInput)
    update?: Array<GuideLanguagesUpdateWithWhereUniqueWithoutLanguageInput>;
    @Field(() => [GuideLanguagesUpdateManyWithWhereWithoutLanguageInput], {nullable:true})
    @Type(() => GuideLanguagesUpdateManyWithWhereWithoutLanguageInput)
    updateMany?: Array<GuideLanguagesUpdateManyWithWhereWithoutLanguageInput>;
    @Field(() => [GuideLanguagesScalarWhereInput], {nullable:true})
    @Type(() => GuideLanguagesScalarWhereInput)
    deleteMany?: Array<GuideLanguagesScalarWhereInput>;
}

@InputType()
export class GuideLanguagesUncheckedUpdateManyWithoutUserInput {
    @Field(() => [GuideLanguagesCreateWithoutUserInput], {nullable:true})
    @Type(() => GuideLanguagesCreateWithoutUserInput)
    create?: Array<GuideLanguagesCreateWithoutUserInput>;
    @Field(() => [GuideLanguagesCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => GuideLanguagesCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<GuideLanguagesCreateOrConnectWithoutUserInput>;
    @Field(() => [GuideLanguagesUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => GuideLanguagesUpsertWithWhereUniqueWithoutUserInput)
    upsert?: Array<GuideLanguagesUpsertWithWhereUniqueWithoutUserInput>;
    @Field(() => GuideLanguagesCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => GuideLanguagesCreateManyUserInputEnvelope)
    createMany?: InstanceType<typeof GuideLanguagesCreateManyUserInputEnvelope>;
    @Field(() => [GuideLanguagesWhereUniqueInput], {nullable:true})
    @Type(() => GuideLanguagesWhereUniqueInput)
    set?: Array<GuideLanguagesWhereUniqueInput>;
    @Field(() => [GuideLanguagesWhereUniqueInput], {nullable:true})
    @Type(() => GuideLanguagesWhereUniqueInput)
    disconnect?: Array<GuideLanguagesWhereUniqueInput>;
    @Field(() => [GuideLanguagesWhereUniqueInput], {nullable:true})
    @Type(() => GuideLanguagesWhereUniqueInput)
    delete?: Array<GuideLanguagesWhereUniqueInput>;
    @Field(() => [GuideLanguagesWhereUniqueInput], {nullable:true})
    @Type(() => GuideLanguagesWhereUniqueInput)
    connect?: Array<GuideLanguagesWhereUniqueInput>;
    @Field(() => [GuideLanguagesUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => GuideLanguagesUpdateWithWhereUniqueWithoutUserInput)
    update?: Array<GuideLanguagesUpdateWithWhereUniqueWithoutUserInput>;
    @Field(() => [GuideLanguagesUpdateManyWithWhereWithoutUserInput], {nullable:true})
    @Type(() => GuideLanguagesUpdateManyWithWhereWithoutUserInput)
    updateMany?: Array<GuideLanguagesUpdateManyWithWhereWithoutUserInput>;
    @Field(() => [GuideLanguagesScalarWhereInput], {nullable:true})
    @Type(() => GuideLanguagesScalarWhereInput)
    deleteMany?: Array<GuideLanguagesScalarWhereInput>;
}

@InputType()
export class GuideLanguagesUncheckedUpdateManyInput {
    @Field(() => Status, {nullable:true})
    status?: keyof typeof Status;
    @Field(() => Int, {nullable:true})
    userId?: number;
    @Field(() => Int, {nullable:true})
    languageId?: number;
    @Field(() => Int, {nullable:true})
    cityId?: number;
}

@InputType()
export class GuideLanguagesUncheckedUpdateWithoutCityInput {
    @Field(() => Status, {nullable:true})
    status?: keyof typeof Status;
    @Field(() => Int, {nullable:true})
    userId?: number;
    @Field(() => Int, {nullable:true})
    languageId?: number;
}

@InputType()
export class GuideLanguagesUncheckedUpdateWithoutLanguageInput {
    @Field(() => Status, {nullable:true})
    status?: keyof typeof Status;
    @Field(() => Int, {nullable:true})
    userId?: number;
    @Field(() => Int, {nullable:true})
    cityId?: number;
}

@InputType()
export class GuideLanguagesUncheckedUpdateWithoutUserInput {
    @Field(() => Status, {nullable:true})
    status?: keyof typeof Status;
    @Field(() => Int, {nullable:true})
    languageId?: number;
    @Field(() => Int, {nullable:true})
    cityId?: number;
}

@InputType()
export class GuideLanguagesUncheckedUpdateInput {
    @Field(() => Status, {nullable:true})
    status?: keyof typeof Status;
    @Field(() => Int, {nullable:true})
    userId?: number;
    @Field(() => Int, {nullable:true})
    languageId?: number;
    @Field(() => Int, {nullable:true})
    cityId?: number;
}

@InputType()
export class GuideLanguagesUpdateManyMutationInput {
    @Field(() => Status, {nullable:true})
    status?: keyof typeof Status;
}

@InputType()
export class GuideLanguagesUpdateManyWithWhereWithoutCityInput {
    @Field(() => GuideLanguagesScalarWhereInput, {nullable:false})
    @Type(() => GuideLanguagesScalarWhereInput)
    where!: InstanceType<typeof GuideLanguagesScalarWhereInput>;
    @Field(() => GuideLanguagesUpdateManyMutationInput, {nullable:false})
    @Type(() => GuideLanguagesUpdateManyMutationInput)
    data!: InstanceType<typeof GuideLanguagesUpdateManyMutationInput>;
}

@InputType()
export class GuideLanguagesUpdateManyWithWhereWithoutLanguageInput {
    @Field(() => GuideLanguagesScalarWhereInput, {nullable:false})
    @Type(() => GuideLanguagesScalarWhereInput)
    where!: InstanceType<typeof GuideLanguagesScalarWhereInput>;
    @Field(() => GuideLanguagesUpdateManyMutationInput, {nullable:false})
    @Type(() => GuideLanguagesUpdateManyMutationInput)
    data!: InstanceType<typeof GuideLanguagesUpdateManyMutationInput>;
}

@InputType()
export class GuideLanguagesUpdateManyWithWhereWithoutUserInput {
    @Field(() => GuideLanguagesScalarWhereInput, {nullable:false})
    @Type(() => GuideLanguagesScalarWhereInput)
    where!: InstanceType<typeof GuideLanguagesScalarWhereInput>;
    @Field(() => GuideLanguagesUpdateManyMutationInput, {nullable:false})
    @Type(() => GuideLanguagesUpdateManyMutationInput)
    data!: InstanceType<typeof GuideLanguagesUpdateManyMutationInput>;
}

@InputType()
export class GuideLanguagesUpdateManyWithoutCityInput {
    @Field(() => [GuideLanguagesCreateWithoutCityInput], {nullable:true})
    @Type(() => GuideLanguagesCreateWithoutCityInput)
    create?: Array<GuideLanguagesCreateWithoutCityInput>;
    @Field(() => [GuideLanguagesCreateOrConnectWithoutCityInput], {nullable:true})
    @Type(() => GuideLanguagesCreateOrConnectWithoutCityInput)
    connectOrCreate?: Array<GuideLanguagesCreateOrConnectWithoutCityInput>;
    @Field(() => [GuideLanguagesUpsertWithWhereUniqueWithoutCityInput], {nullable:true})
    @Type(() => GuideLanguagesUpsertWithWhereUniqueWithoutCityInput)
    upsert?: Array<GuideLanguagesUpsertWithWhereUniqueWithoutCityInput>;
    @Field(() => GuideLanguagesCreateManyCityInputEnvelope, {nullable:true})
    @Type(() => GuideLanguagesCreateManyCityInputEnvelope)
    createMany?: InstanceType<typeof GuideLanguagesCreateManyCityInputEnvelope>;
    @Field(() => [GuideLanguagesWhereUniqueInput], {nullable:true})
    @Type(() => GuideLanguagesWhereUniqueInput)
    set?: Array<GuideLanguagesWhereUniqueInput>;
    @Field(() => [GuideLanguagesWhereUniqueInput], {nullable:true})
    @Type(() => GuideLanguagesWhereUniqueInput)
    disconnect?: Array<GuideLanguagesWhereUniqueInput>;
    @Field(() => [GuideLanguagesWhereUniqueInput], {nullable:true})
    @Type(() => GuideLanguagesWhereUniqueInput)
    delete?: Array<GuideLanguagesWhereUniqueInput>;
    @Field(() => [GuideLanguagesWhereUniqueInput], {nullable:true})
    @Type(() => GuideLanguagesWhereUniqueInput)
    connect?: Array<GuideLanguagesWhereUniqueInput>;
    @Field(() => [GuideLanguagesUpdateWithWhereUniqueWithoutCityInput], {nullable:true})
    @Type(() => GuideLanguagesUpdateWithWhereUniqueWithoutCityInput)
    update?: Array<GuideLanguagesUpdateWithWhereUniqueWithoutCityInput>;
    @Field(() => [GuideLanguagesUpdateManyWithWhereWithoutCityInput], {nullable:true})
    @Type(() => GuideLanguagesUpdateManyWithWhereWithoutCityInput)
    updateMany?: Array<GuideLanguagesUpdateManyWithWhereWithoutCityInput>;
    @Field(() => [GuideLanguagesScalarWhereInput], {nullable:true})
    @Type(() => GuideLanguagesScalarWhereInput)
    deleteMany?: Array<GuideLanguagesScalarWhereInput>;
}

@InputType()
export class GuideLanguagesUpdateManyWithoutLanguageInput {
    @Field(() => [GuideLanguagesCreateWithoutLanguageInput], {nullable:true})
    @Type(() => GuideLanguagesCreateWithoutLanguageInput)
    create?: Array<GuideLanguagesCreateWithoutLanguageInput>;
    @Field(() => [GuideLanguagesCreateOrConnectWithoutLanguageInput], {nullable:true})
    @Type(() => GuideLanguagesCreateOrConnectWithoutLanguageInput)
    connectOrCreate?: Array<GuideLanguagesCreateOrConnectWithoutLanguageInput>;
    @Field(() => [GuideLanguagesUpsertWithWhereUniqueWithoutLanguageInput], {nullable:true})
    @Type(() => GuideLanguagesUpsertWithWhereUniqueWithoutLanguageInput)
    upsert?: Array<GuideLanguagesUpsertWithWhereUniqueWithoutLanguageInput>;
    @Field(() => GuideLanguagesCreateManyLanguageInputEnvelope, {nullable:true})
    @Type(() => GuideLanguagesCreateManyLanguageInputEnvelope)
    createMany?: InstanceType<typeof GuideLanguagesCreateManyLanguageInputEnvelope>;
    @Field(() => [GuideLanguagesWhereUniqueInput], {nullable:true})
    @Type(() => GuideLanguagesWhereUniqueInput)
    set?: Array<GuideLanguagesWhereUniqueInput>;
    @Field(() => [GuideLanguagesWhereUniqueInput], {nullable:true})
    @Type(() => GuideLanguagesWhereUniqueInput)
    disconnect?: Array<GuideLanguagesWhereUniqueInput>;
    @Field(() => [GuideLanguagesWhereUniqueInput], {nullable:true})
    @Type(() => GuideLanguagesWhereUniqueInput)
    delete?: Array<GuideLanguagesWhereUniqueInput>;
    @Field(() => [GuideLanguagesWhereUniqueInput], {nullable:true})
    @Type(() => GuideLanguagesWhereUniqueInput)
    connect?: Array<GuideLanguagesWhereUniqueInput>;
    @Field(() => [GuideLanguagesUpdateWithWhereUniqueWithoutLanguageInput], {nullable:true})
    @Type(() => GuideLanguagesUpdateWithWhereUniqueWithoutLanguageInput)
    update?: Array<GuideLanguagesUpdateWithWhereUniqueWithoutLanguageInput>;
    @Field(() => [GuideLanguagesUpdateManyWithWhereWithoutLanguageInput], {nullable:true})
    @Type(() => GuideLanguagesUpdateManyWithWhereWithoutLanguageInput)
    updateMany?: Array<GuideLanguagesUpdateManyWithWhereWithoutLanguageInput>;
    @Field(() => [GuideLanguagesScalarWhereInput], {nullable:true})
    @Type(() => GuideLanguagesScalarWhereInput)
    deleteMany?: Array<GuideLanguagesScalarWhereInput>;
}

@InputType()
export class GuideLanguagesUpdateManyWithoutUserInput {
    @Field(() => [GuideLanguagesCreateWithoutUserInput], {nullable:true})
    @Type(() => GuideLanguagesCreateWithoutUserInput)
    create?: Array<GuideLanguagesCreateWithoutUserInput>;
    @Field(() => [GuideLanguagesCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => GuideLanguagesCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<GuideLanguagesCreateOrConnectWithoutUserInput>;
    @Field(() => [GuideLanguagesUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => GuideLanguagesUpsertWithWhereUniqueWithoutUserInput)
    upsert?: Array<GuideLanguagesUpsertWithWhereUniqueWithoutUserInput>;
    @Field(() => GuideLanguagesCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => GuideLanguagesCreateManyUserInputEnvelope)
    createMany?: InstanceType<typeof GuideLanguagesCreateManyUserInputEnvelope>;
    @Field(() => [GuideLanguagesWhereUniqueInput], {nullable:true})
    @Type(() => GuideLanguagesWhereUniqueInput)
    set?: Array<GuideLanguagesWhereUniqueInput>;
    @Field(() => [GuideLanguagesWhereUniqueInput], {nullable:true})
    @Type(() => GuideLanguagesWhereUniqueInput)
    disconnect?: Array<GuideLanguagesWhereUniqueInput>;
    @Field(() => [GuideLanguagesWhereUniqueInput], {nullable:true})
    @Type(() => GuideLanguagesWhereUniqueInput)
    delete?: Array<GuideLanguagesWhereUniqueInput>;
    @Field(() => [GuideLanguagesWhereUniqueInput], {nullable:true})
    @Type(() => GuideLanguagesWhereUniqueInput)
    connect?: Array<GuideLanguagesWhereUniqueInput>;
    @Field(() => [GuideLanguagesUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => GuideLanguagesUpdateWithWhereUniqueWithoutUserInput)
    update?: Array<GuideLanguagesUpdateWithWhereUniqueWithoutUserInput>;
    @Field(() => [GuideLanguagesUpdateManyWithWhereWithoutUserInput], {nullable:true})
    @Type(() => GuideLanguagesUpdateManyWithWhereWithoutUserInput)
    updateMany?: Array<GuideLanguagesUpdateManyWithWhereWithoutUserInput>;
    @Field(() => [GuideLanguagesScalarWhereInput], {nullable:true})
    @Type(() => GuideLanguagesScalarWhereInput)
    deleteMany?: Array<GuideLanguagesScalarWhereInput>;
}

@InputType()
export class GuideLanguagesUpdateWithWhereUniqueWithoutCityInput {
    @Field(() => GuideLanguagesWhereUniqueInput, {nullable:false})
    @Type(() => GuideLanguagesWhereUniqueInput)
    where!: InstanceType<typeof GuideLanguagesWhereUniqueInput>;
    @Field(() => GuideLanguagesUpdateWithoutCityInput, {nullable:false})
    @Type(() => GuideLanguagesUpdateWithoutCityInput)
    data!: InstanceType<typeof GuideLanguagesUpdateWithoutCityInput>;
}

@InputType()
export class GuideLanguagesUpdateWithWhereUniqueWithoutLanguageInput {
    @Field(() => GuideLanguagesWhereUniqueInput, {nullable:false})
    @Type(() => GuideLanguagesWhereUniqueInput)
    where!: InstanceType<typeof GuideLanguagesWhereUniqueInput>;
    @Field(() => GuideLanguagesUpdateWithoutLanguageInput, {nullable:false})
    @Type(() => GuideLanguagesUpdateWithoutLanguageInput)
    data!: InstanceType<typeof GuideLanguagesUpdateWithoutLanguageInput>;
}

@InputType()
export class GuideLanguagesUpdateWithWhereUniqueWithoutUserInput {
    @Field(() => GuideLanguagesWhereUniqueInput, {nullable:false})
    @Type(() => GuideLanguagesWhereUniqueInput)
    where!: InstanceType<typeof GuideLanguagesWhereUniqueInput>;
    @Field(() => GuideLanguagesUpdateWithoutUserInput, {nullable:false})
    @Type(() => GuideLanguagesUpdateWithoutUserInput)
    data!: InstanceType<typeof GuideLanguagesUpdateWithoutUserInput>;
}

@InputType()
export class GuideLanguagesUpdateWithoutCityInput {
    @Field(() => Status, {nullable:true})
    status?: keyof typeof Status;
    @Field(() => UserUpdateOneRequiredWithoutGuideLanguagesInput, {nullable:true})
    user?: InstanceType<typeof UserUpdateOneRequiredWithoutGuideLanguagesInput>;
    @Field(() => LanguagesUpdateOneRequiredWithoutGuideLanguagesInput, {nullable:true})
    language?: InstanceType<typeof LanguagesUpdateOneRequiredWithoutGuideLanguagesInput>;
}

@InputType()
export class GuideLanguagesUpdateWithoutLanguageInput {
    @Field(() => Status, {nullable:true})
    status?: keyof typeof Status;
    @Field(() => UserUpdateOneRequiredWithoutGuideLanguagesInput, {nullable:true})
    user?: InstanceType<typeof UserUpdateOneRequiredWithoutGuideLanguagesInput>;
    @Field(() => CityUpdateOneWithoutGuideLanguagesInput, {nullable:true})
    City?: InstanceType<typeof CityUpdateOneWithoutGuideLanguagesInput>;
}

@InputType()
export class GuideLanguagesUpdateWithoutUserInput {
    @Field(() => Status, {nullable:true})
    status?: keyof typeof Status;
    @Field(() => LanguagesUpdateOneRequiredWithoutGuideLanguagesInput, {nullable:true})
    language?: InstanceType<typeof LanguagesUpdateOneRequiredWithoutGuideLanguagesInput>;
    @Field(() => CityUpdateOneWithoutGuideLanguagesInput, {nullable:true})
    City?: InstanceType<typeof CityUpdateOneWithoutGuideLanguagesInput>;
}

@InputType()
export class GuideLanguagesUpdateInput {
    @Field(() => Status, {nullable:true})
    status?: keyof typeof Status;
    @Field(() => UserUpdateOneRequiredWithoutGuideLanguagesInput, {nullable:true})
    user?: InstanceType<typeof UserUpdateOneRequiredWithoutGuideLanguagesInput>;
    @Field(() => LanguagesUpdateOneRequiredWithoutGuideLanguagesInput, {nullable:true})
    language?: InstanceType<typeof LanguagesUpdateOneRequiredWithoutGuideLanguagesInput>;
    @Field(() => CityUpdateOneWithoutGuideLanguagesInput, {nullable:true})
    City?: InstanceType<typeof CityUpdateOneWithoutGuideLanguagesInput>;
}

@InputType()
export class GuideLanguagesUpsertWithWhereUniqueWithoutCityInput {
    @Field(() => GuideLanguagesWhereUniqueInput, {nullable:false})
    @Type(() => GuideLanguagesWhereUniqueInput)
    where!: InstanceType<typeof GuideLanguagesWhereUniqueInput>;
    @Field(() => GuideLanguagesUpdateWithoutCityInput, {nullable:false})
    @Type(() => GuideLanguagesUpdateWithoutCityInput)
    update!: InstanceType<typeof GuideLanguagesUpdateWithoutCityInput>;
    @Field(() => GuideLanguagesCreateWithoutCityInput, {nullable:false})
    @Type(() => GuideLanguagesCreateWithoutCityInput)
    create!: InstanceType<typeof GuideLanguagesCreateWithoutCityInput>;
}

@InputType()
export class GuideLanguagesUpsertWithWhereUniqueWithoutLanguageInput {
    @Field(() => GuideLanguagesWhereUniqueInput, {nullable:false})
    @Type(() => GuideLanguagesWhereUniqueInput)
    where!: InstanceType<typeof GuideLanguagesWhereUniqueInput>;
    @Field(() => GuideLanguagesUpdateWithoutLanguageInput, {nullable:false})
    @Type(() => GuideLanguagesUpdateWithoutLanguageInput)
    update!: InstanceType<typeof GuideLanguagesUpdateWithoutLanguageInput>;
    @Field(() => GuideLanguagesCreateWithoutLanguageInput, {nullable:false})
    @Type(() => GuideLanguagesCreateWithoutLanguageInput)
    create!: InstanceType<typeof GuideLanguagesCreateWithoutLanguageInput>;
}

@InputType()
export class GuideLanguagesUpsertWithWhereUniqueWithoutUserInput {
    @Field(() => GuideLanguagesWhereUniqueInput, {nullable:false})
    @Type(() => GuideLanguagesWhereUniqueInput)
    where!: InstanceType<typeof GuideLanguagesWhereUniqueInput>;
    @Field(() => GuideLanguagesUpdateWithoutUserInput, {nullable:false})
    @Type(() => GuideLanguagesUpdateWithoutUserInput)
    update!: InstanceType<typeof GuideLanguagesUpdateWithoutUserInput>;
    @Field(() => GuideLanguagesCreateWithoutUserInput, {nullable:false})
    @Type(() => GuideLanguagesCreateWithoutUserInput)
    create!: InstanceType<typeof GuideLanguagesCreateWithoutUserInput>;
}

@InputType()
export class GuideLanguagesUserIdLanguageIdCompoundUniqueInput {
    @Field(() => Int, {nullable:false})
    userId!: number;
    @Field(() => Int, {nullable:false})
    languageId!: number;
}

@InputType()
export class GuideLanguagesWhereUniqueInput {
    @Field(() => GuideLanguagesUserIdLanguageIdCompoundUniqueInput, {nullable:true})
    userId_languageId?: InstanceType<typeof GuideLanguagesUserIdLanguageIdCompoundUniqueInput>;
}

@InputType()
export class GuideLanguagesWhereInput {
    @Field(() => [GuideLanguagesWhereInput], {nullable:true})
    AND?: Array<GuideLanguagesWhereInput>;
    @Field(() => [GuideLanguagesWhereInput], {nullable:true})
    OR?: Array<GuideLanguagesWhereInput>;
    @Field(() => [GuideLanguagesWhereInput], {nullable:true})
    NOT?: Array<GuideLanguagesWhereInput>;
    @Field(() => EnumStatusFilter, {nullable:true})
    status?: InstanceType<typeof EnumStatusFilter>;
    @Field(() => UserRelationFilter, {nullable:true})
    user?: InstanceType<typeof UserRelationFilter>;
    @Field(() => IntFilter, {nullable:true})
    userId?: InstanceType<typeof IntFilter>;
    @Field(() => LanguagesRelationFilter, {nullable:true})
    language?: InstanceType<typeof LanguagesRelationFilter>;
    @Field(() => IntFilter, {nullable:true})
    languageId?: InstanceType<typeof IntFilter>;
    @Field(() => CityRelationFilter, {nullable:true})
    City?: InstanceType<typeof CityRelationFilter>;
    @Field(() => IntFilter, {nullable:true})
    cityId?: InstanceType<typeof IntFilter>;
}

@ObjectType()
export class GuideLanguages {
    @Field(() => Status, {nullable:false,defaultValue:'ACTIVE'})
    status!: keyof typeof Status;
    @Field(() => User, {nullable:false})
    user?: InstanceType<typeof User>;
    @Field(() => Int, {nullable:false})
    userId!: number;
    @Field(() => Languages, {nullable:false})
    language?: InstanceType<typeof Languages>;
    @Field(() => Int, {nullable:false})
    languageId!: number;
    @Field(() => City, {nullable:true})
    City?: InstanceType<typeof City> | null;
    @Field(() => Int, {nullable:true})
    cityId!: number | null;
}

@ArgsType()
export class UpdateManyGuideLanguagesArgs {
    @Field(() => GuideLanguagesUpdateManyMutationInput, {nullable:false})
    @Type(() => GuideLanguagesUpdateManyMutationInput)
    @ValidateNested({ each: true })
    data!: InstanceType<typeof GuideLanguagesUpdateManyMutationInput>;
    @Field(() => GuideLanguagesWhereInput, {nullable:true})
    @Type(() => GuideLanguagesWhereInput)
    @ValidateNested({ each: true })
    where?: InstanceType<typeof GuideLanguagesWhereInput>;
}

@ArgsType()
export class UpdateOneGuideLanguagesArgs {
    @Field(() => GuideLanguagesUpdateInput, {nullable:false})
    @Type(() => GuideLanguagesUpdateInput)
    @ValidateNested({ each: true })
    data!: InstanceType<typeof GuideLanguagesUpdateInput>;
    @Field(() => GuideLanguagesWhereUniqueInput, {nullable:false})
    @Type(() => GuideLanguagesWhereUniqueInput)
    @ValidateNested({ each: true })
    where!: InstanceType<typeof GuideLanguagesWhereUniqueInput>;
}

@ArgsType()
export class UpsertOneGuideLanguagesArgs {
    @Field(() => GuideLanguagesWhereUniqueInput, {nullable:false})
    @Type(() => GuideLanguagesWhereUniqueInput)
    @ValidateNested({ each: true })
    where!: InstanceType<typeof GuideLanguagesWhereUniqueInput>;
    @Field(() => GuideLanguagesCreateInput, {nullable:false})
    @Type(() => GuideLanguagesCreateInput)
    create!: InstanceType<typeof GuideLanguagesCreateInput>;
    @Field(() => GuideLanguagesUpdateInput, {nullable:false})
    @Type(() => GuideLanguagesUpdateInput)
    update!: InstanceType<typeof GuideLanguagesUpdateInput>;
}

@ObjectType()
export class AggregateLanguages {
    @Field(() => LanguagesCountAggregate, {nullable:true})
    _count?: InstanceType<typeof LanguagesCountAggregate>;
    @Field(() => LanguagesAvgAggregate, {nullable:true})
    _avg?: InstanceType<typeof LanguagesAvgAggregate>;
    @Field(() => LanguagesSumAggregate, {nullable:true})
    _sum?: InstanceType<typeof LanguagesSumAggregate>;
    @Field(() => LanguagesMinAggregate, {nullable:true})
    _min?: InstanceType<typeof LanguagesMinAggregate>;
    @Field(() => LanguagesMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof LanguagesMaxAggregate>;
}

@ArgsType()
export class CreateManyLanguagesArgs {
    @Field(() => [LanguagesCreateManyInput], {nullable:false})
    @Type(() => LanguagesCreateManyInput)
    @ValidateNested({ each: true })
    data!: Array<LanguagesCreateManyInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@ArgsType()
export class CreateOneLanguagesArgs {
    @Field(() => LanguagesCreateInput, {nullable:false})
    @Type(() => LanguagesCreateInput)
    @ValidateNested({ each: true })
    data!: InstanceType<typeof LanguagesCreateInput>;
}

@ArgsType()
export class DeleteManyLanguagesArgs {
    @Field(() => LanguagesWhereInput, {nullable:true})
    @Type(() => LanguagesWhereInput)
    @ValidateNested({ each: true })
    where?: InstanceType<typeof LanguagesWhereInput>;
}

@ArgsType()
export class DeleteOneLanguagesArgs {
    @Field(() => LanguagesWhereUniqueInput, {nullable:false})
    @Type(() => LanguagesWhereUniqueInput)
    @ValidateNested({ each: true })
    where!: InstanceType<typeof LanguagesWhereUniqueInput>;
}

@ArgsType()
export class FindFirstLanguagesArgs {
    @Field(() => LanguagesWhereInput, {nullable:true})
    @Type(() => LanguagesWhereInput)
    @ValidateNested({ each: true })
    where?: InstanceType<typeof LanguagesWhereInput>;
    @Field(() => [LanguagesOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<LanguagesOrderByWithRelationInput>;
    @Field(() => LanguagesWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof LanguagesWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [LanguagesScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof LanguagesScalarFieldEnum>;
}

@ArgsType()
export class FindManyLanguagesArgs {
    @Field(() => LanguagesWhereInput, {nullable:true})
    @Type(() => LanguagesWhereInput)
    @ValidateNested({ each: true })
    where?: InstanceType<typeof LanguagesWhereInput>;
    @Field(() => [LanguagesOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<LanguagesOrderByWithRelationInput>;
    @Field(() => LanguagesWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof LanguagesWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [LanguagesScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof LanguagesScalarFieldEnum>;
}

@ArgsType()
export class FindUniqueLanguagesArgs {
    @Field(() => LanguagesWhereUniqueInput, {nullable:false})
    @Type(() => LanguagesWhereUniqueInput)
    @ValidateNested({ each: true })
    where!: InstanceType<typeof LanguagesWhereUniqueInput>;
}

@ArgsType()
export class LanguagesAggregateArgs {
    @Field(() => LanguagesWhereInput, {nullable:true})
    @Type(() => LanguagesWhereInput)
    @ValidateNested({ each: true })
    where?: InstanceType<typeof LanguagesWhereInput>;
    @Field(() => [LanguagesOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<LanguagesOrderByWithRelationInput>;
    @Field(() => LanguagesWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof LanguagesWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => LanguagesCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof LanguagesCountAggregateInput>;
    @Field(() => LanguagesAvgAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof LanguagesAvgAggregateInput>;
    @Field(() => LanguagesSumAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof LanguagesSumAggregateInput>;
    @Field(() => LanguagesMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof LanguagesMinAggregateInput>;
    @Field(() => LanguagesMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof LanguagesMaxAggregateInput>;
}

@InputType()
export class LanguagesAvgAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
}

@ObjectType()
export class LanguagesAvgAggregate {
    @Field(() => Float, {nullable:true})
    id?: number;
}

@InputType()
export class LanguagesAvgOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
}

@InputType()
export class LanguagesCountAggregateInput {
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
export class LanguagesCountAggregate {
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
export class LanguagesCountOrderByAggregateInput {
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
export class LanguagesCount {
    @Field(() => Int, {nullable:false})
    GuideLanguages?: number;
}

@InputType()
export class LanguagesCreateManyInput {
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
export class LanguagesCreateNestedOneWithoutGuideLanguagesInput {
    @Field(() => LanguagesCreateWithoutGuideLanguagesInput, {nullable:true})
    @Type(() => LanguagesCreateWithoutGuideLanguagesInput)
    create?: InstanceType<typeof LanguagesCreateWithoutGuideLanguagesInput>;
    @Field(() => LanguagesCreateOrConnectWithoutGuideLanguagesInput, {nullable:true})
    @Type(() => LanguagesCreateOrConnectWithoutGuideLanguagesInput)
    connectOrCreate?: InstanceType<typeof LanguagesCreateOrConnectWithoutGuideLanguagesInput>;
    @Field(() => LanguagesWhereUniqueInput, {nullable:true})
    @Type(() => LanguagesWhereUniqueInput)
    connect?: InstanceType<typeof LanguagesWhereUniqueInput>;
}

@InputType()
export class LanguagesCreateOrConnectWithoutGuideLanguagesInput {
    @Field(() => LanguagesWhereUniqueInput, {nullable:false})
    @Type(() => LanguagesWhereUniqueInput)
    where!: InstanceType<typeof LanguagesWhereUniqueInput>;
    @Field(() => LanguagesCreateWithoutGuideLanguagesInput, {nullable:false})
    @Type(() => LanguagesCreateWithoutGuideLanguagesInput)
    create!: InstanceType<typeof LanguagesCreateWithoutGuideLanguagesInput>;
}

@InputType()
export class LanguagesCreateWithoutGuideLanguagesInput {
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
export class LanguagesCreateInput {
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
    @Field(() => GuideLanguagesCreateNestedManyWithoutLanguageInput, {nullable:true})
    GuideLanguages?: InstanceType<typeof GuideLanguagesCreateNestedManyWithoutLanguageInput>;
}

@ArgsType()
export class LanguagesGroupByArgs {
    @Field(() => LanguagesWhereInput, {nullable:true})
    @Type(() => LanguagesWhereInput)
    @ValidateNested({ each: true })
    where?: InstanceType<typeof LanguagesWhereInput>;
    @Field(() => [LanguagesOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<LanguagesOrderByWithAggregationInput>;
    @Field(() => [LanguagesScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof LanguagesScalarFieldEnum>;
    @Field(() => LanguagesScalarWhereWithAggregatesInput, {nullable:true})
    having?: InstanceType<typeof LanguagesScalarWhereWithAggregatesInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => LanguagesCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof LanguagesCountAggregateInput>;
    @Field(() => LanguagesAvgAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof LanguagesAvgAggregateInput>;
    @Field(() => LanguagesSumAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof LanguagesSumAggregateInput>;
    @Field(() => LanguagesMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof LanguagesMinAggregateInput>;
    @Field(() => LanguagesMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof LanguagesMaxAggregateInput>;
}

@ObjectType()
export class LanguagesGroupBy {
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
    @Field(() => LanguagesCountAggregate, {nullable:true})
    _count?: InstanceType<typeof LanguagesCountAggregate>;
    @Field(() => LanguagesAvgAggregate, {nullable:true})
    _avg?: InstanceType<typeof LanguagesAvgAggregate>;
    @Field(() => LanguagesSumAggregate, {nullable:true})
    _sum?: InstanceType<typeof LanguagesSumAggregate>;
    @Field(() => LanguagesMinAggregate, {nullable:true})
    _min?: InstanceType<typeof LanguagesMinAggregate>;
    @Field(() => LanguagesMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof LanguagesMaxAggregate>;
}

@InputType()
export class LanguagesMaxAggregateInput {
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
export class LanguagesMaxAggregate {
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
export class LanguagesMaxOrderByAggregateInput {
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
export class LanguagesMinAggregateInput {
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
export class LanguagesMinAggregate {
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
export class LanguagesMinOrderByAggregateInput {
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
export class LanguagesOrderByWithAggregationInput {
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
    @Field(() => LanguagesCountOrderByAggregateInput, {nullable:true})
    _count?: InstanceType<typeof LanguagesCountOrderByAggregateInput>;
    @Field(() => LanguagesAvgOrderByAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof LanguagesAvgOrderByAggregateInput>;
    @Field(() => LanguagesMaxOrderByAggregateInput, {nullable:true})
    _max?: InstanceType<typeof LanguagesMaxOrderByAggregateInput>;
    @Field(() => LanguagesMinOrderByAggregateInput, {nullable:true})
    _min?: InstanceType<typeof LanguagesMinOrderByAggregateInput>;
    @Field(() => LanguagesSumOrderByAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof LanguagesSumOrderByAggregateInput>;
}

@InputType()
export class LanguagesOrderByWithRelationInput {
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
    @Field(() => GuideLanguagesOrderByRelationAggregateInput, {nullable:true})
    GuideLanguages?: InstanceType<typeof GuideLanguagesOrderByRelationAggregateInput>;
}

@InputType()
export class LanguagesRelationFilter {
    @Field(() => LanguagesWhereInput, {nullable:true})
    is?: InstanceType<typeof LanguagesWhereInput>;
    @Field(() => LanguagesWhereInput, {nullable:true})
    isNot?: InstanceType<typeof LanguagesWhereInput>;
}

@InputType()
export class LanguagesScalarWhereWithAggregatesInput {
    @Field(() => [LanguagesScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<LanguagesScalarWhereWithAggregatesInput>;
    @Field(() => [LanguagesScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<LanguagesScalarWhereWithAggregatesInput>;
    @Field(() => [LanguagesScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<LanguagesScalarWhereWithAggregatesInput>;
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
export class LanguagesSumAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
}

@ObjectType()
export class LanguagesSumAggregate {
    @Field(() => Int, {nullable:true})
    id?: number;
}

@InputType()
export class LanguagesSumOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
}

@InputType()
export class LanguagesUncheckedCreateWithoutGuideLanguagesInput {
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
export class LanguagesUncheckedCreateInput {
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
    @Field(() => GuideLanguagesUncheckedCreateNestedManyWithoutLanguageInput, {nullable:true})
    GuideLanguages?: InstanceType<typeof GuideLanguagesUncheckedCreateNestedManyWithoutLanguageInput>;
}

@InputType()
export class LanguagesUncheckedUpdateManyInput {
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
export class LanguagesUncheckedUpdateWithoutGuideLanguagesInput {
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
export class LanguagesUncheckedUpdateInput {
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
    @Field(() => GuideLanguagesUncheckedUpdateManyWithoutLanguageInput, {nullable:true})
    GuideLanguages?: InstanceType<typeof GuideLanguagesUncheckedUpdateManyWithoutLanguageInput>;
}

@InputType()
export class LanguagesUpdateManyMutationInput {
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
export class LanguagesUpdateOneRequiredWithoutGuideLanguagesInput {
    @Field(() => LanguagesCreateWithoutGuideLanguagesInput, {nullable:true})
    @Type(() => LanguagesCreateWithoutGuideLanguagesInput)
    create?: InstanceType<typeof LanguagesCreateWithoutGuideLanguagesInput>;
    @Field(() => LanguagesCreateOrConnectWithoutGuideLanguagesInput, {nullable:true})
    @Type(() => LanguagesCreateOrConnectWithoutGuideLanguagesInput)
    connectOrCreate?: InstanceType<typeof LanguagesCreateOrConnectWithoutGuideLanguagesInput>;
    @Field(() => LanguagesUpsertWithoutGuideLanguagesInput, {nullable:true})
    @Type(() => LanguagesUpsertWithoutGuideLanguagesInput)
    upsert?: InstanceType<typeof LanguagesUpsertWithoutGuideLanguagesInput>;
    @Field(() => LanguagesWhereUniqueInput, {nullable:true})
    @Type(() => LanguagesWhereUniqueInput)
    connect?: InstanceType<typeof LanguagesWhereUniqueInput>;
    @Field(() => LanguagesUpdateWithoutGuideLanguagesInput, {nullable:true})
    @Type(() => LanguagesUpdateWithoutGuideLanguagesInput)
    update?: InstanceType<typeof LanguagesUpdateWithoutGuideLanguagesInput>;
}

@InputType()
export class LanguagesUpdateWithoutGuideLanguagesInput {
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
export class LanguagesUpdateInput {
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
    @Field(() => GuideLanguagesUpdateManyWithoutLanguageInput, {nullable:true})
    GuideLanguages?: InstanceType<typeof GuideLanguagesUpdateManyWithoutLanguageInput>;
}

@InputType()
export class LanguagesUpsertWithoutGuideLanguagesInput {
    @Field(() => LanguagesUpdateWithoutGuideLanguagesInput, {nullable:false})
    @Type(() => LanguagesUpdateWithoutGuideLanguagesInput)
    update!: InstanceType<typeof LanguagesUpdateWithoutGuideLanguagesInput>;
    @Field(() => LanguagesCreateWithoutGuideLanguagesInput, {nullable:false})
    @Type(() => LanguagesCreateWithoutGuideLanguagesInput)
    create!: InstanceType<typeof LanguagesCreateWithoutGuideLanguagesInput>;
}

@InputType()
export class LanguagesWhereUniqueInput {
    @Field(() => Int, {nullable:true})
    id?: number;
}

@InputType()
export class LanguagesWhereInput {
    @Field(() => [LanguagesWhereInput], {nullable:true})
    AND?: Array<LanguagesWhereInput>;
    @Field(() => [LanguagesWhereInput], {nullable:true})
    OR?: Array<LanguagesWhereInput>;
    @Field(() => [LanguagesWhereInput], {nullable:true})
    NOT?: Array<LanguagesWhereInput>;
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
    @Field(() => GuideLanguagesListRelationFilter, {nullable:true})
    GuideLanguages?: InstanceType<typeof GuideLanguagesListRelationFilter>;
}

@ObjectType()
export class Languages {
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
    @Field(() => [GuideLanguages], {nullable:true})
    GuideLanguages?: Array<GuideLanguages>;
    @Field(() => LanguagesCount, {nullable:false})
    _count?: InstanceType<typeof LanguagesCount>;
}

@ArgsType()
export class UpdateManyLanguagesArgs {
    @Field(() => LanguagesUpdateManyMutationInput, {nullable:false})
    @Type(() => LanguagesUpdateManyMutationInput)
    @ValidateNested({ each: true })
    data!: InstanceType<typeof LanguagesUpdateManyMutationInput>;
    @Field(() => LanguagesWhereInput, {nullable:true})
    @Type(() => LanguagesWhereInput)
    @ValidateNested({ each: true })
    where?: InstanceType<typeof LanguagesWhereInput>;
}

@ArgsType()
export class UpdateOneLanguagesArgs {
    @Field(() => LanguagesUpdateInput, {nullable:false})
    @Type(() => LanguagesUpdateInput)
    @ValidateNested({ each: true })
    data!: InstanceType<typeof LanguagesUpdateInput>;
    @Field(() => LanguagesWhereUniqueInput, {nullable:false})
    @Type(() => LanguagesWhereUniqueInput)
    @ValidateNested({ each: true })
    where!: InstanceType<typeof LanguagesWhereUniqueInput>;
}

@ArgsType()
export class UpsertOneLanguagesArgs {
    @Field(() => LanguagesWhereUniqueInput, {nullable:false})
    @Type(() => LanguagesWhereUniqueInput)
    @ValidateNested({ each: true })
    where!: InstanceType<typeof LanguagesWhereUniqueInput>;
    @Field(() => LanguagesCreateInput, {nullable:false})
    @Type(() => LanguagesCreateInput)
    create!: InstanceType<typeof LanguagesCreateInput>;
    @Field(() => LanguagesUpdateInput, {nullable:false})
    @Type(() => LanguagesUpdateInput)
    update!: InstanceType<typeof LanguagesUpdateInput>;
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
    GuideGuideCategory?: number;
    @Field(() => Int, {nullable:false})
    GuideCity?: number;
    @Field(() => Int, {nullable:false})
    GuideLanguages?: number;
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
    @Validator.IsEmail()
    email!: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    firstName!: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    lastName!: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(8)
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
    @Validator.IsEmail()
    email!: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    firstName!: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    lastName!: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(8)
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
export class UserCreateNestedOneWithoutGuideCityInput {
    @Field(() => UserCreateWithoutGuideCityInput, {nullable:true})
    @Type(() => UserCreateWithoutGuideCityInput)
    create?: InstanceType<typeof UserCreateWithoutGuideCityInput>;
    @Field(() => UserCreateOrConnectWithoutGuideCityInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutGuideCityInput)
    connectOrCreate?: InstanceType<typeof UserCreateOrConnectWithoutGuideCityInput>;
    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: InstanceType<typeof UserWhereUniqueInput>;
}

@InputType()
export class UserCreateNestedOneWithoutGuideGuideCategoryInput {
    @Field(() => UserCreateWithoutGuideGuideCategoryInput, {nullable:true})
    @Type(() => UserCreateWithoutGuideGuideCategoryInput)
    create?: InstanceType<typeof UserCreateWithoutGuideGuideCategoryInput>;
    @Field(() => UserCreateOrConnectWithoutGuideGuideCategoryInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutGuideGuideCategoryInput)
    connectOrCreate?: InstanceType<typeof UserCreateOrConnectWithoutGuideGuideCategoryInput>;
    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: InstanceType<typeof UserWhereUniqueInput>;
}

@InputType()
export class UserCreateNestedOneWithoutGuideLanguagesInput {
    @Field(() => UserCreateWithoutGuideLanguagesInput, {nullable:true})
    @Type(() => UserCreateWithoutGuideLanguagesInput)
    create?: InstanceType<typeof UserCreateWithoutGuideLanguagesInput>;
    @Field(() => UserCreateOrConnectWithoutGuideLanguagesInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutGuideLanguagesInput)
    connectOrCreate?: InstanceType<typeof UserCreateOrConnectWithoutGuideLanguagesInput>;
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
export class UserCreateOrConnectWithoutGuideCityInput {
    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: InstanceType<typeof UserWhereUniqueInput>;
    @Field(() => UserCreateWithoutGuideCityInput, {nullable:false})
    @Type(() => UserCreateWithoutGuideCityInput)
    create!: InstanceType<typeof UserCreateWithoutGuideCityInput>;
}

@InputType()
export class UserCreateOrConnectWithoutGuideGuideCategoryInput {
    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: InstanceType<typeof UserWhereUniqueInput>;
    @Field(() => UserCreateWithoutGuideGuideCategoryInput, {nullable:false})
    @Type(() => UserCreateWithoutGuideGuideCategoryInput)
    create!: InstanceType<typeof UserCreateWithoutGuideGuideCategoryInput>;
}

@InputType()
export class UserCreateOrConnectWithoutGuideLanguagesInput {
    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: InstanceType<typeof UserWhereUniqueInput>;
    @Field(() => UserCreateWithoutGuideLanguagesInput, {nullable:false})
    @Type(() => UserCreateWithoutGuideLanguagesInput)
    create!: InstanceType<typeof UserCreateWithoutGuideLanguagesInput>;
}

@InputType()
export class UserCreateWithoutCountryInput {
    @Field(() => String, {nullable:false})
    @Validator.IsEmail()
    email!: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    firstName!: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    lastName!: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(8)
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
    @Field(() => Float, {nullable:true})
    rating?: number;
    @Field(() => YesNo, {nullable:true})
    isVerified?: keyof typeof YesNo;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => GuideGuideCategoryCreateNestedManyWithoutUserInput, {nullable:true})
    GuideGuideCategory?: InstanceType<typeof GuideGuideCategoryCreateNestedManyWithoutUserInput>;
    @Field(() => GuideCityCreateNestedManyWithoutUserInput, {nullable:true})
    GuideCity?: InstanceType<typeof GuideCityCreateNestedManyWithoutUserInput>;
    @Field(() => GuideLanguagesCreateNestedManyWithoutUserInput, {nullable:true})
    GuideLanguages?: InstanceType<typeof GuideLanguagesCreateNestedManyWithoutUserInput>;
}

@InputType()
export class UserCreateWithoutGuideCityInput {
    @Field(() => String, {nullable:false})
    @Validator.IsEmail()
    email!: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    firstName!: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    lastName!: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(8)
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
    @Field(() => Float, {nullable:true})
    rating?: number;
    @Field(() => YesNo, {nullable:true})
    isVerified?: keyof typeof YesNo;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => GuideGuideCategoryCreateNestedManyWithoutUserInput, {nullable:true})
    GuideGuideCategory?: InstanceType<typeof GuideGuideCategoryCreateNestedManyWithoutUserInput>;
    @Field(() => GuideLanguagesCreateNestedManyWithoutUserInput, {nullable:true})
    GuideLanguages?: InstanceType<typeof GuideLanguagesCreateNestedManyWithoutUserInput>;
}

@InputType()
export class UserCreateWithoutGuideGuideCategoryInput {
    @Field(() => String, {nullable:false})
    @Validator.IsEmail()
    email!: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    firstName!: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    lastName!: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(8)
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
    @Field(() => Float, {nullable:true})
    rating?: number;
    @Field(() => YesNo, {nullable:true})
    isVerified?: keyof typeof YesNo;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => GuideCityCreateNestedManyWithoutUserInput, {nullable:true})
    GuideCity?: InstanceType<typeof GuideCityCreateNestedManyWithoutUserInput>;
    @Field(() => GuideLanguagesCreateNestedManyWithoutUserInput, {nullable:true})
    GuideLanguages?: InstanceType<typeof GuideLanguagesCreateNestedManyWithoutUserInput>;
}

@InputType()
export class UserCreateWithoutGuideLanguagesInput {
    @Field(() => String, {nullable:false})
    @Validator.IsEmail()
    email!: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    firstName!: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    lastName!: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(8)
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
    @Field(() => Float, {nullable:true})
    rating?: number;
    @Field(() => YesNo, {nullable:true})
    isVerified?: keyof typeof YesNo;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => GuideGuideCategoryCreateNestedManyWithoutUserInput, {nullable:true})
    GuideGuideCategory?: InstanceType<typeof GuideGuideCategoryCreateNestedManyWithoutUserInput>;
    @Field(() => GuideCityCreateNestedManyWithoutUserInput, {nullable:true})
    GuideCity?: InstanceType<typeof GuideCityCreateNestedManyWithoutUserInput>;
}

@InputType()
export class UserCreateInput {
    @Field(() => String, {nullable:false})
    @Validator.IsEmail()
    email!: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    firstName!: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    lastName!: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(8)
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
    @Field(() => Float, {nullable:true})
    rating?: number;
    @Field(() => YesNo, {nullable:true})
    isVerified?: keyof typeof YesNo;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => GuideGuideCategoryCreateNestedManyWithoutUserInput, {nullable:true})
    GuideGuideCategory?: InstanceType<typeof GuideGuideCategoryCreateNestedManyWithoutUserInput>;
    @Field(() => GuideCityCreateNestedManyWithoutUserInput, {nullable:true})
    GuideCity?: InstanceType<typeof GuideCityCreateNestedManyWithoutUserInput>;
    @Field(() => GuideLanguagesCreateNestedManyWithoutUserInput, {nullable:true})
    GuideLanguages?: InstanceType<typeof GuideLanguagesCreateNestedManyWithoutUserInput>;
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
    @Validator.IsEmail()
    email!: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    firstName!: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
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
    @Validator.IsEmail()
    email?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    firstName?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
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
    @Validator.IsEmail()
    email?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    firstName?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
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
    rating?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    isVerified?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
    @Field(() => GuideGuideCategoryOrderByRelationAggregateInput, {nullable:true})
    GuideGuideCategory?: InstanceType<typeof GuideGuideCategoryOrderByRelationAggregateInput>;
    @Field(() => GuideCityOrderByRelationAggregateInput, {nullable:true})
    GuideCity?: InstanceType<typeof GuideCityOrderByRelationAggregateInput>;
    @Field(() => GuideLanguagesOrderByRelationAggregateInput, {nullable:true})
    GuideLanguages?: InstanceType<typeof GuideLanguagesOrderByRelationAggregateInput>;
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
    @Validator.IsEmail()
    email!: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    firstName!: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    lastName!: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(8)
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
    @Field(() => Float, {nullable:true})
    rating?: number;
    @Field(() => YesNo, {nullable:true})
    isVerified?: keyof typeof YesNo;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => GuideGuideCategoryUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    GuideGuideCategory?: InstanceType<typeof GuideGuideCategoryUncheckedCreateNestedManyWithoutUserInput>;
    @Field(() => GuideCityUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    GuideCity?: InstanceType<typeof GuideCityUncheckedCreateNestedManyWithoutUserInput>;
    @Field(() => GuideLanguagesUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    GuideLanguages?: InstanceType<typeof GuideLanguagesUncheckedCreateNestedManyWithoutUserInput>;
}

@InputType()
export class UserUncheckedCreateWithoutGuideCityInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:false})
    @Validator.IsEmail()
    email!: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    firstName!: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    lastName!: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(8)
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
    @Field(() => Float, {nullable:true})
    rating?: number;
    @Field(() => YesNo, {nullable:true})
    isVerified?: keyof typeof YesNo;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => GuideGuideCategoryUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    GuideGuideCategory?: InstanceType<typeof GuideGuideCategoryUncheckedCreateNestedManyWithoutUserInput>;
    @Field(() => GuideLanguagesUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    GuideLanguages?: InstanceType<typeof GuideLanguagesUncheckedCreateNestedManyWithoutUserInput>;
}

@InputType()
export class UserUncheckedCreateWithoutGuideGuideCategoryInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:false})
    @Validator.IsEmail()
    email!: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    firstName!: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    lastName!: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(8)
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
    @Field(() => Float, {nullable:true})
    rating?: number;
    @Field(() => YesNo, {nullable:true})
    isVerified?: keyof typeof YesNo;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => GuideCityUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    GuideCity?: InstanceType<typeof GuideCityUncheckedCreateNestedManyWithoutUserInput>;
    @Field(() => GuideLanguagesUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    GuideLanguages?: InstanceType<typeof GuideLanguagesUncheckedCreateNestedManyWithoutUserInput>;
}

@InputType()
export class UserUncheckedCreateWithoutGuideLanguagesInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:false})
    @Validator.IsEmail()
    email!: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    firstName!: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    lastName!: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(8)
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
    @Field(() => Float, {nullable:true})
    rating?: number;
    @Field(() => YesNo, {nullable:true})
    isVerified?: keyof typeof YesNo;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => GuideGuideCategoryUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    GuideGuideCategory?: InstanceType<typeof GuideGuideCategoryUncheckedCreateNestedManyWithoutUserInput>;
    @Field(() => GuideCityUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    GuideCity?: InstanceType<typeof GuideCityUncheckedCreateNestedManyWithoutUserInput>;
}

@InputType()
export class UserUncheckedCreateInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:false})
    @Validator.IsEmail()
    email!: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    firstName!: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    lastName!: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(8)
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
    @Field(() => Float, {nullable:true})
    rating?: number;
    @Field(() => YesNo, {nullable:true})
    isVerified?: keyof typeof YesNo;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => GuideGuideCategoryUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    GuideGuideCategory?: InstanceType<typeof GuideGuideCategoryUncheckedCreateNestedManyWithoutUserInput>;
    @Field(() => GuideCityUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    GuideCity?: InstanceType<typeof GuideCityUncheckedCreateNestedManyWithoutUserInput>;
    @Field(() => GuideLanguagesUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    GuideLanguages?: InstanceType<typeof GuideLanguagesUncheckedCreateNestedManyWithoutUserInput>;
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
    @Validator.IsEmail()
    email?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    firstName?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    lastName?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(8)
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
    @Validator.IsEmail()
    email?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    firstName?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    lastName?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(8)
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
    @Validator.IsEmail()
    email?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    firstName?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    lastName?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(8)
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
    @Field(() => Float, {nullable:true})
    rating?: number;
    @Field(() => YesNo, {nullable:true})
    isVerified?: keyof typeof YesNo;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => GuideGuideCategoryUncheckedUpdateManyWithoutUserInput, {nullable:true})
    GuideGuideCategory?: InstanceType<typeof GuideGuideCategoryUncheckedUpdateManyWithoutUserInput>;
    @Field(() => GuideCityUncheckedUpdateManyWithoutUserInput, {nullable:true})
    GuideCity?: InstanceType<typeof GuideCityUncheckedUpdateManyWithoutUserInput>;
    @Field(() => GuideLanguagesUncheckedUpdateManyWithoutUserInput, {nullable:true})
    GuideLanguages?: InstanceType<typeof GuideLanguagesUncheckedUpdateManyWithoutUserInput>;
}

@InputType()
export class UserUncheckedUpdateWithoutGuideCityInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:true})
    @Validator.IsEmail()
    email?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    firstName?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    lastName?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(8)
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
    @Field(() => Float, {nullable:true})
    rating?: number;
    @Field(() => YesNo, {nullable:true})
    isVerified?: keyof typeof YesNo;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => GuideGuideCategoryUncheckedUpdateManyWithoutUserInput, {nullable:true})
    GuideGuideCategory?: InstanceType<typeof GuideGuideCategoryUncheckedUpdateManyWithoutUserInput>;
    @Field(() => GuideLanguagesUncheckedUpdateManyWithoutUserInput, {nullable:true})
    GuideLanguages?: InstanceType<typeof GuideLanguagesUncheckedUpdateManyWithoutUserInput>;
}

@InputType()
export class UserUncheckedUpdateWithoutGuideGuideCategoryInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:true})
    @Validator.IsEmail()
    email?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    firstName?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    lastName?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(8)
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
    @Field(() => Float, {nullable:true})
    rating?: number;
    @Field(() => YesNo, {nullable:true})
    isVerified?: keyof typeof YesNo;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => GuideCityUncheckedUpdateManyWithoutUserInput, {nullable:true})
    GuideCity?: InstanceType<typeof GuideCityUncheckedUpdateManyWithoutUserInput>;
    @Field(() => GuideLanguagesUncheckedUpdateManyWithoutUserInput, {nullable:true})
    GuideLanguages?: InstanceType<typeof GuideLanguagesUncheckedUpdateManyWithoutUserInput>;
}

@InputType()
export class UserUncheckedUpdateWithoutGuideLanguagesInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:true})
    @Validator.IsEmail()
    email?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    firstName?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    lastName?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(8)
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
    @Field(() => Float, {nullable:true})
    rating?: number;
    @Field(() => YesNo, {nullable:true})
    isVerified?: keyof typeof YesNo;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => GuideGuideCategoryUncheckedUpdateManyWithoutUserInput, {nullable:true})
    GuideGuideCategory?: InstanceType<typeof GuideGuideCategoryUncheckedUpdateManyWithoutUserInput>;
    @Field(() => GuideCityUncheckedUpdateManyWithoutUserInput, {nullable:true})
    GuideCity?: InstanceType<typeof GuideCityUncheckedUpdateManyWithoutUserInput>;
}

@InputType()
export class UserUncheckedUpdateInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:true})
    @Validator.IsEmail()
    email?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    firstName?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    lastName?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(8)
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
    @Field(() => Float, {nullable:true})
    rating?: number;
    @Field(() => YesNo, {nullable:true})
    isVerified?: keyof typeof YesNo;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => GuideGuideCategoryUncheckedUpdateManyWithoutUserInput, {nullable:true})
    GuideGuideCategory?: InstanceType<typeof GuideGuideCategoryUncheckedUpdateManyWithoutUserInput>;
    @Field(() => GuideCityUncheckedUpdateManyWithoutUserInput, {nullable:true})
    GuideCity?: InstanceType<typeof GuideCityUncheckedUpdateManyWithoutUserInput>;
    @Field(() => GuideLanguagesUncheckedUpdateManyWithoutUserInput, {nullable:true})
    GuideLanguages?: InstanceType<typeof GuideLanguagesUncheckedUpdateManyWithoutUserInput>;
}

@InputType()
export class UserUpdateManyMutationInput {
    @Field(() => String, {nullable:true})
    @Validator.IsEmail()
    email?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    firstName?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    lastName?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(8)
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
export class UserUpdateOneRequiredWithoutGuideCityInput {
    @Field(() => UserCreateWithoutGuideCityInput, {nullable:true})
    @Type(() => UserCreateWithoutGuideCityInput)
    create?: InstanceType<typeof UserCreateWithoutGuideCityInput>;
    @Field(() => UserCreateOrConnectWithoutGuideCityInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutGuideCityInput)
    connectOrCreate?: InstanceType<typeof UserCreateOrConnectWithoutGuideCityInput>;
    @Field(() => UserUpsertWithoutGuideCityInput, {nullable:true})
    @Type(() => UserUpsertWithoutGuideCityInput)
    upsert?: InstanceType<typeof UserUpsertWithoutGuideCityInput>;
    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: InstanceType<typeof UserWhereUniqueInput>;
    @Field(() => UserUpdateWithoutGuideCityInput, {nullable:true})
    @Type(() => UserUpdateWithoutGuideCityInput)
    update?: InstanceType<typeof UserUpdateWithoutGuideCityInput>;
}

@InputType()
export class UserUpdateOneRequiredWithoutGuideGuideCategoryInput {
    @Field(() => UserCreateWithoutGuideGuideCategoryInput, {nullable:true})
    @Type(() => UserCreateWithoutGuideGuideCategoryInput)
    create?: InstanceType<typeof UserCreateWithoutGuideGuideCategoryInput>;
    @Field(() => UserCreateOrConnectWithoutGuideGuideCategoryInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutGuideGuideCategoryInput)
    connectOrCreate?: InstanceType<typeof UserCreateOrConnectWithoutGuideGuideCategoryInput>;
    @Field(() => UserUpsertWithoutGuideGuideCategoryInput, {nullable:true})
    @Type(() => UserUpsertWithoutGuideGuideCategoryInput)
    upsert?: InstanceType<typeof UserUpsertWithoutGuideGuideCategoryInput>;
    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: InstanceType<typeof UserWhereUniqueInput>;
    @Field(() => UserUpdateWithoutGuideGuideCategoryInput, {nullable:true})
    @Type(() => UserUpdateWithoutGuideGuideCategoryInput)
    update?: InstanceType<typeof UserUpdateWithoutGuideGuideCategoryInput>;
}

@InputType()
export class UserUpdateOneRequiredWithoutGuideLanguagesInput {
    @Field(() => UserCreateWithoutGuideLanguagesInput, {nullable:true})
    @Type(() => UserCreateWithoutGuideLanguagesInput)
    create?: InstanceType<typeof UserCreateWithoutGuideLanguagesInput>;
    @Field(() => UserCreateOrConnectWithoutGuideLanguagesInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutGuideLanguagesInput)
    connectOrCreate?: InstanceType<typeof UserCreateOrConnectWithoutGuideLanguagesInput>;
    @Field(() => UserUpsertWithoutGuideLanguagesInput, {nullable:true})
    @Type(() => UserUpsertWithoutGuideLanguagesInput)
    upsert?: InstanceType<typeof UserUpsertWithoutGuideLanguagesInput>;
    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: InstanceType<typeof UserWhereUniqueInput>;
    @Field(() => UserUpdateWithoutGuideLanguagesInput, {nullable:true})
    @Type(() => UserUpdateWithoutGuideLanguagesInput)
    update?: InstanceType<typeof UserUpdateWithoutGuideLanguagesInput>;
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
    @Validator.IsEmail()
    email?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    firstName?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    lastName?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(8)
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
    @Field(() => Float, {nullable:true})
    rating?: number;
    @Field(() => YesNo, {nullable:true})
    isVerified?: keyof typeof YesNo;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => GuideGuideCategoryUpdateManyWithoutUserInput, {nullable:true})
    GuideGuideCategory?: InstanceType<typeof GuideGuideCategoryUpdateManyWithoutUserInput>;
    @Field(() => GuideCityUpdateManyWithoutUserInput, {nullable:true})
    GuideCity?: InstanceType<typeof GuideCityUpdateManyWithoutUserInput>;
    @Field(() => GuideLanguagesUpdateManyWithoutUserInput, {nullable:true})
    GuideLanguages?: InstanceType<typeof GuideLanguagesUpdateManyWithoutUserInput>;
}

@InputType()
export class UserUpdateWithoutGuideCityInput {
    @Field(() => String, {nullable:true})
    @Validator.IsEmail()
    email?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    firstName?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    lastName?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(8)
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
    @Field(() => Float, {nullable:true})
    rating?: number;
    @Field(() => YesNo, {nullable:true})
    isVerified?: keyof typeof YesNo;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => GuideGuideCategoryUpdateManyWithoutUserInput, {nullable:true})
    GuideGuideCategory?: InstanceType<typeof GuideGuideCategoryUpdateManyWithoutUserInput>;
    @Field(() => GuideLanguagesUpdateManyWithoutUserInput, {nullable:true})
    GuideLanguages?: InstanceType<typeof GuideLanguagesUpdateManyWithoutUserInput>;
}

@InputType()
export class UserUpdateWithoutGuideGuideCategoryInput {
    @Field(() => String, {nullable:true})
    @Validator.IsEmail()
    email?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    firstName?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    lastName?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(8)
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
    @Field(() => Float, {nullable:true})
    rating?: number;
    @Field(() => YesNo, {nullable:true})
    isVerified?: keyof typeof YesNo;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => GuideCityUpdateManyWithoutUserInput, {nullable:true})
    GuideCity?: InstanceType<typeof GuideCityUpdateManyWithoutUserInput>;
    @Field(() => GuideLanguagesUpdateManyWithoutUserInput, {nullable:true})
    GuideLanguages?: InstanceType<typeof GuideLanguagesUpdateManyWithoutUserInput>;
}

@InputType()
export class UserUpdateWithoutGuideLanguagesInput {
    @Field(() => String, {nullable:true})
    @Validator.IsEmail()
    email?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    firstName?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    lastName?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(8)
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
    @Field(() => Float, {nullable:true})
    rating?: number;
    @Field(() => YesNo, {nullable:true})
    isVerified?: keyof typeof YesNo;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => GuideGuideCategoryUpdateManyWithoutUserInput, {nullable:true})
    GuideGuideCategory?: InstanceType<typeof GuideGuideCategoryUpdateManyWithoutUserInput>;
    @Field(() => GuideCityUpdateManyWithoutUserInput, {nullable:true})
    GuideCity?: InstanceType<typeof GuideCityUpdateManyWithoutUserInput>;
}

@InputType()
export class UserUpdateInput {
    @Field(() => String, {nullable:true})
    @Validator.IsEmail()
    email?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    firstName?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    lastName?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(8)
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
    @Field(() => Float, {nullable:true})
    rating?: number;
    @Field(() => YesNo, {nullable:true})
    isVerified?: keyof typeof YesNo;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => GuideGuideCategoryUpdateManyWithoutUserInput, {nullable:true})
    GuideGuideCategory?: InstanceType<typeof GuideGuideCategoryUpdateManyWithoutUserInput>;
    @Field(() => GuideCityUpdateManyWithoutUserInput, {nullable:true})
    GuideCity?: InstanceType<typeof GuideCityUpdateManyWithoutUserInput>;
    @Field(() => GuideLanguagesUpdateManyWithoutUserInput, {nullable:true})
    GuideLanguages?: InstanceType<typeof GuideLanguagesUpdateManyWithoutUserInput>;
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
export class UserUpsertWithoutGuideCityInput {
    @Field(() => UserUpdateWithoutGuideCityInput, {nullable:false})
    @Type(() => UserUpdateWithoutGuideCityInput)
    update!: InstanceType<typeof UserUpdateWithoutGuideCityInput>;
    @Field(() => UserCreateWithoutGuideCityInput, {nullable:false})
    @Type(() => UserCreateWithoutGuideCityInput)
    create!: InstanceType<typeof UserCreateWithoutGuideCityInput>;
}

@InputType()
export class UserUpsertWithoutGuideGuideCategoryInput {
    @Field(() => UserUpdateWithoutGuideGuideCategoryInput, {nullable:false})
    @Type(() => UserUpdateWithoutGuideGuideCategoryInput)
    update!: InstanceType<typeof UserUpdateWithoutGuideGuideCategoryInput>;
    @Field(() => UserCreateWithoutGuideGuideCategoryInput, {nullable:false})
    @Type(() => UserCreateWithoutGuideGuideCategoryInput)
    create!: InstanceType<typeof UserCreateWithoutGuideGuideCategoryInput>;
}

@InputType()
export class UserUpsertWithoutGuideLanguagesInput {
    @Field(() => UserUpdateWithoutGuideLanguagesInput, {nullable:false})
    @Type(() => UserUpdateWithoutGuideLanguagesInput)
    update!: InstanceType<typeof UserUpdateWithoutGuideLanguagesInput>;
    @Field(() => UserCreateWithoutGuideLanguagesInput, {nullable:false})
    @Type(() => UserCreateWithoutGuideLanguagesInput)
    create!: InstanceType<typeof UserCreateWithoutGuideLanguagesInput>;
}

@InputType()
export class UserWhereUniqueInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:true})
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
    @Field(() => FloatFilter, {nullable:true})
    rating?: InstanceType<typeof FloatFilter>;
    @Field(() => EnumYesNoFilter, {nullable:true})
    isVerified?: InstanceType<typeof EnumYesNoFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => GuideGuideCategoryListRelationFilter, {nullable:true})
    GuideGuideCategory?: InstanceType<typeof GuideGuideCategoryListRelationFilter>;
    @Field(() => GuideCityListRelationFilter, {nullable:true})
    GuideCity?: InstanceType<typeof GuideCityListRelationFilter>;
    @Field(() => GuideLanguagesListRelationFilter, {nullable:true})
    GuideLanguages?: InstanceType<typeof GuideLanguagesListRelationFilter>;
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
    @Field(() => Float, {nullable:true,defaultValue:5})
    rating!: number | null;
    @Field(() => YesNo, {nullable:false,defaultValue:'NO'})
    isVerified!: keyof typeof YesNo;
    @Field(() => Date, {nullable:false})
    createdAt!: Date;
    @Field(() => Date, {nullable:false})
    updatedAt!: Date;
    @Field(() => [GuideGuideCategory], {nullable:true})
    GuideGuideCategory?: Array<GuideGuideCategory>;
    @Field(() => [GuideCity], {nullable:true})
    GuideCity?: Array<GuideCity>;
    @Field(() => [GuideLanguages], {nullable:true})
    GuideLanguages?: Array<GuideLanguages>;
    @Field(() => UserCount, {nullable:false})
    _count?: InstanceType<typeof UserCount>;
}
