import extractDomain from 'extract-domain';
/**
 * Custom Cookie Storage to store cookie across subdomains (used for oidc)
 */
class CookieStorage {
    public getItem(key) {
        const safeKey = encodeURIComponent(key);
        const value = document.cookie
            .split(';')
            .map(x => x.trim())
            .find((item) => item.startsWith(`${safeKey}=`));
        if (value) {
            return decodeURIComponent(value.split(`${safeKey}=`)[1]);
        }
    }
    public setItem(key, value) {
        const safeKey = encodeURIComponent(key);
        const domain = (location.hostname === "localhost" || location.hostname === "127.0.0.1")
            ? 'localhost'
            : `.${extractDomain(window.location.href)}`; // to be accessed from all subdomains
        document.cookie = `${safeKey}=${encodeURIComponent(value)};domain=${domain};path=/`;
    }
    public removeItem(key) {
        const safeKey = encodeURIComponent(key);
        document.cookie = `${safeKey}=; expires=Thu, 01 Jan 1970 00:00:00 GMT`;
    }
}

export default new CookieStorage();