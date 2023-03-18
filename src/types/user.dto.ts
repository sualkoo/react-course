export interface IUserDto {
  status: StatusEnum;
  name?: string;
}

export interface IDebil {
  num?: number;
}

export enum StatusEnum {
  ACTIVE = "ACTIVE",
  PASSIVE = "PASSIVE",
}

export interface IBasicPersonDto {
  age?: number;
  name?: string;
}

export interface IPersonDto extends IBasicPersonDto {
  isMale?: boolean;
  birthdate?: Date;
  location?: string | null;
  friendsNames?: string[];
  parents?: {
    mother: IBasicPersonDto;
    father: IBasicPersonType & {
      strong: boolean;
    };
  };
}

// Utility types https://www.typescriptlang.org/docs/handbook/utility-types.html
export type IOrphanDto = Omit<IPersonDto, "parents">;

// this and upper one are the same
export type IOrphanPicked = Pick<
  IPersonDto,
  "isMale" | "birthdate" | "age" | "name" | "friendsNames" | "location"
>;

export interface IGrandParentsOrphanDto extends IOrphanDto {
  grandParents?: string[];
}

// export type IPersonType & IBasicPersonType = {
//     isMale: boolean;
//     birthdate: Date;
// }

export type IBasicPersonType = {
  age?: number;
  name?: string;
};
