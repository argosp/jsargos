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
    define(['ApiClient', 'model/EntitySubtype', 'model/EntityView', 'model/EntityViewSearchQuery', 'model/TextPageDataEntityView'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/EntitySubtype'), require('../model/EntityView'), require('../model/EntityViewSearchQuery'), require('../model/TextPageDataEntityView'));
  } else {
    // Browser globals (root is window)
    if (!root.ThingsboardRestApi) {
      root.ThingsboardRestApi = {};
    }
    root.ThingsboardRestApi.EntityViewControllerApi = factory(root.ThingsboardRestApi.ApiClient, root.ThingsboardRestApi.EntitySubtype, root.ThingsboardRestApi.EntityView, root.ThingsboardRestApi.EntityViewSearchQuery, root.ThingsboardRestApi.TextPageDataEntityView);
  }
}(this, function(ApiClient, EntitySubtype, EntityView, EntityViewSearchQuery, TextPageDataEntityView) {
  'use strict';

  /**
   * EntityViewController service.
   * @module api/EntityViewControllerApi
   * @version 2.0
   */

  /**
   * Constructs a new EntityViewControllerApi. 
   * @alias module:api/EntityViewControllerApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the assignEntityViewToCustomerUsingPOST operation.
     * @callback module:api/EntityViewControllerApi~assignEntityViewToCustomerUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/EntityView} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * assignEntityViewToCustomer
     * @param {String} customerId customerId
     * @param {String} entityViewId entityViewId
     * @param {module:api/EntityViewControllerApi~assignEntityViewToCustomerUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/EntityView}
     */
    this.assignEntityViewToCustomerUsingPOST = function(customerId, entityViewId, callback) {
      var postBody = null;

      // verify the required parameter 'customerId' is set
      if (customerId === undefined || customerId === null) {
        throw new Error("Missing the required parameter 'customerId' when calling assignEntityViewToCustomerUsingPOST");
      }

      // verify the required parameter 'entityViewId' is set
      if (entityViewId === undefined || entityViewId === null) {
        throw new Error("Missing the required parameter 'entityViewId' when calling assignEntityViewToCustomerUsingPOST");
      }


      var pathParams = {
        'customerId': customerId,
        'entityViewId': entityViewId
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
      var returnType = EntityView;

      return this.apiClient.callApi(
        '/api/customer/{customerId}/entityView/{entityViewId}', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the assignEntityViewToPublicCustomerUsingPOST operation.
     * @callback module:api/EntityViewControllerApi~assignEntityViewToPublicCustomerUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/EntityView} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * assignEntityViewToPublicCustomer
     * @param {String} entityViewId entityViewId
     * @param {module:api/EntityViewControllerApi~assignEntityViewToPublicCustomerUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/EntityView}
     */
    this.assignEntityViewToPublicCustomerUsingPOST = function(entityViewId, callback) {
      var postBody = null;

      // verify the required parameter 'entityViewId' is set
      if (entityViewId === undefined || entityViewId === null) {
        throw new Error("Missing the required parameter 'entityViewId' when calling assignEntityViewToPublicCustomerUsingPOST");
      }


      var pathParams = {
        'entityViewId': entityViewId
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
      var returnType = EntityView;

      return this.apiClient.callApi(
        '/api/customer/public/entityView/{entityViewId}', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteEntityViewUsingDELETE operation.
     * @callback module:api/EntityViewControllerApi~deleteEntityViewUsingDELETECallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * deleteEntityView
     * @param {String} entityViewId entityViewId
     * @param {module:api/EntityViewControllerApi~deleteEntityViewUsingDELETECallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteEntityViewUsingDELETE = function(entityViewId, callback) {
      var postBody = null;

      // verify the required parameter 'entityViewId' is set
      if (entityViewId === undefined || entityViewId === null) {
        throw new Error("Missing the required parameter 'entityViewId' when calling deleteEntityViewUsingDELETE");
      }


      var pathParams = {
        'entityViewId': entityViewId
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
        '/api/entityView/{entityViewId}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the findByQueryUsingPOST3 operation.
     * @callback module:api/EntityViewControllerApi~findByQueryUsingPOST3Callback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/EntityView>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * findByQuery
     * @param {module:model/EntityViewSearchQuery} query query
     * @param {module:api/EntityViewControllerApi~findByQueryUsingPOST3Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/EntityView>}
     */
    this.findByQueryUsingPOST3 = function(query, callback) {
      var postBody = query;

      // verify the required parameter 'query' is set
      if (query === undefined || query === null) {
        throw new Error("Missing the required parameter 'query' when calling findByQueryUsingPOST3");
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
      var returnType = [EntityView];

      return this.apiClient.callApi(
        '/api/entityViews', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getCustomerEntityViewsUsingGET operation.
     * @callback module:api/EntityViewControllerApi~getCustomerEntityViewsUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TextPageDataEntityView} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * getCustomerEntityViews
     * @param {String} customerId customerId
     * @param {String} limit limit
     * @param {Object} opts Optional parameters
     * @param {String} opts.type type
     * @param {String} opts.textSearch textSearch
     * @param {String} opts.idOffset idOffset
     * @param {String} opts.textOffset textOffset
     * @param {module:api/EntityViewControllerApi~getCustomerEntityViewsUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/TextPageDataEntityView}
     */
    this.getCustomerEntityViewsUsingGET = function(customerId, limit, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'customerId' is set
      if (customerId === undefined || customerId === null) {
        throw new Error("Missing the required parameter 'customerId' when calling getCustomerEntityViewsUsingGET");
      }

      // verify the required parameter 'limit' is set
      if (limit === undefined || limit === null) {
        throw new Error("Missing the required parameter 'limit' when calling getCustomerEntityViewsUsingGET");
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
      var returnType = TextPageDataEntityView;

      return this.apiClient.callApi(
        '/api/customer/{customerId}/entityViews{?type,textSearch,idOffset,textOffset,limit}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getEntityViewByIdUsingGET operation.
     * @callback module:api/EntityViewControllerApi~getEntityViewByIdUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/EntityView} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * getEntityViewById
     * @param {String} entityViewId entityViewId
     * @param {module:api/EntityViewControllerApi~getEntityViewByIdUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/EntityView}
     */
    this.getEntityViewByIdUsingGET = function(entityViewId, callback) {
      var postBody = null;

      // verify the required parameter 'entityViewId' is set
      if (entityViewId === undefined || entityViewId === null) {
        throw new Error("Missing the required parameter 'entityViewId' when calling getEntityViewByIdUsingGET");
      }


      var pathParams = {
        'entityViewId': entityViewId
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
      var returnType = EntityView;

      return this.apiClient.callApi(
        '/api/entityView/{entityViewId}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getEntityViewTypesUsingGET operation.
     * @callback module:api/EntityViewControllerApi~getEntityViewTypesUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/EntitySubtype>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * getEntityViewTypes
     * @param {module:api/EntityViewControllerApi~getEntityViewTypesUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/EntitySubtype>}
     */
    this.getEntityViewTypesUsingGET = function(callback) {
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
        '/api/entityView/types', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getTenantEntityViewUsingGET operation.
     * @callback module:api/EntityViewControllerApi~getTenantEntityViewUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/EntityView} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * getTenantEntityView
     * @param {String} entityViewName entityViewName
     * @param {module:api/EntityViewControllerApi~getTenantEntityViewUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/EntityView}
     */
    this.getTenantEntityViewUsingGET = function(entityViewName, callback) {
      var postBody = null;

      // verify the required parameter 'entityViewName' is set
      if (entityViewName === undefined || entityViewName === null) {
        throw new Error("Missing the required parameter 'entityViewName' when calling getTenantEntityViewUsingGET");
      }


      var pathParams = {
      };
      var queryParams = {
        'entityViewName': entityViewName,
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
      var returnType = EntityView;

      return this.apiClient.callApi(
        '/api/tenant/entityViews{?entityViewName}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getTenantEntityViewsUsingGET operation.
     * @callback module:api/EntityViewControllerApi~getTenantEntityViewsUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TextPageDataEntityView} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * getTenantEntityViews
     * @param {String} limit limit
     * @param {Object} opts Optional parameters
     * @param {String} opts.type type
     * @param {String} opts.textSearch textSearch
     * @param {String} opts.idOffset idOffset
     * @param {String} opts.textOffset textOffset
     * @param {module:api/EntityViewControllerApi~getTenantEntityViewsUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/TextPageDataEntityView}
     */
    this.getTenantEntityViewsUsingGET = function(limit, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'limit' is set
      if (limit === undefined || limit === null) {
        throw new Error("Missing the required parameter 'limit' when calling getTenantEntityViewsUsingGET");
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
      var returnType = TextPageDataEntityView;

      return this.apiClient.callApi(
        '/api/tenant/entityViews{?type,textSearch,idOffset,textOffset,limit}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the saveEntityViewUsingPOST operation.
     * @callback module:api/EntityViewControllerApi~saveEntityViewUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/EntityView} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * saveEntityView
     * @param {module:model/EntityView} entityView entityView
     * @param {module:api/EntityViewControllerApi~saveEntityViewUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/EntityView}
     */
    this.saveEntityViewUsingPOST = function(entityView, callback) {
      var postBody = entityView;

      // verify the required parameter 'entityView' is set
      if (entityView === undefined || entityView === null) {
        throw new Error("Missing the required parameter 'entityView' when calling saveEntityViewUsingPOST");
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
      var returnType = EntityView;

      return this.apiClient.callApi(
        '/api/entityView', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the unassignEntityViewFromCustomerUsingDELETE operation.
     * @callback module:api/EntityViewControllerApi~unassignEntityViewFromCustomerUsingDELETECallback
     * @param {String} error Error message, if any.
     * @param {module:model/EntityView} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * unassignEntityViewFromCustomer
     * @param {String} entityViewId entityViewId
     * @param {module:api/EntityViewControllerApi~unassignEntityViewFromCustomerUsingDELETECallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/EntityView}
     */
    this.unassignEntityViewFromCustomerUsingDELETE = function(entityViewId, callback) {
      var postBody = null;

      // verify the required parameter 'entityViewId' is set
      if (entityViewId === undefined || entityViewId === null) {
        throw new Error("Missing the required parameter 'entityViewId' when calling unassignEntityViewFromCustomerUsingDELETE");
      }


      var pathParams = {
        'entityViewId': entityViewId
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
      var returnType = EntityView;

      return this.apiClient.callApi(
        '/api/customer/entityView/{entityViewId}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
