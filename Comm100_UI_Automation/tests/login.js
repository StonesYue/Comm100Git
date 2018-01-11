module.exports = {

  'Demo test login' : function (browser) {
    browser.url('https://ent.comm100.com/AdminManage/Login.aspx');
	browser.useXpath();
    browser.setValue('//input[@id='txtEmail']', 'comm100training2@comm100.com');
    browser.setValue('//input[@id='txtPassword']', 'Aa000000') ;
    browser.click('//a[@id='btnLogin']');
    browser.pause(1000);
    //browser.assert.containsText('//span[@id='ctl00_lblTitle']', 'Dashboard')
//    browser.expect.element('//span[@id='ctl00_lblTitle']').text.to.equal('Dashboard');
    //browser.end();
    },



    'Demo test Add ' : function (browser){
        browser.click('.//*[@id='ctl00_hlSettings']')
        console.log('hello world')
        browser.click('//a[@id='ctl00_M_btnNewMessage']')
        browser.waitForElementPresent('.//*[@id='ctl00_lblTitle']',4000)
        browser.setValue('.//*[@id='ctl00_M_txtTitle']','newCanned')
        browser.setValue('.//*[@id='ctl00_M_txtMessage']','newCannedMessage')
        browser.click('.//*[@id='ctl00_M_btnSaveButtom']')
        browser.waitForElementPresent('.//*[@id='ctl00_lblTitle']',4000)
        browser.click('.//*[@id='ctl00_M_LinkButton2']')
        browser.assert.containsText('.//*[@id='cntpublic']/div[2]/table/tbody/tr[2]/td[2]/a','newCanned')
    },

    'Demo test delete' : function(browser){
        browser.getText('.//*[@id='cntpublic']/div[3]/div/span[6]', function(result) {
             browser.click('.//*[@id='cntpublic']/div[2]/table/tbody/tr[2]/td[5]/a[2]/i');
             browser.acceptAlert();
             browser.expect.element('.//*[@id='cntpublic']/div[3]/div/span[6]').text.to.equal(result.value-1);
        });
        browser.end();
    }
     /*
     //String(totalBeforeDel-1)


//
//     'Demo test login1' : function (browser) {
//        browser.url('https://ent.comm100.com/AdminManage/Login.aspx');
//    	browser.useXpath();
//        browser.setValue('//input[@id='txtEmail']', 'comm100training2@comm100.com');
//        browser.setValue('//input[@id='txtPassword']', 'Aa000000') ;
//        browser.click('//a[@id='btnLogin']');
//        browser.pause(1000);
//          //.assert.containsText('//span[@id='ctl00_lblTitle']', 'Dashboard')
//        browser.expect.element('//span[@id='ctl00_lblTitle']').text.to.equal('Dashboard');
//        browser.end();
//      }*/

}



