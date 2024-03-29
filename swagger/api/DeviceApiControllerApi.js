/**
 * Thingsboard REST API
 * For instructions how to authorize requests please visit <a href='http://thingsboard.io/docs/reference/rest-api/'>REST API documentation page</a>.
 *
 * OpenAPI spec version: 2.0
 * Contact: info@thingsboard.io
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.0-SNAPSHOT
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/DeferredResultResponseEntity'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/DeferredResultResponseEntity'));
  } else {
    // Browser globals (root is window)
    if (!root.ThingsboardRestApi) {
      root.ThingsboardRestApi = {};
    }
    root.ThingsboardRestApi.DeviceApiControllerApi = factory(root.ThingsboardRestApi.ApiClient, root.ThingsboardRestApi.DeferredResultResponseEntity);
  }
}(this, function(ApiClient, DeferredResultResponseEntity) {
  'use strict';

  /**
   * DeviceApiController service.
   * @module api/DeviceApiControllerApi
   * @version 2.0
   */

  /**
   * Constructs a new DeviceApiControllerApi. 
   * @alias module:api/DeviceApiControllerApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the getDeviceAttributesUsingGET operation.
     * @callback module:api/DeviceApiControllerApi~getDeviceAttributesUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DeferredResultResponseEntity} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * getDeviceAttributes
     * @param {String} deviceToken deviceToken
     * @param {Object} opts Optional parameters
     * @param {String} opts.clientKeys clientKeys
     * @param {String} opts.sharedKeys sharedKeys
     * @param {module:api/DeviceApiControllerApi~getDeviceAttributesUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/DeferredResultResponseEntity}
     */
    this.getDeviceAttributesUsingGET = function(deviceToken, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'deviceToken' is set
      if (deviceToken === undefined || deviceToken === null) {
        throw new Error("Missing the required parameter 'deviceToken' when calling getDeviceAttributesUsingGET");
      }


      var pathParams = {
        'deviceToken': deviceToken
      };
      var queryParams = {
        'clientKeys': opts['clientKeys'],
        'sharedKeys': opts['sharedKeys'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['X-Authorization'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = DeferredResultResponseEntity;

      return this.apiClient.callApi(
        '/api/v1/{deviceToken}/attributes{?clientKeys,sharedKeys}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the postDeviceAttributesUsingPOST operation.
     * @callback module:api/DeviceApiControllerApi~postDeviceAttributesUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DeferredResultResponseEntity} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * postDeviceAttributes
     * @param {String} deviceToken deviceToken
     * @param {String} json json
     * @param {module:api/DeviceApiControllerApi~postDeviceAttributesUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/DeferredResultResponseEntity}
     */
    this.postDeviceAttributesUsingPOST = function(deviceToken, json, callback) {
      var postBody = json;

      // verify the required parameter 'deviceToken' is set
      if (deviceToken === undefined || deviceToken === null) {
        throw new Error("Missing the required parameter 'deviceToken' when calling postDeviceAttributesUsingPOST");
      }

      // verify the required parameter 'json' is set
      if (json === undefined || json === null) {
        throw new Error("Missing the required parameter 'json' when calling postDeviceAttributesUsingPOST");
      }


      var pathParams = {
        'deviceToken': deviceToken
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['X-Authorization'];
      var contentTypes = ['application/json'];
      var accepts = ['*/*'];
      var returnType = DeferredResultResponseEntity;

      return this.apiClient.callApi(
        '/api/v1/{deviceToken}/attributes', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the postRpcRequestUsingPOST operation.
     * @callback module:api/DeviceApiControllerApi~postRpcRequestUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DeferredResultResponseEntity} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * postRpcRequest
     * @param {String} deviceToken deviceToken
     * @param {String} json json
     * @param {module:api/DeviceApiControllerApi~postRpcRequestUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/DeferredResultResponseEntity}
     */
    this.postRpcRequestUsingPOST = function(deviceToken, json, callback) {
      var postBody = json;

      // verify the required parameter 'deviceToken' is set
      if (deviceToken === undefined || deviceToken === null) {
        throw new Error("Missing the required parameter 'deviceToken' when calling postRpcRequestUsingPOST");
      }

      // verify the required parameter 'json' is set
      if (json === undefined || json === null) {
        throw new Error("Missing the required parameter 'json' when calling postRpcRequestUsingPOST");
      }


      var pathParams = {
        'deviceToken': deviceToken
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['X-Authorization'];
      var contentTypes = ['application/json'];
      var accepts = ['*/*'];
      var returnType = DeferredResultResponseEntity;

      return this.apiClient.callApi(
        '/api/v1/{deviceToken}/rpc', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the postTelemetryUsingPOST operation.
     * @callback module:api/DeviceApiControllerApi~postTelemetryUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DeferredResultResponseEntity} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * postTelemetry
     * @param {String} deviceToken deviceToken
     * @param {String} json json
     * @param {module:api/DeviceApiControllerApi~postTelemetryUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/DeferredResultResponseEntity}
     */
    this.postTelemetryUsingPOST = function(deviceToken, json, callback) {
      var postBody = json;

      // verify the required parameter 'deviceToken' is set
      if (deviceToken === undefined || deviceToken === null) {
        throw new Error("Missing the required parameter 'deviceToken' when calling postTelemetryUsingPOST");
      }

      // verify the required parameter 'json' is set
      if (json === undefined || json === null) {
        throw new Error("Missing the required parameter 'json' when calling postTelemetryUsingPOST");
      }


      var pathParams = {
        'deviceToken': deviceToken
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['X-Authorization'];
      var contentTypes = ['application/json'];
      var accepts = ['*/*'];
      var returnType = DeferredResultResponseEntity;

      return this.apiClient.callApi(
        '/api/v1/{deviceToken}/telemetry', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the replyToCommandUsingPOST operation.
     * @callback module:api/DeviceApiControllerApi~replyToCommandUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DeferredResultResponseEntity} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * replyToCommand
     * @param {String} deviceToken deviceToken
     * @param {Number} requestId requestId
     * @param {String} json json
     * @param {module:api/DeviceApiControllerApi~replyToCommandUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/DeferredResultResponseEntity}
     */
    this.replyToCommandUsingPOST = function(deviceToken, requestId, json, callback) {
      var postBody = json;

      // verify the required parameter 'deviceToken' is set
      if (deviceToken === undefined || deviceToken === null) {
        throw new Error("Missing the required parameter 'deviceToken' when calling replyToCommandUsingPOST");
      }

      // verify the required parameter 'requestId' is set
      if (requestId === undefined || requestId === null) {
        throw new Error("Missing the required parameter 'requestId' when calling replyToCommandUsingPOST");
      }

      // verify the required parameter 'json' is set
      if (json === undefined || json === null) {
        throw new Error("Missing the required parameter 'json' when calling replyToCommandUsingPOST");
      }


      var pathParams = {
        'deviceToken': deviceToken,
        'requestId': requestId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['X-Authorization'];
      var contentTypes = ['application/json'];
      var accepts = ['*/*'];
      var returnType = DeferredResultResponseEntity;

      return this.apiClient.callApi(
        '/api/v1/{deviceToken}/rpc/{requestId}', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the subscribeToAttributesUsingGET operation.
     * @callback module:api/DeviceApiControllerApi~subscribeToAttributesUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DeferredResultResponseEntity} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * subscribeToAttributes
     * @param {String} deviceToken deviceToken
     * @param {Object} opts Optional parameters
     * @param {Number} opts.timeout timeout (default to 0)
     * @param {module:api/DeviceApiControllerApi~subscribeToAttributesUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/DeferredResultResponseEntity}
     */
    this.subscribeToAttributesUsingGET = function(deviceToken, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'deviceToken' is set
      if (deviceToken === undefined || deviceToken === null) {
        throw new Error("Missing the required parameter 'deviceToken' when calling subscribeToAttributesUsingGET");
      }


      var pathParams = {
        'deviceToken': deviceToken
      };
      var queryParams = {
        'timeout': opts['timeout'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['X-Authorization'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = DeferredResultResponseEntity;

      return this.apiClient.callApi(
        '/api/v1/{deviceToken}/attributes/updates{?timeout}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the subscribeToCommandsUsingGET operation.
     * @callback module:api/DeviceApiControllerApi~subscribeToCommandsUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DeferredResultResponseEntity} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * subscribeToCommands
     * @param {String} deviceToken deviceToken
     * @param {Object} opts Optional parameters
     * @param {Number} opts.timeout timeout (default to 0)
     * @param {module:api/DeviceApiControllerApi~subscribeToCommandsUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/DeferredResultResponseEntity}
     */
    this.subscribeToCommandsUsingGET = function(deviceToken, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'deviceToken' is set
      if (deviceToken === undefined || deviceToken === null) {
        throw new Error("Missing the required parameter 'deviceToken' when calling subscribeToCommandsUsingGET");
      }


      var pathParams = {
        'deviceToken': deviceToken
      };
      var queryParams = {
        'timeout': opts['timeout'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['X-Authorization'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = DeferredResultResponseEntity;

      return this.apiClient.callApi(
        '/api/v1/{deviceToken}/rpc{?timeout}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
