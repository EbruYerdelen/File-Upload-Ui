export type TypographyVariant = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p"
export type IUiAlignment=  "left-left" | "text-center" | "text-right"

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