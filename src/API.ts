/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateSchoolInput = {
  id?: string | null,
  name?: string | null,
  address?: string | null,
  longitude?: number | null,
  latitude?: number | null,
  isFavourite?: boolean | null,
  schoolReviewsId?: string | null,
  schoolBriefId?: string | null,
  schoolApprovalId?: string | null,
};

export type ModelSchoolConditionInput = {
  name?: ModelStringInput | null,
  address?: ModelStringInput | null,
  longitude?: ModelIntInput | null,
  latitude?: ModelIntInput | null,
  isFavourite?: ModelBooleanInput | null,
  and?: Array< ModelSchoolConditionInput | null > | null,
  or?: Array< ModelSchoolConditionInput | null > | null,
  not?: ModelSchoolConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type School = {
  __typename: "School",
  id: string,
  name?: string | null,
  address?: string | null,
  longitude?: number | null,
  latitude?: number | null,
  isFavourite?: boolean | null,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
  Brief?: Brief | null,
  Approval?: Approval | null,
  Reviews?: Reviews | null,
};

export type Brief = {
  __typename: "Brief",
  id: string,
  content?: string | null,
  createdAt: string,
  updatedAt: string,
  School?: School | null,
  owner?: string | null,
};

export type Approval = {
  __typename: "Approval",
  id: string,
  approvalNumber?: number | null,
  disapprovalNumber?: number | null,
  createdAt: string,
  updatedAt: string,
  School?: School | null,
  owner?: string | null,
};

export type Reviews = {
  __typename: "Reviews",
  id: string,
  content?: string | null,
  createdAt: string,
  updatedAt: string,
  School?: School | null,
  owner?: string | null,
};

export type UpdateSchoolInput = {
  id: string,
  name?: string | null,
  address?: string | null,
  longitude?: number | null,
  latitude?: number | null,
  isFavourite?: boolean | null,
  schoolReviewsId?: string | null,
  schoolBriefId?: string | null,
  schoolApprovalId?: string | null,
};

export type DeleteSchoolInput = {
  id: string,
};

export type CreateBriefInput = {
  id?: string | null,
  content?: string | null,
  briefSchoolId?: string | null,
};

export type ModelBriefConditionInput = {
  content?: ModelStringInput | null,
  and?: Array< ModelBriefConditionInput | null > | null,
  or?: Array< ModelBriefConditionInput | null > | null,
  not?: ModelBriefConditionInput | null,
};

export type UpdateBriefInput = {
  id: string,
  content?: string | null,
  briefSchoolId?: string | null,
};

export type DeleteBriefInput = {
  id: string,
};

export type CreateApprovalInput = {
  id?: string | null,
  approvalNumber?: number | null,
  disapprovalNumber?: number | null,
  approvalSchoolId?: string | null,
};

export type ModelApprovalConditionInput = {
  approvalNumber?: ModelIntInput | null,
  disapprovalNumber?: ModelIntInput | null,
  and?: Array< ModelApprovalConditionInput | null > | null,
  or?: Array< ModelApprovalConditionInput | null > | null,
  not?: ModelApprovalConditionInput | null,
};

export type UpdateApprovalInput = {
  id: string,
  approvalNumber?: number | null,
  disapprovalNumber?: number | null,
  approvalSchoolId?: string | null,
};

export type DeleteApprovalInput = {
  id: string,
};

export type CreateReviewsInput = {
  id?: string | null,
  content?: string | null,
  reviewsSchoolId?: string | null,
};

export type ModelReviewsConditionInput = {
  content?: ModelStringInput | null,
  and?: Array< ModelReviewsConditionInput | null > | null,
  or?: Array< ModelReviewsConditionInput | null > | null,
  not?: ModelReviewsConditionInput | null,
};

export type UpdateReviewsInput = {
  id: string,
  content?: string | null,
  reviewsSchoolId?: string | null,
};

export type DeleteReviewsInput = {
  id: string,
};

export type ModelSchoolFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  address?: ModelStringInput | null,
  longitude?: ModelIntInput | null,
  latitude?: ModelIntInput | null,
  isFavourite?: ModelBooleanInput | null,
  and?: Array< ModelSchoolFilterInput | null > | null,
  or?: Array< ModelSchoolFilterInput | null > | null,
  not?: ModelSchoolFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelSchoolConnection = {
  __typename: "ModelSchoolConnection",
  items?:  Array<School | null > | null,
  nextToken?: string | null,
};

export type ModelBriefFilterInput = {
  id?: ModelIDInput | null,
  content?: ModelStringInput | null,
  and?: Array< ModelBriefFilterInput | null > | null,
  or?: Array< ModelBriefFilterInput | null > | null,
  not?: ModelBriefFilterInput | null,
};

export type ModelBriefConnection = {
  __typename: "ModelBriefConnection",
  items?:  Array<Brief | null > | null,
  nextToken?: string | null,
};

export type ModelApprovalFilterInput = {
  id?: ModelIDInput | null,
  approvalNumber?: ModelIntInput | null,
  disapprovalNumber?: ModelIntInput | null,
  and?: Array< ModelApprovalFilterInput | null > | null,
  or?: Array< ModelApprovalFilterInput | null > | null,
  not?: ModelApprovalFilterInput | null,
};

export type ModelApprovalConnection = {
  __typename: "ModelApprovalConnection",
  items?:  Array<Approval | null > | null,
  nextToken?: string | null,
};

export type ModelReviewsFilterInput = {
  id?: ModelIDInput | null,
  content?: ModelStringInput | null,
  and?: Array< ModelReviewsFilterInput | null > | null,
  or?: Array< ModelReviewsFilterInput | null > | null,
  not?: ModelReviewsFilterInput | null,
};

export type ModelReviewsConnection = {
  __typename: "ModelReviewsConnection",
  items?:  Array<Reviews | null > | null,
  nextToken?: string | null,
};

export type CreateSchoolMutationVariables = {
  input: CreateSchoolInput,
  condition?: ModelSchoolConditionInput | null,
};

export type CreateSchoolMutation = {
  createSchool?:  {
    __typename: "School",
    id: string,
    name?: string | null,
    address?: string | null,
    longitude?: number | null,
    latitude?: number | null,
    isFavourite?: boolean | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
    Brief?:  {
      __typename: "Brief",
      id: string,
      content?: string | null,
      createdAt: string,
      updatedAt: string,
      School?:  {
        __typename: "School",
        id: string,
        name?: string | null,
        address?: string | null,
        longitude?: number | null,
        latitude?: number | null,
        isFavourite?: boolean | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
      owner?: string | null,
    } | null,
    Approval?:  {
      __typename: "Approval",
      id: string,
      approvalNumber?: number | null,
      disapprovalNumber?: number | null,
      createdAt: string,
      updatedAt: string,
      School?:  {
        __typename: "School",
        id: string,
        name?: string | null,
        address?: string | null,
        longitude?: number | null,
        latitude?: number | null,
        isFavourite?: boolean | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
      owner?: string | null,
    } | null,
    Reviews?:  {
      __typename: "Reviews",
      id: string,
      content?: string | null,
      createdAt: string,
      updatedAt: string,
      School?:  {
        __typename: "School",
        id: string,
        name?: string | null,
        address?: string | null,
        longitude?: number | null,
        latitude?: number | null,
        isFavourite?: boolean | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
      owner?: string | null,
    } | null,
  } | null,
};

export type UpdateSchoolMutationVariables = {
  input: UpdateSchoolInput,
  condition?: ModelSchoolConditionInput | null,
};

export type UpdateSchoolMutation = {
  updateSchool?:  {
    __typename: "School",
    id: string,
    name?: string | null,
    address?: string | null,
    longitude?: number | null,
    latitude?: number | null,
    isFavourite?: boolean | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
    Brief?:  {
      __typename: "Brief",
      id: string,
      content?: string | null,
      createdAt: string,
      updatedAt: string,
      School?:  {
        __typename: "School",
        id: string,
        name?: string | null,
        address?: string | null,
        longitude?: number | null,
        latitude?: number | null,
        isFavourite?: boolean | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
      owner?: string | null,
    } | null,
    Approval?:  {
      __typename: "Approval",
      id: string,
      approvalNumber?: number | null,
      disapprovalNumber?: number | null,
      createdAt: string,
      updatedAt: string,
      School?:  {
        __typename: "School",
        id: string,
        name?: string | null,
        address?: string | null,
        longitude?: number | null,
        latitude?: number | null,
        isFavourite?: boolean | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
      owner?: string | null,
    } | null,
    Reviews?:  {
      __typename: "Reviews",
      id: string,
      content?: string | null,
      createdAt: string,
      updatedAt: string,
      School?:  {
        __typename: "School",
        id: string,
        name?: string | null,
        address?: string | null,
        longitude?: number | null,
        latitude?: number | null,
        isFavourite?: boolean | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
      owner?: string | null,
    } | null,
  } | null,
};

export type DeleteSchoolMutationVariables = {
  input: DeleteSchoolInput,
  condition?: ModelSchoolConditionInput | null,
};

export type DeleteSchoolMutation = {
  deleteSchool?:  {
    __typename: "School",
    id: string,
    name?: string | null,
    address?: string | null,
    longitude?: number | null,
    latitude?: number | null,
    isFavourite?: boolean | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
    Brief?:  {
      __typename: "Brief",
      id: string,
      content?: string | null,
      createdAt: string,
      updatedAt: string,
      School?:  {
        __typename: "School",
        id: string,
        name?: string | null,
        address?: string | null,
        longitude?: number | null,
        latitude?: number | null,
        isFavourite?: boolean | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
      owner?: string | null,
    } | null,
    Approval?:  {
      __typename: "Approval",
      id: string,
      approvalNumber?: number | null,
      disapprovalNumber?: number | null,
      createdAt: string,
      updatedAt: string,
      School?:  {
        __typename: "School",
        id: string,
        name?: string | null,
        address?: string | null,
        longitude?: number | null,
        latitude?: number | null,
        isFavourite?: boolean | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
      owner?: string | null,
    } | null,
    Reviews?:  {
      __typename: "Reviews",
      id: string,
      content?: string | null,
      createdAt: string,
      updatedAt: string,
      School?:  {
        __typename: "School",
        id: string,
        name?: string | null,
        address?: string | null,
        longitude?: number | null,
        latitude?: number | null,
        isFavourite?: boolean | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
      owner?: string | null,
    } | null,
  } | null,
};

export type CreateBriefMutationVariables = {
  input: CreateBriefInput,
  condition?: ModelBriefConditionInput | null,
};

export type CreateBriefMutation = {
  createBrief?:  {
    __typename: "Brief",
    id: string,
    content?: string | null,
    createdAt: string,
    updatedAt: string,
    School?:  {
      __typename: "School",
      id: string,
      name?: string | null,
      address?: string | null,
      longitude?: number | null,
      latitude?: number | null,
      isFavourite?: boolean | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
      Brief?:  {
        __typename: "Brief",
        id: string,
        content?: string | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
      Approval?:  {
        __typename: "Approval",
        id: string,
        approvalNumber?: number | null,
        disapprovalNumber?: number | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
      Reviews?:  {
        __typename: "Reviews",
        id: string,
        content?: string | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
    } | null,
    owner?: string | null,
  } | null,
};

export type UpdateBriefMutationVariables = {
  input: UpdateBriefInput,
  condition?: ModelBriefConditionInput | null,
};

export type UpdateBriefMutation = {
  updateBrief?:  {
    __typename: "Brief",
    id: string,
    content?: string | null,
    createdAt: string,
    updatedAt: string,
    School?:  {
      __typename: "School",
      id: string,
      name?: string | null,
      address?: string | null,
      longitude?: number | null,
      latitude?: number | null,
      isFavourite?: boolean | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
      Brief?:  {
        __typename: "Brief",
        id: string,
        content?: string | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
      Approval?:  {
        __typename: "Approval",
        id: string,
        approvalNumber?: number | null,
        disapprovalNumber?: number | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
      Reviews?:  {
        __typename: "Reviews",
        id: string,
        content?: string | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
    } | null,
    owner?: string | null,
  } | null,
};

export type DeleteBriefMutationVariables = {
  input: DeleteBriefInput,
  condition?: ModelBriefConditionInput | null,
};

export type DeleteBriefMutation = {
  deleteBrief?:  {
    __typename: "Brief",
    id: string,
    content?: string | null,
    createdAt: string,
    updatedAt: string,
    School?:  {
      __typename: "School",
      id: string,
      name?: string | null,
      address?: string | null,
      longitude?: number | null,
      latitude?: number | null,
      isFavourite?: boolean | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
      Brief?:  {
        __typename: "Brief",
        id: string,
        content?: string | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
      Approval?:  {
        __typename: "Approval",
        id: string,
        approvalNumber?: number | null,
        disapprovalNumber?: number | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
      Reviews?:  {
        __typename: "Reviews",
        id: string,
        content?: string | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
    } | null,
    owner?: string | null,
  } | null,
};

export type CreateApprovalMutationVariables = {
  input: CreateApprovalInput,
  condition?: ModelApprovalConditionInput | null,
};

export type CreateApprovalMutation = {
  createApproval?:  {
    __typename: "Approval",
    id: string,
    approvalNumber?: number | null,
    disapprovalNumber?: number | null,
    createdAt: string,
    updatedAt: string,
    School?:  {
      __typename: "School",
      id: string,
      name?: string | null,
      address?: string | null,
      longitude?: number | null,
      latitude?: number | null,
      isFavourite?: boolean | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
      Brief?:  {
        __typename: "Brief",
        id: string,
        content?: string | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
      Approval?:  {
        __typename: "Approval",
        id: string,
        approvalNumber?: number | null,
        disapprovalNumber?: number | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
      Reviews?:  {
        __typename: "Reviews",
        id: string,
        content?: string | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
    } | null,
    owner?: string | null,
  } | null,
};

export type UpdateApprovalMutationVariables = {
  input: UpdateApprovalInput,
  condition?: ModelApprovalConditionInput | null,
};

export type UpdateApprovalMutation = {
  updateApproval?:  {
    __typename: "Approval",
    id: string,
    approvalNumber?: number | null,
    disapprovalNumber?: number | null,
    createdAt: string,
    updatedAt: string,
    School?:  {
      __typename: "School",
      id: string,
      name?: string | null,
      address?: string | null,
      longitude?: number | null,
      latitude?: number | null,
      isFavourite?: boolean | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
      Brief?:  {
        __typename: "Brief",
        id: string,
        content?: string | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
      Approval?:  {
        __typename: "Approval",
        id: string,
        approvalNumber?: number | null,
        disapprovalNumber?: number | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
      Reviews?:  {
        __typename: "Reviews",
        id: string,
        content?: string | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
    } | null,
    owner?: string | null,
  } | null,
};

export type DeleteApprovalMutationVariables = {
  input: DeleteApprovalInput,
  condition?: ModelApprovalConditionInput | null,
};

export type DeleteApprovalMutation = {
  deleteApproval?:  {
    __typename: "Approval",
    id: string,
    approvalNumber?: number | null,
    disapprovalNumber?: number | null,
    createdAt: string,
    updatedAt: string,
    School?:  {
      __typename: "School",
      id: string,
      name?: string | null,
      address?: string | null,
      longitude?: number | null,
      latitude?: number | null,
      isFavourite?: boolean | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
      Brief?:  {
        __typename: "Brief",
        id: string,
        content?: string | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
      Approval?:  {
        __typename: "Approval",
        id: string,
        approvalNumber?: number | null,
        disapprovalNumber?: number | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
      Reviews?:  {
        __typename: "Reviews",
        id: string,
        content?: string | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
    } | null,
    owner?: string | null,
  } | null,
};

export type CreateReviewsMutationVariables = {
  input: CreateReviewsInput,
  condition?: ModelReviewsConditionInput | null,
};

export type CreateReviewsMutation = {
  createReviews?:  {
    __typename: "Reviews",
    id: string,
    content?: string | null,
    createdAt: string,
    updatedAt: string,
    School?:  {
      __typename: "School",
      id: string,
      name?: string | null,
      address?: string | null,
      longitude?: number | null,
      latitude?: number | null,
      isFavourite?: boolean | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
      Brief?:  {
        __typename: "Brief",
        id: string,
        content?: string | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
      Approval?:  {
        __typename: "Approval",
        id: string,
        approvalNumber?: number | null,
        disapprovalNumber?: number | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
      Reviews?:  {
        __typename: "Reviews",
        id: string,
        content?: string | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
    } | null,
    owner?: string | null,
  } | null,
};

export type UpdateReviewsMutationVariables = {
  input: UpdateReviewsInput,
  condition?: ModelReviewsConditionInput | null,
};

export type UpdateReviewsMutation = {
  updateReviews?:  {
    __typename: "Reviews",
    id: string,
    content?: string | null,
    createdAt: string,
    updatedAt: string,
    School?:  {
      __typename: "School",
      id: string,
      name?: string | null,
      address?: string | null,
      longitude?: number | null,
      latitude?: number | null,
      isFavourite?: boolean | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
      Brief?:  {
        __typename: "Brief",
        id: string,
        content?: string | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
      Approval?:  {
        __typename: "Approval",
        id: string,
        approvalNumber?: number | null,
        disapprovalNumber?: number | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
      Reviews?:  {
        __typename: "Reviews",
        id: string,
        content?: string | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
    } | null,
    owner?: string | null,
  } | null,
};

export type DeleteReviewsMutationVariables = {
  input: DeleteReviewsInput,
  condition?: ModelReviewsConditionInput | null,
};

export type DeleteReviewsMutation = {
  deleteReviews?:  {
    __typename: "Reviews",
    id: string,
    content?: string | null,
    createdAt: string,
    updatedAt: string,
    School?:  {
      __typename: "School",
      id: string,
      name?: string | null,
      address?: string | null,
      longitude?: number | null,
      latitude?: number | null,
      isFavourite?: boolean | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
      Brief?:  {
        __typename: "Brief",
        id: string,
        content?: string | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
      Approval?:  {
        __typename: "Approval",
        id: string,
        approvalNumber?: number | null,
        disapprovalNumber?: number | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
      Reviews?:  {
        __typename: "Reviews",
        id: string,
        content?: string | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
    } | null,
    owner?: string | null,
  } | null,
};

export type GetSchoolQueryVariables = {
  id: string,
};

export type GetSchoolQuery = {
  getSchool?:  {
    __typename: "School",
    id: string,
    name?: string | null,
    address?: string | null,
    longitude?: number | null,
    latitude?: number | null,
    isFavourite?: boolean | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
    Brief?:  {
      __typename: "Brief",
      id: string,
      content?: string | null,
      createdAt: string,
      updatedAt: string,
      School?:  {
        __typename: "School",
        id: string,
        name?: string | null,
        address?: string | null,
        longitude?: number | null,
        latitude?: number | null,
        isFavourite?: boolean | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
      owner?: string | null,
    } | null,
    Approval?:  {
      __typename: "Approval",
      id: string,
      approvalNumber?: number | null,
      disapprovalNumber?: number | null,
      createdAt: string,
      updatedAt: string,
      School?:  {
        __typename: "School",
        id: string,
        name?: string | null,
        address?: string | null,
        longitude?: number | null,
        latitude?: number | null,
        isFavourite?: boolean | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
      owner?: string | null,
    } | null,
    Reviews?:  {
      __typename: "Reviews",
      id: string,
      content?: string | null,
      createdAt: string,
      updatedAt: string,
      School?:  {
        __typename: "School",
        id: string,
        name?: string | null,
        address?: string | null,
        longitude?: number | null,
        latitude?: number | null,
        isFavourite?: boolean | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
      owner?: string | null,
    } | null,
  } | null,
};

export type ListSchoolsQueryVariables = {
  filter?: ModelSchoolFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListSchoolsQuery = {
  listSchools?:  {
    __typename: "ModelSchoolConnection",
    items?:  Array< {
      __typename: "School",
      id: string,
      name?: string | null,
      address?: string | null,
      longitude?: number | null,
      latitude?: number | null,
      isFavourite?: boolean | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
      Brief?:  {
        __typename: "Brief",
        id: string,
        content?: string | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
      Approval?:  {
        __typename: "Approval",
        id: string,
        approvalNumber?: number | null,
        disapprovalNumber?: number | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
      Reviews?:  {
        __typename: "Reviews",
        id: string,
        content?: string | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetBriefQueryVariables = {
  id: string,
};

export type GetBriefQuery = {
  getBrief?:  {
    __typename: "Brief",
    id: string,
    content?: string | null,
    createdAt: string,
    updatedAt: string,
    School?:  {
      __typename: "School",
      id: string,
      name?: string | null,
      address?: string | null,
      longitude?: number | null,
      latitude?: number | null,
      isFavourite?: boolean | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
      Brief?:  {
        __typename: "Brief",
        id: string,
        content?: string | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
      Approval?:  {
        __typename: "Approval",
        id: string,
        approvalNumber?: number | null,
        disapprovalNumber?: number | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
      Reviews?:  {
        __typename: "Reviews",
        id: string,
        content?: string | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
    } | null,
    owner?: string | null,
  } | null,
};

export type ListBriefsQueryVariables = {
  filter?: ModelBriefFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListBriefsQuery = {
  listBriefs?:  {
    __typename: "ModelBriefConnection",
    items?:  Array< {
      __typename: "Brief",
      id: string,
      content?: string | null,
      createdAt: string,
      updatedAt: string,
      School?:  {
        __typename: "School",
        id: string,
        name?: string | null,
        address?: string | null,
        longitude?: number | null,
        latitude?: number | null,
        isFavourite?: boolean | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
      owner?: string | null,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetApprovalQueryVariables = {
  id: string,
};

export type GetApprovalQuery = {
  getApproval?:  {
    __typename: "Approval",
    id: string,
    approvalNumber?: number | null,
    disapprovalNumber?: number | null,
    createdAt: string,
    updatedAt: string,
    School?:  {
      __typename: "School",
      id: string,
      name?: string | null,
      address?: string | null,
      longitude?: number | null,
      latitude?: number | null,
      isFavourite?: boolean | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
      Brief?:  {
        __typename: "Brief",
        id: string,
        content?: string | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
      Approval?:  {
        __typename: "Approval",
        id: string,
        approvalNumber?: number | null,
        disapprovalNumber?: number | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
      Reviews?:  {
        __typename: "Reviews",
        id: string,
        content?: string | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
    } | null,
    owner?: string | null,
  } | null,
};

export type ListApprovalsQueryVariables = {
  filter?: ModelApprovalFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListApprovalsQuery = {
  listApprovals?:  {
    __typename: "ModelApprovalConnection",
    items?:  Array< {
      __typename: "Approval",
      id: string,
      approvalNumber?: number | null,
      disapprovalNumber?: number | null,
      createdAt: string,
      updatedAt: string,
      School?:  {
        __typename: "School",
        id: string,
        name?: string | null,
        address?: string | null,
        longitude?: number | null,
        latitude?: number | null,
        isFavourite?: boolean | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
      owner?: string | null,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetReviewsQueryVariables = {
  id: string,
};

export type GetReviewsQuery = {
  getReviews?:  {
    __typename: "Reviews",
    id: string,
    content?: string | null,
    createdAt: string,
    updatedAt: string,
    School?:  {
      __typename: "School",
      id: string,
      name?: string | null,
      address?: string | null,
      longitude?: number | null,
      latitude?: number | null,
      isFavourite?: boolean | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
      Brief?:  {
        __typename: "Brief",
        id: string,
        content?: string | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
      Approval?:  {
        __typename: "Approval",
        id: string,
        approvalNumber?: number | null,
        disapprovalNumber?: number | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
      Reviews?:  {
        __typename: "Reviews",
        id: string,
        content?: string | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
    } | null,
    owner?: string | null,
  } | null,
};

export type ListReviewsQueryVariables = {
  filter?: ModelReviewsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListReviewsQuery = {
  listReviews?:  {
    __typename: "ModelReviewsConnection",
    items?:  Array< {
      __typename: "Reviews",
      id: string,
      content?: string | null,
      createdAt: string,
      updatedAt: string,
      School?:  {
        __typename: "School",
        id: string,
        name?: string | null,
        address?: string | null,
        longitude?: number | null,
        latitude?: number | null,
        isFavourite?: boolean | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
      owner?: string | null,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type OnCreateSchoolSubscriptionVariables = {
  owner?: string | null,
};

export type OnCreateSchoolSubscription = {
  onCreateSchool?:  {
    __typename: "School",
    id: string,
    name?: string | null,
    address?: string | null,
    longitude?: number | null,
    latitude?: number | null,
    isFavourite?: boolean | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
    Brief?:  {
      __typename: "Brief",
      id: string,
      content?: string | null,
      createdAt: string,
      updatedAt: string,
      School?:  {
        __typename: "School",
        id: string,
        name?: string | null,
        address?: string | null,
        longitude?: number | null,
        latitude?: number | null,
        isFavourite?: boolean | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
      owner?: string | null,
    } | null,
    Approval?:  {
      __typename: "Approval",
      id: string,
      approvalNumber?: number | null,
      disapprovalNumber?: number | null,
      createdAt: string,
      updatedAt: string,
      School?:  {
        __typename: "School",
        id: string,
        name?: string | null,
        address?: string | null,
        longitude?: number | null,
        latitude?: number | null,
        isFavourite?: boolean | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
      owner?: string | null,
    } | null,
    Reviews?:  {
      __typename: "Reviews",
      id: string,
      content?: string | null,
      createdAt: string,
      updatedAt: string,
      School?:  {
        __typename: "School",
        id: string,
        name?: string | null,
        address?: string | null,
        longitude?: number | null,
        latitude?: number | null,
        isFavourite?: boolean | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
      owner?: string | null,
    } | null,
  } | null,
};

export type OnUpdateSchoolSubscriptionVariables = {
  owner?: string | null,
};

export type OnUpdateSchoolSubscription = {
  onUpdateSchool?:  {
    __typename: "School",
    id: string,
    name?: string | null,
    address?: string | null,
    longitude?: number | null,
    latitude?: number | null,
    isFavourite?: boolean | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
    Brief?:  {
      __typename: "Brief",
      id: string,
      content?: string | null,
      createdAt: string,
      updatedAt: string,
      School?:  {
        __typename: "School",
        id: string,
        name?: string | null,
        address?: string | null,
        longitude?: number | null,
        latitude?: number | null,
        isFavourite?: boolean | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
      owner?: string | null,
    } | null,
    Approval?:  {
      __typename: "Approval",
      id: string,
      approvalNumber?: number | null,
      disapprovalNumber?: number | null,
      createdAt: string,
      updatedAt: string,
      School?:  {
        __typename: "School",
        id: string,
        name?: string | null,
        address?: string | null,
        longitude?: number | null,
        latitude?: number | null,
        isFavourite?: boolean | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
      owner?: string | null,
    } | null,
    Reviews?:  {
      __typename: "Reviews",
      id: string,
      content?: string | null,
      createdAt: string,
      updatedAt: string,
      School?:  {
        __typename: "School",
        id: string,
        name?: string | null,
        address?: string | null,
        longitude?: number | null,
        latitude?: number | null,
        isFavourite?: boolean | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
      owner?: string | null,
    } | null,
  } | null,
};

export type OnDeleteSchoolSubscriptionVariables = {
  owner?: string | null,
};

export type OnDeleteSchoolSubscription = {
  onDeleteSchool?:  {
    __typename: "School",
    id: string,
    name?: string | null,
    address?: string | null,
    longitude?: number | null,
    latitude?: number | null,
    isFavourite?: boolean | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
    Brief?:  {
      __typename: "Brief",
      id: string,
      content?: string | null,
      createdAt: string,
      updatedAt: string,
      School?:  {
        __typename: "School",
        id: string,
        name?: string | null,
        address?: string | null,
        longitude?: number | null,
        latitude?: number | null,
        isFavourite?: boolean | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
      owner?: string | null,
    } | null,
    Approval?:  {
      __typename: "Approval",
      id: string,
      approvalNumber?: number | null,
      disapprovalNumber?: number | null,
      createdAt: string,
      updatedAt: string,
      School?:  {
        __typename: "School",
        id: string,
        name?: string | null,
        address?: string | null,
        longitude?: number | null,
        latitude?: number | null,
        isFavourite?: boolean | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
      owner?: string | null,
    } | null,
    Reviews?:  {
      __typename: "Reviews",
      id: string,
      content?: string | null,
      createdAt: string,
      updatedAt: string,
      School?:  {
        __typename: "School",
        id: string,
        name?: string | null,
        address?: string | null,
        longitude?: number | null,
        latitude?: number | null,
        isFavourite?: boolean | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
      owner?: string | null,
    } | null,
  } | null,
};

export type OnCreateBriefSubscriptionVariables = {
  owner?: string | null,
};

export type OnCreateBriefSubscription = {
  onCreateBrief?:  {
    __typename: "Brief",
    id: string,
    content?: string | null,
    createdAt: string,
    updatedAt: string,
    School?:  {
      __typename: "School",
      id: string,
      name?: string | null,
      address?: string | null,
      longitude?: number | null,
      latitude?: number | null,
      isFavourite?: boolean | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
      Brief?:  {
        __typename: "Brief",
        id: string,
        content?: string | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
      Approval?:  {
        __typename: "Approval",
        id: string,
        approvalNumber?: number | null,
        disapprovalNumber?: number | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
      Reviews?:  {
        __typename: "Reviews",
        id: string,
        content?: string | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
    } | null,
    owner?: string | null,
  } | null,
};

export type OnUpdateBriefSubscriptionVariables = {
  owner?: string | null,
};

export type OnUpdateBriefSubscription = {
  onUpdateBrief?:  {
    __typename: "Brief",
    id: string,
    content?: string | null,
    createdAt: string,
    updatedAt: string,
    School?:  {
      __typename: "School",
      id: string,
      name?: string | null,
      address?: string | null,
      longitude?: number | null,
      latitude?: number | null,
      isFavourite?: boolean | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
      Brief?:  {
        __typename: "Brief",
        id: string,
        content?: string | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
      Approval?:  {
        __typename: "Approval",
        id: string,
        approvalNumber?: number | null,
        disapprovalNumber?: number | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
      Reviews?:  {
        __typename: "Reviews",
        id: string,
        content?: string | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
    } | null,
    owner?: string | null,
  } | null,
};

export type OnDeleteBriefSubscriptionVariables = {
  owner?: string | null,
};

export type OnDeleteBriefSubscription = {
  onDeleteBrief?:  {
    __typename: "Brief",
    id: string,
    content?: string | null,
    createdAt: string,
    updatedAt: string,
    School?:  {
      __typename: "School",
      id: string,
      name?: string | null,
      address?: string | null,
      longitude?: number | null,
      latitude?: number | null,
      isFavourite?: boolean | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
      Brief?:  {
        __typename: "Brief",
        id: string,
        content?: string | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
      Approval?:  {
        __typename: "Approval",
        id: string,
        approvalNumber?: number | null,
        disapprovalNumber?: number | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
      Reviews?:  {
        __typename: "Reviews",
        id: string,
        content?: string | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
    } | null,
    owner?: string | null,
  } | null,
};

export type OnCreateApprovalSubscriptionVariables = {
  owner?: string | null,
};

export type OnCreateApprovalSubscription = {
  onCreateApproval?:  {
    __typename: "Approval",
    id: string,
    approvalNumber?: number | null,
    disapprovalNumber?: number | null,
    createdAt: string,
    updatedAt: string,
    School?:  {
      __typename: "School",
      id: string,
      name?: string | null,
      address?: string | null,
      longitude?: number | null,
      latitude?: number | null,
      isFavourite?: boolean | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
      Brief?:  {
        __typename: "Brief",
        id: string,
        content?: string | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
      Approval?:  {
        __typename: "Approval",
        id: string,
        approvalNumber?: number | null,
        disapprovalNumber?: number | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
      Reviews?:  {
        __typename: "Reviews",
        id: string,
        content?: string | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
    } | null,
    owner?: string | null,
  } | null,
};

export type OnUpdateApprovalSubscriptionVariables = {
  owner?: string | null,
};

export type OnUpdateApprovalSubscription = {
  onUpdateApproval?:  {
    __typename: "Approval",
    id: string,
    approvalNumber?: number | null,
    disapprovalNumber?: number | null,
    createdAt: string,
    updatedAt: string,
    School?:  {
      __typename: "School",
      id: string,
      name?: string | null,
      address?: string | null,
      longitude?: number | null,
      latitude?: number | null,
      isFavourite?: boolean | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
      Brief?:  {
        __typename: "Brief",
        id: string,
        content?: string | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
      Approval?:  {
        __typename: "Approval",
        id: string,
        approvalNumber?: number | null,
        disapprovalNumber?: number | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
      Reviews?:  {
        __typename: "Reviews",
        id: string,
        content?: string | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
    } | null,
    owner?: string | null,
  } | null,
};

export type OnDeleteApprovalSubscriptionVariables = {
  owner?: string | null,
};

export type OnDeleteApprovalSubscription = {
  onDeleteApproval?:  {
    __typename: "Approval",
    id: string,
    approvalNumber?: number | null,
    disapprovalNumber?: number | null,
    createdAt: string,
    updatedAt: string,
    School?:  {
      __typename: "School",
      id: string,
      name?: string | null,
      address?: string | null,
      longitude?: number | null,
      latitude?: number | null,
      isFavourite?: boolean | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
      Brief?:  {
        __typename: "Brief",
        id: string,
        content?: string | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
      Approval?:  {
        __typename: "Approval",
        id: string,
        approvalNumber?: number | null,
        disapprovalNumber?: number | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
      Reviews?:  {
        __typename: "Reviews",
        id: string,
        content?: string | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
    } | null,
    owner?: string | null,
  } | null,
};

export type OnCreateReviewsSubscriptionVariables = {
  owner?: string | null,
};

export type OnCreateReviewsSubscription = {
  onCreateReviews?:  {
    __typename: "Reviews",
    id: string,
    content?: string | null,
    createdAt: string,
    updatedAt: string,
    School?:  {
      __typename: "School",
      id: string,
      name?: string | null,
      address?: string | null,
      longitude?: number | null,
      latitude?: number | null,
      isFavourite?: boolean | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
      Brief?:  {
        __typename: "Brief",
        id: string,
        content?: string | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
      Approval?:  {
        __typename: "Approval",
        id: string,
        approvalNumber?: number | null,
        disapprovalNumber?: number | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
      Reviews?:  {
        __typename: "Reviews",
        id: string,
        content?: string | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
    } | null,
    owner?: string | null,
  } | null,
};

export type OnUpdateReviewsSubscriptionVariables = {
  owner?: string | null,
};

export type OnUpdateReviewsSubscription = {
  onUpdateReviews?:  {
    __typename: "Reviews",
    id: string,
    content?: string | null,
    createdAt: string,
    updatedAt: string,
    School?:  {
      __typename: "School",
      id: string,
      name?: string | null,
      address?: string | null,
      longitude?: number | null,
      latitude?: number | null,
      isFavourite?: boolean | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
      Brief?:  {
        __typename: "Brief",
        id: string,
        content?: string | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
      Approval?:  {
        __typename: "Approval",
        id: string,
        approvalNumber?: number | null,
        disapprovalNumber?: number | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
      Reviews?:  {
        __typename: "Reviews",
        id: string,
        content?: string | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
    } | null,
    owner?: string | null,
  } | null,
};

export type OnDeleteReviewsSubscriptionVariables = {
  owner?: string | null,
};

export type OnDeleteReviewsSubscription = {
  onDeleteReviews?:  {
    __typename: "Reviews",
    id: string,
    content?: string | null,
    createdAt: string,
    updatedAt: string,
    School?:  {
      __typename: "School",
      id: string,
      name?: string | null,
      address?: string | null,
      longitude?: number | null,
      latitude?: number | null,
      isFavourite?: boolean | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
      Brief?:  {
        __typename: "Brief",
        id: string,
        content?: string | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
      Approval?:  {
        __typename: "Approval",
        id: string,
        approvalNumber?: number | null,
        disapprovalNumber?: number | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
      Reviews?:  {
        __typename: "Reviews",
        id: string,
        content?: string | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
    } | null,
    owner?: string | null,
  } | null,
};
