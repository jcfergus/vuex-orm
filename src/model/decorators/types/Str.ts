import Model from '../../Model'
import PropertyDecorator from '../contracts/PropertyDecorator'

interface Options {
  nullable?: boolean
}

/**
 * Create a str decorator.
 */
export default function Str(
  value: string | null,
  options: Options = {}
): PropertyDecorator {
  return (target, propertyKey) => {
    const model = target.constructor as typeof Model

    const attr = model.string(value)

    if (options.nullable) {
      attr.nullable()
    }

    model.setSchema(propertyKey, attr)
  }
}