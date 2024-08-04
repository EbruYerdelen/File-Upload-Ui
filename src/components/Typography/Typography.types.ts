import { IUiAlignment, TypographyVariant } from "../../interfaces"

export interface ITypographyProps {
    variant?: TypographyVariant
    text: string
    className?: string
    alignment?: IUiAlignment
    color?: string
    isUppercase?: boolean
    isSmall?: boolean
    "data-testid"?: string

}