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
    define(['ApiClient', 'model/AttributesEntityView'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./AttributesEntityView'));
  } else {
    // Browser globals (root is window)
    if (!root.ThingsboardRestApi) {
      root.ThingsboardRestApi = {};
    }
    root.ThingsboardRestApi.TelemetryEntityView = factory(root.ThingsboardRestApi.ApiClient, root.ThingsboardRestApi.AttributesEntityView);
  }
}(this, function(ApiClient, AttributesEntityView) {
  'use strict';




  /**
   * The TelemetryEntityView model module.
   * @module model/TelemetryEntityView
   * @version 2.0
   */

  /**
   * Constructs a new <code>TelemetryEntityView</code>.
   * @alias module:model/TelemetryEntityView
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>TelemetryEntityView</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TelemetryEntityView} obj Optional instance to populate.
   * @return {module:model/TelemetryEntityView} The populated <code>TelemetryEntityView</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('attributes')) {
        obj['attributes'] = AttributesEntityView.constructFromObject(data['attributes']);
      }
      if (data.hasOwnProperty('timeseries')) {
        obj['timeseries'] = ApiClient.convertToType(data['timeseries'], ['String']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/AttributesEntityView} attributes
   */
  exports.prototype['attributes'] = undefined;
  /**
   * @member {Array.<String>} timeseries
   */
  exports.prototype['timeseries'] = undefined;



  return exports;
}));


