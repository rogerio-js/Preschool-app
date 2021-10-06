/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateSchool = /* GraphQL */ `
  subscription OnCreateSchool($owner: String) {
    onCreateSchool(owner: $owner) {
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
export const onUpdateSchool = /* GraphQL */ `
  subscription OnUpdateSchool($owner: String) {
    onUpdateSchool(owner: $owner) {
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
export const onDeleteSchool = /* GraphQL */ `
  subscription OnDeleteSchool($owner: String) {
    onDeleteSchool(owner: $owner) {
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
export const onCreateBrief = /* GraphQL */ `
  subscription OnCreateBrief($owner: String) {
    onCreateBrief(owner: $owner) {
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
export const onUpdateBrief = /* GraphQL */ `
  subscription OnUpdateBrief($owner: String) {
    onUpdateBrief(owner: $owner) {
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
export const onDeleteBrief = /* GraphQL */ `
  subscription OnDeleteBrief($owner: String) {
    onDeleteBrief(owner: $owner) {
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
export const onCreateApproval = /* GraphQL */ `
  subscription OnCreateApproval($owner: String) {
    onCreateApproval(owner: $owner) {
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
export const onUpdateApproval = /* GraphQL */ `
  subscription OnUpdateApproval($owner: String) {
    onUpdateApproval(owner: $owner) {
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
export const onDeleteApproval = /* GraphQL */ `
  subscription OnDeleteApproval($owner: String) {
    onDeleteApproval(owner: $owner) {
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
export const onCreateReviews = /* GraphQL */ `
  subscription OnCreateReviews($owner: String) {
    onCreateReviews(owner: $owner) {
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
export const onUpdateReviews = /* GraphQL */ `
  subscription OnUpdateReviews($owner: String) {
    onUpdateReviews(owner: $owner) {
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
export const onDeleteReviews = /* GraphQL */ `
  subscription OnDeleteReviews($owner: String) {
    onDeleteReviews(owner: $owner) {
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
