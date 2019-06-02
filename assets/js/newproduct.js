// 當文件已經全載入至記憶體時，開始執行程式
$(() => {

    $('#insert').on('click', function() {

        // 取得商品資料
        var data = {
            item: {
                name: $('#inputProductName').val(),
                price: Number($('#inputProductPrice').val()),
                count: +$('#inputProductCount').val(),
                image: $('#inputProductImage').val(),
            }
        }

        // 新增商品
        $.post('https://js.kchen.club/B12345678/insert', data, function(response) {
            if (response) {
                // 伺服器有回傳資料
                if (response.result) {
                    $('#message').text('success')
                    console.log(response.item)
                    $('#dialog').modal('show')
                } else {
                    $('#message').text('fail')
                    console.log(response.message)
                    $('#dialog').modal('show')
                }
            } else {
                $('#message').text('system error')
                $('#dialog').modal('show')
            }
        })
    })
    $('#closewindow').on('click', function() {
        window.location.reload("")
    })
})