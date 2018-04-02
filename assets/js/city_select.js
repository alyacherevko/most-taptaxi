 function configureDropDownLists(ddl1,ddl2) {
        var kasan = new Array('Aльметьевск', 'Набережные Челны', 'Нижнекамск');
        var krasnodar = new Array('Анапа', 'Белореченск', 'Геленджик', 'Горячий', 'Джубга', 'Новороссийск', 'Сочи', 'Tимашевск', 'Усть Лабинск');
        var ninovgorod = new Array('Дзержинск', 'Заволжье', 'Семенов');
        var novorossisk = new Array('Геленджик');
        var samara = new Array('Волжский', 'Сызрань', 'Тольятти');
        var sochi = new Array('Анапа', 'Красная Поляна', 'Туапсе');
        var sterlitamak = new Array('Cалават');
        var tolyatti = new Array('Cызрань');
        var ufa = new Array('Hефтекамск', 'Cалават', 'Cтерлитамак');
        var all = new Array('Aльметьевск', 'Анапа', 'Белореченск', 'Волжский', 'Геленджик', 'Горячий', 'Джубга', 'Дзержинск', 'Заволжье', 'Красная Поляна', 'Набережные Челны', 'Hефтекамск', 'Новороссийск', 'Cалават', 'Семенов', 'Сочи', 'Cызрань', 'Tимашевск', 'Тольятти', 'Туапсе', 'Усть Лабинск');

        switch (ddl1.value) {
            case 'kasan':
                ddl2.options.length = 0;
                for (i = 0; i < kasan.length; i++) {
                    createOption(ddl2, kasan[i], kasan[i]);
                }
                break;
            case 'krasnodar':
                ddl2.options.length = 0;
            for (i = 0; i < krasnodar.length; i++) {
                createOption(ddl2, krasnodar[i], krasnodar[i]);
                }
                break;
            case 'ninovgorod':
                ddl2.options.length = 0;
                for (i = 0; i < ninovgorod.length; i++) {
                    createOption(ddl2, ninovgorod[i], ninovgorod[i]);
                }
                break;
            case 'novorossisk':
                ddl2.options.length = 0;
                for (i = 0; i < novorossisk.length; i++) {
                    createOption(ddl2, novorossisk[i], novorossisk[i]);
                }
                break;
                case 'samara':
                ddl2.options.length = 0;
                for (i = 0; i < samara.length; i++) {
                    createOption(ddl2, samara[i], samara[i]);
                }
                break;
                case 'sochi':
                ddl2.options.length = 0;
                for (i = 0; i < sochi.length; i++) {
                    createOption(ddl2, sochi[i], sochi[i]);
                }
                break;
                case 'sterlitamak':
                ddl2.options.length = 0;
                for (i = 0; i < sterlitamak.length; i++) {
                    createOption(ddl2, sterlitamak[i], sterlitamak[i]);
                }
                break;
                case 'tolyatti':
                ddl2.options.length = 0;
                for (i = 0; i < tolyatti.length; i++) {
                    createOption(ddl2, tolyatti[i], tolyatti[i]);
                }
                break;
                case 'ufa':
                ddl2.options.length = 0;
                for (i = 0; i < ufa.length; i++) {
                    createOption(ddl2, ufa[i], ufa[i]);
                }
                break;
                default:
                    ddl2.options.length = 0;
                    for (i = 0; i < all.length; i++) {
                      createOption(ddl2, all[i], all[i]);
                    }
                break;
        }

    }

    function createOption(ddl, text, value) {
        var opt = document.createElement('option');
        opt.value = value;
        opt.text = text;
        ddl.options.add(opt);
    }
