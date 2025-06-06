const base = {
    get() {
        return {
            url : "http://localhost:8080/weixinxiaochengxushudian/",
            name: "weixinxiaochengxushudian",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/weixinxiaochengxushudian/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "微信小程序书店"
        } 
    }
}
export default base
