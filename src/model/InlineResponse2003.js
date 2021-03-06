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
 * The InlineResponse2003 model module.
 * @module model/InlineResponse2003
 * @version 1.0.0
 */
class InlineResponse2003 {
    /**
     * @member {String} state
     * @type {String}
     */
    state;
    /**
     * @member {String} msg
     * @type {String}
     */
    msg;
    /**
     * @member {String} virifycodeid
     * @type {String}
     */
    virifycodeid;
    /**
     * @member {String} virifyimage
     * @type {String}
     */
    virifyimage;

    

    /**
     * Constructs a new <code>InlineResponse2003</code>.
     * @alias module:model/InlineResponse2003
     * @param state {String} -1代表错误 1代表成功 0代表提示
     * @param msg {String} 状态码对应的详细信息
     * @param virifycodeid {String} 验证码图片ID
     * @param virifyimage {String} 验证码图片数据data:image/png;base64,格式
     */
    constructor(state, msg, virifycodeid, virifyimage) { 
        
        InlineResponse2003.initialize(this, state, msg, virifycodeid, virifyimage);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, state, msg, virifycodeid, virifyimage) { 
        obj['state'] = state;
        obj['msg'] = msg;
        obj['virifycodeid'] = virifycodeid;
        obj['virifyimage'] = virifyimage;
    }

    /**
     * Constructs a <code>InlineResponse2003</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse2003} obj Optional instance to populate.
     * @return {module:model/InlineResponse2003} The populated <code>InlineResponse2003</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse2003();

            if (data.hasOwnProperty('state')) {
                obj['state'] = ApiClient.convertToType(data['state'], 'String');
            }
            if (data.hasOwnProperty('msg')) {
                obj['msg'] = ApiClient.convertToType(data['msg'], 'String');
            }
            if (data.hasOwnProperty('virifycodeid')) {
                obj['virifycodeid'] = ApiClient.convertToType(data['virifycodeid'], 'String');
            }
            if (data.hasOwnProperty('virifyimage')) {
                obj['virifyimage'] = ApiClient.convertToType(data['virifyimage'], 'String');
            }
        }
        return obj;
    }
}



export default InlineResponse2003;

