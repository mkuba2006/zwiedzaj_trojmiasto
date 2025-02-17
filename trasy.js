const trasy = [
    {
        miasto: "Gdańsk",
        nazwa: "Droga Królewska",
        opis: "Zwiedzanie zaczynamy od Bramy Wyżynnej, łączącej funkcję obronną i reprezentacyjną. Obejrzymy Zespół Przedbramia, Dwór Bractwa św. Jerzego, Złotą Bramę (zwaną niegdyś Bramą Dlugouliczną). Zwiedzając ulicę Długą przyjrzymy się wyjątkowym kamieniczkom. Zobaczymy Dom Uphagena, kamienicę Czirenbergów, Ferberow, a także wyjątkowy Ratusz Glównego Miasta. Poznamy historię powstania Fontanny Neptuna, a także widniejącego tuż za nim Dworu Artusa. Na Długim Targu możemy przyjrzeć się wyjątkowej Złotej Kamienicy, kolumnie meteorologicznej Fahrenheita, kamienicy podcieniowej, a także Zielonej Bramie i Zielonym Moście. Tam możemy zakończyć nasz spacer. Czas ok. 3 godzininy.",
        img:'./obrazy/gd1.jpg'
    },
    {
        miasto: "Gdańsk",
        nazwa: "Droga Królewska wraz z Kościołem Mariackim",
        opis: "Spacer wiedzie jak w trasie 1. Za Zieloną Bramą skręcamy w lewo. Poznajemy historię fortyfikacji, bram wodnych. Dochodzimy do ulicy Mariackiej, ulicy Plebani, a następnie zwiedzamy Bazylikę Mariacką. Na zakończenie spaceru zaproszę do Wiekiej Zbojowni. Czas zwiedzania to około 4 godziny.",
        img:'./obrazy/brama.jpg'
    },
    {
        miasto: "Gdańsk",
        nazwa: "Stare Przedmieście i Dolne Miasto",
        opis: "Spacer rozpoczynamy przed siedzibą Urzędu Marszałkowskiego Województwa Pomorskiego, obejrzymy pozostałości dawnych fortyfikacji przy ulicy Okopowej, budynek Gimnazjum Polskiego, idąc przy Baszcie Białej skręcamy przy Małej Zbrojowni, obecnie budynkach ASP w Gdańsku, Wydział Rzeźby i Multimediów. Potem zdobywamy Bastion św. Gertrudy, Bramę Nizinną, Bastion Żubr i Śluzę Kamienną. Idąc obok Bastionu Wilk i Wyskok dochodzimy do robotniczej części miasta, w której możemy zapoznać się z ciekawą historią Dworu Uphagena, kościołem przy ulicy Łąkowej. Na koniec poznajemy ciekawą architekturę i historię Fabryki Karabinów, Fabrykę Monopolu Tytoniowego. Tu zakończymy spacer. Czas trwania to około 2 godziny.",
        img:'./obrazy/marszal.jpg'
    },
    {
        miasto: "Gdańsk",
        nazwa: "Stare Miasto",
        opis: "Spacer poświęcony dawnym rzemieślnikom, ludziom nauki i tym którzy nie wahali się pomagać potrzebującym. Rozpoczynamy nasze zwiedzanie przy kościele św. Elżbiety, przechodzimy pod kocioł św. Józefa, następnie pod Dom Opatów Pelplinskich, Ratusz Staromiejski, pomnik Jana Heweliusza, Wielki Młyn. Potem po drugiej stronie ulicy zobaczymy piękny gotycki kościół św. Katarzyny. Tuż za nim stoi kolejna piękna budowla kościół p.w. św. Brygidy. Miejsca i budynki na tym spacerze nierozerwalnie łączą się z ciekawą historią naszego miasta. Czas spaceru to około 3 godziny.",
        img:'./obrazy/staremiasto.jpg'
    },
    {
        miasto: "Gdańsk",
        nazwa: "Wrzeszcz - a właściwie Dolny Wrzeszcz",
        opis: "Dzielnica Gdańska nierozerwalnie związana z pisarzem Günterem Grassem. Podczas spaceru zobaczymy jego małą ojczyznę, pięknie opisaną w jego utworach, Blaszanym bębenku, Kocie i myszy czy Psich latach. Czas spaceru to około 2,5 godziny.",
        img:'./obrazy/wrzeszcz2.jpg'
    },
    {
        miasto: "Gdańsk",
        nazwa: "Urokliwy Dolny Wrzeszcz",
        opis: "Spacer rozpoczynamy w Parku Kuźniczki, potem przechodzimy przez Browar w kierunku Placu Wybickiego, gdzie stoi ławeczka Grassa. Obejrzymy gmach II LO na Pestalozziego, potem podejdziemy pod dom noblisty mieszczący się przy Lelewela. Potem rondo i ulica Wajdeloty, park nad Strzyżą. Warto obejrzeć kościół św. Andrzeja Boboli, przejść się ulicą Stanisława Dubois, Bolesława Chrobrego. Spacer warto zakończyć przy koszarach na Legionów. Czas spaceru to około 2,5 godziny.",
        img:'./obrazy/wrzeszcz.jpg'
    },
    {
        miasto: "Gdańsk",
        nazwa: "Oliwa",
        opis: "Przepiękna część Gdańska z katedrą i parkiem, na zawsze związana z historią naszego regionu. Poza Archikatedrą możemy zobaczyć kościół św. Jakuba, Dom św. Bernarda i tzw. Szkołę czerwoną, Młyn, Staw Młyński, Dom Zarazy, Stary Rynek Oliwski. Na koniec warto odpocząć w parku. Czas zwiedzania około 3 godziny.",
        img:'./obrazy/oliwa.jpg'
    },
    {
        miasto: "Gdańsk",
        nazwa: "Westerplatte",
        opis: "To wyjątkowe miejsce na mapie turystycznej. Trzeba tu przyjechać (można też przypłynąć), aby zapoznać się z historią tego wyjątkowego skrawka Polski. Czas zwiedzania to około 3 godziny.",
        img:'./obrazy/westerplatte.jpg'
    },

    // Trasy dla Sopotu
    {
        miasto: "Sopot",
        nazwa: "Centrum Sopotu",
        opis: "Spacer, podczas którego zobaczymy najbardziej znane budynki i miejsca letniej stolicy Polski. Zaczniemy od Ratusza w Sopocie, przejdziemy ulicą Kościuszki w stronę Monte Cassino. Po drodze zobaczymy pocztę, kościół św. Jerzego, pomnik Parasolnika, Misia Wojtka. Skręcimy do Dworku Sierakowskich. Potem zejdziemy najbardziej znanym deptakiem w kierunku zatoki, mijając po drodze Krzywy Domek, pomnik Jasia Rybaka, Dom Zdrojowy i zakład Balneologiczny. Po odpoczynku na molo warto zagłębić się w historię Grand Hotelu i Jana Jerzego Haffnera, którego pomnik stoi w Parku Północnym. Na koniec warto wspomnieć o Agnieszce Osieckiej i jej Teatrze Atelier. Czas trwania spaceru to około 3 godziny.",
        img:'./obrazy/sp1.jpg'
    },
    {
        miasto: "Sopot",
        nazwa: "Od zamierzchłej przeszłości po dzień dzisiejszy",
        opis: "Chcąc dobrze poznać Sopot warto odwiedzić wczesnośredniowieczne grodzisko, zobaczyć jak żyli ludzie przed wiekami, zapoznać się z ich codziennym życiem, wierzeniami, zwyczajami. Potem przenieść się podczas spaceru do teraźniejszości, obejrzeć charakterystyczną dla Sopotu architekturę, poznać bogatą historię miasta. Z grodziska kierujemy się w stronę ulicy Monte Cassino, skręcamy w lewo, kierujemy się w stronę Zakładu Balneologicznego. Potem kierujemy się w stronę Grand Hotelu i pomnika Jana Jerzego Haffnera. Czas spaceru to około 3,5 godziny. Po wcześniejszym uzgodnieniu można zorganizować warsztaty w Grodzisku (ognisko).",
        img:'./obrazy/Multimedia (1).jpg'
    },

    // Trasy dla Gdyni
    {
        miasto: "Gdynia",
        nazwa: "Gdynia miastem z morza i marzeń",
        opis: "Spacer rozpoczynamy przy dworcu Gdynia Główna, podejdziemy do Sądu Rejonowego i Hali Targowej, a następnie kierujemy się w stronę ulicy 10 lutego. Po drodze mijamy pomnik Wysiedlonych Gdynian. Na rogu 10 lutego 3 maja możemy podziwiać wyjątkowy budynek zwany 'Bankowcem', po drugiej stronie budynek BGK, czy też budynek PLO. Dalej widzimy Pocztę Polską, Dom towarowy Batory, Dom wójta Radtkiego. Przechodzimy na Skwer Kościuszki, Molo Południowe gdzie mamy doskonały widok na okoliczne kamienice, Sea Towers, Molo Rybackie, pomnik Tadeusza Wendy. Będąc tu warto wejść na pokład ORP Błyskawicy, czy też Daru Pomorza i poznać ich fascynującą historię. Ciekawym miejscem jest Akwarium Gdyńskie, w którym i dorośli, i dzieci mogą ciekawie spędzić czas. Obok jest marina gdyńska, pomnik generała Zaruskiego, a tuż obok plaża miejska. Spacer kończymy przy Teatrze Muzycznym. Czas spaceru bez zwiedzania okrętu i fregaty to około 3 godziny.",
        img:'./obrazy/gdynia.jpg'
    },
    {
        miasto: "Gdynia",
        nazwa: "Kamienna Góra",
        opis: "Na miejscu oglądamy Gdynię 'z góry', poznajemy jej niezwykłą historię i architekturę zaczynając od Oksywia, przez budowę portu, rozwój miasta, na teraźniejszości kończąc. Po zaspokojeniu ciekawości warto przespacerować się pomiędzy wyjątkowymi rezydencjami, w których mieszkali niebanalni gdynianie, jak kapitan Burhard, czy hrabina Maria Magdalena Łosiowa z mężem komandorem Andrzejem Łosiem, która zasłynęła z tego, że zapragnęła przy swojej rezydencji mieć... schron. Czas spaceru to około 3 godziny.",
        img:'./obrazy/kamienna.jpg'
    },
    {
        miasto: "Gdynia",
        nazwa: "Sielskie Orłowo",
        opis: "Nasz spacer zaczniemy od mola w Orłowie, przejdziemy się obok ławeczki Antoniego Suchanka, podejdziemy pod Adlerówkę i poznamy jej niezwykłą historię. Tuż obok zobaczymy, a może i zwiedzimy Domek Żeromskiego. Promenadą Marysieńki udamy się do parku Kolibkowskiego. Tam zobaczymy grotę Marysieńki, dwór, stajnię i wozownię. Na koniec spaceru podejdziemy pod pomnik poświęcony żołnierzom 2 Morskiego Pułku Strzelców i cmentarz kolibkowski. Czas trwania spaceru to około 2,5 godziny.",
        img:'./obrazy/orlowo.jpg'
    }
];





