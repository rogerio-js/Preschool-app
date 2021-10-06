import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type SchoolMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ReviewsMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type BriefMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ApprovalMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class School {
  readonly id: string;
  readonly name?: string;
  readonly address?: string;
  readonly longitude?: number;
  readonly latitude?: number;
  readonly isFavourite?: boolean;
  readonly Reviews?: Reviews;
  readonly Brief?: Brief;
  readonly Approval?: Approval;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<School, SchoolMetaData>);
  static copyOf(source: School, mutator: (draft: MutableModel<School, SchoolMetaData>) => MutableModel<School, SchoolMetaData> | void): School;
}

export declare class Reviews {
  readonly id: string;
  readonly content?: string;
  readonly School?: School;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Reviews, ReviewsMetaData>);
  static copyOf(source: Reviews, mutator: (draft: MutableModel<Reviews, ReviewsMetaData>) => MutableModel<Reviews, ReviewsMetaData> | void): Reviews;
}

export declare class Brief {
  readonly id: string;
  readonly content?: string;
  readonly School?: School;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Brief, BriefMetaData>);
  static copyOf(source: Brief, mutator: (draft: MutableModel<Brief, BriefMetaData>) => MutableModel<Brief, BriefMetaData> | void): Brief;
}

export declare class Approval {
  readonly id: string;
  readonly approvalNumber?: number;
  readonly disapprovalNumber?: number;
  readonly School?: School;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Approval, ApprovalMetaData>);
  static copyOf(source: Approval, mutator: (draft: MutableModel<Approval, ApprovalMetaData>) => MutableModel<Approval, ApprovalMetaData> | void): Approval;
}