const raw_data = {
  "nodes": [
    {
      "uid": "Tadamir",
      "episode": 0,
      "group": 1,
      "isPlayer": true,
      "description": "Tadamir ist ein menschlicher Barde, der in einer behüteten Familie mit vielen Geschwistern aufwuchs."
    },
    {
      "uid": "Jin",
      "episode": 0,
      "group": 1,
      "isPlayer": true,
      "description": "Jin ist ein Changeling, der im Auftrag der Göttin Titania ruchlose Hexenmeister tötet, um das Gleichgewicht der Mächte wieder herzustellen. Er ist oft in der Gestalt einer alten Bekannten zu sehen."
    },
    {
      "uid": "Parmigianino",
      "episode": 0,
      "group": 1,
      "isPlayer": true,
      "description": "Meist 'Nino' genannt, ist ein drahtiger Tortle, der mit seinen Brüdern nach den Lehren des Daikoku-ten erzogen wurde."
    },
    {
      "uid": "Orveyl",
      "episode": 0,
      "group": 1,
      "isPlayer": true,
      "description": "Ein abenteuerlustiger Zentaure, der sich nach einigen Verlusten am Kult der Maschinenmutter rächen will."
    },
    {
      "uid": "Bhavin",
      "episode": 0,
      "group": 1,
      "isPlayer": true,
      "description": "Bhavin ist ein Kalashtar, der auf einer Hochebene aufwuchs und die Magie der Wiederherstellung erlernte. Er wohnt mit seiner Frau und den Kindern auf einem Bauernhof in einem Wald. Als sein Wassergeist ihm den Auftrag gab Jin zu finden und zu folgen, begann für ihn das Abenteuer. Er ist gerne in der freien Natur, raucht Pfeife, trinkt gerne Fruchtsäfte und spielt gekonnt die Panflöte."
    },
    {
      "uid": "Koalak",
      "group": 10,
      "episode": 0,
      "description": "Zentaurischer Schmied, der sich auch gut mit maschinellen Prothesen auskennt."
    },
    {
      "uid": "Yamato Hoshi",
      "group": 6,
      "episode": 0,
      "description": "Lehrmeister des Daikoku-ten-Klosters"
    },
    {
      "uid": "Masolino",
      "group": 6,
      "episode": 0,
      "description": "Ein kräftiger Tortle, der mit seinen Brüdern nach den Lehren des Daikoku-ten erzogen wurde."
    },
    {
      "uid": "Bronzino",
      "group": 6,
      "episode": 0,
      "description": "Ein pfiffiger Tortle, der mit seinen Brüdern nach den Lehren des Daikoku-ten erzogen wurde."
    },
    {
      "uid": "Filippino",
      "group": 6,
      "episode": 0,
      "description": "Ein vorlauter Tortle, der mit seinen Brüdern nach den Lehren des Daikoku-ten erzogen wurde."
    },
    {
      "uid": "Alba",
      "group": 2,
      "episode": 14,
      "description": [
        {
          "text": "Eine junge Elfe, die sich sehr für alte Sprachen interessiert.",
          "episode": 14
        },
        {
          "text": "Ein gestaltwandelnder Hexenmeister, der angeblich im Namen Titanias handelt.",
          "episode": 16
        }
      ]
    },
    {
      "uid": "Osmonias",
      "names": [
        {
          "text": "???",
          "episode": 16
        },
        {
          "text": "Osmonias",
          "episode": 21
        }
      ],
      "group": 2,
      "episode": 16,
      "description": [
        {
          "text": "???",
          "episode": 16
        },
        {
          "text": "Einer der alten Maschinenpriester, Schöpfer des Riesens.",
          "episode": 21
        }
      ]
    },
    {
      "uid": "Falana",
      "group": 2,
      "episode": 0,
      "description": "Ein elfische Spionin und vermeintliche Diebin"
    },
    {
      "uid": "Leoric",
      "names": [
        {
          "text": "Der Barde",
          "episode": 0
        }
      ],
      "group": 2,
      "episode": 0,
      "description": "Ein berühmter Barde und Wanderer, der oft ohne Ziel und Karte unterwegs war"
    },
    {
      "uid": "Kult der Maschinenmutter",
      "group": 3,
      "episode": 1,
      "description": "Die Anhänger des Kults glauben an die Überlegenheit von Maschinen gegenüber lebenden Wesen. Sie glauben an das Recht des Stärkeren und überfallen ohne Gnade Dörfer und sogar Städte, wenn sie glauben dort interessante Maschinenteile zu erbeuten.",
      "isFaction": true
    },
    {
      "uid": "Smasher",
      "group": 3,
      "episode": 6,
      "description": "General im Kult der Maschinenmutter. Er ist ein muskulöser, dunkelhäutiger Mann, dessen Arme ab den Schultern durch mechanische Arme ersetzt wurden. Mit diesen Armen ist er sogar in der Lage Steinwände zu durchschlagen, wie er bereits mehrfach unter Beweis stellte."
    },
    {
      "uid": "Laserbeam",
      "group": 3,
      "episode": 3,
      "description": "General im Kult der Maschinenmutter. Er ist ein großer, breitschultriger Mann mit langem blonden Haar und stechenden, grünen Augen. Sein Blick verrät den Wahnsinn der in seinem Kopf vorgeht, die Nase sieht aus als wäre sie schon mehrfach gebrochen worden. Sein linker Arm ist von einem glänzenden Metall ummantelt, dessen Ende wie ein kleines Kanonenrohr aussieht."
    },
    {
      "uid": "Loxxkatron",
      "group": 4,
      "episode": 7,
      "description": "Elfling, der angeblich vom Kult der Maschinenmutter gefangen genommen wurde und mit den Helden flüchtete. Die grüne Irokesenfrisur und sein Holzbein sind sehr auffällig."
    },
    {
      "uid": "Grace",
      "names": [
        {
          "text": "Die alte Frau",
          "episode": 12
        },
        {
          "text": "Grace",
          "episode": 20
        }
      ],
      "group": "Tinka",
      "episode": 12,
      "description": [
        {
          "text": "Eine alte Frau, die als Flüchtlin im Stadtpark in der Stadt des Riesen lebt",
          "episode": 12
        },
        {
          "text": "Eine Gelehrte aus dem Süden, die zur Zeit Zuflucht in der Stadt des Riesen sucht. ",
          "episode": 15
        },
        {
          "text": "Eine Gelehrte aus Tinka, die zur Zeit Zuflucht in der Stadt des Riesen sucht. Sie kennt sich mit der vergessenen Schrift aus.",
          "episode": 18
        }
      ]
    },
    {
      "uid": "Die Spielzeugsoldaten",
      "group": 4,
      "isFaction": true,
      "episode": 11,
      "description": "Die größte kriminelle Vereinigung in der Stadt des Riesen"
    },
    {
      "uid": "Gorev",
      "group": 4,
      "episode": 11,
      "description": "Auch bekannt als \"Der Nussknacker\", mächtiger Untergrundboss in der Stadt des Riesen"
    },
    {
      "uid": "Amanda",
      "group": 4,
      "episode": 11,
      "description": "Handlangerin von Gorev"
    },
    {
      "uid": "Sandra",
      "group": 4,
      "episode": 18,
      "description": "Gorevs rechte Hand. Eine junge Frau mit kurzen blonden Haaren, die fast immer ein schelmisches Grinsen aufgelegt hat."
    },
    {
      "uid": "Hauptmann David",
      "group": 5,
      "episode": 10,
      "description": "David war Hauptmann der Stadtwache in der Stadt des Riesen und für das Stadttor verantwortlich."
    },
    {
      "uid": "Liliana",
      "group": 5,
      "episode": 12,
      "description": "Liliana von der Hagelweide, Stadträtin in der Stadt des Riesen."
    },
    {
      "uid": "Ton",
      "group": 4,
      "episode": 11,
      "description": "Ein männlicher Elf, der in der Stadt des Riesen für Gorev arbeitet. Er ist recht schweigsam und beobachtet gern aus der Ferne."
    },
    {
      "uid": "Titania",
      "group": "Gods",
      "episode": 1,
      "description": "Göttin der Fey und Herrscherin des Sommerreichs"
    },
    {
      "uid": "Titanias Schatten",
      "group": "Gods",
      "episode": 17,
      "description": "Ein Schatten, der sich von der Göttin der Fey löste und nun eine eigene Agenda verfolgt."
    },
    {
      "uid": "Lajak",
      "group": "Gods",
      "episode": 1,
      "description": "Gott des Kampfes und des Windes"
    },
    {
      "uid": "Dryasis",
      "group": "Gods",
      "episode": 12,
      "description": "Göttin des Tages, der Sonne und des Friedens. Sie ist eine der weit verbreitetsten Gottheiten in der zerissenen Welt. Ihr Symbol ist der Sonnenaufgang (ein waagerechter Strich mit einem Halbkreis auf der oberen Seite, der eine Sonne symbolisiert). "
    },
    {
      "uid": "Clint",
      "group": 11,
      "episode": 9,
      "description": "Ein verbitterter alter Mann, der allein in einem vom Kult der Maschinenmutter zerstörten Dorf lebt."
    },
    {
      "uid": "Wrakenberg",
      "group": 13,
      "isFaction": true,
      "episode": 2,
      "description": "Ein kleines Dorf, das beinahe Opfer des Kults der Maschinenmutter geworden wäre."
    },
    {
      "uid": "Tinka",
      "group": "Tinka",
      "isFaction": true,
      "episode": 18,
      "description": "Eine große Nation im Süden. Einst ein Königreich, wurde es durch eine blutige Revolution zur Republik und ist heute Ursprung des Kults der Maschinenmutter."
    },
    {
      "uid": "David Friedensbringer",
      "group": "Tinka",
      "episode": 21,
      "description": "Ehemaliger Anführer der blutigen Revolution von Tinka."
    }
  ],
  "links": [
    {
      "source": "Jin",
      "target": "Falana",
      "episode": 0,
      "uid": "Alte Bekannte",
      "description": "Jin ist seit Jahren auf der Suche nach Falana, da sie ihm einen wichtigen Gegenstand gestohlen hat.",
      "value": 3
    },
    {
      "source": "Jin",
      "target": "Alba",
      "uid": "Versuchter Mord",
      "description": "Alba ist die Überlebende eines Angriffs, den Jin im Auftrag seiner Göttin ausgeführt hat. Jin überlebte den Kampf nur knapp und wähnte Alba tot.",
      "episode": 16,
      "value": 3
    },
    {
      "source": "Alba",
      "target": "Tadamir",
      "episode": 21,
      "uid": "Neugier",
      "description": "Nachdem Tadamir sein Geheimnis enthüllt, ist Alba versessen darauf ihn genauer zu untersuchen.",
      "value": 1
    },
    {
      "source": "Parmigianino",
      "target": "Yamato Hoshi",
      "episode": 0,
      "value": 3,
      "uid": "Ziehvater",
      "description": "Meister Hoshi zog Nino und seine Brüder auf"
    },
    {
      "source": "Parmigianino",
      "target": "Masolino",
      "episode": 0,
      "value": 4,
      "uid": "Brüder",
      "description": "Masolino und Parmigianino sind Brüder, die als Eier vor dem Kloster von Meister Hoshi aufgefunden wurden."
    },
    {
      "source": "Masolino",
      "target": "Yamato Hoshi",
      "episode": 0,
      "value": 3,
      "uid": "Ziehvater",
      "description": "Meister Hoshi zog Masolino und seine Brüder auf"
    },
    {
      "source": "Parmigianino",
      "target": "Bronzino",
      "episode": 0,
      "value": 4,
      "uid": "Brüder",
      "description": "Bronzino und Parmigianino sind Brüder, die als Eier vor dem Kloster von Meister Hoshi aufgefunden wurden."
    },
    {
      "source": "Bronzino",
      "target": "Yamato Hoshi",
      "episode": 0,
      "value": 3,
      "uid": "Ziehvater",
      "description": "Meister Hoshi zog Bronzino und seine Brüder auf"
    },
    {
      "source": "Parmigianino",
      "target": "Filippino",
      "episode": 0,
      "value": 4,
      "uid": "Brüder",
      "description": "Filippino und Parmigianino sind Brüder, die als Eier vor dem Kloster von Meister Hoshi aufgefunden wurden."
    },
    {
      "source": "Filippino",
      "target": "Yamato Hoshi",
      "episode": 0,
      "value": 3,
      "uid": "Ziehvater",
      "description": "Meister Hoshi zog Filippino und seine Brüder auf"
    },
    {
      "source": "Grace",
      "target": "Alba",
      "uid": "Neugier",
      "description": "Alba hat Grace in der Stadt des Riesen aufgesucht. Sie ließ sich von ihr bei der Übersetzung eines alten Buches helfen.",
      "episode": 12,
      "value": 1
    },
    {
      "source": "Orveyl",
      "target": "Kult der Maschinenmutter",
      "episode": 0,
      "value": 2,
      "uid": "Rache",
      "description": "Bei einem Zusammentreffen mit den Kultisten verlor Orveyl sein linkes Vorderbein und viele Freunde."
    },
    {
      "source": "Parmigianino",
      "target": "Smasher",
      "episode": 0,
      "value": 2,
      "uid": "Rache",
      "description": "Smasher ist für die Zerstörung von Ninos Kloster verantwortlich. Seit dem Vorfall wird Meister Hoshi vermisst und Nino hat Rache geschworen."
    },
    {
      "source": "Smasher",
      "target": "Kult der Maschinenmutter",
      "episode": 0,
      "value": 2,
      "uid": "General",
      "description": "Laserbeam ist einer der Anführer des Kults"
    },
    {
      "source": "Laserbeam",
      "target": "Kult der Maschinenmutter",
      "uid": "General",
      "description": "Laserbeam ist einer der Anführer des Kults",
      "episode": 0,
      "value": 2
    },
    {
      "source": "Laserbeam",
      "target": "Wrakenberg",
      "uid": "Überfall",
      "description": "Laserbeam hat versucht das Dorf Wrakenberg zu überfallen",
      "episode": 3,
      "value": 1
    },
    {
      "source": "Tadamir",
      "target": "Wrakenberg",
      "uid": "Bürgermeister",
      "description": "Durch unlautere politische Tricks ist Tadamir zum reisenden Bürgermeister des Dorfes geworden.",
      "episode": 5,
      "value": 1
    },
    {
      "source": "Smasher",
      "target": "Laserbeam",
      "episode": 0,
      "value": 3
    },
    {
      "source": "Bhavin",
      "target": "Jin",
      "episode": 0,
      "value": 3,
      "uid": "Schicksalhafte Begegnung",
      "description": "Bhavin ist seinem Geist gefolgt und hat dabei den beinahe toten Jin gefunden. Er hat es als Zeichen gedeutet, dass er Jin finden und das Leben retten sollte. Seitdem ist er mit ihm unterwegs, um zu erfahren, was das Schicksal mit ihm vorhat."
    },
    {
      "source": "Jin",
      "target": "Liliana",
      "episode": 12,
      "value": 1
    },
    {
      "source": "Tadamir",
      "target": "Leoric",
      "episode": 0,
      "value": 4
    },
    {
      "source": "Tadamir",
      "target": "Liliana",
      "episode": 12,
      "value": 1
    },
    {
      "source": "Die Spielzeugsoldaten",
      "target": "Gorev",
      "episode": 11,
      "value": 2
    },
    {
      "source": "Die Spielzeugsoldaten",
      "target": "Sandra",
      "episode": 11,
      "value": 2
    },
    {
      "source": "Die Spielzeugsoldaten",
      "target": "Amanda",
      "episode": 11,
      "value": 2
    },
    {
      "source": "Die Spielzeugsoldaten",
      "target": "Ton",
      "episode": 11,
      "value": 2
    },
    {
      "source": "Sandra",
      "target": "Tadamir",
      "episode": 18,
      "value": 2
    },
    {
      "source": "Sandra",
      "target": "Gorev",
      "episode": 11,
      "value": 3
    },
    {
      "source": "Amanda",
      "target": "Gorev",
      "episode": 12,
      "value": 3
    },
    {
      "source": "Ton",
      "target": "Gorev",
      "episode": 12,
      "value": 3
    },
    {
      "source": "Bhavin",
      "target": "Ton",
      "episode": 12,
      "value": 1
    },
    {
      "source": "Jin",
      "target": "Titania",
      "episode": 1,
      "value": 2
    },
    {
      "source": "Jin",
      "target": "Titanias Schatten",
      "episode": 17,
      "value": 2
    },
    {
      "source": "Alba",
      "target": "Titania",
      "episode": 16,
      "value": 2
    },
    {
      "source": "Titanias Schatten",
      "target": "Titania",
      "episode": 17,
      "value": 3
    },
    {
      "source": "Orveyl",
      "target": "Lajak",
      "episode": 1,
      "value": 2
    },
    {
      "source": "Orveyl",
      "target": "Koalak",
      "episode": 1,
      "value": 2,
      "uid": "Alte Freunde",
      "description": "Koalak half Orveyl nach dem Verlust seines Beins mit einer künstlichen Prothese"
    },
    {
      "source": "Tadamir",
      "target": "Dryasis",
      "episode": 12,
      "value": 1
    },
    {
      "source": "Loxxkatron",
      "target": "Gorev",
      "episode": 11,
      "value": 2
    },
    {
      "source": "Loxxkatron",
      "target": "Hauptmann David",
      "episode": 10,
      "value": 1
    },
    {
      "source": "Tadamir",
      "target": "Grace",
      "episode": 18,
      "value": 2
    },
    {
      "source": "Bhavin",
      "target": "Grace",
      "episode": 12,
      "value": 1
    },
    {
      "source": "Parmigianino",
      "target": "Grace",
      "episode": 12,
      "value": 1
    },
    {
      "source": "Jin",
      "target": "Clint",
      "episode": 9,
      "value": 1,
      "uid": "Sterbehilfe",
      "description": "Jin hat Clint seine Hilfe angeboten, falls er sterben wollte. Clint hat das Angebot ausgeschlagen und sich kurz darauf erschossen."
    },
    {
      "source": "Alba",
      "target": "Osmonias",
      "episode": 16,
      "value": 1,
      "uid": "Spurensuche",
      "description": "Auf der Suche nach altem Wissen ist Alba auf eine Spur zu einem der Alten gestoßen."
    },
    {
      "source": "Alba",
      "target": "Gorev",
      "episode": 20,
      "value": 1,
      "uid": "Deal",
      "description": "Um den Riesen zu erwecken, ist Alba einen Deal mit Gorev eingegangen."
    },
    {
      "source": "Tadamir",
      "target": "Gorev",
      "episode": 20,
      "value": 4,
      "uid": "Blutpakt",
      "description": "Tadamir ist einen Blutpakt mit Gorev eingegangen, um gegen den Kult der Maschinenmutter in den Kampf zu ziehen."
    },
    {
      "source": "Tadamir",
      "target": "Tinka",
      "episode": 18,
      "value": 1,
      "uid": "Heimat",
      "description": "Tadamir ist in Tinka geboren und aufgewachsen."
    },
    {
      "source": "Grace",
      "target": "Tinka",
      "episode": 18,
      "value": 1,
      "uid": "Heimat",
      "description": "Grace war früher Gelehrte am Hof von Tinka."
    },
    {
      "source": "David Friedensbringer",
      "target": "Tinka",
      "episode": 21,
      "value": 2,
      "uid": "Heimat",
      "description": "David ist in Tinka geborgen und war Teil der Regierung der Republik."
    },
    {
      "source": "David Friedensbringer",
      "target": "Orveyl",
      "episode": 21,
      "value": 1,
      "uid": "Symbol",
      "description": "David will Orveyl zum Symbol des Widerstands gegen den Kult machen."
    },
    {
      "source": "Tadamir",
      "target": "Osmonias",
      "episode": 21,
      "value": 3,
      "uid": "Retter",
      "description": "Tadamir glaubt, dass er vom Maschinenpriester wieder zum Leben erweckt wurde."
    }
  ]
};