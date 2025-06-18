import styles from './EmptyMovieCard.module.scss'
import { useTranslation } from 'react-i18next'

export const EmptyMovieCard = () => {
  const { t } = useTranslation()

  return (
    <article className={styles.emptyMovieCard}>
      <h2 className={styles.titleMovieCard}>{t('Add new movie')}</h2>
    </article>
  )
}
