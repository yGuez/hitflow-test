export enum Types {
  Login = "LOGIN",
  LoginSuccess = "LOGIN_SUCCESS",
  LoginFail = "LOGIN_FAIL",
  Update = "UPDATE_USER",
}

export type UserType = {
  firstname: string;
  lastname: string;
  email: string;
};

export type InitialStateType = {
  isLogged: boolean;
  isLoading: boolean,
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
  type: Types.Login;
  payload: boolean;
};

export type LogActionsSuccess = {
  type: Types.LoginSuccess;
  payload: boolean;
};
export type LogActionsFail = {
  type: Types.LoginFail;
  payload: boolean;
};
