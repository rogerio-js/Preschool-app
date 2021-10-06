/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createSchool = /* GraphQL */ `
  mutation CreateSchool(
    $input: CreateSchoolInput!
    $condition: ModelSchoolConditionInput
  ) {
    createSchool(input: $input, condition: $condition) {
      id
      name
      address
      longitude
      latitude
      isFavourite
      createdAt
      updatedAt
      owner
      Brief {
        id
        content
        createdAt
        updatedAt
        School {
          id
          name
          address
          longitude
          latitude
          isFavourite
          createdAt
          updatedAt
          owner
        }
        owner
      }
      Approval {
        id
        approvalNumber
        disapprovalNumber
        createdAt
        updatedAt
        School {
          id
          name
          address
          longitude
          latitude
          isFavourite
          createdAt
          updatedAt
          owner
        }
        owner
      }
      Reviews {
        id
        content
        createdAt
        updatedAt
        School {
          id
          name
          address
          longitude
          latitude
          isFavourite
          createdAt
          updatedAt
          owner
        }
        owner
      }
    }
  }
`;
export const updateSchool = /* GraphQL */ `
  mutation UpdateSchool(
    $input: UpdateSchoolInput!
    $condition: ModelSchoolConditionInput
  ) {
    updateSchool(input: $input, condition: $condition) {
      id
      name
      address
      longitude
      latitude
      isFavourite
      createdAt
      updatedAt
      owner
      Brief {
        id
        content
        createdAt
        updatedAt
        School {
          id
          name
          address
          longitude
          latitude
          isFavourite
          createdAt
          updatedAt
          owner
        }
        owner
      }
      Approval {
        id
        approvalNumber
        disapprovalNumber
        createdAt
        updatedAt
        School {
          id
          name
          address
          longitude
          latitude
          isFavourite
          createdAt
          updatedAt
          owner
        }
        owner
      }
      Reviews {
        id
        content
        createdAt
        updatedAt
        School {
          id
          name
          address
          longitude
          latitude
          isFavourite
          createdAt
          updatedAt
          owner
        }
        owner
      }
    }
  }
`;
export const deleteSchool = /* GraphQL */ `
  mutation DeleteSchool(
    $input: DeleteSchoolInput!
    $condition: ModelSchoolConditionInput
  ) {
    deleteSchool(input: $input, condition: $condition) {
      id
      name
      address
      longitude
      latitude
      isFavourite
      createdAt
      updatedAt
      owner
      Brief {
        id
        content
        createdAt
        updatedAt
        School {
          id
          name
          address
          longitude
          latitude
          isFavourite
          createdAt
          updatedAt
          owner
        }
        owner
      }
      Approval {
        id
        approvalNumber
        disapprovalNumber
        createdAt
        updatedAt
        School {
          id
          name
          address
          longitude
          latitude
          isFavourite
          createdAt
          updatedAt
          owner
        }
        owner
      }
      Reviews {
        id
        content
        createdAt
        updatedAt
        School {
          id
          name
          address
          longitude
          latitude
          isFavourite
          createdAt
          updatedAt
          owner
        }
        owner
      }
    }
  }
`;
export const createBrief = /* GraphQL */ `
  mutation CreateBrief(
    $input: CreateBriefInput!
    $condition: ModelBriefConditionInput
  ) {
    createBrief(input: $input, condition: $condition) {
      id
      content
      createdAt
      updatedAt
      School {
        id
        name
        address
        longitude
        latitude
        isFavourite
        createdAt
        updatedAt
        owner
        Brief {
          id
          content
          createdAt
          updatedAt
          owner
        }
        Approval {
          id
          approvalNumber
          disapprovalNumber
          createdAt
          updatedAt
          owner
        }
        Reviews {
          id
          content
          createdAt
          updatedAt
          owner
        }
      }
      owner
    }
  }
`;
export const updateBrief = /* GraphQL */ `
  mutation UpdateBrief(
    $input: UpdateBriefInput!
    $condition: ModelBriefConditionInput
  ) {
    updateBrief(input: $input, condition: $condition) {
      id
      content
      createdAt
      updatedAt
      School {
        id
        name
        address
        longitude
        latitude
        isFavourite
        createdAt
        updatedAt
        owner
        Brief {
          id
          content
          createdAt
          updatedAt
          owner
        }
        Approval {
          id
          approvalNumber
          disapprovalNumber
          createdAt
          updatedAt
          owner
        }
        Reviews {
          id
          content
          createdAt
          updatedAt
          owner
        }
      }
      owner
    }
  }
`;
export const deleteBrief = /* GraphQL */ `
  mutation DeleteBrief(
    $input: DeleteBriefInput!
    $condition: ModelBriefConditionInput
  ) {
    deleteBrief(input: $input, condition: $condition) {
      id
      content
      createdAt
      updatedAt
      School {
        id
        name
        address
        longitude
        latitude
        isFavourite
        createdAt
        updatedAt
        owner
        Brief {
          id
          content
          createdAt
          updatedAt
          owner
        }
        Approval {
          id
          approvalNumber
          disapprovalNumber
          createdAt
          updatedAt
          owner
        }
        Reviews {
          id
          content
          createdAt
          updatedAt
          owner
        }
      }
      owner
    }
  }
`;
export const createApproval = /* GraphQL */ `
  mutation CreateApproval(
    $input: CreateApprovalInput!
    $condition: ModelApprovalConditionInput
  ) {
    createApproval(input: $input, condition: $condition) {
      id
      approvalNumber
      disapprovalNumber
      createdAt
      updatedAt
      School {
        id
        name
        address
        longitude
        latitude
        isFavourite
        createdAt
        updatedAt
        owner
        Brief {
          id
          content
          createdAt
          updatedAt
          owner
        }
        Approval {
          id
          approvalNumber
          disapprovalNumber
          createdAt
          updatedAt
          owner
        }
        Reviews {
          id
          content
          createdAt
          updatedAt
          owner
        }
      }
      owner
    }
  }
`;
export const updateApproval = /* GraphQL */ `
  mutation UpdateApproval(
    $input: UpdateApprovalInput!
    $condition: ModelApprovalConditionInput
  ) {
    updateApproval(input: $input, condition: $condition) {
      id
      approvalNumber
      disapprovalNumber
      createdAt
      updatedAt
      School {
        id
        name
        address
        longitude
        latitude
        isFavourite
        createdAt
        updatedAt
        owner
        Brief {
          id
          content
          createdAt
          updatedAt
          owner
        }
        Approval {
          id
          approvalNumber
          disapprovalNumber
          createdAt
          updatedAt
          owner
        }
        Reviews {
          id
          content
          createdAt
          updatedAt
          owner
        }
      }
      owner
    }
  }
`;
export const deleteApproval = /* GraphQL */ `
  mutation DeleteApproval(
    $input: DeleteApprovalInput!
    $condition: ModelApprovalConditionInput
  ) {
    deleteApproval(input: $input, condition: $condition) {
      id
      approvalNumber
      disapprovalNumber
      createdAt
      updatedAt
      School {
        id
        name
        address
        longitude
        latitude
        isFavourite
        createdAt
        updatedAt
        owner
        Brief {
          id
          content
          createdAt
          updatedAt
          owner
        }
        Approval {
          id
          approvalNumber
          disapprovalNumber
          createdAt
          updatedAt
          owner
        }
        Reviews {
          id
          content
          createdAt
          updatedAt
          owner
        }
      }
      owner
    }
  }
`;
export const createReviews = /* GraphQL */ `
  mutation CreateReviews(
    $input: CreateReviewsInput!
    $condition: ModelReviewsConditionInput
  ) {
    createReviews(input: $input, condition: $condition) {
      id
      content
      createdAt
      updatedAt
      School {
        id
        name
        address
        longitude
        latitude
        isFavourite
        createdAt
        updatedAt
        owner
        Brief {
          id
          content
          createdAt
          updatedAt
          owner
        }
        Approval {
          id
          approvalNumber
          disapprovalNumber
          createdAt
          updatedAt
          owner
        }
        Reviews {
          id
          content
          createdAt
          updatedAt
          owner
        }
      }
      owner
    }
  }
`;
export const updateReviews = /* GraphQL */ `
  mutation UpdateReviews(
    $input: UpdateReviewsInput!
    $condition: ModelReviewsConditionInput
  ) {
    updateReviews(input: $input, condition: $condition) {
      id
      content
      createdAt
      updatedAt
      School {
        id
        name
        address
        longitude
        latitude
        isFavourite
        createdAt
        updatedAt
        owner
        Brief {
          id
          content
          createdAt
          updatedAt
          owner
        }
        Approval {
          id
          approvalNumber
          disapprovalNumber
          createdAt
          updatedAt
          owner
        }
        Reviews {
          id
          content
          createdAt
          updatedAt
          owner
        }
      }
      owner
    }
  }
`;
export const deleteReviews = /* GraphQL */ `
  mutation DeleteReviews(
    $input: DeleteReviewsInput!
    $condition: ModelReviewsConditionInput
  ) {
    deleteReviews(input: $input, condition: $condition) {
      id
      content
      createdAt
      updatedAt
      School {
        id
        name
        address
        longitude
        latitude
        isFavourite
        createdAt
        updatedAt
        owner
        Brief {
          id
          content
          createdAt
          updatedAt
          owner
        }
        Approval {
          id
          approvalNumber
          disapprovalNumber
          createdAt
          updatedAt
          owner
        }
        Reviews {
          id
          content
          createdAt
          updatedAt
          owner
        }
      }
      owner
    }
  }
`;
