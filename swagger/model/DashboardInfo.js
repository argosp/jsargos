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
    define(['ApiClient', 'model/DashboardId', 'model/ShortCustomerInfo', 'model/TenantId'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./DashboardId'), require('./ShortCustomerInfo'), require('./TenantId'));
  } else {
    // Browser globals (root is window)
    if (!root.ThingsboardRestApi) {
      root.ThingsboardRestApi = {};
    }
    root.ThingsboardRestApi.DashboardInfo = factory(root.ThingsboardRestApi.ApiClient, root.ThingsboardRestApi.DashboardId, root.ThingsboardRestApi.ShortCustomerInfo, root.ThingsboardRestApi.TenantId);
  }
}(this, function(ApiClient, DashboardId, ShortCustomerInfo, TenantId) {
  'use strict';




  /**
   * The DashboardInfo model module.
   * @module model/DashboardInfo
   * @version 2.0
   */

  /**
   * Constructs a new <code>DashboardInfo</code>.
   * @alias module:model/DashboardInfo
   * @class
   */
  var exports = function() {
    var _this = this;







  };

  /**
   * Constructs a <code>DashboardInfo</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DashboardInfo} obj Optional instance to populate.
   * @return {module:model/DashboardInfo} The populated <code>DashboardInfo</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('assignedCustomers')) {
        obj['assignedCustomers'] = ApiClient.convertToType(data['assignedCustomers'], [ShortCustomerInfo]);
      }
      if (data.hasOwnProperty('createdTime')) {
        obj['createdTime'] = ApiClient.convertToType(data['createdTime'], 'Number');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = DashboardId.constructFromObject(data['id']);
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('tenantId')) {
        obj['tenantId'] = TenantId.constructFromObject(data['tenantId']);
      }
      if (data.hasOwnProperty('title')) {
        obj['title'] = ApiClient.convertToType(data['title'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/ShortCustomerInfo>} assignedCustomers
   */
  exports.prototype['assignedCustomers'] = undefined;
  /**
   * @member {Number} createdTime
   */
  exports.prototype['createdTime'] = undefined;
  /**
   * @member {module:model/DashboardId} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * @member {module:model/TenantId} tenantId
   */
  exports.prototype['tenantId'] = undefined;
  /**
   * @member {String} title
   */
  exports.prototype['title'] = undefined;



  return exports;
}));


