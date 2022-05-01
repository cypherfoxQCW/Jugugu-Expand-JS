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
 * The InlineResponse2002 model module.
 * @module model/InlineResponse2002
 * @version 1.0.0
 */
class InlineResponse2002 {
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
     * @member {String} phone
     * @type {String}
     */
    phone;
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
     * @member {String} confluxaddress
     * @type {String}
     */
    confluxaddress;
    /**
     * @member {String} ethaddress
     * @type {String}
     */
    ethaddress;
    /**
     * @member {String} token
     * @type {String}
     */
    token;
    /**
     * @member {String} cookietoken
     * @type {String}
     */
    cookietoken;

    

    /**
     * Constructs a new <code>InlineResponse2002</code>.
     * @alias module:model/InlineResponse2002
     * @param state {String} -1代表错误 1代表成功 0代表提示
     * @param msg {String} 状态码对应的详细信息
     * @param phone {String} 手机号
     * @param virifycodeid {String} 验证码图片ID
     * @param virifyimage {String} 验证码图片数据data:image/png;base64,格式
     * @param confluxaddress {String} 树图区块链地址
     * @param ethaddress {String} 以太坊及其侧链地址
     * @param token {String} 登录成功后获得的令牌，用于jugugu其他各类操作
     * @param cookietoken {String} cookie无感登录的令牌
     */
    constructor(state, msg, phone, virifycodeid, virifyimage, confluxaddress, ethaddress, token, cookietoken) { 
        
        InlineResponse2002.initialize(this, state, msg, phone, virifycodeid, virifyimage, confluxaddress, ethaddress, token, cookietoken);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, state, msg, phone, virifycodeid, virifyimage, confluxaddress, ethaddress, token, cookietoken) { 
        obj['state'] = state;
        obj['msg'] = msg;
        obj['phone'] = phone;
        obj['virifycodeid'] = virifycodeid;
        obj['virifyimage'] = virifyimage;
        obj['confluxaddress'] = confluxaddress;
        obj['ethaddress'] = ethaddress;
        obj['token'] = token;
        obj['cookietoken'] = cookietoken;
    }

    /**
     * Constructs a <code>InlineResponse2002</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse2002} obj Optional instance to populate.
     * @return {module:model/InlineResponse2002} The populated <code>InlineResponse2002</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse2002();

            if (data.hasOwnProperty('state')) {
                obj['state'] = ApiClient.convertToType(data['state'], 'String');
            }
            if (data.hasOwnProperty('msg')) {
                obj['msg'] = ApiClient.convertToType(data['msg'], 'String');
            }
            if (data.hasOwnProperty('phone')) {
                obj['phone'] = ApiClient.convertToType(data['phone'], 'String');
            }
            if (data.hasOwnProperty('virifycodeid')) {
                obj['virifycodeid'] = ApiClient.convertToType(data['virifycodeid'], 'String');
            }
            if (data.hasOwnProperty('virifyimage')) {
                obj['virifyimage'] = ApiClient.convertToType(data['virifyimage'], 'String');
            }
            if (data.hasOwnProperty('confluxaddress')) {
                obj['confluxaddress'] = ApiClient.convertToType(data['confluxaddress'], 'String');
            }
            if (data.hasOwnProperty('ethaddress')) {
                obj['ethaddress'] = ApiClient.convertToType(data['ethaddress'], 'String');
            }
            if (data.hasOwnProperty('token')) {
                obj['token'] = ApiClient.convertToType(data['token'], 'String');
            }
            if (data.hasOwnProperty('cookietoken')) {
                obj['cookietoken'] = ApiClient.convertToType(data['cookietoken'], 'String');
            }
        }
        return obj;
    }
}



export default InlineResponse2002;

