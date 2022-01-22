class MVVM{
    constructor(el,data){
        this.el = document.querySelector(el);
        this._data = data;
        this.init();
    }
    init(){
        this.initData();
        this.initDom()
    }
    initDom(){
        this.bindInput(this.el);
    }
    initData(){
        const _this = this;
        this.data = {};
        for(let key in this._data){
            Object.defineProperty(this.data,key,{
                get(){
                    return _this._data[key];
                },
                set(newValue){
                    _this._data[key] = newValue;
                }
            })
        }
        console.log(this.data)
    }
    bindInput(el){
        const _allInputs = el.querySelectorAll('input');
        _allInputs.forEach(input => {
            const _vModel = input.getAttribute('v-model');
            console.log(_vModel)
        });
    }
}

// 1.數據-> 響應式數據  object.defineproperty proxy
// 2.input -> input/keyup -> 事件處理函數的綁定 -》 改变数据
// 3.相关的dom -> 数据 => 绑定在一起
// 4.操作数据的某个属性 -> 对应的dom就发生改变