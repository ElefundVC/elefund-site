this["Elefund"] = this["Elefund"] || {};
this["Elefund"]["templates"] = this["Elefund"]["templates"] || {};
this["Elefund"]["templates"]["portfolio-details"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <a href=\""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"crunchbase_url") || (depth0 != null ? lookupProperty(depth0,"crunchbase_url") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"crunchbase_url","hash":{},"data":data,"loc":{"start":{"line":23,"column":17},"end":{"line":23,"column":37}}}) : helper)))
    + "\" target=\"_blank\">Crunchbase <i class=\"icomoon icon-arrow-right\"></i></a>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "      <a href=\""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"careers") || (depth0 != null ? lookupProperty(depth0,"careers") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"careers","hash":{},"data":data,"loc":{"start":{"line":27,"column":15},"end":{"line":27,"column":28}}}) : helper)))
    + "\" target=\"_blank\">Careers <i class=\"icomoon icon-arrow-right\"></i></a>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"modal-backdrop\"></div>\n<div class=\"modal-container\">\n  <div class=\"modal-body\">\n    <button type=\"button\" class=\"modal-close icomoon icon-close\"></button>\n\n    <div class=\"company-head\">\n      <div class=\"company-logo brand-"
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":7,"column":37},"end":{"line":7,"column":45}}}) : helper)))
    + "\">\n        <img class=\"img\" src=\"/images/brands/"
    + alias4(((helper = (helper = lookupProperty(helpers,"logo") || (depth0 != null ? lookupProperty(depth0,"logo") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"logo","hash":{},"data":data,"loc":{"start":{"line":8,"column":45},"end":{"line":8,"column":55}}}) : helper)))
    + "\" width=\"118\" alt=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"company") || (depth0 != null ? lookupProperty(depth0,"company") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"company","hash":{},"data":data,"loc":{"start":{"line":8,"column":74},"end":{"line":8,"column":87}}}) : helper)))
    + "\">\n      </div>\n      <div class=\"company-info\">\n        <h2 class=\"company-name\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":11,"column":33},"end":{"line":11,"column":43}}}) : helper)))
    + "</h2>\n        <p class=\"lead\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"sector") || (depth0 != null ? lookupProperty(depth0,"sector") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"sector","hash":{},"data":data,"loc":{"start":{"line":12,"column":24},"end":{"line":12,"column":36}}}) : helper)))
    + "\n        <br>"
    + alias4(((helper = (helper = lookupProperty(helpers,"stage_info") || (depth0 != null ? lookupProperty(depth0,"stage_info") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"stage_info","hash":{},"data":data,"loc":{"start":{"line":13,"column":12},"end":{"line":13,"column":28}}}) : helper)))
    + "</p>\n      </div>\n    </div>\n\n    <div class=\"company-body\">\n      "
    + ((stack1 = (lookupProperty(helpers,"breaklines")||(depth0 && lookupProperty(depth0,"breaklines"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"description") : depth0),{"name":"breaklines","hash":{},"data":data,"loc":{"start":{"line":18,"column":6},"end":{"line":18,"column":36}}})) != null ? stack1 : "")
    + "\n    </div>\n\n    <div class=\"company-footer\">\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"crunchbase_url") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":22,"column":6},"end":{"line":24,"column":13}}})) != null ? stack1 : "")
    + "      <a href=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"url") || (depth0 != null ? lookupProperty(depth0,"url") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"url","hash":{},"data":data,"loc":{"start":{"line":25,"column":15},"end":{"line":25,"column":24}}}) : helper)))
    + "\" target=\"_blank\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"hostname") || (depth0 != null ? lookupProperty(depth0,"hostname") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"hostname","hash":{},"data":data,"loc":{"start":{"line":25,"column":42},"end":{"line":25,"column":56}}}) : helper)))
    + " <i class=\"icomoon icon-arrow-right\"></i></a>\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"careers") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":26,"column":6},"end":{"line":28,"column":13}}})) != null ? stack1 : "")
    + "    </div>\n\n  </div>\n</div>\n";
},"useData":true});
this["Elefund"]["templates"]["portfolio-items"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "  <li class=\"portfolio-item\">\n    <a href=\"#"
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":3,"column":14},"end":{"line":3,"column":22}}}) : helper)))
    + "\" class=\"portfolio-link toggle-modal brand-"
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":3,"column":65},"end":{"line":3,"column":73}}}) : helper)))
    + "\">\n      <img src=\"/images/brands/"
    + alias4(((helper = (helper = lookupProperty(helpers,"logo") || (depth0 != null ? lookupProperty(depth0,"logo") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"logo","hash":{},"data":data,"loc":{"start":{"line":4,"column":31},"end":{"line":4,"column":41}}}) : helper)))
    + "\" class=\"portfolio-image\" alt=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":4,"column":72},"end":{"line":4,"column":82}}}) : helper)))
    + "\">\n    </a>\n  </li>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"companies") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":7,"column":9}}})) != null ? stack1 : "");
},"useData":true});