var storeFrontAction = {
    verifyNumOfQuestions : function(){
        var that= this;
        this.getNumberOfElements('@delQuestionButton', function(result) {
            console.log('result = '+result)
            that.expect.element('@sumOfQuestions').text.to.equals(result);
        })
    }
};

module.exports = {
    commands: [storeFrontAction],

    elements: {
        addQuestionButton: {
            selector: '.K3WpfTXMyaCBl1lMG8xSS>a'
        },
        questionName: {
            selector: '._1LCoUST_B842kOgmUXPYpL._1uuLZoBou7Aalz9LlTABob'
        },

        delQuestionButton: {
            selector : '.OdCe4ag4_vUw5y3Y2d0V-._2lgu5j5DkfppJq5Ie3KtlZ'
        },
        sumOfQuestions: {
            selector : '._10iC5yXQl4dt5KT6Id4hM5>span:last-child'
        },
        pageSize: {
            selector : '._10iC5yXQl4dt5KT6Id4hM5>._2U5_ppNnCH1iIc8dNuEz5x>select'
        },
        maxPageSize : {
            selector : '._2U5_ppNnCH1iIc8dNuEz5x>select>[value="500"]'
        }

    }
 }