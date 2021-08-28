import { StatusIndicatorProps } from "evergreen-ui";

export interface IQuestionIndicatorProps extends StatusIndicatorProps {
  isCurrent?: boolean;
  isPrevious?: boolean
}