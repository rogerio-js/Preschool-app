/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getSchool = /* GraphQL */ `
  query GetSchool($id: ID!) {
    getSchool(id: $id) {
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
export const listSchools = /* GraphQL */ `
  query ListSchools(
    $filter: ModelSchoolFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSchools(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        address
        longitude
        latitude
        isFavourite
        createdAt
        updatedAt
        
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
      nextToken
    }
  }
`;
export const getBrief = /* GraphQL */ `
  query GetBrief($id: ID!) {
    getBrief(id: $id) {
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
export const listBriefs = /* GraphQL */ `
  query ListBriefs(
    $filter: ModelBriefFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBriefs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getApproval = /* GraphQL */ `
  query GetApproval($id: ID!) {
    getApproval(id: $id) {
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
export const listApprovals = /* GraphQL */ `
  query ListApprovals(
    $filter: ModelApprovalFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listApprovals(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getReviews = /* GraphQL */ `
  query GetReviews($id: ID!) {
    getReviews(id: $id) {
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
export const listReviews = /* GraphQL */ `
  query ListReviews(
    $filter: ModelReviewsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listReviews(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
