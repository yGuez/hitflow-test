export enum Types {
  Log = "LOG",
  Update = "UPDATE_USER",
}

export type UserType = {
  firstname: string;
  lastname: string;
  email: string;
};

export type InitialStateType = {
  isLogged: boolean
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

export type LogActions = {
  type: Types.Log;
  payload: boolean
};
