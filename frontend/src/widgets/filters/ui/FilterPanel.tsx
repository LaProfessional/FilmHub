import { useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { cn } from '@/shared/lib/utils'
import { GitPullRequestClosed, SlidersHorizontal } from 'lucide-react'
import { ChevronDown } from 'lucide-react'
import { Delete } from 'lucide-react'
import { CSSTransition, SwitchTransition } from 'react-transition-group'

import { dataFilter, type IMoviePeriods } from '@/pages/home/model/filterData'
import type { FilterHandle } from '@/widgets/filters/ui/Filter'

import { Filter } from '@/widgets/filters/ui/Filter'
import { Button } from '@/shared/ui'
import type { IFilters } from '@/hooks/useMovie'
import type { GenreId } from '@/constants/genres'

interface Props {
  onUpdateFilters: (value: Partial<IFilters>) => void;
}

export const FilterPanel = ({ onUpdateFilters }: Props) => {
  const { t } = useTranslation()
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const fieldsRef = useRef<HTMLDivElement>(null)

  const { dataYear, dataGenre, dataOptions } = dataFilter(t)

  const genreRef = useRef<FilterHandle>(null)
  const yearRef = useRef<FilterHandle>(null)
  const sortRef = useRef<FilterHandle>(null)

  const resetFilters = () => {
    genreRef.current?.reset()
    yearRef.current?.reset()
    sortRef.current?.reset()
  }

  const onChangePeriod = (value: string[]) => {
    onUpdateFilters({ period: value as IMoviePeriods[] })
  }

  const onChangeGenres = (value: string[]) => {
    const convertValues = value.map(item => +item)
    onUpdateFilters({ genres: convertValues as GenreId[] })
  }

  const nodeRef = useRef<HTMLDivElement>(null)

  return (
    <div className="" ref={fieldsRef}>
      <div className="" tabIndex={0}>
        <SwitchTransition>
          <CSSTransition
            key={isOpen ? 'A' : 'B'}
            nodeRef={nodeRef}
            addEndListener={(done: () => void) => {
              if (nodeRef.current) {
                nodeRef.current.addEventListener('transitionend', done, false)
              }
            }}
            classNames="fade"
            timeout={200}>
            <div ref={nodeRef}>
              {!isOpen ? (
                <Button onClick={() => setIsOpen(!isOpen)}
                        className="flex border-2 border-gray-500 p-2">
                  <SlidersHorizontal className="" />
                  <span className="">{t('Filters')}</span>
                  <ChevronDown className={cn('', isOpen && '')} />
                </Button>
              ) : (
                <section className={cn('flex gap-2')} ref={nodeRef}>
                  <Filter
                    ref={genreRef}
                    data={dataGenre}
                    className={cn('w-40')}
                    allLabel="Все жанры"
                    isAllOption={true}
                    onChange={onChangeGenres}
                    dropdownTitle={'Жанры'}
                    isMulti={true}
                  />
                  <Filter
                    ref={yearRef}
                    data={dataYear}
                    className={cn('w-40')}
                    onChange={onChangePeriod}
                    dropdownTitle={'Year of release'}
                  />
                  <Filter
                    ref={sortRef}
                    data={dataOptions}
                    className={cn('w-40')}
                    onChange={onChangePeriod}
                    dropdownTitle={'Sort by'}
                  />
                  <Button onClick={resetFilters}>
                    <Delete className="" />
                    {t('Reset all')}
                  </Button>
                  <Button onClick={() => {
                    setIsOpen(false)
                  }}>
                    <GitPullRequestClosed />
                  </Button>
                </section>
              )}
            </div>
          </CSSTransition>
        </SwitchTransition>
      </div>
    </div>
  )
}
