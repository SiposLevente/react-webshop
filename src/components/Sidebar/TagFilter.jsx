import React, { useContext, useEffect, useState } from 'react'
import { FilterProvider, ShoeProvider } from '../../contexts'
import TagButton from './TagButton'

const TagFilter = () => {
    const shoes = useContext(ShoeProvider)
    const { filterSettings, setFilterSettings } = useContext(FilterProvider)

    const [tagsSelected, setTagsSelected] = useState([])
    const getUniqueTags = () => [...new Set(shoes.flatMap(shoe => shoe.tags || []))];

    useEffect(() => {
        setFilterSettings({ ...filterSettings, tags: tagsSelected })
    }, [tagsSelected])

    return (
        <div>
            <div id='sidebar-subsection'>Tags</div>
            <div id='tag-list'>
                {getUniqueTags().map((tag, index) => {
                    return <TagButton key={index} selectedTags={{ tagsSelected, setTagsSelected }}>{tag}</TagButton>
                })}
            </div>
        </div>
    )
}

export default TagFilter