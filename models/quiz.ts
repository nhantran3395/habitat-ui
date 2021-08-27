export interface IQuestion {
  question: { questionId: string, questionText: "string" },
  listOptions: IOption[]
}

interface IOption {
  optionId: string,
  questionId: string,
  content: string
}