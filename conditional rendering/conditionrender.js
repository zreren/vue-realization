class Cr{
    //1.data proxy
    //2.init dom
    //showPool [
    //     [dom,
    //     {
    //         type:
    //         show:
    //         data:
    //     }]
    // ]
    constructor(options){
        const {el,data,methods} = options;
        this.el = document.querySelector(el);
        this.data = data;
        this.methods = methods;
        this.showPool = new Map();
        this.eventPool = new Map();
        console.log(this.el)
        this.init();
    }
    init(){
        this.initData();
    }
    initData(){
        for(let key in this.data){
            Object.defineProperty(this,key,{
                get(){
                    console.log('get:',this.data[key])
                    return this.data[key];
                },
                set(newValue){
                    this.data[key] = newValue;
                }
            })
        }
        console.log(this);
    }
}