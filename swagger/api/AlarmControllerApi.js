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
    define(['ApiClient', 'model/Alarm', 'model/AlarmInfo', 'model/TimePageDataAlarmInfo'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Alarm'), require('../model/AlarmInfo'), require('../model/TimePageDataAlarmInfo'));
  } else {
    // Browser globals (root is window)
    if (!root.ThingsboardRestApi) {
      root.ThingsboardRestApi = {};
    }
    root.ThingsboardRestApi.AlarmControllerApi = factory(root.ThingsboardRestApi.ApiClient, root.ThingsboardRestApi.Alarm, root.ThingsboardRestApi.AlarmInfo, root.ThingsboardRestApi.TimePageDataAlarmInfo);
  }
}(this, function(ApiClient, Alarm, AlarmInfo, TimePageDataAlarmInfo) {
  'use strict';

  /**
   * AlarmController service.
   * @module api/AlarmControllerApi
   * @version 2.0
   */

  /**
   * Constructs a new AlarmControllerApi. 
   * @alias module:api/AlarmControllerApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the ackAlarmUsingPOST operation.
     * @callback module:api/AlarmControllerApi~ackAlarmUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * ackAlarm
     * @param {String} alarmId alarmId
     * @param {module:api/AlarmControllerApi~ackAlarmUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.ackAlarmUsingPOST = function(alarmId, callback) {
      var postBody = null;

      // verify the required parameter 'alarmId' is set
      if (alarmId === undefined || alarmId === null) {
        throw new Error("Missing the required parameter 'alarmId' when calling ackAlarmUsingPOST");
      }


      var pathParams = {
        'alarmId': alarmId
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
        '/api/alarm/{alarmId}/ack', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the clearAlarmUsingPOST operation.
     * @callback module:api/AlarmControllerApi~clearAlarmUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * clearAlarm
     * @param {String} alarmId alarmId
     * @param {module:api/AlarmControllerApi~clearAlarmUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.clearAlarmUsingPOST = function(alarmId, callback) {
      var postBody = null;

      // verify the required parameter 'alarmId' is set
      if (alarmId === undefined || alarmId === null) {
        throw new Error("Missing the required parameter 'alarmId' when calling clearAlarmUsingPOST");
      }


      var pathParams = {
        'alarmId': alarmId
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
        '/api/alarm/{alarmId}/clear', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteAlarmUsingDELETE operation.
     * @callback module:api/AlarmControllerApi~deleteAlarmUsingDELETECallback
     * @param {String} error Error message, if any.
     * @param {'Boolean'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * deleteAlarm
     * @param {String} alarmId alarmId
     * @param {module:api/AlarmControllerApi~deleteAlarmUsingDELETECallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link 'Boolean'}
     */
    this.deleteAlarmUsingDELETE = function(alarmId, callback) {
      var postBody = null;

      // verify the required parameter 'alarmId' is set
      if (alarmId === undefined || alarmId === null) {
        throw new Error("Missing the required parameter 'alarmId' when calling deleteAlarmUsingDELETE");
      }


      var pathParams = {
        'alarmId': alarmId
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
      var returnType = 'Boolean';

      return this.apiClient.callApi(
        '/api/alarm/{alarmId}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getAlarmByIdUsingGET operation.
     * @callback module:api/AlarmControllerApi~getAlarmByIdUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Alarm} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * getAlarmById
     * @param {String} alarmId alarmId
     * @param {module:api/AlarmControllerApi~getAlarmByIdUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Alarm}
     */
    this.getAlarmByIdUsingGET = function(alarmId, callback) {
      var postBody = null;

      // verify the required parameter 'alarmId' is set
      if (alarmId === undefined || alarmId === null) {
        throw new Error("Missing the required parameter 'alarmId' when calling getAlarmByIdUsingGET");
      }


      var pathParams = {
        'alarmId': alarmId
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
      var returnType = Alarm;

      return this.apiClient.callApi(
        '/api/alarm/{alarmId}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getAlarmInfoByIdUsingGET operation.
     * @callback module:api/AlarmControllerApi~getAlarmInfoByIdUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AlarmInfo} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * getAlarmInfoById
     * @param {String} alarmId alarmId
     * @param {module:api/AlarmControllerApi~getAlarmInfoByIdUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/AlarmInfo}
     */
    this.getAlarmInfoByIdUsingGET = function(alarmId, callback) {
      var postBody = null;

      // verify the required parameter 'alarmId' is set
      if (alarmId === undefined || alarmId === null) {
        throw new Error("Missing the required parameter 'alarmId' when calling getAlarmInfoByIdUsingGET");
      }


      var pathParams = {
        'alarmId': alarmId
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
      var returnType = AlarmInfo;

      return this.apiClient.callApi(
        '/api/alarm/info/{alarmId}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getAlarmsUsingGET operation.
     * @callback module:api/AlarmControllerApi~getAlarmsUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TimePageDataAlarmInfo} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * getAlarms
     * @param {String} entityType entityType
     * @param {String} entityId entityId
     * @param {Number} limit limit
     * @param {Object} opts Optional parameters
     * @param {String} opts.searchStatus searchStatus
     * @param {String} opts.status status
     * @param {Number} opts.startTime startTime
     * @param {Number} opts.endTime endTime
     * @param {Boolean} opts.ascOrder ascOrder (default to false)
     * @param {String} opts.offset offset
     * @param {Boolean} opts.fetchOriginator fetchOriginator
     * @param {module:api/AlarmControllerApi~getAlarmsUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/TimePageDataAlarmInfo}
     */
    this.getAlarmsUsingGET = function(entityType, entityId, limit, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'entityType' is set
      if (entityType === undefined || entityType === null) {
        throw new Error("Missing the required parameter 'entityType' when calling getAlarmsUsingGET");
      }

      // verify the required parameter 'entityId' is set
      if (entityId === undefined || entityId === null) {
        throw new Error("Missing the required parameter 'entityId' when calling getAlarmsUsingGET");
      }

      // verify the required parameter 'limit' is set
      if (limit === undefined || limit === null) {
        throw new Error("Missing the required parameter 'limit' when calling getAlarmsUsingGET");
      }


      var pathParams = {
        'entityType': entityType,
        'entityId': entityId
      };
      var queryParams = {
        'searchStatus': opts['searchStatus'],
        'status': opts['status'],
        'limit': limit,
        'startTime': opts['startTime'],
        'endTime': opts['endTime'],
        'ascOrder': opts['ascOrder'],
        'offset': opts['offset'],
        'fetchOriginator': opts['fetchOriginator'],
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
      var returnType = TimePageDataAlarmInfo;

      return this.apiClient.callApi(
        '/api/alarm/{entityType}/{entityId}{?searchStatus,status,limit,startTime,endTime,ascOrder,offset,fetchOriginator}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getHighestAlarmSeverityUsingGET operation.
     * @callback module:api/AlarmControllerApi~getHighestAlarmSeverityUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {'String'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * getHighestAlarmSeverity
     * @param {String} entityType entityType
     * @param {String} entityId entityId
     * @param {Object} opts Optional parameters
     * @param {String} opts.searchStatus searchStatus
     * @param {String} opts.status status
     * @param {module:api/AlarmControllerApi~getHighestAlarmSeverityUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link 'String'}
     */
    this.getHighestAlarmSeverityUsingGET = function(entityType, entityId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'entityType' is set
      if (entityType === undefined || entityType === null) {
        throw new Error("Missing the required parameter 'entityType' when calling getHighestAlarmSeverityUsingGET");
      }

      // verify the required parameter 'entityId' is set
      if (entityId === undefined || entityId === null) {
        throw new Error("Missing the required parameter 'entityId' when calling getHighestAlarmSeverityUsingGET");
      }


      var pathParams = {
        'entityType': entityType,
        'entityId': entityId
      };
      var queryParams = {
        'searchStatus': opts['searchStatus'],
        'status': opts['status'],
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
      var returnType = 'String';

      return this.apiClient.callApi(
        '/api/alarm/highestSeverity/{entityType}/{entityId}{?searchStatus,status}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the saveAlarmUsingPOST operation.
     * @callback module:api/AlarmControllerApi~saveAlarmUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Alarm} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * saveAlarm
     * @param {module:model/Alarm} alarm alarm
     * @param {module:api/AlarmControllerApi~saveAlarmUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Alarm}
     */
    this.saveAlarmUsingPOST = function(alarm, callback) {
      var postBody = alarm;

      // verify the required parameter 'alarm' is set
      if (alarm === undefined || alarm === null) {
        throw new Error("Missing the required parameter 'alarm' when calling saveAlarmUsingPOST");
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
      var returnType = Alarm;

      return this.apiClient.callApi(
        '/api/alarm', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
