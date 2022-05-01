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
 * The InlineResponse200Nfts model module.
 * @module model/InlineResponse200Nfts
 * @version 1.0.0
 */
class InlineResponse200Nfts {
    /**
     * @member {String} id
     * @type {String}
     */
    id;
    /**
     * @member {String} amount
     * @type {String}
     */
    amount;

    

    /**
     * Constructs a new <code>InlineResponse200Nfts</code>.
     * @alias module:model/InlineResponse200Nfts
     */
    constructor() { 
        
        InlineResponse200Nfts.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse200Nfts</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse200Nfts} obj Optional instance to populate.
     * @return {module:model/InlineResponse200Nfts} The populated <code>InlineResponse200Nfts</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse200Nfts();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('amount')) {
                obj['amount'] = ApiClient.convertToType(data['amount'], 'String');
            }
        }
        return obj;
    }
}



export default InlineResponse200Nfts;
