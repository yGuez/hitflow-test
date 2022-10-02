export enum Types {
  Update = "UPDATE_USER",
}

export type UserType = {
  firstname: string;
  lastname: string;
  email: string;
};

export type InitialStateType = {
  user: UserType;
};

export type UserActions = {
  type: Types.Update;
  payload: {
    firstname: string;
    lastname: string;
    email: string;
  };
};
