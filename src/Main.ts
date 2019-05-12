//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////


class Main extends eui.UILayer {


    private SCORE:number = 0;//分数

    protected createChildren(): void {
        super.createChildren();

        egret.lifecycle.addLifecycleListener((context) => {
            // custom lifecycle plugin
        })

        egret.lifecycle.onPause = () => {
            egret.ticker.pause();
        }

        egret.lifecycle.onResume = () => {
            egret.ticker.resume();
        }

        //inject the custom material parser
        //注入自定义的素材解析器
        let assetAdapter = new AssetAdapter();
        egret.registerImplementation("eui.IAssetAdapter", assetAdapter);
        egret.registerImplementation("eui.IThemeAdapter", new ThemeAdapter());


        this.runGame().catch(e => {
            console.log(e);
        })
    }

    private async runGame() {
        await this.loadResource();
        this.createGameScene();

        
    }

    private async loadResource() {
        try {
            const loadingView = new LoadingUI();
            this.addChild(loadingView);
            await RES.loadConfig("resource/default.res.json", "resource/");
            await RES.loadGroup("preload", 0, loadingView);
            this.removeChild(loadingView);
        }
        catch (e) {
            console.error(e);
        }
    }
    /**
     * 创建场景界面
     * Create scene interface
     */
    protected createGameScene(): void {
        let container:egret.DisplayObjectContainer=new egret.DisplayObjectContainer()
        this.addChild(container)

        let bg1:backgroundimg = new backgroundimg
        container.addChild(bg1)

        SceneController.instance.setStage(container)
        SceneController.initGame()
        this.createScore();
    }

    /**
     * 创建分数栏
     * create score container
     */
    private TF_socre: egret.TextField;
    private createScore(): void {
        //为方便管理与设置，把分数栏独立于一个容器内
        var cont = new egret.DisplayObjectContainer(),
        bg = GameUtil.createBitmapByName("on"),//分数的显示框背景图片
        title = GameUtil.createBitmapByName("handle"),//分数二字
        txt = new egret.TextField();//分数内容
        //添加的顺序影响层级
        cont.addChild(bg);
        cont.addChild(title);
        cont.addChild(txt);
        //整个分数容器在设计图中的位置
        cont.x = 0;
        cont.y = 0;
        //标题和分数在分数栏内部的位置
        title.x = 0;
        title.y = 0;
        txt.x = 0;
        txt.y = 0;
        //限制文本的区域
        // txt.width = 110;
        // txt.height = 32;
        //定义颜色、水平与垂直居中、字体大小，初始字符、加粗等
        txt.textColor = 0xffdb15;
        txt.textAlign = "center";
        txt.verticalAlign = "middle";
        txt.size = 24;
        txt.text = "0";
        txt.bold = true;
        //将分数TextField实例引用到Main类下的内部属性值，方便其他方法调用并修改分数值
        this.TF_socre = txt;
        this.stage.addChild(cont);
    }

}
