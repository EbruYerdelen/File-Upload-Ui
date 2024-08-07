// Radio.test.jsx
import Radio, { Option } from './Radio'
import { useForm } from 'react-hook-form'
import { render, screen, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

// Mock data
const mockOption: Option = { name: 'test', label: 'Test Label', value: 'testValue' }

const renderRadioInput = (defaultValue: string | number = '') => {
  const Component = () => {
    const { control } = useForm({ defaultValues: { test: defaultValue } })
    return <Radio name='test' option={mockOption} control={control} />
  }

  return render(<Component />)
}

describe('Radio component tests', () => {
  test('renders Radio component with label', () => {
    renderRadioInput()
    expect(screen.getByLabelText('Test Label')).toBeInTheDocument()
  })

  test('checks radio input', () => {
    renderRadioInput()
    const radio = screen.getByLabelText('Test Label') as HTMLInputElement
    fireEvent.click(radio)
    expect(radio).toBeChecked()
  })

  test('clears selection on second click', async () => {
    renderRadioInput(undefined)
    const radio = screen.getByLabelText('Test Label') as HTMLInputElement
    await userEvent.click(radio)
    expect(radio).toBeChecked()
    await userEvent.click(radio)
    expect(radio).not.toBeChecked()
  })

  test('renders with default value', () => {
    renderRadioInput(mockOption.value)
    const radio = screen.getByLabelText('Test Label') as HTMLInputElement
    expect(radio).toBeChecked()
  })
})
