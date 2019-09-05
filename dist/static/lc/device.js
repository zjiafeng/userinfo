Object.extend = function(destObj, srcObj) {
    for(o in srcObj)
        destObj[o]=srcObj[o];
    return destObj;
};

trace = function(message) {
    if (window.debugMode) {
        alert(message);
    } else {
        console.log(message);
    }
}

function LoongObject() {
    this.init();
}

LoongObject.prototype = {
    extend:function(srcObj) {
        return Object.extend.apply(this, [this, srcObj]);
    },
    SetAttribute:function(attr, value) {
        if (this.obj[attr] != null) {
            this.obj[attr] = value;
        } else {
            trace(this.objName + "." + attr + " invalid");
        }
    },
    GetAttribute:function(attr) {
        if (this.obj[attr] != null) {
            return this.obj[attr];
        } else {
            trace(this.objName + "." + attr + " invalid");
        }
    },
    OpenConnection:function() {
        return this.execute('OpenConnection');
    },
    CloseConnection:function() {
        this.execute('CloseConnection');
    },
    OpenConnectionAsync:function() {
        return this.execute('OpenConnectionAsync');
    },
    CloseConnectionAsync:function() {
        return this.execute('CloseConnectionAsync');
    },
    GetLastXfsErr:function() {
        return this.execute('GetLastXfsErr');
    },
    GetLastXfsErrInfo:function() {
        return "";
    },
    init:function() {
        this.id = "OCX";
        this.objName = "";
        this.baseEventList = {
            "OpenConnectionComplete":[],
            "CloseConnectionComplete":[],
            "FatalError":[],
            "HWError":[{'name':'errinfo','type':'string'}]
        }
    },
    getObjName:function() {
        return this.objName;
    },
    setObjName:function(name) {
        this.objName = name;
        this.id = this.objName + "OCX";
    },
    loadOcx:function(ocxid) {
        var $='<object classid=\"clsid:'+ocxid+'\" id=\"'+this.id+'\" width=\"1\" height=\"1\">\n';
        // var $='<object classid=\"clsid:'+ocxid+'\" id=\"'+this.id+'\" >\n';
        $ += '<param name="_Version" value="110">';
        $ += '<param name="_StockProps" value="0">';
        $ += '</object>\n';
        document.write($);
        this.obj = document.getElementById(this.id);
    },
    createEventScript:function(id, name, eventlist) {
        var str = "";
        for (eventname in eventlist) {
            var oneevent = eventlist[eventname];
            var eventpara = "";
            for (var index = 0; index < oneevent.length; index++) {
                eventpara += ",";
                eventpara += oneevent[index]["name"];
            }
            var onevtpara = eventpara;
            eventpara = eventpara.substr(1);
            str += '<script for=\"' + id + '\" event=\"' + eventname + "(" + eventpara + ')\">\n';
            str += 'try{' + name + '.onEvent(\'' + eventname + "\'" + onevtpara + ');}\ncatch(ex){' + name + '.onEvent=function(){trace(ex.message)}}\n';
            // str += 'try{' + name + '.onEvent(\'' + eventname + "\'" + onevtpara + ');}\ncatch(ex){trace(ex.message)}\n';
            str += '</script>\n';
        }
        document.write(str);
    },
    createEventListener:function() {
        this.createEventScript(this.id, this.objName, this.baseEventList);
    },
    onEvent:function(cmd) {
        var num = arguments.length;
        var argstr = "";
        for (var i = 0; i < num; i++)
        {
            var argu = arguments[i];
            argstr += argu;
            argstr += ",";
        }
        console.log(argstr);
    },
    execute:function(command) {
        if (this.obj == null || this.obj == 'undefined') {
            trace('ocx obj undefined!');
            return;
        }
        if (command.length < 1) {
            trace('execute command invalid!');
            return;
        }

        var result;

        if (!this.obj.hasOwnProperty(command)) {
            trace(this.objName + '.' + command + ' undefined!');
        } else {
            try {
                /*
                var newargus = [].shift.call(arguments);
                // result = this.obj[command].apply(this, arguments);
                result = this.obj[command].apply(null, arguments);
                // result = this.obj[command](arguments);
                */
                var funcstr='this.obj.' + command + ''+'(';
                for(var i = 1; i < arguments.length; i++) { 
                    var arg = arguments[i];
                    if(typeof(arg) == 'string') {                
                        arg = JSON.stringify(arg);
                    }
                    else {
                        // arg = 'arguments['+i+']';
                        arg = arguments[i];
                    }
                    if(i == 1)
                        funcstr += arg;
                    else
                        funcstr += ',' + arg;    
                }
                funcstr += ')';
                console.log("execute:" + funcstr);
                result = eval(funcstr);
            } catch(ex) {
                trace('device: '+this.objName+' command: '+command+' error: '+ex.message);
            }
        }
        return result;
    }
}
