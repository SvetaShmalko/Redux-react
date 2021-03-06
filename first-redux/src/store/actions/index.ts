import { CREATE_USER } from "../../constants/userAction";
import { UserItemProps } from "../../components/User";


interface CreateUserAction {
    type: typeof CREATE_USER,
    payload: UserItemProps
}

export const createUser = (
    payload: UserItemProps
): CreateUserAction => ({
    type: CREATE_USER,
    payload
});

export type UserActions = CreateUserAction;