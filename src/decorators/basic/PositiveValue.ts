import BasicPropertyDescriptor from '../../lib/BasicPropertyDescriptor'
import PropertyCollector, { PROPERTY_DECORATOR_FUNC } from '../../lib/PropertyCollector'

/**
 * Property should always be a negative number
 */
export default function PositiveValue(): PROPERTY_DECORATOR_FUNC {
    return PropertyCollector.collectProperty( BasicPropertyDescriptor, (descriptor: BasicPropertyDescriptor) => {
        if( descriptor.propertyType !== Number ) throw new Error(`The PositiveValue decorator can only be applied to number properties.`)
        descriptor.positiveValue = true
    })
}