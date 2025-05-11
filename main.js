document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('button');
    const quanity = document.getElementById('quanity');
    const footer = document.getElementById('footer');
    const achievements = document.getElementById('achievements');

    const achievementMessages = { 
        10: "🎉 Поздравляем с первыми шагами! Клик за кликом — и вы уже на старте! Отличное начало!",
        50: "🚀 Полёт нормальный! Половина пути до сотни уже пройдена. Скорость нарастает!",
        100: "💥 Юбилейный клик — юбилейный успех! Сотня в активе! Это не просто число — это ваш стартовый импульс!",
        150: "🌟 Преодолеваем барьеры! Полторы сотни — это уже серьёзно! Впереди новые горизонты!",
        200: "🌈 Двойная сила — двойной результат! Двести кликов — вдвое ближе к цели. Вы на волне успеха!",
        300: "🔥 Триста кликов — триумф на старте! Тройная энергия, тройная удача. Продолжайте в том же духе!",
        400: "🏁 Четыре сотни — четверть пути! Четыреста кликов — вы уже как четверть марафона. Но впереди всё самое интересное!",
        500: "🌟 Пятьсот — полпути к тысяче! Половина пути пройдена! Ваша настойчивость достойна аплодисментов.",
        600: "🏆 Шестьсот — вперёд к победе! Шестая часть тысячи позади. Вы уже как настоящий чемпион!",
        700: "🌪️ Семьсот — скорость света! Семь сотен кликов — вы как ураган, сметающий все препятствия!",
        800: "🚨 Восемьсот — почти финиш! Восемь сотен позади. Осталось совсем чуть-чуть — вперёд к победе!",
        900: "🏅 Девятьсот — на финишной прямой! Почти тысяча! Последние усилия — и вы у цели!",
        1000: "🎊 Поздравляем с прохождением! 🥇 Марафон завершён — вы герой! Тысяча кликов — это не просто цифра, это ваше великое достижение! Пусть этот успех станет стартом для новых свершений!"
    };

    let count = parseInt(localStorage.getItem('clickCount')) || 0;
    let savedAchievements = new Set(JSON.parse(localStorage.getItem('achievementsMess')) || []);

    quanity.textContent = count;

    function checkAchievements() {
        Object.keys(achievementMessages).forEach(key => {
            const n = parseInt(key);
            if (count >= n && !savedAchievements.has(n)) {
                savedAchievements.add(n);
                const p = document.createElement('p');
                p.textContent = achievementMessages[n];
                achievements.appendChild(p);
            }
        });

        localStorage.setItem('achievementsMess', JSON.stringify(Array.from(savedAchievements)));
    }

    checkAchievements();

    button.addEventListener('click', () => {
        count++;
        quanity.textContent = count;
        localStorage.setItem('clickCount', count);

        checkAchievements();
    });
});











    //this code work incorrect
    // let count = parseInt(localStorage.getItem('clickCount')) || 0;
    // const savedAchievements = JSON.parse(localStorage.getItem('achievements')) || [];

    // if (!button || !quanity) {
    //     return console.log('Elements not found');
    // }

    // quanity.textContent = count;

    // button.addEventListener('click', function () {
    //     let currentCount = parseInt(quanity.textContent) || 0;
    //     quanity.textContent = currentCount + 1;
    //     count = currentCount + 1;

    //     if (count > 8) {
    //         const p = document.createElement('p');
    //         p.textContent = '🎉 Поздравляем с первыми шагами! Клик за кликом — и вы уже на старте! Отличное начало!';
    //         footer.appendChild(p);
    //         if (count > 9) {
    //             p.textContent = '';
    //         }
    //     }

    //     if (count > 48) {
    //         const p = document.createElement('p');
    //         p.textContent = '🚀 Полёт нормальный! Половина пути до сотни уже пройдена. Скорость нарастает! ';
    //         footer.appendChild(p);
    //         if (count > 49) {
    //             p.textContent = ' ';
    //         }
    //     }

    //     if (count > 98) {
    //         const p = document.createElement('p');
    //         p.textContent = '💥 Юбилейный клик — юбилейный успех! Сотня в активе! Это не просто число — это ваш стартовый импульс! ';
    //         footer.appendChild(p);
    //         if (count > 99) {
    //             p.textContent = ' ';
    //         }
    //     }

    //     if (count > 148) {
    //         const p = document.createElement('p');
    //         p.textContent = '🌟 Преодолеваем барьеры! Полторы сотни — это уже серьёзно! Впереди новые горизонты! ';
    //         footer.appendChild(p);
    //         if (count > 149) {
    //             p.textContent = ' ';
    //         }
    //     }

    //     if (count > 198) {
    //         const p = document.createElement('p');
    //         p.textContent = '🌈 Двойная сила — двойной результат! Двести кликов — вдвое ближе к цели. Вы на волне успеха! ';
    //         footer.appendChild(p);
    //         if (count > 199) {
    //             p.textContent = ' ';
    //         }
    //     }

    //     if (count > 298) {
    //         const p = document.createElement('p');
    //         p.textContent = '🔥 Триста кликов — триумф на старте! Тройная энергия, тройная удача. Продолжайте в том же духе! ';
    //         footer.appendChild(p);
    //         if (count > 299) {
    //             p.textContent = ' ';
    //         }
    //     }

    //     if (count > 398) {
    //         const p = document.createElement('p');
    //         p.textContent = '🏁 Четыре сотни — четверть пути! Четыреста кликов — вы уже как четверть марафона. Но впереди всё самое интересное! ';
    //         footer.appendChild(p);
    //         if (count > 399) {
    //             p.textContent = ' ';
    //         }
    //     }

    //     if (count > 498) {
    //         const p = document.createElement('p');
    //         p.textContent = '🌟 Пятьсот — полпути к тысяче! Половина пути пройдена! Ваша настойчивость достойна аплодисментов. ';
    //         footer.appendChild(p);
    //         if (count > 499) {
    //             p.textContent = ' ';
    //         }
    //     }

    //     if (count > 598) {
    //         const p = document.createElement('p');
    //         p.textContent = '🏆 Шестьсот — вперёд к победе! Шестая часть тысячи позади. Вы уже как настоящий чемпион! ';
    //         footer.appendChild(p);
    //         if (count > 599) {
    //             p.textContent = ' ';
    //         }
    //     }

    //     if (count > 698) {
    //         const p = document.createElement('p');
    //         p.textContent = '🌪️ Семьсот — скорость света! Семь сотен кликов — вы как ураган, сметающий все препятствия! ';
    //         footer.appendChild(p);
    //         if (count > 699) {
    //             p.textContent = ' ';
    //         }
    //     }

    //     if (count > 798) {
    //         const p = document.createElement('p');
    //         p.textContent = '🚨 Восемьсот — почти финиш! Восемь сотен позади. Осталось совсем чуть-чуть — вперёд к победе!';
    //         footer.appendChild(p);
    //         if (count > 799) {
    //             p.textContent = ' ';
    //         }
    //     }

    //     if (count > 898) {
    //         const p = document.createElement('p');
    //         p.textContent = '🏅 Девятьсот — на финишной прямой! Почти тысяча! Последние усилия — и вы у цели!';
    //         footer.appendChild(p);
    //         if (count > 899) {
    //             p.textContent = ' ';
    //         }
    //     }

    //     if (count > 998) {
    //         const p = document.createElement('p');
    //         p.textContent = '🎊 Поздравляем с прохождением! 🥇 Марафон завершён — вы герой!';
    //         footer.appendChild(p);
    //         if (count > 999) {
    //             p.textContent = ' ';
    //         }
    //     }

    //     localStorage.setItem('clickCount', count);
    //     localStorage.setItem('achievements', JSON.stringify(savedAchievements));
    // });
