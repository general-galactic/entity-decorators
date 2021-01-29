import BasicPropertyDescriptor from './BasicPropertyDescriptor'
import AbstractEntityDescriptor, { Class, InstanceOfClass, PROPERTY_DECORATOR_FUNC } from './AbstractEntityDescriptor'

export { PROPERTY_DECORATOR_FUNC }


export default class EntityDescriptor extends AbstractEntityDescriptor<BasicPropertyDescriptor> {
 
    static get PropertyDescriptorType(): Class {
        return BasicPropertyDescriptor
    }

    static construct( name: string, PropertyDescriptorType: Class ): EntityDescriptor {
        return new EntityDescriptor( name, PropertyDescriptorType )
    }

    static getDescriptorsForClass( target: Class ): EntityDescriptor {
        return this.getDescriptorsFor( target )
    }

    static getDescriptorsForInstance( target: InstanceOfClass ): EntityDescriptor {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        return this.getDescriptorsFor( target.constructor )
    }

}