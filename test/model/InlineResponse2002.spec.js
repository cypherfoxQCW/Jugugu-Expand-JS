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

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.OpenapiJsClient);
  }
}(this, function(expect, OpenapiJsClient) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new OpenapiJsClient.InlineResponse2002();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('InlineResponse2002', function() {
    it('should create an instance of InlineResponse2002', function() {
      // uncomment below and update the code to test InlineResponse2002
      //var instane = new OpenapiJsClient.InlineResponse2002();
      //expect(instance).to.be.a(OpenapiJsClient.InlineResponse2002);
    });

    it('should have the property state (base name: "state")', function() {
      // uncomment below and update the code to test the property state
      //var instane = new OpenapiJsClient.InlineResponse2002();
      //expect(instance).to.be();
    });

    it('should have the property msg (base name: "msg")', function() {
      // uncomment below and update the code to test the property msg
      //var instane = new OpenapiJsClient.InlineResponse2002();
      //expect(instance).to.be();
    });

    it('should have the property phone (base name: "phone")', function() {
      // uncomment below and update the code to test the property phone
      //var instane = new OpenapiJsClient.InlineResponse2002();
      //expect(instance).to.be();
    });

    it('should have the property virifycodeid (base name: "virifycodeid")', function() {
      // uncomment below and update the code to test the property virifycodeid
      //var instane = new OpenapiJsClient.InlineResponse2002();
      //expect(instance).to.be();
    });

    it('should have the property virifyimage (base name: "virifyimage")', function() {
      // uncomment below and update the code to test the property virifyimage
      //var instane = new OpenapiJsClient.InlineResponse2002();
      //expect(instance).to.be();
    });

    it('should have the property confluxaddress (base name: "confluxaddress")', function() {
      // uncomment below and update the code to test the property confluxaddress
      //var instane = new OpenapiJsClient.InlineResponse2002();
      //expect(instance).to.be();
    });

    it('should have the property ethaddress (base name: "ethaddress")', function() {
      // uncomment below and update the code to test the property ethaddress
      //var instane = new OpenapiJsClient.InlineResponse2002();
      //expect(instance).to.be();
    });

    it('should have the property token (base name: "token")', function() {
      // uncomment below and update the code to test the property token
      //var instane = new OpenapiJsClient.InlineResponse2002();
      //expect(instance).to.be();
    });

    it('should have the property cookietoken (base name: "cookietoken")', function() {
      // uncomment below and update the code to test the property cookietoken
      //var instane = new OpenapiJsClient.InlineResponse2002();
      //expect(instance).to.be();
    });

  });

}));
