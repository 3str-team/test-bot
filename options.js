module.exports = {
    testOptions: {
        reply_markup: JSON.stringify({
            // === Каждый массив в массиве inline_keyboard - это строка кнопок под сообщением
            inline_keyboard: [
                // === text - надпись на кнопке, callback_data - значение, которое вернётся при нажатии
                [{text: 'Тестовая кнопка', callback_data: 'btn'}]
            ]
        })
    }
}