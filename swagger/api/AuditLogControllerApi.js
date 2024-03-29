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
    define(['ApiClient', 'model/TimePageDataAuditLog'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/TimePageDataAuditLog'));
  } else {
    // Browser globals (root is window)
    if (!root.ThingsboardRestApi) {
      root.ThingsboardRestApi = {};
    }
    root.ThingsboardRestApi.AuditLogControllerApi = factory(root.ThingsboardRestApi.ApiClient, root.ThingsboardRestApi.TimePageDataAuditLog);
  }
}(this, function(ApiClient, TimePageDataAuditLog) {
  'use strict';

  /**
   * AuditLogController service.
   * @module api/AuditLogControllerApi
   * @version 2.0
   */

  /**
   * Constructs a new AuditLogControllerApi. 
   * @alias module:api/AuditLogControllerApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the getAuditLogsByCustomerIdUsingGET operation.
     * @callback module:api/AuditLogControllerApi~getAuditLogsByCustomerIdUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TimePageDataAuditLog} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * getAuditLogsByCustomerId
     * @param {String} customerId customerId
     * @param {String} limit limit
     * @param {Object} opts Optional parameters
     * @param {Number} opts.startTime startTime
     * @param {Number} opts.endTime endTime
     * @param {Boolean} opts.ascOrder ascOrder (default to false)
     * @param {String} opts.offset offset
     * @param {module:api/AuditLogControllerApi~getAuditLogsByCustomerIdUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/TimePageDataAuditLog}
     */
    this.getAuditLogsByCustomerIdUsingGET = function(customerId, limit, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'customerId' is set
      if (customerId === undefined || customerId === null) {
        throw new Error("Missing the required parameter 'customerId' when calling getAuditLogsByCustomerIdUsingGET");
      }

      // verify the required parameter 'limit' is set
      if (limit === undefined || limit === null) {
        throw new Error("Missing the required parameter 'limit' when calling getAuditLogsByCustomerIdUsingGET");
      }


      var pathParams = {
        'customerId': customerId
      };
      var queryParams = {
        'startTime': opts['startTime'],
        'endTime': opts['endTime'],
        'ascOrder': opts['ascOrder'],
        'offset': opts['offset'],
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
      var returnType = TimePageDataAuditLog;

      return this.apiClient.callApi(
        '/api/audit/logs/customer/{customerId}{?startTime,endTime,ascOrder,offset,limit}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getAuditLogsByEntityIdUsingGET operation.
     * @callback module:api/AuditLogControllerApi~getAuditLogsByEntityIdUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TimePageDataAuditLog} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * getAuditLogsByEntityId
     * @param {String} entityType entityType
     * @param {String} entityId entityId
     * @param {String} limit limit
     * @param {Object} opts Optional parameters
     * @param {Number} opts.startTime startTime
     * @param {Number} opts.endTime endTime
     * @param {Boolean} opts.ascOrder ascOrder (default to false)
     * @param {String} opts.offset offset
     * @param {module:api/AuditLogControllerApi~getAuditLogsByEntityIdUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/TimePageDataAuditLog}
     */
    this.getAuditLogsByEntityIdUsingGET = function(entityType, entityId, limit, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'entityType' is set
      if (entityType === undefined || entityType === null) {
        throw new Error("Missing the required parameter 'entityType' when calling getAuditLogsByEntityIdUsingGET");
      }

      // verify the required parameter 'entityId' is set
      if (entityId === undefined || entityId === null) {
        throw new Error("Missing the required parameter 'entityId' when calling getAuditLogsByEntityIdUsingGET");
      }

      // verify the required parameter 'limit' is set
      if (limit === undefined || limit === null) {
        throw new Error("Missing the required parameter 'limit' when calling getAuditLogsByEntityIdUsingGET");
      }


      var pathParams = {
        'entityType': entityType,
        'entityId': entityId
      };
      var queryParams = {
        'startTime': opts['startTime'],
        'endTime': opts['endTime'],
        'ascOrder': opts['ascOrder'],
        'offset': opts['offset'],
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
      var returnType = TimePageDataAuditLog;

      return this.apiClient.callApi(
        '/api/audit/logs/entity/{entityType}/{entityId}{?startTime,endTime,ascOrder,offset,limit}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getAuditLogsByUserIdUsingGET operation.
     * @callback module:api/AuditLogControllerApi~getAuditLogsByUserIdUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TimePageDataAuditLog} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * getAuditLogsByUserId
     * @param {String} userId userId
     * @param {String} limit limit
     * @param {Object} opts Optional parameters
     * @param {Number} opts.startTime startTime
     * @param {Number} opts.endTime endTime
     * @param {Boolean} opts.ascOrder ascOrder (default to false)
     * @param {String} opts.offset offset
     * @param {module:api/AuditLogControllerApi~getAuditLogsByUserIdUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/TimePageDataAuditLog}
     */
    this.getAuditLogsByUserIdUsingGET = function(userId, limit, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling getAuditLogsByUserIdUsingGET");
      }

      // verify the required parameter 'limit' is set
      if (limit === undefined || limit === null) {
        throw new Error("Missing the required parameter 'limit' when calling getAuditLogsByUserIdUsingGET");
      }


      var pathParams = {
        'userId': userId
      };
      var queryParams = {
        'startTime': opts['startTime'],
        'endTime': opts['endTime'],
        'ascOrder': opts['ascOrder'],
        'offset': opts['offset'],
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
      var returnType = TimePageDataAuditLog;

      return this.apiClient.callApi(
        '/api/audit/logs/user/{userId}{?startTime,endTime,ascOrder,offset,limit}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getAuditLogsUsingGET operation.
     * @callback module:api/AuditLogControllerApi~getAuditLogsUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TimePageDataAuditLog} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * getAuditLogs
     * @param {String} limit limit
     * @param {Object} opts Optional parameters
     * @param {Number} opts.startTime startTime
     * @param {Number} opts.endTime endTime
     * @param {Boolean} opts.ascOrder ascOrder (default to false)
     * @param {String} opts.offset offset
     * @param {module:api/AuditLogControllerApi~getAuditLogsUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/TimePageDataAuditLog}
     */
    this.getAuditLogsUsingGET = function(limit, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'limit' is set
      if (limit === undefined || limit === null) {
        throw new Error("Missing the required parameter 'limit' when calling getAuditLogsUsingGET");
      }


      var pathParams = {
      };
      var queryParams = {
        'startTime': opts['startTime'],
        'endTime': opts['endTime'],
        'ascOrder': opts['ascOrder'],
        'offset': opts['offset'],
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
      var returnType = TimePageDataAuditLog;

      return this.apiClient.callApi(
        '/api/audit/logs{?startTime,endTime,ascOrder,offset,limit}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
