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



import ApiClient from "../ApiClient";
import InlineObject from '../model/InlineObject';
import InlineObject1 from '../model/InlineObject1';
import InlineObject2 from '../model/InlineObject2';
import InlineObject3 from '../model/InlineObject3';
import InlineObject4 from '../model/InlineObject4';
import InlineResponse200 from '../model/InlineResponse200';
import InlineResponse2001 from '../model/InlineResponse2001';
import InlineResponse2002 from '../model/InlineResponse2002';
import InlineResponse2003 from '../model/InlineResponse2003';

/**
*  service.
* @module api/DefaultApi
* @version 1.0.0
*/
export default class DefaultApi extends ApiClient {

    /**
    * Constructs a new DefaultApi. 
    * @alias module:api/DefaultApi
    * @class
    */
    constructor() {
      super();
      this.baseURL = null;
    }


    /**
     * 4.Cookie登录
     * Cookie无感登录jugugu获取用户信息。使用CookieToken和手机号登录菊咕咕获取信息，安全考虑该方法不会获得操作等级高的token。cookietoken只有有限的操作权限。
     * @param {Object} opts Optional parameters
     * @param {InlineObject4} opts.inlineObject4 
     * @return {Promise<InlineResponse2002>}
     */
    async friendLoginPost(opts) {
      opts = opts || {};
      let postBody = opts['inlineObject4'];

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = InlineResponse2002;

      return this.callApi(
        '/FriendLogin', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * 2.获取登录短信验证码
     * 获取登录短信验证码，验证码重复发送周期为60秒。验证码有效时间为3分钟
     * @param {Object} opts Optional parameters
     * @param {InlineObject2} opts.inlineObject2 
     * @return {Promise<InlineResponse2002>}
     */
    async juguguGetPhoneCodePost(opts) {
      opts = opts || {};
      let postBody = opts['inlineObject2'];

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = InlineResponse2002;

      return this.callApi(
        '/Jugugu_GetPhoneCode', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * 1.获得验证码图片
     * 获取验证码图片，用于防止机器人。
     * @param {Object} opts Optional parameters
     * @param {InlineObject3} opts.inlineObject3 
     * @return {Promise<InlineResponse2003>}
     */
    async jugugugGetReleaseNFT1155PNGCodePost(opts) {
      opts = opts || {};
      let postBody = opts['inlineObject3'];

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = InlineResponse2003;

      return this.callApi(
        '/Jugugug_GetReleaseNFT1155_PNGCode', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * 转移NFT
     * 转移指定ID的NFT，指定数量Amount，至指定用户区块链地址
     * @param {Object} opts Optional parameters
     * @param {InlineObject1} opts.inlineObject1 
     * @return {Promise<InlineResponse2001>}
     */
    async transferNFTPost(opts) {
      opts = opts || {};
      let postBody = opts['inlineObject1'];

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = InlineResponse2001;

      return this.callApi(
        '/TransferNFT', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * 查询用户NFT
     * 查询指定合约用户徽章持有ID和对应的数量。
     * @param {Object} opts Optional parameters
     * @param {InlineObject} opts.inlineObject 
     * @return {Promise<InlineResponse200>}
     */
    async userNFTsPost(opts) {
      opts = opts || {};
      let postBody = opts['inlineObject'];

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = InlineResponse200;

      return this.callApi(
        '/UserNFTs', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


}
