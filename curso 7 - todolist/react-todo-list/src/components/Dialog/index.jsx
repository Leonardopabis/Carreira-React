import { useEffect, useRef } from "react"
import "./dialog.style.css"

export function Dialog({ isOpen, onClose, children }) {

    // nao deveriamos fazer buscas no DOM desse jeito!
    // const dialog = document.querySelector('dialog')

    const dialogRef = useRef(null)

    useEffect(() => {
        console.log('deveríamos mostrar a modal?', isOpen)
        if (isOpen) {
            openDialog()
        } else {
            closeDialog()
        }
    }, [isOpen])

    const openDialog = () => {
        dialogRef.current.showModal()
    }

    const closeDialog = () => {
        dialogRef.current.close()
    }

    return (
        <>
        <dialog ref={dialogRef} className="dialog">
            <div className="btn-close-wrapper">
                <button autoFocus onClick={onClose} className="btn-close">
                    <IconClose />
                </button>
            </div>
            {children}
        </dialog>
        </>
    )
}