import { useRef } from "react";

import { Eye, Trash2, Pencil } from "lucide-react";

import { Button } from "@/shared/ui";

export const MovieCard = () => {
  const genresRef = useRef<HTMLDivElement>(null);

  const dataMovies = [
    {
      imgUrl:
        "https://avatars.mds.yandex.net/get-ott/223007/2a000001616b87d3b67c76b578d1a2fd821b/orig",
      title: "Последний дом слева",
      genres: ["ужасы", "триллер"],
      description: `Семейная пара с дочерью отправляется отдохнуть в загородный дом. Их спокойные выходные превращаются в кошмар, когда дочь знакомится с парнем, члены его криминальной семьи проникают в дом, и насилие приводит к кровавой мести родителей.`,
      yearOfRelease: 2009,
      rating: 6.5,
    },
    {
      imgUrl:
        "https://yastatic.net/naydex/yandex-search/vajxf6103/06ed97hkk/ArN1Rrb9ikuLassIWez1JThBV-RUlDXK-N4lGntvkisTlM_AZj6noktW27vZbhuj5bXBrVzySNYqM410dK5lWGY_jF7SSTv3O_J6jPVMUZGURGvkUNFo7qTb7fA",
      title: "Майнкрафт фильм",
      genres: ["фэнтези", "приключения"],
      description: `Группа неудачников попадает через портал в кубический мир Minecraft. Им предстоит объединиться с экпертами, включая Стива, и отправиться в эпическое приключение, чтобы спасти мир от погибели.`,
      yearOfRelease: 2025,
      rating: 7.0,
    },
    {
      imgUrl: "https://ir.ozone.ru/s3/multimedia-0/c1000/6705984204.jpg",
      title: "Астрал",
      genres: ["ужасы", "триллер"],
      description: `Семья переезжает в новый дом, где их старший сын внезапно впадает в кому. Вскоре родители сталкиваются с паранормальными явлениями, и начинаются события, угрожающие их жизни и психике.`,
      yearOfRelease: 2010,
      rating: 6.8,
    },
    {
      imgUrl:
        "https://sun9-46.userapi.com/impg/NQeTlwBgJ81U_EU6-6eZ9FswWckJm157l2vvqA/PBOpjwT27po.jpg?size=1079x1518&quality=95&sign=c5a0396e137b02d4b8c51cae35d0e4dc&c_uniq_tag=BgEymjljFc0DGooO9zIjFx7XeiCayqCnk4hVSixttTM&type=album",
      title: "1 + 1",
      genres: ["драма", "комедия"],
      description: `История необычной дружбы между парализованным аристократом и его сиделкой, происходящая во Франции. Фильм о доверии, преодолении и жизни с чувством юмора.`,
      yearOfRelease: 2011,
      rating: 8.4,
    },
    {
      imgUrl:
        "https://avatars.mds.yandex.net/get-ott/1672343/2a00000181710dc42f5805de8dcd43fa4a0f/orig",
      title: "Властелин конец: Две крепости",
      genres: ["фэнтези", "приключения"],
      description: `Эпическая битва народов Средиземья продолжается. Фродо и Сэм преодолевают опасности Мордора, а остальные герои сражаются в густых лесах и в крепостях за судьбу мира.`,
      yearOfRelease: 2002,
      rating: 8.7,
    },
    {
      imgUrl:
        "https://avatars.mds.yandex.net/get-ott/2419418/2a00000178db661f735e8c376668da7f5993/orig",
      title: "Титаник",
      genres: ["мелодрама", "драма", "катастрофа", "катастрофа"],
      description: `История любви между аристократкой и бедным художником на борту "непотопляемого" лайнера, чьи мечты разбиваются в ночь судьбоносной катастрофы.`,
      yearOfRelease: 1997,
      rating: 7.8,
    },
    {
      imgUrl:
        "https://yastatic.net/naydex/yandex-search/vajxf6007/06ed97hkk/ArN1Rrb9ikuLassIWez1JThBV-RUlDXK-N4lGntvkisTlM_AZj6noktW16_ZYh-L5aHZtXTGWNo2E-yF4LZkeNIWOXZOSUP3N4Y6-Jl0aY1IJFfMVKQxnrhz7",
      title: "Зелёная комната",
      genres: ["триллер", "криминал"],
      description: `Панк‑группа становится свидетелем жестокого убийства в отдалённом клубе. Они заперты в "зелёной комнате" — дыни издевательств и смертельной опасности — без шанса на спасение.`,
      yearOfRelease: 2015,
      rating: 7.0,
    },
    {
      imgUrl:
        "https://yastatic.net/naydex/yandex-search/vajxf6007/06ed97hkk/ArN1Rrb9ikuLassIWez1JThBV-RUlDXK-N4lGntvkisTlM_AZj6nokt6y6PNej-f5anloVzmfMY6M-yF4LZkeNIWOXZOSUP3N4Y6-Jl0aY1IJFfMVKQxnrhz7",
      title: "Платформа",
      genres: ["фантастика", "триллер", "ужасы"],
      description: `Антиутопический фильм: заключённые живут в многоэтажной башне, где платформа с едой опускается этаж за этажом. Чем ниже уровень, тем страшнее конкуренция за пищу и выживание.`,
      yearOfRelease: 2019,
      rating: 7.9,
    },
  ];

  return dataMovies.map((card, index) => (
    <article className="max-h-fit h-auto max-w-[290px]" key={index}>
      <div className="relative aspect-[2/3]">
        <img
          className="block w-full h-full object-cover rounded-t-[12px] rounded-b-[0] border-[1px] border-[#FFFFFF19] border-b-0"
          src={card.imgUrl}
          alt="movieCard"
        />
        <span className="absolute top-[10px] right-[10px] bg-[#f59e0b] rounded-[4px] text-amber-50 text-[12px] font-semibold py-0.5 px-1.5">
          {card.rating}
        </span>
      </div>

      <div className="border-[1px] border-[#FFFFFF19] rounded-t-[0] rounded-b-[12px] p-3">
        <div className="flex justify-between mb-2">
          <h3 className="max-w-[200px] overflow-ellipsis whitespace-nowrap overflow-hidden font-semibold text-[#fafafa]">
            {card.title}
          </h3>
          <span>{card.yearOfRelease}</span>
        </div>

        <div className="flex gap-[5px] mb-3 overflow-ellipsis overflow-hidden" ref={genresRef}>
          {card.genres.map((genre, index) => (
            <span
              className="leading-1 whitespace-nowrap text-[12px] text-[#fafafa] bg-[#1f2937] rounded-full py-[9px] px-[3px]"
              key={index}
            >
              {genre}
            </span>
          ))}
        </div>

        <p className=" relative text-ellipsis overflow-hidden [display:-webkit-box] [-webkit-line-clamp:3] [-webkit-box-orient:vertical] max-h-[60px] mb-3">
          {card.description}
        </p>

        <div className="flex justify-between items-center h-full max-h-[50px]">
          <Button>
            <Eye size={16} />
            Подробнее
          </Button>

          <div className="flex items-center gap-2">
            <Button>
              <Pencil size={16} />
            </Button>

            <Button>
              <Trash2 size={16} />
            </Button>
          </div>
        </div>
      </div>
    </article>
  ));
};
