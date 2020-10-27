export default function sortByProp(list, key, ascending) {
    const sortByType = typeof list[0][key];
    switch (sortByType) {
        case 'string':
            return sortByString(list, key, ascending);
        case 'number':
            return sortByNumber(list, key, ascending);
    }
}

export function sortByNumber(list, key, ascending) {
    return list.sort((a, b) => {
        return ascending
            ? a[key] - b[key]
            : b[key] - a[key];
    });
}

export function sortByString(list, key, ascending) {
    return list.sort((a, b) => {
        return ascending
            ? a[key].localeCompare(b[key], 'sv-SE', { numeric: true })
            : b[key].localeCompare(a[key], 'sv-SE', { numeric: true });
    });
}
