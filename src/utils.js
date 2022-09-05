const hears = [
    [/шо робить/, "єбашить як раб"],
    [/ шо /, "шопопало говориш"],
    [/npm install/, "я щас тобі зроблю rm -rf /"],
    [/горить/, "ну мені нравиця, як воно горить"],
    [/русня|русні/, "русні пизда, я все сказав"],
    [/ давай /, "а давай ти підеш поспиш"],
    [/фронтенд/, "вротенд"],
    [/добрий ранок/, "і тобі не боліть, помився вже?"],
    [/прильот/, "єбєйший, прямо в рот"],
    [/реакт/, "хуякт, дотнет хуйнет"],
    [/бот шо робиш/, "не питай, дебажу"],
    [/путін/, "хуйло, ла ла ла ла"],
    [/бекенд/, "хуєнд такий як фронтенд"],
    [/шепетюк/, "це той шо співак?"],
    [/го міт/, "чел ти ще не там?"],
    [/Бігун|бігун/, "Шо він далі цю херню пиздить?"],
    [/Серік|серік/, "нашо тобі він він має тебе на увазі..."],
    [/по факту/, "максимально по факту"],
    [/бот|Бот/, "оу як я бот то хуй тобі у рот"],
    [/ти де/, "я тут а ти бляха де?"],
    [/yarn start/,'Перестань займатись херньою і постав npm'],
    [/знаю/, "Всьо знаєш ти в сраці був гівно видів"],
    [/скучно/, "ой блять, може тобі музику заказати"], 
    [/чуєш/, "переночуєш..."],
    [/асд|АСД/,"Ті що мають тебе на увазі..."],
    [/сопронюк|Сопронюк/,"дякуй що вона тебе не вигнала"],
    [/api|API/, "Це то шо на дотнеті пишеться???"],
    [/аристович|Аристович/ ,"Дороу шо ти? 2-3 тижні проблем нема не?"],
    [/дякую|Дякую/,"не дякуйте, подрочите) ..."],
    [/красава/,"ну не такий канешно як я, но може бути)"],
    [/розвалєвич|розвалевіч|розвалєвіч/, "НУ не пизди хуйню окей?!"],
    [/вибач/, "НУ вибач цього дауна..."],
    [/хах/, "хааххахахах дуже смішно"]
];

const schedule = [
    {
        day : 'monday',
        shcedule : 'https://i.ibb.co/QHkRPpJ/monday.jpg',
        level : "нууу можна жити"
    },
    {
        day : "tuesday",
        shcedule : "https://i.ibb.co/qYXBQ69/tuesday.jpg",
        level : "хуху а тут АО..."
    },
    {
        day : "wednesday",
        shcedule : "https://i.ibb.co/mtX9Dgb/wednesday.jpg",
        level : "жостко, шепетюк дороу"
    },
    {
        day : "thursday",
        shcedule : "https://i.ibb.co/mhybDrW/thursday.jpg",
        level : "бігуновський кидановський"
    },
    {
        day : "friday",
        shcedule : "https://i.ibb.co/Fh4XFyG/friday.jpg",
        level : "СОУ ізі..."
    }
]

const usersInfo = [
    {
        name : "Макс",
        surname : "Мар`янчук",
        birthday : "01.01.2004",
        language : ".NET, ReactJS",
        key : "Maks_Maryanchuk"
    },
    {
        name : "Сергій",
        surname : "Дворянніков",
        birthday : "27.06.2003",
        language : "ReactJS, NodeJS",
        key : "serhiy_dvoryannikov"
    },
    {
        name : "Варвара-Марія",
        surname : "Гончарюк",
        birthday : "29.08.2002",
        language : "ReactJS",
        key : "varya_2908"
    },
    {
        name : "Вова",
        surname : "Романюк",
        birthday : "15.04.2003",
        language : "ReactJS, NodeJs",
        key : "thermk"
    },
    {
        name : "Назар",
        surname : "Лакуста",
        birthday : "17.10.2003",
        language : "Java",
        key : "nazarko1703"
    }
]


const scheduleInfo = [
    {
        day : "Monday",
        keyDay : 1,
        lessons : [
            {
                name : "Технології Програмування Java лаба",
                teacher : "Романенко Н.В",
                minute : 20,
                hours : 8
            },
            {
                name : "Технології Програмування Java лекція",
                teacher : "Романенко Н.В",
                minute : 50,
                hours : 9
            },
            {
                name : "Математична Статистика мова R лекція",
                teacher : "Дорошенко І.В",
                hours : 11,
                minute : 30
            },
            {
                name : "Математична Статистика мова R лаба",
                teacher : "Дорошенко І.В",
                minute : 50,
                hours : 12
            },
        ]
    },
    {
        day : "Tuesday",
        keyDay : 2,
        lessons : [
            {
                name : "Числові методи",
                teacher : "Юрійчук А.О",
                minute : 20,
                hours : 8
            },
            {
                name : "Web - дизайн",
                teacher : "Філіпчук М.П",
                minute : 50,
                hours : 9
            },
            {
                name : "Web - дизайн лаба",
                teacher : "Філіпчук М.П",
                hours : 11,
                minute : 30
            },
        ]
    },
    {
        day : "Wednesday",
        keyDay : 3,
        lessons : [
            {
                name : "Математична теорія ризиків лекція",
                teacher : "Мельник Г.В",
                minute : 20,
                hours : 8
            },
            {
                name : "Математична теорія ризиків лаба",
                teacher : "Мельник Г.В",
                minute : 50,
                hours : 9
            },
            {
                name : "Управління проектами лаба",
                teacher : "Шепетюк Б.Д",
                hours : 11,
                minute : 30
            },
        ]
    },    
    {
        day : "Thursday",
        keyDay : 4,
        lessons : [
            {
                name : "Числові методи",
                teacher : "Бігун Я.Й",
                minute : 20,
                hours : 8
            },
            {
                name : "Теорія ймовірностей та мат статистика",
                teacher : "Пасічник Г.С",
                minute : 50,
                hours : 9
            },
            {
                name : "Теорія ймовірностей та мат статистика",
                teacher : "Кушнірчук В.Й",
                hours : 11,
                minute : 30
            },
        ]
    },
    {
        day : "Friday",
        keyDay : 5,
        lessons : [
            {
                name : "Іноземна Мова практика",
                teacher : "Мельничук Н.О",
                minute : 20,
                hours : 8
            },
            {
                name : "Управління проектами",
                teacher : "Шепетюк Б.Д",
                minute : 50,
                hours : 9
            },
            {
                name : "Управління проектами",
                teacher : "Шепетюк Б.Д",
                hours : 11,
                minute : 30
            },
        ]
    },
    {
        day : "Saturday",
        keyDay : 6,
        lessons : [
            {
                name : "ОПа па",
                teacher : "Макс",
                minute : 33,
                hours : 20
            },
            {
                name : "Управління проектами",
                teacher : "Шепетюк Б.Д",
                minute : 34,
                hours : 20
            },
            {
                name : "Управління проектами",
                teacher : "Шепетюк Б.Д",
                minute : 35,
                hours : 20
            },
        ]
    },
]

module.exports = { hears, schedule, usersInfo, scheduleInfo};