import { useRef } from "react";
import styles from "./MovieCard.module.scss";

import { Eye, Trash2, Pencil } from "lucide-react";

import { Button } from "@/shared/ui";

// TODO: выделить этот компонент в entities/movie/ui/movie-card
export const MovieCard = () => {
  const genresRef = useRef<HTMLDivElement>(null);

  // TODO: выделить это в моки
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

  // TODO: 🚬 -_- переделать под компонент, возможно разделить
  return dataMovies.map((card, index) => (
    <article className={styles.movieCard} key={index}>
      <div className={styles.cover}>
        <img className={styles.cardImg} src={card.imgUrl} alt="movieCard" />
        <span className={styles.rating}>{card.rating}</span>
      </div>

      <div className={styles.cardDescription}>
        <div className={styles.wrapperTitle}>
          <h3 className={styles.cardTitle}>{card.title}</h3>
          <span className={styles.yearOfRelease}>{card.yearOfRelease}</span>
        </div>

        <div className={styles.genresWrapper} ref={genresRef}>
          {card.genres.map((genre, index) => (
            <span className={styles.genres} key={index}>
              {genre}
            </span>
          ))}
        </div>

        <p className={styles.description}>{card.description}</p>

        <div className={styles.btnsContainer}>
          <Button>
            <Eye className={styles.iconEye} size={16} />
            Подробнее
          </Button>

          <div className={styles.controlMovieCard}>
            <Button>
              <Pencil className={styles.iconPencil} size={16} />
            </Button>

            <Button>
              <Trash2 className={styles.iconTrash2} size={16} />
            </Button>
          </div>
        </div>
      </div>
    </article>
  ));
};
