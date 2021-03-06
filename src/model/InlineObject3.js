/**
 * 扩展接入
 * 接入jugugu区块链全包的全部接口，访问IP需要连续管理员，添加业务服务器IP
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The InlineObject3 model module.
 * @module model/InlineObject3
 * @version 1.0.0
 */
class InlineObject3 {
    /**
     * @member {String} phone
     * @type {String}
     */
    phone;

    

    /**
     * Constructs a new <code>InlineObject3</code>.
     * @alias module:model/InlineObject3
     * @param phone {String} 该函数传“”空字符串
     */
    constructor(phone) { 
        
        InlineObject3.initialize(this, phone);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, phone) { 
        obj['phone'] = phone;
    }

    /**
     * Constructs a <code>InlineObject3</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineObject3} obj Optional instance to populate.
     * @return {module:model/InlineObject3} The populated <code>InlineObject3</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineObject3();

            if (data.hasOwnProperty('phone')) {
                obj['phone'] = ApiClient.convertToType(data['phone'], 'String');
            }
        }
        return obj;
    }
}



export default InlineObject3;

