# OpenapiJsClient.DefaultApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**friendLoginPost**](DefaultApi.md#friendLoginPost) | **POST** /FriendLogin | 4.Cookie登录
[**juguguGetPhoneCodePost**](DefaultApi.md#juguguGetPhoneCodePost) | **POST** /Jugugu_GetPhoneCode | 2.获取登录短信验证码
[**jugugugGetReleaseNFT1155PNGCodePost**](DefaultApi.md#jugugugGetReleaseNFT1155PNGCodePost) | **POST** /Jugugug_GetReleaseNFT1155_PNGCode | 1.获得验证码图片
[**transferNFTPost**](DefaultApi.md#transferNFTPost) | **POST** /TransferNFT | 转移NFT
[**userNFTsPost**](DefaultApi.md#userNFTsPost) | **POST** /UserNFTs | 查询用户NFT



## friendLoginPost

> InlineResponse2002 friendLoginPost(opts)

4.Cookie登录

Cookie无感登录jugugu获取用户信息。使用CookieToken和手机号登录菊咕咕获取信息，安全考虑该方法不会获得操作等级高的token。cookietoken只有有限的操作权限。

### Example

```javascript
import OpenapiJsClient from 'openapi-js-client';

let apiInstance = new OpenapiJsClient.DefaultApi();
let opts = {
  'inlineObject4': new OpenapiJsClient.InlineObject4() // InlineObject4 | 
};
apiInstance.friendLoginPost(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inlineObject4** | [**InlineObject4**](InlineObject4.md)|  | [optional] 

### Return type

[**InlineResponse2002**](InlineResponse2002.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## juguguGetPhoneCodePost

> InlineResponse2002 juguguGetPhoneCodePost(opts)

2.获取登录短信验证码

获取登录短信验证码，验证码重复发送周期为60秒。验证码有效时间为3分钟

### Example

```javascript
import OpenapiJsClient from 'openapi-js-client';

let apiInstance = new OpenapiJsClient.DefaultApi();
let opts = {
  'inlineObject2': new OpenapiJsClient.InlineObject2() // InlineObject2 | 
};
apiInstance.juguguGetPhoneCodePost(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inlineObject2** | [**InlineObject2**](InlineObject2.md)|  | [optional] 

### Return type

[**InlineResponse2002**](InlineResponse2002.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## jugugugGetReleaseNFT1155PNGCodePost

> InlineResponse2003 jugugugGetReleaseNFT1155PNGCodePost(opts)

1.获得验证码图片

获取验证码图片，用于防止机器人。

### Example

```javascript
import OpenapiJsClient from 'openapi-js-client';

let apiInstance = new OpenapiJsClient.DefaultApi();
let opts = {
  'inlineObject3': new OpenapiJsClient.InlineObject3() // InlineObject3 | 
};
apiInstance.jugugugGetReleaseNFT1155PNGCodePost(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inlineObject3** | [**InlineObject3**](InlineObject3.md)|  | [optional] 

### Return type

[**InlineResponse2003**](InlineResponse2003.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## transferNFTPost

> InlineResponse2001 transferNFTPost(opts)

转移NFT

转移指定ID的NFT，指定数量Amount，至指定用户区块链地址

### Example

```javascript
import OpenapiJsClient from 'openapi-js-client';

let apiInstance = new OpenapiJsClient.DefaultApi();
let opts = {
  'inlineObject1': new OpenapiJsClient.InlineObject1() // InlineObject1 | 
};
apiInstance.transferNFTPost(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inlineObject1** | [**InlineObject1**](InlineObject1.md)|  | [optional] 

### Return type

[**InlineResponse2001**](InlineResponse2001.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## userNFTsPost

> InlineResponse200 userNFTsPost(opts)

查询用户NFT

查询指定合约用户徽章持有ID和对应的数量。

### Example

```javascript
import OpenapiJsClient from 'openapi-js-client';

let apiInstance = new OpenapiJsClient.DefaultApi();
let opts = {
  'inlineObject': new OpenapiJsClient.InlineObject() // InlineObject | 
};
apiInstance.userNFTsPost(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inlineObject** | [**InlineObject**](InlineObject.md)|  | [optional] 

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

