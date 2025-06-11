import styles from "./MovieCard.module.scss";
// import { useTranslation } from "react-i18next";

import { Eye, Trash2, Pencil } from "lucide-react";

export const MovieCard = () => {
    // const { t } = useTranslation();

    const dataMovies = [
        {
            imgUrl: "https://avatars.mds.yandex.net/get-ott/223007/2a000001616b87d3b67c76b578d1a2fd821b/orig",
            title: "Последний дом слева",
            Genres: [ "триллер", "ужасы" ],
            description: `Мама, папа и дочь отправляются в загородный дом, чтобы счастливо провести выходные дни.
            Сначала кажется удивительным, что дочь-подросток соглашается провести свободное время подобным образом.`,
            yearOfRelease: 2010,
            rating: 6.8,
        },
        {
            imgUrl: "https://avatars.mds.yandex.net/get-ott/223007/2a000001616b87d3b67c76b578d1a2fd821b/orig",
            title: "Последний дом слева",
            Genres: [ "триллер", "ужасы" ],
            description: `Мама, папа и дочь отправляются в загородный дом, чтобы счастливо провести выходные дни.
            Сначала кажется удивительным, что дочь-подросток соглашается провести свободное время подобным образом.`,
            yearOfRelease: 2010,
            rating: 6.8,
        },
        {
            imgUrl: "https://avatars.mds.yandex.net/get-ott/223007/2a000001616b87d3b67c76b578d1a2fd821b/orig",
            title: "Последний дом слева",
            Genres: [ "триллер", "ужасы" ],
            description: `Мама, папа и дочь отправляются в загородный дом, чтобы счастливо провести выходные дни.
            Сначала кажется удивительным, что дочь-подросток соглашается провести свободное время подобным образом.`,
            yearOfRelease: 2010,
            rating: 6.8,
        },
        {
            imgUrl: "https://avatars.mds.yandex.net/get-ott/223007/2a000001616b87d3b67c76b578d1a2fd821b/orig",
            title: "Последний дом слева",
            Genres: [ "триллер", "ужасы" ],
            description: `Мама, папа и дочь отправляются в загородный дом, чтобы счастливо провести выходные дни.
            Сначала кажется удивительным, что дочь-подросток соглашается провести свободное время подобным образом.`,
            yearOfRelease: 2010,
            rating: 6.8,
        },
        {
            imgUrl: "https://avatars.mds.yandex.net/get-ott/223007/2a000001616b87d3b67c76b578d1a2fd821b/orig",
            title: "Последний дом слева",
            Genres: [ "триллер", "ужасы" ],
            description: `Мама, папа и дочь отправляются в загородный дом, чтобы счастливо провести выходные дни.
            Сначала кажется удивительным, что дочь-подросток соглашается провести свободное время подобным образом.`,
            yearOfRelease: 2010,
            rating: 6.8,
        },
        {
            imgUrl: "https://avatars.mds.yandex.net/get-ott/223007/2a000001616b87d3b67c76b578d1a2fd821b/orig",
            title: "Последний дом слева",
            Genres: [ "триллер", "ужасы" ],
            description: `Мама, папа и дочь отправляются в загородный дом, чтобы счастливо провести выходные дни.
            Сначала кажется удивительным, что дочь-подросток соглашается провести свободное время подобным образом.`,
            yearOfRelease: 2010,
            rating: 6.8,
        },
        {
            imgUrl: "https://avatars.mds.yandex.net/get-ott/223007/2a000001616b87d3b67c76b578d1a2fd821b/orig",
            title: "Последний дом слева",
            Genres: [ "триллер", "ужасы" ],
            description: `Мама, папа и дочь отправляются в загородный дом, чтобы счастливо провести выходные дни.
            Сначала кажется удивительным, что дочь-подросток соглашается провести свободное время подобным образом.`,
            yearOfRelease: 2010,
            rating: 6.8,
        },
        {
            imgUrl: "https://avatars.mds.yandex.net/get-ott/223007/2a000001616b87d3b67c76b578d1a2fd821b/orig",
            title: "Последний дом слева",
            Genres: [ "триллер", "ужасы" ],
            description: `Мама, папа и дочь отправляются в загородный дом, чтобы счастливо провести выходные дни.
            Сначала кажется удивительным, что дочь-подросток соглашается провести свободное время подобным образом.`,
            yearOfRelease: 2010,
            rating: 6.8,
        },
    ];

    return (
        dataMovies.map((card, index) =>
            <article className={ styles.movieCard } key={ index }>
                <div className={ styles.cover }>
                    <img className={ styles.cardImg } src={ card.imgUrl } alt="movieCard"/>
                    <span className={ styles.rating }>{ card.rating }</span>
                </div>

                <div className={ styles.cardDescription }>
                    <div className={ styles.wrapperTitle }>
                        <h3 className={ styles.cardTitle }>{ card.title }</h3>
                        <span className={ styles.yearOfRelease }>{ card.yearOfRelease }</span>
                    </div>

                    <div className={ styles.genresWrapper }>
                        <span className={ styles.genres }>{ card.Genres.map((genre) => genre) }</span>
                    </div>

                    <p className={ styles.description }>{ card.description }</p>

                    <div className={ styles.btnsContainer }>
                        <button className={ styles.btnMore }>
                            <Eye className={ styles.iconEye }/>
                            Подробнее
                        </button>

                        <button className={ styles.btnEditMovieCard }>
                            <Pencil className={ styles.iconPencil }/>
                        </button>

                        <button className={ styles.btnDeleteMovieCard }>
                            <Trash2 className={ styles.iconTrash2 }/>
                        </button>
                    </div>
                </div>
            </article>
        )
    );
};
