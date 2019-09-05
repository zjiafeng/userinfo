function InhalitionIddDevice() {
    this.initialize();
}

InhalitionIddDevice.prototype = (new LoongObject()).extend({
    initialize:function() {
        this.deviceEventList = {
                        'CardInserted':[],
                        'CardTaken':[],
                        'ReadRawDataComplete':[{'name':'result','type':'string'}],
                        'EjectCardComplete':[{'name':'result','type':'string'}],
                        'ResetComplete':[{'name':'result','type':'string'}]
        };
    },
    createDeviceEventListener:function() {
        this.createEventScript(this.id,this.objName,this.deviceEventList);
    },
    Reset:function() {
        return this.execute('Reset');
    },
    ResetAsync:function() {
        return this.execute('ResetAsync');
    },
    GetCapabilities:function() {
        return this.execute('GetCapabilities');
    },
    GetStatus:function() {
        return this.execute('GetStatus');
    },
    ReadRawData:function(trackinfo, timeout) {
        return this.execute('ReadRawData', trackinfo, timeout);
    },
    ReadRawDataAsync:function(trackinfo, timeout) {
        return this.execute('ReadRawDataAsync', trackinfo, timeout);
    },
    CancelReadRawData:function() {
        return this.execute('CancelReadRawData');
    },
    EjectCard:function() {
        return this.execute('EjectCard');
    },
    EjectCardAsync:function() {
        return this.execute('EjectCardAsync');
    },
    GetLastXfsErr:function(){
        return this.execute('GetLastXfsErr');
    },
    GetLastXfsErrInfo:function() { // TO COMPLETE 错误信息
        switch(this.GetLastXfsErr())
        {
            case 0:
            return "操作成功";
            case -4:
            return "操作取消";
            case -13:
            return "设备没有准备好";
            case -14:
            return "设备故障";
            case -15:
            return "内部错误";
            case -32:
            return "设备已锁定";
            case -43:
            return "服务未找到";
            case -48:
            return "操作超时";
            case -50:
            return "无效操作";
            case -52:
            return "操作参数无效";
            case -53:
            return "软件错误";
            case -54:
            return "与设备连接丢失";
            case -56:
            return "不支持的操作参数";
            case -200:
            return "卡片卡在读卡器内";
            case -201:
            return "读卡器内无卡";
            case -202:
            return "卡被吞";
            case -203:
            return "回收箱满";
            case -204:
            return "无效数据";
            case -205:
            return "无效卡";
            case -209:
            return "卡口故障";
            case -210:
            return "安全模块故障";
            case -211:
            return "不支持的协议";
            case -212:
            return "无法获取ATR";
            case -215:
            return "不支持ChipPower";
            case -216:
            return "卡片太短";
            case -217:
            return "卡片过长";
            default:
            return "其他故障";
        }
    }
});

inhalitionIddDevice = new InhalitionIddDevice();
inhalitionIddDevice.setObjName('inhalitionIddDevice');
inhalitionIddDevice.loadOcx('95443027-7F5C-410A-9DB2-082B5E730FA9');
inhalitionIddDevice.createEventListener();
inhalitionIddDevice.createDeviceEventListener();
