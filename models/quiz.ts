export interface IQuestion {
  questions: { questionId: string, questionText: string },
  listOptions: IOption[]
}

export interface IOption {
  optionId: string,
  questionId: string,
  content: string
}

export interface ISelection {
  optionId: string,
  questionId: string
}

