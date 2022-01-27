import { ActionType } from "../action-types/index";

interface DepositAction {
  type: ActionType.DEPOSIT;
  payload: number;
}
interface WithdrawAction {
  type: ActionType.WITHDRAW;
  payload: number;
}
interface Bankrupt {
  type: ActionType.BANKRUPT;
}

export type Action = DepositAction | WithdrawAction | Bankrupt;
