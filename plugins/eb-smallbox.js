
(function () {
                

    $.fn.ebSmallbox = function (config) {

        var self = this;

        // add classes to the beginning of the root container markup
        eb.ui.prependClass(self, "eb-smallbox eb-plugin");

        // create the component class with all the helper stuff
        var cmp = new eb.ui.Component(this, config, {});

        // define the schema defaults
        var schema = cmp.updateFieldSchema({ "value": "value", "color": "color" });

        // pull the compiled configuration object
        var cfg = cmp.config();

        // wrap the plugin in a panel container if specified
        cmp.panel(self);

        // component private init
        function _init() {
            _ensureComponent(function () {
                cmp.bindData(_bind);
            });
        }

        // bind with data
        function _bind() {

            // pull the data table
            var d = cmp.data();
            var r = d.Rows[cfg.tablerow || cfg.rowIndex || 0];
            
            var root = "<div class=\"small-box bg-{0}\">"+
                    "<div class=\"inner\">"+
                      "<h3>{1}</h3>"+
                      "<p>{2}</p>"+
                    "</div>"+
                    "<div class=\"icon\">"+
                      "<i class=\"{3}\"></i>"+
                    "</div>"+
                    "<a href=\"{4}\" class=\"small-box-footer\" target=\"_blank\">More info <i class=\"fa fa-arrow-circle-right\"></i></a>"+
                  "</div";
            
            if (!r) {
                r = d.newRow();
                r[schema.value] = 0;
            }

            var sr = cmp.schemaRow(r);

            root = root.format(sr.val(schema.color) || "default", sr.val(schema.value), cfg.name, cfg.cssIcon, cfg.moreLink || "#");

            root = $(root)

            self.empty();
            self.append(root);         

            root.css("cursor", cfg.cursor|| "pointer");
            root.click(function (e) {
                //var col = r[schema.value] ? schema.value : schema.label; 
                var col = schema.value;
                var ev = new eb.data.DataEvent(self).dataselect()
                .cell(col, r[col])
                .column(d.getColumn(col))
                .row(r)
                .table(d).raise();
                self.trigger("click", { base: e, data: ev.getData() });
            });

            
            // notify everyone that we are done 
            cmp.ready();

        }

        function _ensureComponent(cb) {
            // load any dependencies
            cb();
        }

        // public config accessor
        this.config = function () {
            return cfg;
        }

        // public data bind
        this.databind = function () {
            _bind();
        }

        _init();
        return this;
    }


})();
