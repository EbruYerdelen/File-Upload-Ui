import userEvent from '@testing-library/user-event';
import { render, screen, act } from '@testing-library/react'
import '@testing-library/jest-dom'
import { useForm } from 'react-hook-form'
import { Checkbox } from './Checkbox'


const checkboxGroupList = [
    { id: 1, value: 'Option 1', selected: false, visible: true },
    { id: 2, value: 'Option 2', selected: true, visible: true },
    { id: 3, value: 'Option 3', selected: false, visible: true },
];

const checkboxItem = [
    { id: 1, value: 'Option', selected: false, visible: true, disabled: false },
];

const checkboxItemNotRequired = [
    { id: 1, value: 'Option', selected: false, visible: true, required: false },
];

const checkboxItemRequired = [
    { id: 1, value: 'Option', selected: false, visible: true, required: true },
];

const checkboxItemDisabled = [
    { id: 1, value: 'Option', selected: false, visible: true, disabled: true }
];

const checkboxItemIndeterminate = [
    { id: 1, value: 'Option', selected: false, visible: true, disabled: false, indeterminate: true },
];

const checkboxItemSelectedIndeterminate = [
    { id: 1, value: 'Option', selected: true, visible: true, disabled: false, indeterminate: true },
];

const CheckboxGroupComponent = (params: any) => {
    const { control } = useForm();
    return <Checkbox
        control={control}
        name="checkbox"
        checkboxList={checkboxGroupList}
        {...params}
    />;
}

const CheckboxComponent = (params: any) => {
    const { control } = useForm();
    return <Checkbox
        control={control}
        name="checkbox"
        {...params}
    />;
}

