import BasicPropertyDescriptor from '../../lib/BasicPropertyDescriptor'
import EntityDescriptor, { PROPERTY_DECORATOR_FUNC } from '../../lib/EntityDescriptor'

/**
 * Declare type type of Array elements and sub objects
 */
export default function SubObject(): PROPERTY_DECORATOR_FUNC {
    return EntityDescriptor.collectProperty<BasicPropertyDescriptor>(({ descriptor }) => {
        if( descriptor.propertyType === Array ) throw new Error(`The SubObject decorator can only be applied to Objects. Use @ArrayItems() to decorate objects within arrays.`)
        if( !descriptor.isCustomType ) throw new Error(`The SubObject decorator can only be applied to Object properties.`)
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        descriptor.itemType = descriptor.propertyType
    })
}
