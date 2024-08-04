import React from 'react';
import { ITypographyProps } from "./Typography.types";
import { classNames } from '../helpers/styleHelpers';


const Typography = (props: ITypographyProps): JSX.Element => {
  const {
    text,
    variant,
    alignment,
    className,
    color,
    isUppercase,
    isSmall,
    "data-testid": dataTestId,
  } = props;



    switch (variant) {
      case "h1":
        return (
          <h1
            data-testid={dataTestId}
            className={classNames(
              'text-3xl font-semibold text-gray-800', 
              alignment && alignment, 
              className && className
            )}
          >
            {text}
          </h1>
        );
      case "h2":
        return (
          <h2
            data-testid={dataTestId}
            className={classNames(
              'text-2xl font-semibold text-gray-800',
               alignment && alignment, 
               className && className
            )}
          >
            {text}
          </h2>
        );
      case "h3":
        return (
          <h3
            data-testid={dataTestId}
            className={classNames(
              'text-xl font-semibold text-gray-800', 
              alignment && alignment,
              className && className
            )}
          >
            {text}
          </h3>
        );
      case "h4":
        return (
          <h4
            data-testid={dataTestId}
            className={classNames(
              'text-lg font-semibold text-gray-800',
              alignment && alignment,
              className && className
            )}
          >
            {text}
          </h4>
        );
      case "h5":
        return (
          <h5
            data-testid={dataTestId}
            className={classNames(
              'text-sm font-regular',
              alignment && alignment,
              className && className,
              color || "text-gray-600"
            )}

          >
            {text}
          </h5>
        );
      case "h6":
        return (
          <h6
            data-testid={dataTestId}
            className={classNames(
              "text-xs font-semibold tracking-wide",
              alignment && alignment,
              className && className,
              color || "text-gray-600",
              isUppercase && "uppercase"
            )}
          >
            {text}
          </h6>
        );
      case "p":
        return (
          <p
            data-testid={dataTestId}
            className={classNames(
              isSmall ? "text-xs" : "text-sm",
              color ? color : "text-gray-600",
              alignment && alignment,
              className && className
            )}
          >
            {text}
          </p>
        );
      default:
        return (
          <p
            data-testid={dataTestId}
            className={classNames(
              color ? color : "text-gray-600",
              alignment && alignment,
              className && className
            )}
          >
            {text}
          </p>
        );
    }

};

export { Typography };
