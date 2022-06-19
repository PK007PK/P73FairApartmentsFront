export function pathCheck(location: Location, slug?: string) {
    const locationArr = location.pathname.split('/');
    if (!slug && locationArr.length <= 2) {
        return true;
    }
    if (slug && locationArr.includes(slug)) {
        return true;
    }
}
