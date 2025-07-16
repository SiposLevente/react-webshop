import { useEffect, useState } from "react"

const TagButton = ({ children, selectedTags }) => {
    const [clicked, setClicked] = useState(false)
    const clickedStyle = "lightblue"
    const unClickedStyle = "white"

    const [style, setStyle] = useState({ backgroundColor: unClickedStyle })

    const selectTag = (tag) => {
        selectedTags.tagsSelected.includes(tag) ? selectedTags.setTagsSelected(selectedTags.tagsSelected.filter(t => t !== tag)) : selectedTags.setTagsSelected([...selectedTags.tagsSelected, tag])
        setClicked(!clicked)
    }

    useEffect(() => {
        setStyle(clicked ? { backgroundColor: clickedStyle } : { backgroundColor: unClickedStyle })
    }, [clicked])

    return (
        <button style={style} onClick={() => selectTag(children)} id='tag-element'>{children}</button>
    )
}

export default TagButton