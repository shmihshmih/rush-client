import React from 'react'

export const AboutPage = () => {
  //TODO create confortable design and information blocks
  return (
    <>
      <h4>Мы:</h4>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi aperiam aspernatur at aut autem consequuntur
        cumque debitis deleniti dolore dolorem doloribus eaque, earum eveniet explicabo fuga fugit, impedit itaque
        laborum libero modi nihil officia placeat possimus provident quidem quisquam reiciendis repellat reprehenderit
        rerum similique sint suscipit ut vero voluptates voluptatum.</p>
      <h4>Что на сайте:</h4>
      <h5>НПИ:</h5>
      <h6>Правила игры:</h6>
      <p>
        1. Запрещается подсказки другим экипажам. Первое выявление – 30 штрафных минут, каждое последующее прибавляет
        30 штрафных минут к предыдущему. (30-60-90 и т.д.)
        2. К игре допускаются лица старше 18 лет.
        3. Название команды не должно нарушать ничьх чувств.
        4. Участникам запрещено уничтожать подсказки, локации и пароли, чинить препятствия другим командам.
        5. Запрещено следить за другими игроками.
        6. По всем вопросам решающее слово остается за координаторами игры.
      </p>
      <h6>Описание игры:</h6>
      <p>
        1. Rush – командная поисковая ночная игра, включающая в себя городское ориентирование, разгадывание загадок и
        преодоление препятствий .
        2. Классическая версия игры проходит 1 раз в две недели в ночь с субботы на воскресенье. 6 игр составляют один
        сезон, по завершении которого определяется победитель.
        3. Если проводятся игры в другие дни, то команды делятся по дивизионам. В каждом дивизионе выбирается свой
        победитель. Одна команда может входить в несколько дивизионов.
        4. Игровая сессия состоит из 10 обязательных заданий и 1 бонусного, повышенной сложности. За выполнение
        бонусного задания каманда получает бонусное время.
        5. Игра начинается в 22.00 и заканчивается в 7.00 следующего дня. После 7.00 ответы не принимаются.
        6. Команда – один экипаж автомобиля, в состав входят 4-5 человек.
        7. Необходимый инвентарь: фонарь, телефон с интернетом. В некоторых заданиях (обычно бонусные) используется
        бинокль.
        8. Для связи с кураторами игры используется Discord-сервер игры.
      </p>
      <h6>Задания:</h6>
      <p>
        Задания делятся по типам:
        1. Смекалочка. Решить загадку и получить последующие указания.
        2. Засланный. Найти человека, который описан в задании. Взаимодействовать с ним так, как указано в задании и
        получить последующие указания.
        3. Точка. Найти по указанным координатам или другим признакам локацию. Найти на ней последующие указания или
        подсказки.
        4. Сокровище. Найти спрятанное сокровище и следовать указанным подсказкам.
        5. Ко-оп. Задания решаются совместно с координатором.
        6. Экстрим. Обычно задание для получения бонусного времени. Требует определенной сноровки, физической силы,
        бесстрашия и смекалки. У таких заданий всегда есть дополнительное описание включающее в себя: уровень
        опасности, необходимого дополнительного оборудования. Например, найти указание на крыше гаража.
        7. Конкурс. Обычно задание для получения бонусного времени. Например, сделать самое оригинальное или смешное
        фото или видео. Или самое страшное.
        8. Штабная кыся. Обычно задание для получения бонусного времени. Для решения задачи требуется нахождения в
        двух или более местах в одно время. Например, подсказка в одном месте откроется в тот момент, когда будет
        сделано определенное действие в другом. Могут участвовать экипажи из одной игровой сессии. Выигранное бонусное
        время делится.
        9. Болтолог. Обычно задание для получения бонусного времени. Включает в себя взаимодействие с людьми не из
        игры. Например, опросить людей на определенной местности, обычно для выявления засланного. Или обзвонить людей
        из списка для того, чтобы найти нужного.
        Задания могут относится более чем к одному типу.
      </p>
      <h6>Рейтинг, очки, штрафы.</h6>
      <p>
        Очки и штрафы начисляется командам.
        Если в течение 30 минут не вписывается правильный ответ – выдается первая подсказка.
        Если в течение следующих 30 минут не вписывается правильный ответ – выдается вторая подсказка.
        За каждое невыполненное задание команда получает 15 штрафных минут.
        По окончанию игры учитывается все затраченное, бонусное, штрафное время, и каждой команде присуждается место.
        Соответствие мест и получаемых очков:
        1 место – 130 очков, 2 место – 120 очков, 3 - 110, 4 – 100, 5 – 95, 6 – 90, 7 – 85, 8 – 80, 9 – 75, 10 – 70.
        За организаторами остается право присуждение или отчуждения времени и очков в зависимости от ситуации.
      </p>
      <h6>Как играть:</h6>
      <p>
        1. Зарегистрироваться на сайте игры.
        2. Если вы водитель – собрать команду из зарегистрированных игроков без команды. Если вы игрок – найти
        свободное место в команде.
        3. В 21.50 быть в условленной точке сбора, где пройдет инструктаж и подготовительные операции.
        4. Задания будут доступны в профиле водителя после начала игры.
        5. В профиле, в форме задания нужно вводить ответы.
        6. После ввода правильного ответа откроется следующее задание.
        7. Ответы принимаются до 7.00.
      </p>
      <h5>Квесты:</h5>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusamus alias aliquam aliquid amet architecto
        aspernatur commodi corporis cupiditate eaque earum et facere harum illo itaque labore maxime molestiae,
        necessitatibus nobis possimus, recusandae repellendus similique suscipit ullam ut voluptas voluptates.
      </p>
    </>
  )
}