const sumaContainer = document.createElement('div');
sumaContainer.classList.add('suma-container');

const ul = document.createElement('ul');

const cities = ["Gdańsk", "Sopot", "Gdynia"]; 
const cityButtonsContainer = document.createElement('div');
cityButtonsContainer.classList.add('city-buttons-container');

// Inicjalizacja ScrollReveal
const sr = ScrollReveal({
    distance: '50px',
    duration: 800,
    easing: 'ease-out',
    reset: false // Jeśli chcesz, by animacja uruchamiała się ponownie przy ponownym pojawieniu się elementu.
});

cities.forEach(city => {
    const button = document.createElement('button');
    button.textContent = city;
    button.classList.add('city-button');

    button.addEventListener('click', () => {
        if (button.classList.contains('active')) {
            updateOffers("All");
            document.querySelectorAll('.city-button').forEach(btn => {
                btn.classList.remove('active');
            });
        } else {
            updateOffers(city);
            document.querySelectorAll('.city-button').forEach(btn => {
                btn.classList.remove('active');
            });
            button.classList.add('active');
        }
    });

    cityButtonsContainer.appendChild(button);
});

sumaContainer.appendChild(cityButtonsContainer);

function updateOffers(city) {
    
    ul.innerHTML = ''; // Czyścimy poprzednie oferty
    trasy.forEach((trasa, index) => {
        if (trasa.miasto === city || city === "All") {
            const div = document.createElement('div');
            div.classList.add('trasa');
            div.id = `trasa-${index}`;

            const rama = document.createElement('div');
            rama.id = 'rama';

            const img = document.createElement('img'); 
            img.src = trasa.img;  
            img.alt = trasa.nazwa;

            rama.appendChild(img);
            div.appendChild(rama);

            const button = document.createElement('button');
            button.textContent = trasa.nazwa;
            button.addEventListener('click', () => {
                div.classList.toggle('active');
            });

            div.appendChild(button);

            const description = document.createElement('div');
            description.classList.add('description');
            description.textContent = trasa.opis;

            div.appendChild(description); 

            ul.appendChild(div);
        }
    });

    sr.reveal('.trasa', { interval: 200 });
}

updateOffers("All");
sumaContainer.appendChild(ul);
document.body.appendChild(sumaContainer);
