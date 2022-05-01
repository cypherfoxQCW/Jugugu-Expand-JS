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
 * The InlineObject1 model module.
 * @module model/InlineObject1
 * @version 1.0.0
 */
class InlineObject1 {
    /**
     * @member {String} appid
     * @type {String}
     */
    appid;
    /**
     * @member {String} to
     * @type {String}
     */
    to;
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
     * Constructs a new <code>InlineObject1</code>.
     * @alias module:model/InlineObject1
     * @param appid {String} 交互APPID
     * @param to {String} 目的地址
     * @param id {String} NFT的ID
     * @param amount {String} 转移的数量
     */
    constructor(appid, to, id, amount) { 
        
        InlineObject1.initialize(this, appid, to, id, amount);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, appid, to, id, amount) { 
        obj['appid'] = appid;
        obj['to'] = to;
        obj['id'] = id;
        obj['amount'] = amount;
    }

    /**
     * Constructs a <code>InlineObject1</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineObject1} obj Optional instance to populate.
     * @return {module:model/InlineObject1} The populated <code>InlineObject1</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineObject1();

            if (data.hasOwnProperty('appid')) {
                obj['appid'] = ApiClient.convertToType(data['appid'], 'String');
            }
            if (data.hasOwnProperty('to')) {
                obj['to'] = ApiClient.convertToType(data['to'], 'String');
            }
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



export default InlineObject1;

