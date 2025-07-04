import { useRef, useEffect, useState } from "react"
import { useHandleClickOutside } from "@/shared/lib/useHandleClickOutside"
import { SidebarInput } from "@/shared/ui/SidebarInput/SidebarInput"
import { Button } from "@/shared/ui/Button/Button"
import { Trash2, Plus, Pencil, Check } from "lucide-react"
import styles from "../ui/UserFolders.module.scss"
import { useTranslation } from "react-i18next"

interface Folder {
  id: number
  name: string
}

interface UserFoldersProps {
  selectedId: string | number
  onSelect: (id: number) => void
}

export const UserFolders: React.FC<UserFoldersProps> = ({ selectedId, onSelect }) => {
  const { t } = useTranslation()

  const [folders, setFolders] = useState<Folder[]>([])
  const [isAdding, setIsAdding] = useState(false)
  const [newFolderName, setNewFolderName] = useState("")
  const [editingFolderId, setEditingFolderId] = useState<number | null>(null)
  const [editedName, setEditedName] = useState("")

  const inputRef = useRef<HTMLInputElement | null>(null)
  const inputWrapperRef = useRef<HTMLDivElement | null>(null)

  const editRef = useRef<HTMLInputElement | null>(null)
  const editWrapperRef = useRef<HTMLDivElement | null>(null)

  const handleCancelAdd = () => {
    setIsAdding(false)
    setNewFolderName("")
  }

  const resetEditState = () => {
    setEditingFolderId(null)
    setEditedName("")
  }

  useHandleClickOutside(inputWrapperRef, isAdding, handleCancelAdd)
  useHandleClickOutside(editWrapperRef, !!editingFolderId, resetEditState)

  useEffect(() => {
    if (isAdding) inputRef.current?.focus()
  }, [isAdding])

  useEffect(() => {
    if (editingFolderId !== null) editRef.current?.focus()
  }, [editingFolderId])

  const isNameValid = (name: string) => name.trim().length >= 1 && name.trim().length <= 20

  const isValid = isNameValid(newFolderName)
  const isEditValid = isNameValid(editedName)

  const handleAddClick = () => setIsAdding(true)

  const handleConfirmAdd = () => {
    if (!isValid) return
    const newId = Date.now()
    setFolders(prev => [...prev, { id: newId, name: newFolderName.trim() }])
    setNewFolderName("")
    setIsAdding(false)
  }

  const handleRemove = (id: number) => {
    setFolders(prev => prev.filter(folder => folder.id !== id))
  }

  const startEditing = (id: number, currentName: string) => {
    setEditingFolderId(id)
    setEditedName(currentName)
  }

  const handleConfirmEdit = () => {
    if (!isEditValid || editingFolderId === null) return
    setFolders(prev =>
      prev.map(folder =>
        folder.id === editingFolderId ? { ...folder, name: editedName.trim() } : folder
      )
    )
    resetEditState()
  }

  return (
    <>
      <ul>
        {folders.map(folder => {
          const isEditing = editingFolderId === folder.id

          return (
            <li
              key={folder.id}
              className={`${styles.item} ${selectedId === folder.id ? styles.select : ""}`}
              onClick={() => {
                if (!isEditing) onSelect(folder.id)
              }}
            >
              {isEditing ? (
                <SidebarInput
                  value={editedName}
                  onChange={setEditedName}
                  onClick={handleConfirmEdit}
                  placeholder={t("Edit folder name")}
                  inputRef={editRef as any}
                  buttonTitle={!isEditValid ? t("nameValidationError") : ""}
                  icon={<Check size={22} color="#f2f2f2" strokeWidth={3} />}
                  ref={editWrapperRef}
                />
              ) : (
                <div
                  className={`${styles.folderItem} ${
                    selectedId === folder.id ? styles.selected : ""
                  }`}
                >
                  <span className={styles.folderName}>{folder.name}</span>
                  <div className={styles.folderActions}>
                    <Button
                      variant="btnEditFolder"
                      onClick={e => {
                        e.stopPropagation()
                        startEditing(folder.id, folder.name)
                      }}
                    >
                      <Pencil size={16} />
                    </Button>
                    <Button
                      variant="btnDeleteFolder"
                      onClick={e => {
                        e.stopPropagation()
                        handleRemove(folder.id)
                      }}
                    >
                      <Trash2 size={16} />
                    </Button>
                  </div>
                </div>
              )}
            </li>
          )
        })}
      </ul>

      {isAdding ? (
        <div ref={inputWrapperRef}>
          <SidebarInput
            value={newFolderName}
            onChange={setNewFolderName}
            onClick={handleConfirmAdd}
            placeholder={t("Folder Name")}
            inputRef={inputRef as any}
            buttonTitle={!isValid ? t("nameValidationError") : ""}
            icon={<Plus size={22} color="#f2f2f2" strokeWidth={3} />}
          />
        </div>
      ) : (
        <Button variant="btnAdd" onClick={handleAddClick}>
          <Plus size={18} />
          {t("newFolder")}
        </Button>
      )}
    </>
  )
}