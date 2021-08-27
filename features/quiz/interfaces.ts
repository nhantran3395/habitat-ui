import { IQuestion } from '../../models/quiz'

export interface IQuizState {
  questions: IQuestion[];
  isPending: boolean;
  isError: boolean;
};