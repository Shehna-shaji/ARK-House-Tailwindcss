const slugToTitleDictionary={
    "ourhistory":"OUR HISTORY",
    "projects":"PROJECTS",
}

export const convertSlugToTitle=(slug)=>{
    return slugToTitleDictionary[slug]||
    slug.replace(/-/g,'')
    .split('')
    .map(word=>word.charAt(0).toUpperCase()+ word.slice(1))
    .join('')
}