import { IUiOrientation, IUiSize, IUiVariant } from "../../interfaces";

export interface CheckboxList {
    id:number,
    disabled?: boolean,
    selected: boolean,
    visible: boolean,
    value: string,
    required?: boolean,
    indeterminate?: boolean,
  }

export interface ICheckboxProps {
    checkboxList: CheckboxList[];
    name: string,
    control: any,
    size: IUiSize,
    checkboxHeaderLabel?: string,
    orientation?: IUiOrientation,
    reverse?: boolean,
    variant?: IUiVariant,
    onChange?: (value: number[]) => void,
    required?: boolean,
    'data-testid'?: string
}