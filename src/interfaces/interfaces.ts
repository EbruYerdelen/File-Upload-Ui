import * as Icons from "@phosphor-icons/react"

export type IUiSize = "small" | "normal" | "large" | "base" | "xsmall" | undefined
export type IUiWeight = "light" | "normal" | "bold"
export type IUiColor = "primary" | "secondary" | "success" | "danger" | "warning" | "info" | "light" | "dark" | "white" | "black" | "muted" | "white-50" | "transparent"
export type IUiAllVariant = IUiVariant | "success" | "danger" | "warning" | "info" | "light" | "dark" | "white" | "black" | "muted" | "white-50" | "transparent"
export type IUiAlignment=  "left-left" | "text-center" | "text-right"
export type IUiIconPosition = "left" | "right"
export type IUiTooltipPosition = "top" | "bottom" | "left" | "right"
export type IUiOrientation = "vertical" |  "horizontal"
export type IUiButtonVariant = "primary" | "secondary" | "tertiary"
export type IUiButtonSize = "small" | "normal" | "large" | "base" | "xsmall"
export type IUiButtonWeight = "light" | "normal" | "bold"
export type IUiButtonType = "submit" | "button"
export type IUiInputVariant = "small" | "large" | "default"
export type IUiVariant = "primary" | "secondary"
export type IUiShape = "square" | "circle"
export type TypographyVariant = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p"
export type IconName = keyof typeof Icons;
