const DefaultSettings = {
    "enabled":  true,
    "alerted":  true, // Всплывающие уведомления
    "notice":   true, // Всплывающие уведомления
	"party":   false, // Уведомление для пати
    "messager": true, // Журнал сообщений
    "marker":   true, // Столб света
    "itemId":  88704, // Голова драколота
     "bosses": [
        {huntingZoneId: 1023, templateId:     3000, name: "(Мероприятие)~Тень Дуриона"},
        {huntingZoneId: 1023, templateId: 20150805, name: "(Мероприятие)~Тень Дуриона"},
        {huntingZoneId: 1023, templateId: 88888888, name: "(Мероприятие)~Сундук с сокровищами"},
        {huntingZoneId: 1023, templateId: 88888889, name: "(Мероприятие)~Сундук с сокровищами"},
        {huntingZoneId: 1023, templateId:   160341, name: "(Мероприятие)~Дед Мороз"},
        {huntingZoneId: 1023, templateId: 99999997, name: "(Мероприятие)~Толстый Санта"},
        {huntingZoneId: 1023, templateId: 99999998, name: "(Мероприятие)~Крошечный Санта"},
        {huntingZoneId: 1023, templateId: 99999991, name: "(Мероприятие)~Кайман-вор яиц"},
        {huntingZoneId: 1023, templateId: 99999992, name: "(Мероприятие)~Кайман-вор яиц"},
        {huntingZoneId: 1023, templateId: 99999999, name: "(Мероприятие)~Кайман-вор яиц"},
        {huntingZoneId:  183, templateId:     6002, name: "(Мероприятие)~AirDrop"},
/* ==== South Arun ======================================================================================== */
        {huntingZoneId:   2, templateId: 1271, name: "[Аркадия]~Аркун~(Дивный лес)"},
        {huntingZoneId:   3, templateId: 1271, name: "[Аркадия]~Аркун~(Леса Забвения)"},
        {huntingZoneId:   5, templateId: 1271, name: "[Аркадия]~Аркун~(Трясина Туванги)"},
        {huntingZoneId:   6, templateId: 1271, name: "[Аркадия]~Аркун~(Долина титанов)"},
        {huntingZoneId:   7, templateId: 1271, name: "[Аркадия]~Аркун~(Небесные Холмы)"},
        {huntingZoneId:   4, templateId: 1271, name: "[Остгарат]~Иторо~(Фирмаунт)"},
        {huntingZoneId:   9, templateId: 1271, name: "[Остгарат]~Иторо~(Долина Вознесения)"},
        {huntingZoneId:  10, templateId: 1271, name: "[Остгарат]~Иторо~(Остров Серпантис)"},
        {huntingZoneId:  11, templateId: 1271, name: "[Остгарат]~Иторо~(Изрезаный берег)"},
        {huntingZoneId:  12, templateId: 1271, name: "[Остгарат]~Иторо~(Остров Мистмур)"},
        {huntingZoneId:  15, templateId: 1271, name: "[Попория]~Форета~(Утесы Безумия)"},
        {huntingZoneId:  16, templateId: 1271, name: "[Попория]~Форета~(Долина Клыка)"},
        {huntingZoneId:  17, templateId: 1271, name: "[Попория]~Форета~(Ущелье Параанон)"},
        {huntingZoneId:  23, templateId: 1271, name: "[Попория]~Форета~(Озеро Слез)"},
        {huntingZoneId:  18, templateId: 1271, name: "[Вал-Ауреум]~Виадун~(Исполинские развалины)"},
        {huntingZoneId:  19, templateId: 1271, name: "[Вал-Ауреум]~Виадун~(Вольноземье)"},
        {huntingZoneId:  21, templateId: 1271, name: "[Вал-Ауреум]~Виадун~(Утес Василисков)"},
        {huntingZoneId:  24, templateId: 1271, name: "[Вал-Ауреум]~Виадун~(Аурумская дорога)"},
/* ==== South Shara ======================================================================================== */
        {huntingZoneId:  26, templateId: 1271, name: "[Эссения]~Эсат~(Блаженное озеро)"},
        {huntingZoneId:  27, templateId: 1271, name: "[Эссения]~Эсат~(Эссенийский хребет)"},
        {huntingZoneId:  28, templateId: 1271, name: "[Эссения]~Эсат~(Гибельный лес)"},
        {huntingZoneId:  29, templateId: 1271, name: "[Эссения]~Эсат~(Извечный лес)"},
        {huntingZoneId:  30, templateId: 1271, name: "[Район Веритас]~Вэлса~(Убежище Балдера)"},
        {huntingZoneId:  31, templateId: 1271, name: "[Вестония]~Сторан~(Предел Бурь)"},
        {huntingZoneId:  32, templateId: 1271, name: "[Вестония]~Сторан~(Гора Тираннас)"},
        {huntingZoneId:  34, templateId: 1271, name: "[Вестония]~Сторан~(Морозный предел)"},
        {huntingZoneId:  35, templateId: 1271, name: "[Вал-Элениум]~Виас~(Вирмово ущелье)"},
        {huntingZoneId:  36, templateId: 1271, name: "[Вал-Элениум]~Виас~(Тор-Эксул)"},
        {huntingZoneId:  38, templateId: 1271, name: "[Вал-Элениум]~Виас~(Каньон Сиенна)"},
        {huntingZoneId:  40, templateId: 1271, name: "[Вал-Палрада]~Ваннева~(Зона карантина)"},
        {huntingZoneId:  41, templateId: 1271, name: "[Вал-Палрада]~Ваннева~(Свирепая долина)"},
/* ==== North of Shara ======================================================================================== */
        {huntingZoneId:  45, templateId: 1271, name: "[Вал-Тиркай]~Лотика~(Питомник аргонов)"},
        {huntingZoneId:  47, templateId: 1271, name: "[Вал-Тиркай]~Лотика~(Лес Тиркай)"},
        {huntingZoneId:  48, templateId: 1271, name: "[Район Хелкан]~Хелкун~(Хановарские предместья)"},
        {huntingZoneId:  49, templateId: 1271, name: "[Вал-Кэли]~Тезлуар~(Аргония)"},
        {huntingZoneId:  50, templateId: 1271, name: "[Вал-Кэли]~Тезлуар~(Гранаркус)"},
        {huntingZoneId:  51, templateId: 1271, name: "[Лоркада]~Лоакун~(Долина пиков)"},
        {huntingZoneId:  52, templateId: 1271, name: "[Лоркада]~Лоакун~(Долина Проклятых)"},
        {huntingZoneId:  54, templateId: 1271, name: "[Силванот]~Силвета~(Соливуд)"},
        {huntingZoneId:  55, templateId: 1271, name: "[Силванот]~Силвета~(Дрожащий лес)"},
        {huntingZoneId:  56, templateId: 1271, name: "[Силванот]~Силвета~(Шепчущие леса)"},
        {huntingZoneId:  57, templateId: 1271, name: "[Силванот]~Силвета~(Амена-Кватла)"},
/* ===== North of Arun ======================================================================================= */
        {huntingZoneId: 172, templateId: 1271, name: "[Вал-Орин]~Варэку~(Дикарский Предел)"},
        {huntingZoneId: 181, templateId: 1271, name: "[Вал-Орин]~Варэку~(Экс-Прима)"},
        {huntingZoneId: 182, templateId: 1271, name: "[Вал-Орин]~Варэку~(Долина Источников)"},
        {huntingZoneId: 183, templateId: 1278, name: "[Вал-Орин]~Варэку~(Окрестности Верхнего Дозора)"},
        {huntingZoneId: 191, templateId: 1271, name: "[Вал-Орин]~Варэку~(Аркс-Умбра)"},
/* ==== Island of Dawn ======================================================================================== */
        {huntingZoneId:  13, templateId: 1271, name: "[Остров Зари]~Бардун~(Остров Зари)"},
/* ==== Continents ======================================================================================== */
        {huntingZoneId:  63, templateId: 1278, name: "[Территория]~Веракун~(Велика)"},
        {huntingZoneId:  72, templateId: 1278, name: "[Территория]~Аллума~(Аллемантея)"},
        {huntingZoneId:  84, templateId: 1278, name: "[Территория]~Кай Тера~(Кайатор)"},
/* ==== Secret store ======================================================================================== */
        {huntingZoneId:  63, templateId: 1271, name: "Питер Бэйл~(Велика-1)"},
        {huntingZoneId:  63, templateId: 1279, name: "Питер Бэйл~(Велика-2)"},
        {huntingZoneId:  72, templateId: 1271, name: "Хью Моск~(Аллемантея)"},
        {huntingZoneId:  84, templateId: 1271, name: "Кейл Лунный свет~(Кайатор)"},
        {huntingZoneId: 183, templateId: 1271, name: "Джон Доу~(Окрестности Верхнего Дозора)"},
/* ==== Goblin Starc ====================================================================================== */
        {huntingZoneId:  63, templateId: 1276, logTime: 0, name: "1-Гоблин, ответственный за доставку~(Велика)"},
        {huntingZoneId:  63, templateId: 1284,             name: "1-Гоблин, ответственный за доставку~(Велика)"},
        {huntingZoneId:  84, templateId: 1276, logTime: 0, name: "2-Гоблин, ответственный за доставку~(Кайатор)"},
        {huntingZoneId:  72, templateId: 1276, logTime: 0, name: "3-Гоблин, ответственный за доставку~(Аллемантея)"},
        {huntingZoneId: 183, templateId: 1276, logTime: 0, name: "4-Гоблин, ответственный за доставку~(Окрестности Верхнего Дозора)"},
/* ==== Raid BOSS ======================================================================================== */
        {huntingZoneId:  26, templateId: 5001, logTime: 0, name: "Ортан~(Блаженное Озеро)"},
        {huntingZoneId:  39, templateId:  501, logTime: 0, name: "Хазар~(Фронтера)"},
        {huntingZoneId:  51, templateId: 4001, logTime: 0, name: "Кэлос~(Долина Пиков)"},
/* ==== World BOSS ======================================================================================== */
        {huntingZoneId: 10,   templateId:       99, name: "(Остров Серпентис)~Божественный грабитель"},
        {huntingZoneId: 4,    templateId:     5011, name: "(Фирмаунт~)Бурный канаш"},
        {huntingZoneId: 38,   templateId:       35, name: "(Каньон Сиенна)~Никсаррас"},
        {huntingZoneId: 57,   templateId:       33, name: "(Амена-Кватла)~Бетсаэль"},
        {huntingZoneId: 51,   templateId:     7011, name: "(Долина пиков)~Линифи"},
        {huntingZoneId: 52,   templateId:     9050, name: "(Долина Проклятых)~Юнарас Зубастый"},
/* ==== Escodor elite mobs ======================================================================================== */
        {huntingZoneId: 2020, templateId: 1100, name: "Элитный высший дракон-преследователь"},
        {huntingZoneId: 2020, templateId: 1101, name: "Элитный высший дракон-советник"},
        {huntingZoneId: 2020, templateId: 1102, name: "Элитный высший дракон-покоритель"},
        {huntingZoneId: 2020, templateId: 1200, name: "Элитный наг-жрец"},
        {huntingZoneId: 2020, templateId: 1201, name: "Элитный наг-рыцарь"},
        {huntingZoneId: 2020, templateId: 1202, name: "Элитный наг-пристав"},
        {huntingZoneId: 2020, templateId: 1300, name: "Манук"},
        {huntingZoneId: 2020, templateId: 1400, name: "Аксилоп"},
        {huntingZoneId: 2020, templateId: 1500, name: "Джемезис"},
        {huntingZoneId: 2020, templateId: 1600, name: "Красный лишайник"},
        {huntingZoneId: 2020, templateId: 1601, name: "Циклоп"},
        {huntingZoneId: 2020, templateId: 1700, name: "Бэкис"}
    ]
};

module.exports = function MigrateSettings(from_ver, to_ver, settings) {
    if (from_ver === undefined) {
        // Migrate legacy config file
        return Object.assign(Object.assign({}, DefaultSettings), settings);
    } else if (from_ver === null) {
        // No config file exists, use default settings
        return DefaultSettings;
    } else {
        // Migrate from older version (using the new system) to latest one
        if (from_ver + 1 < to_ver) { // Recursively upgrade in one-version steps
            settings = MigrateSettings(from_ver, from_ver + 1, settings);
            return MigrateSettings(from_ver + 1, to_ver, settings);
        }
        // If we reach this point it's guaranteed that from_ver === to_ver - 1, so we can implement
        // a switch for each version step that upgrades to the next version. This enables us to
        // upgrade from any version to the latest version without additional effort!
        switch (to_ver) {
            default:
                let oldsettings = settings
                settings = Object.assign(DefaultSettings, {});
                for (let option in oldsettings) {
                    if (option == "bosses") continue
                    if (settings[option]) {
                        settings[option] = oldsettings[option]
                    }
                }
                break;
        }
        return settings;
    }
}
