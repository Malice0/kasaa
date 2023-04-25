import '../../Styles/Collapse.css'
import { useState } from 'react'
import DropDownClose from '../../assets/dropdown.svg'

export default function Aboutcollapse({ title, content }) {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <h2 className="collapseTitle" onClick={() => setIsOpen(!isOpen)}>
                {title}
                <img
                    className={isOpen ? 'arrow arrowUp' : 'arrow arrowDown'}
                    src={DropDownClose}
                    alt="montrer le contenu"
                />
            </h2>
            <div
                className={isOpen ? 'collapseContent' : 'collapseContentHidden'}
            >
                {Array.isArray(content) ? (
                    content.map((item, index) => {
                        return (
                            <p
                                key={index}
                                className={
                                    isOpen
                                        ? 'collapseContentList'
                                        : 'collapseContentHidden'
                                }
                            >
                                {item}
                            </p>
                        )
                    })
                ) : (
                    <p
                        className={
                            isOpen ? 'collapseContent' : 'collapseContentHidden'
                        }
                    >
                        {content}
                    </p>
                )}
            </div>
        </>
    )
}
