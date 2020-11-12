/*语音朗读*/
class ISpeechHelper {
    constructor() {
        this.init();
    }
    /* 初始化 */
    init() {
        this.synth = window.speechSynthesis;
        this.tospeak = null;
        this.rate = 5; //播放速度
        this.volume = 1; // 播放音量
        this.state = {data:null,event:''};
    }
    /**
     * 
     * @param {string} text 
     * @param {*} resolve 
     * @param {*} reject 
     */
    speck(text, resolve, reject) {
        this.tospeak = new SpeechSynthesisUtterance();
        this.tospeak.text = text;
        this.tospeak.rate = this.rate;
        this.tospeak.volume = this.volume;

        this.synth.speak(this.tospeak);
        this.tospeak.onboundary = (evt) => {
            this.state.data = evt;
            resolve(this.state);
            console.log(evt.charIndex,evt.charLength);
        }
        this.tospeak.onend = (evt) => {
            this.state.event = "over";
            this.synth.cancel();
            resolve(this.state);
            console.log('---------------------------------------')
        }
        this.tospeak.onerror = (evt) => {
            reject(evt+'语音播报异常');
        }
        this.tospeak.onmark = (evt) => {
            console.log(evt)
        }
    }
    /* 停止朗读 */
    stopSpeak() {
        this.synth.cancel()
    }
    /* 暂停朗读 */
    pauseSpeak() {
        this.synth.pause()
    }
    /* 继续朗读 */
    resumeSpeak() {
        this.synth.resume()
    }
    /* 重新播报 */
    resetSpeak(){
        this.synth.cancel();
        this.state = {data:null,event:''};
        setTimeout(()=>{this.synth.speak(this.tospeak);},0);
    }
    /* 播放速度加减 */
    setrate(rate) {
        if(this.tospeak){
            this.synth.cancel();
            this.rate = rate;
            this.tospeak.rate = rate == 0 ? 1 : rate;
            this.state = {data:null,event:''};
            setTimeout(()=>{
                this.synth.speak(this.tospeak);
            },10)
            
        }
    }
}

