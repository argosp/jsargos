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
    define(['ApiClient', 'model/Device', 'model/DeviceCredentials', 'model/DeviceSearchQuery', 'model/EntitySubtype', 'model/TextPageDataDevice'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Device'), require('../model/DeviceCredentials'), require('../model/DeviceSearchQuery'), require('../model/EntitySubtype'), require('../model/TextPageDataDevice'));
  } else {
    // Browser globals (root is window)
    if (!root.ThingsboardRestApi) {
      root.ThingsboardRestApi = {};
    }
    root.ThingsboardRestApi.DeviceControllerApi = factory(root.ThingsboardRestApi.ApiClient, root.ThingsboardRestApi.Device, root.ThingsboardRestApi.DeviceCredentials, root.ThingsboardRestApi.DeviceSearchQuery, root.ThingsboardRestApi.EntitySubtype, root.ThingsboardRestApi.TextPageDataDevice);
  }
}(this, function(ApiClient, Device, DeviceCredentials, DeviceSearchQuery, EntitySubtype, TextPageDataDevice) {
  'use strict';

  /**
   * DeviceController service.
   * @module api/DeviceControllerApi
   * @version 2.0
   */

  /**
   * Constructs a new DeviceControllerApi. 
   * @alias module:api/DeviceControllerApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the assignDeviceToCustomerUsingPOST operation.
     * @callback module:api/DeviceControllerApi~assignDeviceToCustomerUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Device} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * assignDeviceToCustomer
     * @param {String} customerId customerId
     * @param {String} deviceId deviceId
     * @param {module:api/DeviceControllerApi~assignDeviceToCustomerUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Device}
     */
    this.assignDeviceToCustomerUsingPOST = function(customerId, deviceId, callback) {
      var postBody = null;

      // verify the required parameter 'customerId' is set
      if (customerId === undefined || customerId === null) {
        throw new Error("Missing the required parameter 'customerId' when calling assignDeviceToCustomerUsingPOST");
      }

      // verify the required parameter 'deviceId' is set
      if (deviceId === undefined || deviceId === null) {
        throw new Error("Missing the required parameter 'deviceId' when calling assignDeviceToCustomerUsingPOST");
      }


      var pathParams = {
        'customerId': customerId,
        'deviceId': deviceId
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
      var returnType = Device;

      return this.apiClient.callApi(
        '/api/customer/{customerId}/device/{deviceId}', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the assignDeviceToPublicCustomerUsingPOST operation.
     * @callback module:api/DeviceControllerApi~assignDeviceToPublicCustomerUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Device} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * assignDeviceToPublicCustomer
     * @param {String} deviceId deviceId
     * @param {module:api/DeviceControllerApi~assignDeviceToPublicCustomerUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Device}
     */
    this.assignDeviceToPublicCustomerUsingPOST = function(deviceId, callback) {
      var postBody = null;

      // verify the required parameter 'deviceId' is set
      if (deviceId === undefined || deviceId === null) {
        throw new Error("Missing the required parameter 'deviceId' when calling assignDeviceToPublicCustomerUsingPOST");
      }


      var pathParams = {
        'deviceId': deviceId
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
      var returnType = Device;

      return this.apiClient.callApi(
        '/api/customer/public/device/{deviceId}', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteDeviceUsingDELETE operation.
     * @callback module:api/DeviceControllerApi~deleteDeviceUsingDELETECallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * deleteDevice
     * @param {String} deviceId deviceId
     * @param {module:api/DeviceControllerApi~deleteDeviceUsingDELETECallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteDeviceUsingDELETE = function(deviceId, callback) {
      var postBody = null;

      // verify the required parameter 'deviceId' is set
      if (deviceId === undefined || deviceId === null) {
        throw new Error("Missing the required parameter 'deviceId' when calling deleteDeviceUsingDELETE");
      }


      var pathParams = {
        'deviceId': deviceId
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
      var returnType = null;

      return this.apiClient.callApi(
        '/api/device/{deviceId}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the findByQueryUsingPOST1 operation.
     * @callback module:api/DeviceControllerApi~findByQueryUsingPOST1Callback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Device>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * findByQuery
     * @param {module:model/DeviceSearchQuery} query query
     * @param {module:api/DeviceControllerApi~findByQueryUsingPOST1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Device>}
     */
    this.findByQueryUsingPOST1 = function(query, callback) {
      var postBody = query;

      // verify the required parameter 'query' is set
      if (query === undefined || query === null) {
        throw new Error("Missing the required parameter 'query' when calling findByQueryUsingPOST1");
      }


      var pathParams = {
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
      var returnType = [Device];

      return this.apiClient.callApi(
        '/api/devices', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getCustomerDevicesUsingGET operation.
     * @callback module:api/DeviceControllerApi~getCustomerDevicesUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TextPageDataDevice} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * getCustomerDevices
     * @param {String} customerId customerId
     * @param {String} limit limit
     * @param {Object} opts Optional parameters
     * @param {String} opts.type type
     * @param {String} opts.textSearch textSearch
     * @param {String} opts.idOffset idOffset
     * @param {String} opts.textOffset textOffset
     * @param {module:api/DeviceControllerApi~getCustomerDevicesUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/TextPageDataDevice}
     */
    this.getCustomerDevicesUsingGET = function(customerId, limit, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'customerId' is set
      if (customerId === undefined || customerId === null) {
        throw new Error("Missing the required parameter 'customerId' when calling getCustomerDevicesUsingGET");
      }

      // verify the required parameter 'limit' is set
      if (limit === undefined || limit === null) {
        throw new Error("Missing the required parameter 'limit' when calling getCustomerDevicesUsingGET");
      }


      var pathParams = {
        'customerId': customerId
      };
      var queryParams = {
        'type': opts['type'],
        'textSearch': opts['textSearch'],
        'idOffset': opts['idOffset'],
        'textOffset': opts['textOffset'],
        'limit': limit,
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
      var returnType = TextPageDataDevice;

      return this.apiClient.callApi(
        '/api/customer/{customerId}/devices{?type,textSearch,idOffset,textOffset,limit}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getDeviceByIdUsingGET operation.
     * @callback module:api/DeviceControllerApi~getDeviceByIdUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Device} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * getDeviceById
     * @param {String} deviceId deviceId
     * @param {module:api/DeviceControllerApi~getDeviceByIdUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Device}
     */
    this.getDeviceByIdUsingGET = function(deviceId, callback) {
      var postBody = null;

      // verify the required parameter 'deviceId' is set
      if (deviceId === undefined || deviceId === null) {
        throw new Error("Missing the required parameter 'deviceId' when calling getDeviceByIdUsingGET");
      }


      var pathParams = {
        'deviceId': deviceId
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
      var returnType = Device;

      return this.apiClient.callApi(
        '/api/device/{deviceId}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getDeviceCredentialsByDeviceIdUsingGET operation.
     * @callback module:api/DeviceControllerApi~getDeviceCredentialsByDeviceIdUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DeviceCredentials} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * getDeviceCredentialsByDeviceId
     * @param {String} deviceId deviceId
     * @param {module:api/DeviceControllerApi~getDeviceCredentialsByDeviceIdUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/DeviceCredentials}
     */
    this.getDeviceCredentialsByDeviceIdUsingGET = function(deviceId, callback) {
      var postBody = null;

      // verify the required parameter 'deviceId' is set
      if (deviceId === undefined || deviceId === null) {
        throw new Error("Missing the required parameter 'deviceId' when calling getDeviceCredentialsByDeviceIdUsingGET");
      }


      var pathParams = {
        'deviceId': deviceId
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
      var returnType = DeviceCredentials;

      return this.apiClient.callApi(
        '/api/device/{deviceId}/credentials', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getDeviceTypesUsingGET operation.
     * @callback module:api/DeviceControllerApi~getDeviceTypesUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/EntitySubtype>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * getDeviceTypes
     * @param {module:api/DeviceControllerApi~getDeviceTypesUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/EntitySubtype>}
     */
    this.getDeviceTypesUsingGET = function(callback) {
      var postBody = null;


      var pathParams = {
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
      var returnType = [EntitySubtype];

      return this.apiClient.callApi(
        '/api/device/types', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getDevicesByIdsUsingGET operation.
     * @callback module:api/DeviceControllerApi~getDevicesByIdsUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Device>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * getDevicesByIds
     * @param {String} deviceIds deviceIds
     * @param {module:api/DeviceControllerApi~getDevicesByIdsUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Device>}
     */
    this.getDevicesByIdsUsingGET = function(deviceIds, callback) {
      var postBody = null;

      // verify the required parameter 'deviceIds' is set
      if (deviceIds === undefined || deviceIds === null) {
        throw new Error("Missing the required parameter 'deviceIds' when calling getDevicesByIdsUsingGET");
      }


      var pathParams = {
      };
      var queryParams = {
        'deviceIds': deviceIds,
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
      var returnType = [Device];

      return this.apiClient.callApi(
        '/api/devices{?deviceIds}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getTenantDeviceUsingGET operation.
     * @callback module:api/DeviceControllerApi~getTenantDeviceUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Device} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * getTenantDevice
     * @param {String} deviceName deviceName
     * @param {module:api/DeviceControllerApi~getTenantDeviceUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Device}
     */
    this.getTenantDeviceUsingGET = function(deviceName, callback) {
      var postBody = null;

      // verify the required parameter 'deviceName' is set
      if (deviceName === undefined || deviceName === null) {
        throw new Error("Missing the required parameter 'deviceName' when calling getTenantDeviceUsingGET");
      }


      var pathParams = {
      };
      var queryParams = {
        'deviceName': deviceName,
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
      var returnType = Device;

      return this.apiClient.callApi(
        '/api/tenant/devices{?deviceName}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getTenantDevicesUsingGET operation.
     * @callback module:api/DeviceControllerApi~getTenantDevicesUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TextPageDataDevice} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * getTenantDevices
     * @param {String} limit limit
     * @param {Object} opts Optional parameters
     * @param {String} opts.type type
     * @param {String} opts.textSearch textSearch
     * @param {String} opts.idOffset idOffset
     * @param {String} opts.textOffset textOffset
     * @param {module:api/DeviceControllerApi~getTenantDevicesUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/TextPageDataDevice}
     */
    this.getTenantDevicesUsingGET = function(limit, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'limit' is set
      if (limit === undefined || limit === null) {
        throw new Error("Missing the required parameter 'limit' when calling getTenantDevicesUsingGET");
      }


      var pathParams = {
      };
      var queryParams = {
        'type': opts['type'],
        'textSearch': opts['textSearch'],
        'idOffset': opts['idOffset'],
        'textOffset': opts['textOffset'],
        'limit': limit,
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
      var returnType = TextPageDataDevice;

      return this.apiClient.callApi(
        '/api/tenant/devices{?type,textSearch,idOffset,textOffset,limit}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the saveDeviceCredentialsUsingPOST operation.
     * @callback module:api/DeviceControllerApi~saveDeviceCredentialsUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DeviceCredentials} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * saveDeviceCredentials
     * @param {module:model/DeviceCredentials} deviceCredentials deviceCredentials
     * @param {module:api/DeviceControllerApi~saveDeviceCredentialsUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/DeviceCredentials}
     */
    this.saveDeviceCredentialsUsingPOST = function(deviceCredentials, callback) {
      var postBody = deviceCredentials;

      // verify the required parameter 'deviceCredentials' is set
      if (deviceCredentials === undefined || deviceCredentials === null) {
        throw new Error("Missing the required parameter 'deviceCredentials' when calling saveDeviceCredentialsUsingPOST");
      }


      var pathParams = {
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
      var returnType = DeviceCredentials;

      return this.apiClient.callApi(
        '/api/device/credentials', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the saveDeviceUsingPOST operation.
     * @callback module:api/DeviceControllerApi~saveDeviceUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Device} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * saveDevice
     * @param {module:model/Device} device device
     * @param {module:api/DeviceControllerApi~saveDeviceUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Device}
     */
    this.saveDeviceUsingPOST = function(device, callback) {
      var postBody = device;

      // verify the required parameter 'device' is set
      if (device === undefined || device === null) {
        throw new Error("Missing the required parameter 'device' when calling saveDeviceUsingPOST");
      }


      var pathParams = {
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
      var returnType = Device;

      return this.apiClient.callApi(
        '/api/device', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the unassignDeviceFromCustomerUsingDELETE operation.
     * @callback module:api/DeviceControllerApi~unassignDeviceFromCustomerUsingDELETECallback
     * @param {String} error Error message, if any.
     * @param {module:model/Device} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * unassignDeviceFromCustomer
     * @param {String} deviceId deviceId
     * @param {module:api/DeviceControllerApi~unassignDeviceFromCustomerUsingDELETECallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Device}
     */
    this.unassignDeviceFromCustomerUsingDELETE = function(deviceId, callback) {
      var postBody = null;

      // verify the required parameter 'deviceId' is set
      if (deviceId === undefined || deviceId === null) {
        throw new Error("Missing the required parameter 'deviceId' when calling unassignDeviceFromCustomerUsingDELETE");
      }


      var pathParams = {
        'deviceId': deviceId
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
      var returnType = Device;

      return this.apiClient.callApi(
        '/api/customer/device/{deviceId}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
