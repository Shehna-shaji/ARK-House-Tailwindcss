const slugToTitleDictionary={
    "ourhistory":"OUR HISTORY",
    "projects":"PROJECTS",
    "CentralSaintGiles":"CENTRAL SAINT GILES"
}

export const convertSlugToTitle=(slug)=>{
    return slugToTitleDictionary[slug]||
    slug.replace(/-/g,'')
    .split('')
    .map(word=>word.charAt(0).toUpperCase()+ word.slice(1))
    .join('')
}