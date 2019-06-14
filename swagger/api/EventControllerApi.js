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
    define(['ApiClient', 'model/TimePageDataEvent'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/TimePageDataEvent'));
  } else {
    // Browser globals (root is window)
    if (!root.ThingsboardRestApi) {
      root.ThingsboardRestApi = {};
    }
    root.ThingsboardRestApi.EventControllerApi = factory(root.ThingsboardRestApi.ApiClient, root.ThingsboardRestApi.TimePageDataEvent);
  }
}(this, function(ApiClient, TimePageDataEvent) {
  'use strict';

  /**
   * EventController service.
   * @module api/EventControllerApi
   * @version 2.0
   */

  /**
   * Constructs a new EventControllerApi. 
   * @alias module:api/EventControllerApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the getEventsUsingGET operation.
     * @callback module:api/EventControllerApi~getEventsUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TimePageDataEvent} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * getEvents
     * @param {String} entityType entityType
     * @param {String} entityId entityId
     * @param {String} eventType eventType
     * @param {String} tenantId tenantId
     * @param {Number} limit limit
     * @param {Object} opts Optional parameters
     * @param {Number} opts.startTime startTime
     * @param {Number} opts.endTime endTime
     * @param {Boolean} opts.ascOrder ascOrder (default to false)
     * @param {String} opts.offset offset
     * @param {module:api/EventControllerApi~getEventsUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/TimePageDataEvent}
     */
    this.getEventsUsingGET = function(entityType, entityId, eventType, tenantId, limit, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'entityType' is set
      if (entityType === undefined || entityType === null) {
        throw new Error("Missing the required parameter 'entityType' when calling getEventsUsingGET");
      }

      // verify the required parameter 'entityId' is set
      if (entityId === undefined || entityId === null) {
        throw new Error("Missing the required parameter 'entityId' when calling getEventsUsingGET");
      }

      // verify the required parameter 'eventType' is set
      if (eventType === undefined || eventType === null) {
        throw new Error("Missing the required parameter 'eventType' when calling getEventsUsingGET");
      }

      // verify the required parameter 'tenantId' is set
      if (tenantId === undefined || tenantId === null) {
        throw new Error("Missing the required parameter 'tenantId' when calling getEventsUsingGET");
      }

      // verify the required parameter 'limit' is set
      if (limit === undefined || limit === null) {
        throw new Error("Missing the required parameter 'limit' when calling getEventsUsingGET");
      }


      var pathParams = {
        'entityType': entityType,
        'entityId': entityId,
        'eventType': eventType
      };
      var queryParams = {
        'tenantId': tenantId,
        'limit': limit,
        'startTime': opts['startTime'],
        'endTime': opts['endTime'],
        'ascOrder': opts['ascOrder'],
        'offset': opts['offset'],
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
      var returnType = TimePageDataEvent;

      return this.apiClient.callApi(
        '/api/events/{entityType}/{entityId}/{eventType}{?tenantId,limit,startTime,endTime,ascOrder,offset}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getEventsUsingGET1 operation.
     * @callback module:api/EventControllerApi~getEventsUsingGET1Callback
     * @param {String} error Error message, if any.
     * @param {module:model/TimePageDataEvent} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * getEvents
     * @param {String} entityType entityType
     * @param {String} entityId entityId
     * @param {String} tenantId tenantId
     * @param {Number} limit limit
     * @param {Object} opts Optional parameters
     * @param {Number} opts.startTime startTime
     * @param {Number} opts.endTime endTime
     * @param {Boolean} opts.ascOrder ascOrder (default to false)
     * @param {String} opts.offset offset
     * @param {module:api/EventControllerApi~getEventsUsingGET1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/TimePageDataEvent}
     */
    this.getEventsUsingGET1 = function(entityType, entityId, tenantId, limit, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'entityType' is set
      if (entityType === undefined || entityType === null) {
        throw new Error("Missing the required parameter 'entityType' when calling getEventsUsingGET1");
      }

      // verify the required parameter 'entityId' is set
      if (entityId === undefined || entityId === null) {
        throw new Error("Missing the required parameter 'entityId' when calling getEventsUsingGET1");
      }

      // verify the required parameter 'tenantId' is set
      if (tenantId === undefined || tenantId === null) {
        throw new Error("Missing the required parameter 'tenantId' when calling getEventsUsingGET1");
      }

      // verify the required parameter 'limit' is set
      if (limit === undefined || limit === null) {
        throw new Error("Missing the required parameter 'limit' when calling getEventsUsingGET1");
      }


      var pathParams = {
        'entityType': entityType,
        'entityId': entityId
      };
      var queryParams = {
        'tenantId': tenantId,
        'limit': limit,
        'startTime': opts['startTime'],
        'endTime': opts['endTime'],
        'ascOrder': opts['ascOrder'],
        'offset': opts['offset'],
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
      var returnType = TimePageDataEvent;

      return this.apiClient.callApi(
        '/api/events/{entityType}/{entityId}{?tenantId,limit,startTime,endTime,ascOrder,offset}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));