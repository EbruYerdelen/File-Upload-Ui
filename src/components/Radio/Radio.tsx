import { Controller } from 'react-hook-form';

export interface Option {
  name: string;
  label: string;
  value: string | number;
}

interface RadioInputProps {
  name: string;
  option: Option;
  control: any;
  variant?: 'default' | 'custom';
  onChange?: (selected: boolean) => void; 
  checked?: boolean; 
  classname?: string;
}

const Radio = ({ name, option, control, variant = 'default', onChange,checked,classname }: RadioInputProps) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => {
        const inputId = `${name}-${option.value}`;

        const handleChange = () => {
          const isSelected = field.value !== option.value;
          field.onChange(isSelected ? option.value : null); 
          if (onChange) onChange(isSelected); 
        };

        if (variant === 'custom') {
          return (
            <div className="flex flex-row items-center gap-2 cursor-pointer">
              <input
                type='radio'
                id={inputId}
                {...field}
                value={option.value}
                checked={field.value === option.value}
                className="hidden"
                onClick={handleChange}
                onChange={handleChange}
              />
              <label
                htmlFor={inputId}
                className="flex items-center gap-2 text-xs capitalize cursor-pointer"
              >
                <span
                  className={`h-4 w-4 border rounded-full flex items-center justify-center text-xs ${
                    checked ?? field.value === option.value ? 'bg-primary-600 text-white border-primary-600' : 'bg-transparent border-gray-300'
                  }`}
                >
                    {(checked ?? field.value === option.value) && '✓'}
                </span>

                {option.label}
              </label>
            </div>
          );
        }

        return (
          <div className="flex flex-row items-center gap-2 cursor-pointer">
            <input
              type='radio'
              id={inputId}
              {...field}
              value={option.value}
              checked={checked ?? field.value === option.value} 
              className={`h-3 w-3 ${classname ? classname : ""}`}
              onClick={handleChange}
              onChange={handleChange}
            />
            <label htmlFor={inputId} className="text-xs capitalize">{option.label}</label>
          </div>
        );
      }}
    />
  );
};

export default Radio;
