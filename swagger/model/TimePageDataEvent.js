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
    define(['ApiClient', 'model/Event', 'model/TimePageLink'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Event'), require('./TimePageLink'));
  } else {
    // Browser globals (root is window)
    if (!root.ThingsboardRestApi) {
      root.ThingsboardRestApi = {};
    }
    root.ThingsboardRestApi.TimePageDataEvent = factory(root.ThingsboardRestApi.ApiClient, root.ThingsboardRestApi.Event, root.ThingsboardRestApi.TimePageLink);
  }
}(this, function(ApiClient, Event, TimePageLink) {
  'use strict';




  /**
   * The TimePageDataEvent model module.
   * @module model/TimePageDataEvent
   * @version 2.0
   */

  /**
   * Constructs a new <code>TimePageDataEvent</code>.
   * @alias module:model/TimePageDataEvent
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>TimePageDataEvent</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TimePageDataEvent} obj Optional instance to populate.
   * @return {module:model/TimePageDataEvent} The populated <code>TimePageDataEvent</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('data')) {
        obj['data'] = ApiClient.convertToType(data['data'], [Event]);
      }
      if (data.hasOwnProperty('hasNext')) {
        obj['hasNext'] = ApiClient.convertToType(data['hasNext'], 'Boolean');
      }
      if (data.hasOwnProperty('nextPageLink')) {
        obj['nextPageLink'] = TimePageLink.constructFromObject(data['nextPageLink']);
      }
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/Event>} data
   */
  exports.prototype['data'] = undefined;
  /**
   * @member {Boolean} hasNext
   */
  exports.prototype['hasNext'] = undefined;
  /**
   * @member {module:model/TimePageLink} nextPageLink
   */
  exports.prototype['nextPageLink'] = undefined;



  return exports;
}));

