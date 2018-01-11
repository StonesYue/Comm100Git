module.exports = {
  'Find the answer.': function (client) {
    // 定义 Bing 页面中的节点.
    const searchInput = '#sb_form_q'
    const searchBtn = '#sb_form_go'
    const question = 'java'

    // 启动浏览器并打开 bing.com.
    var siteUrl = 'www.bing.com';
    client.url(siteUrl).maximizeWindow();
    //call webservice api
    getWeather.getWeather();
    client.end();
    /*// 确保 'body' 和输入框可以使用.
    client.expect.element('body').to.be.present
    client.expect.element(searchInput).to.be.visible
	client.expect.element('.b_searchbox').to.be.visible
    client.pause(2000)  // 稍等两秒.

    // 输入 'what is microsoft' 然后搜索.
    client.setValue(searchInput, question)
    client.click(searchBtn)
    client.pause(20000)

    // 截一张图然后保存到 'reports/answer.png'.
    client.expect.element('body').to.be.present
    client.saveScreenshot('reports/answers.png')
    client.end()*/
  }
}