describe('Checkbox', () => {
    it('renders without crashing', () => {
        const props = { checkboxList: checkboxItem }
        render(<CheckboxComponent {...props} />)
        checkboxItem.forEach((item) => {
            const label = screen.getByText(item.value);
            const checkbox = screen.getByTestId(item.id) as HTMLInputElement;
            expect(label).toBeInTheDocument();
            expect(checkbox).toBeInTheDocument();
            expect(checkbox.checked).toBe(item.selected);
        });
    });

    it('triggers onChange when checkbox is clicked', () => {
        const onChangeMock = jest.fn();
        const props = { onChange: onChangeMock, checkboxList: checkboxItem }
        render(<CheckboxComponent {...props} />)
        checkboxItem.forEach(async (item) => {
            const checkbox = screen.getByTestId(item.id) as HTMLInputElement;
            expect(checkbox).not.toBeChecked()

            await userEvent.click(checkbox);
            expect(checkbox).toBeChecked()
            expect(onChangeMock).toHaveBeenCalledTimes(1);
        });
    });

    it('doesn\'t triggers onChange when checkbox is disabled and clicked', () => {
        const onChangeMock = jest.fn();
        const props = { onChange: onChangeMock, checkboxList: checkboxItemDisabled }
        render(<CheckboxComponent {...props} />)
        checkboxItemDisabled.forEach((item) => {
            const checkbox = screen.getByTestId(item.id) as HTMLInputElement;
            act(() => {
                userEvent.click(checkbox);
            });
            expect(checkbox.checked).toBe(false);
            expect(onChangeMock).toHaveBeenCalledTimes(0);
        });
    });

    it('has a checkbox header label ', () => {
        const props = { checkboxHeaderLabel: 'Checkbox Header Label', checkboxList: checkboxItem }
        render(<CheckboxComponent {...props} />)
        const label = screen.getByText('Checkbox Header Label');
        expect(label).toBeInTheDocument();
    });

    it('has a checkbox header label with * when it is required ', () => {
        const props = { checkboxHeaderLabel: 'Checkbox Header Label', required: true, checkboxList: checkboxItem }
        render(<CheckboxComponent {...props} />)
        const label = screen.getByText('Checkbox Header Label');
        expect(label).toBeInTheDocument();
        const requiredSymbol = screen.getByRole('required');
        expect(requiredSymbol).toHaveClass('ml-2');
        expect(requiredSymbol).toBeInTheDocument();
    });

    it('should have vertical orientation', () => {
        const props = { orientation: 'vertical', checkboxList: checkboxGroupList }
        render(<CheckboxGroupComponent {...props} />)
        const container = screen.getByRole('container');
        expect(container).toHaveClass('flex-col ml-1');
    });

    it('should have horizontal orientation', () => {
        const props = { orientation: 'horizontal', checkboxList: checkboxGroupList }
        render(<CheckboxGroupComponent {...props} />)
        const container = screen.getByRole('container');
        expect(container).toHaveClass('flex-row mr-1');
    });

    it('should not be in the document when item is not visible', () => {
        const checkboxItemNotVisible = [{ id: 1, value: 'Option', selected: false, visible: false }];
        const props = { checkboxList: checkboxItemNotVisible }
        render(<CheckboxComponent {...props} />)
        checkboxItemNotVisible.forEach((item) => {
            const hiddenLabel = screen.queryByText(item.value);
            const hiddenCheckboxInput = screen.queryByTestId(item.id);
            expect(hiddenLabel).toBeNull();
            expect(hiddenCheckboxInput).toBeNull();
        });
    });

    it('should be reversed when it is true', () => {
        const props = { checkboxList: checkboxItem, reverse: true }
        render(<CheckboxComponent {...props} />)
        checkboxItem.forEach((item) => {
            const checkbox = screen.getByTestId(item.id) as HTMLInputElement;
            const label = screen.getByText(item.value);
            expect(checkbox).toHaveClass('ml-1 order-2 mr-4');
            expect(label).toHaveClass('mr-1 order-1');
        });
    });

    it('should not be reversed when it is false', () => {
        const props = { checkboxList: checkboxItem, reverse: false }
        render(<CheckboxComponent {...props} />)
        checkboxItem.forEach((item) => {
            const checkbox = screen.getByTestId(item.id) as HTMLInputElement;
            const label = screen.getByText(item.value);
            expect(checkbox).toHaveClass('mr-1 order-1');
            expect(label).toHaveClass('ml-1 order-2 mr-4');
        });
    });

    it('should have correct class name when variant is primary and disable prop is false', () => {
        const props = { checkboxList: checkboxItem, variant: 'primary' }
        render(<CheckboxComponent {...props} />)
        checkboxItem.forEach((item) => {
            const checkbox = screen.getByTestId(item.id) as HTMLInputElement;
            expect(checkbox).toHaveClass('accent-primary-700 hover:accent-primary-800');
        });
    });

    it('should have correct class name when variant is primary and disable prop is true', () => {
        const props = { checkboxList: checkboxItemDisabled, variant: 'primary' }
        render(<CheckboxComponent {...props} />)
        checkboxItemDisabled.forEach((item) => {
            const checkbox = screen.getByTestId(item.id) as HTMLInputElement;
            expect(checkbox).toHaveClass('accent-primary-50');
        });
    });

    it('should have correct class name when variant is secondary and disable prop is false', () => {
        const props = { checkboxList: checkboxItem, variant: 'secondary' }
        render(<CheckboxComponent {...props} />)
        checkboxItem.forEach((item) => {
            const checkbox = screen.getByTestId(item.id) as HTMLInputElement;
            expect(checkbox).toHaveClass('accent-gray-50');
        });
    });

    it('should have correct class name when variant is secondary and disable prop is true', () => {
        const props = { checkboxList: checkboxItemDisabled, variant: 'secondary' }
        render(<CheckboxComponent {...props} />)
        checkboxItemDisabled.forEach((item) => {
            const checkbox = screen.getByTestId(item.id) as HTMLInputElement;
            expect(checkbox).toHaveClass('accent-gray-300 border-gray-300 bg-transparent');
        });
    });

    it('should have correct class name when size is base', () => {
        const props = { checkboxList: checkboxItem, size: 'base' }
        render(<CheckboxComponent {...props} />)
        checkboxItem.forEach((item) => {
            const checkbox = screen.getByTestId(item.id) as HTMLInputElement;
            const label = screen.getByText(item.value);
            expect(checkbox).toHaveClass('h-5 w-5 rounded');
            expect(label).toHaveClass('text-base');
        });
    });

    it('should have correct class name when size props is not assigned', () => {
        const props = { checkboxList: checkboxItem }
        render(<CheckboxComponent {...props} />)
        checkboxItem.forEach((item) => {
            const checkbox = screen.getByTestId(item.id) as HTMLInputElement;
            const label = screen.getByText(item.value);
            expect(checkbox).toHaveClass('h-5 w-5 rounded');
            expect(label).toHaveClass('text-base');
        });
    });

    it('should have correct class name when size is small', () => {
        const props = { checkboxList: checkboxItem, size: 'small' }
        render(<CheckboxComponent {...props} />)
        checkboxItem.forEach((item) => {
            const checkbox = screen.getByTestId(item.id) as HTMLInputElement;
            const label = screen.getByText(item.value);
            expect(checkbox).toHaveClass('h-4 w-4 rounded-sm');
            expect(label).toHaveClass('text-sm');
        });
    });

    it('should have correct class name when size is xsmall', () => {
        const props = { checkboxList: checkboxItem, size: 'xsmall' }
        render(<CheckboxComponent {...props} />)
        checkboxItem.forEach((item) => {
            const checkbox = screen.getByTestId(item.id) as HTMLInputElement;
            const label = screen.getByText(item.value);
            expect(checkbox).toHaveClass('h-3 w-3 rounded-none');
            expect(label).toHaveClass('text-xs');
        });
    });

    it('should have correct class name when size is normal', () => {
        const props = { checkboxList: checkboxItem, size: 'normal' }
        render(<CheckboxComponent {...props} />)
        checkboxItem.forEach((item) => {
            const checkbox = screen.getByTestId(item.id) as HTMLInputElement;
            const label = screen.getByText(item.value);
            expect(checkbox).toHaveClass('h-6 w-6 rounded-md');
            expect(label).toHaveClass('text-lg');
        });
    });

    it('should have correct class name when size is large', () => {
        const props = { checkboxList: checkboxItem, size: 'large' }
        render(<CheckboxComponent {...props} />)
        checkboxItem.forEach((item) => {
            const checkbox = screen.getByTestId(item.id) as HTMLInputElement;
            const label = screen.getByText(item.value);
            expect(checkbox).toHaveClass('h-7 w-7 rounded-lg');
            expect(label).toHaveClass('text-xl');
        });
    });

    it('should have correct class name when checkbox item is not disabled', () => {
        const props = { checkboxList: checkboxItem }
        render(<CheckboxComponent {...props} />)
        checkboxItem.forEach((item) => {
            const checkbox = screen.getByTestId(item.id) as HTMLInputElement;
            const label = screen.getByText(item.value);
            expect(checkbox).toHaveClass('cursor-pointer');
            expect(label).toHaveClass('cursor-pointer');
        });
    });

    it('should have a checkbox item with no * when item is not required', () => {
        const props = { required: true, checkboxList: checkboxItemNotRequired }
        render(<CheckboxComponent {...props} />)
        const requiredSymbol = screen.queryByRole('required');
        expect(requiredSymbol).toBeNull();
    });

    it('should have a checkbox item with * when item is required and required prop is also required', () => {
        const props = { required: true, checkboxList: checkboxItemRequired }
        render(<CheckboxComponent {...props} />)
        const requiredSymbol = screen.queryByRole('requiredItem');
        expect(requiredSymbol).toBeInTheDocument();
    });

    it('should have indeterminate state when checkboxItem indeterminate prop is true', () => {
        const props = { checkboxList: checkboxItemIndeterminate }
        render(<CheckboxComponent {...props} />)
        checkboxItem.forEach((item) => {
            const checkbox = screen.getByTestId(item.id) as HTMLInputElement;
            expect(checkbox.indeterminate).toBe(true);
        });
    });

    it('should switch state from indeterminate to checked', () => {
        const props = { checkboxList: checkboxItemIndeterminate }
        render(<CheckboxComponent {...props} />)
        checkboxItem.forEach(async (item) => {
            const checkbox = screen.getByTestId(item.id) as HTMLInputElement;
            expect(checkbox.checked).toBe(false);
            expect(checkbox.indeterminate).toBe(true);
               
            await userEvent.click(checkbox);
            expect(checkbox.checked).toBe(true);
        });
    });

    it('should switch state from checked to indeterminate', () => {
        const props = { checkboxList: checkboxItemSelectedIndeterminate }
        render(<CheckboxComponent {...props} />)
        checkboxItem.forEach(async (item) => {
            const checkbox = screen.getByTestId(item.id) as HTMLInputElement;
            expect(checkbox.checked).toBe(true);
            expect(checkbox.indeterminate).toBe(false);
            await userEvent.click(checkbox);
            expect(checkbox.checked).toBe(false);
            expect(checkbox.indeterminate).toBe(true);
        });
    });
})

