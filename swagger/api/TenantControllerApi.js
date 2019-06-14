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
    define(['ApiClient', 'model/Tenant', 'model/TextPageDataTenant'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Tenant'), require('../model/TextPageDataTenant'));
  } else {
    // Browser globals (root is window)
    if (!root.ThingsboardRestApi) {
      root.ThingsboardRestApi = {};
    }
    root.ThingsboardRestApi.TenantControllerApi = factory(root.ThingsboardRestApi.ApiClient, root.ThingsboardRestApi.Tenant, root.ThingsboardRestApi.TextPageDataTenant);
  }
}(this, function(ApiClient, Tenant, TextPageDataTenant) {
  'use strict';

  /**
   * TenantController service.
   * @module api/TenantControllerApi
   * @version 2.0
   */

  /**
   * Constructs a new TenantControllerApi. 
   * @alias module:api/TenantControllerApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the deleteTenantUsingDELETE operation.
     * @callback module:api/TenantControllerApi~deleteTenantUsingDELETECallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * deleteTenant
     * @param {String} tenantId tenantId
     * @param {module:api/TenantControllerApi~deleteTenantUsingDELETECallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteTenantUsingDELETE = function(tenantId, callback) {
      var postBody = null;

      // verify the required parameter 'tenantId' is set
      if (tenantId === undefined || tenantId === null) {
        throw new Error("Missing the required parameter 'tenantId' when calling deleteTenantUsingDELETE");
      }


      var pathParams = {
        'tenantId': tenantId
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
        '/api/tenant/{tenantId}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getTenantByIdUsingGET operation.
     * @callback module:api/TenantControllerApi~getTenantByIdUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Tenant} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * getTenantById
     * @param {String} tenantId tenantId
     * @param {module:api/TenantControllerApi~getTenantByIdUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Tenant}
     */
    this.getTenantByIdUsingGET = function(tenantId, callback) {
      var postBody = null;

      // verify the required parameter 'tenantId' is set
      if (tenantId === undefined || tenantId === null) {
        throw new Error("Missing the required parameter 'tenantId' when calling getTenantByIdUsingGET");
      }


      var pathParams = {
        'tenantId': tenantId
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
      var returnType = Tenant;

      return this.apiClient.callApi(
        '/api/tenant/{tenantId}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getTenantsUsingGET operation.
     * @callback module:api/TenantControllerApi~getTenantsUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TextPageDataTenant} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * getTenants
     * @param {String} limit limit
     * @param {Object} opts Optional parameters
     * @param {String} opts.textSearch textSearch
     * @param {String} opts.idOffset idOffset
     * @param {String} opts.textOffset textOffset
     * @param {module:api/TenantControllerApi~getTenantsUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/TextPageDataTenant}
     */
    this.getTenantsUsingGET = function(limit, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'limit' is set
      if (limit === undefined || limit === null) {
        throw new Error("Missing the required parameter 'limit' when calling getTenantsUsingGET");
      }


      var pathParams = {
      };
      var queryParams = {
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
      var returnType = TextPageDataTenant;

      return this.apiClient.callApi(
        '/api/tenants{?textSearch,idOffset,textOffset,limit}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the saveTenantUsingPOST operation.
     * @callback module:api/TenantControllerApi~saveTenantUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Tenant} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * saveTenant
     * @param {module:model/Tenant} tenant tenant
     * @param {module:api/TenantControllerApi~saveTenantUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Tenant}
     */
    this.saveTenantUsingPOST = function(tenant, callback) {
      var postBody = tenant;

      // verify the required parameter 'tenant' is set
      if (tenant === undefined || tenant === null) {
        throw new Error("Missing the required parameter 'tenant' when calling saveTenantUsingPOST");
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
      var returnType = Tenant;

      return this.apiClient.callApi(
        '/api/tenant', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));