export interface IQuestion {
  questions: { questionId: string, questionText: string },
  listOptions: IOption[]
}

interface IOption {
  optionId: string,
  questionId: string,
  content: string
}